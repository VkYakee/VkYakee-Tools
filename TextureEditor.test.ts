import test from 'node:test';
import assert from 'node:assert/strict';
import {
  hexToRgba,
  rgbaToHex,
  plotBresenhamLine,
  floodFillBuffer,
  buildMojangTextureUrl,
} from './TextureEditor.js';
import {
  HOLOPRINT_AUTHOR,
  HOLOPRINT_REPO_URL,
  partitionMaterialCount,
  computeStructureMaterialList,
  buildHoloPrintManifest,
  buildHoloPrintLangFile,
  buildHologramGeoJson,
  encodeMcstructureToArrayBuffer,
  parseMcstructureArrayBuffer,
  buildZipArchive,
  readZipEntries,
  buildStructureGlbBuffer,
  findLinksInDescription,
  getDefaultPackName,
  getPresetStructures,
} from './HoloPrintTool.js';

test('hexToRgba and rgbaToHex convert colors accurately', () => {
  const rgba = hexToRgba('#10b981');
  assert.deepEqual(rgba, { r: 16, g: 185, b: 129, a: 255 });
  assert.equal(rgbaToHex(rgba.r, rgba.g, rgba.b), '#10B981');

  const shortRgba = hexToRgba('#f0a');
  assert.deepEqual(shortRgba, { r: 255, g: 0, b: 170, a: 255 });
});

test('plotBresenhamLine interpolates continuous pixel coordinates without gaps', () => {
  const line = plotBresenhamLine(0, 0, 4, 4);
  assert.equal(line.length, 5);
  assert.deepEqual(line[0], { x: 0, y: 0 });
  assert.deepEqual(line[4], { x: 4, y: 4 });
});

test('floodFillBuffer fills connected region iteratively without recursion overflow', () => {
  const width = 4;
  const height = 4;
  const data = new Uint8ClampedArray(width * height * 4);

  for (let y = 0; y < height; y++) {
    const idx = (y * width + 2) * 4;
    data[idx] = 255;
    data[idx + 1] = 255;
    data[idx + 2] = 255;
    data[idx + 3] = 255;
  }

  const fillColor = { r: 94, g: 141, b: 52, a: 255 };
  const changed = floodFillBuffer(data, width, height, 0, 0, fillColor);
  assert.equal(changed, true);
  assert.equal(data[0], 94);
  assert.equal(data[(0 * width + 2) * 4], 255);
  assert.equal(data[(0 * width + 3) * 4 + 3], 0);
});

test('floodFillBuffer handles 64x64 full canvas without stack overflow', () => {
  const width = 64;
  const height = 64;
  const data = new Uint8ClampedArray(width * height * 4);
  const fillColor = { r: 200, g: 100, b: 50, a: 255 };

  const changed = floodFillBuffer(data, width, height, 32, 32, fillColor);
  assert.equal(changed, true);
  assert.equal(data[0], 200);
  assert.equal(data[(64 * 64 - 1) * 4], 200);
});

test('buildMojangTextureUrl constructs exact Mojang bedrock-samples URL', () => {
  assert.equal(
    buildMojangTextureUrl('stone'),
    'https://raw.githubusercontent.com/Mojang/bedrock-samples/main/resource_pack/textures/blocks/stone.png'
  );
});

test('HoloPrint metadata uses VkYakee and contains no legacy author references', () => {
  assert.equal(HOLOPRINT_AUTHOR, 'VkYakee');
  assert.equal(HOLOPRINT_REPO_URL, 'https://github.com/VkYakee/holoprint');

  const manifest = buildHoloPrintManifest({
    packName: 'Mi_Castillo',
    authors: ['VkYakee'],
    description: 'Visita mi canal https://youtube.com/@VkYakee',
  });
  assert.equal(manifest.header.name, 'Mi_Castillo');
  assert.equal(manifest.metadata.authors.includes('VkYakee'), true);
  assert.equal(manifest.metadata.url, 'https://github.com/VkYakee/holoprint');
  assert.equal(JSON.stringify(manifest).includes('SuperLlama88888'), false);
  assert.equal(manifest.settings.length, 3);

  const presets = getPresetStructures();
  const matSummary = computeStructureMaterialList(presets.casa_medieval);
  const esLang = buildHoloPrintLangFile('es_ES', { packName: 'Mi_Castillo', authors: ['VkYakee'] }, matSummary);
  assert.equal(esLang.includes('VkYakee'), true);
  assert.equal(esLang.includes('SuperLlama88888'), false);
});

test('HoloPrint partitionMaterialCount computes stacks and shulker boxes accurately', () => {
  const small = partitionMaterialCount(42);
  assert.equal(small.formatted, '42');

  const medium = partitionMaterialCount(100);
  assert.equal(medium.stacks, 1);
  assert.equal(medium.remainder, 36);
  assert.equal(medium.formatted, '100 (1s + 36)');

  const large = partitionMaterialCount(1800);
  assert.equal(large.shulkers, 1);
  assert.equal(large.stacks, 1);
  assert.equal(large.remainder, 8);
});

test('HoloPrint NBT .mcstructure binary encoder and parser round-trip accurately', () => {
  const presets = getPresetStructures();
  const original = presets.faro_redstone;
  const arrayBuffer = encodeMcstructureToArrayBuffer(original);
  const decoded = parseMcstructureArrayBuffer(arrayBuffer);

  assert.equal(decoded.width, original.width);
  assert.equal(decoded.height, original.height);
  assert.equal(decoded.depth, original.depth);
  assert.equal(decoded.palette.length, original.palette.length);
  assert.deepEqual(decoded.indices, original.indices);
});

test('HoloPrint buildZipArchive, readZipEntries, and buildStructureGlbBuffer work end-to-end', async () => {
  const presets = getPresetStructures();
  const geo = buildHologramGeoJson(presets.faro_redstone, 0.95);
  assert.equal(geo.format_version, '1.16.0');
  assert.equal(geo['minecraft:geometry'][0].description.identifier, 'geometry.holoprint.hologram_0');

  const zipBytes = buildZipArchive([
    { path: 'manifest.json', data: JSON.stringify({ author: 'VkYakee' }) },
  ]);
  assert.equal(zipBytes[0], 0x50);
  assert.equal(zipBytes[1], 0x4b);

  const entries = await readZipEntries(zipBytes.buffer);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].filename, 'manifest.json');

  const glbBuffer = buildStructureGlbBuffer(presets.faro_redstone);
  const glbView = new DataView(glbBuffer);
  assert.equal(glbView.getUint32(0, true), 0x46546c67); // 'glTF'

  const links = findLinksInDescription('Canal:\nhttps://example.com/vkyakee');
  assert.equal(links.length, 1);
  assert.equal(links[0][1], 'https://example.com/vkyakee');
  assert.equal(getDefaultPackName([{ fileName: 'castillo.holoprint.mcstructure' }]), 'castillo');
});

import {
  javaToBedrockBlock,
  bedrockToJavaBlock,
  buildPresetVoxelModel,
  transformVoxelModel,
  encodeToMcstructure,
  encodeToSpongeSchem,
  encodeToVanillaJavaNbt,
  encodeToWavefrontObj,
  encodeToAsciiStl,
  encodeToGlbBinary,
  parseBinaryNBT,
  normalizeNbtToVoxelModel,
} from './SchematicConverter.js';

test('SchematicConverter translates Java <-> Bedrock blocks and block states via GeyserMC dictionary', () => {
  const toBedrock = javaToBedrockBlock('minecraft:stone_bricks[facing=north,half=top]');
  assert.equal(toBedrock.name, 'minecraft:stonebrick');
  assert.equal(toBedrock.wasTranslated, true);
  assert.equal(toBedrock.states.facing_direction, 2);
  assert.equal(toBedrock.states.upside_down_bit, 1);

  const toJava = bedrockToJavaBlock('minecraft:grass_path', { facing_direction: 5 });
  assert.equal(toJava.name, 'minecraft:dirt_path');
  assert.equal(toJava.wasTranslated, true);
  assert.equal(toJava.properties.facing, 'east');
  assert.equal(toJava.fullState, 'minecraft:dirt_path[facing=east]');
});

test('SchematicConverter encodes and decodes .mcstructure, .schem, and .nbt bidirectionally', async () => {
  const model = buildPresetVoxelModel('redstone_tower');

  // 1. Bedrock .mcstructure round-trip
  const mcstructBytes = encodeToMcstructure(model);
  const parsedMcstructNbt = parseBinaryNBT(mcstructBytes, true);
  const restoredFromBedrock = normalizeNbtToVoxelModel(parsedMcstructNbt, 'mcstructure', 'restored_bedrock');
  assert.deepEqual(restoredFromBedrock.size, [7, 8, 7]);
  assert.equal(restoredFromBedrock.palette.some((p) => p.name === 'minecraft:stonebrick'), true);

  // 2. Java Sponge .schem round-trip (uncompressed for direct binary verification)
  const schemBytes = await encodeToSpongeSchem(model, false);
  const parsedSchemNbt = parseBinaryNBT(schemBytes, false);
  const restoredFromSchem = normalizeNbtToVoxelModel(parsedSchemNbt, 'schem', 'restored_schem');
  assert.deepEqual(restoredFromSchem.size, [7, 8, 7]);

  // 3. Vanilla Java .nbt round-trip
  const nbtBytes = await encodeToVanillaJavaNbt(model, false);
  const parsedJavaNbt = parseBinaryNBT(nbtBytes, false);
  const restoredFromNbt = normalizeNbtToVoxelModel(parsedJavaNbt, 'nbt', 'restored_nbt');
  assert.deepEqual(restoredFromNbt.size, [7, 8, 7]);
});

test('SchematicConverter transforms geometry (rotateY90, hollow) and exports .obj, .stl, and .glb', () => {
  const model = buildPresetVoxelModel('portal_ruin');
  const rotated = transformVoxelModel(model, { rotateY90: true, hollow: true });
  assert.deepEqual(rotated.size, [8, 8, 8]);

  const objBytes = encodeToWavefrontObj(rotated);
  const objText = new TextDecoder().decode(objBytes);
  assert.equal(objText.includes('VkYakee Universal Schematic Converter (.obj)'), true);
  assert.equal(objText.includes('\nv '), true);
  assert.equal(objText.includes('\nf '), true);

  const stlBytes = encodeToAsciiStl(rotated);
  const stlText = new TextDecoder().decode(stlBytes);
  assert.equal(stlText.startsWith('solid '), true);
  assert.equal(stlText.includes('facet normal'), true);

  const glbBytes = encodeToGlbBinary(rotated, false);
  const view = new DataView(glbBytes.buffer);
  assert.equal(view.getUint32(0, true), 0x46546c67); // 'glTF'
});

import {
  deepMergeBedrockJson,
  mergePackHierarchy,
  buildDemoPacksInMemory,
  buildMergedManifest,
  compressMergedPackToBytes,
  readPackZipEntries,
  getTextureVariants,
  removeVariantFromTerrainJson,
} from './TexturePackMerger.js';
import {
  getTextureVariants as getEditorTextureVariants,
  computeSymmetryPoints,
  expandBrushFootprint,
  flattenLayersBuffers,
  computeTwoFingerGesture,
} from './TextureEditor.js';

test('TexturePackMerger deepMergeBedrockJson combines terrain_texture.json and item_texture.json non-destructively', () => {
  const packB = {
    resource_pack_name: 'nature_pack',
    texture_name: 'atlas.terrain',
    texture_data: {
      dirt: { textures: 'textures/blocks/dirt_hd' },
      stone: { textures: 'textures/blocks/stone_mossy' },
    },
  };
  const packA = {
    resource_pack_name: 'pvp_pack',
    texture_name: 'atlas.terrain',
    texture_data: {
      stone: { textures: 'textures/blocks/stone_pvp' },
      diamond_ore: { textures: 'textures/blocks/diamond_ore_outlined' },
    },
  };

  // Pack A has higher priority than Pack B
  const merged = deepMergeBedrockJson(packB, packA);
  assert.equal(merged.texture_data.dirt.textures, 'textures/blocks/dirt_hd');
  assert.equal(merged.texture_data.diamond_ore.textures, 'textures/blocks/diamond_ore_outlined');
  // Higher-priority Pack A overrides stone while preserving dirt from Pack B
  assert.equal(merged.texture_data.stone.textures, 'textures/blocks/stone_pvp');
});

test('TexturePackMerger mergePackHierarchy combines variations arrays across packs, merges flipbook_textures.json, and generates unique manifest.json', async () => {
  const demoPacks = buildDemoPacksInMemory();
  // Priority 1: Pack A (PvP), Priority 2: Pack B (Nature)
  const mergedMap = mergePackHierarchy(demoPacks, { name: 'Pack Fusionado Test' });

  assert.equal(mergedMap.has('manifest.json'), true);
  assert.equal(mergedMap.has('textures/terrain_texture.json'), true);
  assert.equal(mergedMap.has('textures/flipbook_textures.json'), true);
  assert.equal(mergedMap.has('textures/item_texture.json'), true);

  const decoder = new TextDecoder('utf-8');
  const terrainJson = JSON.parse(decoder.decode(mergedMap.get('textures/terrain_texture.json').bytes));
  const flipbookJson = JSON.parse(decoder.decode(mergedMap.get('textures/flipbook_textures.json').bytes));

  // Stone has 2 variations in Pack A (stone w:70, stone_var1 w:30) and 2 in Pack B (stone w:20, stone_var2 w:50) -> 3 combined variations
  assert.equal(Array.isArray(terrainJson.texture_data.stone.textures.variations), true);
  assert.equal(terrainJson.texture_data.stone.textures.variations.length, 3);
  assert.equal(terrainJson.texture_data.stone.textures.variations[0].path, 'textures/blocks/stone');
  assert.equal(terrainJson.texture_data.stone.textures.variations[0].weight, 90);
  assert.equal(terrainJson.texture_data.stone.textures.variations[1].path, 'textures/blocks/stone_var1');
  assert.equal(terrainJson.texture_data.stone.textures.variations[2].path, 'textures/blocks/stone_var2');

  // Dirt has 2 variations from Pack B
  assert.equal(terrainJson.texture_data.dirt.textures.variations.length, 2);

  // Flipbook textures array preserved
  assert.equal(Array.isArray(flipbookJson), true);
  assert.equal(flipbookJson.some((f) => f.atlas_tile === 'diamond_ore'), true);

  // Verify getTextureVariants helper from both modules
  const stoneMeta = getTextureVariants('textures/blocks/stone.png', {
    terrainTexture: terrainJson,
    flipbookTextures: flipbookJson,
  });
  assert.equal(stoneMeta.blockKey, 'stone');
  assert.equal(stoneMeta.hasVariations, true);
  assert.equal(stoneMeta.variations.length, 3);

  const diamondMeta = getEditorTextureVariants('textures/blocks/diamond_ore.png', {
    terrainTexture: terrainJson,
    flipbookTextures: flipbookJson,
  });
  assert.equal(diamondMeta.isFlipbook, true);
  assert.equal(diamondMeta.flipbook.frames.length, 4);

  // Verify removing a specific variant updates terrain_texture.json cleanly
  const afterRemove = removeVariantFromTerrainJson(terrainJson, 'stone', 1);
  assert.equal(afterRemove.texture_data.stone.textures.variations.length, 2);
  assert.equal(afterRemove.texture_data.stone.textures.variations[1].path, 'textures/blocks/stone_var2');

  // Verify .mcpack compression and decompression round-trip via @zip.js/zip.js
  const mcpackBytes = await compressMergedPackToBytes(mergedMap);
  assert.equal(mcpackBytes[0], 0x50);
  assert.equal(mcpackBytes[1], 0x4b);

  const extractedMap = await readPackZipEntries(mcpackBytes);
  assert.equal(extractedMap.has('manifest.json'), true);
  assert.equal(extractedMap.has('textures/blocks/stone.png'), true);
  assert.equal(extractedMap.has('textures/blocks/stone_var2.png'), true);

  const m1 = buildMergedManifest({ name: 'Pack 1' });
  const m2 = buildMergedManifest({ name: 'Pack 2' });
  assert.notEqual(m1.header.uuid, m2.header.uuid);
  assert.notEqual(m1.modules[0].uuid, m2.modules[0].uuid);
});

test('Mobile Texture Studio symmetry, brush footprints, layer flattening, and two-finger pinch/pan math', () => {
  // Symmetry: horizontal, vertical, and 4-quadrant both
  const symH = computeSymmetryPoints(2, 3, 16, 16, 'horizontal');
  assert.deepEqual(symH, [[2, 3], [13, 3]]);

  const symBoth = computeSymmetryPoints(1, 2, 16, 16, 'both');
  assert.deepEqual(symBoth, [[1, 2], [14, 2], [1, 13], [14, 13]]);

  // Brush footprints (1px, 2px, 4px, 8px)
  const fp2 = expandBrushFootprint(5, 5, 2, 16, 16);
  assert.equal(fp2.length, 4);
  const fp4 = expandBrushFootprint(5, 5, 4, 16, 16);
  assert.equal(fp4.length, 16);

  // Layer flattening in order with visibility & opacity
  const bottom = new Uint8ClampedArray([255, 0, 0, 255]); // Red
  const topHidden = new Uint8ClampedArray([0, 255, 0, 255]); // Green (hidden)
  const flat1 = flattenLayersBuffers(
    [
      { data: bottom, visible: true, opacity: 1.0 },
      { data: topHidden, visible: false, opacity: 1.0 },
    ],
    1,
    1
  );
  assert.deepEqual(Array.from(flat1), [255, 0, 0, 255]);

  // Two-finger pinch zoom & pan delta calculation
  const gesture = computeTwoFingerGesture(
    { x: 100, y: 100 },
    { x: 200, y: 100 },
    { x: 70, y: 120 },
    { x: 270, y: 120 },
    1.0,
    0,
    0
  );
  assert.equal(gesture.scale, 2.0);
  assert.equal(gesture.panX, 20);
  assert.equal(gesture.panY, 20);
});





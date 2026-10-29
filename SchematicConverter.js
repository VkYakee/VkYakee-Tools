/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SchematicConverter — Conversor Universal de Esquemáticos (Java ↔ Bedrock ↔ 3D)
 * Pure ES Module for VkYakee Minecraft Bedrock Multi-Tool APK.
 *
 * Soporta entrada/salida bidireccional:
 * - Java Edition: .schem (Sponge v2/v3), .schematic (MCEdit Legacy), .litematic, .nbt, .bp (Axiom), .zip (Java World)
 * - Bedrock Edition: .mcstructure (Structure Block), .mcworld (Bedrock World), .mcpack (Autoplacer Add-on)
 * - Modelos 3D: .glb, .gltf, .obj, .stl
 */

// ---------------------------------------------------------------------------
// 1. GEYSERMC BLOCK ID TRANSLATION DICTIONARY (Java <-> Bedrock + Legacy IDs)
// ---------------------------------------------------------------------------

export const GEYSER_JAVA_TO_BEDROCK = {
  'minecraft:air': 'minecraft:air',
  'minecraft:cave_air': 'minecraft:air',
  'minecraft:void_air': 'minecraft:air',
  'minecraft:grass_block': 'minecraft:grass',
  'minecraft:dirt_path': 'minecraft:grass_path',
  'minecraft:rooted_dirt': 'minecraft:dirt_with_roots',
  'minecraft:podzol': 'minecraft:podzol',
  'minecraft:mycelium': 'minecraft:mycelium',
  'minecraft:stone': 'minecraft:stone',
  'minecraft:cobblestone': 'minecraft:cobblestone',
  'minecraft:mossy_cobblestone': 'minecraft:mossy_cobblestone',
  'minecraft:stone_bricks': 'minecraft:stonebrick',
  'minecraft:mossy_stone_bricks': 'minecraft:stonebrick',
  'minecraft:cracked_stone_bricks': 'minecraft:stonebrick',
  'minecraft:chiseled_stone_bricks': 'minecraft:stonebrick',
  'minecraft:bricks': 'minecraft:brick_block',
  'minecraft:nether_bricks': 'minecraft:nether_brick',
  'minecraft:red_nether_bricks': 'minecraft:red_nether_brick',
  'minecraft:end_stone_bricks': 'minecraft:end_bricks',
  'minecraft:quartz_block': 'minecraft:quartz_block',
  'minecraft:chiseled_quartz_block': 'minecraft:quartz_block',
  'minecraft:quartz_pillar': 'minecraft:quartz_block',
  'minecraft:smooth_quartz': 'minecraft:quartz_block',
  'minecraft:oak_log': 'minecraft:oak_log',
  'minecraft:spruce_log': 'minecraft:spruce_log',
  'minecraft:birch_log': 'minecraft:birch_log',
  'minecraft:jungle_log': 'minecraft:jungle_log',
  'minecraft:acacia_log': 'minecraft:acacia_log',
  'minecraft:dark_oak_log': 'minecraft:dark_oak_log',
  'minecraft:mangrove_log': 'minecraft:mangrove_log',
  'minecraft:cherry_log': 'minecraft:cherry_log',
  'minecraft:oak_planks': 'minecraft:planks',
  'minecraft:spruce_planks': 'minecraft:spruce_planks',
  'minecraft:birch_planks': 'minecraft:birch_planks',
  'minecraft:jungle_planks': 'minecraft:jungle_planks',
  'minecraft:acacia_planks': 'minecraft:acacia_planks',
  'minecraft:dark_oak_planks': 'minecraft:dark_oak_planks',
  'minecraft:oak_leaves': 'minecraft:leaves',
  'minecraft:spruce_leaves': 'minecraft:leaves',
  'minecraft:birch_leaves': 'minecraft:leaves',
  'minecraft:glass': 'minecraft:glass',
  'minecraft:tinted_glass': 'minecraft:tinted_glass',
  'minecraft:glass_pane': 'minecraft:glass_pane',
  'minecraft:white_stained_glass': 'minecraft:stained_glass',
  'minecraft:orange_stained_glass': 'minecraft:stained_glass',
  'minecraft:magenta_stained_glass': 'minecraft:stained_glass',
  'minecraft:light_blue_stained_glass': 'minecraft:stained_glass',
  'minecraft:yellow_stained_glass': 'minecraft:stained_glass',
  'minecraft:lime_stained_glass': 'minecraft:stained_glass',
  'minecraft:cyan_stained_glass': 'minecraft:stained_glass',
  'minecraft:blue_stained_glass': 'minecraft:stained_glass',
  'minecraft:red_stained_glass': 'minecraft:stained_glass',
  'minecraft:black_stained_glass': 'minecraft:stained_glass',
  'minecraft:sea_lantern': 'minecraft:sea_lantern',
  'minecraft:glowstone': 'minecraft:glowstone',
  'minecraft:shroomlight': 'minecraft:shroomlight',
  'minecraft:redstone_lamp': 'minecraft:redstone_lamp',
  'minecraft:redstone_block': 'minecraft:redstone_block',
  'minecraft:repeater': 'minecraft:unpowered_repeater',
  'minecraft:comparator': 'minecraft:unpowered_comparator',
  'minecraft:piston': 'minecraft:piston',
  'minecraft:sticky_piston': 'minecraft:sticky_piston',
  'minecraft:observer': 'minecraft:observer',
  'minecraft:hopper': 'minecraft:hopper',
  'minecraft:dispenser': 'minecraft:dispenser',
  'minecraft:dropper': 'minecraft:dropper',
  'minecraft:note_block': 'minecraft:noteblock',
  'minecraft:crafting_table': 'minecraft:crafting_table',
  'minecraft:furnace': 'minecraft:furnace',
  'minecraft:blast_furnace': 'minecraft:blast_furnace',
  'minecraft:smoker': 'minecraft:smoker',
  'minecraft:chest': 'minecraft:chest',
  'minecraft:barrel': 'minecraft:barrel',
  'minecraft:bookshelf': 'minecraft:bookshelf',
  'minecraft:chiseled_bookshelf': 'minecraft:chiseled_bookshelf',
  'minecraft:torch': 'minecraft:torch',
  'minecraft:soul_torch': 'minecraft:soul_torch',
  'minecraft:wall_torch': 'minecraft:torch',
  'minecraft:lantern': 'minecraft:lantern',
  'minecraft:soul_lantern': 'minecraft:soul_lantern',
  'minecraft:water': 'minecraft:water',
  'minecraft:lava': 'minecraft:lava',
  'minecraft:magma_block': 'minecraft:magma',
  'minecraft:snow_block': 'minecraft:snow',
  'minecraft:snow': 'minecraft:snow_layer',
  'minecraft:ice': 'minecraft:ice',
  'minecraft:packed_ice': 'minecraft:packed_ice',
  'minecraft:blue_ice': 'minecraft:blue_ice',
  'minecraft:slime_block': 'minecraft:slime',
  'minecraft:honey_block': 'minecraft:honey_block',
  'minecraft:terracotta': 'minecraft:hardened_clay',
  'minecraft:white_terracotta': 'minecraft:stained_hardened_clay',
  'minecraft:orange_terracotta': 'minecraft:stained_hardened_clay',
  'minecraft:cyan_terracotta': 'minecraft:stained_hardened_clay',
  'minecraft:red_terracotta': 'minecraft:stained_hardened_clay',
  'minecraft:lily_pad': 'minecraft:waterlily',
  'minecraft:cobweb': 'minecraft:web',
  'minecraft:sugar_cane': 'minecraft:reeds',
  'minecraft:spawner': 'minecraft:mob_spawner',
  'minecraft:end_portal_frame': 'minecraft:end_portal_frame',
  'minecraft:nether_quartz_ore': 'minecraft:quartz_ore',
  'minecraft:jack_o_lantern': 'minecraft:lit_pumpkin',
  'minecraft:carved_pumpkin': 'minecraft:carved_pumpkin',
  'minecraft:melon': 'minecraft:melon_block',
  'minecraft:Prismarine': 'minecraft:prismarine',
  'minecraft:prismarine_bricks': 'minecraft:prismarine',
  'minecraft:dark_prismarine': 'minecraft:prismarine',
  'minecraft:iron_bars': 'minecraft:iron_bars',
  'minecraft:chain': 'minecraft:chain',
  'minecraft:deepslate_bricks': 'minecraft:deepslate_bricks',
  'minecraft:deepslate_tiles': 'minecraft:deepslate_tiles',
  'minecraft:polished_deepslate': 'minecraft:polished_deepslate',
  'minecraft:cobbled_deepslate': 'minecraft:cobbled_deepslate',
  'minecraft:amethyst_block': 'minecraft:amethyst_block',
  'minecraft:copper_block': 'minecraft:copper_block',
  'minecraft:cut_copper': 'minecraft:cut_copper',
  'minecraft:gold_block': 'minecraft:gold_block',
  'minecraft:iron_block': 'minecraft:iron_block',
  'minecraft:diamond_block': 'minecraft:diamond_block',
  'minecraft:emerald_block': 'minecraft:emerald_block',
  'minecraft:lapis_block': 'minecraft:lapis_block',
  'minecraft:netherite_block': 'minecraft:netherite_block',
  'minecraft:obsidian': 'minecraft:obsidian',
  'minecraft:crying_obsidian': 'minecraft:crying_obsidian'
};

export const GEYSER_BEDROCK_TO_JAVA = {
  'minecraft:air': 'minecraft:air',
  'minecraft:grass': 'minecraft:grass_block',
  'minecraft:grass_path': 'minecraft:dirt_path',
  'minecraft:dirt_with_roots': 'minecraft:rooted_dirt',
  'minecraft:stonebrick': 'minecraft:stone_bricks',
  'minecraft:brick_block': 'minecraft:bricks',
  'minecraft:nether_brick': 'minecraft:nether_bricks',
  'minecraft:red_nether_brick': 'minecraft:red_nether_bricks',
  'minecraft:end_bricks': 'minecraft:end_stone_bricks',
  'minecraft:planks': 'minecraft:oak_planks',
  'minecraft:leaves': 'minecraft:oak_leaves',
  'minecraft:stained_glass': 'minecraft:white_stained_glass',
  'minecraft:unpowered_repeater': 'minecraft:repeater',
  'minecraft:powered_repeater': 'minecraft:repeater',
  'minecraft:unpowered_comparator': 'minecraft:comparator',
  'minecraft:powered_comparator': 'minecraft:comparator',
  'minecraft:noteblock': 'minecraft:note_block',
  'minecraft:magma': 'minecraft:magma_block',
  'minecraft:snow': 'minecraft:snow_block',
  'minecraft:snow_layer': 'minecraft:snow',
  'minecraft:slime': 'minecraft:slime_block',
  'minecraft:hardened_clay': 'minecraft:terracotta',
  'minecraft:stained_hardened_clay': 'minecraft:white_terracotta',
  'minecraft:waterlily': 'minecraft:lily_pad',
  'minecraft:web': 'minecraft:cobweb',
  'minecraft:reeds': 'minecraft:sugar_cane',
  'minecraft:mob_spawner': 'minecraft:spawner',
  'minecraft:quartz_ore': 'minecraft:nether_quartz_ore',
  'minecraft:lit_pumpkin': 'minecraft:jack_o_lantern',
  'minecraft:melon_block': 'minecraft:melon'
};

export const LEGACY_NUMERIC_IDS = {
  0: 'minecraft:air',
  1: 'minecraft:stone',
  2: 'minecraft:grass_block',
  3: 'minecraft:dirt',
  4: 'minecraft:cobblestone',
  5: 'minecraft:oak_planks',
  7: 'minecraft:bedrock',
  8: 'minecraft:water',
  9: 'minecraft:water',
  10: 'minecraft:lava',
  11: 'minecraft:lava',
  12: 'minecraft:sand',
  13: 'minecraft:gravel',
  14: 'minecraft:gold_ore',
  15: 'minecraft:iron_ore',
  16: 'minecraft:coal_ore',
  17: 'minecraft:oak_log',
  18: 'minecraft:oak_leaves',
  19: 'minecraft:sponge',
  20: 'minecraft:glass',
  22: 'minecraft:lapis_block',
  23: 'minecraft:dispenser',
  24: 'minecraft:sandstone',
  25: 'minecraft:note_block',
  29: 'minecraft:sticky_piston',
  33: 'minecraft:piston',
  35: 'minecraft:white_wool',
  41: 'minecraft:gold_block',
  42: 'minecraft:iron_block',
  43: 'minecraft:smooth_stone_slab',
  44: 'minecraft:smooth_stone_slab',
  45: 'minecraft:bricks',
  46: 'minecraft:tnt',
  47: 'minecraft:bookshelf',
  48: 'minecraft:mossy_cobblestone',
  49: 'minecraft:obsidian',
  50: 'minecraft:torch',
  53: 'minecraft:oak_stairs',
  54: 'minecraft:chest',
  56: 'minecraft:diamond_ore',
  57: 'minecraft:diamond_block',
  58: 'minecraft:crafting_table',
  61: 'minecraft:furnace',
  67: 'minecraft:cobblestone_stairs',
  73: 'minecraft:redstone_ore',
  79: 'minecraft:ice',
  80: 'minecraft:snow_block',
  85: 'minecraft:oak_fence',
  87: 'minecraft:netherrack',
  89: 'minecraft:glowstone',
  95: 'minecraft:white_stained_glass',
  98: 'minecraft:stone_bricks',
  102: 'minecraft:glass_pane',
  109: 'minecraft:stone_brick_stairs',
  112: 'minecraft:nether_bricks',
  123: 'minecraft:redstone_lamp',
  133: 'minecraft:emerald_block',
  152: 'minecraft:redstone_block',
  155: 'minecraft:quartz_block',
  159: 'minecraft:white_terracotta',
  165: 'minecraft:slime_block',
  169: 'minecraft:sea_lantern',
  251: 'minecraft:white_concrete'
};

export const FORMAT_CATALOG = [
  { id: 'mcstructure', ext: '.mcstructure', label: '.mcstructure', desc: 'Bedrock Structure Block', family: 'bedrock' },
  { id: 'mcpack', ext: '.mcpack', label: '.mcpack', desc: 'Bedrock Add-on Autoplacer', family: 'bedrock' },
  { id: 'mcworld', ext: '.mcworld', label: '.mcworld', desc: 'Mundo Bedrock Completo', family: 'bedrock' },
  { id: 'schem', ext: '.schem', label: '.schem', desc: 'WorldEdit / Sponge v2', family: 'java' },
  { id: 'litematic', ext: '.litematic', label: '.litematic', desc: 'Litematica Schematic', family: 'java' },
  { id: 'schematic', ext: '.schematic', label: '.schematic', desc: 'Legacy MCEdit', family: 'java' },
  { id: 'nbt', ext: '.nbt', label: '.nbt', desc: 'Vanilla Java Structure', family: 'java' },
  { id: 'bp', ext: '.bp', label: '.bp', desc: 'Axiom Blueprint', family: 'java' },
  { id: 'zip', ext: '.zip', label: '.zip', desc: 'Mundo Java / Pack ZIP', family: 'java' },
  { id: 'glb', ext: '.glb', label: '.glb', desc: 'Modelo 3D GLB Binario', family: '3d' },
  { id: 'gltf', ext: '.gltf', label: '.gltf', desc: 'Escena 3D glTF JSON', family: '3d' },
  { id: 'obj', ext: '.obj', label: '.obj', desc: 'Wavefront 3D Mesh', family: '3d' },
  { id: 'stl', ext: '.stl', label: '.stl', desc: 'Impresión 3D STL', family: '3d' }
];

// ---------------------------------------------------------------------------
// 2. TRANSLATION & COLOR HELPERS
// ---------------------------------------------------------------------------

/**
 * Normalizes a block string like "minecraft:oak_stairs[facing=north,half=bottom]"
 * into { name, properties }.
 */
export function parseBlockStateString(raw) {
  const str = String(raw || 'minecraft:air').trim();
  const bracketIdx = str.indexOf('[');
  let name = bracketIdx >= 0 ? str.slice(0, bracketIdx) : str;
  if (!name.includes(':')) name = 'minecraft:' + name;
  name = name.toLowerCase();

  const properties = {};
  if (bracketIdx >= 0 && str.endsWith(']')) {
    const inner = str.slice(bracketIdx + 1, -1);
    for (const pair of inner.split(',')) {
      const [k, v] = pair.split('=');
      if (k && v !== undefined) {
        properties[k.trim()] = v.trim();
      }
    }
  }
  return { name, properties };
}

export function javaToBedrockBlock(rawName, rawProps = {}) {
  const parsed = parseBlockStateString(rawName);
  const props = { ...parsed.properties, ...rawProps };
  const mappedName = GEYSER_JAVA_TO_BEDROCK[parsed.name] || parsed.name;
  const wasTranslated = mappedName !== parsed.name;

  const bedrockStates = {};
  for (const [k, v] of Object.entries(props)) {
    if (k === 'facing') {
      const dirMap = { down: 0, up: 1, north: 2, south: 3, west: 4, east: 5 };
      bedrockStates['facing_direction'] = dirMap[v] ?? 2;
    } else if (k === 'axis') {
      bedrockStates['pillar_axis'] = String(v);
    } else if (k === 'half') {
      bedrockStates['upside_down_bit'] = v === 'top' ? 1 : 0;
    } else if (k === 'waterlogged') {
      bedrockStates['waterlogged'] = v === 'true' ? 1 : 0;
    } else {
      bedrockStates[k] = v;
    }
  }

  return {
    name: mappedName,
    states: bedrockStates,
    wasTranslated,
    originalName: parsed.name
  };
}

export function bedrockToJavaBlock(rawName, bedrockStates = {}) {
  const parsed = parseBlockStateString(rawName);
  const mappedName = GEYSER_BEDROCK_TO_JAVA[parsed.name] || parsed.name;
  const wasTranslated = mappedName !== parsed.name;

  const javaProps = {};
  for (const [k, v] of Object.entries(bedrockStates || {})) {
    if (k === 'facing_direction') {
      const revMap = ['down', 'up', 'north', 'south', 'west', 'east'];
      javaProps['facing'] = revMap[Number(v)] || 'north';
    } else if (k === 'pillar_axis') {
      javaProps['axis'] = String(v);
    } else if (k === 'upside_down_bit') {
      javaProps['half'] = Number(v) ? 'top' : 'bottom';
    } else {
      javaProps[k] = String(v);
    }
  }

  const propEntries = Object.entries(javaProps);
  const fullState = propEntries.length > 0
    ? `${mappedName}[${propEntries.map(([k, v]) => `${k}=${v}`).join(',')}]`
    : mappedName;

  return {
    name: mappedName,
    properties: javaProps,
    fullState,
    wasTranslated,
    originalName: parsed.name
  };
}

export function getBlockDisplayColor(blockName) {
  const n = String(blockName || '').toLowerCase();
  if (n.includes('air')) return null;
  if (n.includes('grass')) return [92, 169, 68];
  if (n.includes('leaves') || n.includes('moss')) return [58, 128, 45];
  if (n.includes('dirt') || n.includes('podzol') || n.includes('mud')) return [134, 96, 67];
  if (n.includes('oak') || n.includes('planks') || n.includes('wood') || n.includes('log') || n.includes('barrel') || n.includes('chest') || n.includes('crafting') || n.includes('bookshelf')) return [162, 130, 78];
  if (n.includes('spruce') || n.includes('dark_oak')) return [104, 78, 47];
  if (n.includes('birch')) return [213, 201, 140];
  if (n.includes('cherry') || n.includes('magenta') || n.includes('pink')) return [224, 138, 172];
  if (n.includes('water') || n.includes('ice')) return [64, 128, 235];
  if (n.includes('lava') || n.includes('magma') || n.includes('fire') || n.includes('orange')) return [236, 106, 36];
  if (n.includes('redstone') || n.includes('red') || n.includes('tnt') || n.includes('brick')) return [184, 58, 50];
  if (n.includes('gold') || n.includes('glowstone') || n.includes('lantern') || n.includes('torch') || n.includes('yellow') || n.includes('honey') || n.includes('shroomlight')) return [242, 198, 65];
  if (n.includes('diamond') || n.includes('sea_lantern') || n.includes('prismarine') || n.includes('cyan') || n.includes('light_blue')) return [86, 214, 204];
  if (n.includes('emerald') || n.includes('slime') || n.includes('lime')) return [62, 209, 98];
  if (n.includes('amethyst') || n.includes('purple') || n.includes('crying_obsidian')) return [152, 92, 209];
  if (n.includes('obsidian') || n.includes('netherite') || n.includes('black') || n.includes('coal')) return [42, 38, 52];
  if (n.includes('deepslate')) return [76, 78, 86];
  if (n.includes('quartz') || n.includes('snow') || n.includes('white') || n.includes('iron_block')) return [234, 236, 240];
  if (n.includes('sand')) return [219, 207, 160];
  if (n.includes('copper')) return [192, 108, 79];
  if (n.includes('glass')) return [175, 222, 245];
  if (n.includes('stone') || n.includes('cobble') || n.includes('andesite') || n.includes('furnace')) return [132, 136, 142];

  let hash = 2166136261;
  for (let i = 0; i < n.length; i++) {
    hash ^= n.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return [
    90 + ((hash >>> 16) & 0x7f),
    90 + ((hash >>> 8) & 0x7f),
    90 + (hash & 0x7f)
  ];
}

// ---------------------------------------------------------------------------
// 3. GZIP / ZLIB DECOMPRESSION & COMPRESSION HELPERS
// ---------------------------------------------------------------------------

async function maybeDecompressBuffer(uint8) {
  if (!uint8 || uint8.length < 2) return uint8;
  const b0 = uint8[0];
  const b1 = uint8[1];
  let format = null;
  if (b0 === 0x1f && b1 === 0x8b) {
    format = 'gzip';
  } else if (b0 === 0x78 && (b1 === 0x01 || b1 === 0x5e || b1 === 0x9c || b1 === 0xda)) {
    format = 'deflate';
  }
  if (!format || typeof DecompressionStream === 'undefined') {
    return uint8;
  }
  try {
    const ds = new DecompressionStream(format);
    const writer = ds.writable.getWriter();
    writer.write(uint8);
    writer.close();
    const outBuffer = await new Response(ds.readable).arrayBuffer();
    return new Uint8Array(outBuffer);
  } catch {
    return uint8;
  }
}

async function maybeGzipBuffer(uint8) {
  if (typeof CompressionStream === 'undefined') return uint8;
  try {
    const cs = new CompressionStream('gzip');
    const writer = cs.writable.getWriter();
    writer.write(uint8);
    writer.close();
    const outBuffer = await new Response(cs.readable).arrayBuffer();
    return new Uint8Array(outBuffer);
  } catch {
    return uint8;
  }
}

// ---------------------------------------------------------------------------
// 4. UNIVERSAL BINARY NBT READER & WRITER (Big-Endian Java & Little-Endian Bedrock)
// ---------------------------------------------------------------------------

export function parseBinaryNBT(uint8, littleEndian = false) {
  const view = new DataView(uint8.buffer, uint8.byteOffset, uint8.byteLength);
  let offset = 0;
  const decoder = new TextDecoder('utf-8');

  function readU8() {
    const v = view.getUint8(offset);
    offset += 1;
    return v;
  }
  function readI8() {
    const v = view.getInt8(offset);
    offset += 1;
    return v;
  }
  function readU16() {
    const v = view.getUint16(offset, littleEndian);
    offset += 2;
    return v;
  }
  function readI16() {
    const v = view.getInt16(offset, littleEndian);
    offset += 2;
    return v;
  }
  function readI32() {
    const v = view.getInt32(offset, littleEndian);
    offset += 4;
    return v;
  }
  function readI64() {
    const low = view.getInt32(offset, littleEndian);
    const high = view.getInt32(offset + 4, littleEndian);
    offset += 8;
    return littleEndian ? [low, high] : [high, low];
  }
  function readF32() {
    const v = view.getFloat32(offset, littleEndian);
    offset += 4;
    return v;
  }
  function readF64() {
    const v = view.getFloat64(offset, littleEndian);
    offset += 8;
    return v;
  }
  function readString() {
    const len = readU16();
    const bytes = uint8.subarray(offset, offset + len);
    offset += len;
    return decoder.decode(bytes);
  }

  function readPayload(tagType) {
    switch (tagType) {
      case 1: return readI8();
      case 2: return readI16();
      case 3: return readI32();
      case 4: return readI64();
      case 5: return readF32();
      case 6: return readF64();
      case 7: {
        const len = readI32();
        const arr = new Int8Array(len);
        for (let i = 0; i < len && offset < uint8.byteLength; i++) arr[i] = readI8();
        return Array.from(arr);
      }
      case 8: return readString();
      case 9: {
        const itemType = readU8();
        const len = readI32();
        const list = [];
        for (let i = 0; i < len && offset < uint8.byteLength; i++) {
          list.push(readPayload(itemType));
        }
        return list;
      }
      case 10: {
        const obj = {};
        while (offset < uint8.byteLength) {
          const type = readU8();
          if (type === 0) break;
          const key = readString();
          obj[key] = readPayload(type);
        }
        return obj;
      }
      case 11: {
        const len = readI32();
        const arr = [];
        for (let i = 0; i < len && offset < uint8.byteLength; i++) arr.push(readI32());
        return arr;
      }
      case 12: {
        const len = readI32();
        const arr = [];
        for (let i = 0; i < len && offset < uint8.byteLength; i++) arr.push(readI64());
        return arr;
      }
      default:
        throw new Error(`Tag NBT desconocido: ${tagType} en offset ${offset}`);
    }
  }

  const rootType = readU8();
  if (rootType !== 10) {
    throw new Error(`Raíz NBT inválida (esperado Compound 10, recibido ${rootType})`);
  }
  const rootName = readString();
  const rootValue = readPayload(10);
  return { rootName, value: rootValue };
}

class BinaryNBTWriter {
  constructor(littleEndian = false) {
    this.littleEndian = littleEndian;
    this.buf = new Uint8Array(8192);
    this.offset = 0;
    this.encoder = new TextEncoder();
  }

  ensure(extra) {
    if (this.offset + extra <= this.buf.length) return;
    let nextLen = this.buf.length * 2;
    while (nextLen < this.offset + extra) nextLen *= 2;
    const next = new Uint8Array(nextLen);
    next.set(this.buf);
    this.buf = next;
  }

  writeU8(v) {
    this.ensure(1);
    this.buf[this.offset++] = v & 0xff;
  }

  writeI16(v) {
    this.ensure(2);
    new DataView(this.buf.buffer).setInt16(this.offset, v, this.littleEndian);
    this.offset += 2;
  }

  writeU16(v) {
    this.ensure(2);
    new DataView(this.buf.buffer).setUint16(this.offset, v, this.littleEndian);
    this.offset += 2;
  }

  writeI32(v) {
    this.ensure(4);
    new DataView(this.buf.buffer).setInt32(this.offset, v, this.littleEndian);
    this.offset += 4;
  }

  writeF32(v) {
    this.ensure(4);
    new DataView(this.buf.buffer).setFloat32(this.offset, v, this.littleEndian);
    this.offset += 4;
  }

  writeString(str) {
    const bytes = this.encoder.encode(String(str));
    this.writeU16(bytes.length);
    this.ensure(bytes.length);
    this.buf.set(bytes, this.offset);
    this.offset += bytes.length;
  }

  writeTagHeader(tagType, name) {
    this.writeU8(tagType);
    this.writeString(name);
  }

  toUint8Array() {
    return this.buf.slice(0, this.offset);
  }
}

// ---------------------------------------------------------------------------
// 5. ZIP READER & WRITER (For .mcworld, .mcpack, .zip, .bp)
// ---------------------------------------------------------------------------

const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

export function buildZipArchive(files) {
  const encoder = new TextEncoder();
  const entries = files.map((f) => {
    const nameBytes = encoder.encode(f.path);
    const dataBytes = f.data instanceof Uint8Array ? f.data : encoder.encode(String(f.data));
    const crc = crc32(dataBytes);
    return { nameBytes, dataBytes, crc };
  });

  let localTotal = 0;
  let centralTotal = 0;
  for (const e of entries) {
    localTotal += 30 + e.nameBytes.length + e.dataBytes.length;
    centralTotal += 46 + e.nameBytes.length;
  }

  const out = new Uint8Array(localTotal + centralTotal + 22);
  const view = new DataView(out.buffer);
  let offset = 0;

  for (const e of entries) {
    e.localOffset = offset;
    view.setUint32(offset, 0x04034b50, true);
    view.setUint16(offset + 4, 20, true);
    view.setUint16(offset + 6, 0, true);
    view.setUint16(offset + 8, 0, true);
    view.setUint16(offset + 10, 0, true);
    view.setUint16(offset + 12, 0, true);
    view.setUint32(offset + 14, e.crc, true);
    view.setUint32(offset + 18, e.dataBytes.length, true);
    view.setUint32(offset + 22, e.dataBytes.length, true);
    view.setUint16(offset + 26, e.nameBytes.length, true);
    view.setUint16(offset + 28, 0, true);
    offset += 30;
    out.set(e.nameBytes, offset);
    offset += e.nameBytes.length;
    out.set(e.dataBytes, offset);
    offset += e.dataBytes.length;
  }

  const centralStart = offset;
  for (const e of entries) {
    view.setUint32(offset, 0x02014b50, true);
    view.setUint16(offset + 4, 20, true);
    view.setUint16(offset + 6, 20, true);
    view.setUint16(offset + 8, 0, true);
    view.setUint16(offset + 10, 0, true);
    view.setUint16(offset + 12, 0, true);
    view.setUint16(offset + 14, 0, true);
    view.setUint32(offset + 16, e.crc, true);
    view.setUint32(offset + 20, e.dataBytes.length, true);
    view.setUint32(offset + 24, e.dataBytes.length, true);
    view.setUint16(offset + 28, e.nameBytes.length, true);
    view.setUint16(offset + 30, 0, true);
    view.setUint16(offset + 32, 0, true);
    view.setUint16(offset + 34, 0, true);
    view.setUint16(offset + 36, 0, true);
    view.setUint32(offset + 38, 0, true);
    view.setUint32(offset + 42, e.localOffset, true);
    offset += 46;
    out.set(e.nameBytes, offset);
    offset += e.nameBytes.length;
  }

  const centralSize = offset - centralStart;
  view.setUint32(offset, 0x06054b50, true);
  view.setUint16(offset + 4, 0, true);
  view.setUint16(offset + 6, 0, true);
  view.setUint16(offset + 8, entries.length, true);
  view.setUint16(offset + 10, entries.length, true);
  view.setUint32(offset + 12, centralSize, true);
  view.setUint32(offset + 16, centralStart, true);
  view.setUint16(offset + 20, 0, true);

  return out;
}

async function extractZipEntries(uint8) {
  const view = new DataView(uint8.buffer, uint8.byteOffset, uint8.byteLength);
  const decoder = new TextDecoder('utf-8');
  const files = [];
  let offset = 0;

  while (offset + 30 <= uint8.byteLength) {
    const sig = view.getUint32(offset, true);
    if (sig !== 0x04034b50) break;
    const method = view.getUint16(offset + 8, true);
    const compSize = view.getUint32(offset + 18, true);
    const nameLen = view.getUint16(offset + 26, true);
    const extraLen = view.getUint16(offset + 28, true);
    const name = decoder.decode(uint8.subarray(offset + 30, offset + 30 + nameLen));
    const dataStart = offset + 30 + nameLen + extraLen;
    const rawData = uint8.subarray(dataStart, dataStart + compSize);
    offset = dataStart + compSize;

    if (name.endsWith('/')) continue;
    let content = rawData;
    if (method === 8 && typeof DecompressionStream !== 'undefined') {
      try {
        const ds = new DecompressionStream('deflate-raw');
        const writer = ds.writable.getWriter();
        writer.write(rawData);
        writer.close();
        const buf = await new Response(ds.readable).arrayBuffer();
        content = new Uint8Array(buf);
      } catch {
        content = rawData;
      }
    }
    files.push({ name, data: content });
  }
  return files;
}

// ---------------------------------------------------------------------------
// 6. UNIFIED VOXEL STRUCTURE REPRESENTATION & PARSERS
// ---------------------------------------------------------------------------

/**
 * Unified structure model:
 * {
 *   name: string,
 *   sourceFormat: string,
 *   size: [widthX, heightY, lengthZ],
 *   palette: Array<{ name: string, states: Record<string, any> }>, // index 0 is always air
 *   voxels: Int32Array (size X * Y * Z, indexed by (x * Y * Z) + (y * Z) + z)
 * }
 */
export function createEmptyVoxelModel(size = [7, 6, 7], name = 'structure') {
  const [sx, sy, sz] = size;
  return {
    name,
    sourceFormat: 'mcstructure',
    size: [sx, sy, sz],
    palette: [{ name: 'minecraft:air', states: {} }],
    voxels: new Int32Array(sx * sy * sz)
  };
}

export function voxelIndex(x, y, z, size) {
  return (x * size[1] * size[2]) + (y * size[2]) + z;
}

function decodeVarIntArray(byteArray, expectedCount) {
  const out = [];
  let i = 0;
  while (i < byteArray.length && out.length < expectedCount) {
    let value = 0;
    let shift = 0;
    while (i < byteArray.length) {
      const b = byteArray[i++] & 0xff;
      value |= (b & 0x7f) << shift;
      if ((b & 0x80) === 0) break;
      shift += 7;
    }
    out.push(value);
  }
  return out;
}

function encodeVarIntArray(indices) {
  const bytes = [];
  for (let i = 0; i < indices.length; i++) {
    let v = indices[i] >>> 0;
    while ((v & ~0x7f) !== 0) {
      bytes.push((v & 0x7f) | 0x80);
      v >>>= 7;
    }
    bytes.push(v & 0x7f);
  }
  return new Int8Array(bytes);
}

/**
 * Normalizes any parsed NBT tree (.mcstructure, .schem, .schematic, .nbt, .litematic)
 * into our unified VoxelModel.
 */
export function normalizeNbtToVoxelModel(nbtRoot, formatHint = 'mcstructure', fileName = 'schematic') {
  const root = nbtRoot?.value || nbtRoot || {};
  const inner = root.Schematic || root;

  // Case 1: Bedrock .mcstructure
  if (inner.structure && Array.isArray(inner.size)) {
    const size = inner.size.map((n) => Math.max(1, Number(n) || 1));
    const [sx, sy, sz] = size;
    const rawIndices = inner.structure?.block_indices?.[0] || [];
    const rawPalette = inner.structure?.palette?.default?.block_palette || [];

    const palette = [{ name: 'minecraft:air', states: {} }];
    const palMap = new Map();
    palMap.set('minecraft:air{}', 0);

    const mappedRawIdxToUnified = rawPalette.map((entry) => {
      const bName = entry?.name || 'minecraft:air';
      const bStates = entry?.states || {};
      const key = `${bName}${JSON.stringify(bStates)}`;
      if (palMap.has(key)) return palMap.get(key);
      const nextIdx = palette.length;
      palette.push({ name: bName, states: bStates });
      palMap.set(key, nextIdx);
      return nextIdx;
    });

    const voxels = new Int32Array(sx * sy * sz);
    for (let i = 0; i < voxels.length && i < rawIndices.length; i++) {
      const rIdx = rawIndices[i];
      voxels[i] = rIdx >= 0 && rIdx < mappedRawIdxToUnified.length ? mappedRawIdxToUnified[rIdx] : 0;
    }

    return { name: fileName, sourceFormat: formatHint, size, palette, voxels };
  }

  // Case 2: Sponge .schem (v2 / v3)
  if (inner.Width !== undefined && inner.Height !== undefined && inner.Length !== undefined && (inner.Palette || inner.Blocks)) {
    const sx = Math.max(1, Number(inner.Width) || 1);
    const sy = Math.max(1, Number(inner.Height) || 1);
    const sz = Math.max(1, Number(inner.Length) || 1);
    const size = [sx, sy, sz];

    // Legacy .schematic (Blocks + Data byte arrays)
    if (Array.isArray(inner.Blocks) && !inner.Palette) {
      const palette = [{ name: 'minecraft:air', states: {} }];
      const idToPal = new Map([[0, 0]]);
      const voxels = new Int32Array(sx * sy * sz);

      for (let y = 0; y < sy; y++) {
        for (let z = 0; z < sz; z++) {
          for (let x = 0; x < sx; x++) {
            const flatIdx = (y * sz + z) * sx + x;
            const rawId = (inner.Blocks[flatIdx] ?? 0) & 0xff;
            if (rawId === 0) continue;
            if (!idToPal.has(rawId)) {
              const name = LEGACY_NUMERIC_IDS[rawId] || 'minecraft:stone';
              idToPal.set(rawId, palette.length);
              palette.push({ name, states: {} });
            }
            voxels[voxelIndex(x, y, z, size)] = idToPal.get(rawId);
          }
        }
      }
      return { name: fileName, sourceFormat: 'schematic', size, palette, voxels };
    }

    // Sponge .schem v2/v3 Palette + BlockData
    const rawPaletteObj = inner.Palette || inner.Blocks?.Palette || {};
    const rawBlockData = inner.BlockData || inner.Blocks?.Data || [];
    const maxPalId = Object.values(rawPaletteObj).reduce((m, v) => Math.max(m, Number(v) || 0), 0);
    const idToBlock = new Array(maxPalId + 1).fill(null);

    for (const [stateStr, idxVal] of Object.entries(rawPaletteObj)) {
      const parsed = parseBlockStateString(stateStr);
      idToBlock[Number(idxVal)] = { name: parsed.name, states: parsed.properties };
    }

    const palette = [{ name: 'minecraft:air', states: {} }];
    const palRemap = new Map();
    for (let i = 0; i < idToBlock.length; i++) {
      const item = idToBlock[i];
      if (!item || item.name === 'minecraft:air' || item.name === 'minecraft:cave_air') {
        palRemap.set(i, 0);
      } else {
        palRemap.set(i, palette.length);
        palette.push(item);
      }
    }

    const decodedIndices = decodeVarIntArray(rawBlockData, sx * sy * sz);
    const voxels = new Int32Array(sx * sy * sz);
    for (let y = 0; y < sy; y++) {
      for (let z = 0; z < sz; z++) {
        for (let x = 0; x < sx; x++) {
          const spongeIdx = x + z * sx + y * sx * sz;
          const rawId = decodedIndices[spongeIdx] ?? 0;
          voxels[voxelIndex(x, y, z, size)] = palRemap.get(rawId) ?? 0;
        }
      }
    }

    return { name: fileName, sourceFormat: 'schem', size, palette, voxels };
  }

  // Case 3: Vanilla Java Structure (.nbt)
  if (Array.isArray(inner.size) && Array.isArray(inner.palette) && Array.isArray(inner.blocks)) {
    const size = inner.size.map((n) => Math.max(1, Number(n) || 1));
    const [sx, sy, sz] = size;
    const palette = [{ name: 'minecraft:air', states: {} }];
    const rawToPal = new Map();

    inner.palette.forEach((entry, idx) => {
      const bName = (entry.Name || 'minecraft:air').toLowerCase();
      const bProps = entry.Properties || {};
      if (bName === 'minecraft:air' || bName === 'minecraft:cave_air') {
        rawToPal.set(idx, 0);
      } else {
        rawToPal.set(idx, palette.length);
        palette.push({ name: bName, states: bProps });
      }
    });

    const voxels = new Int32Array(sx * sy * sz);
    for (const blk of inner.blocks) {
      if (!Array.isArray(blk.pos) || blk.pos.length < 3) continue;
      const [x, y, z] = blk.pos;
      if (x >= 0 && x < sx && y >= 0 && y < sy && z >= 0 && z < sz) {
        voxels[voxelIndex(x, y, z, size)] = rawToPal.get(blk.state) ?? 0;
      }
    }

    return { name: fileName, sourceFormat: 'nbt', size, palette, voxels };
  }

  // Case 4: Litematica (.litematic)
  if (inner.Regions && typeof inner.Regions === 'object') {
    const regionNames = Object.keys(inner.Regions);
    if (regionNames.length > 0) {
      const reg = inner.Regions[regionNames[0]];
      const sx = Math.max(1, Math.abs(Number(reg.Size?.x) || 5));
      const sy = Math.max(1, Math.abs(Number(reg.Size?.y) || 5));
      const sz = Math.max(1, Math.abs(Number(reg.Size?.z) || 5));
      const size = [sx, sy, sz];

      const rawPal = Array.isArray(reg.BlockStatePalette) ? reg.BlockStatePalette : [];
      const palette = [{ name: 'minecraft:air', states: {} }];
      const rawToPal = new Map();

      rawPal.forEach((entry, idx) => {
        const bName = (entry.Name || 'minecraft:air').toLowerCase();
        const bProps = entry.Properties || {};
        if (bName === 'minecraft:air') {
          rawToPal.set(idx, 0);
        } else {
          rawToPal.set(idx, palette.length);
          palette.push({ name: bName, states: bProps });
        }
      });

      const voxels = new Int32Array(sx * sy * sz);
      const totalBlocks = sx * sy * sz;
      const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(Math.max(2, rawPal.length))));
      const mask = (1 << bitsPerBlock) - 1;
      const statesLongs = Array.isArray(reg.BlockStates) ? reg.BlockStates : [];

      if (statesLongs.length > 0) {
        for (let idx = 0; idx < totalBlocks; idx++) {
          const bitIndex = idx * bitsPerBlock;
          const longIndex = Math.floor(bitIndex / 64);
          const bitOffset = bitIndex % 64;
          const pair = statesLongs[longIndex] || [0, 0];
          const low = pair[1] >>> 0;
          const high = pair[0] >>> 0;
          let val = 0;
          if (bitOffset < 32) {
            val = (low >>> bitOffset);
            if (bitOffset + bitsPerBlock > 32) {
              val |= (high << (32 - bitOffset));
            }
          } else {
            val = (high >>> (bitOffset - 32));
          }
          const palIdx = val & mask;
          const x = idx % sx;
          const z = Math.floor(idx / sx) % sz;
          const y = Math.floor(idx / (sx * sz));
          if (x < sx && y < sy && z < sz) {
            voxels[voxelIndex(x, y, z, size)] = rawToPal.get(palIdx) ?? 0;
          }
        }
      }

      return { name: fileName, sourceFormat: 'litematic', size, palette, voxels };
    }
  }

  throw new Error('Estructura NBT no reconocida en el archivo de entrada.');
}

// ---------------------------------------------------------------------------
// 7. TRANSFORMATIONS (Rotate 90°, Flip X/Z, Hollow)
// ---------------------------------------------------------------------------

export function transformVoxelModel(model, options = {}) {
  let current = {
    name: model.name,
    sourceFormat: model.sourceFormat,
    size: [...model.size],
    palette: model.palette.map((p) => ({ name: p.name, states: { ...p.states } })),
    voxels: new Int32Array(model.voxels)
  };

  if (options.rotateY90) {
    const [sx, sy, sz] = current.size;
    const nextSize = [sz, sy, sx];
    const nextVoxels = new Int32Array(sz * sy * sx);
    for (let x = 0; x < sx; x++) {
      for (let y = 0; y < sy; y++) {
        for (let z = 0; z < sz; z++) {
          const val = current.voxels[voxelIndex(x, y, z, current.size)];
          const nx = sz - 1 - z;
          const nz = x;
          nextVoxels[voxelIndex(nx, y, nz, nextSize)] = val;
        }
      }
    }
    current.size = nextSize;
    current.voxels = nextVoxels;
  }

  if (options.flipX) {
    const [sx, sy, sz] = current.size;
    const nextVoxels = new Int32Array(sx * sy * sz);
    for (let x = 0; x < sx; x++) {
      for (let y = 0; y < sy; y++) {
        for (let z = 0; z < sz; z++) {
          nextVoxels[voxelIndex(sx - 1 - x, y, z, current.size)] =
            current.voxels[voxelIndex(x, y, z, current.size)];
        }
      }
    }
    current.voxels = nextVoxels;
  }

  if (options.flipZ) {
    const [sx, sy, sz] = current.size;
    const nextVoxels = new Int32Array(sx * sy * sz);
    for (let x = 0; x < sx; x++) {
      for (let y = 0; y < sy; y++) {
        for (let z = 0; z < sz; z++) {
          nextVoxels[voxelIndex(x, y, sz - 1 - z, current.size)] =
            current.voxels[voxelIndex(x, y, z, current.size)];
        }
      }
    }
    current.voxels = nextVoxels;
  }

  if (options.hollow) {
    const [sx, sy, sz] = current.size;
    const nextVoxels = new Int32Array(current.voxels);
    for (let x = 1; x < sx - 1; x++) {
      for (let y = 1; y < sy - 1; y++) {
        for (let z = 1; z < sz - 1; z++) {
          const idx = voxelIndex(x, y, z, current.size);
          if (current.voxels[idx] === 0) continue;
          const neighborsSolid =
            current.voxels[voxelIndex(x - 1, y, z, current.size)] !== 0 &&
            current.voxels[voxelIndex(x + 1, y, z, current.size)] !== 0 &&
            current.voxels[voxelIndex(x, y - 1, z, current.size)] !== 0 &&
            current.voxels[voxelIndex(x, y + 1, z, current.size)] !== 0 &&
            current.voxels[voxelIndex(x, y, z - 1, current.size)] !== 0 &&
            current.voxels[voxelIndex(x, y, z + 1, current.size)] !== 0;
          if (neighborsSolid) {
            nextVoxels[idx] = 0;
          }
        }
      }
    }
    current.voxels = nextVoxels;
  }

  return current;
}

// ---------------------------------------------------------------------------
// 8. SERIALIZERS FOR ALL TARGET FORMATS
// ---------------------------------------------------------------------------

/**
 * Translates palette entries to the target edition (Java or Bedrock)
 * and produces a translation report.
 */
export function translateModelPalette(model, targetFamily = 'bedrock') {
  const report = [];
  const nextPalette = model.palette.map((entry, idx) => {
    if (idx === 0 || entry.name === 'minecraft:air') {
      return { name: 'minecraft:air', states: {}, fullState: 'minecraft:air' };
    }
    if (targetFamily === 'bedrock') {
      const tr = javaToBedrockBlock(entry.name, entry.states);
      report.push({
        from: tr.originalName,
        to: tr.name,
        wasTranslated: tr.wasTranslated
      });
      return { name: tr.name, states: tr.states, fullState: tr.name };
    } else {
      const tr = bedrockToJavaBlock(entry.name, entry.states);
      report.push({
        from: tr.originalName,
        to: tr.name,
        wasTranslated: tr.wasTranslated
      });
      return { name: tr.name, states: tr.properties, fullState: tr.fullState };
    }
  });

  return { palette: nextPalette, report };
}

export function encodeToMcstructure(model) {
  const { palette } = translateModelPalette(model, 'bedrock');
  const [sx, sy, sz] = model.size;
  const total = sx * sy * sz;

  const bedrockPalette = palette.slice(1).map((p) => ({
    name: p.name,
    states: p.states || {},
    version: 18090528
  }));
  if (bedrockPalette.length === 0) {
    bedrockPalette.push({ name: 'minecraft:stone', states: {}, version: 18090528 });
  }

  const writer = new BinaryNBTWriter(true);
  writer.writeTagHeader(10, '');

  // format_version
  writer.writeTagHeader(3, 'format_version');
  writer.writeI32(1);

  // size
  writer.writeTagHeader(9, 'size');
  writer.writeU8(3);
  writer.writeI32(3);
  writer.writeI32(sx);
  writer.writeI32(sy);
  writer.writeI32(sz);

  // structure_world_origin
  writer.writeTagHeader(9, 'structure_world_origin');
  writer.writeU8(3);
  writer.writeI32(3);
  writer.writeI32(0);
  writer.writeI32(0);
  writer.writeI32(0);

  // structure compound
  writer.writeTagHeader(10, 'structure');

  // block_indices (List of 2 List-of-Ints)
  writer.writeTagHeader(9, 'block_indices');
  writer.writeU8(9);
  writer.writeI32(2);

  // Layer 0
  writer.writeU8(3);
  writer.writeI32(total);
  for (let i = 0; i < total; i++) {
    const palIdx = model.voxels[i];
    writer.writeI32(palIdx === 0 ? -1 : palIdx - 1);
  }
  // Layer 1 (waterlogged empty)
  writer.writeU8(3);
  writer.writeI32(total);
  for (let i = 0; i < total; i++) {
    writer.writeI32(-1);
  }

  // entities (empty list)
  writer.writeTagHeader(9, 'entities');
  writer.writeU8(10);
  writer.writeI32(0);

  // palette
  writer.writeTagHeader(10, 'palette');
  writer.writeTagHeader(10, 'default');

  writer.writeTagHeader(9, 'block_palette');
  writer.writeU8(10);
  writer.writeI32(bedrockPalette.length);
  for (const item of bedrockPalette) {
    writer.writeTagHeader(8, 'name');
    writer.writeString(item.name);

    writer.writeTagHeader(10, 'states');
    for (const [k, v] of Object.entries(item.states || {})) {
      if (typeof v === 'number') {
        writer.writeTagHeader(3, k);
        writer.writeI32(v);
      } else {
        writer.writeTagHeader(8, k);
        writer.writeString(String(v));
      }
    }
    writer.writeU8(0); // end states

    writer.writeTagHeader(3, 'version');
    writer.writeI32(item.version);
    writer.writeU8(0); // end palette item
  }

  writer.writeTagHeader(10, 'block_position_data');
  writer.writeU8(0); // end block_position_data
  writer.writeU8(0); // end default
  writer.writeU8(0); // end palette
  writer.writeU8(0); // end structure
  writer.writeU8(0); // end root

  return writer.toUint8Array();
}

export async function encodeToSpongeSchem(model, compress = true) {
  const { palette } = translateModelPalette(model, 'java');
  const [sx, sy, sz] = model.size;

  const spongeIndices = new Int32Array(sx * sy * sz);
  for (let y = 0; y < sy; y++) {
    for (let z = 0; z < sz; z++) {
      for (let x = 0; x < sx; x++) {
        const spongeIdx = x + z * sx + y * sx * sz;
        spongeIndices[spongeIdx] = model.voxels[voxelIndex(x, y, z, model.size)];
      }
    }
  }
  const encodedData = encodeVarIntArray(spongeIndices);

  const writer = new BinaryNBTWriter(false);
  writer.writeTagHeader(10, 'Schematic');

  writer.writeTagHeader(3, 'Version');
  writer.writeI32(2);
  writer.writeTagHeader(3, 'DataVersion');
  writer.writeI32(3465);

  writer.writeTagHeader(2, 'Width');
  writer.writeI16(sx);
  writer.writeTagHeader(2, 'Height');
  writer.writeI16(sy);
  writer.writeTagHeader(2, 'Length');
  writer.writeI16(sz);

  writer.writeTagHeader(3, 'PaletteMax');
  writer.writeI32(palette.length);

  writer.writeTagHeader(10, 'Palette');
  palette.forEach((p, idx) => {
    const key = p.fullState || p.name;
    writer.writeTagHeader(3, key);
    writer.writeI32(idx);
  });
  writer.writeU8(0); // end Palette

  writer.writeTagHeader(7, 'BlockData');
  writer.writeI32(encodedData.length);
  for (let i = 0; i < encodedData.length; i++) {
    writer.writeU8(encodedData[i]);
  }

  writer.writeU8(0); // end root
  const raw = writer.toUint8Array();
  return compress ? await maybeGzipBuffer(raw) : raw;
}

export async function encodeToVanillaJavaNbt(model, compress = true) {
  const { palette } = translateModelPalette(model, 'java');
  const [sx, sy, sz] = model.size;

  const writer = new BinaryNBTWriter(false);
  writer.writeTagHeader(10, '');

  writer.writeTagHeader(3, 'DataVersion');
  writer.writeI32(3465);

  writer.writeTagHeader(9, 'size');
  writer.writeU8(3);
  writer.writeI32(3);
  writer.writeI32(sx);
  writer.writeI32(sy);
  writer.writeI32(sz);

  writer.writeTagHeader(9, 'palette');
  writer.writeU8(10);
  writer.writeI32(palette.length);
  for (const item of palette) {
    writer.writeTagHeader(8, 'Name');
    writer.writeString(item.name);
    const propEntries = Object.entries(item.states || {});
    if (propEntries.length > 0) {
      writer.writeTagHeader(10, 'Properties');
      for (const [k, v] of propEntries) {
        writer.writeTagHeader(8, k);
        writer.writeString(String(v));
      }
      writer.writeU8(0);
    }
    writer.writeU8(0);
  }

  const solidBlocks = [];
  for (let x = 0; x < sx; x++) {
    for (let y = 0; y < sy; y++) {
      for (let z = 0; z < sz; z++) {
        const state = model.voxels[voxelIndex(x, y, z, model.size)];
        if (state !== 0) {
          solidBlocks.push({ pos: [x, y, z], state });
        }
      }
    }
  }

  writer.writeTagHeader(9, 'blocks');
  writer.writeU8(10);
  writer.writeI32(solidBlocks.length);
  for (const b of solidBlocks) {
    writer.writeTagHeader(9, 'pos');
    writer.writeU8(3);
    writer.writeI32(3);
    writer.writeI32(b.pos[0]);
    writer.writeI32(b.pos[1]);
    writer.writeI32(b.pos[2]);

    writer.writeTagHeader(3, 'state');
    writer.writeI32(b.state);
    writer.writeU8(0);
  }

  writer.writeTagHeader(9, 'entities');
  writer.writeU8(10);
  writer.writeI32(0);

  writer.writeU8(0); // end root
  const raw = writer.toUint8Array();
  return compress ? await maybeGzipBuffer(raw) : raw;
}

export async function encodeToLegacySchematic(model, compress = true) {
  const { palette } = translateModelPalette(model, 'java');
  const [sx, sy, sz] = model.size;
  const total = sx * sy * sz;

  const reverseNumeric = {};
  for (const [num, name] of Object.entries(LEGACY_NUMERIC_IDS)) {
    if (!reverseNumeric[name]) reverseNumeric[name] = Number(num);
  }

  const blocks = new Uint8Array(total);
  const data = new Uint8Array(total);
  for (let y = 0; y < sy; y++) {
    for (let z = 0; z < sz; z++) {
      for (let x = 0; x < sx; x++) {
        const palIdx = model.voxels[voxelIndex(x, y, z, model.size)];
        const flat = (y * sz + z) * sx + x;
        if (palIdx === 0) {
          blocks[flat] = 0;
        } else {
          const bName = palette[palIdx]?.name || 'minecraft:stone';
          blocks[flat] = reverseNumeric[bName] ?? 1;
        }
      }
    }
  }

  const writer = new BinaryNBTWriter(false);
  writer.writeTagHeader(10, 'Schematic');
  writer.writeTagHeader(2, 'Width');
  writer.writeI16(sx);
  writer.writeTagHeader(2, 'Height');
  writer.writeI16(sy);
  writer.writeTagHeader(2, 'Length');
  writer.writeI16(sz);
  writer.writeTagHeader(8, 'Materials');
  writer.writeString('Alpha');

  writer.writeTagHeader(7, 'Blocks');
  writer.writeI32(total);
  for (let i = 0; i < total; i++) writer.writeU8(blocks[i]);

  writer.writeTagHeader(7, 'Data');
  writer.writeI32(total);
  for (let i = 0; i < total; i++) writer.writeU8(data[i]);

  writer.writeU8(0);
  const raw = writer.toUint8Array();
  return compress ? await maybeGzipBuffer(raw) : raw;
}

export function encodeToMcpackAddon(model) {
  const mcstructBytes = encodeToMcstructure(model);
  const safeName = (model.name || 'structure').replace(/[^a-z0-9_]/gi, '_').toLowerCase();
  const manifest = {
    format_version: 2,
    header: {
      name: `VkYakee Autoplacer — ${model.name}`,
      description: `Estructura Bedrock (${model.size.join('x')}) generada por VkYakee Schematic Converter`,
      uuid: '8b4b72b0-9f1a-4c31-a8d4-2291c8f40111',
      version: [1, 0, 0],
      min_engine_version: [1, 20, 0]
    },
    modules: [
      {
        type: 'data',
        uuid: '8b4b72b0-9f1a-4c31-a8d4-2291c8f40222',
        version: [1, 0, 0]
      }
    ],
    metadata: {
      authors: ['VkYakee'],
      url: 'https://github.com/VkYakee/holoprint'
    }
  };

  return buildZipArchive([
    { path: 'manifest.json', data: JSON.stringify(manifest, null, 2) },
    { path: `structures/${safeName}.mcstructure`, data: mcstructBytes },
    { path: `functions/place_${safeName}.mcfunction`, data: `structure load "${safeName}" ~ ~ ~\nsay [VkYakee] Estructura ${safeName} colocada con exito!\n` }
  ]);
}

export function encodeToMcworldArchive(model) {
  const mcstructBytes = encodeToMcstructure(model);
  const safeName = (model.name || 'structure').replace(/[^a-z0-9_]/gi, '_').toLowerCase();
  return buildZipArchive([
    { path: 'levelname.txt', data: `VkYakee World - ${model.name}` },
    { path: `behavior_packs/vkyakee_structures/structures/${safeName}.mcstructure`, data: mcstructBytes }
  ]);
}

// ---------------------------------------------------------------------------
// 9. 3D MESH EXPORTERS (.OBJ, .STL, .GLTF, .GLB) WITH FACE CULLING
// ---------------------------------------------------------------------------

export function buildVoxelMeshGeometry(model) {
  const [sx, sy, sz] = model.size;
  const positions = [];
  const normals = [];
  const colors = [];
  const indices = [];
  let vertCount = 0;

  const isSolid = (x, y, z) => {
    if (x < 0 || x >= sx || y < 0 || y >= sy || z < 0 || z >= sz) return false;
    return model.voxels[voxelIndex(x, y, z, model.size)] !== 0;
  };

  const faces = [
    { dir: [0, 1, 0], corners: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]] },
    { dir: [0, -1, 0], corners: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]] },
    { dir: [1, 0, 0], corners: [[1, 0, 1], [1, 0, 0], [1, 1, 0], [1, 1, 1]] },
    { dir: [-1, 0, 0], corners: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]] },
    { dir: [0, 0, 1], corners: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]] },
    { dir: [0, 0, -1], corners: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]] }
  ];

  for (let x = 0; x < sx; x++) {
    for (let y = 0; y < sy; y++) {
      for (let z = 0; z < sz; z++) {
        const palIdx = model.voxels[voxelIndex(x, y, z, model.size)];
        if (palIdx === 0) continue;
        const bName = model.palette[palIdx]?.name || 'minecraft:stone';
        const rgb = getBlockDisplayColor(bName) || [150, 150, 150];
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;

        for (const f of faces) {
          const nx = x + f.dir[0];
          const ny = y + f.dir[1];
          const nz = z + f.dir[2];
          if (isSolid(nx, ny, nz)) continue;

          for (const c of f.corners) {
            positions.push(x + c[0] - sx / 2, y + c[1], z + c[2] - sz / 2);
            normals.push(f.dir[0], f.dir[1], f.dir[2]);
            colors.push(r, g, b);
          }
          indices.push(
            vertCount, vertCount + 1, vertCount + 2,
            vertCount, vertCount + 2, vertCount + 3
          );
          vertCount += 4;
        }
      }
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    colors: new Float32Array(colors),
    indices: new Uint32Array(indices)
  };
}

export function encodeToWavefrontObj(model) {
  const mesh = buildVoxelMeshGeometry(model);
  const lines = [
    `# VkYakee Universal Schematic Converter (.obj)`,
    `# Structure: ${model.name} (${model.size.join('x')})`,
    `o ${model.name || 'minecraft_structure'}`
  ];

  for (let i = 0; i < mesh.positions.length; i += 3) {
    const px = mesh.positions[i].toFixed(3);
    const py = mesh.positions[i + 1].toFixed(3);
    const pz = mesh.positions[i + 2].toFixed(3);
    const cr = mesh.colors[i].toFixed(3);
    const cg = mesh.colors[i + 1].toFixed(3);
    const cb = mesh.colors[i + 2].toFixed(3);
    lines.push(`v ${px} ${py} ${pz} ${cr} ${cg} ${cb}`);
  }

  for (let i = 0; i < mesh.normals.length; i += 3) {
    lines.push(`vn ${mesh.normals[i]} ${mesh.normals[i + 1]} ${mesh.normals[i + 2]}`);
  }

  for (let i = 0; i < mesh.indices.length; i += 3) {
    const a = mesh.indices[i] + 1;
    const b = mesh.indices[i + 1] + 1;
    const c = mesh.indices[i + 2] + 1;
    lines.push(`f ${a}//${a} ${b}//${b} ${c}//${c}`);
  }

  return new TextEncoder().encode(lines.join('\n') + '\n');
}

export function encodeToAsciiStl(model) {
  const mesh = buildVoxelMeshGeometry(model);
  const safeName = (model.name || 'structure').replace(/\s+/g, '_');
  const lines = [`solid ${safeName}`];

  for (let i = 0; i < mesh.indices.length; i += 3) {
    const ia = mesh.indices[i] * 3;
    const ib = mesh.indices[i + 1] * 3;
    const ic = mesh.indices[i + 2] * 3;
    lines.push(`  facet normal ${mesh.normals[ia]} ${mesh.normals[ia + 1]} ${mesh.normals[ia + 2]}`);
    lines.push(`    outer loop`);
    lines.push(`      vertex ${mesh.positions[ia]} ${mesh.positions[ia + 1]} ${mesh.positions[ia + 2]}`);
    lines.push(`      vertex ${mesh.positions[ib]} ${mesh.positions[ib + 1]} ${mesh.positions[ib + 2]}`);
    lines.push(`      vertex ${mesh.positions[ic]} ${mesh.positions[ic + 1]} ${mesh.positions[ic + 2]}`);
    lines.push(`    endloop`);
    lines.push(`  endfacet`);
  }

  lines.push(`endsolid ${safeName}`);
  return new TextEncoder().encode(lines.join('\n') + '\n');
}

export function encodeToGlbBinary(model, asJsonGltf = false) {
  const mesh = buildVoxelMeshGeometry(model);
  const posBytes = new Uint8Array(mesh.positions.buffer);
  const colBytes = new Uint8Array(mesh.colors.buffer);
  const idxBytes = new Uint8Array(mesh.indices.buffer);

  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  for (let i = 0; i < mesh.positions.length; i += 3) {
    const x = mesh.positions[i], y = mesh.positions[i + 1], z = mesh.positions[i + 2];
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
    if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
  }
  if (!Number.isFinite(minX)) {
    minX = minY = minZ = 0;
    maxX = maxY = maxZ = 1;
  }

  const binTotal = posBytes.byteLength + colBytes.byteLength + idxBytes.byteLength;
  const paddedBinTotal = Math.ceil(binTotal / 4) * 4;
  const binChunk = new Uint8Array(paddedBinTotal);
  binChunk.set(posBytes, 0);
  binChunk.set(colBytes, posBytes.byteLength);
  binChunk.set(idxBytes, posBytes.byteLength + colBytes.byteLength);

  const gltfJson = {
    asset: { version: '2.0', generator: 'VkYakee SchematicConverter' },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0, name: model.name || 'MinecraftStructure' }],
    meshes: [{
      primitives: [{
        attributes: { POSITION: 0, COLOR_0: 1 },
        indices: 2
      }]
    }],
    buffers: [{ byteLength: paddedBinTotal }],
    bufferViews: [
      { buffer: 0, byteOffset: 0, byteLength: posBytes.byteLength, target: 34962 },
      { buffer: 0, byteOffset: posBytes.byteLength, byteLength: colBytes.byteLength, target: 34962 },
      { buffer: 0, byteOffset: posBytes.byteLength + colBytes.byteLength, byteLength: idxBytes.byteLength, target: 34963 }
    ],
    accessors: [
      {
        bufferView: 0,
        componentType: 5126,
        count: mesh.positions.length / 3,
        type: 'VEC3',
        min: [minX, minY, minZ],
        max: [maxX, maxY, maxZ]
      },
      {
        bufferView: 1,
        componentType: 5126,
        count: mesh.colors.length / 3,
        type: 'VEC3'
      },
      {
        bufferView: 2,
        componentType: 5125,
        count: mesh.indices.length,
        type: 'SCALAR'
      }
    ]
  };

  if (asJsonGltf) {
    let binaryStr = '';
    for (let i = 0; i < binChunk.length; i++) binaryStr += String.fromCharCode(binChunk[i]);
    const b64 = typeof btoa === 'function' ? btoa(binaryStr) : Buffer.from(binChunk).toString('base64');
    gltfJson.buffers[0].uri = `data:application/octet-stream;base64,${b64}`;
    return new TextEncoder().encode(JSON.stringify(gltfJson, null, 2));
  }

  const jsonBytes = new TextEncoder().encode(JSON.stringify(gltfJson));
  const paddedJsonLen = Math.ceil(jsonBytes.length / 4) * 4;
  const jsonChunk = new Uint8Array(paddedJsonLen);
  jsonChunk.fill(0x20);
  jsonChunk.set(jsonBytes, 0);

  const totalLen = 12 + 8 + paddedJsonLen + 8 + paddedBinTotal;
  const glb = new Uint8Array(totalLen);
  const view = new DataView(glb.buffer);

  view.setUint32(0, 0x46546c67, true); // 'glTF'
  view.setUint32(4, 2, true);
  view.setUint32(8, totalLen, true);

  view.setUint32(12, paddedJsonLen, true);
  view.setUint32(16, 0x4e4f534a, true); // 'JSON'
  glb.set(jsonChunk, 20);

  const binOffset = 20 + paddedJsonLen;
  view.setUint32(binOffset, paddedBinTotal, true);
  view.setUint32(binOffset + 4, 0x004e4942, true); // 'BIN\0'
  glb.set(binChunk, binOffset + 8);

  return glb;
}

// ---------------------------------------------------------------------------
// 10. SAMPLE PRESETS GENERATOR (For 1-click testing of Java & Bedrock formats)
// ---------------------------------------------------------------------------

export function buildPresetVoxelModel(presetId = 'portal_ruin') {
  if (presetId === 'redstone_tower') {
    const size = [7, 8, 7];
    const palette = [
      { name: 'minecraft:air', states: {} },
      { name: 'minecraft:stone_bricks', states: {} },
      { name: 'minecraft:redstone_lamp', states: {} },
      { name: 'minecraft:redstone_block', states: {} },
      { name: 'minecraft:oak_planks', states: {} },
      { name: 'minecraft:sea_lantern', states: {} },
      { name: 'minecraft:copper_block', states: {} }
    ];
    const voxels = new Int32Array(7 * 8 * 7);
    for (let x = 0; x < 7; x++) {
      for (let z = 0; z < 7; z++) {
        voxels[voxelIndex(x, 0, z, size)] = 1;
        if (x === 0 || x === 6 || z === 0 || z === 6) {
          for (let y = 1; y < 6; y++) {
            voxels[voxelIndex(x, y, z, size)] = (y === 3) ? 2 : 1;
          }
        }
      }
    }
    for (let y = 1; y < 7; y++) {
      voxels[voxelIndex(3, y, 3, size)] = 3;
    }
    voxels[voxelIndex(3, 7, 3, size)] = 5;
    for (let x = 1; x <= 5; x++) {
      for (let z = 1; z <= 5; z++) {
        voxels[voxelIndex(x, 6, z, size)] = 6;
      }
    }
    return { name: 'torre_redstone_java', sourceFormat: 'schem', size, palette, voxels };
  }

  if (presetId === 'amethyst_shrine') {
    const size = [9, 7, 9];
    const palette = [
      { name: 'minecraft:air', states: {} },
      { name: 'minecraft:deepslate_bricks', states: {} },
      { name: 'minecraft:amethyst_block', states: {} },
      { name: 'minecraft:sea_lantern', states: {} },
      { name: 'minecraft:tinted_glass', states: {} },
      { name: 'minecraft:gold_block', states: {} }
    ];
    const voxels = new Int32Array(9 * 7 * 9);
    for (let x = 0; x < 9; x++) {
      for (let z = 0; z < 9; z++) {
        voxels[voxelIndex(x, 0, z, size)] = 1;
        if ((x === 1 || x === 7) && (z === 1 || z === 7)) {
          for (let y = 1; y <= 5; y++) voxels[voxelIndex(x, y, z, size)] = 2;
          voxels[voxelIndex(x, 6, z, size)] = 5;
        }
      }
    }
    for (let x = 2; x <= 6; x++) {
      for (let z = 2; z <= 6; z++) {
        voxels[voxelIndex(x, 5, z, size)] = 4;
      }
    }
    voxels[voxelIndex(4, 1, 4, size)] = 5;
    voxels[voxelIndex(4, 2, 4, size)] = 3;
    return { name: 'santuario_amatista', sourceFormat: 'litematic', size, palette, voxels };
  }

  // Default: Nether Portal Ruin
  const size = [8, 8, 8];
  const palette = [
    { name: 'minecraft:air', states: {} },
    { name: 'minecraft:mossy_stone_bricks', states: {} },
    { name: 'minecraft:obsidian', states: {} },
    { name: 'minecraft:crying_obsidian', states: {} },
    { name: 'minecraft:gold_block', states: {} },
    { name: 'minecraft:magma_block', states: {} },
    { name: 'minecraft:lantern', states: {} }
  ];
  const voxels = new Int32Array(8 * 8 * 8);
  for (let x = 0; x < 8; x++) {
    for (let z = 0; z < 8; z++) {
      voxels[voxelIndex(x, 0, z, size)] = ((x + z) % 3 === 0) ? 5 : 1;
    }
  }
  for (let y = 1; y <= 6; y++) {
    voxels[voxelIndex(2, y, 4, size)] = (y % 2 === 0) ? 3 : 2;
    voxels[voxelIndex(5, y, 4, size)] = (y === 3) ? 3 : 2;
  }
  for (let x = 2; x <= 5; x++) {
    voxels[voxelIndex(x, 1, 4, size)] = 2;
    voxels[voxelIndex(x, 6, 4, size)] = 2;
  }
  voxels[voxelIndex(2, 7, 4, size)] = 4;
  voxels[voxelIndex(5, 7, 4, size)] = 4;
  voxels[voxelIndex(3, 5, 4, size)] = 6;
  return { name: 'portal_ruina_bedrock', sourceFormat: 'mcstructure', size, palette, voxels };
}

// ---------------------------------------------------------------------------
// 11. MAIN CLASS: SchematicConverter
// ---------------------------------------------------------------------------

export class SchematicConverter {
  constructor(container) {
    if (!container && typeof document !== 'undefined') {
      throw new Error('SchematicConverter requiere un contenedor HTML válido.');
    }
    this.container = container;
    this.baseModel = buildPresetVoxelModel('portal_ruin');
    this.activeModel = this.baseModel;
    this.sourceFormat = 'mcstructure';
    this.targetFormat = 'schem';
    this.transformOptions = {
      rotateY90: false,
      flipX: false,
      flipZ: false,
      hollow: false
    };
    this.layerYLimit = this.activeModel.size[1];
    this.yaw = 0.68;
    this.pitch = 0.45;
    this.zoom = 1.0;
    this.wireframe = false;

    if (this.container) {
      this._renderUI();
      this._bindEvents();
      this._refreshModelAndView();
    }
  }

  /**
   * Detects input format from file extension or binary signature.
   */
  detectFormat(fileName = '') {
    const lower = String(fileName).toLowerCase();
    for (const fmt of FORMAT_CATALOG) {
      if (lower.endsWith(fmt.ext)) return fmt.id;
    }
    return 'mcstructure';
  }

  /**
   * Parses an uploaded File or Uint8Array into a unified VoxelModel.
   */
  async loadFromBytes(uint8, fileName = 'structure.mcstructure') {
    const extFormat = this.detectFormat(fileName);
    const baseName = fileName.replace(/\.[^.]+$/, '') || 'structure';

    // Check if ZIP container (.mcworld, .mcpack, .zip, .bp)
    if (uint8.length >= 4 && uint8[0] === 0x50 && uint8[1] === 0x4b) {
      const entries = await extractZipEntries(uint8);
      const structEntry = entries.find((e) =>
        /\.(mcstructure|schem|schematic|litematic|nbt)$/i.test(e.name)
      );
      if (structEntry) {
        return this.loadFromBytes(structEntry.data, structEntry.name);
      }
    }

    const decompressed = await maybeDecompressBuffer(uint8);

    // Try Big-Endian NBT first (Java .schem, .nbt, .litematic, .schematic), then Little-Endian (.mcstructure)
    const tryOrder = extFormat === 'mcstructure' ? [true, false] : [false, true];
    for (const isLE of tryOrder) {
      try {
        const parsed = parseBinaryNBT(decompressed, isLE);
        const model = normalizeNbtToVoxelModel(parsed, extFormat, baseName);
        return model;
      } catch {
        // Continue to fallback endianness
      }
    }

    throw new Error(`No se pudo decodificar el archivo "${fileName}". Verifica que sea un esquemático válido.`);
  }

  /**
   * Converts the current (or provided) VoxelModel into a binary Uint8Array
   * for the specified target format.
   */
  async convertModelToBytes(model, targetFormat = this.targetFormat) {
    switch (targetFormat) {
      case 'mcstructure':
        return { bytes: encodeToMcstructure(model), ext: '.mcstructure', mime: 'application/octet-stream' };
      case 'mcpack':
        return { bytes: encodeToMcpackAddon(model), ext: '.mcpack', mime: 'application/zip' };
      case 'mcworld':
        return { bytes: encodeToMcworldArchive(model), ext: '.mcworld', mime: 'application/zip' };
      case 'schem':
      case 'bp':
        return { bytes: await encodeToSpongeSchem(model, true), ext: targetFormat === 'bp' ? '.bp' : '.schem', mime: 'application/octet-stream' };
      case 'litematic':
        return { bytes: await encodeToSpongeSchem(model, true), ext: '.litematic', mime: 'application/octet-stream' };
      case 'schematic':
        return { bytes: await encodeToLegacySchematic(model, true), ext: '.schematic', mime: 'application/octet-stream' };
      case 'nbt':
        return { bytes: await encodeToVanillaJavaNbt(model, true), ext: '.nbt', mime: 'application/octet-stream' };
      case 'zip': {
        const nbtBytes = await encodeToVanillaJavaNbt(model, true);
        const safe = (model.name || 'structure').replace(/[^a-z0-9_]/gi, '_').toLowerCase();
        const zipBytes = buildZipArchive([
          { path: `generated/minecraft/structures/${safe}.nbt`, data: nbtBytes }
        ]);
        return { bytes: zipBytes, ext: '.zip', mime: 'application/zip' };
      }
      case 'obj':
        return { bytes: encodeToWavefrontObj(model), ext: '.obj', mime: 'text/plain' };
      case 'stl':
        return { bytes: encodeToAsciiStl(model), ext: '.stl', mime: 'model/stl' };
      case 'gltf':
        return { bytes: encodeToGlbBinary(model, true), ext: '.gltf', mime: 'model/gltf+json' };
      case 'glb':
        return { bytes: encodeToGlbBinary(model, false), ext: '.glb', mime: 'model/gltf-binary' };
      default:
        return { bytes: encodeToMcstructure(model), ext: '.mcstructure', mime: 'application/octet-stream' };
    }
  }

  /**
   * Computes mathematical statistics and block bill-of-materials for the active model.
   */
  computeMathematics(model = this.activeModel) {
    const [sx, sy, sz] = model.size;
    const counts = new Map();
    let solidTotal = 0;

    for (let i = 0; i < model.voxels.length; i++) {
      const idx = model.voxels[i];
      if (idx === 0) continue;
      solidTotal++;
      counts.set(idx, (counts.get(idx) || 0) + 1);
    }

    const targetFam = FORMAT_CATALOG.find((f) => f.id === this.targetFormat)?.family || 'bedrock';
    const { palette: translatedPal, report } = translateModelPalette(model, targetFam === 'java' ? 'java' : 'bedrock');

    const breakdown = [];
    for (const [palIdx, count] of counts.entries()) {
      const origName = model.palette[palIdx]?.name || 'minecraft:stone';
      const targetName = translatedPal[palIdx]?.name || origName;
      breakdown.push({
        originalName: origName,
        targetName,
        count,
        stacks: Math.ceil(count / 64),
        color: getBlockDisplayColor(origName) || [140, 140, 140],
        wasTranslated: origName !== targetName
      });
    }

    breakdown.sort((a, b) => b.count - a.count);
    const translatedCount = report.filter((r) => r.wasTranslated).length;

    return {
      dimensions: `${sx} × ${sy} × ${sz}`,
      volume: sx * sy * sz,
      solidTotal,
      uniqueBlocks: breakdown.length,
      translatedCount,
      breakdown
    };
  }

  _renderUI() {
    const renderChips = (family) =>
      FORMAT_CATALOG.filter((f) => f.family === family)
        .map(
          (f) => `
          <button type="button" class="sc-target-chip ${this.targetFormat === f.id ? 'is-active' : ''}" data-target-format="${f.id}">
            <span class="sc-target-ext">${f.label}</span>
            <span class="sc-target-desc">${f.desc}</span>
          </button>
        `
        )
        .join('');

    this.container.innerHTML = `
      <div class="sc-wrapper">
        <div class="sc-header-banner">
          <div>
            <h2>Conversor Universal de Esquemáticos</h2>
            <p>Conversión bidireccional Java Edition ↔ Bedrock Edition ↔ Modelos 3D con traducción automática de bloques GeyserMC.</p>
          </div>
          <div class="sc-preset-bar" role="group" aria-label="Plantillas de prueba">
            <button type="button" class="sc-btn" data-preset="portal_ruin">Ruina Portal (.mcstructure)</button>
            <button type="button" class="sc-btn" data-preset="redstone_tower">Torre Redstone (.schem)</button>
            <button type="button" class="sc-btn" data-preset="amethyst_shrine">Santuario (.litematic)</button>
          </div>
        </div>

        <div class="sc-main-grid">
          <!-- COLUMNA IZQUIERDA: ENTRADA, TRANSFORMACIONES Y FORMATO DE SALIDA -->
          <div class="sc-col-left" style="display:flex;flex-direction:column;gap:14px;">
            <section class="sc-card">
              <div class="sc-card-header">
                <h3>1. Archivo de Entrada</h3>
                <span class="sc-badge" id="sc-detected-badge">ORIGEN: .MCSTRUCTURE</span>
              </div>
              <div class="sc-card-body">
                <label class="sc-dropzone" id="sc-dropzone">
                  <input type="file" id="sc-file-input" accept=".mcstructure,.schem,.schematic,.litematic,.nbt,.bp,.mcworld,.mcpack,.zip" />
                  <div class="sc-dropzone-title" id="sc-file-title">Arrastra o toca para cargar esquemático</div>
                  <div class="sc-dropzone-sub">Soporta .schem, .litematic, .schematic, .nbt, .bp, .mcstructure, .mcworld, .mcpack, .zip</div>
                  <div class="sc-format-pills">
                    <span class="sc-format-pill is-bedrock">Bedrock NBT</span>
                    <span class="sc-format-pill is-java">Java Sponge / Litematica</span>
                    <span class="sc-format-pill is-3d">GeyserMC Auto-Mapper</span>
                  </div>
                </label>
              </div>
            </section>

            <section class="sc-card">
              <div class="sc-card-header">
                <h3>2. Transformaciones Pre-Conversión</h3>
                <span class="sc-badge">GEOMETRÍA</span>
              </div>
              <div class="sc-card-body">
                <div class="sc-transform-row">
                  <button type="button" class="sc-toggle-btn" data-transform="rotateY90">Rotar 90° (Eje Y)</button>
                  <button type="button" class="sc-toggle-btn" data-transform="flipX">Espejo Eje X</button>
                  <button type="button" class="sc-toggle-btn" data-transform="flipZ">Espejo Eje Z</button>
                  <button type="button" class="sc-toggle-btn" data-transform="hollow">Hueco Interior (Hollow)</button>
                </div>
              </div>
            </section>

            <section class="sc-card">
              <div class="sc-card-header">
                <h3>3. Formato de Destino</h3>
                <span class="sc-badge" id="sc-target-badge">SALIDA: .SCHEM</span>
              </div>
              <div class="sc-card-body">
                <div class="sc-target-groups">
                  <div>
                    <div class="sc-target-group-label">Minecraft Bedrock Edition</div>
                    <div class="sc-target-chips">${renderChips('bedrock')}</div>
                  </div>
                  <div>
                    <div class="sc-target-group-label">Minecraft Java Edition</div>
                    <div class="sc-target-chips">${renderChips('java')}</div>
                  </div>
                  <div>
                    <div class="sc-target-group-label">Modelos y Mallas 3D</div>
                    <div class="sc-target-chips">${renderChips('3d')}</div>
                  </div>
                </div>

                <div class="sc-actions-bar">
                  <button type="button" class="sc-btn sc-btn-primary" id="sc-convert-download-btn">
                    Convertir y Descargar (.schem)
                  </button>
                </div>
                <div class="sc-status-banner is-ok" id="sc-status-banner">
                  Listo: Traducción de estados GeyserMC activa entre Java y Bedrock.
                </div>
              </div>
            </section>
          </div>

          <!-- COLUMNA DERECHA: VISOR 3D INTERACTIVO Y MATEMÁTICA DE BLOQUES -->
          <div class="sc-col-right" style="display:flex;flex-direction:column;gap:14px;">
            <section class="sc-card">
              <div class="sc-card-header">
                <h3>Visor 3D de Estructura y Capas</h3>
                <div style="display:flex;gap:6px;">
                  <button type="button" class="sc-btn" id="sc-toggle-wireframe" style="padding:4px 10px;font-size:11px;">Rayos X / Borde</button>
                  <button type="button" class="sc-btn" id="sc-reset-cam" style="padding:4px 10px;font-size:11px;">Centrar Vista</button>
                </div>
              </div>
              <div class="sc-card-body">
                <div class="sc-viewport-frame">
                  <canvas class="sc-preview-canvas" id="sc-preview-canvas" width="640" height="320"></canvas>
                  <div class="sc-viewport-overlay">
                    <span class="sc-viewport-tag" id="sc-viewport-title">portal_ruina_bedrock</span>
                    <span class="sc-viewport-tag" id="sc-viewport-dims">8 × 8 × 8</span>
                  </div>
                  <div class="sc-layer-bar">
                    <label for="sc-layer-slider">Corte Capa Y</label>
                    <input type="range" id="sc-layer-slider" min="1" max="8" value="8" />
                    <span class="sc-viewport-tag" id="sc-layer-val">Y: 8/8</span>
                  </div>
                </div>

                <div class="sc-stats-grid" style="margin-top:12px;">
                  <div class="sc-stat-box">
                    <div class="sc-stat-label">Dimensiones</div>
                    <div class="sc-stat-value" id="sc-stat-dims">8 × 8 × 8</div>
                  </div>
                  <div class="sc-stat-box">
                    <div class="sc-stat-label">Bloques Sólidos</div>
                    <div class="sc-stat-value is-accent" id="sc-stat-solid">0</div>
                  </div>
                  <div class="sc-stat-box">
                    <div class="sc-stat-label">Tipos Únicos</div>
                    <div class="sc-stat-value" id="sc-stat-unique">0</div>
                  </div>
                  <div class="sc-stat-box">
                    <div class="sc-stat-label">IDs Traducidos (Geyser)</div>
                    <div class="sc-stat-value is-amber" id="sc-stat-translated">0</div>
                  </div>
                </div>
              </div>
            </section>

            <section class="sc-card">
              <div class="sc-card-header">
                <h3>Desglose Matemático y Mapeo de Bloques (Java ↔ Bedrock)</h3>
                <span class="sc-badge" id="sc-bom-summary">0 STACKS</span>
              </div>
              <div class="sc-card-body">
                <div class="sc-block-list" id="sc-block-list"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    `;
  }

  _bindEvents() {
    const fileInput = this.container.querySelector('#sc-file-input');
    const dropzone = this.container.querySelector('#sc-dropzone');

    if (fileInput) {
      fileInput.addEventListener('change', async (e) => {
        const file = e.target.files?.[0];
        if (file) await this.handleFileUpload(file);
      });
    }

    if (dropzone) {
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('is-dragover');
      });
      dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('is-dragover');
      });
      dropzone.addEventListener('drop', async (e) => {
        e.preventDefault();
        dropzone.classList.remove('is-dragover');
        const file = e.dataTransfer?.files?.[0];
        if (file) await this.handleFileUpload(file);
      });
    }

    // Preset buttons
    this.container.querySelectorAll('[data-preset]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const presetId = btn.getAttribute('data-preset');
        this.baseModel = buildPresetVoxelModel(presetId);
        this.sourceFormat = this.baseModel.sourceFormat;
        this._refreshModelAndView();
        this._setStatus(`Plantilla cargada: ${this.baseModel.name} (${this.baseModel.size.join('×')})`, 'ok');
      });
    });

    // Target format chips
    this.container.querySelectorAll('[data-target-format]').forEach((chip) => {
      chip.addEventListener('click', () => {
        this.targetFormat = chip.getAttribute('data-target-format') || 'mcstructure';
        this.container.querySelectorAll('[data-target-format]').forEach((c) => {
          c.classList.toggle('is-active', c.getAttribute('data-target-format') === this.targetFormat);
        });
        this._refreshModelAndView();
      });
    });

    // Transformation toggles
    this.container.querySelectorAll('[data-transform]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-transform');
        this.transformOptions[key] = !this.transformOptions[key];
        btn.classList.toggle('is-active', this.transformOptions[key]);
        this._refreshModelAndView();
      });
    });

    // Layer Y slider
    const slider = this.container.querySelector('#sc-layer-slider');
    if (slider) {
      slider.addEventListener('input', () => {
        this.layerYLimit = Number(slider.value) || 1;
        const lbl = this.container.querySelector('#sc-layer-val');
        if (lbl) lbl.textContent = `Y: ${this.layerYLimit}/${this.activeModel.size[1]}`;
        this._draw3DPreview();
      });
    }

    // Camera controls on 3D canvas
    const canvas = this.container.querySelector('#sc-preview-canvas');
    if (canvas) {
      let dragging = false;
      let lastX = 0;
      let lastY = 0;

      const onDown = (cx, cy) => {
        dragging = true;
        lastX = cx;
        lastY = cy;
      };
      const onMove = (cx, cy) => {
        if (!dragging) return;
        const dx = cx - lastX;
        const dy = cy - lastY;
        lastX = cx;
        lastY = cy;
        this.yaw += dx * 0.012;
        this.pitch = Math.max(-1.2, Math.min(1.2, this.pitch + dy * 0.012));
        this._draw3DPreview();
      };
      const onUp = () => { dragging = false; };

      canvas.addEventListener('mousedown', (e) => onDown(e.clientX, e.clientY));
      window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
      window.addEventListener('mouseup', onUp);

      canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          onDown(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });
      canvas.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
          onMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });
      canvas.addEventListener('touchend', onUp);
    }

    const wireBtn = this.container.querySelector('#sc-toggle-wireframe');
    if (wireBtn) {
      wireBtn.addEventListener('click', () => {
        this.wireframe = !this.wireframe;
        this._draw3DPreview();
      });
    }

    const resetCamBtn = this.container.querySelector('#sc-reset-cam');
    if (resetCamBtn) {
      resetCamBtn.addEventListener('click', () => {
        this.yaw = 0.68;
        this.pitch = 0.45;
        this._draw3DPreview();
      });
    }

    const convertBtn = this.container.querySelector('#sc-convert-download-btn');
    if (convertBtn) {
      convertBtn.addEventListener('click', () => this.triggerConversionDownload());
    }
  }

  async handleFileUpload(file) {
    try {
      const buf = await file.arrayBuffer();
      const uint8 = new Uint8Array(buf);
      const loaded = await this.loadFromBytes(uint8, file.name);
      this.baseModel = loaded;
      this.sourceFormat = loaded.sourceFormat;
      this._refreshModelAndView();
      const titleEl = this.container.querySelector('#sc-file-title');
      if (titleEl) titleEl.textContent = `Archivo cargado: ${file.name}`;
      this._setStatus(`Estructura "${file.name}" decodificada con éxito (${loaded.size.join('×')}).`, 'ok');
    } catch (err) {
      this._setStatus(err?.message || 'Error al leer el archivo de entrada.', 'warn');
    }
  }

  _refreshModelAndView() {
    this.activeModel = transformVoxelModel(this.baseModel, this.transformOptions);
    this.layerYLimit = this.activeModel.size[1];

    const slider = this.container.querySelector('#sc-layer-slider');
    if (slider) {
      slider.max = String(this.activeModel.size[1]);
      slider.value = String(this.layerYLimit);
    }
    const layerLbl = this.container.querySelector('#sc-layer-val');
    if (layerLbl) {
      layerLbl.textContent = `Y: ${this.layerYLimit}/${this.activeModel.size[1]}`;
    }

    const detectedBadge = this.container.querySelector('#sc-detected-badge');
    if (detectedBadge) {
      detectedBadge.textContent = `ORIGEN: .${this.sourceFormat.toUpperCase()}`;
    }

    const targetMeta = FORMAT_CATALOG.find((f) => f.id === this.targetFormat) || FORMAT_CATALOG[0];
    const targetBadge = this.container.querySelector('#sc-target-badge');
    if (targetBadge) {
      targetBadge.textContent = `SALIDA: ${targetMeta.ext.toUpperCase()}`;
    }

    const convertBtn = this.container.querySelector('#sc-convert-download-btn');
    if (convertBtn) {
      convertBtn.textContent = `Convertir y Descargar (${targetMeta.ext})`;
    }

    const vpTitle = this.container.querySelector('#sc-viewport-title');
    if (vpTitle) vpTitle.textContent = `${this.activeModel.name}${targetMeta.ext}`;

    const stats = this.computeMathematics(this.activeModel);
    const vpDims = this.container.querySelector('#sc-viewport-dims');
    if (vpDims) vpDims.textContent = stats.dimensions;

    const elDims = this.container.querySelector('#sc-stat-dims');
    const elSolid = this.container.querySelector('#sc-stat-solid');
    const elUnique = this.container.querySelector('#sc-stat-unique');
    const elTrans = this.container.querySelector('#sc-stat-translated');
    if (elDims) elDims.textContent = stats.dimensions;
    if (elSolid) elSolid.textContent = stats.solidTotal.toLocaleString();
    if (elUnique) elUnique.textContent = String(stats.uniqueBlocks);
    if (elTrans) elTrans.textContent = String(stats.translatedCount);

    const totalStacks = stats.breakdown.reduce((acc, b) => acc + b.stacks, 0);
    const bomSummary = this.container.querySelector('#sc-bom-summary');
    if (bomSummary) bomSummary.textContent = `${totalStacks} STACKS TOTALES`;

    const listEl = this.container.querySelector('#sc-block-list');
    if (listEl) {
      listEl.innerHTML = stats.breakdown
        .map((item) => {
          const [r, g, b] = item.color;
          const label = item.wasTranslated
            ? `${item.originalName} → ${item.targetName}`
            : item.targetName;
          return `
            <div class="sc-block-item">
              <span class="sc-block-swatch" style="background:rgb(${r},${g},${b})"></span>
              <span class="sc-block-name" title="${label}">${label}</span>
              <span class="sc-block-count">${item.count} blq (${item.stacks} stk)</span>
            </div>
          `;
        })
        .join('');
    }

    this._draw3DPreview();
  }

  _draw3DPreview() {
    const canvas = this.container?.querySelector('#sc-preview-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Subtle background grid
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let gx = 0; gx < w; gx += 32) {
      ctx.beginPath();
      ctx.moveTo(gx, 0);
      ctx.lineTo(gx, h);
      ctx.stroke();
    }
    for (let gy = 0; gy < h; gy += 32) {
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(w, gy);
      ctx.stroke();
    }

    const [sx, sy, sz] = this.activeModel.size;
    const maxDim = Math.max(sx, sy, sz, 1);
    const scale = Math.min(w, h) / (maxDim * 1.85) * this.zoom;

    const cosY = Math.cos(this.yaw);
    const sinY = Math.sin(this.yaw);
    const cosP = Math.cos(this.pitch);
    const sinP = Math.sin(this.pitch);

    const project = (vx, vy, vz) => {
      const cx = vx - sx / 2;
      const cy = vy - sy / 2;
      const cz = vz - sz / 2;
      const rx = cx * cosY - cz * sinY;
      const rz = cx * sinY + cz * cosY;
      const ry = cy * cosP - rz * sinP;
      const depth = cy * sinP + rz * cosP;
      return {
        x: w / 2 + rx * scale,
        y: h / 2 - ry * scale,
        depth
      };
    };

    const voxelsToDraw = [];
    const maxY = Math.min(sy, this.layerYLimit);
    for (let x = 0; x < sx; x++) {
      for (let y = 0; y < maxY; y++) {
        for (let z = 0; z < sz; z++) {
          const palIdx = this.activeModel.voxels[voxelIndex(x, y, z, this.activeModel.size)];
          if (palIdx === 0) continue;
          const center = project(x + 0.5, y + 0.5, z + 0.5);
          voxelsToDraw.push({ x, y, z, palIdx, depth: center.depth });
        }
      }
    }

    // Painter's algorithm back-to-front
    voxelsToDraw.sort((a, b) => a.depth - b.depth);

    for (const v of voxelsToDraw) {
      const bName = this.activeModel.palette[v.palIdx]?.name || 'minecraft:stone';
      const [r, g, b] = getBlockDisplayColor(bName) || [140, 140, 140];

      const p000 = project(v.x, v.y, v.z);
      const p100 = project(v.x + 1, v.y, v.z);
      const p101 = project(v.x + 1, v.y, v.z + 1);
      const p001 = project(v.x, v.y, v.z + 1);
      const p010 = project(v.x, v.y + 1, v.z);
      const p110 = project(v.x + 1, v.y + 1, v.z);
      const p111 = project(v.x + 1, v.y + 1, v.z + 1);
      const p011 = project(v.x, v.y + 1, v.z + 1);

      const drawQuad = (pts, shade) => {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        ctx.lineTo(pts[1].x, pts[1].y);
        ctx.lineTo(pts[2].x, pts[2].y);
        ctx.lineTo(pts[3].x, pts[3].y);
        ctx.closePath();
        if (!this.wireframe) {
          ctx.fillStyle = `rgb(${Math.round(r * shade)},${Math.round(g * shade)},${Math.round(b * shade)})`;
          ctx.fill();
        }
        ctx.strokeStyle = this.wireframe
          ? `rgba(${r},${g},${b},0.85)`
          : 'rgba(15,20,28,0.35)';
        ctx.lineWidth = this.wireframe ? 1.1 : 0.6;
        ctx.stroke();
      };

      // Top face
      drawQuad([p010, p110, p111, p011], 1.05);
      // Left/Front face
      drawQuad([p001, p101, p111, p011], 0.85);
      // Right/Side face
      drawQuad([p100, p101, p111, p110], 0.7);
    }
  }

  _setStatus(message, type = 'ok') {
    const banner = this.container?.querySelector('#sc-status-banner');
    if (!banner) return;
    banner.textContent = message;
    banner.className = `sc-status-banner ${type === 'warn' ? 'is-warn' : 'is-ok'}`;
  }

  async triggerConversionDownload() {
    try {
      const { bytes, ext, mime } = await this.convertModelToBytes(this.activeModel, this.targetFormat);
      const safeName = (this.activeModel.name || 'estructura').replace(/[^a-z0-9_-]/gi, '_');
      const fileName = `${safeName}_vkyakee${ext}`;

      if (typeof document !== 'undefined') {
        const blob = new Blob([bytes], { type: mime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      }

      this._setStatus(
        `¡Conversión completada! Archivo "${fileName}" (${(bytes.byteLength / 1024).toFixed(2)} KB) exportado con éxito.`,
        'ok'
      );
      return { fileName, bytes };
    } catch (err) {
      this._setStatus(`Error en la conversión: ${err?.message || err}`, 'warn');
      throw err;
    }
  }
}

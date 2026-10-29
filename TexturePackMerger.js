/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * TexturePackMerger — Fusionador de Paquetes de Texturas (.mcpack / .zip)
 * Con soporte completo para Variantes de Textura (terrain_texture.json -> variations)
 * y Texturas Animadas (flipbook_textures.json).
 */

import * as zip from '@zip.js/zip.js';

// ---------------------------------------------------------------------------
// 1. UTILIDADES DE UUID V4 Y MANIFEST DE MINECRAFT BEDROCK
// ---------------------------------------------------------------------------

/**
 * Genera un UUID v4 estándar compatible con Minecraft Bedrock.
 */
export function generateUuidV4() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Genera un nuevo manifest.json para el paquete fusionado con UUIDs únicos
 * para evitar conflictos de versión o paquetes duplicados en Minecraft Bedrock.
 */
export function buildMergedManifest(options = {}) {
  const name = options.name || 'VkYakee Merged Texture Pack';
  const description =
    options.description ||
    'Paquete de texturas fusionado con VkYakee Texture Pack Merger';
  const version = Array.isArray(options.version) ? options.version : [1, 0, 0];
  const minEngineVersion = Array.isArray(options.minEngineVersion)
    ? options.minEngineVersion
    : [1, 20, 0];

  return {
    format_version: 2,
    header: {
      name,
      description,
      uuid: options.headerUuid || generateUuidV4(),
      version,
      min_engine_version: minEngineVersion,
    },
    modules: [
      {
        type: 'resources',
        description: `Recursos fusionados (${name})`,
        uuid: options.moduleUuid || generateUuidV4(),
        version,
      },
    ],
    metadata: {
      authors: ['VkYakee'],
      url: 'https://github.com/VkYakee/holoprint',
    },
  };
}

// ---------------------------------------------------------------------------
// 2. EXTRACCIÓN Y FUSIÓN DE VARIANTES (terrain_texture.json) Y FLIPBOOKS
// ---------------------------------------------------------------------------

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Elimina comentarios estilo C/C++ (// y /* * /) habituales en archivos JSON de Minecraft Bedrock.
 */
export function stripJsonComments(rawText) {
  return String(rawText || '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '')
    .trim();
}

/**
 * Normaliza una ruta de textura sin extensión `.png` para compararla con `terrain_texture.json`.
 * Ejemplo: "textures/blocks/stone.png" -> "textures/blocks/stone"
 */
export function normalizeTextureRef(rawPath) {
  let clean = String(rawPath || '')
    .trim()
    .replace(/\\/g, '/')
    .replace(/^\/+/, '')
    .replace(/\.png$/i, '');
  if (!clean) return '';
  if (!clean.includes('/')) {
    return `textures/blocks/${clean}`;
  }
  return clean;
}

/**
 * Normaliza cualquier definición de `textures` dentro de `terrain_texture.json -> texture_data[blockName]`
 * para convertirla en una lista uniforme de variantes `{ path, weight }`.
 *
 * Soporta los 3 formatos oficiales de Bedrock:
 * 1) `{ textures: { variations: [ { path: "textures/blocks/stone", weight: 70 }, ... ] } }`
 * 2) `{ textures: [ "textures/blocks/stone", { path: "textures/blocks/stone_2", weight: 20 } ] }`
 * 3) `{ textures: "textures/blocks/stone" }`
 */
export function extractVariationsFromBlockEntry(blockEntry) {
  if (!isPlainObject(blockEntry)) return [];
  const texField = blockEntry.textures;
  if (!texField) return [];

  // Formato 1: textures.variations = [ { path, weight } ]
  if (isPlainObject(texField) && Array.isArray(texField.variations)) {
    return texField.variations
      .map((v) => {
        if (typeof v === 'string') {
          return { path: normalizeTextureRef(v), weight: 100 };
        }
        if (isPlainObject(v) && v.path) {
          return {
            path: normalizeTextureRef(v.path),
            weight: Number.isFinite(Number(v.weight)) ? Number(v.weight) : 100,
          };
        }
        return null;
      })
      .filter(Boolean);
  }

  // Formato 2: textures = [ ... ]
  if (Array.isArray(texField)) {
    return texField
      .map((v) => {
        if (typeof v === 'string') {
          return { path: normalizeTextureRef(v), weight: 100 };
        }
        if (isPlainObject(v) && (v.path || v.textures)) {
          return {
            path: normalizeTextureRef(v.path || v.textures),
            weight: Number.isFinite(Number(v.weight)) ? Number(v.weight) : 100,
          };
        }
        return null;
      })
      .filter(Boolean);
  }

  // Formato 3: textures = "textures/blocks/..." o { path: "..." }
  if (typeof texField === 'string') {
    return [{ path: normalizeTextureRef(texField), weight: 100 }];
  }
  if (isPlainObject(texField) && texField.path) {
    return [
      {
        path: normalizeTextureRef(texField.path),
        weight: Number.isFinite(Number(texField.weight)) ? Number(texField.weight) : 100,
      },
    ];
  }

  return [];
}

/**
 * Combina de forma no destructiva las definiciones de un mismo bloque en `terrain_texture.json`
 * entre un paquete de menor prioridad (`baseBlockEntry`) y uno de mayor prioridad (`overrideBlockEntry`).
 *
 * - Si cualquiera de los dos paquetes usa `variations` (o si ambos definen variantes distintas),
 *   combina los arreglos de `variations` dando prioridad de orden al paquete superior (`overrideBlockEntry`)
 *   y sumando los pesos (`weight`) cuando ambos paquetes contienen exactamente la misma ruta `path`.
 */
export function mergeBlockTextureDefinition(baseBlockEntry, overrideBlockEntry) {
  const baseHasVars =
    isPlainObject(baseBlockEntry?.textures) && Array.isArray(baseBlockEntry.textures.variations);
  const overrideHasVars =
    isPlainObject(overrideBlockEntry?.textures) && Array.isArray(overrideBlockEntry.textures.variations);

  const baseVars = extractVariationsFromBlockEntry(baseBlockEntry);
  const overrideVars = extractVariationsFromBlockEntry(overrideBlockEntry);

  // Si al menos uno define múltiples variantes o usa el bloque `variations`, fusionamos los arrays
  if (baseHasVars || overrideHasVars || baseVars.length > 1 || overrideVars.length > 1) {
    const combinedMap = new Map();

    // Primero insertamos las variantes del paquete de MAYOR prioridad para que encabecen la lista
    for (const item of overrideVars) {
      combinedMap.set(item.path, { path: item.path, weight: item.weight });
    }

    // Luego integramos las variantes del paquete de MENOR prioridad, sumando pesos si coinciden en ruta
    for (const item of baseVars) {
      if (combinedMap.has(item.path)) {
        const existing = combinedMap.get(item.path);
        existing.weight = Number(existing.weight || 0) + Number(item.weight || 0);
      } else {
        combinedMap.set(item.path, { path: item.path, weight: item.weight });
      }
    }

    const mergedVariations = Array.from(combinedMap.values());
    return {
      ...baseBlockEntry,
      ...overrideBlockEntry,
      textures: {
        ...(isPlainObject(baseBlockEntry?.textures) ? baseBlockEntry.textures : {}),
        ...(isPlainObject(overrideBlockEntry?.textures) ? overrideBlockEntry.textures : {}),
        variations: mergedVariations,
      },
    };
  }

  // Si ambos son texturas simples sin variaciones, prevalece el paquete superior
  return {
    ...baseBlockEntry,
    ...overrideBlockEntry,
  };
}

/**
 * Función auxiliar `getTextureVariants(texturePath, jsonFiles)`:
 * Busca en `terrain_texture.json` y `flipbook_textures.json` todas las variantes
 * y parámetros de animación (Flipbook) asociados a una ruta de textura o nombre de bloque.
 *
 * @param {string} texturePath Nombre corto (ej. "stone") o ruta (ej. "textures/blocks/stone.png")
 * @param {Object|Map} jsonFiles Objeto `{ terrainTexture, flipbookTextures }` o `Map` de archivos del pack
 * @returns {Array<{ index: number, path: string, filePath: string, weight: number, label: string }>}
 *          Array de variantes enriquecido con metadatos `.blockKey`, `.isFlipbook` y `.flipbook`.
 */
export function getTextureVariants(texturePath, jsonFiles = {}) {
  const normTarget = normalizeTextureRef(texturePath);
  const shortTarget = normTarget.split('/').pop().toLowerCase();

  let terrainJson = null;
  let flipbookJson = null;

  // Extraer terrain_texture.json y flipbook_textures.json desde Map o desde objeto plano
  if (jsonFiles instanceof Map) {
    const decoder = new TextDecoder('utf-8');
    const readMapJson = (key) => {
      const entry = jsonFiles.get(key);
      if (!entry) return null;
      const bytes = entry.bytes instanceof Uint8Array ? entry.bytes : entry;
      try {
        return JSON.parse(stripJsonComments(decoder.decode(bytes)));
      } catch {
        return null;
      }
    };
    terrainJson = readMapJson('textures/terrain_texture.json');
    flipbookJson = readMapJson('textures/flipbook_textures.json');
  } else if (isPlainObject(jsonFiles)) {
    terrainJson =
      jsonFiles.terrainTexture ||
      jsonFiles['textures/terrain_texture.json'] ||
      jsonFiles['terrain_texture.json'] ||
      null;
    flipbookJson =
      jsonFiles.flipbookTextures ||
      jsonFiles['textures/flipbook_textures.json'] ||
      jsonFiles['flipbook_textures.json'] ||
      null;
  }

  let matchedBlockKey = null;
  let rawVars = [];

  const textureData = terrainJson?.texture_data;
  if (isPlainObject(textureData)) {
    // 1. Coincidencia directa por nombre de clave en texture_data (ej. "stone", "dirt")
    if (textureData[shortTarget]) {
      matchedBlockKey = shortTarget;
      rawVars = extractVariationsFromBlockEntry(textureData[shortTarget]);
    } else {
      // 2. Búsqueda inversa: encontrar qué bloque en texture_data incluye `normTarget` en sus variantes
      for (const [bKey, bEntry] of Object.entries(textureData)) {
        const candidateVars = extractVariationsFromBlockEntry(bEntry);
        if (
          candidateVars.some(
            (v) => v.path.toLowerCase() === normTarget.toLowerCase() || v.path.split('/').pop().toLowerCase() === shortTarget
          )
        ) {
          matchedBlockKey = bKey;
          rawVars = candidateVars;
          break;
        }
      }
    }
  }

  if (rawVars.length === 0 && normTarget) {
    rawVars = [{ path: normTarget, weight: 100 }];
  }

  const totalWeight = rawVars.reduce((acc, v) => acc + (Number(v.weight) || 0), 0) || 100;

  const variantsList = rawVars.map((v, idx) => {
    const cleanRef = normalizeTextureRef(v.path);
    const pct = Math.round(((Number(v.weight) || 0) / totalWeight) * 100);
    return {
      index: idx,
      path: cleanRef,
      filePath: `${cleanRef}.png`,
      weight: Number(v.weight) || 100,
      percentage: pct,
      label: `Variante ${idx} (Peso: ${v.weight ?? 100})`,
    };
  });

  // Buscar si la textura o bloque está registrado en flipbook_textures.json
  let matchedFlipbook = null;
  if (Array.isArray(flipbookJson)) {
    matchedFlipbook =
      flipbookJson.find((fb) => {
        if (!isPlainObject(fb)) return false;
        const fbRef = normalizeTextureRef(fb.flipbook_texture || '');
        const tileRef = String(fb.atlas_tile || '').toLowerCase();
        return (
          fbRef.toLowerCase() === normTarget.toLowerCase() ||
          fbRef.split('/').pop().toLowerCase() === shortTarget ||
          tileRef === shortTarget ||
          (matchedBlockKey && tileRef === matchedBlockKey.toLowerCase())
        );
      }) || null;
  }

  // Adjuntar metadatos no destructivos sobre el Array devuelto
  Object.defineProperties(variantsList, {
    blockKey: { value: matchedBlockKey || shortTarget, enumerable: false, writable: true },
    hasMultipleVariants: { value: variantsList.length > 1, enumerable: false, writable: true },
    hasVariations: { value: variantsList.length > 1, enumerable: false, writable: true },
    variations: { value: variantsList, enumerable: false, writable: true },
    isFlipbook: { value: Boolean(matchedFlipbook), enumerable: false, writable: true },
    flipbook: {
      value: matchedFlipbook
        ? {
            flipbook_texture: normalizeTextureRef(matchedFlipbook.flipbook_texture),
            atlas_tile: matchedFlipbook.atlas_tile || matchedBlockKey || shortTarget,
            ticks_per_frame: Number(matchedFlipbook.ticks_per_frame) || 10,
            frames: Array.isArray(matchedFlipbook.frames) ? matchedFlipbook.frames : [0, 1, 2, 3],
            blend_frames: matchedFlipbook.blend_frames !== false,
          }
        : null,
      enumerable: false,
      writable: true,
    },
  });

  return variantsList;
}

/**
 * Elimina una variante específica por índice o ruta dentro de un objeto `terrain_texture.json`.
 */
export function removeVariantFromTerrainJson(terrainJsonObj, blockKey, variantIndexOrPath) {
  if (!isPlainObject(terrainJsonObj?.texture_data?.[blockKey])) return terrainJsonObj;
  const cloned = structuredClone
    ? structuredClone(terrainJsonObj)
    : JSON.parse(JSON.stringify(terrainJsonObj));
  const entry = cloned.texture_data[blockKey];
  const currentVars = extractVariationsFromBlockEntry(entry);

  if (currentVars.length <= 1) {
    return cloned; // Conservar al menos 1 textura para no dejar el bloque sin textura
  }

  const filtered = currentVars.filter((v, idx) => {
    if (typeof variantIndexOrPath === 'number') {
      return idx !== variantIndexOrPath;
    }
    return normalizeTextureRef(v.path) !== normalizeTextureRef(variantIndexOrPath);
  });

  entry.textures = {
    ...(isPlainObject(entry.textures) ? entry.textures : {}),
    variations: filtered,
  };

  return cloned;
}

/**
 * Fusión profunda (Deep Merge) entre un objeto base (menor prioridad) y un objeto
 * prioritario (mayor prioridad).
 *
 * Incluye soporte especializado para:
 * - `terrain_texture.json`: combina los arrays `variations` de un mismo bloque sin sobrescribirlos
 *   destructivamente, sumando pesos o priorizando según la jerarquía.
 * - `flipbook_textures.json`: combina entradas de animación por `flipbook_texture` / `atlas_tile`.
 */
export function deepMergeBedrockJson(baseObj, overrideObj) {
  if (Array.isArray(baseObj) && Array.isArray(overrideObj)) {
    const keyField = ['flipbook_texture', 'atlas_tile', 'identifier', 'name'].find(
      (k) =>
        (baseObj[0] && isPlainObject(baseObj[0]) && k in baseObj[0]) ||
        (overrideObj[0] && isPlainObject(overrideObj[0]) && k in overrideObj[0])
    );

    if (keyField) {
      const mergedMap = new Map();
      for (const item of baseObj) {
        if (isPlainObject(item) && item[keyField]) {
          mergedMap.set(
            item[keyField],
            structuredClone ? structuredClone(item) : JSON.parse(JSON.stringify(item))
          );
        }
      }
      for (const item of overrideObj) {
        if (isPlainObject(item) && item[keyField]) {
          const existing = mergedMap.get(item[keyField]);
          mergedMap.set(
            item[keyField],
            existing
              ? deepMergeBedrockJson(existing, item)
              : structuredClone
                ? structuredClone(item)
                : JSON.parse(JSON.stringify(item))
          );
        }
      }
      return Array.from(mergedMap.values());
    }

    return Array.from(new Set([...baseObj, ...overrideObj]));
  }

  if (isPlainObject(baseObj) && isPlainObject(overrideObj)) {
    const result = { ...baseObj };
    for (const [key, overrideVal] of Object.entries(overrideObj)) {
      if (overrideVal === undefined) continue;

      // Caso especial: `texture_data` dentro de `terrain_texture.json`
      if (key === 'texture_data' && isPlainObject(result.texture_data) && isPlainObject(overrideVal)) {
        const mergedTexData = { ...result.texture_data };
        for (const [blockName, overBlockDef] of Object.entries(overrideVal)) {
          if (blockName in mergedTexData && isPlainObject(mergedTexData[blockName]) && isPlainObject(overBlockDef)) {
            mergedTexData[blockName] = mergeBlockTextureDefinition(mergedTexData[blockName], overBlockDef);
          } else {
            mergedTexData[blockName] = structuredClone
              ? structuredClone(overBlockDef)
              : JSON.parse(JSON.stringify(overBlockDef));
          }
        }
        result.texture_data = mergedTexData;
        continue;
      }

      if (key in result && isPlainObject(result[key]) && isPlainObject(overrideVal)) {
        result[key] = deepMergeBedrockJson(result[key], overrideVal);
      } else if (key in result && Array.isArray(result[key]) && Array.isArray(overrideVal)) {
        result[key] = deepMergeBedrockJson(result[key], overrideVal);
      } else {
        result[key] = isPlainObject(overrideVal)
          ? deepMergeBedrockJson({}, overrideVal)
          : overrideVal;
      }
    }
    return result;
  }

  return overrideObj !== undefined ? overrideObj : baseObj;
}

/**
 * Fusiona una lista de paquetes ordenados por prioridad (índice 0 = MAYOR prioridad,
 * último índice = MENOR prioridad).
 */
export function mergePackHierarchy(packsInPriorityOrder, manifestOptions = {}) {
  const mergedFiles = new Map();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder('utf-8');

  const lowToHigh = [...packsInPriorityOrder].reverse();

  for (const pack of lowToHigh) {
    if (!pack || !pack.files) continue;

    for (const [rawPath, fileBytes] of pack.files.entries()) {
      const normalizedPath = normalizePackPath(rawPath);
      if (!normalizedPath || normalizedPath === 'manifest.json') {
        continue;
      }

      const existingEntry = mergedFiles.get(normalizedPath);
      const lowerPath = normalizedPath.toLowerCase();

      if (lowerPath.endsWith('.json') && existingEntry) {
        try {
          const baseJson = JSON.parse(stripJsonComments(decoder.decode(existingEntry.bytes)));
          const overrideJson = JSON.parse(stripJsonComments(decoder.decode(fileBytes)));
          const combined = deepMergeBedrockJson(baseJson, overrideJson);
          const mergedBytes = encoder.encode(JSON.stringify(combined, null, 2));

          const contributors = Array.from(new Set([...existingEntry.contributors, pack.name]));
          mergedFiles.set(normalizedPath, {
            path: normalizedPath,
            bytes: mergedBytes,
            sourcePack: pack.name,
            contributors,
            isMergedJson: contributors.length > 1,
            isEdited: false,
          });
          continue;
        } catch {
          // Fallback si algún JSON no es estándar
        }
      }

      if (lowerPath.endsWith('.lang') && existingEntry) {
        const mergedLangText = mergeLangFiles(
          decoder.decode(existingEntry.bytes),
          decoder.decode(fileBytes)
        );
        const contributors = Array.from(new Set([...existingEntry.contributors, pack.name]));
        mergedFiles.set(normalizedPath, {
          path: normalizedPath,
          bytes: encoder.encode(mergedLangText),
          sourcePack: pack.name,
          contributors,
          isMergedJson: contributors.length > 1,
          isEdited: false,
        });
        continue;
      }

      const contributors = existingEntry
        ? Array.from(new Set([...existingEntry.contributors, pack.name]))
        : [pack.name];

      mergedFiles.set(normalizedPath, {
        path: normalizedPath,
        bytes: fileBytes instanceof Uint8Array ? fileBytes : new Uint8Array(fileBytes),
        sourcePack: pack.name,
        contributors,
        isMergedJson: false,
        isEdited: false,
      });
    }
  }

  const manifestObj = buildMergedManifest(manifestOptions);
  mergedFiles.set('manifest.json', {
    path: 'manifest.json',
    bytes: encoder.encode(JSON.stringify(manifestObj, null, 2)),
    sourcePack: 'VkYakee Auto-Manifest',
    contributors: ['VkYakee Auto-Manifest'],
    isMergedJson: true,
    isEdited: false,
  });

  return mergedFiles;
}

export function normalizePackPath(rawPath) {
  let clean = String(rawPath || '').replace(/\\/g, '/').replace(/^\/+/, '');
  if (!clean || clean.endsWith('/')) return '';

  const knownRoots = [
    'textures/',
    'texts/',
    'sounds/',
    'models/',
    'particles/',
    'ui/',
    'font/',
    'entity/',
    'attachables/',
    'render_controllers/',
    'animations/',
  ];
  for (const root of knownRoots) {
    const idx = clean.indexOf('/' + root);
    if (idx > 0) {
      return clean.slice(idx + 1);
    }
  }
  if (clean.endsWith('/manifest.json')) {
    return 'manifest.json';
  }
  return clean;
}

function mergeLangFiles(baseText, overrideText) {
  const map = new Map();
  const parseLines = (txt) => {
    for (const rawLine of String(txt || '').split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const eqIdx = line.indexOf('=');
      if (eqIdx > 0) {
        const k = line.slice(0, eqIdx).trim();
        const v = line.slice(eqIdx + 1);
        map.set(k, v);
      }
    }
  };
  parseLines(baseText);
  parseLines(overrideText);
  return (
    Array.from(map.entries())
      .map(([k, v]) => `${k}=${v}`)
      .join('\n') + '\n'
  );
}

// ---------------------------------------------------------------------------
// 3. LECTURA Y ESCRITURA DE ARCHIVOS ZIP / MCPACK (@zip.js/zip.js + Fallback)
// ---------------------------------------------------------------------------

const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function computeCrc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

export async function readPackZipEntries(inputBlobOrBytes) {
  const fileMap = new Map();

  try {
    const blob =
      inputBlobOrBytes instanceof Blob
        ? inputBlobOrBytes
        : new Blob([inputBlobOrBytes], { type: 'application/zip' });
    const reader = new zip.ZipReader(new zip.BlobReader(blob), { useWebWorkers: false });
    const entries = await reader.getEntries();
    for (const entry of entries) {
      if (entry.directory) continue;
      const cleanPath = normalizePackPath(entry.filename);
      if (!cleanPath) continue;
      const uint8 = await entry.getData(new zip.Uint8ArrayWriter());
      fileMap.set(cleanPath, uint8);
    }
    await reader.close();
    if (fileMap.size > 0) return fileMap;
  } catch {
    // Fallback
  }

  const uint8 =
    inputBlobOrBytes instanceof Uint8Array
      ? inputBlobOrBytes
      : new Uint8Array(await inputBlobOrBytes.arrayBuffer());
  const view = new DataView(uint8.buffer, uint8.byteOffset, uint8.byteLength);
  const decoder = new TextDecoder('utf-8');
  let offset = 0;

  while (offset + 30 <= uint8.byteLength) {
    const sig = view.getUint32(offset, true);
    if (sig !== 0x04034b50) break;
    const method = view.getUint16(offset + 8, true);
    const compSize = view.getUint32(offset + 18, true);
    const nameLen = view.getUint16(offset + 26, true);
    const extraLen = view.getUint16(offset + 28, true);
    const rawName = decoder.decode(uint8.subarray(offset + 30, offset + 30 + nameLen));
    const dataStart = offset + 30 + nameLen + extraLen;
    const rawData = uint8.subarray(dataStart, dataStart + compSize);
    offset = dataStart + compSize;

    const cleanPath = normalizePackPath(rawName);
    if (!cleanPath) continue;

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
    fileMap.set(cleanPath, new Uint8Array(content));
  }

  return fileMap;
}

export async function compressMergedPackToBytes(mergedFilesMap) {
  try {
    const blobWriter = new zip.BlobWriter('application/zip');
    const zipWriter = new zip.ZipWriter(blobWriter, {
      level: 6,
      useWebWorkers: false,
    });

    for (const [path, entry] of mergedFilesMap.entries()) {
      const bytes = entry.bytes instanceof Uint8Array ? entry.bytes : new Uint8Array(entry);
      await zipWriter.add(path, new zip.Uint8ArrayReader(bytes));
    }

    await zipWriter.close();
    const outBlob = await blobWriter.getData();
    return new Uint8Array(await outBlob.arrayBuffer());
  } catch {
    const encoder = new TextEncoder();
    const entries = [];
    for (const [path, entry] of mergedFilesMap.entries()) {
      const nameBytes = encoder.encode(path);
      const dataBytes = entry.bytes instanceof Uint8Array ? entry.bytes : new Uint8Array(entry);
      entries.push({
        nameBytes,
        dataBytes,
        crc: computeCrc32(dataBytes),
        localOffset: 0,
      });
    }

    let localSize = 0;
    let centralSize = 0;
    for (const e of entries) {
      localSize += 30 + e.nameBytes.length + e.dataBytes.length;
      centralSize += 46 + e.nameBytes.length;
    }

    const out = new Uint8Array(localSize + centralSize + 22);
    const view = new DataView(out.buffer);
    let offset = 0;

    for (const e of entries) {
      e.localOffset = offset;
      view.setUint32(offset, 0x04034b50, true);
      view.setUint16(offset + 4, 20, true);
      view.setUint32(offset + 14, e.crc, true);
      view.setUint32(offset + 18, e.dataBytes.length, true);
      view.setUint32(offset + 22, e.dataBytes.length, true);
      view.setUint16(offset + 26, e.nameBytes.length, true);
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
      view.setUint32(offset + 16, e.crc, true);
      view.setUint32(offset + 20, e.dataBytes.length, true);
      view.setUint32(offset + 24, e.dataBytes.length, true);
      view.setUint16(offset + 28, e.nameBytes.length, true);
      view.setUint32(offset + 42, e.localOffset, true);
      offset += 46;
      out.set(e.nameBytes, offset);
      offset += e.nameBytes.length;
    }

    view.setUint32(offset, 0x06054b50, true);
    view.setUint16(offset + 8, entries.length, true);
    view.setUint16(offset + 10, entries.length, true);
    view.setUint32(offset + 12, offset - centralStart, true);
    view.setUint32(offset + 16, centralStart, true);

    return out;
  }
}

// ---------------------------------------------------------------------------
// 4. GENERADOR DE TEXTURAS PNG Y STRIPS FLIPBOOK EN MEMORIA
// ---------------------------------------------------------------------------

/**
 * Crea un PNG válido en memoria (soporta 16x16 o tira vertical de Flipbook 16x64).
 */
export function createSolidPixelArtPngBytes(
  primaryRgb = [16, 185, 129],
  accentRgb = [52, 211, 153],
  frameCount = 1
) {
  const width = 16;
  const height = 16 * Math.max(1, frameCount);

  const rawScanlines = new Uint8Array(height * (1 + width * 4));
  let ptr = 0;
  for (let y = 0; y < height; y++) {
    const frameIdx = Math.floor(y / 16);
    const localY = y % 16;
    rawScanlines[ptr++] = 0;
    for (let x = 0; x < width; x++) {
      const isBorder = x === 0 || localY === 0 || x === width - 1 || localY === 15;
      const isPattern = (x + localY + frameIdx * 2) % 4 === 0;
      const boost = frameIdx * 18;
      const [r, g, b] = isBorder || isPattern
        ? [
            Math.min(255, accentRgb[0] + boost),
            Math.min(255, accentRgb[1] + boost),
            Math.min(255, accentRgb[2] + boost),
          ]
        : primaryRgb;
      rawScanlines[ptr++] = r;
      rawScanlines[ptr++] = g;
      rawScanlines[ptr++] = b;
      rawScanlines[ptr++] = 255;
    }
  }

  const len = rawScanlines.length;
  const zlibBlock = new Uint8Array(2 + 5 + len + 4);
  zlibBlock[0] = 0x78;
  zlibBlock[1] = 0x01;
  zlibBlock[2] = 0x01;
  zlibBlock[3] = len & 0xff;
  zlibBlock[4] = (len >>> 8) & 0xff;
  const nlen = ~len & 0xffff;
  zlibBlock[5] = nlen & 0xff;
  zlibBlock[6] = (nlen >>> 8) & 0xff;
  zlibBlock.set(rawScanlines, 7);

  let a = 1;
  let b = 0;
  for (let i = 0; i < len; i++) {
    a = (a + rawScanlines[i]) % 65521;
    b = (b + a) % 65521;
  }
  const adler = ((b << 16) | a) >>> 0;
  const dvAdler = new DataView(zlibBlock.buffer, 7 + len, 4);
  dvAdler.setUint32(0, adler, false);

  const makeChunk = (typeStr, dataBytes) => {
    const chunk = new Uint8Array(12 + dataBytes.length);
    const dv = new DataView(chunk.buffer);
    dv.setUint32(0, dataBytes.length, false);
    for (let i = 0; i < 4; i++) chunk[4 + i] = typeStr.charCodeAt(i);
    chunk.set(dataBytes, 8);
    const crcVal = computeCrc32(chunk.subarray(4, 8 + dataBytes.length));
    dv.setUint32(8 + dataBytes.length, crcVal, false);
    return chunk;
  };

  const ihdr = new Uint8Array(13);
  const dvIhdr = new DataView(ihdr.buffer);
  dvIhdr.setUint32(0, width, false);
  dvIhdr.setUint32(4, height, false);
  ihdr[8] = 8;
  ihdr[9] = 6;

  const sig = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
  const cIhdr = makeChunk('IHDR', ihdr);
  const cIdat = makeChunk('IDAT', zlibBlock);
  const cIend = makeChunk('IEND', new Uint8Array(0));

  const out = new Uint8Array(sig.length + cIhdr.length + cIdat.length + cIend.length);
  let off = 0;
  for (const part of [sig, cIhdr, cIdat, cIend]) {
    out.set(part, off);
    off += part.length;
  }
  return out;
}

/**
 * Construye dos paquetes de demostración en memoria con Variantes (`variations`)
 * y Texturas Animadas (`flipbook_textures.json`) para probar todas las funciones:
 * - Pack A: Define `stone` con 2 variantes (`stone` peso 70, `stone_var1` peso 30) y `diamond_ore` como Flipbook de 4 frames.
 * - Pack B: Define `stone` con 2 variantes (`stone` peso 20, `stone_var2` peso 50) y `dirt` con 2 variantes (`dirt` peso 65, `dirt_var1` peso 35).
 * Al fusionarse, `stone` combina las 3 variantes (`stone` peso 90, `stone_var1` peso 30, `stone_var2` peso 50).
 */
export function buildDemoPacksInMemory() {
  const encoder = new TextEncoder();

  const packAFiles = new Map([
    [
      'manifest.json',
      encoder.encode(
        JSON.stringify(buildMergedManifest({ name: 'VkYakee PvP Ores & Swords' }), null, 2)
      ),
    ],
    [
      'textures/terrain_texture.json',
      encoder.encode(
        JSON.stringify(
          {
            resource_pack_name: 'vkyakee_pvp',
            texture_name: 'atlas.terrain',
            padding: 8,
            num_mip_levels: 4,
            texture_data: {
              stone: {
                textures: {
                  variations: [
                    { path: 'textures/blocks/stone', weight: 70 },
                    { path: 'textures/blocks/stone_var1', weight: 30 },
                  ],
                },
              },
              diamond_ore: { textures: 'textures/blocks/diamond_ore' },
            },
          },
          null,
          2
        )
      ),
    ],
    [
      'textures/flipbook_textures.json',
      encoder.encode(
        JSON.stringify(
          [
            {
              flipbook_texture: 'textures/blocks/diamond_ore',
              atlas_tile: 'diamond_ore',
              ticks_per_frame: 8,
              frames: [0, 1, 2, 3],
              blend_frames: true,
            },
          ],
          null,
          2
        )
      ),
    ],
    [
      'textures/item_texture.json',
      encoder.encode(
        JSON.stringify(
          {
            resource_pack_name: 'vkyakee_pvp',
            texture_name: 'atlas.items',
            texture_data: {
              diamond_sword: { textures: 'textures/items/diamond_sword' },
            },
          },
          null,
          2
        )
      ),
    ],
    [
      'texts/es_ES.lang',
      encoder.encode('tile.stone.name=Piedra PvP VkYakee\nitem.diamond_sword.name=Espada Corta Diamante\n'),
    ],
    ['textures/blocks/stone.png', createSolidPixelArtPngBytes([110, 118, 130], [160, 172, 188], 1)],
    ['textures/blocks/stone_var1.png', createSolidPixelArtPngBytes([92, 102, 118], [142, 155, 175], 1)],
    ['textures/blocks/diamond_ore.png', createSolidPixelArtPngBytes([34, 197, 214], [165, 243, 252], 4)],
    ['textures/items/diamond_sword.png', createSolidPixelArtPngBytes([14, 165, 233], [186, 230, 253], 1)],
  ]);

  const packBFiles = new Map([
    [
      'manifest.json',
      encoder.encode(
        JSON.stringify(buildMergedManifest({ name: 'VkYakee Nature & Clear Glass' }), null, 2)
      ),
    ],
    [
      'textures/terrain_texture.json',
      encoder.encode(
        JSON.stringify(
          {
            resource_pack_name: 'vkyakee_nature',
            texture_name: 'atlas.terrain',
            padding: 8,
            num_mip_levels: 4,
            texture_data: {
              stone: {
                textures: {
                  variations: [
                    { path: 'textures/blocks/stone', weight: 20 },
                    { path: 'textures/blocks/stone_var2', weight: 50 },
                  ],
                },
              },
              dirt: {
                textures: {
                  variations: [
                    { path: 'textures/blocks/dirt', weight: 65 },
                    { path: 'textures/blocks/dirt_var1', weight: 35 },
                  ],
                },
              },
              glass: { textures: 'textures/blocks/glass' },
            },
          },
          null,
          2
        )
      ),
    ],
    [
      'textures/item_texture.json',
      encoder.encode(
        JSON.stringify(
          {
            resource_pack_name: 'vkyakee_nature',
            texture_name: 'atlas.items',
            texture_data: {
              apple: { textures: 'textures/items/apple' },
            },
          },
          null,
          2
        )
      ),
    ],
    [
      'texts/es_ES.lang',
      encoder.encode('tile.dirt.name=Tierra Fértil\ntile.stone.name=Piedra Musgosa\nitem.apple.name=Manzana Roja\n'),
    ],
    ['textures/blocks/stone.png', createSolidPixelArtPngBytes([82, 114, 86], [122, 158, 126], 1)],
    ['textures/blocks/stone_var2.png', createSolidPixelArtPngBytes([74, 124, 89], [116, 178, 132], 1)],
    ['textures/blocks/dirt.png', createSolidPixelArtPngBytes([134, 92, 60], [168, 121, 84], 1)],
    ['textures/blocks/dirt_var1.png', createSolidPixelArtPngBytes([118, 78, 48], [154, 106, 72], 1)],
    ['textures/blocks/glass.png', createSolidPixelArtPngBytes([186, 230, 253], [240, 249, 255], 1)],
    ['textures/items/apple.png', createSolidPixelArtPngBytes([220, 38, 38], [252, 165, 165], 1)],
  ]);

  return [
    {
      id: 'demo-pack-a',
      name: 'VkYakee_PvP_Ores.mcpack',
      fileCount: packAFiles.size,
      files: packAFiles,
    },
    {
      id: 'demo-pack-b',
      name: 'VkYakee_Nature_Glass.mcpack',
      fileCount: packBFiles.size,
      files: packBFiles,
    },
  ];
}

// ---------------------------------------------------------------------------
// 5. CLASE PRINCIPAL: TexturePackMerger
// ---------------------------------------------------------------------------

export class TexturePackMerger {
  constructor(container, options = {}) {
    if (!container && typeof document !== 'undefined') {
      throw new Error('TexturePackMerger requiere un contenedor HTML válido.');
    }
    this.container = container;
    this.options = options;

    this.packs = buildDemoPacksInMemory();
    this.mergedFiles = new Map();
    this.objectUrls = new Map();

    this.selectedFilePath = 'textures/blocks/stone.png';
    this.activeFilter = 'all';
    this.searchQuery = '';

    this.packName = 'VkYakee Ultimate Merged Pack';
    this.packDescription = 'Paquete combinado con Deep Merge de Variantes y Flipbooks por VkYakee';

    if (this.container) {
      this._renderUI();
      this._bindEvents();
      this.recomputeMergedPack();
    }
  }

  _revokeObjectUrls() {
    if (typeof URL === 'undefined' || typeof URL.revokeObjectURL !== 'function') return;
    for (const url of this.objectUrls.values()) {
      URL.revokeObjectURL(url);
    }
    this.objectUrls.clear();
  }

  _getOrCreatePngUrl(path, bytes) {
    if (this.objectUrls.has(path)) {
      return this.objectUrls.get(path);
    }
    if (typeof URL === 'undefined' || typeof URL.createObjectURL !== 'function') {
      return '';
    }
    const blob = new Blob([bytes], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    this.objectUrls.set(path, url);
    return url;
  }

  /**
   * Obtiene las variantes y datos de Flipbook para cualquier archivo del paquete fusionado.
   */
  getVariantsForPath(filePath) {
    return getTextureVariants(filePath, this.mergedFiles);
  }

  /**
   * Elimina una variante específica de un bloque en `textures/terrain_texture.json`
   * antes de exportar el paquete final.
   */
  removeBlockVariant(blockKey, variantIndex, removePngFile = false) {
    const terrainEntry = this.mergedFiles.get('textures/terrain_texture.json');
    if (!terrainEntry) return;

    try {
      const decoder = new TextDecoder('utf-8');
      const encoder = new TextEncoder();
      const terrainObj = JSON.parse(stripJsonComments(decoder.decode(terrainEntry.bytes)));
      const beforeVars = extractVariationsFromBlockEntry(terrainObj?.texture_data?.[blockKey]);

      if (beforeVars.length <= 1) {
        this._setStatus(
          `El bloque "${blockKey}" solo tiene 1 variante activa y no puede quedar vacío.`,
          'warn'
        );
        return;
      }

      const removedVar = beforeVars[variantIndex];
      const updatedTerrainObj = removeVariantFromTerrainJson(terrainObj, blockKey, variantIndex);

      this.mergedFiles.set('textures/terrain_texture.json', {
        ...terrainEntry,
        bytes: encoder.encode(JSON.stringify(updatedTerrainObj, null, 2)),
        isEdited: true,
      });

      if (removePngFile && removedVar?.path) {
        const pngKey = `${normalizeTextureRef(removedVar.path)}.png`;
        if (this.mergedFiles.has(pngKey)) {
          this.mergedFiles.delete(pngKey);
          if (this.selectedFilePath === pngKey) {
            this.selectedFilePath = 'textures/terrain_texture.json';
          }
        }
      }

      this._renderFileTree();
      this._renderInspector();
      this._setStatus(
        `Variante #${variantIndex} (${removedVar?.path || ''}) eliminada del bloque "${blockKey}".`,
        'ok'
      );
    } catch (err) {
      this._setStatus(`No se pudo eliminar la variante: ${err?.message || err}`, 'warn');
    }
  }

  recomputeMergedPack() {
    this._revokeObjectUrls();

    this.mergedFiles = mergePackHierarchy(this.packs, {
      name: this.packName,
      description: this.packDescription,
    });

    if (!this.mergedFiles.has(this.selectedFilePath)) {
      const firstKey = this.mergedFiles.keys().next().value;
      this.selectedFilePath = firstKey || '';
    }

    // Sincronizar contexto de JSONs con TextureEditor si existe en window
    if (typeof window !== 'undefined' && window.textureEditor && typeof window.textureEditor.setPackJsonContext === 'function') {
      window.textureEditor.setPackJsonContext(this.mergedFiles);
    }

    this._renderPriorityList();
    this._renderFileTree();
    this._renderInspector();
  }

  async addPackFiles(fileList) {
    const files = Array.from(fileList || []);
    if (files.length === 0) return;

    let added = 0;
    for (const file of files) {
      try {
        const entriesMap = await readPackZipEntries(file);
        if (entriesMap.size === 0) continue;
        this.packs.unshift({
          id: `pack-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          name: file.name,
          fileCount: entriesMap.size,
          files: entriesMap,
        });
        added++;
      } catch (err) {
        this._setStatus(`Error al leer "${file.name}": ${err?.message || err}`, 'warn');
      }
    }

    if (added > 0) {
      this.recomputeMergedPack();
      this._setStatus(
        `${added} paquete(s) cargado(s): variantes de terrain_texture.json y flipbooks fusionados.`,
        'ok'
      );
    }
  }

  movePackPriority(fromIdx, toIdx) {
    if (
      fromIdx < 0 ||
      toIdx < 0 ||
      fromIdx >= this.packs.length ||
      toIdx >= this.packs.length ||
      fromIdx === toIdx
    ) {
      return;
    }
    const [moved] = this.packs.splice(fromIdx, 1);
    this.packs.splice(toIdx, 0, moved);
    this.recomputeMergedPack();
    this._setStatus(
      `Prioridad actualizada: "${moved.name}" ahora está en la posición #${toIdx + 1}.`,
      'ok'
    );
  }

  removePack(index) {
    if (index < 0 || index >= this.packs.length) return;
    const [removed] = this.packs.splice(index, 1);
    this.recomputeMergedPack();
    this._setStatus(`Paquete "${removed.name}" quitado de la fusión.`, 'ok');
  }

  deleteSelectedFile(path = this.selectedFilePath) {
    if (!path || !this.mergedFiles.has(path)) return;
    if (path === 'manifest.json') {
      this._setStatus('El archivo manifest.json es obligatorio para Minecraft Bedrock.', 'warn');
      return;
    }
    this.mergedFiles.delete(path);
    if (this.objectUrls.has(path)) {
      URL.revokeObjectURL(this.objectUrls.get(path));
      this.objectUrls.delete(path);
    }
    const nextKey = this.mergedFiles.keys().next().value || '';
    this.selectedFilePath = nextKey;
    this._renderFileTree();
    this._renderInspector();
    this._setStatus(`Archivo "${path}" eliminado del paquete resultante.`, 'ok');
  }

  updateMergedFileBytes(path, uint8Bytes, originLabel = 'Editado Localmente') {
    if (!path) return;
    const existing = this.mergedFiles.get(path);
    if (this.objectUrls.has(path)) {
      URL.revokeObjectURL(this.objectUrls.get(path));
      this.objectUrls.delete(path);
    }

    this.mergedFiles.set(path, {
      path,
      bytes: uint8Bytes instanceof Uint8Array ? uint8Bytes : new Uint8Array(uint8Bytes),
      sourcePack: originLabel,
      contributors: existing ? existing.contributors : [originLabel],
      isMergedJson: false,
      isEdited: true,
    });

    this.selectedFilePath = path;
    this._renderFileTree();
    this._renderInspector();
    this._setStatus(`Archivo "${path}" actualizado en el paquete final (${originLabel}).`, 'ok');
  }

  async openSelectedPngInTextureEditor(specificPath = null) {
    const targetPath = specificPath || this.selectedFilePath;
    const entry = this.mergedFiles.get(targetPath);
    if (!entry || !targetPath.toLowerCase().endsWith('.png')) return;

    const pngUrl = this._getOrCreatePngUrl(targetPath, entry.bytes);
    const variantsInfo = this.getVariantsForPath(targetPath);

    if (typeof this.options.onEditTextureInEditor === 'function') {
      this.options.onEditTextureInEditor({
        path: targetPath,
        bytes: entry.bytes,
        objectUrl: pngUrl,
        mergedFiles: this.mergedFiles,
        variantsInfo,
        saveCallback: (updatedPngBytes, destPath = targetPath) => {
          this.updateMergedFileBytes(destPath, updatedPngBytes, 'Editado en TextureEditor');
        },
      });
      return;
    }

    if (typeof window !== 'undefined' && window.textureEditor) {
      if (typeof window.textureEditor.setPackJsonContext === 'function') {
        window.textureEditor.setPackJsonContext(this.mergedFiles, (destPath, updatedBytes) => {
          this.updateMergedFileBytes(destPath, updatedBytes, 'TextureEditor');
        });
      }
      await this._loadPngIntoTextureEditorInstance(window.textureEditor, pngUrl, targetPath);
      const switchBtn = document.querySelector('[data-switch-tool="texture-editor"]');
      if (switchBtn) switchBtn.click();
    }
  }

  async _loadPngIntoTextureEditorInstance(editorInstance, pngUrl, targetPath) {
    if (typeof editorInstance.loadFromPackEntry === 'function') {
      await editorInstance.loadFromPackEntry(targetPath, pngUrl, this.mergedFiles);
      return;
    }
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const size = [16, 32, 64].includes(img.width) ? img.width : 16;
        if (typeof editorInstance.setCanvasSize === 'function') {
          editorInstance.setCanvasSize(size);
        }
        editorInstance.ctx.clearRect(0, 0, editorInstance.canvasSize, editorInstance.canvasSize);
        editorInstance.ctx.drawImage(img, 0, 0, editorInstance.canvasSize, editorInstance.canvasSize);
        if (typeof editorInstance._pushHistoryState === 'function') {
          editorInstance._pushHistoryState();
        }
        if (typeof editorInstance._updateTilePreview === 'function') {
          editorInstance._updateTilePreview();
        }
        resolve();
      };
      img.src = pngUrl;
    });
  }

  async exportMergedMcpack() {
    try {
      const encoder = new TextEncoder();
      const freshManifest = buildMergedManifest({
        name: this.packName,
        description: this.packDescription,
      });
      this.mergedFiles.set('manifest.json', {
        path: 'manifest.json',
        bytes: encoder.encode(JSON.stringify(freshManifest, null, 2)),
        sourcePack: 'VkYakee Auto-Manifest',
        contributors: ['VkYakee Auto-Manifest'],
        isMergedJson: true,
        isEdited: false,
      });

      const zipBytes = await compressMergedPackToBytes(this.mergedFiles);
      const safeName =
        (this.packName || 'vkyakee_merged_pack')
          .replace(/[^a-z0-9_-]/gi, '_')
          .toLowerCase() + '.mcpack';

      if (typeof document !== 'undefined') {
        const blob = new Blob([zipBytes], { type: 'application/zip' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = safeName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      }

      this._setStatus(
        `¡Paquete "${safeName}" (${(zipBytes.byteLength / 1024).toFixed(2)} KB, ${this.mergedFiles.size} archivos) generado con éxito!`,
        'ok'
      );
      return { fileName: safeName, bytes: zipBytes };
    } catch (err) {
      this._setStatus(`Error al exportar .mcpack: ${err?.message || err}`, 'warn');
      throw err;
    }
  }

  _renderUI() {
    this.container.innerHTML = `
      <div class="tpm-wrapper">
        <div class="tpm-header-banner">
          <div>
            <h2>Fusionador de Paquetes de Texturas (.mcpack / .zip)</h2>
            <p>Combina múltiples Texture Packs con jerarquía de prioridad, fusión de Variantes (<code>variations</code>), texturas animadas (Flipbooks) y edición directa.</p>
          </div>
          <div class="tpm-header-actions">
            <button type="button" class="tpm-btn" id="tpm-reload-demos-btn">
              Cargar Paquetes Demo
            </button>
            <button type="button" class="tpm-btn tpm-btn-primary" id="tpm-export-btn">
              Generar .mcpack Fusionado
            </button>
          </div>
        </div>

        <div class="tpm-main-grid">
          <!-- ZONA 1: CARGA Y JERARQUÍA DE PRIORIDAD -->
          <section class="tpm-card">
            <div class="tpm-card-header">
              <h3>1. Carga y Prioridad</h3>
              <span class="tpm-badge" id="tpm-pack-count-badge">2 PAQUETES</span>
            </div>

            <label class="tpm-dropzone" id="tpm-dropzone">
              <input type="file" id="tpm-pack-input" accept=".mcpack,.zip" multiple />
              <div class="tpm-dropzone-title">Arrastra o selecciona varios .mcpack / .zip</div>
              <div class="tpm-dropzone-sub">Combina arrays de variations y flipbooks automáticamente</div>
            </label>

            <div class="tpm-priority-hint">
              <strong>Jerarquía de Prioridad:</strong> El paquete <strong>#1 (Superior)</strong> tiene prioridad en texturas directas y encabeza la combinación de variantes en <code>terrain_texture.json</code>.
            </div>

            <div class="tpm-pack-list" id="tpm-pack-list" role="list" aria-label="Lista de prioridad de paquetes"></div>

            <div class="tpm-card-header" style="margin-top:0.25rem;">
              <h3>Manifiesto del Pack Final</h3>
              <span class="tpm-badge is-amber">UUIDv4 AUTO</span>
            </div>

            <div class="tpm-form-grid">
              <div class="tpm-field">
                <label for="tpm-pack-name-input">Nombre del Paquete Fusionado</label>
                <input type="text" id="tpm-pack-name-input" class="tpm-input" value="${this.packName}" />
              </div>
              <div class="tpm-field">
                <label for="tpm-pack-desc-input">Descripción</label>
                <input type="text" id="tpm-pack-desc-input" class="tpm-input" value="${this.packDescription}" />
              </div>
            </div>
          </section>

          <!-- ZONA 2: EXPLORADOR DEL ÁRBOL DE ARCHIVOS FUSIONADO -->
          <section class="tpm-card">
            <div class="tpm-card-header">
              <h3>2. Explorador del Resultado en Memoria</h3>
              <span class="tpm-badge" id="tpm-file-count-badge">0 ARCHIVOS</span>
            </div>

            <div class="tpm-explorer-toolbar">
              <input
                type="search"
                id="tpm-search-input"
                class="tpm-input"
                style="flex:1;min-width:160px;"
                placeholder="Buscar archivo (ej. stone, dirt, terrain_texture)..."
              />
              <div class="tpm-filter-pills" role="group" aria-label="Filtrar por tipo de archivo">
                <button type="button" class="tpm-filter-pill is-active" data-filter="all">Todos</button>
                <button type="button" class="tpm-filter-pill" data-filter="png">Texturas (.png)</button>
                <button type="button" class="tpm-filter-pill" data-filter="json">JSON Fusionados</button>
              </div>
            </div>

            <div class="tpm-tree-container" id="tpm-tree-container" role="tree" aria-label="Árbol de archivos del paquete fusionado"></div>

            <div class="tpm-status-banner is-ok" id="tpm-status-banner">
              Fusión profunda activa: variantes de bloques (variations) y flipbook_textures.json combinados sin pérdida.
            </div>
          </section>

          <!-- ZONA 3: INSPECTOR DE ARCHIVO, GESTIÓN DE VARIANTES Y TEXTURE EDITOR -->
          <section class="tpm-card">
            <div class="tpm-card-header">
              <h3>3. Edición, Variantes e Inspector</h3>
              <span class="tpm-badge" id="tpm-selected-type-badge">PNG</span>
            </div>

            <div class="tpm-inspector-box" id="tpm-inspector-box"></div>
          </section>
        </div>
      </div>
    `;
  }

  _bindEvents() {
    const packInput = this.container.querySelector('#tpm-pack-input');
    const dropzone = this.container.querySelector('#tpm-dropzone');

    if (packInput) {
      packInput.addEventListener('change', async (e) => {
        if (e.target.files?.length) {
          await this.addPackFiles(e.target.files);
          e.target.value = '';
        }
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
        if (e.dataTransfer?.files?.length) {
          await this.addPackFiles(e.dataTransfer.files);
        }
      });
    }

    const reloadDemosBtn = this.container.querySelector('#tpm-reload-demos-btn');
    if (reloadDemosBtn) {
      reloadDemosBtn.addEventListener('click', () => {
        this.packs = buildDemoPacksInMemory();
        this.recomputeMergedPack();
        this._setStatus('Paquetes Demo con variantes y flipbooks restaurados.', 'ok');
      });
    }

    const exportBtn = this.container.querySelector('#tpm-export-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportMergedMcpack());
    }

    const nameInput = this.container.querySelector('#tpm-pack-name-input');
    if (nameInput) {
      nameInput.addEventListener('input', () => {
        this.packName = nameInput.value.trim() || 'VkYakee Merged Pack';
        this._updateManifestInMemory();
      });
    }

    const descInput = this.container.querySelector('#tpm-pack-desc-input');
    if (descInput) {
      descInput.addEventListener('input', () => {
        this.packDescription = descInput.value.trim() || 'Fusionado con VkYakee Multi-Tool';
        this._updateManifestInMemory();
      });
    }

    const searchInput = this.container.querySelector('#tpm-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.searchQuery = searchInput.value.trim().toLowerCase();
        this._renderFileTree();
      });
    }

    this.container.querySelectorAll('[data-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.activeFilter = btn.getAttribute('data-filter') || 'all';
        this.container.querySelectorAll('[data-filter]').forEach((b) => {
          b.classList.toggle('is-active', b.getAttribute('data-filter') === this.activeFilter);
        });
        this._renderFileTree();
      });
    });
  }

  _updateManifestInMemory() {
    const encoder = new TextEncoder();
    const manifestObj = buildMergedManifest({
      name: this.packName,
      description: this.packDescription,
    });
    this.mergedFiles.set('manifest.json', {
      path: 'manifest.json',
      bytes: encoder.encode(JSON.stringify(manifestObj, null, 2)),
      sourcePack: 'VkYakee Auto-Manifest',
      contributors: ['VkYakee Auto-Manifest'],
      isMergedJson: true,
      isEdited: false,
    });
    if (this.selectedFilePath === 'manifest.json') {
      this._renderInspector();
    }
  }

  _renderPriorityList() {
    const listEl = this.container?.querySelector('#tpm-pack-list');
    const badgeEl = this.container?.querySelector('#tpm-pack-count-badge');
    if (badgeEl) {
      badgeEl.textContent = `${this.packs.length} PAQUETE${this.packs.length === 1 ? '' : 'S'}`;
    }
    if (!listEl) return;

    if (this.packs.length === 0) {
      listEl.innerHTML = `<div class="tpm-priority-hint">No hay paquetes cargados. Sube archivos .mcpack / .zip o pulsa "Cargar Paquetes Demo".</div>`;
      return;
    }

    listEl.innerHTML = this.packs
      .map(
        (pack, idx) => `
        <div class="tpm-pack-item" draggable="true" data-pack-idx="${idx}" role="listitem">
          <span class="tpm-pack-rank" title="Prioridad #${idx + 1}">#${idx + 1}</span>
          <div class="tpm-pack-info">
            <div class="tpm-pack-name" title="${pack.name}">${pack.name}</div>
            <div class="tpm-pack-meta">${pack.fileCount} archivos · ${idx === 0 ? 'Máxima Prioridad' : 'Prioridad Secundaria'}</div>
          </div>
          <div class="tpm-pack-controls">
            <button type="button" class="tpm-icon-btn" data-move-up="${idx}" title="Subir prioridad" ${idx === 0 ? 'disabled' : ''}>▲</button>
            <button type="button" class="tpm-icon-btn" data-move-down="${idx}" title="Bajar prioridad" ${idx === this.packs.length - 1 ? 'disabled' : ''}>▼</button>
            <button type="button" class="tpm-icon-btn" data-remove-pack="${idx}" title="Quitar paquete">✕</button>
          </div>
        </div>
      `
      )
      .join('');

    listEl.querySelectorAll('[data-move-up]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.getAttribute('data-move-up'));
        this.movePackPriority(idx, idx - 1);
      });
    });

    listEl.querySelectorAll('[data-move-down]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.getAttribute('data-move-down'));
        this.movePackPriority(idx, idx + 1);
      });
    });

    listEl.querySelectorAll('[data-remove-pack]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.getAttribute('data-remove-pack'));
        this.removePack(idx);
      });
    });

    let draggedIdx = null;
    listEl.querySelectorAll('.tpm-pack-item').forEach((row) => {
      row.addEventListener('dragstart', () => {
        draggedIdx = Number(row.getAttribute('data-pack-idx'));
        row.classList.add('is-dragging');
      });
      row.addEventListener('dragend', () => {
        row.classList.remove('is-dragging');
      });
      row.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
      row.addEventListener('drop', (e) => {
        e.preventDefault();
        const targetIdx = Number(row.getAttribute('data-pack-idx'));
        if (draggedIdx !== null && draggedIdx !== targetIdx) {
          this.movePackPriority(draggedIdx, targetIdx);
        }
        draggedIdx = null;
      });
    });
  }

  _renderFileTree() {
    const treeEl = this.container?.querySelector('#tpm-tree-container');
    const countBadge = this.container?.querySelector('#tpm-file-count-badge');
    if (countBadge) {
      countBadge.textContent = `${this.mergedFiles.size} ARCHIVOS`;
    }
    if (!treeEl) return;

    const allEntries = Array.from(this.mergedFiles.values()).filter((entry) => {
      const lower = entry.path.toLowerCase();
      if (this.activeFilter === 'png' && !lower.endsWith('.png')) return false;
      if (this.activeFilter === 'json' && !lower.endsWith('.json') && !lower.endsWith('.lang')) return false;
      if (this.searchQuery && !lower.includes(this.searchQuery)) return false;
      return true;
    });

    allEntries.sort((a, b) => a.path.localeCompare(b.path));

    if (allEntries.length === 0) {
      treeEl.innerHTML = `<div class="tpm-priority-hint">No hay archivos que coincidan con el filtro actual.</div>`;
      return;
    }

    const groups = new Map();
    for (const entry of allEntries) {
      const slashIdx = entry.path.lastIndexOf('/');
      const folder = slashIdx > 0 ? entry.path.slice(0, slashIdx) : '/ (Raíz del Pack)';
      if (!groups.has(folder)) groups.set(folder, []);
      groups.get(folder).push(entry);
    }

    const htmlParts = [];
    for (const [folderName, files] of groups.entries()) {
      htmlParts.push(`<div class="tpm-folder-header">📁 ${folderName}</div>`);
      for (const file of files) {
        const isPng = file.path.toLowerCase().endsWith('.png');
        const isSelected = file.path === this.selectedFilePath;
        const shortName = file.path.split('/').pop();

        let thumbHtml = `<span class="tpm-file-thumb">${shortName.split('.').pop().toUpperCase().slice(0, 4)}</span>`;
        let variantBadgeHtml = '';

        if (isPng) {
          const url = this._getOrCreatePngUrl(file.path, file.bytes);
          if (url) {
            thumbHtml = `<img src="${url}" alt="${shortName}" class="tpm-file-thumb" />`;
          }
          const variantsInfo = this.getVariantsForPath(file.path);
          if (variantsInfo.length > 1) {
            variantBadgeHtml = `<span class="tpm-variant-count-badge" title="Bloque ${variantsInfo.blockKey} con ${variantsInfo.length} variantes">${variantsInfo.length} variantes</span>`;
          }
          if (variantsInfo.isFlipbook && variantsInfo.flipbook) {
            variantBadgeHtml += `<span class="tpm-flipbook-badge" title="Textura animada Flipbook">Flipbook (${variantsInfo.flipbook.frames.length}f)</span>`;
          }
        }

        let tagClass = 'tpm-file-origin-tag';
        let tagText = file.sourcePack;
        if (file.isEdited) {
          tagClass += ' is-edited';
          tagText = 'Editado';
        } else if (file.isMergedJson) {
          tagClass += ' is-merged';
          tagText = `Deep Merge (${file.contributors.length})`;
        }

        htmlParts.push(`
          <button
            type="button"
            class="tpm-tree-file ${isSelected ? 'is-selected' : ''}"
            data-select-path="${file.path}"
            role="treeitem"
          >
            ${thumbHtml}
            <span class="tpm-file-path" title="${file.path}">${file.path}</span>
            ${variantBadgeHtml}
            <span class="${tagClass}">${tagText}</span>
          </button>
        `);
      }
    }

    treeEl.innerHTML = htmlParts.join('');

    treeEl.querySelectorAll('[data-select-path]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.selectedFilePath = btn.getAttribute('data-select-path') || '';
        this._renderFileTree();
        this._renderInspector();
      });
    });
  }

  _renderInspector() {
    const box = this.container?.querySelector('#tpm-inspector-box');
    const typeBadge = this.container?.querySelector('#tpm-selected-type-badge');
    if (!box) return;

    const entry = this.mergedFiles.get(this.selectedFilePath);
    if (!entry) {
      box.innerHTML = `<div class="tpm-priority-hint">Selecciona cualquier archivo del árbol central para inspeccionarlo, gestionar sus variantes o editar su textura PNG.</div>`;
      return;
    }

    const lower = entry.path.toLowerCase();
    const isPng = lower.endsWith('.png');
    const isTextOrJson = lower.endsWith('.json') || lower.endsWith('.lang') || lower.endsWith('.txt');
    const ext = entry.path.split('.').pop().toUpperCase();
    if (typeBadge) typeBadge.textContent = ext;

    let previewHtml = '';
    if (isPng) {
      const url = this._getOrCreatePngUrl(entry.path, entry.bytes);
      previewHtml = `
        <div class="tpm-preview-stage">
          <img src="${url}" alt="${entry.path}" class="tpm-preview-img" />
        </div>
      `;
    } else if (isTextOrJson) {
      const textContent = new TextDecoder('utf-8').decode(entry.bytes);
      const escaped = textContent
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      previewHtml = `<pre class="tpm-json-viewer">${escaped}</pre>`;
    } else {
      previewHtml = `
        <div class="tpm-preview-stage">
          <div class="tpm-dropzone-sub">Archivo binario (${entry.bytes.byteLength} bytes)</div>
        </div>
      `;
    }

    // Si es un PNG (o tiene variantes asociadas en terrain_texture.json), mostrar panel de gestión de variantes
    let variantsPanelHtml = '';
    if (isPng) {
      const variantsInfo = this.getVariantsForPath(entry.path);
      const blockKey = variantsInfo.blockKey;

      if (variantsInfo.length > 1) {
        const itemsHtml = variantsInfo
          .map((v) => {
            const vEntry = this.mergedFiles.get(v.filePath);
            const thumbUrl = vEntry ? this._getOrCreatePngUrl(v.filePath, vEntry.bytes) : '';
            const isCurrent = v.filePath.toLowerCase() === entry.path.toLowerCase();
            return `
              <div class="tpm-variant-item ${isCurrent ? 'is-active' : ''}">
                ${thumbUrl ? `<img src="${thumbUrl}" alt="${v.label}" class="tpm-file-thumb" />` : `<span class="tpm-file-thumb">V${v.index}</span>`}
                <div class="tpm-variant-meta">
                  <div class="tpm-variant-title">${v.label} · ${v.percentage}%</div>
                  <div class="tpm-variant-sub">${v.filePath}</div>
                </div>
                <div class="tpm-variant-actions">
                  ${
                    vEntry
                      ? `<button type="button" class="tpm-icon-btn" data-inspect-variant="${v.filePath}" title="Ver / Editar esta variante">✎</button>`
                      : ''
                  }
                  <button
                    type="button"
                    class="tpm-icon-btn is-danger"
                    data-remove-variant-idx="${v.index}"
                    data-remove-variant-block="${blockKey}"
                    title="Eliminar variante de terrain_texture.json"
                  >
                    🗑
                  </button>
                </div>
              </div>
            `;
          })
          .join('');

        variantsPanelHtml = `
          <div class="tpm-variants-card">
            <div class="tpm-variants-header">
              <span>Variantes del Bloque <code>${blockKey}</code></span>
              <span class="tpm-badge">${variantsInfo.length} VARIANTES</span>
            </div>
            <div class="tpm-variants-list">${itemsHtml}</div>
          </div>
        `;
      }

      if (variantsInfo.isFlipbook && variantsInfo.flipbook) {
        const fb = variantsInfo.flipbook;
        variantsPanelHtml += `
          <div class="tpm-variants-card">
            <div class="tpm-variants-header">
              <span>Animación Flipbook (<code>${fb.atlas_tile}</code>)</span>
              <span class="tpm-badge is-amber">${fb.frames.length} FRAMES · ${fb.ticks_per_frame} TICKS</span>
            </div>
            <div class="tpm-priority-hint">
              Esta textura es una tira vertical animada definida en <code>flipbook_textures.json</code>. Ábrela en <strong>TextureEditor</strong> para editar fotograma por fotograma y ver la animación en vivo.
            </div>
          </div>
        `;
      }
    }

    box.innerHTML = `
      ${previewHtml}

      <div class="tpm-inspector-meta">
        <div class="tpm-meta-cell">
          <div class="tpm-meta-label">Ruta en el .mcpack</div>
          <div class="tpm-meta-val" title="${entry.path}">${entry.path}</div>
        </div>
        <div class="tpm-meta-cell">
          <div class="tpm-meta-label">Tamaño en Memoria</div>
          <div class="tpm-meta-val">${(entry.bytes.byteLength / 1024).toFixed(2)} KB</div>
        </div>
        <div class="tpm-meta-cell">
          <div class="tpm-meta-label">Paquete Ganador / Estado</div>
          <div class="tpm-meta-val" title="${entry.sourcePack}">${entry.sourcePack}</div>
        </div>
        <div class="tpm-meta-cell">
          <div class="tpm-meta-label">Paquetes Contribuyentes</div>
          <div class="tpm-meta-val" title="${entry.contributors.join(' + ')}">${entry.contributors.length} pack(s)</div>
        </div>
      </div>

      ${variantsPanelHtml}

      <div class="tpm-file-actions">
        ${
          isPng
            ? `<button type="button" class="tpm-btn tpm-btn-accent-outline tpm-btn-full" id="tpm-edit-in-te-btn">
                 🎨 Editar Textura / Variantes en TextureEditor
               </button>`
            : ''
        }
        <label class="tpm-btn tpm-replace-label">
          <span>Reemplazar Archivo</span>
          <input type="file" id="tpm-replace-file-input" />
        </label>
        <button
          type="button"
          class="tpm-btn tpm-btn-danger"
          id="tpm-delete-file-btn"
          ${entry.path === 'manifest.json' ? 'disabled' : ''}
        >
          Eliminar del Pack
        </button>
      </div>
    `;

    const deleteBtn = box.querySelector('#tpm-delete-file-btn');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => this.deleteSelectedFile(entry.path));
    }

    const replaceInput = box.querySelector('#tpm-replace-file-input');
    if (replaceInput) {
      replaceInput.addEventListener('change', async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const buf = await file.arrayBuffer();
        this.updateMergedFileBytes(entry.path, new Uint8Array(buf), `Reemplazado (${file.name})`);
      });
    }

    const editInTeBtn = box.querySelector('#tpm-edit-in-te-btn');
    if (editInTeBtn) {
      editInTeBtn.addEventListener('click', () => this.openSelectedPngInTextureEditor());
    }

    box.querySelectorAll('[data-inspect-variant]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const vPath = btn.getAttribute('data-inspect-variant');
        if (vPath && this.mergedFiles.has(vPath)) {
          this.selectedFilePath = vPath;
          this._renderFileTree();
          this._renderInspector();
        }
      });
    });

    box.querySelectorAll('[data-remove-variant-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-remove-variant-idx'));
        const blockKey = btn.getAttribute('data-remove-variant-block');
        if (blockKey && Number.isFinite(idx)) {
          this.removeBlockVariant(blockKey, idx, false);
        }
      });
    });
  }

  _setStatus(message, type = 'ok') {
    const banner = this.container?.querySelector('#tpm-status-banner');
    if (!banner) return;
    banner.textContent = message;
    banner.className = `tpm-status-banner ${type === 'warn' ? 'is-warn' : 'is-ok'}`;
  }
}

/**
 * TextureEditor.js
 * Estudio de Texturas Profesional Mobile-First para Minecraft Bedrock (APK Android).
 *
 * Arquitectura:
 * - Interfaz táctil diseñada para pulgares: Lienzo central con Zoom/Pan multitáctil,
 *   Barra superior de acciones rápidas, Barra inferior flotante de herramientas,
 *   Ventana flotante arrastrable de previsualización en vivo y Menú Hamburguesa deslizable.
 * - Gestos táctiles nativos (touchstart / touchmove / touchend):
 *   1 dedo = dibujar/usar herramienta o Long-Press (450ms) para Cuentagotas Rápido.
 *   2 dedos = Pinch-to-Zoom + Arrastrar para Panear (cancela trazos accidentales).
 * - Sistema multicapa con OffscreenCanvas independiente por capa y Línea de Tiempo (Timeline)
 *   horizontal para texturas animadas (Flipbooks) y variantes (terrain_texture.json).
 */

const MOJANG_RAW_BASE =
  'https://raw.githubusercontent.com/Mojang/bedrock-samples/main/resource_pack/textures';

const MINECRAFT_PRESETS = {
  blocks: [
    { label: ' grass_side_carried', name: 'grass_side_carried' },
    { label: '💎 diamond_ore', name: 'diamond_ore' },
    { label: '🪨 cobblestone', name: 'cobblestone' },
    { label: '🪵 planks_oak', name: 'planks_oak' },
    { label: '🧱 brick', name: 'brick' },
    { label: '🔥 tnt_side', name: 'tnt_side' },
    { label: '✨ glowstone', name: 'glowstone' },
    { label: '🟪 crying_obsidian', name: 'crying_obsidian' },
  ],
  items: [
    { label: '⚔️ diamond_sword', name: 'diamond_sword' },
    { label: '⛏️ diamond_pickaxe', name: 'diamond_pickaxe' },
    { label: '🍎 apple_golden', name: 'apple_golden' },
    { label: '🧪 potion_bottle_heal', name: 'potion_bottle_heal' },
    { label: '🟢 ender_pearl', name: 'ender_pearl' },
    { label: '🔥 blaze_rod', name: 'blaze_rod' },
  ],
};

const DEFAULT_SWATCHES = [
  '#5E8D34',
  '#7F6644',
  '#828282',
  '#5A5A5A',
  '#38BDF8',
  '#2DD4BF',
  '#FACC15',
  '#F97316',
  '#EF4444',
  '#EC4899',
  '#A855F7',
  '#6366F1',
  '#94673A',
  '#D4A359',
  '#F8FAFC',
  '#1E293B',
];

const BRUSH_SIZES = [1, 2, 4, 8];
const SYMMETRY_MODES = ['none', 'horizontal', 'vertical', 'both'];

// ---------------------------------------------------------------------------
// CATÁLOGO DEFAULT DE VARIANTES Y FLIPBOOKS DE MINECRAFT BEDROCK
// ---------------------------------------------------------------------------

export const DEFAULT_BEDROCK_TERRAIN_JSON = {
  resource_pack_name: 'vanilla',
  texture_name: 'atlas.terrain',
  padding: 8,
  num_mip_levels: 4,
  texture_data: {
    stone: {
      textures: {
        variations: [
          { path: 'textures/blocks/stone', weight: 70 },
          { path: 'textures/blocks/stone_var1', weight: 20 },
          { path: 'textures/blocks/stone_var2', weight: 10 },
        ],
      },
    },
    dirt: {
      textures: {
        variations: [
          { path: 'textures/blocks/dirt', weight: 75 },
          { path: 'textures/blocks/dirt_var1', weight: 25 },
        ],
      },
    },
    diamond_ore: {
      textures: 'textures/blocks/diamond_ore',
    },
    lava_still: {
      textures: 'textures/blocks/lava_still',
    },
  },
};

export const DEFAULT_BEDROCK_FLIPBOOK_JSON = [
  {
    flipbook_texture: 'textures/blocks/diamond_ore',
    atlas_tile: 'diamond_ore',
    ticks_per_frame: 14,
    frames: [0, 1, 2, 3],
  },
  {
    flipbook_texture: 'textures/blocks/lava_still',
    atlas_tile: 'lava_still',
    ticks_per_frame: 10,
    frames: [0, 1, 2, 3],
  },
];

// ---------------------------------------------------------------------------
// FUNCIONES PURAS EXPORTADAS (Testables en Node / Unit Tests)
// ---------------------------------------------------------------------------

export function normalizeBedrockTexturePath(rawPath) {
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
 * Busca en `terrain_texture.json` y `flipbook_textures.json` si una textura
 * tiene múltiples variantes (`variations`) o si es una textura animada (`flipbook`).
 */
export function getTextureVariants(texturePath, jsonFiles = {}) {
  const normRef = normalizeBedrockTexturePath(texturePath);
  const shortName = normRef.split('/').pop().toLowerCase();

  const terrainJson =
    jsonFiles.terrainTexture ||
    jsonFiles['textures/terrain_texture.json'] ||
    jsonFiles['terrain_texture.json'] ||
    DEFAULT_BEDROCK_TERRAIN_JSON;

  const flipbookJson =
    jsonFiles.flipbookTextures ||
    jsonFiles['textures/flipbook_textures.json'] ||
    jsonFiles['flipbook_textures.json'] ||
    DEFAULT_BEDROCK_FLIPBOOK_JSON;

  const textureData = terrainJson?.texture_data || {};
  let matchedBlockKey = null;
  let rawVariations = [];

  const extractList = (entry) => {
    if (!entry || typeof entry !== 'object') return [];
    const t = entry.textures;
    if (t && typeof t === 'object' && Array.isArray(t.variations)) {
      return t.variations
        .map((v) =>
          typeof v === 'string'
            ? { path: normalizeBedrockTexturePath(v), weight: 100 }
            : v && v.path
              ? {
                  path: normalizeBedrockTexturePath(v.path),
                  weight: Number.isFinite(Number(v.weight)) ? Number(v.weight) : 100,
                }
              : null
        )
        .filter(Boolean);
    }
    if (Array.isArray(t)) {
      return t
        .map((v) =>
          typeof v === 'string'
            ? { path: normalizeBedrockTexturePath(v), weight: 100 }
            : v && (v.path || v.textures)
              ? {
                  path: normalizeBedrockTexturePath(v.path || v.textures),
                  weight: Number.isFinite(Number(v.weight)) ? Number(v.weight) : 100,
                }
              : null
        )
        .filter(Boolean);
    }
    if (typeof t === 'string') {
      return [{ path: normalizeBedrockTexturePath(t), weight: 100 }];
    }
    return [];
  };

  if (textureData[shortName]) {
    matchedBlockKey = shortName;
    rawVariations = extractList(textureData[shortName]);
  } else {
    for (const [bKey, bEntry] of Object.entries(textureData)) {
      const candidate = extractList(bEntry);
      if (
        candidate.some(
          (v) =>
            v.path.toLowerCase() === normRef.toLowerCase() ||
            v.path.split('/').pop().toLowerCase() === shortName
        )
      ) {
        matchedBlockKey = bKey;
        rawVariations = candidate;
        break;
      }
    }
  }

  if (rawVariations.length === 0 && normRef) {
    rawVariations = [{ path: normRef, weight: 100 }];
  }

  const totalWeight = rawVariations.reduce((sum, v) => sum + (Number(v.weight) || 0), 0) || 100;
  const variations = rawVariations.map((v, idx) => ({
    index: idx,
    path: v.path,
    filePath: `${v.path}.png`,
    weight: Number(v.weight) || 100,
    percentage: Math.round(((Number(v.weight) || 0) / totalWeight) * 100),
    label: `Variante ${idx} (Peso: ${v.weight ?? 100})`,
  }));

  let flipbookEntry = null;
  if (Array.isArray(flipbookJson)) {
    flipbookEntry =
      flipbookJson.find((fb) => {
        if (!fb || typeof fb !== 'object') return false;
        const fbRef = normalizeBedrockTexturePath(fb.flipbook_texture || '');
        const tile = String(fb.atlas_tile || '').toLowerCase();
        return (
          fbRef.toLowerCase() === normRef.toLowerCase() ||
          fbRef.split('/').pop().toLowerCase() === shortName ||
          tile === shortName ||
          (matchedBlockKey && tile === matchedBlockKey.toLowerCase())
        );
      }) || null;
  }

  return {
    blockKey: matchedBlockKey || shortName,
    hasVariations: variations.length > 1,
    variations,
    isFlipbook: Boolean(flipbookEntry),
    flipbook: flipbookEntry
      ? {
          flipbook_texture: normalizeBedrockTexturePath(flipbookEntry.flipbook_texture),
          atlas_tile: flipbookEntry.atlas_tile || matchedBlockKey || shortName,
          ticks_per_frame: Number(flipbookEntry.ticks_per_frame) || 10,
          frames: Array.isArray(flipbookEntry.frames) ? flipbookEntry.frames : [0, 1, 2, 3],
        }
      : null,
  };
}

/**
 * Convierte un color hexadecimal (#RRGGBB) a { r, g, b, a }.
 */
export function hexToRgba(hex, alpha = 255) {
  const clean = String(hex || '#000000').replace(/^#/, '').trim();
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16) || 0;
    const g = parseInt(clean[1] + clean[1], 16) || 0;
    const b = parseInt(clean[2] + clean[2], 16) || 0;
    return { r, g, b, a: alpha };
  }
  const num = parseInt(clean.slice(0, 6), 16);
  if (Number.isNaN(num)) return { r: 0, g: 0, b: 0, a: alpha };
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255, a: alpha };
}

/**
 * Convierte componentes RGB (0-255) a string hexadecimal (#RRGGBB).
 */
export function rgbaToHex(r, g, b) {
  const clamp = (n) => Math.max(0, Math.min(255, Math.round(Number(n) || 0)));
  const toHex = (n) => clamp(n).toString(16).padStart(2, '0').toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Algoritmo de línea de Bresenham para trazos táctiles continuos sin huecos.
 */
export function plotBresenhamLine(x0, y0, x1, y1) {
  const points = [];
  let cx = Math.floor(x0);
  let cy = Math.floor(y0);
  const tx = Math.floor(x1);
  const ty = Math.floor(y1);

  const dx = Math.abs(tx - cx);
  const dy = Math.abs(ty - cy);
  const sx = cx < tx ? 1 : -1;
  const sy = cy < ty ? 1 : -1;
  let err = dx - dy;

  while (true) {
    points.push({ x: cx, y: cy });
    if (cx === tx && cy === ty) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      cx += sx;
    }
    if (e2 < dx) {
      err += dx;
      cy += sy;
    }
  }
  return points;
}

/**
 * Calcula los puntos reflejados según el modo de Simetría activo:
 * - 'none': [[x, y]]
 * - 'horizontal': Espejo en el eje X (izquierda <-> derecha)
 * - 'vertical': Espejo en el eje Y (arriba <-> abajo)
 * - 'both': Espejo en 4 cuadrantes (X e Y simultáneos)
 */
export function computeSymmetryPoints(x, y, width, height, mode = 'none') {
  const mx = width - 1 - x;
  const my = height - 1 - y;
  const raw = [[x, y]];

  if (mode === 'horizontal' || mode === 'both') {
    raw.push([mx, y]);
  }
  if (mode === 'vertical' || mode === 'both') {
    raw.push([x, my]);
  }
  if (mode === 'both') {
    raw.push([mx, my]);
  }

  const seen = new Set();
  const unique = [];
  for (const [px, py] of raw) {
    if (px < 0 || py < 0 || px >= width || py >= height) continue;
    const key = `${px},${py}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push([px, py]);
    }
  }
  return unique;
}

/**
 * Expande una coordenada central (x, y) a un bloque cuadrado de píxeles según el tamaño del pincel (1, 2, 4, 8).
 */
export function expandBrushFootprint(centerX, centerY, brushSize, width, height) {
  const size = Math.max(1, Math.min(16, Math.round(Number(brushSize) || 1)));
  const offset = Math.floor((size - 1) / 2);
  const startX = centerX - offset;
  const startY = centerY - offset;
  const pixels = [];

  for (let dy = 0; dy < size; dy++) {
    for (let dx = 0; dx < size; dx++) {
      const px = startX + dx;
      const py = startY + dy;
      if (px >= 0 && py >= 0 && px < width && py < height) {
        pixels.push([px, py]);
      }
    }
  }
  return pixels;
}

/**
 * Aplana una lista de buffers de capas RGBA (`[{ data, visible, opacity }]`) en orden inferior -> superior.
 */
export function flattenLayersBuffers(layers, width, height) {
  const out = new Uint8ClampedArray(width * height * 4);
  for (const layer of layers) {
    if (!layer || layer.visible === false || !layer.data) continue;
    const layerOpacity = Math.max(0, Math.min(1, Number(layer.opacity ?? 1)));
    if (layerOpacity <= 0) continue;

    const src = layer.data;
    for (let i = 0; i < out.length; i += 4) {
      const srcA = (src[i + 3] / 255) * layerOpacity;
      if (srcA <= 0) continue;

      const dstA = out[i + 3] / 255;
      const outA = srcA + dstA * (1 - srcA);
      if (outA <= 0) {
        out[i] = 0;
        out[i + 1] = 0;
        out[i + 2] = 0;
        out[i + 3] = 0;
      } else {
        out[i] = Math.round((src[i] * srcA + out[i] * dstA * (1 - srcA)) / outA);
        out[i + 1] = Math.round((src[i + 1] * srcA + out[i + 1] * dstA * (1 - srcA)) / outA);
        out[i + 2] = Math.round((src[i + 2] * srcA + out[i + 2] * dstA * (1 - srcA)) / outA);
        out[i + 3] = Math.round(outA * 255);
      }
    }
  }
  return out;
}

/**
 * Calcula el factor de Zoom (Pinch) y desplazamiento (Pan) entre dos dedos táctiles.
 */
export function computeTwoFingerGesture(
  t1Start,
  t2Start,
  t1Now,
  t2Now,
  baseScale = 1,
  basePanX = 0,
  basePanY = 0
) {
  const startDist = Math.max(12, Math.hypot(t2Start.x - t1Start.x, t2Start.y - t1Start.y));
  const nowDist = Math.max(12, Math.hypot(t2Now.x - t1Now.x, t2Now.y - t1Now.y));
  const ratio = nowDist / startDist;
  const nextScale = Math.max(0.6, Math.min(6.0, Number((baseScale * ratio).toFixed(3))));

  const startMidX = (t1Start.x + t2Start.x) / 2;
  const startMidY = (t1Start.y + t2Start.y) / 2;
  const nowMidX = (t1Now.x + t2Now.x) / 2;
  const nowMidY = (t1Now.y + t2Now.y) / 2;

  const nextPanX = Math.round(basePanX + (nowMidX - startMidX));
  const nextPanY = Math.round(basePanY + (nowMidY - startMidY));

  return { scale: nextScale, panX: nextPanX, panY: nextPanY };
}

/**
 * Algoritmo iterativo de Flood Fill (Cubo de pintura) basado en cola sobre Uint8ClampedArray.
 * Evita desbordamiento de pila en WebViews de Android APK.
 */
export function floodFillBuffer(data, width, height, startX, startY, fillRgba) {
  const sx = Math.floor(startX);
  const sy = Math.floor(startY);
  if (sx < 0 || sy < 0 || sx >= width || sy >= height) return false;

  const startIdx = (sy * width + sx) * 4;
  const targetR = data[startIdx];
  const targetG = data[startIdx + 1];
  const targetB = data[startIdx + 2];
  const targetA = data[startIdx + 3];

  const fillR = Array.isArray(fillRgba) ? fillRgba[0] : fillRgba.r;
  const fillG = Array.isArray(fillRgba) ? fillRgba[1] : fillRgba.g;
  const fillB = Array.isArray(fillRgba) ? fillRgba[2] : fillRgba.b;
  const fillA = Array.isArray(fillRgba) ? fillRgba[3] : fillRgba.a ?? 255;

  if (
    targetR === fillR &&
    targetG === fillG &&
    targetB === fillB &&
    targetA === fillA
  ) {
    return false;
  }

  const totalPixels = width * height;
  const visited = new Uint8Array(totalPixels);
  const queue = new Int32Array(totalPixels);
  let head = 0;
  let tail = 0;

  const startPos = sy * width + sx;
  queue[tail++] = startPos;
  visited[startPos] = 1;

  while (head < tail) {
    const pos = queue[head++];
    const px = pos % width;
    const py = (pos - px) / width;
    const idx = pos * 4;

    data[idx] = fillR;
    data[idx + 1] = fillG;
    data[idx + 2] = fillB;
    data[idx + 3] = fillA;

    const neighbors = [];
    if (px > 0) neighbors.push(pos - 1);
    if (px < width - 1) neighbors.push(pos + 1);
    if (py > 0) neighbors.push(pos - width);
    if (py < height - 1) neighbors.push(pos + width);

    for (let i = 0; i < neighbors.length; i++) {
      const nPos = neighbors[i];
      if (visited[nPos]) continue;
      const nIdx = nPos * 4;
      if (
        data[nIdx] === targetR &&
        data[nIdx + 1] === targetG &&
        data[nIdx + 2] === targetB &&
        data[nIdx + 3] === targetA
      ) {
        visited[nPos] = 1;
        queue[tail++] = nPos;
      }
    }
  }

  return true;
}

/**
 * Construye la URL raw de GitHub hacia el repositorio oficial Mojang/bedrock-samples.
 */
export function buildMojangTextureUrl(categoryOrName, maybeTextureName) {
  let safeCategory = 'blocks';
  let rawName = categoryOrName;
  if (maybeTextureName !== undefined) {
    safeCategory = categoryOrName === 'items' ? 'items' : 'blocks';
    rawName = maybeTextureName;
  }
  const cleanName = String(rawName || '')
    .trim()
    .replace(/^\/+|\/+$/g, '')
    .replace(/\.png$/i, '');

  if (!cleanName) {
    throw new Error('Debes ingresar el nombre de una textura (ej. diamond_sword o stone).');
  }

  return `${MOJANG_RAW_BASE}/${safeCategory}/${cleanName}.png`;
}

// ---------------------------------------------------------------------------
// HELPER DE CREACIÓN DE OFFSCREENCANVAS CON FALLBACK SEGURO
// ---------------------------------------------------------------------------

function createLayerSurface(width, height) {
  if (typeof OffscreenCanvas !== 'undefined') {
    const offscreen = new OffscreenCanvas(width, height);
    const ctx = offscreen.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingEnabled = false;
    return { surface: offscreen, ctx, isOffscreen: true };
  }
  const domCanvas = document.createElement('canvas');
  domCanvas.width = width;
  domCanvas.height = height;
  const ctx = domCanvas.getContext('2d', { willReadFrequently: true });
  ctx.imageSmoothingEnabled = false;
  return { surface: domCanvas, ctx, isOffscreen: false };
}

// ---------------------------------------------------------------------------
// CLASE PRINCIPAL: TextureEditor (Estudio Mobile-First para APK Android)
// ---------------------------------------------------------------------------

export class TextureEditor {
  /**
   * @param {HTMLElement} container Contenedor HTML donde se montará el estudio táctil.
   * @param {Object} [options] Opciones de configuración inicial.
   */
  constructor(container, options = {}) {
    if (!container || !(container instanceof HTMLElement)) {
      throw new Error('TextureEditor requiere un contenedor HTML válido (div).');
    }

    this.container = container;
    this.canvasSize = [16, 32, 64].includes(options.initialSize) ? options.initialSize : 16;
    this.activeTool = 'pencil'; // 'pencil' | 'eraser' | 'bucket' | 'eyedropper' | 'select'
    this.activeColor = options.initialColor || '#5E8D34';
    this.brushSize = 1; // 1 | 2 | 4 | 8
    this.brushOpacity = 100; // 10 - 100 (%)
    this.symmetryMode = 'none'; // 'none' | 'horizontal' | 'vertical' | 'both'
    this.showGrid = options.showGrid !== false;
    this.showTopbar = options.showTopbar !== false;
    this.currentTextureName = 'grass_block_custom.png';
    this.isDrawerOpen = false;

    // Estado de Zoom y Pan (Gestos con 2 dedos)
    this.zoomScale = 1.0;
    this.panX = 0;
    this.panY = 0;

    // Estado de Selección Rectangular
    this.selectionRect = null; // { x, y, w, h }
    this.selectionFloatingBuffer = null; // ImageData del área seleccionada en movimiento
    this.selectionDragStart = null;
    this.isMovingSelection = false;

    // Estado de Fotogramas (Timeline de Animación) y Capas (OffscreenCanvas)
    this.frames = []; // Array de { id, name, layers: [{ id, name, visible, opacity, surface, ctx }], activeLayerIndex }
    this.activeFrameIndex = 0;
    this.fps = 6;
    this.isPlayingTimeline = true;
    this.previewPlayHead = 0;
    this.previewTiledMode = false;
    this._previewTimer = null;

    // Historial Undo/Redo (snapshots de todos los frames y capas)
    this.maxHistory = options.maxHistory || 30;
    this.history = [];
    this.historyIndex = -1;

    // Estado de Gestos Táctiles y Puntero
    this.isDrawing = false;
    this.lastPixel = null;
    this.longPressTimer = null;
    this.touchStartScreenPos = null;
    this.isTwoFingerGesture = false;
    this.gestureStartTouch1 = null;
    this.gestureStartTouch2 = null;
    this.gestureBaseScale = 1;
    this.gestureBasePanX = 0;
    this.gestureBasePanY = 0;

    // Contexto de Variantes y puente con TexturePackMerger
    this.packFilesMap = null;
    this.onSaveToPackCallback = options.onSaveToPackCallback || null;
    this.onExportBlob = options.onExportBlob || null;
    this.activeBlockKey = 'stone';
    this.activeVariantsInfo = getTextureVariants('textures/blocks/stone');
    this.activeVariantIndex = 0;
    this.variantDataUrls = new Map();

    this._initDefaultFramesAndLayers(options.seedInitialPattern !== false);
    this._seedBuiltInVariantsCatalog();
    this._renderUI();
    this._bindEvents();
    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
    this._renderTimelineStrip();
    this._renderVariantsPanel();
    this._startLivePreviewLoop();
  }

  // -------------------------------------------------------------------------
  // 1. INICIALIZACIÓN DE CAPAS (OFFSCREENCANVAS) Y FOTOGRAMAS (TIMELINE)
  // -------------------------------------------------------------------------

  _createLayerObject(name = 'Capa 1', opacity = 1.0, visible = true) {
    const { surface, ctx, isOffscreen } = createLayerSurface(this.canvasSize, this.canvasSize);
    return {
      id: `layer_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      name,
      opacity,
      visible,
      surface,
      ctx,
      isOffscreen,
    };
  }

  _initDefaultFramesAndLayers(seedInitialPattern = true) {
    const baseLayer = this._createLayerObject('Capa Base', 1.0, true);
    const detailLayer = this._createLayerObject('Capa Detalles', 1.0, true);

    this.frames = [
      {
        id: 'frame_0',
        name: 'Frame 1',
        layers: [baseLayer, detailLayer],
        activeLayerIndex: 0,
      },
    ];
    this.activeFrameIndex = 0;

    if (seedInitialPattern) {
      this._seedMinecraftGrassPatternOnLayer(baseLayer.ctx, detailLayer.ctx);
    }
  }

  _seedMinecraftGrassPatternOnLayer(baseCtx, detailCtx) {
    const n = this.canvasSize;
    const baseImg = baseCtx.createImageData(n, n);
    const detailImg = detailCtx.createImageData(n, n);

    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const idx = (y * n + x) * 4;
        const grassDepth = Math.max(3, Math.floor(n * 0.25)) + ((x * 7 + y * 3) % 3);
        const isGrass = y < grassDepth;

        if (isGrass) {
          const shade = ((x * 13 + y * 29) % 3) - 1;
          baseImg.data[idx] = 94 + shade * 10;
          baseImg.data[idx + 1] = 141 + shade * 12;
          baseImg.data[idx + 2] = 52 + shade * 8;
          baseImg.data[idx + 3] = 255;
        } else {
          const dirtNoise = ((x * 19 + y * 37) % 4) - 1;
          baseImg.data[idx] = 121 + dirtNoise * 9;
          baseImg.data[idx + 1] = 85 + dirtNoise * 7;
          baseImg.data[idx + 2] = 58 + dirtNoise * 6;
          baseImg.data[idx + 3] = 255;
        }

        // Pequeños píxeles minerales brillantes en la Capa 2 (Detalles)
        if (y > grassDepth + 2 && (x * 11 + y * 17) % 19 === 0) {
          detailImg.data[idx] = 148;
          detailImg.data[idx + 1] = 163;
          detailImg.data[idx + 2] = 184;
          detailImg.data[idx + 3] = 255;
        }
      }
    }

    baseCtx.putImageData(baseImg, 0, 0);
    detailCtx.putImageData(detailImg, 0, 0);
  }

  _getCurrentFrame() {
    return this.frames[this.activeFrameIndex] || this.frames[0];
  }

  _getActiveLayer() {
    const frame = this._getCurrentFrame();
    if (!frame) return null;
    return frame.layers[frame.activeLayerIndex] || frame.layers[0];
  }

  /**
   * Aplana las capas visibles del fotograma indicado y devuelve su ImageData.
   */
  _flattenFrameToImageData(frameIndex = this.activeFrameIndex) {
    const frame = this.frames[frameIndex] || this.frames[0];
    const n = this.canvasSize;
    const layerBuffers = frame.layers.map((layer) => ({
      visible: layer.visible,
      opacity: layer.opacity,
      data: layer.ctx.getImageData(0, 0, n, n).data,
    }));

    const flattenedBytes = flattenLayersBuffers(layerBuffers, n, n);
    const outImg = new ImageData(n, n);
    outImg.data.set(flattenedBytes);
    return outImg;
  }

  /**
   * Renderiza la composición multicapa del fotograma actual en el `<canvas>` principal
   * e incorpora cualquier selección flotante activa.
   */
  _compositeActiveFrameToMainCanvas() {
    if (!this.ctx) return;
    const n = this.canvasSize;
    const compositeImg = this._flattenFrameToImageData(this.activeFrameIndex);
    this.ctx.putImageData(compositeImg, 0, 0);

    if (this.selectionFloatingBuffer && this.selectionRect) {
      const temp = document.createElement('canvas');
      temp.width = this.selectionRect.w;
      temp.height = this.selectionRect.h;
      temp.getContext('2d').putImageData(this.selectionFloatingBuffer, 0, 0);
      this.ctx.drawImage(temp, this.selectionRect.x, this.selectionRect.y);
    }

    this._renderFloatingPreviewFrame();
  }

  // -------------------------------------------------------------------------
  // 2. RENDERIZADO DE LA INTERFAZ MOBILE-FIRST (ESTUDIO TÁCTIL APK)
  // -------------------------------------------------------------------------

  _renderUI() {
    this.container.innerHTML = `
      <div class="te-studio-root ${this.showTopbar ? 'is-standalone' : ''}">
        <!-- BARRA SUPERIOR TÁCTIL: Undo, Redo, Importar, Exportar y Menú Hamburguesa -->
        <header class="te-studio-header" aria-label="Barra de acciones del estudio de texturas">
          <div class="te-header-group">
            <button
              type="button"
              class="te-touch-btn"
              data-action="undo"
              aria-label="Deshacer trazo"
              title="Deshacer"
              disabled
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>
              </svg>
              <span class="te-hide-xs">Deshacer</span>
            </button>

            <button
              type="button"
              class="te-touch-btn"
              data-action="redo"
              aria-label="Rehacer trazo"
              title="Rehacer"
              disabled
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"/>
              </svg>
              <span class="te-hide-xs">Rehacer</span>
            </button>
          </div>

          <div class="te-header-group">
            <button
              type="button"
              class="te-touch-btn"
              data-action="open-import-modal"
              aria-label="Importar textura PNG o desde GitHub"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
              </svg>
              <span>Importar</span>
            </button>

            <button
              type="button"
              class="te-touch-btn is-primary"
              data-action="export-png"
              aria-label="Exportar textura PNG"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              <span>Exportar</span>
            </button>

            <button
              type="button"
              class="te-touch-btn is-menu-toggle"
              data-action="toggle-drawer"
              aria-label="Abrir menú de Capas, Paleta, Configuración y Línea de Tiempo"
              aria-expanded="false"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
              <span>Menú</span>
            </button>
          </div>
        </header>

        <!-- INDICADOR DE POSICIÓN Y COLOR EN LA PARTE SUPERIOR DEL CANVAS -->
        <div class="te-hud-bar" role="status" aria-live="polite">
          <span class="te-hud-item" data-role="coords-indicator">X: --, Y: --</span>
          <span class="te-hud-sep">·</span>
          <span class="te-hud-item">
            <span class="te-hud-swatch" data-role="hud-color-swatch" style="background:${this.activeColor}"></span>
            <strong data-role="hud-color-hex">${this.activeColor}</strong>
          </span>
          <span class="te-hud-sep">·</span>
          <span class="te-hud-item" data-role="hud-brush-readout">${this.brushSize}px · ${this.brushOpacity}%</span>
          <span class="te-hud-sep">·</span>
          <button
            type="button"
            class="te-hud-chip-btn"
            data-action="reset-zoom"
            data-role="hud-zoom-btn"
            title="Toca para restablecer Zoom y Pan (100%)"
          >
            100%
          </button>
          <button
            type="button"
            class="te-hud-chip-btn ${this.showGrid ? 'is-active' : ''}"
            data-action="toggle-grid"
            title="Alternar cuadrícula de píxeles"
          >
            # Grid
          </button>
        </div>

        <!-- NOTIFICACIÓN FLOTANTE PARA CUENTAGOTAS RÁPIDO (LONG PRESS) Y EVENTOS -->
        <div class="te-toast-feedback" data-role="toast-feedback">
          Cuentagotas rápido: #5E8D34
        </div>

        <!-- VENTANA FLOTANTE ARRASTRABLE DE PREVIEW EN VIVO (16x16 + LOOP ANIMADO) -->
        <aside class="te-floating-preview" data-role="floating-preview" aria-label="Ventana flotante de previsualización en vivo">
          <div class="te-floating-preview-header" data-role="floating-preview-handle">
            <span>Preview 1:1</span>
            <button
              type="button"
              class="te-hud-chip-btn"
              data-action="toggle-preview-tile"
              data-role="preview-mode-btn"
              title="Alternar vista 1x1 o Mosaico 3x3"
            >
              1×1
            </button>
          </div>
          <div class="te-floating-preview-body">
            <canvas
              class="te-live-preview-canvas"
              data-role="live-preview-canvas"
              width="${this.canvasSize}"
              height="${this.canvasSize}"
            ></canvas>
            <div class="te-floating-preview-meta">
              <span data-role="preview-res-label">${this.canvasSize}×${this.canvasSize}</span>
              <span data-role="preview-frame-label">F1/1</span>
            </div>
          </div>
        </aside>

        <!-- LIENZO CENTRAL INTERACTIVO (Soporta 1 dedo dibujo + 2 dedos Pinch Zoom / Pan) -->
        <main class="te-canvas-stage" data-role="canvas-stage">
          <div class="te-canvas-transform-wrap" data-role="canvas-transform-wrap">
            <div
              class="te-canvas-viewport"
              data-role="canvas-viewport"
              style="--te-grid-size: ${this.canvasSize};"
            >
              <canvas
                class="te-canvas"
                width="${this.canvasSize}"
                height="${this.canvasSize}"
                aria-label="Lienzo táctil de edición de texturas Minecraft"
              ></canvas>
              <div class="te-grid-overlay ${this.showGrid ? '' : 'is-hidden'}" data-role="grid-overlay"></div>
              <div class="te-symmetry-guide-h" data-role="sym-guide-h"></div>
              <div class="te-symmetry-guide-v" data-role="sym-guide-v"></div>
              <div class="te-selection-box" data-role="selection-box"></div>
            </div>
          </div>

          <!-- Acciones contextuales cuando hay un área seleccionada -->
          <div class="te-selection-actions is-hidden" data-role="selection-actions">
            <button type="button" class="te-sel-btn" data-action="selection-duplicate">
              ⧉ Copiar/Estampar
            </button>
            <button type="button" class="te-sel-btn is-danger" data-action="selection-delete">
              🗑 Borrar área
            </button>
            <button type="button" class="te-sel-btn" data-action="selection-clear">
              ✕ Soltar
            </button>
          </div>
        </main>

        <!-- BARRA DE HERRAMIENTAS FLOTANTE INFERIOR (Lápiz, Borrador, Cubo, Cuentagotas, Selección, Simetría) -->
        <nav class="te-bottom-dock" aria-label="Herramientas de dibujo táctiles">
          <button
            type="button"
            class="te-dock-btn is-active"
            data-tool="pencil"
            aria-label="Herramienta Lápiz"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>
            </svg>
            <span>Lápiz</span>
          </button>

          <button
            type="button"
            class="te-dock-btn"
            data-tool="eraser"
            aria-label="Herramienta Borrador"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/>
            </svg>
            <span>Borrador</span>
          </button>

          <button
            type="button"
            class="te-dock-btn"
            data-tool="bucket"
            aria-label="Herramienta Cubo de Relleno"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/>
            </svg>
            <span>Cubo</span>
          </button>

          <button
            type="button"
            class="te-dock-btn"
            data-tool="eyedropper"
            aria-label="Herramienta Cuentagotas"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"/>
            </svg>
            <span>Gotero</span>
          </button>

          <button
            type="button"
            class="te-dock-btn"
            data-tool="select"
            aria-label="Herramienta Selección"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 3"/>
            </svg>
            <span>Selección</span>
          </button>

          <button
            type="button"
            class="te-dock-btn"
            data-action="cycle-symmetry"
            data-role="symmetry-dock-btn"
            aria-label="Alternar Simetría Espejo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3v18"/><path d="m8 7-5 5 5 5"/><path d="m16 7 5 5-5 5"/>
            </svg>
            <span data-role="symmetry-dock-label">Espejo: OFF</span>
          </button>
        </nav>

        <!-- BACKDROP Y PANEL DESLIZABLE DEL MENÚ HAMBURGUESA -->
        <div class="te-drawer-backdrop" data-role="drawer-backdrop"></div>

        <aside
          class="te-drawer-panel"
          data-role="drawer-panel"
          aria-label="Panel de Capas, Paleta, Configuración y Línea de Tiempo"
        >
          <div class="te-drawer-header">
            <h2 class="te-drawer-title">Estudio Táctil · Capas y Ajustes</h2>
            <button
              type="button"
              class="te-touch-btn"
              data-action="close-drawer"
              aria-label="Cerrar panel de menú"
            >
              ✕ Cerrar
            </button>
          </div>

          <div class="te-drawer-body">
            <!-- 1. CAPAS (OffscreenCanvas con Miniaturas) -->
            <section class="te-drawer-section" aria-label="Gestión de Capas">
              <div class="te-section-title-row">
                <h3 class="te-section-title">Capas (OffscreenCanvas)</h3>
                <div style="display:flex;gap:0.35rem;">
                  <button
                    type="button"
                    class="te-mini-btn"
                    data-action="add-layer"
                    title="Añadir nueva capa"
                  >
                    + Capa
                  </button>
                  <button
                    type="button"
                    class="te-mini-btn"
                    data-action="duplicate-layer"
                    title="Duplicar capa activa"
                  >
                    ⧉
                  </button>
                </div>
              </div>
              <div class="te-layers-list" data-role="layers-list"></div>
            </section>

            <!-- 2. PALETA DE COLORES Y SELECTOR -->
            <section class="te-drawer-section" aria-label="Paleta de colores">
              <div class="te-section-title-row">
                <h3 class="te-section-title">Paleta y Color Activo</h3>
                <span class="te-section-badge" data-role="drawer-hex-badge">${this.activeColor}</span>
              </div>

              <div class="te-color-picker-bar">
                <input
                  type="color"
                  class="te-color-input"
                  data-role="color-picker"
                  value="${this.activeColor}"
                  aria-label="Selector de color personalizado"
                />
                <div class="te-hex-readout">
                  <span>HEX</span>
                  <strong data-role="color-hex-label">${this.activeColor}</strong>
                </div>
              </div>

              <div class="te-swatches-grid" data-role="swatches">
                ${DEFAULT_SWATCHES.map(
                  (hex) => `
                  <button
                    type="button"
                    class="te-swatch ${hex.toUpperCase() === this.activeColor.toUpperCase() ? 'is-active' : ''}"
                    style="background-color: ${hex};"
                    data-swatch="${hex}"
                    aria-label="Color ${hex}"
                  ></button>
                `
                ).join('')}
              </div>
            </section>

            <!-- 3. CONFIGURACIÓN: PINCEL (1px, 2px, 4px, 8px) Y OPACIDAD CON BOTONES + Y - -->
            <section class="te-drawer-section" aria-label="Configuración de pincel y lienzo">
              <div class="te-section-title-row">
                <h3 class="te-section-title">Tamaño del Pincel</h3>
                <span class="te-section-badge" data-role="brush-size-badge">${this.brushSize}px</span>
              </div>

              <!-- Botones rápidos 1px, 2px, 4px, 8px -->
              <div class="te-brush-presets">
                ${BRUSH_SIZES.map(
                  (sz) => `
                  <button
                    type="button"
                    class="te-preset-btn ${sz === this.brushSize ? 'is-active' : ''}"
                    data-brush-size="${sz}"
                  >
                    ${sz}px
                  </button>
                `
                ).join('')}
              </div>

              <!-- Botones grandes - y + para incrementar/decrementar tamaño de pincel -->
              <div class="te-stepper-row">
                <button
                  type="button"
                  class="te-stepper-btn"
                  data-action="brush-dec"
                  aria-label="Disminuir tamaño del pincel"
                >
                  −
                </button>
                <div class="te-stepper-val" data-role="brush-stepper-val">
                  Pincel: ${this.brushSize} px
                </div>
                <button
                  type="button"
                  class="te-stepper-btn"
                  data-action="brush-inc"
                  aria-label="Aumentar tamaño del pincel"
                >
                  +
                </button>
              </div>

              <!-- Botones grandes - y + para incrementar/decrementar Opacidad -->
              <div class="te-section-title-row" style="margin-top:0.25rem;">
                <h3 class="te-section-title">Opacidad de Pincel</h3>
                <span class="te-section-badge" data-role="opacity-badge">${this.brushOpacity}%</span>
              </div>

              <div class="te-stepper-row">
                <button
                  type="button"
                  class="te-stepper-btn"
                  data-action="opacity-dec"
                  aria-label="Disminuir opacidad"
                >
                  −
                </button>
                <div class="te-stepper-val" data-role="opacity-stepper-val">
                  Opacidad: ${this.brushOpacity}%
                </div>
                <button
                  type="button"
                  class="te-stepper-btn"
                  data-action="opacity-inc"
                  aria-label="Aumentar opacidad"
                >
                  +
                </button>
              </div>

              <!-- Resolución del lienzo (16x16, 32x32, 64x64) -->
              <div class="te-section-title-row" style="margin-top:0.25rem;">
                <h3 class="te-section-title">Resolución del Lienzo</h3>
                <span class="te-section-badge" data-role="size-badge">${this.canvasSize}×${this.canvasSize}</span>
              </div>

              <div class="te-brush-presets" style="grid-template-columns: repeat(3, 1fr);">
                ${[16, 32, 64]
                  .map(
                    (sz) => `
                  <button
                    type="button"
                    class="te-preset-btn ${sz === this.canvasSize ? 'is-active' : ''}"
                    data-size="${sz}"
                  >
                    ${sz}×${sz}
                  </button>
                `
                  )
                  .join('')}
              </div>
            </section>

            <!-- 4. VARIANTES DE TEXTURA (terrain_texture.json & flipbook_textures.json) -->
            <section class="te-drawer-section" data-role="variants-section" aria-label="Variantes de Textura Bedrock">
              <div class="te-section-title-row">
                <h3 class="te-section-title">Variantes de Textura</h3>
                <span class="te-section-badge" data-role="variants-badge">3 variantes</span>
              </div>

              <div class="te-variants-box">
                <div class="te-variants-quick-blocks">
                  <button type="button" class="te-variant-block-chip is-active" data-load-block-variants="stone">
                    stone (3 var)
                  </button>
                  <button type="button" class="te-variant-block-chip" data-load-block-variants="dirt">
                    dirt (2 var)
                  </button>
                  <button type="button" class="te-variant-block-chip" data-load-block-variants="diamond_ore">
                    diamond_ore (Flipbook)
                  </button>
                  <button type="button" class="te-variant-block-chip" data-load-block-variants="lava_still">
                    lava_still (Flipbook)
                  </button>
                </div>

                <select class="te-variant-select" data-role="variant-select" aria-label="Seleccionar variante de textura"></select>

                <div class="te-variants-gallery" data-role="variants-gallery"></div>
              </div>
            </section>
          </div>

          <!-- 5. LÍNEA DE TIEMPO HORIZONTAL (TIMELINE EN PARTE INFERIOR DEL MENÚ) -->
          <div class="te-drawer-timeline" aria-label="Línea de tiempo de fotogramas animados">
            <div class="te-timeline-controls">
              <span class="te-section-title">Línea de Tiempo (Frames)</span>
              <div style="display:flex;align-items:center;gap:0.28rem;">
                <button type="button" class="te-mini-btn" data-action="add-frame" title="Añadir fotograma">
                  + Frame
                </button>
                <button type="button" class="te-mini-btn" data-action="duplicate-frame" title="Duplicar fotograma">
                  ⧉
                </button>
                <button type="button" class="te-mini-btn is-danger" data-action="delete-frame" title="Borrar fotograma">
                  🗑
                </button>
                <button type="button" class="te-mini-btn" data-action="toggle-timeline-play" data-role="timeline-play-btn" title="Pausar/Reproducir animación">
                  ⏸
                </button>
                <button type="button" class="te-mini-btn" data-action="fps-dec" title="Reducir velocidad FPS">
                  −
                </button>
                <span class="te-section-badge" data-role="fps-badge">${this.fps} FPS</span>
                <button type="button" class="te-mini-btn" data-action="fps-inc" title="Aumentar velocidad FPS">
                  +
                </button>
              </div>
            </div>

            <div class="te-timeline-strip" data-role="timeline-strip"></div>
          </div>
        </aside>

        <!-- MODAL DE IMPORTACIÓN (PNG LOCAL + REPOSITORIO OFICIAL MOJANG GITHUB) -->
        <div
          class="te-modal-backdrop"
          data-role="github-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="te-import-modal-title"
        >
          <div class="te-modal-dialog">
            <div class="te-modal-header">
              <h3 class="te-modal-title" id="te-import-modal-title">
                Importar Textura (Local o GitHub Mojang)
              </h3>
              <button
                type="button"
                class="te-touch-btn"
                data-action="close-github-modal"
                aria-label="Cerrar ventana de importación"
              >
                ✕
              </button>
            </div>

            <div class="te-modal-body">
              <!-- Opción 1: Subir PNG desde el dispositivo Android -->
              <div class="te-form-group">
                <span class="te-form-label">1. Desde el almacenamiento del dispositivo (.PNG)</span>
                <button
                  type="button"
                  class="te-touch-btn"
                  style="width:100%;justify-content:center;"
                  data-action="import-local"
                >
                  📁 Seleccionar archivo PNG local
                </button>
                <input
                  type="file"
                  accept="image/png,image/webp,image/jpeg"
                  class="te-sr-only"
                  data-role="local-file-input"
                />
              </div>

              <hr style="border:none;border-top:1px solid var(--te-border-subtle);margin:0.2rem 0;" />

              <!-- Opción 2: Importar desde Mojang/bedrock-samples en GitHub -->
              <div class="te-form-group">
                <label class="te-form-label" for="te-gh-category">
                  2. Categoría en Mojang/bedrock-samples (GitHub)
                </label>
                <select id="te-gh-category" class="te-select" data-role="gh-category">
                  <option value="blocks">Bloques (textures/blocks/...)</option>
                  <option value="items">Ítems (textures/items/...)</option>
                </select>
              </div>

              <div class="te-form-group">
                <label class="te-form-label" for="te-gh-name">Nombre del archivo (sin .png)</label>
                <input
                  id="te-gh-name"
                  type="text"
                  class="te-input"
                  data-role="gh-name"
                  placeholder="Ej: diamond_sword, cobblestone, apple_golden"
                  value="diamond_sword"
                  autocomplete="off"
                />
              </div>

              <div class="te-form-group">
                <span class="te-form-label">Texturas sugeridas (1 toque)</span>
                <div class="te-quick-chips" data-role="gh-presets"></div>
              </div>

              <div class="te-status-banner" data-role="gh-status" role="status" aria-live="polite"></div>

              <button
                type="button"
                class="te-touch-btn is-primary"
                style="width:100%;justify-content:center;"
                data-action="fetch-github-texture"
              >
                Descargar de GitHub al Lienzo
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Referencias a elementos clave del DOM
    this.canvas = this.container.querySelector('.te-canvas');
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.ctx.imageSmoothingEnabled = false;

    this.livePreviewCanvas = this.container.querySelector('[data-role="live-preview-canvas"]');
    this.livePreviewCtx = this.livePreviewCanvas.getContext('2d');
    this.livePreviewCtx.imageSmoothingEnabled = false;

    this.els = {
      canvasStage: this.container.querySelector('[data-role="canvas-stage"]'),
      transformWrap: this.container.querySelector('[data-role="canvas-transform-wrap"]'),
      viewport: this.container.querySelector('[data-role="canvas-viewport"]'),
      gridOverlay: this.container.querySelector('[data-role="grid-overlay"]'),
      symGuideH: this.container.querySelector('[data-role="sym-guide-h"]'),
      symGuideV: this.container.querySelector('[data-role="sym-guide-v"]'),
      selectionBox: this.container.querySelector('[data-role="selection-box"]'),
      selectionActions: this.container.querySelector('[data-role="selection-actions"]'),
      coordsIndicator: this.container.querySelector('[data-role="coords-indicator"]'),
      hudColorSwatch: this.container.querySelector('[data-role="hud-color-swatch"]'),
      hudColorHex: this.container.querySelector('[data-role="hud-color-hex"]'),
      hudBrushReadout: this.container.querySelector('[data-role="hud-brush-readout"]'),
      hudZoomBtn: this.container.querySelector('[data-role="hud-zoom-btn"]'),
      gridBtn: this.container.querySelector('[data-action="toggle-grid"]'),
      toastFeedback: this.container.querySelector('[data-role="toast-feedback"]'),
      floatingPreview: this.container.querySelector('[data-role="floating-preview"]'),
      floatingPreviewHandle: this.container.querySelector('[data-role="floating-preview-handle"]'),
      previewModeBtn: this.container.querySelector('[data-role="preview-mode-btn"]'),
      previewResLabel: this.container.querySelector('[data-role="preview-res-label"]'),
      previewFrameLabel: this.container.querySelector('[data-role="preview-frame-label"]'),
      undoBtn: this.container.querySelector('[data-action="undo"]'),
      redoBtn: this.container.querySelector('[data-action="redo"]'),
      menuToggleBtn: this.container.querySelector('[data-action="toggle-drawer"]'),
      drawerBackdrop: this.container.querySelector('[data-role="drawer-backdrop"]'),
      drawerPanel: this.container.querySelector('[data-role="drawer-panel"]'),
      layersList: this.container.querySelector('[data-role="layers-list"]'),
      colorPicker: this.container.querySelector('[data-role="color-picker"]'),
      colorHexLabel: this.container.querySelector('[data-role="color-hex-label"]'),
      drawerHexBadge: this.container.querySelector('[data-role="drawer-hex-badge"]'),
      brushSizeBadge: this.container.querySelector('[data-role="brush-size-badge"]'),
      brushStepperVal: this.container.querySelector('[data-role="brush-stepper-val"]'),
      opacityBadge: this.container.querySelector('[data-role="opacity-badge"]'),
      opacityStepperVal: this.container.querySelector('[data-role="opacity-stepper-val"]'),
      sizeBadge: this.container.querySelector('[data-role="size-badge"]'),
      symmetryDockBtn: this.container.querySelector('[data-role="symmetry-dock-btn"]'),
      symmetryDockLabel: this.container.querySelector('[data-role="symmetry-dock-label"]'),
      variantsBadge: this.container.querySelector('[data-role="variants-badge"]'),
      variantSelect: this.container.querySelector('[data-role="variant-select"]'),
      variantsGallery: this.container.querySelector('[data-role="variants-gallery"]'),
      timelineStrip: this.container.querySelector('[data-role="timeline-strip"]'),
      timelinePlayBtn: this.container.querySelector('[data-role="timeline-play-btn"]'),
      fpsBadge: this.container.querySelector('[data-role="fps-badge"]'),
      githubModal: this.container.querySelector('[data-role="github-modal"]'),
      ghCategory: this.container.querySelector('[data-role="gh-category"]'),
      ghName: this.container.querySelector('[data-role="gh-name"]'),
      ghPresets: this.container.querySelector('[data-role="gh-presets"]'),
      ghStatus: this.container.querySelector('[data-role="gh-status"]'),
      localFileInput: this.container.querySelector('[data-role="local-file-input"]'),
    };

    this._renderGithubPresets();
  }

  // -------------------------------------------------------------------------
  // 3. GESTIÓN CRÍTICA DE EVENTOS TÁCTILES (touchstart, touchmove, touchend)
  //    Evita conflictos entre dibujar (1 dedo), Long-Press Cuentagotas (1 dedo quieto)
  //    y Zoom / Pan (2 dedos simultáneos).
  // -------------------------------------------------------------------------

  _bindEvents() {
    const stage = this.els.canvasStage;

    /**
     * GESTIÓN TÁCTIL EN EL LIENZO (ANDROID APK):
     * - Si `e.touches.length === 2`: Activamos modo Multitouch (Pinch-to-Zoom + Pan con 2 dedos).
     *   Cancelamos inmediatamente cualquier trazo de 1 dedo o temporizador de Long-Press para no manchar el lienzo.
     * - Si `e.touches.length === 1`: Iniciamos temporizador de Long-Press (450ms) para el Cuentagotas Rápido
     *   e iniciamos la preparación del trazo con la herramienta activa.
     */
    this.canvas.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault();

        // Caso A: Dos dedos en pantalla -> Pinch Zoom y Paneo (Pan)
        if (e.touches.length >= 2) {
          this._cancelLongPressTimer();
          if (this.isDrawing) {
            this.isDrawing = false;
            this.lastPixel = null;
            this._compositeActiveFrameToMainCanvas();
          }

          this.isTwoFingerGesture = true;
          this.gestureStartTouch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          this.gestureStartTouch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY };
          this.gestureBaseScale = this.zoomScale;
          this.gestureBasePanX = this.panX;
          this.gestureBasePanY = this.panY;
          return;
        }

        // Caso B: Un solo dedo -> Dibujo con herramienta activa o Long-Press para Cuentagotas Rápido
        if (e.touches.length === 1 && !this.isTwoFingerGesture) {
          const touch = e.touches[0];
          const coords = this._clientToPixelCoords(touch.clientX, touch.clientY);
          if (!coords) return;

          this.touchStartScreenPos = { x: touch.clientX, y: touch.clientY };
          this._updateHudCoords(coords[0], coords[1]);

          // Guardamos snapshot previo por si el Long-Press se activa y debemos revertir el píxel inicial
          const activeLayer = this._getActiveLayer();
          this._preStrokeLayerSnapshot = activeLayer
            ? activeLayer.ctx.getImageData(0, 0, this.canvasSize, this.canvasSize)
            : null;

          // Iniciar temporizador de Long-Press (450ms) para Cuentagotas Rápido automático
          this._cancelLongPressTimer();
          this.longPressTimer = setTimeout(() => {
            this.longPressTimer = null;
            // Si el usuario mantuvo presionado sin mover el dedo, restauramos la capa y ejecutamos Cuentagotas
            if (activeLayer && this._preStrokeLayerSnapshot) {
              activeLayer.ctx.putImageData(this._preStrokeLayerSnapshot, 0, 0);
            }
            this.isDrawing = false;
            this.lastPixel = null;
            this._pickColorAt(coords[0], coords[1], true);
            this._compositeActiveFrameToMainCanvas();
          }, 450);

          this._handlePointerDownAt(coords[0], coords[1]);
        }
      },
      { passive: false }
    );

    /**
     * MOVIMIENTO TÁCTIL (`touchmove`):
     * - Si estamos en gesto de 2 dedos (`isTwoFingerGesture`), actualizamos Zoom y Pan en tiempo real.
     * - Si es 1 dedo y se desplazó > 8px en pantalla, cancelamos el Long-Press de Cuentagotas y trazamos línea continua.
     */
    this.canvas.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault();

        if (this.isTwoFingerGesture && e.touches.length >= 2) {
          const t1Now = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          const t2Now = { x: e.touches[1].clientX, y: e.touches[1].clientY };
          const next = computeTwoFingerGesture(
            this.gestureStartTouch1,
            this.gestureStartTouch2,
            t1Now,
            t2Now,
            this.gestureBaseScale,
            this.gestureBasePanX,
            this.gestureBasePanY
          );
          this.zoomScale = next.scale;
          this.panX = next.panX;
          this.panY = next.panY;
          this._applyCanvasTransform();
          return;
        }

        if (e.touches.length === 1 && !this.isTwoFingerGesture) {
          const touch = e.touches[0];
          if (this.touchStartScreenPos) {
            const moveDist = Math.hypot(
              touch.clientX - this.touchStartScreenPos.x,
              touch.clientY - this.touchStartScreenPos.y
            );
            if (moveDist > 8) {
              this._cancelLongPressTimer();
            }
          }

          const coords = this._clientToPixelCoords(touch.clientX, touch.clientY);
          if (!coords) return;
          this._updateHudCoords(coords[0], coords[1]);
          this._handlePointerMoveAt(coords[0], coords[1]);
        }
      },
      { passive: false }
    );

    /**
     * FIN DEL TOQUE (`touchend` / `touchcancel`):
     * - Cancela el temporizador de Long-Press y consolida el trazo en el historial Undo/Redo.
     */
    const onTouchEnd = (e) => {
      this._cancelLongPressTimer();
      if (e.touches.length === 0) {
        this.isTwoFingerGesture = false;
      }
      this._handlePointerUp();
    };

    this.canvas.addEventListener('touchend', onTouchEnd);
    this.canvas.addEventListener('touchcancel', onTouchEnd);

    // Soporte de puntero/ratón para pruebas en escritorio / Playwright y clic derecho / Long-Press
    this.canvas.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      const coords = this._clientToPixelCoords(e.clientX, e.clientY);
      if (!coords) return;
      this.touchStartScreenPos = { x: e.clientX, y: e.clientY };
      this._updateHudCoords(coords[0], coords[1]);

      const activeLayer = this._getActiveLayer();
      this._preStrokeLayerSnapshot = activeLayer
        ? activeLayer.ctx.getImageData(0, 0, this.canvasSize, this.canvasSize)
        : null;

      this._cancelLongPressTimer();
      this.longPressTimer = setTimeout(() => {
        this.longPressTimer = null;
        if (activeLayer && this._preStrokeLayerSnapshot) {
          activeLayer.ctx.putImageData(this._preStrokeLayerSnapshot, 0, 0);
        }
        this.isDrawing = false;
        this.lastPixel = null;
        this._pickColorAt(coords[0], coords[1], true);
        this._compositeActiveFrameToMainCanvas();
      }, 500);

      this._handlePointerDownAt(coords[0], coords[1]);
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const coords = this._clientToPixelCoords(e.clientX, e.clientY);
      if (!coords) return;
      if (this.touchStartScreenPos) {
        const dist = Math.hypot(
          e.clientX - this.touchStartScreenPos.x,
          e.clientY - this.touchStartScreenPos.y
        );
        if (dist > 6) {
          this._cancelLongPressTimer();
        }
      }
      this._updateHudCoords(coords[0], coords[1]);
      this._handlePointerMoveAt(coords[0], coords[1]);
    });

    window.addEventListener('mouseup', () => {
      this._cancelLongPressTimer();
      this._handlePointerUp();
    });

    // Rueda de ratón en el stage para probar el Zoom también en escritorio
    stage.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.12 : 0.9;
        this.zoomScale = Math.max(0.6, Math.min(6.0, Number((this.zoomScale * factor).toFixed(2))));
        this._applyCanvasTransform();
      },
      { passive: false }
    );

    // Ventana flotante arrastrable de Preview en Vivo
    this._bindDraggableFloatingPreview();

    // Botones de Herramientas de la Barra Flotante Inferior
    this.container.querySelectorAll('[data-tool]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.setTool(btn.getAttribute('data-tool'));
      });
    });

    // Botones de tamaño rápido de pincel (1px, 2px, 4px, 8px)
    this.container.querySelectorAll('[data-brush-size]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.setBrushSize(Number(btn.getAttribute('data-brush-size')));
      });
    });

    // Botones de Resolución del Lienzo (16x16, 32x32, 64x64)
    this.container.querySelectorAll('[data-size]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.setCanvasSize(Number(btn.getAttribute('data-size')));
      });
    });

    // Selector de color y Swatches
    this.els.colorPicker.addEventListener('input', (e) => {
      this.setColor(e.target.value);
    });

    this.container.querySelectorAll('[data-swatch]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.setColor(btn.getAttribute('data-swatch'));
      });
    });

    // Acciones delegadas por data-action
    this.container.querySelectorAll('[data-action]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        switch (action) {
          case 'undo':
            this.undo();
            break;
          case 'redo':
            this.redo();
            break;
          case 'toggle-drawer':
            this.toggleDrawer();
            break;
          case 'close-drawer':
            this.toggleDrawer(false);
            break;
          case 'toggle-grid':
            this.toggleGrid();
            break;
          case 'reset-zoom':
            this.resetZoomAndPan();
            break;
          case 'cycle-symmetry':
            this.cycleSymmetryMode();
            break;
          case 'brush-inc':
            this.stepBrushSize(1);
            break;
          case 'brush-dec':
            this.stepBrushSize(-1);
            break;
          case 'opacity-inc':
            this.stepBrushOpacity(10);
            break;
          case 'opacity-dec':
            this.stepBrushOpacity(-10);
            break;
          case 'add-layer':
            this.addLayer();
            break;
          case 'duplicate-layer':
            this.duplicateActiveLayer();
            break;
          case 'add-frame':
            this.addTimelineFrame();
            break;
          case 'duplicate-frame':
            this.duplicateTimelineFrame();
            break;
          case 'delete-frame':
            this.deleteTimelineFrame();
            break;
          case 'toggle-timeline-play':
            this.toggleTimelinePlayback();
            break;
          case 'fps-inc':
            this.stepFps(2);
            break;
          case 'fps-dec':
            this.stepFps(-2);
            break;
          case 'toggle-preview-tile':
            this.previewTiledMode = !this.previewTiledMode;
            this.els.previewModeBtn.textContent = this.previewTiledMode ? '3×3' : '1×1';
            this._renderFloatingPreviewFrame();
            break;
          case 'selection-duplicate':
            this.stampSelectionCopy();
            break;
          case 'selection-delete':
            this.deleteSelectionArea();
            break;
          case 'selection-clear':
            this.commitAndClearSelection();
            break;
          case 'export-png':
            this.exportPNG();
            break;
          case 'import-local':
            this.els.localFileInput.click();
            break;
          case 'open-import-modal':
          case 'open-github-modal':
            this.openGithubModal();
            break;
          case 'close-github-modal':
            this.closeGithubModal();
            break;
          case 'fetch-github-texture':
            this.importFromGithub();
            break;
        }
      });
    });

    this.els.drawerBackdrop.addEventListener('click', () => {
      this.toggleDrawer(false);
    });

    // Importación de archivo PNG local
    this.els.localFileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) {
        this.importLocalFile(file);
        e.target.value = '';
        this.closeGithubModal();
      }
    });

    // Eventos del modal de GitHub
    this.els.ghCategory.addEventListener('change', () => {
      this._renderGithubPresets();
    });

    this.els.githubModal.addEventListener('click', (e) => {
      if (e.target === this.els.githubModal) {
        this.closeGithubModal();
      }
    });

    // Eventos de Variantes de Textura
    this.container.querySelectorAll('[data-load-block-variants]').forEach((chip) => {
      chip.addEventListener('click', () => {
        const blockKey = chip.getAttribute('data-load-block-variants');
        this.selectBlockVariantsPreset(blockKey);
      });
    });

    if (this.els.variantSelect) {
      this.els.variantSelect.addEventListener('change', (e) => {
        const idx = Number(e.target.value);
        if (Number.isFinite(idx)) {
          this.selectVariantByIndex(idx);
        }
      });
    }
  }

  _cancelLongPressTimer() {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }

  _bindDraggableFloatingPreview() {
    const box = this.els.floatingPreview;
    const handle = this.els.floatingPreviewHandle;
    if (!box || !handle) return;

    let dragging = false;
    let startX = 0;
    let startY = 0;
    let origLeft = 14;
    let origTop = 108;

    const startDrag = (clientX, clientY) => {
      dragging = true;
      startX = clientX;
      startY = clientY;
      origLeft = box.offsetLeft;
      origTop = box.offsetTop;
    };

    const moveDrag = (clientX, clientY) => {
      if (!dragging) return;
      const nextLeft = Math.max(6, Math.min(window.innerWidth - box.offsetWidth - 6, origLeft + (clientX - startX)));
      const nextTop = Math.max(60, Math.min(window.innerHeight - box.offsetHeight - 80, origTop + (clientY - startY)));
      box.style.left = `${nextLeft}px`;
      box.style.top = `${nextTop}px`;
    };

    handle.addEventListener(
      'touchstart',
      (e) => {
        if (e.touches.length === 1) {
          e.stopPropagation();
          startDrag(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      { passive: true }
    );

    handle.addEventListener(
      'touchmove',
      (e) => {
        if (dragging && e.touches.length === 1) {
          e.preventDefault();
          e.stopPropagation();
          moveDrag(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      { passive: false }
    );

    handle.addEventListener('touchend', () => {
      dragging = false;
    });

    handle.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startDrag(e.clientX, e.clientY);
    });

    window.addEventListener('mousemove', (e) => {
      if (dragging) moveDrag(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', () => {
      dragging = false;
    });
  }

  // -------------------------------------------------------------------------
  // 4. LÓGICA DE DIBUJO EN CAPAS, SIMETRÍA, SELECCIÓN Y CUENTAGOTAS RÁPIDO
  // -------------------------------------------------------------------------

  _clientToPixelCoords(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;
    const px = Math.max(0, Math.min(this.canvasSize - 1, Math.floor((relX / rect.width) * this.canvasSize)));
    const py = Math.max(0, Math.min(this.canvasSize - 1, Math.floor((relY / rect.height) * this.canvasSize)));
    return [px, py];
  }

  _updateHudCoords(px, py) {
    if (this.els.coordsIndicator) {
      this.els.coordsIndicator.textContent = `X: ${px}, Y: ${py}`;
    }
  }

  _applyCanvasTransform() {
    if (this.els.transformWrap) {
      this.els.transformWrap.style.transform = `translate3d(${this.panX}px, ${this.panY}px, 0) scale(${this.zoomScale})`;
    }
    if (this.els.hudZoomBtn) {
      this.els.hudZoomBtn.textContent = `${Math.round(this.zoomScale * 100)}%`;
    }
  }

  resetZoomAndPan() {
    this.zoomScale = 1.0;
    this.panX = 0;
    this.panY = 0;
    this._applyCanvasTransform();
  }

  _handlePointerDownAt(px, py) {
    // Herramienta Selección: crear o arrastrar selección existente
    if (this.activeTool === 'select') {
      if (
        this.selectionRect &&
        px >= this.selectionRect.x &&
        px < this.selectionRect.x + this.selectionRect.w &&
        py >= this.selectionRect.y &&
        py < this.selectionRect.y + this.selectionRect.h
      ) {
        // Iniciar arrastre del área seleccionada
        this.isMovingSelection = true;
        this.selectionDragStart = {
          px,
          py,
          origX: this.selectionRect.x,
          origY: this.selectionRect.y,
        };
        if (!this.selectionFloatingBuffer) {
          const layer = this._getActiveLayer();
          if (layer) {
            this.selectionFloatingBuffer = layer.ctx.getImageData(
              this.selectionRect.x,
              this.selectionRect.y,
              this.selectionRect.w,
              this.selectionRect.h
            );
            layer.ctx.clearRect(
              this.selectionRect.x,
              this.selectionRect.y,
              this.selectionRect.w,
              this.selectionRect.h
            );
          }
        }
      } else {
        // Confirmar selección previa si había una flotando y empezar una nueva
        this.commitAndClearSelection();
        this.isDrawing = true;
        this.selectionDragStart = { px, py };
        this.selectionRect = { x: px, y: py, w: 1, h: 1 };
        this._updateSelectionBoxOverlay();
      }
      this._compositeActiveFrameToMainCanvas();
      return;
    }

    if (this.activeTool === 'bucket') {
      this._applyFloodFillAt(px, py);
      this._compositeActiveFrameToMainCanvas();
      this._pushHistoryState();
      this._renderLayersList();
      this._renderTimelineStrip();
      return;
    }

    if (this.activeTool === 'eyedropper') {
      this._pickColorAt(px, py, false);
      return;
    }

    this.isDrawing = true;
    this.lastPixel = [px, py];
    this._paintPointWithBrushAndSymmetry(px, py);
    this._compositeActiveFrameToMainCanvas();
  }

  _handlePointerMoveAt(px, py) {
    if (this.activeTool === 'select') {
      if (this.isMovingSelection && this.selectionRect && this.selectionDragStart) {
        const dx = px - this.selectionDragStart.px;
        const dy = py - this.selectionDragStart.py;
        this.selectionRect.x = Math.max(
          0,
          Math.min(this.canvasSize - this.selectionRect.w, this.selectionDragStart.origX + dx)
        );
        this.selectionRect.y = Math.max(
          0,
          Math.min(this.canvasSize - this.selectionRect.h, this.selectionDragStart.origY + dy)
        );
        this._updateSelectionBoxOverlay();
        this._compositeActiveFrameToMainCanvas();
        return;
      }

      if (this.isDrawing && this.selectionDragStart) {
        const x0 = Math.min(this.selectionDragStart.px, px);
        const y0 = Math.min(this.selectionDragStart.py, py);
        const x1 = Math.max(this.selectionDragStart.px, px);
        const y1 = Math.max(this.selectionDragStart.py, py);
        this.selectionRect = {
          x: x0,
          y: y0,
          w: Math.max(1, x1 - x0 + 1),
          h: Math.max(1, y1 - y0 + 1),
        };
        this._updateSelectionBoxOverlay();
      }
      return;
    }

    if (!this.isDrawing) return;
    if (this.activeTool !== 'pencil' && this.activeTool !== 'eraser') return;

    const [lx, ly] = this.lastPixel || [px, py];
    if (lx === px && ly === py) return;

    const linePoints = plotBresenhamLine(lx, ly, px, py);
    for (let i = 0; i < linePoints.length; i++) {
      this._paintPointWithBrushAndSymmetry(linePoints[i].x, linePoints[i].y);
    }
    this.lastPixel = [px, py];
    this._compositeActiveFrameToMainCanvas();
  }

  _handlePointerUp() {
    if (this.isMovingSelection) {
      this.isMovingSelection = false;
      this._compositeActiveFrameToMainCanvas();
      return;
    }

    if (!this.isDrawing) return;
    this.isDrawing = false;
    this.lastPixel = null;

    if (this.activeTool === 'select') {
      this._updateSelectionBoxOverlay();
      return;
    }

    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
    this._renderTimelineStrip();
  }

  /**
   * Pinta un punto aplicando el tamaño de pincel (`brushSize`), la opacidad (`brushOpacity`)
   * y los ejes de Simetría (`symmetryMode`) sobre el `OffscreenCanvas` de la capa activa.
   */
  _paintPointWithBrushAndSymmetry(x, y) {
    const activeLayer = this._getActiveLayer();
    if (!activeLayer || !activeLayer.visible) return;

    const symCenters = computeSymmetryPoints(
      x,
      y,
      this.canvasSize,
      this.canvasSize,
      this.symmetryMode
    );

    const alphaByte = Math.round((this.brushOpacity / 100) * 255);
    const { r, g, b } = hexToRgba(this.activeColor, alphaByte);
    const ctx = activeLayer.ctx;

    for (const [cx, cy] of symCenters) {
      const footprint = expandBrushFootprint(
        cx,
        cy,
        this.brushSize,
        this.canvasSize,
        this.canvasSize
      );
      for (const [px, py] of footprint) {
        if (this.activeTool === 'eraser') {
          ctx.clearRect(px, py, 1, 1);
        } else {
          ctx.clearRect(px, py, 1, 1);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${(alphaByte / 255).toFixed(3)})`;
          ctx.fillRect(px, py, 1, 1);
        }
      }
    }
  }

  _applyFloodFillAt(x, y) {
    const activeLayer = this._getActiveLayer();
    if (!activeLayer || !activeLayer.visible) return;

    const imageData = activeLayer.ctx.getImageData(0, 0, this.canvasSize, this.canvasSize);
    const alphaByte = Math.round((this.brushOpacity / 100) * 255);
    const fillRgba = hexToRgba(this.activeColor, alphaByte);

    const symPoints = computeSymmetryPoints(
      x,
      y,
      this.canvasSize,
      this.canvasSize,
      this.symmetryMode
    );
    let anyChanged = false;
    for (const [sx, sy] of symPoints) {
      const changed = floodFillBuffer(
        imageData.data,
        this.canvasSize,
        this.canvasSize,
        sx,
        sy,
        fillRgba
      );
      if (changed) anyChanged = true;
    }

    if (anyChanged) {
      activeLayer.ctx.putImageData(imageData, 0, 0);
    }
  }

  /**
   * Cuentagotas (manual o por Long-Press táctil de 450ms).
   */
  _pickColorAt(x, y, isLongPress = false) {
    const compositeImg = this._flattenFrameToImageData(this.activeFrameIndex);
    const idx = (y * this.canvasSize + x) * 4;
    const r = compositeImg.data[idx];
    const g = compositeImg.data[idx + 1];
    const b = compositeImg.data[idx + 2];
    const a = compositeImg.data[idx + 3];

    if (a === 0) return;
    const hex = rgbaToHex(r, g, b);
    this.setColor(hex);

    if (isLongPress) {
      this._showToast(`Cuentagotas rápido: ${hex}`);
    } else {
      this.setTool('pencil');
    }
  }

  _showToast(message) {
    if (!this.els.toastFeedback) return;
    this.els.toastFeedback.textContent = message;
    this.els.toastFeedback.classList.add('is-visible');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      this.els.toastFeedback.classList.remove('is-visible');
    }, 1400);
  }

  // -------------------------------------------------------------------------
  // 5. HERRAMIENTA DE SELECCIÓN (MOVER, COPIAR/ESTAMPAR, BORRAR ÁREA)
  // -------------------------------------------------------------------------

  _updateSelectionBoxOverlay() {
    const box = this.els.selectionBox;
    const actions = this.els.selectionActions;
    if (!box || !actions) return;

    if (!this.selectionRect) {
      box.classList.remove('is-visible');
      actions.classList.add('is-hidden');
      return;
    }

    const pctX = (this.selectionRect.x / this.canvasSize) * 100;
    const pctY = (this.selectionRect.y / this.canvasSize) * 100;
    const pctW = (this.selectionRect.w / this.canvasSize) * 100;
    const pctH = (this.selectionRect.h / this.canvasSize) * 100;

    box.style.left = `${pctX}%`;
    box.style.top = `${pctY}%`;
    box.style.width = `${pctW}%`;
    box.style.height = `${pctH}%`;
    box.classList.add('is-visible');
    actions.classList.remove('is-hidden');
  }

  commitAndClearSelection() {
    if (this.selectionFloatingBuffer && this.selectionRect) {
      const layer = this._getActiveLayer();
      if (layer) {
        const temp = document.createElement('canvas');
        temp.width = this.selectionRect.w;
        temp.height = this.selectionRect.h;
        temp.getContext('2d').putImageData(this.selectionFloatingBuffer, 0, 0);
        layer.ctx.drawImage(temp, this.selectionRect.x, this.selectionRect.y);
      }
      this.selectionFloatingBuffer = null;
      this._pushHistoryState();
      this._renderLayersList();
    }
    this.selectionRect = null;
    this.selectionDragStart = null;
    this.isMovingSelection = false;
    this._updateSelectionBoxOverlay();
    this._compositeActiveFrameToMainCanvas();
  }

  stampSelectionCopy() {
    if (!this.selectionRect) return;
    const layer = this._getActiveLayer();
    if (!layer) return;

    if (!this.selectionFloatingBuffer) {
      this.selectionFloatingBuffer = layer.ctx.getImageData(
        this.selectionRect.x,
        this.selectionRect.y,
        this.selectionRect.w,
        this.selectionRect.h
      );
    }

    const temp = document.createElement('canvas');
    temp.width = this.selectionRect.w;
    temp.height = this.selectionRect.h;
    temp.getContext('2d').putImageData(this.selectionFloatingBuffer, 0, 0);
    layer.ctx.drawImage(temp, this.selectionRect.x, this.selectionRect.y);

    // Desplazar 1px abajo/derecha para que el usuario vea la copia lista para mover
    this.selectionRect.x = Math.min(this.canvasSize - this.selectionRect.w, this.selectionRect.x + 1);
    this.selectionRect.y = Math.min(this.canvasSize - this.selectionRect.h, this.selectionRect.y + 1);
    this._updateSelectionBoxOverlay();
    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._showToast('Selección copiada');
  }

  deleteSelectionArea() {
    if (!this.selectionRect) return;
    const layer = this._getActiveLayer();
    if (layer && !this.selectionFloatingBuffer) {
      layer.ctx.clearRect(
        this.selectionRect.x,
        this.selectionRect.y,
        this.selectionRect.w,
        this.selectionRect.h
      );
    }
    this.selectionFloatingBuffer = null;
    this.selectionRect = null;
    this._updateSelectionBoxOverlay();
    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
    this._showToast('Área borrada');
  }

  // -------------------------------------------------------------------------
  // 6. CONTROLES PÚBLICOS DE HERRAMIENTAS, SIMETRÍA, PINCEL Y MENÚ
  // -------------------------------------------------------------------------

  setTool(toolName) {
    const valid = ['pencil', 'eraser', 'bucket', 'eyedropper', 'select'];
    if (!valid.includes(toolName)) return;
    if (this.activeTool === 'select' && toolName !== 'select') {
      this.commitAndClearSelection();
    }
    this.activeTool = toolName;

    this.container.querySelectorAll('[data-tool]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-tool') === toolName);
    });
  }

  cycleSymmetryMode() {
    const idx = SYMMETRY_MODES.indexOf(this.symmetryMode);
    this.symmetryMode = SYMMETRY_MODES[(idx + 1) % SYMMETRY_MODES.length];

    const labels = {
      none: 'Espejo: OFF',
      horizontal: 'Espejo: H',
      vertical: 'Espejo: V',
      both: 'Espejo: H+V',
    };

    if (this.els.symmetryDockLabel) {
      this.els.symmetryDockLabel.textContent = labels[this.symmetryMode];
    }
    if (this.els.symmetryDockBtn) {
      this.els.symmetryDockBtn.classList.toggle('is-symmetry-on', this.symmetryMode !== 'none');
    }
    if (this.els.symGuideH) {
      this.els.symGuideH.classList.toggle(
        'is-visible',
        this.symmetryMode === 'horizontal' || this.symmetryMode === 'both'
      );
    }
    if (this.els.symGuideV) {
      this.els.symGuideV.classList.toggle(
        'is-visible',
        this.symmetryMode === 'vertical' || this.symmetryMode === 'both'
      );
    }
  }

  setBrushSize(size) {
    const next = BRUSH_SIZES.includes(size) ? size : 1;
    this.brushSize = next;
    if (this.els.brushSizeBadge) this.els.brushSizeBadge.textContent = `${next}px`;
    if (this.els.brushStepperVal) this.els.brushStepperVal.textContent = `Pincel: ${next} px`;
    if (this.els.hudBrushReadout) {
      this.els.hudBrushReadout.textContent = `${this.brushSize}px · ${this.brushOpacity}%`;
    }
    this.container.querySelectorAll('[data-brush-size]').forEach((btn) => {
      btn.classList.toggle('is-active', Number(btn.getAttribute('data-brush-size')) === next);
    });
  }

  stepBrushSize(direction) {
    const idx = BRUSH_SIZES.indexOf(this.brushSize);
    const nextIdx = Math.max(0, Math.min(BRUSH_SIZES.length - 1, idx + (direction > 0 ? 1 : -1)));
    this.setBrushSize(BRUSH_SIZES[nextIdx]);
  }

  stepBrushOpacity(delta) {
    this.brushOpacity = Math.max(10, Math.min(100, this.brushOpacity + delta));
    if (this.els.opacityBadge) this.els.opacityBadge.textContent = `${this.brushOpacity}%`;
    if (this.els.opacityStepperVal) {
      this.els.opacityStepperVal.textContent = `Opacidad: ${this.brushOpacity}%`;
    }
    if (this.els.hudBrushReadout) {
      this.els.hudBrushReadout.textContent = `${this.brushSize}px · ${this.brushOpacity}%`;
    }
  }

  setColor(hex) {
    if (!hex || typeof hex !== 'string') return;
    const normalized = hex.toUpperCase();
    this.activeColor = normalized;
    this.els.colorPicker.value = normalized;
    this.els.colorHexLabel.textContent = normalized;
    if (this.els.drawerHexBadge) this.els.drawerHexBadge.textContent = normalized;
    if (this.els.hudColorSwatch) this.els.hudColorSwatch.style.background = normalized;
    if (this.els.hudColorHex) this.els.hudColorHex.textContent = normalized;

    this.container.querySelectorAll('[data-swatch]').forEach((btn) => {
      btn.classList.toggle(
        'is-active',
        btn.getAttribute('data-swatch').toUpperCase() === normalized
      );
    });
  }

  toggleDrawer(forceState) {
    this.isDrawerOpen = typeof forceState === 'boolean' ? forceState : !this.isDrawerOpen;
    this.els.drawerPanel.classList.toggle('is-open', this.isDrawerOpen);
    this.els.drawerBackdrop.classList.toggle('is-open', this.isDrawerOpen);
    this.els.menuToggleBtn.classList.toggle('is-open', this.isDrawerOpen);
    this.els.menuToggleBtn.setAttribute('aria-expanded', String(this.isDrawerOpen));
  }

  toggleGrid(forceState) {
    this.showGrid = typeof forceState === 'boolean' ? forceState : !this.showGrid;
    this.els.gridOverlay.classList.toggle('is-hidden', !this.showGrid);
    this.els.gridBtn.classList.toggle('is-active', this.showGrid);
  }

  setCanvasSize(newSize) {
    if (![16, 32, 64].includes(newSize) || newSize === this.canvasSize) return;
    const prevSize = this.canvasSize;
    this.canvasSize = newSize;

    // Redimensionar cada OffscreenCanvas de cada capa en todos los fotogramas con nearest-neighbor
    for (const frame of this.frames) {
      for (const layer of frame.layers) {
        const prevImg = layer.ctx.getImageData(0, 0, prevSize, prevSize);
        const temp = document.createElement('canvas');
        temp.width = prevSize;
        temp.height = prevSize;
        temp.getContext('2d').putImageData(prevImg, 0, 0);

        const resized = createLayerSurface(newSize, newSize);
        resized.ctx.drawImage(temp, 0, 0, prevSize, prevSize, 0, 0, newSize, newSize);
        layer.surface = resized.surface;
        layer.ctx = resized.ctx;
      }
    }

    this.canvas.width = newSize;
    this.canvas.height = newSize;
    this.ctx.imageSmoothingEnabled = false;

    this.livePreviewCanvas.width = newSize;
    this.livePreviewCanvas.height = newSize;
    this.livePreviewCtx.imageSmoothingEnabled = false;

    this.els.viewport.style.setProperty('--te-grid-size', String(newSize));
    if (this.els.sizeBadge) this.els.sizeBadge.textContent = `${newSize}×${newSize}`;
    if (this.els.previewResLabel) this.els.previewResLabel.textContent = `${newSize}×${newSize}`;

    this.container.querySelectorAll('[data-size]').forEach((btn) => {
      btn.classList.toggle('is-active', Number(btn.getAttribute('data-size')) === newSize);
    });

    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
    this._renderTimelineStrip();
  }

  // -------------------------------------------------------------------------
  // 7. GESTIÓN DE CAPAS (AÑADIR, DUPLICAR, OCULTAR, REORDENAR, BORRAR)
  // -------------------------------------------------------------------------

  _renderLayersList() {
    const listEl = this.els.layersList;
    if (!listEl) return;
    const frame = this._getCurrentFrame();
    if (!frame) return;

    // Mostrar capas de arriba a abajo (índice mayor arriba)
    const itemsHtml = frame.layers
      .map((layer, idx) => ({ layer, idx }))
      .reverse()
      .map(
        ({ layer, idx }) => `
        <div
          class="te-layer-item ${idx === frame.activeLayerIndex ? 'is-active' : ''}"
          data-select-layer="${idx}"
        >
          <canvas
            class="te-layer-thumb"
            width="${this.canvasSize}"
            height="${this.canvasSize}"
            data-layer-thumb="${idx}"
          ></canvas>
          <div class="te-layer-info">
            <div class="te-layer-name">${layer.name}</div>
            <div class="te-layer-sub">${layer.visible ? 'Visible' : 'Oculta'} · ${Math.round(layer.opacity * 100)}%</div>
          </div>
          <div class="te-layer-controls">
            <button
              type="button"
              class="te-mini-btn ${layer.visible ? '' : 'is-muted-eye'}"
              data-toggle-layer-vis="${idx}"
              title="${layer.visible ? 'Ocultar capa' : 'Mostrar capa'}"
            >
              👁
            </button>
            <button
              type="button"
              class="te-mini-btn"
              data-move-layer-up="${idx}"
              title="Subir capa"
              ${idx === frame.layers.length - 1 ? 'disabled' : ''}
            >
              ▲
            </button>
            <button
              type="button"
              class="te-mini-btn"
              data-move-layer-down="${idx}"
              title="Bajar capa"
              ${idx === 0 ? 'disabled' : ''}
            >
              ▼
            </button>
            <button
              type="button"
              class="te-mini-btn is-danger"
              data-delete-layer="${idx}"
              title="Borrar capa"
              ${frame.layers.length <= 1 ? 'disabled' : ''}
            >
              🗑
            </button>
          </div>
        </div>
      `
      )
      .join('');

    listEl.innerHTML = itemsHtml;

    // Pintar miniaturas reales desde cada OffscreenCanvas
    frame.layers.forEach((layer, idx) => {
      const thumbCanvas = listEl.querySelector(`[data-layer-thumb="${idx}"]`);
      if (thumbCanvas) {
        const tCtx = thumbCanvas.getContext('2d');
        tCtx.imageSmoothingEnabled = false;
        const img = layer.ctx.getImageData(0, 0, this.canvasSize, this.canvasSize);
        tCtx.putImageData(img, 0, 0);
      }
    });

    listEl.querySelectorAll('[data-select-layer]').forEach((row) => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        frame.activeLayerIndex = Number(row.getAttribute('data-select-layer'));
        this._renderLayersList();
      });
    });

    listEl.querySelectorAll('[data-toggle-layer-vis]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.getAttribute('data-toggle-layer-vis'));
        frame.layers[idx].visible = !frame.layers[idx].visible;
        this._compositeActiveFrameToMainCanvas();
        this._pushHistoryState();
        this._renderLayersList();
        this._renderTimelineStrip();
      });
    });

    listEl.querySelectorAll('[data-move-layer-up]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.getAttribute('data-move-layer-up'));
        if (idx < frame.layers.length - 1) {
          const temp = frame.layers[idx];
          frame.layers[idx] = frame.layers[idx + 1];
          frame.layers[idx + 1] = temp;
          frame.activeLayerIndex = idx + 1;
          this._compositeActiveFrameToMainCanvas();
          this._pushHistoryState();
          this._renderLayersList();
        }
      });
    });

    listEl.querySelectorAll('[data-move-layer-down]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.getAttribute('data-move-layer-down'));
        if (idx > 0) {
          const temp = frame.layers[idx];
          frame.layers[idx] = frame.layers[idx - 1];
          frame.layers[idx - 1] = temp;
          frame.activeLayerIndex = idx - 1;
          this._compositeActiveFrameToMainCanvas();
          this._pushHistoryState();
          this._renderLayersList();
        }
      });
    });

    listEl.querySelectorAll('[data-delete-layer]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.getAttribute('data-delete-layer'));
        if (frame.layers.length <= 1) return;
        frame.layers.splice(idx, 1);
        frame.activeLayerIndex = Math.max(0, Math.min(frame.layers.length - 1, frame.activeLayerIndex));
        this._compositeActiveFrameToMainCanvas();
        this._pushHistoryState();
        this._renderLayersList();
        this._renderTimelineStrip();
      });
    });
  }

  addLayer() {
    const frame = this._getCurrentFrame();
    if (!frame) return;
    const newLayer = this._createLayerObject(`Capa ${frame.layers.length + 1}`, 1.0, true);
    frame.layers.push(newLayer);
    frame.activeLayerIndex = frame.layers.length - 1;
    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
  }

  duplicateActiveLayer() {
    const frame = this._getCurrentFrame();
    const active = this._getActiveLayer();
    if (!frame || !active) return;

    const copy = this._createLayerObject(`${active.name} (Copia)`, active.opacity, active.visible);
    const snap = active.ctx.getImageData(0, 0, this.canvasSize, this.canvasSize);
    copy.ctx.putImageData(snap, 0, 0);

    frame.layers.splice(frame.activeLayerIndex + 1, 0, copy);
    frame.activeLayerIndex += 1;
    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
  }

  // -------------------------------------------------------------------------
  // 8. LÍNEA DE TIEMPO HORIZONTAL (TIMELINE DE FRAMES Y LOOP DE PREVIEW)
  // -------------------------------------------------------------------------

  _renderTimelineStrip() {
    const strip = this.els.timelineStrip;
    if (!strip) return;

    strip.innerHTML = this.frames
      .map(
        (frame, idx) => `
        <div
          class="te-frame-card ${idx === this.activeFrameIndex ? 'is-active' : ''}"
          data-select-frame-idx="${idx}"
        >
          <canvas
            class="te-frame-thumb"
            width="${this.canvasSize}"
            height="${this.canvasSize}"
            data-frame-thumb="${idx}"
          ></canvas>
          <span class="te-frame-label">#${idx + 1}</span>
        </div>
      `
      )
      .join('');

    this.frames.forEach((_, idx) => {
      const thumb = strip.querySelector(`[data-frame-thumb="${idx}"]`);
      if (thumb) {
        const tCtx = thumb.getContext('2d');
        tCtx.imageSmoothingEnabled = false;
        tCtx.putImageData(this._flattenFrameToImageData(idx), 0, 0);
      }
    });

    strip.querySelectorAll('[data-select-frame-idx]').forEach((card) => {
      card.addEventListener('click', () => {
        const idx = Number(card.getAttribute('data-select-frame-idx'));
        this.selectFlipbookFrame(idx);
      });
    });

    if (this.els.previewFrameLabel) {
      this.els.previewFrameLabel.textContent = `F${this.activeFrameIndex + 1}/${this.frames.length}`;
    }
  }

  selectFlipbookFrame(frameIndex) {
    if (frameIndex < 0 || frameIndex >= this.frames.length) return;
    this.commitAndClearSelection();
    this.activeFrameIndex = frameIndex;
    this.previewPlayHead = frameIndex;
    this._compositeActiveFrameToMainCanvas();
    this._renderLayersList();
    this._renderTimelineStrip();
  }

  addTimelineFrame() {
    const baseLayer = this._createLayerObject('Capa 1', 1.0, true);
    this.frames.push({
      id: `frame_${Date.now()}`,
      name: `Frame ${this.frames.length + 1}`,
      layers: [baseLayer],
      activeLayerIndex: 0,
    });
    this.activeFrameIndex = this.frames.length - 1;
    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
    this._renderTimelineStrip();
  }

  duplicateTimelineFrame() {
    const srcFrame = this._getCurrentFrame();
    if (!srcFrame) return;

    const clonedLayers = srcFrame.layers.map((l) => {
      const nl = this._createLayerObject(l.name, l.opacity, l.visible);
      nl.ctx.putImageData(l.ctx.getImageData(0, 0, this.canvasSize, this.canvasSize), 0, 0);
      return nl;
    });

    this.frames.splice(this.activeFrameIndex + 1, 0, {
      id: `frame_${Date.now()}`,
      name: `Frame ${this.frames.length + 1}`,
      layers: clonedLayers,
      activeLayerIndex: srcFrame.activeLayerIndex,
    });
    this.activeFrameIndex += 1;
    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
    this._renderTimelineStrip();
  }

  deleteTimelineFrame() {
    if (this.frames.length <= 1) return;
    this.frames.splice(this.activeFrameIndex, 1);
    this.activeFrameIndex = Math.max(0, Math.min(this.frames.length - 1, this.activeFrameIndex));
    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
    this._renderTimelineStrip();
  }

  toggleTimelinePlayback() {
    this.isPlayingTimeline = !this.isPlayingTimeline;
    if (this.els.timelinePlayBtn) {
      this.els.timelinePlayBtn.textContent = this.isPlayingTimeline ? '⏸' : '▶';
    }
    this._startLivePreviewLoop();
  }

  stepFps(delta) {
    this.fps = Math.max(1, Math.min(24, this.fps + delta));
    if (this.els.fpsBadge) {
      this.els.fpsBadge.textContent = `${this.fps} FPS`;
    }
    this._startLivePreviewLoop();
  }

  _startLivePreviewLoop() {
    if (this._previewTimer) {
      clearInterval(this._previewTimer);
      this._previewTimer = null;
    }

    const intervalMs = Math.max(45, Math.round(1000 / this.fps));
    this._previewTimer = setInterval(() => {
      if (this.isPlayingTimeline && this.frames.length > 1) {
        this.previewPlayHead = (this.previewPlayHead + 1) % this.frames.length;
      } else {
        this.previewPlayHead = this.activeFrameIndex;
      }
      this._renderFloatingPreviewFrame();
    }, intervalMs);
  }

  _renderFloatingPreviewFrame() {
    if (!this.livePreviewCtx || !this.livePreviewCanvas) return;
    const frameIdx =
      this.frames.length > 1 && this.isPlayingTimeline
        ? this.previewPlayHead % this.frames.length
        : this.activeFrameIndex;

    const flatImg = this._flattenFrameToImageData(frameIdx);
    const n = this.canvasSize;

    if (!this.previewTiledMode) {
      if (this.livePreviewCanvas.width !== n) {
        this.livePreviewCanvas.width = n;
        this.livePreviewCanvas.height = n;
      }
      this.livePreviewCtx.clearRect(0, 0, n, n);
      this.livePreviewCtx.putImageData(flatImg, 0, 0);
    } else {
      const tileTotal = n * 3;
      if (this.livePreviewCanvas.width !== tileTotal) {
        this.livePreviewCanvas.width = tileTotal;
        this.livePreviewCanvas.height = tileTotal;
      }
      const temp = document.createElement('canvas');
      temp.width = n;
      temp.height = n;
      temp.getContext('2d').putImageData(flatImg, 0, 0);
      this.livePreviewCtx.clearRect(0, 0, tileTotal, tileTotal);
      for (let ty = 0; ty < 3; ty++) {
        for (let tx = 0; tx < 3; tx++) {
          this.livePreviewCtx.drawImage(temp, tx * n, ty * n);
        }
      }
    }

    if (this.els.previewFrameLabel) {
      this.els.previewFrameLabel.textContent = `F${frameIdx + 1}/${this.frames.length}`;
    }
  }

  // Compatibilidad con llamadas externas (merger-index.html / TexturePackMerger.js)
  _updateTilePreview() {
    // Si un módulo externo dibujó directamente sobre `this.ctx`, volcamos el contenido en la capa activa
    const activeLayer = this._getActiveLayer();
    if (activeLayer && this.ctx) {
      const mainSnap = this.ctx.getImageData(0, 0, this.canvasSize, this.canvasSize);
      activeLayer.ctx.putImageData(mainSnap, 0, 0);
    }
    this._renderFloatingPreviewFrame();
    this._renderLayersList();
    this._renderTimelineStrip();
  }

  // -------------------------------------------------------------------------
  // 9. HISTORIAL UNDO / REDO MULTICAPA
  // -------------------------------------------------------------------------

  _pushHistoryState() {
    const n = this.canvasSize;
    const serializedFrames = this.frames.map((frame) => ({
      id: frame.id,
      name: frame.name,
      activeLayerIndex: frame.activeLayerIndex,
      layers: frame.layers.map((l) => ({
        id: l.id,
        name: l.name,
        visible: l.visible,
        opacity: l.opacity,
        imageData: l.ctx.getImageData(0, 0, n, n),
      })),
    }));

    if (this.historyIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.historyIndex + 1);
    }

    this.history.push({
      canvasSize: n,
      activeFrameIndex: this.activeFrameIndex,
      frames: serializedFrames,
    });

    if (this.history.length > this.maxHistory) {
      this.history.shift();
    } else {
      this.historyIndex++;
    }

    this._updateHistoryButtons();
  }

  _restoreHistorySnapshot(snapshot) {
    if (!snapshot) return;
    const n = snapshot.canvasSize;
    if (n !== this.canvasSize) {
      this.canvasSize = n;
      this.canvas.width = n;
      this.canvas.height = n;
    }

    this.frames = snapshot.frames.map((fSnap) => ({
      id: fSnap.id,
      name: fSnap.name,
      activeLayerIndex: fSnap.activeLayerIndex,
      layers: fSnap.layers.map((lSnap) => {
        const layerObj = this._createLayerObject(lSnap.name, lSnap.opacity, lSnap.visible);
        layerObj.id = lSnap.id;
        layerObj.ctx.putImageData(lSnap.imageData, 0, 0);
        return layerObj;
      }),
    }));

    this.activeFrameIndex = Math.max(0, Math.min(this.frames.length - 1, snapshot.activeFrameIndex));
    this._compositeActiveFrameToMainCanvas();
    this._renderLayersList();
    this._renderTimelineStrip();
    this._updateHistoryButtons();
  }

  undo() {
    if (this.historyIndex <= 0) return;
    this.historyIndex--;
    this._restoreHistorySnapshot(this.history[this.historyIndex]);
  }

  redo() {
    if (this.historyIndex >= this.history.length - 1) return;
    this.historyIndex++;
    this._restoreHistorySnapshot(this.history[this.historyIndex]);
  }

  _updateHistoryButtons() {
    if (this.els.undoBtn) this.els.undoBtn.disabled = this.historyIndex <= 0;
    if (this.els.redoBtn) this.els.redoBtn.disabled = this.historyIndex >= this.history.length - 1;
  }

  // -------------------------------------------------------------------------
  // 10. VARIANTES DE TEXTURA Y PUENTE CON TEXTUREPACKMERGER
  // -------------------------------------------------------------------------

  _seedBuiltInVariantsCatalog() {
    const createBlockDataUrl = (type, variantIdx) => {
      const c = document.createElement('canvas');
      c.width = 16;
      c.height = 16;
      const ctx = c.getContext('2d');
      const img = ctx.createImageData(16, 16);

      for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
          const i = (y * 16 + x) * 4;
          const n = ((x * 17 + y * 31 + variantIdx * 13) % 5) - 2;
          if (type === 'stone') {
            const base = variantIdx === 0 ? 125 : variantIdx === 1 ? 108 : 115;
            const moss = variantIdx === 2 && (x + y) % 5 === 0 ? 28 : 0;
            img.data[i] = base + n * 6 - moss;
            img.data[i + 1] = base + n * 6 + moss;
            img.data[i + 2] = base + n * 6 - moss;
          } else if (type === 'dirt') {
            img.data[i] = (variantIdx === 0 ? 134 : 118) + n * 7;
            img.data[i + 1] = (variantIdx === 0 ? 96 : 84) + n * 5;
            img.data[i + 2] = (variantIdx === 0 ? 67 : 56) + n * 4;
          } else if (type === 'diamond_ore') {
            const isGem = (x >= 4 && x <= 11 && y >= 4 && y <= 11 && (x + y + variantIdx) % 4 === 0);
            img.data[i] = isGem ? 45 : 120 + n * 5;
            img.data[i + 1] = isGem ? 225 : 120 + n * 5;
            img.data[i + 2] = isGem ? 245 : 122 + n * 5;
          } else {
            const wave = Math.round(Math.sin((x + y + variantIdx * 2) * 0.7) * 24);
            img.data[i] = Math.min(255, 235 + wave);
            img.data[i + 1] = Math.max(40, 110 + wave);
            img.data[i + 2] = 20;
          }
          img.data[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      return c.toDataURL('image/png');
    };

    this.variantDataUrls.set('textures/blocks/stone', createBlockDataUrl('stone', 0));
    this.variantDataUrls.set('textures/blocks/stone_var1', createBlockDataUrl('stone', 1));
    this.variantDataUrls.set('textures/blocks/stone_var2', createBlockDataUrl('stone', 2));
    this.variantDataUrls.set('textures/blocks/dirt', createBlockDataUrl('dirt', 0));
    this.variantDataUrls.set('textures/blocks/dirt_var1', createBlockDataUrl('dirt', 1));
    this.variantDataUrls.set('textures/blocks/diamond_ore', createBlockDataUrl('diamond_ore', 0));
    this.variantDataUrls.set('textures/blocks/lava_still', createBlockDataUrl('lava_still', 0));
  }

  setPackJsonContext(mergedFilesMap, onSaveToPackCallback = null) {
    this.packFilesMap = mergedFilesMap;
    this.onSaveToPackCallback = onSaveToPackCallback;
  }

  async loadFromPackEntry(targetPath, pngUrl, mergedFilesMap = null) {
    if (mergedFilesMap) {
      this.packFilesMap = mergedFilesMap;
    }

    const jsonFiles = {};
    if (this.packFilesMap instanceof Map) {
      const dec = new TextDecoder('utf-8');
      const tEntry = this.packFilesMap.get('textures/terrain_texture.json');
      const fEntry = this.packFilesMap.get('textures/flipbook_textures.json');
      if (tEntry?.bytes) {
        try {
          jsonFiles.terrainTexture = JSON.parse(dec.decode(tEntry.bytes));
        } catch {
          // Ignorar JSON malformado
        }
      }
      if (fEntry?.bytes) {
        try {
          jsonFiles.flipbookTextures = JSON.parse(dec.decode(fEntry.bytes));
        } catch {
          // Ignorar JSON malformado
        }
      }
    }

    this.activeVariantsInfo = getTextureVariants(targetPath, jsonFiles);
    this.activeBlockKey = this.activeVariantsInfo.blockKey;
    const normTarget = normalizeBedrockTexturePath(targetPath);
    const foundIdx = this.activeVariantsInfo.variations.findIndex(
      (v) => v.path.toLowerCase() === normTarget.toLowerCase()
    );
    this.activeVariantIndex = foundIdx >= 0 ? foundIdx : 0;

    await this._loadDataUrlIntoLayers(pngUrl, targetPath.split('/').pop());
    this._renderVariantsPanel();
  }

  selectBlockVariantsPreset(blockKey) {
    this.activeBlockKey = blockKey;
    this.activeVariantsInfo = getTextureVariants(`textures/blocks/${blockKey}`);
    this.activeVariantIndex = 0;

    this.container.querySelectorAll('[data-load-block-variants]').forEach((chip) => {
      chip.classList.toggle(
        'is-active',
        chip.getAttribute('data-load-block-variants') === blockKey
      );
    });

    if (this.activeVariantsInfo.isFlipbook) {
      // Generar 4 frames animados en el Timeline para bloques Flipbook (diamond_ore, lava_still)
      this._populateFlipbookFramesForBlock(blockKey);
    } else {
      this.selectVariantByIndex(0);
    }
    this._renderVariantsPanel();
  }

  _populateFlipbookFramesForBlock(blockKey) {
    const n = this.canvasSize;
    this.frames = [0, 1, 2, 3].map((fIdx) => {
      const layer = this._createLayerObject('Capa Flipbook', 1.0, true);
      const img = layer.ctx.createImageData(n, n);
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
          const i = (y * n + x) * 4;
          if (blockKey === 'lava_still') {
            const wave = Math.round(Math.sin((x + y + fIdx * 2) * 0.65) * 30);
            img.data[i] = Math.min(255, 235 + wave);
            img.data[i + 1] = Math.max(45, 115 + wave);
            img.data[i + 2] = 18;
            img.data[i + 3] = 255;
          } else {
            const isOre = x >= 3 && x <= n - 4 && y >= 3 && y <= n - 4 && (x + y + fIdx) % 4 === 0;
            img.data[i] = isOre ? 56 : 118;
            img.data[i + 1] = isOre ? 225 : 118;
            img.data[i + 2] = isOre ? 248 : 122;
            img.data[i + 3] = 255;
          }
        }
      }
      layer.ctx.putImageData(img, 0, 0);
      return {
        id: `frame_${fIdx}`,
        name: `Frame ${fIdx + 1}`,
        layers: [layer],
        activeLayerIndex: 0,
      };
    });

    this.activeFrameIndex = 0;
    this.currentTextureName = `${blockKey}.png`;
    this._compositeActiveFrameToMainCanvas();
    this._pushHistoryState();
    this._renderLayersList();
    this._renderTimelineStrip();
  }

  async selectVariantByIndex(variantIndex) {
    const vars = this.activeVariantsInfo?.variations || [];
    const target = vars[variantIndex];
    if (!target) return;

    this.activeVariantIndex = variantIndex;
    let url = this.variantDataUrls.get(target.path);

    if (this.packFilesMap instanceof Map && this.packFilesMap.has(target.filePath)) {
      const bytes = this.packFilesMap.get(target.filePath).bytes;
      const blob = new Blob([bytes], { type: 'image/png' });
      url = URL.createObjectURL(blob);
    }

    if (url) {
      await this._loadDataUrlIntoLayers(url, `${target.path.split('/').pop()}.png`);
    }
    this._renderVariantsPanel();
  }

  _renderVariantsPanel() {
    if (!this.els.variantSelect || !this.els.variantsGallery) return;
    const info = this.activeVariantsInfo;
    const vars = info?.variations || [];

    if (this.els.variantsBadge) {
      this.els.variantsBadge.textContent = info?.isFlipbook
        ? `Flipbook · ${this.frames.length}f`
        : `${vars.length} variante${vars.length === 1 ? '' : 's'}`;
    }

    this.els.variantSelect.innerHTML = vars
      .map(
        (v, idx) => `
        <option value="${idx}" ${idx === this.activeVariantIndex ? 'selected' : ''}>
          ${v.label} — ${v.path.split('/').pop()}
        </option>
      `
      )
      .join('');

    this.els.variantsGallery.innerHTML = vars
      .map((v, idx) => {
        const thumbUrl = this.variantDataUrls.get(v.path) || '';
        return `
          <button
            type="button"
            class="te-variant-thumb-btn ${idx === this.activeVariantIndex ? 'is-active' : ''}"
            data-select-variant-idx="${idx}"
          >
            ${thumbUrl ? `<img src="${thumbUrl}" alt="${v.label}" class="te-variant-thumb-img" />` : ''}
            <span>Var ${idx} (${v.weight})</span>
          </button>
        `;
      })
      .join('');

    this.els.variantsGallery.querySelectorAll('[data-select-variant-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-select-variant-idx'));
        this.selectVariantByIndex(idx);
      });
    });
  }

  async _loadDataUrlIntoLayers(url, filename = 'texture.png') {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;

        // Si es una tira vertical animada (Flipbook: h > w y múltiplo de w), separamos cada frame en el Timeline
        if (h > w && h % w === 0 && [16, 32, 64].includes(w)) {
          this.setCanvasSize(w);
          const frameCount = Math.min(16, Math.floor(h / w));
          this.frames = [];
          for (let f = 0; f < frameCount; f++) {
            const layer = this._createLayerObject('Capa Base', 1.0, true);
            layer.ctx.drawImage(img, 0, f * w, w, w, 0, 0, w, w);
            this.frames.push({
              id: `frame_${f}`,
              name: `Frame ${f + 1}`,
              layers: [layer],
              activeLayerIndex: 0,
            });
          }
          this.activeFrameIndex = 0;
        } else {
          const targetSize = [16, 32, 64].includes(w) ? w : this.canvasSize;
          this.setCanvasSize(targetSize);
          const layer = this._createLayerObject('Capa Importada', 1.0, true);
          layer.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize);
          this.frames = [
            {
              id: 'frame_0',
              name: 'Frame 1',
              layers: [layer],
              activeLayerIndex: 0,
            },
          ];
          this.activeFrameIndex = 0;
        }

        this.currentTextureName = filename;
        this._compositeActiveFrameToMainCanvas();
        this._pushHistoryState();
        this._renderLayersList();
        this._renderTimelineStrip();
        resolve();
      };
      img.onerror = () => resolve();
      img.src = url;
    });
  }

  // -------------------------------------------------------------------------
  // 11. EXPORTACIÓN (PNG + BLOB PARA TEXTUREPACKMERGER) E IMPORTACIÓN GITHUB
  // -------------------------------------------------------------------------

  /**
   * Genera el Blob PNG aplanando todas las capas visibles en orden.
   * Si la textura tiene múltiples frames en el Timeline, genera la tira vertical Flipbook de Bedrock.
   */
  async exportBlob() {
    const n = this.canvasSize;
    const frameCount = this.frames.length;
    const outCanvas = document.createElement('canvas');
    outCanvas.width = n;
    outCanvas.height = n * frameCount;
    const outCtx = outCanvas.getContext('2d');
    outCtx.imageSmoothingEnabled = false;

    for (let f = 0; f < frameCount; f++) {
      const flatImg = this._flattenFrameToImageData(f);
      const temp = document.createElement('canvas');
      temp.width = n;
      temp.height = n;
      temp.getContext('2d').putImageData(flatImg, 0, 0);
      outCtx.drawImage(temp, 0, f * n);
    }

    return new Promise((resolve) => {
      outCanvas.toBlob((blob) => resolve(blob), 'image/png');
    });
  }

  /**
   * Exporta y descarga el PNG aplanado. Si el editor se abrió desde `TexturePackMerger`,
   * envía los bytes actualizados de vuelta al paquete fusionado y devuelve el `Blob`.
   */
  async exportPNG(filename) {
    const safeName = filename || this.currentTextureName || `minecraft_texture_${this.canvasSize}x${this.canvasSize}.png`;
    const blob = await this.exportBlob();
    if (!blob) return null;

    // Si hay callback registrado desde TexturePackMerger, actualizar el archivo en el pack
    if (typeof this.onSaveToPackCallback === 'function') {
      const buf = await blob.arrayBuffer();
      const activeVar = this.activeVariantsInfo?.variations?.[this.activeVariantIndex];
      const targetPath = activeVar?.filePath || `textures/blocks/${safeName}`;
      this.onSaveToPackCallback(targetPath, new Uint8Array(buf), blob);
    }

    if (typeof this.onExportBlob === 'function') {
      this.onExportBlob(blob, safeName);
    }

    if (typeof document !== 'undefined') {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = safeName.endsWith('.png') ? safeName : `${safeName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1500);
    }

    this._showToast(`Exportado: ${safeName}`);
    return blob;
  }

  importLocalFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      await this._loadDataUrlIntoLayers(event.target.result, file.name);
      this._showToast(`Importado: ${file.name}`);
    };
    reader.readAsDataURL(file);
  }

  openGithubModal() {
    this.els.githubModal.classList.add('is-open');
    this._setGithubStatus('', '');
    setTimeout(() => this.els.ghName?.focus(), 60);
  }

  closeGithubModal() {
    this.els.githubModal.classList.remove('is-open');
  }

  _renderGithubPresets() {
    const category = this.els.ghCategory?.value || 'blocks';
    const list = MINECRAFT_PRESETS[category] || MINECRAFT_PRESETS.blocks;

    this.els.ghPresets.innerHTML = list
      .map(
        (item) => `
        <button type="button" class="te-chip" data-preset="${item.name}">
          ${item.label}
        </button>
      `
      )
      .join('');

    this.els.ghPresets.querySelectorAll('[data-preset]').forEach((chip) => {
      chip.addEventListener('click', () => {
        this.els.ghName.value = chip.getAttribute('data-preset');
        this.importFromGithub();
      });
    });
  }

  _setGithubStatus(message, type) {
    const banner = this.els.ghStatus;
    if (!banner) return;
    banner.className = 'te-status-banner';
    if (!message) {
      banner.textContent = '';
      return;
    }
    banner.textContent = message;
    banner.classList.add('is-visible', type === 'error' ? 'is-error' : 'is-success');
  }

  async importFromGithub() {
    const category = this.els.ghCategory.value;
    const rawName = this.els.ghName.value;

    let targetUrl;
    try {
      targetUrl = buildMojangTextureUrl(category, rawName);
    } catch (err) {
      this._setGithubStatus(err.message, 'error');
      return;
    }

    this._setGithubStatus(`Descargando "${rawName.trim()}.png" desde GitHub...`, 'success');

    try {
      const response = await fetch(targetUrl, { mode: 'cors', cache: 'force-cache' });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            `No se encontró "${rawName.trim()}.png" en textures/${category}/. Verifica el nombre.`
          );
        }
        throw new Error(`Error HTTP ${response.status} al contactar con GitHub.`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      await this._loadDataUrlIntoLayers(objectUrl, `${rawName.trim()}.png`);
      URL.revokeObjectURL(objectUrl);

      // Consultar si la textura importada desde GitHub tiene variantes o flipbook en Bedrock
      this.activeVariantsInfo = getTextureVariants(`textures/${category}/${rawName.trim()}`);
      this._renderVariantsPanel();

      this._setGithubStatus(`¡Textura "${rawName.trim()}.png" cargada en el lienzo!`, 'success');
      setTimeout(() => this.closeGithubModal(), 450);
    } catch (error) {
      this._setGithubStatus(
        error.message || 'No se pudo descargar la textura desde GitHub.',
        'error'
      );
    }
  }
}

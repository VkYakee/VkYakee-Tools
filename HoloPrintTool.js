/**
 * @file HoloPrintTool.js
 * @description Implementación completa de HoloPrint integrada para la APK Multi-Tool.
 * Conserva el diseño, estructura de pestañas, fieldsets desplegables, tabla de archivos,
 * controles de jugador, bloqueo de coordenadas, vista previa 3D, exportador GLB, logger
 * y empaquetador .mcpack original con tema personalizado y metadatos de VkYakee.
 */

export const HOLOPRINT_AUTHOR = 'VkYakee';
export const HOLOPRINT_REPO_URL = 'https://github.com/VkYakee/holoprint';
export const HOLOPRINT_WIKI_URL = 'https://holoprint-mc.github.io/wiki';
export const HOLOPRINT_VERSION = [1, 2, 0];

export const IGNORED_BLOCKS = [
  'air',
  'piston_arm_collision',
  'sticky_piston_arm_collision',
  'light_block',
  'light_block_0',
  'light_block_1',
  'light_block_2',
  'light_block_3',
  'light_block_4',
  'light_block_5',
  'light_block_6',
  'light_block_7',
  'light_block_8',
  'light_block_9',
  'light_block_10',
  'light_block_11',
  'light_block_12',
  'light_block_13',
  'light_block_14',
  'light_block_15',
];

export const PLAYER_CONTROL_NAMES = {
  TOGGLE_RENDERING: 'player_controls.toggle_rendering',
  CHANGE_OPACITY: 'player_controls.change_opacity',
  TOGGLE_TINT: 'player_controls.toggle_tint',
  TOGGLE_VALIDATING: 'player_controls.toggle_validating',
  CHANGE_LAYER: 'player_controls.change_layer',
  DECREASE_LAYER: 'player_controls.decrease_layer',
  CHANGE_LAYER_MODE: 'player_controls.change_layer_mode',
  MOVE_HOLOGRAM: 'player_controls.move_hologram',
  ROTATE_HOLOGRAM: 'player_controls.rotate_hologram',
  CHANGE_STRUCTURE: 'player_controls.change_structure',
  DISABLE_PLAYER_CONTROLS: 'player_controls.disable_player_controls',
  BACKUP_HOLOGRAM: 'player_controls.backup_hologram',
};

export function createItemCriteria(names, tags = []) {
  if (!Array.isArray(names)) names = names ? [names] : [];
  if (!Array.isArray(tags)) tags = tags ? [tags] : [];
  return { names, tags };
}

export const DEFAULT_PLAYER_CONTROLS = {
  TOGGLE_RENDERING: createItemCriteria('brick'),
  CHANGE_OPACITY: createItemCriteria('amethyst_shard'),
  TOGGLE_TINT: createItemCriteria('white_dye'),
  TOGGLE_VALIDATING: createItemCriteria('iron_ingot'),
  CHANGE_LAYER: createItemCriteria('leather'),
  DECREASE_LAYER: createItemCriteria('feather'),
  CHANGE_LAYER_MODE: createItemCriteria('flint'),
  MOVE_HOLOGRAM: createItemCriteria('stick'),
  ROTATE_HOLOGRAM: createItemCriteria('copper_ingot'),
  CHANGE_STRUCTURE: createItemCriteria('arrow'),
  DISABLE_PLAYER_CONTROLS: createItemCriteria('bone'),
  BACKUP_HOLOGRAM: createItemCriteria('paper'),
};

/**
 * Traducciones completas tomadas del repositorio HoloPrint (con URLs de VkYakee)
 */
export const TRANSLATIONS = {
  es_MX: {
    app_name: 'HoloPrint',
    change_language: 'Cambiar idioma',
    download: 'Descargar pack',
    generate: 'Generar pack',
    generate_heading: 'Generar pack de recursos de HoloPrint (<code>*.mcpack</code>)',
    'file_input_table.count': '{COUNT} archivo[s] seleccionado[s]',
    'file_input_table.empty': 'Archivos no seleccionados',
    'file_input_table.remove_all': 'Eliminar todo',
    'item_criteria_input.item_name': 'Nombre del item',
    'item_criteria_input.item_tag': 'Etiqueta del item',
    'item_criteria_input.matching': 'Coincidencias:',
    'item_criteria_input.nothing': 'Nada',
    'item_criteria_input.or': ' o ',
    'metadata.compression_level': 'Nivel de compresión:',
    'metadata.description': 'Descripción:',
    'metadata.description.placeholder': '¡Esta es mi casa épica!',
    'metadata.description.link_found': 'Enlace encontrado:',
    'metadata.heading': 'Metadatos',
    'metadata.pack_icon': 'Icono del pack (<code>*.png</code>):',
    'metadata.pack_name': 'Nombre del pack:',
    'metadata.pack_name.error': "El nombre del pack no puede contener '/'",
    'metadata.reset': '¡Reiniciar metadatos!',
    'metadata.structure_author': 'Autor de la estructura:',
    'metadata.structure_author.placeholder': 'VkYakee',
    pack_generation_failed: '¡Falló la generación del pack!',
    'player_controls.toggle_rendering': 'Cambiar renderización',
    'player_controls.change_opacity': 'Cambiar opacidad',
    'player_controls.toggle_tint': 'Cambiar el tinte de la superposición',
    'player_controls.toggle_validating': 'Cambiar validación',
    'player_controls.change_layer': 'Cambiar capa',
    'player_controls.decrease_layer': 'Reducir capa',
    'player_controls.change_layer_mode': 'Cambiar modo de capa',
    'player_controls.move_hologram': 'Mover holograma',
    'player_controls.rotate_hologram': 'Rotar holograma',
    'player_controls.change_structure': 'Cambiar estructura',
    'player_controls.disable_player_controls': 'Desactivar controles del jugador',
    'player_controls.backup_hologram': 'Guardar configuraciones de holograma',
    'preview.options': 'Opciones',
    'preview.options.maxPointLights': 'Puntos máximos de luz',
    'preview.options.shadowsEnabled': 'Sombras',
    'preview.options.shadowQuality': 'Calidad de las sombras',
    'preview.options.lightAngle': 'Ángulo de luz',
    'preview.options.lightHeight': 'Altura de luz',
    'preview.options.showSkybox': 'Mostrar skybox',
    'preview.options.highRes': 'Alta resolución',
    'preview.options.takeScreenshot': 'Captura de pantalla',
    'preview.options.exportGlb': 'Exportar como GLB',
    'progress.generating': 'Generando pack...',
    reset: 'Reiniciar',
    'resource_packs.clear_cache': 'Limpiar caché del pack de recursos',
    'resource_packs.cache_reset': '¡Caché del pack de recursos limpiado!',
    'resource_packs.heading': 'Packs de Recursos',
    'resource_packs.reset': '¡Packs de Recursos reiniciados!',
    'resource_packs.upload_local': 'Subir un pack de recursos local:',
    'settings.advanced': 'Avanzado',
    'settings.backup_slot_count': 'Número de ranuras de reserva:',
    'settings.control_item_texture_scale': 'Controlar la escala de textura del item:',
    'settings.coordinate_lock': 'Bloquear coordenadas:',
    'settings.coordinate_lock.get_global_coords': 'Obtener coordenadas globales',
    'settings.coordinate_lock.axis': 'Eje:',
    'settings.coordinate_lock.adjust': 'Ajustar:',
    'settings.heading': 'Ajustes',
    'settings.features': 'Características',
    'settings.features.spawn_animation': 'Animación de aparición:',
    'settings.features.player_controls': 'Controles del jugador:',
    'settings.features.ui_controls': 'Controles de la IU:',
    'settings.features.retexture_control_items': 'Retexturar control de items:',
    'settings.features.rename_control_items': 'Renombrar control de items:',
    'settings.ghost_block_scale': 'Escala del bloque fantasma:',
    'settings.initial_offset': 'Desplazamiento inicial:',
    'settings.ignored_blocks': 'Bloques ignorados:',
    'settings.ignored_blocks.placeholder': 'block_1 block_2 etc.',
    'settings.max_structure_diagram_texture_size': 'Tamaño máximo de la textura del diagrama de la estructura:',
    'settings.mini_size': 'Tamaño de pantalla pequeña: ',
    'settings.mini_size.small': 'Pequeño',
    'settings.mini_size.smaller': 'Más pequeño',
    'settings.mini_size.tiny': 'Diminuto',
    'settings.mini_size.hidden': 'Oculto',
    'settings.opacity': 'Opacidad del holograma:',
    'settings.opacity_mode': 'Modo de opacidad:',
    'settings.opacity_mode.fixed_opacity': 'Opción única',
    'settings.opacity_mode.in_game_controls': 'Controles en el juego',
    'settings.player_controls': `Controles en el juego (<a href="${HOLOPRINT_WIKI_URL}/hologram-controls" target="_blank">Wiki</a>)`,
    'settings.reset': '¡Reiniciar ajustes!',
    'settings.textures': 'Texturas',
    'settings.textures.tint.color': 'Tinte de superposición:',
    'settings.textures.tint.opacity': 'Opacidad del tinte de superposición:',
    'settings.textures.tint.toggleable_in_game': 'El tinte puede activarse/desactivarse en el juego',
    'settings.textures.outline.color': 'Color del contorno de la textura:',
    'settings.textures.outline.opacity': 'Opacidad del contorno de la textura:',
    'settings.textures.outline.width': 'Ancho del contorno de la textura:',
    'settings.textures.outline.width.no_outline': 'Ninguno',
    'settings.validate_air_blocks': 'Validar bloques de aire:',
    terms_of_use_notice: `Al generar un pack con HoloPrint estás de acuerdo con los <a href="${HOLOPRINT_REPO_URL}/blob/main/TERMS_OF_USE.md" target="_blank">TÉRMINOS DE USO</a>. (¡realmente son cortos!)`,
    'structure_files.heading': 'Archivos de estructuras',
    'structure_files.upload': 'Subir archivos de estructuras (<code>*.mcstructure</code>)',
    'structure_files.error': 'Por favor solo suba archivos de estructuras <code>.mcstructure</code>',
    'extract_from_world.heading': 'Extraer del mundo',
    'extract_from_world.upload': 'Subir archivo de mundo (<code>*.mcworld</code>, <code>*.mctemplate</code>, <code>*.zip</code>)',
    'extract_from_world.extracting': 'Extrayendo estructuras del mundo...',
    'extract_from_world.success': '¡{COUNT} estructura[s] extraída[s] exitosamente!',
    'extract_from_world.error': '¡No se encontraron estructuras guardadas!',
    'extract_from_world.world_error': '¡Archivo de mundo inválido! {ERROR}',
    'update_pack.heading': 'Actualizar pack',
    'update_pack.upload': 'Subir pack de Structura/HoloPrint antiguo (<code>*.mcpack</code>)',
    'update_pack.extracting': 'Extrayendo archivos de estructuras...',
    'update_pack.success': '¡Archivos de estructuras antiguas encontrados exitosamente!',
    'update_pack.error': '¡El pack no es de Structura/HoloPrint! <small>(No se encontraron archivos de estructuras.)</small>',
    'upload.button': 'Subir un archivo',
    'upload.button.world': 'Subir un archivo de mundo',
    'upload.button.old_pack': 'Subir un pack antiguo',
    'upload.button.drop_notice': 'O lanza archivos aquí',
    'upload.drop_file': 'Lanza tus archivos aquí',
  },
  en_US: {
    app_name: 'HoloPrint',
    change_language: 'Change language',
    download: 'Download pack',
    generate: 'Generate pack',
    generate_heading: 'Generate HoloPrint resource pack (<code>*.mcpack</code>)',
    'file_input_table.count': '{COUNT} file[s] selected',
    'file_input_table.empty': 'No files are selected',
    'file_input_table.remove_all': 'Remove all',
    'item_criteria_input.item_name': 'Item name',
    'item_criteria_input.item_tag': 'Item tag',
    'item_criteria_input.matching': 'Matching:',
    'item_criteria_input.nothing': 'Nothing',
    'item_criteria_input.or': ' or ',
    'metadata.compression_level': 'Compression level:',
    'metadata.description': 'Description:',
    'metadata.description.placeholder': 'This is my epic house!',
    'metadata.description.link_found': 'Link found:',
    'metadata.heading': 'Metadata',
    'metadata.pack_icon': 'Pack icon (<code>*.png</code>):',
    'metadata.pack_name': 'Pack name:',
    'metadata.pack_name.error': "Pack name cannot contain '/'",
    'metadata.reset': 'Metadata reset!',
    'metadata.structure_author': 'Structure author:',
    'metadata.structure_author.placeholder': 'VkYakee',
    pack_generation_failed: 'Pack generation failed!',
    'player_controls.toggle_rendering': 'Toggle rendering',
    'player_controls.change_opacity': 'Change opacity',
    'player_controls.toggle_tint': 'Toggle overlay tint',
    'player_controls.toggle_validating': 'Toggle validating',
    'player_controls.change_layer': 'Change layer',
    'player_controls.decrease_layer': 'Decrease layer',
    'player_controls.change_layer_mode': 'Change layer mode',
    'player_controls.move_hologram': 'Move hologram',
    'player_controls.rotate_hologram': 'Rotate hologram',
    'player_controls.change_structure': 'Change structure',
    'player_controls.disable_player_controls': 'Disable player controls',
    'player_controls.backup_hologram': 'Save hologram settings',
    'preview.options': 'Options',
    'preview.options.maxPointLights': 'Max point lights',
    'preview.options.shadowsEnabled': 'Shadows',
    'preview.options.shadowQuality': 'Shadow quality',
    'preview.options.lightAngle': 'Light angle',
    'preview.options.lightHeight': 'Light height',
    'preview.options.showSkybox': 'Show skybox',
    'preview.options.highRes': 'High resolution',
    'preview.options.takeScreenshot': 'Screenshot',
    'preview.options.exportGlb': 'Export as GLB',
    'progress.generating': 'Making pack...',
    reset: 'Reset',
    'resource_packs.clear_cache': 'Clear resource pack cache',
    'resource_packs.cache_reset': 'Resource pack cache cleared!',
    'resource_packs.heading': 'Resource packs',
    'resource_packs.reset': 'Resource packs reset!',
    'resource_packs.upload_local': 'Upload a local resource pack:',
    'settings.advanced': 'Advanced',
    'settings.backup_slot_count': 'Backup slot count:',
    'settings.control_item_texture_scale': 'Control item texture scale:',
    'settings.coordinate_lock': 'Coordinate lock:',
    'settings.coordinate_lock.get_global_coords': 'Get global coordinates',
    'settings.coordinate_lock.axis': 'Axis:',
    'settings.coordinate_lock.adjust': 'Adjust:',
    'settings.heading': 'Settings',
    'settings.features': 'Features',
    'settings.features.spawn_animation': 'Spawn animation:',
    'settings.features.player_controls': 'Player controls:',
    'settings.features.ui_controls': 'UI controls:',
    'settings.features.retexture_control_items': 'Retexture control items:',
    'settings.features.rename_control_items': 'Rename control items:',
    'settings.ghost_block_scale': 'Ghost block scale:',
    'settings.initial_offset': 'Initial offset:',
    'settings.ignored_blocks': 'Ignored blocks:',
    'settings.ignored_blocks.placeholder': 'block_1 block_2 etc.',
    'settings.max_structure_diagram_texture_size': 'Max structure diagram texture size:',
    'settings.mini_size': 'Mini display size: ',
    'settings.mini_size.small': 'Small',
    'settings.mini_size.smaller': 'Smaller',
    'settings.mini_size.tiny': 'Tiny',
    'settings.mini_size.hidden': 'Hidden',
    'settings.opacity': 'Hologram opacity:',
    'settings.opacity_mode': 'Opacity mode:',
    'settings.opacity_mode.fixed_opacity': 'Single option',
    'settings.opacity_mode.in_game_controls': 'In-game controls',
    'settings.player_controls': `In-game controls (<a href="${HOLOPRINT_WIKI_URL}/hologram-controls" target="_blank">Wiki</a>)`,
    'settings.reset': 'Settings reset!',
    'settings.textures': 'Textures',
    'settings.textures.tint.color': 'Overlay tint:',
    'settings.textures.tint.opacity': 'Overlay tint opacity:',
    'settings.textures.tint.toggleable_in_game': 'Tint can be turned on/off in-game',
    'settings.textures.outline.color': 'Texture outline color:',
    'settings.textures.outline.opacity': 'Texture outline opacity:',
    'settings.textures.outline.width': 'Texture outline width:',
    'settings.textures.outline.width.no_outline': 'None',
    'settings.validate_air_blocks': 'Validate air blocks:',
    terms_of_use_notice: `By generating a pack with HoloPrint, you agree to the <a href="${HOLOPRINT_REPO_URL}/blob/main/TERMS_OF_USE.md" target="_blank">Terms of Use</a>. (It's really short!)`,
    'structure_files.heading': 'Structure files',
    'structure_files.upload': 'Upload structure files (<code>*.mcstructure</code>)',
    'structure_files.error': 'Please upload only <code>.mcstructure</code> files.',
    'extract_from_world.heading': 'Extract from world',
    'extract_from_world.upload': 'Upload world file (<code>*.mcworld</code>, <code>*.mctemplate</code>, <code>*.zip</code>)',
    'extract_from_world.extracting': 'Extracting structures from world...',
    'extract_from_world.success': 'Successfully extracted {COUNT} structure[s]!',
    'extract_from_world.error': 'No saved structures found!',
    'extract_from_world.world_error': 'Invalid world file! {ERROR}',
    'update_pack.heading': 'Update pack',
    'update_pack.upload': 'Upload old Structura/HoloPrint pack (<code>*.mcpack</code>)',
    'update_pack.extracting': 'Extracting structure files...',
    'update_pack.success': 'Successfully found old structure files!',
    'update_pack.error': 'Pack is not a Structura/HoloPrint pack! <small>(No structure files were found.)</small>',
    'upload.button': 'Upload a file',
    'upload.button.world': 'Upload a world file',
    'upload.button.old_pack': 'Upload an old pack',
    'upload.button.drop_notice': 'Or drop files here',
    'upload.drop_file': 'Drop your files here',
  },
};
TRANSLATIONS.es_ES = TRANSLATIONS.es_MX;

export const BLOCK_VISUAL_CATALOG = {
  stone: { name: 'Piedra', top: '#8F8F8F', left: '#787878', right: '#636363' },
  cobblestone: { name: 'Adoquín', top: '#7B7B7B', left: '#666666', right: '#525252' },
  stonebrick: { name: 'Ladrillos de piedra', top: '#848484', left: '#6E6E6E', right: '#5A5A5A' },
  stone_bricks: { name: 'Ladrillos de piedra', top: '#848484', left: '#6E6E6E', right: '#5A5A5A' },
  mossy_stone_bricks: { name: 'Ladrillos de piedra musgosos', top: '#6E7F63', left: '#5C6B52', right: '#4C5943' },
  oak_log: { name: 'Tronco de roble', top: '#B4905A', left: '#6B5231', right: '#574226' },
  spruce_log: { name: 'Tronco de abeto', top: '#7A5A34', left: '#4A341D', right: '#3B2916' },
  oak_planks: { name: 'Tablones de roble', top: '#B8945F', left: '#9E7E4F', right: '#856941' },
  spruce_planks: { name: 'Tablones de abeto', top: '#7E5E38', left: '#6B4F2E', right: '#594125' },
  oak_stairs: { name: 'Escaleras de roble', top: '#B8945F', left: '#9E7E4F', right: '#856941' },
  oak_fence: { name: 'Valla de roble', top: '#B8945F', left: '#9E7E4F', right: '#856941' },
  glass: { name: 'Cristal', top: '#A8E6FF', left: '#8CD8F5', right: '#73C2E0', alpha: 0.48 },
  tinted_glass: { name: 'Cristal tintado', top: '#4A4458', left: '#3B3647', right: '#2E2A38', alpha: 0.55 },
  glowstone: { name: 'Piedra luminosa', top: '#FFDF78', left: '#EBC454', right: '#CFA73A' },
  sea_lantern: { name: 'Linterna del mar', top: '#D2F5EE', left: '#B2E4DB', right: '#95CFC5' },
  lantern: { name: 'Farol', top: '#F5B841', left: '#D99B26', right: '#B57B14' },
  redstone_lamp: { name: 'Lámpara de redstone', top: '#B57445', left: '#945B33', right: '#784726' },
  redstone_block: { name: 'Bloque de redstone', top: '#E02819', left: '#BD1E11', right: '#9C160B' },
  redstone_wire: { name: 'Polvo de redstone', top: '#C71C10', left: '#A6140A', right: '#8A0F07' },
  repeater: { name: 'Repetidor de redstone', top: '#9E9E9E', left: '#808080', right: '#666666' },
  comparator: { name: 'Comparador de redstone', top: '#A39A98', left: '#877E7C', right: '#6E6664' },
  piston: { name: 'Pistón', top: '#9E8156', left: '#787878', right: '#616161' },
  sticky_piston: { name: 'Pistón pegajoso', top: '#83B85A', left: '#787878', right: '#616161' },
  observer: { name: 'Observador', top: '#696969', left: '#545454', right: '#424242' },
  diamond_block: { name: 'Bloque de diamante', top: '#65F5E3', left: '#47DEC9', right: '#32BFA9' },
  gold_block: { name: 'Bloque de oro', top: '#FCEE4B', left: '#E0CF2B', right: '#C2B11B' },
  emerald_block: { name: 'Bloque de esmeralda', top: '#2BD968', left: '#1EBD56', right: '#159E44' },
  iron_block: { name: 'Bloque de hierro', top: '#E6E6E6', left: '#CCCCCC', right: '#B3B3B3' },
  copper_block: { name: 'Bloque de cobre', top: '#D67B59', left: '#BD6746', right: '#A15436' },
  amethyst_block: { name: 'Bloque de amatista', top: '#9C6FD9', left: '#8358BD', right: '#6B449E' },
  obsidian: { name: 'Obsidiana', top: '#251D38', left: '#1B142B', right: '#120D1F' },
  crying_obsidian: { name: 'Obsidiana llorosa', top: '#432070', left: '#341759', right: '#260F42' },
  nether_portal: { name: 'Portal del Nether', top: '#9842F5', left: '#7E2BD9', right: '#671BB8', alpha: 0.65 },
  quartz_block: { name: 'Bloque de cuarzo', top: '#F2EFE9', left: '#DFDBD4', right: '#C9C5BE' },
  brick_block: { name: 'Bloque de ladrillos', top: '#A85848', left: '#8F4839', right: '#75382B' },
  bricks: { name: 'Bloque de ladrillos', top: '#A85848', left: '#8F4839', right: '#75382B' },
  grass_block: { name: 'Bloque de césped', top: '#68A83B', left: '#866043', right: '#6E4E36' },
  dirt: { name: 'Tierra', top: '#866043', left: '#735138', right: '#5E432E' },
  water: { name: 'Cubo con agua', top: '#3B9EFF', left: '#2B85E0', right: '#1E6EC2', alpha: 0.6 },
  chest: { name: 'Cofre', top: '#B5843E', left: '#996D2E', right: '#7D5722' },
  barrel: { name: 'Barril', top: '#8F6A3E', left: '#785730', right: '#614524' },
};

export function getBlockVisuals(rawName) {
  const clean = String(rawName || 'stone').replace(/^minecraft:/, '').toLowerCase();
  if (BLOCK_VISUAL_CATALOG[clean]) {
    return BLOCK_VISUAL_CATALOG[clean];
  }
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = (hash * 31 + clean.charCodeAt(i)) >>> 0;
  }
  const hue = hash % 360;
  const formattedName = clean
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return {
    name: formattedName,
    top: `hsl(${hue}, 48%, 58%)`,
    left: `hsl(${hue}, 48%, 46%)`,
    right: `hsl(${hue}, 48%, 35%)`,
  };
}

/**
 * Encuentra enlaces en la descripción (idéntico a HoloPrint.findLinksInDescription)
 */
export function findLinksInDescription(description) {
  const matches = Array.from(String(description || '').matchAll(/(.*?)\n?\s*(https?:\/\/[^\s]+)/g));
  return matches.map((match) => [match[1].trim(), match[2].trim()]);
}

/**
 * Nombre predeterminado del pack (idéntico a HoloPrint.getDefaultPackName)
 */
export function getDefaultPackName(structureFiles) {
  if (!structureFiles || !structureFiles.length) return 'hologram';
  let defaultName = structureFiles
    .map((f) => (f.name || f.fileName || 'structure').replace(/(\.holoprint)?\.[^.]+$/, ''))
    .join(', ');
  if (defaultName.length > 40) {
    defaultName = `${defaultName.slice(0, 19)}...${defaultName.slice(-19)}`;
  }
  return defaultName.trim() || 'hologram';
}

export function partitionMaterialCount(count) {
  const safeCount = Math.max(0, Math.ceil(count));
  const shulkers = Math.floor(safeCount / 1728);
  const stacks = Math.floor(safeCount / 64) % 27;
  const remainder = safeCount % 64;

  if (safeCount < 64) {
    return {
      total: safeCount,
      shulkers: 0,
      stacks: 0,
      remainder: safeCount,
      formatted: `${safeCount}`,
    };
  }

  const parts = [];
  if (shulkers > 0) parts.push(`${shulkers} shulker${shulkers > 1 ? 's' : ''}`);
  if (stacks > 0) parts.push(`${stacks}s`);
  if (remainder > 0) parts.push(`${remainder}`);

  return {
    total: safeCount,
    shulkers,
    stacks,
    remainder,
    formatted: `${safeCount} (${parts.join(' + ')})`,
  };
}

export function computeStructureMaterialList(structure, layerFilter = -1, ignoredBlocks = []) {
  const ignoredSet = new Set([...IGNORED_BLOCKS, 'flowing_water', 'flowing_lava', 'bubble_column', ...ignoredBlocks]);
  const counts = new Map();
  let totalBlocks = 0;

  const { width, height, depth, palette, indices } = structure;
  const yStart = layerFilter >= 0 && layerFilter < height ? layerFilter : 0;
  const yEnd = layerFilter >= 0 && layerFilter < height ? layerFilter + 1 : height;

  for (let x = 0; x < width; x++) {
    for (let y = yStart; y < yEnd; y++) {
      for (let z = 0; z < depth; z++) {
        const idx = (x * height + y) * depth + z;
        const paletteIdx = indices[idx];
        if (paletteIdx === undefined || paletteIdx < 0 || paletteIdx >= palette.length) continue;

        const block = palette[paletteIdx];
        if (!block || !block.name) continue;
        const cleanName = block.name.replace(/^minecraft:/, '');
        if (ignoredSet.has(cleanName)) continue;

        counts.set(cleanName, (counts.get(cleanName) || 0) + 1);
        totalBlocks++;
      }
    }
  }

  const entries = Array.from(counts.entries())
    .map(([blockId, count]) => {
      const visuals = getBlockVisuals(blockId);
      const partition = partitionMaterialCount(count);
      return {
        blockId,
        translatedName: visuals.name,
        color: visuals.top,
        count,
        partitionedCount: partition.formatted,
        shulkers: partition.shulkers,
        stacks: partition.stacks,
        remainder: partition.remainder,
      };
    })
    .sort((a, b) => b.count - a.count || a.translatedName.localeCompare(b.translatedName));

  return {
    entries,
    totalBlocks,
  };
}

export function buildHoloPrintManifest(config) {
  const packName = (config.packName || 'HoloPrint_Structure').trim();
  const customAuthors = Array.isArray(config.authors)
    ? config.authors.map((a) => String(a).trim()).filter(Boolean)
    : [];

  const authorsList = ['HoloPrint', HOLOPRINT_AUTHOR];
  for (const author of customAuthors) {
    if (!authorsList.includes(author)) {
      authorsList.push(author);
    }
  }

  const headerUuid =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : '11111111-2222-4333-8444-555555555555';
  const moduleUuid =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : '66666666-7777-4888-9999-000000000000';

  const settings = [
    {
      type: 'input',
      text: '§uHoloPrint§r Wiki:',
      default: HOLOPRINT_WIKI_URL,
      name: 'wiki',
    },
    {
      type: 'input',
      text: 'Generated by §uHoloPrint§r:',
      default: HOLOPRINT_REPO_URL,
      name: 'github',
    },
  ];

  if (config.description) {
    const links = findLinksInDescription(config.description);
    links.forEach(([label, link], i) => {
      settings.push({
        type: 'input',
        text: label || `Link ${i + 1}`,
        default: link,
        name: `link_${i}`,
      });
    });
  }

  return {
    format_version: 2,
    header: {
      name: packName,
      description: 'pack.description',
      uuid: headerUuid,
      version: HOLOPRINT_VERSION,
      min_engine_version: [1, 16, 0],
    },
    modules: [
      {
        type: 'resources',
        uuid: moduleUuid,
        version: HOLOPRINT_VERSION,
      },
    ],
    subpacks: [
      {
        folder_name: 'leash_knot_mode',
        name: 'Leash knot mode',
        memory_tier: 0,
      },
      {
        folder_name: 'punch_to_activate',
        name: 'Punch to activate',
        memory_tier: 0,
      },
      {
        folder_name: 'default',
        name: 'Default',
        memory_tier: 0,
      },
    ],
    settings,
    metadata: {
      authors: authorsList,
      generated_with: {
        holoprint: [HOLOPRINT_VERSION.join('.')],
      },
      license: 'CC BY-NC-SA 4.0',
      url: HOLOPRINT_REPO_URL,
    },
  };
}

export function buildHoloPrintLangFile(language, config, materialListSummary) {
  const nowStr = new Date().toLocaleString();
  const packName = (config.packName || 'HoloPrint_Structure').trim();
  const authors =
    Array.isArray(config.authors) && config.authors.length > 0
      ? config.authors.join(' y ')
      : HOLOPRINT_AUTHOR;
  const descLine = config.description ? `\\n${config.description}` : '';
  const materialsInline = materialListSummary.entries
    .map((e) => `${e.count} ${e.translatedName}`)
    .join(', ');

  if (language === 'en_US') {
    return [
      `pack.description=§u★HoloPrint§r resource pack generated on §o${nowStr}§r\\nDeveloped by §l§6${HOLOPRINT_AUTHOR}§r\\nStructure made by ${authors}${descLine}\\n\\n§lTotal block count: ${materialListSummary.totalBlocks}\\n§r${materialsInline}`,
      `holoprint.material_list.heading=Material List: ${packName}`,
      `holoprint.material_list.empty=§oThere are no items in this material list.§r`,
      `howtoplay.holoprint_about=About HoloPrint`,
      `holoprint.info_screen.info.about=You are using a §uHoloPrint§r resource pack generated on §o${nowStr}§r.\\n\\n§uHoloPrint§r is developed by §l§6${HOLOPRINT_AUTHOR}§r and is a fully open-source project.\\n\\nThe source code can be found at: §o${HOLOPRINT_REPO_URL}§r\\n\\nFor more info, visit the wiki at: §o${HOLOPRINT_WIKI_URL}§r`,
      `holoprint.info_screen.title=HoloPrint Info`,
      `holoprint.info_screen.change_structure_layer=Change layer`,
    ].join('\n');
  }

  return [
    `pack.description=Pack de recursos §u★HoloPrint§r generado en §o${nowStr}§r\\nDesarrollado por §l§6${HOLOPRINT_AUTHOR}§r\\nEstructura hecha por ${authors}${descLine}\\n\\n§lCantidad total de bloques: ${materialListSummary.totalBlocks}\\n§r${materialsInline}`,
    `holoprint.material_list.heading=Lista de Materiales: ${packName}`,
    `holoprint.material_list.empty=§oNo hay items en esta lista de materiales.§r`,
    `howtoplay.holoprint_about=Sobre de HoloPrint`,
    `holoprint.info_screen.info.about=Estás usando un pack de recursos §uHoloPrint§r generado en §o${nowStr}§r.\\n\\n§uHoloPrint§r es desarrollado por §l§6${HOLOPRINT_AUTHOR}§r y es un proyecto totalmente open-source.\\n\\nPuedes encontrar el código en: §o${HOLOPRINT_REPO_URL}§r\\n\\nPara más información, visita la wiki en: §o${HOLOPRINT_WIKI_URL}§r`,
    `holoprint.info_screen.title=Información de HoloPrint`,
    `holoprint.info_screen.change_structure_layer=Cambiar capa`,
  ].join('\n');
}

export function buildHologramGeoJson(structure, ghostBlockScale = 0.95) {
  const { width, height, depth, palette, indices } = structure;
  const scale = Math.max(0.5, Math.min(1, Number(ghostBlockScale) || 0.95));
  const inset = ((1 - scale) * 16) / 2;
  const cubeSize = Number((16 * scale).toFixed(3));

  const bones = [
    { name: 'hologram_alignment_wrapper' },
    { name: 'hologram_offset_wrapper', parent: 'hologram_alignment_wrapper' },
  ];

  for (let y = 0; y < height; y++) {
    const cubes = [];
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        const idx = (x * height + y) * depth + z;
        const pIdx = indices[idx];
        if (pIdx === undefined || pIdx < 0 || !palette[pIdx]) continue;
        const blockName = palette[pIdx].name.replace(/^minecraft:/, '');
        if (blockName === 'air') continue;

        cubes.push({
          origin: [
            Number((-16 * x - 8 + inset).toFixed(3)),
            Number((16 * y + inset).toFixed(3)),
            Number((16 * z - 8 + inset).toFixed(3)),
          ],
          size: [cubeSize, cubeSize, cubeSize],
          uv: [0, 0],
        });
      }
    }

    bones.push({
      name: `l_${y}`,
      parent: 'hologram_offset_wrapper',
      pivot: [8, 0, -8],
      cubes,
    });
  }

  return {
    format_version: '1.16.0',
    'minecraft:geometry': [
      {
        description: {
          identifier: 'geometry.holoprint.hologram_0',
          texture_width: 64,
          texture_height: 64,
        },
        bones,
      },
      {
        description: {
          identifier: 'geometry.holoprint.hologram.wrong_block_overlay',
          texture_width: 16,
          texture_height: 16,
        },
        bones: [
          { name: 'hologram_alignment_wrapper' },
          { name: 'hologram_offset_wrapper', parent: 'hologram_alignment_wrapper' },
          {
            name: 'wrong_block_overlay',
            parent: 'hologram_offset_wrapper',
            cubes: [{ origin: [-8, 0, -8], size: [16, 16, 16], inflate: 0.01, uv: [0, 0] }],
          },
        ],
      },
      {
        description: {
          identifier: 'geometry.holoprint.hologram.valid_structure_overlay',
          texture_width: 16,
          texture_height: 16,
        },
        bones: [
          { name: 'hologram_alignment_wrapper' },
          { name: 'hologram_offset_wrapper', parent: 'hologram_alignment_wrapper' },
          {
            name: 'valid_structure_overlay',
            parent: 'hologram_offset_wrapper',
            cubes: [{ origin: [0, 0, 0], size: [16, 16, 16], uv: [0, 0] }],
          },
        ],
      },
    ],
  };
}

export function parseMcstructureArrayBuffer(buffer) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  const decoder = new TextDecoder('utf-8');
  let offset = 0;

  function readByte() {
    if (offset >= bytes.length) throw new Error('Fin inesperado del archivo NBT');
    return view.getInt8(offset++);
  }
  function readUShort() {
    const val = view.getUint16(offset, true);
    offset += 2;
    return val;
  }
  function readShort() {
    const val = view.getInt16(offset, true);
    offset += 2;
    return val;
  }
  function readInt() {
    const val = view.getInt32(offset, true);
    offset += 4;
    return val;
  }
  function readFloat() {
    const val = view.getFloat32(offset, true);
    offset += 4;
    return val;
  }
  function readDouble() {
    const val = view.getFloat64(offset, true);
    offset += 8;
    return val;
  }
  function readString() {
    const len = readUShort();
    const strBytes = bytes.subarray(offset, offset + len);
    offset += len;
    return decoder.decode(strBytes);
  }

  function readPayload(tagType) {
    switch (tagType) {
      case 1:
        return readByte();
      case 2:
        return readShort();
      case 3:
        return readInt();
      case 4: {
        const low = view.getUint32(offset, true);
        const high = view.getInt32(offset + 4, true);
        offset += 8;
        return high * 4294967296 + low;
      }
      case 5:
        return readFloat();
      case 6:
        return readDouble();
      case 7: {
        const len = readInt();
        const arr = new Int8Array(buffer.slice(offset, offset + len));
        offset += len;
        return arr;
      }
      case 8:
        return readString();
      case 9: {
        const itemType = readByte();
        const len = readInt();
        const list = [];
        for (let i = 0; i < len; i++) {
          list.push(readPayload(itemType));
        }
        return list;
      }
      case 10: {
        const obj = {};
        while (offset < bytes.length) {
          const nextType = readByte();
          if (nextType === 0) break;
          const key = readString();
          obj[key] = readPayload(nextType);
        }
        return obj;
      }
      case 11: {
        const len = readInt();
        const arr = new Int32Array(len);
        for (let i = 0; i < len; i++) {
          arr[i] = readInt();
        }
        return arr;
      }
      case 12: {
        const len = readInt();
        offset += len * 8;
        return [];
      }
      default:
        throw new Error(`Tipo de etiqueta NBT desconocido: ${tagType}`);
    }
  }

  const rootType = readByte();
  if (rootType !== 10) {
    throw new Error('El archivo no es un .mcstructure válido.');
  }
  readString();
  const root = readPayload(10);

  if (!root || !root.size || !root.structure) {
    throw new Error('Estructura NBT inválida: faltan los campos "size" o "structure".');
  }

  const size = Array.from(root.size).map(Number);
  const [width, height, depth] = size;
  const worldOrigin = root.structure_world_origin
    ? Array.from(root.structure_world_origin).map(Number)
    : [0, 64, 0];

  const rawPalette = root.structure?.palette?.default?.block_palette || [];
  const palette = rawPalette.map((entry) => ({
    name: String(entry.name || 'minecraft:stone').replace(/^minecraft:/, ''),
    states: entry.states || {},
  }));

  const blockIndicesLayers = root.structure?.block_indices || [];
  const primaryLayer = blockIndicesLayers[0]
    ? Array.from(blockIndicesLayers[0]).map(Number)
    : new Array(width * height * depth).fill(-1);

  return {
    formatVersion: Number(root.format_version || 1),
    width,
    height,
    depth,
    size: [width, height, depth],
    worldOrigin,
    palette,
    indices: primaryLayer,
  };
}

export function encodeMcstructureToArrayBuffer(structure) {
  const chunks = [];
  const encoder = new TextEncoder();

  function pushByte(b) {
    chunks.push(new Uint8Array([b & 0xff]));
  }
  function pushUShort(v) {
    const b = new Uint8Array(2);
    new DataView(b.buffer).setUint16(0, v, true);
    chunks.push(b);
  }
  function pushInt(v) {
    const b = new Uint8Array(4);
    new DataView(b.buffer).setInt32(0, v, true);
    chunks.push(b);
  }
  function pushString(s) {
    const bytes = encoder.encode(String(s));
    pushUShort(bytes.length);
    chunks.push(bytes);
  }
  function pushNamedHeader(tagType, name) {
    pushByte(tagType);
    pushString(name);
  }

  pushNamedHeader(10, '');
  pushNamedHeader(3, 'format_version');
  pushInt(1);

  pushNamedHeader(9, 'size');
  pushByte(3);
  pushInt(3);
  pushInt(structure.width);
  pushInt(structure.height);
  pushInt(structure.depth);

  const origin = structure.worldOrigin || [0, 64, 0];
  pushNamedHeader(9, 'structure_world_origin');
  pushByte(3);
  pushInt(3);
  pushInt(origin[0]);
  pushInt(origin[1]);
  pushInt(origin[2]);

  pushNamedHeader(10, 'structure');
  pushNamedHeader(9, 'block_indices');
  pushByte(9);
  pushInt(2);

  pushByte(3);
  pushInt(structure.indices.length);
  for (let i = 0; i < structure.indices.length; i++) {
    pushInt(structure.indices[i]);
  }
  pushByte(3);
  pushInt(structure.indices.length);
  for (let i = 0; i < structure.indices.length; i++) {
    pushInt(-1);
  }

  pushNamedHeader(10, 'palette');
  pushNamedHeader(10, 'default');
  pushNamedHeader(9, 'block_palette');
  pushByte(10);
  pushInt(structure.palette.length);
  for (const block of structure.palette) {
    pushNamedHeader(8, 'name');
    const fullName = block.name.startsWith('minecraft:') ? block.name : `minecraft:${block.name}`;
    pushString(fullName);
    pushNamedHeader(10, 'states');
    pushByte(0);
    pushNamedHeader(3, 'version');
    pushInt(18168865);
    pushByte(0);
  }

  pushNamedHeader(10, 'block_position_data');
  pushByte(0);
  pushByte(0);
  pushByte(0);
  pushByte(0);
  pushByte(0);

  const totalLength = chunks.reduce((acc, c) => acc + c.length, 0);
  const out = new Uint8Array(totalLength);
  let pos = 0;
  for (const c of chunks) {
    out.set(c, pos);
    pos += c.length;
  }
  return out.buffer;
}

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

export function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

export function buildZipArchive(files) {
  const encoder = new TextEncoder();
  const localHeaders = [];
  const centralHeaders = [];
  let offset = 0;

  for (const file of files) {
    const nameBytes = encoder.encode(file.path);
    const contentBytes =
      typeof file.data === 'string' ? encoder.encode(file.data) : new Uint8Array(file.data);
    const crc = crc32(contentBytes);
    const size = contentBytes.length;

    const localHeader = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(localHeader.buffer);
    lv.setUint32(0, 0x04034b50, true);
    lv.setUint16(4, 20, true);
    lv.setUint16(6, 0, true);
    lv.setUint16(8, 0, true);
    lv.setUint16(10, 0, true);
    lv.setUint16(12, 0, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, size, true);
    lv.setUint32(22, size, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);

    localHeaders.push(localHeader, contentBytes);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(centralHeader.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 0, true);
    cv.setUint16(10, 0, true);
    cv.setUint16(12, 0, true);
    cv.setUint16(14, 0, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, size, true);
    cv.setUint32(24, size, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);

    centralHeaders.push(centralHeader);
    offset += localHeader.length + size;
  }

  const centralDirSize = centralHeaders.reduce((acc, c) => acc + c.length, 0);
  const eocd = new Uint8Array(22);
  const ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, files.length, true);
  ev.setUint16(10, files.length, true);
  ev.setUint32(12, centralDirSize, true);
  ev.setUint32(16, offset, true);
  ev.setUint16(20, 0, true);

  const totalSize = offset + centralDirSize + eocd.length;
  const archive = new Uint8Array(totalSize);
  let ptr = 0;
  for (const part of localHeaders) {
    archive.set(part, ptr);
    ptr += part.length;
  }
  for (const part of centralHeaders) {
    archive.set(part, ptr);
    ptr += part.length;
  }
  archive.set(eocd, ptr);
  return archive;
}

/**
 * Extrae entradas de un archivo ZIP (.mcpack, .mcworld, .mctemplate, .zip)
 */
export async function readZipEntries(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const view = new DataView(arrayBuffer);
  const decoder = new TextDecoder('utf-8');
  const entries = [];

  let offset = 0;
  while (offset + 30 <= bytes.length) {
    const sig = view.getUint32(offset, true);
    if (sig !== 0x04034b50) break;

    const compressionMethod = view.getUint16(offset + 8, true);
    const compressedSize = view.getUint32(offset + 18, true);
    const nameLen = view.getUint16(offset + 26, true);
    const extraLen = view.getUint16(offset + 28, true);
    const filename = decoder.decode(bytes.subarray(offset + 30, offset + 30 + nameLen));

    const dataStart = offset + 30 + nameLen + extraLen;
    const rawData = bytes.subarray(dataStart, dataStart + compressedSize);
    offset = dataStart + compressedSize;

    let fileBytes = rawData;
    if (compressionMethod === 8 && typeof DecompressionStream !== 'undefined') {
      try {
        const ds = new DecompressionStream('deflate-raw');
        const stream = new Blob([rawData]).stream().pipeThrough(ds);
        fileBytes = new Uint8Array(await new Response(stream).arrayBuffer());
      } catch {
        // Fallback if stream fails
      }
    }

    entries.push({ filename, data: fileBytes });
  }
  return entries;
}

/**
 * Genera un archivo binario `.glb` (glTF 2.0) a partir de los cubos de la estructura
 * (replica la función `exportGlb` de `PreviewRenderer.js`).
 */
export function buildStructureGlbBuffer(structure) {
  const positions = [];
  const indices = [];
  let vertexCount = 0;

  const { width, height, depth, palette, indices: blockIndices } = structure;
  const cubeFaces = [
    [[0, 1, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1]],
    [[0, 0, 0], [0, 0, 1], [1, 0, 1], [1, 0, 0]],
    [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]],
    [[1, 0, 1], [1, 1, 1], [0, 1, 1], [0, 0, 1]],
    [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]],
    [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]],
  ];

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      for (let z = 0; z < depth; z++) {
        const idx = (x * height + y) * depth + z;
        const pIdx = blockIndices[idx];
        if (pIdx === undefined || pIdx < 0 || !palette[pIdx]) continue;
        if (palette[pIdx].name === 'air') continue;

        for (const face of cubeFaces) {
          for (const [vx, vy, vz] of face) {
            positions.push(x + vx, y + vy, z + vz);
          }
          indices.push(
            vertexCount,
            vertexCount + 1,
            vertexCount + 2,
            vertexCount,
            vertexCount + 2,
            vertexCount + 3
          );
          vertexCount += 4;
        }
      }
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const binLength = posArray.byteLength + idxArray.byteLength;
  const paddedBinLength = (binLength + 3) & ~3;

  const gltfJson = {
    asset: { version: '2.0', generator: `HoloPrint (${HOLOPRINT_AUTHOR})` },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0, name: structure.fileName || 'HoloPrintStructure' }],
    meshes: [
      {
        primitives: [
          {
            attributes: { POSITION: 0 },
            indices: 1,
          },
        ],
      },
    ],
    buffers: [{ byteLength: paddedBinLength }],
    bufferViews: [
      { buffer: 0, byteOffset: 0, byteLength: posArray.byteLength, target: 34962 },
      { buffer: 0, byteOffset: posArray.byteLength, byteLength: idxArray.byteLength, target: 34963 },
    ],
    accessors: [
      {
        bufferView: 0,
        componentType: 5126,
        count: positions.length / 3,
        type: 'VEC3',
        min: [0, 0, 0],
        max: [width, height, depth],
      },
      {
        bufferView: 1,
        componentType: 5123,
        count: indices.length,
        type: 'SCALAR',
      },
    ],
  };

  const jsonBytes = new TextEncoder().encode(JSON.stringify(gltfJson));
  const paddedJsonLength = (jsonBytes.length + 3) & ~3;
  const totalSize = 12 + 8 + paddedJsonLength + 8 + paddedBinLength;

  const glb = new ArrayBuffer(totalSize);
  const view = new DataView(glb);
  const uint8 = new Uint8Array(glb);

  // Header GLB
  view.setUint32(0, 0x46546c67, true); // 'glTF'
  view.setUint32(4, 2, true);
  view.setUint32(8, totalSize, true);

  // Chunk 0: JSON
  view.setUint32(12, paddedJsonLength, true);
  view.setUint32(16, 0x4e4f534a, true); // 'JSON'
  uint8.fill(0x20, 20, 20 + paddedJsonLength);
  uint8.set(jsonBytes, 20);

  // Chunk 1: BIN
  const binChunkOffset = 20 + paddedJsonLength;
  view.setUint32(binChunkOffset, paddedBinLength, true);
  view.setUint32(binChunkOffset + 4, 0x004e4942, true); // 'BIN\0'
  uint8.set(new Uint8Array(posArray.buffer), binChunkOffset + 8);
  uint8.set(new Uint8Array(idxArray.buffer), binChunkOffset + 8 + posArray.byteLength);

  return glb;
}

export function getPresetStructures() {
  const houseW = 7, houseH = 6, houseD = 7;
  const housePalette = [
    { name: 'cobblestone', states: {} },
    { name: 'oak_log', states: {} },
    { name: 'oak_planks', states: {} },
    { name: 'glass', states: {} },
    { name: 'oak_stairs', states: {} },
    { name: 'lantern', states: {} },
    { name: 'chest', states: {} },
  ];
  const houseIndices = new Array(houseW * houseH * houseD).fill(-1);
  const setHouse = (x, y, z, p) => {
    houseIndices[(x * houseH + y) * houseD + z] = p;
  };
  for (let x = 0; x < houseW; x++) {
    for (let z = 0; z < houseD; z++) {
      setHouse(x, 0, z, 0);
      if (x >= 1 && x <= 5 && z >= 1 && z <= 5) setHouse(x, 4, z, 2);
      if (x >= 2 && x <= 4 && z >= 2 && z <= 4) setHouse(x, 5, z, 4);
    }
  }
  for (let y = 1; y <= 3; y++) {
    for (let x = 1; x <= 5; x++) {
      for (let z = 1; z <= 5; z++) {
        const isCorner = (x === 1 || x === 5) && (z === 1 || z === 5);
        const isWall = x === 1 || x === 5 || z === 1 || z === 5;
        if (isCorner) {
          setHouse(x, y, z, 1);
        } else if (isWall) {
          if (z === 1 && x === 3 && (y === 1 || y === 2)) continue;
          if (y === 2 && (x === 3 || z === 3)) setHouse(x, y, z, 3);
          else setHouse(x, y, z, 2);
        }
      }
    }
  }
  setHouse(2, 1, 4, 6);
  setHouse(3, 3, 3, 5);

  const redW = 5, redH = 5, redD = 5;
  const redPalette = [
    { name: 'stone_bricks', states: {} },
    { name: 'redstone_block', states: {} },
    { name: 'redstone_lamp', states: {} },
    { name: 'observer', states: {} },
    { name: 'sticky_piston', states: {} },
    { name: 'glass', states: {} },
  ];
  const redIndices = new Array(redW * redH * redD).fill(-1);
  const setRed = (x, y, z, p) => {
    redIndices[(x * redH + y) * redD + z] = p;
  };
  for (let x = 0; x < redW; x++) {
    for (let z = 0; z < redD; z++) setRed(x, 0, z, 0);
  }
  for (let y = 1; y <= 3; y++) {
    setRed(2, y, 2, y === 2 ? 1 : 2);
    setRed(1, y, 2, 5);
    setRed(3, y, 2, 5);
    setRed(2, y, 1, 5);
    setRed(2, y, 3, 5);
  }
  setRed(1, 1, 1, 3);
  setRed(3, 1, 1, 3);
  setRed(1, 1, 3, 4);
  setRed(3, 1, 3, 4);
  setRed(2, 4, 2, 2);

  const portalW = 7, portalH = 7, portalD = 5;
  const portalPalette = [
    { name: 'stone_bricks', states: {} },
    { name: 'obsidian', states: {} },
    { name: 'crying_obsidian', states: {} },
    { name: 'nether_portal', states: {} },
    { name: 'gold_block', states: {} },
    { name: 'lantern', states: {} },
  ];
  const portalIndices = new Array(portalW * portalH * portalD).fill(-1);
  const setPortal = (x, y, z, p) => {
    portalIndices[(x * portalH + y) * portalD + z] = p;
  };
  for (let x = 0; x < portalW; x++) {
    for (let z = 0; z < portalD; z++) setPortal(x, 0, z, 0);
  }
  setPortal(1, 0, 2, 4);
  setPortal(5, 0, 2, 4);
  for (let y = 1; y <= 5; y++) {
    for (let x = 1; x <= 5; x++) {
      const isFrame = x === 1 || x === 5 || y === 1 || y === 5;
      setPortal(x, y, 2, isFrame ? ((x + y) % 3 === 0 ? 2 : 1) : 3);
    }
  }
  setPortal(1, 6, 2, 5);
  setPortal(5, 6, 2, 5);

  return {
    casa_medieval: {
      id: 'casa_medieval',
      title: 'casa_medieval',
      fileName: 'casa_medieval.mcstructure',
      width: houseW,
      height: houseH,
      depth: houseD,
      size: [houseW, houseH, houseD],
      worldOrigin: [120, 64, -85],
      palette: housePalette,
      indices: houseIndices,
    },
    faro_redstone: {
      id: 'faro_redstone',
      title: 'faro_redstone',
      fileName: 'faro_redstone.mcstructure',
      width: redW,
      height: redH,
      depth: redD,
      size: [redW, redH, redD],
      worldOrigin: [0, 70, 0],
      palette: redPalette,
      indices: redIndices,
    },
    portal_nether: {
      id: 'portal_nether',
      title: 'portal_nether',
      fileName: 'portal_nether.mcstructure',
      width: portalW,
      height: portalH,
      depth: portalD,
      size: [portalW, portalH, portalD],
      worldOrigin: [-45, 68, 210],
      palette: portalPalette,
      indices: portalIndices,
    },
  };
}

/**
 * Clase Principal: HoloPrintTool
 * Replica fielmente la interfaz y todas las funciones del repositorio HoloPrint.
 */
export class HoloPrintTool {
  constructor(container) {
    if (!container || !(container instanceof HTMLElement)) {
      throw new Error('HoloPrintTool requiere un contenedor HTML válido (HTMLElement).');
    }

    this.container = container;
    this.language = 'es_MX';
    this.presets = getPresetStructures();
    this.selectedStructures = [
      { ...this.presets.casa_medieval, showDownload: true, coordLock: [120, 64, -85, 0] },
    ];
    this.playerControls = structuredClone(DEFAULT_PLAYER_CONTROLS);
    this.allLogs = [];
    this.errorCount = 0;
    this.warningCount = 0;
    this.originTime = performance.now();

    // Estado del visor 3D (PreviewRenderer)
    this.previewOptions = {
      maxPointLights: 8,
      shadowsEnabled: true,
      shadowQuality: 2,
      lightAngle: 120,
      lightHeight: 1.0,
      showSkybox: true,
      highRes: false,
      layerFilter: -1,
      yaw: 45,
      pitch: 30,
      zoom: 1.0,
      guiOpen: false,
    };

    this._renderUI();
    this._bindEvents();
    this._translateUI();
    this._updateFileTable();
    this._updateTexturePreview();
    this.logInfo(`Running HoloPrint v${HOLOPRINT_VERSION.join('.')}`);
  }

  _t(key) {
    const dict = TRANSLATIONS[this.language] || TRANSLATIONS.es_MX;
    return dict[key] ?? TRANSLATIONS.en_US[key] ?? key;
  }

  _renderUI() {
    this.container.innerHTML = `
      <div class="hp-orig-shell" data-testid="holoprint-tool-wrapper">
        <main class="hp-orig-main">
          <div class="hp-orig-header-row">
            <h1 data-translate="app_name">HoloPrint</h1>
            <div id="languageSelectorCont" title="Cambiar idioma">
              <select id="languageSelector" aria-label="Cambiar idioma">
                <option value="es_MX" selected>Español (México)</option>
                <option value="es_ES">Español (España)</option>
                <option value="en_US">English</option>
              </select>
            </div>
          </div>

          <div id="responsiveWidthWrapper">
            <form action="javascript:" id="generatePackForm">
              <fieldset class="hp-orig-outer-fieldset">
                <legend data-translate="generate_heading">Generar pack de recursos de HoloPrint (<code>*.mcpack</code>)</legend>

                <!-- 3 Pestañas de Entrada de Estructuras (.multiTabCont) -->
                <div class="multiTabCont" id="structureFileInputCont">
                  <input type="radio" checked name="configTabs2" id="structureFilesTab" />
                  <label for="structureFilesTab" class="buttonlike" data-translate="structure_files.heading">Archivos de estructuras</label>
                  <fieldset>
                    <legend data-translate="structure_files.upload">Subir archivos de estructuras (<code>*.mcstructure</code>)</legend>
                    <label class="hp-upload-dropzone">
                      <input type="file" accept=".mcstructure,.MCSTRUCTURE" multiple autocomplete="off" id="structureFilesInput" />
                      <div class="buttonlike hp-big-drop">
                        <p data-translate="upload.button">Subir un archivo</p>
                        <p data-translate="upload.button.drop_notice">O lanza archivos aquí</p>
                      </div>
                    </label>
                    <div class="hp-sample-loader-bar">
                      <span>Cargar muestra rápida:</span>
                      <button type="button" class="buttonlike" data-sample="casa_medieval">+ Casa Medieval</button>
                      <button type="button" class="buttonlike" data-sample="faro_redstone">+ Faro Redstone</button>
                      <button type="button" class="buttonlike" data-sample="portal_nether">+ Portal Nether</button>
                    </div>
                    <span class="hidden hp-msg-error" id="notStructureFileError" data-translate="structure_files.error">Por favor solo suba archivos de estructuras <code>.mcstructure</code></span>
                  </fieldset>

                  <input type="radio" name="configTabs2" id="extractFromWorldTab" />
                  <label for="extractFromWorldTab" class="buttonlike" data-translate="extract_from_world.heading">Extraer del mundo</label>
                  <fieldset>
                    <legend data-translate="extract_from_world.upload">Subir archivo de mundo (<code>*.mcworld</code>, <code>*.mctemplate</code>, <code>*.zip</code>)</legend>
                    <label class="hp-upload-dropzone">
                      <input type="file" accept=".mcworld,.MCWORLD,.mctemplate,.MCTEMPLATE,.zip,.ZIP" autocomplete="off" id="worldFileInput" />
                      <div class="buttonlike hp-big-drop">
                        <p data-translate="upload.button.world">Subir un archivo de mundo</p>
                        <p data-translate="upload.button.drop_notice">O lanza archivos aquí</p>
                      </div>
                    </label>
                    <span class="hidden" id="worldExtractionMessage" data-translate="extract_from_world.extracting">Extrayendo estructuras del mundo...</span>
                    <span class="hidden hp-msg-success" id="worldExtractionSuccess"></span>
                    <span class="hidden hp-msg-error" id="worldExtractionError" data-translate="extract_from_world.error">¡No se encontraron estructuras guardadas!</span>
                    <span class="hidden hp-msg-error" id="worldExtractionWorldError"></span>
                  </fieldset>

                  <input type="radio" name="configTabs2" id="updatePackTab" />
                  <label for="updatePackTab" class="buttonlike" data-translate="update_pack.heading">Actualizar pack</label>
                  <fieldset>
                    <legend data-translate="update_pack.upload">Subir pack de Structura/HoloPrint antiguo (<code>*.mcpack</code>)</legend>
                    <label class="hp-upload-dropzone">
                      <input type="file" accept=".mcpack,.MCPACK" autocomplete="off" id="oldPackInput" />
                      <div class="buttonlike hp-big-drop">
                        <p data-translate="upload.button.old_pack">Subir un pack antiguo</p>
                        <p data-translate="upload.button.drop_notice">O lanza archivos aquí</p>
                      </div>
                    </label>
                    <span class="hidden" id="oldPackExtractionMessage" data-translate="update_pack.extracting">Extrayendo archivos de estructuras...</span>
                    <span class="hidden hp-msg-success" id="oldPackExtractionSuccess" data-translate="update_pack.success">¡Archivos de estructuras antiguas encontrados exitosamente!</span>
                    <span class="hidden hp-msg-error" id="oldPackExtractionError" data-translate="update_pack.error">¡El pack no es de Structura/HoloPrint!</span>
                  </fieldset>
                </div>

                <!-- FileInputTable de HoloPrint -->
                <div class="hp-file-input-table" id="fileInputTableWidget">
                  <div class="hp-file-table-main">
                    <p class="hp-file-count-header">
                      <span id="fileCountHeading">1 archivo seleccionado</span>
                      <button type="button" id="removeAllFilesButton">
                        <span data-translate="file_input_table.remove_all">Eliminar todo</span> 🗑
                      </button>
                    </p>
                    <table id="structureFilesTable" translate="no"></table>
                  </div>
                </div>

                <!-- 3 Pestañas de Configuración: Ajustes | Metadatos | Packs de Recursos -->
                <div class="multiTabCont" id="configMultiTabs">
                  <!-- PESTAÑA 1: AJUSTES -->
                  <input type="radio" checked name="configTabs" id="settingsTab" />
                  <label for="settingsTab" class="buttonlike" data-translate="settings.heading">Ajustes</label>
                  <fieldset class="hp-relative-fieldset">
                    <legend data-translate="settings.heading">Ajustes</legend>
                    <label class="hp-inline-label">
                      <span data-translate="settings.ghost_block_scale">Escala del bloque fantasma:</span>
                      <input type="number" min="70" max="100" step="1" value="95" name="scale" />%
                    </label>

                    <!-- Fieldset Expandible: Texturas -->
                    <fieldset class="expandable textureSettings">
                      <legend>
                        <label>
                          <span data-translate="settings.textures">Texturas</span>
                          <input type="checkbox" checked />
                        </label>
                      </legend>
                      <div>
                        <div class="hp-texture-settings-split">
                          <table>
                            <tr>
                              <td><label data-translate="settings.textures.outline.width">Ancho del contorno de la textura:</label></td>
                              <td>
                                <select name="textureOutlineWidth">
                                  <option value="0" data-translate="settings.textures.outline.width.no_outline">Ninguno</option>
                                  <option value="0.125">0.125px</option>
                                  <option value="0.25" selected>0.25px</option>
                                  <option value="0.5">0.5px</option>
                                  <option value="1">1px</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td><label data-translate="settings.textures.outline.color">Color del contorno de la textura:</label></td>
                              <td><input type="color" value="#10B981" name="textureOutlineColor" /></td>
                            </tr>
                            <tr>
                              <td><label data-translate="settings.textures.outline.opacity">Opacidad del contorno de la textura:</label></td>
                              <td><input type="number" min="10" max="100" value="65" name="textureOutlineOpacity" />%</td>
                            </tr>
                            <tr>
                              <td><label data-translate="settings.textures.tint.color">Tinte de superposición:</label></td>
                              <td><input type="color" value="#579EFA" name="tintColor" /></td>
                            </tr>
                            <tr>
                              <td><label data-translate="settings.textures.tint.opacity">Opacidad del tinte de superposición:</label></td>
                              <td><input type="number" min="1" max="100" value="20" name="tintOpacity" />%</td>
                            </tr>
                          </table>
                          <div id="texturePreviewCont">
                            <span data-translate="settings.textures.tint.toggleable_in_game">El tinte puede activarse/desactivarse en el juego</span>
                            <div id="texturePreviewImageCont">
                              <canvas width="64" height="64" data-role="tex-preview-plain" title="Sin tinte"></canvas>
                              <canvas width="64" height="64" data-role="tex-preview-tinted" title="Con tinte"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <!-- Fieldset Expandible: Controles en el juego -->
                    <fieldset class="expandable">
                      <legend>
                        <label>
                          <span data-translate="settings.player_controls">Controles en el juego (<a href="https://holoprint-mc.github.io/wiki/hologram-controls" target="_blank">Wiki</a>)</span>
                          <input type="checkbox" />
                        </label>
                      </legend>
                      <div>
                        <div id="playerControlsInputCont"></div>
                      </div>
                    </fieldset>

                    <!-- Fieldset Expandible: Características -->
                    <fieldset class="expandable">
                      <legend>
                        <label>
                          <span data-translate="settings.features">Características</span>
                          <input type="checkbox" checked />
                        </label>
                      </legend>
                      <div>
                        <table class="hp-features-table">
                          <tr>
                            <td><label data-translate="settings.features.spawn_animation" for="hp-c1">Animación de aparición:</label></td>
                            <td><input type="checkbox" class="hp-pill-switch" name="spawnAnimationEnabled" checked id="hp-c1" /></td>
                          </tr>
                          <tr>
                            <td><label data-translate="settings.features.player_controls" for="hp-c2">Controles del jugador:</label></td>
                            <td><input type="checkbox" class="hp-pill-switch" name="playerControlsEnabled" checked id="hp-c2" /></td>
                          </tr>
                          <tr>
                            <td><label data-translate="settings.features.ui_controls" for="hp-c3">Controles de la IU:</label></td>
                            <td><input type="checkbox" class="hp-pill-switch" name="uiControlsEnabled" checked id="hp-c3" /></td>
                          </tr>
                          <tr>
                            <td><label data-translate="settings.features.retexture_control_items" for="hp-c4">Retexturar control de items:</label></td>
                            <td><input type="checkbox" class="hp-pill-switch" name="retextureControlItems" checked id="hp-c4" /></td>
                          </tr>
                          <tr>
                            <td><label data-translate="settings.features.rename_control_items" for="hp-c5">Renombrar control de items:</label></td>
                            <td><input type="checkbox" class="hp-pill-switch" name="renameControlItems" checked id="hp-c5" /></td>
                          </tr>
                        </table>
                      </div>
                    </fieldset>

                    <label class="hp-inline-label">
                      <span data-translate="settings.mini_size">Tamaño de pantalla pequeña: </span>
                      <select name="miniSize">
                        <option value="0.125" selected data-translate="settings.mini_size.small">Pequeño</option>
                        <option value="0.0625" data-translate="settings.mini_size.smaller">Más pequeño</option>
                        <option value="0.03125" data-translate="settings.mini_size.tiny">Diminuto</option>
                        <option value="0" data-translate="settings.mini_size.hidden">Oculto</option>
                      </select>
                    </label>

                    <!-- Opciones Avanzadas -->
                    <details class="hp-advanced-details">
                      <summary data-translate="settings.advanced">Avanzado</summary>
                      <div class="hp-advanced-body">
                        <label class="hp-inline-label">
                          <span data-translate="settings.coordinate_lock">Bloquear coordenadas:</span>
                          <input type="checkbox" class="hp-pill-switch" name="coordinateLockEnabled" autocomplete="off" />
                        </label>

                        <div id="coordinateLockCoordsCont" class="hidden">
                          <button type="button" id="getGlobalCoordsBtn" data-translate="settings.coordinate_lock.get_global_coords" class="importantButton">
                            Obtener coordenadas globales
                          </button>
                          <div id="coordinateLockStructureCoords" translate="no"></div>
                          <div class="hp-axis-row">
                            <span data-translate="settings.coordinate_lock.axis">Eje:</span>
                            <input type="radio" name="axis" class="buttonlike" value="X" checked />
                            <input type="radio" name="axis" class="buttonlike" value="Y" />
                            <input type="radio" name="axis" class="buttonlike" value="Z" />
                          </div>
                          <div id="coordinateLockCoordsAdjustmentCont">
                            <span data-translate="settings.coordinate_lock.adjust">Ajustar:</span>
                            <span translate="no" class="hp-adjust-btns">
                              <button type="button" data-coord-delta="-1000">-1000</button>
                              <button type="button" data-coord-delta="-100">-100</button>
                              <button type="button" data-coord-delta="-10">-10</button>
                              <button type="button" data-coord-delta="-1">-1</button>
                              <button type="button" data-coord-delta="1">+1</button>
                              <button type="button" data-coord-delta="10">+10</button>
                              <button type="button" data-coord-delta="100">+100</button>
                              <button type="button" data-coord-delta="1000">+1000</button>
                            </span>
                          </div>
                        </div>

                        <label class="hp-inline-label" id="initialOffsetRow">
                          <span data-translate="settings.initial_offset">Desplazamiento inicial:</span>
                          <span class="hp-vec3-group">
                            <input type="number" min="-999" max="999" step="1" value="0" name="offsetX" aria-label="Offset X" /> /
                            <input type="number" min="-999" max="999" step="1" value="0" name="offsetY" aria-label="Offset Y" /> /
                            <input type="number" min="-999" max="999" step="1" value="0" name="offsetZ" aria-label="Offset Z" />
                          </span>
                        </label>

                        <label class="hp-inline-label">
                          <span data-translate="settings.backup_slot_count">Número de ranuras de reserva:</span>
                          <input type="number" min="0" max="30" step="1" value="10" name="backupSlotCount" />
                        </label>

                        <label class="hp-inline-label">
                          <span data-translate="settings.control_item_texture_scale">Controlar la escala de textura del item:</span>
                          <input type="number" min="1" max="64" step="1" value="1" name="controlItemTextureScale" />
                        </label>

                        <label class="hp-inline-label">
                          <span data-translate="settings.ignored_blocks">Bloques ignorados:</span>
                          <input type="text" name="ignoredBlocks" placeholder="block_1 block_2 etc." data-translate-placeholder="settings.ignored_blocks.placeholder" />
                        </label>

                        <label class="hp-inline-label">
                          <span data-translate="settings.opacity_mode">Modo de opacidad:</span>
                          <select name="opacityMode">
                            <option value="multiple" selected data-translate="settings.opacity_mode.in_game_controls">Controles en el juego</option>
                            <option value="single" data-translate="settings.opacity_mode.fixed_opacity">Opción única</option>
                          </select>
                        </label>

                        <label class="hp-inline-label hidden" id="singleOpacityRow">
                          <span data-translate="settings.opacity">Opacidad del holograma:</span>
                          <input type="number" min="10" max="100" step="5" value="80" name="opacity" />%
                        </label>

                        <label class="hp-inline-label">
                          <span data-translate="settings.validate_air_blocks">Validar bloques de aire:</span>
                          <input type="checkbox" class="hp-pill-switch" name="validateAirBlocks" />
                        </label>

                        <label class="hp-inline-label">
                          <span data-translate="settings.max_structure_diagram_texture_size">Tamaño máximo de la textura del diagrama de la estructura:</span>
                          <select name="maxStructureDiagramTextureSize">
                            <option value="128">128px</option>
                            <option value="256">256px</option>
                            <option value="512" selected>512px</option>
                            <option value="1024">1024px</option>
                            <option value="2048">2048px</option>
                          </select>
                        </label>
                      </div>
                    </details>

                    <button type="button" class="resetButton" data-reset-section="settings" data-translate="reset">Reiniciar</button>
                  </fieldset>

                  <!-- PESTAÑA 2: METADATOS -->
                  <input type="radio" name="configTabs" id="metadataTab" />
                  <label for="metadataTab" class="buttonlike" data-translate="metadata.heading">Metadatos</label>
                  <fieldset class="hp-relative-fieldset">
                    <legend data-translate="metadata.heading">Metadatos</legend>
                    <label class="hp-inline-label">
                      <span data-translate="metadata.pack_name">Nombre del pack:</span>
                      <code><input type="text" pattern="[^\\/]*" name="packName" placeholder="casa_medieval" /></code>
                    </label>
                    <label class="hp-inline-label">
                      <span data-translate="metadata.pack_icon">Icono del pack (<code>*.png</code>):</span>
                      <input type="file" accept=".png" name="packIcon" />
                    </label>
                    <label class="hp-inline-label">
                      <span data-translate="metadata.structure_author">Autor de la estructura:</span>
                      <input type="text" placeholder="VkYakee" value="VkYakee" name="author" />
                    </label>
                    <label class="hp-block-label">
                      <span data-translate="metadata.description">Descripción:</span><br />
                      <textarea placeholder="¡Esta es mi casa épica!" rows="3" cols="28" name="description"></textarea>
                    </label>
                    <div id="descriptionLinksCont"></div>
                    <label class="hp-inline-label">
                      <span data-translate="metadata.compression_level">Nivel de compresión:</span>
                      <input type="number" min="0" max="9" step="1" value="5" name="compressionLevel" />
                    </label>
                    <button type="button" class="resetButton" data-reset-section="metadata" data-translate="reset">Reiniciar</button>
                  </fieldset>

                  <!-- PESTAÑA 3: PACKS DE RECURSOS -->
                  <input type="radio" name="configTabs" id="resourcesTab" />
                  <label for="resourcesTab" class="buttonlike" data-translate="resource_packs.heading">Packs de Recursos</label>
                  <fieldset class="hp-relative-fieldset">
                    <legend data-translate="resource_packs.heading">Packs de Recursos</legend>
                    <label class="hp-block-label">
                      <span data-translate="resource_packs.upload_local">Subir un pack de recursos local:</span><br />
                      <input type="file" webkitdirectory name="localResourcePack" />
                    </label>
                    <button type="button" id="clearResourcePackCacheButton" data-translate="resource_packs.clear_cache">
                      Limpiar caché del pack de recursos
                    </button>
                    <button type="button" class="resetButton" data-reset-section="resources" data-translate="reset">Reiniciar</button>
                  </fieldset>
                </div>

                <!-- Botón Principal de Generar Pack -->
                <button type="submit" name="submit" id="generatePackButton" class="importantButton" data-translate="generate">
                  Generar pack
                </button>
                <small id="termsOfUseNotice" data-translate="terms_of_use_notice">
                  Al generar un pack con HoloPrint estás de acuerdo con los <a href="${HOLOPRINT_REPO_URL}/blob/main/TERMS_OF_USE.md" target="_blank">TÉRMINOS DE USO</a>.
                </small>
              </fieldset>
            </form>

            <!-- Contenedor de Packs Completados y Visor 3D con lil-gui -->
            <div id="completedPacksCont"></div>

            <!-- SimpleLogger original de HoloPrint -->
            <div id="log" class="hp-simple-logger">
              <div class="logHeader">
                <span>Logs</span>
                <span id="errorCount">🚨0</span>
                <span id="warningCount">⚠️0</span>
                <button type="button" id="downloadLogsButton">Download logs</button>
              </div>
              <div id="logEntriesCont"></div>
            </div>
          </div>
        </main>

        <div id="dropFileNotice" class="hidden">
          <h1 data-translate="upload.drop_file">Lanza tus archivos aquí</h1>
        </div>
      </div>
    `;

    this.form = this.container.querySelector('#generatePackForm');
    this.structureFilesTable = this.container.querySelector('#structureFilesTable');
    this.fileCountHeading = this.container.querySelector('#fileCountHeading');
    this.playerControlsCont = this.container.querySelector('#playerControlsInputCont');
    this.coordLockCoordsCont = this.container.querySelector('#coordinateLockCoordsCont');
    this.coordLockStructureCoords = this.container.querySelector('#coordinateLockStructureCoords');
    this.completedPacksCont = this.container.querySelector('#completedPacksCont');
    this.logEntriesCont = this.container.querySelector('#logEntriesCont');
    this.errorCountEl = this.container.querySelector('#errorCount');
    this.warningCountEl = this.container.querySelector('#warningCount');
    this.texPreviewPlain = this.container.querySelector('[data-role="tex-preview-plain"]');
    this.texPreviewTinted = this.container.querySelector('[data-role="tex-preview-tinted"]');

    this._renderPlayerControlsInputs();
  }

  /**
   * Renderiza los 12 controles de jugador con su componente ItemCriteriaInput
   */
  _renderPlayerControlsInputs() {
    this.playerControlsCont.innerHTML = Object.entries(this.playerControls)
      .map(([controlKey, criteria]) => {
        const transKey = PLAYER_CONTROL_NAMES[controlKey];
        const itemsHtml = criteria.names
          .map(
            (name, idx) =>
              `<span class="hp-criteria-chip is-item" data-control="${controlKey}" data-type="names" data-idx="${idx}"><code>${name}</code> ×</span>`
          )
          .join('');
        const tagsHtml = criteria.tags
          .map(
            (tag, idx) =>
              `<span class="hp-criteria-chip is-tag" data-control="${controlKey}" data-type="tags" data-idx="${idx}"><code>#${tag}</code> ×</span>`
          )
          .join('');
        const emptyHtml =
          criteria.names.length === 0 && criteria.tags.length === 0
            ? `<span class="hp-criteria-empty" data-translate="item_criteria_input.nothing">${this._t('item_criteria_input.nothing')}</span>`
            : '';

        return `
          <div class="hp-player-control-block">
            <span class="hp-control-title" data-translate="${transKey}">${this._t(transKey)}</span>:
            <div class="hp-item-criteria-box">
              <span data-translate="item_criteria_input.matching">${this._t('item_criteria_input.matching')}</span>
              <span class="hp-criteria-list">${itemsHtml}${tagsHtml}${emptyHtml}</span>
              <input
                type="text"
                class="hp-criteria-inline-input"
                data-criteria-input="${controlKey}"
                placeholder="item / tag"
              />
              <button type="button" class="hp-add-item-btn" data-add-criteria="${controlKey}" data-criteria-kind="names">
                + <span data-translate="item_criteria_input.item_name">${this._t('item_criteria_input.item_name')}</span>
              </button>
              <button type="button" class="hp-add-tag-btn" data-add-criteria="${controlKey}" data-criteria-kind="tags">
                + <span data-translate="item_criteria_input.item_tag">${this._t('item_criteria_input.item_tag')}</span>
              </button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  _bindEvents() {
    // Selector de idioma
    const langSelect = this.container.querySelector('#languageSelector');
    langSelect.addEventListener('change', () => {
      this.language = langSelect.value;
      this._translateUI();
      this._updateFileCountHeading();
    });

    // Subir archivos .mcstructure
    const structureFilesInput = this.container.querySelector('#structureFilesInput');
    const notStructureError = this.container.querySelector('#notStructureFileError');
    structureFilesInput.addEventListener('change', async () => {
      notStructureError.classList.add('hidden');
      const files = Array.from(structureFilesInput.files || []);
      for (const file of files) {
        if (!file.name.toLowerCase().endsWith('.mcstructure')) {
          notStructureError.classList.remove('hidden');
          continue;
        }
        try {
          const buf = await file.arrayBuffer();
          const parsed = parseMcstructureArrayBuffer(buf);
          this.selectedStructures.push({
            ...parsed,
            id: file.name.replace(/\.mcstructure$/i, ''),
            title: file.name.replace(/\.mcstructure$/i, ''),
            fileName: file.name,
            showDownload: false,
            coordLock: [...(parsed.worldOrigin || [0, 64, 0]), 0],
          });
          this.logInfo(`Finished reading structure "${file.name}" (${parsed.width}x${parsed.height}x${parsed.depth})`);
        } catch (err) {
          this.logError(`Failed reading "${file.name}": ${err instanceof Error ? err.message : err}`);
        }
      }
      structureFilesInput.value = '';
      this._updateFileTable();
    });

    // Extraer estructuras desde archivo .mcworld / .mctemplate / .zip
    const worldFileInput = this.container.querySelector('#worldFileInput');
    worldFileInput.addEventListener('change', async () => {
      const worldFile = worldFileInput.files && worldFileInput.files[0];
      if (!worldFile) return;

      const msgEl = this.container.querySelector('#worldExtractionMessage');
      const okEl = this.container.querySelector('#worldExtractionSuccess');
      const errEl = this.container.querySelector('#worldExtractionError');
      const worldErrEl = this.container.querySelector('#worldExtractionWorldError');

      msgEl.classList.remove('hidden');
      okEl.classList.add('hidden');
      errEl.classList.add('hidden');
      worldErrEl.classList.add('hidden');

      try {
        const entries = await readZipEntries(await worldFile.arrayBuffer());
        const mcEntries = entries.filter((e) => e.filename.toLowerCase().endsWith('.mcstructure'));
        let extractedCount = 0;

        for (const entry of mcEntries) {
          try {
            const parsed = parseMcstructureArrayBuffer(
              entry.data.buffer.slice(entry.data.byteOffset, entry.data.byteOffset + entry.data.byteLength)
            );
            const cleanFileName = entry.filename.split('/').pop() || 'world_structure.mcstructure';
            this.selectedStructures.push({
              ...parsed,
              id: cleanFileName.replace(/\.mcstructure$/i, ''),
              title: cleanFileName.replace(/\.mcstructure$/i, ''),
              fileName: cleanFileName,
              showDownload: true,
              coordLock: [...(parsed.worldOrigin || [0, 64, 0]), 0],
            });
            extractedCount++;
          } catch {
            // Skip invalid entry
          }
        }

        msgEl.classList.add('hidden');
        if (extractedCount > 0) {
          okEl.textContent = this._t('extract_from_world.success')
            .replace('{COUNT}', String(extractedCount))
            .replace(/\[|\]/g, '');
          okEl.classList.remove('hidden');
          this._updateFileTable();
          this.logInfo(`Extracted ${extractedCount} structure(s) from world "${worldFile.name}"`);
        } else {
          errEl.classList.remove('hidden');
          this.logWarn(`No .mcstructure files found in "${worldFile.name}"`);
        }
      } catch (e) {
        msgEl.classList.add('hidden');
        worldErrEl.textContent = this._t('extract_from_world.world_error').replace('{ERROR}', String(e));
        worldErrEl.classList.remove('hidden');
        this.logError(`Invalid world archive "${worldFile.name}": ${e}`);
      }
      worldFileInput.value = '';
    });

    // Actualizar pack (.mcpack antiguo de Structura / HoloPrint)
    const oldPackInput = this.container.querySelector('#oldPackInput');
    oldPackInput.addEventListener('change', async () => {
      const packFile = oldPackInput.files && oldPackInput.files[0];
      if (!packFile) return;

      const msgEl = this.container.querySelector('#oldPackExtractionMessage');
      const okEl = this.container.querySelector('#oldPackExtractionSuccess');
      const errEl = this.container.querySelector('#oldPackExtractionError');
      msgEl.classList.remove('hidden');
      okEl.classList.add('hidden');
      errEl.classList.add('hidden');

      try {
        const entries = await readZipEntries(await packFile.arrayBuffer());
        const structEntries = entries.filter(
          (e) =>
            e.filename.endsWith('.mcstructure') || e.filename.endsWith('.mcstructure.gzip')
        );
        let found = 0;

        for (const entry of structEntries) {
          let rawBytes = entry.data;
          if (entry.filename.endsWith('.gzip') && typeof DecompressionStream !== 'undefined') {
            const ds = new DecompressionStream('gzip');
            const stream = new Blob([rawBytes]).stream().pipeThrough(ds);
            rawBytes = new Uint8Array(await new Response(stream).arrayBuffer());
          }
          const parsed = parseMcstructureArrayBuffer(
            rawBytes.buffer.slice(rawBytes.byteOffset, rawBytes.byteOffset + rawBytes.byteLength)
          );
          const baseName =
            packFile.name.replace(/(\.holoprint)?\.mcpack$/i, '') +
            (structEntries.length > 1 ? `_${found}` : '') +
            '.mcstructure';

          this.selectedStructures.push({
            ...parsed,
            id: baseName.replace(/\.mcstructure$/i, ''),
            title: baseName.replace(/\.mcstructure$/i, ''),
            fileName: baseName,
            showDownload: true,
            coordLock: [...(parsed.worldOrigin || [0, 64, 0]), 0],
          });
          found++;
        }

        msgEl.classList.add('hidden');
        if (found > 0) {
          okEl.classList.remove('hidden');
          this._updateFileTable();
          this.logInfo(`Extracted ${found} structure file(s) from pack "${packFile.name}"`);
        } else {
          errEl.classList.remove('hidden');
        }
      } catch (e) {
        msgEl.classList.add('hidden');
        errEl.classList.remove('hidden');
        this.logError(`Failed extracting pack "${packFile.name}": ${e}`);
      }
      oldPackInput.value = '';
    });

    // Eliminar todos los archivos de la tabla
    this.container.querySelector('#removeAllFilesButton').addEventListener('click', () => {
      this.selectedStructures = [];
      this._updateFileTable();
    });

    // Cambios en formulario (Texturas, Modo de opacidad, Bloqueo de coordenadas, Enlaces en descripción)
    this.form.addEventListener('input', (e) => {
      const target = e.target;
      if (target.closest('.textureSettings')) {
        this._updateTexturePreview();
      }
      if (target.name === 'opacityMode') {
        this.container
          .querySelector('#singleOpacityRow')
          .classList.toggle('hidden', target.value === 'multiple');
      }
      if (target.name === 'coordinateLockEnabled') {
        this.coordLockCoordsCont.classList.toggle('hidden', !target.checked);
        this.container.querySelector('#initialOffsetRow').classList.toggle('hidden', target.checked);
      }
      if (target.name === 'description') {
        const linksCont = this.container.querySelector('#descriptionLinksCont');
        const links = findLinksInDescription(target.value);
        linksCont.innerHTML = links
          .map(
            ([, url]) =>
              `<div><span data-translate="metadata.description.link_found">${this._t('metadata.description.link_found')}</span> <code>${url}</code></div>`
          )
          .join('');
      }
    });

    // Limpiar caché de packs de recursos
    const clearCacheBtn = this.container.querySelector('#clearResourcePackCacheButton');
    clearCacheBtn.addEventListener('click', async () => {
      if (typeof caches !== 'undefined') {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
      const prevText = clearCacheBtn.textContent;
      clearCacheBtn.textContent = this._t('resource_packs.cache_reset');
      clearCacheBtn.disabled = true;
      this.logInfo('Resource pack cache cleared.');
      setTimeout(() => {
        clearCacheBtn.textContent = prevText;
        clearCacheBtn.disabled = false;
      }, 1800);
    });

    // Descargar logs (holoprint_logs.json)
    this.container.querySelector('#downloadLogsButton').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(this.allLogs, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'holoprint_logs.json';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });

    // Delegación general de clics
    this.container.addEventListener('click', (e) => {
      // Cargar muestra rápida
      const sampleBtn = e.target.closest('[data-sample]');
      if (sampleBtn) {
        const key = sampleBtn.getAttribute('data-sample');
        if (this.presets[key]) {
          const preset = structuredClone(this.presets[key]);
          preset.showDownload = true;
          preset.coordLock = [...(preset.worldOrigin || [0, 64, 0]), 0];
          this.selectedStructures.push(preset);
          this._updateFileTable();
          this.logInfo(`Added sample structure "${preset.fileName}"`);
        }
        return;
      }

      // Acciones en filas de FileInputTable
      const rowActionBtn = e.target.closest('[data-row-action]');
      if (rowActionBtn) {
        const idx = parseInt(rowActionBtn.getAttribute('data-row-idx'), 10);
        const action = rowActionBtn.getAttribute('data-row-action');
        if (action === 'delete') {
          this.selectedStructures.splice(idx, 1);
          this._updateFileTable();
        } else if (action === 'download') {
          const st = this.selectedStructures[idx];
          if (st) this._downloadMcstructure(st);
        } else if (action === 'move-up' && idx > 0) {
          const temp = this.selectedStructures[idx - 1];
          this.selectedStructures[idx - 1] = this.selectedStructures[idx];
          this.selectedStructures[idx] = temp;
          this._updateFileTable();
        }
        return;
      }

      // Añadir item / tag en ItemCriteriaInput
      const addCriteriaBtn = e.target.closest('[data-add-criteria]');
      if (addCriteriaBtn) {
        const controlKey = addCriteriaBtn.getAttribute('data-add-criteria');
        const kind = addCriteriaBtn.getAttribute('data-criteria-kind');
        const inputEl = this.container.querySelector(`[data-criteria-input="${controlKey}"]`);
        const val = (inputEl?.value || '').trim().replace(/^#/, '');
        if (val && this.playerControls[controlKey]) {
          if (!this.playerControls[controlKey][kind].includes(val)) {
            this.playerControls[controlKey][kind].push(val);
            this._renderPlayerControlsInputs();
          }
        } else if (inputEl) {
          inputEl.focus();
        }
        return;
      }

      // Eliminar chip en ItemCriteriaInput
      const chipEl = e.target.closest('.hp-criteria-chip');
      if (chipEl) {
        const controlKey = chipEl.getAttribute('data-control');
        const kind = chipEl.getAttribute('data-type');
        const idx = parseInt(chipEl.getAttribute('data-idx'), 10);
        if (this.playerControls[controlKey]?.[kind]) {
          this.playerControls[controlKey][kind].splice(idx, 1);
          this._renderPlayerControlsInputs();
        }
        return;
      }

      // Obtener coordenadas globales en Coordinate Lock
      if (e.target.closest('#getGlobalCoordsBtn')) {
        this.selectedStructures.forEach((st) => {
          st.coordLock = [...(st.worldOrigin || [0, 64, 0]), st.coordLock?.[3] || 0];
        });
        this._renderCoordinateLockInputs();
        this.logInfo('Loaded structure_world_origin coordinates from NBT.');
        return;
      }

      // Botones de ajuste (-1000 .. +1000) en Coordinate Lock
      const deltaBtn = e.target.closest('[data-coord-delta]');
      if (deltaBtn) {
        const delta = parseInt(deltaBtn.getAttribute('data-coord-delta'), 10);
        const axisRadio = this.form.querySelector('input[name="axis"]:checked');
        const axisIdx = axisRadio?.value === 'Y' ? 1 : axisRadio?.value === 'Z' ? 2 : 0;
        this.selectedStructures.forEach((st) => {
          st.coordLock ??= [0, 64, 0, 0];
          st.coordLock[axisIdx] += delta;
        });
        this._renderCoordinateLockInputs();
        return;
      }

      // Botones Reiniciar por sección (.resetButton)
      const resetBtn = e.target.closest('.resetButton');
      if (resetBtn) {
        const section = resetBtn.getAttribute('data-reset-section');
        this._resetSection(section, resetBtn);
      }
    });

    // Submit del formulario: Generar Pack (.mcpack)
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.generateAndDownloadMcpack();
    });
  }

  _resetSection(section, buttonEl) {
    if (section === 'settings') {
      this.form.elements.namedItem('scale').value = '95';
      this.form.elements.namedItem('textureOutlineWidth').value = '0.25';
      this.form.elements.namedItem('textureOutlineColor').value = '#10B981';
      this.form.elements.namedItem('textureOutlineOpacity').value = '65';
      this.form.elements.namedItem('tintColor').value = '#579EFA';
      this.form.elements.namedItem('tintOpacity').value = '20';
      this.playerControls = structuredClone(DEFAULT_PLAYER_CONTROLS);
      this._renderPlayerControlsInputs();
      this._updateTexturePreview();
    } else if (section === 'metadata') {
      this.form.elements.namedItem('packName').value = '';
      this.form.elements.namedItem('author').value = HOLOPRINT_AUTHOR;
      this.form.elements.namedItem('description').value = '';
      this.form.elements.namedItem('compressionLevel').value = '5';
      this.container.querySelector('#descriptionLinksCont').innerHTML = '';
    }
    const origText = buttonEl.textContent;
    buttonEl.textContent = this._t(`${section}.reset`);
    buttonEl.disabled = true;
    setTimeout(() => {
      buttonEl.textContent = origText;
      buttonEl.disabled = false;
    }, 1500);
  }

  _translateUI() {
    this.container.querySelectorAll('[data-translate]').forEach((el) => {
      const key = el.getAttribute('data-translate');
      const translated = this._t(key);
      if (translated) el.innerHTML = translated;
    });
    this.container.querySelectorAll('[data-translate-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-translate-placeholder');
      const translated = this._t(key);
      if (translated) el.setAttribute('placeholder', translated);
    });
  }

  _updateFileCountHeading() {
    const count = this.selectedStructures.length;
    const removeAllBtn = this.container.querySelector('#removeAllFilesButton');
    if (count > 0) {
      const template = this._t('file_input_table.count');
      const text =
        count > 1
          ? template.replaceAll(/\[|\]/g, '')
          : template.replaceAll(/\[[^\]]+\]/g, '');
      this.fileCountHeading.textContent = text.replace('{COUNT}', String(count));
      removeAllBtn.style.display = 'inline-block';
    } else {
      this.fileCountHeading.textContent = this._t('file_input_table.empty');
      removeAllBtn.style.display = 'none';
    }
  }

  _updateFileTable() {
    this._updateFileCountHeading();
    this.structureFilesTable.innerHTML = this.selectedStructures
      .map(
        (st, idx) => `
        <tr>
          <td>${st.fileName.replace(/\.mcstructure$/i, '')} <small>(${st.width}×${st.height}×${st.depth})</small></td>
          <td>
            <div class="buttonsCont">
              <button type="button" title="Descargar .mcstructure" data-row-action="download" data-row-idx="${idx}">⬇</button>
              <button type="button" title="Eliminar" data-row-action="delete" data-row-idx="${idx}">🗑</button>
              <button type="button" title="Mover arriba" data-row-action="move-up" data-row-idx="${idx}">⇅</button>
            </div>
          </td>
        </tr>
      `
      )
      .join('');

    const packNameInput = this.form.elements.namedItem('packName');
    if (packNameInput) {
      packNameInput.setAttribute('placeholder', getDefaultPackName(this.selectedStructures));
    }

    this._renderCoordinateLockInputs();
  }

  _renderCoordinateLockInputs() {
    this.coordLockStructureCoords.innerHTML = this.selectedStructures
      .map((st, idx) => {
        const [x, y, z, rot] = st.coordLock || [...(st.worldOrigin || [0, 64, 0]), 0];
        return `
          <div class="hp-coord-lock-row" data-struct-idx="${idx}">
            <label>${st.fileName.replace(/\.mcstructure$/i, '')}:</label>
            <span class="hp-vec3-group">
              <input type="number" value="${x}" data-lock-idx="${idx}" data-lock-comp="0" aria-label="X" /> /
              <input type="number" value="${y}" data-lock-idx="${idx}" data-lock-comp="1" aria-label="Y" /> /
              <input type="number" value="${z}" data-lock-idx="${idx}" data-lock-comp="2" aria-label="Z" />
            </span>
            <label>↻ <input type="number" min="-270" max="270" step="90" value="${rot}" data-lock-idx="${idx}" data-lock-comp="3" aria-label="Rotación" />°</label>
          </div>
        `;
      })
      .join('');

    this.coordLockStructureCoords.querySelectorAll('input[data-lock-idx]').forEach((inp) => {
      inp.addEventListener('input', () => {
        const sIdx = parseInt(inp.getAttribute('data-lock-idx'), 10);
        const comp = parseInt(inp.getAttribute('data-lock-comp'), 10);
        if (this.selectedStructures[sIdx]) {
          this.selectedStructures[sIdx].coordLock ??= [0, 64, 0, 0];
          this.selectedStructures[sIdx].coordLock[comp] = Number(inp.value) || 0;
        }
      });
    });
  }

  /**
   * Replica exactamente `updateTexturePreview()` de `src/index.js`:
   * Dibuja un bloque de muestra con contorno `TextureAtlas.addTextureOutlines` (izquierda)
   * y con tinte superpuesto `tintColor` + `tintOpacity` (derecha).
   */
  _updateTexturePreview() {
    if (!this.texPreviewPlain || !this.texPreviewTinted) return;

    const outlineWidth = Number(this.form.elements.namedItem('textureOutlineWidth')?.value || 0.25);
    const outlineColor = this.form.elements.namedItem('textureOutlineColor')?.value || '#10B981';
    const outlineOpacity =
      Number(this.form.elements.namedItem('textureOutlineOpacity')?.value || 65) / 100;
    const tintColor = this.form.elements.namedItem('tintColor')?.value || '#579EFA';
    const tintOpacity = Number(this.form.elements.namedItem('tintOpacity')?.value || 20) / 100;

    const drawBaseBlock = (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const cell = w / 16;
      for (let py = 0; py < 16; py++) {
        for (let px = 0; px < 16; px++) {
          const isOre =
            (px >= 3 && px <= 5 && py >= 4 && py <= 5) ||
            (px >= 10 && px <= 12 && py >= 6 && py <= 7) ||
            (px >= 6 && px <= 8 && py >= 11 && py <= 12);
          const hash = (px * 19 + py * 37) % 5;
          if (isOre) {
            ctx.fillStyle = hash === 0 ? '#A8FFF5' : '#4AEDD9';
          } else {
            ctx.fillStyle = hash === 0 ? '#686868' : hash === 1 ? '#8A8A8A' : '#787878';
          }
          ctx.fillRect(px * cell, py * cell, cell, cell);
        }
      }

      if (outlineWidth > 0) {
        const borderPx = Math.max(2, Math.round(outlineWidth * 16));
        ctx.save();
        ctx.fillStyle = outlineColor;
        ctx.globalAlpha = outlineOpacity;
        ctx.fillRect(0, 0, w, borderPx);
        ctx.fillRect(0, h - borderPx, w, borderPx);
        ctx.fillRect(0, borderPx, borderPx, h - borderPx * 2);
        ctx.fillRect(w - borderPx, borderPx, borderPx, h - borderPx * 2);
        ctx.restore();
      }
    };

    const plainCtx = this.texPreviewPlain.getContext('2d');
    drawBaseBlock(plainCtx, 64, 64);

    const tintedCtx = this.texPreviewTinted.getContext('2d');
    drawBaseBlock(tintedCtx, 64, 64);
    tintedCtx.save();
    tintedCtx.fillStyle = tintColor;
    tintedCtx.globalAlpha = tintOpacity;
    tintedCtx.fillRect(0, 0, 64, 64);
    tintedCtx.restore();
  }

  _downloadMcstructure(structureObj) {
    const buffer = encodeMcstructureToArrayBuffer(structureObj);
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = structureObj.fileName || 'structure.mcstructure';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  /**
   * Sistema de logs compatible con `SimpleLogger.js`
   */
  logInfo(text) {
    this._pushLog(text, 'info');
  }
  logWarn(text) {
    this.warningCount++;
    this.warningCountEl.textContent = `⚠️${this.warningCount}`;
    this._pushLog(text, 'warning');
  }
  logError(text) {
    this.errorCount++;
    this.errorCountEl.textContent = `🚨${this.errorCount}`;
    this._pushLog(text, 'error');
  }

  _pushLog(text, level) {
    const elapsed = performance.now() - this.originTime;
    this.allLogs.push({ text, level, time: Number(elapsed.toFixed(1)) });

    const d = new Date(elapsed);
    const ts = `${String(d.getUTCMinutes()).padStart(2, '0')}:${String(d.getUTCSeconds()).padStart(2, '0')}.${String(d.getUTCMilliseconds()).padStart(3, '0')}`;
    const p = document.createElement('p');
    p.className = `log ${level}`;
    p.innerHTML = `<span class="timestamp">${ts}</span><span class="logText">${text}</span>`;
    this.logEntriesCont.appendChild(p);
    this.logEntriesCont.scrollTop = this.logEntriesCont.scrollHeight;
  }

  /**
   * Genera el pack `.holoprint.mcpack` y renderiza el botón `.packInfoButton.completed`
   * + el visor 3D `.previewCont` con su panel desplegable `lil-gui` (`Options`).
   */
  async generateAndDownloadMcpack() {
    if (this.selectedStructures.length === 0) {
      this.logWarn('No hay archivos .mcstructure seleccionados. Cargando plantilla predeterminada...');
      this.selectedStructures.push({
        ...structuredClone(this.presets.casa_medieval),
        showDownload: true,
        coordLock: [120, 64, -85, 0],
      });
      this._updateFileTable();
    }

    const startTime = performance.now();
    this.originTime = startTime;

    const primaryStructure = this.selectedStructures[0];
    const formData = new FormData(this.form);
    const rawPackName = String(formData.get('packName') || '').trim();
    const packName = rawPackName || getDefaultPackName(this.selectedStructures);
    const authors = String(formData.get('author') || HOLOPRINT_AUTHOR)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const description = String(formData.get('description') || '').trim() || undefined;
    const ghostBlockScale = Number(formData.get('scale') || 95);
    const outlineWidth = Number(formData.get('textureOutlineWidth') || 0.25);
    const outlineColor = String(formData.get('textureOutlineColor') || '#10B981');
    const tintColor = String(formData.get('tintColor') || '#579EFA');
    const tintOpacity = Number(formData.get('tintOpacity') || 20) / 100;
    const ignoredBlocks = String(formData.get('ignoredBlocks') || '')
      .split(/\W+/)
      .filter(Boolean);

    const config = {
      packName,
      authors: authors.length ? authors : [HOLOPRINT_AUTHOR],
      description,
      ghostBlockScale,
      outlineWidth,
      outlineColor,
      tintColor,
      tintOpacity,
      ignoredBlocks,
    };

    this.logInfo(`Finished reading ${this.selectedStructures.length} structure(s)!`);
    const materialSummary = computeStructureMaterialList(primaryStructure, -1, ignoredBlocks);
    const manifest = buildHoloPrintManifest(config);
    const hologramGeo = buildHologramGeoJson(primaryStructure, ghostBlockScale / 100);
    this.logInfo('Finished making block geometry templates!');

    const esLang = buildHoloPrintLangFile('es_ES', config, materialSummary);
    const mxLang = buildHoloPrintLangFile('es_MX', config, materialSummary);
    const enLang = buildHoloPrintLangFile('en_US', config, materialSummary);

    // Crear pack_icon.png procedural Truchet (256x256)
    const iconCanvas = document.createElement('canvas');
    iconCanvas.width = 256;
    iconCanvas.height = 256;
    this._drawTruchetIcon(iconCanvas, packName, outlineColor);
    const iconBlob = await new Promise((res) => iconCanvas.toBlob((b) => res(b), 'image/png'));
    const iconBytes = iconBlob ? new Uint8Array(await iconBlob.arrayBuffer()) : new Uint8Array(0);

    const zipFiles = [
      { path: 'manifest.json', data: JSON.stringify(manifest, null, 2) },
      { path: 'pack_icon.png', data: iconBytes },
      {
        path: 'models/entity/holoprint.hologram.geo.json',
        data: JSON.stringify(hologramGeo, null, 2),
      },
      {
        path: 'materials/entity.material',
        data: JSON.stringify(
          {
            materials: {
              version: '1.0.0',
              'holoprint_hologram:entity_alphablend': {
                '+states': ['DisableCulling'],
                variants: [{ wrong_block_overlay: { depthFunc: 'Always' } }],
              },
            },
          },
          null,
          2
        ),
      },
      {
        path: 'texts/languages.json',
        data: JSON.stringify(['es_ES', 'es_MX', 'en_US'], null, 2),
      },
      { path: 'texts/es_ES.lang', data: esLang },
      { path: 'texts/es_MX.lang', data: mxLang },
      { path: 'texts/en_US.lang', data: enLang },
    ];

    this.selectedStructures.forEach((st, i) => {
      const mcBytes = new Uint8Array(encodeMcstructureToArrayBuffer(st));
      const entryName =
        this.selectedStructures.length === 1 ? '.mcstructure' : `${i}.mcstructure`;
      zipFiles.push({ path: entryName, data: mcBytes });
    });

    const zipBytes = buildZipArchive(zipFiles);
    const fileName = `${packName}.holoprint.mcpack`;
    const packBlob = new Blob([zipBytes], { type: 'application/zip' });

    const elapsedSec = ((performance.now() - startTime) / 1000).toFixed(2);
    this.logInfo(`Finished creating pack "${fileName}" in ${elapsedSec}s!`);

    // Insertar el botón de descarga `.packInfoButton.completed` y `.previewCont` como en HoloPrint
    this.completedPacksCont.innerHTML = '';

    const downloadBtn = document.createElement('button');
    downloadBtn.type = 'button';
    downloadBtn.className = 'packInfoButton finished completed';
    downloadBtn.textContent = `${this._t('download')} (${fileName})`;
    downloadBtn.addEventListener('click', () => {
      const url = URL.createObjectURL(packBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1200);
    });

    const previewCont = this._createInteractivePreviewElement(
      primaryStructure,
      config,
      materialSummary
    );

    this.completedPacksCont.appendChild(downloadBtn);
    this.completedPacksCont.appendChild(previewCont);

    // Disparar descarga automática al generar
    downloadBtn.click();
  }

  _drawTruchetIcon(can, seedText, accentHex) {
    const ctx = can.getContext('2d');
    let hash = 2166136261;
    for (let i = 0; i < seedText.length; i++) {
      hash ^= seedText.charCodeAt(i);
      hash = Math.imul(hash, 16777619) >>> 0;
    }
    const hue = hash % 360;
    ctx.fillStyle = `hsl(${hue}, 35%, 15%)`;
    ctx.fillRect(0, 0, can.width, can.height);

    const grid = 4;
    const tile = 200 / grid;
    const pad = (can.width - grid * tile) / 2;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = accentHex || '#10B981';

    for (let x = 0; x < grid; x++) {
      for (let y = 0; y < grid; y++) {
        const mx = Math.min(x, grid - 1 - x);
        const bit = (hash >> ((mx * grid + y) % 16)) & 1;
        const px = pad + x * tile;
        const py = pad + y * tile;
        ctx.beginPath();
        if (bit === (x >= grid / 2 ? 1 : 0)) {
          ctx.arc(px, py, tile / 2, 0, Math.PI / 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(px + tile, py + tile, tile / 2, Math.PI, (Math.PI * 3) / 2);
          ctx.stroke();
        } else {
          ctx.arc(px + tile, py, tile / 2, Math.PI / 2, Math.PI);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(px, py + tile, tile / 2, (Math.PI * 3) / 2, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
  }

  /**
   * Crea el contenedor `.previewCont` con el lienzo 3D interactivo,
   * el widget de estadísticas FPS, el panel desplegable `lil-gui` (`Options`)
   * y la tabla de Lista de Materiales integrada.
   */
  _createInteractivePreviewElement(structure, config, materialSummary) {
    const wrapper = document.createElement('div');
    wrapper.className = 'previewCont';

    wrapper.innerHTML = `
      <div class="hp-preview-stage-box">
        <div class="hp-fps-badge">60 FPS · ${structure.width}×${structure.height}×${structure.depth}</div>

        <!-- Panel estilo lil-gui de HoloPrint -->
        <div class="hp-lil-gui">
          <button type="button" class="hp-lil-gui-title" data-action="toggle-lil-gui">
            ▾ <span data-translate="preview.options">${this._t('preview.options')}</span>
          </button>
          <div class="hp-lil-gui-body">
            <label>
              <span>Capa Y</span>
              <input type="range" min="-1" max="${structure.height - 1}" value="-1" step="1" data-gui="layerFilter" />
            </label>
            <label>
              <span data-translate="preview.options.lightAngle">${this._t('preview.options.lightAngle')}</span>
              <input type="range" min="0" max="360" value="${this.previewOptions.lightAngle}" step="5" data-gui="lightAngle" />
            </label>
            <label>
              <span data-translate="preview.options.showSkybox">${this._t('preview.options.showSkybox')}</span>
              <input type="checkbox" ${this.previewOptions.showSkybox ? 'checked' : ''} data-gui-bool="showSkybox" />
            </label>
            <div class="hp-lil-gui-btns">
              <button type="button" data-gui-action="screenshot" data-translate="preview.options.takeScreenshot">${this._t('preview.options.takeScreenshot')}</button>
              <button type="button" data-gui-action="export-glb" data-translate="preview.options.exportGlb">${this._t('preview.options.exportGlb')}</button>
            </div>
          </div>
        </div>

        <canvas class="hp-render-canvas" width="480" height="480" aria-label="Vista previa 3D de la estructura"></canvas>
      </div>

      <!-- Lista de materiales generada para la estructura -->
      <div class="hp-generated-materials-box">
        <h3>Lista de Materiales (${materialSummary.totalBlocks} bloques)</h3>
        <div class="hp-materials-grid">
          ${materialSummary.entries
            .map(
              (item) => `
            <div class="hp-mat-chip">
              <span class="hp-material-swatch" style="background-color: ${item.color};"></span>
              <span class="hp-mat-chip-name">${item.translatedName}</span>
              <strong class="hp-mat-chip-count">${item.partitionedCount}</strong>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;

    const canvas = wrapper.querySelector('.hp-render-canvas');
    const guiBody = wrapper.querySelector('.hp-lil-gui-body');

    const renderScene = () => {
      this._draw3DStructureOnCanvas(canvas, structure, config);
    };

    // Eventos de arrastrar para rotar en 3D
    let dragging = false;
    let lastX = 0;
    canvas.addEventListener('mousedown', (e) => {
      dragging = true;
      lastX = e.clientX;
    });
    window.addEventListener('mouseup', () => {
      dragging = false;
    });
    canvas.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      this.previewOptions.yaw = (this.previewOptions.yaw + dx * 0.8) % 360;
      renderScene();
    });

    wrapper.addEventListener('input', (e) => {
      const target = e.target;
      if (target.hasAttribute('data-gui')) {
        const key = target.getAttribute('data-gui');
        this.previewOptions[key] = Number(target.value);
        renderScene();
      } else if (target.hasAttribute('data-gui-bool')) {
        const key = target.getAttribute('data-gui-bool');
        this.previewOptions[key] = Boolean(target.checked);
        renderScene();
      }
    });

    wrapper.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="toggle-lil-gui"]')) {
        guiBody.classList.toggle('hidden');
        return;
      }
      const guiAct = e.target.closest('[data-gui-action]');
      if (!guiAct) return;
      const act = guiAct.getAttribute('data-gui-action');
      if (act === 'screenshot') {
        canvas.toBlob((blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `Screenshot_${config.packName}.png`;
          a.click();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        });
      } else if (act === 'export-glb') {
        const glbBuffer = buildStructureGlbBuffer(structure);
        const blob = new Blob([glbBuffer], { type: 'model/gltf-binary' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${config.packName}.glb`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        this.logInfo(`Exported 3D model "${config.packName}.glb"`);
      }
    });

    renderScene();
    return wrapper;
  }

  _draw3DStructureOnCanvas(canvas, structure, config) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    if (this.previewOptions.showSkybox) {
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, '#0f203c');
      grad.addColorStop(0.55, '#19355c');
      grad.addColorStop(1, '#0d1524');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }

    const { width, height, depth, palette, indices } = structure;
    const maxDim = Math.max(width, height, depth, 4);
    const tileW = Math.min(42, Math.floor(320 / maxDim));
    const tileH = Math.floor(tileW * 0.5);
    const blockH = Math.floor(tileW * 0.58);

    const centerX = W / 2;
    const originY = H * 0.68;
    const scaleRatio = (config.ghostBlockScale || 95) / 100;
    const rad = (this.previewOptions.yaw * Math.PI) / 180;
    const cosA = Math.cos(rad);
    const sinA = Math.sin(rad);
    const lightBoost = 0.85 + 0.25 * Math.cos((this.previewOptions.lightAngle * Math.PI) / 180);

    const drawList = [];
    for (let y = 0; y < height; y++) {
      let s = scaleRatio;
      let alpha = 0.92;
      if (this.previewOptions.layerFilter >= 0 && y > this.previewOptions.layerFilter) {
        s = 0.16;
        alpha = 0.2;
      }

      for (let x = 0; x < width; x++) {
        for (let z = 0; z < depth; z++) {
          const idx = (x * height + y) * depth + z;
          const pIdx = indices[idx];
          if (pIdx === undefined || pIdx < 0 || !palette[pIdx]) continue;
          const block = palette[pIdx];
          if (!block || block.name === 'air') continue;

          const cx = x - width / 2;
          const cz = z - depth / 2;
          const rx = cx * cosA - cz * sinA;
          const rz = cx * sinA + cz * cosA;

          drawList.push({
            rx,
            y,
            rz,
            blockName: block.name,
            scale: s,
            alpha,
            depthSort: rx + rz + y * 1.8,
          });
        }
      }
    }

    drawList.sort((a, b) => a.depthSort - b.depthSort);

    for (const item of drawList) {
      const visuals = getBlockVisuals(item.blockName);
      const isoX = centerX + (item.rx - item.rz) * (tileW * 0.5);
      const isoY = originY + (item.rx + item.rz) * (tileH * 0.5) - item.y * blockH;

      const hw = (tileW * 0.5) * item.scale;
      const hh = (tileH * 0.5) * item.scale;
      const bh = blockH * item.scale;

      ctx.save();
      ctx.globalAlpha = item.alpha * (visuals.alpha || 1);
      ctx.filter = `brightness(${lightBoost.toFixed(2)})`;

      ctx.beginPath();
      ctx.moveTo(isoX, isoY - bh - hh);
      ctx.lineTo(isoX + hw, isoY - bh);
      ctx.lineTo(isoX, isoY - bh + hh);
      ctx.lineTo(isoX - hw, isoY - bh);
      ctx.closePath();
      ctx.fillStyle = visuals.top;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(isoX - hw, isoY - bh);
      ctx.lineTo(isoX, isoY - bh + hh);
      ctx.lineTo(isoX, isoY + hh);
      ctx.lineTo(isoX - hw, isoY);
      ctx.closePath();
      ctx.fillStyle = visuals.left;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(isoX + hw, isoY - bh);
      ctx.lineTo(isoX, isoY - bh + hh);
      ctx.lineTo(isoX, isoY + hh);
      ctx.lineTo(isoX + hw, isoY);
      ctx.closePath();
      ctx.fillStyle = visuals.right;
      ctx.fill();

      if (config.outlineWidth > 0 && item.scale > 0.3) {
        ctx.strokeStyle = config.outlineColor || '#10B981';
        ctx.lineWidth = Math.max(0.75, config.outlineWidth * 2);
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  _refreshAllViews() {
    this._updateTexturePreview();
  }
}

export default HoloPrintTool;

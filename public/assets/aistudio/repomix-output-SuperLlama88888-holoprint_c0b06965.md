This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  ISSUE_TEMPLATE/
    0-in-game-bug.yml
    1-pack-creation-error.yml
    2-broken-block.yml
    3-feature-request.yml
    config.yml
  workflows/
    automatedTesting.yml
    buildAndDeploy.yml
    deployRedirectPage.yml
    updateFromUpstream.yml
  CODEOWNERS
images/
  armourStandControls.gif
  banner.png
  changingLayer.gif
  changingLayerMode.gif
  changingStructure.gif
  changingTransparency.gif
  disablingPlayerControls.gif
  giveStructureBlockCommand.png
  materialList.gif
  movingHologram.gif
  packGenerationScreen.png
  placingArmourStand.gif
  resourcePackActive.png
  rotatingHologram.gif
  savingBackup.gif
  structureBlockExporting.png
  structureHashesTable.png
  togglingRendering.gif
  togglingTint.gif
  validatingStructure.gif
pipeline/
  build.js
  package.json
  tsconfig.json
  types.ts
src/
  assets/
    previewPanorama/
      0.png
      1.png
      2.png
      3.png
      4.png
      5.png
    banner_1200x630.png
    banner.png
    logo_192.png
    logo_288.png
    logo_512.png
    logo_background.png
    MaterialSymbols.LICENSE.txt
    MaterialSymbols.woff2
    translate_icon.svg
  components/
    FileInputTable.js
    ItemCriteriaInput.js
    LilGui.js
    ResizingInput.js
    SimpleLogger.js
    Vec3Input.js
  data/
    schemas/
      blockEigenvariants.schema.json
      blockShapeGeos.schema.json
      blockShapes.schema.json
      blockStateDefinitions.schema.json
      index.ts
      itemIcons.schema.json
      materialListMappings.schema.json
      textureAtlasMappings.schema.json
    blockEigenvariants.json
    blockShapeGeos.json
    blockShapes.json
    blockStateDefinitions.json
    itemIcons.json
    materialListMappings.json
    textureAtlasMappings.json
  packTemplate/
    animation_controllers/
      holoprint.hologram.animation_controllers.json
    animations/
      holoprint.hologram.animation.json
    font/
      glyph_E2.png
    materials/
      entity.material
    models/
      entity/
        holoprint.hologram.geo.json
    particles/
      block_validation.json
      bounding_box_outline.json
      saving_backup.json
    render_controllers/
      holoprint.hologram.render_controllers.json
    texts/
      de_DE.lang
      en_US.lang
      es_ES.lang
      es_MX.lang
      languages.json
      zh_CN.lang
    textures/
      holoprint/
        icons/
          backup_hologram.png
          change_layer_mode.png
          change_layer.png
          change_opacity.png
          change_structure.png
          decrease_layer.png
          disable_player_controls.png
          increase_layer.png
          increase_opacity.png
          move_hologram_x.png
          move_hologram_y.png
          move_hologram_z.png
          move_hologram.png
          rotate_hologram.png
          toggle_rendering.png
          toggle_tint.png
          toggle_validating.png
        particle/
          exclamation_mark.png
          save_icon.png
          single_white_pixel.png
        ui/
          banner.png
          logo_192.png
          material_list_button_pressed.png
          material_list_button_unpressed.png
          menu_button_pressed.png
          menu_button_unpressed.png
          menu_sliders_icon.png
          quick_input_keyboard_hints.png
          white_circle.json
          white_circle.png
      item_texture.json
      terrain_texture.json
    ui/
      _global_variables.json
      _ui_defs.json
      edu_pause_screen.json
      holoprint_common.json
      holoprint_info_screen.json
      holoprint_keybinds.json
      holoprint_material_list.json
      holoprint_touch_buttons.json
      hud_screen.json
      pause_screen.json
      start_screen.json
      tabbed_upsell_screen.json
      win10_trial_conversion_screen.json
    manifest.json
  structure/
    IStructure.ts
    Mcstructure.js
    Mcstructure.types.ts
    structureHelpers.js
  styles/
    base.css
    bigButtons.css
    coordinateLock.css
    expandableFieldsets.css
    index.css
    inputs.css
    layout.css
    MaterialSymbols.css
    miscElements.css
    multiTabConts.css
    preview.css
    structureFileInput.css
  translations/
    de_DE.json
    en_US.json
    es_ES.json
    es_MX.json
    languages.json
    zh_CN.json
  utils/
    arrays.js
    containers.js
    conversions.js
    coordinates.js
    dom.js
    fileInputs.js
    files.js
    images.js
    math.js
    meta.js
    misc.js
    molang.js
    objects.js
    strings.js
    translations.js
    vec2.js
    vec3.js
  apple-touch-icon.png
  BlockGeoMaker.js
  BlockGeoMaker.types.ts
  BlockUpdater.js
  BlockUpdater.types.ts
  common.types.ts
  EntityGeoMaker.js
  EntityManager.js
  entityScripts.molang.js
  favicon.ico
  fetchers.js
  glsl.d.ts
  HoloPrint.js
  index.html
  index.js
  LocalResourcePack.js
  manifest.webmanifest
  MaterialList.js
  MaterialList.types.ts
  minecraft.types.ts
  PackBuilder.js
  PackBuilder.types.ts
  PolyMeshMaker.js
  PolyMeshMaker.types.ts
  PreviewRenderer.js
  PreviewRenderer.types.ts
  ResourcePackStack.js
  SpawnAnimationMaker.js
  SpawnAnimationMaker.types.ts
  StructureDiagramMaker.js
  SupabaseLogger.js
  TextureAtlas.js
  TextureAtlas.types.ts
  utils.js
  WebGL2QuadRenderer.js
  WebGL2QuadRendererShader.fragment.glsl
  WebGL2QuadRendererShader.vertex.glsl
supabase/
  create_daily_logs_table.sql
  create_pack_counts_table.sql
  create_structure_hashes_table.sql
  log_counts_cron.sql
  record_structure_usage.sql
tests/
  checkBlockTranslationCoverage/
    index.js
    package.json
  sampleStructures/
    amethyst_crystals.mcstructure
    anvils.mcstructure
    bamboo_and_azaleas.mcstructure
    barrels.mcstructure
    beacons.mcstructure
    beds.mcstructure
    bee_hives_and_nests.mcstructure
    brewing_stands.mcstructure
    bubble_columns.mcstructure
    cactus_daylight_detectors.mcstructure
    cakes.mcstructure
    campfires.mcstructure
    candles.mcstructure
    cauldrons.mcstructure
    chaos_cubed_drop.mcstructure
    chests.mcstructure
    chiseled_bookshelves.mcstructure
    chorus_plant.mcstructure
    cocoa_beans.mcstructure
    command_blocks.mcstructure
    composters.mcstructure
    copper_age_update.mcstructure
    copper_bulbs.mcstructure
    coral.mcstructure
    crafters.mcstructure
    crops.mcstructure
    dappled_forest_blocks.mcstructure
    decorated_pots.mcstructure
    dispensers_droppers.mcstructure
    doors.mcstructure
    double_flowers_and_foliage.mcstructure
    dried_ghasts.mcstructure
    dripleaves_spore_blossom.mcstructure
    eggs.mcstructure
    end_gateway.mcstructure
    end_stuff.mcstructure
    farmland.mcstructure
    fence_gates.mcstructure
    fences.mcstructure
    flower_pots.mcstructure
    format_version_2_2_single_layer.mcstructure
    format_version_2_2.mcstructure
    format_version_2_single_layer.mcstructure
    format_version_2.mcstructure
    furnaces.mcstructure
    glazed_terracotta.mcstructure
    hanging_signs.mcstructure
    heads_and_skulls.mcstructure
    hoppers.mcstructure
    huge_mushrooms.mcstructure
    item_frames.mcstructure
    jigsaw_blocks.mcstructure
    ladders.mcstructure
    lanterns.mcstructure
    levers.mcstructure
    lightning_rods.mcstructure
    looms_lecterns_enchanting_table.mcstructure
    lots_of_air.mcstructure
    lush_cave.mcstructure
    mangrove_propagules.mcstructure
    mini_rollercoaster.mcstructure
    nether_portals.mcstructure
    number_1.mcstructure
    number_2.mcstructure
    number_3.mcstructure
    number_4.mcstructure
    number_5.mcstructure
    oak_stairs.mcstructure
    observers.mcstructure
    pale_garden_update.mcstructure
    pillar_blocks.mcstructure
    pink_petals.mcstructure
    pistons_buttons.mcstructure
    pistons.mcstructure
    pitcher_plants_torchflowers.mcstructure
    plain_banners.mcstructure
    playerless_azalea_tree_farm.mcstructure
    pointed_dripstone.mcstructure
    pressure_plates.mcstructure
    pumpkins_melon.mcstructure
    rails.mcstructure
    redstone_dust_strengths.mcstructure
    repeaters_comparators.mcstructure
    respawn_anchors.mcstructure
    sculk_stuff.mcstructure
    second_layer.mcstructure
    shelves.mcstructure
    shulker_boxes.mcstructure
    signs.mcstructure
    spring_to_life_update.mcstructure
    stonecutters_grindstones_bells.mcstructure
    structure_blocks.mcstructure
    sweet_berries_nether_wart.mcstructure
    torches.mcstructure
    trapdoors.mcstructure
    tripwire_hooks_and_string.mcstructure
    vaults_and_trial_spawners.mcstructure
    vines_lichen_veins.mcstructure
    walls.mcstructure
    water_plants.mcstructure
    water.mcstructure
    wheat_pumpkin_melon_stems.mcstructure
    wild_update_exotic_blocks.mcstructure
    wool_concrete_stairs_slabs_straw_beds.mcstructure
    wrong_in_blocks_dot_json.mcstructure
  testSampleStructures/
    index.js
    package.json
  validateJsonData/
    index.js
    package.json
  headlessBrowserTestRunner.js
  tsconfig.json
.gitattributes
.gitignore
globalPatches.d.ts
LICENSE
package.json
quick-lint-js.config
README.de-DE.md
README.es_MX.md
README.md
README.zh-CN.md
TERMS_OF_USE.md
tsconfig.json
```

# Files

## File: .github/ISSUE_TEMPLATE/0-in-game-bug.yml
```yaml
name: Bug report - in-game bug
description: Something doesn't work properly in-game
title: "Bug: "
labels: ["bug"]
body:
  - type: markdown
    attributes:
      value: >
        ### Thank you for filling out this report!
        
        Before you start, please [check for similar issues](https://github.com/SuperLlama88888/holoprint/issues) to avoid duplicates!
  - type: textarea
    id: description
    attributes:
      label: Describe your issue
      description: Explain everything specific to your issue.
    validations:
      required: true
  - type: textarea
    id: screenshots
    attributes:
      label: Attach screenshots or screen recordings
      description: Upload screenshots/screen recordings of the issue.
  - type: textarea
    id: pack
    attributes:
      label: Attach HoloPrint pack
      description: If a specific HoloPrint pack causes this bug, upload the pack here.
  - type: input
    id: version
    attributes:
      label: HoloPrint version
      description: What version of HoloPrint are you using?
      placeholder: v1.x.x
    validations:
      required: true
  - type: input
    id: mcversion
    attributes:
      label: Minecraft version
      description: What version of Minecraft are you playing on?
      placeholder: 1.x.x
    validations:
      required: true
  - type: dropdown
    id: os
    attributes:
      label: Operating system
      description: What type of device are you on?
      options:
        - Android
        - Windows
        - Linux (any)
        - macOS
        - iOS / iPadOS
        - Xbox
        - Playstation
        - Console (other)
        - Desktop (other)
        - Smartphone (other)
        - Tablet (other)
    validations:
      required: true
  - type: checkboxes
    attributes:
      label: I have checked for similar issues
      description: This issue may have been reported already. Please [check for similar issues](https://github.com/SuperLlama88888/holoprint/issues) to avoid duplicates!
      options:
        - label: I have looked for similar issues
          required: true
    validations:
      required: true
  - type: markdown
    attributes:
      value: "### Thank you for using HoloPrint! Your issue will be attended to quickly."
```

## File: .github/ISSUE_TEMPLATE/1-pack-creation-error.yml
```yaml
name: Bug report - pack creation error
description: Your resource pack failed to generate
title: "Pack creation error: "
labels: ["pack creation error", "bug"]
body:
  - type: markdown
    attributes:
      value: >
        ### Thank you for filling out this report!
        
        Before you start, please [check for similar issues](https://github.com/SuperLlama88888/holoprint/issues) to avoid duplicates!
  - type: textarea
    id: description
    attributes:
      label: Describe your issue
      description: Explain anything specific to your issue.
  - type: textarea
    id: structurefile
    attributes:
      label: Attach structure file
      description: Add a structure file (`.mcstructure`) that causes this issue here.
    validations:
      required: true
  - type: textarea
    id: logs
    attributes:
      label: Attach logs
      description: Press "Download all logs" and attach `holoprint_logs.json` here.
    validations:
      required: true
  - type: input
    id: version
    attributes:
      label: HoloPrint version
      description: What version of HoloPrint are you using?
      placeholder: v1.x.x
    validations:
      required: true
  - type: dropdown
    id: os
    attributes:
      label: Operating system
      description: What type of device are you on?
      options:
        - (Unselected)
        - Android
        - Windows
        - Linux (any)
        - macOS
        - iOS / iPadOS
        - Other
    validations:
      required: true
  - type: dropdown
    id: browser
    attributes:
      label: Browser
      description: Which web browser are you using?
      options:
        - (Unselected)
        - Chrome
        - Safari
        - Edge
        - Firefox
        - Samsung Internet
        - Opera
        - Other
    validations:
      required: true
  - type: checkboxes
    attributes:
      label: I have checked for similar issues
      description: This issue may have been reported already. Please [check for similar issues](https://github.com/SuperLlama88888/holoprint/issues) to avoid duplicates!
      options:
        - label: I have looked for similar issues
          required: true
    validations:
      required: true
  - type: markdown
    attributes:
      value: "### Thank you for using HoloPrint! Your issue will be attended to quickly."
```

## File: .github/ISSUE_TEMPLATE/2-broken-block.yml
```yaml
name: Bug report - broken block
description: A block doesn't display correct in the hologram
title: "Broken block: BLOCK NAME"
labels: ["broken block", "bug"]
body:
  - type: markdown
    attributes:
      value: >
        ### Thank you for filling out this report!
        
        Before you start, please [check for similar issues](https://github.com/SuperLlama88888/holoprint/issues) to avoid duplicates!
  - type: input
    id: blockname
    attributes:
      label: Block name
      description: What block is broken?
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Description
      description: If some things need explanation, describe them here.
  - type: textarea
    id: screenshots
    attributes:
      label: "Optional: Attach screenshots"
      description: Upload screenshots of the broken block.
  - type: textarea
    id: pack
    attributes:
      label: "Optional: Attach HoloPrint pack"
      description: To help this bug get fixed faster, upload a HoloPrint pack with the broken block in it.
  - type: input
    id: version
    attributes:
      label: HoloPrint version
      description: What version of HoloPrint are you using?
      placeholder: v1.x.x
    validations:
      required: true
  - type: input
    id: mcversion
    attributes:
      label: Minecraft version
      description: What version of Minecraft are you playing on?
      placeholder: 1.x.x
    validations:
      required: true
  - type: checkboxes
    attributes:
      label: I have checked for similar issues
      description: This issue may have been reported already. Please [check for similar issues](https://github.com/SuperLlama88888/holoprint/issues) to avoid duplicates!
      options:
        - label: I have looked for similar issues
          required: true
    validations:
      required: true
  - type: markdown
    attributes:
      value: "### Thank you for using HoloPrint! Your issue will be attended to quickly."
```

## File: .github/ISSUE_TEMPLATE/3-feature-request.yml
```yaml
name: Feature request
description: Suggest anything you'd like to be added to HoloPrint
title: "Enhancement: "
labels: ["enhancement"]
body:
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Describe everything related to your feature request here
    validations:
      required: true
  - type: markdown
    attributes:
      value: "### Thank you for filling out this report! Your feature request will be looked at shortly."
```

## File: .github/ISSUE_TEMPLATE/config.yml
```yaml
blank_issues_enabled: true
contact_links:
  - name: HoloPrint Wiki - FAQ
    about: Any questions? Check out the FAQ on the HoloPrint Wiki first!
    url: https://holoprint-mc.github.io/wiki/faq
```

## File: .github/workflows/automatedTesting.yml
```yaml
name: Automated Testing
on:
  pull_request:
    branches:
      - main
  workflow_dispatch:
permissions: read-all
jobs:
  validate-json-data:
    name: Validate JSON Data
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v7.0.1
      - name: Setup Node
        uses: actions/setup-node@v7
        with:
          cache: npm
      - name: Validate JSON Data
        run: |
          npm ci -w validate_json_data
          npm run test -w validate_json_data
  check-block-translation-coverage:
    name: Check Block Translation Coverage
    needs: validate-json-data
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v7.0.1
      - name: Setup Node
        uses: actions/setup-node@v7
        with:
          cache: npm
      - name: Check block translation coverage
        run: |
          npm ci -w check_block_translation_coverage
          npx puppeteer browsers install firefox
          npm run test -w check_block_translation_coverage -- firefox
  test-sample-structures:
    name: Test Sample Structures
    needs: [validate-json-data, check-block-translation-coverage]
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [Chrome, Firefox]
      fail-fast: false
    steps:
      - name: Checkout repository
        uses: actions/checkout@v7.0.1
      - name: Setup Node
        uses: actions/setup-node@v7
        with:
          cache: npm
      - name: Test Sample Structures on ${{ matrix.browser }}
        run: |
          npm ci -w pipeline -w test_sample_structures
          if [[ "${{ matrix.browser }}" == "Firefox" ]]; then
            npx puppeteer browsers install firefox
          fi
          npm run test -w test_sample_structures -- ${{ matrix.browser }}
      - name: Upload built code
        if: always() && matrix.browser == 'Firefox'
        uses: actions/upload-artifact@v7.0.1
        with:
          name: build
          path: dist
      - name: Upload completed packs as artifacts
        if: always()
        uses: actions/upload-artifact@v7.0.1
        with:
          name: completed_packs_${{ matrix.browser }}
          path: tests/completedPacks
      - name: Upload screenshots as artifacts
        if: always() && matrix.browser == 'Chrome'
        uses: actions/upload-artifact@v7.0.1
        with:
          name: screenshots_${{ matrix.browser }}
          path: tests/screenshots
      - name: Upload GLB models as artifacts
        if: always() && matrix.browser == 'Chrome'
        uses: actions/upload-artifact@v7.0.1
        with:
          name: glb_models_${{ matrix.browser }}
          path: tests/glbModels
```

## File: .github/workflows/buildAndDeploy.yml
```yaml
name: Build and Deploy
on:
  push:
    tags:
      - 'v[0-9]+.[0-9]+.[0-9]+'
  workflow_dispatch:
permissions: read-all
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v7.0.1
      - name: Setup Node
        uses: actions/setup-node@v7
        with:
          cache: npm
      - name: Build
        run: |
          npm ci -w pipeline
          npm run build -- -- --version="$GITHUB_REF_NAME"
      - name: Upload files as artifact
        uses: actions/upload-pages-artifact@v5
        with:
          path: dist/
  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.repository == 'HoloPrint-MC/holoprint-mc.github.io'
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
  update-fork:
    name: Update Fork (HoloPrint-MC)
    needs: build
    runs-on: ubuntu-latest
    if: github.repository == 'SuperLlama88888/holoprint'
    steps:
      - name: Trigger workflow in fork
        uses: actions/github-script@v9
        with:
          github-token: ${{ secrets.PAT }}
          script: |
            let res = await github.rest.actions.createWorkflowDispatch({
              owner: 'HoloPrint-MC',
              repo: 'holoprint-mc.github.io',
              workflow_id: 'updateFromUpstream.yml',
              ref: 'main'
            });
            console.log(`Fork upstream fetching workflow triggered with status ${res.status}`);
```

## File: .github/workflows/deployRedirectPage.yml
```yaml
name: Deploy Redirect Page
on:
  workflow_dispatch:
permissions: read-all
jobs:
  add-redirect-page:
    name: Add redirect page to https://holoprint-mc.github.io
    runs-on: ubuntu-latest
    if: github.repository == 'SuperLlama88888/holoprint'
    steps:
      - name: Add redirect page
        run: echo "<meta http-equiv='refresh' content='0;url=https://holoprint-mc.github.io'>" > index.html
      - name: Upload files as artifact
        uses: actions/upload-pages-artifact@v5
        with:
          path: .
  deploy:
    name: Deploy to GitHub Pages
    needs: add-redirect-page
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

## File: .github/workflows/updateFromUpstream.yml
```yaml
name: Update from Upstream
on:
  workflow_dispatch: # triggered by bundleAndDeploy.yml
permissions:
  contents: write
jobs:
  update:
    name: Update
    runs-on: ubuntu-latest
    if: github.repository == 'HoloPrint-MC/holoprint-mc.github.io'
    steps:
      - name: Checkout repository
        uses: actions/checkout@v7.0.1
        with:
          token: ${{ secrets.PAT }}
      - name: Fetch upstream
        run: |
          git remote add upstream https://github.com/SuperLlama88888/holoprint.git
          git fetch upstream --tags
          git push origin upstream/main:main
          git push origin --tags
```

## File: .github/CODEOWNERS
```
* @SuperLlama88888
```

## File: pipeline/build.js
```javascript
import * as path from "node:path";
import * as fs from "node:fs";

import * as esbuild from "esbuild";
import { minify as minifyHTML } from "html-minifier-next";
import browserslist from "browserslist";
import { transform, browserslistToTargets, bundle } from "lightningcss";
import minifyJSON from "jsonminify";

const srcDir = "src";
const distDir = "dist";

const versionParamName = "--version=";
const exportHoloPrintLibFlagName = "--export-holoprint-lib";

const buildVersion = process.argv.find(arg => arg.startsWith(versionParamName))?.slice(versionParamName.length) ?? "testing";
const exportHoloPrintLib = process.argv.includes(exportHoloPrintLibFlagName);

const cssTargets = browserslistToTargets(browserslist(">= 0.1%"));
const importMapPattern = /<script type="importmap">([^]+?)<\/script>/;

process.chdir(path.resolve(import.meta.dirname, "../"));
rmDir("temp");
fs.cpSync(srcDir, "temp", {
	recursive: true
});
try {
	await processDir("temp");
	rmDir(distDir);
	fs.cpSync("temp", distDir, {
		recursive: true,
		filter: filename => shouldBeCopiedFromTempToDist(filename) && !(fs.statSync(filename).isDirectory() && fs.readdirSync(filename).every(file => !shouldBeCopiedFromTempToDist(file)))
	});

	let importMapJSON = fs.readFileSync(`${distDir}/index.html`, "utf-8").match(importMapPattern)[1];
	let externalModules = Object.keys(JSON.parse(importMapJSON)["imports"]);
	let { metafile } = esbuild.buildSync({
		absWorkingDir: process.cwd(),
		entryPoints: ["temp/index.js", "temp/styles/index.css"],
		bundle: true,
		external: externalModules,
		dropLabels: ["TS"],
		minify: true,
		format: "esm",
		outdir: distDir,
		entryNames: "[dir]/[name]-[hash]",
		assetNames: "[dir]/[name]-[hash]",
		loader: {
			".molang.js": "copy", // don't process these files at all, treat them as assets
			".css": "copy" // lightningcss already handles minification and bundling, so esbuild just needs to append the hashes to the file names
		},
		sourcemap: true,
		metafile: true
	});
	rmDir("temp");
	console.log(esbuild.analyzeMetafileSync(metafile));
	let scriptImportReplacements = [];
	Object.entries(metafile["outputs"]).forEach(([output, { entryPoint }]) => {
		if(entryPoint) {
			scriptImportReplacements.push([entryPoint.replace("temp/", ""), output.replace(distDir + "/", "")]);
		}
	});
	fs.readdirSync(distDir).forEach(filename => {
		if(path.extname(filename) == ".html") {
			let filepath = path.join(distDir, filename);
			let html = fs.readFileSync(filepath, "utf-8");
			scriptImportReplacements.forEach(([oldName, newName]) => {
				let regExp = new RegExp(`\\b${oldName.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
				html = html.replaceAll(regExp, newName);
			});
			if(importMapPattern.test(html)) {
				html = html.replace(importMapPattern, (_, importMapJSON) => addImportReplacementsToImportMap(JSON.parse(importMapJSON), scriptImportReplacements));
			} else {
				let importMapScript = addImportReplacementsToImportMap({}, scriptImportReplacements);
				if(html.includes("</head>")) {
					html = html.replace("</head>", `${importMapScript}</head>`);
				} else {
					html += importMapScript;
				}
			}
			fs.writeFileSync(filepath, html);
		}
	});
} finally {
	rmDir("temp");
}

/**
 * @param {string} dir
 */
async function processDir(dir) {
	let directoryContents = fs.readdirSync(dir);
	await Promise.all(directoryContents.map(async filename => {
		let filepath = path.join(dir, filename);
		let stats = fs.statSync(filepath);
		if(stats.isDirectory()) {
			await processDir(filepath);
		} else {
			let processingFunction = findProcessingFunction(filepath);
			if(processingFunction) {
				let fileContent = fs.readFileSync(filepath, "utf-8");
				let { code, sourceMap } = await processingFunction(fileContent, filename, filepath);
				fs.writeFileSync(filepath, code);
				if(sourceMap) {
					fs.writeFileSync(filepath + ".map", sourceMap);
				}
			}
		}
	}));
}
/**
 * @param {string} filename
 * @returns {((code: string, filename: string, filepath: string) => MaybePromise<{ code: string, sourceMap?: string }>) | undefined}
 */
function findProcessingFunction(filename) {
	let fileExtension = path.extname(filename);
	switch (fileExtension) {
		case ".html": return processHTML;
		case ".css": return processCSS;
		case ".js": return processJS;
		case ".json":
		case ".material":
		case ".webmanifest": return processJSON;
	}
}

/**
 * @param {string} code
 * @returns {Promise<{ code: string }>}
 */
async function processHTML(code) {
	code = code.replaceAll(/<script type="(importmap|application\/ld\+json)">([^]+?)<\/script>/g, (_, scriptType, json) => `<script type="${scriptType}">${processJSON(json).code}</script>`);
	code = await minifyHTML(code, {
		removeComments: true,
		collapseWhitespace: true,
		collapseBooleanAttributes: true,
		sortAttributes: true,
		sortClassNames: true,
		minifyCSS: css => processCSS(css).code,
		inlineCustomElements: ["vec-3-input", "slot", "span"]
	});
	return { code };
}
/**
 * @overload
 * @param {string} code
 * @returns {{ code: string }}
 */
/**
 * @overload
 * @param {string} code
 * @param {string} filename
 * @param {string} filepath
 * @returns {{ code: string, sourceMap: string }}
 */
/**
 * @param {string} code
 * @param {string} [filename]
 * @param {string} [filepath]
 * @returns {{ code: string, sourceMap?: string }}
 */
function processCSS(code, filename, filepath) {
	if(filename) {
		let { code: codeBytes, map: sourceMapBytes } = bundle({
			filename: filepath,
			minify: true,
			targets: cssTargets,
			sourceMap: true
		});
		code = `${(new TextDecoder()).decode(codeBytes)}\n/*# sourceMappingURL=${filename}.map */`;
		let sourceMap = (new TextDecoder()).decode(sourceMapBytes);
		return { code, sourceMap };
	} else {
		let { code: codeBytes } = transform({
			filename: "Inline CSS in <style>",
			minify: true,
			code: (new TextEncoder()).encode(code),
			targets: cssTargets
		});
		code = (new TextDecoder()).decode(codeBytes);
		return { code };
	}
}
/**
 * @param {string} code
 * @param {string} filename
 * @returns {Promise<{ code: string }>}
 */
async function processJS(code, filename) {
	code = code.replace("const IN_PRODUCTION = false;", "const IN_PRODUCTION = true;");
	if(filename == "HoloPrint.js") {
		code = code.replace(`const VERSION = "dev";`, `const VERSION = "${buildVersion}";`);
	} else if(filename == "index.js") {
		if(exportHoloPrintLib) {
			code = `export * from "./HoloPrint.js";` + code;
		}
	}
	code = await replaceAllAsync(code, /html`([^]+?)`/g, async (_, html) => "`" + (await processHTML(html)).code + "`");
	return { code };
}
/**
 * @param {string} code
 * @returns {{ code: string }}
 */
function processJSON(code) {
	code = minifyJSON(code);
	return { code };
}

/** @param {string} dir */
function rmDir(dir) {
	if(fs.existsSync(dir)) {
		fs.rmSync(dir, {
			recursive: true
		});
	}
}

/**
 * @param {string} filename
 * @returns {boolean}
 */
function shouldBeCopiedFromTempToDist(filename) {
	const filesProcessedByEsbuildOrOtherwiseUnneeded = [".js", ".css", ".css.map", ".glsl", ".ts"];
	return !filesProcessedByEsbuildOrOtherwiseUnneeded.some(ext => filename.endsWith(ext)) || path.basename(filename) == "index.css.map"
}
/**
 * @param {object} importMap
 * @param {[string, string][]} scriptImportReplacements
 * @returns {string}
 */
function addImportReplacementsToImportMap(importMap, scriptImportReplacements) {
	importMap["imports"] ??= {};
	scriptImportReplacements.forEach(([oldName, newName]) => {
		if(path.extname(oldName) == ".js") {
			importMap["imports"][`./${oldName}`] = `./${newName}`;
		}
	});
	return `<script type="importmap">${JSON.stringify(importMap)}</script>`;
}
/**
 * @param {string} str
 * @param {RegExp} regexp
 * @param {(substring: string, ...args: string[]) => Promise<string>} replacer
 * @returns {Promise<string>}
 */
async function replaceAllAsync(str, regexp, replacer) {
	/** @type {Promise<string>[]} */
	let promises = [];
	str.replaceAll(regexp, (substring, ...args) => {
		promises.push(replacer(substring, ...args));
		return substring;
	});
	let replacements = await Promise.all(promises);
	return str.replaceAll(regexp, () => replacements.shift());
}

/** @import { MaybePromise } from "./types.ts" */
```

## File: pipeline/package.json
```json
{
	"name": "pipeline",
	"type": "module",
	"scripts": {
		"build": "node build.js"
	},
	"devDependencies": {
		"@types/node": "^26.1.1",
		"browserslist": "^4.24.5",
		"esbuild": "0.28.1",
		"html-minifier-next": "^7.5.1",
		"jsonminify": "^0.4.2",
		"lightningcss": "^1.30.0"
	}
}
```

## File: pipeline/tsconfig.json
```json
{
	"extends": "../tsconfig.json",
	"compilerOptions": {
		"types": ["node"]
	},
	"include": ["*.js"]
}
```

## File: pipeline/types.ts
```typescript
export type MaybePromise<T> = Promise<T> | T;
```

## File: src/assets/MaterialSymbols.LICENSE.txt
```
Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

## File: src/assets/translate_icon.svg
```xml
<!-- Adapted from https://www.svgrepo.com/svg/535472/language -->
<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H6V2H10V4H8.86807C8.57073 5.66996 7.78574 7.17117 6.6656 8.35112C7.46567 8.73941 8.35737 8.96842 9.29948 8.99697L10.2735 6H12.7265L15.9765 16H13.8735L13.2235 14H9.77647L9.12647 16H7.0235L8.66176 10.9592C7.32639 10.8285 6.08165 10.3888 4.99999 9.71246C3.69496 10.5284 2.15255 11 0.5 11H0V9H0.5C1.5161 9 2.47775 8.76685 3.33437 8.35112C2.68381 7.66582 2.14629 6.87215 1.75171 6H4.02179C4.30023 6.43491 4.62904 6.83446 4.99999 7.19044C5.88743 6.33881 6.53369 5.23777 6.82607 4H0V2H4V0ZM12.5735 12L11.5 8.69688L10.4265 12H12.5735Z" fill="#000"/></svg>
```

## File: src/components/FileInputTable.js
```javascript
import { clamp, createSymbolicEnum, dispatchInputEvents, downloadFile, fileArrayToFileList, html, isTouchInElementVerticalBounds, max, min, onEvent, onEvents, removeFileExtension, selectEl, selectEls, sleep } from "../utils.js";

export default class FileInputTable extends HTMLElement {
	/** If files in the file input have this flag, the download button will be visible. */
	static SHOW_DOWNLOAD_BUTTON = Symbol("FileInputTable.SHOW_DOWNLOAD_BUTTON");
	static observedAttributes = ["file-count-text", "empty-text", "remove-all-text", "hide-file-extensions"];
	
	static #IGNORE_EVENT = Symbol("FileInputTable.#IGNORE_EVENT");
	static #ANIMATION_MOVEMENTS = createSymbolicEnum(["MOVE_DOWN", "MOVE_UP"]);
	static #ANIMATION_LENGTH = 400;
	
	/** @type {HTMLInputElement} */
	fileInput;
	/** @type {HTMLTableElement} */
	#table;
	/** @type {HTMLParagraphElement} */
	#fileCountHeading;
	/** @type {HTMLTableRowElement | null} */
	#rowBeingDragged;
	/** @type {number} */
	#touchDragVerticalOffset;
	/** @readonly @type {WeakMap<HTMLTableRowElement, File>} */
	#filesByRow = new WeakMap();
	
	constructor() {
		super();
		this.attachShadow({
			mode: "open"
		});
	}
	connectedCallback() {
		if(this.childElementCount != 1 || !(this.children[0] instanceof HTMLInputElement) || this.children[0].type != "file") {
			throw new Error("FileInputTable elements need exactly 1 child: a file input!");
		}
		this.fileInput = this.children[0];
		this.#initShadowDom();
		this.fileInput[onEvent]("input", e => {
			if(e instanceof CustomEvent && e.detail?.[FileInputTable.#IGNORE_EVENT]) {
				return;
			}
			this.#updateTable();
		});
		
		this.#updateTable();
	}
	attributeChangedCallback(attrName, _, newValue) {
		let elBoundToAttr = this.shadowRoot[selectEl](`[data-text-attribute="${attrName}"]`);
		if(elBoundToAttr) {
			elBoundToAttr.textContent = newValue;
			return;
		}
		if(!this.#table) {
			return;
		}
		switch(attrName) {
			case "file-count-text":
			case "empty-text": {
				this.#updateFileCountHeading();
				break;
			}
			case "hide-file-extensions": {
				this.#updateTable();
				break;
			}
		}
	}
	
	#initShadowDom() {
		this.shadowRoot.innerHTML = html`
			<style>
				:host {
					display: block;
					width: 100%;
				}
				#main {
					margin: auto;
					width: 70%;
					border: 4px ridge #ADADAD;
					& > * {
						width: 100%;
					}
				}
				@supports (-webkit-text-zoom: normal) { /* Exclusively target WebKit browsers (i.e. Safari) because different styling is needed there. I found this property by looking at https://caniuse.com/?search=-webkit to find webkit-only properties, and -webkit-text-zoom is the ONLY one that's only ever been supported in WebKit. 'Documentation' for this property can be found at https://webkit.org/css-status/#?search=-webkit-text-zoom. A larger list of -webkit- properties can be found at https://developer.mozilla.org/en-US/docs/Web/CSS/WebKit_Extensions. */
					#main {
						border-color: #626262;
					}
				}
				#fileCountHeadingWrapper {
					margin: 0;
					padding: 1px 1px 1px 3px;
					height: 22px;
					box-sizing: border-box;
					background: #0000002B;
				}
				#fileCountHeading {
					font-weight: bold;
					font-size: 1em;
				}
				#removeAllFilesButton {
					padding: 0 4px;
					float: right;
					height: 100%;
					box-sizing: border-box;
					background: #00000028;
					border: 1px solid black;
					border-radius: 7px;
					font-family: inherit;
					line-height: inherit;
					font-size: smaller;
					cursor: pointer;
					transition: transform 0.15s;
					
					.material-symbols {
						font-size: 120%;
						vertical-align: top;
						display: inline-block;
						width: 1ch;
					}
					&:hover {
						transform: scale(1.05);
					}
					&:active {
						transform: scale(1.02);
					}
				}
				button {
					color: inherit;
				}
				table {
					border-collapse: collapse;
					table-layout: fixed;
				}
				tr {
					&:only-child .dragMoveCell {
						opacity: 0; /* silly css bug in both firefox and chrome: the background of the <tr> won't show when the last <td> is hidden. 0 opacity works though. */
						cursor: initial;
					}
					&:nth-child(2n + 1) {
						background: #0001;
					}
					&.beingDragged {
						position: relative;
						background: #00000028;
						transition: background 0.1s;
					}
					&:not(:only-child):not(.beingDeleted) .dragMoveCell {
						cursor: grab;
						&:active {
							cursor: grabbing;
						}
					}
				}
				td {
					&:first-child {
						padding: 0 3px;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					&:last-child {
						user-select: none;
						padding: 0;
						width: calc(1.265rem * 3);
					}
					.buttonsCont {
						height: 24px;
						display: flex;
						* {
							width: 1.265rem;
							height: 24px;
							font-size: 115%;
							transition: font-size 0.1s;
							text-align: center;
						}
					}
					button {
						padding: 0;
						border: none;
						background: none;
						cursor: pointer;
						&:not(.dragMoveCell):active {
							font-size: 90%;
						}
					}
				}
				.material-symbols {
					font-family: "Material Symbols";
					line-height: 1;
				}
				.invisible {
					visibility: hidden !important;
				}
			</style>
			<div id="main">
				<p id="fileCountHeadingWrapper"><span id="fileCountHeading"></span><button id="removeAllFilesButton"><span data-text-attribute="remove-all-text">Remove all</span> <span translate="no" class="material-symbols">delete_sweep</span></button></p>
				<table translate="no"></table>
			</div>
		`;
		this.#fileCountHeading = this.shadowRoot[selectEl]("#fileCountHeading");
		let removeAllFilesButton = this.shadowRoot[selectEl]("#removeAllFilesButton");
		this.#table = this.shadowRoot[selectEl]("table");
		
		this.#updateFileCountHeading();
		this.#updateHasFilesAttribute();
		let tableObserver = new MutationObserver(() => {
			this.#updateFileCountHeading();
			this.#updateHasFilesAttribute();
		});
		tableObserver.observe(this.#table, {
			childList: true,
			subtree: true
		});
		
		removeAllFilesButton[onEvent]("click", async () => {
			for(let button of this.#table[selectEls](".deleteButton")) {
				button.click();
				await sleep(FileInputTable.#ANIMATION_LENGTH * 0.15);
			}
		});
		
		this.#table.addEventListener("click", e => {
			if(!(e.target instanceof HTMLButtonElement)) {
				return;
			}
			let row = e.target.closest("tr");
			if(e.target.classList.contains("downloadButton")) {
				this.#downloadFile(row);
			} else if(e.target.classList.contains("deleteButton")) {
				this.#deleteRow(row);
			} else {
				return;
			}
			this.#updateFileInput();
		});
		this.#table[onEvents](["dragstart", "touchstart"], e => {
			if(!(e.target instanceof Element)) {
				return;
			}
			if(e.target.classList.contains("dragMoveCell") && getComputedStyle(e.target).opacity != "0") {
				let row = e.target.closest("tr");
				if(row.classList.contains("beingDeleted")) {
					e.preventDefault();
					return;
				}
				this.#rowBeingDragged = row;
				this.#rowBeingDragged.classList.add("beingDragged");
				if(e instanceof DragEvent) {
					e.dataTransfer.effectAllowed = "move";
					e.dataTransfer.dropEffect = "move";
					e.dataTransfer.setDragImage(this.#rowBeingDragged.cells[0], 0, 0);
				} else {
					this.#touchDragVerticalOffset = e.changedTouches[0].clientY;
				}
			}
		}, {
			passive: false
		});
		this.#table[onEvents](["dragover", "touchmove"], e => {
			if(!this.#rowBeingDragged) {
				return;
			}
			if(!(e.target instanceof Element)) {
				return;
			}
			e.preventDefault();
			let targetRow;
			if(e instanceof DragEvent) {
				targetRow = e.target.closest("tr");
			} else {
				let touch = e.changedTouches[0];
				if(isTouchInElementVerticalBounds(touch, this.#table)) {
					targetRow = Array.from(this.#table.rows).find(row => row != this.#rowBeingDragged && isTouchInElementVerticalBounds(touch, row));
				}
			}
			if(targetRow && targetRow != this.#rowBeingDragged && !targetRow.getAnimations().length) {
				let initialY = this.#rowBeingDragged.offsetTop;
				if(this.#rowBeingDragged.rowIndex < targetRow.rowIndex) {
					for(let rowI = this.#rowBeingDragged.rowIndex + 1; rowI <= targetRow.rowIndex; rowI++) {
						this.#animateRow(this.#table.rows[rowI], FileInputTable.#ANIMATION_MOVEMENTS.MOVE_UP, false);
					}
					targetRow.after(this.#rowBeingDragged);
					this.#animateRow(this.#rowBeingDragged, e.type == "dragover"? FileInputTable.#ANIMATION_MOVEMENTS.MOVE_DOWN : undefined);
				} else {
					for(let rowI = targetRow.rowIndex; rowI < this.#rowBeingDragged.rowIndex; rowI++) {
						this.#animateRow(this.#table.rows[rowI], FileInputTable.#ANIMATION_MOVEMENTS.MOVE_DOWN, false);
					}
					targetRow.before(this.#rowBeingDragged);
					this.#animateRow(this.#rowBeingDragged, e.type == "dragover"? FileInputTable.#ANIMATION_MOVEMENTS.MOVE_UP : undefined);
				}
				let deltaY = this.#rowBeingDragged.offsetTop - initialY;
				this.#touchDragVerticalOffset += deltaY;
				this.#updateFileInput();
			}
			if(e instanceof TouchEvent) {
				let currentOffset = parseFloat(this.#rowBeingDragged.style.top) || 0;
				let tableBounds = this.#table.getBoundingClientRect();
				let rowBounds = this.#rowBeingDragged.getBoundingClientRect();
				let lowest = min(tableBounds.top - (rowBounds.top - currentOffset), 0);
				let highest = max(tableBounds.bottom - (rowBounds.bottom - currentOffset), 0);
				let y = clamp(e.changedTouches[0].clientY - this.#touchDragVerticalOffset, lowest, highest);
				this.#rowBeingDragged.style.top = `${y}px`;
			}
		}, {
			passive: false
		});
		this.#table[onEvents](["dragend", "touchend", "touchcancel"], () => {
			if(this.#rowBeingDragged) {
				this.#rowBeingDragged.classList.remove("beingDragged");
				this.#rowBeingDragged.style.left = "";
				this.#rowBeingDragged.style.top = "";
				this.#rowBeingDragged = null;
			}
		});
	}
	/**
	 * Updates the table to show all files selected.
	 */
	#updateTable() {
		let alreadyHadRows = this.#table.rows.length > 0; // don't animate new files added if they're the first files added
		let oldFiles = alreadyHadRows && new Set(Array.from(this.#table.rows).map(row => this.#filesByRow.get(row)));
		this.#table.textContent = "";
		Array.from(this.fileInput.files).forEach(file => {
			let row = this.#table.insertRow();
			this.#filesByRow.set(row, file);
			let fileNameCell = row.insertCell();
			fileNameCell.textContent = this.hasAttribute("hide-file-extensions") && file.name.lastIndexOf(".") != 0? removeFileExtension(file.name) : file.name;
			this.#addGenericRowButtons(row, file);
			if(alreadyHadRows && !oldFiles.has(file)) {
				this.#animateRow(row);
			}
		});
	}
	#updateFileCountHeading() {
		if(this.fileInput.files.length) {
			let countText = this.getAttribute("file-count-text") ?? "{COUNT} file[s] selected";
			let pluralizedCountText = this.fileInput.files.length > 1? countText.replaceAll(/\[|\]/g, "") : countText.replaceAll(/\[.+\]/g, "");
			this.#fileCountHeading.textContent = pluralizedCountText.replace("{COUNT}", this.fileInput.files.length.toString());
		} else {
			this.#fileCountHeading.textContent = this.getAttribute("empty-text") ?? "No files are selected";
		}
	}
	#updateHasFilesAttribute() {
		if(this.fileInput.files.length) {
			this.setAttribute("has-files", ""); // An earlier iteration of this used custom states with ElementInternals. This allowed for the CSS to be :state(has-files) rather than [has-files]. However, it's too modern and wouldn't have worked on old browsers.
		} else {
			this.removeAttribute("has-files");
		}
	}
	/**
	 * Adds all the control buttons to a table row.
	 * @param {HTMLTableRowElement} row
	 * @param {File} file
	 */
	#addGenericRowButtons(row, file) {
		row.insertAdjacentHTML("beforeend", html`
			<td>
				<div class="buttonsCont">
					<button class="downloadButton material-symbols invisible">download</button>
					<button class="deleteButton material-symbols">delete</button>
					<button draggable="true" class="dragMoveCell material-symbols">drag_indicator</button>
				</div>
			</td>
		`);
		if(file[FileInputTable.SHOW_DOWNLOAD_BUTTON]) {
			row[selectEl](".downloadButton").classList.remove("invisible");
		}
	}
	#updateFileInput() {
		let files = Array.from(this.#table.rows).filter(row => !row.classList.contains("beingDeleted")).map(row => this.#filesByRow.get(row));
		this.fileInput.files = fileArrayToFileList(files);
		dispatchInputEvents(this.fileInput, {
			[FileInputTable.#IGNORE_EVENT]: true
		});
		this.#updateFileCountHeading();
	}
	/**
	 * Plays a small movement animation on a row.
	 * @param {HTMLTableRowElement} row
	 * @param {Symbol | undefined} [movement]
	 * @param {boolean} [highlight]
	 */
	#animateRow(row, movement, highlight = true) {
		/** @type {Keyframe} */
		let startingFrame = {};
		if(movement) {
			let rowHeight = row.getBoundingClientRect().height;
			let offset = rowHeight * (movement == FileInputTable.#ANIMATION_MOVEMENTS.MOVE_DOWN? -1 : 1);
			startingFrame = {
				transform: `translateY(${offset}px)`,
				composite: "add"
			};
		}
		if(highlight) {
			const middleFrame = {
				transform: "scale(1.08)",
				boxShadow: "0 0 5px #0008"
			};
			for(let i = 0; i < 2; i++) { // more emphasis when done twice
				row.animate([
					i == 0? startingFrame : {},
					{
						...middleFrame,
						offset: 0.3
					},
					{
						...middleFrame,
						offset: 0.7
					},
					{}
				], {
					duration: FileInputTable.#ANIMATION_LENGTH,
					easing: "ease"
				});
			}
		} else {
			row.animate([startingFrame, {}], {
				duration: FileInputTable.#ANIMATION_LENGTH * 0.3,
				easing: "ease"
			});
		}
	}
	/** @param {HTMLTableRowElement} row */
	#downloadFile(row) {
		downloadFile(this.#filesByRow.get(row))
	}
	/**
	 * Deletes the row and plays an animation.
	 * @param {HTMLTableRowElement} row
	 */
	async #deleteRow(row) {
		if(row.classList.contains("beingDeleted")) {
			return;
		}
		row.classList.add("beingDeleted");
		let deleteAnimation = row.animate({
			opacity: [1, 0]
		}, {
			duration: FileInputTable.#ANIMATION_LENGTH,
			easing: "cubic-bezier(0.165, 0.84, 0.44, 1)"
		});
		await deleteAnimation.finished;
		for(let rowI = row.rowIndex + 1; rowI < this.#table.rows.length; rowI++) {
			this.#animateRow(this.#table.rows[rowI], FileInputTable.#ANIMATION_MOVEMENTS.MOVE_UP, false);
		}
		let rowHeight = row.getBoundingClientRect().height;
		this.#table.animate({
			marginBottom: [rowHeight + "px", "0"]
		}, {
			duration: FileInputTable.#ANIMATION_LENGTH * 0.3,
			easing: "ease",
			composite: "add"
		});
		row.remove();
	}
}
```

## File: src/components/ItemCriteriaInput.js
```javascript
import { assertAs, html, htmlCodeToElement, onEvent, onEventAndNow, selectEl, selectEls } from "../utils.js";
import * as HoloPrint from "../HoloPrint.js";
import fetchers from "../fetchers.js";

let itemsDatalistPromise = fetchers.vanillaData("metadata/vanilladata_modules/mojang-items.json").then(res => res.json()).then(mojangItems => {
	let itemNames = mojangItems["data_items"].map(item => item["name"].replace(/^minecraft:/, ""));
	let datalist = document.createElement("datalist");
	datalist.id = "itemNamesDatalist";
	datalist.append(...itemNames.map(itemName => new Option(itemName)));
	return datalist;
});
let itemTagsDatalistPromise = fetchers.bedrockData("item_tags.json").then(res => res.json()).then(data => {
	let itemTags = Object.keys(data).map(tag => tag.replace(/^minecraft:/, ""));
	let datalist = document.createElement("datalist");
	datalist.id = "itemTagsDatalist";
	datalist.append(...itemTags.map(tag => new Option(tag)));
	return datalist;
});

/** A custom item criteria input element. Translation files can be added by extending and setting translateCurrentLanguage. */
export default class ItemCriteriaInput extends HTMLElement {
	static formAssociated = true;
	static observedAttributes = ["value-items", "value-tags"];
	
	/** @readonly @type {ElementInternals} */
	internals;
	
	#connected = false;
	/** @readonly @type {((...args: any) => void)[]} */
	#tasksPendingConnection = [];
	/** @readonly @type {Function | undefined} */
	#translateCurrentLanguage;
	/** @type {HTMLLabelElement} */
	#criteriaInputsCont;
	
	/**
	 * @param {Function} [translateCurrentLanguage]
	 */
	constructor(translateCurrentLanguage) {
		super();
		this.#translateCurrentLanguage = translateCurrentLanguage;
		this.attachShadow({
			mode: "open"
		});
		this.internals = this.attachInternals();
	}
	connectedCallback() {
		if(this.#connected) {
			return;
		}
		this.#connected = true;
		
		this.tabIndex = 0;
		this.shadowRoot.innerHTML = html`
			<style>
				:host {
					display: block;
					padding-left: 15px;
					font-size: 0.8rem;
				}
				#criteriaInputs:empty::before {
					content: attr(data-empty-text);
				}
				button {
					background: color-mix(in srgb, var(--accent-col) 50%, white);
					cursor: pointer;
					font-family: inherit;
					line-height: inherit;
				}
				input, button {
					box-sizing: border-box;
					border-style: solid;
					border-color: var(--accent-col);
					outline-color: var(--accent-col);
					accent-color: var(--accent-col);
				}
				input {
					font-family: monospace;
				}
				input.itemNameInput, #addItemButton {
					--accent-col: #01808C;
				}
				input.itemTagInput, #addTagButton {
					--accent-col: #E6BE1A;
				}
				/* input:valid {
					--accent-col: #70B80B;
				} */
				input:invalid:not(:placeholder-shown) {
					--accent-col: #E24436;
				}
			</style>
			<label data-translate="item_criteria_input.matching">Matching:</label>
			<label id="criteriaInputs" data-empty-text="Nothing" data-translate-data-empty-text="item_criteria_input.nothing"></label>
			<button id="addItemButton">+ <span data-translate="item_criteria_input.item_name">Item name</span></button>
			<button id="addTagButton">+ <span data-translate="item_criteria_input.item_tag">Item tag</span></button>
		`;
		this.#criteriaInputsCont = this.shadowRoot[selectEl]("#criteriaInputs");
		this.shadowRoot[selectEl]("#addItemButton")[onEvent]("click", () => {
			this.#addNewInput("item");
		});
		this.shadowRoot[selectEl]("#addTagButton")[onEvent]("click", () => {
			this.#addNewInput("tag");
		});
		
		let task;
		while(task = this.#tasksPendingConnection.shift()) {
			task();
		}
		
		this.#criteriaInputsCont[onEventAndNow]("input", () => this.#reportFormState());
		this[onEvent]("focus", async e => {
			if(e.composedPath()[0] instanceof this.constructor) { // If this event was triggered from an element in the shadow DOM being .focus()ed, we don't want to focus something else
				(this.shadowRoot[selectEl]("input:invalid") ?? this.shadowRoot[selectEl]("input:last-child") ?? this.shadowRoot[selectEl]("#addItemButton")).focus();
			}
			this.shadowRoot.append(await itemsDatalistPromise, await itemTagsDatalistPromise);
		});
		this[onEvent]("blur", async () => { // remove empty inputs when focus is lost
			if(Array.from(this.#criteriaInputsCont[selectEls]("input")).filter(input => input.value.trim() == "").map(input => input.remove()).length) {
				this.#reportFormState();
				this.#removeConsecutiveOrSpacers();
			}
			this.shadowRoot.removeChild(await itemsDatalistPromise);
			this.shadowRoot.removeChild(await itemTagsDatalistPromise);
		});
	}
	attributeChangedCallback(...args) { // called for all attributes in the tag before connectedCallback(), so we schedule them to be handled later
		if(this.#connected) {
			this.#handleAttributeChange(...args);
		} else {
			this.#tasksPendingConnection.push(() => {
				this.#handleAttributeChange(...args);
			});
		}
	}
	formResetCallback() {
		this.value = this.getAttribute("default") ?? "{}";
	}
	get form() {
		return this.internals.form;
	}
	get name() {
		return this.getAttribute("name");
	}
	get type() {
		return this.localName;
	}
	get value() {
		let itemNames = Array.from(this.#criteriaInputsCont[selectEls](".itemNameInput")).map(input => input.value.trim());
		let tagNames = Array.from(this.#criteriaInputsCont[selectEls](".itemTagInput")).map(input => input.value.trim());
		return JSON.stringify(HoloPrint.createItemCriteria(itemNames, tagNames));
	}
	set value(stringifiedValue) {
		this.#criteriaInputsCont.innerHTML = "";
		let itemCriteria = JSON.parse(stringifiedValue.replaceAll("'", `"`));
		itemCriteria.names?.forEach(itemName => {
			this.#addNewInput("item", false, itemName);
		});
		itemCriteria.tags?.forEach(tagName => {
			this.#addNewInput("tag", false, tagName);
		});
	}
	
	#reportFormState() {
		this.internals.setFormValue(this.value);
		let allInputs = Array.from(this.#criteriaInputsCont[selectEls]("input"));
		if(allInputs.length == 0) {
			this.internals.setValidity({
				tooShort: true
			}, this.#translateCurrentLanguage?.("item_criteria_input.error.empty") ?? "Please enter item criteria");
		} else if(allInputs.some(el => !el.validity.valid)) {
			this.internals.setValidity({
				patternMismatch: true
			}, this.#translateCurrentLanguage?.("item_criteria_input.error.invalid") ?? "Invalid item/tag name");
		} else {
			this.internals.setValidity({});
		}
	}
	#handleAttributeChange(attrName, _, newValue) {
		let inputValue = JSON.parse(this.value);
		newValue = newValue.split(",");
		switch(attrName) {
			case "value-items": {
				inputValue.names = newValue;
			} break;
			case "value-tags": {
				inputValue.tags = newValue;
			} break;
		}
		this.value = JSON.stringify(inputValue);
	}
	#addNewInput(type, autofocus = true, initialValue) {
		const attributesByType = {
			item: `placeholder="Item name" list="itemNamesDatalist" class="itemNameInput" data-translate-placeholder="item_criteria_input.item_name"`,
			tag: `placeholder="Tag name" list="itemTagsDatalist" class="itemTagInput" data-translate-placeholder="item_criteria_input.item_tag"`
		}
		this.#criteriaInputsCont[selectEl](`input:last-child:placeholder-shown`)?.remove();
		let lastNode = Array.from(this.#criteriaInputsCont.childNodes).at(-1);
		if(lastNode && !(lastNode instanceof HTMLSpanElement)) {
			let orSpan = document.createElement("span");
			orSpan.dataset.translate = "item_criteria_input.or";
			orSpan.innerText = " or ";
			this.#criteriaInputsCont.appendChild(orSpan);
		}
		let newInput = htmlCodeToElement(`<input type="text" required pattern="^\\s*(\\w+:)?\\w+\\s*$" spellcheck="false" autocapitalize="off" ${attributesByType[type]}/>`);
		TS: assertAs(newInput, HTMLInputElement);
		newInput[onEvent]("keydown", this.#inputKeyDownEvent);
		if(initialValue != undefined) {
			newInput.value = initialValue;
		}
		this.#criteriaInputsCont.appendChild(newInput);
		if(autofocus) {
			newInput.focus();
		}
		this.#reportFormState();
	}
	#inputKeyDownEvent = e => { // must be arrow function to keep class scope
		if(e.target.value != "" && (e.key == "Tab" && !e.shiftKey && e.target == this.#criteriaInputsCont[selectEl]("input:last-child") || e.key == "Enter" || e.key == ",")) {
			e.preventDefault();
			this.#addNewInput(e.target.classList.contains("itemNameInput")? "item" : "tag");
			this.#reportFormState();
		} else if(e.key == "Backspace" && e.target.value == "") {
			e.preventDefault();
			e.target.remove();
			this.#removeConsecutiveOrSpacers();
			this.focus();
			this.#reportFormState();
		}
	};
	#removeConsecutiveOrSpacers() {
		Array.from(this.#criteriaInputsCont.children).forEach(node => {
			if(node instanceof HTMLSpanElement && (node.previousSibling instanceof HTMLSpanElement || node.nextSibling instanceof HTMLSpanElement || !node.previousSibling || !node.nextSibling)) {
				node.remove();
			}
		});
	}
}
```

## File: src/components/LilGui.js
```javascript
import { GUI } from "lil-gui";
import { cast, html, htmlCodeToElement, selectEls } from "../utils.js";

export default class LilGui extends HTMLElement {
	/** @type {HTMLStyleElement} */
	static #lilGuiStylesheet;
	
	/** @type {GUI} */
	gui;
	constructor() {
		super();
		this.attachShadow({
			mode: "open"
		});
	}
	connectedCallback() {
		let previousStyles = new Set(selectEls("head > style"));
		this.gui = new GUI({
			// @ts-expect-error
			container: this.shadowRoot
		});
		if(!LilGui.#lilGuiStylesheet) {
			LilGui.#lilGuiStylesheet = cast(Array.from(selectEls("head > style")).find(el => !previousStyles.has(el)), HTMLStyleElement);
			LilGui.#lilGuiStylesheet.remove();
		}
		this.shadowRoot.appendChild(LilGui.#lilGuiStylesheet.cloneNode(true));
		this.shadowRoot.appendChild(htmlCodeToElement(html`
			<style>
				:host {
					width: min(calc(100% - 80px), 245px);
				}
				.lil-gui {
					--font-family: "Space Grotesk", monospace;
					--widget-height: 20px !important;
					--spacing: 4px !important;
					--width: 100%;
					float: right;
				}
			</style>
		`));
	}
	disconnectedCallback() {
		this.gui.destroy();
	}
}
```

## File: src/components/ResizingInput.js
```javascript
import { measureText, onEventAndNow } from "../utils.js";

/** `<input/>` but automatically resizing to fit the width of the content. Must be written as `<input is="resizing-input"/>`. */
export default class ResizingInput extends HTMLInputElement {
	connectedCallback() {
		this[onEventAndNow]("input", () => {
			let textWidth = measureText(this.value || this.placeholder, getComputedStyle(this).font).width;
			this.style.width = 26 + textWidth + "px";
		});
	}
}
```

## File: src/components/SimpleLogger.js
```javascript
// Simple logger.
import { ceil, downloadFile, getStackTrace, html, onEvent, selectEl } from "../utils.js";

export default class SimpleLogger extends HTMLElement {
	/** @type {DOMHighResTimeStamp} */
	#originTime;
	
	/** @type {HTMLDivElement} */
	node;
	/** @readonly @type {object[]} */
	allLogs = [];
	
	/** @type {number} */
	#errorCount = 0;
	/** @type {number} */
	#warningCount = 0;
	
	/** @type {HTMLSpanElement} */
	#errorCountNode;
	/** @type {HTMLSpanElement} */
	#warningCountNode;
	
	constructor() {
		super();
		this.attachShadow({
			mode: "open"
		});
	}
	connectedCallback() {
		this.shadowRoot.innerHTML = html`
			<style>
				#root {
					margin: 15px;
					display: block;
					color: white;
					font-family: monospace;
					font-size: 14px;
					max-height: 300px;
					overflow: auto;
					text-align: left;
					position: relative;
				}
				.logHeader {
					padding: 2px 2px 2px 12px;
					position: sticky;
					top: 0;
					height: 20px;
					background: #556;
				}
				.logHeader span {
					margin-left: 30px;
				}
				#downloadLogsButton {
					background: inherit;
					border: 1px solid #CCC;
					border-radius: 7px;
					color: white;
					float: right;
					box-sizing: border-box;
					cursor: pointer;
					font: inherit;
				}
				#downloadLogsButton:hover {
					background: #4D4D5D;
				}
				#downloadLogsButton:active {
					background: #445;
				}
				.log {
					margin: 0;
					padding: 2px 12px;
					background: #223;
					overflow-wrap: break-word;
				}
				.log:nth-child(2n) {
					background: #334;
				}
				.warning > .logText::before {
					content: "⚠️";
				}
				.error > .logText::before {
					content: "🚨";
				}
				.info > .logText::before {
					content: "ℹ️";
				}
				.timestamp {
					margin-right: 5px;
					padding: 0 2px;
					background: #556;
					color: #CCC;
				}
			</style>
			<div id="root">
				<div class="logHeader">Logs<span id="errorCount">\u{1F6A8}0</span><span id="warningCount">\u26A0\uFE0F0</span><button type="button" id="downloadLogsButton">Download logs</button></div>
			</div>
		`;
		this.node = this.shadowRoot[selectEl]("#root");
		this.node[selectEl]("#downloadLogsButton")[onEvent]("click", () => {
			downloadFile(new File([JSON.stringify(this.allLogs)], "holoprint_logs.json"));
		});
		this.#warningCountNode = this.node[selectEl]("#warningCount");
		this.#errorCountNode = this.node[selectEl]("#errorCount");
		
		this.#originTime = performance.now();
	}
	warn(text) {
		if(this.#genericLogWithClass(text, "warning")) {
			this.#warningCountNode.innerText = `\u26A0\uFE0F${++this.#warningCount}`;
		}
	}
	error(text) {
		if(this.#genericLogWithClass(text, "error")) {
			this.#errorCountNode.innerText = `\u{1F6A8}${++this.#errorCount}`;
		}
	}
	info(text) {
		this.#genericLogWithClass(text, "info");
	}
	debug(text) {
		this.#genericLogWithClass(text, "debug");
	}
	setOriginTime(originTime) {
		this.#originTime = originTime;
	}
	#genericLogWithClass(text, logLevel) {
		let stackTrace = getStackTrace().slice(2);
		this.allLogs.push({
			text,
			level: logLevel,
			stackTrace,
			time: +(performance.now() - this.#originTime).toFixed(1)
		});
		if(logLevel == "debug") {
			return;
		}
		let currentURLOrigin = location.href.slice(0, location.href.lastIndexOf("/")); // location.origin is null on Firefox when on local files
		if(stackTrace.some(loc => /https?:\/\//.test(loc) && !loc.includes(currentURLOrigin) && !loc.includes("<anonymous>"))) {
			return;
		}
		let el = document.createElement("p");
		el.classList.add("log");
		if(logLevel) {
			el.classList.add(logLevel);
		}
		let timestamp = this.#createTimestamp();
		el.appendChild(timestamp);
		let textSpan = document.createElement("span");
		textSpan.classList.add("logText");
		textSpan.innerText = text;
		el.appendChild(textSpan);
		let shouldScrollToBottom = ceil(this.node.scrollTop + this.node.getBoundingClientRect().height) >= this.node.scrollHeight;
		this.node.appendChild(el);
		if(shouldScrollToBottom) {
			this.node.scrollTop = this.node.scrollHeight;
		}
		return true;
	}
	#createTimestamp() {
		let el = document.createElement("span");
		el.classList.add("timestamp");
		let d = new Date(performance.now() - this.#originTime);
		let text = `${d.getUTCMinutes().toString().padStart(2, "0")}:${d.getUTCSeconds().toString().padStart(2, "0")}.${d.getUTCMilliseconds().toString().padStart(3, "0")}`;
		if(d.getUTCHours() > 0) {
			text = `${d.getUTCHours().toString().padStart(2, "0")}:${text}`
		}
		el.innerText = text;
		return el;
	}
	
	patchConsoleMethods() {
		let [_warn, _error, _info, _debug] = [console.warn, console.error, console.info, console.debug];
		console.warn = (...args) => {
			this.warn(args.join(" "));
			return _warn.apply(console, [getStackTrace()[1].match(/\/([^\/]+\.[^\.]+:\d+:\d+)/)[1] + "\n", ...args]);
		};
		console.error = (...args) => {
			this.error(args.join(" "));
			return _error.apply(console, [getStackTrace()[1].match(/\/([^\/]+\.[^\.]+:\d+:\d+)/)[1] + "\n", ...args]);
		};
		console.info = (...args) => {
			this.info(args.join(" "));
			return _info.apply(console, [getStackTrace()[1].match(/\/([^\/]+\.[^\.]+:\d+:\d+)/)[1] + "\n", ...args]);
		};
		console.debug = (...args) => {
			this.debug(args.join(" "));
			return _debug.apply(console, [getStackTrace()[1].match(/\/([^\/]+\.[^\.]+:\d+:\d+)/)[1] + "\n", ...args]);
		};
	}
}
```

## File: src/components/Vec3Input.js
```javascript
import { dispatchInputEvents, flattenObject, html, onEvent, reduceProperties, selectEl, selectEls } from "../utils.js";

/** A custom input with three number inputs which must be assigned to the x, y, and z slots. */
export default class Vec3Input extends HTMLElement {
	static formAssociated = true;
	
	/** @readonly @type {ElementInternals} */
	internals;
	
	#connected = false;
	/** @type {HTMLFormElement} */
	#form;
	/** @readonly @type {[HTMLInputElement, HTMLInputElement, HTMLInputElement]} */
	#inputs;
	#canSetInputValues = false;
	
	constructor() {
		super();
		this.attachShadow({
			mode: "open"
		});
		this.internals = this.attachInternals();
	}
	connectedCallback() {
		if(this.#connected) {
			return;
		}
		this.#connected = true;
		
		this.tabIndex = 0;
		this.shadowRoot.innerHTML = html`
			<form>
				<slot name="x"></slot> / <slot name="y"></slot> / <slot name="z"></slot>
			</form>
		`;
		this.#form = this.shadowRoot[selectEl]("form");
		// @ts-expect-error
		this.#inputs = Array.from(this.shadowRoot[selectEls]("slot")).map(el => el.assignedElements()[0]);
		if(this.#inputs.length != 3 || !this.#inputs.every(input => input instanceof HTMLInputElement)) {
			throw new Error("Vec3Input elements must have exactly 3 slotted <input> elements!");
		}
		let nativeValueDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
		this.#inputs.forEach(input => {
			input[onEvent]("input", () => this.#reportFormState());
			Object.defineProperty(input, "value", {
				get: nativeValueDescriptor.get,
				set: value => {
					if(this.#canSetInputValues) {
						nativeValueDescriptor.set.call(input, value);
					}
				}
			});
		});
		this[onEvent]("focus", () => {
			this.#inputs[0].focus();
		});
		this.#reportFormState();
	}
	formResetCallback() {
		this.#form.reset();
		this.value = this.getAttribute("default") ?? ",,";
	}
	get form() {
		return this.internals.form;
	}
	get name() {
		return this.getAttribute("name");
	}
	get type() {
		return this.localName;
	}
	get value() {
		return this.#inputs.map(input => input.value).join(",");
	}
	set value(stringifiedValue) {
		let values = stringifiedValue.split(",").map(x => +x);
		this.#canSetInputValues = true;
		[this.x, this.y, this.z] = values;
		this.#canSetInputValues = false;
	}
	
	get x() {
		return +this.#inputs[0].value;
	}
	set x(x) {
		this.#canSetInputValues = true;
		this.#inputs[0].value = String(x);
		this.#canSetInputValues = false;
		dispatchInputEvents(this.#inputs[0]);
	}
	get y() {
		return +this.#inputs[1].value;
	}
	set y(y) {
		this.#canSetInputValues = true;
		this.#inputs[1].value = String(y);
		this.#canSetInputValues = false;
		dispatchInputEvents(this.#inputs[1]);
	}
	get z() {
		return +this.#inputs[2].value;
	}
	set z(z) {
		this.#canSetInputValues = true;
		this.#inputs[2].value = String(z);
		this.#canSetInputValues = false;
		dispatchInputEvents(this.#inputs[2]);
	}
	/** @returns {Vec3} */
	get xyz() {
		return [this.x, this.y, this.z];
	}
	/** @param {Vec3 | I32Vec3} xyz */
	set xyz(xyz) {
		[this.x, this.y, this.z] = xyz;
	}
	
	#reportFormState() {
		this.internals.setFormValue(this.value);
		let validities = this.#inputs.map(input => flattenObject(input.validity));
		validities.forEach(validity => delete validity.valid);
		let overallValidity = reduceProperties(validities, (a, b) => a || b);
		if(Object.values(overallValidity).some(x => x)) {
			let invalidInputIndex = validities.findIndex(validity => Object.values(validity).some(x => x));
			let invalidInput = this.#inputs[invalidInputIndex];
			this.internals.setValidity(overallValidity, invalidInput.validationMessage, invalidInput);
		} else {
			this.internals.setValidity({});
		}
	}
}

/** @import { I32Vec3, Vec3 } from "../common.types.ts" */
```

## File: src/data/schemas/blockEigenvariants.schema.json
```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"title": "Block Eigenvariants",
	"description": "Eigenvariant definitions for blocks.",
	"type": "object",
	"properties": {
		"$schema": {
			"type": "string"
		}
	},
	"patternProperties": {
		"^\\w+$": {
			"description": "The eigenvariant for this block.",
			"type": "integer",
			"minimum": 0
		}
	},
	"additionalProperties": false
}
```

## File: src/data/schemas/blockShapeGeos.schema.json
```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"title": "Block Shape Geos",
	"description": "Geometry definitions for block shapes.",
	"type": "object",
	"properties": {
		"$schema": {
			"type": "string"
		}
	},
	"patternProperties": {
		"^\\w+$": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"if": {
						"description": "An expression to control conditional rendering of the cube in C-style syntax. Block states can be referenced with their names.",
						"type": "string"
					},
					"pos": {
						"description": "The coordinates of the bottom-left-back corner of the cube.",
						"type": "array",
						"items": {
							"type": "number"
						},
						"minItems": 3,
						"maxItems": 3
					},
					"size": {
						"description": "The size of the cube in each axis.",
						"type": "array",
						"items": {
							"type": "number",
							"minimum": 0
						},
						"minItems": 3,
						"maxItems": 3
					},
					"translate": {
						"description": "Translates this cube or any cubes from the \"copy\" property. This is applied after automatic UV calculations.",
						"type": "array",
						"items": {
							"type": "number"
						},
						"minItems": 3,
						"maxItems": 3
					},
					"transform": {
						"description": "A full transformation matrix that will be applied after \"translate\".",
						"type": "array",
						"items": {
							"type": "array",
							"items": {
								"type": "number"
							},
							"minItems": 4,
							"maxItems": 4
						},
						"minItems": 4,
						"maxItems": 4
					},
					"rot": {
						"description": "The XYZ rotation of the cube (in degrees; applied in the order X-Y-Z) around its pivot.",
						"type": "array",
						"items": {
							"type": "number",
							"exclusiveMinimum": -180,
							"maximum": 180
						},
						"minItems": 3,
						"maxItems": 3
					},
					"pivot": {
						"description": "The center of rotation of the cube. Defaults to [8, 8, 8].",
						"type": "array",
						"items": {
							"type": "number"
						},
						"minItems": 3,
						"maxItems": 3
					},
					"uv": {
						"description": "UV coordinate overrides for each face.",
						"type": "object",
						"propertyNames": {
							"enum": ["west", "east", "down", "up", "north", "south", "side", "*"]
						},
						"patternProperties": {
							".": {
								"description": "The UV coordinates to use for this face, with (0, 0) being the top-left corner of the texture.",
								"type": "array",
								"items": {
									"type": "number",
									"minimum": 0
								},
								"minItems": 2,
								"maxItems": 2
							}
						},
						"additionalProperties": false
					},
					"uvSizes": {
						"description": "UV size overrides for each face.",
						"type": "object",
						"propertyNames": {
							"enum": ["west", "east", "down", "up", "north", "south", "side", "*"]
						},
						"patternProperties": {
							".": {
								"description": "The UV size to use for this face, measured in pixels.",
								"type": "array",
								"items": {
									"type": "number",
									"minimum": 0
								},
								"minItems": 2,
								"maxItems": 2
							}
						},
						"additionalProperties": false
					},
					"uvRot": {
						"description": "Rotates the UV for each face. Processed before `flipTextureHorizontally` and `flipTextureVertically`",
						"type": "object",
						"propertyNames": {
							"enum": ["west", "east", "down", "up", "north", "south", "side", "*"]
						},
						"patternProperties": {
							".": {
								"description": "The UV rotation for this face, in degrees.",
								"type": "number",
								"multipleOf": 90
							}
						},
						"additionalProperties": false
					},
					"boxUv": {
						"description": "UV coordinates for box UV.",
						"type": "array",
						"items": {
							"type": "integer",
							"minimum": 0
						},
						"minItems": 2,
						"maxItems": 2
					},
					"boxUvSize": {
						"description": "Size override for box UV.",
						"type": "array",
						"items": {
							"type": "integer",
							"exclusiveMinimum": 0
						},
						"minItems": 3,
						"maxItems": 3
					},
					"boxUvFlipEastWest": {
						"description": "If true, the east and west faces will be flipped. Requires `boxUv`.",
						"type": "boolean"
					},
					"textures": {
						"description": "Forces a face to use the texture of another face, or a texture located at a given file path.",
						"type": "object",
						"propertyNames": {
							"enum": ["west", "east", "down", "up", "north", "south", "side", "*"]
						},
						"patternProperties": {
							".": {
								"oneOf": [
									{
										"description": "Another face's texture to use.",
										"enum": ["west", "east", "down", "up", "north", "south", "side", "carried", "carried.west", "carried.east", "carried.down", "carried.up", "carried.north", "carried.south", "carried.side", "#tex", "none"]
									},
									{
										"$ref": "#/definitions/textureFilePath"
									}
								]
							}
						},
						"additionalProperties": false
					},
					"textureSize": {
						"description": "Defines the expected size of the texture, for use in UV. Defaults to [16, 16].",
						"type": "array",
						"items": {
							"type": "integer",
							"exclusiveMinimum": 0
						},
						"minItems": 2,
						"maxItems": 2
					},
					"copy": {
						"description": "Copies another block shape to use in this block shape. Translation can be achieved with the \"translate\" property (\"pos\" has no effect), and other fields will be copied over as well.",
						"type": "string",
						"pattern": "^\\w+$"
					},
					"copyBlock": {
						"description": "Copies an entire block. Must resolve to an object with the same structure as a block palette entry.",
						"type": "string",
						"minLength": 1
					},
					"copyEntityModel": {
						"description": "Copies an entity's model.",
						"type": "object",
						"properties": {
							"identifier": {
								"description": "The geometry identifier of the model.",
								"type": "string",
								"pattern": "^(\\w+:)?geometry\\.[\\w.]+$"
							},
							"geoFile": {
								"description": "A file path to the geometry file which contains the identifier.",
								"type": "string",
								"pattern": "^models/.*[^/]$"
							},
							"texture": {
								"$ref": "#/definitions/textureFilePath"
							}
						},
						"required": ["identifier", "geoFile", "texture"]
					},
					"blockStates": {
						"description": "Block states to be passed to the block shape copy specified in the \"copy\" property.",
						"type": "object",
						"patternProperties": {
							"^[\\w:]+$": {
								"description": "The block state to be passed to the block shape copy.",
								"oneOf": [
									{
										"type": "number"
									},
									{
										"type": "string"
									}
								]
							}
						}
					},
					"terrainTexture": {
						"description": "Forces this cube to use a specific terrain_texture.json key.",
						"type": "string"
					},
					"variant": {
						"description": "Forces this cube to use a specific variant instead of looking at block states (or the eigenvariant).",
						"type": "integer",
						"minimum": 0
					},
					"ignoreEigenvariant": {
						"description": "Makes a cube ignore the eigenvariant associated with this block, and instead rely on block states for variants.",
						"type": "boolean"
					},
					"tint": {
						"description": "A tinting colour in 6-digit hex or in a 32-bit ARGB number to apply to this cube (overrides TextureAtlas.#terrainTextureTints).",
						"type": "string",
						"pattern": "^(#[0-9a-fA-F]{6})|(\\$\\{.+\\})$"
					},
					"fullbright": {
						"description": "Makes the cube appear at maximum brightness by setting the surface normal to be vertical.",
						"type": "boolean"
					},
					"flipTextureHorizontally": {
						"description": "An array of faces that will have their textures horizontally flipped.",
						"type": "array",
						"items": {
							"type": "string",
							"enum": ["west", "east", "down", "up", "north", "south", "side", "*"]
						},
						"uniqueItems": true
					},
					"flipTextureVertically": {
						"description": "An array of faces that will have their textures vertically flipped.",
						"type": "array",
						"items": {
							"type": "string",
							"enum": ["west", "east", "down", "up", "north", "south", "side", "*"]
						},
						"uniqueItems": true
					},
					"arrays": {
						"description": "Named arrays that can be used by other properties. Currently, only \"tint\" supports accessing arrays.",
						"type": "object",
						"patternProperties": {
							"^\\w+$": {
								"description": "Array name.",
								"type": "array",
								"minItems": 1,
								"items": {
									"type": "string"
								}
							}
						},
						"additionalProperties": false
					},
					"disableMerging": {
						"description": "Disables this cube from being automatically merged with any other cubes.",
						"type": "boolean",
						"default": true
					}
				},
				"oneOf": [
					{
						"required": ["pos", "size"]
					},
					{
						"required": ["copy"]
					},
					{
						"required": ["copyBlock"]
					},
					{
						"required": ["copyEntityModel"]
					}
				],
				"default": {
					"pos": [],
					"size": []
				},
				"additionalProperties": false
			},
			"minItems": 1
		}
	},
	"additionalProperties": false,
	
	"definitions": {
		"textureFilePath": {
			"description": "A file path to a texture file, without the file extension.",
			"type": "string",
			"pattern": "^textures/.*[^/]$"
		}
	}
}
```

## File: src/data/schemas/blockShapes.schema.json
```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"title": "Block Shapes",
	"description": "Mappings from block names to block shapes.",
	"type": "object",
	"properties": {
		"$schema": {
			"type": "string"
		},
		"patterns": {
			"description": "Regular expression patterns that will be tested if no individual block key is found.",
			"type": "object",
			"patternProperties": {
				"^.*$": {
					"type": "string",
					"oneOf": [
						{
							"description": "The block shape for blocks that match this regular expression.",
							"pattern": "^\\w+$"
						},
						{
							"description": "The block shape for blocks that match this regular expression, and the path to a texture which can be accessed with #tex.",
							"pattern": "^\\w+<[\\w/]*>$"
						}
					]
				}
			},
			"additionalProperties": false
		},
		"individualBlocks": {
			"description": "Block shape mappings for individual blocks.",
			"type": "object",
			"patternProperties": {
				"^\\w+$": {
					"type": "string",
					"oneOf": [
						{
							"description": "The block shape for this block.",
							"pattern": "^\\w+$"
						},
						{
							"description": "The block shape for this block, and the path to a texture which can be accessed with #tex.",
							"pattern": "^\\w+<[\\w/]*>$"
						}
					]
				}
			},
			"additionalProperties": false
		}
	},
	"required": ["patterns", "individualBlocks"],
	"additionalProperties": false
}
```

## File: src/data/schemas/blockStateDefinitions.schema.json
```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"title": "Block State Definitions",
	"description": "Definitions for block states that control texture variants or block rotations.",
	"type": "object",
	"properties": {
		"$schema": {
			"type": "string"
		},
		"textureVariants": {
			"description": "Texture-variating block state definitions.",
			"type": "object",
			"properties": {
				"*": {
					"description": "Texture-variating block state definitions for all blocks.",
					"$ref": "#/definitions/variant"
				},
				"blockShapes": {
					"description": "Texture-variating block state definitions for specific block shapes.",
					"type": "object",
					"patternProperties": {
						"^\\w+$": {
							"description": "The block shapes (comma-delimited) to apply these texture-variating block state definitions to.",
							"$ref": "#/definitions/variant"
						}
					},
					"additionalProperties": false
				},
				"blockNames": {
					"description": "Texture-variating block state definitions for specific blocks.",
					"type": "object",
					"patternProperties": {
						"^[\\w,]+$": {
							"description": "The block names (comma-delimited) to apply these texture-variating block state definitions to.",
							"$ref": "#/definitions/variant"
						},
						"^/.+/$": {
							"description": "A regular expression matching block names to apply these texture-variating block state definitions to.",
							"$ref": "#/definitions/variant"
						}
					},
					"additionalProperties": false
				}
			},
			"additionalProperties": false
		},
		"rotations": {
			"description": "Block-rotating block state definitions.",
			"type": "object",
			"properties": {
				"*": {
					"description": "Block state rotation definitions for all blocks.",
					"$ref": "#/definitions/rotation"
				},
				"blockShapes": {
					"description": "Block state rotation definitions for specific block shapes.",
					"type": "object",
					"patternProperties": {
						"^[\\w,]+$": {
							"description": "The block shapes (comma-delimited) to apply these block state rotation definitions to.",
							"$ref": "#/definitions/rotation"
						}
					},
					"additionalProperties": false
				},
				"blockNames": {
					"description": "Block state rotation definitions for specific blocks.",
					"type": "object",
					"patternProperties": {
						"^[\\w,]+$": {
							"description": "The block names (comma-delimited) to apply these block state rotation definitions to.",
							"$ref": "#/definitions/rotation"
						},
						"^/.+/$": {
							"description": "A regular expression matching block names to apply these block state rotation definitions to.",
							"$ref": "#/definitions/rotation"
						}
					},
					"additionalProperties": false
				}
			},
			"additionalProperties": false
		}
	},
	"required": ["textureVariants", "rotations"],
	"additionalProperties": false,
	
	"definitions": {
		"variant": {
			"type": "object",
			"properties": {
				"#exclusive_add": {
					"description": "Whether to only look at these variants, and add them together. Defaults to false.",
					"type": "boolean"
				}
			},
			"patternProperties": {
				"^[\\w:]+$": {
					"description": "Controls which texture variant is chosen based on the value of this block state.",
					"$ref": "#/definitions/variantValue"
				},
				"^entity\\.\\w+$": {
					"description": "Controls which texture variant is chosen based on the value of this block entity property. Only first-level fields are supported.",
					"$ref": "#/definitions/variantValue"
				}
			},
			"additionalProperties": false
		},
		"variantValue": {
			"oneOf": [
				{
					"type": "array",
					"items": {
						"description": "The index of the texture variant in terrain_texture.json to use.",
						"type": "integer",
						"minimum": 0
					},
					"minItems": 1
				},
				{
					"type": "object",
					"patternProperties": {
						"^\\w+$": {
							"description": "The index of the texture variant in terrain_texture.json to use when the block state is this value.",
							"type": "integer",
							"minimum": 0
						}
					},
					"additionalProperties": false
				}
			]
		},
		"rotation": {
			"type": "object",
			"patternProperties": {
				"^[\\w:]+$": {
					"description": "Controls the entire block's rotation based on the value of this block state.",
					"$ref": "#/definitions/rotationValue"
				},
				"^entity\\.\\w+$": {
					"description": "Controls the entire block's rotation based on the value of this block entity property. Only first-level fields are supported.",
					"$ref": "#/definitions/rotationValue"
				}
			},
			"additionalProperties": false
		},
		"rotationValue": {
			"oneOf": [
				{
					"type": "object",
					"patternProperties": {
						"^(\\w+|-?\\d+(\\.\\d+)?)$": {
							"$ref": "#/definitions/rotationTriplet"
						}
					},
					"additionalProperties": false
				},
				{
					"type": "array",
					"items": {
						"$ref": "#/definitions/rotationTriplet"
					},
					"minItems": 1
				}
			]
		},
		"rotationTriplet": {
			"type": "array",
			"description": "The XYZ rotation of the entire block (in degrees; applied in the order X-Y-Z) around its center.",
			"items": {
				"type": "number",
				"minimum": -180,
				"maximum": 360
			},
			"minItems": 3,
			"maxItems": 3
		}
	}
}
```

## File: src/data/schemas/index.ts
```typescript
/** Block Eigenvariants. Eigenvariant definitions for blocks. */
export interface BlockEigenvariants {
	/** The eigenvariant for this block. */
	[key: string]: number;
}

/** Block Shape Geos. Geometry definitions for block shapes. */
export interface BlockShapeGeos {
	[key: string]: Cube[];
}
export interface Cube {
	/** An expression to control conditional rendering of the cube in C-style syntax. Block states can be referenced with their names. */
	if?: string;
	/** The coordinates of the bottom-left-back corner of the cube. */
	pos?: [number, number, number];
	/** The size of the cube in each axis. */
	size?: [number, number, number];
	/** Translates this cube or any cubes from the "copy" property. This is applied after automatic UV calculations. */
	translate?: [number, number, number];
	/** A full transformation matrix that will be applied after "translate". */
	transform?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]];
	/** The XYZ rotation of the cube (in degrees; applied in the order X-Y-Z) around its pivot. */
	rot?: [number, number, number];
	/** The center of rotation of the cube. Defaults to [8, 8, 8]. */
	pivot?: [number, number, number];
	/** UV coordinate overrides for each face. */
	uv?: Partial<Record<Face, [number, number]>>;
	/** UV size overrides for each face. */
	uvSizes?: Partial<Record<Face, [number, number]>>;
	/** Rotates the UV for each face. Processed before `flipTextureHorizontally` and `flipTextureVertically`. */
	uvRot?: Partial<Record<Face, number>>;
	/** UV coordinates for box UV. */
	boxUv?: [number, number];
	/** Size override for box UV. */
	boxUvSize?: [number, number, number];
	/** If true, the east and west faces will be flipped. Requires `boxUv`. */
	boxUvFlipEastWest?: boolean;
	/** Forces a face to use the texture of another face, or a texture located at a given file path. */
	textures?: Partial<Record<Face, TextureFace>>;
	/** Defines the expected size of the texture, for use in UV. Defaults to [16, 16]. */
	textureSize?: [number, number];
	/** Copies another block shape to use in this block shape. Translation can be achieved with the "translate" property ("pos" has no effect), and other fields will be copied over as well. */
	copy?: string;
	/** Copies an entire block. Must resolve to an object with the same structure as a block palette entry. */
	copyBlock?: string;
	/** Copies an entity's model. */
	copyEntityModel?: EntityModelInfo;
	/** Block states to be passed to the block shape copy specified in the "copy" property. */
	blockStates?: Record<string, string | number>;
	/** Forces this cube to use a specific terrain_texture.json key. */
	terrainTexture?: string;
	/** Forces this cube to use a specific variant instead of looking at block states (or the eigenvariant). */
	variant?: number;
	/** Makes a cube ignore the eigenvariant associated with this block, and instead rely on block states for variants. */
	ignoreEigenvariant?: boolean;
	/** A tinting colour in 6-digit hex or in a 32-bit ARGB number to apply to this cube (overrides TextureAtlas.#terrainTextureTints). */
	tint?: string;
	/** Makes the cube appear at maximum brightness by setting the surface normal to be vertical. */
	fullbright?: boolean;
	/** An array of faces that will have their textures horizontally flipped. */
	flipTextureHorizontally?: Face[];
	/** An array of faces that will have their textures vertically flipped. */
	flipTextureVertically?: Face[];
	/** Named arrays that can be used by other properties. Currently, only "tint" supports accessing arrays. */
	arrays?: Record<string, string[]>;
	/** Disables this cube from being automatically merged with any other cubes. */
	disableMerging?: boolean;
}
export type CardinalDirection = "west" | "east" | "down" | "up" | "north" | "south";
export type Face = CardinalDirection | "side" | "*";
export type TextureFace = `${"" | "carried."}${CardinalDirection | "side"}` | "carried" | "#tex" | "none" | TextureFilePath;
/** A file path to a texture file, without the file extension. */
type TextureFilePath = `textures/${string}`;
export interface EntityModelInfo {
	/** The geometry identifier of the model. */
	identifier: `geometry.${string}`;
	/** A file path to the geometry file which contains the identifier. */
	geoFile: `models/${string}`;
	/** Path to the texture to be used for this model. */
	texture: TextureFilePath
}

/** Block Shapes. Mappings from block names to block shapes. */
export interface BlockShapes {
	/** Regular expression patterns that will be tested if no individual block key is found. */
	patterns: Record<string, string>;
	/** Block shape mappings for individual blocks. */
	individualBlocks: Record<string, string>;
}

/** Definitions for block states that control texture variants or block rotations. */
export interface BlockStateDefinitions {
	textureVariants: {
		/** Texture-variating block state definitions for all blocks. */
		"*": BlockStateVariants;
		blockShapes: {
			[blockShape: string]: BlockStateVariants;
		};
		blockNames: {
			[blockName: string]: BlockStateVariants;
		};
	};
	rotations: {
		/** Block state rotation definitions for all blocks. */
		"*": Rotation;
		blockShapes: {
			[blockShape: string]: Rotation;
		};
		blockNames: {
			[blockName: string]: Rotation;
		};
	};
}
export type BlockStateVariants = {
	/** Whether to only look at these variants, and add them together. Defaults to false. */
	"#exclusive_add"?: boolean;
} & {
	/** Block state keys or entity property keys (e.g., "facing", "entity.color") */
	[blockStateName: string]: number[] | {
		[value: string]: number;
	};
};
export interface Rotation {
	/** Block state keys or entity property keys (e.g., "facing", "entity.rotation") */
	[key: string]: {
		[value: string]: RotationTriplet;
	} | RotationTriplet[];
}
/** X, Y, Z in degrees */
type RotationTriplet = [number, number, number];

export interface ItemIcons {
	/** Item name -> item_texture.json key. */
	[itemName: string]: string;
	/** Regular expressions to match item names. They will be processed last. */
	[itemNamePattern: `/${string}/`]: string
}

export interface MaterialListMappings {
	/** Blocks that will be ignored and will not be put in material lists. */
	ignoredBlocks: string[];
	/** Mappings for blocks with different item names. */
	blockToItemMappings: {
		[blockNameOrRegexp: string]: string;
	};
	/** Items that will have their count multiplied by a certain amount. */
	itemCountMultipliers: {
		[itemPattern: string]: number | {
			multiplier: number;
			remove: string;
		};
	};
	/** Definitions for blocks that should be split up based on a numeric block entity property. */
	specialBlockEntityProperties: {
		[blockName: string]: {
			prop: string;
			serializationIds?: string[];
		};
	};
	/** Remappings for serializationIds that go to the wrong things in .lang files. */
	serializationIdPatches: {
		/** Serialization ID. */
		[serializationId: `${"tile" | "item"}.${string}`]: `${"tile" | "item"}.${string}`;
		/** Regular expressions to match serialization IDs. */
		[regExp: `/${string}/`]: string
	};
	/** Patches for blocks missing serialization IDs. */
	blocksMissingSerializationIds: {
		[blockName: string]: string;
	};
	/** Manual translation patches. */
	translationPatches: {
		[serializationId: `${"tile" | "item"}.${string}`]: string;
	};
}

export interface TextureAtlasMappings {
	/** Block names that need to be remapped in blocks.json. */
	blocksDotJsonPatches: {
		[blockName: string]: string;
	};
	/** Blocks that should use their carried textures. */
	blocksToUseCarriedTextures: string[];
	/** Transparent blocks and their opacities. */
	transparentBlocks: {
		[blockName: string]: number;
	};
	/** Tinting information for terrain textures. This will override any tint set in `terrain_texture.json` (`overlay_color` or `tint_color`). */
	terrainTextureTints: {
		colors: {
			[colorName: string]: `#${string}`;
		};
		terrainTextureKeys: {
			[textureKey: string]: string | {
				tint: string;
				/** If true, the image will be tinted as if it were a PNG image, despite being a TGA image. (TGA images are tinted different to PNG images.) */
				tintLikePng: boolean;
			};
		};
	};
	/** File paths of flipbook textures that aren't used in-game because they're missing from flipbook_textures.json. This fixes up their UV coordinates. */
	missingFlipbookTextures: string[];
}
```

## File: src/data/schemas/itemIcons.schema.json
```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"title": "Item icons",
	"description": "Mappings from item names to their entries in item_texture.json.",
	"type": "object",
	"properties": {
		"$schema": {
			"type": "string"
		}
	},
	"patternProperties": {
		"^\\w+$": {
			"description": "Item name -> item_texture.json key.",
			"type": "string",
			"pattern": "^[\\w]+(\\.\\d+)?$"
		},
		"^/.+/$": {
			"description": "Regular expressions to match item names. They will be processed last.",
			"type": "string",
			"minLength": 1
		}
	},
	"additionalProperties": false
}
```

## File: src/data/schemas/materialListMappings.schema.json
```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"title": "Material list mappings",
	"description": "Patches and other mappings for MaterialList.js.",
	"type": "object",
	"properties": {
		"$schema": {
			"type": "string"
		},
		"ignoredBlocks": {
			"description": "An array of blocks that will be ignored and will not be put in material lists.",
			"type": "array",
			"items": {
				"description": "Block name.",
				"type": "string",
				"minLength": 1
			}
		},
		"blockToItemMappings": {
			"description": "Mappings for blocks that have different item names. If a block isn't found here, the item name is assumed to be the same as the block name. Regular expressions will be checked only if no individual match is found.",
			"type": "object",
			"patternProperties": {
				"^\\w+$": {
					"description": "\"block_name\": \"item_name\"",
					"type": "string",
					"minLength": 1
				},
				"^/.+/$": {
					"description": "\"regular expression\": \"item_name\"",
					"type": "string",
					"minLength": 1
				}
			},
			"additionalProperties": false
		},
		"itemCountMultipliers": {
			"description": "Items that will have their count multiplied by a certain amount.",
			"type": "object",
			"patternProperties": {
				"^(\\w+|/[^,]+/)(,(\\w+|/[^,]+/))*$": {
					"oneOf": [
						{
							"description": "Multiplier.",
							"type": "number",
							"exclusiveMinimum": 0
						},
						{
							"description": "Item names separated by commas. Regular expressions can be used with /.../.",
							"type": "object",
							"properties": {
								"multiplier": {
									"description": "Multiplier.",
									"type": "number",
									"exclusiveMinimum": 0
								},
								"remove": {
									"description": "Will remove all instances of this from the item name.",
									"type": "string",
									"minLength": 1
								}
							},
							"required": ["multiplier", "remove"],
							"additionalProperties": false
						}
					]
				}
			},
			"additionalProperties": false
		},
		"specialBlockEntityProperties": {
			"description": "Definitions for blocks that should be split up based on a numeric block entity property.",
			"type": "object",
			"patternProperties": {
				"^\\w+$": {
					"description": "Block name.",
					"type": "object",
					"properties": {
						"prop": {
							"description": "Block entity property name.",
							"type": "string",
							"minLength": 1
						},
						"serializationIds": {
							"description": "Serialization ID remappings.",
							"type": "array",
							"items": {
								"description": "Serialization ID.",
								"type": "string"
							},
							"minItems": 1
						}
					},
					"required": ["prop"],
					"additionalProperties": false
				}
			},
			"additionalProperties": false
		},
		"serializationIdPatches": {
			"description": "Remappings for serializationIds that go to the wrong things in .lang files. Regular expressions will be checked only if no individual match is found.",
			"type": "object",
			"patternProperties": {
				"^(tile|item)\\.\\w+$": {
					"description": "Serialization ID.",
					"type": "string",
					"pattern": "^(tile|item)\\.[\\w.]+$"
				},
				"^/.+/$": {
					"description": "Regular expressions to match serialization IDs.",
					"type": "string",
					"minLength": 1
				}
			},
			"additionalProperties": false
		},
		"blocksMissingSerializationIds": {
			"description": "Patches for blocks that don't have any serialization ID due to not existing in mojang-blocks.json despite existing in-game.",
			"type": "object",
			"patternProperties": {
				"^\\w+$": {
					"description": "\"block_name\": \"serialization_id\"",
					"type": "string",
					"minLength": 1
				}
			},
			"additionalProperties": false
		},
		"translationPatches": {
			"description": "Translations that don't exist for whatever reason.",
			"type": "object",
			"patternProperties": {
				"^(tile|item)\\.[\\w.]+$": {
					"description": "\"serialization_id\": \"Translated Item Name\"",
					"type": "string",
					"minLength": 1
				}
			},
			"additionalProperties": false
		}
	},
	"required": ["ignoredBlocks", "blockToItemMappings", "itemCountMultipliers", "specialBlockEntityProperties", "serializationIdPatches", "blocksMissingSerializationIds", "translationPatches"],
	"additionalProperties": false
}
```

## File: src/data/schemas/textureAtlasMappings.schema.json
```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"title": "Texture atlas mappings",
	"description": "Patches and other mappings for TextureAtlas.js.",
	"type": "object",
	"properties": {
		"$schema": {
			"type": "string"
		},
		"blocksDotJsonPatches": {
			"description": "Block names that need to be remapped to something else in blocks.json.",
			"type": "object",
			"patternProperties": {
				"^\\w+$": {
					"description": "Block names, with _._ meaning variants.",
					"type": "string",
					"pattern": "^\\w+(\\.\\d+)?$"
				}
			},
			"additionalProperties": false
		},
		"blocksToUseCarriedTextures": {
			"description": "An array of block names that should use their carried textures.",
			"type": "array",
			"items": {
				"description": "Block name.",
				"type": "string",
				"minLength": 1
			}
		},
		"transparentBlocks": {
			"description": "Blocks that are transparent and need a certain opacity applied to them.",
			"type": "object",
			"patternProperties": {
				"^\\w+$": {
					"description": "Block name and opacity.",
					"type": "number",
					"exclusiveMinimum": 0
				}
			},
			"additionalProperties": false
		},
		"terrainTextureTints": {
			"description": "Terrain texture keys that should have their textures tinted. This will override any tint set in terrain_texture.json (overlay_color or tint_color).",
			"type": "object",
			"properties": {
				"colors": {
					"description": "Tint colour definitions.",
					"type": "object",
					"patternProperties": {
						"^\\w+$": {
							"description": "Tint colour -> 6-digit hex colour.",
							"type": "string",
							"pattern": "^#[\\da-fA-F]{6}$"
						}
					},
					"additionalProperties": false
				},
				"terrainTextureKeys": {
					"description": "The actual terrain texture keys that should have tints applied.",
					"type": "object",
					"patternProperties": {
						"^\\w+$": {
							"oneOf": [
								{
									"$ref": "#/definitions/tintColor"
								},
								{
									"description": "A tint colour and a flag to make it be tinted like a PNG image.",
									"type": "object",
									"properties": {
										"tint": {
											"$ref": "#/definitions/tintColor"
										},
										"tintLikePng": {
											"description": "If true, the image will be tinted as if it were a PNG image, despite being a TGA image. (TGA images are tinted different to PNG images.)",
											"type": "boolean",
											"default": true
										}
									},
									"required": ["tint", "tintLikePng"],
									"additionalProperties": false
								}
							]
						}
					}
				}
			},
			"additionalProperties": false
		},
		"missingFlipbookTextures": {
			"description": "File paths of flipbook textures that aren't used in-game because they're missing from flipbook_textures.json. This fixes up their UV coordinates.",
			"type": "array",
			"items": {
				"description": "Texture path.",
				"type": "string",
				"pattern": "^textures/.*[^/]$"
			}
		}
	},
	"required": ["blocksDotJsonPatches", "blocksToUseCarriedTextures", "transparentBlocks", "terrainTextureTints", "missingFlipbookTextures"],
	"additionalProperties": false,
	
	"definitions": {
		"tintColor": {
			"oneOf": [
				{
					"description": "A tint colour, as defined in the \"colors\" property.",
					"type": "string",
					"pattern": "^\\w+$"
				},
				{
					"description": "A tint colour.",
					"type": "string",
					"pattern": "^#[\\da-fA-F]{6}$"
				}
			]
		}
	}
}
```

## File: src/data/blockEigenvariants.json
```json
// These are definitions for blocks which have a constant terrain texture variant and don't look at block states for variants.
{
	"grass_block": 0,
	"grass_path": 0, // down texture uses dirt instead of flattened_dirt :/
	"unpowered_repeater": 0,
	"powered_repeater": 1,
	"unpowered_comparator": 0,
	"powered_comparator": 1,
	"daylight_detector": 0,
	"daylight_detector_inverted": 1,
	"furnace": 0, // these are strange
	"lit_furnace": 0,
	"blast_furnace": 0,
	"lit_blast_furnace": 0,
	"smoker": 0,
	"lit_smoker": 0,
	"normal_stone_stairs": 0,
	"stone_button": 0,
	"stone_pressure_plate": 0,
	"stone_brick_stairs": 0,
	"bubble_column": 0,
	"wooden_button": 0,
	"wooden_pressure_plate": 0,
	"wooden_door": 0,
	"spruce_door": 1,
	"birch_door": 2,
	"jungle_door": 3,
	"acacia_door": 4,
	"dark_oak_door": 5,
	"iron_door": 6,
	"oak_leaves": 0,
	"spruce_leaves": 0,
	"birch_leaves": 0,
	"jungle_leaves": 0,
	"acacia_leaves": 0,
	"dark_oak_leaves": 0,
	"azalea_leaves": 0,
	"azalea_leaves_flowered": 0,
	"mangrove_leaves": 0,
	"cherry_leaves": 0,
	"pale_oak_leaves": 0,
	"red_poplar_leaves": 0,
	"orange_poplar_leaves": 0,
	"yellow_poplar_leaves": 0,
	"carved_pumpkin": 0,
	"lit_pumpkin": 1,
	"pumpkin": 2,
	"cave_vines": 0,
	"cave_vines_body_with_berries": 1,
	"cave_vines_head_with_berries": 1,
	"mycelium": 0,
	"prismarine_stairs": 0,
	"sandstone_stairs": 0,
	"red_sandstone_stairs": 0,
	"netherreactor": 0,
	
	"$schema": "schemas/blockEigenvariants.schema.json"
}
```

## File: src/data/blockShapeGeos.json
```json
{
	"block": [
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16]
		}
	],
	"cross_texture": [
		{
			"pos": [0, 0, 8],
			"size": [16, 16, 0],
			"rot": [0, 45, 0]
		},
		{
			"pos": [0, 0, 8],
			"size": [16, 16, 0],
			"rot": [0, -45, 0]
		}
	],
	"slab": [
		{
			"if": "minecraft:vertical_half == bottom",
			"pos": [0, 0, 0],
			"size": [16, 8, 16]
		},
		{
			"if": "minecraft:vertical_half == top",
			"pos": [0, 8, 0],
			"size": [16, 8, 16]
		}
	],
	"double_slab": [ // with outlines it will be very apparent that these are double slabs
		{
			"pos": [0, 0, 0],
			"size": [16, 8, 16],
			"disableMerging": true
		},
		{
			"pos": [0, 8, 0],
			"size": [16, 8, 16]
		}
	],
	"stairs": [
		{
			"if": "upside_down_bit == 0",
			"pos": [0, 0, 0],
			"size": [16, 8, 16]
		},
		{
			"if": "upside_down_bit == 0",
			"pos": [8, 8, 0],
			"size": [8, 8, 16]
		},
		{
			"if": "upside_down_bit == 1",
			"pos": [0, 8, 0],
			"size": [16, 8, 16]
		},
		{
			"if": "upside_down_bit == 1",
			"pos": [8, 0, 0],
			"size": [8, 8, 16]
		}
	],
	"slime_block": [
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16]
		},
		{
			"pos": [3, 3, 3],
			"size": [10, 10, 10]
		}
	],
	"chest": [ // the side textures are split up so we have to have 2 cubes :(
		{
			"pos": [1, 0, 1],
			"size": [14, 10, 14],
			"textures": {
				"*": "#tex",
				"up": "none"
			},
			"textureSize": [64, 64],
			"uv": {
				"side": [0, 33],
				"north": [14, 33],
				"down": [28, 19]
			}
		},
		{
			"pos": [1, 10, 1],
			"size": [14, 4, 14],
			"textures": {
				"*": "#tex"
			},
			"textureSize": [64, 64],
			"uv": {
				"side": [0, 14],
				"north": [14, 14],
				"down": [28, 0],
				"up": [14, 0]
			}
		},
		{
			"pos": [7, 7, 0],
			"size": [2, 4, 1],
			"textures": {
				"*": "#tex",
				"south": "none"
			},
			"textureSize": [64, 64],
			"uv": {
				"*": [0, 1]
			}
		}
	],
	"honey_block": [ // this is unofficial (i.e. not in https://wiki.bedrock.dev/blocks/block-shapes.html)
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"*": "down"
			}
		},
		{
			"pos": [1, 1, 1],
			"size": [14, 14, 14] // the bottom texture uses the transparent outer layer texture, probably a bug.
		}
	],
	"farmland": [ // another "unofficial" block shape
		{
			"pos": [0, 0, 0],
			"size": [16, 15, 16]
		}
	],
	"template_torch": [
		{
			"pos": [7, 0, 7],
			"size": [2, 10, 2],
			"uv": {
				"up": [7, 6],
				"down": [7, 14]
			}
		}
	],
	"torch": [
		{
			"if": "torch_facing_direction == top",
			"copy": "template_torch"
		},
		{
			"if": "torch_facing_direction != top", // the rest of the rotations are handled in blockStateDefinitions.json
			"copy": "template_torch",
			"transform": [
				[1, 0.4, 0, -8],
				[0, 1, 0, 3.4],
				[0, 0, 1, 0],
				[0, 0, 0, 1]
			]
		}
	],
	"template_redstone_torch": [
		{
			"pos": [7, 0, 7],
			"size": [2, 10, 2],
			"textures": {
				"side": "none"
			},
			"uv": {
				"up": [7, 6],
				"down": [7, 14]
			}
		},
		{
			"pos": [0, 0, 7],
			"size": [16, 16, 0]
		},
		{
			"pos": [0, 0, 9],
			"size": [16, 16, 0]
		},
		{
			"pos": [7, 0, 0],
			"size": [0, 16, 16]
		},
		{
			"pos": [9, 0, 0],
			"size": [0, 16, 16]
		}
	],
	"redstone_torch": [
		{
			"if": "torch_facing_direction == top",
			"copy": "template_redstone_torch"
		},
		{
			"if": "torch_facing_direction != top", // the rest of the rotations are handled in blockStateDefinitions.json
			"copy": "template_redstone_torch",
			"transform": [
				[1, 0.4, 0, -8],
				[0, 1, 0, 3.4],
				[0, 0, 1, 0],
				[0, 0, 0, 1]
			]
		}
	],
	"fence": [ // fences don't have block states, we'll have to read blocks next to each other :((
		{
			"pos": [6, 0, 6],
			"size": [4, 16, 4]
		}
	],
	"bamboo_fence": [
		{
			"pos": [6, 0, 6],
			"size": [4, 16, 4],
			"uv": {
				"side": [0, 0],
				"up": [4, 0],
				"down": [4, 0]
			}
		}
	],
	"template_fence_gate": [
		{
			"pos": [0, 5, 7],
			"size": [2, 11, 2]
		},
		{
			"pos": [14, 5, 7],
			"size": [2, 11, 2]
		},
		{
			"if": "open_bit == 0",
			"pos": [2, 6, 7],
			"size": [12, 3, 2]
		},
		{
			"if": "open_bit == 0",
			"pos": [2, 12, 7],
			"size": [12, 3, 2]
		},
		{
			"if": "open_bit == 0",
			"pos": [6, 9, 7],
			"size": [4, 3, 2]
		},
		{
			"if": "open_bit == 1",
			"pos": [0, 6, 9],
			"size": [2, 3, 6]
		},
		{
			"if": "open_bit == 1",
			"pos": [0, 12, 9],
			"size": [2, 3, 6]
		},
		{
			"if": "open_bit == 1",
			"pos": [0, 9, 13],
			"size": [2, 3, 2]
		},
		{
			"if": "open_bit == 1",
			"pos": [14, 6, 9],
			"size": [2, 3, 6]
		},
		{
			"if": "open_bit == 1",
			"pos": [14, 12, 9],
			"size": [2, 3, 6]
		},
		{
			"if": "open_bit == 1",
			"pos": [14, 9, 13],
			"size": [2, 3, 2]
		}
	],
	"fence_gate": [
		{
			"if": "in_wall_bit == 0",
			"copy": "template_fence_gate"
		},
		{
			"if": "in_wall_bit == 1",
			"copy": "template_fence_gate",
			"translate": [0, -3, 0]
		}
	],
	"template_bamboo_fence_gate": [
		{
			"pos": [0, 5, 7],
			"size": [2, 11, 2],
			"uv": {
				"*": [0, 2]
			}
		},
		{
			"pos": [14, 5, 7],
			"size": [2, 11, 2],
			"uv": {
				"*": [0, 2]
			}
		},
		{
			"if": "open_bit == 0",
			"pos": [2, 6, 7],
			"size": [4, 3, 2],
			"uv": {
				"*": [3, 9]
			}
		},
		{
			"if": "open_bit == 0",
			"pos": [2, 12, 7],
			"size": [4, 3, 2],
			"uv": {
				"*": [3, 9]
			}
		},
		{
			"if": "open_bit == 0",
			"pos": [6, 6, 7],
			"size": [2, 9, 2],
			"uv": {
				"*": [8, 3]
			}
		},
		{
			"if": "open_bit == 0",
			"pos": [8, 6, 7],
			"size": [2, 9, 2],
			"uv": {
				"*": [8, 3]
			}
		},
		{
			"if": "open_bit == 0",
			"pos": [10, 6, 7],
			"size": [4, 3, 2],
			"uv": {
				"*": [3, 9]
			}
		},
		{
			"if": "open_bit == 0",
			"pos": [10, 12, 7],
			"size": [4, 3, 2],
			"uv": {
				"*": [3, 9]
			}
		},
		{
			"if": "open_bit == 1",
			"pos": [0, 6, 9],
			"size": [2, 3, 4],
			"uv": {
				"side": [3, 9],
				"up": [3, 1],
				"down": [3, 1]
			}
		},
		{
			"if": "open_bit == 1",
			"pos": [0, 12, 9],
			"size": [2, 3, 4],
			"uv": {
				"side": [3, 9],
				"up": [3, 1],
				"down": [3, 1]
			}
		},
		{
			"if": "open_bit == 1",
			"pos": [0, 6, 13],
			"size": [2, 9, 2],
			"uv": {
				"*": [8, 3]
			}
		},
		{
			"if": "open_bit == 1",
			"pos": [14, 6, 9],
			"size": [2, 3, 4],
			"uv": {
				"side": [3, 9],
				"up": [3, 1],
				"down": [3, 1]
			}
		},
		{
			"if": "open_bit == 1",
			"pos": [14, 12, 9],
			"size": [2, 3, 4],
			"uv": {
				"side": [3, 9],
				"up": [3, 1],
				"down": [3, 1]
			}
		},
		{
			"if": "open_bit == 1",
			"pos": [14, 6, 13],
			"size": [2, 9, 2],
			"uv": {
				"*": [8, 3]
			}
		}
	],
	"bamboo_fence_gate": [
		{
			"if": "in_wall_bit == 0",
			"copy": "template_bamboo_fence_gate"
		},
		{
			"if": "in_wall_bit == 1",
			"copy": "template_bamboo_fence_gate",
			"translate": [0, -3, 0]
		}
	],
	"template_door": [ // upper door blocks don't contain all the block states, and I think that MCBE relies on the lower door to do everything. e.g. look at the nbt of a structure with door tops only, and you'll see why we need to do it this way.
		{
			"if": "upper_block_bit == 0",
			"pos": [0, 0, 0],
			"size": [16, 16, 3],
			"textures": {
				"*": "down",
				"up": "none"
			},
			"uv": {
				"*": [0, 0],
				"down": [0, 13],
				"west": [13, 0]
			},
			"flipTextureHorizontally": ["south", "west"]
		},
		{
			"if": "upper_block_bit == 0",
			"pos": [0, 16, 0], // upper half
			"size": [16, 16, 3],
			"textures": {
				"*": "side",
				"down": "none"
			},
			"uv": {
				"*": [0, 0],
				"west": [13, 0]
			},
			"flipTextureHorizontally": ["south", "west", "up"]
		}
	],
	"door": [
		{
			"if": "open_bit == 0",
			"copy": "template_door"
		},
		{
			"if": "open_bit == 1",
			"copy": "template_door",
			"rot": [0, -90, 0],
			"pivot": [1.5, 0, 1.5]
		}
	],
	"template_trapdoor": [ // direction 1 = east hinge, 2 = north hinge, 0 = west hinge, 3 = south hinge [west, east, north, south]
		{
			"if": "open_bit == 0 && direction >= 2",
			"pos": [0, 13, 0],
			"size": [16, 3, 16],
			"uv": {
				"side": [0, 0]
			}
		},
		{
			"if": "open_bit == 1 || direction < 2",
			"pos": [0, 13, 0],
			"size": [16, 3, 16],
			"uv": {
				"side": [0, 0]
			},
			"flipTextureHorizontally": ["down"], // when facing east/west the hinges are on the same side on the bottom + top, but when facing north/south they're on different sides
			"flipTextureVertically": ["down"]
		}
	],
	"trapdoor": [ // textures are wacky hence the long definition, but in the end it's pixel-perfect!
		{
			"if": "upside_down_bit == 0 && direction >= 2 && open_bit == 0",
			"copy": "template_trapdoor",
			"rot": [180, 0, 0]
		},
		{
			"if": "upside_down_bit == 0 && direction < 2 && open_bit == 0",
			"copy": "template_trapdoor",
			"rot": [180, 0, 0],
			"flipTextureHorizontally": ["down", "up"], // side changing for the bottom has to be negated here for the down face and added for the up face
			"flipTextureVertically": ["down", "up"]
		},
		{
			"if": "upside_down_bit == 1 && open_bit == 0",
			"copy": "template_trapdoor"
		},
		{
			"if": "upside_down_bit == 0 && open_bit == 1",
			"copy": "template_trapdoor",
			"rot": [90, 0, 0], // would be fun to animate these
			"pivot": [8, 14.5, 1.5],
			"translate": [0, -13, 0]
		},
		{
			"if": "upside_down_bit == 1 && open_bit == 1",
			"copy": "template_trapdoor",
			"rot": [-90, 0, 0], // would be fun to animate these
			"pivot": [8, 14.5, 1.5],
			"flipTextureHorizontally": ["side"],
			"flipTextureVertically": ["side"]
		}
	],
	"template_book": [
		{
			"pos": [1, 0, 3],
			"size": [6, 0, 10],
			"rot": [0, 0, 9],
			"pivot": [7, 0, 8],
			"textures": {
				"*": "textures/entity/enchanting_table_book"
			},
			"uv": {
				"*": [16, 0]
			},
			"textureSize": [64, 32]
		},
		{
			"pos": [9, 0, 3],
			"size": [6, 0, 10],
			"rot": [0, 0, -9],
			"pivot": [9, 0, 8],
			"textures": {
				"*": "textures/entity/enchanting_table_book"
			},
			"uv": {
				"*": [0, 0]
			},
			"textureSize": [64, 32]
		},
		{
			"pos": [7, 0, 3],
			"size": [2, 0, 10],
			"textures": {
				"*": "textures/entity/enchanting_table_book"
			},
			"uv": {
				"*": [12, 0]
			},
			"textureSize": [64, 32]
		},
		{
			"pos": [3, 0, 4],
			"size": [5, 1, 8],
			"rot": [0, 0, 9],
			"pivot": [8, 1, 8],
			"textures": {
				"*": "textures/entity/enchanting_table_book",
				"down": "none"
			},
			"uv": {
				"*": [1, 11]
			},
			"textureSize": [64, 32]
		},
		{
			"pos": [8, 0, 4],
			"size": [5, 1, 8],
			"rot": [0, 0, -9],
			"pivot": [8, 1, 8],
			"textures": {
				"*": "textures/entity/enchanting_table_book",
				"down": "none"
			},
			"uv": {
				"*": [1, 11]
			},
			"textureSize": [64, 32]
		},
		{
			"pos": [3, 1, 4],
			"size": [5, 0, 8],
			"rot": [0, 0, 24],
			"pivot": [8, 1, 8],
			"textures": {
				"*": "textures/entity/enchanting_table_book"
			},
			"uv": {
				"*": [1, 11]
			},
			"textureSize": [64, 32]
		},
		{
			"pos": [8, 1, 4],
			"size": [5, 0, 8],
			"rot": [0, 0, -24],
			"pivot": [8, 1, 8],
			"textures": {
				"*": "textures/entity/enchanting_table_book"
			},
			"uv": {
				"*": [1, 11]
			},
			"textureSize": [64, 32]
		}
	],
	"enchanting_table": [
		{
			"pos": [0, 0, 0],
			"size": [16, 12, 16]
		},
		{
			"copy": "template_book",
			"translate": [0, 13, 0]
		}
	],
	"loom": [
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"uvRot": {
				"up": 180
			}
		}
	],
	"carpet": [
		{
			"pos": [0, 0, 0],
			"size": [16, 1, 16]
		}
	],
	"fire": [ // very wacky
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 0],
			"rot": [-3.5, 0, 0],
			"pivot": [8, 0, 0]
		},
		{
			"pos": [0, 0, 0],
			"size": [0, 16, 16],
			"rot": [0, 0, 3.5],
			"pivot": [0, 0, 8]
		},
		{
			"pos": [0, 0, 16],
			"size": [16, 16, 0],
			"rot": [3.5, 0, 0],
			"pivot": [8, 0, 16]
		},
		{
			"pos": [16, 0, 0],
			"size": [0, 16, 16],
			"rot": [0, 0, -3.5],
			"pivot": [16, 0, 8]
		},
		{
			"pos": [0, 0, 5],
			"size": [16, 16, 0],
			"rot": [-22.5, 0, 0],
			"pivot": [8, 0, 5]
		},
		{
			"pos": [5, 0, 0],
			"size": [0, 16, 16],
			"rot": [0, 0, 22.5],
			"pivot": [5, 0, 8]
		},
		{
			"pos": [0, 0, 11],
			"size": [16, 16, 0],
			"rot": [22.5, 0, 0],
			"pivot": [8, 0, 11]
		},
		{
			"pos": [11, 0, 0],
			"size": [0, 16, 16],
			"rot": [0, 0, -22.5],
			"pivot": [11, 0, 8]
		}
	],
	"redstone_dust": [ // again, the shape isn't in block states. because we'll have to change the texture as well I'll put an entire cube here and make TextureAtlas.js deal with it...
		{
			// "pos": [0.125, 0.125, 0.125],
			// "size": [15.75, 15.75, 15.75]
			"pos": [0, 0.125, 0],
			"size": [16, 0, 16],
			"tint": "${Array.redstone_dust_tints[redstone_signal]}",
			"arrays": {
				"redstone_dust_tints": ["#4D0000", "#700000", "#7A0000", "#850000", "#8F0000", "#990000", "#A30000", "#AD0000", "#B80000", "#C20000", "#CC0000", "#D60000", "#E00000", "#EB0700", "#F51C00", "#FF3300"] // Generated with code adapted from net.minecraft.world.level.block.RedStoneWireBlock
			}
		}
	],
	"rail": [
		{
			"if": "rail_direction < 2 && rail_data_bit ?? 0 == 0", // flat on floor and unpowered
			"pos": [0, 1, 0],
			"size": [16, 0, 16]
		},
		{
			"if": "rail_direction > 5 || rail_direction < 2 && rail_data_bit ?? 0 == 1", // curved on floor (regular rails) or powered
			"pos": [0, 1, 0],
			"size": [16, 0, 16],
			"textures": {
				"*": "up"
			}
		},
		{
			"if": "rail_direction >= 2 && rail_direction <= 5 && rail_data_bit ?? 0 == 0", // sloped and unpowered
			"pos": [0, 1, 0],
			"size": [16, 0, 22.6274], // 16√2 ≈ 22.6274
			"rot": [45, 0, 0],
			"pivot": [8, 1, 0],
			"uv": {
				"*": [0, 0]
			},
			"uvSizes": {
				"*": [16, 16]
			}
		},
		{
			"if": "rail_direction >= 2 && rail_direction <= 5 && rail_data_bit ?? 0 == 1", // sloped and powered
			"pos": [0, 1, 0],
			"size": [16, 0, 22.6274], // 16√2 ≈ 22.6274
			"rot": [45, 0, 0],
			"pivot": [8, 1, 0],
			"textures": {
				"*": "up"
			},
			"uv": {
				"*": [0, 0]
			},
			"uvSizes": {
				"*": [16, 16]
			}
		}
	],
	"template_pink_petal_stem_1": [
		{
			"pos": [-0.5, 0, 0],
			"size": [1, 1, 0],
			"rot": [0, 45, 0],
			"pivot": [0, 0, 0],
			"variant": 1,
			"uv": {
				"*": [0, 4]
			},
			"tint": "#B6DB61" // cherry grove petal tint
		},
		{
			"pos": [-0.5, 0, 0],
			"size": [1, 1, 0],
			"rot": [0, -45, 0],
			"pivot": [0, 0, 0],
			"variant": 1,
			"uv": {
				"*": [0, 4]
			},
			"tint": "#B6DB61"
		}
	],
	"template_pink_petal_stem_2": [
		{
			"pos": [-0.5, 0, 0],
			"size": [1, 2, 0],
			"rot": [0, 45, 0],
			"pivot": [0, 0, 0],
			"variant": 1,
			"uv": {
				"*": [0, 4]
			},
			"tint": "#B6DB61"
		},
		{
			"pos": [-0.5, 0, 0],
			"size": [1, 2, 0],
			"rot": [0, -45, 0],
			"pivot": [0, 0, 0],
			"variant": 1,
			"uv": {
				"*": [0, 4]
			},
			"tint": "#B6DB61"
		}
	],
	"template_pink_petal_stem_3": [
		{
			"pos": [-0.5, 0, 0],
			"size": [1, 3, 0],
			"rot": [0, 45, 0],
			"pivot": [0, 0, 0],
			"variant": 1,
			"uv": {
				"*": [0, 4]
			},
			"tint": "#B6DB61"
		},
		{
			"pos": [-0.5, 0, 0],
			"size": [1, 3, 0],
			"rot": [0, -45, 0],
			"pivot": [0, 0, 0],
			"variant": 1,
			"uv": {
				"*": [0, 4]
			},
			"tint": "#B6DB61"
		}
	],
	"template_pink_petal_small_tall": [
		{
			"copy": "template_pink_petal_stem_3",
			"translate": [1.5, 0, 1.5]
		},
		{
			"pos": [0, 3, 0],
			"size": [3, 0, 3],
			"variant": 0,
			"flipTextureVertically": ["*"]
		}
	],
	"template_pink_petal_small_medium": [
		{
			"copy": "template_pink_petal_stem_2",
			"translate": [1.5, 0, 1.5]
		},
		{
			"pos": [0, 2, 0],
			"size": [3, 0, 3],
			"variant": 0,
			"flipTextureVertically": ["*"]
		}
	],
	"pink_petals": [
		{
			"copy": "template_pink_petal_small_tall",
			"translate": [13, 0, 4],
			"uv": {
				"*": [0, 4]
			}
		},
		{
			"copy": "template_pink_petal_small_tall",
			"translate": [10, 0, 0],
			"uv": {
				"*": [3, 0]
			}
		},
		{
			"copy": "template_pink_petal_small_tall",
			"translate": [8, 0, 5],
			"uv": {
				"*": [5, 5]
			}
		},
		{
			"if": "growth >= 1",
			"copy": "template_pink_petal_stem_1",
			"translate": [11.5, 0, 11.5]
		},
		{
			"if": "growth >= 1",
			"pos": [8, 1, 8],
			"size": [7, 0, 7],
			"variant": 0,
			"uv": {
				"*": [1, 8]
			},
			"flipTextureVertically": ["*"]
		},
		{
			"if": "growth >= 2",
			"copy": "template_pink_petal_small_medium",
			"translate": [0, 0, 9],
			"uv": {
				"*": [13, 9]
			}
		},
		{
			"if": "growth >= 2",
			"copy": "template_pink_petal_small_medium",
			"translate": [5, 0, 8],
			"uv": {
				"*": [8, 8]
			}
		},
		{
			"if": "growth >= 2",
			"copy": "template_pink_petal_stem_2",
			"translate": [4, 0, 14]
		},
		{
			"if": "growth >= 2",
			"pos": [2, 2, 12],
			"size": [4, 0, 4],
			"variant": 0,
			"uv": {
				"*": [10, 12]
			},
			"flipTextureVertically": ["*"]
		},
		{
			"if": "growth >= 3",
			"copy": "template_pink_petal_stem_2",
			"translate": [4.5, 0, 3.5]
		},
		{
			"if": "growth >= 3",
			"pos": [1, 2, 0],
			"size": [7, 0, 7],
			"variant": 0,
			"uv": {
				"*": [8, 0]
			},
			"flipTextureVertically": ["*"]
		}
	],
	"pressure_plate": [
		{
			"if": "redstone_signal == 0",
			"pos": [1, 0, 1],
			"size": [14, 1, 14]
		},
		{
			"if": "redstone_signal > 0",
			"pos": [1, 0, 1],
			"size": [14, 0.5, 14]
		}
	],
	"rows": [
		{
			"pos": [0, -1, 4],
			"size": [16, 16, 0],
			"uv": {
				"north": [0, 0]
			}
		},
		{
			"pos": [0, -1, 12],
			"size": [16, 16, 0],
			"uv": {
				"north": [0, 0]
			}
		},
		{
			"pos": [4, -1, 0],
			"size": [0, 16, 16],
			"uv": {
				"west": [0, 0]
			}
		},
		{
			"pos": [12, -1, 0],
			"size": [0, 16, 16],
			"uv": {
				"west": [0, 0]
			}
		}
	],
	"cake": [
		{
			"if": "bite_counter == 0",
			"pos": [1, 0, 1],
			"size": [14, 8, 14]
		},
		{
			"if": "bite_counter == 1",
			"pos": [1, 0, 1],
			"size": [12, 8, 14]
		},
		{
			"if": "bite_counter == 2",
			"pos": [1, 0, 1],
			"size": [10, 8, 14]
		},
		{
			"if": "bite_counter == 3",
			"pos": [1, 0, 1],
			"size": [8, 8, 14]
		},
		{
			"if": "bite_counter == 4",
			"pos": [1, 0, 1],
			"size": [6, 8, 14]
		},
		{
			"if": "bite_counter == 5",
			"pos": [1, 0, 1],
			"size": [4, 8, 14]
		},
		{
			"if": "bite_counter == 6",
			"pos": [1, 0, 1],
			"size": [2, 8, 14]
		}
	],
	"multi_face": [
		{
			"if": "multi_face_direction_bits & 1 > 0",
			"pos": [0, 0.0625, 0],
			"size": [16, 0, 16]
		},
		{
			"if": "multi_face_direction_bits & 2 > 0",
			"pos": [0, 15.9375, 0],
			"size": [16, 0, 16]
		},
		{
			"if": "multi_face_direction_bits & 4 > 0",
			"pos": [0, 0, 15.9375],
			"size": [16, 16, 0]
		},
		{
			"if": "multi_face_direction_bits & 8 > 0",
			"pos": [15.9375, 0, 0],
			"size": [0, 16, 16]
		},
		{
			"if": "multi_face_direction_bits & 16 > 0",
			"pos": [0, 0, 0.0625],
			"size": [16, 16, 0]
		},
		{
			"if": "multi_face_direction_bits & 32 > 0",
			"pos": [0.0625, 0, 0],
			"size": [0, 16, 16]
		}
	],
	"vine": [
		{
			"if": "vine_direction_bits & 1 > 0",
			"pos": [0, 0, 15.25],
			"size": [16, 16, 0]
		},
		{
			"if": "vine_direction_bits & 2 > 0",
			"pos": [15.25, 0, 0],
			"size": [0, 16, 16]
		},
		{
			"if": "vine_direction_bits & 4 > 0",
			"pos": [0, 0, 0.75],
			"size": [16, 16, 0]
		},
		{
			"if": "vine_direction_bits & 8 > 0",
			"pos": [0.75, 0, 0],
			"size": [0, 16, 16]
		}
		// TODO: add ceiling vines by checking blocks above
		// {
		// 	"if": "$structure_shapes[0][1][0] == cube",
		// 	"pos": [0, 15.25, 0],
		// 	"size": [16, 0, 16]
		// }
	],
	"daylight_detector": [ // the variant isn't in the block state since the inverted block is technically different...
		{
			"pos": [0, 0, 0],
			"size": [16, 6, 16]
		}
	],
	"wall": [
		{
			"if": "wall_post_bit == 1",
			"pos": [4, 0, 4],
			"size": [8, 16, 8]
		},
		{
			"if": "wall_connection_type_east == short",
			"pos": [0, 0, 5],
			"size": [8, 13, 6]
		},
		{
			"if": "wall_connection_type_east == tall",
			"pos": [0, 0, 5],
			"size": [8, 16, 6]
		},
		{
			"if": "wall_connection_type_north == short",
			"pos": [5, 0, 0],
			"size": [6, 13, 8]
		},
		{
			"if": "wall_connection_type_north == tall",
			"pos": [5, 0, 0],
			"size": [6, 16, 8]
		},
		{
			"if": "wall_connection_type_south == short",
			"pos": [5, 0, 8],
			"size": [6, 13, 8]
		},
		{
			"if": "wall_connection_type_south == tall",
			"pos": [5, 0, 8],
			"size": [6, 16, 8]
		},
		{
			"if": "wall_connection_type_west == short",
			"pos": [8, 0, 5],
			"size": [8, 13, 6]
		},
		{
			"if": "wall_connection_type_west == tall",
			"pos": [8, 0, 5],
			"size": [8, 16, 6]
		}
	],
	"nether_portal": [
		{
			"if": "portal_axis == x", // could do this with rotations as well. idk, i like this.
			"pos": [0, 0, 6],
			"size": [16, 16, 4]
		},
		{
			"if": "portal_axis == z",
			"pos": [6, 0, 0],
			"size": [4, 16, 16]
		}
	],
	"button": [
		{
			"if": "button_pressed_bit == 0",
			"pos": [5, 0, 6],
			"size": [6, 2, 4]
		},
		{
			"if": "button_pressed_bit == 1",
			"pos": [5, 0, 6],
			"size": [6, 1, 4]
		}
	],
	"chain": [
		{
			"pos": [6.5, 0, 8],
			"size": [3, 16, 0],
			"rot": [0, 45, 0],
			"uv": {
				"north": [0, 0] // north on zero-depth faces
			}
		},
		{
			"pos": [6.5, 0, 8],
			"size": [3, 16, 0],
			"rot": [0, -45, 0],
			"uv": {
				"north": [0, 0]
			},
			"textures": {
				"north": "down" // on chains, the first texture is side (which will be done above), and the second is down/up which we use here
			}
		}
	],
	"lever": [
		{ // default orientation is on the floor, facing north/south
			"pos": [5, 0, 4],
			"size": [6, 3, 8],
			"textures": {
				"*": "east" // this maps to lever_particle which is the cobblestone texture
			}
		},
		{
			"if": "open_bit == 0",
			"pos": [7, 1, 7],
			"size": [2, 10, 2],
			"uv": {
				"side": [7, 6],
				"down": [7, 8],
				"up": [7, 6]
			},
			"textures": {
				"east": "west", // without this, the east side of levers would be fully cobblestone
				"down": "none"
			},
			"rot": [-40, 0, 0],
			"pivot": [8, 0, 8]
		},
		{
			"if": "open_bit == 1",
			"pos": [7, 1, 7],
			"size": [2, 10, 2],
			"uv": {
				"side": [7, 6],
				"down": [7, 8],
				"up": [7, 6]
			},
			"textures": {
				"east": "west", // without this, the east side of levers would be fully cobblestone
				"down": "none"
			},
			"rot": [40, 0, 0],
			"pivot": [8, 0, 8]
		}
	],
	"ladder": [ // don't think about this, it needs to be like this to work with existing facing_direction rotation definitions
		{
			"pos": [0, 15.25, 0],
			"size": [16, 0, 16]
		}
	],
	"conduit": [
		{
			"pos": [5, 0, 5],
			"size": [6, 6, 6],
			"uv": {
				"west": [12, 6],
				"east": [0, 6],
				"down": [12, 0],
				"up": [6, 0],
				"north": [6, 6],
				"south": [18, 6]
			},
			"textureSize": [24, 12]
		}
	],
	"heavy_core": [
		{
			"pos": [4, 0, 4],
			"size": [8, 8, 8],
			"uv": {
				"side": [0, 8],
				"up": [0, 0],
				"down": [8, 0]
			}
		}
	],
	"template_small_redstone_torch": [ // only used in repeaters and comparators
		{
			"pos": [0, 5, 0],
			"size": [2, 0, 2],
			"uv": {
				"*": [7, 6]
			}
		},
		{
			"pos": [0, 5, 7],
			"size": [16, 16, 0],
			"translate": [-7, -5, -7]
		},
		{
			"pos": [0, 5, 9],
			"size": [16, 16, 0],
			"translate": [-7, -5, -7]
		},
		{
			"pos": [7, 5, 0],
			"size": [0, 16, 16],
			"translate": [-7, -5, -7]
		},
		{
			"pos": [9, 5, 0],
			"size": [0, 16, 16],
			"translate": [-7, -5, -7]
		}
	],
	"repeater": [
		{
			"pos": [0, 0, 0],
			"size": [16, 2, 16]
		},
		{
			"copy": "template_small_redstone_torch",
			"translate": [7, 2, 2],
			"terrainTexture": "repeater_torch"
		},
		{
			"if": "repeater_delay == 0",
			"copy": "template_small_redstone_torch",
			"translate": [7, 2, 6],
			"terrainTexture": "repeater_torch"
		},
		{
			"if": "repeater_delay == 1",
			"copy": "template_small_redstone_torch",
			"translate": [7, 2, 8],
			"terrainTexture": "repeater_torch"
		},
		{
			"if": "repeater_delay == 2",
			"copy": "template_small_redstone_torch",
			"translate": [7, 2, 10],
			"terrainTexture": "repeater_torch"
		},
		{
			"if": "repeater_delay == 3",
			"copy": "template_small_redstone_torch",
			"translate": [7, 2, 12],
			"terrainTexture": "repeater_torch"
		}
	],
	"comparator": [
		{
			"pos": [0, 0, 0],
			"size": [16, 2, 16]
		},
		{
			"copy": "template_small_redstone_torch",
			"translate": [4, 2, 11],
			"terrainTexture": "comparator_torch"
		},
		{
			"copy": "template_small_redstone_torch",
			"translate": [10, 2, 11],
			"terrainTexture": "comparator_torch"
		},
		{
			"if": "output_subtract_bit == 0",
			"pos": [7, 2, 2],
			"size": [2, 2, 2],
			"terrainTexture": "comparator_torch",
			"ignoreEigenvariant": true,
			"uv": {
				"*": [7, 6]
			}
		},
		{
			"if": "output_subtract_bit == 1",
			"pos": [7, 5, 2],
			"size": [2, 0, 2],
			"terrainTexture": "comparator_torch",
			"ignoreEigenvariant": true,
			"uv": {
				"*": [7, 6]
			}
		},
		{
			"if": "output_subtract_bit == 1",
			"pos": [0, 7, 7],
			"size": [16, 16, 0],
			"translate": [0, -5, -5],
			"terrainTexture": "comparator_torch",
			"ignoreEigenvariant": true
		},
		{
			"if": "output_subtract_bit == 1",
			"pos": [0, 7, 9],
			"size": [16, 16, 0],
			"translate": [0, -5, -5],
			"terrainTexture": "comparator_torch",
			"ignoreEigenvariant": true
		},
		{
			"if": "output_subtract_bit == 1",
			"pos": [7, 7, 0],
			"size": [0, 16, 16],
			"translate": [0, -5, -5],
			"terrainTexture": "comparator_torch",
			"ignoreEigenvariant": true
		},
		{
			"if": "output_subtract_bit == 1",
			"pos": [9, 7, 0],
			"size": [0, 16, 16],
			"translate": [0, -5, -5],
			"terrainTexture": "comparator_torch",
			"ignoreEigenvariant": true
		}
	],
	"liquid": [
		{
			"if": "liquid_depth == 0",
			"pos": [0, 0, 0],
			"size": [16, 14, 16]
		},
		{
			"if": "liquid_depth == 1",
			"pos": [0, 0, 0],
			"size": [16, 12.5, 16]
		},
		{
			"if": "liquid_depth == 2",
			"pos": [0, 0, 0],
			"size": [16, 10.5, 16]
		},
		{
			"if": "liquid_depth == 3",
			"pos": [0, 0, 0],
			"size": [16, 9, 16]
		},
		{
			"if": "liquid_depth == 4",
			"pos": [0, 0, 0],
			"size": [16, 7, 16]
		},
		{
			"if": "liquid_depth == 5",
			"pos": [0, 0, 0],
			"size": [16, 5.5, 16]
		},
		{
			"if": "liquid_depth == 6",
			"pos": [0, 0, 0],
			"size": [16, 3.5, 16]
		},
		{
			"if": "liquid_depth == 7",
			"pos": [0, 0, 0],
			"size": [16, 1.5, 16]
		},
		{
			"if": "liquid_depth >= 8",
			"pos": [0, 0, 0],
			"size": [16, 16, 16]
		}
	],
	"scaffolding": [ // todo: fix top bit
		{
			"pos": [0, 14, 0],
			"size": [16, 2, 16],
			"textures": {
				"down": "none"
			}
		},
		{
			"pos": [0, 0, 0],
			"size": [2, 14, 2]
		},
		{
			"pos": [14, 0, 0],
			"size": [2, 14, 2]
		},
		{
			"pos": [0, 0, 14],
			"size": [2, 14, 2]
		},
		{
			"pos": [14, 0, 14],
			"size": [2, 14, 2]
		},
		{
			"if": "stability > 0",
			"pos": [2, 0, 0],
			"size": [12, 2, 2],
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "stability > 0",
			"pos": [2, 0, 14],
			"size": [12, 2, 2],
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "stability > 0",
			"pos": [0, 0, 2],
			"size": [2, 2, 12],
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "stability > 0",
			"pos": [14, 0, 2],
			"size": [2, 2, 12],
			"textures": {
				"*": "down"
			}
		}
	],
	"hopper": [
		{ // hoppers in bedrock actually have an extra pixel inset on the top texture but it's hardly noticeable.
			"pos": [2, 10, 2],
			"size": [12, 1, 12],
			"textures": {
				"up": "down"
			}
		},
		{
			"pos": [0, 10, 0],
			"size": [16, 6, 2],
			"textures": {
				"south": "north"
			}
		},
		{
			"pos": [0, 10, 14],
			"size": [16, 6, 2]
		},
		{
			"pos": [0, 10, 2],
			"size": [2, 6, 12],
			"textures": {
				"west": "north"
			}
		},
		{
			"pos": [14, 10, 2],
			"size": [2, 6, 12],
			"textures": {
				"east": "north"
			}
		},
		{
			"pos": [4, 4, 4],
			"size": [8, 6, 8],
			"textures": {
				"*": "north"
			}
		},
		{
			"if": "facing_direction == 0", // facing down
			"pos": [6, 0, 6],
			"size": [4, 4, 4],
			"textures": {
				"*": "north"
			}
		},
		{
			"if": "facing_direction > 0", // facing other directions. this is north; other directions are just rotations.
			"pos": [6, 4, 0],
			"size": [4, 4, 4],
			"textures": {
				"*": "north"
			}
		}
	],
	"template_wall_sign": [
		{
			"pos": [0.25, 4.25, 14.25],
			"size": [15.5, 7.75, 1.5],
			"textureSize": [64, 32],
			"uv": {
				"north": [2, 2],
				"south": [2, 2],
				"east": [0, 2],
				"west": [0, 2],
				"up": [2, 0],
				"down": [2, 0]
			},
			"uvSizes": {
				"north": [24, 12],
				"south": [24, 12],
				"east": [2, 12],
				"west": [2, 12],
				"up": [24, 2],
				"down": [24, 2]
			}
		}
	],
	"wall_sign": [
		{
			"copy": "template_wall_sign",
			"textures": {
				"*": "#tex"
			}
		}
	],
	"wall_sign_prefix": [ // modern signs have the sign type as the prefix in the texture file name
		{
			"copy": "template_wall_sign",
			"textures": {
				"*": "textures/entity/${#block_name[:-10]}_sign"
			}
		}
	],
	"wall_sign_suffix": [ // old signs have the sign name as the suffix in the texture file name
		{
			"copy": "template_wall_sign",
			"textures": {
				"*": "textures/entity/sign_${#block_name[:-10]}"
			}
		}
	],
	"template_standing_sign": [
		{
			"pos": [7.25, 0, 7.25],
			"size": [1.5, 8.25, 1.5],
			"textureSize": [64, 32],
			"uv": {
				"*": [2, 16]
			},
			"uvSizes": {
				"side": [2, 12],
				"up": [2, 2],
				"down": [2, 2]
			}
		},
		{
			"pos": [0.25, 8.25, 7.25],
			"size": [15.5, 7.75, 1.5],
			"textureSize": [64, 32],
			"uv": {
				"north": [2, 2],
				"south": [2, 2],
				"east": [0, 2],
				"west": [0, 2],
				"up": [2, 0],
				"down": [2, 0]
			},
			"uvSizes": {
				"north": [24, 12],
				"south": [24, 12],
				"east": [2, 12],
				"west": [2, 12],
				"up": [24, 2],
				"down": [24, 2]
			}
		}
	],
	"standing_sign": [
		{
			"copy": "template_standing_sign",
			"textures": {
				"*": "#tex"
			}
		}
	],
	"standing_sign_prefix": [ // modern signs have the sign type as the prefix in the texture file name
		{
			"copy": "template_standing_sign",
			"textures": {
				"*": "textures/entity/${#block_name[:-14]}_sign"
			}
		}
	],
	"standing_sign_suffix": [ // old signs have the sign name as the suffix in the texture file name
		{
			"copy": "template_standing_sign",
			"textures": {
				"*": "textures/entity/sign_${#block_name[:-14]}"
			}
		}
	],
	"top_snow": [
		{
			"if": "height == 0",
			"pos": [0, 0, 0],
			"size": [16, 2, 16]
		},
		{
			"if": "height == 1",
			"pos": [0, 0, 0],
			"size": [16, 4, 16]
		},
		{
			"if": "height == 2",
			"pos": [0, 0, 0],
			"size": [16, 6, 16]
		},
		{
			"if": "height == 3",
			"pos": [0, 0, 0],
			"size": [16, 8, 16]
		},
		{
			"if": "height == 4",
			"pos": [0, 0, 0],
			"size": [16, 10, 16]
		},
		{
			"if": "height == 5",
			"pos": [0, 0, 0],
			"size": [16, 12, 16]
		},
		{
			"if": "height == 6",
			"pos": [0, 0, 0],
			"size": [16, 14, 16]
		},
		{
			"if": "height == 7",
			"pos": [0, 0, 0],
			"size": [16, 16, 16]
		}
	],
	"anvil": [
		{
			"pos": [2, 0, 2],
			"size": [12, 4, 12],
			"textures": {
				"*": "side"
			}
		},
		{
			"pos": [4, 4, 3],
			"size": [8, 1, 10],
			"textures": {
				"*": "side" // this is the small, thin plate above the base; interestingly, the cracked texture is on this bit as well. however, on Java it has the "correct texture", so I'm going with that.
			}
		},
		{
			"pos": [6, 5, 4],
			"size": [4, 5, 8]
		},
		{
			"pos": [3, 10, 0],
			"size": [10, 6, 16]
		}
	],
	"template_candle_flame": [
		{
			"pos": [-0.75, 0, 0],
			"size": [1.5, 2, 0],
			"rot": [0, 45, 0],
			"pivot": [0, 0, 0],
			"textures": {
				"*": "textures/particle/particles"
			},
			"textureSize": [128, 128],
			"uv": {
				"*": [0, 24]
			},
			"uvSizes": {
				"*": [8, 8]
			}
		},
		{
			"pos": [-0.75, 0, 0],
			"size": [1.5, 2, 0],
			"rot": [0, -45, 0],
			"pivot": [0, 0, 0],
			"textures": {
				"*": "textures/particle/particles"
			},
			"textureSize": [128, 128],
			"uv": {
				"*": [0, 24]
			},
			"uvSizes": {
				"*": [8, 8]
			}
		}
	],
	"template_candle_tall": [ // at origin
		{
			"pos": [0, 0, 0],
			"size": [2, 6, 2],
			"uv": {
				"side": [0, 8],
				"up": [0, 6],
				"down": [0, 14]
			}
		},
		{
			"pos": [0.5, 6, 1],
			"size": [1, 1, 0],
			"rot": [0, 45, 0],
			"pivot": [1, 0, 1],
			"uv": {
				"*": [0, 5]
			}
		},
		{
			"pos": [0.5, 6, 1],
			"size": [1, 1, 0],
			"rot": [0, -45, 0],
			"pivot": [1, 0, 1],
			"uv": {
				"*": [0, 5]
			}
		},
		{
			"if": "lit == 1",
			"copy": "template_candle_flame",
			"translate": [1, 7, 1]
		}
	],
	"template_candle_medium": [
		{
			"pos": [0, 0, 0],
			"size": [2, 5, 2],
			"uv": {
				"side": [0, 8],
				"up": [0, 6],
				"down": [0, 14]
			}
		},
		{
			"pos": [0.5, 5, 1],
			"size": [1, 1, 0],
			"rot": [0, 45, 0],
			"pivot": [1, 0, 1],
			"uv": {
				"*": [0, 5]
			}
		},
		{
			"pos": [0.5, 5, 1],
			"size": [1, 1, 0],
			"rot": [0, -45, 0],
			"pivot": [1, 0, 1],
			"uv": {
				"*": [0, 5]
			}
		},
		{
			"if": "lit == 1",
			"copy": "template_candle_flame",
			"translate": [1, 6, 1]
		}
	],
	"template_candle_short": [
		{
			"pos": [0, 0, 0],
			"size": [2, 3, 2],
			"uv": {
				"side": [0, 8],
				"up": [0, 6],
				"down": [0, 14]
			}
		},
		{
			"pos": [0.5, 3, 1],
			"size": [1, 1, 0],
			"rot": [0, 45, 0],
			"pivot": [1, 0, 1],
			"uv": {
				"*": [0, 5]
			}
		},
		{
			"pos": [0.5, 3, 1],
			"size": [1, 1, 0],
			"rot": [0, -45, 0],
			"pivot": [1, 0, 1],
			"uv": {
				"*": [0, 5]
			}
		},
		{
			"if": "lit == 1",
			"copy": "template_candle_flame",
			"translate": [1, 4, 1]
		}
	],
	"candles": [
		{
			"if": "candles == 0",
			"copy": "template_candle_tall",
			"translate": [7, 0, 7]
		},
		{
			"if": "candles == 1",
			"copy": "template_candle_tall",
			"translate": [5, 0, 7]
		},
		{
			"if": "candles == 1",
			"copy": "template_candle_medium",
			"translate": [9, 0, 8]
		},
		{
			"if": "candles == 2",
			"copy": "template_candle_tall",
			"translate": [6, 0, 6]
		},
		{
			"if": "candles == 2",
			"copy": "template_candle_medium",
			"translate": [9, 0, 7]
		},
		{
			"if": "candles == 2",
			"copy": "template_candle_short",
			"translate": [7, 0, 9]
		},
		{
			"if": "candles == 3",
			"copy": "template_candle_tall",
			"translate": [6, 0, 5]
		},
		{
			"if": "candles == 3",
			"copy": "template_candle_medium",
			"translate": [9, 0, 5]
		},
		{
			"if": "candles == 3",
			"copy": "template_candle_medium",
			"translate": [5, 0, 8]
		},
		{
			"if": "candles == 3",
			"copy": "template_candle_short",
			"translate": [8, 0, 8]
		}
	],
	"candle_cake": [
		{
			"copy": "cake",
			"blockStates": {
				"bite_counter": 0, // use the full cake model
				"lit": 0 // without this, lit candle cakes would show the inside texture on the west
			}
		},
		{
			"copy": "template_candle_tall",
			"translate": [7, 8, 7],
			"terrainTexture": "${#block_name[:-5]}" // block name is blue_candle_cake, we need to remove _cake
		}
	],
	"stonecutter": [
		{
			"pos": [0, 0, 0],
			"size": [16, 9, 16],
			"textures": {
				"side": "north"
			}
		},
		{
			"pos": [1, 9, 8],
			"size": [14, 7, 0],
			"textures": {
				"*": "west"
			},
			"uv": {
				"*": [1, 9]
			}
		}
	],
	"grindstone": [ // standing; will be rotated later
		{
			"pos": [2, 0, 6],
			"size": [2, 7, 4],
			"textures": {
				"*": "down"
			}
		},
		{
			"pos": [12, 0, 6],
			"size": [2, 7, 4],
			"textures": {
				"*": "down"
			}
		},
		{
			"pos": [2, 7, 5],
			"size": [2, 6, 6],
			"textures": {
				"*": "north"
			},
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"pos": [12, 7, 5],
			"size": [2, 6, 6],
			"textures": {
				"*": "north"
			},
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"pos": [4, 4, 2],
			"size": [8, 12, 12],
			"textures": {
				"north": "up",
				"south": "up",
				"down": "up"
			},
			"uv": {
				"*": [0, 0]
			}
		}
	],
	"template_bell_main": [
		{
			"pos": [0, 0, 0],
			"size": [8, 2, 8],
			"textures": {
				"up": "down",
				"side": "north"
			},
			"uv": {
				"side": [0, 7],
				"down": [0, 0],
				"up": [0, 0]
			}
		},
		{
			"pos": [1, 2, 1],
			"size": [6, 7, 6],
			"textures": {
				"side": "north",
				"down": "up"
			},
			"uv": {
				"side": [1, 0],
				"down": [1, 1],
				"up": [1, 1]
			}
		}
	],
	"bell": [
		{
			"if": "attachment == standing",
			"copy": "template_bell_main",
			"translate": [4, 1, 4]
		},
		{
			"if": "attachment == standing",
			"pos": [2, 10, 7],
			"size": [12, 2, 2],
			"textures": {
				"*": "east" // wooden beam
			}
		},
		{
			"if": "attachment == standing",
			"pos": [0, 0, 6],
			"size": [2, 13, 4],
			"textures": {
				"*": "west" // stone
			}
		},
		{
			"if": "attachment == standing",
			"pos": [14, 0, 6],
			"size": [2, 13, 4],
			"textures": {
				"*": "west" // stone
			}
		},
		{
			"if": "attachment != standing",
			"copy": "template_bell_main",
			"translate": [4, 4, 4]
		},
		{
			"if": "attachment == hanging",
			"pos": [7, 13, 7],
			"size": [2, 3, 2],
			"textures": {
				"*": "east"
			}
		},
		{
			"if": "attachment == side",
			"pos": [7, 13, 0],
			"size": [2, 2, 13],
			"textures": {
				"*": "east"
			}
		},
		{
			"if": "attachment == multiple",
			"pos": [7, 13, 0],
			"size": [2, 2, 16],
			"textures": {
				"*": "east"
			}
		}
	],
	"template_lantern": [
		{
			"pos": [0, 0, 0],
			"size": [6, 7, 6],
			"uv": {
				"side": [0, 2],
				"down": [0, 9],
				"up": [0, 9]
			}
		},
		{
			"pos": [1, 7, 1],
			"size": [4, 2, 4],
			"uv": {
				"side": [1, 0],
				"up": [1, 10],
				"down": [1, 10]
			}
		}
	],
	"lantern": [
		{
			"if": "hanging == 0",
			"copy": "template_lantern",
			"translate": [5, 0, 5]
		},
		{
			"if": "hanging == 0",
			"pos": [6.5, 9, 8],
			"size": [3, 2, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [11, 10]
			}
		},
		{
			"if": "hanging == 0",
			"pos": [6.5, 9, 8],
			"size": [3, 2, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [11, 10]
			}
		},
		{
			"if": "hanging == 1",
			"copy": "template_lantern",
			"translate": [5, 2, 5]
		},
		{
			"if": "hanging == 1",
			"pos": [6.5, 11, 8],
			"size": [3, 5, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [11, 0]
			},
			"uvSizes": {
				"*": [3, 6]
			}
		},
		{
			"if": "hanging == 1",
			"pos": [6.5, 11, 8],
			"size": [3, 5, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [11, 6]
			},
			"uvSizes": {
				"*": [3, 6]
			}
		}
	],
	"template_campfire_log_x": [
		{
			"pos": [0, 0, 0],
			"size": [16, 4, 4],
			"textures": {
				"*": "down"
			},
			"uv": {
				"*": [0, 0],
				"west": [0, 4],
				"east": [0, 4]
			}
		}
	],
	"template_campfire_log_z": [
		{
			"pos": [0, 0, 0],
			"size": [16, 4, 4],
			"rot": [0, -90, 0],
			"pivot": [2, 0, 2],
			"textures": {
				"*": "down"
			},
			"uv": {
				"*": [0, 0],
				"west": [0, 4],
				"east": [0, 4]
			}
		}
	],
	"campfire": [ // facing west
		{
			"copy": "template_campfire_log_z",
			"translate": [1, 0, 0]
		},
		{
			"copy": "template_campfire_log_z",
			"translate": [11, 0, 0]
		},
		{
			"copy": "template_campfire_log_x",
			"translate": [0, 3, 1]
		},
		{
			"copy": "template_campfire_log_x",
			"translate": [0, 3, 11]
		},
		{
			"if": "extinguished == 0",
			"pos": [0, 0, 5],
			"size": [16, 1, 6],
			"rot": [0, 90, 0],
			"textures": {
				"*": "side",
				"north": "none",
				"south": "none"
			},
			"uv": {
				"*": [0, 14],
				"down": [0, 8],
				"up": [0, 8]
			}
		},
		{
			"if": "extinguished == 1",
			"pos": [0, 0, 5],
			"size": [16, 1, 6],
			"rot": [0, 90, 0],
			"textures": {
				"*": "down",
				"north": "none",
				"south": "none"
			},
			"uv": {
				"*": [0, 14],
				"down": [0, 8],
				"up": [0, 8]
			}
		},
		{
			"if": "extinguished == 0",
			"pos": [-2, 1, 8],
			"size": [20, 15, 0],
			"rot": [0, 45, 0],
			"textures": {
				"*": "up"
			},
			"uv": {
				"*": [0, 0]
			},
			"uvSizes": {
				"*": [16, 16]
			}
		},
		{
			"if": "extinguished == 0",
			"pos": [-2, 1, 8],
			"size": [20, 15, 0],
			"rot": [0, -45, 0],
			"textures": {
				"*": "up"
			},
			"uv": {
				"*": [0, 0]
			},
			"uvSizes": {
				"*": [16, 16]
			}
		}
	],
	"dragon_egg": [
		{
			"pos": [6, 15, 6],
			"size": [4, 1, 4]
		},
		{
			"pos": [5, 13, 5],
			"size": [6, 2, 6]
		},
		{
			"pos": [3, 11, 3],
			"size": [10, 2, 10]
		},
		{
			"pos": [2, 8, 2],
			"size": [12, 3, 12]
		},
		{
			"pos": [1, 3, 1],
			"size": [14, 5, 14]
		},
		{
			"pos": [2, 1, 2],
			"size": [12, 2, 12]
		},
		{
			"pos": [3, 0, 3],
			"size": [10, 1, 10]
		}
	],
	"sniffer_egg": [
		{
			"pos": [1, 0, 2],
			"size": [14, 16, 12],
			"uv": {
				"*": [0, 0]
			}
		}
	],
	"turtle_eggs": [
		{
			"pos": [6, 0, 4],
			"size": [5, 7, 5],
			"uv": {
				"side": [1, 4],
				"down": [0, 0],
				"up": [0, 0]
			},
			"uvSizes": {
				"side": [4, 7],
				"down": [4, 4],
				"up": [4, 4]
			}
		},
		{
			"if": "turtle_egg_count == two_egg || turtle_egg_count == three_egg || turtle_egg_count == four_egg",
			"pos": [11, 0, 7],
			"size": [4, 5, 4],
			"uv": {
				"side": [10, 10],
				"down": [6, 7],
				"up": [6, 7]
			}
		},
		{
			"if": "turtle_egg_count == three_egg || turtle_egg_count == four_egg",
			"pos": [2, 0, 7],
			"size": [3, 4, 3],
			"uv": {
				"side": [8, 3],
				"down": [5, 0],
				"up": [5, 0]
			}
		},
		{
			"if": "turtle_egg_count == four_egg",
			"pos": [6, 0, 10],
			"size": [3, 3, 3],
			"uv": {
				"side": [4, 11],
				"down": [0, 11],
				"up": [0, 11]
			},
			"uvSizes": {
				"*": [4, 4]
			}
		}
	],
	"end_rod": [
		{
			"pos": [6, 0, 6],
			"size": [4, 1, 4],
			"uv": {
				"*": [2, 2]
			}
		},
		{
			"pos": [7, 1, 7],
			"size": [2, 15, 2],
			"uv": {
				"side": [0, 0],
				"down": [2, 0],
				"up": [2, 0]
			}
		}
	],
	"end_portal_frame": [
		{
			"pos": [0, 0, 0],
			"size": [16, 13, 16]
		},
		{
			"if": "end_portal_eye_bit == 1",
			"pos": [4, 13, 4],
			"size": [8, 3, 8],
			"textures": {
				"*": "carried"
			},
			"uv": {
				"side": [4, 0],
				"down": [4, 4],
				"up": [4, 4]
			}
		}
	],
	"end_portal": [
		{
			"pos": [0, 12, 0],
			"size": [16, 0, 16],
			"textures": {
				"*": "textures/entity/end_portal"
			},
			"textureSize": [256, 256],
			"uvSizes": {
				"*": [64, 64] // this just scales it up so the little blue specs are more visible
			},
			"tint": "#56A5AA" // average colour of textures/environment/end_portal_colors.png
		}
	],
	"end_gateway": [ // basically an end portal cube. does not do justice to how cool it looks in the game.
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"*": "textures/entity/end_portal"
			},
			"textureSize": [256, 256],
			"uvSizes": {
				"*": [64, 64]
			},
			"tint": "#56A5AA"
		}
	],
	"observer": [ // the top face is rotated
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"up": "none"
			},
			"flipTextureHorizontally": ["east"]
		},
		{
			"pos": [0, 15, 0],
			"size": [16, 1, 16], // we can't make it 0-height as that will automatically use the down face and flip it back to the wrong way
			"rot": [0, 180, 0],
			"textures": {
				"side": "none",
				"down": "none"
			}
		}
	],
	"composter": [
		{
			"pos": [2, 0, 2],
			"size": [12, 2, 12],
			"textures": {
				"up": "down"
			},
			"variant": 0
		},
		{
			"pos": [0, 0, 0],
			"size": [2, 16, 16],
			"textures": {
				"up": "down"
			},
			"variant": 0
		},
		{
			"pos": [14, 0, 0],
			"size": [2, 16, 16],
			"textures": {
				"up": "down"
			},
			"variant": 0
		},
		{
			"pos": [2, 0, 0],
			"size": [12, 16, 2],
			"textures": {
				"up": "down"
			},
			"variant": 0
		},
		{
			"pos": [2, 0, 14],
			"size": [12, 16, 2],
			"textures": {
				"up": "down"
			},
			"variant": 0
		},
		{
			"if": "composter_fill_level == 1",
			"pos": [2, 2, 2],
			"size": [12, 1, 12]
		},
		{
			"if": "composter_fill_level == 2",
			"pos": [2, 2, 2],
			"size": [12, 3, 12]
		},
		{
			"if": "composter_fill_level == 3",
			"pos": [2, 2, 2],
			"size": [12, 5, 12]
		},
		{
			"if": "composter_fill_level == 4",
			"pos": [2, 2, 2],
			"size": [12, 7, 12]
		},
		{
			"if": "composter_fill_level == 5",
			"pos": [2, 2, 2],
			"size": [12, 9, 12]
		},
		{
			"if": "composter_fill_level == 6",
			"pos": [2, 2, 2],
			"size": [12, 11, 12]
		},
		{
			"if": "composter_fill_level >= 7",
			"pos": [2, 2, 2],
			"size": [12, 13, 12]
		}
	],
	"piston": [
		{
			"if": "entity.State == 0 || entity.State == 3", // unextended or pulling
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"up": "carried.up"
			},
			"flipTextureHorizontally": ["up"],
			"flipTextureVertically": ["up"]
		},
		{
			"if": "entity.State == 1 || entity.State == 2", // pushing or extended
			"pos": [0, 0, 0],
			"size": [16, 12, 16]
		},
		{
			"if": "entity.State == 1 || entity.State == 2", // pushing or extended
			"pos": [5, 12, 5],
			"size": [6, 8, 6],
			"textures": {
				"*": "#tex"
			},
			"textureSize": [128, 32],
			"uv": {
				"side": [64, 24],
				"up": [70, 18],
				"down": [70, 18] // todo: cull this face
			}
		},
		{
			"if": "entity.State == 1 || entity.State == 2", // pushing or extended
			"pos": [6, 20, 6],
			"size": [4, 8, 4],
			"textures": {
				"*": "#tex"
			},
			"textureSize": [128, 32],
			"uv": {
				"side": [64, 4]
			}
		},
		{
			"if": "entity.State == 1 || entity.State == 2", // pushing or extended
			"pos": [0, 28, 0],
			"size": [16, 4, 16],
			"textures": {
				"*": "#tex"
			},
			"textureSize": [128, 32],
			"uv": {
				"side": [0, 16],
				"down": [32, 0],
				"up": [16, 0]
			},
			"flipTextureHorizontally": ["up"],
			"flipTextureVertically": ["up"]
		}
	],
	"dispenser": [
		{
			"if": "facing_direction >= 2", // sideways
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"side": "north",
				"north": "south"
			}
		},
		{
			"if": "facing_direction < 2", // up or down
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"side": "up",
				"down": "east"
			},
			"flipTextureVertically": ["side"]
		}
	],
	"barrel": [
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"side": "west",
				"up": "north",
				"down": "south"
			}
		}
	],
	"furnace": [ // facing south by default
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"south": "north",
				"north": "south"
			}
		}
	],
	"lit_furnace": [ // facing east by default
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"east": "north",
				"north": "east"
			}
		}
	],
	"glass_pane": [ // todo: add connections to other blocks correctly
		{
			"pos": [7, 0, 0],
			"size": [2, 16, 16],
			"textures": {
				"east": "up",
				"up": "east",
				"down": "east"
			}
		}
	],
	"metal_bars": [ // in bedrock only the right bit of the texture (with the low bar) is used, the left bit (with the high bar) is unused. this is probably due to how it connects to other blocks. https://bugs.mojang.com/browse/MCPE-89064
		{
			"pos": [7, 0, 0],
			"size": [2, 16, 16],
			"textures": {
				"east": "none",
				"west": "none"
			}
		},
		{
			"pos": [8, 0, 0],
			"size": [0, 16, 16]
		}
	],
	"item_frame": [
		{
			"pos": [3, 3, 15.5],
			"size": [10, 10, 0.5]
		},
		{
			"pos": [2, 2, 15],
			"size": [12, 1, 1],
			"textures": {
				"*": "textures/blocks/planks_birch"
			}
		},
		{
			"pos": [2, 13, 15],
			"size": [12, 1, 1],
			"textures": {
				"*": "textures/blocks/planks_birch"
			}
		},
		{
			"pos": [2, 3, 15],
			"size": [1, 10, 1],
			"textures": {
				"*": "textures/blocks/planks_birch"
			}
		},
		{
			"pos": [13, 3, 15],
			"size": [1, 10, 1],
			"textures": {
				"*": "textures/blocks/planks_birch"
			}
		}
	],
	"bubble_column": [ // this is like when the fancy bubbles setting is off
		{
			"pos": [1, 0, 1],
			"size": [14, 16, 14],
			"textures": {
				"side": "north",
				"up": "none",
				"down": "none"
			}
		},
		{
			"pos": [5, 0, 5],
			"size": [6, 16, 6],
			"textures": {
				"side": "south",
				"up": "none",
				"down": "none"
			}
		}
	],
	"stalagmite_or_stalactite": [
		{
			"if": "dripstone_thickness == tip",
			"copy": "cross_texture",
			"textures": {
				"*": "north"
			}
		},
		{
			"if": "dripstone_thickness == frustum",
			"copy": "cross_texture",
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "dripstone_thickness == middle",
			"copy": "cross_texture",
			"textures": {
				"*": "south"
			}
		},
		{
			"if": "dripstone_thickness == base",
			"copy": "cross_texture",
			"textures": {
				"*": "east"
			}
		},
		{
			"if": "dripstone_thickness == merge",
			"copy": "cross_texture",
			"textures": {
				"*": "west"
			}
		}
	],
	"decorated_pot": [
		{
			"pos": [1, 0, 1],
			"size": [14, 16, 14],
			"variant": 0,
			"textures": {
				"up": "none",
				"down": "none",
				"west": "textures/blocks/${#block_entity_data.sherds[1][10:-6] ?? SET_WHOLE_STRING(side)}_pattern", // sherd name is minecraft:idk_pottery_sherd, we want to look at textures/blocks/idk_pottery_pattern
				"east": "textures/blocks/${#block_entity_data.sherds[2][10:-6] ?? SET_WHOLE_STRING(side)}_pattern",
				"north": "textures/blocks/${#block_entity_data.sherds[0][10:-6] ?? SET_WHOLE_STRING(side)}_pattern",
				"south": "textures/blocks/${#block_entity_data.sherds[3][10:-6] ?? SET_WHOLE_STRING(side)}_pattern"
			}
		},
		{
			"pos": [1, 0, 1],
			"size": [14, 16, 14],
			"variant": 1,
			"textureSize": [32, 32],
			"textures": {
				"side": "none" // this is just the top and bottom. the texture is stored in a different file which is why it must be split up into 2 cubes :/
			},
			"uv": {
				"up": [0, 13],
				"down": [0, 13]
			}
		},
		{
			"pos": [5, 16, 5],
			"size": [6, 1, 6],
			"variant": 1,
			"textureSize": [32, 32],
			"textures": {
				"up": "none",
				"down": "none"
			},
			"uv": {
				"side": [0, 11]
			}
		},
		{
			"pos": [4, 17, 4],
			"size": [8, 3, 8],
			"variant": 1,
			"textureSize": [32, 32],
			"uv": {
				"side": [0, 8],
				"up": [8, 0],
				"down": [16, 0]
			}
		}
	],
	"cactus": [
		{
			"if": "!#copied_via_copy_block",
			"pos": [0, 0, 1],
			"size": [16, 16, 14],
			"textures": {
				"east": "none",
				"west": "none",
				"up": "none",
				"down": "none"
			}
		},
		{
			"if": "!#copied_via_copy_block",
			"pos": [1, 0, 0],
			"size": [14, 16, 16],
			"textures": {
				"north": "none",
				"south": "none",
				"up": "none",
				"down": "none"
			}
		},
		{
			"if": "!#copied_via_copy_block",
			"pos": [1, 0, 1],
			"size": [14, 16, 14],
			"textures": {
				"side": "none"
			}
		},
		{
			"if": "#copied_via_copy_block",
			"pos": [6, 0, 6],
			"size": [4, 12, 4],
			"textures": {
				"down": "none"
			}
		}
	],
	"double_plant": [
		{
			"if": "upper_block_bit == 0",
			"copy": "cross_texture",
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "upper_block_bit == 1",
			"copy": "cross_texture",
			"textures": {
				"*": "up"
			}
		}
	],
	"sunflower": [
		{
			"copy": "double_plant"
		},
		{
			"if": "upper_block_bit == 1",
			"pos": [6.4, -0.5, 0],
			"size": [0, 16, 16],
			"rot": [0, 0, 20],
			"uv": {
				"*": [0, 0]
			},
			"variant": 0 // this is the front texture
		},
		{
			"if": "upper_block_bit == 1",
			"pos": [6.7, -0.5, 0],
			"size": [0, 16, 16],
			"rot": [0, 0, 20],
			"uv": {
				"*": [0, 0]
			},
			"variant": 1 // this is the back texture
		}
	],
	"mangrove_propagule": [
		{
			"if": "hanging == 0",
			"copy": "cross_texture"
		},
		{
			"if": "hanging == 1",
			"pos": [7, 14, 8],
			"size": [2, 2, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"if": "hanging == 1",
			"pos": [7, 14, 8],
			"size": [2, 2, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"if": "hanging == 1",
			"pos": [7, 13, 7],
			"size": [2, 1, 2],
			"uv": {
				"up": [0, 0],
				"side": [0, 2],
				"down": [0, 3]
			}
		},
		{
			"if": "hanging == 1",
			"pos": [7, 13.4142, 8.9176], // tan(22.5deg) = √2 - 1, 13 + tan(22.5deg) = 12 + √2 ≈ 13.4142, 8 + 2 - √(1^2 + tan(22.5deg)^2) = 10 - √(4 - 2√2) ≈ 8.9176
			"size": [2, 0, 2],
			"rot": [-22.5, 0, 0],
			"pivot": [8, 13.4142, 8],
			"uv": {
				"*": [8, 3]
			}
		},
		{
			"if": "hanging == 1",
			"pos": [7, 13.4142, 8.9176],
			"size": [2, 0, 2],
			"rot": [-22.5, 90, 0],
			"pivot": [8, 13.4142, 8],
			"uv": {
				"*": [8, 3]
			}
		},
		{
			"if": "hanging == 1",
			"pos": [7, 13.4142, 8.9176],
			"size": [2, 0, 2],
			"rot": [-22.5, 180, 0],
			"pivot": [8, 13.4142, 8],
			"uv": {
				"*": [8, 3]
			}
		},
		{
			"if": "hanging == 1",
			"pos": [7, 13.4142, 8.9176],
			"size": [2, 0, 2],
			"rot": [-22.5, -90, 0],
			"pivot": [8, 13.4142, 8],
			"uv": {
				"*": [8, 3]
			}
		},
		{
			"if": "hanging == 1 && propagule_stage > 0",
			"pos": [7, 10, 7],
			"size": [2, 3, 2],
			"uv": {
				"*": [0, 7],
				"down": [0, 10]
			}
		},
		{
			"if": "hanging == 1 && propagule_stage == 2",
			"pos": [7, 7, 8],
			"size": [2, 3, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [3, 7]
			}
		},
		{
			"if": "hanging == 1 && propagule_stage == 2",
			"pos": [7, 7, 8],
			"size": [2, 3, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [3, 7]
			}
		},
		{
			"if": "hanging == 1 && propagule_stage == 3",
			"pos": [7, 3, 8],
			"size": [2, 7, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [3, 3]
			}
		},
		{
			"if": "hanging == 1 && propagule_stage == 3",
			"pos": [7, 3, 8],
			"size": [2, 7, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [3, 3]
			}
		},
		{
			"if": "hanging == 1 && propagule_stage == 4",
			"pos": [7, 0, 8],
			"size": [2, 10, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [3, 0]
			}
		},
		{
			"if": "hanging == 1 && propagule_stage == 4",
			"pos": [7, 0, 8],
			"size": [2, 10, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [3, 0]
			}
		}
	],
	"pitcher_plant": [
		{
			"copy": "double_plant",
			"translate": [0, -6, 0]
		}
	],
	"pitcher_crop": [
		{
			"if": "growth == 0",
			"pos": [5, -1, 5],
			"size": [6, 4, 6],
			"textures": {
				"side": "north"
			},
			"uv": {
				"side": [5, 10]
			}
		},
		{
			"if": "growth > 0 && upper_block_bit == 0",
			"pos": [3, -1, 3],
			"size": [10, 6, 10],
			"textures": {
				"side": "north"
			},
			"uv": {
				"side": [3, 10]
			}
		},
		{
			"if": "growth >= 1 && growth <= 2",
			"copy": "cross_texture",
			"translate": [0, 5, 0],
			"textures": {
				"*": "south"
			},
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"if": "growth >= 3 && upper_block_bit == 0",
			"copy": "cross_texture",
			"textures": {
				"*": "south"
			}
		},
		{
			"if": "growth == 3 && upper_block_bit == 1",
			"copy": "cross_texture",
			"textures": {
				"*": "east"
			},
			"variant": 0
		},
		{
			"if": "growth == 4 && upper_block_bit == 1",
			"copy": "cross_texture",
			"textures": {
				"*": "east"
			},
			"variant": 1
		}
	],
	"plant_stem": [ // Quick note on tints for these: They are generated in net/minecraft/client/color/block/BlockColors.java (at least of 1.19), and the formula is [r, g, b] = [i * 32, 255 - i * 8, i * 4] where i is the growth stage (0-7).
		{
			"if": "growth == 0",
			"pos": [0, -1, 8],
			"size": [16, 1, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#00FF00"
		},
		{
			"if": "growth == 0",
			"pos": [0, -1, 8],
			"size": [16, 1, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#00FF00"
		},
		{
			"if": "growth == 1",
			"pos": [0, -1, 8],
			"size": [16, 3, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#20F704"
		},
		{
			"if": "growth == 1",
			"pos": [0, -1, 8],
			"size": [16, 3, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#20F704"
		},
		{
			"if": "growth == 2",
			"pos": [0, -1, 8],
			"size": [16, 5, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#40EF08"
		},
		{
			"if": "growth == 2",
			"pos": [0, -1, 8],
			"size": [16, 5, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#40EF08"
		},
		{
			"if": "growth == 3",
			"pos": [0, -1, 8],
			"size": [16, 7, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#60E70C"
		},
		{
			"if": "growth == 3",
			"pos": [0, -1, 8],
			"size": [16, 7, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#60E70C"
		},
		{
			"if": "growth == 4",
			"pos": [0, -1, 8],
			"size": [16, 9, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#80DF10"
		},
		{
			"if": "growth == 4",
			"pos": [0, -1, 8],
			"size": [16, 9, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#80DF10"
		},
		{
			"if": "growth == 5",
			"pos": [0, -1, 8],
			"size": [16, 11, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#A0D714"
		},
		{
			"if": "growth == 5",
			"pos": [0, -1, 8],
			"size": [16, 11, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#A0D714"
		},
		{
			"if": "growth == 6",
			"pos": [0, -1, 8],
			"size": [16, 13, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#C0CF18"
		},
		{
			"if": "growth == 6",
			"pos": [0, -1, 8],
			"size": [16, 13, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#C0CF18"
		},
		{
			"if": "growth == 7 && facing_direction < 2",
			"pos": [0, -1, 8],
			"size": [16, 15, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#E0C71C"
		},
		{
			"if": "growth == 7 && facing_direction < 2",
			"pos": [0, -1, 8],
			"size": [16, 15, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#E0C71C"
		},
		{
			"if": "growth == 7 && facing_direction >= 2",
			"pos": [0, -1, 8],
			"size": [16, 7, 0],
			"rot": [0, 45, 0],
			"uv": {
				"*": [0, 1]
			},
			"variant": 0,
			"tint": "#E0C71C"
		},
		{
			"if": "growth == 7 && facing_direction >= 2",
			"pos": [0, -1, 8],
			"size": [16, 7, 0],
			"rot": [0, -45, 0],
			"uv": {
				"*": [0, 1]
			},
			"variant": 0,
			"tint": "#E0C71C"
		},
		{
			"if": "growth == 7 && facing_direction >= 2",
			"pos": [8, -1, 0],
			"size": [0, 15, 16],
			"uv": {
				"*": [0, 1]
			},
			"tint": "#E0C71C"
		}
	],
	"sweet_berry_bush": [
		{
			"if": "growth == 0",
			"copy": "cross_texture",
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "growth == 1",
			"copy": "cross_texture",
			"textures": {
				"*": "up"
			}
		},
		{
			"if": "growth == 2",
			"copy": "cross_texture",
			"textures": {
				"*": "north"
			}
		},
		{
			"if": "growth == 3",
			"copy": "cross_texture",
			"textures": {
				"*": "south"
			}
		}
	],
	"template_cauldron_liquid": [
		{
			"if": "fill_level == 1",
			"pos": [2, 5, 2],
			"size": [12, 0, 12]
		},
		{
			"if": "fill_level == 2",
			"pos": [2, 7, 2],
			"size": [12, 0, 12]
		},
		{
			"if": "fill_level == 3",
			"pos": [2, 9, 2],
			"size": [12, 0, 12]
		},
		{
			"if": "fill_level == 4",
			"pos": [2, 11, 2],
			"size": [12, 0, 12]
		},
		{
			"if": "fill_level == 5",
			"pos": [2, 13, 2],
			"size": [12, 0, 12]
		},
		{
			"if": "fill_level == 6",
			"pos": [2, 15, 2],
			"size": [12, 0, 12]
		}
	],
	"cauldron": [
		{ // walls
			"pos": [0, 3, 0],
			"size": [16, 13, 2],
			"textures": {
				"side": "north",
				"down": "south"
			}
		},
		{
			"pos": [0, 3, 14],
			"size": [16, 13, 2],
			"textures": {
				"side": "north",
				"down": "south"
			}
		},
		{
			"pos": [0, 3, 2],
			"size": [2, 13, 12],
			"textures": {
				"side": "north",
				"down": "south"
			}
		},
		{
			"pos": [14, 3, 2],
			"size": [2, 13, 12],
			"textures": {
				"side": "north",
				"down": "south"
			}
		},
		{ // bottom
			"pos": [2, 3, 2],
			"size": [12, 1, 12],
			"textures": {
				"*": "south" // inside
			}
		},
		{ // legs :((
			"pos": [0, 0, 0],
			"size": [4, 3, 2],
			"textures": {
				"side": "north"
			}
		},
		{
			"pos": [0, 0, 2],
			"size": [2, 3, 2],
			"textures": {
				"side": "north"
			}
		},
		{
			"pos": [12, 0, 0],
			"size": [4, 3, 2],
			"textures": {
				"side": "north"
			}
		},
		{
			"pos": [14, 0, 2],
			"size": [2, 3, 2],
			"textures": {
				"side": "north"
			}
		},
		{
			"pos": [0, 0, 14],
			"size": [4, 3, 2],
			"textures": {
				"side": "north"
			}
		},
		{
			"pos": [0, 0, 12],
			"size": [2, 3, 2],
			"textures": {
				"side": "north"
			}
		},
		{
			"pos": [12, 0, 14],
			"size": [4, 3, 2],
			"textures": {
				"side": "north"
			}
		},
		{
			"pos": [14, 0, 12],
			"size": [2, 3, 2],
			"textures": {
				"side": "north"
			}
		},
		{ // cauldron contents
			"if": "cauldron_liquid == lava",
			"copy": "template_cauldron_liquid",
			"terrainTexture": "still_lava"
		},
		{
			"if": "cauldron_liquid == water", // TODO: add support for potions, currently they just display the water colour
			"copy": "template_cauldron_liquid",
			"terrainTexture": "cauldron_water",
			"tint": "${#block_entity_data.CustomColor ?? 4280183682}" // 4283196761 = FF 4C 61 56 (ARGB) = water colour in swamp hills, it's the closest I could find to actual cauldron water
		},
		{
			"if": "cauldron_liquid == powder_snow",
			"copy": "template_cauldron_liquid",
			"terrainTexture": "powder_snow"
		}
	],
	"coral_fan": [
		{
			"pos": [0, 1, 8],
			"size": [16, 0, 16],
			"rot": [22.5, 0, 0],
			"pivot": [8, 0, 8],
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"pos": [0, 1, 8],
			"size": [16, 0, 16],
			"rot": [22.5, 90, 0],
			"pivot": [8, 0, 8],
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"pos": [0, 1, 8],
			"size": [16, 0, 16],
			"rot": [22.5, 180, 0],
			"pivot": [8, 0, 8],
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"pos": [0, 1, 8],
			"size": [16, 0, 16],
			"rot": [22.5, -90, 0],
			"pivot": [8, 0, 8],
			"uv": {
				"*": [0, 0]
			}
		}
	],
	"coral_wall_fan": [
		{
			"pos": [0, 8, 0],
			"size": [16, 0, 16],
			"rot": [11.25, 0, 0],
			"pivot": [8, 8, 0]
		}
	],
	"lightning_rod": [
		{
			"pos": [7, 0, 7],
			"size": [2, 12, 2],
			"uv": {
				"*": [0, 4]
			}
		},
		{
			"pos": [6, 12, 6],
			"size": [4, 4, 4],
			"uv": {
				"*": [0, 0]
			}
		}
	],
	"lectern": [
		{
			"pos": [0, 0, 0],
			"size": [16, 2, 16],
			"textures": {
				"*": "east",
				"down": "down"
			},
			"uv": {
				"side": [0, 6],
				"south": [0, 14]
			}
		},
		{
			"pos": [4, 2, 4],
			"size": [8, 13, 8],
			"textures": {
				"south": "north",
				"east": "west",
				"up": "none"
			},
			"uv": {
				"side": [2, 8],
				"north": [8, 3],
				"south": [0, 0]
			},
			"uvSizes": {
				"east": [13, 8],
				"west": [13, 8]
			},
			"uvRot": {
				"east": 90,
				"west": 90
			},
			"flipTextureHorizontally": ["west"]
		},
		{
			"pos": [0.0125, 12, 0],
			"size": [15.975, 4, 13],
			"rot": [-22.5, 0, 0],
			"textures": {
				"side": "west"
			},
			"uv": {
				"side": [0, 4],
				"south": [0, 0],
				"up": [0, 1],
				"down": [0, 0]
			},
			"uvRot": {
				"down": 180
			}
		},
		{
			"if": "entity.hasBook ?? 0 == 1",
			"copy": "template_book",
			"rot": [-22.5, 0, 0],
			"pivot": [8, 0, 10],
			"translate": [0, 15.2, 2]
		}
	],
	"big_dripleaf": [
		{
			"if": "big_dripleaf_head == 0",
			"pos": [5.25, 0, 12],
			"size": [5.5, 16, 0],
			"rot": [0, 45, 0],
			"pivot": [8, 0, 12],
			"textures": {
				"*": "north"
			},
			"uv": {
				"*": [5, 0]
			},
			"uvSizes": {
				"*": [7, 16]
			}
		},
		{
			"if": "big_dripleaf_head == 0",
			"pos": [5.5, 0, 12],
			"size": [5, 16, 0],
			"rot": [0, -45, 0],
			"pivot": [8, 0, 12],
			"textures": {
				"*": "north"
			},
			"uv": {
				"*": [5, 0]
			},
			"uvSizes": {
				"*": [7, 16]
			}
		},
		{
			"if": "big_dripleaf_head == 1", // stem is 1px shorter on the top block
			"pos": [5.25, 0, 12],
			"size": [5.5, 15, 0],
			"rot": [0, 45, 0],
			"pivot": [8, 0, 12],
			"textures": {
				"*": "north"
			},
			"uv": {
				"*": [5, 0]
			},
			"uvSizes": {
				"*": [7, 16]
			}
		},
		{
			"if": "big_dripleaf_head == 1",
			"pos": [5.5, 0, 12],
			"size": [5, 15, 0],
			"rot": [0, -45, 0],
			"pivot": [8, 0, 12],
			"textures": {
				"*": "north"
			},
			"uv": {
				"*": [5, 0]
			},
			"uvSizes": {
				"*": [7, 16]
			}
		},
		{
			"if": "big_dripleaf_head == 1", // TODO: dripleaf head tipping???
			"pos": [0, 12, 0],
			"size": [16, 4, 16],
			"textures": {
				"up": "east",
				"down": "none",
				"south": "none",
				"north": "up",
				"side": "down"
			},
			"flipTextureHorizontally": ["east"],
			"translate": [0, -1, 0]
		}
	],
	"template_small_dripleaf_stem": [
		{
			"pos": [6, 0, 12],
			"size": [4, 16, 0],
			"rot": [0, 45, 0],
			"pivot": [8, 0, 12],
			"uv": {
				"*": [5, 0]
			},
			"uvSizes": {
				"*": [7, 16]
			}
		},
		{
			"pos": [6, 0, 12],
			"size": [4, 16, 0],
			"rot": [0, -45, 0],
			"pivot": [8, 0, 12],
			"uv": {
				"*": [5, 0]
			},
			"uvSizes": {
				"*": [7, 16]
			}
		}
	],
	"template_small_dripleaf_leaf": [
		{
			"pos": [0, 0, 0],
			"size": [8, 1, 8],
			"pivot": [4, 0, 4],
			"textures": {
				"side": "down",
				"down": "none"
			},
			"uv": {
				"*": [0, 0]
			}
		}
	],
	"small_dripleaf": [
		{
			"if": "upper_block_bit == 0",
			"copy": "template_small_dripleaf_stem",
			"textures": {
				"*": "south"
			}
		},
		{
			"if": "upper_block_bit == 1",
			"copy": "template_small_dripleaf_stem",
			"textures": {
				"*": "north"
			}
		},
		{
			"if": "upper_block_bit == 1",
			"copy": "template_small_dripleaf_leaf",
			"rot": [0, 90, 0],
			"translate": [0, 7, 4]
		},
		{
			"if": "upper_block_bit == 1",
			"copy": "template_small_dripleaf_leaf",
			"translate": [8, 13, 4]
		},
		{
			"if": "upper_block_bit == 1",
			"copy": "template_small_dripleaf_leaf",
			"rot": [0, -90, 0],
			"translate": [8, 2, 12]
		}
	],
	"spore_blossom": [
		{
			"pos": [0, 15.9, 0],
			"size": [16, 0, 16],
			"textures": {
				"*": "up"
			}
		},
		{
			"pos": [0, 15.7, 8],
			"size": [16, 0, 16],
			"rot": [-22.5, 0, 0],
			"pivot": [8, 16, 8],
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"pos": [0, 15.7, 8],
			"size": [16, 0, 16],
			"rot": [-22.5, 90, 0],
			"pivot": [8, 16, 8],
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"pos": [0, 15.7, 8],
			"size": [16, 0, 16],
			"rot": [-22.5, 180, 0],
			"pivot": [8, 16, 8],
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"pos": [0, 15.7, 8],
			"size": [16, 0, 16],
			"rot": [-22.5, -90, 0],
			"pivot": [8, 16, 8],
			"uv": {
				"*": [0, 0]
			}
		}
	],
	"template_brewing_stand_side": [ // this looks at the blockstate has_bottle which actually doesn't exist, but when we use this copy we set this to be the actual, relevant block state.
		{
			"if": "has_bottle == 0",
			"pos": [0, 0, 8],
			"size": [7, 16, 0],
			"uv": {
				"*": [9, 0]
			},
			"flipTextureHorizontally": ["*"]
		},
		{
			"if": "has_bottle == 1",
			"pos": [0, 0, 8],
			"size": [7, 16, 0]
		}
	],
	"brewing_stand": [
		{
			"pos": [7, 0, 7],
			"size": [2, 14, 2],
			"uv": {
				"up": [7, 7],
				"side": [7, 2]
			}
		},
		{
			"pos": [1, 0, 5],
			"size": [6, 2, 6],
			"textures": {
				"*": "down"
			}
		},
		{
			"pos": [9, 0, 1],
			"size": [6, 2, 6],
			"textures": {
				"*": "down"
			}
		},
		{
			"pos": [9, 0, 9],
			"size": [6, 2, 6],
			"textures": {
				"*": "down"
			}
		},
		{
			"copy": "template_brewing_stand_side",
			"blockStates": {
				"has_bottle": "${#block_states.brewing_stand_slot_a_bit}"
			}
		},
		{
			"copy": "template_brewing_stand_side",
			"rot": [0, -135, 0],
			"blockStates": {
				"has_bottle": "${#block_states.brewing_stand_slot_b_bit}"
			}
		},
		{
			"copy": "template_brewing_stand_side",
			"rot": [0, 135, 0],
			"blockStates": {
				"has_bottle": "${#block_states.brewing_stand_slot_c_bit}"
			}
		}
	],
	"crafter": [
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"flipTextureVertically": ["up"]
		}
	],
	"tripwire_hook": [
		{
			"pos": [6, 1, 14],
			"size": [4, 8, 2],
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "attached_bit == 0 && powered_bit == 0",
			"pos": [6.2, 3.8, 7.9], // the hook is hollow both in-game and here
			"size": [3.6, 0.8, 3.6],
			"rot": [45, 0, 0],
			"pivot": [8, 6, 5.2],
			"textures": {
				"*": "north"
			},
			"uv": {
				"*": [5, 3]
			},
			"uvSizes": {
				"*": [6, 1],
				"up": [6, 6],
				"down": [6, 6]
			}
		},
		{
			"if": "attached_bit == 0 && powered_bit == 0",
			"pos": [7.4, 5.2, 9.6],
			"size": [1.4, 1.6, 5.6],
			"rot": [-45, 0, 0],
			"pivot": [8, 6, 14],
			"textures": {
				"*": "down",
				"south": "none"
			},
			"uv": {
				"*": [7, 9]
			},
			"uvSizes": {
				"down": [2, 7],
				"up": [2, 7],
				"north": [2, 2],
				"south": [2, 2],
				"west": [7, 2],
				"east": [7, 2]
			}
		},
		{
			"if": "attached_bit == 1 && powered_bit == 0", // TODO: add bit of string for attached tripwires
			"pos": [6.2, 4.2, 6.7],
			"size": [3.6, 0.8, 3.6],
			"rot": [22.5, 0, 0],
			"pivot": [8, 4.2, 6.7],
			"textures": {
				"*": "north"
			},
			"uv": {
				"*": [5, 3]
			},
			"uvSizes": {
				"*": [6, 1],
				"up": [6, 6],
				"down": [6, 6]
			}
		},
		{
			"if": "attached_bit == 1 && powered_bit == 0",
			"pos": [7.4, 5.2, 9.6],
			"size": [1.4, 1.6, 5.6],
			"rot": [10, 0, 0],
			"pivot": [7.4, 5.2, 10],
			"textures": {
				"*": "down",
				"south": "none"
			},
			"uv": {
				"*": [7, 9]
			},
			"uvSizes": {
				"down": [2, 7],
				"up": [2, 7],
				"north": [2, 2],
				"south": [2, 2],
				"west": [7, 2],
				"east": [7, 2]
			}
		},
		{
			"if": "powered_bit == 1",
			"pos": [6.2, 3.4, 6.7],
			"size": [3.6, 0.8, 3.6],
			"textures": {
				"*": "north"
			},
			"uv": {
				"*": [5, 3]
			},
			"uvSizes": {
				"*": [6, 1],
				"up": [6, 6],
				"down": [6, 6]
			}
		},
		{
			"if": "powered_bit == 1",
			"pos": [7.4, 5.2, 9.6],
			"size": [1.4, 1.6, 5.6],
			"rot": [30, 0, 0],
			"pivot": [8, 6, 14],
			"textures": {
				"*": "down",
				"south": "none"
			},
			"uv": {
				"*": [7, 9]
			},
			"uvSizes": {
				"down": [2, 7],
				"up": [2, 7],
				"north": [2, 2],
				"south": [2, 2],
				"west": [7, 2],
				"east": [7, 2]
			}
		}
	],
	"template_tripwire": [ // 4 individual cubes
		{
			"pos": [0, 4, 7.75],
			"size": [4, 0, 0.5],
			"uvSizes": {
				"*": [16, 2]
			}
		},
		{
			"pos": [4, 4, 7.75],
			"size": [4, 0, 0.5],
			"uvSizes": {
				"*": [16, 2]
			}
		},
		{
			"pos": [8, 4, 7.75],
			"size": [4, 0, 0.5],
			"uvSizes": {
				"*": [16, 2]
			}
		},
		{
			"pos": [12, 4, 7.75],
			"size": [4, 0, 0.5],
			"uvSizes": {
				"*": [16, 2]
			}
		}
	],
	"tripwire": [ // attached_bit: between 2 tripwires and unactivated, powered_bit: between 2 tripwires and activated, suspended_bit: regular string or between 2 tripwires and active
		{
			"if": "attached_bit == 0 && powered_bit == 0",
			"copy": "template_tripwire",
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"if": "attached_bit == 1 || powered_bit == 1",
			"copy": "template_tripwire",
			"uv": {
				"*": [0, 6]
			}
		}
	],
	"chorus_flower": [
		{
			"pos": [2, 0, 2],
			"size": [12, 16, 12]
		},
		{
			"pos": [0, 2, 2],
			"size": [2, 12, 12]
		},
		{
			"pos": [2, 2, 0],
			"size": [12, 12, 2]
		},
		{
			"pos": [2, 2, 14],
			"size": [12, 12, 2]
		},
		{
			"pos": [14, 2, 2],
			"size": [2, 12, 12]
		}
	],
	"chorus_plant": [
		{
			"pos": [4, 0, 4],
			"size": [8, 16, 8]
		},
		{
			"pos": [3, 4, 4],
			"size": [1, 8, 8]
		},
		{
			"pos": [12, 4, 4],
			"size": [1, 8, 8]
		},
		{
			"pos": [5, 5, 2],
			"size": [6, 6, 2]
		}
	],
	"command_block": [
		{
			"if": "conditional_bit == 0",
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"down": "south",
				"side": "east",
				"up": "north"
			}
		},
		{
			"if": "conditional_bit == 1",
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"down": "south",
				"side": "up",
				"up": "north"
			}
		}
	],
	"pale_moss_carpet": [
		{
			"if": "upper_block_bit == 0",
			"copy": "carpet"
		},
		{
			"if": "pale_moss_carpet_side_west == tall",
			"pos": [15.875, 0, 0],
			"size": [0, 16, 16],
			"textures": {
				"*": "carried"
			},
			"variant": 0
		},
		{
			"if": "pale_moss_carpet_side_west == short",
			"pos": [15.875, 0, 0],
			"size": [0, 16, 16],
			"textures": {
				"*": "carried"
			},
			"variant": 1
		},
		{
			"if": "pale_moss_carpet_side_east == tall",
			"pos": [0.125, 0, 0],
			"size": [0, 16, 16],
			"textures": {
				"*": "carried"
			},
			"variant": 0
		},
		{
			"if": "pale_moss_carpet_side_east == short",
			"pos": [0.125, 0, 0],
			"size": [0, 16, 16],
			"textures": {
				"*": "carried"
			},
			"variant": 1
		},
		{
			"if": "pale_moss_carpet_side_north == tall",
			"pos": [0, 0, 0.125],
			"size": [16, 16, 0],
			"textures": {
				"*": "carried"
			},
			"variant": 0,
			"flipTextureHorizontally": ["*"]
		},
		{
			"if": "pale_moss_carpet_side_north == short",
			"pos": [0, 0, 0.125],
			"size": [16, 16, 0],
			"textures": {
				"*": "carried"
			},
			"variant": 1,
			"flipTextureHorizontally": ["*"]
		},
		{
			"if": "pale_moss_carpet_side_south == tall",
			"pos": [0, 0, 15.875],
			"size": [16, 16, 0],
			"textures": {
				"*": "carried"
			},
			"variant": 0
		},
		{
			"if": "pale_moss_carpet_side_south == short",
			"pos": [0, 0, 15.875],
			"size": [16, 16, 0],
			"textures": {
				"*": "carried"
			},
			"variant": 1
		}
	],
	"sculk_shrieker": [
		{
			"pos": [0, 0, 0],
			"size": [16, 8, 16],
			"textures": {
				"up": "carried"
			}
		},
		{
			"pos": [1, 8, 1],
			"size": [14, 7, 14],
			"textures": {
				"down": "none"
			}
		}
	],
	"template_sculk_sensor_tendril": [
		{
			"if": "sculk_sensor_phase == 0",
			"pos": [-1, 8, 3],
			"size": [8, 8, 0],
			"rot": [0, 45, 0],
			"pivot": [3, 12, 3],
			"textures": {
				"*": "carried.down"
			},
			"uv": {
				"*": [4, 8]
			}
		},
		{
			"if": "sculk_sensor_phase > 0",
			"pos": [-1, 8, 3],
			"size": [8, 8, 0],
			"rot": [0, 45, 0],
			"pivot": [3, 12, 3],
			"textures": {
				"*": "carried.north"
			},
			"uv": {
				"*": [4, 8]
			}
		}
	],
	"sculk_sensor": [
		{
			"pos": [0, 0, 0],
			"size": [16, 8, 16]
		},
		{
			"copy": "template_sculk_sensor_tendril"
		},
		{
			"copy": "template_sculk_sensor_tendril",
			"rot": [0, 90, 0]
		},
		{
			"copy": "template_sculk_sensor_tendril",
			"rot": [0, 180, 0]
		},
		{
			"copy": "template_sculk_sensor_tendril",
			"rot": [0, -90, 0]
		}
	],
	"calibrated_sculk_sensor": [
		{
			"copy": "sculk_sensor"
		},
		{
			"pos": [8, 8, 0],
			"size": [0, 12, 16],
			"rot": [0, 45, 0],
			"textures": {
				"*": "carried.south"
			},
			"uv": {
				"*": [0, 4]
			},
			"fullbright": true
		},
		{
			"pos": [8, 8, 0],
			"size": [0, 12, 16],
			"rot": [0, -45, 0],
			"textures": {
				"*": "carried.south"
			},
			"uv": {
				"*": [0, 4]
			},
			"fullbright": true
		}
	],
	"lilypad": [
		{
			"pos": [0, 0.125, 0],
			"size": [16, 0, 16]
		}
	],
	"seagrass": [
		{
			"if": "sea_grass_type == default",
			"copy": "rows",
			"translate": [0, 1, 0], // rows is for crops and is 1px down by default
			"textures": {
				"*": "up"
			}
		},
		{
			"if": "sea_grass_type == double_bot",
			"copy": "rows",
			"translate": [0, 1, 0],
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "sea_grass_type == double_top",
			"copy": "rows",
			"translate": [0, 1, 0],
			"textures": {
				"*": "east"
			}
		}
	],
	"kelp": [
		{
			"if": "kelp_age < 25", // todo: look if block above is also kelp to determine correct texture
			"copy": "cross_texture",
			"textures": {
				"*": "north"
			}
		},
		{
			"if": "kelp_age == 25",
			"copy": "cross_texture",
			"textures": {
				"*": "west"
			}
		}
	],
	"template_sea_pickle_top": [
		{
			"pos": [1.5, 0, 2],
			"size": [1, 3, 0],
			"rot": [0, -135, 0],
			"pivot": [2, 0, 2],
			"uv": {
				"*": [1, 0]
			},
			"uvSizes": {
				"*": [2, 5]
			}
		},
		{
			"pos": [1.5, 0, 2],
			"size": [1, 3, 0],
			"rot": [0, 135, 0],
			"pivot": [2, 0, 2],
			"uv": {
				"*": [13, 0]
			},
			"uvSizes": {
				"*": [2, 5]
			}
		}
	],
	"template_sea_pickle_4px": [
		{
			"pos": [0, 0, 0],
			"size": [4, 4, 4],
			"uv": {
				"down": [8, 1],
				"up": [4, 1],
				"north": [0, 12],
				"east": [4, 12],
				"south": [8, 12],
				"west": [12, 12]
			}
		},
		{
			"pos": [0, 3.125, 0],
			"size": [4, 0, 4],
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "dead_bit == 0",
			"copy": "template_sea_pickle_top",
			"translate": [0, 3.125, 0]
		}
	],
	"template_sea_pickle_5px": [
		{
			"pos": [0, 0, 0],
			"size": [4, 5, 4],
			"uv": {
				"down": [8, 1],
				"up": [4, 1],
				"north": [0, 11],
				"east": [4, 11],
				"south": [8, 11],
				"west": [12, 11]
			}
		},
		{
			"pos": [0, 4.125, 0],
			"size": [4, 0, 4],
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "dead_bit == 0",
			"copy": "template_sea_pickle_top",
			"translate": [0, 4.125, 0]
		}
	],
	"template_sea_pickle_6px": [
		{
			"pos": [0, 0, 0],
			"size": [4, 6, 4],
			"uv": {
				"down": [8, 1],
				"up": [4, 1],
				"north": [0, 10],
				"east": [4, 10],
				"south": [8, 10],
				"west": [12, 10]
			}
		},
		{
			"pos": [0, 5.125, 0],
			"size": [4, 0, 4],
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "dead_bit == 0",
			"copy": "template_sea_pickle_top",
			"translate": [0, 5.125, 0]
		}
	],
	"template_sea_pickle_7px": [
		{
			"pos": [0, 0, 0],
			"size": [4, 7, 4],
			"uv": {
				"down": [8, 1],
				"up": [4, 1],
				"north": [0, 9],
				"east": [4, 9],
				"south": [8, 9],
				"west": [12, 9]
			}
		},
		{
			"pos": [0, 6.125, 0],
			"size": [4, 0, 4],
			"textures": {
				"*": "down"
			}
		},
		{
			"if": "dead_bit == 0",
			"copy": "template_sea_pickle_top",
			"translate": [0, 6.125, 0]
		}
	],
	"sea_pickle": [
		{
			"if": "cluster_count == 0",
			"copy": "template_sea_pickle_6px",
			"translate": [6, 0, 6]
		},
		{
			"if": "cluster_count == 1",
			"copy": "template_sea_pickle_6px",
			"translate": [8.5, 0, 3.5]
		},
		{
			"if": "cluster_count == 1",
			"copy": "template_sea_pickle_4px",
			"translate": [3.5, 0, 8.5]
		},
		{
			"if": "cluster_count == 2",
			"copy": "template_sea_pickle_6px",
			"translate": [4.5, 0, 3.5]
		},
		{
			"if": "cluster_count == 2",
			"copy": "template_sea_pickle_4px",
			"translate": [6, 0, 9.25]
		},
		{
			"if": "cluster_count == 2",
			"copy": "template_sea_pickle_7px",
			"translate": [9.25, 0, 2.75]
		},
		{
			"if": "cluster_count == 3",
			"copy": "template_sea_pickle_6px",
			"translate": [9.5, 0, 3]
		},
		{
			"if": "cluster_count == 3",
			"copy": "template_sea_pickle_4px",
			"translate": [2.5, 0, 10]
		},
		{
			"if": "cluster_count == 3",
			"copy": "template_sea_pickle_7px",
			"translate": [10, 0, 8.75]
		},
		{
			"if": "cluster_count == 3",
			"copy": "template_sea_pickle_5px",
			"translate": [3, 0, 2.5]
		}
	],
	"bamboo": [
		{
			"if": "bamboo_stalk_thickness == thin && !#copied_via_copy_block",
			"pos": [7, 0, 7],
			"size": [2, 16, 2],
			"textures": {
				"*": "north"
			},
			"uv": {
				"side": [9, 0],
				"up": [13, 0],
				"down": [13, 0]
			}
		},
		{
			"if": "bamboo_stalk_thickness == thick",
			"pos": [7, 0, 7],
			"size": [3, 16, 3],
			"textures": {
				"*": "north"
			},
			"uv": {
				"side": [9, 0],
				"up": [13, 0],
				"down": [13, 0]
			}
		},
		{
			"if": "bamboo_leaf_size == small_leaves && bamboo_stalk_thickness == thin",
			"pos": [0, 0, 8],
			"size": [16, 16, 0],
			"textures": {
				"*": "south"
			}
		},
		{
			"if": "bamboo_leaf_size == small_leaves && bamboo_stalk_thickness == thin",
			"pos": [8, 0, 0],
			"size": [0, 16, 16],
			"textures": {
				"*": "south"
			}
		},
		{
			"if": "bamboo_leaf_size == small_leaves && bamboo_stalk_thickness == thick",
			"pos": [2, 0, 8],
			"size": [5, 16, 0],
			"textures": {
				"*": "south"
			}
		},
		{
			"if": "bamboo_leaf_size == small_leaves && bamboo_stalk_thickness == thick",
			"pos": [10, 0, 8],
			"size": [6, 16, 0],
			"textures": {
				"*": "south"
			},
			"uv": {
				"*": [9, 0]
			}
		},
		{
			"if": "bamboo_leaf_size == small_leaves && bamboo_stalk_thickness == thick",
			"pos": [8, 0, 2],
			"size": [0, 16, 5],
			"textures": {
				"*": "south"
			}
		},
		{
			"if": "bamboo_leaf_size == small_leaves && bamboo_stalk_thickness == thick",
			"pos": [8, 0, 10],
			"size": [0, 16, 6],
			"textures": {
				"*": "south"
			},
			"uv": {
				"*": [9, 0]
			}
		},
		{
			"if": "bamboo_leaf_size == large_leaves",
			"pos": [0, 0, 8.5],
			"size": [16, 16, 0],
			"textures": {
				"*": "up"
			}
		},
		{
			"if": "bamboo_leaf_size == large_leaves",
			"pos": [8.5, 0, 0],
			"size": [0, 16, 16],
			"textures": {
				"*": "up"
			}
		},
		{
			"if": "#copied_via_copy_block",
			"pos": [7, 0, 7],
			"size": [2, 12, 2],
			"textures": {
				"*": "north"
			},
			"uv": {
				"side": [9, 0],
				"up": [13, 0],
				"down": [13, 0]
			}
		},
		{
			"if": "#copied_via_copy_block",
			"pos": [0, 0, 8],
			"translate": [0, -2, 0],
			"size": [16, 16, 0],
			"textures": {
				"*": "east"
			}
		}
	],
	"azalea": [
		{
			"if": "!#copied_via_copy_block",
			"pos": [0, 5, 0],
			"size": [16, 11, 16],
			"textures": {
				"down": "none",
				"side": "side" // azalea in blocks.json has textures for each side as well as "side", so I need to specify here that all sides should use "side" and not north/south/whatever
			}
		},
		{
			"if": "!#copied_via_copy_block",
			"pos": [-2, 0, 8],
			"size": [20, 16, 0],
			"rot": [0, 45, 0],
			"textures": {
				"*": "east"
			},
			"uv": {
				"*": [0, 0]
			},
			"uvSizes": {
				"*": [16, 16]
			}
		},
		{
			"if": "!#copied_via_copy_block",
			"pos": [-2, 0, 8],
			"size": [20, 16, 0],
			"rot": [0, -45, 0],
			"textures": {
				"*": "east"
			},
			"uv": {
				"*": [0, 0]
			},
			"uvSizes": {
				"*": [16, 16]
			}
		},
		{
			"if": "#copied_via_copy_block",
			"pos": [4, 4, 4],
			"size": [8, 8, 8],
			"textures": {
				"down": "none",
				"side": "south",
				"up": "down"
			}
		},
		{
			"if": "#copied_via_copy_block",
			"pos": [1, 0, 8],
			"size": [14, 12, 0],
			"rot": [0, 45, 0],
			"textures": {
				"*": "west"
			}
		},
		{
			"if": "#copied_via_copy_block",
			"pos": [1, 0, 8],
			"size": [14, 12, 0],
			"rot": [0, -45, 0],
			"textures": {
				"*": "west"
			}
		}
	],
	"cocoa": [
		{
			"if": "age == 0",
			"pos": [6, 7, 11],
			"size": [4, 5, 4],
			"uv": {
				"side": [11, 4],
				"up": [0, 0],
				"down": [0, 0]
			}
		},
		{
			"if": "age == 1",
			"pos": [5, 5, 9],
			"size": [6, 7, 6],
			"uv": {
				"side": [9, 4],
				"up": [0, 0],
				"down": [0, 0]
			}
		},
		{
			"if": "age == 2",
			"pos": [4, 3, 7],
			"size": [8, 9, 8],
			"uv": {
				"side": [7, 4],
				"up": [0, 0],
				"down": [0, 0]
			},
			"uvSizes": { // top/bottom texture is streched from 7x7 to 8x8 on fully grown cocoa beans
				"up": [7, 7],
				"down": [7, 7]
			}
		},
		{
			"pos": [8, 12, 12],
			"size": [0, 4, 4],
			"uv": {
				"*": [12, 0]
			}
		}
	],
	"beacon": [
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"*": "side"
			},
			"fullbright": true
		},
		{
			"pos": [2, 0.01, 2], // move obsidian bit slightly up to avoid z-fighting
			"size": [12, 2.99, 12],
			"textures": {
				"*": "down"
			}
		},
		{
			"pos": [3, 3, 3],
			"size": [10, 11, 10],
			"textures": {
				"*": "up"
			}
		}
	],
	"flower_pot": [
		{
			"pos": [5, 0, 5],
			"size": [6, 6, 6],
			"uv": {
				"down": [5, 10] // flower pots in-game use the top texture for the bottom but it looks better with the side texture
			}
		},
		{
			"pos": [5, 4, 5],
			"size": [6, 0, 6],
			"textures": {
				"*": "textures/blocks/dirt"
			},
			"flipTextureVertically": ["*"],
			"tint": "#999999"
		},
		{
			"if": "update_bit == 1",
			"copyBlock": "entity.PlantBlock", // I know this is inconsistent with other syntax in this file but this property is only used for flower pots so I couldn't care less
			"translate": [0, 4, 0]
		}
	],
	"glazed_terracotta": [
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"north": "none",
				"south": "none"
			},
			"flipTextureHorizontally": ["up", "down", "west"],
			"flipTextureVertically": ["up", "down", "west"]
		},
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"rot": [0, 0, -90],
			"textures": {
				"*": "none",
				"north": "north",
				"south": "south"
			}
		}
	],
	"chiseled_bookshelf": [
		{
			"if": "books_stored == 0",
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"variant": 0
		},
		{
			"if": "books_stored == 63",
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"variant": 1
		},
		{
			"if": "books_stored != 0 && books_stored != 63",
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"north": "none"
			}
		},
		{
			"if": "books_stored != 0 && books_stored & 1 == 0",
			"pos": [0, 8, 0],
			"size": [5, 8, 0],
			"variant": 0
		},
		{
			"if": "books_stored != 63 && books_stored & 1 > 0",
			"pos": [0, 8, 0],
			"size": [5, 8, 0],
			"variant": 1
		},
		{
			"if": "books_stored != 0 && books_stored & 2 == 0",
			"pos": [5, 8, 0],
			"size": [6, 8, 0],
			"variant": 0
		},
		{
			"if": "books_stored != 63 && books_stored & 2 > 0",
			"pos": [5, 8, 0],
			"size": [6, 8, 0],
			"variant": 1
		},
		{
			"if": "books_stored != 0 && books_stored & 4 == 0",
			"pos": [11, 8, 0],
			"size": [5, 8, 0],
			"variant": 0
		},
		{
			"if": "books_stored != 63 && books_stored & 4 > 0",
			"pos": [11, 8, 0],
			"size": [5, 8, 0],
			"variant": 1
		},
		{
			"if": "books_stored != 0 && books_stored & 8 == 0",
			"pos": [0, 0, 0],
			"size": [5, 8, 0],
			"variant": 0
		},
		{
			"if": "books_stored != 63 && books_stored & 8 > 0",
			"pos": [0, 0, 0],
			"size": [5, 8, 0],
			"variant": 1
		},
		{
			"if": "books_stored != 0 && books_stored & 16 == 0",
			"pos": [5, 0, 0],
			"size": [6, 8, 0],
			"variant": 0
		},
		{
			"if": "books_stored != 63 && books_stored & 16 > 0",
			"pos": [5, 0, 0],
			"size": [6, 8, 0],
			"variant": 1
		},
		{
			"if": "books_stored != 0 && books_stored & 32 == 0",
			"pos": [11, 0, 0],
			"size": [5, 8, 0],
			"variant": 0
		},
		{
			"if": "books_stored != 63 && books_stored & 32 > 0",
			"pos": [11, 0, 0],
			"size": [5, 8, 0],
			"variant": 1
		}
	],
	"template_hanging_sign_vertical_chain": [
		{
			"pos": [1.5, 10, 8],
			"size": [3, 6, 0],
			"rot": [0, 45, 0],
			"pivot": [3, 10, 8],
			"textures": {
				"*": "textures/entity/${#block_name}"
			},
			"textureSize": [64, 32],
			"uv": {
				"*": [0, 6]
			}
		},
		{
			"pos": [1.5, 10, 8],
			"size": [3, 6, 0],
			"rot": [0, -45, 0],
			"pivot": [3, 10, 8],
			"textures": {
				"*": "textures/entity/${#block_name}"
			},
			"textureSize": [64, 32],
			"uv": {
				"*": [6, 6]
			}
		}
	],
	"hanging_sign": [
		{
			"pos": [1, 0, 7],
			"size": [14, 10, 2],
			"textures": {
				"*": "textures/entity/${#block_name}"
			},
			"textureSize": [64, 32],
			"uv": {
				"north": [2, 14],
				"south": [2, 14],
				"east": [0, 14],
				"west": [0, 14],
				"up": [2, 12],
				"down": [16, 12]
			}
		},
		{
			"if": "attached_bit == 0",
			"copy": "template_hanging_sign_vertical_chain"
		},
		{
			"if": "attached_bit == 0",
			"copy": "template_hanging_sign_vertical_chain",
			"translate": [10, 0, 0]
		},
		{
			"if": "hanging == 0",
			"pos": [0, 14, 6],
			"size": [16, 2, 4],
			"textures": {
				"*": "textures/entity/${#block_name}"
			},
			"textureSize": [64, 32],
			"uv": {
				"north": [4, 4],
				"south": [4, 4],
				"east": [0, 4],
				"west": [0, 4],
				"up": [4, 0],
				"down": [20, 0]
			}
		},
		{
			"if": "attached_bit == 1",
			"pos": [0, 10, 8],
			"size": [16, 6, 0],
			"textures": {
				"*": "textures/entity/${#block_name}"
			},
			"textureSize": [64, 32],
			"uv": {
				"*": [12, 6]
			}
		}
	],
	"template_banner": [
		{
			"pos": [1.5, -13, 13.55],
			"size": [13, 26, 0.65],
			"rot": [-1.5, 0, 0],
			"pivot": [8, 13, 14.75],
			"textureSize": [64, 64],
			"uv": {
				"north": [1, 1],
				"south": [22, 1],
				"east": [0, 1],
				"west": [0, 1],
				"up": [1, 0],
				"down": [21, 0]
			},
			"uvSizes": {
				"north": [20, 40],
				"south": [20, 40],
				"east": [1, 20],
				"west": [1, 20],
				"up": [20, 1],
				"down": [20, 1]
			},
			"tint": "${Array.banner_colors[entity.Base]}",
			"arrays": {
				"banner_colors": ["#202025", "#C5332A", "#698A19", "#925E38", "#434CBE", "#9938CD", "#19AEAE", "#AFAFA9", "#4F585C", "#FC9BBE", "#8FDE23", "#FCF144", "#41C8F3", "#DE57D3", "#FC8F20", "#FCFCFC"]
			}
		},
		{
			"pos": [1.5, 11.7, 14.2],
			"size": [13, 1.3, 1.3],
			"textureSize": [64, 64],
			"uv": {
				"north": [2, 44],
				"south": [2, 44],
				"east": [0, 44],
				"west": [0, 44],
				"up": [2, 42],
				"down": [2, 42]
			},
			"uvSizes": {
				"north": [20, 2],
				"south": [20, 2],
				"east": [2, 2],
				"west": [2, 2],
				"up": [20, 1],
				"down": [20, 1]
			}
		}
	],
	"wall_banner": [
		{
			"if": "entity.Type == 0",
			"copy": "template_banner",
			"textures": {
				"*": "textures/entity/banner/banner_base"
			}
		},
		{
			"if": "entity.Type == 1",
			"copy": "template_banner",
			"textures": {
				"*": "textures/entity/banner/banner_illager"
			}
		}
	],
	"standing_banner": [
		{
			"copy": "wall_banner",
			"translate": [0, 15, -6.85],
			"rot": [0, 180, 0],
			"pivot": [8, 13, 14.75]
		},
		{
			"pos": [7.35, 0, 7.35],
			"size": [1.3, 26.7, 1.3],
			"textures": {
				"*": "textures/entity/banner/banner_base",
				"up": "none"
			},
			"textureSize": [64, 64],
			"uv": {
				"side": [50, 2],
				"down": [48, 0]
			},
			"uvSizes": {
				"side": [2, 42],
				"down": [2, 2]
			}
		}
	],
	"mangrove_roots": [
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16]
		},
		{
			"pos": [8, 0, 0],
			"size": [0, 16, 16]
		},
		{
			"pos": [0, 0, 8],
			"size": [16, 16, 0]
		}
	],
	"template_shulker_box": [ // since this relies on the shulker model, the two halves are split
		{
			"pos": [0, 0, 0],
			"size": [16, 8, 16],
			"uv": {
				"side": [0, 44],
				"down": [32, 28]
			},
			"uvSizes": {
				"side": [16, 8],
				"down": [16, 16]
			},
			"textures": {
				"up": "none"
			},
			"textureSize": [64, 64]
		},
		{
			"pos": [0.05, 4, 0.05], // top part must be slightly inset to avoid z-fighting
			"size": [15.9, 12, 15.9],
			"uv": {
				"side": [0, 16],
				"up": [16, 0]
			},
			"textures": {
				"down": "none"
			},
			"textureSize": [64, 64]
		}
	],
	"shulker_box": [ // this is for all shulker boxes but light grey; the texture path can be extracted from the block name
		{
			"copy": "template_shulker_box",
			"textures": {
				"*": "textures/entity/shulker/shulker_${#block_name[:-12]}"
			}
		}
	],
	"textured_shulker_box": [ // this is for light grey shulker boxes only, since their texture path is shulker_silver.png not shulker_light_grey.png :(
		{
			"copy": "template_shulker_box",
			"textures": {
				"*": "#tex"
			}
		}
	],
	"jigsaw_block": [
		{
			"pos": [0, 0, 0],
			"size": [16, 16, 16],
			"textures": {
				"down": "south",
				"south": "down",
				"up": "north",
				"north": "up"
			},
			"rot": [0, 0, 0]
		}
	],
	"template_bed_leg": [
		{
			"pos": [0, 0, 0],
			"size": [3, 3, 3],
			"pivot": [1.5, 1.5, 1.5],
			"textures": {
				"up": "none"
			},
			"uv": {
				"down": [3, 41],
				"west": [0, 41],
				"east": [15, 38],
				"north": [3, 38],
				"south": [0, 41]
			},
			"textureSize": [64, 64]
		}
	],
	"template_bed": [ // todo: make this read from models/mobs.json so resource packs that customise beds work. the problem is that if we take the geometry straight from there the bed will be standing up (I think it's because the side textures have to be rotated)
		{
			"pos": [0, 3, 0],
			"size": [16, 6, 32],
			"textures": {
				"west": "none",
				"east": "none"
			},
			"uv": {
				"down": [28, 6],
				"up": [6, 6],
				"west": [0, 6],
				"east": [0, 6],
				"north": [6, 0],
				"south": [22, 0]
			},
			"flipTextureHorizontally": ["north", "south", "down"],
			"flipTextureVertically": ["north", "south", "down"],
			"textureSize": [64, 64]
		},
		{
			"pos": [0, 3, 0],
			"size": [16, 32, 6],
			"rot": [-90, 0, 0], // side textures must be rotated since they are vertical in the texture :(
			"pivot": [0, 6, 3],
			"textures": {
				"down": "none",
				"up": "none",
				"north": "none",
				"south": "none"
			},
			"uv": {
				"west": [0, 6],
				"east": [0, 6]
			},
			"flipTextureHorizontally": ["west"],
			"flipTextureVertically": ["west", "east"],
			"textureSize": [64, 64]
		},
		{
			"copy": "template_bed_leg"
		},
		{
			"copy": "template_bed_leg",
			"rot": [0, -90, 0],
			"translate": [13, 0, 0]
		},
		{
			"copy": "template_bed_leg",
			"rot": [0, 180, 0],
			"translate": [13, 0, 29]
		},
		{
			"copy": "template_bed_leg",
			"rot": [0, 90, 0],
			"translate": [0, 0, 29]
		}
	],
	"bed": [
		{
			"if": "head_piece_bit == 1",
			"copy": "template_bed",
			"textures": {
				"*": "textures/entity/bed/${Array.colors[entity.color]}"
			},
			"arrays": {
				"colors": ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"] // https://minecraft.wiki/w/Bed#Metadata
			}
		}
	],
	"template_unpositioned_skull": [
		{
			"pos": [4, 0, 4],
			"size": [8, 8, 8],
			"boxUv": [0, 0],
			"textures": {
				"*": "#tex"
			}
		}
	],
	"template_skull": [
		{
			"if": "facing_direction == 1",
			"copy": "template_unpositioned_skull"
		},
		{
			"if": "facing_direction > 1",
			"copy": "template_unpositioned_skull",
			"translate": [0, 4, 4]
		}
	],
	"skull": [
		{
			"copy": "template_skull",
			"textureSize": [64, 32]
		}
	],
	"player_head": [
		{
			"copy": "template_skull",
			"textureSize": [64, 64]
		}
	],
	"template_dragon_head_ear": [
		{
			"pos": [0, 0, 0],
			"size": [1.5, 3, 4.5],
			"boxUv": [0, 0],
			"boxUvSize": [2, 4, 6]
		}
	],
	"template_dragon_head_nostril": [
		{
			"pos": [0, 0, 0],
			"size": [1.5, 1.5, 3],
			"boxUv": [112, 0],
			"boxUvSize": [2, 2, 4]
		}
	],
	"template_dragon_head": [
		{
			"pos": [2, 0, 0.5],
			"size": [12, 12, 12],
			"boxUv": [112, 30],
			"boxUvSize": [16, 16, 16]
		},
		{
			"copy": "template_dragon_head_ear",
			"translate": [4.25, 12, 5]
		},
		{
			"copy": "template_dragon_head_ear",
			"translate": [10.25, 12, 5]
		},
		{
			"pos": [3.5, 3, -10],
			"size": [9, 3.75, 12],
			"boxUv": [176, 44],
			"boxUvSize": [12, 5, 16]
		},
		{
			"copy": "template_dragon_head_nostril",
			"translate": [4.25, 6.75, -8.5]
		},
		{
			"copy": "template_dragon_head_nostril",
			"translate": [10.25, 6.75, -8.5]
		},
		{
			"pos": [3.5, 0, -10],
			"size": [9, 3, 12],
			"rot": [15, 0, 0],
			"pivot": [8, 3, 2],
			"textures": {
				"south": "none"
			},
			"boxUv": [176, 65],
			"boxUvSize": [12, 4, 16]
		}
	],
	"dragon_head": [
		{
			"if": "facing_direction == 1",
			"copy": "template_dragon_head",
			"textures": {
				"*": "textures/entity/dragon/dragon"
			},
			"textureSize": [256, 256]
		},
		{
			"if": "facing_direction > 1",
			"copy": "template_dragon_head",
			"translate": [0, 4, 4],
			"textures": {
				"*": "textures/entity/dragon/dragon"
			},
			"textureSize": [256, 256]
		}
	],
	"template_piglin_head": [
		{
			"pos": [3, 0, 4],
			"size": [10, 8, 8],
			"boxUv": [0, 0]
		},
		{
			"pos": [6, 0, 3],
			"size": [4, 4, 1],
			"boxUv": [31, 1]
		},
		{
			"pos": [5, 0, 3],
			"size": [1, 2, 1],
			"boxUv": [2, 0]
		},
		{
			"pos": [10, 0, 3],
			"size": [1, 2, 1],
			"boxUv": [2, 4]
		},
		{
			"pos": [3, 1, 6],
			"size": [1, 5, 4],
			"pivot": [3, 6, 8],
			"rot": [0, 0, 30],
			"textures": {
				"up": "none"
			},
			"boxUv": [39, 6]
		},
		{
			"pos": [12, 1, 6],
			"size": [1, 5, 4],
			"pivot": [13, 6, 8],
			"rot": [0, 0, -30],
			"textures": {
				"up": "none"
			},
			"boxUv": [51, 6]
		}
	],
	"piglin_head": [
		{
			"if": "facing_direction == 1",
			"copy": "template_piglin_head",
			"textures": {
				"*": "textures/entity/piglin/piglin"
			},
			"textureSize": [64, 64]
		},
		{
			"if": "facing_direction > 1",
			"copy": "template_piglin_head",
			"translate": [0, 4, 4],
			"textures": {
				"*": "textures/entity/piglin/piglin"
			},
			"textureSize": [64, 64]
		}
	],
	"template_leaf_litter_unflipped": [
		{
			"pos": [8, 0.25, 8],
			"size": [8, 0, 8]
		},
		{
			"if": "growth >= 1",
			"pos": [8, 0.25, 0],
			"size": [8, 0, 8]
		},
		{
			"if": "growth >= 2",
			"pos": [0, 0.25, 0],
			"size": [8, 0, 8]
		},
		{
			"if": "growth >= 3",
			"pos": [0, 0.25, 8],
			"size": [8, 0, 8]
		}
	],
	"leaf_litter": [
		{
			"copy": "template_leaf_litter_unflipped", // textures are flipped. easier (for me) to rotate it here.
			"rot": [180, 0, 0],
			"pivot": [8, 0.25, 8]
		}
	],
	"template_dried_ghast_tentacle": [
		{
			"pos": [0, 0, 0],
			"size": [3, 1, 2],
			"pivot": [1.5, 0, 1],
			"textures": {
				"*": "carried",
				"west": "none"
			},
			"boxUv": [10, 0],
			"textureSize": [32, 32]
		}
	],
	"dried_ghast": [
		{
			"pos": [3, 0, 3],
			"size": [10, 10, 10],
			"rot": [0, 180, 0],
			"uv": {
				"*": [0, 0]
			}
		},
		{
			"copy": "template_dried_ghast_tentacle",
			"translate": [0, 0, 5]
		},
		{
			"copy": "template_dried_ghast_tentacle",
			"translate": [0, 0, 9]
		},
		{
			"copy": "template_dried_ghast_tentacle",
			"translate": [4.5, 0, 13.5],
			"rot": [0, 90, 0]
		},
		{
			"copy": "template_dried_ghast_tentacle",
			"translate": [8.5, 0, 13.5],
			"rot": [0, 90, 0]
		},
		{
			"copy": "template_dried_ghast_tentacle",
			"translate": [13, 0, 5],
			"rot": [0, 180, 0]
		},
		{
			"copy": "template_dried_ghast_tentacle",
			"translate": [13, 0, 9],
			"rot": [0, 180, 0]
		}
	],
	"shelf": [
		{
			"pos": [0, 0, 13],
			"size": [16, 16, 3],
			"textures": {
				"north": "none"
			},
			"uv": {
				"south": [16, 0],
				"west": [29, 0],
				"east": [16, 0],
				"down": [16, 9],
				"up": [16, 7]
			},
			"textureSize": [32, 32],
			"uvRot": {
				"down": 180,
				"up": 180
			}
		},
		{
			"pos": [0, 0, 11],
			"size": [16, 4, 2],
			"uv": {
				"north": [0, 12],
				"east": [3, 12],
				"west": [11, 12],
				"up": [16, 7],
				"down": [16, 7]
			},
			"uvRot": {
				"down": 180
			},
			"textureSize": [32, 32]
		},
		{
			"pos": [0, 12, 11],
			"size": [16, 4, 2],
			"uv": {
				"north": [0, 0],
				"east": [3, 0],
				"west": [11, 0],
				"up": [16, 10],
				"down": [16, 10]
			},
			"uvRot": {
				"up": 180
			},
			"textureSize": [32, 32]
		},
		{
			"if": "powered_bit == 0",
			"pos": [0, 4, 13],
			"size": [16, 8, 0],
			"uv": {
				"*": [0, 4]
			},
			"textureSize": [32, 32]
		},
		{
			"if": "powered_bit == 1 && powered_shelf_type == 0",
			"pos": [0, 4, 13],
			"size": [16, 8, 0],
			"uv": {
				"*": [16, 24]
			},
			"textureSize": [32, 32]
		},
		{
			"if": "powered_bit == 1 && powered_shelf_type == 2", // center??
			"pos": [0, 4, 13],
			"size": [16, 8, 0],
			"uv": {
				"*": [0, 24]
			},
			"textureSize": [32, 32]
		},
		{
			"if": "powered_bit == 1 && powered_shelf_type == 1", // right??
			"pos": [0, 4, 13],
			"size": [16, 8, 0],
			"uv": {
				"*": [16, 16]
			},
			"textureSize": [32, 32]
		},
		{
			"if": "powered_bit == 1 && powered_shelf_type == 3", // left??
			"pos": [0, 4, 13],
			"size": [16, 8, 0],
			"uv": {
				"*": [0, 16]
			},
			"textureSize": [32, 32]
		}
	],
	"copper_golem_statue": [
		{
			"if": "entity.Pose == 0",
			"copyEntityModel": {
				"identifier": "geometry.copper_golem",
				"geoFile": "models/entity/copper_golem.geo.json",
				"texture": "textures/entity/copper_golem/${#tex}"
			}
		},
		{
			"if": "entity.Pose == 1",
			"copyEntityModel": {
				"identifier": "geometry.copper_golem.sitting",
				"geoFile": "models/entity/copper_golem_sitting.geo.json",
				"texture": "textures/entity/copper_golem/${#tex}"
			}
		},
		{
			"if": "entity.Pose == 2",
			"copyEntityModel": {
				"identifier": "geometry.copper_golem.running",
				"geoFile": "models/entity/copper_golem_running.geo.json",
				"texture": "textures/entity/copper_golem/${#tex}"
			}
		},
		{
			"if": "entity.Pose == 3",
			"copyEntityModel": {
				"identifier": "geometry.copper_golem.star",
				"geoFile": "models/entity/copper_golem_star.geo.json",
				"texture": "textures/entity/copper_golem/${#tex}"
			}
		}
	],
	"red_shrub": [
		// This block appears in the blocks folder in the vanilla behaviour pack, and that's also where its texture is defined.
		// Although this is a big step up for fully data-driven vanilla blocks, it's annoying for me since the single source of truth mapping block names to terrain_texture.json keys (i.e. blocks.json) is now no longer fully authoritative.
		// In the future I'll have to change it somehow... but IDK how...
		{
			"copy": "cross_texture",
			"terrainTexture": "red_shrub"
		}
	],
	"shelf_mushroom": [
		{
			"if": "growth == 0",
			"copyEntityModel": {
				"identifier": "minecraft:geometry.shelf_mushroom_small",
				"geoFile": "models/blocks/shelf_mushroom_small.geo.json",
				"texture": "textures/blocks/shelf_mushroom_small"
			}
		},
		{
			"if": "growth == 1",
			"copyEntityModel": {
				"identifier": "minecraft:geometry.shelf_mushroom_large",
				"geoFile": "models/blocks/shelf_mushroom_large.geo.json",
				"texture": "textures/blocks/shelf_mushroom_large"
			}
		}
	],
	"straw_bed": [
		{
			"if": "head_piece_bit == 0",
			"copyEntityModel": {
				"identifier": "minecraft:geometry.straw_bed_foot",
				"geoFile": "models/blocks/straw_bed_foot.geo.json",
				"texture": "textures/blocks/straw_bed"
			}
		},
		{
			"if": "head_piece_bit == 1",
			"copyEntityModel": {
				"identifier": "minecraft:geometry.straw_bed_head",
				"geoFile": "models/blocks/straw_bed_head.geo.json",
				"texture": "textures/blocks/straw_bed"
			}
		}
	],
	//"debug_auto_uv_4": [{"pos":[0,0,0],"size":[4,4,4]},{"pos":[0,0,4],"size":[4,4,4]},{"pos":[0,0,8],"size":[4,4,4]},{"pos":[0,0,12],"size":[4,4,4]},{"pos":[0,4,0],"size":[4,4,4]},{"pos":[0,4,4],"size":[4,4,4]},{"pos":[0,4,8],"size":[4,4,4]},{"pos":[0,4,12],"size":[4,4,4]},{"pos":[0,8,0],"size":[4,4,4]},{"pos":[0,8,4],"size":[4,4,4]},{"pos":[0,8,8],"size":[4,4,4]},{"pos":[0,8,12],"size":[4,4,4]},{"pos":[0,12,0],"size":[4,4,4]},{"pos":[0,12,4],"size":[4,4,4]},{"pos":[0,12,8],"size":[4,4,4]},{"pos":[0,12,12],"size":[4,4,4]},{"pos":[4,0,0],"size":[4,4,4]},{"pos":[4,0,4],"size":[4,4,4]},{"pos":[4,0,8],"size":[4,4,4]},{"pos":[4,0,12],"size":[4,4,4]},{"pos":[4,4,0],"size":[4,4,4]},{"pos":[4,4,12],"size":[4,4,4]},{"pos":[4,8,0],"size":[4,4,4]},{"pos":[4,8,12],"size":[4,4,4]},{"pos":[4,12,0],"size":[4,4,4]},{"pos":[4,12,4],"size":[4,4,4]},{"pos":[4,12,8],"size":[4,4,4]},{"pos":[4,12,12],"size":[4,4,4]},{"pos":[8,0,0],"size":[4,4,4]},{"pos":[8,0,4],"size":[4,4,4]},{"pos":[8,0,8],"size":[4,4,4]},{"pos":[8,0,12],"size":[4,4,4]},{"pos":[8,4,0],"size":[4,4,4]},{"pos":[8,4,12],"size":[4,4,4]},{"pos":[8,8,0],"size":[4,4,4]},{"pos":[8,8,12],"size":[4,4,4]},{"pos":[8,12,0],"size":[4,4,4]},{"pos":[8,12,4],"size":[4,4,4]},{"pos":[8,12,8],"size":[4,4,4]},{"pos":[8,12,12],"size":[4,4,4]},{"pos":[12,0,0],"size":[4,4,4]},{"pos":[12,0,4],"size":[4,4,4]},{"pos":[12,0,8],"size":[4,4,4]},{"pos":[12,0,12],"size":[4,4,4]},{"pos":[12,4,0],"size":[4,4,4]},{"pos":[12,4,4],"size":[4,4,4]},{"pos":[12,4,8],"size":[4,4,4]},{"pos":[12,4,12],"size":[4,4,4]},{"pos":[12,8,0],"size":[4,4,4]},{"pos":[12,8,4],"size":[4,4,4]},{"pos":[12,8,8],"size":[4,4,4]},{"pos":[12,8,12],"size":[4,4,4]},{"pos":[12,12,0],"size":[4,4,4]},{"pos":[12,12,4],"size":[4,4,4]},{"pos":[12,12,8],"size":[4,4,4]},{"pos":[12,12,12],"size":[4,4,4]}] // function genDebugGeo(step) {let boneCubes = [];for(let x = 0; x < 16; x += step) {for(let y = 0; y < 16; y += step) {for(let z = 0; z < 16; z += step) {if(!x || !y || !z || x == 16 - step || y == 16 - step || z == 16 - step) {boneCubes.push({ pos: [x, y, z], size: [step, step, step] });}}}}return JSON.stringify(boneCubes);}
	
	"$schema": "schemas/blockShapeGeos.schema.json"
}
```

## File: src/data/blockShapes.json
```json
// Originally from https://github.com/RavinMaddHatter/Structura/blob/main/data/block_definition.json which is an adapated list of an adapted list of the official blockshape entries in blocks.json from the BE 1.5 resources.
{
	"patterns": { // Regular expressions that will be tested if no individual block key is found
		"(?<!double.*)_slab$": "slab",
		"double_.*slab$": "double_slab", // cut copper slabs have the "double" earlier.
		"_button$": "button",
		"_door$": "door",
		"_pressure_plate$": "pressure_plate",
		"trapdoor$": "trapdoor",
		"_fence$": "fence",
		"fence_gate$": "fence_gate",
		"_stairs$": "stairs",
		"_wall_sign$": "wall_sign_prefix", // signs where the type is the prefix of the image file name. used in modern signs, hence why it's up here as a regular expression
		"_standing_sign$": "standing_sign_prefix",
		"_hanging_sign$": "hanging_sign",
		"_wall$": "wall",
		"_carpet$": "carpet",
		"glass_pane$": "glass_pane",
		"_sapling$": "cross_texture",
		"_coral$": "cross_texture",
		"_coral_fan$": "coral_fan",
		"_coral_wall_fan$": "coral_wall_fan",
		"rail$": "rail",
		"candle$": "candles",
		"candle_cake$": "candle_cake",
		"_tulip$": "cross_texture",
		"anvil$": "anvil",
		"command_block$": "command_block",
		"_glazed_terracotta$": "glazed_terracotta",
		"_shulker_box$": "shulker_box",
		"(^|soul_|copper_)lantern$": "lantern",
		"lightning_rod$": "lightning_rod",
		"chain$": "chain",
		"_bars$": "metal_bars",
		"exposed_copper_golem_statue$": "copper_golem_statue<copper_golem_exposed>",
		"weathered_copper_golem_statue$": "copper_golem_statue<copper_golem_weathered>",
		"oxidized_copper_golem_statue$": "copper_golem_statue<copper_golem_oxidized>",
		"copper_golem_statue$": "copper_golem_statue<copper_golem>",
		"_shelf$": "shelf"
	},
	"individualBlocks": {
		"bamboo_sapling": "cross_texture",
		"bamboo": "bamboo",
		"beacon": "beacon",
		"bed": "bed",
		"bell": "bell",
		"brewing_stand": "brewing_stand",
		"bubble_column": "bubble_column",
		"cactus": "cactus",
		"cake": "cake",
		"cauldron": "cauldron",
		"lava_cauldron": "cauldron",
		"composter": "composter",
		
		"chorus_flower": "chorus_flower",
		"chorus_plant": "chorus_plant",
		"cocoa": "cocoa",
		
		"chest": "chest<textures/entity/chest/normal>",
		"trapped_chest": "chest<textures/entity/chest/trapped>",
		"copper_chest": "chest<textures/entity/chest/copper_default>",
		"waxed_copper_chest": "chest<textures/entity/chest/copper_default>",
		"exposed_copper_chest": "chest<textures/entity/chest/copper_exposed>",
		"waxed_exposed_copper_chest": "chest<textures/entity/chest/copper_exposed>",
		"weathered_copper_chest": "chest<textures/entity/chest/copper_weathered>",
		"waxed_weathered_copper_chest": "chest<textures/entity/chest/copper_weathered>",
		"oxidized_copper_chest": "chest<textures/entity/chest/copper_oxidized>",
		"waxed_oxidized_copper_chest": "chest<textures/entity/chest/copper_oxidized>",
		"ender_chest": "chest<textures/entity/chest/ender>",
		
		"redstone_wire": "redstone_dust",
		"powered_repeater": "repeater",
		"unpowered_repeater": "repeater",
		"powered_comparator": "comparator",
		"unpowered_comparator": "comparator",
		"observer": "observer", // top face is rotated
		"piston": "piston<textures/entity/pistonarm/pistonArm>",
		"sticky_piston": "piston<textures/entity/pistonarm/pistonArmSticky>",
		"dispenser": "dispenser",
		"dropper": "dispenser",
		"crafter": "crafter",
		"barrel": "barrel",
		"chiseled_bookshelf": "chiseled_bookshelf",
		"light_gray_shulker_box": "textured_shulker_box<textures/entity/shulker/shulker_silver>", // all the other shulker boxes have appropriately named textures (e.g. shulker_red.png), but this one is shulker_silver.png because they haven't updated it :(
		"jigsaw": "jigsaw_block",
		
		"furnace": "furnace",
		"blast_furnace": "furnace",
		"smoker": "furnace",
		"lit_furnace": "lit_furnace",
		"lit_blast_furnace": "lit_furnace",
		"lit_smoker": "lit_furnace",
		
		"wall_sign": "wall_sign<textures/entity/sign>",
		"spruce_wall_sign": "wall_sign_suffix", // new signs use the wall_sign_prefix shape, defined as a regular expression above for best future compatibility
		"birch_wall_sign": "wall_sign_suffix",
		"jungle_wall_sign": "wall_sign_suffix",
		"acacia_wall_sign": "wall_sign_suffix",
		"darkoak_wall_sign": "wall_sign_suffix",
		"crimson_wall_sign": "wall_sign_suffix",
		"warped_wall_sign": "wall_sign_suffix",
		"standing_sign": "standing_sign<textures/entity/sign>",
		"spruce_standing_sign": "standing_sign_suffix",
		"birch_standing_sign": "standing_sign_suffix",
		"jungle_standing_sign": "standing_sign_suffix",
		"acacia_standing_sign": "standing_sign_suffix",
		"darkoak_standing_sign": "standing_sign_suffix",
		"crimson_standing_sign": "standing_sign_suffix",
		"warped_standing_sign": "standing_sign_suffix",
		
		"conduit": "conduit",
		"brown_mushroom": "cross_texture",
		"crimson_fungus": "cross_texture",
		"crimson_roots": "cross_texture",
		"deadbush": "cross_texture",
		"nether_sprouts": "cross_texture",
		"red_shrub": "red_shrub",
		"shelf_mushroom": "shelf_mushroom",
		
		// for more info, refer to https://bugs.mojang.com/browse/MCPE-180783
		"torch": "torch",
		"soul_torch": "torch",
		"copper_torch": "torch",
		"unlit_redstone_torch": "torch",
		"redstone_torch": "redstone_torch", // a different block shape is needed for the "glow" outline.
		
		// flowers
		"fern": "cross_texture",
		"dandelion": "cross_texture",
		"poppy": "cross_texture",
		"blue_orchid": "cross_texture",
		"allium": "cross_texture",
		"azure_bluet": "cross_texture",
		"oxeye_daisy": "cross_texture",
		"cornflower": "cross_texture",
		"lily_of_the_valley": "cross_texture",
		"wither_rose": "cross_texture",
		"torchflower": "cross_texture",
		"torchflower_crop": "cross_texture",
		"golden_dandelion": "cross_texture", // which is a golden dandelion
		
		"short_grass": "cross_texture",
		"red_mushroom": "cross_texture",
		"reeds": "cross_texture",
		"sweet_berry_bush": "sweet_berry_bush",
		"twisting_vines": "cross_texture",
		"warped_fungus": "cross_texture",
		"warped_roots": "cross_texture",
		"web": "cross_texture",
		"weeping_vines": "cross_texture",
		
		"pitcher_plant": "pitcher_plant",
		"pitcher_crop": "pitcher_crop",
		"rose_bush": "double_plant",
		"sunflower": "sunflower",
		"large_fern": "double_plant",
		"tall_grass": "double_plant",
		"lilac": "double_plant",
		"peony": "double_plant",
		
		"wall_banner": "wall_banner",
		"standing_banner": "standing_banner",
		"bamboo_fence": "bamboo_fence",
		"bamboo_fence_gate": "bamboo_fence_gate", // has special texture so requires special UV mapping. other fence gates don't have any UV mapping so they need separate block shapes :(
		"stonecutter_block": "stonecutter",
		"enchanting_table": "enchanting_table",
		"loom": "loom",
		"grindstone": "grindstone",
		"dragon_egg": "dragon_egg",
		"end_rod": "end_rod",
		"farmland": "farmland",
		"grass_path": "farmland",
		"fire": "fire",
		"soul_fire": "fire",
		"flower_pot": "flower_pot",
		"decorated_pot": "decorated_pot",
		"frame": "item_frame",
		"glow_frame": "item_frame",
		"hopper": "hopper",
		"kelp": "kelp",
		"ladder": "ladder",
		"lectern": "lectern",
		"lever": "lever",
		"waterlily": "lilypad",
		"campfire": "campfire",
		"soul_campfire": "campfire",
		"daylight_detector": "daylight_detector",
		"daylight_detector_inverted": "daylight_detector",
		"portal": "nether_portal",
		"end_portal_frame": "end_portal_frame",
		"end_portal": "end_portal",
		"end_gateway": "end_gateway",
		"beetroot": "rows",
		"carrots": "rows",
		"nether_wart": "rows",
		"potatoes": "rows",
		"wheat": "rows",
		"sea_pickle": "sea_pickle",
		"seagrass": "seagrass",
		"melon_stem": "plant_stem",
		"pumpkin_stem": "plant_stem",
		"snow_layer": "top_snow",
		"trip_wire": "tripwire",
		"tripwire_hook": "tripwire_hook",
		"turtle_egg": "turtle_eggs",
		"vine": "vine",
		"flowing_lava": "liquid",
		"flowing_water": "liquid",
		"lava": "liquid",
		"water": "liquid",
		"small_amethyst_bud": "cross_texture",
		"medium_amethyst_bud": "cross_texture",
		"large_amethyst_bud": "cross_texture",
		"amethyst_cluster": "cross_texture",
		"cave_vines": "cross_texture", // todo: check block below to determine if "head" texture should be used
		"cave_vines_body_with_berries": "cross_texture",
		"cave_vines_head_with_berries": "cross_texture",
		"glow_lichen": "multi_face",
		"hanging_roots": "cross_texture",
		"pointed_dripstone": "stalagmite_or_stalactite",
		"sulfur_spike": "stalagmite_or_stalactite",
		"mangrove_propagule": "mangrove_propagule",
		"sculk_shrieker": "sculk_shrieker",
		"sculk_sensor": "sculk_sensor",
		"calibrated_sculk_sensor": "calibrated_sculk_sensor",
		"sculk_vein": "multi_face",
		"frog_spawn": "lilypad", // hmm
		"mangrove_roots": "mangrove_roots",
		"sniffer_egg": "sniffer_egg",
		"pink_petals": "pink_petals",
		"slime": "slime_block",
		"honey_block": "honey_block",
		"skeleton_skull": "skull<textures/entity/skulls/skeleton>",
		"wither_skeleton_skull": "skull<textures/entity/skulls/wither_skeleton>",
		"player_head": "player_head<textures/entity/steve>",
		// "player_head": "player_head<textures/entity/villager/villager>",
		"zombie_head": "skull<textures/entity/skulls/zombie>",
		"creeper_head": "skull<textures/entity/skulls/creeper>",
		"dragon_head": "dragon_head",
		"piglin_head": "piglin_head",
		
		"azalea": "azalea",
		"flowering_azalea": "azalea",
		"heavy_core": "heavy_core",
		"scaffolding": "scaffolding",
		"big_dripleaf": "big_dripleaf",
		"small_dripleaf_block": "small_dripleaf",
		"spore_blossom": "spore_blossom",
		
		"pale_hanging_moss": "cross_texture",
		"pale_moss_carpet": "pale_moss_carpet",
		"closed_eyeblossom": "cross_texture",
		"open_eyeblossom": "cross_texture",
		"resin_clump": "multi_face",
		
		"bush": "cross_texture",
		"firefly_bush": "cross_texture",
		"short_dry_grass": "cross_texture",
		"tall_dry_grass": "cross_texture",
		"cactus_flower": "cross_texture",
		"leaf_litter": "leaf_litter",
		"wildflowers": "pink_petals",
		
		"dried_ghast": "dried_ghast",
		"straw_bed": "straw_bed"
		
		// "dirt": "debug_auto_uv_4" // must disable geometry merging
	},
	
	"$schema": "schemas/blockShapes.schema.json"
}
```

## File: src/data/blockStateDefinitions.json
```json
// Contains definitions for block states that control texture variants and rotations.
// Note: Block states that control geometry are used in blockShapeGeos.json
{
	"textureVariants": {
		"*": {
			// When a block has a block state in here, it will check the value and look at the corresponding texture variant in terrain_texture.json
			// E.g. When cake's bite_counter is 0, it will look at the 0th texture variant in terrain_texture.json, and when it's 1-6, it will look at the 1st texture variant. This makes it show the inner texture when necessary.
			"structure_block_type": {
				"data": 0, // All the textures are actually incorrect: https://bugs.mojang.com/browse/MCPE-48224
				"save": 1,
				"load": 2,
				"corner": 3,
				"invalid": 4,
				"export": 5
			},
			"powered_bit": [0, 1], // observers
			"output_subtract_bit": [0, 1], // comparators; this is only used by the front torch as the back two torches use the eigenvariant to make them powered.
			"lit": [0, 1], // candles
			"cracked_state": { // turtle eggs, sniffer egg
				"no_cracks": 0,
				"cracked": 1,
				"max_cracked": 2
			},
			"composter_fill_level": [42, 1, 1, 1, 1, 1, 1, 1, 2], // first is never used
			"honey_level": [0, 0, 0, 0, 0, 1],
			"moisturized_amount": [1, 0, 0, 0, 0, 0, 0, 0], // farmland
			"tip": [0, 1], // pale hanging moss
			"bloom": [0, 1], // sculk catalyst (hardly noticeable in-game)
			"can_summon": [0, 1], // sculk shrieker
			"respawn_anchor_charge": [0, 1, 2, 3, 4],
			"huge_mushroom_bits": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			"brushed_progress": [0, 1, 2, 3], // suspicious sand/gravel
			"rehydration_level": [0, 1, 2, 3] // dried ghasts
		},
		"blockShapes": {
			"cake": {
				"bite_counter": [0, 1, 1, 1, 1, 1, 1]
			},
			"stalagmite_or_stalactite": {
				"hanging": [1, 0]
			},
			"mangrove_propagule": {
				"hanging": [0, 1]
			},
			"pitcher_crop": {
				"growth": [42, 0, 1, 2, 3] // this is used for the actual flower/stem bit. the bottom thingy doesn't have variants
			},
			"plant_stem": {
				"facing_direction": [0, 0, 1, 1, 1, 1]
			},
			"barrel": {
				"open_bit": [0, 1]
			},
			"crafter": { // either both are 0, or one only is 1
				"#exclusive_add": true,
				"triggered_bit": [0, 1],
				"crafting": [0, 2]
			},
			"chorus_flower": {
				"age": [0, 0, 0, 0, 0, 1]
			},
			"hopper": {
				"#exclusive_add": true,
				"facing_direction": [0, 42, 2, 2, 2, 2], // since the entire hopper model is rotated, the side textures stay the same (hence 2, 2, 2, 2 instead of 2, 3, 4, 5)
				"toggle_bit": [0, 8]
			},
			"cocoa": {
				"age": [0, 1, 2]
			}
		},
		"blockNames": {
			"/copper_bulb/": { // test regular expression on block names
				"#exclusive_add": true,
				"lit": [0, 1],
				"powered_bit": [0, 2]
			},
			"wheat": {
				"growth": [0, 1, 2, 3, 4, 5, 6, 7]
			},
			"potatoes,carrots,beetroot": {
				"growth": [0, 0, 1, 1, 2, 2, 2, 3]
			},
			"torchflower_crop": {
				"growth": [0, 1]
			},
			"nether_wart": {
				"age": [0, 1, 2, 3]
			},
			"creaking_heart": {
				"creaking_heart_state": { // added in 1.21.60.25 to replace active
					"uprooted": 0,
					"dormant": 1,
					"awake": 2
				}
			},
			"vault": {
				"#exclusive_add": true,
				"vault_state": {
					"inactive": 0,
					"active": 1,
					"unlocking": 2,
					"ejecting": 3
				},
				"ominous": [0, 4]
			},
			"trial_spawner": {
				"#exclusive_add": true,
				"trial_spawner_state": [0, 1, 2, 3, 4, 5],
				"ominous": [0, 6]
			}
		}
	},
	"rotations": { // by block shape
		"*": {
			"pillar_axis": {
				"x": [0, 0, 90],
				"y": [0, 0, 0],
				"z": [90, 0, 0]
			},
			"facing_direction": { // this is a mess
				"0": [0, 0, 180], // down
				"1": [0, 0, 0], // up
				"2": [90, 180, 0], // south
				"3": [90, 0, 0], // north
				"4": [90, 90, 0], // east
				"5": [90, -90, 0] // west
			},
			"minecraft:facing_direction": { // used by observers
				"down": [90, 0, 0],
				"up": [-90, 0, 0],
				"south": [0, 180, 0],
				"north": [0, 0, 0],
				"east": [0, 90, 0],
				"west": [0, -90, 0]
			},
			"torch_facing_direction": {
				"west": [0, 180, 0],
				"east": [0, 0, 0],
				"north": [0, -90, 0],
				"south": [0, 90, 0],
				"top": [0, 0, 0]
			},
			"weirdo_direction": { // stairs
				"0": [0, 180, 0], // east
				"1": [0, 0, 0], // west
				"2": [0, -90, 0], // south
				"3": [0, 90, 0] // north
			},
			"lever_direction": {
				"up_north_south": [0, 0, 0],
				"up_east_west": [0, -90, 0],
				"down_north_south": [0, 0, 180],
				"down_east_west": [0, 90, 180],
				"east": [90, 90, 0],
				"west": [90, -90, 0],
				"south": [90, 180, 0],
				"north": [90, 0, 0]
			},
			"direction": {
				"0": [0, 0, 0], // south
				"1": [0, 90, 0], // west
				"2": [0, 180, 0], // north
				"3": [0, -90, 0] // east
			},
			"minecraft:cardinal_direction": { // chests, all furnaces
				"north": [0, 0, 0],
				"south": [0, 180, 0],
				"east": [0, 90, 0],
				"west": [0, -90, 0]
			},
			"ground_sign_direction": { // https://minecraft.wiki/w/Sign#Block_states
				"0": [0, 0, 0],
				"1": [0, 22.5, 0],
				"2": [0, 45, 0],
				"3": [0, 67.5, 0],
				"4": [0, 90, 0],
				"5": [0, 112.5, 0],
				"6": [0, 135, 0],
				"7": [0, 157.5, 0],
				"8": [0, 180, 0],
				"9": [0, 202.5, 0],
				"10": [0, 225, 0],
				"11": [0, 247.5, 0],
				"12": [0, 270, 0],
				"13": [0, 292.5, 0],
				"14": [0, 315, 0],
				"15": [0, 337.5, 0]
			},
			"rail_direction": {
				"0": [0, 0, 0],
				"1": [0, 90, 0],
				"2": [0, -90, 0],
				"3": [0, 90, 0],
				"4": [0, 180, 0],
				"5": [0, 0, 0],
				"6": [0, 90, 0],
				"7": [0, 180, 0],
				"8": [0, -90, 0],
				"9": [0, 0, 0]
			},
			"minecraft:block_face": { // amethyst buds/crystals
				"up": [0, 0, 0],
				"down": [180, 0, 0],
				"west": [0, 0, 90],
				"east": [0, 0, -90],
				"north": [90, 0, 0],
				"south": [-90, 0, 0]
			},
			"orientation": { // crafters only
				"north_up": [0, 0, 0],
				"east_up": [0, 90, 0],
				"south_up": [0, 180, 0],
				"west_up": [0, -90, 0],
				"up_north": [-90, 0, 0],
				"up_east": [-90, 90, 0],
				"up_south": [-90, 180, 0],
				"up_west": [-90, -90, 0],
				"down_north": [90, 0, 0],
				"down_east": [90, 90, 0],
				"down_south": [90, 180, 0],
				"down_west": [90, -90, 0]
			},
			"coral_direction": [[0, 90, 0], [0, -90, 0], [0, 180, 0], [0, 0, 0]]
		},
		"blockShapes": {
			"button,lightning_rod,command_block": {
				"facing_direction": { // button/lightning rod/command block orientation for north/south/east/west is mirrored to that of pistons, which also use facing_direction
					"0": [180, 0, 0], // down
					"1": [0, 0, 0], // up
					"2": [90, 0, 0], // north
					"3": [90, 180, 0], // south
					"4": [90, -90, 0], // west
					"5": [90, 90, 0] // east
				}
			},
			"hopper,hanging_sign": {
				"facing_direction": { // really wish they split these generic states up, into seperate ones - like already done with lever_direction, torch_facing_direction, etc.
					"0": [0, 0, 0], // down
					"2": [0, 0, 0], // north
					"3": [0, 180, 0], // south
					"4": [0, -90, 0], // west
					"5": [0, 90, 0] // east
				}
			},
			"trapdoor": {
				"direction": {
					"0": [0, -90, 0],
					"1": [0, 90, 0],
					"2": [0, 0, 0],
					"3": [0, 180, 0]
				}
			},
			"wall_sign,wall_sign_prefix,wall_sign_suffix,glazed_terracotta,wall_banner": { // todo: merge with hopper defs maybe
				"facing_direction": {
					"2": [0, 0, 0], // north
					"3": [0, 180, 0], // south
					"4": [0, -90, 0], // west
					"5": [0, 90, 0] // east
				}
			},
			"grindstone": {
				"attachment": {
					"standing": [0, 0, 0],
					"side": [-90, 0, 0],
					"hanging": [-180, 0, 0]
				}
			},
			"dispenser": {
				"facing_direction": [[0, 0, 0], [180, 0, 0], [0, 0, 0], [0, 180, 0], [0, -90, 0], [0, 90, 0]]
			},
			"item_frame": {
				"facing_direction": [[90, 0, 0], [-90, 0, 0], [0, 0, 0], [0, 180, 0], [0, -90, 0], [0, 90, 0]]
			},
			"plant_stem": { // for melon/pumpkin stems
				"facing_direction": [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 180, 0], [0, -90, 0], [0, 90, 0]]
			},
			"barrel": {
				"facing_direction": [[180, 0, 0], [0, 0, 0], [90, 0, 0], [90, 180, 0], [90, -90, 0], [90, 90, 0]]
			},
			"repeater,comparator,fence_gate,bamboo_fence_gate,straw_bed": {
				"minecraft:cardinal_direction": { // this is opposite to how it is usually
					"north": [0, 180, 0],
					"south": [0, 0, 0],
					"east": [0, -90, 0],
					"west": [0, 90, 0]
				}
			},
			"door": {
				"minecraft:cardinal_direction": {
					"south": [0, -90, 0],
					"west": [0, 0, 0],
					"north": [0, 90, 0],
					"east": [0, 180, 0]
				}
			},
			"shulker_box,textured_shulker_box": {
				"entity.facing": { // ok I lied, it also can look at block entity data... (this is the only block that doesn't store rotation in block states)
					"0": [180, 0, 0],
					"1": [0, 0, 0],
					"2": [90, 0, 0],
					"3": [90, 180, 0],
					"4": [90, -90, 0],
					"5": [90, 90, 0]
				}
			},
			"jigsaw_block": {
				"rotation": [[0, 0, 0], [0, 90, 0], [0, 180, 0], [0, -90, 0]],
				"facing_direction": [[0, 0, 180], [0, 0, 0], [90, 0, 180], [90, 180, 180], [90, 90, 180], [90, -90, 180]]
			},
			"bed": {
				"direction": {
					"0": [0, 180, 0], // south
					"1": [0, -90, 0], // west
					"2": [0, 0, 0], // north
					"3": [0, 90, 0] // east
				}
			},
			"skull,player_head,dragon_head,piglin_head": {
				"entity.Rotation": {
					"-180": [0, -180, 0],
					"-157.5": [0, -157.5, 0],
					"-112.5": [0, -112.5, 0],
					"-90": [0, -90, 0],
					"-67.5": [0, -67.5, 0],
					"-45": [0, -45, 0],
					"-22.5": [0, -22.5, 0],
					"0": [0, 0, 0],
					"45": [0, 45, 0],
					"90": [0, 90, 0],
					"135": [0, 135, 0],
					"22.5": [0, 22.5, 0],
					"67.5": [0, 67.5, 0],
					"112.5": [0, 112.5, 0],
					"157.5": [0, 157.5, 0]
				},
				"facing_direction": [[42, 42, 42], [0, 0, 0], [0, 0, 0], [0, 180, 0], [0, -90, 0], [0, 90, 0]]			
			}
		},
		"blockNames": {
			"carved_pumpkin,lit_pumpkin,lectern": {
				"minecraft:cardinal_direction": { // this is opposite to how it is usually
					"north": [0, 180, 0],
					"south": [0, 0, 0],
					"east": [0, -90, 0],
					"west": [0, 90, 0]
				}
			},
			"loom,chiseled_bookshelf,tripwire_hook": {
				"direction": {
					"0": [0, 180, 0], // south
					"1": [0, -90, 0], // west
					"2": [0, 0, 0], // north
					"3": [0, 90, 0] // east
				}
			}
		}
	},
	
	"$schema": "schemas/blockStateDefinitions.schema.json"
}
```

## File: src/data/itemIcons.json
```json
// Mappings from item names to their entries in item_texture.json
// This was originally generated by looking at the items with different icons as defined in https://github.com/bridge-core/bridge./tree/master/static/vanilla/RP/items, last updated 4 years ago. Despite apparently being from the vanilla resource packs, I couldn't find these anywhere else on GitHub except for in https://github.com/maksym-pasichnyk/minecraft-unity/tree/master/Assets/StreamingAssets/resource_packs/vanilla/items_new which is a bit updated. Neither have been updated for the new spawn egg changes. I have had to make manual changes to get it to work now, and to work with BedrockData/r16_to_current_item_map.json. I really wish these could be generated automatically but it doesn't seem possible. MOJANG WHY, ALL I WANT TO DO IS FIND AND CHANGE THE TEXTURES FOR ITEMS >:(
{
	"tropical_fish_spawn_egg": "spawn_egg_tropicalfish",
	"zombie_pigman_spawn_egg": "spawn_egg_zombified_piglin",
	"/^(\\w+)_spawn_egg$/": "spawn_egg_$1",
	"/^(\\w+)_bundle$/": "bundle_$1",
	"clock": "clock_item",
	"compass": "compass_item",
	"glow_ink_sac": "dye_powder.20",
	"netherite_axe": "axe.5",
	"netherite_hoe": "hoe.5",
	"netherite_pickaxe": "pickaxe.5",
	"netherite_shovel": "shovel.5",
	"netherite_sword": "sword.5",
	"crimson_sign": "crimson_sign_item",
	"warped_sign": "warped_sign_item",
	"lodestone_compass": "lodestonecompass_item",
	
	"acacia_sign": "sign_acacia",
	"baked_potato": "potato_baked",
	"beef": "beef_raw",
	"beetroot_seeds": "seeds_beetroot",
	"birch_sign": "sign_birch",
	"black_dye": "dye_powder.16",
	"blue_dye": "dye_powder.18",
	"bone_meal": "dye_powder.15",
	"book": "book_normal",
	"bow": "bow_standby",
	"brown_dye": "dye_powder.17",
	"chainmail_boots": "boots.1",
	"chainmail_chestplate": "chestplate.1",
	"chainmail_helmet": "helmet.1",
	"chainmail_leggings": "leggings.1",
	"chest_minecart": "minecart_chest",
	"chicken": "chicken_raw",
	"cocoa_beans": "dye_powder.3",
	"cod": "fish",
	"command_block_minecart": "minecart_command_block",
	"cooked_beef": "beef_cooked",
	"cooked_chicken": "chicken_cooked",
	"cooked_cod": "cooked_fish",
	"cooked_mutton": "mutton_cooked",
	"cooked_porkchop": "porkchop_cooked",
	"cooked_rabbit": "rabbit_cooked",
	"crossbow": "crossbow_standby",
	"cyan_dye": "dye_powder.6",
	"dark_oak_sign": "sign_darkoak",
	"diamond_axe": "axe.4",
	"diamond_boots": "boots.4",
	"diamond_chestplate": "chestplate.4",
	"diamond_helmet": "helmet.4",
	"diamond_hoe": "hoe.4",
	"diamond_leggings": "leggings.4",
	"diamond_pickaxe": "pickaxe.4",
	"diamond_shovel": "shovel.4",
	"diamond_sword": "sword.4",
	"empty_map": "map_empty",
	"enchanted_book": "book_enchanted",
	"enchanted_golden_apple": "apple_golden",
	"fermented_spider_eye": "spider_eye_fermented",
	"filled_map": "map_filled",
	"firework_rocket": "fireworks",
	"firework_star": "fireworks_charge",
	"frame": "item_frame",
	"glass_bottle": "potion_bottle_empty",
	"glistering_melon_slice": "melon_speckled",
	"golden_apple": "apple_golden",
	"golden_axe": "axe.3",
	"golden_boots": "boots.3",
	"golden_carrot": "carrot_golden",
	"golden_chestplate": "chestplate.3",
	"golden_helmet": "helmet.3",
	"golden_hoe": "hoe.3",
	"golden_horse_armor": "gold_horse_armor",
	"golden_leggings": "leggings.3",
	"golden_pickaxe": "pickaxe.3",
	"golden_shovel": "shovel.3",
	"golden_sword": "sword.3",
	"gray_dye": "dye_powder.8",
	"green_dye": "dye_powder.2",
	"hopper_minecart": "minecart_hopper",
	"ink_sac": "dye_powder.0",
	"iron_axe": "axe.2",
	"iron_boots": "boots.2",
	"iron_chestplate": "chestplate.2",
	"iron_helmet": "helmet.2",
	"iron_hoe": "hoe.2",
	"iron_leggings": "leggings.2",
	"iron_pickaxe": "pickaxe.2",
	"iron_shovel": "shovel.2",
	"iron_sword": "sword.2",
	"jungle_sign": "sign_jungle",
	"lapis_lazuli": "dye_powder.4",
	"leather_boots": "boots.0",
	"leather_chestplate": "chestplate.0",
	"leather_helmet": "helmet.0",
	"leather_leggings": "leggings.0",
	"light_blue_dye": "dye_powder.12",
	"light_gray_dye": "dye_powder.7",
	"lime_dye": "dye_powder.10",
	"lingering_potion": "potion_bottle_lingering",
	"magenta_dye": "dye_powder.13",
	"map": "map_empty",
	"melon_seeds": "seeds_melon",
	"melon_slice": "melon",
	"minecart": "minecart_normal",
	"music_disc_11": "record_11",
	"music_disc_13": "record_13",
	"music_disc_blocks": "record_blocks",
	"music_disc_cat": "record_cat",
	"music_disc_chirp": "record_chirp",
	"music_disc_far": "record_far",
	"music_disc_mall": "record_mall",
	"music_disc_mellohi": "record_mellohi",
	"music_disc_pigstep": "record_pigstep",
	"music_disc_stal": "record_stal",
	"music_disc_strad": "record_strad",
	"music_disc_wait": "record_wait",
	"music_disc_ward": "record_ward",
	"mutton": "mutton_raw",
	"netherite_boots": "boots.5",
	"netherite_chestplate": "chestplate.5",
	"netherite_helmet": "helmet.5",
	"netherite_leggings": "leggings.5",
	"orange_dye": "dye_powder.14",
	"pink_dye": "dye_powder.9",
	"poisonous_potato": "potato_poisonous",
	"popped_chorus_fruit": "chorus_fruit_popped",
	"porkchop": "porkchop_raw",
	"potion": "potion_overlay",
	"pumpkin_seeds": "seeds_pumpkin",
	"purple_dye": "dye_powder.5",
	"red_dye": "dye_powder.1",
	"redstone": "redstone_dust",
	"turtle_scute": "turtle_shell_piece",
	"slime_ball": "slimeball",
	"splash_potion": "potion_bottle_splash",
	"spruce_sign": "sign_spruce",
	"stone_axe": "axe.1",
	"stone_hoe": "hoe.1",
	"stone_pickaxe": "pickaxe.1",
	"stone_shovel": "shovel.1",
	"stone_sword": "sword.1",
	"sugar_cane": "reeds",
	"tnt_minecart": "minecart_tnt",
	"totem_of_undying": "totem",
	"tropical_fish": "clownfish",
	"wheat_seeds": "seeds_wheat",
	"white_dye": "dye_powder.19",
	"wooden_axe": "axe.0",
	"wooden_hoe": "hoe.0",
	"wooden_pickaxe": "pickaxe.0",
	"wooden_shovel": "shovel.0",
	"wooden_sword": "sword.0",
	"writable_book": "book_writable",
	"yellow_dye": "dye_powder.11",
	
	"$schema": "schemas/itemIcons.schema.json"
}
```

## File: src/data/materialListMappings.json
```json
// These are patches and remappings for MaterialList.js
{
	"ignoredBlocks": ["flowing_water", "flowing_lava", "bubble_column"], // these don't appear to be used anymore
	"blockToItemMappings": {
		"unpowered_repeater": "repeater",
		"powered_repeater": "repeater",
		"unpowered_comparator": "comparator",
		"powered_comparator": "comparator",
		"redstone_wire": "redstone",
		"unlit_redstone_torch": "redstone_torch",
		"water": "water_bucket",
		"lava": "lava_bucket",
		"powder_snow": "powder_snow_bucket",
		"lit_furnace": "furnace",
		"lit_blast_furnace": "blast_furnace",
		"lit_smoker": "smoker",
		"lit_redstone_ore": "redstone_ore",
		"lit_deepslate_redstone_ore": "deepslate_redstone_ore",
		"lit_redstone_lamp": "redstone_lamp",
		"reeds": "sugar_cane",
		"melon_stem": "melon_seeds",
		"pumpkin_stem": "pumpkin_seeds", // this one actually exists in the translation files as "Pumpkin Stem"; however, a material list is a list of items, not blocks
		"pitcher_crop": "pitcher_pod",
		"torchflower_crop": "torchflower_seeds",
		"wheat": "wheat_seeds",
		"potatoes": "potato",
		"carrots": "carrot",
		"wall_sign": "oak_sign", // I should probably have written a regex to handle these...
		"standing_sign": "oak_sign",
		"darkoak_wall_sign": "dark_oak_sign",
		"darkoak_standing_sign": "dark_oak_sign",
		"bamboo_sapling": "bamboo",
		"trip_wire": "string",
		"cocoa": "cocoa_beans",
		"wall_banner": "standing_banner",
		"cave_vines": "glow_berries",
		"cave_vines_body_with_berries": "glow_berries",
		"cave_vines_head_with_berries": "glow_berries",
		"/^(\\w+)_wall_sign$/": "$1_sign",
		"/^(\\w+)_standing_sign$/": "$1_sign",
		"/^(\\w+)_coral_wall_fan$/": "$1_coral_fan"
	},
	"itemCountMultipliers": {
		"/double_.*slab$/": {
			"multiplier": 2,
			"remove": "double_"
		},
		"/_door$/": 0.5,
		"peony,rose_bush,sunflower,lilac,large_fern,tall_grass,pitcher_plant": 0.5,
		"bed": 0.5
	},
	"specialBlockEntityProperties": {
		"bed": {
			"prop": "color",
			"serializationIds": ["item.bed.white", "item.bed.orange", "item.bed.magenta", "item.bed.lightBlue", "item.bed.yellow", "item.bed.lime", "item.bed.pink", "item.bed.gray", "item.bed.silver", "item.bed.cyan", "item.bed.purple", "item.bed.blue", "item.bed.brown", "item.bed.green", "item.bed.red", "item.bed.black"]
		}
	},
	"serializationIdPatches": {
		"tile.oak_planks": "tile.planks.oak",
		"tile.spruce_planks": "tile.planks.spruce",
		"tile.birch_planks": "tile.planks.birch",
		"tile.jungle_planks": "tile.planks.jungle",
		"tile.acacia_planks": "tile.planks.acacia",
		"tile.dark_oak_planks": "tile.planks.big_oak",
		"tile.oak_fence": "tile.fence",
		"tile.spruce_fence": "tile.spruceFence",
		"tile.birch_fence": "tile.birchFence",
		"tile.jungle_fence": "tile.jungleFence",
		"tile.acacia_fence": "tile.acaciaFence",
		"tile.dark_oak_fence": "tile.darkOakFence",
		"item.water_bucket": "item.bucketWater",
		"item.lava_bucket": "item.bucketLava",
		"item.powder_snow_bucket": "item.bucketPowderSnow",
		"tile.wall_banner": "tile.standing_banner",
		"tile.daylight_detector_inverted": "tile.daylight_detector",
		"tile.tube_coral_wall_fan": "tile.coral_fan.blue_fan.name",
		"tile.brain_coral_wall_fan": "tile.coral_fan.pink_fan.name",
		"tile.bubble_coral_wall_fan": "tile.coral_fan.purple_fan.name",
		"tile.fire_coral_wall_fan": "tile.coral_fan.red_fan.name",
		"tile.horn_coral_wall_fan": "tile.coral_fan.yellow_fan.name",
		"tile.dead_tube_coral_wall_fan": "tile.coral_fan_dead.blue_fan.name",
		"tile.dead_brain_coral_wall_fan": "tile.coral_fan_dead.pink_fan.name",
		"tile.dead_bubble_coral_wall_fan": "tile.coral_fan_dead.purple_fan.name",
		"tile.dead_fire_coral_wall_fan": "tile.coral_fan_dead.red_fan.name",
		"tile.dead_horn_coral_wall_fan": "tile.coral_fan_dead.yellow_fan.name",
		"tile.seagrass": "tile.seagrass.seagrass", // least surprising bugrock moment
		"item.creeper_head": "item.skull.creeper",
		"item.dragon_head": "item.skull.dragon",
		"item.piglin_head": "item.skull.piglin",
		"item.player_head": "item.skull.char",
		"item.skeleton_skull": "item.skull.skeleton",
		"item.wither_skeleton_skull": "item.skull.wither",
		"item.zombie_head": "item.skull.zombie",
		"item.cocoa_beans": "item.dye.brown",
		"item.white_dye": "item.dye.white_new",
		"item.bone_meal": "item.dye.white",
		"item.dark_oak_boat": "item.boat.big_oak",
		"item.dark_oak_chest_boat": "item.chest_boat.big_oak",
		"/^item.(?!.*chest_)(\\w+)_(boat|raft)$/": "item.boat.$1",
		"/^item.(\\w+)_chest_(boat|raft)$/": "item.chest_boat.$1"
	},
	"blocksMissingSerializationIds": {
		"end_gateway": "tile.end_gateway" // despite still existing, end gateways were removed from mojang-blocks.json in 1.21.50...
	},
	"translationPatches": {
		"tile.end_portal.name": "End Portal",
		"tile.end_gateway.name": "End Gateway"
	},
	
	"$schema": "schemas/materialListMappings.schema.json"
}
/*
➖🟩🟩🟩
➖🟩🟩⬛
➖🟩🟩🟩
➖➖🟦➖⬜⬜
➖➖🟦🟩⬜⬛
➖➖🟦➖⬜⬜🟧
⬜⬜⬜🟦⬜⬜🟥
⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜
➖➖🟨
➖➖🟨🟨
*/
```

## File: src/data/textureAtlasMappings.json
```json
// These are patches and other things for TextureAtlas.js
{
	"blocksDotJsonPatches": { // just a few inconsistencies here. ideally this doesn't exist. can be generated with: const missingFromBlocksDotJson=async VER=>[...(new Set((await fetch(`https://raw.githubusercontent.com/Mojang/bedrock-samples/${VER}/metadata/vanilladata_modules/mojang-blocks.json`).then(r=>r.json())).data_items.map(x=>x.name.replace("minecraft:","")))).difference(new Set(Object.keys(await fetch(`https://raw.githubusercontent.com/Mojang/bedrock-samples/${VER}/resource_pack/blocks.json`).then(res=>res.json()))))].filter(blockName=>!(["hard_","element_","colored_torch_"].some(prefix=>blockName.startsWith(prefix))||["chemical_heat","compound_creator","lab_table","material_reducer","underwater_torch"].includes(blockName)))
		"grass_block": "grass",
		"trip_wire": "tripWire",
		"sea_lantern": "seaLantern",
		"iron_chain": "chain",
		"unknown": "info_update" // shows missing_tile.png
	},
	"blocksToUseCarriedTextures": ["acacia_leaves", "birch_leaves", "bush", "dark_oak_leaves", "fern", "firefly_bush", "leaves", "leaves2", "mangrove_leaves", "oak_leaves", "open_eyeblossom", "short_grass", "spruce_leaves", "vine", "waterlily"],
	"transparentBlocks": {
		"water": 0.65,
		"flowing_water": 0.65,
		"slime": 0.8,
		"respawn_anchor": 2 // the nether portal in the top of respawn anchors is slightly transparent in the texture for some reason; this just makes it fully opaque
	},
	"terrainTextureTints": {
		"colors": {
			"foliage": "#79C05A",
			"water": "#44AFF5"
		},
		"terrainTextureKeys": {
			"grass_top": "foliage",
			"grass_side": "foliage", // since v1.26.50.25-preview, ALL the biome-specific tints for grass_side in terrain_texture.json have been replaced with a single one, the new dappled forest tint. Why? WHO KNOWS
			"tall_grass_bottom": {
				"tint": "foliage",
				"tintLikePng": true
			},
			"tall_grass_top": {
				"tint": "foliage",
				"tintLikePng": true
			},
			"large_fern_bottom": {
				"tint": "foliage",
				"tintLikePng": true
			},
			"large_fern_top": {
				"tint": "foliage",
				"tintLikePng": true
			},
			"reeds": {
				"tint": "foliage",
				"tintLikePng": true
			},
			"jungle_leaves": {
				"tint": "#57BE08",
				"tintLikePng": true
			},
			"leaf_litter": "#A36D46", // forest biome: https://minecraft.wiki/w/Block_colors#Dry_foliage_colors
			"flowing_water_grey": "water",
			"flowing_water": "water",
			"still_water_grey": "water",
			"still_water": "water"
		}
	},
	"missingFlipbookTextures": [],
	
	"$schema": "schemas/textureAtlasMappings.schema.json"
}
```

## File: src/packTemplate/animation_controllers/holoprint.hologram.animation_controllers.json
```json
{
	"format_version": "1.10.0",
	"animation_controllers": {
		"controller.animation.holoprint.hologram.spawn_animation": {
			"initial_state": "default",
			"states": {
				"default": {
					"transitions": [
						{
							"skip_spawn_animation": "v.skip_spawn_animation"
						},
						{
							"animate": "v.hologram_activated"
						}
					]
				},
				"animate": {
					"transitions": [
						{
							"skip_spawn_animation": "v.skip_spawn_animation"
						}
					],
					"animations": ["hologram.spawn"]
				},
				"skip_spawn_animation": {}
			}
		},
		"controller.animation.holoprint.hologram.layers": {
			"initial_state": "default",
			"states": {
				"default": {
					"blend_transition": 0.1,
					"blend_via_shortest_path": true,
					"transitions": []
				}
			}
		},
		"controller.animation.holoprint.hologram.bounding_box": { // each structure has a different size so a different state with different particle scripts is created for each structure
			"initial_state": "visible_0",
			"states": {
				"hidden": {
					"transitions": []
				}
			}
		},
		"controller.animation.holoprint.hologram.block_validation": {
			"initial_state": "default",
			"states": {
				"default": {
					"transitions": []
				}
			}
		},
		"controller.animation.holoprint.hologram.saving_backup_particles": {
			"initial_state": "default",
			"states": {
				"default": {
					"transitions": [
						{
							"particles": "v.saving_backup"
						}
					]
				},
				"particles": {
					"transitions": [
						{
							"default": "!v.saving_backup"
						}
					],
					"particle_effects": [
						{
							"effect": "saving_backup"
						}
					]
				}
			}
		}
	}
}
```

## File: src/packTemplate/animations/holoprint.hologram.animation.json
```json
/*
I would love to make the ghost blocks snap to the nearest block; however, armor stand rotations complicate this.
Doing it with the y-level is the easiest and works well since you can now place your armor stands on slabs, trapdoors etc. and it will snap down.
The x and z axis are wonky...
45 degree rotations can also be snapped to a cardinal direction; however, the ghost blocks are offset slightly then so it wouldn't be useful.

I also wonder if we could have a "rotation lock" option which makes the hologram render in one direction always regardless of armour stand orientation.
*/

{
	"format_version": "1.8.0",
	"animations": {
		"animation.holoprint.hologram.align": {
			"loop": "hold_on_last_frame",
			"bones": {
				"hologram_alignment_wrapper": {
					"position": [
						// Snap to nearest block. Unfortunately looks glitchy when moving since it takes a tick for the position to update.
						// x and z of armor stands is +0.5
						0, //"-16 * (q.position(0) - 0.5 - math.floor(q.position(0) - 0.5))",
						"-16 * (q.position(1) - math.floor(q.position(1))) - 0.125", // entity models are 0.125px above blocks for some reason
						0 //"-16 * (q.position(2) - math.floor(q.position(2)))"
					],
					"rotation": [
						0,
						"90 * (v.hologram.rotation + math.floor(q.body_y_rotation / 90)) - q.body_y_rotation", // Snap to 90-deg directions
						0
					]
				},
				"valid_structure_overlay": {
					"scale": ["v.hologram.structure_w + 0.05", "(v.hologram.layer == -1? v.hologram.structure_h : 1) + 0.05", "v.hologram.structure_d + 0.05"],
					"position": ["7.6 - v.hologram.structure_w * 16", "math.max(v.hologram.layer * 16, 0) - 0.4", -8.4] // Don't question why. I have already forgotten.
				}
			}
		},
		"animation.holoprint.hologram.offset": {
			"loop": "hold_on_last_frame",
			"bones": {
				"hologram_offset_wrapper": {
					"position": [
						"((v.hologram_dir == 0? -v.hologram.offset_x : (v.hologram_dir == 1? -v.hologram.offset_z : (v.hologram_dir == 2? v.hologram.offset_x : v.hologram.offset_z))) + (v.hologram.rotation > 1? v.hologram.structure_w - 1 : 0)) * 16",
						"v.hologram.offset_y * 16",
						"((v.hologram_dir == 0? v.hologram.offset_z: (v.hologram_dir == 1? -v.hologram.offset_x : (v.hologram_dir == 2? -v.hologram.offset_z : v.hologram.offset_x))) - (v.hologram.rotation == 1 || v.hologram.rotation == 2? v.hologram.structure_d - 1 : 0)) * 16"
					]
				}
			}
		},
		"animation.holoprint.hologram.coordinate_lock": {
			"loop": "hold_on_last_frame",
			"bones": {
				"hologram_offset_wrapper": {
					"position": [
						"v.hologram.offset_x * -16",
						"v.hologram.offset_y * 16",
						"v.hologram.offset_z * 16"
					],
					"rotation": [0, "js does this", 0]
				}
			}
		},
		"animation.holoprint.hologram.spawn": {}, // A fun spawning animation
		"animation.holoprint.hologram.wrong_block_overlay": {
			"loop": "hold_on_last_frame",
			"bones": {
				"wrong_block_overlay": {
					"position": [
						"v.hologram.wrong_block_x * -16",
						"v.hologram.wrong_block_y * 16",
						"v.hologram.wrong_block_z * 16"
					]
				}
			}
		}
	}
}
```

## File: src/packTemplate/materials/entity.material
```
{
	"materials": {
		"version": "1.0.0",
		"holoprint_hologram:entity_alphablend": {
			"+states": ["DisableCulling"], // This makes the ghost blocks visible when the camera is inside them. To me this makes it less confusing if you walk into one since you know where you are.
			"variants": [
				{
					"wrong_block_overlay": {
						"depthFunc": "Always"
					}
				}
			]
		}
	}
}
```

## File: src/packTemplate/models/entity/holoprint.hologram.geo.json
```json
{
	"format_version": "1.16.0",
	"minecraft:geometry": [
		{
			"description": {}, // this is a template for everything else
			"bones": [
				{
					"name": "hologram_alignment_wrapper"
				},
				{
					"name": "hologram_offset_wrapper",
					"parent": "hologram_alignment_wrapper"
				}
			]
		},
		{
			"description": {
				"identifier": "geometry.holoprint.hologram.wrong_block_overlay",
				"texture_width": 16,
				"texture_height": 16
			},
			"bones": [
				{
					"name": "hologram_alignment_wrapper"
				},
				{
					"name": "hologram_offset_wrapper",
					"parent": "hologram_alignment_wrapper"
				},
				{
					"name": "wrong_block_overlay",
					"parent": "hologram_offset_wrapper",
					"cubes": [
						{
							"origin": [-8, 0, -8],
							"size": [16, 16, 16],
							"inflate": 0.01,
							"uv": [0, 0]
						}
					]
				}
			]
		},
		{
			"description": {
				"identifier": "geometry.holoprint.hologram.valid_structure_overlay",
				"texture_width": 16,
				"texture_height": 16
			},
			"bones": [
				{
					"name": "hologram_alignment_wrapper"
				},
				{
					"name": "hologram_offset_wrapper",
					"parent": "hologram_alignment_wrapper"
				},
				{
					"name": "valid_structure_overlay",
					"parent": "hologram_offset_wrapper",
					"cubes": [
						{
							"origin": [0, 0, 0],
							"size": [16, 16, 16],
							"uv": [0, 0]
						}
					]
				}
			]
		},
		{
			"description": {
				"identifier": "geometry.holoprint.hologram.particle_alignment",
				"texture_width": 16,
				"texture_height": 16
			},
			"bones": [
				{
					"name": "hologram_alignment_wrapper"
				},
				{
					"name": "hologram_offset_wrapper",
					"parent": "hologram_alignment_wrapper",
					"locators": {
						"hologram_root": [0, 0, 0]
					}
				}
			]
		}
	]
}
```

## File: src/packTemplate/particles/block_validation.json
```json
{
	"format_version": "1.10.0",
	"particle_effect": {
		"description": {
			"basic_render_parameters": {
				"material": "particles_alpha",
				"texture": "textures/holoprint/particle/exclamation_mark"
			}
		},
		"components": {
			"minecraft:emitter_initialization": {
				"creation_expression": "v.kill_particles = false;"
			},
			"minecraft:emitter_rate_instant": {
				"num_particles": 1
			},
			"minecraft:emitter_lifetime_events": {
				"expiration_event": "kill_particles"
			},
			"minecraft:emitter_shape_point": {
				"offset": [0, -0.4, 0]
			},
			"minecraft:particle_lifetime_expression": {
				"expiration_expression": "!(t.show_wrong_block_overlay ?? false)? { t.show_wrong_block_overlay = true; t.wrong_block_x = v.x; t.wrong_block_y = v.y; t.wrong_block_z = v.z; }; return v.kill_particles;"
			},
			"minecraft:particle_appearance_billboard": {
				"size": ["q.distance_from_camera < 25? 0.1 : 0.15", "q.distance_from_camera < 25? 1 : 10"], // The actual exclamation mark is 8x32, but the texture is 8x80. This is so the origin of the particle is inside the block space, but the exclamation mark floats above.
				"facing_camera_mode": "lookat_y",
				"uv": {
					"texture_width": 8,
					"texture_height": 80,
					"uv": ["q.distance_from_camera < 25? 0 : 1", "q.distance_from_camera < 25? 0 : 15"],
					"uv_size": ["q.distance_from_camera < 25? 8 : 1", "q.distance_from_camera < 25? 80 : 1"]
				}
			},
			"minecraft:particle_lifetime_events": {
				"timeline": {
					"0.05": "set_wrong_block_overlay_position"
				},
				"expiration_event": "clear_wrong_block_overlay"
			}
		},
		"events": {
			"kill_particles": {
				"expression": "v.kill_particles = true;"
			},
			"set_wrong_block_overlay_position": {
				"expression": "t.show_wrong_block_overlay = true; t.wrong_block_x = v.x; t.wrong_block_y = v.y; t.wrong_block_z = v.z;"
			},
			"clear_wrong_block_overlay": {
				"expression": "v.x == t.wrong_block_x && v.y == t.wrong_block_y && v.z == t.wrong_block_z? { t.show_wrong_block_overlay = false; }; !v.kill_particles? { t.wrong_blocks = (t.wrong_blocks ?? 0) - 1; };" // remove wrong block overlay if the overlay is at this particle's position, and decrease wrong blocks counter if it expired by the block being placed (v.kill_particles will be true if the animation controller state changes)
			}
		}
	}
}
```

## File: src/packTemplate/particles/bounding_box_outline.json
```json
{
	"format_version": "1.10.0",
	"particle_effect": {
		"description": {
			"identifier": "holoprint:bounding_box_outline",
			"basic_render_parameters": {
				"material": "particles_opaque",
				"texture": "textures/holoprint/particle/single_white_pixel"
			}
		},
		"components": {
			"minecraft:emitter_initialization": {
				"creation_expression": "v.kill_particles = false;"
			},
			"minecraft:emitter_rate_instant": {
				"num_particles": 1
			},
			"minecraft:emitter_local_space": {
				"position": true,
				"rotation": true
			},
			"minecraft:emitter_lifetime_events": {
				"expiration_event": "kill_particles" // emitter expires when animation controller state changes, but the actual particles persist. to work around this, we change a particle variable when the emitter expires, which will make all particles expire as well.
			},
			"minecraft:particle_lifetime_expression": {
				"expiration_expression": "v.kill_particles"
			},
			"minecraft:particle_motion_parametric": {
				"relative_position": ["-(v.x ?? (v.dir == 0? v.size : 0)) + 0.5", "-(v.y ?? v.dir == 1? v.size : 0)", "(v.z ?? (v.dir == 2? v.size : 0)) - 0.5"]
			},
			"minecraft:particle_appearance_billboard": {
				"size": ["v.size", 0.01],
				"facing_camera_mode": "lookat_direction",
				"direction": {
					"mode": "custom",
					"custom_direction": ["v.dir == 0", "v.dir == 1", "v.dir == 2"]
				},
				"uv": {
					"uv": [0, 0],
					"uv_size": [1, 1]
				}
			},
			"minecraft:particle_appearance_tinting": {
				"color": ["v.r", "v.g", "v.b"]
			}
		},
		"events": {
			"kill_particles": {
				"expression": "v.kill_particles = true;"
			}
		}
	}
}
```

## File: src/packTemplate/particles/saving_backup.json
```json
{
	"format_version": "1.10.0",
	"particle_effect": {
		"description": {
			"identifier": "holoprint:saving_backup",
			"basic_render_parameters": {
				"material": "particles_blend",
				"texture": "textures/holoprint/particle/save_icon"
			}
		},
		"components": {
			"minecraft:emitter_rate_steady": {
				"spawn_rate": "Math.random(5, 10)",
				"max_particles": 50
			},
			"minecraft:emitter_lifetime_expression": {
				"activation_expression": 1,
				"expiration_expression": 0
			},
			"minecraft:emitter_shape_entity_aabb": {
				"direction": ["Math.random(-0.4, 0.4)", "Math.random(0.5, 0.8)", "Math.random(-0.4, 0.4)"]
			},
			"minecraft:particle_initial_speed": "(Math.random(0, 1) + Math.random(0, 1) + 1) * 0.55",
			"minecraft:particle_lifetime_expression": {
				"max_lifetime": "Math.random(0.85, 1.35)"
			},
			"minecraft:particle_motion_dynamic": {
				"linear_acceleration": [
					"variable.particle_random_1 - 0.5 - variable.particle_age",
					"1 - variable.particle_age * 0.52",
					"variable.particle_random_2 - 0.5 - variable.particle_age"
				]
			},
			"minecraft:particle_appearance_billboard": {
				"size": [0.3, 0.3],
				"facing_camera_mode": "lookat_xyz",
				"uv": {
					"uv": [0, 0],
					"uv_size": [1, 1]
				}
			},
			"minecraft:particle_appearance_lighting": {},
			"minecraft:particle_appearance_tinting": {
				"color": [1, 1, 1, "1 - Math.pow(v.particle_age / v.particle_lifetime, 3)"]
			}
		}
	}
}
```

## File: src/packTemplate/render_controllers/holoprint.hologram.render_controllers.json
```json
{
	"format_version": "1.8.0", // both 1.8.0 and 1.10.0 are used internally
	"render_controllers": {
		"controller.render.holoprint.hologram": {
			"arrays": {
				"textures": {
					"Array.textures": []
				},
				"geometries": {
					"Array.geometries": []
				}
			},
			"materials": [
				{
					"*": "Material.hologram"
				}
			],
			"geometry": "Array.geometries[v.hologram.structure_index]",
			"textures": ["Array.textures[v.hologram.texture_index]"],
			"is_hurt_color": {
				"r": 0,
				"g": 0,
				"b": 0,
				"a": 0
			},
			"on_fire_color": {
				"r": 0,
				"g": 0,
				"b": 0,
				"a": 0
			},
			"ignore_lighting": true
		},
		"controller.render.holoprint.hologram.wrong_block_overlay": {
			"materials": [
				{
					"*": "Material.hologram.wrong_block_overlay"
				}
			],
			"geometry": "Geometry.hologram.wrong_block_overlay",
			"textures": ["Texture.hologram.overlay"],
			"overlay_color": {
				"r": 1,
				"g": 0,
				"b": 0,
				"a": 1
			},
			"is_hurt_color": {
				"r": 0,
				"g": 0,
				"b": 0,
				"a": 0
			},
			"on_fire_color": {
				"r": 0,
				"g": 0,
				"b": 0,
				"a": 0
			},
			"ignore_lighting": true
		},
		"controller.render.holoprint.hologram.valid_structure_overlay": {
			"materials": [
				{
					"*": "Material.hologram"
				}
			],
			"geometry": "Geometry.hologram.valid_structure_overlay",
			"textures": ["Texture.hologram.overlay"],
			"overlay_color": {
				"r": 0,
				"g": 1,
				"b": 0,
				"a": 0.7
			},
			"is_hurt_color": {
				"r": 0,
				"g": 0,
				"b": 0,
				"a": 0
			},
			"on_fire_color": {
				"r": 0,
				"g": 0,
				"b": 0,
				"a": 0
			},
			"ignore_lighting": true
		},
		"controller.render.holoprint.hologram.particle_alignment": {
			"materials": [
				{
					"*": "Material.hologram"
				}
			],
			"geometry": "Geometry.hologram.particle_alignment",
			"textures": [
				"Texture.hologram.overlay"
			]
		}
	}
}
```

## File: src/packTemplate/texts/de_DE.lang
```
pack.description=§u★HoloPrint§r Ressourcenpaket generiert am §o{PACK_GENERATION_TIME}§r\nEntwickelt von §l§6SuperLlama88888§r{AUTHORS_SECTION}{DESCRIPTION_SECTION}{DISABLED_FEATURES_SECTION}{CONTROLS_SECTION}\n\n§lGesamtanzahl der Blöcke: {TOTAL_MATERIAL_COUNT}\n§r{MATERIAL_LIST}	## ★ at the start forces unicode font which makes it smaller so more text fits in
pack.description.authors=\nStruktur erstellt von {STRUCTURE_AUTHORS[ und ]}	## Authors/Description/Controls will be substituted into the actual description by the JS
pack.description.description=\n{DESCRIPTION}
pack.description.disabled_features=\n§4§o{DISABLED_FEATURES}§r
pack.description.controls=\n\n§lSteuerung:§r{CONTROLS}

pack.description.spawn_animation_disabled=Spawn-Animation deaktiviert
pack.description.player_controls_disabled=Spielersteuerung deaktiviert
pack.description.ui_controls_disabled=UI-Steuerung deaktiviert
pack.description.retextured_control_items_disabled=Geänderte Texturen von Steuerungs-Items deaktiviert
pack.description.renamed_control_items_disabled=Umbenennung der Steuerungs-Items deaktiviert

holoprint.controls.increase_layer=Schicht erhöhen
holoprint.controls.increase_opacity=Erhöhe Deckkraft
holoprint.controls.move_hologram_x=Bewege Hologramm X
holoprint.controls.move_hologram_y=Bewege Hologramm Y
holoprint.controls.move_hologram_z=Bewege Hologramm Z

holoprint.material_list.heading=Materialliste: {PACK_NAME}
holoprint.material_list.empty=§oDiese Materialliste enthält keine Items.§r

howtoplay.holoprint_about=Über HoloPrint
holoprint.info_screen.info.about=Du verwendest ein §uHoloPrint§r-Ressourcenpaket generiert am §o{PACK_GENERATION_TIME}§r.\n\n§uHoloPrint§r wurde von §l§6SuperLlama88888§r entwickelt und ist ein vollständig open-source Projekt.\n\nDer Quellcode kann auf §ohttps://github.com/SuperLlama88888/holoprint§r gefunden werden\n\nWeitere Informationen findest du im Wiki unter: §ohttps://holoprint-mc.github.io/wiki§r

holoprint.info_screen.title=HoloPrint Informationen
holoprint.info_screen.change_structure_layer=Schicht ändern
```

## File: src/packTemplate/texts/en_US.lang
```
pack.description=§u★HoloPrint§r resource pack generated on §o{PACK_GENERATION_TIME}§r\nDeveloped by §l§6SuperLlama88888§r{AUTHORS_SECTION}{DESCRIPTION_SECTION}{DISABLED_FEATURES_SECTION}{CONTROLS_SECTION}\n\n§lTotal block count: {TOTAL_MATERIAL_COUNT}\n§r{MATERIAL_LIST}	## ★ at the start forces unicode font which makes it smaller so more text fits in
pack.description.authors=\nStructure made by {STRUCTURE_AUTHORS[ and ]}	## Authors/Description/Controls will be substituted into the actual description by the JS
pack.description.description=\n{DESCRIPTION}
pack.description.disabled_features=\n§4§o{DISABLED_FEATURES}§r
pack.description.controls=\n\n§lControls:§r{CONTROLS}

pack.description.spawn_animation_disabled=Spawn animation disabled
pack.description.player_controls_disabled=Player controls disabled
pack.description.ui_controls_disabled=UI controls disabled
pack.description.retextured_control_items_disabled=Retextured control items disabled
pack.description.renamed_control_items_disabled=Renamed control items disabled

holoprint.controls.increase_layer=Increase layer
holoprint.controls.increase_opacity=Increase opacity
holoprint.controls.move_hologram_x=Move hologram X
holoprint.controls.move_hologram_y=Move hologram Y
holoprint.controls.move_hologram_z=Move hologram Z

holoprint.material_list.heading=Material List: {PACK_NAME}
holoprint.material_list.empty=§oThere are no items in this material list.§r

howtoplay.holoprint_about=About HoloPrint
holoprint.info_screen.info.about=You are using a §uHoloPrint§r resource pack generated on §o{PACK_GENERATION_TIME}§r.\n\n§uHoloPrint§r is developed by §l§6SuperLlama88888§r and is a fully open-source project.\n\nThe source code can be found at: §ohttps://github.com/SuperLlama88888/holoprint§r\n\nFor more info, visit the wiki at: §ohttps://holoprint-mc.github.io/wiki§r

holoprint.info_screen.title=HoloPrint Info
holoprint.info_screen.change_structure_layer=Change layer
```

## File: src/packTemplate/texts/es_ES.lang
```
pack.description=Pack de recursos §u★HoloPrint§r generado en §o{PACK_GENERATION_TIME}§r\nDesarrollado por §l§6SuperLlama88888§r{AUTHORS_SECTION}{DESCRIPTION_SECTION}{DISABLED_FEATURES_SECTION}{CONTROLS_SECTION}\n\n§lCantidad total de bloques: {TOTAL_MATERIAL_COUNT}\n§r{MATERIAL_LIST}	## ★ at the start forces unicode font which makes it smaller so more text fits in
pack.description.authors=\nEstructura hecha por {STRUCTURE_AUTHORS[ y ]}	## Authors/Description/Controls will be substituted into the actual description by the JS
pack.description.description=\n{DESCRIPTION}
pack.description.disabled_features=\n§4§o{DISABLED_FEATURES}§r
pack.description.controls=\n\n§lControles:§r{CONTROLS}

pack.description.spawn_animation_disabled=Generación de animaciones deshabilitada
pack.description.player_controls_disabled=Controles del jugador deshabilitados
pack.description.ui_controls_disabled=Controles de IU deshabilitados
pack.description.retextured_control_items_disabled=Retextura de control de item deshabilitado
pack.description.renamed_control_items_disabled=Renombre de control de items deshabilitada

holoprint.controls.increase_layer=Aumentar capa
holoprint.controls.increase_opacity=Aumentar opacidad
holoprint.controls.move_hologram_x=Mover holograma en X
holoprint.controls.move_hologram_y=Mover holograma en Y
holoprint.controls.move_hologram_z=Mover holograma en Z

holoprint.material_list.heading=Lista de Materiales: {PACK_NAME}
holoprint.material_list.empty=§oNo hay items en esta lista de materiales.§r

howtoplay.holoprint_about=Sobre de HoloPrint
holoprint.info_screen.info.about=Estás usando un pack de recursos §uHoloPrint§r generado en §o{PACK_GENERATION_TIME}§r.\n\n§uHoloPrint§r es desarrollado por §l§6SuperLlama88888§r y es un proyecto totalmente open-source.\n\nPuedes encontrar el código en: §ohttps://github.com/SuperLlama88888/holoprint§r\n\nPara más información, visita la wiki en: §ohttps://holoprint-mc.github.io/wiki§r

holoprint.info_screen.title=Información de HoloPrint
holoprint.info_screen.change_structure_layer=Cambiar capa
```

## File: src/packTemplate/texts/es_MX.lang
```
pack.description=Pack de recursos §u★HoloPrint§r generado en §o{PACK_GENERATION_TIME}§r\nDesarrollado por §l§6SuperLlama88888§r{AUTHORS_SECTION}{DESCRIPTION_SECTION}{DISABLED_FEATURES_SECTION}{CONTROLS_SECTION}\n\n§lCantidad total de bloques: {TOTAL_MATERIAL_COUNT}\n§r{MATERIAL_LIST}	## ★ at the start forces unicode font which makes it smaller so more text fits in
pack.description.authors=\nEstructura hecha por {STRUCTURE_AUTHORS[ y ]}	## Authors/Description/Controls will be substituted into the actual description by the JS
pack.description.description=\n{DESCRIPTION}
pack.description.disabled_features=\n§4§o{DISABLED_FEATURES}§r
pack.description.controls=\n\n§lControles:§r{CONTROLS}

pack.description.spawn_animation_disabled=Generación de animaciones deshabilitada
pack.description.player_controls_disabled=Controles del jugador deshabilitados
pack.description.ui_controls_disabled=Controles de IU deshabilitados
pack.description.retextured_control_items_disabled=Retextura de control de item deshabilitado
pack.description.renamed_control_items_disabled=Renombre de control de items deshabilitada

holoprint.controls.increase_layer=Aumentar capa
holoprint.controls.increase_opacity=Aumentar opacidad
holoprint.controls.move_hologram_x=Mover holograma en X
holoprint.controls.move_hologram_y=Mover holograma en Y
holoprint.controls.move_hologram_z=Mover holograma en Z

holoprint.material_list.heading=Lista de Materiales: {PACK_NAME}
holoprint.material_list.empty=§oNo hay items en esta lista de materiales.§r

howtoplay.holoprint_about=Sobre de HoloPrint
holoprint.info_screen.info.about=Estás usando un pack de recursos §uHoloPrint§r generado en §o{PACK_GENERATION_TIME}§r.\n\n§uHoloPrint§r es desarrollado por §l§6SuperLlama88888§r y es un proyecto totalmente open-source.\n\nPuedes encontrar el código en: §ohttps://github.com/SuperLlama88888/holoprint§r\n\nPara más información, visita la wiki en: §ohttps://holoprint-mc.github.io/wiki§r

holoprint.info_screen.title=Información de HoloPrint
holoprint.info_screen.change_structure_layer=Cambiar capa
```

## File: src/packTemplate/texts/languages.json
```json
[
	"en_US",
	"zh_CN",
	"es_ES",
	"es_MX",
	"de_DE"
]
```

## File: src/packTemplate/texts/zh_CN.lang
```
pack.description=§u★全息打印§r 资源包生成于 §o{PACK_GENERATION_TIME}§r\n开发者： §l§6SuperLlama88888§r{AUTHORS_SECTION}{DESCRIPTION_SECTION}{DISABLED_FEATURES_SECTION}{CONTROLS_SECTION}\n\n§l总方块数： {TOTAL_MATERIAL_COUNT}\n§r{MATERIAL_LIST}	## ★ at the start forces unicode font which makes it smaller so more text fits in
pack.description.authors=\n结构作者： {STRUCTURE_AUTHORS[ and ]}	## Authors/Description/Controls will be substituted into the actual description by the JS
pack.description.description=\n{DESCRIPTION}
pack.description.disabled_features=\n§4§o{DISABLED_FEATURES}§r
pack.description.controls=\n\n§l控制：§r{CONTROLS}

pack.description.spawn_animation_disabled=Spawn animation disabled
pack.description.player_controls_disabled=Player controls disabled
pack.description.ui_controls_disabled=UI controls disabled
pack.description.retextured_control_items_disabled=Retextured control items disabled
pack.description.renamed_control_items_disabled=Renamed control items disabled
	
holoprint.material_list.heading={PACK_NAME} 的材料清单
holoprint.controls.increase_layer=Increase layer
holoprint.controls.increase_opacity=Increase opacity
holoprint.controls.move_hologram_x=Move hologram X
holoprint.controls.move_hologram_y=Move hologram Y
holoprint.controls.move_hologram_z=Move hologram Z
```

## File: src/packTemplate/textures/holoprint/ui/white_circle.json
```json
{
	"nineslice_size": 5,
	"base_size": [16, 16]
}
```

## File: src/packTemplate/textures/item_texture.json
```json
{
	"resource_pack_name": "vanilla",
	"texture_name": "atlas.items",
	"texture_data": {}
}
```

## File: src/packTemplate/textures/terrain_texture.json
```json
{
	"resource_pack_name": "vanilla",
	"texture_name": "atlas.terrain",
	"padding": 8,
	"num_mip_levels": 4,
	"texture_data": {}
}
```

## File: src/packTemplate/ui/_global_variables.json
```json
{
	"$holoprint:material_list_offset": [0, 23],
	"$holoprint:touch_button_size": [22, 22],
	"$holoprint:double_touch_button_size": [36, 22],
	
	"$holoprint:material_list_key": "button.scoreboard", // tab key
	"$holoprint:change_input_mode_key": "button.hide_tooltips", // F10
	
	"$holoprint:toggle_rendering_item": 1, // stone
	"$holoprint:increase_opacity_item": 3, // dirt
	"$holoprint:decrease_opacity_item": 4, // cobblestone
	"$holoprint:toggle_tint_item": 5, // oak_planks
	"$holoprint:increase_layer_item": 7, // bedrock
	"$holoprint:decrease_layer_item": 8, // flowing_water
	"$holoprint:change_layer_mode_item": 9, // water
	"$holoprint:toggle_validating_item":  11, // lava
	"$holoprint:increase_x_item": 13, // gravel
	"$holoprint:decrease_x_item": 14, // gold_ore
	"$holoprint:increase_y_item": 15, // iron_ore
	"$holoprint:decrease_y_item": 16, // coal_ore
	"$holoprint:increase_z_item": 17, // oak_log
	"$holoprint:decrease_z_item": 18, // oak_leaves
	"$holoprint:rotate_clockwise_item": 19, // sponge
	"$holoprint:rotate_anticlockwise_item": 20, // glass
	"$holoprint:next_structure_item": 21, // lapis_ore
	"$holoprint:previous_structure_item": 22, // lapis_block
	"$holoprint:backup_hologram_item": 23 // dispenser
}
```

## File: src/packTemplate/ui/_ui_defs.json
```json
{
	"ui_defs": [
		"ui/holoprint_common.json",
		"ui/holoprint_touch_buttons.json",
		"ui/holoprint_keybinds.json",
		"ui/holoprint_material_list.json",
		"ui/holoprint_info_screen.json"
	]
}
```

## File: src/packTemplate/ui/edu_pause_screen.json
```json
// Education Edition has a different pause screen layout
// Annoyingly, it's not in the vanilla resources so I've had to refer to https://github.com/Xterionix/extended-bedrock-samples/blob/2bf5195248dcfabfe22b80dd8c4afd4283ea5aa3/resource_pack/ui/edu_pause_screen.json so I can see what needs to change

{
	"namespace": "edu_pause",
	
	"edu_skin_panel/change_skin_alignment_panel": {
		// this cannot be made the stack_panel, because otherwise the contents wouldn't be horizontally centered
		"controls": [
			{
				"buttons": {
					"type": "stack_panel",
					"orientation": "horizontal",
					"size": ["100%c", 24],
					"controls": [
						{
							"change_skin_button@edu_pause.change_skin_button": {}
						},
						{
							"padding": {
								"type": "panel",
								"size": [2, 0]
							}
						},
						{
							"open_holoprint_info_screen_button@holoprint:info_screen.open_button": {}
						}
					]
				}
			}
		]
	},
	// the existing hangar button is too short otherwise and doesn't align... and it's easier to change this than change the HoloPrint info screen button...
	"change_skin_button_content": {
		"size": ["100%c", 14]
	}
}
```

## File: src/packTemplate/ui/holoprint_common.json
```json
{
	"namespace": "holoprint:common",
	
	"invis_armor_stand_holding_item@invis_armor_stand": {
		"property_bag": {
			"#item_id_aux": "($armor_stand_item_id * 65536)" // set the armour stand's (offhand) item
		}
	},
	"invis_armor_stand": {
		"type": "custom",
		"renderer": "equipment_preview_renderer", // used in smithing tables to render armour stands
		"size": [0, 0]
	},
	
	"slider_with_int_cast@common.slider": {
		"$slider_name": "as_irrelevant_as_uncle_ekbar",
		"property_bag": {
			"#slider_value_as_int": 0,
			"#slider_steps": "$slider_steps" // For QOL. I think that the property bag value is needed for the actual slider logic, and the variable is used by common.slider to display all the notches. 
		},
		"bindings": [
			{
				"binding_type": "collection",
				"binding_collection_name": "this_is_irrelevant_but_must_be_present", // this must be present, I haven't figured out how to get sliders working without this
				"binding_name": "#this_is_also_irrelevant_but_must_be_present"
			},
			{
				// This binding casts #slider_value to an integer. Found it posted by ya-rifat in the Bedrock Add-Ons Discord server: https://discord.com/channels/523663022053392405/1416833222322553023/1421342281226522674
				"binding_type": "view",
				"source_property_name": "(#slider_value_as_int + (#slider_value > #slider_value_as_int) - (#slider_value < #slider_value_as_int))",
				"target_property_name": "#slider_value_as_int"
			}
		]
	}
}
```

## File: src/packTemplate/ui/holoprint_info_screen.json
```json
// This is modeled after how_to_play_screen.json and encyclopedia_screen.json
// Mojang being Mojank, some things need to be named certain ways for them to work.
// N.B. The how_to_play_common screen uses the special #section_title binding for the title bar, which doesn't work here. So I've had to manually extract some parts of how_to_play_common.json just so I can uses an actual title. Specifically, info_screen and info_screen_content are copied almost verbatim from how_to_play_common.json.	

{
	"namespace": "holoprint:info_screen",
	
	"info_screen@common.base_screen": {
		"type": "screen",
		"size": ["100%", "100%"],
		"button_mappings": [
			{
				"from_button_id": "button.menu_cancel",
				"to_button_id": "button.menu_exit",
				"mapping_type": "global"
			},
			{
				"from_button_id": "button.menu_tab_left",
				"to_button_id": "button.menu_tab_left",
				"mapping_type": "global",
				"scope": "view"
			},
			{
				"from_button_id": "button.menu_tab_right",
				"to_button_id": "button.menu_tab_right",
				"mapping_type": "global",
				"scope": "view"
			}
		],
		"$screen_content": "holoprint:info_screen.info_screen_content",
		"$screen_background_control": "how_to_play_common.screen_background",
		"$selector_stack_panel": "holoprint:info_screen.tab_stack_panel",
		"$section_content_panels": "holoprint:info_screen.section_content_panels",
		"$header_safezone_control": "common_store.store_top_bar_filler",
		"$header_bar_control": "common_store.store_top_bar",
		"$is_full_screen_layout": true,
		"$fill_alpha": 0.65
	},
	"info_screen_content": {
		"type": "panel",
		"controls": [
			{
				"header": {
					"type": "panel",
					"size": ["100%", 23],
					"anchor_from": "top_left",
					"anchor_to": "top_left",
					"controls": [
						{
							"top_bar@how_to_play_common.top_bar": {
								"layer": 2,
								"controls": [
									{
										"back_button@common.back_title_button": {
											"anchor_from": "left_middle",
											"anchor_to": "left_middle",
											"offset": [2, -1]
										}
									},
									{
										"how_to_play_title@common.screen_header_title_panel": {
											"size": ["70% - 22px", "100%"], // Gamepad helpers have max size of 30% and the back button is 20px
											"offset": [20, -1],
											"anchor_from": "left_middle",
											"anchor_to": "left_middle",
											"$screen_header_title": "holoprint.info_screen.title", // THIS IS IT
											"layer": 2
										}
									},
									{
										"gamepad_bumper_helpers@how_to_play_common.gamepad_bumper_helpers": {}
									}
								]
							}
						}
					]
				}
			},
			{
				"container": {
					"type": "panel",
					"size": "$store_screen_size",
					"controls": [
						{
							"dialog_content@how_to_play_common.dialog_content": {}
						}
					]
				}
			}
		]
	},
	"tab_stack_panel": {
		"type": "stack_panel",
		"anchor_from": "top_left",
		"anchor_to": "top_left",
		"$default_selector_toggle_index": 0,
		"controls": [
			{
				"selector_pane": {
					"type": "stack_panel",
					"controls": [
						{
							"about_section@how_to_play_common.section_toggle_button": {
								// JS will add $toggle_group_forced_index (depends on the total number of structures in the pack)
								"$section_topic": "holoprint_about"
							}
						}
					]
				}
			}
		]
	},
	"section_content_panels": {
		"type": "stack_panel",
		"anchor_from": "top_left",
		"anchor_to": "top_left",
		"size": ["100% - 5px", "100%c + 5px"],
		"offset": [2, 0],
		"controls": [
			{
				"sections": {
					"type": "stack_panel",
					"controls": [
						{
							"about_section@section": {
								"$tab_button_name": "holoprint_about_button_toggle",
								"$content": "holoprint:info_screen.about_section_content"
							}
						}
					]
				}
			}
		]
	},
	
	"about_section_content": {
		"type": "stack_panel",
		"orientation": "vertical",
		"controls": [
			{
				// wrapper element so the banner image is centered horizontally
				"banner_wrapper": {
					"type": "panel",
					"size": ["100%", "11.667%x + 10px"], // 10px vertical padding
					"controls": [
						{
							"banner": {
								"type": "image",
								"texture": "textures/holoprint/ui/banner",
								"size": ["40%", "29.1667%x"]
							}
						}
					]
				}
			},
			{
				"heading@section_heading": {
					"text": "howtoplay.holoprint_about"
				}
			},
			{
				"about@section_paragraph": {
					"$text": "holoprint.info_screen.info.about"
				}
			}
		]
	},
	"structure_section_content_base@section": {
		"$heading|default": "Error: $heading not set",
		"$structure_height_plus_1|default": "Error: $structure_height_plus_1 not set",
		"$diagram_property_bag|default": "Error: $diagram_property_bag not set", // The JS will add bindings holding paths to textures, it's best to look at a generated pack to understand this better.
		"$layer_slider_name|default": "Error: $layer_slider_name not set",
		"$structure_index|default": "Error: $structure_index not set",
		"$material_lists|default": "Error: $material_lists not set",
		"$tallest_material_list_size|default": "Error: $tallest_material_list_size not set",
		"type": "stack_panel",
		"orientation": "vertical",
		"controls": [
			{
				"heading@section_heading": {
					"text": "$heading"
				}
			},
			{
				"size_and_layer_label@section_paragraph": {
					"bindings": [
						{
							"binding_type": "view",
							"source_control_name": "$layer_slider_name",
							"source_property_name": "#slider_value_as_int",
							"target_property_name": "#layer"
						}
					],
					// bindings aren't inherited so the text binding must live on the label element, rather than on the parent element
					"$text": "#text",
					"$text_property_bag": {
						"#text": "Error! Please report this on GitHub!"
					},
					"$text_bindings": [
						{
							"binding_type": "view",
							"source_control_name": "$layer_slider_name",
							"source_property_name": "#slider_value_as_int",
							"target_property_name": "#layer"
						},
						{
							"binding_type": "view",
							"source_property_name": "('holoprint.info_screen.structure_' + $structure_index + '_layer_' + #layer)",
							"target_property_name": "#text"
						}
					]
				}
			},
			{
				// Having a wrapper panel centers the slider. However it must also have its size set.
				"layer_slider_wrapper": {
					"type": "panel",
					"size": ["100%", 10],
					"controls": [
						{
							"$layer_slider_name@holoprint:common.slider_with_int_cast": {
								"size": ["100% - 10px", "100%"],
								"$option_label": "holoprint.info_screen.change_structure_layer",
								"$slider_steps": "$structure_height_plus_1"
							}
						}
					]
				}
			},
			{
				"padding": {
					"type": "panel",
					"size": ["100%", 10]
				}
			},
			{
				"diagram_and_material_list_wrapper": {
					"type": "stack_panel",
					"orientation": "horizontal",
					"size": "$tallest_material_list_size", // I can't use "fill" for the height here for some reason, it just evaluates to 0px. So the JS adds this variable
					"controls": [
						{
							"diagram_background": {
								"type": "image",
								"texture": "textures/holoprint/ui/white_circle",
								"alpha": 0.5,
								"size": ["50%", "100%x"],
								"controls": [
									{
										"diagram": {
											"type": "image",
											"size": ["90%", "90%"],
											// I tried substituting strings into #texture directly, but for WHATEVER REASON, Bugrock doesn't load the texture (even with force_texture_reload).
											// This solution also has a nice side effect of allowing us to deduplicate layer diagrams! I found it from TheAndromedarius' post on the Bedrock Add-Ons Discord server: https://discord.com/channels/523663022053392405/1399880155522007232/1399986881382318221
											"texture": "#texture",
											"property_bag": "$diagram_property_bag",
											"bindings": [
												{
													"binding_type": "view",
													"source_control_name": "$layer_slider_name",
													"source_property_name": "#slider_value_as_int",
													"target_property_name": "#layer"
												},
												{
													"binding_type": "view",
													"source_property_name": "('#layer_' + #layer)",
													"target_property_name": "#texture"
												}
											]
										}
									}
								]
							}
						},
						{
							"material_lists_wrapper": {
								"type": "panel",
								"size": ["50%", "100%"],
								"controls": "$material_lists"
							}
						}
					]
				}
			}
		]
	},
	"structure_layer_material_list": {
		// A wrapper element must be used here because the $heading variable relies on $layer, which will be defined directly on this element. Only children can access it. (Bindings are fine!)
		"$structure_index|default": "Error: $structure_index not set",
		"$layer|default": "Error: $layer not set",
		"type": "panel",
		"controls": [
			{
				"material_list@holoprint:material_list.material_list_base": {
					"$heading": "('holoprint.material_list.structure_' + $structure_index + '_layer_' + $layer)"
				}
			}
		],
		"bindings": [
			{
				"binding_type": "view",
				"source_control_name": "$layer_slider_name",
				"source_property_name": "#slider_value_as_int",
				"target_property_name": "#layer"
			},
			{
				"binding_type": "view",
				"source_property_name": "(#layer = $layer)",
				"target_property_name": "#visible"
			}
		]
	},

	"section@how_to_play_common.main_sections": {
		"bindings": [
			{
				"binding_type": "view",
				"source_control_name": "$tab_button_name",
				"source_property_name": "#toggle_state",
				"target_property_name": "#visible"
			}
		],
		"controls": [
			{
				"content@$content": {}
			}
		]
	},
	"section_heading": {
		"type": "label",
		"size": ["100%", 20],
		"font_type": "MinecraftTen",
		"font_scale_factor": 1.2
	},
	"section_paragraph": {
		"$text_property_bag|default": {},
		"$text_bindings|default": [],
		"type": "stack_panel",
		"orientation": "vertical",
		"controls": [
			{
				"text": {
					"type": "label",
					"text": "$text",
					"max_size": ["100%", 99999999], // must have this so that the text displays normally - i.e. wraps instead of overflows and only takes up as much height as it needs
					"property_bag": "$text_property_bag",
					"bindings": "$text_bindings"
				}
			},
			{
				"padding": {
					"type": "panel",
					"size": ["100%", 5]
				}
			}
		]
	},
	
	"open_button@common_buttons.light_content_button": {
		"size": [24, 24],
		"$pressed_button_name": "button.menu_buy_game", // since resource packs can't add their own screens, this will redirect to either the "tabbed upsell" screen or the "Windows 10 trial conversion" screen which have both been modified to display the HoloPrint info screen instead.
		"$button_content": "holoprint:info_screen.logo"
	},
	"logo": {
		"type": "image",
		"texture": "textures/holoprint/ui/logo_192",
		"size": [18, 18]
	}
}
```

## File: src/packTemplate/ui/holoprint_keybinds.json
```json
{
	"namespace": "holoprint:keybinds",
	
	"keybinds": {
		"type": "panel",
		"controls": [
			{
				"material_list_trigger@keyboard_trigger": {
					"$button_name": "$holoprint:material_list_key",
					"$content": "holoprint:material_list.full_pack_material_list",
					"$off_content": "hotbar_scroll_keybinds"
				}
			},
			{
				"input_mode_toggle@keyboard_toggle": {
					"$toggle_name": "input_mode_toggle",
					"$button_name": "$holoprint:change_input_mode_key",
					"$untoggled_content": "quick_input_keybinds",
					"$content": "full_input_mode"
				}
			}
		]
	},
	"keyboard_trigger": {
		"type": "button",
		"size": ["100%", "100%"],
		"pressed_control": "pressed",
		"default_control": "off",
		"hover_control": "off",
		"button_mappings": [
			{
				"from_button_id": "$button_name",
				"to_button_id": "button.dummy",
				"mapping_type": "global"
			}
		],
		"$off_content|default": "common.empty_panel",
		"controls": [
			{
				"pressed@$content": {}
			},
			{
				"off@$off_content": {}
			}
		]
	},
	"keyboard_toggle": {
		"type": "toggle",
		"toggle_name": "$toggle_name", // a unique string
		"button_mappings": [
			{
				"from_button_id": "$button_name",
				"to_button_id": "button.menu_select",
				"mapping_type": "global"
			}
		],
		"$untoggled_content|default": "common.empty_panel", // this cannot be named $off_content because if any children use keyboard_trigger, the $off_content will be inherited and hence cause recursion, crashing the game
		"controls": [
			{
				"on@$content": {
					"bindings": [
						{
							"binding_type": "view",
							"source_control_name": "$toggle_name",
							"source_property_name": "#toggle_state",
							"target_property_name": "#visible"
						}
					]
				}
			},
			{
				"off@$untoggled_content": {
					"bindings": [
						{
							"binding_type": "view",
							"source_control_name": "$toggle_name",
							"source_property_name": "(not #toggle_state)",
							"target_property_name": "#visible"
						}
					]
				}
			}
		]
	},
	"hotbar_scroll_keybinds": {
		"type": "input_panel",
		"button_mappings": [
			{
				"from_button_id": "button.inventory_left",
				"to_button_id": "button.hotbar_inventory_left",
				"mapping_type": "global"
			},
			{
				"from_button_id": "button.inventory_right",
				"to_button_id": "button.hotbar_inventory_right",
				"mapping_type": "global"
			}
		]
	},
	"quick_input_keybinds": {
		"type": "panel",
		"controls": [
			{
				"keyboard_hints": {
					"type": "panel",
					"size": ["13.5%", "88.0368098%x"],
					"anchor_from": "bottom_right",
					"anchor_to": "bottom_right",
					"offset": ["-5%", -5],
					"anims": ["@holoprint:keybinds.keyboard_hints_anim"],
					"propagate_alpha": true,
					"controls": [
						{
							"background": {
								"type": "image",
								"size": ["100% + 6px", "100% + 6px"],
								"texture": "textures/holoprint/ui/white_circle",
								"color": [0.7, 0.7, 0.7],
								"alpha": 0.4
							}
						},
						{
							"image": {
								"type": "image",
								"texture": "textures/holoprint/ui/quick_input_keyboard_hints"
							}
						}
					]
				}
			},
			{
				"decrease_layer_trigger@keyboard_trigger": {
					"$button_name": "button.arrow_down",
					"$content": "quick_input_keybind_content",
					"$armor_stand_item_id": "$holoprint:decrease_layer_item",
					"$control": "decrease_layer"
				}
			},
			{
				"increase_layer_trigger@keyboard_trigger": {
					"$button_name": "button.arrow_up",
					"$content": "quick_input_keybind_content",
					"$armor_stand_item_id": "$holoprint:increase_layer_item",
					"$control": "increase_layer"
				}
			},
			{
				"toggle_rendering_trigger@keyboard_trigger": {
					"$button_name": "button.arrow_left",
					"$content": "quick_input_keybind_content",
					"$armor_stand_item_id": "$holoprint:toggle_rendering_item",
					"$control": "toggle_rendering"
				}
			},
			{
				"increase_opacity_trigger@keyboard_trigger": {
					"$button_name": "button.arrow_right",
					"$content": "quick_input_keybind_content",
					"$armor_stand_item_id": "$holoprint:increase_opacity_item",
					"$control": "increase_opacity"
				}
			}
		]
	},
	"quick_input_keybind_content": {
		"type": "label", // the text label has to be the parent because its width isn't constant, so everything else is positioned relative to it
		"text": "('holoprint.controls.' + $control)",
		"font_scale_factor": 0.8,
		"anchor_from": "bottom_right",
		"anchor_to": "bottom_right",
		"offset": ["-5%", -15.2],
		"controls": [
			{
				"armor_stand_trigger@holoprint:common.invis_armor_stand_holding_item": {}
			},
			{
				"background_1": {
					"type": "image",
					"size": ["100% + 28px", 26],
					"anchor_from": "right_middle",
					"anchor_to": "right_middle",
					"offset": [3, 0],
					"layer": -1, // make text (parent) render on top
					"texture": "textures/holoprint/ui/white_circle",
					"color": [0, 0, 0],
					"alpha": 0.3,
					"controls": [
						{
							"background_2": {
								"type": "image",
								"size": [22, 22],
								"anchor_from": "left_middle",
								"anchor_to": "left_middle",
								"offset": [2, 0],
								"texture": "textures/holoprint/ui/white_circle",
								"color": [0, 0, 0],
								"alpha": 0.3
							}
						},
						{
							"icon": {
								"type": "image",
								"size": [15, 15],
								"anchor_from": "left_middle",
								"anchor_to": "left_middle",
								"offset": [5.5, 0],
								"texture": "('textures/holoprint/icons/' + $control)"
							}
						}
					]
				}
			}
		]
	},
	"keyboard_hints_anim": {
		"anim_type": "wait",
		"duration": 5,
		"next": "@holoprint:keybinds.keyboard_hints_fade_out_anim"
	},
	"keyboard_hints_fade_out_anim": {
		"anim_type": "alpha",
		"from": 1,
		"to": 0,
		"duration": 2
	},
	"full_input_mode": {
		"type": "panel",
		"size": ["13.5%", 30],
		"anchor_from": "bottom_right",
		"anchor_to": "bottom_right",
		"offset": ["-5%", -5],
		"controls": [
			{
				"background_1": {
					"type": "image",
					"texture": "textures/holoprint/ui/white_circle",
					"color": [0, 0, 0],
					"alpha": 0.3
				}
			},
			{
				"background_2": {
					"type": "image",
					"size": [22, 22],
					"offset": [0, -3],
					"texture": "textures/holoprint/ui/white_circle",
					"color": [0, 0, 0],
					"alpha": 0.3
				}
			},
			{
				"icon_cycler@common.common_cycler": {
					"type": "image_cycler",
					"size": [15, 15],
					"offset": [0, -3],
					"$next_page_button_event": "button.arrow_right",
					"$prev_page_button_event": "button.arrow_left",
					"images": [
						{ "texture_path": "textures/holoprint/icons/toggle_rendering" },
						{ "texture_path": "textures/holoprint/icons/change_opacity" },
						{ "texture_path": "textures/holoprint/icons/toggle_tint" },
						{ "texture_path": "textures/holoprint/icons/change_layer" },
						{ "texture_path": "textures/holoprint/icons/change_layer_mode" },
						{ "texture_path": "textures/holoprint/icons/toggle_validating" },
						{ "texture_path": "textures/holoprint/icons/move_hologram_x" },
						{ "texture_path": "textures/holoprint/icons/move_hologram_y" },
						{ "texture_path": "textures/holoprint/icons/move_hologram_z" },
						{ "texture_path": "textures/holoprint/icons/rotate_hologram" },
						{ "texture_path": "textures/holoprint/icons/change_structure" },
						{ "texture_path": "textures/holoprint/icons/backup_hologram" }
					]
				}
			},
			{
				"previous_icon_cycler@common.common_cycler": {
					"type": "image_cycler",
					"size": [9, 9],
					"anchor_from": "left_middle",
					"anchor_to": "left_middle",
					"offset": [3, 0],
					"alpha": 0.6,
					"$next_page_button_event": "button.arrow_right",
					"$prev_page_button_event": "button.arrow_left",
					"images": [
						{ "texture_path": "textures/holoprint/icons/backup_hologram" },
						{ "texture_path": "textures/holoprint/icons/toggle_rendering" },
						{ "texture_path": "textures/holoprint/icons/change_opacity" },
						{ "texture_path": "textures/holoprint/icons/toggle_tint" },
						{ "texture_path": "textures/holoprint/icons/change_layer" },
						{ "texture_path": "textures/holoprint/icons/change_layer_mode" },
						{ "texture_path": "textures/holoprint/icons/toggle_validating" },
						{ "texture_path": "textures/holoprint/icons/move_hologram_x" },
						{ "texture_path": "textures/holoprint/icons/move_hologram_y" },
						{ "texture_path": "textures/holoprint/icons/move_hologram_z" },
						{ "texture_path": "textures/holoprint/icons/rotate_hologram" },
						{ "texture_path": "textures/holoprint/icons/change_structure" }
					]
				}
			},
			{
				"next_icon_cycler@common.common_cycler": {
					"type": "image_cycler",
					"size": [9, 9],
					"anchor_from": "right_middle",
					"anchor_to": "right_middle",
					"offset": [-3, 0],
					"alpha": 0.6,
					"$next_page_button_event": "button.arrow_right",
					"$prev_page_button_event": "button.arrow_left",
					"images": [
						{ "texture_path": "textures/holoprint/icons/change_opacity" },
						{ "texture_path": "textures/holoprint/icons/toggle_tint" },
						{ "texture_path": "textures/holoprint/icons/change_layer" },
						{ "texture_path": "textures/holoprint/icons/change_layer_mode" },
						{ "texture_path": "textures/holoprint/icons/toggle_validating" },
						{ "texture_path": "textures/holoprint/icons/move_hologram_x" },
						{ "texture_path": "textures/holoprint/icons/move_hologram_y" },
						{ "texture_path": "textures/holoprint/icons/move_hologram_z" },
						{ "texture_path": "textures/holoprint/icons/rotate_hologram" },
						{ "texture_path": "textures/holoprint/icons/change_structure" },
						{ "texture_path": "textures/holoprint/icons/backup_hologram" },
						{ "texture_path": "textures/holoprint/icons/toggle_rendering" }
					]
				}
			},
			{
				"control_name_cycler@common.common_cycler": {
					"type": "label_cycler",
					"anchor_from": "bottom_middle",
					"anchor_to": "bottom_middle",
					"offset": [0, -3],
					"font_size": "small",
					"$next_page_button_event": "button.arrow_right",
					"$prev_page_button_event": "button.arrow_left",
					"text_labels": [
						"holoprint.controls.toggle_rendering",
						"holoprint.controls.change_opacity",
						"holoprint.controls.toggle_tint",
						"holoprint.controls.change_layer",
						"holoprint.controls.change_layer_mode",
						"holoprint.controls.toggle_validating",
						"holoprint.controls.move_hologram_x",
						"holoprint.controls.move_hologram_y",
						"holoprint.controls.move_hologram_z",
						"holoprint.controls.rotate_hologram",
						"holoprint.controls.change_structure",
						"holoprint.controls.backup_hologram"
					]
				}
			},
			{
				"full_input_keybinds": {
					"type": "grid_page_indicator",
					"size": [200, 30],
					"grid_item_template": "holoprint:keybinds.full_input_keybind_item",
					"grid_item_when_current": "current",
					"cycler_manager_size_control_target": "icon_cycler",
					"collection_name": "full_input_keybinds_grid"
				}
			}
		]
	},
	"full_input_keybind_item": {
		"type": "panel",
		"controls": [
			{
				"current": {
					"type": "panel",
					"controls": [
						{
							"down_keybind@keyboard_trigger": {
								"$button_name": "button.arrow_down",
								"$content": "full_input_down"
							}
						},
						{
							"up_keybind@keyboard_trigger": {
								"$button_name": "button.arrow_up",
								"$content": "full_input_up"
							}
						}
					]
				}
			}
		]
	},
	"full_input_up@holoprint:common.invis_armor_stand": {
		"bindings": [
			{
				"binding_type": "collection",
				"binding_collection_name": "full_input_keybinds_grid",
				"binding_name": "#collection_index"
			},
			{
				"binding_type": "view",
				"source_property_name": "(#collection_index * 131072 + 65536)", // 65536 * 2 = 131072
				"target_property_name": "#item_id_aux"
			}
		]
	},
	"full_input_down@holoprint:common.invis_armor_stand": {
		"bindings": [
			{
				"binding_type": "collection",
				"binding_collection_name": "full_input_keybinds_grid",
				"binding_name": "#collection_index"
			},
			{
				"binding_type": "view",
				"source_property_name": "(#collection_index * 131072 + 131072)",
				"target_property_name": "#item_id_aux"
			}
		]
	}
}
```

## File: src/packTemplate/ui/holoprint_material_list.json
```json
{
	"namespace": "holoprint:material_list",
	
	"full_pack_material_list@material_list_base": {
		"$size": ["40%", "this gets put in by the JS"],
		"$max_size": ["40%", "100% - 74px"],
		"offset": "$holoprint:material_list_offset"
	},
	"material_list_base": {
		"$size|default": ["default", "default"],
		"$max_size|default": ["default", "default"],
		"$entries|default": "Error: $entries not set",
		"$heading|default": "holoprint.material_list.heading",
		"$item_name_column_size|default": "Error: $item_name_column_size not set",
		"type": "panel",
		"anchor_from": "top_middle",
		"anchor_to": "top_middle",
		"layer": 50,
		"controls": [
			{
				"material_list@content": {}
			}
		]
	},
	"content": {
		"type": "image",
		"size": "$size",
		"max_size": "$max_size",
		"texture": "textures/ui/White",
		"color": [0, 0, 0],
		"alpha": 0.5,
		"layer": 10,
		"anchor_from": "top_middle",
		"anchor_to": "top_middle",
		"controls": [
			{
				"heading@heading": {}
			},
			{
				"scrolling_input_panel": {
					"type": "input_panel",
					"prevent_touch_input": true,
					"controls": [
						{
							"scrolling_panel@common.scrolling_panel": {
								"anchor_from": "bottom_middle",
								"anchor_to": "bottom_middle",
								"size": ["100%", "100% - 12px"],
								"$show_background": false,
								"$scrolling_content": "holoprint:material_list.entries",
								"$always_handle_scrolling": true
							}
						}
					]
				}
			}
		]
	},
	"heading": {
		"type": "image",
		"anchor_from": "top_middle",
		"anchor_to": "top_middle",
		"size": ["100%", 12],
		"texture": "textures/ui/White",
		"color": [0, 0, 0],
		"alpha": 0.2,
		"controls": [
			{
				"book_icon": {
					"type": "image",
					"offset": [1, 0],
					"size": [14.62, 10],
					"anchor_from": "left_middle",
					"anchor_to": "left_middle",
					// "texture": "textures/ui/creative_icon"
					"texture": "textures/ui/recipe_book_icon"
				}
			},
			{
				"pack_name": {
					"type": "label",
					"size": ["100% - 18px", 10],
					"text": "$heading",
					"anchor_from": "right_middle",
					"anchor_to": "right_middle"
				}
			}
		]
	},
	"entries": {
		"type": "stack_panel",
		"orientation": "vertical",
		"anchor_to": "top_left",
		"anchor_from": "top_left",
		"controls": "$entries"
	},
	"entry@row": {
		"controls": [
			{
				"content": {
					"type": "stack_panel",
					"orientation": "horizontal",
					"size": ["100%", "100%"],
					"offset": [0, 1],
					"layer": 101,
					"controls": [
						{
							"padding_1": {
								"type": "panel",
								"size": [1, 0]
							}
						},
						{
							"item_icon": {
								"type": "custom",
								"renderer": "inventory_item_renderer",
								"property_bag": {
									"#item_id_aux": "$item_id_aux"
								},
								"size": [10, 10],
								"anchor_from": "top_left",
								"anchor_to": "top_left"
							}
						},
						{
							"padding_2": {
								"type": "panel",
								"size": [2, 0]
							}
						},
						{
							"item_name": {
								"type": "label",
								"text": "$item_translation_key",
								"size": "$item_name_column_size",
								"font_scale_factor": 0.8
							}
						},
						{
							"item_count": {
								"type": "label",
								"text": "$item_count",
								"size": ["fill", 10],
								// "text_alignment": "right",
								"font_scale_factor": 0.8
							}
						}
					]
				}
			}
		]
	},
	"empty_notice@row": {
		"controls": [
			{
				"notice": {
					"type": "label",
					"text": "holoprint.material_list.empty",
					"font_scale_factor": 0.8
				}
			}
		]
	},
	"row": {
		"type": "image",
		"size": ["100%", 12],
		"texture": "textures/ui/White",
		"color": [0, 0, 0],
		"$background_opacity|default": 0,
		"alpha": "$background_opacity",
		"layer": 100
	}
}
```

## File: src/packTemplate/ui/holoprint_touch_buttons.json
```json
// Note: I wanted to make the buttons slide in via an animation when you show the menu, but I ran into a couple issues. First, I haven't found a way to play a sliding out animation when the menu is hidden. Second, when you start to press the toggle again to hide it, the animation will play again which looks bad. For these reasons I've commented it out, in case I figure it out later.

{
	"namespace": "holoprint:touch_buttons",
	
	"touch_buttons": {
		"type": "panel",
		"controls": [
			{
				"hud_visibility_wrapper": { // I already have a binding from #inventory_touch_button to #visible and I couldn't find out how to combine them without it crashing, so an additional element here is needed
					"type": "panel",
					"bindings": [
						{
							"binding_name": "#hud_visible",
							"binding_name_override": "#visible",
							"binding_type": "global"
						}
					],
					"controls": [
						{
							"expand_menu_toggle_button@hud_toggle": {
								"offset": [45, 1],
								"$toggle_view_binding_name": "expand_menu_toggle",
								"$button_unpressed_texture": "textures/holoprint/ui/menu_button_unpressed",
								"$button_pressed_texture": "textures/holoprint/ui/menu_button_pressed"
							}
						},
						{
							"material_list_toggle_button@hud_toggle": {
								"offset": [-45, 1],
								"$toggle_view_binding_name": "material_list_toggle",
								"$button_unpressed_texture": "textures/holoprint/ui/material_list_button_unpressed",
								"$button_pressed_texture": "textures/holoprint/ui/material_list_button_pressed"
							}
						},
						{
							"input_panel": {
								"type": "input_panel",
								"anchor_from": "top_middle",
								"anchor_to": "top_middle",
								"offset": [0, 28],
								"size": [175, 22],
								"layer": 33,
								"prevent_touch_input": true,
								"controls": [
									{
										"buttons_and_toggles@buttons_and_toggles": {
											// "anims": ["@holoprint:touch_buttons.slide_in_from_left_anim"],
											// "animation_reset_name": "button.expand_menu"
										}
									}
								],
								"bindings": [
									{
										"binding_type": "view",
										"source_control_name": "expand_menu_toggle",
										"source_property_name": "#toggle_state",
										"target_property_name": "#visible"
									}
								]
							}
						},
						{
							"material_list_wrapper": {
								"type": "stack_panel",
								"size": ["100%", "100% - 62px"],
								"anchor_from": "top_middle",
								"anchor_to": "top_middle",
								"offset": "$holoprint:material_list_offset",
								"controls": [
									{
										"condiditional_padding_1": { // the material list needs to move down when the menu is visible. these padding elements are visible depending on which bits of the menu are showing. because they're all in a stack_panel, when they're visible, they push the material list lower down.
											"type": "panel",
											"size": [0, 35],
											"bindings": [
												{
													"binding_type": "view",
													"source_control_name": "expand_menu_toggle",
													"source_property_name": "#toggle_state",
													"target_property_name": "#visible"
												}
											]
										}
									},
									{
										"condiditional_padding_2": {
											"type": "panel",
											"size": [0, 27],
											"bindings": [
												{
													"binding_type": "view",
													"source_control_name": "expand_menu_toggle",
													"source_property_name": "#toggle_state",
													"target_property_name": "#expand_menu_toggle_state"
												},
												{
													"binding_type": "view",
													"source_control_name": "show_full_menu_toggle",
													"source_property_name": "#toggle_state",
													"target_property_name": "#show_full_menu_toggle_state"
												},
												{
													"binding_type": "view",
													"source_property_name": "(#expand_menu_toggle_state and #show_full_menu_toggle_state)",
													"target_property_name": "#visible"
												}
											]
										}
									},
									{
										"material_list@holoprint:material_list.full_pack_material_list": {
											"bindings": [
												{
													"binding_type": "view",
													"source_control_name": "material_list_toggle",
													"source_property_name": "#toggle_state",
													"target_property_name": "#visible"
												}
											]
										}
									}
								]
							}
						}
					]
				}
			}
		]
	},
	"hud_toggle": {
		"type": "input_panel",
		"anchor_from": "top_middle",
		"anchor_to": "top_middle",
		"size": [18, 18],
		"layer": 33,
		"prevent_touch_input": true,
		"controls": [
			{
				"toggle@generic_toggle_button": {
					"alpha": 0.8,
					"propagate_alpha": true,
					"$button_content": "common.empty_panel",
					"$use_regular_bg": false,
					"$default_texture": "$button_unpressed_texture",
					"$hover_texture": "$button_pressed_texture",
					"$pressed_texture": "$button_unpressed_texture",
					"$pressed_no_hover_texture": "$button_pressed_texture"
					// "$button_mappings": [
					// 	{
					// 		"from_button_id": "button.menu_select",
					// 		"to_button_id": "button.expand_menu",
					// 		"mapping_type": "pressed",
					// 		"handle_select": true
					// 	}
					// ]
				}
			}
		]
	},
	// "slide_in_from_left_anim": {
	// 	"anim_type": "offset",
	// 	"from": ["-100%", 0],
	// 	"to": [0, 0],
	// 	"duration": 0.325,
	// 	"easing": "out_quad"
	// },
	"buttons_and_toggles": {
		"type": "panel",
		"controls": [
			{
				"important_buttons_toggles_and_background@important_buttons_toggles_and_background": {
					"layer": 1
				}
			},
			{
				"less_important_buttons_and_toggles_input_panel": {
					"type": "input_panel",
					"anchor_from": "top_middle",
					"anchor_to": "top_middle",
					"offset": [0, 27],
					"size": [242, 22],
					"prevent_touch_input": true,
					"controls": [
						{
							"less_important_buttons_toggles_and_background@less_important_buttons_toggles_and_background": {
								// "anims": ["@holoprint:touch_buttons.slide_in_from_left_anim"],
								// "animation_reset_name": "button.show_full_menu"
							}
						}
					],
					"bindings": [
						{
							"binding_type": "view",
							"source_control_name": "show_full_menu_toggle",
							"source_property_name": "#toggle_state",
							"target_property_name": "#visible"
						}
					]
				}
			}
		]
	},
	"important_buttons_toggles_and_background": { // there are two backgrounds here, one for when the full menu is shown. that one has the bottom clipped so it looks like it's more connected to the stuff below
		"type": "panel",
		"controls": [
			{
				"background@common.dialog_background_opaque": {
					"size": ["100%sm + 12px", "100%sm + 12px"],
					"bindings": [
						{
							"binding_type": "view",
							"source_control_name": "show_full_menu_toggle",
							"source_property_name": "(not #toggle_state)",
							"target_property_name": "#visible"
						}
					]
				}
			},
			{
				"bottom_borderless_background@common.dialog_background_opaque": {
					"size": ["100%sm + 12px", "100%sm + 16px"],
					"offset": [0, 2],
					"clip_direction": "up",
					"clip_ratio": 0.1875,
					"bindings": [
						{
							"binding_type": "view",
							"source_control_name": "show_full_menu_toggle",
							"source_property_name": "#toggle_state",
							"target_property_name": "#visible"
						}
					]
				}
			},
			{
				"important_buttons_and_toggles@important_buttons_and_toggles": {
					"layer": 1
				}
			}
		]
	},
	"important_buttons_and_toggles": {
		"type": "stack_panel",
		"orientation": "horizontal",
		"controls": [
			{
				"toggle_rendering_button@control_button": {
					"$icon": "toggle_rendering",
					"$armor_stand_item_id": "$holoprint:toggle_rendering_item"
				}
			},
			{ "p1@padding": {} },
			{
				"change_layer_buttons@double_control_button": {
					"$left_button_control_item": "$holoprint:decrease_layer_item",
					"$right_button_control_item": "$holoprint:increase_layer_item",
					"$icon": "change_layer"
				}
			},
			{ "p2@padding": {} },
			{
				"change_layer_mode_button@control_button": {
					"$icon": "change_layer_mode",
					"$armor_stand_item_id": "$holoprint:change_layer_mode_item"
				}
			},
			{ "p3@padding": {} },
			{
				"change_opacity_buttons@double_control_button": {
					"$left_button_control_item": "$holoprint:decrease_opacity_item",
					"$right_button_control_item": "$holoprint:increase_opacity_item",
					"$icon": "change_opacity"
				}
			},
			{ "p4@padding": {} },
			{
				"toggle_validating_button@control_button": {
					"$icon": "toggle_validating",
					"$armor_stand_item_id": "$holoprint:toggle_validating_item"
				}
			},
			{ "p5@padding": {} },
			{
				"show_full_menu_toggle_button@show_full_menu_toggle_button": {}
			}
		]
	},
	"less_important_buttons_toggles_and_background": {
		"type": "panel",
		"controls": [
			{
				"background@common.dialog_background_opaque": {
					"size": ["100%sm + 12px", "100%sm + 12px"]
				}
			},
			{
				"less_important_buttons_and_toggles@less_important_buttons_and_toggles": {
					"layer": 1
				}
			}
		]
	},
	"less_important_buttons_and_toggles": {
		"type": "stack_panel",
		"orientation": "horizontal",
		"controls": [
			{
				"move_x_buttons@double_control_button": {
					"$left_button_control_item": "$holoprint:decrease_x_item",
					"$right_button_control_item": "$holoprint:increase_x_item",
					"$icon": "move_hologram_x"
				}
			},
			{ "p1@padding": {} },
			{
				"move_y_buttons@double_control_button": {
					"$left_button_control_item": "$holoprint:decrease_y_item",
					"$right_button_control_item": "$holoprint:increase_y_item",
					"$icon": "move_hologram_y"
				}
			},
			{ "p2@padding": {} },
			{
				"move_z_buttons@double_control_button": {
					"$left_button_control_item": "$holoprint:decrease_z_item",
					"$right_button_control_item": "$holoprint:increase_z_item",
					"$icon": "move_hologram_z"
				}
			},
			{ "p3@padding": {} },
			{
				"rotate_buttons@double_control_button": {
					"$left_button_control_item": "$holoprint:rotate_anticlockwise_item",
					"$right_button_control_item": "$holoprint:rotate_clockwise_item",
					"$icon": "rotate_hologram"
				}
			},
			{ "p4@padding": {} },
			{
				"change_structure_buttons@double_control_button": {
					"$left_button_control_item": "$holoprint:previous_structure_item",
					"$right_button_control_item": "$holoprint:next_structure_item",
					"$icon": "change_structure"
				}
			},
			{ "p5@padding": {} },
			{
				"toggle_tint_button@control_button": {
					"$icon": "toggle_tint",
					"$armor_stand_item_id": "$holoprint:toggle_tint_item"
				}
			},
			{ "p6@padding": {} },
			{
				"backup_button@control_button": {
					"$icon": "backup_hologram",
					"$armor_stand_item_id": "$holoprint:backup_hologram_item"
				}
			}
		]
	},
	"show_full_menu_toggle_button": {
		"type": "panel",
		"size": "$holoprint:touch_button_size",
		"controls": [
			{
				"toggle@generic_toggle_button": {
					"$button_content": "holoprint:touch_buttons.show_full_menu_toggle_icon",
					"$button_content_size": ["100% - 9px", "100% - 9px"],
					"$toggle_view_binding_name": "show_full_menu_toggle"
					// "$button_mappings": [
					// 	{
					// 		"from_button_id": "button.menu_select",
					// 		"to_button_id": "button.show_full_menu",
					// 		"mapping_type": "pressed"
					// 	}
					// ]
				}
			}
		]
	},
	"show_full_menu_toggle_icon": {
		"type": "image",
		"texture": "textures/holoprint/ui/menu_sliders_icon"
	},
	"padding": {
		"type": "panel",
		"size": [3, 0]
	},
	"generic_toggle_button@common_toggles.light_content_toggle": {
		"size": ["100% + 2px", "100% + 2px"],
		"$toggle_name": "",
		"$toggle_focus_enabled": false,
		"$default_border_visible": false,
		"$hover_border_visible": false,
		"$use_regular_bg|default": true,
		"variables": [
			{
				"requires": "$use_regular_bg",
				"$pressed_texture": "textures/ui/button_borderless_light"
			},
			{
				"requires": "$use_regular_bg",
				"$pressed_no_hover_texture": "textures/ui/button_borderless_lightpressednohover"
			}
		]
	},
	"control_button@generic_button": {
		"size": "$holoprint:touch_button_size",
		"$content": "holoprint:common.invis_armor_stand_holding_item",
		"$texture": "('textures/holoprint/icons/' + $icon)"
	},
	"double_control_button": {
		"type": "panel",
		"size": "$holoprint:double_touch_button_size",
		"controls": [
			{
				"left_button@generic_button": {
					"size": ["50% + 1px", "100%"],
					"anchor_from": "left_middle",
					"anchor_to": "left_middle",
					"$content": "holoprint:common.invis_armor_stand_holding_item",
					"$armor_stand_item_id": "$left_button_control_item",
					"$texture": "textures/ui/chevron_grey_left",
					"$background_clip_ratio": 0.3,
					"$background_clip_direction": "left",
					"$icon_size": ["60%", "60%"],
					"$icon_anchor": "left_middle"
				}
			},
			{
				"right_button@generic_button": {
					"size": ["50% + 1px", "100%"],
					"anchor_from": "right_middle",
					"anchor_to": "right_middle",
					"$content": "holoprint:common.invis_armor_stand_holding_item",
					"$armor_stand_item_id": "$right_button_control_item",
					"$texture": "textures/ui/chevron_grey_right",
					"$background_clip_ratio": 0.3,
					"$background_clip_direction": "right",
					"$icon_size": ["60%", "60%"],
					"$icon_anchor": "right_middle"
				}
			},
			{
				"icon": {
					"type": "image",
					"texture": "('textures/holoprint/icons/' + $icon)",
					"size": ["100% - 4px", "100% - 4px"],
					"layer": 3
				}
			}
		]
	},
	"generic_button": { // much less bloated than common_buttons.light_content_button
		"type": "button",
		"sound_name": "random.click",
		"sound_volume": 1.0,
		"sound_pitch": 1.0,
		"pressed_control": "pressed",
		"$background_clip_ratio|default": 0,
		"$background_clip_direction|default": "left",
		"$icon_size|default": ["100% - 5px", "100% - 5px"],
		"$icon_anchor|default": "center",
		"button_mappings": [
			{
				"from_button_id": "button.menu_select",
				"to_button_id": "button.menu_select",
				"mapping_type": "pressed"
			}
		],
		"controls": [
			{
				"background": {
					"type": "image",
					"texture": "textures/ui/button_borderless_light",
					"size": ["100%", "100%"],
					"clip_ratio": "$background_clip_ratio",
					"clip_direction": "$background_clip_direction",
					"clip_pixelperfect": true
				}
			},
			{
				"icon": {
					"type": "image",
					"texture": "$texture",
					"size": "$icon_size",
					"anchor_from": "$icon_anchor",
					"anchor_to": "$icon_anchor"
				}
			},
			{
				"pressed": {
					"type": "image",
					"texture": "textures/ui/button_borderless_lightpressednohover",
					"size": ["100%", "100%"],
					"layer": 1,
					"clip_ratio": "$background_clip_ratio",
					"clip_direction": "$background_clip_direction",
					"clip_pixelperfect": true,
					"controls": [
						{
							"content@$content": {}
						},
						{
							"icon": { // must be redefined in here as well for the pulsing animation to be applied to it. technically the original icon is still there, just hidden
								"type": "image",
								"texture": "$texture",
								"size": "$icon_size",
								"anchor_from": "$icon_anchor",
								"anchor_to": "$icon_anchor"
							}
						}
					],
					"anims": ["@holoprint:touch_buttons.pressed_button_anim"],
					"animation_reset_name": "button.menu_select"
				}
			}
		]
	},
	"pressed_button_anim": {
		"anim_type": "size", // reset size first and then instantly do the actual fading in animation
		"duration": 0,
		"next": "@holoprint:touch_buttons.fade_in_anim"
	},
	"fade_in_anim": {
		"anim_type": "alpha",
		"from": 0,
		"to": 1,
		"duration": 0.1,
		"next": "@holoprint:touch_buttons.wait_before_pulsing_anim"
	},
	"wait_before_pulsing_anim": {
		"anim_type": "wait",
		"duration": 0.3, // 0.1s from above + 0.3s = 0.4s, the same as in the Molang
		"next": "@holoprint:touch_buttons.pulse_size_anim"
	},
	"pulse_size_anim": {
		"anim_type": "size",
		"from": ["110%", "110%"],
		"to": ["100%", "100%"],
		"duration": 0.15,
		"next": "@holoprint:touch_buttons.pulse_size_anim" // references itself, creating a looping animation
	}
}
```

## File: src/packTemplate/ui/hud_screen.json
```json
{
	"namespace": "hud",
	
	"hud_content": {
		"modifications": [
			{
				"array_name": "controls",
				"operation": "insert_front",
				"value": [
					{
						"touch_buttons@holoprint:touch_buttons.touch_buttons": {
							"bindings": [
								{
									"binding_name": "#inventory_touch_button", // #using_touch doesn't work
									"binding_name_override": "#visible"
								}
							]
						}
					},
					{
						"keybinds@holoprint:keybinds.keybinds": {
							"bindings": [
								{
									"binding_name": "(not #inventory_touch_button)",
									"binding_name_override": "#visible"
								}
							]
						}
					}
				]
			}
		]
	},
	"hud_screen": {
		"modifications": [
			{
				"array_name": "button_mappings",
				"operation": "remove",
				"where": {
					"from_button_id": "button.inventory_left" // these will be added back when the tab key isn't pressed
				}
			},
			{
				"array_name": "button_mappings",
				"operation": "remove",
				"where": {
					"from_button_id": "button.inventory_right"
				}
			}
		]
	}
}
```

## File: src/packTemplate/ui/pause_screen.json
```json
{
	"namespace": "pause",
	
	"skin_panel_interior": {
		"modifications": [
			{
				"array_name": "controls",
				"operation": "insert_back",
				"value": [
					{
						"holoprint_info_button_panel": {
							"type": "panel",
							"size": ["100%", "100%c"],
							"controls": [
								{
									"open_holoprint_info_screen_button@holoprint:info_screen.open_button": {}
								}
							]
						}
					}
				]
			}
		]
	}
}
```

## File: src/packTemplate/ui/start_screen.json
```json
{
	"namespace": "start",
	
	"lower_online_buttons_panel/stacked_column": {
		"modifications": [
			{
				"array_name": "controls",
				"operation": "insert_back",
				"value": [
					{
						"open_holoprint_info_screen_button_padding": {
							"type": "panel",
				 			"size": [5, "100%"]
						}
					},
					{
						"open_holoprint_info_screen_button_wrapper@start.column_frame": {
							"size": [28, 32],
							"controls": [
								{
									"open_holoprint_info_screen_button@holoprint:info_screen.open_button": {}
								}
							]
						}
					}
				]
			}
		]
	}
}
```

## File: src/packTemplate/ui/tabbed_upsell_screen.json
```json
// There is unfortunately no way to add a new UI screen with a resource pack, so the info screen actually displays via overriding the "tabbed upsell" screen or the "Windows 10 trial conversion" screen. (I think that it depends on the platform.)
// I found this trick from the ESBE 3G shader pack, which has its own info screen: https://github.com/McbeEringi/esbe-3g
// Given that these shaders no longer work in modern versions, it's unlikely to run into conflicts, unless other packs also use this trick.
{
	"namespace": "tabbed_upsell",
	
	"tabbed_upsell_screen@holoprint:info_screen.info_screen": {}
}
```

## File: src/packTemplate/ui/win10_trial_conversion_screen.json
```json
// There is unfortunately no way to add a new UI screen with a resource pack, so the info screen actually displays via overriding the "tabbed upsell" screen or the "Windows 10 trial conversion" screen. (I think that it depends on the platform.)
// I found this trick from the ESBE 3G shader pack, which has its own info screen: https://github.com/McbeEringi/esbe-3g
// Given that these shaders no longer work in modern versions, it's unlikely to run into conflicts, unless other packs also use this trick.
{
	"namespace": "win10_trial_conversion",
	
	"win10_trial_conversion_screen@holoprint:info_screen.info_screen": {}
}
```

## File: src/packTemplate/manifest.json
```json
{
	"format_version": 2,
	"header": {
		"description": "pack.description",
		"min_engine_version": [1, 16, 0]
	},
	"modules": [
		{
			"type": "resources"
		}
	],
	"subpacks": [
		{
			"folder_name": "leash_knot_mode",
			"name": "Leash knot mode", // such a goofy name
			"memory_tier": 0
		},
		{
			"folder_name": "punch_to_activate",
			"name": "Punch to activate", // like below, translations for these won't be loaded until after the pack is enabled...
			"memory_tier": 0
		},
		{
			"folder_name": "default",
			"name": "Default",
			"memory_tier": 0
		}
	],
	"settings": [
		{
			"type": "input",
			"text": "§uHoloPrint§r Wiki:", // these strings can be translation keys but the translations won't be loaded until after the pack is applied. this means the first time the player enables the pack they'll see only the raw translation keys which is unideal. it's better to put these links in another UI screen somehow...
			"default": "https://holoprint-mc.github.io/wiki",
			"name": "wiki"
		},
		{
			"type": "input",
			"text": "Generated by §uHoloPrint§r:",
			"default": "https://github.com/SuperLlama88888/holoprint",
			"name": "github" // this cannot be removed else the pack will fail to import
		}
	],
	"metadata": {
		"authors": ["HoloPrint", "SuperLlama88888"],
		"generated_with": {},
		"license": "CC BY-NC-SA 4.0",
		"url": "https://github.com/SuperLlama88888/holoprint"
	}
}
```

## File: src/structure/IStructure.ts
```typescript
import type { Block, Vec2, Vec3 } from "../common.types.ts";

/**
 * An interface for accessing structure files, regardless of what format they're in (.mcstructure, .schem, etc.). All code operating on structures should interact with this interface, not any particular implementation.
 */
export default interface IStructure {
	readonly size: Vec3;
	readonly width: number;
	readonly height: number;
	readonly depth: number;
	/** Gets the block at some position. Returns undefined if there is no block. */
	getBlock(coords: Vec3, layer: number): Block | undefined;
	/** Gets the block and palette index at some position. Returns [undefined, -1] if there is no block. */
	getBlockAndIndex(coords: Vec3, layer: number): [Block | undefined, number];
	/** Gets the block palette index of the block at some location. -1 represents no block. TODO: make no block be undefined */
	getPaletteIndex(coords: Vec3, layer: number): number;
	/** Gets the block palette indices for both layers for a block at some location. Returns [-1, -1] if there is no block. */
	getPaletteIndicesForBothLayers(coords: Vec3): Vec2;
	getPalette(): Block[];
	getBlockIndices(): [Int32Array] | [Int32Array, Int32Array];
	/** Replaces the block palette and block indices. This is done after merging multiple structures' palettes together, so that they can all share one combined palette. It is the caller's responsibility to ensure that the indices point to entries in the palette. */
	setPaletteAndIndices(palette: Block[], blockIndices: [Int32Array] | [Int32Array, Int32Array]): void;
}
```

## File: src/structure/Mcstructure.js
```javascript
import * as NBT from "nbtify-readonly-typeless";
import BlockUpdater from "../BlockUpdater.js";
import { AsyncFactory, JSONMap, MonotonicBitset, removeFileExtension, tuple, UserError, vec3 } from "../utils.js";

const IGNORED_BLOCK_ENTITIES = new Set(["Beacon", "Beehive", "Bell", "BrewingStand", "ChiseledBookshelf", "CommandBlock", "Comparator", "Conduit", "CreakingHeart", "EnchantTable", "EndGateway", "JigsawBlock", "Lodestone", "SculkCatalyst", "SculkShrieker", "SculkSensor", "CalibratedSculkSensor", "StructureBlock", "BrushableBlock", "TrialSpawner", "Vault"]);

/**
 * An IStructure loaded from a .mcstructure file (exported from Minecraft Bedrock's structure blocks).
 * @implements {IStructure}
 */
export default class Mcstructure extends AsyncFactory {
	/** @readonly @type {McstructureNbt<1 | 2>["structure"]} */
	#structureTag;
	/** @readonly @type {McstructureNbt<1 | 2>["compression"]} */
	#compression;
	/** @type {NBTBlock[]} */
	#rawPalette;
	/** @type {Block[]} */
	#palette = [];
	/** @type {[Int32Array] | [Int32Array, Int32Array]} */
	#blockIndices;
	/** @type {Record<number, BlockPositionData>} */
	#blockPositionData;
	/** @readonly @type {string[]} */
	#ignoredBlocks;
	/** @readonly @type {Vec3} */
	worldOrigin;
	
	/**
	 * @param {File} structureFile
	 * @param {NBT.RootTag} nbt
	 * @param {string[]} ignoredBlocks
	 */
	constructor(structureFile, nbt, ignoredBlocks) {
		super();
		if(!this.#isValidMcstructureNbt(nbt)) {
			throw new UserError(this.#getInvalidMcstructureErrorMessage(structureFile.name, nbt));
		}
		
		this.size = Array.from(nbt.size);
		// no, these can't be on a single line, typescript hates it
		this.width = this.size[0];
		this.height = this.size[1];
		this.depth = this.size[2];
		
		this.worldOrigin = Array.from(nbt.structure_world_origin);
		this.#structureTag = nbt.structure;
		this.#compression = nbt.compression;
		
		this.#ignoredBlocks = ignoredBlocks;
	}
	async init() {
		let structure = this.#structureTag;
		if(structure instanceof Int8Array) {
			// format_version 2 structures with compression: 1 store the structure compound as a zlib-compressed NBT byte array
			if(this.#compression != 1) {
				console.warn(`Structure data is a byte array, but the compression tag is ${this.#compression}! Trying to decompress it anyway. Please report this on GitHub: https://github.com/SuperLlama88888/holoprint/issues/new?template=BLANK_ISSUE`);
			}
			let compressedBytes = new Uint8Array(structure.buffer, structure.byteOffset, structure.byteLength);
			let nbtOutput = await NBT.read(compressedBytes, {
				endian: "little",
				compression: "deflate", // nbtify decompresses with the Compression API (DecompressionStream)
				strict: false
			});
			/** @type {McstructureStructureCompound<1 | 2>} */
			// @ts-expect-error
			let nbt = nbtOutput.data;
			structure = nbt;
		}
		this.#rawPalette = structure.palette.default.block_palette;
		this.#blockIndices = structure.block_indices;
		this.#blockPositionData = structure.palette.default.block_position_data;
		
		await this.#tweakBlockPalette();
	}
	/**
	 * @param {Vec3} coords
	 * @param {number} layer
	 * @returns {Block | undefined}
	 */
	getBlock(coords, layer) {
		let paletteIndex = this.getPaletteIndex(coords, layer);
		if(paletteIndex == -1) {
			return undefined;
		}
		return this.#palette[paletteIndex];
	}
	/**
	 * @param {Vec3} coords
	 * @param {number} layer
	 * @returns {[Block | undefined, number]}
	 */
	getBlockAndIndex(coords, layer) {
		let paletteIndex = this.getPaletteIndex(coords, layer);
		if(paletteIndex == -1) {
			return [undefined, -1];
		}
		return [this.#palette[paletteIndex], paletteIndex];
	}
	/**
	 * @param {Vec3} coords
	 * @param {number} layer
	 * @returns {number}
	 */
	getPaletteIndex(coords, layer) {
		if(layer >= this.#blockIndices.length) {
			// format_version 2 structures can omit the second block indices array when it is empty
			// https://feedback.minecraft.net/hc/en-us/articles/47907593889677-Minecraft-Beta-Preview-26-50-24
			return -1;
		}
		let index = this.#getStructureIndexFromCoordinates(coords);
		return this.#blockIndices[layer][index];
	}
	/**
	 * @param {Vec3} coords
	 * @returns {Vec2}
	 */
	getPaletteIndicesForBothLayers(coords) {
		return tuple([this.getPaletteIndex(coords, 0), this.getPaletteIndex(coords, 1)]);
	}
	getPalette() {
		return this.#palette;
	}
	getBlockIndices() {
		return this.#blockIndices;
	}
	/**
	 * @param {Block[]} palette
	 * @param {[Int32Array] | [Int32Array, Int32Array]} blockIndices
	 */
	setPaletteAndIndices(palette, blockIndices) {
		this.#palette = palette;
		this.#blockIndices = blockIndices;
	}
	
	/**
	 * Checks if a NBT object is valid .mcstructure NBT.
	 * @param {NBT.RootTag} nbt
	 * @returns {nbt is McstructureNbt<1 | 2>}
	 */
	#isValidMcstructureNbt(nbt) {
		return (nbt["format_version"] == 1 || nbt["format_version"] == 2) && nbt["size"] instanceof Int32Array && nbt["size"].length == 3 && "structure" in nbt && nbt["structure_world_origin"] instanceof Int32Array && nbt["structure_world_origin"].length == 3;
	}
	/**
	 * Gets the error message for a NBT file that isn't `.mcstructure`.
	 * @param {string} structureFileName
	 * @param {NBT.RootTag} nbt
	 * @returns {string}
	 */
	#getInvalidMcstructureErrorMessage(structureFileName, nbt) {
		let offendingStructureName = removeFileExtension(structureFileName);
		let errorMessage = `Structure ${offendingStructureName} is not a valid .mcstructure file!`;
		const otherNBTFileTypes = {
			MinecraftDataVersion: "litematic",
			TileEntities: "schematic",
			Metadata: "schem", // Sponge format
			DataVersion: "nbt"
		};
		let probableSourceFileExtension = Object.entries(otherNBTFileTypes).find(([key]) => key in nbt)?.[1];
		if(probableSourceFileExtension) {
			errorMessage += `\nNote: Renaming .${probableSourceFileExtension} to .mcstructure doesn't work, you must create the structure file from inside Minecraft Bedrock! Minecraft Java structures aren't the same as Minecraft Bedrock structures!`;
		}
		return errorMessage;
	}
	/**
	 * Gets the index of a block position in the structure data from its coordinates.
	 * @param {Vec3} coords
	 * @returns {number}
	 */
	#getStructureIndexFromCoordinates([x, y, z]) {
		if(x < 0 || x >= this.width || y < 0 || y >= this.height || z < 0 || z >= this.depth) {
			throw new RangeError(`Position ${vec3.stringify([x, y, z])} is out of bounds of the structure! Must be within (0, 0, 0) and ${vec3.stringify(this.size)}.`);
		}
		return (x * this.height + y) * this.depth + z;
	}
	/**
	 * Removes ignored blocks from the block palette, updates old blocks, and adds block entities as separate entries.
	 */
	async #tweakBlockPalette() {
		let blockVersions = new Set(); // version should be constant for all blocks. just wanted to test this
		let blockUpdater = new BlockUpdater();
		let updatedBlocks = 0;
		let ignoredPaletteIndices = new MonotonicBitset(this.#rawPalette.length);
		
		for(let [i, block] of Object.entries(this.#rawPalette)) {
			blockVersions.add(block.version);
			if(blockUpdater.blockNeedsUpdating(block)) {
				if(await blockUpdater.update(block)) {
					updatedBlocks++;
				}
			}
			block.name = block.name.replace(/^minecraft:/, ""); // remove namespace here, right at the start
			if(this.#ignoredBlocks.includes(block.name)) {
				ignoredPaletteIndices.add(+i);
				continue;
			}
			delete block.version;
			if(!Object.keys(block.states).length) {
				delete block.states; // easier viewing in the console
			}
			this.#palette[i] = block;
		}
		
		if(this.#palette.length == 0) {
			throw new UserError(`Structure is empty! No blocks are inside the structure.`);
		}
		
		if(!ignoredPaletteIndices.isEmpty) {
			this.#blockIndices.forEach(blockIndicesForLayer => {
				blockIndicesForLayer.forEach((paletteIndex, structureIndex) => {
					if(ignoredPaletteIndices.has(paletteIndex)) {
						blockIndicesForLayer[structureIndex] = -1;
					}
				});
			});
		}
		
		let blockVersionsStringified = Array.from(blockVersions).map(v => BlockUpdater.parseBlockVersion(v).join("."));
		if(updatedBlocks > 0) {
			console.info(`Updated ${updatedBlocks} block${updatedBlocks > 1? "s" : ""} from ${blockVersionsStringified.join(", ")} to ${BlockUpdater.parseBlockVersion(BlockUpdater.LATEST_VERSION).join(".")}!`);
			console.info(`Note: Updated blocks may not be 100% accurate! If there are some errors, try loading the structure in the latest version of Minecraft then saving it again, so all blocks are up to date.`);
		}
		console.log("Block versions:", Array.from(blockVersions), blockVersionsStringified);
		
		// add block entities into the block palette (on layer 0)
		/** @type {JSONMap<Block, number>} */
		let newIndexCache = new JSONMap();
		let entitylessBlockEntityIndices = new Set(); // contains all the block palette indices for blocks with block entities. since they don't have block entity data yet, and all block entities well be cloned and added to the end of the palette, we can remove all the entries in here from the palette.
		for(let i in this.#blockPositionData) {
			let oldPaletteI = this.#blockIndices[0][i];
			if(!(oldPaletteI in this.#palette)) { // if the block is ignored, it will be deleted already, so there's no need to touch its block entities
				continue;
			}
			if(!("block_entity_data" in this.#blockPositionData[i])) { // observers have tick_queue_data
				continue;
			}
			
			let blockEntityData = structuredClone(this.#blockPositionData[i].block_entity_data);
			if(IGNORED_BLOCK_ENTITIES.has(blockEntityData["id"])) {
				continue;
			}
			delete blockEntityData["x"];
			delete blockEntityData["y"];
			delete blockEntityData["z"];
			
			// clone the old block and add the block entity data
			/** @type {Block} */
			let newBlock = structuredClone(this.#palette[oldPaletteI]);
			newBlock.blockEntityData = blockEntityData;
			
			// check that we haven't seen this block entity before. since in JS objects are compared by reference we have to stringify it first then check the cache.
			if(newIndexCache.has(newBlock)) {
				this.#blockIndices[0][i] = newIndexCache.get(newBlock);
			} else {
				let paletteI = this.#palette.length;
				this.#palette[paletteI] = newBlock;
				this.#blockIndices[0][i] = paletteI;
				newIndexCache.set(newBlock, paletteI);
				entitylessBlockEntityIndices.add(oldPaletteI); // we can schedule to delete the original block palette entry later, as it doesn't have any block entity data and all block entities clone it.
			}
		}
		for(let paletteI of entitylessBlockEntityIndices) {
			// console.log(`deleting entityless block entity ${paletteI} = ${JSON.stringify(blockPalette[paletteI])}`);
			delete this.#palette[paletteI]; // this makes the blockPalette array discontinuous; when using native array methods, they skip over the empty slots.
		}
	}
}

/** @import { BlockPositionData, McstructureNbt, McstructureStructureCompound } from "./Mcstructure.types.ts" */
/** @import IStructure from "./IStructure.ts" */
/** @import { NBTBlock } from "../minecraft.types.ts" */
/** @import { Block, Vec2, Vec3 } from "../common.types.ts" */
```

## File: src/structure/Mcstructure.types.ts
```typescript
import type { I32Vec3 } from "../common.types.ts";
import type { NBTBlock } from "../minecraft.types.ts";

export type McstructureNbt<T extends 1 | 2> = {
	/** Format version, can be either 1 or 2. */
	format_version: T;
	/** 1 if `structure` is stored as a zlib-compressed NBT byte array. Missing means uncompressed. */
	compression?: 0 | 1;
	/** Size of the structure in blocks. */
	size: I32Vec3;
	structure: McstructureStructureCompound<T> | Int8Array;
	/** The original world position where the structure was saved. */
	structure_world_origin: I32Vec3;
};
export type McstructureStructureCompound<T extends 1 | 2> = {
	block_indices: T extends 1? [Int32Array, Int32Array] : ([Int32Array] | [Int32Array, Int32Array]);
	entities: EntityNbtCompound[];
	palette: {
		default: {
			block_palette: NBTBlock[];
			block_position_data: Record<number, BlockPositionData>;
		};
	};
};
export type EntityNbtCompound = Record<string, any>;
export type BlockPositionData = {
	/** Block entity data. */
	block_entity_data?: EntityNbtCompound;
	/** Scheduled tick information for blocks that need updates. */
	tick_queue_data?: TickQueueData[];
};
export type TickQueueData = {
	/** Number of ticks remaining before update. */
	tick_delay: number;
};
```

## File: src/structure/structureHelpers.js
```javascript
import * as NBT from "nbtify-readonly-typeless";
import { clonePromise, JSONSet, UserError, weaklyCacheUnaryFunc } from "../utils.js";
import Mcstructure from "./Mcstructure.js";

/**
 * @param {File} structureFile
 * @param {string[]} [ignoredBlocks]
 * @returns {Promise<IStructure>}
 */
export async function createStructure(structureFile, ignoredBlocks = []) {
	// assume that it is .mcstructure
	let nbt = await readNbtFromFile(structureFile);
	return await Mcstructure.new(structureFile, nbt, ignoredBlocks);
}

export const readNbtFromFile = weaklyCacheUnaryFunc(
	/**
	 * Reads the NBT of a structure file, returning a JSON object.
	 * @param {File} structureFile `*.mcstructure`
	 * @returns {Promise<NBT.RootTag>}
	 */
	async structureFile => {
		let arrayBuffer = await readFileContents(structureFile);
		
		try {
			return await readNbt(structureFile, arrayBuffer, {
				endian: "little", // true .mcstructure files are little-endian
				strict: false // some files have duplicated sections, which makes strict mode throw an error: #68
			});
		} catch(e) {
			console.warn(`Structure file ${structureFile.name} couldn't be read with its preferred NBT read settings. Trying generic settings...`);
			console.debug(e);
			return await readNbt(structureFile, arrayBuffer); // if the file was generated from an external source, it's best to try with generic NBT read settings
		}
	},
	clonePromise
);

/**
 * Reads the contents of the structure file as bytes.
 * @param {File} file
 * @returns {Promise<ArrayBuffer>}
 */
async function readFileContents(file) {
	let arrayBuffer = await file.arrayBuffer().catch(e => {
		if(String(e).includes("NotFoundError")) {
			throw new UserError("Unknown error when reading structure file! Please restart your browser and try again.\nIf this issue persists, please take a screen recording and create an issue on GitHub.");
		}
		throw new Error(`Could not read contents of structure file "${file.name}"!\n${e}`);
	});
	if(file.size == 0) { // this check must happen after reading the bytes, otherwise Google Drive files can't be read on Android Chrome: https://issues.chromium.org/issues/40123366#comment104
		throw new UserError(`"${file.name}" is an empty file! Please try exporting your structure again.\nIf you play on a version below 1.20.50, exporting to OneDrive will cause your structure file to be empty.`);
	}
	return arrayBuffer;
}
/**
 * Reads the NBT of a structure file, returning a JSON object.
 * @param {File} structureFile `*.mcstructure`
 * @param {ArrayBuffer} arrayBuffer
 * @param {Partial<NBT.ReadOptions>} [options]
 * @returns {Promise<NBT.RootTag>}
 */
async function readNbt(structureFile, arrayBuffer, options = {}) {
	let nbtRes = await NBT.read(arrayBuffer, options).catch(e => {
		if(e instanceof NBT.InvalidTagError) {
			throw new UserError(`"${structureFile.name}" is not a .mcstructure file! Please look at the tutorial on the wiki: https://holoprint-mc.github.io/wiki/creating-packs`);
		}
		throw new Error(`Invalid NBT in structure file "${structureFile.name}"!\n${e}`);
	});
	return nbtRes.data;
}

/**
 * Combines multiple block palettes into one, and updates indices for each. Returns the shared palette.
 * @param {IStructure[]} structures
 * @returns {Block[]}
 */
export function mergeStructurePalettes(structures) {
	/** @type {JSONSet<Block>} */
	let mergedPaletteSet = new JSONSet();
	/** @type {([Int32Array] | [Int32Array, Int32Array])[]} */
	let remappedIndices = new Array(structures.length);
	structures.forEach((structure, structureI) => {
		let indexRemappings = structure.getPalette().map(block => {
			mergedPaletteSet.add(block);
			return mergedPaletteSet.indexOf(block);
		});
		remappedIndices[structureI] = structure.getBlockIndices().map(layer => layer.map(i => indexRemappings[i] ?? -1));
	});
	// all structures will use this one palette array!
	let mergedPalette = Array.from(mergedPaletteSet);
	structures.forEach((structure, i) => structure.setPaletteAndIndices(mergedPalette, remappedIndices[i]));
	
	console.log("combined palette: ", mergedPalette);
	console.log("remapped indices: ", remappedIndices);
	
	return mergedPalette;
}

/** @import IStructure from "./IStructure.ts" */
/** @import { Block } from "../common.types.ts" */
```

## File: src/styles/base.css
```css
:root {
	--icon-scale: 1;
	
	--text-col: #202526;
	--border-col: #D899D8;
	--input-bg: #EEDEEE;
	--input-bg-checked: #E8C8E8;
	--input-bg-active: #DABADA;
	--dark-bg: #D38AD3;
	--dark-bg-hover: #C57CC5;
	--dark-bg-active: #B66DB7;
	--dark-border: #9B4F9B;
	--success-green: #3AB336;
	--error-red: #E24436;
}
body {
	background-image: linear-gradient(#FFFB, #FFFB), url("../assets/logo_background.png");
	background-size: 100px;
	/* animation: move-background 10s linear infinite; */
	font-family: "Catamaran", "Trebuchet MS", sans-serif;
	color: var(--text-col);
	line-height: 1.2;
}
@keyframes move-background {
	from {
		background-position: 0 0;
	}
	to {
		background-position: 100px 60px;
	}
}

h1 {
	margin: 6px 0;
}
form {
	text-align: left;
}
file-input-table {
	margin: 3px;
}
span {
	vertical-align: middle;
}
label {
	display: block;
}
details {
	padding: 3px;
	width: fit-content;
	border: 1px solid #AAA;
	border-radius: 5px;
}
summary {
	padding: 0 3px;
	font-weight: 500;
	font-size: 1rem;
}
img:not(#languageSelectorButton), canvas {
	display: inline-block;
	width: 400px;
	border: 1px solid black;
	/* color: #4C33CC;
	color: #2C33B3;
	color: #4CF0A0
	color: hsl(300, 24%, 53%);
	color: var(--border-col);
	color: #D7B3D7; */
}

.resetButton {
	position: absolute;
	right: 10px;
	top: 0;
}

.hidden {
	display: none !important;
}
.material-symbols {
	font-family: "Material Symbols" !important;
}
/* This magic is taken straight from https://css-loaders.com/bars/#l1 */
.loader {
	margin: 10px auto auto;
	width: 45px;
	aspect-ratio: 1;
	--c: no-repeat linear-gradient(var(--border-col) 0 0);
	background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
	background-size: 20% 100%;
	animation: l1 1s infinite linear;
}
@keyframes l1 {
	0% {
		background-size: 20% 100%, 20% 100%, 20% 100%;
	}
	33% {
		background-size: 20% 10%, 20% 100%, 20% 100%;
	}
	50% {
		background-size: 20% 100%, 20% 10%, 20% 100%;
	}
	66% {
		background-size: 20% 100%, 20% 100%, 20% 10%;
	}
	100% {
		background-size: 20% 100%, 20% 100%, 20% 100%;
	}
}
```

## File: src/styles/bigButtons.css
```css
#generatePackButton, .packInfoButton {
	margin: 4px auto;
	padding: 10px;
	box-sizing: border-box;
	width: 70%;
	display: block;
	
	border-width: 3px;
	border-radius: 25px;
	text-align: center;
	font-size: 1.4em;
	font-weight: 500;
}
.packInfoButton {
	--bg-col-1: var(--input-bg-checked);
	--bg-col-2: var(--border-col);
	background-image: repeating-linear-gradient(150deg, var(--bg-col-1) 0, var(--bg-col-1) 10px, var(--bg-col-2) 10px, var(--bg-col-2) 20px);
	background-size: 200% !important;
	border-color: var(--bg-col-2);
	transition: transform 0.15s;
	min-width: min-content;
	
	&:not(.finished) {
		cursor: wait;
	}
	&.completed {
		animation: moveButtonBackground 1s linear infinite;
		&:hover {
			transform: scale(1.05);
		}
		&:active {
			transform: scale(1.02);
		}
	}
	&.failed, &.reportIssue {
		--bg-col-1: #ee5350;
		--bg-col-2: #e43b37;
	}
	&.failed {
		cursor: initial;
	}
	&.reportIssue {
		cursor: pointer;
		&:hover {
			transform: scale(1.035);
		}
		&:active {
			transform: scale(1.01);
		}
	}
}
@keyframes moveButtonBackground {
	from {
		background-position: -40px 0;
	}
}
```

## File: src/styles/coordinateLock.css
```css
#coordinateLockCoordsCont {
	padding: 5px;
	border: 3px dotted #AAA;
	border-radius: 10px;
}
#coordinateLockStructureCoords {
	margin: 2px 0;
	display: grid;
	grid-template-columns: minmax(0, max-content) max-content max-content;
	align-items: center;
	gap: 2px 5px;
	
	> :first-child {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	> :nth-child(3n) {
		span {
			font-size: 20px;
			&:last-child { /* degrees sign is too small with the regular font */
				font-family: serif;
			}
		}
		input {
			width: 38px;
		}
	}
}
#coordinateLockCoordsAdjustmentCont {
	margin-top: 3px;
	display: flex;
	align-items: center;
	gap: 5px;
	> :first-child {
		white-space: nowrap;
	}
	> :last-child {
		flex: 1;
		> span {
			display: inline-block;
		}
	}
}
```

## File: src/styles/expandableFieldsets.css
```css
fieldset.expandable {
	display: grid;
	grid-template-rows: 0fr;
	transition: grid-template-rows 0.35s;
	
	&:has(legend input:checked) {
		grid-template-rows: 1fr;
	}
	& > *:not(legend) {
		overflow: hidden;
	}
	& > legend {
		contain: layout;
		& > label {
			padding-left: 1em;
			cursor: pointer;
			& > input {
				display: none;
			}
		}
		&::before {
			content: "";
			margin: auto;
			display: inline-block;
			position: absolute;
			left: 3px;
			top: 3px;
			bottom: 0;
			width: 0.5em;
			height: 0.5em;
			border-right: 1px solid currentColor;
			border-top: 1px solid currentColor;
			transform: rotate(45deg);
			transform-origin: 75% 25%;
			transition: transform 0.35s;
		}
	}
	&:has(legend input:checked) > legend::before {
		transform: rotate(135deg);
	}
}
```

## File: src/styles/index.css
```css
@import "./base.css";
@import "./layout.css";
@import "./structureFileInput.css";
@import "./expandableFieldsets.css";
@import "./inputs.css";
@import "./multiTabConts.css";
@import "./bigButtons.css";
@import "./preview.css";
@import "./miscElements.css";
@import "./coordinateLock.css";
@import "./MaterialSymbols.css";
```

## File: src/styles/inputs.css
```css
input, select {
	font-family: monospace;
}
input, button {
	color: inherit; /* iOS fix */
}
button, input[type="checkbox"], input[type="number"], input[type="text"], textarea, input[type="file"]::file-selector-button, select, .buttonlike {
	padding: 1px 4px;
	border: 2px solid var(--border-col);
	accent-color: var(--border-col);
	border-radius: 7px;
	background: var(--input-bg);
	font-family: inherit;
	color: inherit;
	cursor: pointer;
	transition: background 0.15s, border-color 0.15s, color 0.15s;
}
input[type="file"]:invalid {
	color: var(--error-red);
	outline: 3px solid var(--error-red);
	contain: paint; /* makes the outline draw on top of neighbouring elements */
}
input[type="color"] {
	border: 2px solid var(--border-col);
	border-radius: 7px;
	background: var(--input-bg);
	cursor: pointer;
	transition: background 0.15s;
}
input[type="number"], input[type="text"], textarea {
	cursor: text;
	outline-width: thin;
	accent-color: auto;
	line-height: inherit;
}
input[type="text"]::placeholder {
	text-overflow: ellipsis;
}
input[type="text"]:invalid {
	border-color: var(--error-red);
	outline-color: var(--error-red);
}
a.buttonlike {
	color: initial;
	text-decoration: initial;
}
button:not(:disabled):not(.packInfoButton):hover, input[type="file"]:not(:disabled):hover::file-selector-button, select:not(:disabled):hover, .buttonlike:not(.packInfoButton):hover {
	background: var(--input-bg-checked);
}
button:disabled, input[type="file"]:disabled::file-selector-button, select:disabled, .buttonlike:disabled {
	cursor: not-allowed;
}
button:not(#generatePackButton):disabled {
	background: #CCC;
	border-color: #9A9A9A;
}
input[type="number"]:hover, input[type="text"]:hover, input[type="color"]:hover, textarea:hover {
	background: #EAD5EA;
}
button:not(.packInfoButton):not(:disabled):active, input[type="file"]:not(:disabled):active::file-selector-button, select:not(:disabled):active, .buttonlike:not(.packInfoButton):not(:disabled):active:active {
	background: var(--input-bg-active);
}
input[type="checkbox"] {
	margin: 3px 1px;
	display: inline-block;
	vertical-align: middle;
	appearance: none;
	width: 40px;
	height: 20px;
	border-radius: 10px;
	
	&::after {
		display: inline-block;
		width: 12px;
		height: 12px;
		position: relative;
		bottom: -1px;
		left: -2px;
		background: #C889C8;
		border-radius: 50%;
		content: "close";
		font-family: "Material Symbols";
		font-size: 15px;
		font-weight: bold;
		color: transparent;
		text-shadow: 17px -3px 0 var(--text-col); /* effectively move the text */
		transition: left 0.2s, text-shadow 0.2s, background 0.15s;
	}
	&:checked {
		background: #E0BEE0;
		&::after {
			left: 18px;
			content: "check";
			text-shadow: -20px -3px 0 var(--text-col);
		}
	}
	&:hover::after {
		background: #B778B7;
	}
}
input[type="radio"].buttonlike {
	appearance: none; /* necessary for pseudo-elements to work */
	margin: 0;
	padding: 0;
	text-align: center;
	&::after {
		content: attr(value);
		display: block;
		width: 20px;
		height: 20px;
	}
}
input[type="radio"].buttonlike:checked, .importantButton {
	color: white;
	font-weight: bold;
	background: var(--dark-bg);
	border-color: var(--dark-border);
	box-shadow: 0 0 5px var(--dark-bg);
	&:hover:hover:hover {
		background: var(--dark-bg-hover);
	}
	&:active:active:active {
		background: var(--dark-bg-active);
	}
}
```

## File: src/styles/layout.css
```css
main {
	margin: auto;
	padding: 20px;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 90vw;
	height: 90vh;
	background: #FFF8;
	/* backdrop-filter: blur(1.5px); */
	border: 5px solid #D7B3D7;
	border-radius: 25px;
	box-sizing: border-box;
	text-align: center;
	overflow: auto;
	scroll-behavior: smooth;
}
#responsiveWidthWrapper {
	margin: auto;
	width: 60%;
}
@media (min-width: 1301px) {
	:root {
		font-size: 1.125em;
		--icon-scale: 1.6;
	}
}
@media (max-width: 1300px) {
	:root {
		--icon-scale: 1.3;
	}
	#responsiveWidthWrapper {
		width: 70%;
	}
}
@media (max-width: 1048px) {
	#responsiveWidthWrapper {
		width: 82.5%;
	}
}
@media (max-width: 748px) {
	:root {
		font-size: 0.875em;
	}
	#responsiveWidthWrapper {
		width: 95%;
	}
}
@media (max-width: 450px) {
	:root {
		font-size: 0.8em;
		--icon-scale: 1;
	}
	main {
		padding: 2px;
		width: calc(100% - 5vmin);
		height: calc(100% - 5vmin);
	}
	fieldset {
		padding: 5px;
	}
}
```

## File: src/styles/MaterialSymbols.css
```css
/*!
	Material Symbols
	Copyright (c) Google
	Licensed under the Apache License, Version 2.0
	http://www.apache.org/licenses/LICENSE-2.0

	Modified from https://fonts.googleapis.com/css2?family=Material+Symbols:wght@400..700&icon_names=check,close,delete,delete_sweep,download,drag_indicator,rotate_right,stat_0&display=block
*/

@font-face {
	font-family: "Material Symbols";
	font-style: normal;
	font-weight: 400 700;
	font-display: block;
	src: url("../assets/MaterialSymbols.woff2") format("woff2");
}
```

## File: src/styles/miscElements.css
```css
#descriptionLinksCont {
	font-weight: 500;
	color: #777;
	font-size: 0.9em;
}
#dropFileNotice {
	padding: 10px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
	background: #0002;
	font-size: 1.75em;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
#termsOfUseNotice {
	display: block;
	text-align: center;
}

#languageSelectorCont {
	position: absolute;
	top: 10px;
	right: 10px;
}
#languageSelectorButton {
	width: calc(22px * var(--icon-scale));
	height: calc(22px * var(--icon-scale));
	background: currentColor;
	mask: url("../assets/translate_icon.svg") no-repeat center;
	transition: transform 0.15s;
}
#languageSelectorCont:hover > #languageSelectorButton {
	transform: scale(1.125);
}
#languageSelector {
	opacity: 0;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}

fieldset.textureSettings > div {
	display: flex;
	flex-wrap: wrap;
	gap: 15px 0;
	> div {
		flex: 1 1 auto;
	}
	td {
		padding: 0 5px;
	}
}
#texturePreviewCont {
	text-align: center;
	min-width: 260px;
	
	img {
		margin: 5px;
		display: inline-block;
		border: none;
		width: 40%;
		max-width: 140px;
		image-rendering: pixelated;
	}
}
```

## File: src/styles/multiTabConts.css
```css
.multiTabCont {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	
	& > input[type="radio"][name^="configTabs"] {
		position: absolute; /* stay at top */
		display: none;
	}
	& > label {
		flex: 1 1 0;
		text-align: center;
		margin: 10px 5px 5px;
	}
	&:nth-child(2) > label {
		margin: 0 5px 5px;
	}
	& > fieldset {
		width: 100%;
		order: 1;
		contain: layout;
	}
	& > input[type="radio"][name^="configTabs"]:checked + label {
		background: var(--input-bg-checked);
		font-weight: 500;
	}
	& > input[type="radio"][name^="configTabs"]:not(:checked) + label + fieldset {
		display: none;
	}
}
```

## File: src/styles/preview.css
```css
.previewCont {
	margin: auto;
	padding: 0;
	contain: layout;
	text-align: center;
	width: min(80vmin, 100%);
	
	& > .previewMessage, & > canvas, & ~ hr {
		width: min(80vmin, 100%);
	}
	& > canvas {
		user-select: none;
	}
	& > .previewMessage, & > canvas {
		aspect-ratio: 1;
		box-sizing: border-box;
	}
	.statsPanel {
		width: 0;
		height: 0;
		canvas {
			border: none;
		}
	}
	@media (min-width: 451px) and (min-height: 451px) {
		lil-gui {
			position: absolute;
			right: 0;
		}
	}
}
.previewMessage {
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.5vw;
	border: 1px solid black;
	
	&.clickToView {
		cursor: pointer;
	}
}
@media (max-width: 768px) {
	.previewMessage {
		font-size: 3.5vw;
	}
}
@media (max-width: 450px) {
	.previewMessage {
		font-size: 5vw;
	}
}
```

## File: src/styles/structureFileInput.css
```css
#structureFileInputCont input[type="file"] ~ div {
	margin: 4px auto;
	padding: 10px;
	box-sizing: border-box;
	width: 70%;
	font-weight: 500;
	text-align: center;
	border: 3px dashed var(--border-col);
	border-radius: 25px;
}
#structureFileInputCont fieldset:first-of-type input[type="file"] ~ div {
	border: 3px solid var(--border-col);
}
#structureFileInputCont input[type="file"] ~ div p {
	margin: 0;
}
#structureFileInputCont input[type="file"] ~ div p:first-child {
	font-size: 1.4em;
}
#structureFileInputCont input[type="file"] ~ div p:last-child {
	font-size: 0.7em;
}
#structureFileInputCont:not(:has(+ file-input-table[has-files])):not(:has(fieldset label ~ span:not(.hidden))) {
	input[type="file"], ~ * {
		display: none;
	}
}
main:not(:has(file-input-table[has-files])):not(:has(.previewCont)) { /* hide lots of stuff when no files are selected */
	#structureFileInputCont:not(:has(fieldset label ~ span:not(.hidden))) input[type="file"] {
		display: none;
	}
	form ~ *, #structureFileInputCont ~ * {
		display: none;
	}
}
#structureFileInputCont:has(+ file-input-table[has-files]), #structureFileInputCont:has(fieldset label ~ span:not(.hidden)) {
	input[type="file"] ~ div {
		display: none;
	}
}
#structureFileInputCont fieldset label ~ span {
	display: block;
	margin-top: 10px;
	font-weight: 500;
	
	&[id$="success"i] {
		color: var(--success-green);
	}
	&[id$="error"i] {
		color: var(--error-red);
	}
}
```

## File: src/translations/de_DE.json
```json
{
	"app_name": "HoloPrint",
	"change_language": "Sprache ändern",
	"download": "Pack herunterladen",
	"generate": "Pack generieren",
	"generate_heading": "HoloPrint Ressourcenpaket (`*.mcpack`) generieren",
	"file_input_table.count": "{COUNT} Datei[en] ausgewählt",
	"file_input_table.empty": "Keine Dateien ausgewählt",
	"file_input_table.remove_all": "Alle entfernen",
	"item_criteria_input.item_name": "Item-Name",
	"item_criteria_input.item_tag": "Tag-Name",
	"item_criteria_input.matching": "Ausgewählt:",
	"item_criteria_input.nothing": "Nichts",
	"item_criteria_input.or": " oder ", 
	"item_criteria_input.error.empty": "Gib bitte die Item-Kriterien ein",
	"item_criteria_input.error.invalid": "Ungültiger Item-/Tag-Name",
	"metadata.compression_level": "Kompressions-Level:",
	"metadata.description": "Beschreibung:",
	"metadata.description.placeholder": "Dies ist mein episches Haus!",
	"metadata.description.link_found": "Link gefunden:",
	"metadata.heading": "Metadaten",
	"metadata.pack_icon": "Ressourcenpaketsymbol (`*.png`):",
	"metadata.pack_name": "Ressourcenpaketname:",
	"metadata.pack_name.error": "Der Ressourcenpaketname darf nicht '/' enthalten",
	"metadata.reset": "Metadaten zurücksetzen!",
	"metadata.structure_author": "Strukturautor:",
	"metadata.structure_author.placeholder": "MinecraftLiebhaber123",
	"pack_generation_failed": "Pack-Generierung fehlgeschlagen!",
	"pack_generation_failed.report_github_issue": "Pack-Generierung fehlgeschlagen!<br/><small>Klicke hier, um den Fehler auf Github zu melden</small>",
	"player_controls.toggle_rendering": "Rendern ein-/ausschalten",
	"player_controls.change_opacity": "Deckkraft ändern",
	"player_controls.toggle_tint": "Farbton-Überlagerung ein-/ausschalten",
	"player_controls.toggle_validating": "Blocküberprüfung ein-/ausschalten",
	"player_controls.change_layer": "Schicht ändern",
	"player_controls.decrease_layer": "Schicht senken",
	"player_controls.change_layer_mode": "Schichtmodus ändern",
	"player_controls.move_hologram": "Hologramm bewegen",
	"player_controls.rotate_hologram": "Hologramm drehen",
	"player_controls.change_structure": "Struktur ändern",
	"player_controls.disable_player_controls": "Spielersteuerung deaktivieren",
	"player_controls.backup_hologram": "Hologrammeinstellungen speichern",
	"preview.click_to_view": "Vorschau anzeigen<br/><small>({TOTAL_BLOCK_COUNT} Blöcke)</small>",
	"preview.click_to_view_multiple": "Vorschauen anzeigen<br/><small>({TOTAL_BLOCK_COUNT} Blöcke)</small>", // "Vorschauen" is plural here
	"preview.loading": "Lade Vorschau...",
	"preview.options": "Optionen",
	"preview.options.maxPointLights": "Maximale Anzahl an Punktlichtern",
	"preview.options.shadowsEnabled": "Schatten",
	"preview.options.shadowQuality": "Schattenqualität",
	"preview.options.lightAngle": "Lichtwinkel",
	"preview.options.lightHeight": "Lichthöhe",
	"preview.options.showSkybox": "Skybox anzeigen",
	"preview.options.highRes": "Hohe Auflösung",
	"preview.options.takeScreenshot": "Screenshot",
	"preview.options.exportGlb": "Als GLB exportieren",
	"progress.generating": "Ressourcenpaket wird erstellt...",
	"reset": "Zurücksetzen",
	"resource_packs.clear_cache": "Ressourcenpaket-Cache leeren",
	"resource_packs.cache_reset": "Ressourcenpaket-Cache geleert!",
	"resource_packs.heading": "Ressourcenpakete",
	"resource_packs.reset": "Ressourcenpakete zurücksetzen!",
	"resource_packs.upload_local": "Lade ein lokales Ressourcenpaket hoch:",
	"settings.advanced": "Erweitert",
	"settings.backup_slot_count": "Backup-Slotanzahl:",
	"settings.control_item_texture_scale": "Item-Texturskalierung steuern:",
	"settings.coordinate_lock": "Koordinatenfixierung:",
	"settings.coordinate_lock.get_global_coords": "Globale Koordinaten abrufen",
	"settings.coordinate_lock.axis": "Achse:",
	"settings.coordinate_lock.adjust": "Anpassen:",
	"settings.heading": "Einstellungen",
	"settings.features": "Funktionen",
	"settings.features.spawn_animation": "Spawn-Animation:",
	"settings.features.player_controls": "Spielersteuerung:",
	"settings.features.ui_controls": "UI-Steuerung:",
	"settings.features.retexture_control_items": "Texturen der Steuerungs-Items ändern:",
	"settings.features.rename_control_items": "Steuerungs-Items umbenennen:",
	"settings.ghost_block_scale": "Ghost-Blockgröße:", 
	"settings.initial_offset": "Ursprungsversatz:",
	"settings.ignored_blocks": "Ignorierte Blöcke:",
	"settings.ignored_blocks.placeholder": "Block_1 Block_2 usw.",
	"settings.max_structure_diagram_texture_size": "Maximale Texturgröße gemäß Strukturdiagramm:",
	"settings.mini_size": "Kleine Anzeigegröße: ",
	"settings.mini_size.small": "Klein",
	"settings.mini_size.smaller": "Kleiner",
	"settings.mini_size.tiny": "Winzig",
	"settings.mini_size.hidden": "Versteckt",
	"settings.opacity": "Hologrammdeckkraft:",
	"settings.opacity_mode": "Deckkraftmodus:",
	"settings.opacity_mode.fixed_opacity": "Einzeloption",
	"settings.opacity_mode.in_game_controls": "Steuerung im Spiel",
	"settings.player_controls": "Steuerung im Spiel ([Wiki](https://holoprint-mc.github.io/wiki/hologram-controls))",
	"settings.reset": "Einstellungen zurücksetzen!",
	"settings.textures": "Texturen",
	"settings.textures.tint.color": "Farbton-Überlagerung:",
	"settings.textures.tint.opacity": "Deckkraft der Farbton-Überlagerung:",
	"settings.textures.tint.toggleable_in_game": "Farbtönung kann im Spiel ein- und ausgeschaltet werden",
	"settings.textures.outline.color": "Farbe der Texturkontur:",
	"settings.textures.outline.opacity": "Konturdeckkraft der Textur:",
	"settings.textures.outline.width": "Dicke der Texturkontur:",
	"settings.textures.outline.width.no_outline": "Keine",
	"settings.validate_air_blocks": "Luftblöcke überprüfen:",
	"terms_of_use_notice": "Durch das Generieren eines Ressourcenpakets mit HoloPrint, stimmst du den [Nutzungsbedingungen](https://github.com/SuperLlama88888/holoprint/blob/main/TERMS_OF_USE.md) zu. (Sie sind extrem kurz!)",
	"structure_files.heading": "Strukturdateien",
	"structure_files.upload": "Strukturdateien (`*.mcstructure`) hochladen",
	"structure_files.error": "Bitte lade nur `.mcstructure` Dateien hoch.",
	"extract_from_world.heading": "Aus einer Welt extrahieren",
	"extract_from_world.upload": "Weltdatei (`*.mcworld`, `*.mctemplate`, `*.zip`) hochladen",
	"extract_from_world.extracting": "Strukturen werden aus der Welt extrahiert...",
	"extract_from_world.success": "{COUNT} Struktur[en] aus der Welt extrahiert!",
	"extract_from_world.error": "Keine gespeicherten Strukturen gefunden!",
	"extract_from_world.world_error": "Ungültige Weltdatei! {ERROR}",
	"update_pack.heading": "Ressourcenpaket aktualisieren",
	"update_pack.upload": "Altes Structura-/HoloPrint-Ressourcenpaket (`*.mcpack`) aktualisieren",
	"update_pack.extracting": "Extrahiere Strukturdateien...",
	"update_pack.success": "Erfolgreich alte Strukturdateien gefunden!",
	"update_pack.error": "Das Ressourcenpaket ist kein Structura-/HoloPrint-Paket! <small>(Keine Strukturdateien wurden gefunden.)</small>",
	"upload.button": "Datei hochladen",
	"upload.button.world": "Weltdatei hochladen",
	"upload.button.old_pack": "Altes Ressourcenpaket hochladen",
	"upload.button.drop_notice": "Oder lege Datei hier ab",
	"upload.drop_file": "Lege deine Dateien hier ab",
	"upload.error.wrong_file_type": "Bitte nur {FILE_TYPE} Dateien hochladen."
}
```

## File: src/translations/en_US.json
```json
{
	"app_name": "HoloPrint",
	"change_language": "Change language",
	"download": "Download pack",
	"generate": "Generate pack",
	"generate_heading": "Generate HoloPrint resource pack (`*.mcpack`)",
	"file_input_table.count": "{COUNT} file[s] selected",
	"file_input_table.empty": "No files are selected",
	"file_input_table.remove_all": "Remove all",
	"item_criteria_input.item_name": "Item name",
	"item_criteria_input.item_tag": "Item tag",
	"item_criteria_input.matching": "Matching:",
	"item_criteria_input.nothing": "Nothing",
	"item_criteria_input.or": " or ",
	"item_criteria_input.error.empty": "Please enter item criteria",
	"item_criteria_input.error.invalid": "Invalid item/tag name",
	"metadata.compression_level": "Compression level:",
	"metadata.description": "Description:",
	"metadata.description.placeholder": "This is my epic house!",
	"metadata.description.link_found": "Link found:",
	"metadata.heading": "Metadata",
	"metadata.pack_icon": "Pack icon (`*.png`):",
	"metadata.pack_name": "Pack name:",
	"metadata.pack_name.error": "Pack name cannot contain '/'",
	"metadata.reset": "Metadata reset!",
	"metadata.structure_author": "Structure author:",
	"metadata.structure_author.placeholder": "MinecraftLover123",
	"pack_generation_failed": "Pack generation failed!",
	"pack_generation_failed.report_github_issue": "Pack generation failed!<br/><small>Click to report issue on GitHub</small>",
	"player_controls.toggle_rendering": "Toggle rendering",
	"player_controls.change_opacity": "Change opacity",
	"player_controls.toggle_tint": "Toggle overlay tint",
	"player_controls.toggle_validating": "Toggle validating",
	"player_controls.change_layer": "Change layer",
	"player_controls.decrease_layer": "Decrease layer",
	"player_controls.change_layer_mode": "Change layer mode",
	"player_controls.move_hologram": "Move hologram",
	"player_controls.rotate_hologram": "Rotate hologram",
	"player_controls.change_structure": "Change structure",
	"player_controls.disable_player_controls": "Disable player controls",
	"player_controls.backup_hologram": "Save hologram settings",
	"preview.click_to_view": "View preview<br/><small>({TOTAL_BLOCK_COUNT} blocks)</small>",
	"preview.click_to_view_multiple": "View previews<br/><small>({TOTAL_BLOCK_COUNT} blocks)</small>", // "previews" is plural here
	"preview.loading": "Loading preview...",
	"preview.options": "Options",
	"preview.options.maxPointLights": "Max point lights",
	"preview.options.shadowsEnabled": "Shadows",
	"preview.options.shadowQuality": "Shadow quality",
	"preview.options.lightAngle": "Light angle",
	"preview.options.lightHeight": "Light height",
	"preview.options.showSkybox": "Show skybox",
	"preview.options.highRes": "High resolution",
	"preview.options.takeScreenshot": "Screenshot",
	"preview.options.exportGlb": "Export as GLB",
	"progress.generating": "Making pack...",
	"reset": "Reset",
	"resource_packs.clear_cache": "Clear resource pack cache",
	"resource_packs.cache_reset": "Resource pack cache cleared!",
	"resource_packs.heading": "Resource packs",
	"resource_packs.reset": "Resource packs reset!",
	"resource_packs.upload_local": "Upload a local resource pack:",
	"settings.advanced": "Advanced",
	"settings.backup_slot_count": "Backup slot count:",
	"settings.control_item_texture_scale": "Control item texture scale:",
	"settings.coordinate_lock": "Coordinate lock:",
	"settings.coordinate_lock.get_global_coords": "Get global coordinates",
	"settings.coordinate_lock.axis": "Axis:",
	"settings.coordinate_lock.adjust": "Adjust:",
	"settings.heading": "Settings",
	"settings.features": "Features",
	"settings.features.spawn_animation": "Spawn animation:",
	"settings.features.player_controls": "Player controls:",
	"settings.features.ui_controls": "UI controls:",
	"settings.features.retexture_control_items": "Retexture control items:",
	"settings.features.rename_control_items": "Rename control items:",
	"settings.ghost_block_scale": "Ghost block scale:",
	"settings.initial_offset": "Initial offset:",
	"settings.ignored_blocks": "Ignored blocks:",
	"settings.ignored_blocks.placeholder": "block_1 block_2 etc.",
	"settings.max_structure_diagram_texture_size": "Max structure diagram texture size:",
	"settings.mini_size": "Mini display size: ",
	"settings.mini_size.small": "Small",
	"settings.mini_size.smaller": "Smaller",
	"settings.mini_size.tiny": "Tiny",
	"settings.mini_size.hidden": "Hidden",
	"settings.opacity": "Hologram opacity:",
	"settings.opacity_mode": "Opacity mode:",
	"settings.opacity_mode.fixed_opacity": "Single option",
	"settings.opacity_mode.in_game_controls": "In-game controls",
	"settings.player_controls": "In-game controls ([Wiki](https://holoprint-mc.github.io/wiki/hologram-controls))",
	"settings.reset": "Settings reset!",
	"settings.textures": "Textures",
	"settings.textures.tint.color": "Overlay tint:",
	"settings.textures.tint.opacity": "Overlay tint opacity:",
	"settings.textures.tint.toggleable_in_game": "Tint can be turned on/off in-game",
	"settings.textures.outline.color": "Texture outline color:",
	"settings.textures.outline.opacity": "Texture outline opacity:",
	"settings.textures.outline.width": "Texture outline width:",
	"settings.textures.outline.width.no_outline": "None",
	"settings.validate_air_blocks": "Validate air blocks:",
	"terms_of_use_notice": "By generating a pack with HoloPrint, you agree to the [Terms of Use](https://github.com/SuperLlama88888/holoprint/blob/main/TERMS_OF_USE.md). (It's really short!)",
	"structure_files.heading": "Structure files",
	"structure_files.upload": "Upload structure files (`*.mcstructure`)",
	"structure_files.error": "Please upload only `.mcstructure` files.",
	"extract_from_world.heading": "Extract from world",
	"extract_from_world.upload": "Upload world file (`*.mcworld`, `*.mctemplate`, `*.zip`)",
	"extract_from_world.extracting": "Extracting structures from world...",
	"extract_from_world.success": "Successfully extracted {COUNT} structure[s]!",
	"extract_from_world.error": "No saved structures found!",
	"extract_from_world.world_error": "Invalid world file! {ERROR}",
	"update_pack.heading": "Update pack",
	"update_pack.upload": "Upload old Structura/HoloPrint pack (`*.mcpack`)",
	"update_pack.extracting": "Extracting structure files...",
	"update_pack.success": "Successfully found old structure files!",
	"update_pack.error": "Pack is not a Structura/HoloPrint pack! <small>(No structure files were found.)</small>",
	"upload.button": "Upload a file",
	"upload.button.world": "Upload a world file",
	"upload.button.old_pack": "Upload an old pack",
	"upload.button.drop_notice": "Or drop files here",
	"upload.drop_file": "Drop your files here",
	"upload.error.wrong_file_type": "Please upload only {FILE_TYPE} files."
}
```

## File: src/translations/es_ES.json
```json
{
	"app_name": "HoloPrint",
	"change_language": "Cambiar idioma",
	"download": "Descargar pack",
	"generate": "Generar pack",
	"generate_heading": "Generar pack de recursos de HoloPrint (`*.mcpack`)",
	"file_input_table.count": "{COUNT} archivo[s] seleccionado[s]",
	"file_input_table.empty": "Archivos no seleccionados",
	"file_input_table.remove_all": "Eliminar todo",
	"item_criteria_input.item_name": "Nombre del item",
	"item_criteria_input.item_tag": "Etiqueta del item",
	"item_criteria_input.matching": "Coincidencias:",
	"item_criteria_input.nothing": "Nada",
	"item_criteria_input.or": " o ",
	"item_criteria_input.error.empty": "Por favor ingresar criterios del item",
	"item_criteria_input.error.invalid": "Nombre de item/etiqueta inválido",
	"metadata.compression_level": "Nivel de compresión:",
	"metadata.description": "Descripción:",
	"metadata.description.placeholder": "¡Esta es mi casa épica!",
	"metadata.description.link_found": "Enlace encontrado:",
	"metadata.heading": "Metadatos",
	"metadata.pack_icon": "Icono del pack (`*.png`):",
	"metadata.pack_name": "Nombre del pack:",
	"metadata.pack_name.error": "El nombre del pack no puede contener '/'",
	"metadata.reset": "¡Reiniciar metadatos!",
	"metadata.structure_author": "Autor de la estructura:",
	"metadata.structure_author.placeholder": "MinecraftLover123",
	"pack_generation_failed": "Falló la generación del pack!",
	"pack_generation_failed.report_github_issue": "Falló la generación del pack!<br/><small>Toca para reportar el problema en GitHub</small>",
	"player_controls.toggle_rendering": "Cambiar renderización",
	"player_controls.change_opacity": "Cambiar opacidad",
	"player_controls.toggle_tint": "Cambiar el tinte de la superposición",
	"player_controls.toggle_validating": "Cambiar validación",
	"player_controls.change_layer": "Cambiar capa",
	"player_controls.decrease_layer": "reducir capa",
	"player_controls.change_layer_mode": "Cambiar modo de capa",
	"player_controls.move_hologram": "Mover holograma",
	"player_controls.rotate_hologram": "Rotar holograma",
	"player_controls.change_structure": "Cambiar estructura",
	"player_controls.disable_player_controls": "Desactivar controles del jugador",
	"player_controls.backup_hologram": "Guardar configuraciones de holograma",
	"preview.click_to_view": "Ver vista previa<br/><small>({TOTAL_BLOCK_COUNT} bloques)</small>",
	"preview.click_to_view_multiple": "Ver vistas previas<br/><small>({TOTAL_BLOCK_COUNT} bloques)</small>", // "previews" is plural here
	"preview.loading": "Cargando vista previa...",
	"preview.options": "Opciones",
	"preview.options.maxPointLights": "Puntos máximos de luz",
	"preview.options.shadowsEnabled": "Sombras",
	"preview.options.shadowQuality": "Calidad de las sombras",
	"preview.options.lightAngle": "Ángulo de luz",
	"preview.options.lightHeight": "Altura de luz",
	"preview.options.showSkybox": "Mostrar skybox",
	"preview.options.highRes": "Alta resolución",
	"preview.options.takeScreenshot": "Captura de pantalla",
	"preview.options.exportGlb": "Exportar como GLB",
	"progress.generating": "Generando pack...",
	"reset": "Reiniciar",
	"resource_packs.clear_cache": "Limpiar caché del pack de recursos",
	"resource_packs.cache_reset": "Caché del pack de recursos limpiado!",
	"resource_packs.heading": "Packs de Recursos",
	"resource_packs.reset": "¡Packs de Recursos reiniciados!",
	"resource_packs.upload_local": "Pack de recursos local subido: ",
	"settings.advanced": "Avanzado",
	"settings.backup_slot_count": "Número de ranuras de reserva:",
	"settings.control_item_texture_scale": "Controlar la escala de textura del item:",
	"settings.coordinate_lock": "Bloquear coordenadas:",
	"settings.coordinate_lock.get_global_coords": "Obtener coordenadas globales",
	"settings.coordinate_lock.axis": "Eje:",
	"settings.coordinate_lock.adjust": "Ajustar:",
	"settings.heading": "Ajustes",
	"settings.features": "Características",
	"settings.features.spawn_animation": "animación de aparición:",
	"settings.features.player_controls": "Controles del jugador:",
	"settings.features.ui_controls": "Controles de la IU:",
	"settings.features.retexture_control_items": "Retexturar control de items:",
	"settings.features.rename_control_items": "Renombrar control de items:",
	"settings.ghost_block_scale": "Escala del bloque fantasma:",
	"settings.initial_offset": "Desplazamiento inicial:",
	"settings.ignored_blocks": "Bloques ignorados:",
	"settings.ignored_blocks.placeholder": "block_1 block_2 etc.",
	"settings.max_structure_diagram_texture_size": "Tamaño máximo de la textura del diagrama de la estructura:",
	"settings.mini_size": "Tamaño de pantalla pequeña: ",
	"settings.mini_size.small": "Pequeño",
	"settings.mini_size.smaller": "Más pequeño",
	"settings.mini_size.tiny": "Diminuto",
	"settings.mini_size.hidden": "Oculto",
	"settings.opacity": "Opacidad del holograma:",
	"settings.opacity_mode": "Modo de opacidad:",
	"settings.opacity_mode.fixed_opacity": "Opción única",
	"settings.opacity_mode.in_game_controls": "Controles en el juego",
	"settings.player_controls": "Controles en el juego ([Wiki](https://holoprint-mc.github.io/wiki/hologram-controls))",
	"settings.reset": "¡Reiniciar ajustes!",
	"settings.textures": "Texturas",
	"settings.textures.tint.color": "Tinte de superposición:",
	"settings.textures.tint.opacity": "Opacidad del tinte de superposición:",
	"settings.textures.tint.toggleable_in_game": "El tinte puede activarse/desactivarse en el juego",
	"settings.textures.outline.color": "Color del contorno de la textura:",
	"settings.textures.outline.opacity": "Opacidad del contorno de la textura:",
	"settings.textures.outline.width": "Ancho del contorno de la textura:",
	"settings.textures.outline.width.no_outline": "Ninguno",
	"settings.validate_air_blocks": "bloques de aire válidos:",
	"terms_of_use_notice": "Al generar un pack con HoloPrint estás de acuerdo con los [TÉRMINOS DE USO](https://github.com/SuperLlama88888/holoprint/blob/main/TERMS_OF_USE.md). (realmente son cortos!)",
	"structure_files.heading": "Archivos de estructuras",
	"structure_files.upload": "Subir archivos de estructuras (`*.mcstructure`)",
	"structure_files.error": "Por favor solo suba archivos de estructuras. `.mcstructure`",
	"extract_from_world.heading": "Extraer del mundo",
	"extract_from_world.upload": "Subir archivo de mundo (`*.mcworld`, `*.mctemplate`, `*.zip`)",
	"extract_from_world.extracting": "Extrayendo estructuras del mundo...",
	"extract_from_world.success": "¡{COUNT} estructura[s] extraída[s] exitosamente!",
	"extract_from_world.error": "¡No se encontraron estructuras guardadas!",
	"extract_from_world.world_error": "¡Archivo de mundo inválido! {ERROR}",
	"update_pack.heading": "Actualizar pack",
	"update_pack.upload": "Subir pack de Structura/HoloPrint antiguo (`*.mcpack`)",
	"update_pack.extracting": "Extrayendo archivos de estructuras...",
	"update_pack.success": "¡Archivos de estructuras antiguas encontrados exitosamente!",
	"update_pack.error": "El pack no es de Structura/HoloPrint! <small>(No se encontraron archivos de estructuras.)</small>",
	"upload.button": "Subir un archivo",
	"upload.button.world": "Subir un archivo de mundo",
	"upload.button.old_pack": "Subir un pack antiguo",
	"upload.button.drop_notice": "O lanza archivos aquí",
	"upload.drop_file": "Lanza tus archivos aquí",
	"upload.error.wrong_file_type": "Por favor solo sube archivos: {FILE_TYPE}"
}
```

## File: src/translations/es_MX.json
```json
{
	"app_name": "HoloPrint",
	"change_language": "Cambiar idioma",
	"download": "Descargar pack",
	"generate": "Generar pack",
	"generate_heading": "Generar pack de recursos de HoloPrint (`*.mcpack`)",
	"file_input_table.count": "{COUNT} archivo[s] seleccionado[s]",
	"file_input_table.empty": "Archivos no seleccionados",
	"file_input_table.remove_all": "Eliminar todo",
	"item_criteria_input.item_name": "Nombre del item",
	"item_criteria_input.item_tag": "Etiqueta del item",
	"item_criteria_input.matching": "Coincidencias:",
	"item_criteria_input.nothing": "Nada",
	"item_criteria_input.or": " o ",
	"item_criteria_input.error.empty": "Por favor ingresar criterios del item",
	"item_criteria_input.error.invalid": "Nombre de item/etiqueta inválido",
	"metadata.compression_level": "Nivel de compresión:",
	"metadata.description": "Descripción:",
	"metadata.description.placeholder": "¡Esta es mi casa épica!",
	"metadata.description.link_found": "Enlace encontrado:",
	"metadata.heading": "Metadatos",
	"metadata.pack_icon": "Icono del pack (`*.png`):",
	"metadata.pack_name": "Nombre del pack:",
	"metadata.pack_name.error": "El nombre del pack no puede contener '/'",
	"metadata.reset": "¡Reiniciar metadatos!",
	"metadata.structure_author": "Autor de la estructura:",
	"metadata.structure_author.placeholder": "MinecraftLover123",
	"pack_generation_failed": "Falló la generación del pack!",
	"pack_generation_failed.report_github_issue": "Falló la generación del pack!<br/><small>Toca para reportar el problema en GitHub</small>",
	"player_controls.toggle_rendering": "Cambiar renderización",
	"player_controls.change_opacity": "Cambiar opacidad",
	"player_controls.toggle_tint": "Cambiar el tinte de la superposición",
	"player_controls.toggle_validating": "Cambiar validación",
	"player_controls.change_layer": "Cambiar capa",
	"player_controls.decrease_layer": "reducir capa",
	"player_controls.change_layer_mode": "Cambiar modo de capa",
	"player_controls.move_hologram": "Mover holograma",
	"player_controls.rotate_hologram": "Rotar holograma",
	"player_controls.change_structure": "Cambiar estructura",
	"player_controls.disable_player_controls": "Desactivar controles del jugador",
	"player_controls.backup_hologram": "Guardar configuraciones de holograma",
	"preview.click_to_view": "Ver vista previa<br/><small>({TOTAL_BLOCK_COUNT} bloques)</small>",
	"preview.click_to_view_multiple": "Ver vistas previas<br/><small>({TOTAL_BLOCK_COUNT} bloques)</small>", // "previews" is plural here
	"preview.loading": "Cargando vista previa...",
	"preview.options": "Opciones",
	"preview.options.maxPointLights": "Puntos máximos de luz",
	"preview.options.shadowsEnabled": "Sombras",
	"preview.options.shadowQuality": "Calidad de las sombras",
	"preview.options.lightAngle": "Ángulo de luz",
	"preview.options.lightHeight": "Altura de luz",
	"preview.options.showSkybox": "Mostrar skybox",
	"preview.options.highRes": "Alta resolución",
	"preview.options.takeScreenshot": "Captura de pantalla",
	"preview.options.exportGlb": "Exportar como GLB",
	"progress.generating": "Generando pack...",
	"reset": "Reiniciar",
	"resource_packs.clear_cache": "Limpiar caché del pack de recursos",
	"resource_packs.cache_reset": "Caché del pack de recursos limpiado!",
	"resource_packs.heading": "Packs de Recursos",
	"resource_packs.reset": "¡Packs de Recursos reiniciados!",
	"resource_packs.upload_local": "Pack de recursos local subido: ",
	"settings.advanced": "Avanzado",
	"settings.backup_slot_count": "Número de ranuras de reserva:",
	"settings.control_item_texture_scale": "Controlar la escala de textura del item:",
	"settings.coordinate_lock": "Bloquear coordenadas:",
	"settings.coordinate_lock.get_global_coords": "Obtener coordenadas globales",
	"settings.coordinate_lock.axis": "Eje:",
	"settings.coordinate_lock.adjust": "Ajustar:",
	"settings.heading": "Ajustes",
	"settings.features": "Características",
	"settings.features.spawn_animation": "animación de aparición:",
	"settings.features.player_controls": "Controles del jugador:",
	"settings.features.ui_controls": "Controles de la IU:",
	"settings.features.retexture_control_items": "Retexturar control de items:",
	"settings.features.rename_control_items": "Renombrar control de items:",
	"settings.ghost_block_scale": "Escala del bloque fantasma:",
	"settings.initial_offset": "Desplazamiento inicial:",
	"settings.ignored_blocks": "Bloques ignorados:",
	"settings.ignored_blocks.placeholder": "block_1 block_2 etc.",
	"settings.max_structure_diagram_texture_size": "Tamaño máximo de la textura del diagrama de la estructura:",
	"settings.mini_size": "Tamaño de pantalla pequeña: ",
	"settings.mini_size.small": "Pequeño",
	"settings.mini_size.smaller": "Más pequeño",
	"settings.mini_size.tiny": "Diminuto",
	"settings.mini_size.hidden": "Oculto",
	"settings.opacity": "Opacidad del holograma:",
	"settings.opacity_mode": "Modo de opacidad:",
	"settings.opacity_mode.fixed_opacity": "Opción única",
	"settings.opacity_mode.in_game_controls": "Controles en el juego",
	"settings.player_controls": "Controles en el juego ([Wiki](https://holoprint-mc.github.io/wiki/hologram-controls))",
	"settings.reset": "¡Reiniciar ajustes!",
	"settings.textures": "Texturas",
	"settings.textures.tint.color": "Tinte de superposición:",
	"settings.textures.tint.opacity": "Opacidad del tinte de superposición:",
	"settings.textures.tint.toggleable_in_game": "El tinte puede activarse/desactivarse en el juego",
	"settings.textures.outline.color": "Color del contorno de la textura:",
	"settings.textures.outline.opacity": "Opacidad del contorno de la textura:",
	"settings.textures.outline.width": "Ancho del contorno de la textura:",
	"settings.textures.outline.width.no_outline": "Ninguno",
	"settings.validate_air_blocks": "bloques de aire válidos:",
	"terms_of_use_notice": "Al generar un pack con HoloPrint estás de acuerdo con los [TÉRMINOS DE USO](https://github.com/SuperLlama88888/holoprint/blob/main/TERMS_OF_USE.md). (realmente son cortos!)",
	"structure_files.heading": "Archivos de estructuras",
	"structure_files.upload": "Subir archivos de estructuras (`*.mcstructure`)",
	"structure_files.error": "Por favor solo suba archivos de estructuras. `.mcstructure`",
	"extract_from_world.heading": "Extraer del mundo",
	"extract_from_world.upload": "Subir archivo de mundo (`*.mcworld`, `*.mctemplate`, `*.zip`)",
	"extract_from_world.extracting": "Extrayendo estructuras del mundo...",
	"extract_from_world.success": "¡{COUNT} estructura[s] extraída[s] exitosamente!",
	"extract_from_world.error": "¡No se encontraron estructuras guardadas!",
	"extract_from_world.world_error": "¡Archivo de mundo inválido! {ERROR}",
	"update_pack.heading": "Actualizar pack",
	"update_pack.upload": "Subir pack de Structura/HoloPrint antiguo (`*.mcpack`)",
	"update_pack.extracting": "Extrayendo archivos de estructuras...",
	"update_pack.success": "¡Archivos de estructuras antiguas encontrados exitosamente!",
	"update_pack.error": "El pack no es de Structura/HoloPrint! <small>(No se encontraron archivos de estructuras.)</small>",
	"upload.button": "Subir un archivo",
	"upload.button.world": "Subir un archivo de mundo",
	"upload.button.old_pack": "Subir un pack antiguo",
	"upload.button.drop_notice": "O lanza archivos aquí",
	"upload.drop_file": "Lanza tus archivos aquí",
	"upload.error.wrong_file_type": "Por favor solo sube archivos: {FILE_TYPE}"
}
```

## File: src/translations/languages.json
```json
{
	"en_US": "English",
	"zh_CN": "简体中文",
	"es_MX": "Español (México)",
	"es_ES": "Español (España)",
	"de_DE": "Deutsch"
}
```

## File: src/translations/zh_CN.json
```json
{
  "app_name": "结构投影",
  "change_language": "切换语言",
  "download": "下载资源包",
  "generate": "生成资源包",
  "generate_heading": "生成结构投影资源包 (`*.mcpack`)",
  "file_input_table.count": "{COUNT} file[s] 已选中",
  "file_input_table.empty": "无选中的文件",
  "file_input_table.remove_all": "全部移除",
  "item_criteria_input.item_name": "物品名称",
  "item_criteria_input.item_tag": "物品标签",
  "item_criteria_input.matching": "匹配:",
  "item_criteria_input.nothing": "无",
  "item_criteria_input.or": " 或者 ",
  "item_criteria_input.error.empty": "请选择物品分类方式",
  "item_criteria_input.error.invalid": "无效的物品名",
  "metadata.compression_level": "压缩率:",
  "metadata.description": "描述:",
  "metadata.description.placeholder": "这是我雄伟的建筑！",
  "metadata.description.link_found": "发现链接:",
  "metadata.heading": "元数据",
  "metadata.pack_icon": "资源包图标 (`*.png`):",
  "metadata.pack_name": "资源包名称:",
  "metadata.pack_name.error": "资源包名称不能包含 '/'",
  "metadata.reset": "重置元数据!",
  "metadata.structure_author": "结构设计师:",
  "metadata.structure_author.placeholder": "我的世界爱好者123",
  "pack_generation_failed": "资源包生成失败!",
  "pack_generation_failed.report_github_issue": "资源包生成失败！<br/><small>点击将问题报告至GitHub</small>",
  "player_controls.toggle_rendering": "切换渲染",
  "player_controls.change_opacity": "调整不透明度",
  "player_controls.toggle_tint": "改变叠加色",
  "player_controls.toggle_validating": "开启/关闭结构验证",
  "player_controls.change_layer": "更改图层",
  "player_controls.decrease_layer": "减少图层",
  "player_controls.change_layer_mode": "图层切换模式",
  "player_controls.move_hologram": "移动全息投影",
  "player_controls.rotate_hologram": "旋转全息投影",
  "player_controls.change_structure": "切换结构",
  "player_controls.disable_player_controls": "禁用玩家控制",
  "player_controls.backup_hologram": "保存投影设置",
  "preview.click_to_view": "预览结构<br/><small>({TOTAL_BLOCK_COUNT} 个方块)</small>",
  "preview.click_to_view_multiple": "预览结构<br/><small>({TOTAL_BLOCK_COUNT} 个方块)</small>", // "previews" is plural here
  "preview.loading": "结构加载中...",
  "preview.options": "设置",
  "preview.options.maxPointLights": "最大点光源",
  "preview.options.shadowsEnabled": "阴影",
  "preview.options.shadowQuality": "阴影质量",
  "preview.options.lightAngle": "光源角度",
  "preview.options.lightHeight": "光源高度",
  "preview.options.showSkybox": "显示天空盒",
  "preview.options.highRes": "高清预览",
  "preview.options.takeScreenshot": "截图",
  "preview.options.exportGlb": "导出为GLB格式模型",
  "progress.generating": "正在制作资源包...",
  "reset": "重置",
  "resource_packs.clear_cache": "清理所有资源包缓存",
  "resource_packs.cache_reset": "资源包缓存已清理!",
  "resource_packs.heading": "资源包",
  "resource_packs.reset": "资源包已重置!",
  "resource_packs.upload_local": "上传本地资源包:",
  "settings.advanced": "高级",
  "settings.backup_slot_count": "备份槽位数量:",
  "settings.control_item_texture_scale": "纹理缩放:",
  "settings.coordinate_lock": "锁定坐标:",
  "settings.coordinate_lock.get_global_coords": "获取世界坐标",
  "settings.coordinate_lock.axis": "轴心:",
  "settings.coordinate_lock.adjust": "调整:",
  "settings.heading": "设置",
  "settings.features": "功能",
  "settings.features.spawn_animation": "生成动画:",
  "settings.features.player_controls": "玩家控制:",
  "settings.features.ui_controls": "UI 控制:",
  "settings.features.retexture_control_items": "控件贴图设置:",
  "settings.features.rename_control_items": "重命名控件:",
  "settings.ghost_block_scale": "方块缩放比例:",
  "settings.initial_offset": "起始偏移:",
  "settings.ignored_blocks": "忽略的方块:",
  "settings.ignored_blocks.placeholder": "方块_1 方块_2 以此类推",
  "settings.max_structure_diagram_texture_size": "Max structure diagram texture size:",
  "settings.mini_size": "小窗尺寸: ",
  "settings.mini_size.small": "小",
  "settings.mini_size.smaller": "更小",
  "settings.mini_size.tiny": "极小",
  "settings.mini_size.hidden": "隐藏",
  "settings.opacity": "不透明度:",
  "settings.opacity_mode": "不透明度模式:",
  "settings.opacity_mode.fixed_opacity": "单选",
  "settings.opacity_mode.in_game_controls": "游戏内控制",
  "settings.player_controls": "游戏内控制 ([维基](https://holoprint-mc.github.io/wiki/hologram-controls))",
  "settings.reset": "恢复默认!",
  "settings.textures": "材质",
  "settings.textures.tint.color": "叠加色调:",
  "settings.textures.tint.opacity": "叠加色不透明度:",
  "settings.textures.tint.toggleable_in_game": "游戏内可开启/关闭阴影",
  "settings.textures.outline.color": "纹理轮廓颜色:",
  "settings.textures.outline.opacity": "纹理轮廓不透明度:",
  "settings.textures.outline.width": "纹理轮廓线宽:",
  "settings.textures.outline.width.no_outline": "无",
  "settings.validate_air_blocks": "Validate air blocks:",
  "terms_of_use_notice": "生成资源包即代表你已同意服务条款。(https://github.com/SuperLlama88888/holoprint/blob/main/TERMS_OF_USE.md)（真的很短！）",
  "structure_files.heading": "结构文件",
  "structure_files.upload": "上传结构文件 (`*.mcstructure`)",
  "structure_files.error": "仅支持上传.mcstructure文件.",
  "extract_from_world.heading": "从世界导出",
  "extract_from_world.upload": "上传文件 (`*.mcworld`, `*.zip`)",
  "extract_from_world.extracting": "正在从世界中提取结构...",
  "extract_from_world.success": "成功提取了 {COUNT} 个结构!",
  "extract_from_world.error": "未找到已保存的结构!",
  "extract_from_world.world_error": "无效的.mcworld文件! {ERROR}",
  "update_pack.heading": "更新资源包",
  "update_pack.upload": "请上传旧资源包 (`*.mcpack`)",
  "update_pack.extracting": "正在提取结构文件...",
  "update_pack.success": "成功找到旧结构!",
  "update_pack.error": "不是一个有效的结构投影文件! <small>(未发现结构)</small>",
  "upload.button": "上传文件",
  "upload.button.world": "上传世界文件",
  "upload.button.old_pack": "上传旧资源包",
  "upload.button.drop_notice": "或拖文件到此处",
  "upload.drop_file": "将文件拖到这里",
  "upload.error.wrong_file_type": "请上传 {FILE_TYPE} 文件."
}
```

## File: src/utils/arrays.js
```javascript
import { tuple } from "./meta.js";

export function arrayMin(arr) {
	let min = Infinity;
	for(let i = 0; i < arr.length; i++) {
		min = min < arr[i]? min : arr[i];
	}
	return min;
}
/**
 * @template T
 * @param {T[]} arr1
 * @param {T[]} arr2
 * @param {(a: T, b: T) => boolean} [equalityPredicate]
 */
export function areArraysEqual(arr1, arr2, equalityPredicate = (a, b) => a === b) {
	return arr1.length == arr2.length && Array.from(arr1).every((x, i) => equalityPredicate(x, arr2[i]));
}
export function random(arr) {
	return arr[~~(Math.random() * arr.length)];
}
/**
 * Removes empty slots from a potentially sparse array.
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export function desparseArray(arr) {
	return arr.filter(() => true);
}
/**
 * Makes nulls empty slots in an array.
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export function makeNullsEmpty(arr) {
	let res = new Array(arr.length);
	arr.forEach((item, i) => {
		if(item !== null) {
			res[i] = item;
		}
	});
	return res;
}
/**
 * Removes "falsy" elements from an array.
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export function removeFalsies(arr) {
	return arr.filter(el => el);
}
/**
 * Groups an array into two arrays based on a condition function.
 * @template T
 * @param {T[]} arr
 * @param {(item: T) => boolean} conditionFunc
 * @returns {[T[], T[]]}
 */
export function conditionallyGroup(arr, conditionFunc) {
	let res = tuple([[], []]);
	arr.forEach(el => {
		res[+conditionFunc(el)].push(el);
	});
	return res;
}
/**
 * Separates array items based on the result of a grouping function.
 * @template T
 * @param {T[]} items
 * @param {(item: T) => string} groupFunc
 * @returns {Record<string, T[]>}
 */
export function groupBy(items, groupFunc) { // native Object.groupBy is only 89.47% on caniuse...
	/** @type {Record<string, T[]>} */
	let res = {};
	items.forEach(item => {
		let group = groupFunc(item);
		res[group] ??= [];
		res[group].push(item);
	});
	return res;
}

/**
 * Create a pseudo-enumeration using numbers.
 * @template {string[]} T
 * @param {[...T]} keys - An array of string literals to use as keys.
 * @returns {Readonly<{ [K in keyof T as (K extends `${number}`? T[K] : never)]: K extends `${infer N extends number}`? N : never }>}
 */
export function createNumericEnum(keys) {
	// @ts-expect-error
	return Object.freeze(Object.fromEntries(keys.map((key, i) => [key, i])));
}
/**
 * Creates an enumeration using Symbols.
 * @template {string} T
 * @param {T[]} keys
 * @returns {Readonly<Record<T, symbol>>}
 */
export function createSymbolicEnum(keys) {
	return Object.freeze(Object.fromEntries(keys.map(key => [key, Symbol(key)])));
}
/**
 * Creates a pseudo-enumeration using strings.
 * @template {string} T
 * @param {T[]} keys
 * @returns {Readonly<Record<T, string>>}
 */
export function createStringEnum(keys) {
	return Object.freeze(Object.fromEntries(keys.map((key, i) => {
		let n = i + 1;
		let value = "";
		while(n) {
			value = String.fromCharCode((n - 1) % 26 + 97) + value;
			n = ~~((n - 1) / 26);
		}
		return [key, value];
	})));
}
```

## File: src/utils/containers.js
```javascript
import { ceil, floor, sum } from "./math.js";
import { doNothing, tuple } from "./meta.js";

function stringifyJsonBigIntSafe(value) {
	return JSON.stringify(value, (_, x) => typeof x == "bigint"? (JSON.rawJSON ?? doNothing)(x.toString()) : x); // JSON.rawJSON offers the perfect solution but is very modern, so stringifying them is the next best option
}

/**
 * @template A
 * @template B
 */
export class CoupleSet {
	/** @readonly @type {[A, B][]} */
	#values = [];
	/** @readonly @type {Map<A, Map<B, number>>} */
	#val0s = new Map();
	/**
	 * Adds a value and returns the index of it in the set.
	 * @param {[A, B]} value
	 * @returns {number}
	 */
	add(value) {
		let val1s = this.#val0s.get(value[0]);
		if(!val1s) {
			val1s = new Map();
			this.#val0s.set(value[0], val1s);
		}
		if(val1s.has(value[1])) {
			return val1s.get(value[1]);
		}
		val1s.set(value[1], this.#values.length);
		this.#values.push(value);
		return this.#values.length - 1;
	}
	get values() {
		return this.#values;
	}
}
/**
 * @template A
 * @template B
 * @template C
 */
export class TripleSet {
	/** @readonly @type {[A, B, C][]} */
	#values = [];
	/** @readonly @type {Map<A, Map<B, Map<C, number>>>} */
	#val0s = new Map();
	/**
	 * Adds a value and returns the index of it in the set.
	 * @param {[A, B, C]} value
	 * @returns {number}
	 */
	add(value) {
		let val1s = this.#val0s.get(value[0]);
		if(!val1s) {
			val1s = new Map();
			this.#val0s.set(value[0], val1s);
		}
		let val2s = val1s.get(value[1]);
		if(!val2s) {
			val2s = new Map();
			val1s.set(value[1], val2s);
		}
		if(val2s.has(value[2])) {
			return val2s.get(value[2]);
		}
		val2s.set(value[2], this.#values.length);
		this.#values.push(value);
		return this.#values.length - 1;
	}
	get values() {
		return this.#values;
	}
}

/** @template T */
export class JSONSet {
	/** @readonly @type {(value: T) => string} */
	stringify = stringifyJsonBigIntSafe;
	/** @readonly @type {Set<string>} */
	#set = new Set();
	/** @readonly @type {Map<string, number>} */
	#indices = new Map();
	/** @type {T[]} */
	#actualValues = [];
	/** @param {T[]} [values] */
	constructor(values) {
		values?.forEach(value => this.add(value));
	}
	/**
	 * Not part of regular sets! Constant time indexing.
	 * @param {T} value
	 */
	indexOf(value) {
		return this.#indices.get(this.stringify(value));
	}
	/** @param {T} value */
	add(value) {
		let stringifiedValue = this.stringify(value);
		if(!this.#indices.has(stringifiedValue)) {
			this.#indices.set(stringifiedValue, this.size);
			this.#actualValues.push(structuredClone(value));
		}
		return this.#set.add(stringifiedValue);
	}
	/** @param {T} value */
	has(value) {
		return this.#set.has(this.stringify(value));
	}
	clear() {
		this.#indices.clear();
		this.#actualValues = [];
		this.#set.clear();
	}
	[Symbol.iterator]() {
		return this.#actualValues.values();
	}
	*entries() {
		for(let value of this.#actualValues) {
			yield tuple([value, value]);
		}
	}
	keys() {
		return this[Symbol.iterator]();
	}
	values() {
		return this[Symbol.iterator]();
	}
	get size() {
		return this.#set.size;
	}
}
/**
 * @template K
 * @template V
 */
export class JSONMap { // very barebones
	/** @readonly @type {(key: K) => string} */
	stringify = stringifyJsonBigIntSafe;
	/** @readonly @type {Map<string, V>} */
	#entries = new Map();
	/**
	 * @param {[K, V][]} [entries]
	 * @param {(key: K) => string} [stringifyFunc]
	 */
	constructor(entries, stringifyFunc) {
		if(stringifyFunc) {
			this.stringify = stringifyFunc;
		}
		entries?.forEach(([key, value]) => this.set(key, value));
	}
	/** @param {K} key */
	get(key) {
		return this.#entries.get(this.stringify(key));
	}
	/** @param {K} key */
	has(key) {
		return this.#entries.has(this.stringify(key));
	}
	/**
	 * @param {K} key
	 * @param {V} value
	 */
	set(key, value) {
		return this.#entries.set(this.stringify(key), value);
	}
	clear() {
		this.#entries.clear();
	}
	get size() {
		return this.#entries.size;
	}
}

/**
 * @template K
 * @template V
 * @template H
 */
export class HashMap {
	/** @readonly @type {(value: K) => H} */
	#hashFunction;
	/** @readonly @type {(a: K, b: K) => boolean} */
	#equalityFunction;
	
	/** @readonly @type {Map<H, [K, V][]>} */
	#map = new Map();
	/**
	 * @param {(value: K) => H} hashFunction
	 * @param {(a: K, b: K) => boolean} equalityPredicate
	 */
	constructor(hashFunction, equalityPredicate) {
		this.#hashFunction = hashFunction;
		this.#equalityFunction = equalityPredicate;
	}
	/**
	 * @param {K} k
	 * @param {V} v
	 */
	set(k, v) {
		let hash = this.#hashFunction(k);
		if(this.#map.has(hash)) {
			let bucket = this.#map.get(hash);
			let existingEntryIndex = bucket.findIndex(([otherK]) => this.#equalityFunction(k, otherK));
			if(existingEntryIndex != -1) {
				bucket[existingEntryIndex][1] = v;
			} else {
				bucket.push([k, v]);
			}
		} else {
			this.#map.set(hash, [[k, v]]);
		}
	}
	/**
	 * @param {K} k
	 * @returns {V | undefined}
	 */
	get(k) {
		let hash = this.#hashFunction(k);
		if(!this.#map.has(hash)) {
			return undefined;
		}
		let bucket = this.#map.get(hash);
		return bucket.find(([otherK]) => this.#equalityFunction(k, otherK))?.[1];
	}
	/**
	 * @param {K} k
	 * @returns {boolean}
	 */
	has(k) {
		let hash = this.#hashFunction(k);
		if(!this.#map.has(hash)) {
			return false;
		}
		let bucket = this.#map.get(hash);
		return bucket.some(([otherK]) => this.#equalityFunction(k, otherK));
	}
	get size() {
		return sum(Array.from(this.#map.values()).map(bucket => bucket.length));
	}
}

/** A set for strings that works with regular expressions. */
export class PatternSet {
	/** @readonly @type {string | undefined} */
	#stringDelimiter;
	/** @readonly @type {Set<string>} */
	#stringValues = new Set();
	/** @readonly @type {RegExp[]} */
	#patterns = [];
	/**
	 * @param {string[]} [values]
	 * @param {string} [stringDelimiter] If present, values will be split by this substring and treated individually.
	 */
	constructor(values, stringDelimiter) {
		this.#stringDelimiter = stringDelimiter;
		values?.forEach(value => this.add(value));
	}
	/** @param {string} value */
	add(value) {
		value.split(this.#stringDelimiter).forEach(v => {
			if(v.startsWith("/") && v.endsWith("/")) {
				this.#patterns.push(new RegExp(v.slice(1, -1)));
			} else {
				this.#stringValues.add(v);
			}
		});
	}
	/** @param {string} value */
	has(value) {
		return this.#stringValues.has(value) || this.#patterns.some(pattern => pattern.test(value));
	}
}
/**
 * A map for strings that works with regular expressions.
 * @template V
 */
export class PatternMap {
	/** @readonly @type {string | undefined} */
	#stringDelimiter;
	/** @readonly @type {Map<string, V>} */
	#stringEntries = new Map();
	/** @readonly @type {[RegExp, V][]} */
	#patterns = [];
	/**
	 * @param {Iterable<[string, V]>} [entries]
	 * @param {string} [stringDelimiter] If present, keys will be split by this substring and treated individually.
	 */
	constructor(entries = [], stringDelimiter) {
		this.#stringDelimiter = stringDelimiter;
		Array.from(entries).forEach(([key, value]) => this.set(key, value));
	}
	/**
	 * @param {string} key
	 * @param {V} value
	 */
	set(key, value) {
		key.split(this.#stringDelimiter).forEach(k => {
			if(k.startsWith("/") && k.endsWith("/")) {
				this.#patterns.push([new RegExp(k.slice(1, -1)), value]);
			} else {
				this.#stringEntries.set(k, value);
			}
		});
	}
	/** @param {string} key */
	get(key) {
		return this.#stringEntries.get(key) ?? this.#patterns.find(([pattern]) => pattern.test(key))?.[1];
	}
}
/** A map for string-string entries that works for regular expressions, which can perform replacements on keys. */
export class ReplacingPatternMap {
	/** @readonly @type {string | undefined} */
	#stringDelimiter;
	/** @readonly @type {Map<string, string>} */
	#stringEntries = new Map();
	/** @readonly @type {[RegExp, string][]} */
	#patterns = [];
	/**
	 * @param {Iterable<[string, string]>} [entries]
	 * @param {string} [stringDelimiter] If present, keys will be split by this substring and treated individually.
	 */
	constructor(entries = [], stringDelimiter) {
		this.#stringDelimiter = stringDelimiter;
		Array.from(entries).forEach(([key, value]) => this.set(key, value));
	}
	/**
	 * @param {string} key
	 * @param {string} value
	 */
	set(key, value) {
		key.split(this.#stringDelimiter).forEach(k => {
			if(k.startsWith("/") && k.endsWith("/")) {
				this.#patterns.push([new RegExp(k.slice(1, -1)), value]);
			} else {
				this.#stringEntries.set(k, value);
			}
		});
	}
	/** @param {string} key */
	get(key) {
		if(this.#stringEntries.has(key)) {
			return this.#stringEntries.get(key);
		}
		let matchingPatternAndReplacement = this.#patterns.find(([pattern]) => pattern.test(key));
		if(matchingPatternAndReplacement) {
			return key.replace(...matchingPatternAndReplacement);
		}
	}
}
/** A bitset backed by a Uint8Array which only allows adding and reading values. */
export class MonotonicBitset {
	/** @readonly @type {number} */
	size;
	/** @type {boolean} */
	isEmpty = true;
	/** @readonly @type {Uint8Array<ArrayBuffer>} */
	#array;
	/** @param {number} size */
	constructor(size) {
		if(!Number.isSafeInteger(size) || size < 0) {
			throw new RangeError(`Bitset size must be a non-negative integer, got ${size}`);
		}
		this.size = size;
		this.#array = new Uint8Array(ceil(size / 8));
	}
	/**
	 * @param {number} index
	 * @returns {boolean}
	 */
	has(index) {
		if(!this.#checkBounds(index)) {
			return false;
		}
		let byte = this.#array[floor(index / 8)];
		return ((byte >> (index % 8)) & 1) == 1;
	}
	/** @param {number} index */
	add(index) {
		if(!this.#checkBounds(index)) {
			throw new RangeError(`Index ${index} is out of range; must be in [0, ${this.size})`);
		}
		this.#array[floor(index / 8)] |= 1 << (index % 8);
		this.isEmpty = false;
	}
	/**
	 * @param {number} index
	 * @returns {boolean}
	 */
	#checkBounds(index) {
		return Number.isSafeInteger(index) && index >= 0 && index < this.size;
	}
}
```

## File: src/utils/conversions.js
```javascript
import stripJsonComments from "strip-json-comments";

import { tuple } from "./meta.js";
import { onEvent } from "./dom.js";

/**
 * Parses a JSONC blob or response.
 * @param {Response | Blob} val
 * @returns {Promise<object>}
 */
export function jsonc(val) {
	return new Promise((res, rej) => {
		val.text().then(text => {
			let safeText = stripJsonComments(text);
			let json;
			try {
				json = JSON.parse(safeText);
			} catch(e) {
				rej(e);
				return;
			}
			res(json);
		}).catch(e => rej(e));
	});
}
/**
 * Converts a Response, Blob, or ImageData to an Image.
 * @param {Blob | Response | ImageData} val
 * @returns {Promise<HTMLImageElement>}
 */
export async function toImage(val) {
	if(val instanceof Blob) {
		let imageUrl = URL.createObjectURL(val);
		let image = new Image();
		image.src = imageUrl;
		try {
			await image.decode();
		} catch { // Chrome puts arbitrary limits on decoding images because "an error doesn't necessarily mean that the image was invalid": https://issues.chromium.org/issues/40676514 🤦‍♂️
			return new Promise((res, rej) => { // possibly https://github.com/chromium/chromium/blob/874a0ba26635507d1e847600fd8a512f4a10e1f8/cc/tiles/gpu_image_decode_cache.cc#L91
				let image2 = new Image();
				image2[onEvent]("load", () => {
					URL.revokeObjectURL(imageUrl);
					res(image2);
				});
				image2[onEvent]("error", e => {
					URL.revokeObjectURL(imageUrl);
					rej(e);
				});
				image2.src = imageUrl;
			});
		}
		URL.revokeObjectURL(imageUrl);
		return image;
	} else if(val instanceof Response) {
		let imageBlob = await val.blob();
		try {
			return toImage(imageBlob);
		} catch(e) {
			throw new Error(`Failed to convert response with status ${val.status} from URL ${val.url} to image: ${e}`);
		}
	} else if(val instanceof ImageData) {
		let imageBlob = await toBlob(val);
		try {
			return toImage(imageBlob);
		} catch(e) {
			throw new Error(`Failed to decode ImageData with dimensions ${val.width}x${val.height}: ${e}`);
		}
	}
}
/**
 * Gets an image or an image blob's full image data.
 * @param {HTMLImageElement | Blob} val
 * @returns {Promise<ImageData>}
 */
export async function toImageData(val) {
	let image = val instanceof HTMLImageElement? val : await toImage(val);
	let can = new OffscreenCanvas(image.width, image.height);
	let ctx = can.getContext("2d", {
		willReadFrequently: true
	});
	ctx.drawImage(image, 0, 0);
	return ctx.getImageData(0, 0, can.width, can.height);
}
/**
 * Converts an image or image data to a PNG blob.
 * @param {HTMLImageElement | ImageData} val
 * @returns {Promise<Blob>}
 */
export async function toBlob(val) {
	let can = new OffscreenCanvas(val.width, val.height);
	let ctx = can.getContext("2d", {
		willReadFrequently: true
	});
	if(val instanceof HTMLImageElement) {
		ctx.drawImage(val, 0, 0);
	} else if(val instanceof ImageData) {
		ctx.putImageData(val, 0, 0);
	}
	return await can.convertToBlob();
}
/**
 * Converts an array of bytes into a hexadecimal string.
 * @param {Uint8Array} arr
 * @returns {string}
 */
export function toHexadecimalString(arr) {
	return Array.from(arr).map(ch => ch.toString(16).padStart(2, "0")).join("");
}
/**
 * @param {string} hexColor
 * @returns {Vec3}
 */
export function hexColorToClampedTriplet(hexColor) {
	let [, r, g, b] = hexColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);
	return tuple([r, g, b]).map(x => parseInt(x, 16) / 255);
}

/** @import { Vec3 } from "../common.types.ts" */
```

## File: src/utils/coordinates.js
```javascript
/**
 * Gets the index of a block position in the structure data from its coordinates.
 * @param {Vec3} coords
 * @param {I32Vec3} structureSize
 * @returns {number}
 */
export function getStructureIndexFromCoordinates([x, y, z], structureSize) {
	return (x * structureSize[1] + y) * structureSize[2] + z;
}
/**
 * Transforms structure coordinates to Minecraft geometry coordinates.
 * @param {Vec3} coords
 * @returns {Vec3}
 */
export function getGeoSpaceBlockPos([x, y, z]) {
	return [-16 * x - 8, 16 * y, 16 * z - 8]; // I got these values from trial and error with blockbench (which makes the x negative I think. it's weird.)
}

/** @import { Vec3, I32Vec3 } from "../common.types.ts" */
```

## File: src/utils/dom.js
```javascript
import { symbolPatch } from "./meta.js";

export const selectEl = symbolPatch([Element.prototype, DocumentFragment.prototype], function selectEl(query) {
	return this.querySelector(query);
}, document.querySelector.bind(document));
export const selectEls = symbolPatch([Element.prototype, DocumentFragment.prototype], function selectEls(query) {
	return this.querySelectorAll(query);
}, document.querySelectorAll.bind(document));
/** @type {unique symbol} */
// @ts-expect-error
export const onEvent = symbolPatch(EventTarget.prototype, EventTarget.prototype.addEventListener);
/** @type {unique symbol} */
// @ts-expect-error
export const onEvents = symbolPatch(EventTarget.prototype, function onEvents(types, listener, options = false) {
	types.forEach(type => {
		this.addEventListener(type, listener, options);
	});
});
/** @type {unique symbol} */
// @ts-expect-error
export const onEventAndNow = symbolPatch(EventTarget.prototype, function onEventAndNow(type, listener, options) {
	listener();
	this.addEventListener(type, listener, options);
});
/**
 * Finds the closest descendent of an element or itself that matches a given selector.
 * @param {Element} el
 * @param {string} selector
 * @returns {Element | null}
 */
export function closestDescendentOrSelf(el, selector) {
	if(el.matches(selector)) {
		return el;
	}
	return el.querySelector(selector);
}

/**
 * Gets all children of a node, including those in shadow roots. (Doesn't work with nested shadow roots.)
 * @param {Element | DocumentFragment} node
 * @returns {HTMLElement[]}
 */
export function getAllChildren(node) {
	let children = Array.from(node[selectEls]("*"));
	let allChildren = [];
	while(children.length) {
		let child = children.shift();
		allChildren.push(child);
		if(child.shadowRoot) {
			allChildren.push(...child.shadowRoot[selectEls]("*"));
		}
	}
	return allChildren;
}

/**
 * Checks if a touch from a touch event is in an element's vertical bounds.
 * @param {Touch} touch
 * @param {Element} el
 * @returns {boolean}
 */
export function isTouchInElementVerticalBounds(touch, el) {
	let domRect = el.getBoundingClientRect();
	return touch.clientY >= domRect.top && touch.clientY <= domRect.bottom;
}
export function htmlCodeToElement(htmlCode) {
	let template = document.createElement("template");
	template.innerHTML = htmlCode;
	return template.content.firstElementChild;
}

/**
 * Dispatches the input and change events on an <input>.
 * @param {HTMLInputElement} input
 * @param {any} [detail]
 */
export function dispatchInputEvents(input, detail) {
	input.dispatchEvent(new CustomEvent("input", {
		bubbles: true,
		detail
	}));
	input.dispatchEvent(new CustomEvent("change", {
		bubbles: true,
		detail
	}));
}
```

## File: src/utils/fileInputs.js
```javascript
import { dispatchInputEvents } from "./dom.js";

/**
 * Sets a file input's files and dispatches input and change events.
 * @param {HTMLInputElement} fileInput
 * @param {FileList | File[]} files
 */
export function setFileInputFiles(fileInput, files) {
	if(!files.length) {
		return;
	}
	if(Array.isArray(files)) {
		files = fileArrayToFileList(files);
	}
	fileInput.files = files;
	dispatchInputEvents(fileInput);
}
/**
 * Adds files to a file input.
 * @param {HTMLInputElement} fileInput
 * @param {File[]} files
 */
export function addFilesToFileInput(fileInput, files) {
	if(!files.length) {
		return;
	}
	setFileInputFiles(fileInput, [...fileInput.files, ...files]);
}
/**
 * Turns an array of files into a FileList.
 * @param {File[]} files
 * @returns {FileList}
 */
export function fileArrayToFileList(files) {
	let dataTransfer = new DataTransfer();
	files.forEach(file => dataTransfer.items.add(file));
	return dataTransfer.files;
}
/**
 * Clears all the files in a file input.
 * @param {HTMLInputElement} fileInput
 */
export function clearFileInput(fileInput) {
	fileInput.files = (new DataTransfer()).files;
	dispatchInputEvents(fileInput);
}
```

## File: src/utils/files.js
```javascript
import { BlobWriter } from "@zip.js/zip.js";
import { groupBy } from "./arrays.js";

/**
 * Finds the basename from a file path.
 * @param {string} path
 * @returns {string}
 */
export function basename(path) {
	return path.slice(path.lastIndexOf("/") + 1);
}
/**
 * Finds the directory name from a file path. Returns an empty string if there are no directories, else will end in /.
 * @param {string} path
 * @returns {string}
 */
export function dirname(path) {
	return path.includes("/")? path.slice(0, path.lastIndexOf("/") + 1) : "";
}
/**
 * Finds the file extension from a file or filename, RETURNING LOWERCASE for simplicity. No "." is included.
 * E.g. `a.foo.ZIP` -> `zip`
 * @param {File | string} filename
 * @returns {string}
 */
export function getFileExtension(filename) {
	if(filename instanceof File) {
		filename = filename.name;
	}
	return filename.slice(filename.lastIndexOf(".") + 1).toLowerCase();
}
/**
 * Removes the (last) file extension from a filename.
 * @param {string} filename
 * @returns {string}
 */
export function removeFileExtension(filename) {
	return filename.includes(".")? filename.slice(0, filename.lastIndexOf(".")) : filename;
}
/**
 * Groups files by their file extensions (lowercased).
 * @param {File[]} files
 * @returns {Record<string, File[] | undefined>}
 */
export function groupByFileExtension(files) {
	return groupBy(files, file => getFileExtension(file));
}

/**
 * Joins many files by concatenating their contents.
 * @param {File[]} files
 * @param {string} [name]
 * @returns {File}
 */
export function concatenateFiles(files, name) {
	return new File(files, name ?? files.map(file => file.name).join(","));
}

/**
 * @param {File} file
 * @param {String} [filename]
 */
export function downloadFile(file, filename = file.name) {
	let a = document.createElement("a");
	let objectURL = URL.createObjectURL(file);
	a.href = objectURL;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(objectURL);
}

/**
 * Compresses a Blob with a given format using the Compression Streams API.
 * @param {Blob} blob
 * @param {CompressionFormat} [format]
 * @returns {Promise<Blob>}
 */
export async function compressBlob(blob, format = "gzip") {
	let stream = blob.stream().pipeThrough(new CompressionStream(format));
	let response = new Response(stream);
	return await response.blob();
}
/**
 * Decompresses a Blob with a given format using the Compression Streams API.
 * @param {Blob} blob
 * @param {CompressionFormat} [format]
 * @returns {Promise<Blob>}
 */
export async function decompressBlob(blob, format = "gzip") {
	try {
		let stream = blob.stream().pipeThrough(new DecompressionStream(format));
		let response = new Response(stream);
		return await response.blob();
	} catch(e) {
		throw new Error(`Failed to decompress blob using ${format}: ${e}`, { cause: e});
	}
}

/**
 * @param {FileEntry} entry
 * @returns {Promise<Blob>}
 */
export async function zipJsFileEntryToBlob(entry) {
	return await entry.getData(new BlobWriter());
}

/** @import { FileEntry } from "@zip.js/zip.js" */
```

## File: src/utils/images.js
```javascript
import { toImage, toImageData } from "./conversions.js";
import { lcm } from "./math.js";

/**
 * Sets the opacity of an image.
 * @param {HTMLImageElement} image
 * @param {number} opacity
 * @returns {Promise<HTMLImageElement>}
 */
export async function setImageOpacity(image, opacity) {
	let imageData = await toImageData(image);
	let data = imageData.data;
	for(let i = 0; i < data.length; i += 4) {
		data[i + 3] *= opacity;
	}
	return await toImage(imageData);
}
/**
 * Adds a tint to an image.
 * @param {HTMLImageElement} image
 * @param {Vec3} col
 * @returns {Promise<HTMLImageElement>}
 */
export async function addTintToImage(image, col) {
	let imageData = await toImageData(image);
	let data = imageData.data;
	for(let i = 0; i < data.length; i += 4) {
		data[i] *= col[0];
		data[i + 1] *= col[1];
		data[i + 2] *= col[2];
	}
	return await toImage(imageData);
}
/**
 * Adds transparent padding around an image.
 * @param {HTMLImageElement} image
 * @param {Partial<{ left: number, right: number, top: number, bottom: number }>} padding Pixels
 * @returns {Promise<HTMLImageElement>}
 */
export async function addPaddingToImage(image, padding) {
	let { left = 0, right = 0, top = 0, bottom = 0 } = padding;
	let can = new OffscreenCanvas(image.width + left + right, image.height + top + bottom);
	let ctx = can.getContext("2d", {
		willReadFrequently: true
	});
	ctx.drawImage(image, left, top);
	let blob = await can.convertToBlob();
	return await toImage(blob);
}
/**
 * Overlays square images together, with the first image being the base. They can be different dimensions and will be resized to not lose quality.
 * @param {...HTMLImageElement} images
 * @returns {Promise<Blob>}
 */
export async function overlaySquareImages(...images) {
	let outputSize = images.map(image => image.width).reduce((a, b) => lcm(a, b));
	let can = new OffscreenCanvas(outputSize, outputSize);
	let ctx = can.getContext("2d", {
		willReadFrequently: true
	});
	ctx.imageSmoothingEnabled = false;
	images.forEach(image => {
		ctx.drawImage(image, 0, 0, outputSize, outputSize);
	});
	return await can.convertToBlob();
}
/**
 * Resizes an image to a specific size without image smoothing.
 * @param {HTMLImageElement} image
 * @param {number} width
 * @param {number} [height]
 * @returns {Promise<Blob>}
 */
export async function resizeImageToBlob(image, width, height = width) {
	let can = new OffscreenCanvas(width, height);
	let ctx = can.getContext("2d", {
		willReadFrequently: true
	});
	ctx.imageSmoothingEnabled = false;
	ctx.drawImage(image, 0, 0, width, height);
	return await can.convertToBlob();
}

/**
 * Returns a generator of all the individual RGBA channels in a square inside an `ImageData`.
 * @param {ImageData} imageData
 * @param {number} sourceX
 * @param {number} sourceY
 * @param {number} w
 * @param {number} h
 * @returns {Generator<number, void, void>}
 */
export function* getPixelBytesInSquare(imageData, sourceX, sourceY, w, h) {
	for(let y = sourceY; y < sourceY + h; y++) {
		for(let x = sourceX; x < sourceX + w; x++) {
			let startI = (y * imageData.width + x) * 4;
			for(let i = startI; i < startI + 4; i++) {
				yield imageData.data[i];
			}
		}
	}
}

/** @import { Vec3 } from "../common.types.ts" */
```

## File: src/utils/math.js
```javascript
export const { min, max, sign, floor, ceil, sqrt, round, abs, PI: pi, exp, log: ln, sin, cos, tan, hypot } = Math;
export const clamp = (n, lowest, highest) => min(max(n, lowest), highest);
export function sinDeg(deg) {
	return sin(deg * pi / 180);
}
export function cosDeg(deg) {
	return cos(deg * pi / 180);
}
export function tanDeg(deg) {
	return tan(deg * pi / 180);
}
export function rotate([x, y], angle) {
	let c = cos(angle);
	let s = sin(angle);
	return [x * c - y * s, x * s + y * c];
}
export function rotateDeg(p, deg) {
	return rotate(p, deg * pi / 180);
}
/**
 * @param {number[]} nums
 * @returns {number}
 */
export function sum(nums) {
	return nums.reduce((a, b) => a + b, 0);
}
/**
 * @param {number[]} nums
 * @returns {number}
 */
export function average(nums) {
	return sum(nums) / nums.length;
}
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function gcd(a, b) {
	while(b != 0) {
		if(!(a >= 1 && b >= 1)) throw new Error(`Cannot find GCD of ${a} and ${b}`);
		[a, b] = [b, a % b]; // Euclidean algorithm
	}
	return a;
}
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function lcm(a, b) {
	return a * b / gcd(a, b);
}
export function distanceSquared(a, b) {
	return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]) + (a[2] - b[2]) * (a[2] - b[2]);
}
/**
 * @param {number} low
 * @param {number} high
 * @param {number} [step]
 * @returns {number[]}
 */
export function range(low, high, step = 1) {
	return (new Array((high - low) / step + 1)).fill(0).map((_, i) => i * step + low);
}
/**
 * Changes the rows and columns of a matrix.
 * @template {number} R
 * @template {number} C
 * @template T
 * @param {Matrix<R, C, T>} matrix
 * @returns {TupleMatrix<C, R, T>}
 */
export function transposeMatrix(matrix) {
	// @ts-expect-error
	return matrix[0].map((_, i) => matrix.map(row => row[i]));
}
/**
 * @param {Mat4} mat
 * @param {Vec3 | Vec4} vec
 * @returns {Vec4}
 */
export function mulMat4([[a, b, c, d], [e, f, g, h], [i, j, k, l], [m, n, o, p]], [x, y, z, w = 1]) {
	return [
		a * x + b * y + c * z + d * w,
		e * x + f * y + g * z + h * w,
		i * x + j * y + k * z + l * w,
		m * x + n * y + o * z + p * w
	];
}

/** @import { Mat4, Matrix, TupleMatrix, Vec3, Vec4 } from "../common.types.ts" */
```

## File: src/utils/meta.js
```javascript
import { removeFalsies } from "./arrays.js";

/**
 * Patches a method onto an object, returning a symbol that can be used to access that method.
 * @overload
 * @param {object | object[]} objects An object or multiple objects onto which the method patch will be applied
 * @param {Function} primaryMethod The method that will be patched onto the object(s)
 * @returns {symbol}
*/
/**
 * Patches a method onto an object, and making a function turn into a symbol during property access, with which the patched method can be accessed.
 * @template {Function} F
 * @overload
 * @param {object | object[]} objects An object or multiple objects onto which the method patch will be applied
 * @param {Function} primaryMethod The method that will be patched onto the object(s)
 * @param {F} secondaryMethod The function that will have a patch applied to turn into a symbol during property access
 * @returns {F & symbol}
 */
/**
 * @template {Function} F
 * @param {object | object[]} objects
 * @param {Function} primaryMethod
 * @param {F} [secondaryMethod]
 * @returns {symbol | (F & symbol)}
 */
export function symbolPatch(objects, primaryMethod, secondaryMethod) {
	let symbol = Symbol(primaryMethod.name);
	let objectsArr = Array.isArray(objects)? objects : [objects];
	objectsArr.forEach(object => {
		Object.defineProperty(object, symbol, { // defaults to nonconfigurable, nonenumerable and unwritable
			value: primaryMethod
		});
	});
	if(secondaryMethod) {
		secondaryMethod[Symbol.toPrimitive] = () => symbol; // used during property access: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive. throws a TypeError if you're trying to convert to a string, but it's fine for property access because it's a symbol
		// @ts-expect-error
		return secondaryMethod;
	} else {
		return symbol;
	}
}

export const nanToUndefined = x => Number.isNaN(x)? undefined : x;
/** @template T @param {T} x @returns {T} */
export const doNothing = x => x;
/** @template {any[]} T @param {[...T]} x @returns {T} */
export const tuple = x => x;
/** @template {{ "prototype": any } | { "prototype": any }[]} T @param {T} _type @returns {T extends any[]? T[number]["prototype"][] : T extends { "prototype": any }? T["prototype"] : never} */
export const cast = (x, _type) => x;
/**
 * @template {(Function & { "prototype": any }) | Function[]} T
 * @param {T} _type
 * @returns {asserts x is (T extends any[]? T[number]["prototype"][] : T extends Function? T["prototype"] : never)}
*/
export function assertAs(x, _type) {
	if(typeof _type == "function") {
		if(!(x instanceof _type)) {
			throw new Error(`Assert failed: ${x} is not of type ${_type.name}\n${JSON.stringify(x)}`);
		}
	} else if(Array.isArray(_type)) {
		let permissibleTypes = Array.from(new Set(_type));
		if(!permissibleTypes.some(t => x instanceof t)) {
			throw new Error(`Assert failed: ${x} is not of type ${permissibleTypes.join(" | ")}\n${JSON.stringify(x)}`);
		}
	}
};
/**
 * @param {boolean} invariant
 * @param {string} [message]
 */
export function assert(invariant, message) {
	if(!invariant) {
		throw new Error(`Assertion failed!${message? ` ${message}` : ""}`);
	}
}
/** Returns the original string when used in a tagged template literal. Only used so the HTML inside can be minified when building, and so VSCode can apply syntax highlighting with the lit-plugin plugin. */
export function html(strings, ...values) {
	return strings.reduce((acc, str, i) => acc + str + (values[i] ?? ""), "");
}

/**
 * @template T
 * @param {Promise<T>} promise
 * @param {(x: T) => T} [cloneFunc]
 * @returns {Promise<T>}
 */
export function clonePromise(promise, cloneFunc = structuredClone) {
	return promise.then(res => cloneFunc(res));
}
export function getStackTrace(e = new Error()) {
	return removeFalsies(e.stack.split("\n").slice(1));
}
/**
 * Gets the inheritance chain of a class.
 * @param {Function} c
 * @returns {Function[]}
 */
export function getClassInheritance(c) {
	let classes = [];
	while(typeof c == "function" && c.name && c != Function && c != null) {
		classes.push(c);
		c = Object.getPrototypeOf(c);
	}
	return classes;
}
/**
 * Gets the full name of a class and all other classes it is inherited from.
 * @param {Function} c
 * @returns {string}
 */
export function getClassFullName(c) {
	return getClassInheritance(c).map(f => f.name).join(":");
}

/**
 * Repeatedly applies an endofunction until it no longer affects the input.
 * @template {string | number | boolean} T
 * @param {T} value
 * @param {(value: T) => T} func
 * @param {number} [maxRepetitions] The maximum number of repetitions allowed before throwing an error.
 * @returns {T}
 */
export function repeatedlyApplyEndofunction(value, func, maxRepetitions = 100) {
	/** @type {T} */
	let oldValue;
	let repetitions = 0;
	while(!Object.is(value, oldValue)) {
		oldValue = value;
		value = func(value);
		if(repetitions++ == maxRepetitions) {
			throw new Error(`Too many (${repetitions}) repetitions: ${value}`);
		}
	}
	return value;
}

/**
 * @template {string | number | boolean} P
 * @template {(x: P) => any} F
 * @template {ReturnType<F>} R
 * @param {F} func
 * @param {(x: Parameters<F>[0]) => boolean} conditionFunc
 * @param {(x: R) => R} [preReturnFunc]
 * @returns {F}
 */
export function conditionallyCacheUnaryFunc(func, conditionFunc, preReturnFunc = doNothing) {
	/** @type {Map<P, R>} */
	let cache = new Map();
	// @ts-expect-error
	return x => {
		if(conditionFunc(x)) {
			if(cache.has(x)) {
				return preReturnFunc(cache.get(x));
			}
			let res = func(x);
			cache.set(x, res);
			return preReturnFunc(res);
		}
		return func(x);
	};
}
/**
 * @template {WeakKey} P
 * @template {(x: P) => any} F
 * @param {F} func
 * @param {(x: ReturnType<F>) => ReturnType<F>} [preReturnFunc]
 * @returns {F}
 */
export function weaklyCacheUnaryFunc(func, preReturnFunc = doNothing) {
	/** @type {WeakMap<P, ReturnType<F>>} */
	let cache = new WeakMap();
	// @ts-expect-error
	return x => {
		if(cache.has(x)) {
			return preReturnFunc(cache.get(x));
		}
		let res = func(x);
		cache.set(x, res);
		return preReturnFunc(res);
	};
}
export class AsyncFactory {
	static #allowedConstructors = new WeakSet();
	/** Don't use the constructor to create an AsyncFactory instance; use the static async new() method. */
	constructor() {
		if(!AsyncFactory.#allowedConstructors.has(new.target)) {
			throw new Error(`Cannot create ${getClassFullName(new.target)} normally; must call the static async new() method.`);
		}
	}
	async init() {}
	/**
	 * Creates an instance.
	 * @template {AsyncFactory} T
	 * @template {any[]} P
	 * @this {{ new(...params: P): T }}
	 * @param {P} params
	 * @returns {Promise<T>}
	 */
	static async new(...params) {
		let classes = getClassInheritance(this);
		classes.forEach(c => AsyncFactory.#allowedConstructors.add(c));
		try {
			let instance = new this(...params);
			classes.forEach(c => AsyncFactory.#allowedConstructors.delete(c));
			await instance.init();
			return instance;
		} finally {
			classes.forEach(c => AsyncFactory.#allowedConstructors.delete(c));
		}
	}
}

/**
 * @template {(...args: any[]) => Promise<any>} F
 * @template {any[]} P
 * @param {(...args: P) => Promise<F>} factory
 * @param {P} factoryParams
 * @returns {F}
 */
export function lazyLoadAsyncFunctionFactory(factory, ...factoryParams) {
	/** @type {Promise<F>} */
	let f;
	// @ts-expect-error
	return async (...args) => {
		f ??= factory(...factoryParams);
		return (await f)(...args);
	};
}

/**
 * Creates a custom error class with a given name.
 * @template {string} T
 * @param {T} name
 * @returns {new (message?: string) => Error & { name: T }}
 */
export function createCustomError(name) {
	return class extends Error { // can't have a base class that has this.name = new.target.name because esbuild will rename them... :(
		constructor(message) {
			super(message);
			this.name = name;
		}
	};
}
export const UserError = createCustomError("UserError");
```

## File: src/utils/misc.js
```javascript
export const sleep = async time => new Promise(resolve => setTimeout(resolve, time));

/**
 * Joins multiple regular expressions or strings. The flags of the last regular expression will be used.
 * @param {...(RegExp | string)} values
 * @returns {RegExp}
 */
export function joinRegExps(...values) {
	return new RegExp(values.reduce((acc, val) => acc + (val instanceof RegExp? val.source : val), ""), values.reverse().find(val => val instanceof RegExp)?.flags ?? ""); // findLast isn't well supported :/
}
/**
 * Returns the SHA-256 hash of a blob.
 * @param {Blob} blob
 * @returns {Promise<Uint8Array>}
 */
export async function sha256(blob) {
	return new Uint8Array(await crypto.subtle.digest("SHA-256", await blob.arrayBuffer()));
}
/**
 * Returns the SHA-256 hash of text
 * @param {string} text
 * @returns {Promise<Uint8Array>}
 */
export async function sha256text(text) {
	return new Uint8Array(await crypto.subtle.digest("SHA-256", (new TextEncoder()).encode(text)));
}

/**
 * Computes the FNV-1a hash from an iterator of numbers.
 * @param {Iterable<number>} nums
 * @returns {number}
 */
export function fnv1a(nums) {
	let hash = 2166136261;
	for(let num of nums) {
		hash ^= num;
		hash = Math.imul(hash, 16777619);
	}
	return hash >>> 0;
}

/**
 * Clears all caches.
 * @param {CacheStorage} cacheStorage
 */
export async function clearCacheStorage(cacheStorage) {
	let cacheNames = await cacheStorage.keys();
	await Promise.all(cacheNames.map(cacheName => cacheStorage.delete(cacheName)));
}

/**
 * Calls `getContext()` on the input OffscreenCanvas, but with typed options because they are `any` for OffscreenCanvases even though they have proper type support for regular canvases. :facepalm: Also if using WebGL2, the context will know what type of canvas it has.
 * @template {"2d" | "webgl2"} T
 * @param {OffscreenCanvas} canvas
 * @param {T} contextId
 * @param {T extends "2d"? CanvasRenderingContext2DSettings : WebGLContextAttributes} [options]
 * @returns {T extends "2d"? OffscreenCanvasRenderingContext2D : WebGL2RenderingContextButSmarter<OffscreenCanvas>}
 */
export function getOffscreenCanvasContext(canvas, contextId, options) {
	// @ts-expect-error
	return canvas.getContext(contextId, options ?? {});
}
```

## File: src/utils/molang.js
```javascript
import { removeFalsies } from "./arrays.js";
import { floor, max, min } from "./math.js";
import { repeatedlyApplyEndofunction } from "./meta.js";
import { joinRegExps } from "./misc.js";
import { repeatedlyReplaceAll } from "./strings.js";

/**
 * Converts an item filter into a Molang expression representation.
 * @param {ItemCriteria} itemCriteria
 * @returns {string}
 */
export function itemCriteriaToMolang(itemCriteria, slot = "slot.weapon.mainhand") {
	let names = itemCriteria.names.map(name => name.includes(":")? name : `minecraft:${name}`);
	let tags = itemCriteria.tags.map(tag => tag.includes(":")? tag : `minecraft:${tag}`);
	let nameQuery = names.length > 0? `q.is_item_name_any('${slot}',${names.map(name => `'${name}'`).join(",")})` : undefined;
	let tagQuery = tags.length > 0? `q.equipped_item_any_tag('${slot}',${tags.map(tag => `'${tag}'`).join(",")})` : undefined;
	return removeFalsies([nameQuery, tagQuery]).join("||") || "false";
}
/**
 * Creates a Molang expression that mimics array access. Defaults to the last element if nothing is found.
 * @param {any[]} array A continuous array
 * @param {string} indexVar
 * @returns {string}
 */
export function arrayToMolang(array, indexVar) {
	let arrayEntries = Object.entries(array).map(([i, x]) => [+i, x]); // to handle splitting, original indices need to be preserved, hence looking at index-value pairs
	return arrayEntriesToMolang(arrayEntries, indexVar);
}
/**
 * @param {[number, any][]} entries
 * @param {string} indexVar
 * @returns {string}
 */
function arrayEntriesToMolang(entries, indexVar) {
	const splittingThreshold = 10;
	if(entries.length > splittingThreshold) { // large arrays cause Molang stack overflows, so this splits them in half in such a situation.
		let middle = floor(entries.length / 2);
		let lowerMolang = arrayEntriesToMolang(entries.slice(0, middle), indexVar);
		let upperMolang = arrayEntriesToMolang(entries.slice(middle), indexVar);
		let lower = parseInt(lowerMolang) == +lowerMolang? lowerMolang : `(${lowerMolang})`;
		let upper = parseInt(upperMolang) == +upperMolang? upperMolang : `(${upperMolang})`;
		if(lower == upper) {
			return lower;
		}
		return `${indexVar}<${entries[middle][0]}?${lower}:${upper}`;
	}
	let uniqueValues = Array.from(new Set(entries.map(([, value]) => value)));
	let valuesAndIndices = uniqueValues.map(x => [x, entries.filter(([, value]) => value == x).map(([i]) => i)]);
	let lowestIndex = min(...entries.map(([i]) => i));
	let highestIndex = max(...entries.map(([i]) => i));
	let conditionsAndValues = valuesAndIndices.map(([value, indices]) => {
		/** @type {Vec2[]} */
		let intervals = [];
		indices.forEach(i => {
			if(intervals.at(-1)?.[1] == i - 1) {
				intervals.at(-1)[1] = i;
			} else {
				intervals.push([i, i]);
			}
		});
		let intervalConditions = intervals.map(([lower, upper]) => {
			if(lower == upper) {
				return `${indexVar}==${lower}`;
			} else if(lower == lowestIndex && upper == highestIndex) {
				return "true";
			} else if(lower == lowestIndex) {
				return `${indexVar}<${upper + 1}`;
			} else if(upper == highestIndex) {
				return `${indexVar}>${lower - 1}`;
			} else {
				let condition = `${indexVar}>${lower - 1}&&${indexVar}<${upper + 1}`;
				return intervals.length == 1? condition : `(${condition})`; // because min_engine_version is 1.16.0, Molang || always run before &&, so it has to be put inside brackets
			}
		});
		return [intervalConditions.join("||"), value];
	});
	
	// Move the longest condition to the end. Because it's at the end of a ternary condition, we don't have to include the condition, saving characters (and a tiny bit of computation)
	let longestConditionLength = max(...conditionsAndValues.map(([condition]) => condition.length));
	let longestConditionAndValueIndex = conditionsAndValues.findIndex(([condition]) => condition.length == longestConditionLength);
	let longestConditionAndValue = conditionsAndValues[longestConditionAndValueIndex];
	conditionsAndValues.splice(longestConditionAndValueIndex, 1);
	conditionsAndValues.push(longestConditionAndValue);
	
	return conditionsAndValues.map(([condition, value], i) => {
		if(condition == "true" || i == conditionsAndValues.length - 1) {
			return value;
		}
		return `${i > 0? "(" : ""}${condition}?${value}:`;
	}).join("") + ")".repeat(max(conditionsAndValues.length - 2, 0));
}
/**
 * Creates a Molang expression that mimics 2D array access.
 * @param {any[][]} array
 * @param {string} indexVar1
 * @param {string} indexVar2
 * @returns {string}
 */
export function array2DToMolang(array, indexVar1, indexVar2) {
	return arrayToMolang(array.map(subArray => `(${arrayToMolang(subArray, indexVar2)})`), indexVar1);
}

/**
 * Converts a function into minified Molang code. Variables can be referenced with `$[...]`.
 * @param {Function} func
 * @param {Record<string, any>} [vars]
 * @returns {string} Molang code
 */
export function functionToMolang(func, vars = {}) {
	let funcCode = func.toString();
	let minifiedFuncBody = funcCode.slice(funcCode.indexOf("{") + 1, funcCode.lastIndexOf("}")).replaceAll(/\/\/.+/g, "").replaceAll(/(?<!return|let)\s/g, "");
	// else if() {...} statements must be expanded to be else { if() {...} }
	let expandedElseIfCode = "";
	for(let i = 0; i < minifiedFuncBody.length; i++) {
		if(minifiedFuncBody.slice(i, i + 7) == "elseif(") {
			expandedElseIfCode += "else{if(";
			let inIfBlock = false;
			let braceCounter = 0;
			i += 6;
			let j = i;
			for(; braceCounter > 0 || !inIfBlock; j++) {
				if(minifiedFuncBody[j] == "{") {
					braceCounter++;
					inIfBlock = true;
				} else if(minifiedFuncBody[j] == "}") {
					braceCounter--;
				}
				if(braceCounter == 0 && inIfBlock && minifiedFuncBody.slice(j, j + 5) == "}else") {
					inIfBlock = false; // keep the final else clause included
				}
			}
			minifiedFuncBody = minifiedFuncBody.slice(0, j) + "}" + minifiedFuncBody.slice(j);
			continue;
		}
		expandedElseIfCode += minifiedFuncBody[i];
	}
	let mathedCode = expandedElseIfCode
		.replaceAll(`"`, `'`)
		.replaceAll(/([\w\.]+)(\+|-){2};/g, "$1=$1$21;") // x++ and x-- -> x=x+1 and x=x-1
		.replaceAll(/([\w\.\$\[\]]+)(\+|-|\*|\/|\?\?|%)=([^;]+);/g, "$1=$1$2$3;") // x += y -> x=x+y for +, -, *, /, ??, %
		.replaceAll(/([\w\.]+)%(-?\d+)/g, "math.mod($1,$2)")
		.replaceAll(/\(([^()]+|[^()]*\([^()]+\)[^()]*)\)%(-?\d+)/g, "math.mod($1,$2)")
		.replaceAll(/\breturn;/g, "return 0;"); // complex Molang expressions can't return nothing
	
	// I have no idea how to make this smaller. I really wish JS had a native AST conversion API
	let conditionedCode = "";
	let parenthesisCounter = 0;
	let inIfCondition = false;
	let needsExtraBracketAtEndOfIfCondition = false; // short variable names are for slow typers :)
	for(let i = 0; i < mathedCode.length; i++) {
		let char = mathedCode[i];
		if(mathedCode.slice(i, i + 3) == "if(") {
			inIfCondition = true;
			parenthesisCounter++;
			needsExtraBracketAtEndOfIfCondition = /^if\([^()]+\?\?/.test(mathedCode.slice(i)); // null coalescing operator is the only operator with lower precedence than the ternary conditional operator, so if a conditional expression in if() has ?? without any brackets around it, brackets are needed around the entire conditional expression
			if(needsExtraBracketAtEndOfIfCondition) {
				conditionedCode += "(";
			}
			i += 2;
			continue;
		} else if(mathedCode.slice(i, i + 4) == "else") {
			conditionedCode = conditionedCode.slice(0, -1) + ":"; // replace the ; with :
			i += 3;
			continue;
		} else if(/^for\([^)]+\)/.test(mathedCode.slice(i))) {
			let forStatement = substituteVariablesIntoMolang(mathedCode.slice(i).match(/^for\([^)]+\)/)[0], vars);
			let [, forVarName, initialValue, upperBound] = forStatement.match(/^for\(let (\w+)=(\d+);\w+<(\d+);\w+\+\+\)/);
			let forBlockStartI = mathedCode.slice(i).indexOf("{") + i;
			let forBlockEndI = forBlockStartI + 1;
			let braceCounter = 1;
			while(braceCounter > 0) {
				if(mathedCode[forBlockEndI] == "{") {
					braceCounter++;
				} else if(mathedCode[forBlockEndI] == "}") {
					braceCounter--;
				}
				forBlockEndI++;
			}
			let forBlockContent = mathedCode.slice(forBlockStartI + 1, forBlockEndI - 1);
			let expandedForCode = "";
			for(let forI = +initialValue; forI < +upperBound; forI++) {
				expandedForCode += substituteVariablesIntoMolang(forBlockContent, {
					...vars,
					...{
						[forVarName]: forI
					}
				});
			}
			mathedCode = mathedCode.slice(0, i) + expandedForCode + mathedCode.slice(forBlockEndI);
			i--;
			continue;
		} else if(char == "(") {
			parenthesisCounter++;
		} else if(char == ")") {
			parenthesisCounter--;
			if(parenthesisCounter == 0 && inIfCondition) {
				inIfCondition = false;
				if(needsExtraBracketAtEndOfIfCondition) {
					conditionedCode += ")";
				}
				conditionedCode += "?";
				continue;
			}
		} else if(char == "}") {
			conditionedCode += "};";
			continue;
		}
		conditionedCode += char;
	}
	// I will read this sometime in the 2030's and I'm willing to bet that it will still be stage 2: https://github.com/tc39/proposal-pipeline-operator
	let variabledCode = substituteVariablesIntoMolang(conditionedCode, vars);
	let tempVariabledCode = convertJSVariablesToMolangTemps(variabledCode);
	let booleanSimplifiedCode = simplifyBooleanExpressions(tempVariabledCode);
	let deadBranchRemovedCode = removeDeadCode(booleanSimplifiedCode);
	return deadBranchRemovedCode;
}
/**
 * Substitutes variables into Molang code. Variables must be written as `$[varName]`.
 * @param {string} code
 * @param {Record<string, any>} vars
*/
function substituteVariablesIntoMolang(code, vars) {
	// Yay more fun regular expressions, this time to work with variable substitution: `$[...]`
	return code.replaceAll(/\$\[(\w+)(?:\[(\d+)\]|\.(\w+))?(?:(\+|-|\*|\/)(\d+))?\]/g, (_, varName, index, key, operator, operand, offset) => {
		if(varName in vars) {
			let value = vars[varName];
			index ??= key;
			if(index != undefined) {
				if(index in value) {
					value = value[index];
				} else {
					throw new RangeError(`Index out of bounds: [${value.join(", ")}][${index}] does not exist`);
				}
			}
			switch(operator) {
				case "+": return +value + +operand; // must cast operands to numbers to avoid string concatenation
				case "-": return value - operand;
				case "*": return value * operand;
				case "/": return value / operand;
				default: return value;
			}
		} else {
			throw new ReferenceError(`Variable "${varName}" was not passed to function -> Molang converter! At position: ${offset}\n${code.slice(offset - 10, offset + 10)}`);
		}
	});
}
/**
 * Converts JavaScript variables in Molang code (e.g. `let x = 42;`) into proper temp variables (e.g. `t._0 = 42;`).
 * @param {string} code
 * @returns {string}
 */
function convertJSVariablesToMolangTemps(code) {
	let variableNames = Array.from(code.matchAll(/\blet (\w+)/gm)).map(([, varName]) => varName);
	let counter = 0;
	let uniqueVariableNames = new Set(variableNames);
	uniqueVariableNames.forEach(varName => {
		let tempVarName = `t._${counter++}`;
		code = code.replaceAll(joinRegExps(/(?<!\.)\b(let )?/, varName, /\b/g), tempVarName);
	});
	return code;
}
/**
 * Simplifies Boolean expressions (`||` and `&&`) where one side is a constant `true` or `false` and the other side is a single literal.
 * @param {string} code
 * @returns {string}
 */
function simplifyBooleanExpressions(code) {
	return repeatedlyApplyEndofunction(code, code => {
		// pov: js doesn't have a pipe operator
		code = repeatedlyReplaceAll(code, /(!?[\w\.]+)&&false\b/g, "false");
		code = repeatedlyReplaceAll(code, /(!?[\w\.]+)&&true\b/g, "$1");
		code = repeatedlyReplaceAll(code, /\bfalse&&(!?[\w\.]+)/g, "false");
		code = repeatedlyReplaceAll(code, /\btrue&&(!?[\w\.]+)/g, "$1");
		code = repeatedlyReplaceAll(code, /(!?[\w\.]+)\|\|false\b/g, "$1");
		code = repeatedlyReplaceAll(code, /(!?[\w\.]+)\|\|true\b/g, "true");
		code = repeatedlyReplaceAll(code, /\bfalse\|\|(!?[\w\.]+)/g, "$1");
		code = repeatedlyReplaceAll(code, /\btrue\|\|(!?[\w\.]+)/g, "true");
		code = repeatedlyReplaceAll(code, /!false\b/g, "true");
		code = repeatedlyReplaceAll(code, /!true\b/g, "false");
		code = repeatedlyReplaceAll(code, /\(((true)|(false))\)/g, "$1"); // bracket unwrapping for nested boolean expressions... idk if I need this
		return code;
	});
}
/**
 * Removes dead branches from Molang code, only if the condition is explicitly true or false. Also removes dead code after "return" statements.
 * @param {string} code
 * @returns {string}
 */
function removeDeadCode(code) {
	for(let i = 0; i < code.length; i++) {
		if(code.slice(i, i + 7) == "false?{") {
			let j = i + 7;
			let braceCounter = 1;
			let elseBlockStart = -1;
			while(braceCounter || code[j] != ";") {
				if(code[j] == "{") braceCounter++;
				else if(code[j] == "}") braceCounter--;
				if(braceCounter == 0 && code[j] == ":") {
					elseBlockStart = j + 2;
				}
				j++;
			}
			let elseBlock = elseBlockStart > -1? code.slice(elseBlockStart, j - 1) : "";
			code = code.slice(0, i) + elseBlock + code.slice(j + 1);
			i--;
		} else if(code.slice(i, i + 6) == "true?{") {
			let j = i + 6;
			let braceCounter = 1;
			let trueBlockEnd;
			while(braceCounter || code[j] != ";") {
				if(code[j] == "{") braceCounter++;
				else if(code[j] == "}") braceCounter--;
				if(braceCounter == 0 && code[j] == ":") {
					trueBlockEnd = j;
				}
				j++;
			}
			trueBlockEnd ??= j;
			code = code.slice(0, i) + code.slice(i + 6, trueBlockEnd - 1) + code.slice(j + 1);
			i--;
		} else if(/^return [^;{}]+;/.test(code.slice(i))) {
			// remove dead code after a return statement in the same block
			let startI = code.slice(i).indexOf(";") + i + 1;
			try {
				let endI = findClosingBraceIndex(code, startI - 1);
				code = code.slice(0, startI) + code.slice(endI);
			} catch {
				// no closing brace - remove everything after the return statement
				code = code.slice(0, startI);
			}
			i = startI;
		}
	}
	return code;
}

/**
 * Finds the index of the closing brace of a block, taking into account blocks nested within it.
 * @param {string} code
 * @param {number} startIndex The index of the starting brace.
 * @returns {number} The index of the closing brace.
 */
function findClosingBraceIndex(code, startIndex) {
	let i = startIndex + 1;
	let braceCounter = 1;
	while(braceCounter) {
		if(i >= code.length) {
			throw new Error("Could not find closing brace!");
		}
		if(code[i] == "{") braceCounter++;
		else if(code[i] == "}") braceCounter--;
		i++;
	}
	return i - 1;
}

/** @import { ItemCriteria, Vec2 } from "../common.types.ts" */
```

## File: src/utils/objects.js
```javascript
import { tuple } from "./meta.js";

/**
 * Object.entries for **all** entries, including inherited ones.
 * @template {string} K
 * @template V
 * @param {Record<K, V>} object
 * @returns {[K, V][]}
 */
export function allEntries(object) {
	let entries = [];
	for(let key in object) {
		entries.push(tuple([key, object[key]]));
	}
	return entries;
}
/**
 * Flattens inherited properties to be direct properties of an object.
 * @template {string} K
 * @template V
 * @param {Record<K, V>} object
 * @returns {{ [Key in K]: V }}
 */
export function flattenObject(object) {
	return Object.fromEntries(allEntries(object));
}
/**
 * Applies Array.prototype.reduce on each property from all objects.
 * @template V
 * @template {Record<string, V>} T
 * @param {T[]} objects
 * @param {(previousValue: V, currentValue: V, currentIndex: number, array: V[]) => V} reducer
 * @returns {T}
 */
export function reduceProperties(objects, reducer) {
	let keys = Object.keys(objects[0]);
	let entries = keys.map(key => [key, objects.map(o => o[key]).reduce(reducer)]);
	// @ts-expect-error
	return Object.fromEntries(entries);
}
/**
 * Promise.all() but for objects
 * @template {string[]} Keys
 * @template {Record<Keys[number], Promise<any>>} T
 * @param {T} object
 * @returns {Promise<{[K in keyof T]: Awaited<T[K]>}>}
 */
export async function awaitAllEntries(object) {
	return Object.fromEntries(await Promise.all(Object.entries(object).map(async ([key, promise]) => [key, await promise])));
}
```

## File: src/utils/strings.js
```javascript
import { repeatedlyApplyEndofunction } from "./meta.js";

/**
 * Measures the dimensions of a string of text.
 * @param {string} text
 * @param {string} font
 * @returns {TextMetrics}
 */
export function measureText(text, font) {
	let can = new OffscreenCanvas(0, 0);
	let ctx = can.getContext("2d", {
		willReadFrequently: true
	});
	ctx.font = font;
	return ctx.measureText(text);
}
export function stringToImageData(text, textCol = "black", backgroundCol = "white", font = "12px monospace") {
	let can = new OffscreenCanvas(0, 20);
	let ctx = can.getContext("2d", {
		willReadFrequently: true
	});
	ctx.font = font;
	can.width = ctx.measureText(text).width;
	ctx.fillStyle = backgroundCol;
	ctx.fillRect(0, 0, can.width, can.height);
	ctx.fillStyle = textCol;
	ctx.font = font;
	ctx.fillText(text, 0, 15);
	return ctx.getImageData(0, 0, can.width, can.height);
}
/**
 * Joins an array of strings with "or", localised.
 * @param {string[]} arr
 * @param {string} [language]
 * @returns {string}
 */
export function joinOr(arr, language = "en") {
	return (new Intl.ListFormat(language.replaceAll("_", "-"), {
		type: "disjunction"
	})).format(arr);
}

export function addOrdinalSuffix(num) {
	return num + (num % 10 == 1 && num % 100 != 11? "st" : num % 10 == 2 && num % 100 != 12? "nd" : num % 10 == 3 && num % 100 != 13? "rd" : "th");
}

/**
 * Functions identically to `replaceAll()` on a string, but performs it repeatedly until no more changes are made.
 * @param {string} string
 * @param {string | RegExp} searchValue
 * @param {string} replaceValue
 * @param {number} [maxRepetitions] The maximum number of replacement repetitions allowed before throwing an error.
 * @returns {string}
 */
export function repeatedlyReplaceAll(string, searchValue, replaceValue, maxRepetitions) {
	return repeatedlyApplyEndofunction(string, str => str.replaceAll(searchValue, replaceValue), maxRepetitions);
}
```

## File: src/utils/translations.js
```javascript
import { jsonc } from "./conversions.js";

let translationLanguages = {};
export async function loadTranslationLanguage(language) {
	translationLanguages[language] ??= await fetch(`translations/${language}.json`).then(res => jsonc(res)).catch(() => {
		console.warn(`Failed to load language ${language} for translations!`);
		return {};
	});
}
/**
 * Looks up a translation from translations/`language`.json
 * @param {string} translationKey
 * @param {string} language
 * @returns {string | undefined}
 */
export function translate(translationKey, language) {
	if(!(language in translationLanguages)) {
		console.error(`Language ${language} not loaded for translation!`);
		return undefined;
	}
	return translationLanguages[language][translationKey]?.replaceAll(/`([^`]+)`/g, "<code>$1</code>")?.replaceAll(/\[([^\]]+)\]\(([^\)]+)\)/g, `<a href="$2" target="_blank">$1</a>`);
}
```

## File: src/utils/vec2.js
```javascript
/**
 * @param {Vec2} a
 * @param {Vec2} b
 * @returns {Vec2}
 */
export function add(a, b) {
	return [a[0] + b[0], a[1] + b[1]];
}
/**
 * @param {Vec2} a
 * @param {Vec2} b
 * @returns {Vec2}
 */
export function sub(a, b) {
	return [a[0] - b[0], a[1] - b[1]];
}
/**
 * @param {Vec2} a
 * @param {Vec2} b
 * @returns {boolean}
 */
export function equals(a, b) {
	return a[0] == b[0] && a[1] == b[1];
}

/** @import { Vec2 } from "../common.types.ts" */
```

## File: src/utils/vec3.js
```javascript
import { hypot, round } from "./math.js";

/**
 * @param {Vec3} a
 * @param {Vec3} b
 * @returns {Vec3}
 */
export function add(a, b) {
	return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
/**
 * @param {Vec3} a
 * @param {Vec3} b
 * @returns {Vec3}
 */
export function sub(a, b) {
	return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
/**
 * @param {Vec3} vec
 * @param {number} factor
 * @returns {Vec3}
 */
export function mul(vec, factor) {
	return [vec[0] * factor, vec[1] * factor, vec[2] * factor];
}
/**
 * @param {Vec3} a
 * @param {Vec3} b
 * @returns {Vec3}
 */
export function crossProduct(a, b) {
	return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
/**
 * @param {Vec3} vec
 * @returns {Vec3}
 */
export function normalize(vec) {
	return mul(vec, 1 / hypot(...vec))
}
/**
 * @param {Vec3} vec
 * @param {number} decimals
 * @returns {Vec3}
 */
export function toFixed(vec, decimals) {
	let power = 10 ** decimals;
	return [round(vec[0] * power) / power, round(vec[1] * power) / power, round(vec[2] * power) / power];
}
/**
 * @param {Vec3} vec
 * @returns {string}
 */
export function stringify(vec) {
	return `(${vec[0]}, ${vec[1]}, ${vec[2]})`;
}

/** @import { Vec3 } from "../common.types.ts" */
```

## File: src/BlockGeoMaker.js
```javascript
// this looks interesting: https://github.com/PrismarineJS/minecraft-data/blob/master/data/bedrock/1.20.71/blockCollisionShapes.json (Object.fromEntries(Object.entries(d.blocks).map(([name, indices])=>[name,indices.map(i=>d.shapes[i])])))
// READ: this also looks pretty comprehensive: https://github.com/MCBE-Development-Wiki/mcbe-dev-home/blob/main/docs/misc/enums/block_shape.md
// https://github.com/bricktea/MCStructure/blob/main/docs/1.16.201/enums/B.md

import { hexColorToClampedTriplet, JSONSet, max, rotateDeg, conditionallyGroup, mulMat4, tuple, vec2, vec3, PatternMap, abs } from "./utils.js";

// https://wiki.bedrock.dev/visuals/material-creations.html#overlay-color-in-render-controllers
// https://wiki.bedrock.dev/documentation/materials.html#entity-alphatest

export default class BlockGeoMaker {
	/** @readonly @type {HoloPrintConfig} */
	config;
	textureRefs = new JSONSet();
	
	/** @readonly @type {EntityGeoMaker} */
	#entityGeoMaker;
	
	/** @readonly @type {Data.BlockShapes["individualBlocks"]} */
	#individualBlockShapes;
	/** @readonly @type {[RegExp, string][]} */
	#blockShapePatterns;
	/** @readonly @type {Data.BlockShapeGeos} */
	#blockShapeGeos;
	/** @readonly @type {Data.BlockEigenvariants} */
	#eigenvariants;
	
	/** @readonly @type {Data.Rotation} */
	#globalBlockStateRotations;
	/** @readonly @type {Map<string, Data.Rotation>} */
	#blockShapeBlockStateRotations = new Map();
	/** @readonly @type {Map<string, Data.Rotation>} */
	#blockNameBlockStateRotations = new Map();
	
	/** @readonly @type {Data.BlockStateVariants} */
	#globalBlockStateTextureVariants;
	/** @readonly @type {Map<string, Data.BlockStateVariants>} */
	#blockShapeBlockStateTextureVariants = new Map();
	/** @readonly @type {PatternMap<Data.BlockStateVariants>} */
	#blockNameBlockStateTextureVariants;
	
	/** @readonly @type {Map<string, string>} */
	#cachedBlockShapes = new Map();
	
	/**
	 * @param {HoloPrintConfig} config
	 * @param {EntityGeoMaker} entityGeoMaker
	 * @param {Data.BlockShapes} blockShapes
	 * @param {Data.BlockShapeGeos} blockShapeGeos
	 * @param {Data.BlockStateDefinitions} blockStateDefs
	 * @param {Data.BlockEigenvariants} eigenvariants
	 */
	constructor(config, entityGeoMaker, blockShapes, blockShapeGeos, blockStateDefs, eigenvariants) {
		this.config = config;
		this.#entityGeoMaker = entityGeoMaker;
		
		this.#individualBlockShapes = blockShapes.individualBlocks;
		this.#blockShapePatterns = Object.entries(blockShapes.patterns).map(([rule, blockShape]) => [new RegExp(rule), blockShape]); // store regular expressions from the start to avoid recompiling them every time
		this.#blockShapeGeos = blockShapeGeos;
		this.#eigenvariants = eigenvariants;
		
		// console.log(this.#blockShapeGeos)
		
		// block-state-driven rotations/texture variants can either be global, based on block shape, based on specific block names, or based on regular expressions for block names, hence the many variables.
		this.#globalBlockStateRotations = blockStateDefs.rotations["*"];
		Object.entries(blockStateDefs.rotations.blockShapes ?? {}).forEach(([blockShapes, rotationDefs]) => {
			blockShapes.split(",").forEach(blockShape => {
				this.#blockShapeBlockStateRotations.set(blockShape, rotationDefs);
			});
		});
		Object.entries(blockStateDefs.rotations.blockNames ?? {}).forEach(([blockNames, rotationDefs]) => {
			blockNames.split(",").forEach(blockName => {
				this.#blockNameBlockStateRotations.set(blockName, rotationDefs);
			});
		});
		
		this.#globalBlockStateTextureVariants = blockStateDefs.textureVariants["*"];
		Object.entries(blockStateDefs.textureVariants.blockShapes ?? {}).forEach(([blockShapes, textureVariantDefs]) => {
			blockShapes.split(",").forEach(blockShape => {
				this.#blockShapeBlockStateTextureVariants.set(blockShape, textureVariantDefs);
			});
		});
		this.#blockNameBlockStateTextureVariants = new PatternMap(Object.entries(blockStateDefs.textureVariants.blockNames ?? {}), ",");
	}
	/**
	 * Makes poly mesh templates (unscaled) and their centers of mass from a block palette.
	 * @param {Block[]} blockPalette
	 * @returns {Promise<{ templates: PolyMeshTemplateFace[][], centersOfMass: Vec3[] }>}
	 */
	async makePolyMeshTemplates(blockPalette) {
		let results = await Promise.all(blockPalette.map(block => this.#makePolyMeshTemplate(block)));
		return {
			templates: results.map(result => result.faces),
			centersOfMass: results.map(result => result.centerOfMass)
		};
	}
	/**
	 * Scales poly mesh template faces (with resolved UVs) towards their respective center of mass.
	 * @template {PolyMeshTemplateFace | PolyMeshTemplateFaceWithUvs} T
	 * @param {T[][]} polyMeshTemplatePalette
	 * @param {Vec3[]} centersOfMass
	 * @returns {T[][]}
	 */
	scalePolyMeshTemplates(polyMeshTemplatePalette, centersOfMass) {
		return polyMeshTemplatePalette.map((faces, i) => this.#scaleFaces(structuredClone(faces), centersOfMass[i]));
	}
	/**
	 * Makes a poly mesh template (i.e. an array of poly mesh template faces) from a block. Texture UVs are unresolved, and are indices for the textureRefs property.
	 * @param {Block} block
	 * @returns {Promise<{ faces: PolyMeshTemplateFace[], centerOfMass: Vec3 }>}
	 */
	async #makePolyMeshTemplate(block) {
		let blockName = block.name;
		let blockShape = this.#getBlockShape(blockName);
		let { faces, centerOfMass } = await this.#makePolyMeshTemplateFaces(block, blockShape);
		if(!faces) {
			console.debug(`No faces are being rendered for block ${blockName}`);
			return { faces: [], centerOfMass: [-1, -1, -1] };
		}
		if(blockShape.includes("<")) {
			blockShape = blockShape.slice(0, blockShape.indexOf("<"));
		}
		let rotation = this.#getBlockRotation(block, blockShape);
		if(rotation) {
			faces.forEach(face => {
				face.normal = this.#applyEulerRotation(face.normal, rotation, [0, 0, 0]);
				face.vertices.forEach(vertex => {
					vertex.pos = this.#applyEulerRotation(vertex.pos, rotation, [8, 8, 8]); // (8, 8, 8) is the block center and the pivot for all block-wide rotations
				});
			});
			centerOfMass = this.#applyEulerRotation(centerOfMass, rotation, [8, 8, 8]);
		}
		faces.forEach(face => {
			if(face.fullbright) {
				face.normal = [0, 1, 0];
			} else {
				face.normal = vec3.toFixed(face.normal, 4);
			}
			delete face.fullbright;
		});
		return { faces, centerOfMass };
	}
	/**
	 * Gets the block shape for a specific block.
	 * @param {string} blockName
	 * @returns {string}
	 */
	#getBlockShape(blockName) {
		if(this.#cachedBlockShapes.has(blockName)) {
			return this.#cachedBlockShapes.get(blockName);
		}
		let individualBlockShape = this.#individualBlockShapes[blockName];
		if(individualBlockShape) {
			return individualBlockShape;
		}
		let matchingBlockShape = this.#blockShapePatterns.find(([pattern]) => pattern.test(blockName))?.[1]; // could use .filter to catch double matches but that's a skill issue
		let blockShape = matchingBlockShape ?? "block";
		this.#cachedBlockShapes.set(blockName, blockShape);
		return blockShape;
	}
	/**
	 * Makes the poly mesh faces for a block.
	 * @param {Block} block
	 * @param {string} blockShape
	 * @returns {Promise<{ faces?: (PolyMeshTemplateFace & { fullbright?: boolean })[], centerOfMass?: Vec3 }>}
	 */
	async #makePolyMeshTemplateFaces(block, blockShape) {
		let specialTexture;
		if(blockShape.includes("<")) {
			[, blockShape, specialTexture] = blockShape.match(/^(\w+)<([\w\/]*)>$/);
		}
		
		let unfilteredCubes = structuredClone(this.#blockShapeGeos[blockShape]);
		if(!unfilteredCubes) {
			console.error(`Could not find geometry for block shape ${blockShape}; defaulting to "block"`);
			unfilteredCubes = structuredClone(this.#blockShapeGeos["block"]);
		}
		let filteredCubes = [];
		let allFaces = [];
		while(unfilteredCubes.length) {
			// For each unfiltered cube, we add it to filteredCubes if we've checked the "if" flag. If there are copies, we then add them back to unfilteredCubes.
			let cube = unfilteredCubes.shift();
			if("blockStates" in cube) {
				let blockOverride = structuredClone(block);
				for(let blockStateName in cube.blockStates) {
					if(typeof cube.blockStates[blockStateName] == "string") {
						cube.blockStates[blockStateName] = this.#interpolateInBlockValues(block, cube.blockStates[blockStateName], cube, specialTexture);
					}
				}
				blockOverride.states = { ...blockOverride.states, ...cube.blockStates };
				cube["blockOverride"] = blockOverride;
				delete cube.blockStates;
			}
			if("if" in cube) {
				if(!this.#checkBlockStateConditional(cube["blockOverride"] ?? block, cube.if)) {
					continue;
				}
				delete cube.if;
			}
			if("terrainTexture" in cube) {
				cube.terrainTexture = this.#interpolateInBlockValues(cube["blockOverride"] ?? block, cube.terrainTexture, cube, specialTexture);
			}
			if("copy" in cube) {
				if(cube.copy == blockShape) { // prevent recursion (sometimes)
					console.error(`Cannot copy the same block shape: ${blockShape}`);
					continue;
				}
				let copiedCubes = structuredClone(this.#blockShapeGeos[cube.copy]);
				if(!copiedCubes) {
					console.error(`Could not find geometry for block shape ${blockShape}; defaulting to "block"`);
					copiedCubes = structuredClone(this.#blockShapeGeos["block"]);
				}
				let fieldsToCopy = Object.keys(cube).filter(field => !["copy", "rot", "pivot", "translate"].includes(field));
				copiedCubes.forEach(copiedCube => {
					if("translate" in cube) {
						copiedCube.translate = vec3.add(copiedCube.translate ?? [0, 0, 0], cube.translate);
					}
					fieldsToCopy.forEach(field => { // copy all fields from this cube onto the new ones
						if(field == "flipTextureHorizontally" || field == "flipTextureVertically") { // these ones are arrays but are supposed to represent sets, so we take the XOR/symmetric difference (ik there's a native method but it's very new)
							let facesInCopiedCube = new Set(copiedCube[field] ?? []);
							cube[field].forEach(face => {
								if(facesInCopiedCube.has(face)) {
									facesInCopiedCube.delete(face);
								} else {
									facesInCopiedCube.add(face);
								}
							});
							copiedCube[field] = Array.from(facesInCopiedCube);
						} else if(typeof copiedCube[field] == "object") {
							copiedCube[field] = { ...cube[field], ...copiedCube[field] }; // fields on the copied cubes still take priority over the "parent" cube (the one that's copying it)
						} else {
							copiedCube[field] ??= structuredClone(cube[field]);
						}
					});
					if("rot" in cube) {
						if("rot" in copiedCube) {
							// maths for combining both rotations is hard so we handle it differently and create a list of extra rotations.
							// HoloPrint.js will create a wrapper bone for each rotation
							copiedCube["extra_rots"] ??= [];
							copiedCube["extra_rots"].unshift({
								rot: cube.rot,
								pivot: cube.pivot ?? [8, 8, 8]
							});
						} else {
							copiedCube.rot = cube.rot;
							copiedCube.pivot = cube.pivot ?? copiedCube.pivot;
						}
					}
				});
				unfilteredCubes.push(...copiedCubes);
			} else if("copyBlock" in cube) {
				let match = cube.copyBlock.match(/^entity\.(.+)$/);
				if(!match) {
					console.error(`Incorrect formatted copyBlock property: ${match}`);
					continue;
				}
				let blockEntityProperty = match[1];
				/** @type {Block} */
				let blockToCopy = block.blockEntityData?.[blockEntityProperty];
				if(!blockToCopy) {
					console.error(`Cannot find block entity property ${blockEntityProperty} on block ${block.name}:`, block);
					continue;
				}
				blockToCopy.name = blockToCopy.name.replace(/^minecraft:/, "");
				if(this.config.IGNORED_BLOCKS.includes(blockToCopy.name)) {
					continue;
				}
				blockToCopy["#copied_via_copy_block"] = true; // I will learn rust if mojang adds this to the structure NBT
				let newBlockShape = this.#getBlockShape(blockToCopy.name);
				let { faces: newFaces } = await this.#makePolyMeshTemplateFaces(blockToCopy, newBlockShape);
				if("translate" in cube) {
					newFaces.forEach(face => {
						for(let i = 0; i < 4; i++) {
							face.vertices[i].pos = vec3.add(face.vertices[i].pos, cube.translate);
						}
					});
				}
				allFaces.push(...newFaces);
			} else if("copyEntityModel" in cube) {
				unfilteredCubes.push(...await this.#entityGeoMaker.entityModelToCubes(cube.copyEntityModel));
			} else {
				filteredCubes.push(cube);
			}
		}
		if(filteredCubes.length == 0) {
			return {};
		}
		let filteredCubesWithEasyProperties = filteredCubes.map(cube => this.#addEasyPropertyAccessors(cube));
		let cubes = this.#optimizeGeometry(filteredCubesWithEasyProperties);
		cubes.sort((a, b) => a.w * a.h * a.d - b.w * b.h * b.d); // make larger cubes be rendered later. this helps for blocks like slime and honey where the inner cube has to be rendered before the outer cube
		
		let blockName = block.name;
		let variant = this.#getTextureVariant(block);
		let variantWithoutEigenvariant;
		
		let allCubesAreFlat = true;
		cubes.forEach(cube => {
			let uv = this.#calculateUv(cube);
			
			// When the size of a cube in a direction is 0, we can remove all faces but 1. Because we have DisableCulling in the material, this single face will render from the back as well.
			// On a side note, if there wasn't the DisableCulling material state and we rendered both faces on opposite sides, the texture wouldn't be mirrored on the other side, so this is another bug fix ig
			if(abs(cube.w) < 0.00001) {
				// 0 width: only render west
				["east", "down", "up", "north", "south"].forEach(faceName => delete uv[faceName]);
			}
			if(abs(cube.h) < 0.00001) {
				// 0 height: only render down
				["west", "east", "up", "north", "south"].forEach(faceName => delete uv[faceName]);
			}
			if(abs(cube.d) < 0.00001) {
				// 0 depth: only render north
				["west", "east", "down", "up", "south"].forEach(faceName => delete uv[faceName]);
			}
			
			let cubeVariant;
			if("variant" in cube) {
				cubeVariant = cube.variant;
			} else if(cube.ignoreEigenvariant) {
				if("blockOverride" in cube) {
					cubeVariant = this.#getTextureVariant(cube.blockOverride, true);
				} else {
					if(variantWithoutEigenvariant == undefined) {
						variantWithoutEigenvariant = this.#getTextureVariant(block, true);
					}
					cubeVariant = variantWithoutEigenvariant;
				}
			} else if("blockOverride" in cube) {
				cubeVariant = this.#getTextureVariant(cube.blockOverride);
			} else {
				cubeVariant = variant; // default variant for this block
			}
			
			// if the arrays are undefined, the set will be empty, so no ?? [] is needed here
			let texturesToFlipHorizontally = new Set(cube.flipTextureHorizontally);
			let texturesToFlipVertically = new Set(cube.flipTextureVertically);
			
			/** @type {(PolyMeshTemplateFace & { fullbright: boolean })[]} */
			let faces = [];
			let textureSize = cube.textureSize ?? [16, 16];
			// add generic keys to all faces, and convert texture references into indices
			Object.entries(uv).forEach(([faceName, face]) => {
				let isSideFace = ["west", "east", "north", "south"].includes(faceName);
				let textureFace = cube.textures?.[faceName] ?? (isSideFace? cube.textures?.side : undefined) ?? cube.textures?.["*"] ?? faceName;
				if(textureFace == "none") {
					return;
				}
				textureFace = this.#interpolateInBlockValues(cube.blockOverride ?? block, textureFace, cube, specialTexture);
				let textureRef = {
					uv: face.uv.map((x, i) => x / textureSize[i]),
					uvSize: face.uvSize.map((x, i) => x / textureSize[i]),
					blockName,
					textureFace,
					variant: cubeVariant
				};
				if(textureFace == "#tex") {
					if(specialTexture) {
						textureRef.texturePathOverride = specialTexture;
					} else {
						console.error(`No #tex for block ${blockName} and blockshape ${blockShape}!`);
					}
				} else if(/^textures\/.+[^/]$/.test(textureFace)) { // file path
					textureRef.texturePathOverride = textureFace;
				} else {
					let terrainTextureOverride = cube.terrainTexture;
					if(terrainTextureOverride) {
						delete textureRef.blockName;
						delete textureRef.textureFace;
						textureRef.terrainTextureOverride = terrainTextureOverride;
					}
				}
				if("texturePathOverride" in textureRef) {
					delete textureRef.blockName;
					delete textureRef.textureFace;
					delete textureRef.variant;
				}
				if("tint" in cube) {
					let tint = cube.tint;
					tint = this.#interpolateInBlockValues(cube.blockOverride ?? block, tint, cube, specialTexture);
					if(tint[0] == "#") {
						textureRef.tint = hexColorToClampedTriplet(tint);
					} else {
						// this is from cauldrons; colour is a 32-bit ARGB colour
						let colorCode = 2 ** 32 + Number(tint);
						textureRef.tint = [colorCode >> 16 & 0xFF, colorCode >> 8 & 0xFF, colorCode & 0xFF].map(x => x / 255);
					}
				}
				
				this.textureRefs.add(textureRef);
				let vertices = this.#getVertices(cube, faceName);
				let uvRot = cube.uvRot?.[faceName] ?? (isSideFace? cube.uvRot?.side : undefined) ?? cube.uvRot?.["*"];
				if(uvRot) {
					while(uvRot >= 90) {
						[vertices[0].corner, vertices[1].corner, vertices[3].corner, vertices[2].corner] = [vertices[2].corner, vertices[0].corner, vertices[1].corner, vertices[3].corner];
						uvRot -= 90;
					}
					while(uvRot <= -90) {
						[vertices[2].corner, vertices[0].corner, vertices[1].corner, vertices[3].corner] = [vertices[0].corner, vertices[1].corner, vertices[3].corner, vertices[2].corner];
						uvRot += 90;
					}
				}
				let flipHorizontallyFactors = [
					texturesToFlipHorizontally.has(faceName),
					isSideFace && texturesToFlipHorizontally.has("side"),
					texturesToFlipHorizontally.has("*"),
					faceName == "down" || faceName == "up" // in MC the down/up faces are rotated 180 degrees compared to how they are in geometry; this can be faked by flipping both axes.
				];
				let flipVerticallyFactors = [
					texturesToFlipVertically.has(faceName),
					isSideFace && texturesToFlipVertically.has("side"),
					texturesToFlipVertically.has("*"),
					faceName == "down" || faceName == "up"
				];
				if("boxUv" in cube) { // box uv does some flipping automatically
					flipHorizontallyFactors.push(faceName != "north" && faceName != "south");
					flipVerticallyFactors.push(faceName == "up");
				}
				// calculate the XOR of all "factors"
				let flipTextureHorizontally = flipHorizontallyFactors.reduce((a, b) => a != b, false);
				let flipTextureVertically = flipVerticallyFactors.reduce((a, b) => a != b, false);
				
				if(flipTextureHorizontally) {
					[vertices[0].corner, vertices[1].corner] = [vertices[1].corner, vertices[0].corner];
					[vertices[2].corner, vertices[3].corner] = [vertices[3].corner, vertices[2].corner];
				}
				if(flipTextureVertically) {
					[vertices[0].corner, vertices[2].corner] = [vertices[2].corner, vertices[0].corner];
					[vertices[1].corner, vertices[3].corner] = [vertices[3].corner, vertices[1].corner];
				}
				for(let i = 0; i < 4; i++) {
					let vertex = vertices[i];
					if("rot" in cube) {
						vertex.pos = this.#applyEulerRotation(vertex.pos, cube.rot, cube.pivot ?? [8, 8, 8]);
					}
					cube["extra_rots"]?.slice()?.reverse()?.forEach(extraRot => {
						vertex.pos = this.#applyEulerRotation(vertex.pos, extraRot.rot, extraRot.pivot);
					});
					if("translate" in cube) {
						vertex.pos = vec3.add(vertex.pos, cube.translate);
					}
					if("transform" in cube) {
						let transformed = mulMat4(cube.transform, vertex.pos);
						let newPos = vec3.mul([transformed[0], transformed[1], transformed[2]], 1 / transformed[3]);
						vertex.pos = newPos;
					}
				}
				faces.push({
					normal: this.#getSurfaceNormal(vertices),
					textureRefI: this.textureRefs.indexOf(textureRef),
					vertices,
					fullbright: Boolean(cube.fullbright)
				});
			});
			if(faces.length == 1 && !("culled_faces" in cube)) {
				if(faces[0].normal[1] < 0) {
					faces[0].normal = vec3.mul(faces[0].normal, -1);
				}
			} else {
				allCubesAreFlat = false;
			}
			
			allFaces.push(...faces);
		});
		if(allCubesAreFlat) {
			allFaces.forEach(face => {
				face.fullbright = true; // blocks with only flat textures always appear at maximum brightness. source: me
			});
			// console.debug(`Making ${blockName} full bright!`);
		}
		let centerOfMass = this.#calculateCenterOfMass(cubes);
		return {
			faces: allFaces,
			centerOfMass
		};
	}
	/**
	 * Gets the block rotation for an entire block based on block states.
	 * @param {Block} block
	 * @param {string} blockShape
	 * @returns {Vec3 | null}
	 */
	#getBlockRotation(block, blockShape) {
		let blockName = block.name;
		let blockShapeSpecificRotations = this.#blockShapeBlockStateRotations.get(blockShape);
		let blockNameSpecificRotations = this.#blockNameBlockStateRotations.get(blockName);
		let statesAndBlockEntityData = this.#getBlockStatesAndEntityDataEntries(block);
		let rotation = null;
		statesAndBlockEntityData.forEach(([blockStateName, blockStateValue]) => {
			let rotations = blockNameSpecificRotations?.[blockStateName] ?? blockShapeSpecificRotations?.[blockStateName] ?? this.#globalBlockStateRotations[blockStateName]; // order: block name (exact match), block shape, global
			if(!rotations) {
				return; // this block state doesn't control rotation
			}
			
			if(!(blockStateValue in rotations)) {
				console.error(`Block state value ${blockStateValue} for rotation block state ${blockStateName} not found on ${blockName}...`, block);
				return;
			}
			if(rotation) {
				console.debug(`Multiple rotation block states for block ${block.name}; adding them all together!`);
				rotation = vec3.add(rotation, rotations[blockStateValue]);
			} else {
				rotation = rotations[blockStateValue];
			}
		});
		return rotation;
	}
	/**
	 * Applies Euler rotations on a position in 3D space in the order X-Y-Z.
	 * @param {Vec3} pos
	 * @param {Vec3} rotation Angles in degrees
	 * @param {Vec3} pivot
	 * @returns {Vec3}
	 */
	#applyEulerRotation(pos, rotation, pivot) {
		let res = vec3.add(pos, vec3.mul(pivot, -1));
		[res[1], res[2]] = rotateDeg([res[1], res[2]], -rotation[0]); // idk why but it's negative
		[res[0], res[2]] = rotateDeg([res[0], res[2]], -rotation[1]);
		[res[0], res[1]] = rotateDeg([res[0], res[1]], -rotation[2]);
		res = vec3.add(res, pivot);
		return res;
	}
	/**
	 * Returns the entries of a block's states and block entity data (prefixed by `entity.`; only first-level properties are supported).
	 * @param {Block} block
	 * @returns {[string, any][]}
	 */
	#getBlockStatesAndEntityDataEntries(block) {
		return [...Object.entries(block.states ?? {}), ...Object.entries(block.blockEntityData ?? {}).map(([key, value]) => [`entity.${key}`, value])];
	}
	/**
	 * Adds x/y/z/w/h/d properties to cubes for easy typing.
	 * @param {Data.Cube} cube
	 * @returns {CubeWithEasyProperties}
	 */
	#addEasyPropertyAccessors(cube) {
		return {
			...cube,
			get x() { return this.pos[0]; },
			set x(x) { this.pos[0] = x; },
			get y() { return this.pos[1]; },
			set y(y) { this.pos[1] = y; },
			get z() { return this.pos[2]; },
			set z(z) { this.pos[2] = z; },
			get w() { return this.size[0]; },
			set w(w) { this.size[0] = w; },
			get h() { return this.size[1]; },
			set h(d) { this.size[1] = d; },
			get d() { return this.size[2]; },
			set d(h) { this.size[2] = h; }
		};
	}
	/**
	 * Optimises geometries by merging adjacent cubes and culling hidden faces.
	 * @param {CubeWithEasyProperties[]} cubes
	 * @returns {CubeWithEasyProperties[]}
	 */
	#optimizeGeometry(cubes) {
		let [unoptimizableCubes, optimizableCubes] = conditionallyGroup(cubes, cube => !("rot" in cube));
		optimizableCubes.forEach(cube => {
			if("translate" in cube) {
				cube.pos = vec3.add(cube.pos, cube.translate);
			}
		});
		let mergeableGroups = new Map(optimizableCubes.map(cube => [cube, this.#getMergingGroup(cube)]));
		
		let mergedCubes = [];
		optimizableCubes.forEach(cube1 => { // this is the cube we're trying to add to mergedCubes
			tryMerging: while(true) {
				for(let [i, cube2] of mergedCubes.entries()) {
					let mergeable = mergeableGroups.get(cube1) == mergeableGroups.get(cube2);
					if(this.#tryMergeCubesOneWayAndCullFaces(cube1, cube2, mergeable)) {
						console.debug("Merged cube", cube2, "into", cube1);
						Object.entries(cube1["culled_faces"] ?? {}).forEach(([faceName, preCullingValue]) => {
							if(preCullingValue) {
								cube1.textures[faceName] = preCullingValue;
							} else {
								delete cube1.textures[faceName];
							}
						});
						delete cube1["culled_faces"];
						mergedCubes.splice(i, 1);
						continue tryMerging; // since boneCube1 has been mutated, this stops the current comparison of boneCube1 with the already merged cubes, and makes it start again.
					} else if(this.#tryMergeCubesOneWayAndCullFaces(cube2, cube1, mergeable)) {
						console.debug("Merged cube", cube1, "into", cube2);
						Object.entries(cube2["culled_faces"] ?? {}).forEach(([faceName, preCullingValue]) => {
							if(preCullingValue) {
								cube2.textures[faceName] = preCullingValue;
							} else {
								delete cube2.textures[faceName];
							}
						});
						delete cube2["culled_faces"];
						mergedCubes.splice(i, 1);
						cube1 = cube2;
						continue tryMerging; // boneCube2 has been mutated, so we removed it from mergedCubes and swap it out for boneCube1, then restart trying to merge it.
					}
				}
				break; // we'll only get to here when it's checked all combinations between the already merged cubes and the new cube (cube1)
			}
			mergedCubes.push(cube1);
		});
		mergedCubes.forEach(cube => {
			if("translate" in cube) {
				cube.pos = vec3.sub(cube.pos, cube.translate);
			}
		});
		
		return [...unoptimizableCubes, ...mergedCubes];
	}
	/**
	 * Returns a "merging group" for a cube. Cubes in the same merging group can be merged together. It doesn't affect face culling.
	 * @param {CubeWithEasyProperties} cube
	 * @returns {number | string}
	 */
	#getMergingGroup(cube) {
		if(cube.disableMerging || "translate" in cube || "uv" in cube || "uvSizes" in cube || "uvRot" in cube || "boxUv" in cube) {
			return NaN; // in JS, NaN == NaN is false, disabling these cubes from being merged at all
		} else {
			return JSON.stringify([cube.textures, cube.textureSize, cube.blockOverride, cube.terrainTexture, cube.variant, cube.ignoreEigenvariant, cube.tint, cube.fullbright, cube.flipTextureHorizontally, cube.flipTextureVertically, cube.arrays]); // these are all the properties that could exist on a cube at this point - basically, two cubes have to be identical in all of these in order to be mergeable
		}
	}
	/**
	 * Unpurely tries to merge the second cube into the first if it is positively adjacent, and culls hidden faces if they are touching.
	 * @param {CubeWithEasyProperties} cube1
	 * @param {CubeWithEasyProperties} cube2
	 * @param {boolean} mergeable If the cubes can be merged
	 * @returns {boolean} If the second cube was merged into the first.
	 */
	#tryMergeCubesOneWayAndCullFaces(cube1, cube2, mergeable) {
		if(cube1.x + cube1.w == cube2.x) { // cube 2 is to the right of cube 1
			if(mergeable && cube1.y == cube2.y && cube1.z == cube2.z && cube1.h == cube2.h && cube1.d == cube2.d) {
				cube1.w += cube2.w; // grow cube 1...
				return true;
			}
		} else if(cube1.y + cube1.h == cube2.y) { // cube 2 is above cube 1
			if(mergeable && cube1.x == cube2.x && cube1.z == cube2.z && cube1.w == cube2.w && cube1.d == cube2.d) {
				cube1.h += cube2.h;
				return true;
			}
		} else if(cube1.z + cube1.d == cube2.z) { // cube 2 is behind cube 1
			if(mergeable && cube1.x == cube2.x && cube1.y == cube2.y && cube1.w == cube2.w && cube1.h == cube2.h) {
				cube1.d += cube2.d;
				return true;
			}
		}
		if(cube1.w == 0 || cube1.h == 0 || cube1.d == 0 || cube2.w == 0 || cube2.h == 0 || cube2.d == 0) {
			return false; // don't cull flat cubes
		}
		if(cube1.x < cube2.x && cube1.x + cube1.w >= cube2.x && cube1.x + cube1.w <= cube2.x + cube2.w) {
			if(cube1.y >= cube2.y && cube1.y + cube1.h <= cube2.y + cube2.h && cube1.z >= cube2.z && cube1.z + cube1.d <= cube2.z + cube2.d) { // right face of cube1 fits within left face of cube2
				cube1.textures ??= {};
				if(cube1.textures.west != "none") {
					cube1["culled_faces"] ??= {};
					cube1["culled_faces"].west = cube1.textures.west; // keep track of faces which were culled. this is so if the cubes are merged, they reset to before the faces were culled; and so if all faces but one are culled, the proper shading can be applied
				}
				cube1.textures.west = "none";
			}
			if(cube2.y >= cube1.y && cube2.y + cube2.h <= cube1.y + cube1.h && cube2.z >= cube1.z && cube2.z + cube2.d <= cube1.z + cube1.d) { // left face of cube2 fits within right face of cube1
				cube2.textures ??= {};
				if(cube2.textures.east != "none") {
					cube2["culled_faces"] ??= {};
					cube2["culled_faces"].east = cube2.textures.east; // keep track of faces which were culled. this is so if the cubes are merged, they reset to before the faces were culled; and so if all faces but one are culled, the proper shading can be applied
				}
				cube2.textures.east = "none";
			}
		}
		if(cube1.y < cube2.y && cube1.y + cube1.h >= cube2.y && cube1.y + cube1.h <= cube2.y + cube2.h) {
			if(cube1.x >= cube2.x && cube1.x + cube1.w <= cube2.x + cube2.w && cube1.z >= cube2.z && cube1.z + cube1.d <= cube2.z + cube2.d) { // top face of cube1 fits within bottom face of cube2
				cube1.textures ??= {};
				if(cube1.textures.up != "none") {
					cube1["culled_faces"] ??= {};
					cube1["culled_faces"].up = cube1.textures.up; // keep track of faces which were culled. this is so if the cubes are merged, they reset to before the faces were culled; and so if all faces but one are culled, the proper shading can be applied
				}
				cube1.textures.up = "none";
			}
			if(cube2.x >= cube1.x && cube2.x + cube2.w <= cube1.x + cube1.w && cube2.z >= cube1.z && cube2.z + cube2.d <= cube1.z + cube1.d) { // bottom face of cube2 fits within top face of cube1
				cube2.textures ??= {};
				if(cube2.textures.down != "none") {
					cube2["culled_faces"] ??= {};
					cube2["culled_faces"].down = cube2.textures.down; // keep track of faces which were culled. this is so if the cubes are merged, they reset to before the faces were culled; and so if all faces but one are culled, the proper shading can be applied
				}
				cube2.textures.down = "none";
			}
		}
		if(cube1.z < cube2.z && cube1.z + cube1.d >= cube2.z && cube1.z + cube1.d <= cube2.z + cube2.d) {
			if(cube1.x >= cube2.x && cube1.x + cube1.w <= cube2.x + cube2.w && cube1.y >= cube2.y && cube1.y + cube1.h <= cube2.y + cube2.h) { // back face of cube1 fits within front face of cube2
				cube1.textures ??= {};
				if(cube1.textures.south != "none") {
					cube1["culled_faces"] ??= {};
					cube1["culled_faces"].south = cube1.textures.south; // keep track of faces which were culled. this is so if the cubes are merged, they reset to before the faces were culled; and so if all faces but one are culled, the proper shading can be applied
				}
				cube1.textures.south = "none";
			}
			if(cube2.x >= cube1.x && cube2.x + cube2.w <= cube1.x + cube1.w && cube2.y >= cube1.y && cube2.y + cube2.h <= cube1.y + cube1.h) { // front face of cube2 fits within back face of cube1
				cube2.textures ??= {};
				if(cube2.textures.north != "none") {
					cube2["culled_faces"] ??= {};
					cube2["culled_faces"].north = cube2.textures.north; // keep track of faces which were culled. this is so if the cubes are merged, they reset to before the faces were culled; and so if all faces but one are culled, the proper shading can be applied
				}
				cube2.textures.north = "none";
			}
		}
		return false;
	}
	/**
	 * Gets the index of the variant to use in terrain_texture.json for a block.
	 * @param {Block} block
	 * @param {boolean} [ignoreEigenvariant]
	 * @returns {number}
	 */
	#getTextureVariant(block, ignoreEigenvariant = false) {	
		let blockName = block.name;
		let eigenvariantExists = blockName in this.#eigenvariants;
		if(!ignoreEigenvariant && eigenvariantExists) {
			let variant = this.#eigenvariants[blockName];
			console.debug(`Using eigenvariant ${variant} for block ${blockName}`);
			return variant;
		} else if(ignoreEigenvariant && !eigenvariantExists) {
			console.warn(`Cannot ignore eigenvariant of ${blockName} as it doesn't exist!`);
		}
		
		if(!block.states && !block.blockEntityData) {
			return -1;
		}
		let blockShape = this.#getBlockShape(blockName); // In copied block shapes, we want to look at the original block shape's texture variants, not the copied's. E.g. With candle_cake, we don't want the cake that is copied to look at the texture variants for cake (which includes bite_counter).
		let statesAndBlockEntityData = this.#getBlockStatesAndEntityDataEntries(block);
		let blockShapeSpecificVariants = this.#blockShapeBlockStateTextureVariants.get(blockShape);
		if(blockShapeSpecificVariants?.["#exclusive_add"]) {
			let variant = 0;
			statesAndBlockEntityData.forEach(([blockStateName, blockStateValue]) => {
				if(blockStateName in blockShapeSpecificVariants) {
					let blockStateVariants = blockShapeSpecificVariants[blockStateName];
					if(!(blockStateValue in blockStateVariants)) {
						console.error(`Block state value ${blockStateValue} for texture-variating block state ${blockStateName} not found on ${blockName}...`, block);
						return;
					}
					variant += blockStateVariants[blockStateValue];
				}
			});
			return variant;
		}
		let blockNameSpecificVariants = this.#blockNameBlockStateTextureVariants.get(blockName);
		if(blockNameSpecificVariants?.["#exclusive_add"]) {
			let variant = 0;
			statesAndBlockEntityData.forEach(([blockStateName, blockStateValue]) => {
				if(blockStateName in blockNameSpecificVariants) {
					let blockStateVariants = blockNameSpecificVariants[blockStateName];
					if(!(blockStateValue in blockStateVariants)) {
						console.error(`Block state value ${blockStateValue} for texture-variating block state ${blockStateName} not found...`);
						return;
					}
					variant += blockStateVariants[blockStateValue];
				}
			});
			return variant;
		}
		let variant = -1;
		statesAndBlockEntityData.forEach(([blockStateName, blockStateValue]) => {
			let blockStateVariants = blockNameSpecificVariants?.[blockStateName] ?? blockShapeSpecificVariants?.[blockStateName] ?? this.#globalBlockStateTextureVariants[blockStateName];
			if(blockStateVariants == undefined) {
				return;
			}
			
			if(!(blockStateValue in blockStateVariants)) {
				console.error(`Block state value ${blockStateValue} for texture-variating block state ${blockStateName} not found...`);
				return;
			}
			let newVariant = blockStateVariants[blockStateValue];
			if(variant != -1) {
				console.warn(`Multiple texture-variating block states for block ${block.name}; using ${blockStateName}`);
			}
			variant = newVariant;
		});
		return variant;
	}
	/**
	 * Calculates the UV for a cube.
	 * @param {CubeWithEasyProperties} cube
	 * @returns {CubeUv}
	 */
	#calculateUv(cube) {
		if("boxUv" in cube) { // this is where a singular uv coordinate is specified, and the rest is calculated as below. used primarily in entity models.
			let boxUvSize = cube.boxUvSize ?? cube.size;
			let flipEastWest = !!cube.boxUvFlipEastWest;
			/** @type {CubeUv} */
			let uv = {
				up: {
					uv: [boxUvSize[2], 0],
					uvSize: [boxUvSize[0], boxUvSize[2]]
				},
				down: {
					uv: [boxUvSize[0] + boxUvSize[2], 0],
					uvSize: [boxUvSize[0], boxUvSize[2]]
				},
				west: {
					uv: [+flipEastWest * (boxUvSize[0] + boxUvSize[2]), boxUvSize[2]],
					uvSize: [boxUvSize[2], boxUvSize[1]]
				},
				north: {
					uv: [boxUvSize[2], boxUvSize[2]],
					uvSize: [boxUvSize[0], boxUvSize[1]]
				},
				east: {
					uv: [+!flipEastWest * (boxUvSize[0] + boxUvSize[2]), boxUvSize[2]],
					uvSize: [boxUvSize[2], boxUvSize[1]]
				},
				south: {
					uv: [boxUvSize[0] + boxUvSize[2] * 2, boxUvSize[2]],
					uvSize: [boxUvSize[0], boxUvSize[1]]
				}
			};
			Object.values(uv).forEach(face => {
				face.uv = vec2.add(face.uv, cube.boxUv);
			});
			return uv;
		} else {
			// In MCBE most non-full-block textures look at where the part that is being rendered is in relation to the entire cube space it's in - like it's being projected onto a full face then cut out. Kinda hard to explain sorry, I recommend messing around with fence textures so you understand how it works.
			let westUvOffset = tuple([cube.z, 16 - cube.y - cube.h]);
			let eastUvOffset = tuple([16 - cube.z - cube.d, 16 - cube.y - cube.h]);
			let downUvOffset = tuple([16 - cube.x - cube.w, 16 - cube.z - cube.d]);
			let upUvOffset = tuple([16 - cube.x - cube.w, cube.z]);
			let northUvOffset = tuple([cube.x, 16 - cube.y - cube.h]);
			let southUvOffset = tuple([16 - cube.x - cube.w, 16 - cube.y - cube.h]);
			return {
				west: {
					uv: cube.uv?.west ?? cube.uv?.side ?? cube.uv?.["*"] ?? westUvOffset,
					uvSize: cube.uvSizes?.west ?? cube.uvSizes?.side ?? cube.uvSizes?.["*"] ?? [cube.d, cube.h]
				},
				east: {
					uv: cube.uv?.east ?? cube.uv?.side ?? cube.uv?.["*"] ?? eastUvOffset,
					uvSize: cube.uvSizes?.east ?? cube.uvSizes?.side ?? cube.uvSizes?.["*"] ?? [cube.d, cube.h]
				},
				down: {
					uv: cube.uv?.down ?? cube.uv?.["*"] ?? downUvOffset,
					uvSize: cube.uvSizes?.down ?? cube.uvSizes?.["*"] ?? [cube.w, cube.d]
				},
				up: {
					uv: cube.uv?.up ?? cube.uv?.["*"] ?? upUvOffset,
					uvSize: cube.uvSizes?.up ?? cube.uvSizes?.["*"] ?? [cube.w, cube.d]
				},
				north: {
					uv: cube.uv?.north ?? cube.uv?.side ?? cube.uv?.["*"] ?? northUvOffset,
					uvSize: cube.uvSizes?.north ?? cube.uvSizes?.side ?? cube.uvSizes?.["*"] ?? [cube.w, cube.h]
				},
				south: {
					uv: cube.uv?.south ?? cube.uv?.side ?? cube.uv?.["*"] ?? southUvOffset,
					uvSize: cube.uvSizes?.south ?? cube.uvSizes?.side ?? cube.uvSizes?.["*"] ?? [cube.w, cube.h]
				}
			};
		}
	}
	/**
	 * Gets the default vertices for a cube and a specific face side.
	 * @param {Data.Cube} cube
	 * @param {Data.CardinalDirection} faceName
	 * @returns {[PolyMeshTemplateVertex, PolyMeshTemplateVertex, PolyMeshTemplateVertex, PolyMeshTemplateVertex]}
	 */
	#getVertices(cube, faceName) {
		let { pos, size } = cube;
		const cubeFaces = {
			west: tuple([[1, 1, 0], [1, 1, 1], [1, 0, 0], [1, 0, 1]]),
			east: tuple([[0, 1, 1], [0, 1, 0], [0, 0, 1], [0, 0, 0]]),
			down: tuple([[0, 0, 0], [1, 0, 0], [0, 0, 1], [1, 0, 1]]),
			up: tuple([[0, 1, 1], [1, 1, 1], [0, 1, 0], [1, 1, 0]]),
			north: tuple([[0, 1, 0], [1, 1, 0], [0, 0, 0], [1, 0, 0]]),
			south: tuple([[1, 1, 1], [0, 1, 1], [1, 0, 1], [0, 0, 1]])
		};
		return cubeFaces[faceName].map(([a, b, c], i) => {
			return {
				pos: tuple([pos[0] + size[0] * a, pos[1] + size[1] * b, pos[2] + size[2] * c]),
				corner: i
			};
		});
	}
	/**
	 * Gets the surface normal for a specific face of a cube.
	 * @param {[PolyMeshTemplateVertex, PolyMeshTemplateVertex, PolyMeshTemplateVertex, PolyMeshTemplateVertex]} vertices
	 * @returns {Vec3}
	 */
	#getSurfaceNormal(vertices) {
		let dir1 = vec3.sub(vertices[1].pos, vertices[0].pos);
		let dir2 = vec3.sub(vertices[2].pos, vertices[0].pos);
		let normal = vec3.normalize(vec3.crossProduct(dir1, dir2));
		return normal;
	}
	/**
	 * Calculates the center of mass of some cubes, assuming mass = volume. If all cubes are flat it will take surface area for mass.
	 * @param {CubeWithEasyProperties[]} cubes
	 * @returns {Vec3}
	 */
	#calculateCenterOfMass(cubes) {
		let center = tuple([0, 0, 0]);
		let totalMass = 0;
		cubes.forEach(cube => {
			let mass = cube.w * cube.h * cube.d; // assume uniform mass density
			totalMass += mass;
			let cubeCenter = vec3.add(cube.pos, vec3.mul(cube.size, 0.5));
			if("rot" in cube) {
				cubeCenter = this.#applyEulerRotation(cubeCenter, cube.rot, cube.pivot ?? [8, 8, 8]);
			}
			center = vec3.add(center, vec3.mul(cubeCenter, mass));
		});
		if(totalMass == 0) { // all cubes must be flat
			cubes.forEach(cube => {
				let mass = max(cube.w, 1) * max(cube.h, 1) * max(cube.d, 1);
				totalMass += mass;
				let cubeCenter = vec3.add(cube.pos, vec3.mul(cube.size, 0.5));
				if("rot" in cube) {
					cubeCenter = this.#applyEulerRotation(cubeCenter, cube.rot, cube.pivot ?? [8, 8, 8]);
				}
				center = vec3.add(center, vec3.mul(cubeCenter, mass));
			});
		}
		if(totalMass == 0) {
			console.error("0 mass...");
			return [8, 8, 8];
		}
		center = vec3.mul(center, 1 / totalMass);
		return center;
	}
	/**
	 * Scales poly mesh templates faces towards a center of mass.
	 * @template {PolyMeshTemplateFace | PolyMeshTemplateFaceWithUvs} T
	 * @param {T[]} faces
	 * @param {Vec3} centerOfMass
	 * @returns {T[]}
	 */
	#scaleFaces(faces, centerOfMass) {
		return faces.map(face => {
			for(let i = 0; i < 4; i++) {
				let v = face.vertices[i];
				let translated = vec3.add(v.pos, vec3.mul(centerOfMass, -1));
				v.pos = vec3.add(vec3.mul(translated, this.config.SCALE), centerOfMass); // I long for the day when ECMAScript has native vector types like in GLSL. This is equivalent to (v.pos - centerOfMass) * scale + centerOfMass
			}
			return face;
		});
	}
	/**
	 * Checks if a block matches an `if` condition.
	 * @param {Block} block
	 * @param {string} conditional
	 * @returns {boolean}
	 */
	#checkBlockStateConditional(block, conditional) {
		let trimmedConditional = conditional.replaceAll(/\s/g, "");
		let booleanOperations = trimmedConditional.match(/&&|\|\|/g) ?? []; // can have multiple separated by ?? or ||
		let booleanValues = trimmedConditional.split(/&&|\|\|/).map(booleanExpression => {
			if(booleanExpression == "#copied_via_copy_block") {
				return block["#copied_via_copy_block"] === true;
			} else if(booleanExpression == "!#copied_via_copy_block") {
				return block["#copied_via_copy_block"] !== true;
			}
			let match = booleanExpression.match(/^((?:entity\.)?[\w:&-?]+)(==|>|<|>=|<=|!=)(-?\w+)$/); // Despite the Minecraft Wiki and Microsoft creator documentation saying there can be boolean block states, they're stored as bytes in NBT
			if(!match) {
				console.error(`Incorrectly formatted block state expression "${booleanExpression}" from conditional "${conditional}"\n(Match: ${JSON.stringify(match)})`);
				return true; // If we miss the error message more geometry will draw more attention to it :D
			}
			let [, blockStateTerm, comparisonOperator, expectedBlockState] = match;
			let blockStateOperation = blockStateTerm.match(/^(entity\.)?([\w:]+)(?:(\?\?|&)(-?\d+))?$/);
			if(!blockStateOperation) {
				console.error(`Incorrectly formed block state term: ${blockStateTerm}`);
				return true;
			}
			let [, usingBlockEntityData, blockStateName, blockStateOperator, blockStateOperandString] = blockStateOperation;
			let dataObject = usingBlockEntityData? block.blockEntityData : block.states;
			let dataObjectName = usingBlockEntityData? "block entity data" : "states";
			if(!dataObject) {
				console.error(`No ${dataObjectName} in block ${block.name}!`);
				return true;
			}
			if(blockStateOperator != "??" && !(blockStateName in dataObject)) {
				console.error(`Cannot find ${dataObjectName} ${blockStateName} on block ${block.name}`);
				return true;
			}
			let actualBlockState = dataObject[blockStateName];
			
			if(blockStateOperator) {
				let blockStateOperand = Number(blockStateOperandString);
				if(Number.isNaN(blockStateOperand)) {
					console.error(`${dataObjectName} operand ${blockStateOperand} is not a number!`);
					return true;
				}
				actualBlockState = function() {
					switch(blockStateOperator) {
						case "&": return actualBlockState & blockStateOperand;
						case "??": return actualBlockState ?? blockStateOperand;
					}
					console.error(`Unknown ${dataObjectName} operator ${blockStateOperator} in term ${blockStateTerm}!`);
					return actualBlockState;
				}();
			}
			
			switch(comparisonOperator) {
				case "==": return actualBlockState == expectedBlockState;
				case ">": return actualBlockState > expectedBlockState;
				case "<": return actualBlockState < expectedBlockState;
				case ">=": return actualBlockState >= expectedBlockState;
				case "<=": return actualBlockState <= expectedBlockState;
				case "!=": return actualBlockState != expectedBlockState;
			}
			console.error(`Unknown ${dataObjectName} comparison operator ${comparisonOperator} in expression ${booleanExpression}`);
			return true;
		});
		
		// do && before || to match JS operator precedence
		let andRes = new Array(booleanOperations.filter(booleanOperation => booleanOperation == "||").length + 1);
		andRes[0] = booleanValues[0];
		let andResI = 1;
		booleanOperations.forEach((booleanOperation, i) => {
			if(booleanOperation == "&&") {
				andRes[andResI - 1] &&= booleanValues[i + 1];
			} else {
				andRes[andResI++] = booleanValues[i + 1];
			}
		});
		let orRes = andRes.some(x => x); // only || operations remain
		return orRes;
	}
	/**
	 * Substitutes values from a block into a particular expression.
	 * @param {Block} block
	 * @param {string} fullExpression
	 * @param {Data.Cube} cube
	 * @param {string} specialTexture
	 * @returns {"#tex" | "carried" | "carried.down" | "carried.east" | "carried.north" | "carried.side" | "carried.south" | "carried.up" | "carried.west" | "down" | "east" | "none" | "north" | "side" | "south" | "up" | "west" | `textures/${string}`} // yes
	 */
	#interpolateInBlockValues(block, fullExpression, cube, specialTexture) {
		let wholeStringValue;
		let substitutedExpression = fullExpression.replaceAll(/\${([^}]+)}/g, 
			/** @type {(...args: string[]) => string} */
			(bracketedExpression, expression) => {
				if(wholeStringValue != undefined) return;
				if(/^Array\.\w+\[[^\[]+\]$/.test(expression)) {
					let [, arrayName, arrayIndexVar] = expression.match(/^Array\.(\w+)\[([^\[]+)\]$/);
					let array = cube.arrays?.[arrayName];
					if(!array) {
						console.error(`Couldn't find array ${arrayName} in cube:`, cube);
						return "";
					}
					let arrayIndex;
					if(arrayIndexVar.startsWith("entity.")) {
						let blockEntityProperty = arrayIndexVar.slice(7);
						if(!(blockEntityProperty in (block.blockEntityData ?? {}))) {
							console.error(`Cannot find block entity property ${blockEntityProperty} in ${block.name}:`, block);
							return "";
						}
						arrayIndex = block.blockEntityData[blockEntityProperty];
					} else {
						if(!(arrayIndexVar in (block.states ?? {}))) {
							console.error(`Cannot find block state ${arrayIndexVar} in ${block.name}:`, block);
							return "";
						}
						arrayIndex = block.states[arrayIndexVar];
					}
					if(!(arrayIndex in array)) {
						console.error(`Array index out of bounds: ${JSON.stringify(array)}[${arrayIndex}]`);
						return "";
					}
					return array[arrayIndex];
				}
				let match = expression.replaceAll(/\s/g, "").match(/^(#block_name|#block_states|#block_entity_data|#tex)((?:\.\w+|\[-?\d+\])*)(\[(-?\d+):(-?\d*)\]|\[:(-?\d+)\])?(?:\?\?(.+))?$/);
				if(!match) {
					console.error(`Wrongly formatted expression: ${bracketedExpression}`);
					return "";
				}
				let [, specialVar, propertyChain, ...slicingAndDefault] = match;
				let value = function() {
					switch(specialVar) {
						case "#block_name": return block.name;
						case "#block_states": return block.states;
						case "#block_entity_data": return block.blockEntityData;
						case "#tex": {
							if(specialTexture == undefined) {
								console.error(`No #tex for block ${block.name}!`);
							}
							return specialTexture;
						}
					}
					console.error(`Unknown special variable: ${specialVar}`);
				}();
				propertyChain.match(/\.\w+|\[-?\d+\]/g)?.forEach(property => {
					let keys = property.match(/^\.(\w+)|\[(\d+)\]$/);
					value = value?.[keys[1] ?? keys[2]];
				});
				if(slicingAndDefault[0] != undefined && typeof value == "string") {
					value = value.slice(+slicingAndDefault[1], +(slicingAndDefault[3] ?? (slicingAndDefault[2] == ""? undefined : slicingAndDefault[2])));
				}
				if(value == undefined || value === "") {
					if(slicingAndDefault[4] != undefined) {
						let defaultValue = slicingAndDefault[4];
						if(/SET_WHOLE_STRING\([^)]+\)/.test(defaultValue)) {
							wholeStringValue = defaultValue.match(/\(([^)]+)\)/)[1];
							return;
						} else {
							value = defaultValue;
						}
					} else {
						console.error(`Nothing for ${specialVar}${propertyChain} in block:`, block);
						return "";
					}
				}
				if(typeof value == "number") {
					value = String(value);
				}
				if(typeof value != "string") {
					console.error(`Interpolated value is not a string somehow:`, value);
					return "";
				}
				// console.debug(`Changed ${bracketedExpression} to ${value}!`, block);
				return value;
			}
		);
		return wholeStringValue ?? substitutedExpression;
	}
	
	/**
	 * Resolves UVs in template faces.
	 * @param {PolyMeshTemplateFace[]} faces
	 * @param {TextureAtlas} textureAtlas
	 * @returns {PolyMeshTemplateFaceWithUvs[]}
	 */
	static resolveTemplateFaceUvs(faces, textureAtlas) {
		return faces.map(face => {
			let imageUv = textureAtlas.uvs[face["textureRefI"]];
			face.vertices.sort((a, b) => a.corner - b.corner);
			if("crop" in imageUv) {
				this.#applyFaceCropping(face, imageUv.crop);
			}
			let vertices = tuple([face.vertices[0], face.vertices[1], face.vertices[3], face.vertices[2]]); // go around in a square
			return {
				normal: face.normal,
				transparency: imageUv.transparency,
				vertices: vertices.map(vertex => ({
					pos: vertex.pos,
					uv: tuple([+((imageUv.uv[0] + imageUv.uvSize[0] * (vertex.corner & 1)) / textureAtlas.textureWidth).toFixed(4), +(1 - (imageUv.uv[1] + imageUv.uvSize[1] * (vertex.corner >> 1)) / textureAtlas.textureHeight).toFixed(4)])
				}))
			};
		});
	}
	/**
	 * Crops a face, modifying the input object.
	 * @param {PolyMeshTemplateFace} face
	 * @param {Rectangle} crop
	 */
	static #applyFaceCropping(face, crop) {
		let v0 = face.vertices[0];
		let v1 = face.vertices[1];
		let v2 = face.vertices[2];
		let v3 = face.vertices[3];
		let v0pos = v0.pos;
		let v1pos = v1.pos;
		let v2pos = v2.pos;
		let v3pos = v3.pos;
		let textureXDir = vec3.sub(v1pos, v0pos);
		let textureYDir = vec3.sub(v2pos, v0pos);
		let cropXRem = 1 - crop.w - crop.x; // remaining horizontal space on the other side of the cropped region
		let cropYRem = 1 - crop.h - crop.y;
		v0.pos = vec3.add(v0pos, [textureXDir[0] * crop.x + textureYDir[0] * crop.y, textureXDir[1] * crop.x + textureYDir[1] * crop.y, textureXDir[2] * crop.x + textureYDir[2] * crop.y]);
		v1.pos = vec3.add(v1pos, [-textureXDir[0] * cropXRem + textureYDir[0] * crop.y, -textureXDir[1] * cropXRem + textureYDir[1] * crop.y, -textureXDir[2] * cropXRem + textureYDir[2] * crop.y]);
		v2.pos = vec3.add(v2pos, [textureXDir[0] * crop.x - textureYDir[0] * cropYRem, textureXDir[1] * crop.x - textureYDir[1] * cropYRem, textureXDir[2] * crop.x - textureYDir[2] * cropYRem]);
		v3.pos = vec3.add(v3pos, [-textureXDir[0] * cropXRem - textureYDir[0] * cropYRem, -textureXDir[1] * cropXRem - textureYDir[1] * cropYRem, -textureXDir[2] * cropXRem - textureYDir[2] * cropYRem]);
	}
}


/** @import { Vec3, Block, HoloPrintConfig, Rectangle } from "./common.types.ts" */
/** @import { CubeUv, CubeWithEasyProperties } from "./BlockGeoMaker.types.ts" */
/** @import { PolyMeshTemplateFaceWithUvs, PolyMeshTemplateFace, PolyMeshTemplateVertex } from "./PolyMeshMaker.types.ts" */
/** @import TextureAtlas from "./TextureAtlas.js" */
/** @import EntityGeoMaker from "./EntityGeoMaker.js" */
/** @import * as Data from "./data/schemas" */
```

## File: src/BlockGeoMaker.types.ts
```typescript
import type * as Data from "./data/schemas";
import type { Block, Vec2 } from "./common.types.ts";

export type CubeUv = Record<Data.CardinalDirection, {
	uv: Vec2;
	uvSize: Vec2;
}>;
export type CubeWithEasyProperties = Data.Cube & Record<"x" | "y" | "z" | "w" | "h" | "d", number> & {
	blockOverride?: Block;
};
```

## File: src/BlockUpdater.js
```javascript
// Updates a block from older MCBE versions, using schemas from pmmp/BedrockBlockUpgradeSchema. This code was made with reference to https://github.com/pmmp/PocketMine-MP/blob/5.21.0/src/data/bedrock/block/upgrade/BlockStateUpgrader.php and https://github.com/RaphiMC/ViaBedrock/blob/main/src/main/java/net/raphimc/viabedrock/api/chunk/blockstate/JsonBlockStateUpgradeSchema.java.

import fetchers from "./fetchers.js";

/** Updates older blocks to the latest MCBE version. */
export default class BlockUpdater {
	static LATEST_VERSION = 18168865; // 01 15 3C 21 = 1.21.60.33 (1.21.61)
	
	/** @readonly @type {Record<string, BlockUpdateSchemaSkeleton[]>} */
	#schemaIndex = {};
	/** @readonly @type {Map<string, BlockUpdateSchema>} */
	#schemas = new Map();
	
	/**
	 * Checks if a block needs updating to the latest Minecraft version.
	 * @param {NBTBlock} block
	 * @returns {boolean}
	 */
	blockNeedsUpdating(block) {
		return block.version < BlockUpdater.LATEST_VERSION;
	}
	/**
	 * Upgrades a block from older Minecraft versions to the latest Minecraft version.
	 * @mutating
	 * @param {NBTBlock} block
	 * @returns {Promise<boolean>} Whether or not the block was updated. (The version number will always be updated.)
	 */
	async update(block) {
		let oldBlockStringified = BlockUpdater.stringifyBlock(block);
		if(Object.keys(this.#schemaIndex).length == 0) {
			/** @type {BlockUpdateSchemaSkeleton[]} */
			let schemaList = await fetchers.bedrockBlockUpgradeSchema("schema_list.json").then(res => res.json());
			schemaList.forEach(schemaSkeleton => {
				let schemaVersion = this.#getSchemaVersion(schemaSkeleton);
				this.#schemaIndex[schemaVersion] ??= [];
				this.#schemaIndex[schemaVersion].push(schemaSkeleton);
			});
		}
		let schemasToApply = [];
		Object.entries(this.#schemaIndex).forEach(([version, schemaSkeletons]) => {
			if(block.version > +version || schemaSkeletons.length == 1 && block.version == +version) {
				return;
			}
			schemasToApply.push(...schemaSkeletons.map(schemaSkeleton => schemaSkeleton.filename));
		});
		await Promise.all(schemasToApply.map(async schemaFilename => {
			if(!this.#schemas.has(schemaFilename)) {
				this.#schemas.set(schemaFilename, await fetchers.bedrockBlockUpgradeSchema(`nbt_upgrade_schema/${schemaFilename}`).then(res => res.json()));
			}
		}));
		let updated = false;
		schemasToApply.forEach(schemaFileName => {
			let schema = this.#schemas.get(schemaFileName);
			if(this.#applyUpdateSchema(schema, block)) {
				updated = true;
			}
		});
		block.version = BlockUpdater.LATEST_VERSION;
		if(updated) {
			console.debug(`Updated ${oldBlockStringified} to ${BlockUpdater.stringifyBlock(block)}`);
		}
		return updated;
	}
	/**
	 * Applies a schema to a block.
	 * @mutating
	 * @param {BlockUpdateSchema} schema
	 * @param {NBTBlock} block
	 * @returns {boolean} Whether or not the block changed between versions. (The version number will always be updated, unless it encountered an error.)
	 */
	#applyUpdateSchema(schema, block) {
		let schemaVersion = this.#getSchemaVersion(schema);
		if(block.version > schemaVersion) {
			console.error(`Trying to upgrade block from ${block.version} to ${schemaVersion}!`);
			return;
		}
		if(block.name in (schema.flattenedProperties ?? {}) && block.name in (schema.renamedIds ?? {})) {
			console.error(`Cannot flatten and rename block ${block.name} at the same time: ${JSON.stringify(schema)}`);
			return;
		}
		
		// remap block states: when the values change and, in some cases, the block name
		if(schema.remappedStates?.[block.name]?.some(remappedState => {
			let statesToMatch = remappedState.oldState;
			if(statesToMatch != null) { // if there are states to match, all states in "oldState" must be the same in the current block states
				if(Object.keys(statesToMatch).length > Object.keys(block.states).length) {
					return;
				}
				for(let [blockStateName, blockStateValueProperty] of Object.entries(statesToMatch)) {
					if(!(blockStateName in block.states)) {
						return;
					}
					let blockStateValue = this.#readBlockStateProperty(blockStateValueProperty);
					if(blockStateValue != block.states[blockStateName]) {
						return;
					}
				}
			}
			if("newName" in remappedState) {
				block.name = remappedState.newName;
			} else {
				this.#applyFlattenedProperty(remappedState.newFlattenedName, block);
			}
			let newStates = Object.fromEntries(Object.entries(remappedState.newState ?? {}).map(([blockStateName, blockStateValueProperty]) => [blockStateName, this.#readBlockStateProperty(blockStateValueProperty)]));
			remappedState.copiedState?.forEach(blockStateName => {
				if(blockStateName in block.states) {
					newStates[blockStateName] = block.states[blockStateName];
				}
			});
			block.states = newStates;
			return true; // if states are remapped, there's no need to look at the rest of the schema
		})) {
			block.version = schemaVersion;
			return true;
		}
		
		let hasBeenUpdated = false;
		// added properties: add block states and values
		Object.entries(schema.addedProperties?.[block.name] ?? {}).forEach(([blockStateName, blockStateProperty]) => {
			let blockStateValue = this.#readBlockStateProperty(blockStateProperty);
			if(blockStateName in block.states) {
				console.debug(`Cannot add block state ${blockStateName} = ${blockStateValue} because it already exists on block ${BlockUpdater.stringifyBlock(block)}`);
				return;
			}
			block.states[blockStateName] = blockStateValue;
			hasBeenUpdated = true;
		});
		// removed properties: remove block states
		schema.removedProperties?.[block.name]?.forEach(blockStateName => {
			if(!(blockStateName in block.states)) {
				console.debug(`Cannot delete block state ${blockStateName} because it doesn't exist on block ${BlockUpdater.stringifyBlock(block)}`);
				return;
			}
			delete block.states[blockStateName];
			hasBeenUpdated = true;
		});
		// remapped property values: change block state values
		Object.entries(schema.remappedPropertyValues?.[block.name] ?? {}).forEach(([blockStateName, remappingName]) => {
			if(!(blockStateName in block.states)) {
				console.debug(`Cannot remap value for block state ${blockStateName} because the state doesn't exist: ${BlockUpdater.stringifyBlock(block)}`);
				return;
			}
			let currentBlockStateValue = block.states[blockStateName];
			if(!(remappingName in schema.remappedPropertyValuesIndex)) {
				console.debug(`Block state value remapping ${remappingName} not found in schema!`);
				return;
			}
			let remappings = schema.remappedPropertyValuesIndex[remappingName];
			let remapping = remappings.find(remapping => currentBlockStateValue == this.#readBlockStateProperty(remapping.old));
			if(remapping == undefined) {
				console.debug(`Cannot find block state value ${currentBlockStateValue} in remappings for block state ${blockStateName}: ${JSON.stringify(remappings)}`);
				return;
			}
			block.states[blockStateName] = this.#readBlockStateProperty(remapping.new);
			hasBeenUpdated = true;
		});
		// renamed properties: rename block states
		Object.entries(schema.renamedProperties?.[block.name] ?? {}).forEach(([oldStateName, newStateName]) => {
			if(!(oldStateName in block.states)) {
				console.debug(`Cannot rename block state ${oldStateName} -> ${newStateName} because it doesn't exist on block ${BlockUpdater.stringifyBlock(block)}`);
				return;
			}
			block.states[newStateName] = block.states[oldStateName];
			delete block.states[oldStateName];
			hasBeenUpdated = true;
		});
		// flattened properties: property value determines new block name
		if(block.name in (schema.flattenedProperties ?? {})) {
			if(this.#applyFlattenedProperty(schema.flattenedProperties[block.name], block)) { // this actually does stuff but it returns false if there was an error
				hasBeenUpdated = true;
			}
		}
		// renamed ids: block name changes
		if(block.name in (schema.renamedIds ?? {})) {
			block.name = schema.renamedIds[block.name];
			hasBeenUpdated = true;
		}
		block.version = schemaVersion;
		return hasBeenUpdated;
	}
	/**
	 * Flattens a block state to find the new block name for a block.
	 * @mutating
	 * @param {BlockUpdateSchemaFlattenRule} flattenRule
	 * @param {NBTBlock} block
	 * @returns {boolean} If the block state was successfully flattened
	 */
	#applyFlattenedProperty(flattenRule, block) {
		let blockStateName = flattenRule.flattenedProperty;
		if(!(blockStateName in block.states)) {
			console.debug(`Cannot flatten block state ${blockStateName} because it doesn't exist on block ${BlockUpdater.stringifyBlock(block)}, ${JSON.stringify(flattenRule)}`);
			return;
		}
		let blockStateValue = block.states[blockStateName];
		let embedValue = flattenRule.flattenedValueRemaps?.[blockStateValue] ?? blockStateValue;
		block.name = flattenRule.prefix + embedValue + flattenRule.suffix;
		delete block.states[blockStateName];
		return true;
	}
	/**
	 * @param {TypedBlockStateProperty} blockStateProperty
	 * @returns {number | string}
	 */
	#readBlockStateProperty(blockStateProperty) {
		return Object.values(blockStateProperty)[0]; // blockStateValue is an object that's either { "string": "value" }, { "int": 0 }, or { "byte": 0 } but it's all the same in JS
	}
	/**
	 * @param {BlockUpdateSchema | BlockUpdateSchemaSkeleton} schema
	 * @returns {number}
	 */
	#getSchemaVersion(schema) {
		return (schema.maxVersionMajor << 24) | (schema.maxVersionMinor << 16) | (schema.maxVersionPatch << 8) | schema.maxVersionRevision;
	}
	/**
	 * "Stringifies" a block with its name and states.
	 * @param {NBTBlock | Block} block
	 * @param {boolean} [includeVersion]
	 * @returns {string}
	 */
	static stringifyBlock(block, includeVersion = true) {
		let blockStates = Object.entries(block.states).map(([name, value]) => `${name}=${value}`).join(",");
		let res = block.name.replace(/^minecraft:/, "");
		if(blockStates.length) {
			res += `[${blockStates}]`;
		}
		if(includeVersion && "version" in block) {
			res += `@${BlockUpdater.parseBlockVersion(block.version).join(".")}`;
		}
		return res;
	}
	/**
	 * Expands the block version number found in structure NBT into an array.
	 * @param {number} blockVersion Block version number as found in structure NBT
	 * @returns {number[]}
	 */
	static parseBlockVersion(blockVersion) {
		return blockVersion.toString(16).padStart(8, "0").match(/.{2}/g).map(x => parseInt(x, 16));
	}
}

/** @import { Block } from "./common.types.ts" */
/** @import { NBTBlock } from "./minecraft.types.ts" */
/** @import { BlockUpdateSchemaSkeleton, BlockUpdateSchema, TypedBlockStateProperty, BlockUpdateSchemaFlattenRule } from "./BlockUpdater.types.ts" */
```

## File: src/BlockUpdater.types.ts
```typescript
export type TypedBlockStateProperty = {
	/** An integer property. */
	int?: number;
	/** A string property. */
	string?: string;
	/** A byte property. */
	byte?: number;
};
export type BlockUpdateSchemaFlattenRule = {
	/** The prefix for the flattened property. */
	prefix: string;
	/** The name of the flattened property. */
	flattenedProperty: string;
	/** The type of the flattened property. */
	flattenedPropertyType?: "int" | "string" | "byte";
	/** The suffix for the flattened property. */
	suffix: string;
	/** A mapping of flattened values. */
	flattenedValueRemaps?: Record<string, string>;
};
export type BlockUpdateSchemaRemappedState = {
	/** The property values before the remapping. */
	oldState: Record<string, TypedBlockStateProperty> | null;
	/** An optional new name for the block. */
	newName?: string;
	/** An optional flattened property rule providing a new name. */
	newFlattenedName?: BlockUpdateSchemaFlattenRule;
	/** The new property values after the remapping. */
	newState: Record<string, TypedBlockStateProperty> | null;
	/** Optional list of property names to copy from the old state. */
	copiedState?: string[];
};
export type BlockUpdateSchemaSkeleton = {
	filename: string;
	/** The major version (must be >= 0). */
	maxVersionMajor: number;
	/** The minor version (must be >= 0). */
	maxVersionMinor: number;
	/** The patch version (must be >= 0). */
	maxVersionPatch: number;
	/** The revision version (must be >= 0). */
	maxVersionRevision: number;
};
export type BlockUpdateSchema = {
	/** The major version (must be >= 0). */
	maxVersionMajor: number;
	/** The minor version (must be >= 0). */
	maxVersionMinor: number;
	/** The patch version (must be >= 0). */
	maxVersionPatch: number;
	/** The revision version (must be >= 0). */
	maxVersionRevision: number;
	/** Mapping of renamed IDs. */
	renamedIds?: Record<string, string>;
	/** Mapping of added properties. */
	addedProperties?: Record<string, Record<string, TypedBlockStateProperty>>;
	/** Mapping of renamed properties. */
	renamedProperties?: Record<string, Record<string, string>>;
	/** Mapping of removed properties. */
	removedProperties?: Record<string, string[]>;
	/** Mapping of remapped property values. */
	remappedPropertyValues?: Record<string, Record<string, string>>;
	/** Index of remapped property values. */
	remappedPropertyValuesIndex?: Record<string, {
		old: TypedBlockStateProperty;
		new: TypedBlockStateProperty;
	}[]>;
	/** Mapping of flattened properties. */
	flattenedProperties?: Record<string, BlockUpdateSchemaFlattenRule>;
	/** Mapping of remapped states. */
	remappedStates?: Record<string, BlockUpdateSchemaRemappedState[]>;
};
```

## File: src/common.types.ts
```typescript
export type HoloPrintConfig = {
	IGNORED_BLOCKS: string[];
	IGNORED_MATERIAL_LIST_BLOCKS: string[];
	SCALE: number;
	OPACITY: number;
	/** Whether to generate multiple opacity images and allow in-game switching, or have a constant opacity */
	MULTIPLE_OPACITIES: boolean;
	/** Hex RGB #xxxxxx */
	TINT_COLOR: string;
	/** 0-1 */
	TINT_OPACITY: number;
	/** Size of ghost blocks when in the mini view for layers */
	MINI_SCALE: number;
	/** Measured in pixels, x ∈ [0, 1], x ∈ 2^ℝ */
	TEXTURE_OUTLINE_WIDTH: number;
	/** A colour string */
	TEXTURE_OUTLINE_COLOR: string;
	/** 0-1 */
	TEXTURE_OUTLINE_OPACITY: number;
	SPAWN_ANIMATION_ENABLED: boolean;
	/** Length of each individual block's spawn animation (seconds) */
	SPAWN_ANIMATION_LENGTH: number;
	PLAYER_CONTROLS_ENABLED: boolean;
	CONTROLS: HoloPrintControlsConfig;
	UI_CONTROLS_ENABLED: boolean;
	RETEXTURE_CONTROL_ITEMS: boolean;
	/** How much to scale control item overlay textures. When compositing textures, MCBE scales all textures to the maximum, so the size of the overlay control texture has to be the LCM of itself and in-game items. Hence, if in-game items have a higher resolution than expected, they will probably be scaled wrong. The solution is to scale the overlay textures even more, which can be adjusted with this. */
	CONTROL_ITEM_TEXTURE_SCALE: number;
	RENAME_CONTROL_ITEMS: boolean;
	/** Clamped colour quartet */
	WRONG_BLOCK_OVERLAY_COLOR: Vec4;
	INITIAL_OFFSET: Vec3;
	/** If present, each structure's hologram will be locked to these coordinates. The last component is rotation. */
	COORDINATE_LOCK: Vec4[] | undefined;
	BACKUP_SLOT_COUNT: number;
	VALIDATE_AIR_BLOCKS: boolean;
	/** The maximum width and height, in pixels, of any structure diagram texture. Anything bigger than this is scaled down to fit, as to not inflate pack sizes and slow down pack creation. */
	MAX_STRUCTURE_DIAGRAM_TEXTURE_SIZE: number;
	/** The name of the completed pack; will default to the structure file names */
	PACK_NAME: string | undefined;
	/** Blob for `pack_icon.png` */
	PACK_ICON_BLOB: Blob;
	AUTHORS: string[];
	DESCRIPTION: string | undefined;
	COMPRESSION_LEVEL: number;
	/** The maximum number of blocks a structure can have for rendering a preview */
	PREVIEW_BLOCK_LIMIT: number;
	SHOW_PREVIEW_SKYBOX: boolean;
	/** Whether to show or hide the FPS counter and options menu for previews */
	SHOW_PREVIEW_WIDGETS: boolean;
};
export type HoloPrintControlsConfig = {
	TOGGLE_RENDERING: ItemCriteria;
	CHANGE_OPACITY: ItemCriteria;
	TOGGLE_TINT: ItemCriteria;
	TOGGLE_VALIDATING: ItemCriteria;
	/** Both for players and armour stands */
	CHANGE_LAYER: ItemCriteria;
	DECREASE_LAYER: ItemCriteria;
	/** Single layer or all layers below */
	CHANGE_LAYER_MODE: ItemCriteria;
	MOVE_HOLOGRAM: ItemCriteria;
	ROTATE_HOLOGRAM: ItemCriteria;
	/** For players only */
	CHANGE_STRUCTURE: ItemCriteria;
	DISABLE_PLAYER_CONTROLS: ItemCriteria;
	/** Force armour stands to try and backup the hologram state for 30s. */
	BACKUP_HOLOGRAM: ItemCriteria;
};
export type Block = {
	/** The block's ID */
	name: string;
	/** Block states */
	states?: Record<string, number | string>;
	/** Block entity data */
	blockEntityData?: object;
};
export type ItemCriteria = {
	/** Item names the matching item could have. The `minecraft:` namespace will be used if no namespace is specified. */
	names: string[];
	/** Item tags the matching item could have. The `minecraft:` namespace will be used if no namespace is specified. */
	tags: string[];
};

export type GetFileType<F extends string> = F extends `${string}.json` | `${string}.material` ? any : F extends `${string}.lang` ? string : F extends `${string}.png` ? HTMLImageElement : never;
export type PathToData<N, D> = {
	dataName: N;
	data: D;
};
export type StructureDiagramsAndIndices = {
	diagrams: Blob[];
	indices: number[][];
};

export type BlockToValidate = {
	locator: string;
	block: string;
	pos: Vec3;
};

export type Rectangle = {
	x: number;
	y: number;
	w: number;
	h: number;
};
export type Vec2 = [number, number];
export type Vec3 = [number, number, number];
export type Vec4 = [number, number, number, number];
export type Tuple<T, N extends number, R extends T[] = []> = number extends N ? T[] : R["length"] extends N ? R : Tuple<T, N, [T, ...R]>;
export type Matrix<R extends number, C extends number, T = number> = R extends R ? C extends C ? (T[] & {
	length: C;
})[] & {
	length: R;
} : never : never;
export type TupleMatrix<R extends number, C extends number, T = number> = R extends R ? C extends C ? Tuple<Tuple<T, C>, R> : never : never;
export type Mat4 = [Vec4, Vec4, Vec4, Vec4];
export type I32Vec3 = Int32Array & {
	length: 3;
};
export type F32Vec8 = Float32Array & {
	length: 8;
};
```

## File: src/EntityGeoMaker.js
```javascript
import { jsonc, tuple, vec3 } from "./utils.js";

export default class EntityGeoMaker {
	/** @readonly @type {ResourcePackStack} */
	resourcePackStack;
	
	/**
	 * @param {ResourcePackStack} resourcePackStack
	 */
	constructor(resourcePackStack) {
		this.resourcePackStack = resourcePackStack;
	}
	/**
	 * Generates regular cubes from an entity model.
	 * @param {Data.EntityModelInfo} entityModelInfo
	 * @returns {Promise<Data.Cube[]>}
	 */
	async entityModelToCubes(entityModelInfo) {
		let geoFileRes = await this.resourcePackStack.fetchResource(entityModelInfo.geoFile);
		if(!geoFileRes.ok) {
			console.error(`Unable to load geometry file ${entityModelInfo.geoFile}`);
			return [];
		}
		let geoFile = await jsonc(geoFileRes);
		let matchingGeo = geoFile["minecraft:geometry"].find(geo => geo["description"]["identifier"] == entityModelInfo.identifier);
		if(!matchingGeo) {
			console.error(`Unable to find ${entityModelInfo.identifier} in geometry file ${entityModelInfo.geoFile}`);
			return [];
		}
		let textureWidth = matchingGeo["description"]["texture_width"];
		let textureHeight = matchingGeo["description"]["texture_height"];
		let totalCubes = matchingGeo["bones"].reduce((sum, bone) => sum + (bone["cubes"]?.length ?? 0), 0);
		let cubes = new Array(totalCubes);
		let cubesI = 0;
		matchingGeo["bones"].forEach(bone => {
			bone["cubes"]?.forEach(geoCube => {
				let cube = this.#getCubeFromGeoCube(geoCube, entityModelInfo.texture, [textureWidth, textureHeight], geoFile["format_version"]);
				if("inflate" in geoCube) {
					let { inflate } = geoCube;
					let inflate3 = tuple([inflate, inflate, inflate]);
					cube.pos = vec3.sub(cube.pos, inflate3);
					cube.size = vec3.add(cube.size, vec3.mul(inflate3, 2));
				}
				if("rotation" in geoCube) {
					cube.rot = geoCube["rotation"];
					cube.pivot = geoCube.pivot;
				}
				cubes[cubesI++] = cube;
			});
		});
		return cubes;
	}
	
	/**
	 * Converts a cube from a `.geo.json` file into a cube used by HoloPrint, as found in `data/blockShapeGeos.json`.
	 * @param {object} geoCube
	 * @param {Data.TextureFace} texture
	 * @param {Vec2} textureSize
	 * @param {string} geoFileVersion
	 * @returns {Data.Cube}
	 */
	#getCubeFromGeoCube(geoCube, texture, textureSize, geoFileVersion) {
		switch(geoFileVersion) {
			case "1.12.0": return {
				pos: geoCube["origin"],
				size: geoCube["size"],
				translate: [8, 0, 8],
				boxUv: geoCube["uv"],
				boxUvSize: geoCube["size"],
				boxUvFlipEastWest: true,
				textures: {
					"*": texture
				},
				textureSize
			};
			case "1.21.0":
			case "1.26.50": {
				/** @type {Data.Cube} */
				let cube = {
					pos: geoCube["origin"],
					size: geoCube["size"],
					translate: [8, 0, 8],
					uv: {},
					uvSizes: {},
					uvRot: {
						// in MC the down/up faces on blocks are rotated 180 degrees compared to how they are in geometry; this does not happen on these new geo formats but is already accounted for in BlockGeoMaker.js so it must be effectively reverted here.
						"down": 180,
						"up": 180,
						"north": 0,
						"south": 0,
						"east": 0,
						"west": 0
					},
					flipTextureHorizontally: [],
					flipTextureVertically: [],
					textures: {
						"*": texture
					},
					textureSize
				};
				/** @type {Record<Data.Face, { uv: Vec2, uv_size: Vec2, uv_rotation?: number }>} */
				let cubeUvs = geoCube["uv"];
				Object.entries(cubeUvs).forEach(
					([face, uvInfo]) => {
						let { uv, uv_size: uvSize, uv_rotation: uvRot = 0 } = uvInfo;
						// some UV sizes may be negative because Mojang is like WHY NOT
						if(uvSize[0] < 0) {
							uv[0] += uvSize[0];
							uvSize[0] *= -1;
							cube.flipTextureHorizontally.push(face);
						}
						if(uvSize[1] < 0) {
							uv[1] += uvSize[1];
							uvSize[1] *= -1;
							cube.flipTextureVertically.push(face);
						}
						cube.uv[face] = uv;
						cube.uvSizes[face] = uvSize;
						cube.uvRot[face] += uvRot;
					}
				);
				return cube;
			}
		}
		console.error(`Unknown geo file format version: ${geoFileVersion}`);
		return {};
	}
}

/** @import ResourcePackStack from "./ResourcePackStack.js" */
/** @import { Vec2 } from "./common.types.ts" */
/** @import * as Data from "./data/schemas" */
```

## File: src/EntityManager.js
```javascript
/**
 * A class for managing multiple entity files (`*.entity.json`).
 * @template {Record<string, object>} T
 */
export default class EntityManager {
	/** @readonly @type {T} */
	entityFilesAndNames;
	/** @readonly @type {object[]} */
	#entities;
	
	/**
	 * @param {T} entityFilesAndNames
	 */
	constructor(entityFilesAndNames) {
		this.entityFilesAndNames = entityFilesAndNames;
		this.#entities = Object.values(entityFilesAndNames).map(entityFile => entityFile["minecraft:client_entity"]["description"]);
	}
	
	addGeometry = this.#addToDictionary("geometry");
	addMaterial = this.#addToDictionary("materials");
	addTexture = this.#addToDictionary("textures");
	addAnimation = this.#addToDictionary("animations");
	addRenderController = this.#pushToArray("render_controllers");
	addParticleEffect = this.#addToDictionary("particle_effects");
	addAnimateScript = this.#pushToArray(["scripts", "animate"]);
	setShouldUpdateBonesAndEffectsOffscreen = this.#setFlag(["scripts", "should_update_bones_and_effects_offscreen"]);
	
	/**
	 * Exports all entity files as JSON.
	 * @returns {{ [K in keyof T]: string }}
	 */
	exportToJson() {
		// @ts-expect-error
		return Object.fromEntries(Object.entries(this.entityFilesAndNames).map(([name, entityFile]) => [name, JSON.stringify(entityFile)]));
	}
	
	/**
	 * Creates a function to add entries to a dictionary (e.g. definitions for textures, geometries, animations etc.) across all entities.
	 * @param {string} dictionaryName
	 * @returns {(shortName: string, identifier: string) => void}
	 */
	#addToDictionary(dictionaryName) {
		return (shortName, identifier) => {
			this.#entities.forEach(entity => {
				entity[dictionaryName] ??= {};
				entity[dictionaryName][shortName] = identifier;
			});
		};
	}
	/**
	 * Creates a function to push items to an array across all entities.
	 * @overload
	 * @param {string} arrayName Name of a top-level array in the client entity JSON.
	 * @returns {(...elements: any[]) => void}
	 */
	/**
	 * Creates a function to push items to an array across all entities.
	 * @overload
	 * @param {string[]} arrayName Key path of a nested array in the client entity JSON.
	 * @returns {(...elements: any[]) => void}
	 */
	/**
	 * @param {string | string[]} arrayName 
	 * @returns {(...elements: any[]) => void}
	 */
	#pushToArray(arrayName) {
		if(typeof arrayName == "string") {
			return (...elements) => {
				this.#entities.forEach(entity => {
					entity[arrayName] ??= [];
					entity[arrayName].push(...elements);
				});
			};
		} else {
			return (...elements) => {
				this.#entities.forEach(entity => {
					let parentDictionary = arrayName.slice(0, -1).reduce((obj, key) => obj[key] ??= {}, entity);
					let actualArrayName = arrayName.at(-1);
					parentDictionary[actualArrayName] ??= [];
					parentDictionary[actualArrayName].push(...elements);
				});
			};
		}
	}
	/**
	 * Sets a nested flag across all entities.
	 * @param {string[]} flagKeyPath
	 * @returns {(value: boolean) => void}
	 */
	#setFlag(flagKeyPath) {
		return value => {
			this.#entities.forEach(entity => {
				let parentDictionary = flagKeyPath.slice(0, -1).reduce((obj, key) => obj[key] ??= {}, entity);
				let flagName = flagKeyPath.at(-1);
				parentDictionary[flagName] = value;
			});
		}
	}
}
```

## File: src/entityScripts.molang.js
```javascript
let $, v, q, t, structureSize, singleLayerMode, structureCount, HOLOGRAM_INITIAL_ACTIVATION, initialOffset, defaultTextureIndex, textureBlobsCount, totalBlocksToValidate, totalBlocksToValidateByLayer, backupSlotCount, toggleRendering, changeOpacity, toggleTint, toggleValidating, changeLayer, decreaseLayer, changeLayerMode, disablePlayerControls, backupHologram, changeStructure, moveHologram, rotateHologram, initVariables, renderingControls, broadcastActions, structureSizesMolang, coordinateLockEnabled, coordinateLockCoordsMolang, isArmorStand, hasHologram; // prevent linting errors

const ACTIONS = createNumericEnum(["NEXT_STRUCTURE", "PREVIOUS_STRUCTURE", "INCREASE_LAYER", "DECREASE_LAYER", "TOGGLE_RENDERING", "INCREASE_OPACITY", "DECREASE_OPACITY", "TOGGLE_TINT", "TOGGLE_VALIDATING", "CHANGE_LAYER_MODE", "ROTATE_HOLOGRAM_CLOCKWISE", "ROTATE_HOLOGRAM_ANTICLOCKWISE", "BACKUP_HOLOGRAM", "MOVE_HOLOGRAM", "MOVE_POS_X", "MOVE_NEG_X", "MOVE_POS_Y", "MOVE_NEG_Y", "MOVE_POS_Z", "MOVE_NEG_Z"]);

function initialize() {
	v.ui_action_counter = t.ui_action_counter ?? 0;
	if(!$[hasHologram]) {
		return;
	}
	
	v.hologram_activated = HOLOGRAM_INITIAL_ACTIVATION; // true/false are substituted in here for the different subpacks
	v.hologram.offset_x = $[initialOffset[0]];
	v.hologram.offset_y = $[initialOffset[1]];
	v.hologram.offset_z = $[initialOffset[2]];
	v.hologram.rotation = 0;
	v.hologram.structure_w = $[structureSize[0]];
	v.hologram.structure_h = $[structureSize[1]];
	v.hologram.structure_d = $[structureSize[2]];
	v.hologram.rendering = HOLOGRAM_INITIAL_ACTIVATION;
	v.hologram.texture_index = $[defaultTextureIndex];
	v.hologram.show_tint = false;
	v.hologram.layer = -1;
	v.hologram.layer_mode = $[singleLayerMode];
	v.hologram.validating = false;
	v.hologram.show_wrong_block_overlay = false;
	v.wrong_blocks = -1;
	v.hologram.wrong_block_x = 0;
	v.hologram.wrong_block_y = 0;
	v.hologram.wrong_block_z = 0;
	
	v.hologram.structure_index = 0;
	v.hologram.structure_count = $[structureCount];
	
	if($[isArmorStand]) {
		// v.hologram.last_held_item = q.get_equipped_item_name ?? "";
		v.hologram.last_held_item = ""; // this will be kept in the backup
		v.last_pose = 0;
		v.last_hurt_direction = q.hurt_direction;
	}
	
	v.player_action_counter = t.player_action_counter ?? 0;
	v.last_ui_action_time = q.time_stamp;
	v.was_ui_action_last_frame = false;
	v.ui_action_hold_start_time = -1;
	v.hologram_dir = 0;
	
	v.spawn_time = q.time_stamp;
	v.player_has_interacted = false;
	v.saving_backup = false;
	v.hologram_backup_index = -1;
	v.hologram_backup_requested_time = -601; // 600 ticks = 30s (how long the backup request lasts for)
	v.skip_spawn_animation = false;
}
function preAnimation() {
	if($[isArmorStand] && q.is_in_ui) {
		// if the armour stand is holding an item and in the ui, it must be from our custom ui code. I doubt any other addons would interfere here...
		// no there is not any better way to do this better
		if(q.is_item_name_any("slot.weapon.offhand", "minecraft:stone", "minecraft:grass_block")) {
			t.ui_action = $[ACTIONS.TOGGLE_RENDERING];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:dirt")) {
			t.ui_action = $[ACTIONS.INCREASE_OPACITY];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:cobblestone")) {
			t.ui_action = $[ACTIONS.DECREASE_OPACITY];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:oak_planks", "minecraft:oak_sapling")) {
			t.ui_action = $[ACTIONS.TOGGLE_TINT];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:bedrock")) {
			t.ui_action = $[ACTIONS.INCREASE_LAYER];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:flowing_water")) {
			t.ui_action = $[ACTIONS.DECREASE_LAYER];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:water", "minecraft:flowing_lava")) {
			t.ui_action = $[ACTIONS.CHANGE_LAYER_MODE];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:lava", "minecraft:sand")) {
			t.ui_action = $[ACTIONS.TOGGLE_VALIDATING];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:gravel")) {
			t.ui_action = $[ACTIONS.MOVE_POS_X];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:gold_ore")) {
			t.ui_action = $[ACTIONS.MOVE_NEG_X];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:iron_ore")) {
			t.ui_action = $[ACTIONS.MOVE_POS_Y];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:coal_ore")) {
			t.ui_action = $[ACTIONS.MOVE_NEG_Y];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:oak_log")) {
			t.ui_action = $[ACTIONS.MOVE_POS_Z];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:oak_leaves")) {
			t.ui_action = $[ACTIONS.MOVE_NEG_Z];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:sponge")) {
			t.ui_action = $[ACTIONS.ROTATE_HOLOGRAM_CLOCKWISE];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:glass")) {
			t.ui_action = $[ACTIONS.ROTATE_HOLOGRAM_ANTICLOCKWISE];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:lapis_ore")) {
			t.ui_action = $[ACTIONS.NEXT_STRUCTURE];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:lapis_block")) {
			t.ui_action = $[ACTIONS.PREVIOUS_STRUCTURE];
		} else if(q.is_item_name_any("slot.weapon.offhand", "minecraft:dispenser", "minecraft:sandstone")) {
			t.ui_action = $[ACTIONS.BACKUP_HOLOGRAM];
		} else {
			return;
		}
		if((t.ui_action_counter ?? -1) != -1) {
			v.ui_action_counter = t.ui_action_counter;
		}
		v.ui_action_counter++;
		t.ui_action_counter = v.ui_action_counter;
		return;
	}
	if(!$[hasHologram]) {
		return;
	}
	
	if($[isArmorStand]) {
		if(q.time_stamp - v.spawn_time < 5) {
			v.last_pose = v.armor_stand.pose_index; // armour stands take a tick or two at the start to set their pose correctly
		}
	}
	
	let should_set_wrong_blocks = false;
	if(q.time_stamp - v.spawn_time < 200 && !v.player_has_interacted) { // if it's less than 10 seconds after being spawned and the player hasn't interacted yet...
		let just_recovered_backup = false;
		for(let i = 0; i < $[backupSlotCount]; i++) {
			if(!just_recovered_backup && !(t.hologram_backup_empty_$[i] ?? true) && t.hologram_backup_$[i].x == q.position(0) && t.hologram_backup_$[i].y == q.position(1) && t.hologram_backup_$[i].z == q.position(2)) {
				v.hologram = t.hologram_backup_$[i];
				t.hologram_backup_empty_$[i] = true;
				just_recovered_backup = true;
			}
		}
		if(just_recovered_backup) {
			v.player_has_interacted = true;
			if($[isArmorStand]) {
				v.hologram_activated = true;
			}
			v.skip_spawn_animation = true;
			if(v.hologram.validating) {
				should_set_wrong_blocks = true;
			}
		}
	}
	
	let action = -1;
	
	if($[isArmorStand]) {
		// activate if punched, else return
		if(!v.hologram_activated) {
			if(v.last_hurt_direction != q.hurt_direction) {
				v.last_hurt_direction = q.hurt_direction;
				v.hologram_activated = true;
				v.hologram.rendering = true;
			} else {
				return;
			}
		}
		
		// process actions on the armour stand itself: giving it an item, punching, or changing pose
		let process_action = false;
		if(v.hologram.last_held_item != q.get_equipped_item_name) {
			v.hologram.last_held_item = q.get_equipped_item_name;
			process_action = true;
		}
		if(v.last_hurt_direction != q.hurt_direction) { // hitting the armour stand changes this: https://wiki.bedrock.dev/entities/non-mob-runtime-identifiers.html#notable-queries-3
			v.last_hurt_direction = q.hurt_direction;
			process_action = true;
			if(!q.is_item_equipped) { // change structure on hit when holding nothing
				action = $[ACTIONS.NEXT_STRUCTURE];
			}
		}
		
		if(v.last_pose != v.armor_stand.pose_index) {
			v.last_pose = v.armor_stand.pose_index;
			if(v.hologram.rendering) {
				action = $[ACTIONS.INCREASE_LAYER];
			}
		}
		
		if(process_action) {
			if($[toggleRendering]) {
				action = $[ACTIONS.TOGGLE_RENDERING];
			} else if($[changeOpacity]) {
				action = $[ACTIONS.INCREASE_OPACITY];
			} else if($[toggleTint]) {
				action = $[ACTIONS.TOGGLE_TINT];
			} else if($[toggleValidating]) {
				action = $[ACTIONS.TOGGLE_VALIDATING];
			} else if($[changeLayer]) {
				action = $[ACTIONS.INCREASE_LAYER];
			} else if($[decreaseLayer]) {
				action = $[ACTIONS.DECREASE_LAYER];
			} else if($[changeLayerMode]) {
				action = $[ACTIONS.CHANGE_LAYER_MODE];
			} else if($[rotateHologram]) {
				action = $[ACTIONS.ROTATE_HOLOGRAM_CLOCKWISE];
			} else if($[backupHologram]) {
				action = $[ACTIONS.BACKUP_HOLOGRAM];
			}
		}
	}
	
	let check_layer_validity = false;
	let changed_structure = false;
	
	t.player_action_counter ??= 0;
	if(v.player_action_counter != t.player_action_counter && t.player_action_counter > 0 && t.player_action != -1) {
		v.player_action_counter = t.player_action_counter;
		if(!$[disablePlayerControls]) {
			action = t.player_action;
		}
	}
	t.ui_action_counter ??= 0;
	if(t.ui_action_counter != v.ui_action_counter && t.ui_action_counter > 0) {
		v.ui_action_counter = t.ui_action_counter;
		if(!$[disablePlayerControls]) {
			let process_action = false;
			t.delta_time = q.time_stamp - v.last_ui_action_time; // unfortunately q.time_stamp doesn't work in armour stands rendered in the ui, so we need to do the timing logic here
			if(!v.was_ui_action_last_frame && t.delta_time >= 1) { // you can press it repeatedly up to 20 times a second
				process_action = true;
				v.ui_action_hold_start_time = q.time_stamp;
			}
			if(v.was_ui_action_last_frame && q.time_stamp - v.ui_action_hold_start_time >= 8 && t.delta_time >= 3) { // if you've been holding a key down for 0.4s, it will repeat the action every 0.15s. kinda like how keyboards work when you hold down a key. note that q.time_stamp always returns an integer (i.e. doesn't interpolate between ticks) so the repeat interval has to be a multiple of 0.05s.
				process_action = true;
			}
			if(process_action) {
				action = t.ui_action;
				v.last_ui_action_time = q.time_stamp;
			}
		}
		v.was_ui_action_last_frame = true;
	} else {
		v.was_ui_action_last_frame = false;
	}
	if(action != -1) {
		v.player_has_interacted = true;
		if(action == $[ACTIONS.TOGGLE_RENDERING]) {
			v.hologram.rendering = !v.hologram.rendering;
		} else if(action == $[ACTIONS.TOGGLE_VALIDATING]) {
			v.hologram.validating = !v.hologram.validating;
			if(v.hologram.validating) {
				should_set_wrong_blocks = true;
			} else {
				v.hologram.show_wrong_block_overlay = false;
			}
		} else if(action == $[ACTIONS.BACKUP_HOLOGRAM]) {
			v.hologram_backup_requested_time = q.time_stamp;
		} else if(v.hologram.rendering) { // opacity, layer, movement, and structure controls require the hologram to be visible, otherwise it could be confusing if you accidentally change something when it's invisible
			if(action == $[ACTIONS.INCREASE_OPACITY]) {
				v.hologram.texture_index++;
				if(v.hologram.texture_index >= $[textureBlobsCount]) {
					v.hologram.texture_index = 0;
				}
			} else if(action == $[ACTIONS.DECREASE_OPACITY]) {
				v.hologram.texture_index--;
				if(v.hologram.texture_index < 0) {
					v.hologram.texture_index = $[textureBlobsCount - 1];
				}
			} else if(action == $[ACTIONS.TOGGLE_TINT]) {
				v.hologram.show_tint = !v.hologram.show_tint;
			} else if(action == $[ACTIONS.INCREASE_LAYER]) {
				v.hologram.layer++;
				check_layer_validity = true;
			} else if(action == $[ACTIONS.DECREASE_LAYER]) {
				v.hologram.layer--;
				check_layer_validity = true;
			} else if(action == $[ACTIONS.CHANGE_LAYER_MODE]) {
				v.hologram.layer_mode = 1 - v.hologram.layer_mode; // ez
				check_layer_validity = true;
			} else if(action == $[ACTIONS.MOVE_HOLOGRAM]) {
				let camera_rot_x = q.camera_rotation(0);
				let camera_rot_y = q.camera_rotation(1);
				if(camera_rot_x <= -38) { // slightly more bias towards up/down
					v.hologram.offset_y++;
				} else if(camera_rot_x >= 38) {
					v.hologram.offset_y--;
				} else if(camera_rot_y > -45 && camera_rot_y <= 45) {
					v.hologram.offset_z++;
				} else if(camera_rot_y > 45 && camera_rot_y <= 135) {
					v.hologram.offset_x--;
				} else if(camera_rot_y > -135 && camera_rot_y <= -45) {
					v.hologram.offset_x++;
				} else {
					v.hologram.offset_z--;
				}
			} else if(action == $[ACTIONS.MOVE_POS_X]) {
				v.hologram.offset_x++;
			} else if(action == $[ACTIONS.MOVE_NEG_X]) {
				v.hologram.offset_x--;
			} else if(action == $[ACTIONS.MOVE_POS_Y]) {
				v.hologram.offset_y++;
			} else if(action == $[ACTIONS.MOVE_NEG_Y]) {
				v.hologram.offset_y--;
			} else if(action == $[ACTIONS.MOVE_POS_Z]) {
				v.hologram.offset_z++;
			} else if(action == $[ACTIONS.MOVE_NEG_Z]) {
				v.hologram.offset_z--;
			} else if(action == $[ACTIONS.ROTATE_HOLOGRAM_CLOCKWISE]) {
				v.hologram.rotation = (v.hologram.rotation + 1) % 4;
			} else if(action == $[ACTIONS.ROTATE_HOLOGRAM_ANTICLOCKWISE]) {
				v.hologram.rotation = (v.hologram.rotation + 3) % 4; // Molang Math.mod is more of a remainder function (like JS), so it can return values from -3 to 3. Because of this I do + 3 not - 1.
			} else if(action == $[ACTIONS.NEXT_STRUCTURE] && v.hologram.structure_count > 1) {
				v.hologram.structure_index++;
				changed_structure = true;
			} else if(action == $[ACTIONS.PREVIOUS_STRUCTURE] && v.hologram.structure_count > 1) {
				v.hologram.structure_index--;
				changed_structure = true;
			}
		}
	}
	
	if($[coordinateLockEnabled]) {
		v.hologram.offset_x = ($[coordinateLockCoordsMolang[0]]) - q.position(0) + 0.5;
		v.hologram.offset_y = ($[coordinateLockCoordsMolang[1]]) - Math.floor(q.position(1));
		v.hologram.offset_z = ($[coordinateLockCoordsMolang[2]]) - q.position(2) + 0.5;
		v.hologram.rotation = 2 - Math.floor(q.body_y_rotation / 90);
	} else {
		v.hologram_dir = (Math.floor(q.body_y_rotation / 90) + 2 + v.hologram.rotation) % 4; // q.body_y_rotation goes from -180 to 180, hence the + 2
	}
	if(check_layer_validity) {
		if(v.hologram.layer < -1) {
			v.hologram.layer = v.hologram.structure_h - (v.hologram.layer_mode == $[singleLayerMode]? 1 : 2);
		}
		if(v.hologram.layer >= (v.hologram.layer_mode == $[singleLayerMode]? v.hologram.structure_h : v.hologram.structure_h - 1)) {
			v.hologram.layer = -1;
		}
		if(v.hologram.validating) {
			should_set_wrong_blocks = true;
		}
	}
	if(should_set_wrong_blocks) {
		v.wrong_blocks = (v.hologram.layer == -1? ($[totalBlocksToValidate]) : ($[totalBlocksToValidateByLayer]));
		t.wrong_blocks = v.wrong_blocks;
	}
	if(changed_structure) {
		if(v.hologram.structure_index < 0) {
			v.hologram.structure_index = v.hologram.structure_count - 1;
		}
		if(v.hologram.structure_index >= v.hologram.structure_count) {
			v.hologram.structure_index = 0;
		}
		v.hologram.structure_w = $[structureSizesMolang[0]];
		v.hologram.structure_h = $[structureSizesMolang[1]];
		v.hologram.structure_d = $[structureSizesMolang[2]];
		v.hologram.layer = -1;
		v.hologram.validating = false;
		v.hologram.show_wrong_block_overlay = false;
	}
	
	if(v.hologram.validating) {
		// block validation particles rely on temp variables. this code checks if the temp variables are defined; if they are, it updates the internal state; if not, it sets the temp variables to its internal state. very messy ik
		if((t.wrong_blocks ?? -1) == -1) {
			t.wrong_blocks = v.wrong_blocks;
		} else {
			v.wrong_blocks = t.wrong_blocks;
		}
		if((t.show_wrong_block_overlay ?? -1) == -1) {
			t.show_wrong_block_overlay = v.hologram.show_wrong_block_overlay;
		} else {
			v.hologram.show_wrong_block_overlay = t.show_wrong_block_overlay;
		}
		if((t.wrong_block_x ?? -1) == -1) {
			t.wrong_block_x = v.hologram.wrong_block_x;
		} else {
			v.hologram.wrong_block_x = t.wrong_block_x;
		}
		if((t.wrong_block_y ?? -1) == -1) {
			t.wrong_block_y = v.hologram.wrong_block_y;
		} else {
			v.hologram.wrong_block_y = t.wrong_block_y;
		}
		if((t.wrong_block_z ?? -1) == -1) {
			t.wrong_block_z = v.hologram.wrong_block_z;
		} else {
			v.hologram.wrong_block_z = t.wrong_block_z;
		}
	}
	
	v.saving_backup = q.distance_from_camera > 55 || q.time_stamp - v.hologram_backup_requested_time <= 600; // 15 blocks leeway for automatic backups, or 30s after players request a backup
	if(v.saving_backup) {
		// one by one, check each backup slot. if it's empty, we take that spot; if not, try to find which backup slot was set the earliest.
		let earliest_backup_time_stamp = q.time_stamp + 9999; // all backups should be less than this
		let earliest_backup_index = -1;
		for(let i = 0; i < $[backupSlotCount]; i++) {
			if(v.hologram_backup_index == -1) {
				if(t.hologram_backup_empty_$[i] ?? true) {
					v.hologram_backup_index = $[i];
				} else if(t.hologram_backup_$[i].backup_time_stamp < earliest_backup_time_stamp) {
					earliest_backup_time_stamp = t.hologram_backup_$[i].backup_time_stamp;
					earliest_backup_index = $[i];
				}
			}
		}
		if(v.hologram_backup_index == -1) { // none are empty, so overwrite the earliest backup
			if(earliest_backup_index == -1) { // will only happen when the backup slot count is 0
				return;
			}
			v.hologram_backup_index = earliest_backup_index;
		}
		
		v.hologram.x = q.position(0);
		v.hologram.y = q.position(1);
		v.hologram.z = q.position(2);
		v.hologram.backup_time_stamp = q.time_stamp;
		for(let i = 0; i < $[backupSlotCount]; i++) {
			if(v.hologram_backup_index == $[i]) {
				t.hologram_backup_$[i] = v.hologram;
				t.hologram_backup_empty_$[i] = false;
			}
		}
	} else if(v.hologram_backup_index != -1) {
		for(let i = 0; i < $[backupSlotCount]; i++) {
			if(v.hologram_backup_index == $[i]) {
				t.hologram_backup_empty_$[i] = true;
			}
		}
		v.hologram_backup_index = -1;
	}
}

function playerInitVariables() {
	v.player_action_counter ??= 0;
	v.last_player_action_time ??= 0;
	v.player_action ??= -1;
	v.new_action = -1; // If we want to set a new player action, we put it here first so we can update the counter and record the time.
	
	v.last_attack_time ??= 0;
	v.attack = v.attack_time > 0 && (v.last_attack_time == 0 || v.attack_time < v.last_attack_time);
	v.last_attack_time = v.attack_time;
}
function playerRenderingControls() {
	if(v.attack) {
		if($[toggleRendering]) {
			v.new_action = $[ACTIONS.TOGGLE_RENDERING];
		} else if($[changeOpacity]) {
			if(q.is_sneaking) {
				v.new_action = $[ACTIONS.DECREASE_OPACITY];
			} else {
				v.new_action = $[ACTIONS.INCREASE_OPACITY];
			}
		} else if($[toggleTint]) {
			v.new_action = $[ACTIONS.TOGGLE_TINT];
		} else if($[toggleValidating]) {
			v.new_action = $[ACTIONS.TOGGLE_VALIDATING];
		} else if($[changeLayer]) {
			if(q.is_sneaking) {
				v.new_action = $[ACTIONS.DECREASE_LAYER];
			} else {
				v.new_action = $[ACTIONS.INCREASE_LAYER];
			}
		} else if($[decreaseLayer]) { // saw some confusion about this, it was meant to be for decreasing layer at the armour stand not remotely by the player, but more options can never hurt. ig it makes it more accessible for players who can't sneak...?
			if(q.is_sneaking) {
				v.new_action = $[ACTIONS.INCREASE_LAYER];
			} else {
				v.new_action = $[ACTIONS.DECREASE_LAYER];
			}
		} else if($[changeLayerMode]) {
			v.new_action = $[ACTIONS.CHANGE_LAYER_MODE];
		} else if($[moveHologram]) {
			v.new_action = $[ACTIONS.MOVE_HOLOGRAM];
		} else if($[rotateHologram]) {
			if(q.is_sneaking) {
				v.new_action = $[ACTIONS.ROTATE_HOLOGRAM_ANTICLOCKWISE];
			} else {
				v.new_action = $[ACTIONS.ROTATE_HOLOGRAM_CLOCKWISE];
			}
		} else if($[changeStructure]) {
			if(q.is_sneaking) {
				v.new_action = $[ACTIONS.PREVIOUS_STRUCTURE];
			} else {
				v.new_action = $[ACTIONS.NEXT_STRUCTURE];
			}
		} else if($[backupHologram]) {
			v.new_action = $[ACTIONS.BACKUP_HOLOGRAM];
		}
	}
}
function playerBroadcastActions() {
	if(v.new_action != -1) {
		v.player_action = v.new_action;
		v.new_action = -1;
		v.player_action_counter++;
		v.last_player_action_time = q.time_stamp;
	}
	if(q.time_stamp - v.last_player_action_time > 40) { // broadcast nothing after 2 seconds. this is so, if the player does an action a minute ago and it doesn't do anything, the armour stands don't suddenly update when it's broadcasted through temp
		v.player_action = -1;
	}
	t.player_action = v.player_action;
	t.player_action_counter = v.player_action_counter;
	
	for(let i = 0; i < $[backupSlotCount]; i++) {
		v.hologram_backup_empty_$[i] ??= true;
		if((t.hologram_backup_empty_$[i] ?? -1) == -1) {
			t.hologram_backup_empty_$[i] = v.hologram_backup_empty_$[i];
			if(!v.hologram_backup_empty_$[i]) {
				t.hologram_backup_$[i] = v.hologram_backup_$[i];
			}
		} else {
			v.hologram_backup_empty_$[i] = t.hologram_backup_empty_$[i];
			if(!t.hologram_backup_empty_$[i]) {
				v.hologram_backup_$[i] = t.hologram_backup_$[i];
			}
		}
	}
}
function playerFirstPerson() {
	if(!q.is_in_ui && !v.map_face_icon) {
		$[initVariables]
		$[renderingControls]
		$[broadcastActions]
	}
}
function playerThirdPerson() {
	if(!q.is_in_ui) {
		$[initVariables]
		$[renderingControls]
		$[broadcastActions]
	}
}

// everything has to be exported as default so that they can be imported together as a default import. this lets esbuild add the file hash to the file name when building, and it gets automatically renamed in index.js
export default {
	ACTIONS,
	initialize,
	preAnimation,
	playerInitVariables,
	playerRenderingControls,
	playerBroadcastActions,
	playerFirstPerson,
	playerThirdPerson
};

/**
 * Create a pseudo-enumeration using numbers.
 * @template {string[]} T
 * @param {[...T]} keys - An array of string literals to use as keys.
 * @returns {Readonly<{ [K in keyof T as (K extends `${number}`? T[K] : never)]: K extends `${infer N extends number}`? N : never }>}
 */
function createNumericEnum(keys) {
	// @ts-expect-error
	return Object.freeze(Object.fromEntries(keys.map((key, i) => [key, i])));
}
```

## File: src/fetchers.js
```javascript
import { lazyLoadAsyncFunctionFactory, max, sleep, tuple } from "./utils.js";

export default {
	vanillaData: createLazyCachingFetcher("VanillaDataFetcher", "Mojang", "bedrock-samples", "v1.26.60.24-preview"),
	bedrockData: createLazyCachingFetcher("BedrockData", "pmmp", "BedrockData", "6.7.0+bedrock-1.26.30"),
	bedrockBlockUpgradeSchema: createLazyCachingFetcher("BlockUpgrader", "SuperLlama88888", "BedrockBlockUpgradeSchema", "5.2.0+bedrock-1.21.110")
};

const GITHUB_CDN = "https://cdn.jsdelivr.net/gh";
const CHANGED_FILES_URL = `${GITHUB_CDN}/SuperLlama88888/holoprint-repository-tracker/lists`;
const CACHE_URL_PREFIX = "https://cache/";
const BAD_STATUS_CODES = [429, 500, 502, 503];
const CACHE_METADATA_CHANGED_FILES_URL = "https://metadata/changedFilesTxt";

/**
 * @param {Parameters<typeof createCachingFetcher>} args
 */
function createLazyCachingFetcher(...args) {
	return lazyLoadAsyncFunctionFactory(createCachingFetcher, ...args);
}

/**
 * @param {string} name Internal cache name
 * @param {string} owner GitHub repository owner
 * @param {string} repo GitHub repository name
 * @param {string} version GitHub tag
 */
async function createCachingFetcher(name, owner, repo, version) {
	let cacheName = `${name}@${version}`;
	let baseUrl = `${GITHUB_CDN}/${owner}/${repo}@${version}`;
	let patchUrl = `${CHANGED_FILES_URL}/${owner}/${repo}`;
	let cache = await caches.open(cacheName);
	
	let oldCacheNames = (await caches.keys()).filter(c => (c.startsWith(`${name}@`) || c.startsWith(`${name}_`)) && c != cacheName);
	let sortedOldCacheNames = sortVersions(oldCacheNames);
	sortedOldCacheNames.slice(0, -1).forEach(cacheName => caches.delete(cacheName)); // delete old caches except the most recent one
	let prevCacheName = sortedOldCacheNames.at(-1); // if not found in the current cache, we look at this cache
	let prevCacheVersion = prevCacheName?.slice(prevCacheName.replace("_", "@").indexOf("@") + 1);
	let prevCache = prevCacheName && await caches.open(prevCacheName);
	if(!(await prevCache?.keys())?.filter(req => !req.url.startsWith("https://metadata/"))?.length) {
		caches.delete(prevCacheName);
		prevCacheName = undefined;
		prevCache = undefined;
	}
	prevCacheName && console.debug(`${cacheName} will load old files from ${prevCacheName}`);
	
	let changedFilesTxt = prevCacheName && await cache.match(CACHE_METADATA_CHANGED_FILES_URL).then(res => res?.text());
	/** @type {boolean} */
	let successfullyFetchedChangedFilesList = !!changedFilesTxt;
	if(prevCacheName && !changedFilesTxt) {
		let changedFilesUrl = `${patchUrl}/${prevCacheVersion}_to_${version}.txt`;
		console.debug(`Loading changed files from ${changedFilesUrl}`);
		[changedFilesTxt, successfullyFetchedChangedFilesList] = await fetch(changedFilesUrl).then(async res => {
			if(res.ok) {
				return tuple([await res.text(), true]);
			}
			throw `Response was not OK: ${res.status} ${res.statusText}`;
		}).catch(e => {
			console.error(`Failed to load changed files list from ${changedFilesUrl}: ${e}`);
			return tuple(["", false]);
		});
		cache.put(CACHE_METADATA_CHANGED_FILES_URL, new Response(changedFilesTxt));
	}
	let changedFiles = new Set(changedFilesTxt?.split("\n"));
	
	/**
	 * Fetches a file, checking first against cache.
	 * @param {string} filename
	 * @returns {Promise<Response>}
	 */
	return async filename => {
		let fullUrl = `${baseUrl}/${filename}`;
		let cacheLink = CACHE_URL_PREFIX + filename;
		let res = await cache.match(cacheLink);
		if(BAD_STATUS_CODES.includes(res?.status)) {
			await cache.delete(cacheLink);
		} else if(res) {
			prevCache?.delete(cacheLink);
			return res;
		}
		if(changedFiles.has(filename) || !successfullyFetchedChangedFilesList) {
			prevCache?.delete(cacheLink);
		} else {
			let prevRes = await prevCache?.match(cacheLink);
			if(prevRes) {
				prevCache.delete(cacheLink);
				if(!BAD_STATUS_CODES.includes(prevRes.status)) {
					await cache.put(cacheLink, prevRes.clone());
					return prevRes;
				}
			}
		}
		res = await retrieve(fullUrl);
		let fetchAttempsLeft = 5;
		const fetchRetryTimeout = 1000;
		while(BAD_STATUS_CODES.includes(res.status) && fetchAttempsLeft--) {
			console.debug(`Encountered bad HTTP status ${res.status} from ${fullUrl}, trying again in ${fetchRetryTimeout}ms`);
			await sleep(fetchRetryTimeout);
			res = await retrieve(fullUrl);
		}
		if(BAD_STATUS_CODES.includes(res.status)) {
			console.error(`Couldn't avoid getting bad HTTP status code ${res.status} for ${fullUrl}`);
		} else {
			await cache.put(cacheLink, res.clone());
		}
		return res;
	}
}

/**
 * Sorts strings of versions, lowest to highest.
 * @param {string[]} versions
 * @returns {string[]}
 */
function sortVersions(versions) {
	let versionsAndParsed = versions.map(v => [v, Array.from(v.matchAll(/\d+/g)).map(m => +m[0])]);
	versionsAndParsed.sort(([, a], [, b]) => Array(max(a.length, b.length)).fill(0).map((_, i) => (a[i] ?? 0) - (b[i] ?? 0)).find(d => d) || 0);
	return versionsAndParsed.map(([ver]) => ver);
}

/**
 * Actually load a file, for when it's not found in cache.
 * @param {string} url
 * @returns {Promise<Response>}
 */
async function retrieve(url) {
	const maxFetchAttempts = 3;
	const fetchRetryTimeout = 500; // ms
	let lastError;
	for(let i = 0; i < maxFetchAttempts; i++) {
		try {
			return await fetch(url);
		} catch(e) {
			if(navigator.onLine && e instanceof TypeError && e.message == "Failed to fetch") { // random Chrome issue when fetching many images at the same time. observed when fetching 1600 images at the same time.
				console.debug(`Failed to fetch resource at ${url}, trying again in ${fetchRetryTimeout}ms`);
				lastError = e;
				await sleep(fetchRetryTimeout);
			} else {
				throw e;
			}
		}
	}
	console.error(`Failed to fetch resource at ${url} after ${maxFetchAttempts} attempts...`);
	throw lastError;
}
```

## File: src/glsl.d.ts
```typescript
// for whatever reason this can't live in the root folder
declare module "*.glsl" {
	const content: string;
	export default content;
}
```

## File: src/HoloPrint.js
```javascript
import { BlobReader, ZipReader } from "@zip.js/zip.js";

import BlockGeoMaker from "./BlockGeoMaker.js";
import TextureAtlas from "./TextureAtlas.js";
import MaterialList from "./MaterialList.js";
import PreviewRenderer from "./PreviewRenderer.js";

import entityScripts from "./entityScripts.molang.js";
import { addPaddingToImage, array2DToMolang, arrayToMolang, awaitAllEntries, compressBlob, concatenateFiles, createNumericEnum, decompressBlob, functionToMolang, getFileExtension, hexColorToClampedTriplet, itemCriteriaToMolang, jsonc, lcm, loadTranslationLanguage, max, min, onEvent, overlaySquareImages, pi, removeFalsies, resizeImageToBlob, setImageOpacity, sha256, toImage, translate, transposeMatrix, tuple, UserError, ReplacingPatternMap, conditionallyCacheUnaryFunc, getGeoSpaceBlockPos, zipJsFileEntryToBlob } from "./utils.js";
import { createStructure, mergeStructurePalettes } from "./structure/structureHelpers.js";
import ResourcePackStack from "./ResourcePackStack.js";
import SpawnAnimationMaker from "./SpawnAnimationMaker.js";
import PolyMeshMaker from "./PolyMeshMaker.js";
import fetchers from "./fetchers.js";
import EntityGeoMaker from "./EntityGeoMaker.js";
import EntityManager from "./EntityManager.js";
import StructureDiagramMaker from "./StructureDiagramMaker.js";
import PackBuilder from "./PackBuilder.js";

export const VERSION = "dev";
export const IGNORED_BLOCKS = ["air", "piston_arm_collision", "sticky_piston_arm_collision", "light_block", "light_block_0", "light_block_1", "light_block_2", "light_block_3", "light_block_4", "light_block_5", "light_block_6", "light_block_7", "light_block_8", "light_block_9", "light_block_10", "light_block_11", "light_block_12", "light_block_13", "light_block_14", "light_block_15"]; // blocks to be ignored when scanning the structure file
export const PLAYER_CONTROL_NAMES = {
	TOGGLE_RENDERING: "player_controls.toggle_rendering",
	CHANGE_OPACITY: "player_controls.change_opacity",
	TOGGLE_TINT: "player_controls.toggle_tint",
	TOGGLE_VALIDATING: "player_controls.toggle_validating",
	CHANGE_LAYER: "player_controls.change_layer",
	DECREASE_LAYER: "player_controls.decrease_layer",
	CHANGE_LAYER_MODE: "player_controls.change_layer_mode",
	MOVE_HOLOGRAM: "player_controls.move_hologram",
	ROTATE_HOLOGRAM: "player_controls.rotate_hologram",
	CHANGE_STRUCTURE: "player_controls.change_structure",
	DISABLE_PLAYER_CONTROLS: "player_controls.disable_player_controls",
	BACKUP_HOLOGRAM: "player_controls.backup_hologram"
};
export const DEFAULT_PLAYER_CONTROLS = {
	TOGGLE_RENDERING: createItemCriteria("brick"),
	CHANGE_OPACITY: createItemCriteria("amethyst_shard"),
	TOGGLE_TINT: createItemCriteria("white_dye"),
	TOGGLE_VALIDATING: createItemCriteria("iron_ingot"),
	CHANGE_LAYER: createItemCriteria("leather"),
	DECREASE_LAYER: createItemCriteria("feather"),
	CHANGE_LAYER_MODE: createItemCriteria("flint"),
	MOVE_HOLOGRAM: createItemCriteria("stick"),
	ROTATE_HOLOGRAM: createItemCriteria("copper_ingot"),
	CHANGE_STRUCTURE: createItemCriteria("arrow"),
	DISABLE_PLAYER_CONTROLS: createItemCriteria("bone"),
	BACKUP_HOLOGRAM: createItemCriteria("paper")
};

const HOLOGRAM_LAYER_MODES = createNumericEnum(["SINGLE", "ALL_BELOW"]);

/**
 * Makes a HoloPrint resource pack from a structure file.
 * @param {File | File[]} structureFiles Either a singular structure file (`*.mcstructure`), or an array of structure files
 * @param {Partial<HoloPrintConfig>} [partialConfig]
 * @param {ResourcePackStack} [resourcePackStack]
 * @param {Element} [previewCont]
 * @returns {Promise<{ pack: File, materialList: MaterialList, previews?: Promise<PreviewRenderer[]> }>}
 */
export async function makePack(structureFiles, partialConfig, resourcePackStack = new ResourcePackStack(), previewCont) {
	console.info(`Running HoloPrint ${VERSION}`);
	let startTime = performance.now();
	
	let config = addDefaultConfig(partialConfig ?? {});
	if(!Array.isArray(structureFiles)) {
		structureFiles = [structureFiles];
	}
	let structures = await Promise.all(structureFiles.map(structureFile => createStructure(structureFile, config.IGNORED_BLOCKS)));
	console.info("Finished reading structures!");
	console.log("Structures:", structures);
	
	let blockPalette = mergeStructurePalettes(structures);
	
	let packName = config.PACK_NAME ?? getDefaultPackName(structureFiles);
	
	// very hacky TypeScript magic. This makes it so that I can have types for all the data after they're fetched.
	/** @type {[PathToData<"textureAtlasMappings", Data.TextureAtlasMappings>, PathToData<"blockShapes", Data.BlockShapes>, PathToData<"blockShapeGeos", Data.BlockShapeGeos>, PathToData<"blockStateDefinitions", Data.BlockStateDefinitions>, PathToData<"blockEigenvariants", Data.BlockEigenvariants>, PathToData<"materialListMappings", Data.MaterialListMappings>, PathToData<"itemIcons", Data.ItemIcons>]} */
	// @ts-expect-error
	let dataFileNames = ["textureAtlasMappings", "blockShapes", "blockShapeGeos", "blockStateDefinitions", "blockEigenvariants", "materialListMappings"];
	if(config.RETEXTURE_CONTROL_ITEMS) {
		// @ts-expect-error
		dataFileNames.push("itemIcons");
	}
	let packBuilder = new PackBuilder(fetchPackTemplateFile, getResponseContents);
	packBuilder.addPackTemplateFiles(
		"materials/entity.material",
		"particles/bounding_box_outline.json",
		"particles/saving_backup.json",
		"textures/holoprint/particle/exclamation_mark.png",
		"textures/holoprint/particle/save_icon.png",
		"textures/holoprint/ui/white_circle.png",
		"textures/holoprint/ui/white_circle.json",
		"ui/_ui_defs.json",
		"ui/_global_variables.json",
		"ui/holoprint_common.json",
		"ui/pause_screen.json",
		"ui/edu_pause_screen.json",
		"ui/start_screen.json",
		"ui/tabbed_upsell_screen.json",
		"ui/win10_trial_conversion_screen.json",
		"textures/holoprint/ui/logo_192.png",
		"textures/holoprint/ui/banner.png",
		"font/glyph_E2.png"
	);
	if(config.UI_CONTROLS_ENABLED) {
		packBuilder.addPackTemplateFiles(
			"textures/holoprint/icons/toggle_rendering.png",
			"textures/holoprint/icons/change_opacity.png",
			"textures/holoprint/icons/increase_opacity.png",
			"textures/holoprint/icons/toggle_tint.png",
			"textures/holoprint/icons/toggle_validating.png",
			"textures/holoprint/icons/change_layer.png",
			"textures/holoprint/icons/increase_layer.png",
			"textures/holoprint/icons/decrease_layer.png",
			"textures/holoprint/icons/change_layer_mode.png",
			"textures/holoprint/icons/move_hologram_x.png",
			"textures/holoprint/icons/move_hologram_y.png",
			"textures/holoprint/icons/move_hologram_z.png",
			"textures/holoprint/icons/rotate_hologram.png",
			"textures/holoprint/icons/change_structure.png",
			"textures/holoprint/icons/backup_hologram.png",
			"textures/holoprint/ui/menu_sliders_icon.png",
			"textures/holoprint/ui/menu_button_unpressed.png",
			"textures/holoprint/ui/menu_button_pressed.png",
			"textures/holoprint/ui/material_list_button_unpressed.png",
			"textures/holoprint/ui/material_list_button_pressed.png",
			"textures/holoprint/ui/quick_input_keyboard_hints.png",
			"ui/hud_screen.json",
			"ui/holoprint_keybinds.json",
			"ui/holoprint_touch_buttons.json"
		);
	}
	let packTemplatePromise = loadPackTemplate({
		manifest: "manifest.json",
		hologramRenderControllers: "render_controllers/holoprint.hologram.render_controllers.json",
		hologramGeo: "models/entity/holoprint.hologram.geo.json", // this is where we put all the ghost blocks
		hologramAnimationControllers: "animation_controllers/holoprint.hologram.animation_controllers.json",
		hologramAnimations: "animations/holoprint.hologram.animation.json",
		blockValidationParticle: "particles/block_validation.json",
		singleWhitePixelTexture: "textures/holoprint/particle/single_white_pixel.png",
		itemTexture: config.RETEXTURE_CONTROL_ITEMS? "textures/item_texture.json" : undefined,
		terrainTexture: config.RETEXTURE_CONTROL_ITEMS? "textures/terrain_texture.json" : undefined,
		materialListUI: "ui/holoprint_material_list.json",
		infoScreenUI: "ui/holoprint_info_screen.json",
		languagesDotJson: "texts/languages.json"
	});
	let resourcesPromise = loadResources({
		armorStandEntityFile: "entity/armor_stand.entity.json",
		leashKnotEntityFile: "entity/leash_knot.entity.json",
		blocksDotJson: "blocks.json",
		vanillaTerrainTexture: "textures/terrain_texture.json",
		flipbookTextures: "textures/flipbook_textures.json",
		defaultPlayerRenderControllers: config.PLAYER_CONTROLS_ENABLED? "render_controllers/player.render_controllers.json" : undefined,
		resourceItemTexture: config.RETEXTURE_CONTROL_ITEMS? "textures/item_texture.json" : undefined
	}, resourcePackStack);
	
	let controlsHaveBeenCustomised = JSON.stringify(config.CONTROLS) != JSON.stringify(DEFAULT_PLAYER_CONTROLS);
	let itemTagsPromise;
	if(controlsHaveBeenCustomised || config.RENAME_CONTROL_ITEMS || config.RETEXTURE_CONTROL_ITEMS) {
		itemTagsPromise = fetchers.bedrockData("item_tags.json").then(res => res.json());
	}
	
	let dataPromise = loadDataFiles(dataFileNames);
	let { languagesDotJson, bedrockMetadata } = await awaitAllEntries({
		/** @type {Promise<string[]>} */
		languagesDotJson: packTemplatePromise.languagesDotJson,
		bedrockMetadata: loadBedrockMetadataFiles({
			blocks: "vanilladata_modules/mojang-blocks.json",
			items: "vanilladata_modules/mojang-items.json"
		})
	});
	let resourceLangFilesPromise = loadResources(Object.fromEntries(languagesDotJson.map(language => [language, `texts/${language}.lang`])), resourcePackStack);
	let packTemplateLangFilesPromise = loadPackTemplate(Object.fromEntries(languagesDotJson.map(language => [language, `texts/${language}.lang`]))).allValues;
	let translationLanguagesLoadingPromise = Promise.all(languagesDotJson.map(language => loadTranslationLanguage(language)));
	/** @type {[string, Blob][]} */
	let controlItemTextures = [];
	let hasModifiedTerrainTexture = false;
	let retexturingControlItemsPromise;
	if(config.RETEXTURE_CONTROL_ITEMS) {
		retexturingControlItemsPromise = itemTagsPromise.then(async itemTags => {
			({ controlItemTextures, hasModifiedTerrainTexture } = await retextureControlItems(config, await dataPromise.itemIcons, itemTags, await resourcesPromise.resourceItemTexture, await resourcesPromise.blocksDotJson, await resourcesPromise.vanillaTerrainTexture, resourcePackStack, await packTemplatePromise.itemTexture, await packTemplatePromise.terrainTexture));
		});
	}
	let packIcon = config.PACK_ICON_BLOB ?? await makePackIcon(concatenateFiles(structureFiles));
	
	let data = await dataPromise.all;
	let entityGeoMaker = new EntityGeoMaker(resourcePackStack);
	let blockGeoMaker = new BlockGeoMaker(config, entityGeoMaker, data.blockShapes, data.blockShapeGeos, data.blockStateDefinitions, data.blockEigenvariants);
	// makePolyMeshTemplates() is an impure function and adds texture references to the textureRefs set property.
	// this is done as a struct of arrays rather than an array of structs, because the UVs are resolved later and carrying the centers of mass along would be a bit awkward.
	let { templates: unresolvedPolyMeshTemplatePalette, centersOfMass } = await blockGeoMaker.makePolyMeshTemplates(blockPalette);
	console.info("Finished making block geometry templates!");
	console.log("Block geo maker:", blockGeoMaker);
	console.log("Poly mesh template palette:", structuredClone(unresolvedPolyMeshTemplatePalette));
	
	let { armorStandEntityFile, leashKnotEntityFile, defaultPlayerRenderControllers, blocksDotJson, vanillaTerrainTexture, flipbookTextures } = await resourcesPromise.allValues;
	let textureAtlas = new TextureAtlas(config, resourcePackStack, blocksDotJson, vanillaTerrainTexture, flipbookTextures, data.textureAtlasMappings);
	let textureRefs = Array.from(blockGeoMaker.textureRefs);
	await textureAtlas.makeAtlas(textureRefs); // each texture reference will get added to the textureUvs array property
	let textureBlobs = textureAtlas.imageBlobs;
	let fullOpacityTextureBlob = textureBlobs.at(-1)[1];
	let defaultTextureIndex = max(textureBlobs.length - 3, 0); // default to 80% opacity
	
	console.log("Texture UVs:", textureAtlas.uvs);
	let unscaledPolyMeshTemplatePalette = unresolvedPolyMeshTemplatePalette.map(polyMeshTemplate => BlockGeoMaker.resolveTemplateFaceUvs(polyMeshTemplate, textureAtlas));
	let polyMeshTemplatePalette = blockGeoMaker.scalePolyMeshTemplates(unscaledPolyMeshTemplatePalette, centersOfMass);
	console.log("Poly mesh template palette with resolved UVs:", polyMeshTemplatePalette);
	
	let structureDiagramsAndIndices = await makeStructureDiagrams(textureAtlas.atlasWithoutOutlinesCanvas, unscaledPolyMeshTemplatePalette, structures, config.MAX_STRUCTURE_DIAGRAM_TEXTURE_SIZE);
	
	let { manifest, hologramRenderControllers, hologramGeo, hologramAnimationControllers, hologramAnimations, blockValidationParticle, singleWhitePixelTexture, materialListUI, infoScreenUI, itemTexture, terrainTexture } = await packTemplatePromise.allValues;
	
	let structureGeoTemplate = hologramGeo["minecraft:geometry"][0];
	hologramGeo["minecraft:geometry"].splice(0, 1);
	
	structureGeoTemplate["description"]["texture_width"] = textureAtlas.textureWidth;
	structureGeoTemplate["description"]["texture_height"] = textureAtlas.textureHeight;
	
	let leashKnotModeArmorStandEntityFile = structuredClone(armorStandEntityFile);
	let entityManager = new EntityManager({ armorStandEntityFile, leashKnotEntityFile });
	
	let totalBlockCount = 0;
	let maxHeight = max(...structures.map(structure => structure.height));
	let layerIsEmpty = (new Array(maxHeight)).fill(true);
	
	let polyMeshMaker = new PolyMeshMaker(polyMeshTemplatePalette);
	let materialList = new MaterialList(bedrockMetadata.blocks, bedrockMetadata.items, data.materialListMappings);
	structures.forEach((structure, structureI) => {
		let geoShortName = `hologram_${structureI}`;
		let geoIdentifier = `geometry.holoprint.hologram_${structureI}`;
		let geo = structuredClone(structureGeoTemplate);
		geo["description"]["identifier"] = geoIdentifier;
		entityManager.addGeometry(geoShortName, geoIdentifier);
		hologramRenderControllers["render_controllers"]["controller.render.holoprint.hologram"]["arrays"]["geometries"]["Array.geometries"].push(`Geometry.${geoShortName}`);
		
		for(let y = 0; y < structure.height; y++) {
			for(let x = 0; x < structure.width; x++) {
				for(let z = 0; z < structure.depth; z++) {
					let coords = tuple([x, y, z]);
					for(let layerI = 0; layerI < 2; layerI++) {
						let [block, paletteI] = structure.getBlockAndIndex(coords, layerI);
						if(!(paletteI in polyMeshTemplatePalette)) {
							if(block) {
								console.error(`A poly mesh template wasn't made for blockPalette[${paletteI}] = ${block.name}!`);
							}
							continue;
						}
						
						let geoSpaceBlockPos = getGeoSpaceBlockPos(coords);
						polyMeshMaker.add(paletteI, geoSpaceBlockPos, layerI);
						
						if(!config.IGNORED_MATERIAL_LIST_BLOCKS.includes(block.name)) {
							materialList.add(block);
						}
						totalBlockCount++;
						layerIsEmpty[y] = false;
					}
				}
			}
			let layerName = `l_${y}`;
			let layerBone = {
				name: layerName,
				parent: "hologram_offset_wrapper",
				pivot: [8, 0, -8],
				poly_mesh: polyMeshMaker.export()
			};
			geo["bones"].push(layerBone);
			polyMeshMaker.clear();
		}
		hologramGeo["minecraft:geometry"].push(geo);
		
		addBoundingBoxParticles(hologramAnimationControllers, structureI, structure);
	});
	
	let { uniqueBlocksToValidate, totalBlocksToValidateByStructure, totalBlocksToValidateByStructureByLayer } = handleBlockValidation(config, structures, hologramAnimationControllers, (coords, locatorName) => addCoordinateLocatorToHologramGeo(hologramGeo, coords, locatorName));
	
	makeLayerAnimations(config, structures, entityManager, hologramAnimations, hologramAnimationControllers);
	if(config.SPAWN_ANIMATION_ENABLED) {
		let spawnAnimationMaker = new SpawnAnimationMaker(config, [1, maxHeight, 1]);
		for(let y = 0; y < maxHeight; y++) {
			if(!layerIsEmpty[y]) {
				let layerName = `l_${y}`;
				spawnAnimationMaker.addBone(layerName, [0, y, 0]);
			}
		}
		hologramAnimations["animations"]["animation.holoprint.hologram.spawn"] = spawnAnimationMaker.makeAnimation();
	}
	
	let structureSizesMolang = [
		arrayToMolang(structures.map(structure => structure.width), "v.hologram.structure_index"),
		arrayToMolang(structures.map(structure => structure.height), "v.hologram.structure_index"),
		arrayToMolang(structures.map(structure => structure.depth), "v.hologram.structure_index")
	];
	let coordinateLockAxes = config.COORDINATE_LOCK && transposeMatrix(config.COORDINATE_LOCK);
	let coordinateLockCoordsMolang = config.COORDINATE_LOCK? coordinateLockAxes.slice(0, 3).map(axis => arrayToMolang(axis, "v.hologram.structure_index")) : ["0", "0", "0"];
	
	entityManager.addMaterial("hologram", "holoprint_hologram");
	entityManager.addMaterial("hologram.wrong_block_overlay", "holoprint_hologram.wrong_block_overlay");
	entityManager.addTexture("hologram.overlay", "textures/holoprint/entity/overlay");
	entityManager.addTexture("hologram.save_icon", "textures/holoprint/particle/save_icon");
	entityManager.addAnimation("hologram.align", "animation.holoprint.hologram.align");
	if(config.COORDINATE_LOCK) {
		entityManager.addAnimation("hologram.coordinate_lock", "animation.holoprint.hologram.coordinate_lock");
		let coordinateLockRotsMolang = arrayToMolang(coordinateLockAxes[3], "v.hologram.structure_index");
		hologramAnimations["animations"]["animation.holoprint.hologram.coordinate_lock"]["bones"]["hologram_offset_wrapper"]["rotation"][1] = coordinateLockRotsMolang;
		delete hologramAnimations["animations"]["animation.holoprint.hologram.offset"];
	} else {
		entityManager.addAnimation("hologram.offset", "animation.holoprint.hologram.offset");
		delete hologramAnimations["animations"]["animation.holoprint.hologram.coordinate_lock"];
	}
	entityManager.addAnimation("hologram.spawn", "animation.holoprint.hologram.spawn");
	entityManager.addAnimation("hologram.wrong_block_overlay", "animation.holoprint.hologram.wrong_block_overlay");
	entityManager.addAnimation("controller.hologram.spawn_animation", "controller.animation.holoprint.hologram.spawn_animation");
	entityManager.addAnimation("controller.hologram.layers", "controller.animation.holoprint.hologram.layers");
	entityManager.addAnimation("controller.hologram.bounding_box", "controller.animation.holoprint.hologram.bounding_box");
	entityManager.addAnimation("controller.hologram.block_validation", "controller.animation.holoprint.hologram.block_validation");
	entityManager.addAnimation("controller.hologram.saving_backup_particles", "controller.animation.holoprint.hologram.saving_backup_particles");
	entityManager.addAnimateScript("hologram.align", config.COORDINATE_LOCK? "hologram.coordinate_lock" : "hologram.offset", "hologram.wrong_block_overlay", "controller.hologram.spawn_animation", "controller.hologram.layers", "controller.hologram.bounding_box", "controller.hologram.block_validation", "controller.hologram.saving_backup_particles");
	entityManager.setShouldUpdateBonesAndEffectsOffscreen(true); // makes backups work when offscreen (from my testing it helps a bit). this also makes it render when you're facing away, removing the need for visible_bounds_width/visible_bounds_height in the geometry file. (when should_update_effects_offscreen is set, it renders when facing away, but doesn't seem to have access to v. variables.)
	
	let initializeScriptBaseConstants = {
		structureSize: structures[0].size,
		initialOffset: config.INITIAL_OFFSET,
		defaultTextureIndex,
		singleLayerMode: HOLOGRAM_LAYER_MODES.SINGLE,
		structureCount: structureFiles.length
	};
	let preAnimationScriptBaseConstants = {
		textureBlobsCount: textureBlobs.length,
		totalBlocksToValidate: arrayToMolang(totalBlocksToValidateByStructure, "v.hologram.structure_index"),
		totalBlocksToValidateByLayer: array2DToMolang(totalBlocksToValidateByStructureByLayer, "v.hologram.structure_index", "v.hologram.layer"),
		backupSlotCount: config.BACKUP_SLOT_COUNT,
		structureSizesMolang,
		coordinateLockEnabled: !!config.COORDINATE_LOCK,
		coordinateLockCoordsMolang,
		toggleRendering: itemCriteriaToMolang(config.CONTROLS.TOGGLE_RENDERING),
		changeOpacity: itemCriteriaToMolang(config.CONTROLS.CHANGE_OPACITY),
		toggleTint: itemCriteriaToMolang(config.CONTROLS.TOGGLE_TINT),
		toggleValidating: itemCriteriaToMolang(config.CONTROLS.TOGGLE_VALIDATING),
		changeLayer: itemCriteriaToMolang(config.CONTROLS.CHANGE_LAYER),
		decreaseLayer: itemCriteriaToMolang(config.CONTROLS.DECREASE_LAYER),
		changeLayerMode: itemCriteriaToMolang(config.CONTROLS.CHANGE_LAYER_MODE),
		rotateHologram: itemCriteriaToMolang(config.CONTROLS.ROTATE_HOLOGRAM),
		disablePlayerControls: itemCriteriaToMolang(config.CONTROLS.DISABLE_PLAYER_CONTROLS),
		backupHologram: itemCriteriaToMolang(config.CONTROLS.BACKUP_HOLOGRAM),
		singleLayerMode: HOLOGRAM_LAYER_MODES.SINGLE,
		ACTIONS: entityScripts.ACTIONS
	};
	/** @param {object} entityFile @param {boolean} isArmorStand @param {boolean} hasHologram */
	const addScriptsToEntity = (entityFile, isArmorStand, hasHologram) => {
		let entityDescription = entityFile["minecraft:client_entity"]["description"];
		entityDescription["scripts"] ??= {};
		entityDescription["scripts"]["initialize"] ??= [];
		entityDescription["scripts"]["initialize"].push(functionToMolang(entityScripts.initialize, {
			...initializeScriptBaseConstants,
			isArmorStand,
			hasHologram
		}));
		entityDescription["scripts"]["pre_animation"] ??= [];
		entityDescription["scripts"]["pre_animation"].push(functionToMolang(entityScripts.preAnimation, {
			...preAnimationScriptBaseConstants,
			isArmorStand,
			hasHologram
		}));
	};
	addScriptsToEntity(armorStandEntityFile, true, true);
	addScriptsToEntity(leashKnotEntityFile, false, true);
	addScriptsToEntity(leashKnotModeArmorStandEntityFile, true, false);
	
	
	entityManager.addGeometry("hologram.wrong_block_overlay", "geometry.holoprint.hologram.wrong_block_overlay");
	entityManager.addGeometry("hologram.valid_structure_overlay", "geometry.holoprint.hologram.valid_structure_overlay");
	entityManager.addGeometry("hologram.particle_alignment", "geometry.holoprint.hologram.particle_alignment");
	entityManager.addRenderController({
		"controller.render.holoprint.hologram": "v.hologram.rendering"
	}, {
		"controller.render.holoprint.hologram.wrong_block_overlay": "v.hologram.show_wrong_block_overlay"
	}, {
		"controller.render.holoprint.hologram.valid_structure_overlay": "v.hologram.validating && v.wrong_blocks == 0"
	}, "controller.render.holoprint.hologram.particle_alignment");
	entityManager.addParticleEffect("bounding_box_outline", "holoprint:bounding_box_outline");
	entityManager.addParticleEffect("saving_backup", "holoprint:saving_backup");
	
	textureBlobs.forEach(([textureName]) => {
		entityManager.addTexture(textureName, `textures/holoprint/entity/${textureName}`);
		hologramRenderControllers["render_controllers"]["controller.render.holoprint.hologram"]["arrays"]["textures"]["Array.textures"].push(`Texture.${textureName}`);
	});
	
	let tintColorChannels = hexColorToClampedTriplet(config.TINT_COLOR);
	hologramRenderControllers["render_controllers"]["controller.render.holoprint.hologram"]["overlay_color"] = {
		r: +tintColorChannels[0].toFixed(4),
		g: +tintColorChannels[1].toFixed(4),
		b: +tintColorChannels[2].toFixed(4),
		a: `v.hologram.show_tint? ${config.TINT_OPACITY} : 0`
	};
	
	let overlayTexture = await setImageOpacity(singleWhitePixelTexture, config.WRONG_BLOCK_OVERLAY_COLOR[3]);
	
	// add the particles' short names, and then reference them in the animation controller
	uniqueBlocksToValidate.forEach(blockName => {
		let particleName = `validate_${blockName.replace(":", ".")}`;
		entityManager.addParticleEffect(particleName, `holoprint:${particleName}`);
	});
	
	let playerRenderControllers = defaultPlayerRenderControllers && addPlayerControlsToRenderControllers(config, defaultPlayerRenderControllers);
	
	console.log("Block counts map:", materialList.materials);
	let resourceLangFiles = await resourceLangFilesPromise.allValues;
	let exportedMaterialLists = Object.fromEntries(languagesDotJson.map(language => {
		materialList.setLanguage(resourceLangFiles[language]); // we could make the material list export to multiple languages simultaneously, but I'm assuming here that there could be gaps between language files so they have to be done separately (for whatever reason... maybe international relations deteriorate and they refuse to translate the new update to Chinese... idk)
		return [language, materialList.export()];
	}));
	let exportedMaterialListEnglish = exportedMaterialLists["en_US"]; // all languages have the same translation keys, which are used in the material list UI. the translated item names (which are different for every language) are used in the pack description only.
	console.log("Exported material list:", exportedMaterialListEnglish);
	
	// console.log(partitionedBlockCounts);
	let highestItemCount;
	if(config.UI_CONTROLS_ENABLED) {
		addMaterialListUI(exportedMaterialListEnglish, materialListUI);
		highestItemCount = max(...exportedMaterialListEnglish.map(({ count }) => count));
	}
	
	let materialListsByLayerByStructure = makeMaterialListsForEachStructureAndEachLayer(config, structures, bedrockMetadata.blocks, bedrockMetadata.items, data.materialListMappings, resourceLangFiles["en_US"]);
	addInfoScreenUIPages(infoScreenUI, structures, structureDiagramsAndIndices, materialListsByLayerByStructure);
	
	manifest["header"]["name"] = packName;
	manifest["header"]["uuid"] = crypto.randomUUID();
	let packVersion = VERSION.match(/^v(\d+)\.(\d+)\.(\d+)$/)?.slice(1)?.map(x => +x) ?? [1, 0, 0];
	manifest["header"]["version"] = packVersion;
	manifest["modules"][0]["uuid"] = crypto.randomUUID();
	manifest["modules"][0]["version"] = packVersion;
	manifest["metadata"]["generated_with"]["holoprint"] = [packVersion.join(".")];
	if(config.AUTHORS.length) {
		manifest["metadata"]["authors"].push(...config.AUTHORS);
	}
	if(config.DESCRIPTION) {
		let labelsAndLinks = findLinksInDescription(config.DESCRIPTION);
		labelsAndLinks.forEach(([label, link], i) => {
			manifest["settings"].push({
				type: "input",
				text: label,
				default: link,
				name: `link_${i}`
			});
		});
	}
	
	let itemTags = await itemTagsPromise;
	let inGameControls, controlItemTranslations;
	if(controlsHaveBeenCustomised || config.RENAME_CONTROL_ITEMS) {
		await translationLanguagesLoadingPromise;
		({ inGameControls, controlItemTranslations } = translateControlItems(config, bedrockMetadata.blocks, bedrockMetadata.items, data.materialListMappings, resourceLangFiles, itemTags));
	}
	
	let packTemplateLangFiles = await packTemplateLangFilesPromise;
	let langFiles = makeLangFiles(config, packTemplateLangFiles, packName, materialList, exportedMaterialLists, controlsHaveBeenCustomised, inGameControls, controlItemTranslations, structures);
	
	await retexturingControlItemsPromise;
	
	console.info("Finished making all pack files!");
	
	if(structureFiles.length == 1) {
		packBuilder.addFile(".mcstructure.gzip", compressBlob(structureFiles[0]), { comment: structureFiles[0].name });
	} else {
		structureFiles.forEach((structureFile, i) => {
			packBuilder.addFile(`${i}.mcstructure.gzip`, compressBlob(structureFile), { comment: structureFile.name });
		});
	}
	packBuilder.addFile("manifest.json", manifest);
	packBuilder.addFile("render_controllers/holoprint.hologram.render_controllers.json", hologramRenderControllers);
	packBuilder.addFile("models/entity/holoprint.hologram.geo.json", hologramGeo);
	packBuilder.addFile("animation_controllers/holoprint.hologram.animation_controllers.json", hologramAnimationControllers);
	packBuilder.addFile("animations/holoprint.hologram.animation.json", hologramAnimations);
	packBuilder.addFile("textures/holoprint/particle/single_white_pixel.png", singleWhitePixelTexture);
	packBuilder.addFile("ui/holoprint_material_list.json", materialListUI);
	packBuilder.addFile("ui/holoprint_info_screen.json", infoScreenUI);
	packBuilder.addFile("texts/languages.json", languagesDotJson);
	
	packBuilder.addFile("pack_icon.png", packIcon);
	let regularArmorStandEntityJson = JSON.stringify(armorStandEntityFile);
	packBuilder.addFile("subpacks/default/entity/armor_stand.entity.json", regularArmorStandEntityJson.replaceAll("HOLOGRAM_INITIAL_ACTIVATION", "true"));
	packBuilder.addFile("subpacks/punch_to_activate/entity/armor_stand.entity.json", regularArmorStandEntityJson.replaceAll("HOLOGRAM_INITIAL_ACTIVATION", "false"));
	let leashKnotEntityJson = JSON.stringify(leashKnotEntityFile).replaceAll("HOLOGRAM_INITIAL_ACTIVATION", "true");
	packBuilder.addFile("subpacks/leash_knot_mode/entity/leash_knot.entity.json", leashKnotEntityJson);
	let leashKnotModeArmorStandEntityJson = JSON.stringify(leashKnotModeArmorStandEntityFile);
	packBuilder.addFile("subpacks/leash_knot_mode/entity/armor_stand.entity.json", leashKnotModeArmorStandEntityJson);
	if(config.PLAYER_CONTROLS_ENABLED) {
		packBuilder.addFile("render_controllers/player.render_controllers.json", playerRenderControllers);
	}
	uniqueBlocksToValidate.forEach(blockName => {
		let particleName = `validate_${blockName.replace(":", ".")}`; // file names can't have : in them
		let particle = structuredClone(blockValidationParticle);
		particle["particle_effect"]["description"]["identifier"] = `holoprint:${particleName}`;
		particle["particle_effect"]["components"]["minecraft:particle_expire_if_in_blocks"] = [blockName.includes(":")? blockName : `minecraft:${blockName}`]; // add back minecraft: namespace if it's missing
		packBuilder.addFile(`particles/${particleName}.json`, particle);
	});
	packBuilder.addFile("textures/holoprint/entity/overlay.png", overlayTexture);
	textureBlobs.forEach(([textureName, blob]) => {
		packBuilder.addFile(`textures/holoprint/entity/${textureName}.png`, blob);
	});
	structureDiagramsAndIndices.diagrams.forEach((diagramBlob, diagramIndex) => {
		packBuilder.addFile(`${getLayerDiagramTextureName(diagramIndex)}.png`, diagramBlob);
	});
	if(config.RETEXTURE_CONTROL_ITEMS) {
		packBuilder.addFile("textures/item_texture.json", itemTexture);
		if(hasModifiedTerrainTexture) {
			packBuilder.addFile("textures/terrain_texture.json", terrainTexture);
		}
		controlItemTextures.forEach(([fileName, imageBlob]) => {
			packBuilder.addFile(fileName, imageBlob);
		});
	}
	if(config.UI_CONTROLS_ENABLED && highestItemCount < 1728) {
		packBuilder.removeFile("font/glyph_E2.png"); // todo: I'm guessing most structures wouldn't fit this criteria, make the glyph be loaded only when needed
	}
	langFiles.forEach(([language, langFile]) => {
		packBuilder.addFile(`texts/${language}.lang`, langFile);
	});
	
	let pack = await packBuilder.export(packName, {
		zipCompressionLevel: config.COMPRESSION_LEVEL
	});
	
	console.info(`Finished creating pack in ${+(performance.now() - startTime).toFixed(0) / 1000}s!`);
	let res = {
		pack,
		materialList
	};
	
	if(previewCont) {
		let showPreview = () => {
			res.previews = Promise.all(structures.map(async (structure, structureI) => {
				if(structureI > 0) {
					previewCont.parentNode.appendChild(document.createElement("hr"));
				}
				let cont = structureI == 0? previewCont : previewCont.parentNode.appendChild(previewCont.cloneNode());
				let name = structures.length == 1? packName : getDefaultPackName([structureFiles[structureI]]);
				return await PreviewRenderer.new(cont, name, fullOpacityTextureBlob, structure, polyMeshTemplatePalette, {
					showSkybox: config.SHOW_PREVIEW_SKYBOX,
					showFps: config.SHOW_PREVIEW_WIDGETS,
					showOptions: config.SHOW_PREVIEW_WIDGETS
				});
			}));
		};
		if(totalBlockCount < config.PREVIEW_BLOCK_LIMIT && removeFalsies(blockPalette).length < 250) {
			showPreview();
		} else {
			let message = document.createElement("div");
			message.classList.add("previewMessage", "clickToView");
			let p = document.createElement("p");
			p.dataset.translationSubTotalBlockCount = totalBlockCount.toString();
			if(structureFiles.length == 1) {
				p.dataset.translate = "preview.click_to_view";
			} else {
				p.dataset.translate = "preview.click_to_view_multiple";
			}
			message.appendChild(p);
			message[onEvent]("click", () => {
				message.remove();
				showPreview();
			});
			previewCont.appendChild(message);
		}
	}
	
	return res;
}
/**
 * Retrieves the structure files from a completed HoloPrint resource pack.
 * @param {File} resourcePack HoloPrint resource pack (`*.mcpack)
 * @returns {Promise<File[]>}
 */
export async function extractStructureFilesFromPack(resourcePack) {
	let packFileReader = new BlobReader(resourcePack);
	let packFolder = new ZipReader(packFileReader);
	/** @type {FileEntry[]} */
	// @ts-expect-error
	let packEntries = await packFolder.getEntries();
	packFolder.close();
	
	let structureFileEntries = packEntries.filter(entry => entry.filename.endsWith(".mcstructure") || entry.filename.endsWith(".mcstructure.gzip"));
	let hasMultipleStructureFiles = structureFileEntries.length > 1;
	
	let packName = resourcePack.name.slice(0, resourcePack.name.indexOf("."));
	return await Promise.all(structureFileEntries.map(async (entry, i) => {
		let structureBlob = await zipJsFileEntryToBlob(entry);
		if(entry.filename.endsWith(".mcstructure.gzip")) {
			structureBlob = await decompressBlob(structureBlob);
		}
		
		return new File([structureBlob], entry.comment || `${packName}${hasMultipleStructureFiles? `_${i}` : ""}.mcstructure`, {
			type: "application/mcstructure"
		});
	}));
}
/**
 * Updates a HoloPrint resource pack by remaking it.
 * @param {File} resourcePack HoloPrint resource pack to update (`*.mcpack`)
 * @param {HoloPrintConfig} [config]
 * @param {ResourcePackStack} [resourcePackStack]
 * @param {HTMLElement} [previewCont]
 * @returns {Promise<{ pack: File, materialList: MaterialList, previews?: Promise<PreviewRenderer[]> }>}
 */
export async function updatePack(resourcePack, config, resourcePackStack, previewCont) {
	let structureFiles = await extractStructureFilesFromPack(resourcePack);
	if(!structureFiles.length) {
		throw new UserError(`No structure files found inside resource pack ${resourcePack.name}; cannot update pack!`);
	}
	return await makePack(structureFiles, config, resourcePackStack, previewCont);
}
/**
 * Returns the default pack name that would be used if no pack name is specified.
 * @param {File[]} structureFiles
 * @returns {string}
 */
export function getDefaultPackName(structureFiles) {
	let defaultName = structureFiles.map(structureFile => structureFile.name.replace(/(\.holoprint)?\.[^.]+$/, "")).join(", ");
	if(defaultName.length > 40) {
		defaultName = `${defaultName.slice(0, 19)}...${defaultName.slice(-19)}`
	}
	if(defaultName.trim() == "") {
		defaultName = "hologram";
	}
	return defaultName;
}
/**
 * Finds all labels and links in a description section that will be put in the settings links section.
 * @param {string} description
 * @returns {[string, string][]}
 */
export function findLinksInDescription(description) {
	let matches = Array.from(description.matchAll(/(.*?)\n?\s*(https?:\/\/[^\s]+)/g));
	let links = new Array(matches.length);
	matches.forEach((match, i) => {
		let label = match[1].trim();
		let url = match[2].trim();
		links[i] = [label, url];
	});
	return links;
}
/**
 * Creates an ItemCriteria from arrays of names and tags.
 * @param {string | string[]} names
 * @param {string | string[]} [tags]
 * @returns {ItemCriteria}
 */
export function createItemCriteria(names, tags = []) { // IDK why I haven't made this a class
	if(!Array.isArray(names)) {
		names = [names];
	}
	if(!Array.isArray(tags)) {
		tags = [tags];
	}
	return { names, tags };
}
/**
 * Adds default config options to a potentially incomplete config object.
 * @param {Partial<HoloPrintConfig>} config
 * @returns {HoloPrintConfig}
 */
export function addDefaultConfig(config) {
	return Object.freeze({
		...{ // defaults
			IGNORED_BLOCKS: [],
			IGNORED_MATERIAL_LIST_BLOCKS: [],
			SCALE: 0.95,
			OPACITY: 0.9,
			MULTIPLE_OPACITIES: true,
			TINT_COLOR: "#579EFA",
			TINT_OPACITY: 0.2,
			MINI_SCALE: 0.125, // size of ghost blocks when in the mini view for layers
			TEXTURE_OUTLINE_WIDTH: 0.25, // pixels, x ∈ [0, 1], x ∈ 2^ℝ
			TEXTURE_OUTLINE_COLOR: "#00F",
			TEXTURE_OUTLINE_OPACITY: 0.65,
			SPAWN_ANIMATION_ENABLED: true,
			SPAWN_ANIMATION_LENGTH: 0.4, // in seconds
			PLAYER_CONTROLS_ENABLED: true,
			CONTROLS: {},
			UI_CONTROLS_ENABLED: true,
			RETEXTURE_CONTROL_ITEMS: true,
			CONTROL_ITEM_TEXTURE_SCALE: 1,
			RENAME_CONTROL_ITEMS: true,
			WRONG_BLOCK_OVERLAY_COLOR: tuple([1, 0, 0, 0.3]),
			INITIAL_OFFSET: tuple([0, 0, 0]),
			COORDINATE_LOCK: undefined,
			BACKUP_SLOT_COUNT: 10,
			VALIDATE_AIR_BLOCKS: false,
			MAX_STRUCTURE_DIAGRAM_TEXTURE_SIZE: 512,
			PACK_NAME: undefined,
			PACK_ICON_BLOB: undefined,
			AUTHORS: [],
			DESCRIPTION: undefined,
			COMPRESSION_LEVEL: 5, // level 9 was 8 bytes larger than level 5 when I tested... :0
			PREVIEW_BLOCK_LIMIT: 2500,
			SHOW_PREVIEW_SKYBOX: true,
			SHOW_PREVIEW_WIDGETS: true
		},
		...config,
		...{ // overrides (applied after)
			IGNORED_BLOCKS: IGNORED_BLOCKS.concat(config.IGNORED_BLOCKS ?? []),
			CONTROLS: {
				...DEFAULT_PLAYER_CONTROLS,
				...config.CONTROLS
			}
		}
	});
}
const fetchPackTemplateFile = conditionallyCacheUnaryFunc(
	/** @param {string} path @returns {Promise<Response>} */
	function(path) { // typescript doesn't detect the template parameter correctly if it's an arrow function
		return fetch(`packTemplate/${path}`);
	},
	path => path.startsWith("textures/holoprint/icons"), // only cache icon textures. they're fetched in two different places and I couldn't beb bothered to store them in variables somewhere.
	resPromise => resPromise.then(res => res.clone()) // response bodies can only be consumed once, so they must be cloned
);
/**
 * @template {Record<string, string>} T
 * @param {{ [K in keyof T]: T[K] }} packTemplateFiles
 */
function loadPackTemplate(packTemplateFiles) {
	return multiload(packTemplateFiles, fetchPackTemplateFile);
}
/**
 * @template {Record<string, string>} T
 * @param {{ [K in keyof T]: T[K] }} resourceFiles
 * @param {ResourcePackStack} resourcePackStack
 */
function loadResources(resourceFiles, resourcePackStack) {
	return multiload(resourceFiles, path => resourcePackStack.fetchResource(path));
}

/**
 * @template {Record<string, string>} T
 * @param {{ [K in keyof T]: T[K] }} fileNamesAndPaths
 * @param {(filePath: string) => Promise<Response>} fetchFunc
 * @returns {{ [K in keyof T]: GetFileType<T[K]> } & { allValues: Promise<{ [K in keyof T]: GetFileType<T[K]> }>, allEntries: Promise<{ [K in keyof T as T[K]]: GetFileType<T[K]> }> }}
 * @areturns {{ [K in keyof T]: T[K] }}
 */
function multiload(fileNamesAndPaths, fetchFunc) {
	let entries = Object.entries(fileNamesAndPaths).filter(([, path]) => path);
	let contents = Object.fromEntries(entries.map(([name, path]) => [name, getResponseContents(fetchFunc(path), path)]));
	// @ts-expect-error
	return {
		...contents,
		allValues: awaitAllEntries(contents),
		allEntries: Promise.all(entries.map(async ([name, path]) => [path, await contents[name]])).then(res => Object.fromEntries(res))
	};
}
/**
 * @template {PathToData<any, any>[]} T
 * @param {T} fileNames
 * @returns {{ [K in T[number] as K["dataName"]]: Promise<K["data"]> } & { all: Promise<{ [K in T[number] as K["dataName"]]: K["data"] }> }}
 */
function loadDataFiles(fileNames) {
	let res = Object.fromEntries(fileNames.map(fileName => [fileName, fetch(`data/${fileName}.json`).then(res => jsonc(res))]));
	res.all = awaitAllEntries(res);
	return res;
}
/**
 * @template T
 * @param {T} files
 * @returns {Promise<Record<keyof T, object>>}
 */
async function loadBedrockMetadataFiles(files) {
	let fileNamesAndContents = await Promise.all(Object.entries(files).map(async ([shortName, fileName]) => [shortName, await fetchers.vanillaData(`metadata/${fileName}`).then(res => jsonc(res))]));
	return Object.fromEntries(fileNamesAndContents);
}
/**
 * Gets the contents of a response based on the requested file extension (e.g. object from .json, image from .png, etc.).
 * @template {string} T
 * @param {Promise<Response>} resPromise
 * @param {T} filePath
 * @returns {Promise<GetFileType<T>>}
 */
async function getResponseContents(resPromise, filePath) {
	let res = await resPromise;
	if(res.status >= 400) {
		throw new Error(`HTTP error ${res.status} for ${res.url}`);
	}
	let fileExtension = getFileExtension(filePath);
	switch(fileExtension) {
		case "json":
		// @ts-expect-error
		case "material": return await jsonc(res);
		// @ts-expect-error
		case "lang": return await res.text();
		// @ts-expect-error
		case "png": return await toImage(res);
	}
	throw new Error(`Unknown file extension: ${filePath}`);
}
/**
 * Makes the layer-by-layer diagrams and the isometric diagram for structures.
 * @param {OffscreenCanvas} textureCanvas
 * @param {PolyMeshTemplateFaceWithUvs[][]} polyMeshTemplatePalette
 * @param {IStructure[]} structures
 * @param {number} maxTextureSize
 * @returns {Promise<StructureDiagramsAndIndices>}
 */
async function makeStructureDiagrams(textureCanvas, polyMeshTemplatePalette, structures, maxTextureSize) {
	let structureDiagramMaker = new StructureDiagramMaker(textureCanvas, structures.map(structure => structure.size), maxTextureSize);
	let diagramsAndIndices = await structureDiagramMaker.makeDiagramsForStructures(polyMeshTemplatePalette, structures);
	structureDiagramMaker.dispose();
	return diagramsAndIndices;
}
/**
 * @param {number} index
 * @returns {string}
 */
function getLayerDiagramTextureName(index) {
	return `textures/holoprint/ui/layer_diagram_${index}`;
}
/**
 * Makes the layer animations and animation controllers. Mutates the original arguments.
 * @param {HoloPrintConfig} config
 * @param {IStructure[]} structures
 * @param {EntityManager} entityManager
 * @param {object} hologramAnimations
 * @param {object} hologramAnimationControllers
 */
function makeLayerAnimations(config, structures, entityManager, hologramAnimations, hologramAnimationControllers) {
	let layerAnimationStates = hologramAnimationControllers["animation_controllers"]["controller.animation.holoprint.hologram.layers"]["states"];
	let topLayer = max(...structures.map(structure => structure.height)) - 1;
	layerAnimationStates["default"]["transitions"].push(
		{
			l_0: `v.hologram.layer > -1 && v.hologram.layer != ${topLayer} && v.hologram.layer_mode == ${HOLOGRAM_LAYER_MODES.SINGLE}`
		},
		{
			[`l_${topLayer}`]: `v.hologram.layer == ${topLayer} && v.hologram.layer_mode == ${HOLOGRAM_LAYER_MODES.SINGLE}`
		}
	);
	if(topLayer > 0) {
		layerAnimationStates["default"]["transitions"].push(
			{
				"l_0-": `v.hologram.layer > -1 && v.hologram.layer != ${topLayer - 1} && v.hologram.layer_mode == ${HOLOGRAM_LAYER_MODES.ALL_BELOW}`
			},
			{
				[`l_${topLayer - 1}-`]: `v.hologram.layer == ${topLayer - 1} && v.hologram.layer_mode == ${HOLOGRAM_LAYER_MODES.ALL_BELOW}`
			}
		);
	}
	
	for(let y = 0; y <= topLayer; y++) {
		let layerName = `l_${y}`;
		layerAnimationStates[layerName] = {
			animations: [`hologram.l_${y}`],
			blend_transition: 0.1,
			blend_via_shortest_path: true,
			transitions: [
				{
					[y == topLayer? "default" : `${layerName}-`]: `v.hologram.layer_mode == ${HOLOGRAM_LAYER_MODES.ALL_BELOW}`
				},
				{
					[y == 0? "default" : `l_${y - 1}`]: `v.hologram.layer < ${y}${y == topLayer? " && v.hologram.layer != -1" : ""}`
				},
				(y == topLayer? {
					default: "v.hologram.layer == -1"
				} : {
					[`l_${y + 1}`]: `v.hologram.layer > ${y}`
				})
			]
		};
		let layerAnimation = {
			loop: "hold_on_last_frame",
			bones: {}
		};
		for(let otherLayerY = 0; otherLayerY <= topLayer; otherLayerY++) {
			if(otherLayerY == y) {
				continue;
			}
			layerAnimation["bones"][`l_${otherLayerY}`] = {
				scale: config.MINI_SCALE
			};
		}
		if(Object.entries(layerAnimation["bones"]).length == 0) {
			delete layerAnimation["bones"];
		}
		let animationFullName = `animation.holoprint.hologram.l_${y}`;
		hologramAnimations["animations"][animationFullName] = layerAnimation;
		entityManager.addAnimation(`hologram.l_${y}`, animationFullName);
		if(y < topLayer) { // top layer with all layers below is the default view, so the animation + animation controller state doesn't need to be made for it
			layerAnimationStates[`${layerName}-`] = {
				animations: [`hologram.l_${y}-`],
				blend_transition: 0.1,
				blend_via_shortest_path: true,
				transitions: [
					{
						[layerName]: `v.hologram.layer_mode == ${HOLOGRAM_LAYER_MODES.SINGLE}`
					},
					{
						[y == 0? "default" : `l_${y - 1}-`]: `v.hologram.layer < ${y}${y == topLayer - 1? " && v.hologram.layer != -1" : ""}`
					},
					(y >= topLayer - 1? {
						default: "v.hologram.layer == -1"
					} : {
						[`l_${y + 1}-`]: `v.hologram.layer > ${y}`
					})
				]
			};
			let layerAnimationAllBelow = {
				loop: "hold_on_last_frame",
				bones: {}
			};
			for(let otherLayerY = y + 1; otherLayerY <= topLayer; otherLayerY++) {
				layerAnimationAllBelow["bones"][`l_${otherLayerY}`] = {
					scale: config.MINI_SCALE
				};
			}
			if(Object.entries(layerAnimationAllBelow["bones"]).length == 0) {
				delete layerAnimationAllBelow["bones"];
			}
			hologramAnimations["animations"][`animation.holoprint.hologram.l_${y}-`] = layerAnimationAllBelow;
			entityManager.addAnimation(`hologram.l_${y}-`, `animation.holoprint.hologram.l_${y}-`);
		}
	}
}
/**
 * Adds bounding box particles for a single structure to the hologram animation controllers in-place.
 * @param {Record<string, any>} hologramAnimationControllers
 * @param {number} structureI
 * @param {IStructure} structure
 */
function addBoundingBoxParticles(hologramAnimationControllers, structureI, structure) {
	let { width, height, depth } = structure;
	// TODO: migrate to Molang stuff
	let outlineParticleSettings = [
		`v.size = ${width / 2}; v.dir = 0; v.r = 1; v.g = 0; v.b = 0;`,
		`v.size = ${height / 2}; v.dir = 1; v.r = 1 / 255; v.g = 1; v.b = 0;`,
		`v.size = ${depth / 2}; v.dir = 2; v.r = 0; v.g = 162 / 255; v.b = 1;`,
		`v.size = ${width / 2}; v.dir = 0; v.y = ${height}; v.r = 1; v.g = 1; v.b = 1;`,
		`v.size = ${width / 2}; v.dir = 0; v.z = ${depth}; v.r = 1; v.g = 1; v.b = 1;`,
		`v.size = ${width / 2}; v.dir = 0; v.y = ${height}; v.z = ${depth}; v.r = 1; v.g = 1; v.b = 1;`,
		`v.size = ${height / 2}; v.dir = 1; v.x = ${width}; v.r = 1; v.g = 1; v.b = 1;`,
		`v.size = ${height / 2}; v.dir = 1; v.z = ${depth}; v.r = 1; v.g = 1; v.b = 1;`,
		`v.size = ${height / 2}; v.dir = 1; v.x = ${width}; v.z = ${depth}; v.r = 1; v.g = 1; v.b = 1;`,
		`v.size = ${depth / 2}; v.dir = 2; v.x = ${width}; v.r = 1; v.g = 1; v.b = 1;`,
		`v.size = ${depth / 2}; v.dir = 2; v.y = ${height}; v.r = 1; v.g = 1; v.b = 1;`,
		`v.size = ${depth / 2}; v.dir = 2; v.x = ${width}; v.y = ${height}; v.r = 1; v.g = 1; v.b = 1;`
	];
	let boundingBoxAnimation = {
		particle_effects: new Array(outlineParticleSettings.length),
		transitions: [
			{
				hidden: `!v.hologram.rendering || v.hologram.structure_index != ${structureI}`
			}
		]
	};
	outlineParticleSettings.forEach((particleMolang, i) => {
		boundingBoxAnimation["particle_effects"][i] = {
			effect: "bounding_box_outline",
			locator: "hologram_root",
			pre_effect_script: particleMolang.replaceAll(/\s/g, "")
		};
	});
	let animationStateName = `visible_${structureI}`;
	hologramAnimationControllers["animation_controllers"]["controller.animation.holoprint.hologram.bounding_box"]["states"][animationStateName] = boundingBoxAnimation;
	hologramAnimationControllers["animation_controllers"]["controller.animation.holoprint.hologram.bounding_box"]["states"]["hidden"]["transitions"].push({
		[animationStateName]: `v.hologram.rendering && v.hologram.structure_index == ${structureI}`
	});
}
/**
 * Handles everything to do with block validation except creating the particle files from the template: Finding all blocks to be validated, getting all the unique blocks to be validated (which need particle files), and counting all the blocks to be validated per structure and per layer per structure for the Molang validation stuff.
 * @param {HoloPrintConfig} config
 * @param {IStructure[]} structures
 * @param {object} hologramAnimationControllers
 * @param {(coords: Vec3, locatorName: string) => void} addLocator
 * @returns {{ uniqueBlocksToValidate: Set<string>, totalBlocksToValidateByStructure: number[], totalBlocksToValidateByStructureByLayer: number[][] }}
 */
function handleBlockValidation(config, structures, hologramAnimationControllers, addLocator) {
	/** @type {number[]} */
	let totalBlocksToValidateByStructure = new Array(structures.length);
	/** @type {number[][]} */
	let totalBlocksToValidateByStructureByLayer = new Array(structures.length);
	/** @type {Set<string>} */
	let uniqueBlocksToValidate = new Set();
	
	structures.forEach((structure, structureI) => {
		// particle_expire_if_in_blocks only works on the first layer :(
		/** @type {BlockToValidate[]} */
		let blocksToValidate = [];
		let blocksToValidateByLayer = new Array(structure.height);
		
		for(let y = 0; y < structure.height; y++) {
			let blocksToValidateCurrentLayer = 0; // "layer" in here refers to y-coordinate, NOT structure layer
			for(let x = 0; x < structure.width; x++) {
				for(let z = 0; z < structure.depth; z++) {
					let coords = tuple([x, y, z]);
					let block = structure.getBlock(coords, 0);
					if(!block && !config.VALIDATE_AIR_BLOCKS) {
						continue;
					}
					
					let blockName = block?.name ?? "air";
					let blockCoordinateLocatorName = `b_${x}_${y}_${z}`;
					blocksToValidate.push({
						locator: blockCoordinateLocatorName,
						block: blockName,
						pos: coords
					});
					blocksToValidateCurrentLayer++;
					uniqueBlocksToValidate.add(blockName);
					
					addLocator(coords, blockCoordinateLocatorName);
				}
			}
			blocksToValidateByLayer[y] = blocksToValidateCurrentLayer;
		}
		
		addBlockValidationParticles(hologramAnimationControllers, structureI, blocksToValidate, structure);
		totalBlocksToValidateByStructure[structureI] = blocksToValidate.length;
		totalBlocksToValidateByStructureByLayer[structureI] = blocksToValidateByLayer;
	});
	return { uniqueBlocksToValidate, totalBlocksToValidateByStructure, totalBlocksToValidateByStructureByLayer };
}
/**
 * Adds a locator at a position to the hologram geo for aligning validation particles.
 * @param {object} hologramGeo
 * @param {Vec3} coords
 * @param {string} locatorName
 */
function addCoordinateLocatorToHologramGeo(hologramGeo, coords, locatorName) {
	let geoSpaceCoords = getGeoSpaceBlockPos(coords)
	hologramGeo["minecraft:geometry"][2]["bones"][1]["locators"][locatorName] ??= geoSpaceCoords.map(x => x + 8); // 2nd geometry is for particle alignment
}
/**
 * Adds block validation particles for a single structure to the hologram animation controllers in-place.
 * @param {Record<string, any>} hologramAnimationControllers
 * @param {number} structureI
 * @param {BlockToValidate[]} blocksToValidate
 * @param {IStructure} structure
 */
function addBlockValidationParticles(hologramAnimationControllers, structureI, blocksToValidate, structure) {
	let validateAllState = {
		particle_effects: new Array(blocksToValidate.length),
		transitions: [
			{
				default: "!v.hologram.validating" // when changing structure it will always stop validating, so there's no need to check v.hologram.structure_index
			}
		]
	};
	let validateAllStateName = `validate_${structureI}`;
	let validationStates = hologramAnimationControllers["animation_controllers"]["controller.animation.holoprint.hologram.block_validation"]["states"];
	validationStates[validateAllStateName] = validateAllState;
	let validateAllStateTransition = {
		[validateAllStateName]: `v.hologram.validating && v.hologram.structure_index == ${structureI} && v.hologram.layer == -1`
	};
	validationStates["default"]["transitions"].push(validateAllStateTransition);
	let layersWithBlocksToValidate = [];
	blocksToValidate.forEach((blockToValidate, blockToValidateI) => {
		let [x, y, z] = blockToValidate.pos;
		let animationStateName = `validate_${structureI}_l_${y}`;
		if(!(animationStateName in validationStates)) {
			let layerAnimationState = {
				particle_effects: [],
				transitions: [
					{
						default: "!v.hologram.validating"
					},
					validateAllStateTransition
				]
			};
			layersWithBlocksToValidate.forEach(layerY => { // add transitions from this layer state to others
				layerAnimationState["transitions"].push({
					[`validate_${structureI}_l_${layerY}`]: `v.hologram.validating && v.hologram.structure_index == ${structureI} && v.hologram.layer == ${layerY}`
				});
			});
			Object.values(validationStates).forEach(state => { // add transitions from other layer states (+ default/all layers) to this layer
				state["transitions"].push({
					[animationStateName]: `v.hologram.validating && v.hologram.structure_index == ${structureI} && v.hologram.layer == ${y}`
				});
			});
			validationStates[animationStateName] = layerAnimationState;
			layersWithBlocksToValidate.push(y);
		}
		let particleEffect = {
			effect: `validate_${blockToValidate["block"].replace(":", ".")}`,
			locator: blockToValidate["locator"],
			pre_effect_script: `
				v.x = ${x};
				v.y = ${y};
				v.z = ${z};
			`.replaceAll(/\s/g, "") // this is only used for setting the wrong block overlay position; the particle's position is set using the locator
		};
		validateAllState["particle_effects"][blockToValidateI] = particleEffect;
		validationStates[animationStateName]["particle_effects"].push(particleEffect);
	});
	for(let y = 0; y < structure.height; y++) { // layers with no blocks to validate don't have an animation controller state, so transitions to the default state need to be added for when it's on these empty layers
		if(!layersWithBlocksToValidate.includes(y)) {
			Object.entries(validationStates).forEach(([validationStateName, validationState]) => {
				if(validationStateName.startsWith(`validate_${structureI}`)) {
					validationState["transitions"][0]["default"] += ` || v.hologram.layer == ${y}`;
				}
			});
		}
	}
}

/**
 * Add player controls. These are done entirely in the render controller so character creator skins aren't disabled.
 * @param {HoloPrintConfig} config
 * @param {Record<string, any>} defaultPlayerRenderControllers
 * @returns {Record<string, any>}
 */
function addPlayerControlsToRenderControllers(config, defaultPlayerRenderControllers) {
	let initVariables = functionToMolang(entityScripts.playerInitVariables);
	let renderingControls = functionToMolang(entityScripts.playerRenderingControls, {
		toggleRendering: itemCriteriaToMolang(config.CONTROLS.TOGGLE_RENDERING),
		changeOpacity: itemCriteriaToMolang(config.CONTROLS.CHANGE_OPACITY),
		toggleTint: itemCriteriaToMolang(config.CONTROLS.TOGGLE_TINT),
		toggleValidating: itemCriteriaToMolang(config.CONTROLS.TOGGLE_VALIDATING),
		changeLayer: itemCriteriaToMolang(config.CONTROLS.CHANGE_LAYER),
		decreaseLayer: itemCriteriaToMolang(config.CONTROLS.DECREASE_LAYER),
		changeLayerMode: itemCriteriaToMolang(config.CONTROLS.CHANGE_LAYER_MODE),
		moveHologram: itemCriteriaToMolang(config.CONTROLS.MOVE_HOLOGRAM),
		rotateHologram: itemCriteriaToMolang(config.CONTROLS.ROTATE_HOLOGRAM),
		changeStructure: itemCriteriaToMolang(config.CONTROLS.CHANGE_STRUCTURE),
		backupHologram: itemCriteriaToMolang(config.CONTROLS.BACKUP_HOLOGRAM),
		ACTIONS: entityScripts.ACTIONS
	});
	let broadcastActions = functionToMolang(entityScripts.playerBroadcastActions, {
		backupSlotCount: config.BACKUP_SLOT_COUNT
	});
	return patchRenderControllers(defaultPlayerRenderControllers, {
		"controller.render.player.first_person": functionToMolang(entityScripts.playerFirstPerson, { initVariables, renderingControls, broadcastActions }),
		"controller.render.player.third_person": functionToMolang(entityScripts.playerThirdPerson, { initVariables, renderingControls, broadcastActions })
	});
}
/**
 * Patches a set of render controllers with some extra Molang code. Returns a new set of render controllers.
 * @param {Record<string, any>} renderControllers
 * @param {Record<string, any>} patches
 * @returns {Record<string, any>}
 */
function patchRenderControllers(renderControllers, patches) {
	return {
		format_version: renderControllers["format_version"],
		render_controllers: Object.fromEntries(removeFalsies(Object.entries(patches).map(([controllerId, patch]) => {
			let controller = renderControllers["render_controllers"][controllerId];
			if(!controller) {
				console.error(`No render controller ${controllerId} found!`, renderControllers);
				return;
			}
			let originalTexture0 = controller["textures"][0];
			patch = patch.replace(/\n|\t/g, "");
			if(originalTexture0.endsWith(";")) {
				patch += originalTexture0;
			} else {
				patch += `return ${originalTexture0};`;
			}
			return [controllerId, {
				...controller,
				textures: [patch, ...controller["textures"].slice(1)]
			}];
		})))
	};
}
/**
 * Makes material lists for each structure and layer. Returns a 2d array of material lists, indexed by structure then layer, where layer 0 is the full structure, and subsequent layers are the actual layers (1-indexed).
 * @param {HoloPrintConfig} config
 * @param {IStructure[]} structures
 * @param {object} blockMetadata
 * @param {object} itemMetadata
 * @param {Data.MaterialListMappings} materialListMappings
 * @param {string} langFile
 * @returns {MaterialList[][]}
 */
function makeMaterialListsForEachStructureAndEachLayer(config, structures, blockMetadata, itemMetadata, materialListMappings, langFile) {
	return structures.map(structure => {
		let materialListsForThisStructure = (new Array(structure.height + 1)).fill(null).map(() => new MaterialList(blockMetadata, itemMetadata, materialListMappings, langFile));
		for(let y = 0; y < structure.height; y++) {
			for(let x = 0; x < structure.width; x++) {
				for(let z = 0; z < structure.depth; z++) {
					for(let layerI = 0; layerI < 2; layerI++) { // WHY is this so verbose?!?!?!?!?
						let block = structure.getBlock([x, y, z], layerI);
						if(!block || config.IGNORED_MATERIAL_LIST_BLOCKS.includes(block.name)) {
							continue;
						}
						materialListsForThisStructure[0].add(block);
						materialListsForThisStructure[y + 1].add(block);
					}
				}
			}
		}
		return materialListsForThisStructure;
	});
}
/**
 * Adds the material list to the `holoprint_material_list.json` UI file.
 * @param {MaterialListEntry[]} finalisedMaterialList
 * @param {object} materialListUI
 */
function addMaterialListUI(finalisedMaterialList, materialListUI) {
	let fullPackMaterialList = getUIElementFromPath(materialListUI, "full_pack_material_list");
	// TODO: make this use missing item aux id properly, which requires decoupling translations from material list exporting
	let exportedJsonUi = MaterialList.convertEntriesToJsonUi(finalisedMaterialList);
	fullPackMaterialList["$entries"] = exportedJsonUi.entries;
	if(exportedJsonUi.longestItemNameLength + exportedJsonUi.longestCountLength >= 43) {
		fullPackMaterialList["$size"][0] = "50%"; // up from 40%
		fullPackMaterialList["$max_size"][0] = "50%";
	}
	fullPackMaterialList["$size"][1] = exportedJsonUi.visibleHeight;
	fullPackMaterialList["$item_name_column_size"] = exportedJsonUi.itemNameColumnSize;
}
/**
 * @param {number} structureI
 * @returns {string}
 */
function getInfoScreenSectionHeadingTranslationKey(structureI) {
	// this MUST be formatted this way because how_to_play_common:section_toggle_button uses this
	// don't think I can use . because that would be interpreted as a namespace
	return `howtoplay.holoprint_structure_${structureI}`;
}
/**
 * 
 * @param {object} infoScreenUI
 * @param {IStructure[]} structures
 * @param {StructureDiagramsAndIndices} structureDiagrams
 * @param {MaterialList[][]} materialListsByLayerByStructure
 */
function addInfoScreenUIPages(infoScreenUI, structures, structureDiagrams, materialListsByLayerByStructure) {
	let tabSelector = getUIElementFromPath(infoScreenUI, "tab_stack_panel", "selector_pane");
	let sectionContentPanels = getUIElementFromPath(infoScreenUI, "section_content_panels", "sections");
	structures.forEach((structure, structureI) => {
		let structureName = `structure_${structureI}`;
		let pageContentElementName = `${structureName}_section_content`;
		let headingTranslationKey = getInfoScreenSectionHeadingTranslationKey(structureI);
		
		tabSelector["controls"].splice(-1, 0, {
			[`${structureName}_tab_button@how_to_play_common.section_toggle_button`]: {
				"$toggle_group_forced_index": structureI,
				"$section_topic": `holoprint_${structureName}`
			}
		});
		sectionContentPanels["controls"].splice(0, -1, {
			[`${structureName}_section@section`]: {
				// this MUST end with _button_toggle because how_to_play_common:section_toggle_button uses this
				// I could make my own version of section_toggle_button to circumvent this, but it's not too inconvenient
				"$tab_button_name": `holoprint_${structureName}_button_toggle`,
				"$content": `holoprint:info_screen.${pageContentElementName}`
			}
		});
		let structureDiagramIndices = structureDiagrams.indices[structureI];
		let structureDiagramTextureBindings = structureDiagramIndices.map((diagramIndex, layerI) => [`#layer_${layerI}`, getLayerDiagramTextureName(diagramIndex)]);
		let materialListsByLayer = materialListsByLayerByStructure[structureI];
		let materialListsExportedToJsonUi = materialListsByLayer.map(materialList => materialList.exportToJsonUi());
		let materialListsByLayerElements = materialListsExportedToJsonUi.map((exportedJsonUi, layerI) => ({
			[`layer_${layerI}@structure_layer_material_list`]: {
				"$layer": layerI,
				"$entries": exportedJsonUi.entries,
				"$size": ["100%", exportedJsonUi.visibleHeight],
				"$item_name_column_size": exportedJsonUi.itemNameColumnSize
			}
		}));
		infoScreenUI[`${pageContentElementName}@structure_section_content_base`] = {
			"$heading": headingTranslationKey,
			"$structure_height_plus_1": structure.height + 1, // I'm adding the 1 here rather than inside the JSON UI for +0.000001 fps
			"$diagram_property_bag": Object.fromEntries(structureDiagramTextureBindings),
			"$layer_slider_name": `${structureName}_layer_slider`,
			"$structure_index": structureI,
			"$material_lists": materialListsByLayerElements,
			"$tallest_material_list_size": ["100%", max(...materialListsExportedToJsonUi.map(exportedJsonUi => exportedJsonUi.visibleHeight))]
		};
	});
	
	getUIElementFromPath(infoScreenUI, "tab_stack_panel", "selector_pane", "about_section")["$toggle_group_forced_index"] = structures.length;
}
/**
 * Gets the element at a specified path from a JSON UI object.
 * @param {object} rootUiObject
 * @param {...string} elementPath
 * @returns {object}
 */
function getUIElementFromPath(rootUiObject, ...elementPath) {
	let el = rootUiObject;
	elementPath.forEach((childName, i) => {
		if(i == 0) {
			el = Object.entries(el).find(([key]) => key.split("@")[0] == childName)?.[1];
		} else {
			let childObj = el?.["controls"]?.find(elObj => Object.keys(elObj)[0].split("@")[0] == childName);
			if(childObj) {
				el = Object.values(childObj)[0];
			} else {
				el = undefined;
			}
		}
	});
	return el;
}
/**
 * Translates control items by making a fake material list.
 * @param {HoloPrintConfig} config
 * @param {Record<string, any>} blockMetadata
 * @param {Record<string, any>} itemMetadata
 * @param {Data.MaterialListMappings} materialListMappings
 * @param {Record<string, string>} resourceLangFiles
 * @param {Record<string, string[]>} itemTags
 * @returns {{ inGameControls: Record<string, string>, controlItemTranslations: Record<string, string> }}
 */
function translateControlItems(config, blockMetadata, itemMetadata, materialListMappings, resourceLangFiles, itemTags) {
	// make a fake material list for the in-game control items (just to translate them lol)
	let controlsMaterialList = new MaterialList(blockMetadata, itemMetadata, materialListMappings);
	/** @type {Record<string, string>} */
	let inGameControls = {};
	/** @type {Record<string, string>} */
	let controlItemTranslations = {};
	Object.entries(resourceLangFiles).forEach(([language, resourceLangFile]) => {
		inGameControls[language] = "";
		let translatedControlNames = {};
		let translatedControlItems = {};
		/** @type {Record<string, Set<string>>} */
		let controlItemTranslationKeys = {};
		controlsMaterialList.setLanguage(resourceLangFile);
		Object.entries(config.CONTROLS).forEach(([control, itemCriteria]) => {
			controlsMaterialList.clear();
			itemCriteria.names.forEach(itemName => controlsMaterialList.addItem(itemName));
			
			let itemInfo = controlsMaterialList.export();
			let translatedControlName = translate(PLAYER_CONTROL_NAMES[control], language);
			translatedControlNames[control] = translatedControlName;
			inGameControls[language] += `\n${translatedControlName}: ${removeFalsies([itemInfo.map(item => `§3${item.translatedName}§r`).join(", "), itemCriteria.tags.map(tag => `§p${tag}§r`).join(", ")]).join("; ")}`;
			
			let itemsInTags = removeFalsies(itemCriteria.tags.filter(tag => !tag.includes(":")).map(tag => itemTags[`minecraft:${tag}`])).flat().map(itemName => itemName.replace(/^minecraft:/, ""));
			itemsInTags.forEach(itemName => controlsMaterialList.addItem(itemName));
			controlItemTranslationKeys[control] = new Set();
			controlsMaterialList.export().forEach(({ translationKey, translatedName }) => {
				controlItemTranslationKeys[control].add(translationKey);
				translatedControlItems[translationKey] = translatedName;
			}); // these items will be renamed, and includes all the items in the tags specified. e.g. if "planks" is added as a tag for a control, then all plank types need to be renamed.
		});
		controlItemTranslations[language] = "";
		Object.entries(controlItemTranslationKeys).forEach(([control, itemTranslationKeys]) => {
			itemTranslationKeys.forEach(itemTranslationKey => {
				controlItemTranslations[language] += `\n${itemTranslationKey}=${translatedControlItems[itemTranslationKey]}\\n§u${translatedControlNames[control]}§r`; // don't question, it works
			});
		});
	});
	return { inGameControls, controlItemTranslations };
}
/**
 * Makes the `.lang` files for each language.
 * @param {HoloPrintConfig} config
 * @param {Record<string, string>} packTemplateLangFiles
 * @param {string} packName
 * @param {MaterialList} materialList
 * @param {Record<string, MaterialListEntry[]>} exportedMaterialLists
 * @param {boolean} controlsHaveBeenCustomised
 * @param {Record<string, string>} inGameControls
 * @param {Record<string, string>} controlItemTranslations
 * @param {IStructure[]} structures
 * @returns {[string, string][]}
 */
function makeLangFiles(config, packTemplateLangFiles, packName, materialList, exportedMaterialLists, controlsHaveBeenCustomised, inGameControls, controlItemTranslations, structures) {
	const disabledFeatureTranslations = { // these look at the .lang RP files
		SPAWN_ANIMATION_ENABLED: "spawn_animation_disabled",
		PLAYER_CONTROLS_ENABLED: "player_controls_disabled",
		UI_CONTROLS_ENABLED: "ui_controls_disabled",
		RETEXTURE_CONTROL_ITEMS: "retextured_control_items_disabled",
		RENAME_CONTROL_ITEMS: "renamed_control_items_disabled"
	};
	let packGenerationTime = (new Date()).toLocaleString();
	let totalMaterialCount = materialList.totalMaterialCount;
	return Object.entries(packTemplateLangFiles).map(([language, langFile]) => {
		langFile = langFile.replaceAll("\r\n", "\n"); // I hate windows sometimes (actually quite often now because of windows 11)
		langFile = langFile.replaceAll("{PACK_NAME}", packName);
		langFile = langFile.replaceAll("{PACK_GENERATION_TIME}", packGenerationTime);
		langFile = langFile.replaceAll("{TOTAL_MATERIAL_COUNT}", totalMaterialCount.toString());
		langFile = langFile.replaceAll("{MATERIAL_LIST}", exportedMaterialLists[language].map(({ translatedName, count }) => `${count} ${translatedName}`).join(", "));
		
		// now substitute in the extra bits into the main description if needed
		if(config.AUTHORS.length) {
			langFile = langFile.replaceAll(/\{STRUCTURE_AUTHORS\[([^)]+)\]\}/g, (_, delimiter) => config.AUTHORS.join(delimiter));
			langFile = langFile.replaceAll("{AUTHORS_SECTION}", langFile.match(/pack\.description\.authors=([^\t#\n]+)/)[1]);
		} else {
			langFile = langFile.replaceAll("{AUTHORS_SECTION}", "");
		}
		if(config.DESCRIPTION) {
			langFile = langFile.replaceAll("{DESCRIPTION}", config.DESCRIPTION.replaceAll("\n", "\\n"));
			langFile = langFile.replaceAll("{DESCRIPTION_SECTION}", langFile.match(/pack\.description\.description=([^\t#\n]+)/)[1]);
		} else {
			langFile = langFile.replaceAll("{DESCRIPTION_SECTION}", "");
		}
		let translatedDisabledFeatures = Object.entries(disabledFeatureTranslations).filter(([feature]) => !config[feature]).map(([_, translationKey]) => langFile.match(new RegExp(`pack\\.description\\.${translationKey}=([^\\t#\\n]+)`))[1]).join("\\n");
		if(translatedDisabledFeatures) {
			langFile = langFile.replaceAll("{DISABLED_FEATURES}", translatedDisabledFeatures);
			langFile = langFile.replaceAll("{DISABLED_FEATURES_SECTION}", langFile.match(/pack\.description\.disabled_features=([^\t#\n]+)/)[1]);
		} else {
			langFile = langFile.replaceAll("{DISABLED_FEATURES_SECTION}", "");
		}
		if(controlsHaveBeenCustomised) {
			langFile = langFile.replaceAll("{CONTROLS}", inGameControls[language].replaceAll("\n", "\\n"));
			langFile = langFile.replaceAll("{CONTROLS_SECTION}", langFile.match(/pack\.description\.controls=([^\t#\n]+)/)[1]);
		} else {
			langFile = langFile.replaceAll("{CONTROLS_SECTION}", "");
		}
		
		langFile = langFile.replaceAll(/pack\.description\..+\s*/g, ""); // remove all the description template sections
		langFile = langFile.replaceAll(/\t*#.+/g, ""); // remove comments
		
		// add the control name translations for the keyboard UI
		["toggle_rendering", "change_opacity", "toggle_tint", "change_layer", "decrease_layer", "change_layer_mode", "toggle_validating", "rotate_hologram", "change_structure", "backup_hologram"].forEach(actionName => {
			langFile += `\nholoprint.controls.${actionName}=${translate(`player_controls.${actionName}`, language)}`;
		});
		
		if(config.RENAME_CONTROL_ITEMS) {
			langFile += controlItemTranslations[language];
		}
		
		structures.forEach((structure, structureI) => {
			// TODO: fix translations. just fix it entirely. throw all this garbage out
			let structureName = `Structure ${structureI + 1}`; // todo: use file names?
			let sectionHeadingTranslationKey = getInfoScreenSectionHeadingTranslationKey(structureI);
			langFile += `\n${sectionHeadingTranslationKey}=${structureName}`;
			const barSeparator = " §8|§r ";
			let sizeInfo = `Size: ${structure.size.join("x")}${barSeparator}`;
			langFile += `\nholoprint.info_screen.structure_${structureI}_layer_0=${sizeInfo}Full structure`;
			langFile += `\nholoprint.material_list.structure_${structureI}_layer_0=Material list${barSeparator}${structureName}`;
			for(let layer = 1; layer < structure.height + 1; layer++) {
				langFile += `\nholoprint.info_screen.structure_${structureI}_layer_${layer}=${sizeInfo}Layer ${layer}`; // AHHHH IK THIS CAUSES DUPLICATED. I NEED TO GET THIS UPDATE OUT TONIGHTTTTT
				langFile += `\nholoprint.material_list.structure_${structureI}_layer_${layer}=Material list${barSeparator}${structureName}${barSeparator}Layer ${layer}`;
			}
		});
		
		return [language, langFile];
	});
}
/**
 * Retextures the control items. Modifies `itemTexture` and `terrainTexture`.
 * @param {HoloPrintConfig} config
 * @param {Data.ItemIcons} itemIcons
 * @param {Record<string, string[]>} itemTags
 * @param {object} resourceItemTexture `RP/textures/item_texture.json`
 * @param {object} blocksDotJson
 * @param {object} vanillaTerrainTexture
 * @param {ResourcePackStack} resourcePackStack
 * @param {object} itemTexture
 * @param {object} terrainTexture
 * @returns {Promise<{ controlItemTextures: [string, Blob][], hasModifiedTerrainTexture: boolean }>}
 */
async function retextureControlItems(config, itemIcons, itemTags, resourceItemTexture, blocksDotJson, vanillaTerrainTexture, resourcePackStack, itemTexture, terrainTexture) {
	let controlItemTextures = [];
	let hasModifiedTerrainTexture = false;
	let legacyItemMappings;
	let loadingLegacyItemMappingsPromise;
	let itemIconsMap = new ReplacingPatternMap(Object.entries(itemIcons));
	const controlTextureBasePath = "textures/holoprint/icons";
	await Promise.all(Object.entries(config.CONTROLS).map(async ([control, itemCriteria]) => {
		let controlTexturePromise = fetchPackTemplateFile(`${controlTextureBasePath}/${control.toLowerCase()}.png`).then(res => toImage(res));
		let paddedTexturePromise = controlTexturePromise.then(controlTexture => addPaddingToImage(controlTexture, { // make it small in the top-left corner
			right: 16,
			bottom: 16
		}));
		let controlTexturePath = `${controlTextureBasePath}/~${control.toLowerCase()}`; // because texture compositing works alphabetically not in array order, the ~ forces the control texture to always go on top of the actual item texture
		let controlItemTextureSizes = new Set();
		let allItems = expandItemCriteria(itemCriteria, itemTags);
		await Promise.all(allItems.map(async itemName => {
			itemName = itemIconsMap.get(itemName) ?? itemName;
			let variant = -1;
			if(itemName.includes(".")) {
				let dotIndex = itemName.indexOf(".");
				variant = +itemName.slice(dotIndex + 1);
				itemName = itemName.slice(0, dotIndex);
			}
			let usingTerrainAtlas = false;
			let originalTexturePath = resourceItemTexture["texture_data"][itemName]?.["textures"];
			if(originalTexturePath) {
				if(Array.isArray(originalTexturePath)) {
					if(originalTexturePath.length == 1) {
						variant = 0;
					}
				}
			} else if(itemName in blocksDotJson) {
				if(typeof blocksDotJson[itemName]["carried_textures"] == "string" && vanillaTerrainTexture["texture_data"][blocksDotJson[itemName]["carried_textures"]]["textures"].startsWith?.("textures/items/")) {
					hasModifiedTerrainTexture = true;
					usingTerrainAtlas = true;
					originalTexturePath = vanillaTerrainTexture["texture_data"][blocksDotJson[itemName]["carried_textures"]]["textures"];
					itemName = blocksDotJson[itemName]["carried_textures"];
				} else {
					console.warn(`Cannot retexture control item "${itemName}" because it is a block, and retexturing block items is currently unsupported.`);
					return;
				}
			} else {
				loadingLegacyItemMappingsPromise ??= fetchers.bedrockData("r16_to_current_item_map.json").then(res => res.json()).then(updateMappings => {
					// these mappings are from the old ids to the new ids. we want to go the other way, because bugrock still uses some old ids in item_texture.json
					legacyItemMappings = new Map();
					Object.entries(updateMappings["simple"]).forEach(([oldName, newName]) => {
						legacyItemMappings.set(newName.slice(10), [oldName.slice(10), -1]); // first 10 characters are "minecraft:"
					});
					Object.entries(updateMappings["complex"]).forEach(([oldName, newNames]) => { // complex mappings have indices, used in boats among others
						Object.entries(newNames).forEach(([index, newName]) => {
							legacyItemMappings.set(newName.slice(10), [oldName.slice(10), index]);
						});
					});
				});
				try {
					await loadingLegacyItemMappingsPromise;
				} catch(e) {
					console.error("Somehow failed loading legacy item mappings. Please report this on GitHub!", e);
					return;
				}
				if(!legacyItemMappings.has(itemName)) {
					console.warn(`Can't find control item texture for ${itemName}`);
					return;
				}
				let [oldItemName, legacyVariant] = legacyItemMappings.get(itemName);
				variant = legacyVariant;
				originalTexturePath = resourceItemTexture["texture_data"][oldItemName]?.["textures"];
				if(!originalTexturePath) {
					console.warn(`Can't find control item texture for ${itemName} (${oldItemName})`);
					return;
				}
				itemName = oldItemName; // if the legacy item id has a single item_texture.json texture, we're fine here - just use the old name
			}
			
			if(Array.isArray(originalTexturePath)) { // if it's an array (like boats), we need to load the item texture and manually edit it here.
				if(variant == -1) {
					console.warn(`Don't know which texture to use for control item texture for ${itemName}: [${originalTexturePath}]`);
					return;
				}
				if(!(variant in originalTexturePath)) {
					console.error(`Item texture variant ${variant} for ${itemName} does not exist!`);
					return;
				}
				itemTexture["texture_data"][itemName] ??= {
					textures: Array.from(originalTexturePath) // clone the whole thing here. this is so we can edit it directly, which means that if we're modifying multiple textures in the same array all can be applied.
				};
				let specificOriginalTexturePath = `${itemTexture["texture_data"][itemName]["textures"][variant]}.png`;
				let originalImage;
				try {
					originalImage = await resourcePackStack.fetchResource(specificOriginalTexturePath).then(res => toImage(res));
				} catch(e) {
					console.warn(`Failed to load texture ${specificOriginalTexturePath} for control item retexturing!`);
					return;
				}
				let overlayedImageBlob = await overlaySquareImages(originalImage, await paddedTexturePromise);
				let newTexturePath = `${specificOriginalTexturePath.slice(0, -4)}_${control.toLowerCase()}.png`;
				controlItemTextures.push([newTexturePath, overlayedImageBlob]);
				itemTexture["texture_data"][itemName]["textures"][variant] = newTexturePath.slice(0, -4);
				console.debug(`Overlayed control texture for ${control} onto ${specificOriginalTexturePath}`);
			} else {
				let itemTextureSize = 16;
				if(resourcePackStack.hasResourcePacks) {
					try {
						let originalImage = await resourcePackStack.fetchResource(`${originalTexturePath}.png`).then(res => toImage(res));
						itemTextureSize = originalImage.width;
					} catch(e) {
						console.warn(`Could not load item texture ${originalTexturePath} for overlay texture scaling calculations!`, e);
					}
				}
				let safeSize = lcm((await paddedTexturePromise).width, itemTextureSize) * config.CONTROL_ITEM_TEXTURE_SCALE; // When compositing textures, MCBE scales all textures to the maximum, so the size of the overlay control texture has to be the LCM of itself and in-game items. Hence, if in-game items have a higher resolution than expected, they will probably be scaled wrong. The control item texture scale setting will scale them more (but they get reaaaaally big and make the item texture atlas huuuge)
				controlItemTextureSizes.add(safeSize);
				(usingTerrainAtlas? terrainTexture : itemTexture)["texture_data"][itemName] = {
					textures: [originalTexturePath, `${controlTexturePath}_${safeSize}`],
					additive: true // texture compositing means resource packs that change the item textures will still work
				};
			}
		}));
		await Promise.all(Array.from(controlItemTextureSizes).map(async size => {
			let resizedImagePath = `${controlTexturePath}_${size}.png`;
			let resizedTextureBlob = await resizeImageToBlob(await paddedTexturePromise, size);
			controlItemTextures.push([resizedImagePath, resizedTextureBlob]);
		}));
	}));
	return { controlItemTextures, hasModifiedTerrainTexture };
}
/**
 * Makes a blob for pack_icon.png based on a structure file's SHA256 hash
 * @param {File} structureFile
 * @returns {Promise<Blob>}
 */
async function makePackIcon(structureFile) {
	let fileHashBytes = Array.from(await sha256(structureFile));
	let fileHashBits = fileHashBytes.map(byte => [7, 6, 5, 4, 3, 2, 1, 0].map(bitI => byte >> bitI & 0x1)).flat();
	
	const ICON_RESOLUTION = [4, 6][fileHashBytes[1] % 2]; // either 4x4 or 6x6 large tiles
	const ICON_TILE_SIZE = 200 / ICON_RESOLUTION;
	const MORE_TILE_TYPES = false; // adds circles and crosses
	
	let can = new OffscreenCanvas(256, 256);
	// let can = document.createElement("canvas"); can.width = can.height = 256; document.body.appendChild(can);
	let ctx = can.getContext("2d");
	
	ctx.lineWidth = 8;
	ctx.lineCap = "round";
	
	let padding = (can.width - ICON_RESOLUTION * ICON_TILE_SIZE) / 2;
	let drawArc = (x, y, startAngle, endAngle) => {
		ctx.beginPath();
		ctx.arc(x * ICON_TILE_SIZE + padding, y * ICON_TILE_SIZE + padding, ICON_TILE_SIZE / 2, startAngle, endAngle);
		ctx.stroke();
	};
	let drawLine = (x, y, w, h) => {
		ctx.beginPath();
		ctx.moveTo(x * ICON_TILE_SIZE + padding, y * ICON_TILE_SIZE + padding);
		ctx.lineTo((x + w) * ICON_TILE_SIZE + padding, (y + h) * ICON_TILE_SIZE + padding);
		ctx.stroke();
	};
	
	// Truchet pattern
	for(let x = 0; x < ICON_RESOLUTION; x++) {
		for(let y = 0; y < ICON_RESOLUTION; y++) {
			let i = min(x, ICON_RESOLUTION - 1 - x) * ICON_RESOLUTION + y; // x is reflected
			i *= 4;
			let bit = fileHashBits[i];
			if(MORE_TILE_TYPES) {
				if(fileHashBits[i] && fileHashBits[i + 1] && fileHashBits[i + 2] && fileHashBits[i + 3]) {
					drawArc(x + 0.5, y + 0.5, 0, pi * 2);
					continue;
				}
				if(!fileHashBits[i] && !fileHashBits[i + 1] && !fileHashBits[i + 2] && !fileHashBits[i + 3]) {
					drawLine(x, y + 0.5, 1, 0);
					drawLine(x + 0.5, y, 0, 1);
					continue;
				}
			}
			if(bit == +(x >= ICON_RESOLUTION / 2)) {
				drawArc(x, y, 0, pi / 2);
				drawArc(x + 1, y + 1, pi, pi * 3 / 2);
			} else {
				drawArc(x + 1, y, pi / 2, pi);
				drawArc(x, y + 1, pi * 3 / 2, pi * 2);
			}
		}
	}
	
	let hue = fileHashBytes[0] / 256 * 360;
	let grad = ctx.createRadialGradient(can.width / 2, can.height / 2, 0, can.width / 2, can.height / 2, ICON_RESOLUTION * ICON_TILE_SIZE / 2 * Math.SQRT2);
	grad.addColorStop(0, `hsl(${hue}deg, 70%, 50%)`);
	grad.addColorStop(1, `hsl(${hue + 20}deg, 60%, 60%)`);
	ctx.globalCompositeOperation = "source-in"; // draw only where the truchet is
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, can.width, can.height);
	
	ctx.globalCompositeOperation = "destination-over"; // draw the background underneath
	ctx.fillStyle = `hsl(${hue}deg, 40%, 85%)`;
	ctx.fillRect(0, 0, can.width, can.height);
	
	return await can.convertToBlob();
}
/**
 * Expands item criteria into an array of item names by expanding all item tags.
 * @param {ItemCriteria} itemCriteria
 * @param {Record<string, string[]>} itemTags
 * @returns {string[]}
 */
function expandItemCriteria(itemCriteria, itemTags) {
	let minecraftTags = itemCriteria.tags.filter(tag => !tag.includes(":")); // we can't find which items are used in custom tags
	let namespacedItemsFromTags = removeFalsies(minecraftTags.map(tag => itemTags[`minecraft:${tag}`]).flat());
	return [...itemCriteria.names, ...namespacedItemsFromTags.map(itemName => itemName.replace(/^minecraft:/, ""))];
}

/** @import * as Data from "./data/schemas" */
/** @import { FileEntry } from "@zip.js/zip.js" */
/** @import { ItemCriteria, HoloPrintConfig, BlockToValidate, Vec3, StructureDiagramsAndIndices, GetFileType, PathToData } from "./common.types.ts" */
/** @import IStructure from "./structure/IStructure.ts" */
/** @import { MaterialListEntry } from "./MaterialList.types.ts" */
/** @import { PolyMeshTemplateFaceWithUvs } from "./PolyMeshMaker.types.ts" */
```

## File: src/index.html
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title data-translate="app_name">HoloPrint</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Minecraft Bedrock build tool, like Litematica or Schematica. Create MCBE resource packs to show holograms of schematics. Make MCPE building easier!">
		<meta name="keywords" content="holoprint, litematica bedrock">
		
		<meta property="og:url" content="https://holoprint-mc.github.io">
		<meta property="og:type" content="website">
		<meta property="og:title" content="HoloPrint">
		<meta property="og:description" content="Minecraft Bedrock build tool, like Litematica or Schematica. Create MCBE resource packs to show holograms of schematics. Make MCPE building easier!">
		<meta property="og:image" content="https://holoprint-mc.github.io/assets/banner_1200x630.png">
		<meta property="og:image:width" content="1200">
		<meta property="og:image:height" content="630">
		<meta property="og:image" content="https://holoprint-mc.github.io/assets/logo_192.png">
		<meta property="og:image:width" content="192">
		<meta property="og:image:height" content="192">
		<meta property="og:image" content="https://holoprint-mc.github.io/assets/banner.png">
		<meta property="og:image:width" content="720">
		<meta property="og:image:height" content="210">
		<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "WebApplication",
				"name": "HoloPrint",
				"url": "https://holoprint-mc.github.io",
				"description": "Minecraft Bedrock build tool, like Litematica or Schematica. Create MCBE resource packs to show holograms of schematics. Make MCPE building easier!",
				"applicationCategory": "UtilitiesApplication",
				"browserRequirements": "Requires JavaScript",
				"operatingSystem": "All",
				"keywords": "holoprint, litematica bedrock",
				"image": "https://holoprint-mc.github.io/assets/logo_192.png",
				"author": {
					"@type": "Person",
					"name": "SuperLlama88888",
					"url": "https://github.com/SuperLlama88888"
				},
				"hasPart": [
					{
						"@type": "WebPage",
						"url": "https://holoprint-mc.github.io/wiki",
						"name": "HoloPrint Wiki"
					},
					{
						"@type": "WebPage",
						"url": "https://holoprint-mc.github.io/wiki/creating-packs",
						"name": "HoloPrint Wiki - Tutorial"
					},
					{
						"@type": "WebPage",
						"url": "https://holoprint-mc.github.io/wiki/faq",
						"name": "HoloPrint Wiki - FAQ"
					}
				],
				"offers": {
					"@type": "Offer",
					"price": "0"
				}
			}
		</script> <!-- Google wants me to add all these random things for a rich search result -->
		<meta name="google-site-verification" content="KvFing8WMIePsj6J3Ed5BvcylweI7EL4D2lwVkKqcOE"> <!-- allows me to track how well it appears on google. this is NOT google analytics. -->
		
		<link rel="manifest" href="manifest.webmanifest"/>
		<link rel="icon" sizes="48x48" href="favicon.ico"/>
		<link rel="icon" sizes="192x192" href="assets/logo_192.png"/>
		
		<link rel="stylesheet" href="https://fonts.bunny.net/css?family=catamaran:400,500,700&display=swap"/>
		<link rel="stylesheet" href="https://fonts.bunny.net/css?family=space-grotesk:400&display=swap"/>
		
		<link rel="stylesheet" href="styles/index.css"/>
		<script type="importmap">
			{
				"imports": {
					"nbtify-readonly-typeless": "https://esm.sh/nbtify-readonly-typeless@1.1.2?keep-names",
					"mcbe-leveldb-reader": "https://esm.sh/mcbe-leveldb-reader@2.0.1?exports=extractStructureFilesFromMcworld",
					"tga-js": "https://esm.sh/tga-js@1.1.1",
					"potpack": "https://esm.sh/potpack@2.1.0",
					"deepmerge": "https://esm.sh/deepmerge@4.3.1",
					"@supabase/supabase-js": "https://esm.sh/@supabase/supabase-js@2?exports=createClient",
					"three": "https://esm.sh/three@0.177.0",
					"three/examples/jsm/": "https://esm.sh/three@0.177.0/examples/jsm/",
					"stats.js": "https://esm.sh/stats.js@0.17.0",
					"lil-gui": "https://esm.sh/lil-gui@0.20",
					"@zip.js/zip.js": "https://esm.sh/@zip.js/zip.js@^2.7.57?exports=ZipWriter,TextReader,BlobWriter,BlobReader,ZipReader",
					"strip-json-comments": "https://esm.sh/strip-json-comments@5.0.1"
				}
			}
		</script>
		<script src="index.js" type="module"></script>
	</head>
	<body>
		<main>
			<h1 data-translate="app_name">HoloPrint</h1>
			<div id="responsiveWidthWrapper">
				<form action="javascript:" id="generatePackForm">
				<fieldset>
					<legend data-translate="generate_heading">Generate HoloPrint resource pack (<code>*.mcpack</code>)</legend>
						<div class="multiTabCont" id="structureFileInputCont">
							<input type="radio" checked name="configTabs2" form="" id="structureFilesTab"/>
							<label for="structureFilesTab" class="buttonlike" data-translate="structure_files.heading">Structure files</label>
							<fieldset>
								<legend data-translate="structure_files.upload">Upload structure files (<code>*.mcstructure</code>)</legend>
								<label>
									<input type="file" accept=".mcstructure,.MCSTRUCTURE" multiple form="" autocomplete="off" id="structureFilesInput"/>
									<div class="buttonlike"><p data-translate="upload.button">Upload a file</p><p data-translate="upload.button.drop_notice">Or drop files here</p></div>
								</label>
								<span class="hidden" id="notStructureFileError" data-translate="structure_files.error">Please upload only <code>.mcstructure</code> files.</span>
							</fieldset>
							<input type="radio" name="configTabs2" form="" id="extractFromWorldTab"/>
							<label for="extractFromWorldTab" class="buttonlike" data-translate="extract_from_world.heading">Extract from world</label>
							<fieldset>
								<legend data-translate="extract_from_world.upload">Upload world file (<code>*.mcworld</code>, <code>*.mctemplate</code>, <code>*.zip</code>)</legend>
								<label>
									<input type="file" accept=".mcworld,.MCWORLD,.mctemplate,.MCTEMPLATE,.zip,.ZIP" form="" autocomplete="off" id="worldFileInput"/>
									<div class="buttonlike"><p data-translate="upload.button.world">Upload a world file</p><p data-translate="upload.button.drop_notice">Or drop files here</p></div>
								</label>
								<span class="hidden" id="worldExtractionMessage" data-translate="extract_from_world.extracting">Extracting structures from world...</span>
								<span class="hidden" id="worldExtractionSuccess" data-translate="extract_from_world.success"></span>
								<span class="hidden" id="worldExtractionError" data-translate="extract_from_world.error">No saved structures found!</span>
								<span class="hidden" id="worldExtractionWorldError" data-translate="extract_from_world.world_error"></span>
							</fieldset>
							<input type="radio" name="configTabs2" form="" id="updatePackTab"/>
							<label for="updatePackTab" class="buttonlike" data-translate="update_pack.heading">Update pack</label>
							<fieldset>
								<legend data-translate="update_pack.upload">Upload old Structura/HoloPrint pack (<code>*.mcpack</code>)</legend>
								<label>
									<input type="file" accept=".mcpack,.MCPACK" form="" autocomplete="off" id="oldPackInput"/>
									<div class="buttonlike"><p data-translate="upload.button.old_pack">Upload an old pack</p><p data-translate="upload.button.drop_notice">Or drop files here</p></div>
								</label>
								<span class="hidden" id="oldPackExtractionMessage" data-translate="update_pack.extracting">Extracting structure files...</span>
								<span class="hidden" id="oldPackExtractionSuccess" data-translate="update_pack.success">Successfully found old structure files!</span>
								<span class="hidden" id="oldPackExtractionError" data-translate="update_pack.error">Pack is not a Structura/HoloPrint pack! <small>(No structure files were found.)</small></span>
							</fieldset>
						</div>
						<file-input-table hide-file-extensions file-text-count="{COUNT} file[s] selected" data-translate-file-text-count="file_input_table.count" empty-text="No files are selected" data-translate-empty-text="file_input_table.empty" remove-all-text="Remove all" data-translate-remove-all-text="file_input_table.remove_all">
							<input type="file" accept=".mcstructure" multiple required name="structureFiles" id="structureFilesList"/>
						</file-input-table>
						<div class="multiTabCont">
							<input type="radio" checked name="configTabs" form="" id="settingsTab"/>
							<label for="settingsTab" class="buttonlike" data-translate="settings.heading">Settings</label>
							<fieldset>
								<legend data-translate="settings.heading">Settings</legend>
								<label><span data-translate="settings.ghost_block_scale">Ghost block scale:</span> <input type="number" min="70" max="100" step="1" value="95" name="scale"/>%</label>
								<fieldset class="expandable textureSettings">
									<legend><label><span data-translate="settings.textures">Textures</span><input type="checkbox"/></label></legend>
									<div>
										<table>
											<tr>
												<td><label data-translate="settings.textures.outline.width">Texture outline width:</label></td>
												<td><select name="textureOutlineWidth">
													<option value="0" data-translate="settings.textures.outline.width.no_outline">None</option>
													<option value="0.125">0.125px</option>
													<option value="0.25" selected>0.25px</option>
													<option value="0.5">0.5px</option>
													<option value="1">1px</option>
												</select></td>
											</tr>
											<tr>
												<td><label data-translate="settings.textures.outline.color">Texture outline color:</label></td>
												<td><input type="color" value="#0000FF" name="textureOutlineColor"/></td>
											</tr>
											<tr>
												<td><label data-translate="settings.textures.outline.opacity">Texture outline opacity:</label></td>
												<td><input type="number" min="10" max="100" value="65" name="textureOutlineOpacity"/>%</td>
											</tr>
											<tr>
												<td><label data-translate="settings.textures.tint.color">Overlay tint:</label></td>
												<td><input type="color" value="#579EFA" name="tintColor"/></td>
											</tr>
											<tr>
												<td><label data-translate="settings.textures.tint.opacity">Overlay tint opacity:</label></td>
												<td><input type="number" min="1" max="100" value="20" name="tintOpacity">%</td>
											</tr>
										</table>
										<div id="texturePreviewCont">
											<span data-translate="settings.textures.tint.toggleable_in_game">Tint can be turned on/off in-game</span>
											<div id="texturePreviewImageCont">
												<div class="loader"></div>
											</div>
										</div>
									</div>
								</fieldset>
								<fieldset class="expandable">
									<legend><label><span data-translate="settings.player_controls">In-game controls (<a href="https://holoprint-mc.github.io/wiki/hologram-controls" target="_blank">Wiki</a>)</span><input type="checkbox"/></label></legend>
									<div id="playerControlsInputCont"></div>
								</fieldset>
								<fieldset class="expandable">
									<legend><label><span data-translate="settings.features">Features</span><input type="checkbox"/></label></legend>
									<div>
										<table>
											<tr>
												<td><label data-translate="settings.features.spawn_animation" for="c1">Spawn animation:</label></td>
												<td><input type="checkbox" name="spawnAnimationEnabled" checked id="c1"/></td>
											</tr>
											<tr>
												<td><label data-translate="settings.features.player_controls" for="c2">Player controls:</label></td>
												<td><input type="checkbox" name="playerControlsEnabled" checked id="c2"/></td>
											</tr>
											<tr>
												<td><label data-translate="settings.features.ui_controls" for="c3">UI controls:</label></td>
												<td><input type="checkbox" name="uiControlsEnabled" checked id="c3"/></td>
											</tr>
											<tr>
												<td><label data-translate="settings.features.retexture_control_items" for="c4">Retexture control items:</label></td>
												<td><input type="checkbox" name="retextureControlItems" checked id="c4"/></td>
											</tr>
											<tr>
												<td><label data-translate="settings.features.rename_control_items" for="c5">Rename control items:</label></td>
												<td><input type="checkbox" name="renameControlItems" checked id="c5"/></td>
											</tr>
										</table>
									</div>
								</fieldset>
								<label><span data-translate="settings.mini_size">Mini display size: </span><select name="miniSize">
									<option value="0.125" selected data-translate="settings.mini_size.small">Small</option>
									<option value="0.0625" data-translate="settings.mini_size.smaller">Smaller</option>
									<option value="0.03125" data-translate="settings.mini_size.tiny">Tiny</option>
									<option value="0" data-translate="settings.mini_size.hidden">Hidden</option>
								</select></label>
								<details>
									<summary data-translate="settings.advanced">Advanced</summary>
									<label><span data-translate="settings.coordinate_lock">Coordinate lock:</span> <input type="checkbox" name="coordinateLockEnabled" autocomplete="off"/></label>
									<div id="coordinateLockCoordsCont" class="hidden">
										<button type="button" data-translate="settings.coordinate_lock.get_global_coords" class="importantButton">Get global coordinates</button>
										<div id="coordinateLockStructureCoords" translate="no"></div>
										<span data-translate="settings.coordinate_lock.axis">Axis:</span>
										<input type="radio" name="axis" class="buttonlike" value="X" checked/>
										<input type="radio" name="axis" class="buttonlike" value="Y"/>
										<input type="radio" name="axis" class="buttonlike" value="Z"/>
										<span id="coordinateLockCoordsAdjustmentCont">
											<span data-translate="settings.coordinate_lock.adjust">Adjust:</span>
											<span translate="no">
												<span>
													<button type="button">-1000</button>
													<button type="button">-100</button>
													<button type="button">-10</button>
													<button type="button">-1</button>
												</span>&NoBreak;
												<span>
													<button type="button">+1</button>
													<button type="button">+10</button>
													<button type="button">+100</button>
													<button type="button">+1000</button>
												</span>
											</span>
										</span>
									</div>
									<label><span data-translate="settings.initial_offset">Initial offset:</span> <vec-3-input name="initialOffset">
										<input is="resizing-input" type="number" min="-999" max="999" step="1" value="0" placeholder="0" slot="x"/>
										<input is="resizing-input" type="number" min="-999" max="999" step="1" value="0" placeholder="0" slot="y"/>
										<input is="resizing-input" type="number" min="-999" max="999" step="1" value="0" placeholder="0" slot="z"/>
									</vec-3-input></label>
									<label><span data-translate="settings.backup_slot_count">Backup slot count:</span> <input type="number" min="0" max="30" step="1" value="10" name="backupSlotCount"/></label>
									<label><span data-translate="settings.control_item_texture_scale">Control item texture scale:</span> <input type="number" min="1" max="64" step="1" value="1" name="controlItemTextureScale"/></label>
									<label><span data-translate="settings.ignored_blocks">Ignored blocks:</span> <input type="text" name="ignoredBlocks" placeholder="block_1 block_2 etc." data-translate-placeholder="settings.ignored_blocks.placeholder"/></label>
									<label><span data-translate="settings.opacity_mode">Opacity mode:</span> <select name="opacityMode">
										<option value="multiple" selected data-translate="settings.opacity_mode.in_game_controls">In-game controls</option>
										<option value="single" data-translate="settings.opacity_mode.fixed_opacity">Single option</option>
									</select></label>
									<label class="hidden"><span data-translate="settings.opacity">Hologram opacity:</span> <input type="number" min="10" max="100" step="5" value="80" name="opacity"/>%</label>
									<label><span data-translate="settings.validate_air_blocks">Validate air blocks:</span> <input type="checkbox" name="validateAirBlocks"/></label>
									<label><span data-translate="settings.max_structure_diagram_texture_size">Max structure diagram texture size:</span> <select name="maxStructureDiagramTextureSize">
										<option value="128">128px</option>
										<option value="256">256px</option>
										<option value="512" selected>512px</option>
										<option value="1024">1024px</option>
										<option value="2048">2048px</option>
									</select></label>
								</details>
								<button type="button" class="resetButton" data-translate="reset" data-reset-translation="settings.reset">Reset</button>
							</fieldset>
							<input type="radio" name="configTabs" form="" id="metadataTab"/>
							<label for="metadataTab" class="buttonlike" data-translate="metadata.heading">Metadata</label>
							<fieldset>
								<legend data-translate="metadata.heading">Metadata</legend>
								<label><span data-translate="metadata.pack_name">Pack name:</span> <code><input type="text" pattern="[^\/]*" name="packName"/></code></label>
								<label><span data-translate="metadata.pack_icon">Pack icon (<code>*.png</code>):</span> <input type="file" accept=".png" name="packIcon"/></label>
								<label><span data-translate="metadata.structure_author">Structure author:</span> <input type="text" placeholder="MinecraftLover123" name="author" data-translate-placeholder="metadata.structure_author.placeholder"/></label>
								<label><span data-translate="metadata.description">Description:</span><br/><textarea placeholder="This is my epic house!" rows="4" cols="20" name="description" data-translate-placeholder="metadata.description.placeholder"></textarea></label>
								<div id="descriptionLinksCont"></div>
								<label><span data-translate="metadata.compression_level">Compression level:</span> <input type="number" min="0" max="9" step="1" value="5" name="compressionLevel"/></label>
								<button type="button" class="resetButton" data-translate="reset" data-reset-translation="metadata.reset">Reset</button>
							</fieldset>
							<input type="radio" name="configTabs" form="" id="resourcesTab"/>
							<label for="resourcesTab" class="buttonlike" data-translate="resource_packs.heading">Resource packs</label>
							<fieldset>
								<legend data-translate="resource_packs.heading">Resource packs</legend>
								<label><span data-translate="resource_packs.upload_local">Upload a local resource pack:</span><br/><input type="file" webkitdirectory name="localResourcePack"/></label>
								<button type="button" id="clearResourcePackCacheButton" data-translate="resource_packs.clear_cache" data-reset-translation="resource_packs.cache_reset">Clear resource pack cache</button>
								<button type="button" class="resetButton" data-translate="reset" data-reset-translation="resource_packs.reset">Reset</button>
							</fieldset>
						</div>
						<button name="submit" id="generatePackButton" data-translate="generate">Generate pack</button>
						<small id="termsOfUseNotice" data-translate="terms_of_use_notice">By generating a pack with HoloPrint, you agree to the <a href="https://github.com/SuperLlama88888/holoprint/blob/main/TERMS_OF_USE.md" target="_blank">Terms of Use</a>. (It's really short!)</small>
					</fieldset>
				</form>
				<div id="completedPacksCont"></div>
				<simple-logger id="log"></simple-logger>
			</div>
			<div id="languageSelectorCont" title="Change language" data-translate-title="change_language">
				<div id="languageSelectorButton"></div>
				<select id="languageSelector">
					<option value="en_US">English</option> <!-- Other options will be added later in JS -->
				</select>
			</div>
		</main>
		<div id="dropFileNotice" class="hidden">
			<h1 data-translate="upload.drop_file">Drop your files here</h1>
		</div>
	</body>
</html>
```

## File: src/index.js
```javascript
import { extractStructureFilesFromMcworld } from "mcbe-leveldb-reader";
import { selectEl, downloadFile, sleep, selectEls, loadTranslationLanguage, translate, getStackTrace, random, UserError, joinOr, conditionallyGroup, groupByFileExtension, addFilesToFileInput, setFileInputFiles, dispatchInputEvents, getAllChildren, jsonc, toImage, removeFalsies, clearCacheStorage, onEvent, onEventAndNow, cast, clearFileInput, html, removeFileExtension, tuple, assertAs, getFileExtension } from "./utils.js";
import { readNbtFromFile } from "./structure/structureHelpers.js";
import * as HoloPrint from "./HoloPrint.js";
import SupabaseLogger from "./SupabaseLogger.js";

import ResourcePackStack from "./ResourcePackStack.js";
import LocalResourcePack from "./LocalResourcePack.js";
import TextureAtlas from "./TextureAtlas.js";
import ItemCriteriaInput from "./components/ItemCriteriaInput.js";
import FileInputTable from "./components/FileInputTable.js";
import Vec3Input from "./components/Vec3Input.js";
import SimpleLogger from "./components/SimpleLogger.js";
import LilGui from "./components/LilGui.js";
import ResizingInput from "./components/ResizingInput.js";

const IN_PRODUCTION = false;
const ACTUAL_CONSOLE_LOG = false;

const supabaseProjectUrl = "https://gnzyfffwvulwxbczqpgl.supabase.co";
const supabaseApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduenlmZmZ3dnVsd3hiY3pxcGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMjE3NzgsImV4cCI6MjAzODU5Nzc3OH0.AWMhFcP3PiMD3dMC_SeIVuPx128KVpgfkZ5qBStDuVw";

let dropFileNotice;

/** @type {HTMLFormElement} */
let generatePackForm;
let generatePackFormSubmitButton;
/** @type {HTMLInputElement} */
let structureFilesInput;
/** @type {HTMLInputElement} */
let worldFileInput;
/** @type {HTMLInputElement} */
let oldPackInput;
/** @type {HTMLInputElement} */
let structureFilesList;
let packNameInput;
/** @type {Element} */
let coordinateLockStructureCoordsCont;
/** @type {WeakMap<File, Vec3>} */
let coordinateLockStructureCoords = new WeakMap();
/** @type {HTMLDivElement} */
let completedPacksCont;
/** @type {SimpleLogger} */
let logger;
let languageSelector;
let defaultResourcePackStack = new ResourcePackStack();

let supabaseLogger;

let texturePreviewImageCont;
let texturePreviewImage;

document[onEvent]("DOMContentLoaded", () => {
	document.body.appendChild = selectEl("main").appendChild.bind(selectEl("main"));
	
	selectEls(`input[type="file"][accept]:not([multiple])`).forEach(input => {
		input[onEventAndNow]("input", e => {
			TS: assertAs(input, HTMLInputElement);
			if(!validateFileInputFileTypes(input)) {
				e?.stopImmediatePropagation();
			}
		});
	});
	
	generatePackForm = cast(selectEl("#generatePackForm"), HTMLFormElement);
	dropFileNotice = selectEl("#dropFileNotice");
	structureFilesInput = cast(selectEl("#structureFilesInput"), HTMLInputElement);
	let notStructureFileError = selectEl("#notStructureFileError");
	worldFileInput = cast(selectEl("#worldFileInput"), HTMLInputElement);
	let worldExtractionMessage = selectEl("#worldExtractionMessage");
	let worldExtractionSuccess = cast(selectEl("#worldExtractionSuccess"), HTMLSpanElement);
	let worldExtractionError = selectEl("#worldExtractionError");
	let worldExtractionWorldError = cast(selectEl("#worldExtractionWorldError"), HTMLSpanElement);
	oldPackInput = cast(selectEl("#oldPackInput"), HTMLInputElement);
	let oldPackExtractionMessage = selectEl("#oldPackExtractionMessage");
	let oldPackExtractionSuccess = selectEl("#oldPackExtractionSuccess");
	let oldPackExtractionError = selectEl("#oldPackExtractionError");
	structureFilesList = cast(selectEl("#structureFilesList"), HTMLInputElement);
	packNameInput = generatePackForm.elements.namedItem("packName");
	packNameInput[onEvent]("invalid", () => {
		packNameInput.setCustomValidity(translateCurrentLanguage("metadata.pack_name.error"));
	});
	packNameInput[onEvent]("input", () => {
		packNameInput.setCustomValidity("");
	});
	structureFilesInput[onEventAndNow]("input", () => {
		if(!structureFilesInput.files.length) {
			return;
		}
		let files = Array.from(structureFilesInput.files);
		let filesToAdd = files.filter(file => getFileExtension(file) == "mcstructure");
		if(files.length == filesToAdd.length) {
			notStructureFileError.classList.add("hidden");
			structureFilesInput.setCustomValidity("");
		} else {
			if(files.length == 1) { // the other input methods can't handle multiple files
				let fileExtension = getFileExtension(files[0]);
				if(fileExtension == "mcworld" || fileExtension == "mctemplate" || fileExtension == "zip") {
					clearFileInput(structureFilesInput);
					setFileInputFiles(worldFileInput, files);
					return;
				} else if(fileExtension == "mcpack") {
					clearFileInput(structureFilesInput);
					setFileInputFiles(oldPackInput, files);
					return;
				}
			}
			notStructureFileError.classList.remove("hidden");
			structureFilesInput.setCustomValidity(notStructureFileError.textContent);
		}
		addFilesToFileInput(structureFilesList, filesToAdd);
	});
	worldFileInput[onEvent]("input", async () => {
		worldExtractionMessage.classList.add("hidden");
		worldExtractionSuccess.classList.add("hidden");
		worldExtractionError.classList.add("hidden");
		worldExtractionWorldError.classList.add("hidden");
		oldPackInput.setCustomValidity("");
		let worldFile = worldFileInput.files[0];
		if(!worldFile) {
			return;
		}
		cast(selectEl("#extractFromWorldTab"), HTMLInputElement).checked = true;
		worldExtractionMessage.classList.remove("hidden");
		worldExtractionMessage.scrollIntoView({
			block: "center"
		});
		/** @type {Map<string, File>} */
		let structureFiles;
		try {
			structureFiles = await extractStructureFilesFromMcworld(worldFile);
			structureFiles.forEach(file => file[FileInputTable.SHOW_DOWNLOAD_BUTTON] = true);
		} catch(e) {
			worldExtractionMessage.classList.add("hidden");
			worldExtractionWorldError.dataset.translationSubError = e;
			worldExtractionWorldError.classList.remove("hidden");
			worldFileInput.setCustomValidity(worldExtractionWorldError.textContent);
			return;
		}
		worldExtractionMessage.classList.add("hidden");
		if(structureFiles.size) {
			addFilesToFileInput(structureFilesList, Array.from(structureFiles.values()));
			worldExtractionSuccess.dataset.translationSubCount = structureFiles.size.toString();
			worldExtractionSuccess.classList.remove("hidden");
		} else {
			worldExtractionError.classList.remove("hidden");
			worldFileInput.setCustomValidity(worldExtractionError.textContent);
		}
	});
	oldPackInput[onEvent]("input", async () => {
		oldPackExtractionMessage.classList.add("hidden");
		oldPackExtractionSuccess.classList.add("hidden");
		oldPackExtractionError.classList.add("hidden");
		oldPackInput.setCustomValidity("");
		let oldPack = oldPackInput.files[0];
		if(!oldPack) {
			return;
		}
		cast(selectEl("#updatePackTab"), HTMLInputElement).checked = true;
		oldPackExtractionMessage.classList.remove("hidden");
		oldPackExtractionMessage.scrollIntoView({
			block: "center"
		});
		let extractedStructureFiles;
		try {
			extractedStructureFiles = await HoloPrint.extractStructureFilesFromPack(oldPack);
		} catch(e) {
			oldPackExtractionMessage.classList.add("hidden");
			oldPackExtractionError.classList.remove("hidden");
			throw e;
		}
		extractedStructureFiles.forEach(file => file[FileInputTable.SHOW_DOWNLOAD_BUTTON] = true);
		oldPackExtractionMessage.classList.add("hidden");
		if(extractedStructureFiles.length) {
			addFilesToFileInput(structureFilesList, extractedStructureFiles);
			oldPackExtractionSuccess.classList.remove("hidden");
		} else {
			oldPackExtractionError.classList.remove("hidden");
			oldPackInput.setCustomValidity(oldPackExtractionError.textContent);
		}
	});
	structureFilesList[onEventAndNow]("input", updatePackNameInputPlaceholder);
	completedPacksCont = selectEl("#completedPacksCont");
	texturePreviewImageCont = selectEl("#texturePreviewImageCont");
	
	if(location.search == "?loadFile") {
		window.launchQueue?.setConsumer(async launchParams => {
			let launchFiles = await Promise.all(launchParams.files.map(fileHandle => fileHandle.getFile()));
			handleInputFiles(launchFiles);
		});
	}
	
	let dragCounter = 0;
	document.documentElement[onEvent]("dragenter", () => {
		dragCounter++;
	});
	document.documentElement[onEvent]("dragover", e => {
		if(e.dataTransfer?.types?.includes("Files")) { // https://html.spec.whatwg.org/multipage/dnd.html#dom-datatransfer-types-dev
			e.preventDefault();
			dropFileNotice.classList.remove("hidden");
		}
	});
	document.documentElement[onEvent]("dragleave", () => {
		dragCounter--;
		if(dragCounter == 0) {
			dropFileNotice.classList.add("hidden");
		}
	});
	document.documentElement[onEvent]("drop", async e => {
		e.preventDefault();
		dragCounter = 0;
		dropFileNotice.classList.add("hidden");
		let files = Array.from(e.dataTransfer.files); // apparently this is a "historical accident": https://stackoverflow.com/a/74641156
		handleInputFiles(files);
	});
	
	customElements.define("item-criteria-input", class extends ItemCriteriaInput {
		constructor() {
			super(translateCurrentLanguage);
		}
	});
	customElements.define("file-input-table", FileInputTable);
	customElements.define("resizing-input", ResizingInput, {
		extends: "input"
	});
	customElements.define("vec-3-input", Vec3Input);
	customElements.define("simple-logger", SimpleLogger);
	customElements.define("lil-gui", LilGui);
	if(!ACTUAL_CONSOLE_LOG) {
		logger = cast(selectEl("#log"), SimpleLogger);
		logger.patchConsoleMethods();
	}
	
	generatePackForm[onEvent]("submit", async e => {
		e.preventDefault();
		
		let formData = new FormData(generatePackForm);
		let resourcePacks = [];
		let localResourcePackFiles = cast(generatePackForm.elements.namedItem("localResourcePack"), HTMLInputElement).files;
		if(localResourcePackFiles.length) {
			resourcePacks.push(await LocalResourcePack.new(localResourcePackFiles));
		}
		makePack(cast(formData.getAll("structureFiles"), [File]), resourcePacks);
	});
	generatePackForm[onEvent]("input", e => {
		let target = cast(e.target, HTMLElement);
		if(target.closest("fieldset")?.classList?.contains("textureSettings") && target.hasAttribute("name")) {
			updateTexturePreview();
		}
	});
	updateTexturePreview();
	generatePackFormSubmitButton = generatePackForm.elements.namedItem("submit");
	
	let coordinateLockToggle = cast(generatePackForm.elements.namedItem("coordinateLockEnabled"), HTMLInputElement);
	let coordinateLockCoordsCont = selectEl("#coordinateLockCoordsCont");
	coordinateLockToggle[onEvent]("input", async () => {
		cast(generatePackForm.elements.namedItem("initialOffset"), Element).parentElement.classList.toggle("hidden", coordinateLockToggle.checked);
		coordinateLockCoordsCont.classList.toggle("hidden", !coordinateLockToggle.checked);
	});
	Array.from(coordinateLockCoordsCont[selectEls]("button")).forEach((button, i) => {
		button[onEvent]("click", async () => {
			if(i == 0) { // get global coordinates button
				let structureFiles = Array.from(structureFilesList.files);
				/** @type {McstructureNbt<1 | 2>[]} */
				// @ts-expect-error
				let mcstructures = await Promise.all(structureFiles.map(readNbtFromFile));
				let worldOrigins = mcstructures.map(mcstructure => mcstructure.structure_world_origin);
				/** @type {Vec3Input[]} */
				let inputs = coordinateLockCoordsCont[selectEls]("vec-3-input");
				worldOrigins.forEach((worldOrigin, i) => {
					if(!worldOrigin) {
						return;
					}
					inputs[i].xyz = worldOrigin;
				});
			} else {
				let axis = cast(generatePackForm.elements.namedItem("axis"), RadioNodeList).value.toLowerCase();
				coordinateLockCoordsCont[selectEls]("vec-3-input").forEach(vec3input => {
					vec3input[axis] = vec3input[axis] + parseInt(button.innerText);
				});
			}
		});
	});
	coordinateLockStructureCoordsCont = selectEl("#coordinateLockStructureCoords");
	structureFilesList[onEventAndNow]("input", () => {
		coordinateLockStructureCoordsCont.innerHTML = Array.from(structureFilesList.files).map(file => {
			let pos = coordinateLockStructureCoords.get(file) ?? [0, 0, 0];
			let randomId = Math.random();
			return html`
				<label for="${randomId}">${removeFileExtension(file.name)}:</label>
				<vec-3-input id="${randomId}">
					<input is="resizing-input" type="number" min="-10000000" max="10000000" step="1" value="${pos[0]}" placeholder="0" slot="x"/>
					<input is="resizing-input" type="number" min="-10000000" max="10000000" step="1" value="${pos[1]}" placeholder="0" slot="y"/>
					<input is="resizing-input" type="number" min="-10000000" max="10000000" step="1" value="${pos[2]}" placeholder="0" slot="z"/>
				</vec-3-input>
				<label><span class="material-symbols">rotate_right</span>: <input is="resizing-input" type="number" min="-270" max="270" step="90" value="0" placeholder="0"/><span>&deg;</span></label>
			`;
		}).join("");
		Array.from(coordinateLockStructureCoordsCont[selectEls]("vec-3-input")).forEach((input, i) => {
			input[onEvent]("input", () => {
				let file = structureFilesList.files[i];
				if(!file) return;
				coordinateLockStructureCoords.set(file, input.xyz);
			});
		});
	});
	
	let opacityModeSelect = cast(generatePackForm.elements.namedItem("opacityMode"), HTMLSelectElement);
	opacityModeSelect[onEventAndNow]("change", () => {
		cast(generatePackForm.elements.namedItem("opacity"), Element).parentElement.classList.toggle("hidden", opacityModeSelect.value == "multiple");
	});
	
	let descriptionTextArea = cast(generatePackForm.elements.namedItem("description"), HTMLTextAreaElement);
	let descriptionLinksCont = selectEl("#descriptionLinksCont");
	descriptionTextArea[onEventAndNow]("input", () => {
		let links = HoloPrint.findLinksInDescription(descriptionTextArea.value);
		descriptionLinksCont.textContent = "";
		links.forEach(([_, link], i) => {
			if(i) {
				descriptionLinksCont.appendChild(document.createElement("br"));
			}
			descriptionLinksCont.insertAdjacentHTML("beforeend", `<span data-translate="metadata.description.link_found">Link found:</span>`);
			descriptionLinksCont.insertAdjacentText("beforeend", " " + link);
		});
	});
	
	let playerControlsInputCont = selectEl("#playerControlsInputCont");
	Object.entries(HoloPrint.DEFAULT_PLAYER_CONTROLS).forEach(([control, itemCriteria]) => {
		let label = document.createElement("label");
		let playerControlTranslationKey = HoloPrint.PLAYER_CONTROL_NAMES[control];
		label.innerHTML = `<span data-translate="${playerControlTranslationKey}">...</span>:`;
		let input = document.createElement("item-criteria-input");
		input.setAttribute("name", `control.${control}`);
		if(itemCriteria.names.length > 0) {
			input.setAttribute("value-items", itemCriteria.names.join(","));
		}
		if(itemCriteria.tags.length > 0) {
			input.setAttribute("value-tags", itemCriteria.tags.join(","));
		}
		label.appendChild(input);
		playerControlsInputCont.appendChild(label);
		input.setAttribute("default", input.value); // has to be called after being added to the DOM
	});
	
	let clearResourcePackCacheButton = cast(selectEl("#clearResourcePackCacheButton"), HTMLButtonElement);
	clearResourcePackCacheButton[onEvent]("click", async () => {
		clearCacheStorage(caches);
		temporarilyChangeText(clearResourcePackCacheButton, clearResourcePackCacheButton.dataset.resetTranslation);
	});
	
	selectEls(".resetButton").forEach(el => {
		el[onEvent]("click", () => {
			let fieldset = el.parentElement;
			let allEls = cast(Array.from(generatePackForm.elements), [HTMLInputElement]);
			let [elementsBeingReset, elementsToSave] = conditionallyGroup(allEls, el => el.localName != "fieldset" && el.localName != "button" && (!fieldset.contains(el) || !el.hasAttribute("name")));
			let oldFiles = elementsToSave.map(el => {
				if(el.type == "file") {
					let dataTransfer = new DataTransfer(); // Simply copying el.files wouldn't work since that's a FormData object, and resetting the form will reset the files in there as well. To work around this, we just copy all files to a DataTransfer, which is the only other thing that uses FormData. (Using structuredClone() is laggy on Chrome.)
					Array.from(el.files).forEach(file => dataTransfer.items.add(file));
					return dataTransfer.files;
				}
			});
			let oldChecks = elementsToSave.map(el => {
				if(el.type == "checkbox") {
					return el.checked;
				}
			});
			let oldValues = elementsToSave.map(el => {
				if(el.type != "file" && el.type != "checkbox") {
					return el.value;
				}
			});
			generatePackForm.reset(); // this resets the entire form, which is why the old values must be saved
			elementsToSave.forEach((el, i) => {
				switch(el.type) {
					case "file": {
						el.files = oldFiles[i];
					} break;
					case "checkbox": {
						el.checked = oldChecks[i];
					} break;
					default: {
						el.value = oldValues[i];
					}
				}
			});
			elementsBeingReset.forEach(el => {
				dispatchInputEvents(el);
			});
			TS: assertAs(el, HTMLButtonElement);
			temporarilyChangeText(el, el.dataset.resetTranslation);
		});
	});
	
	languageSelector = selectEl("#languageSelector");
	fetch("translations/languages.json").then(res => jsonc(res)).then(languagesAndNames => {
		languagesAndNames = Object.fromEntries(Object.entries(languagesAndNames).sort((a, b) => +(a[1] > b[1]))); // sort alphabeticallly
		let availableLanguages = Object.keys(languagesAndNames);
		if(availableLanguages.length == 1) {
			selectEl("#languageSelectorCont").remove();
			return;
		}
		let defaultLanguage = getDefaultLanguage(availableLanguages);
		languageSelector.textContent = "";
		for(let language in languagesAndNames) {
			let shouldBeSelected = language == defaultLanguage;
			languageSelector.appendChild(new Option(languagesAndNames[language], language, shouldBeSelected, shouldBeSelected));
		}
		languageSelector[onEventAndNow]("change", () => {
			translatePage(languageSelector.value);
		});
		
		let retranslating = false;
		let bodyObserver = new MutationObserver(mutations => {
			if(retranslating) {
				console.log("mutations observed when retranslating:", mutations); // should never happen!
				return;
			}
			let allAddedChildren = mutations.flatMap(mutation => Array.from(mutation.addedNodes)).filter(node => node instanceof Element);
			// @ts-expect-error
			let shouldRetranslate = allAddedChildren.some(node => Array.from(node.attributes).some(attr => attr.name.startsWith("data-translate") || attr.name.startsWith("data-translation-sub-")) || getAllChildren(node).some(el => Array.from(el.attributes).some(attr => attr.name.startsWith("data-translate") || attr.name.startsWith("data-translation-sub-")))) || mutations.find(mutation => mutation.type == "attributes" && (mutation.attributeName.startsWith("data-translate") || mutation.attributeName.startsWith("data-translation-sub-")) && mutation.target.getAttribute(mutation.attributeName) != mutation.oldValue); // retranslate when an element with a translate dataset attribute or a child with a translate dataset attribute is added, or when a translate dataset attribute is changed
			if(shouldRetranslate) {
				retranslating = true;
				translatePage(languageSelector.value);
				retranslating = false;
			}
			let newShadowRoots = removeFalsies(allAddedChildren.map(node => node.shadowRoot));
			newShadowRoots.forEach(shadowRoot => {
				bodyObserver.observe(shadowRoot, observerConfig);
			});
		});
		let observerConfig = {
			childList: true,
			subtree: true,
			attributes: true,
			attributeOldValue: true
		};
		bodyObserver.observe(document.body, observerConfig);
		getAllChildren(document.body).filter(el => el.shadowRoot).forEach(el => {
			bodyObserver.observe(el.shadowRoot, observerConfig);
		});
	});
	
	// delete old caches
	caches.keys().then(cacheNames => {
		cacheNames.filter(cacheName => cacheName.startsWith("ResourcePackStack_")).forEach(cacheName => caches.delete(cacheName))
	});
});
window[onEvent]("load", () => { // shadow DOMs aren't populated in the DOMContentLoaded event yet
	if(location.search == "?generateEnglishTranslations") {
		translatePage("en_US", true);
	}
});

/**
 * Handles files that are dropped on the webpage or opened with the PWA.
 * @param {File[]} files
 */
async function handleInputFiles(files) {
	let {
		mcstructure: structureFiles = [],
		mcworld: worldFiles = [],
		mctemplate: templateFiles = [],
		zip: zipFiles = [],
		mcpack: resourcePackFiles = []
	} = groupByFileExtension(files);
	let allWorldFiles = [...worldFiles, ...templateFiles, ...zipFiles];
	
	addFilesToFileInput(structureFilesList, structureFiles);
	setFileInputFiles(worldFileInput, allWorldFiles.slice(0, 1)); // yes I could make it do all of them, but seriously, how many people are drag-and-dropping more than 1 world file onto the page?
	setFileInputFiles(oldPackInput, resourcePackFiles.slice(0, 1));
}
function updatePackNameInputPlaceholder() {
	packNameInput.setAttribute("placeholder", HoloPrint.getDefaultPackName(Array.from(structureFilesList.files)));
}
async function updateTexturePreview() {
	texturePreviewImage ??= await defaultResourcePackStack.fetchResource(`textures/blocks/${random(["crafting_table_front", "diamond_ore", "blast_furnace_front_off", "brick", "cherry_planks", "chiseled_copper", "cobblestone", "wool_colored_white", "stonebrick", "stone_granite_smooth"])}.png`).then(res => toImage(res));
	let can = new OffscreenCanvas(texturePreviewImage.width, texturePreviewImage.height);
	let ctx = can.getContext("2d");
	ctx.drawImage(texturePreviewImage, 0, 0);
	let textureOutlineWidth = +cast(generatePackForm.elements.namedItem("textureOutlineWidth"), HTMLInputElement).value;
	let outlinedCan = textureOutlineWidth > 0? TextureAtlas.addTextureOutlines(can, [{
		x: 0,
		y: 0,
		w: can.width,
		h: can.height
	}], HoloPrint.addDefaultConfig({
		TEXTURE_OUTLINE_COLOR: cast(generatePackForm.elements.namedItem("textureOutlineColor"), HTMLInputElement).value,
		TEXTURE_OUTLINE_OPACITY: +cast(generatePackForm.elements.namedItem("textureOutlineOpacity"), HTMLInputElement).value / 100,
		TEXTURE_OUTLINE_WIDTH: textureOutlineWidth
	})) : can;
	let tintlessImage = await outlinedCan.convertToBlob().then(blob => toImage(blob));
	let outlinedCanCtx = outlinedCan.getContext("2d");
	outlinedCanCtx.fillStyle = cast(generatePackForm.elements.namedItem("tintColor"), HTMLInputElement).value;
	outlinedCanCtx.globalAlpha = +cast(generatePackForm.elements.namedItem("tintOpacity"), HTMLInputElement).value / 100;
	outlinedCanCtx.fillRect(0, 0, outlinedCan.width, outlinedCan.height);
	let tintedImage = await outlinedCan.convertToBlob().then(blob => toImage(blob));
	texturePreviewImageCont.textContent = "";
	texturePreviewImageCont.appendChild(tintlessImage);
	texturePreviewImageCont.appendChild(tintedImage);
}
/**
 * @param {string[]} availableLanguages
 * @returns {string}
 */
function getDefaultLanguage(availableLanguages) {
	for(let navigatorLanguage of navigator.languages) {
		let navigatorBaseLanguage = navigatorLanguage.split("-")[0];
		let res = availableLanguages.find(availableLanguage => availableLanguage == navigatorLanguage) ?? availableLanguages.find(availableLanguage => availableLanguage == navigatorBaseLanguage) ?? availableLanguages.find(availableLanguage => availableLanguage.split(/-|_/)[0] == navigatorBaseLanguage);
		if(res) {
			return res;
		}
	}
	return "en_US";
}
async function translatePage(language, generateTranslations = false) {
	let translatableEls = getAllChildren(document.documentElement).filter(el => Array.from(el.attributes).some(attr => attr.name.startsWith("data-translate")));
	await loadTranslationLanguage(language);
	let translations = generateTranslations? await fetch(`translations/${language}.json`).then(res => jsonc(res)) : {};
	await Promise.all(translatableEls.map(async el => {
		if("translate" in el.dataset) {
			let translationKey = el.dataset["translate"];
			if(generateTranslations) {
				translations[translationKey] = el.innerHTML.replaceAll("<code>", "`").replaceAll("</code>", "`").replaceAll(/<a href="([^"]+)"[^>]*>([^<]+)<\/a>/g, "[$2]($1)");
			} else {
				let translation = translate(translationKey, language);
				if(translation != undefined) {
					el.innerHTML = performTranslationSubstitutions(el, translation);
				} else {
					console.warn(`Couldn't find translation for ${translationKey} for language ${language}!`);
					if(el.innerHTML == "") {
						let englishTranslation = translate(translationKey, "en_US");
						if(englishTranslation) {
							el.innerHTML = performTranslationSubstitutions(el, englishTranslation);
						} else {
							el.innerHTML = translationKey;
						}
					}
				}
			}
		}
		Array.from(el.attributes).filter(attr => attr.name.startsWith("data-translate-")).forEach(async attr => {
			let targetAttrName = attr.name.replace(/^data-translate-/, "");
			let translationKey = attr.value;
			if(generateTranslations) {
				translations[translationKey] = el.getAttribute(targetAttrName);
			} else {
				let translation = translate(translationKey, language);
				if(translation != undefined) {
					el.setAttribute(targetAttrName, performTranslationSubstitutions(el, translation));
				} else {
					console.warn(`Couldn't find translation for ${translationKey} for language ${language}!`);
					if(!el.hasAttribute(targetAttrName)) {
						let englishTranslation = translate(translationKey, "en_US");
						if(englishTranslation) {
							el.setAttribute(targetAttrName, performTranslationSubstitutions(el, englishTranslation));
						} else {
							el.setAttribute(targetAttrName, translationKey);
						}
					}
				}
			}
		});
	}));
	if(generateTranslations) {
		translations = Object.fromEntries(Object.entries(translations).sort((a, b) => +(a[0] > b[0])));
		downloadFile(new File([JSON.stringify(translations, null, "\t")], `${language}.json`));
	}
}
/**
 * @param {Element} el
 * @param {string} translation
 * @returns {string}
 */
function performTranslationSubstitutions(el, translation) {
	const prefix = "data-translation-sub-";
	Array.from(el.attributes).forEach(({ name, value }) => {
		if(name.startsWith(prefix)) {
			let subName = name.slice(prefix.length).toUpperCase().replaceAll("-", "_");
			translation = translation.replaceAll(`{${subName}}`, value);
			if(parseInt(value) == +value) {
				translation = +value > 1? translation.replace(/\[|\]/g, "") : translation.replaceAll(/\[.+\]/g, "");
			}
		}
	});
	return translation;
}
function translateCurrentLanguage(translationKey) {
	if(!languageSelector) {
		return undefined;
	}
	let translation = translate(translationKey, languageSelector.value);
	if(!translation) {
		translation = translate(translationKey, "en_US");
		if(translation) {
			console.warn(`Couldn't find translation for ${translationKey} for language ${languageSelector.value}!`);
		} else {
			console.warn(`Couldn't find translation for ${translationKey} for language ${languageSelector.value} or English!`);
			translation = translationKey;
		}
	}
	return translation;
}

async function temporarilyChangeText(el, translationKey, duration = 2000) {
	let originalTranslationKey = el.dataset.translate;
	el.dataset.translate = translationKey;
	el.setAttribute("disabled", "");
	await sleep(duration);
	el.dataset.translate = originalTranslationKey;
	el.removeAttribute("disabled");
}
/**
 * Validates a file input based on the value of the `accept` attribute. Only works when `accept` is a comma-separated list of file extensions, not for MIME types.
 * @param {HTMLInputElement} fileInput
 * @returns {boolean}
 */
function validateFileInputFileTypes(fileInput) {
	let fileInputAccept = fileInput.accept.split(",").map(fileExtensionWithDot => fileExtensionWithDot.trim());
	let acceptableFileExtensions = new Set(fileInputAccept.map(fileExtensionWithDot => fileExtensionWithDot.slice(1)));
	let valid = Array.from(fileInput.files).every(file => acceptableFileExtensions.has(getFileExtension(file)));
	if(valid) {
		fileInput.setCustomValidity("");
	} else {
		if(languageSelector) {
			fileInput.setCustomValidity(translateCurrentLanguage("upload.error.wrong_file_type").replace("{FILE_TYPE}", joinOr(fileInputAccept, languageSelector.value)));
		} else {
			fileInput.setCustomValidity(`Please upload only ${joinOr(fileInputAccept)} files.`);
		}
	}
	return valid;
}

/**
 * @param {File[]} structureFiles
 * @param {LocalResourcePack[]} localResourcePacks
 * @returns {Promise<void>}
 */
async function makePack(structureFiles, localResourcePacks) {
	// this is a mess. all it does is get the settings, call HoloPrint.makePack(), and show the download button.
	generatePackFormSubmitButton.disabled = true;
	
	if(IN_PRODUCTION) {
		console.debug("User agent:", navigator.userAgent);
	}
	
	let formData = new FormData(generatePackForm);
	let authors = removeFalsies(formData.get("author").toString().split(",").map(x => x.trim()));
	let packIconEntry = formData.get("packIcon");
	/** @type {HoloPrintConfig} */
	let config = {
		IGNORED_BLOCKS: removeFalsies(formData.get("ignoredBlocks").toString().split(/\W/)),
		SCALE: +formData.get("scale") / 100,
		OPACITY: +formData.get("opacity") / 100,
		MULTIPLE_OPACITIES: formData.get("opacityMode") == "multiple",
		TINT_COLOR: formData.get("tintColor").toString(),
		TINT_OPACITY: +formData.get("tintOpacity") / 100,
		MINI_SCALE: +formData.get("miniSize"),
		TEXTURE_OUTLINE_WIDTH: +formData.get("textureOutlineWidth"),
		TEXTURE_OUTLINE_COLOR: formData.get("textureOutlineColor").toString(),
		TEXTURE_OUTLINE_OPACITY: +formData.get("textureOutlineOpacity") / 100,
		SPAWN_ANIMATION_ENABLED: !!formData.get("spawnAnimationEnabled"),
		PLAYER_CONTROLS_ENABLED: !!formData.get("playerControlsEnabled"),
		UI_CONTROLS_ENABLED: !!formData.get("uiControlsEnabled"),
		RETEXTURE_CONTROL_ITEMS: !!formData.get("retextureControlItems"),
		CONTROL_ITEM_TEXTURE_SCALE: +formData.get("controlItemTextureScale"),
		RENAME_CONTROL_ITEMS: !!formData.get("renameControlItems"),
		// @ts-expect-error
		CONTROLS: Object.fromEntries(Array.from(formData).filter(([key]) => key.startsWith("control.")).map(([key, value]) => [key.replace(/^control./, ""), JSON.parse(value)])),
		// @ts-expect-error
		INITIAL_OFFSET: formData.get("initialOffset").toString().split(",").map(x => +x),
		COORDINATE_LOCK: formData.get("coordinateLockEnabled")? Array.from(coordinateLockStructureCoordsCont[selectEls]("vec-3-input")).map(input => {
			TS: assertAs(input, Vec3Input);
			return tuple([...input.xyz, +input.nextElementSibling.querySelector("input").value]);
		}) : undefined,
		BACKUP_SLOT_COUNT: +formData.get("backupSlotCount"),
		VALIDATE_AIR_BLOCKS: !!formData.get("validateAirBlocks"),
		MAX_STRUCTURE_DIAGRAM_TEXTURE_SIZE: +formData.get("maxStructureDiagramTextureSize"),
		PACK_NAME: formData.get("packName").toString() || undefined,
		PACK_ICON_BLOB: packIconEntry instanceof File && packIconEntry.size? packIconEntry : undefined,
		AUTHORS: authors,
		DESCRIPTION: formData.get("description").toString() || undefined,
		COMPRESSION_LEVEL: +formData.get("compressionLevel")
	};
	
	let previewCont = document.createElement("div");
	previewCont.classList.add("previewCont");
	completedPacksCont.prepend(previewCont);
	let infoButton = document.createElement("button");
	infoButton.classList.add("packInfoButton"); // my class naming is terrible
	infoButton.dataset.translate = "progress.generating";
	completedPacksCont.prepend(infoButton);
	
	let resourcePackStack = new ResourcePackStack(localResourcePacks);
	
	/** @type {Awaited<ReturnType<typeof HoloPrint.makePack>>} */
	let res;
	logger?.setOriginTime(performance.now());
	
	let generationFailedError; // generation failed or generational failure?
	try {
		res = await HoloPrint.makePack(structureFiles, config, resourcePackStack, previewCont);
	} catch(e) {
		if(ACTUAL_CONSOLE_LOG) {
			throw e;
		}
		console.error(`Pack creation failed!\n${e}`);
		if(!(e instanceof UserError)) {
			generationFailedError = e;
		}
		if(!(e instanceof DOMException)) { // DOMExceptions can also be thrown, which don't have stack traces and hence can't be tracked if caught. HOWEVER they extend Error...
			console.debug(getStackTrace(e).join("\n"));
		}
	}
	
	infoButton.classList.add("finished");
	if(res) {
		let { pack } = res;
		infoButton.dataset.translate = "download";
		infoButton.classList.add("completed");
		let hasLoggedPackCreation = false;
		infoButton.onclick = () => {
			if(!hasLoggedPackCreation && IN_PRODUCTION) {
				hasLoggedPackCreation = true;
				void async function() {
					supabaseLogger ??= await SupabaseLogger.new(supabaseProjectUrl, supabaseApiKey);
					try {
						await supabaseLogger.recordPackCreation(structureFiles);
					} catch(e) {
						console.error(e);
					}
				}();
			}
			downloadFile(pack);
		};
	} else {
		if(generationFailedError) {
			let bugReportAnchor = document.createElement("a");
			bugReportAnchor.classList.add("buttonlike", "packInfoButton", "reportIssue");
			bugReportAnchor.href = `https://github.com/SuperLlama88888/holoprint/issues/new?template=1-pack-creation-error.yml&title=Pack creation error: ${encodeURIComponent(generationFailedError.toString().replaceAll("\n", " "))}&version=${HoloPrint.VERSION}&logs=${encodeURIComponent(JSON.stringify(logger.allLogs))}`;
			bugReportAnchor.target = "_blank";
			bugReportAnchor.dataset.translate = "pack_generation_failed.report_github_issue";
			infoButton.parentNode.replaceChild(bugReportAnchor, infoButton);
		} else {
			infoButton.classList.add("failed");
			infoButton.dataset.translate = "pack_generation_failed";
		}
	}
	
	generatePackFormSubmitButton.disabled = false;
}

/** @import { HoloPrintConfig, Vec3 } from "./common.types.ts" */
/** @import { McstructureNbt } from "./structure/Mcstructure.types.ts" */
```

## File: src/LocalResourcePack.js
```javascript
import { AsyncFactory, dirname, sha256, sha256text, toHexadecimalString } from "./utils.js";

export default class LocalResourcePack extends AsyncFactory {
	/** @type {string} A unique hash for this local resource pack. */
	hash;
	/** @readonly @type {File[]} */
	files;
	/** @readonly @type {boolean} */
	aggressiveHashing;
	/** @readonly @type {Map<string, File>} */
	#files = new Map();
	
	/**
	 * Creates a local resource pack from a folder input's file list.
	 * @param {FileList} fileList
	 */
	constructor(fileList, aggressiveHashing = false) {
		super();
		this.files = Array.from(fileList ?? []);
		this.aggressiveHashing = aggressiveHashing;
	}
	async init() {
		let folderSummary = [];
		let rootFile = this.files.find(file => file.name == "manifest.json");
		if(!rootFile) {
			throw new Error("Couldn't find manifest.json in local resource pack; it will not be loaded!");
		}
		this.hash = toHexadecimalString(await sha256(rootFile));
		let rootPackPath = dirname(rootFile.webkitRelativePath);
		let packFiles = this.files.filter(file => file.webkitRelativePath.startsWith(rootPackPath));
		let abstractFiles = packFiles.map(file => ({
			name: file.webkitRelativePath.slice(rootPackPath.length),
			blob: file
		}));
		for(let file of abstractFiles) {
			this.#files.set(file.name, file.blob);
			if(this.aggressiveHashing) {
				folderSummary.push(file.name, toHexadecimalString(await sha256(file.blob)));
			}
		}
		if(this.aggressiveHashing) {
			this.hash = toHexadecimalString(await sha256text(folderSummary.join("\n")));
		} else if(!this.hash) {
			let joinedFileNames = abstractFiles.map(file => file.name).join("\n");
			this.hash = toHexadecimalString(await sha256text(joinedFileNames));
			console.warn(`Couldn't find manifest.json in local resource pack for hash; using hash ${this.hash} (this should never appear)`);
		}
	}
	/**
	 * Gets a file from the local resource pack, or undefined if it doesn't exist.
	 * @param {string} filePath
	 * @returns {File | undefined}
	 */
	getFile(filePath) {
		return this.#files.get(filePath);
	}
}
```

## File: src/manifest.webmanifest
```
{
	"name": "HoloPrint",
	"description": "Minecraft Bedrock build tool, like Litematica or Schematica. Create MCBE resource packs to show holograms of schematics. Make MCPE building easier!",
	"categories": ["utilities"],
	"icons": [
		{
			"src": "assets/logo_192.png",
			"sizes": "192x192"
		},
		{
			"src": "assets/logo_288.png",
			"sizes": "288x288"
		},
		{
			"src": "assets/logo_512.png",
			"sizes": "512x512"
		}
	],
	"start_url": "./",
	"display": "minimal-ui",
	"background_color": "#D7B3D7",
	"theme_color": "#D899D8",
	"file_handlers": [
		{
			"accept": {
				"application/mcstructure": [".mcstructure"],
				"application/mcpack": [".mcpack"]
			},
			"action": "./?loadFile"
		}
	],
	"screenshots": [
		{
			"src": "assets/banner_1200x630.png",
			"sizes": "1200x630",
			"form_factor": "wide"
		},
		{
			"src": "assets/logo_512.png",
			"sizes": "512x512",
			"form_factor": "narrow"
		}
	]
}
```

## File: src/MaterialList.js
```javascript
import { floor, max, nanToUndefined, PatternMap, removeFalsies, ReplacingPatternMap, round, tuple } from "./utils.js";

export default class MaterialList {
	/** @readonly @type {Map<string, number>} */
	materials = new Map();
	totalMaterialCount = 0;
	shulkerBoxGlyphChar = "\uE200";
	
	/** @readonly @type {Map<string, object>} */
	#blockMetadata;
	/** @readonly @type {Map<string, object>} */
	#itemMetadata;
	/** @type {Map<string, string>} */
	#translations;
	
	// I wish I could use import...with to import these from materialListMappings.json, which would have worked with esbuild, but it doesn't let me load JSONC... sad...
	/** @readonly @type {Data.MaterialListMappings["ignoredBlocks"]} */
	#ignoredBlocks;
	/** @readonly @type {ReplacingPatternMap} */
	#blockToItemMappings;
	/** @readonly @type {PatternMap<[number, string]>} */
	#itemCountMultipliers;
	/** @readonly @type {Data.MaterialListMappings["specialBlockEntityProperties"]} */
	#specialBlockEntityProperties;
	/** @readonly @type {ReplacingPatternMap} */
	#serializationIdPatches;
	/** @readonly @type {Data.MaterialListMappings["blocksMissingSerializationIds"]} */
	#blocksMissingSerializationIds;
	/** @readonly @type {Data.MaterialListMappings["translationPatches"]} */
	#translationPatches;
	/** @readonly @type {number} */
	#missingItemAux;
	
	/**
	 * Creates a material list manager to count a list of items.
	 * @param {object} blockMetadata `Mojang/bedrock-samples/metadata/vanilladata_modules/mojang-blocks.json`
	 * @param {object} itemMetadata `Mojang/bedrock-samples/metadata/vanilladata_modules/mojang-items.json`
	 * @param {Data.MaterialListMappings} materialListMappings
	 * @param {string} [translations] The text contents of a `.lang` file
	 */
	constructor(blockMetadata, itemMetadata, materialListMappings, translations) {
		this.#blockMetadata = new Map(blockMetadata["data_items"].map(block => [block["name"], block]));
		this.#itemMetadata = new Map(itemMetadata["data_items"].map(item => [item["name"], item]));
		this.#ignoredBlocks = materialListMappings.ignoredBlocks;
		this.#blockToItemMappings = new ReplacingPatternMap(Object.entries(materialListMappings.blockToItemMappings));
		this.#itemCountMultipliers = new PatternMap(Object.entries(materialListMappings.itemCountMultipliers).map(([key, value]) => {
			if(typeof value == "number") {
				return [key, tuple([value, ""])];
			} else {
				return [key, tuple([value.multiplier, value.remove])];
			}
		}));
		this.#specialBlockEntityProperties = materialListMappings.specialBlockEntityProperties;
		let serializationIdPatches = Object.entries(materialListMappings.serializationIdPatches);
		this.#serializationIdPatches = new ReplacingPatternMap(serializationIdPatches);
		this.#blocksMissingSerializationIds = materialListMappings.blocksMissingSerializationIds;
		this.#translationPatches = materialListMappings.translationPatches;
		
		let missingItemId = blockMetadata["data_items"].find(block => block.name == "minecraft:reserved6")?.["raw_id"] ?? 0;
		this.#missingItemAux = missingItemId * 65536;
		
		if(translations) {
			this.setLanguage(translations);
		}
	}
	/**
	 * Adds a block to the material list.
	 * @param {string | Block} block
	 * @param {number} [count]
	 */
	add(block, count = 1) {
		let blockName = typeof block == "string"? block : block.name;
		if(this.#ignoredBlocks.includes(blockName)) {
			return;
		}
		let itemName = this.#blockToItemMappings.get(blockName) ?? blockName;
		let multiplierMatch = this.#itemCountMultipliers.get(itemName);
		if(multiplierMatch) {
			let [multiplier, substringToRemove] = multiplierMatch;
			count *= multiplier;
			if(substringToRemove) {
				itemName = itemName.replaceAll(substringToRemove, "");
			}
		}
		if(itemName in this.#specialBlockEntityProperties && typeof block != "string") {
			let blockEntityProperty = this.#specialBlockEntityProperties[itemName].prop;
			if(blockEntityProperty in (block.blockEntityData ?? {})) {
				itemName += `+${block.blockEntityData[blockEntityProperty]}`;
			} else {
				console.error(`Cannot find block entity property ${blockEntityProperty} on block ${blockName}!`);
			}
		}
		this.materials.set(itemName, (this.materials.get(itemName) ?? 0) + count);
		this.totalMaterialCount += count;
	}
	/**
	 * Adds an item to the material list.
	 * @param {string} itemName
	 * @param {number} [count]
	 */
	addItem(itemName, count = 1) {
		this.materials.set(itemName, (this.materials.get(itemName) ?? 0) + count);
		this.totalMaterialCount += count;
	}
	/**
	 * Exports the material list for proper usage.
	 * @returns {MaterialListEntry[]}
	 */
	export() {
		if(this.#translations == undefined) {
			throw new Error("Cannot export a material list without providing translations! Use setLanguage()");
		}
		return Array.from(this.materials).map(([itemName, count]) => {
			let serializationId;
			let blockEntityPropertyValue;
			if(itemName.includes("+")) {
				let match = itemName.match(/^([^+]+)\+(\d+)$/);
				itemName = match[1];
				blockEntityPropertyValue = +match[2];
				serializationId = this.#specialBlockEntityProperties[itemName].serializationIds?.[blockEntityPropertyValue];
			}
			// try item translation key; if that doesn't work, try block translation key
			serializationId ??= this.#blocksMissingSerializationIds[itemName] ?? this.#findItemSerializationId(itemName);
			let translatedName = serializationId && this.#translate(serializationId);
			if(!translatedName) {
				let blockSerializationId = this.#findBlockSerializationId(itemName);
				translatedName = blockSerializationId && this.#translate(blockSerializationId);
				if(translatedName) {
					serializationId = blockSerializationId;
				} else {
					if(!serializationId && !blockSerializationId) {
						console.warn(`Cannot find any translation key for ${itemName}!`);
					} else {
						console.warn(`Cannot translate ${removeFalsies([serializationId, blockSerializationId]).join(" or ")} for item "${itemName}"!`);
					}
					serializationId ??= blockSerializationId ?? itemName;
					translatedName = serializationId;
				}
			}
			let auxId = this.#findItemAuxId(itemName) ?? this.#findBlockAuxId(itemName); // this is used in the material list UI, so we prefer the item id
			if(typeof auxId == "number" && typeof blockEntityPropertyValue == "number") {
				auxId += blockEntityPropertyValue;
			}
			return {
				itemName,
				translationKey: this.#serializationIdToTranslationKey(serializationId),
				translatedName,
				count,
				partitionedCount: this.#partitionCount(count),
				partitionedCountWithoutTotal: this.#partitionCountWithoutTotal(count),
				auxId
			};
		}).sort((a, b) => b.count - a.count || +(a.translatedName > b.translatedName));
	}
	/**
	 * Exports the material list to JSON UI elements.
	 * @returns {ExportedMaterialListJsonUi}
	 */
	exportToJsonUi() {
		let entries = this.export();
		return MaterialList.convertEntriesToJsonUi(entries, this.#missingItemAux);
	}
	/**
	 * Sets the language of the material list for exporting.
	 * @param {string} translations The text contents of a `.lang` file
	 */
	setLanguage(translations) {
		this.#translations = new Map();
		translations.split("\n").forEach(line => {
			let hashI = line.indexOf("#");
			if(hashI > -1) {
				line = line.slice(0, hashI);
			}
			line = line.trim();
			if(line == "") {
				return;
			}
			let eqI = line.indexOf("=");
			this.#translations.set(line.slice(0, eqI), line.slice(eqI + 1));
		});
	}
	/** Clears the material list. */
	clear() {
		this.materials.clear();
		this.totalMaterialCount = 0;
	}
	
	/**
	 * Converts exported material list entries to JSON UI elements.
	 * @param {MaterialListEntry[]} entries
	 * @param {number} [missingItemAux] The aux ID to be used if an item's aux ID cannot be found. Defaults to `0`.
	 * @returns {ExportedMaterialListJsonUi}
	 */
	static convertEntriesToJsonUi(entries, missingItemAux = 0) {
		let elements = entries.length? entries.map(({ translationKey, partitionedCount, auxId }, i) => {
			let entry = {
				"$item_translation_key": translationKey,
				"$item_count": partitionedCount,
				"$item_id_aux": auxId ?? missingItemAux
			};
			if (i & 1) {
				entry["$background_opacity"] = 0.2;
			}
			return {
				[`entry_${i}@holoprint:material_list.entry`]: entry
			};
		}) : [
			{
				"empty_notice@holoprint:material_list.empty_notice": {}
			}
		];
		let longestItemNameLength = max(...entries.map(({ translatedName }) => translatedName.length));
		let longestCountLength = max(...entries.map(({ partitionedCount }) => partitionedCount.length));
		return {
			entries: elements,
			visibleHeight: elements.length * 12 + 12, // 12px for each item + 12px for the heading
			longestItemNameLength,
			longestCountLength,
			itemNameColumnSize: [`100% - ${23 + round(longestCountLength * 4.2)}px`, "100% - 2px"]
		};
	}
	/**
	 * Finds an item serialization id.
	 * @param {string} itemName
	 * @returns {string}
	 */
	#findItemSerializationId(itemName) {
		return this.#itemMetadata.get(`minecraft:${itemName}`)?.["serialization_id"];
	}
	/**
	 * Finds a block serialization id.
	 * @param {string} blockName
	 * @returns {string}
	 */
	#findBlockSerializationId(blockName) {
		return this.#blockMetadata.get(`minecraft:${blockName}`)?.["serialization_id"];
	}
	/**
	 * Converts a serialisation id into a translation key, also applying a patch if required.
	 * @param {string} serializationId
	 * @returns {string}
	 */
	#serializationIdToTranslationKey(serializationId) {
		serializationId = this.#serializationIdPatches.get(serializationId) ?? serializationId;
		return serializationId.endsWith(".name")? serializationId : `${serializationId}.name`; // apple, breeze rod, trial keys, warped fungus on a stick, and wind charges end with .name already smh :/
	}
	/**
	 * Translates a given serialisation id.
	 * @param {string} serializationId
	 * @returns {string}
	 */
	#translate(serializationId) {
		let translationKey = this.#serializationIdToTranslationKey(serializationId);
		return this.#translationPatches[translationKey] ?? this.#translations.get(translationKey);
	}
	/**
	 * Partitions a number of items into how many boxes and stacks it is.
	 * @param {number} count E.g. 100
	 * @returns {string} E.g. 1s + 36
	 */
	#partitionCount(count) {
		if(count < 64) {
			return count.toString();
		} else {
			return `${count} = ${this.#partitionCountWithoutTotal(count)}`;
		}
	}
	/**
	 * Partitions a count, same as #partitionCount but with no total count at the start
	 * @param {number} count
	 * @returns {string}
	 */
	#partitionCountWithoutTotal(count) {
		let parts = [[floor(count / 1728), this.shulkerBoxGlyphChar], [floor(count / 64) % 27, "s"], [count % 64, ""]].filter(([n]) => n).map(x => x.join("")); // a custom shulker box emoji (taken from OreUI files) is defined in font/glyph_E2.png
		return parts.join(" + ");
	}
	/**
	 * Finds the aux id for an item.
	 * @param {string} itemName
	 * @returns {number | undefined}
	 */
	#findItemAuxId(itemName) {
		return nanToUndefined(this.#itemMetadata.get(`minecraft:${itemName}`)?.["raw_id"] * 65536); // undefined * 65536 = NaN, which breaks optional chaining
	}
	/**
	 * Finds the aux id for a block.
	 * @param {string} blockName
	 * @returns {number | undefined}
	 */
	#findBlockAuxId(blockName) {
		return nanToUndefined(this.#blockMetadata.get(`minecraft:${blockName}`)?.["raw_id"] * 65536);
	}
}

/** @import { Block } from "./common.types.ts" */
/** @import { MaterialListEntry, ExportedMaterialListJsonUi } from "./MaterialList.types.ts" */
/** @import * as Data from "./data/schemas" */
```

## File: src/MaterialList.types.ts
```typescript
export type MaterialListEntry = {
	itemName: string;
	translationKey: string;
	translatedName: string;
	/** How many of this item is required */
	count: number;
	/** A formatted string representing partitions of the total count */
	partitionedCount: string;
	/** Same as partitionedCount, but without the "[total count] = " at the start */
	partitionedCountWithoutTotal: string;
	/** The item's aux ID */
	auxId: number | undefined;
};
export type ExportedMaterialListJsonUi = {
	entries: Record<string, object>[];
	visibleHeight: number;
	longestItemNameLength: number;
	longestCountLength: number;
	itemNameColumnSize: [string | number, string | number];
};
```

## File: src/minecraft.types.ts
```typescript
export type NBTBlock = {
	/** The block's ID */
	name: string;
	/** Block states */
	states: Record<string, number | string>;
	version: number;
};
export type MinecraftAnimation = {
	animation_length?: number;
	bones?: Record<string, object>;
};
```

## File: src/PackBuilder.js
```javascript
import { BlobReader, BlobWriter, TextReader, ZipWriter } from "@zip.js/zip.js";
import { toBlob } from "./utils.js";

/** Manages exporting files into `.mcpack`s. */
export default class PackBuilder {
	/**
	 * This may hold either the content directly, or a Promise holding the content which will be awaited when the pack is exported.
	 * @readonly @type {Map<string, { content: any, comment?: string }>}
	 */
	#files = new Map();
	/** @readonly @type {FetchFunc} */
	#fetchPackTemplateFile;
	/** @readonly @type {GetResponseContentsFunc} */
	#getResponseContents;
	
	/**
	 * @param {FetchFunc} fetchPackTemplateFile
	 * @param {GetResponseContentsFunc} getResponseContents
	 */
	constructor(fetchPackTemplateFile, getResponseContents) {
		this.#fetchPackTemplateFile = fetchPackTemplateFile;
		this.#getResponseContents = getResponseContents;
	}
	/**
	 * @param {string} filePath
	 * @param {any} content
	 * @param {AddFileOptions} [options]
	 */
	addFile(filePath, content, { comment } = {}) {
		if(this.#files.has(filePath)) {
			throw new Error(`Cannot add ${filePath} to pack, it already exists!`);
		}
		this.#files.set(filePath, { content, comment });
	}
	/** @param {string} filePath */
	removeFile(filePath) {
		if(!this.#files.delete(filePath)) {
			throw new Error(`Cannot delete ${filePath} from pack, it does not exist!`);
		}
	}
	/**
	 * Adds a file from the pack template.
	 * @param {string} filePath
	 */
	addPackTemplateFile(filePath) {
		this.addFile(filePath, this.#getResponseContents(this.#fetchPackTemplateFile(filePath), filePath));
	}
	/**
	 * @param  {...string} filePaths
	 */
	addPackTemplateFiles(...filePaths) {
		filePaths.forEach(filePath => this.addPackTemplateFile(filePath));
	}
	/**
	 * Exports the pack as a `.mcpack` file.
	 * @param {string} packName
	 * @param {ExportOptions} [options]
	 * @returns {Promise<File>}
	 */
	async export(packName, { zipCompressionLevel } = {}) {
		let packFileWriter = new BlobWriter();
		let zipWriter = new ZipWriter(packFileWriter);
		await Promise.all(Array.from(this.#files.entries()).map(async ([filePath, { content, comment }]) => {
			/** @type {ZipWriterAddDataOptions} */
			let options = {
				comment,
				level: zipCompressionLevel
			};
			if(content instanceof Promise) {
				content = await content;
			}
			if(content instanceof HTMLImageElement) {
				content = await toBlob(content);
			}
			if(content instanceof Blob) {
				return zipWriter.add(filePath, new BlobReader(content), options);
			}
			if(typeof content == "object") {
				content = JSON.stringify(content);
			}
			return zipWriter.add(filePath, new TextReader(content), options);
		}));
		let zippedPack = await zipWriter.close();
		
		return new File([zippedPack], `${packName}.holoprint.mcpack`, {
			type: "application/mcpack"
		});
	}
}

/** @import { ZipWriterAddDataOptions } from "@zip.js/zip.js" */
/** @import { FetchFunc, GetResponseContentsFunc, AddFileOptions, ExportOptions } from "./PackBuilder.types.ts" */
```

## File: src/PackBuilder.types.ts
```typescript
export type FetchFunc = (filePath: string) => Promise<Response>;
export type GetResponseContentsFunc = (resPromise: Promise<Response>, filePath: string) => Promise<any>;
export type AddFileOptions = {
	/** An optional comment to add to the file entry. */
	comment?: string;
};
export type ExportOptions = {
	zipCompressionLevel?: number;
};
```

## File: src/PolyMeshMaker.js
```javascript
import { JSONMap, min, CoupleSet, TripleSet, vec3 } from "./utils.js";

const stringifyVec3 = "InternalError" in window? vec => vec[0] + "," + vec[1] + "," + vec[2] : vec => `${vec[0]},${vec[1]},${vec[2]}`;

export default class PolyMeshMaker {
	/** @readonly @type {PolyMeshTemplateFaceWithUvs[][]} */
	templatePalette;
	/** @readonly @type {[Vec3, number][][]} */
	#blocks;
	/** @readonly @type {JSONMap<Vec3, number>} */
	#positionsWithMultipleBlocks = new JSONMap([], stringifyVec3);
	
	/** @param {PolyMeshTemplateFaceWithUvs[][]} templatePalette */
	constructor(templatePalette) {
		this.templatePalette = templatePalette;
		
		this.#blocks = new Array(templatePalette.length);
		for(let i in templatePalette) {
			this.#blocks[i] = [];
		}
	}
	/**
	 * Adds an entry from the template palette to the poly mesh, with an optional position offset.
	 * @param {number} paletteI
	 * @param {Vec3} [positionOffset]
	 * @param {number} [layer] 0 = primary layer, 1 = secondary layer
	 */
	add(paletteI, positionOffset = [0, 0, 0], layer = 0) {
		this.#blocks[paletteI].push([positionOffset, layer]);
		if(layer > 0) {
			this.#positionsWithMultipleBlocks.set(positionOffset, this.#positionsWithMultipleBlocks.size);
		}
	}
	/** @returns {PolyMesh} */
	export() {
		/** @type {TripleSet<number, number, number>} */
		let positions = new TripleSet();
		/** @type {TripleSet<number, number, number>} */
		let normals = new TripleSet();
		/** @type {CoupleSet<number, number>} */
		let uvs = new CoupleSet();
		
		let usedPaletteEntries = Object.entries(this.#blocks).filter(([, val]) => val.length);
		usedPaletteEntries.sort(([, a], [, b]) => b.length - a.length); // makes more common blocks have smaller indices
		let totalFaceCount = usedPaletteEntries.reduce((sum, [paletteI]) => sum + this.templatePalette[+paletteI].length, 0);
		/** @type {{ polys: PolyMeshFace[], transparency: number }[]} */
		let polysAndTransparencies = new Array(totalFaceCount);
		let polysAndTransparenciesI = 0;
		let facesToBeReordered = [];
		usedPaletteEntries.forEach(([paletteI, blockPositions]) => {
			let faces = this.templatePalette[+paletteI];
			for(let faceI = 0; faceI < faces.length; faceI++) {
				let face = faces[faceI];
				let normalIndex = normals.add(face.normal);
				let uvIndices = face.vertices.map(vertex => uvs.add(vertex.uv));
				let polys = new Array(blockPositions.length);
				blockPositions.forEach(([blockPos, layer], blockI) => {
					let facePolys = new Array(4);
					for(let vertexI = 0; vertexI < 4; vertexI++) {
						let pos = vec3.toFixed(vec3.add(blockPos, face.vertices[vertexI].pos), 4);
						let positionIndex = positions.add(pos);
						facePolys[vertexI] = [positionIndex, normalIndex, uvIndices[vertexI]];
					}
					polys[blockI] = facePolys;
					if(this.#positionsWithMultipleBlocks.has(blockPos)) {
						let pairI = this.#positionsWithMultipleBlocks.get(blockPos);
						facesToBeReordered[pairI] ??= [];
						facesToBeReordered[pairI][layer] ??= [];
						facesToBeReordered[pairI][layer].push(facePolys);
					}
				});
				polysAndTransparencies[polysAndTransparenciesI++] = {
					transparency: face.transparency,
					polys
				};
			}
		});
		polysAndTransparencies.sort((a, b) => a.transparency - b.transparency); // transparent blocks rendered later
		let polys = [].concat(...polysAndTransparencies.map(a => a.polys)); // this is faster than .flat: https://stackoverflow.com/questions/61411776/is-js-native-array-flat-slow-for-depth-1
		facesToBeReordered.forEach(([primaryLayerFaces, secondaryLayerFaces]) => {
			let earliestSecondaryLayerFaceI = min(...secondaryLayerFaces.map(face => polys.indexOf(face)));
			primaryLayerFaces?.forEach(face => {
				let primaryLayerFaceI = polys.indexOf(face);
				if(primaryLayerFaceI > earliestSecondaryLayerFaceI) {
					polys.splice(primaryLayerFaceI, 1);
					polys.splice(earliestSecondaryLayerFaceI, 0, face); // move primary layer face before secondary layer face
					earliestSecondaryLayerFaceI++;
				}
			});
		});
		return {
			normalized_uvs: true, // UV coords are really messed up if this is false, I haven't found a way to get it working.
			positions: positions.values,
			normals: normals.values,
			uvs: uvs.values,
			polys
		};
	}
	clear() {
		for(let i in this.#blocks) {
			this.#blocks[i] = [];
		}
		this.#positionsWithMultipleBlocks.clear();
	}
}

/** @import { Vec3 } from "./common.types.ts" */
/** @import { PolyMeshTemplateFaceWithUvs, PolyMesh, PolyMeshFace } from "./PolyMeshMaker.types.ts" */
```

## File: src/PolyMeshMaker.types.ts
```typescript
import type { Vec2, Vec3 } from "./common.types.ts";

export type PolyMesh = {
	normalized_uvs?: boolean;
	normals: Vec3[];
	uvs: Vec2[];
	positions: Vec3[];
	polys: PolyMeshFace[];
};
export type PolyMeshFace = [Vec3, Vec3, Vec3, Vec3];
export type PolyMeshTemplateFace = {
	normal: Vec3;
	textureRefI: number;
	vertices: [PolyMeshTemplateVertex, PolyMeshTemplateVertex, PolyMeshTemplateVertex, PolyMeshTemplateVertex];
};
export type PolyMeshTemplateVertex = {
	pos: Vec3;
	/** 0: top left, 1: top right, 2: bottom left, 3: bottom right */
	corner: number;
};
export type PolyMeshTemplateFaceWithUvs = {
	normal: Vec3;
	/** Average transparency per texture pixel. 255 = fully transparent, 0 = fully opaque */
	transparency: number;
	vertices: [PolyMeshTemplateVertexWithUv, PolyMeshTemplateVertexWithUv, PolyMeshTemplateVertexWithUv, PolyMeshTemplateVertexWithUv];
};
export type PolyMeshTemplateVertexWithUv = {
	pos: Vec3;
	uv: Vec2;
};
```

## File: src/PreviewRenderer.js
```javascript
import { abs, assertAs, AsyncFactory, cosDeg, distanceSquared, downloadFile, JSONSet, max, min, pi, round, sinDeg, tanDeg, toImageData, tuple, vec2 } from "./utils.js";
import PolyMeshMaker from "./PolyMeshMaker.js";

import Stats from "stats.js"; // library not a file

/** @type {typeof import("three")} */
let THREE;
/** @type {typeof import("three/examples/jsm/controls/OrbitControls.js").OrbitControls} */
let OrbitControls;
/** @type {typeof import("three/examples/jsm/exporters/GLTFExporter.js").GLTFExporter} */
let GLTFExporter;
/** @type {typeof import("three/examples/jsm/utils/BufferGeometryUtils.js")} */
let BufferGeometryUtils;

const IN_PRODUCTION = false;

export default class PreviewRenderer extends AsyncFactory {
	static #CAMERA_FOV = 70; // degrees
	static #POINT_LIGHT_MAX_DISTANCE = 30; // pixels
	static #POINT_LIGHTS = {
		lantern: 0xFFAA55,
		redstone_torch: 0x990000,
		powered_repeater: 0x330000,
		powered_comparator: 0x330000,
		end_rod: [0xD0C9BE, 67.5],
		fire: 0xFF9955,
		lava: 0xFF9955,
		"campfire[extinguished=0]": [0xFF9955, 37.5],
		"soul_campfire[extinguished=0]": [0x00FFFF, 25],
		cave_vines_body_with_berries: [0xFFAA66, 37.5],
		cave_vines_head_with_berries: [0xFFAA66, 37.5],
		
		torch: 0xEFE39D, // source: https://learn.microsoft.com/en-us/minecraft/creator/documents/deferredlighting/lightingcustomization?view=minecraft-bedrock-stable
		soul_lantern: 0x00FFFF,
		soul_torch: 0x00FFFF
	};
	static #POINT_LIGHT_DEFAULT_INTENSITY = 75;
	static #DIRECTIONAL_LIGHT_STRENGTH = 1.57;
	static #FLOOR_SHADOW_DARKNESS = 0.3;
	/** @readonly @type {Partial<typeof PreviewRenderer.prototype.options>} */
	static #WEAK_DEVICE_OPTIONS = {
		maxPointLights: 0,
		// shadows will also be disabled, but when the user enables them, they should be the lowest quality
		directionalLightShadowMapResolution: 1
	};
	/** @readonly @type {Node} */
	cont;
	/** @readonly @type {string} */
	packName;
	/** @readonly @type {IStructure} */
	structure;
	/** @readonly @type {PolyMeshTemplateFaceWithUvs[][]} */
	polyMeshTemplatePalette;
	options = {
		showSkybox: true,
		maxPointLights: 100, // limited by WebGL uniform limit since Three.js uses uniforms to pass lights to shaders
		directionalLightHeight: 1, // multiples of the max dimension
		directionalLightAngle: 120,
		directionalLightShadowMapResolution: 2,
		highResolution: false,
		debugHelpersVisible: false,
		showFps: true,
		showOptions: true
	};
	#canvasSize = min(window.innerWidth, window.innerHeight) * 0.8;
	/** @readonly @type {HTMLDivElement} */
	#loadingMessage;
	/** @readonly @type {HTMLCanvasElement} */
	#can;
	/** @readonly @type {PolyMeshMaker} */
	#polyMeshMaker;
	/** @readonly @type {Blob} */
	#imageBlob;
	/** @type {ImageData} */
	#imageBlobData;
	/** @type {three.Vector3} */
	#center;
	/** @readonly @type {number} */
	#maxDim;
	/** @readonly @type {number} */
	#maxDimPixels;
	#lastFrameTime = performance.now();
	/** @readonly @type {Vec3[][]} */
	#blockPositions = [];
	/** @type {three.DirectionalLight} */
	#directionalLight;
	/** @readonly @type {PreviewPointLight[]} */
	#pointLights = [];
	/** @readonly @type {three.PointLight[]} */
	#pointLightsInScene = [];
	/** @readonly @type {WeakMap<three.PointLight, three.PointLightHelper>} */
	#pointLightHelpers = new WeakMap();
	/** @type {three.WebGLRenderer} */
	#renderer;
	/** @type {three.Scene} */
	#scene;
	/** @type {three.PerspectiveCamera} */
	#camera;
	/** @type {import("three/examples/jsm/controls/OrbitControls.js").OrbitControls} */
	#controls;
	/** @type {three.CubeTexture} */
	#skyboxCubemap;
	#shouldRenderNextFrame = true;
	/** @readonly @type {Stats} */
	#stats;
	/** @readonly @type {GUI} */
	#optionsGui;
	/** @readonly @type {three.Object3D[]} */
	#debugHelpers = [];
	/**
	 * Create a preview renderer for a completed geometry file.
	 * @param {Node} cont
	 * @param {string} packName
	 * @param {Blob} imageBlob
	 * @param {IStructure} structure
	 * @param {PolyMeshTemplateFaceWithUvs[][]} polyMeshTemplatePalette
	 * @param {Partial<typeof PreviewRenderer.prototype.options>} [options]
	 */
	constructor(cont, packName, imageBlob, structure, polyMeshTemplatePalette, options = {}) {
		super();
		this.cont = cont;
		this.packName = packName;
		this.structure = structure;
		this.polyMeshTemplatePalette = polyMeshTemplatePalette;
		this.options = { ...this.options, ...options };
		
		this.#can = document.createElement("canvas");
		this.#polyMeshMaker = new PolyMeshMaker(polyMeshTemplatePalette);
		this.#imageBlob = imageBlob;
		this.#maxDim = max(...this.structure.size);
		this.#maxDimPixels = this.#maxDim * 16;
		
		this.#loadingMessage = document.createElement("div");
		this.#loadingMessage.classList.add("previewMessage");
		let p = document.createElement("p");
		let span = document.createElement("span");
		span.dataset.translate = "preview.loading";
		p.appendChild(span);
		let loader = document.createElement("div");
		loader.classList.add("loader");
		p.appendChild(loader);
		this.#loadingMessage.appendChild(p);
		this.cont.appendChild(this.#loadingMessage);
		
		if(this.options.showFps) {
			this.#stats = new Stats();
			this.#stats.showPanel(0);
			this.#stats.dom.classList.add("statsPanel");
			this.#stats.dom.childNodes.forEach(can => {
				if(!(can instanceof HTMLCanvasElement)) {
					return;
				}
				let ctx = can.getContext("2d");
				const defaultFontFamilies = "Helvetica"; // https://github.com/mrdoob/stats.js/blob/71e88f65280fd5c6e91d1f84f0f633d372ed7eae/src/Stats.js#L128
				ctx.font = ctx.font.replace(defaultFontFamilies, `"Space Grotesk", ${defaultFontFamilies}`);
			});
		}
		if(this.options.showOptions) {
			let guiEl = document.createElement("lil-gui");
			this.cont.appendChild(guiEl);
			this.#optionsGui = guiEl.gui;
			this.#optionsGui.$title.dataset.translate = "preview.options";
			this.#optionsGui.hide();
			this.#optionsGui.close();
			this.#optionsGui.onChange(() => {
				this.#shouldRenderNextFrame = true;
			});
		}
	}
	async init() {
		THREE ??= await import("three");
		OrbitControls ??= (await import("three/examples/jsm/controls/OrbitControls.js")).OrbitControls;
		GLTFExporter ??= (await import("three/examples/jsm/exporters/GLTFExporter.js")).GLTFExporter;
		BufferGeometryUtils ??= (await import("three/examples/jsm/utils/BufferGeometryUtils.js"));
		
		this.#center = new THREE.Vector3(-this.structure.width * 8, this.structure.height * 8, -this.structure.depth * 8);
		this.#imageBlobData = await toImageData(this.#imageBlob);
		
		this.#renderer = new THREE.WebGLRenderer({
			canvas: this.#can,
			alpha: true,
			antialias: true,
		});
		
		if(this.#isWeakDevice()) {
			console.info("Switching to faster preview options");
			this.options = {
				...this.options,
				...PreviewRenderer.#WEAK_DEVICE_OPTIONS
			};
		}
		
		this.#renderer.setPixelRatio(window.devicePixelRatio);
		this.#renderer.shadowMap.enabled = true;
		this.#renderer.shadowMap.type = THREE.PCFShadowMap;
		this.#setupCameraAndControls();
		this.#setSize();
		this.#scene = new THREE.Scene();
		this.#controls.addEventListener("change", () => {
			this.#shouldRenderNextFrame = true;
			const epsilon = 0.001;
			const targetFps = 60;
			let timeSinceLastFrame = performance.now() - this.#lastFrameTime;
			let fps = 1000 / timeSinceLastFrame;
			let effectiveEpsilon = epsilon * targetFps / fps;
			if(abs(this.#controls._sphericalDelta.phi) < effectiveEpsilon) {
				this.#controls._sphericalDelta.phi = 0;
			}
			if(abs(this.#controls._sphericalDelta.theta) < effectiveEpsilon) {
				this.#controls._sphericalDelta.theta = 0;
			}
		});
		
		this.#addLighting();
		await this.#initBackground();
		
		if(this.options.showFps) {
			this.cont.appendChild(this.#stats.dom);
		}
		if(this.options.showOptions) {
			if(this.#pointLights.length > 0) {
				this.#guiLocName(this.#optionsGui.add(this.options, "maxPointLights", 0, this.#pointLights.length, 1).onChange(() => this.#createPointLightsInScene()), "preview.options.maxPointLights");
			}
			let shadowOption;
			this.#guiLocName(this.#optionsGui.add(this.#directionalLight, "castShadow").onChange(() => {
				if(this.#directionalLight.castShadow) {
					shadowOption.show();
				} else {
					shadowOption.hide();
				}
			}), "preview.options.shadowsEnabled");
			shadowOption = this.#guiLocName(this.#optionsGui.add(this.options, "directionalLightShadowMapResolution", 1, 5, 1).onChange(() => this.#updateDirectionalLightShadowMapSize()), "preview.options.shadowQuality");
			if(!this.#directionalLight.castShadow) {
				shadowOption.hide();
			}
			this.#guiLocName(this.#optionsGui.add(this.options, "directionalLightAngle", 0, 360, 1).onChange(() => this.#setDirectionalLightPos()), "preview.options.lightAngle");
			this.#guiLocName(this.#optionsGui.add(this.options, "directionalLightHeight", 0.1, 2, 0.01).onChange(() => this.#setDirectionalLightPos()), "preview.options.lightHeight");
			this.#guiLocName(this.#optionsGui.add(this.options, "showSkybox").onChange(() => this.#initBackground()), "preview.options.showSkybox");
			this.#guiLocName(this.#optionsGui.add(this.options, "highResolution").onChange(() => this.#setSize()), "preview.options.highRes");
			this.#guiLocName(this.#optionsGui.add(this, "downloadScreenshot"), "preview.options.takeScreenshot");
			this.#guiLocName(this.#optionsGui.add(this, "downloadGlb"), "preview.options.exportGlb");
			if(!IN_PRODUCTION) {
				this.#optionsGui.add(this.options, "debugHelpersVisible").onChange(() => {
					if(this.options.debugHelpersVisible) {
						this.#scene.add(...this.#debugHelpers);
					} else {
						this.#scene.remove(...this.#debugHelpers);
					}
				}).name("Debug");
			}
			this.#optionsGui.show();
		}
		
		// let animator = this.#viewer.getModel().animator;
		// let animation = this.animations["animations"]["animation.holoprint.hologram.spawn"];
		// Object.values(animation["bones"] ?? {}).map(bone => Object.values(bone).forEach(animationChannel => {
		// 	animationChannel["Infinity"] = Object.values(animationChannel).at(-1); // hold last keyframe.
		// }));
		// animator.addAnimation("spawn", animation);
		// animator.play("spawn");
		
		let texture = await this.#createTexture();
		let regularMat = new THREE.MeshLambertMaterial({
			map: texture,
			side: THREE.DoubleSide,
			alphaTest: 0.2
		});
		let transparentMat = new THREE.MeshLambertMaterial({
			map: texture,
			side: THREE.DoubleSide,
			alphaTest: 0.2,
			transparent: true
		});
		
		/** @type {three.BufferGeometry[]} */
		let opaqueBlockGeos = [];
		/** @type {three.BufferGeometry[]} */
		let translucentBlockGeos = [];
		for(let i in this.#blockPositions) {
			let polyMeshTemplate = this.polyMeshTemplatePalette[i];
			if(!polyMeshTemplate.length) { // a template is an array of faces. no faces = nothing to be rendered for this block
				continue;
			}
			let geo = this.#polyMeshTemplateToBufferGeo(+i);
			let positions = this.#blockPositions[i].map(([x, y, z]) => [-16 * x - 16, 16 * y, -16 * z - 16]);
			let isTranslucent = this.#isPolyMeshTemplateTranslucent(polyMeshTemplate);
			let material = isTranslucent? transparentMat : regularMat;
			
			// Blocks that appear more than 3 times in the structure use instanced rendering, but all other blocks are merged into meshes
			// Note: 3 was not chosen for any technical reason.
			if(positions.length <= 3) {
				positions.forEach(pos => {
					let geoAtThisPosition = geo.clone();
					let translationMatrix = (new THREE.Matrix4()).makeTranslation(...pos);
					geoAtThisPosition.applyMatrix4(translationMatrix);
					if(isTranslucent) {
						translucentBlockGeos.push(geoAtThisPosition);
					} else {
						opaqueBlockGeos.push(geoAtThisPosition);
					}
				});
				continue;
			}
			
			let instancedMesh = this.#instanceBufferGeoAtPositions(geo, positions, material);
			if(isTranslucent) {
				instancedMesh.renderOrder = positions.length; // more common transparent blocks will be rendered after less common transparent blocks, minimising the amount of visual issues
			}
			instancedMesh.castShadow = true;
			instancedMesh.receiveShadow = true;
			this.#scene.add(instancedMesh);
		}
		if(opaqueBlockGeos.length) {
			this.#mergeGeosAndAddToScene(opaqueBlockGeos, regularMat);
		}
		if(translucentBlockGeos.length) {
			this.#mergeGeosAndAddToScene(translucentBlockGeos, transparentMat);
		}
		
		this.#loop();
		this.#loadingMessage.replaceWith(this.#can);
	}
	/** Downloads a screenshot of the preview. */
	downloadScreenshot() {
		this.#render();
		this.#renderer.domElement.toBlob(imageBlob => {
			let imageFile = new File([imageBlob], `Screenshot ${this.packName}.png`);
			downloadFile(imageFile);
		});
	}
	/**
	 * Exports a GLB file of the scene.
	 * @returns {Promise<File>}
	 */
	async exportGlb() {
		let exporter = new GLTFExporter();
		let exportReadyScene = this.#expandInstancedMeshes();
		let glbData = await exporter.parseAsync(exportReadyScene, {
			binary: true,
			trs: true // decreases file size by a little, idk how
		});
		TS: assertAs(glbData, ArrayBuffer);
		return new File([glbData], `${this.packName}.glb`, {
			type: "model/gltf-binary"
		});
	}
	/** Downloads a GLB file of the scene. */
	async downloadGlb() {
		let glb = await this.exportGlb().catch(e => {
			console.error(`Error exporting GLB: ${e}`);
		});
		if(!glb) {
			return;
		}
		downloadFile(glb);
	}
	
	#loop() {
		this.#controls.update();
		if(this.#shouldRenderNextFrame) {
			this.#shouldRenderNextFrame = false;
			this.#render();
		}
		
		this.#lastFrameTime = performance.now();
		window.requestAnimationFrame(() => this.#loop());
	}
	#render() {
		this.#stats?.begin();
		
		this.#updatePointLights();
		// console.log(this.#renderer.capabilities.maxVertexUniforms, this.#renderer.capabilities.maxFragmentUniforms);
		this.#renderer.render(this.#scene, this.#camera);
		
		this.#stats?.end();
	}
	/**
	 * Adds the localised name to a lil-gui controller.
	 * @template {Controller} T
	 * @param {T} controller
	 * @param {string} translationKey
	 * @returns {T}
	 */
	#guiLocName(controller, translationKey) {
		controller.$name.dataset.translate = translationKey;
		return controller;
	}
	/** Sets the canvas size, scaling up if the high resolution option is enabled. */
	#setSize() {
		let size = this.#canvasSize * (this.options.highResolution? 2 : 1);
		this.#renderer.setSize(size, size, false);
	}
	/** Sets the directional light position. */
	#setDirectionalLightPos() {
		let lightSin = sinDeg(this.options.directionalLightAngle);
		let lightCos = cosDeg(this.options.directionalLightAngle);
		this.#directionalLight.position.set(this.#center.x + this.#maxDimPixels * lightSin, this.#center.y + this.#maxDimPixels * this.options.directionalLightHeight, this.#center.z + this.#maxDimPixels * lightCos);
		this.#directionalLight.shadow.needsUpdate = true;
	}
	/** Initialises and positions the camera and orbit controls. */
	#setupCameraAndControls() {
		let controlsMaxDist = this.#maxDimPixels / tanDeg(PreviewRenderer.#CAMERA_FOV / 2) * 5;
		this.#camera = new THREE.PerspectiveCamera(PreviewRenderer.#CAMERA_FOV, 1, 0.1, controlsMaxDist * 1.25);
		this.#controls = new OrbitControls(this.#camera, this.#can);
		this.#controls.minDistance = 10;
		this.#controls.maxDistance = controlsMaxDist;
		this.#controls.enableDamping = true;
		this.#controls.dampingFactor = 0.1;
		
		// this part is adapted from @bridge-core/model-viewer, itself adapted from https://github.com/mrdoob/three.js/issues/6784#issuecomment-315963625
		const scale = 1.7;
		let boundingBox = new THREE.Box3(new THREE.Vector3(this.structure.width * -16, 0, this.structure.depth * -16), new THREE.Vector3(0, this.structure.height * 16, 0));
		let boundingSphere = boundingBox.getBoundingSphere(new THREE.Sphere());
		let objectAngularSize = this.#camera.fov * scale;
		let distanceToCamera = boundingSphere.radius / tanDeg(objectAngularSize / 2);
		let len = distanceToCamera * Math.SQRT2;
		this.#camera.position.set(len, len, len);
		this.#camera.lookAt(boundingSphere.center);
		this.#camera.updateProjectionMatrix();
		this.#controls.target.copy(boundingSphere.center);
		
		this.#debugHelpers.push(new THREE.AxesHelper(16));
	}
	/** Adds the main directional light, the z-lights, the ambient light, the shadow floor, and the point lights. */
	#addLighting() {
		this.#directionalLight = new THREE.DirectionalLight(0xFFFFFF, PreviewRenderer.#DIRECTIONAL_LIGHT_STRENGTH);
		this.#directionalLight.position.set(this.#center.x + this.#maxDimPixels, this.#center.y + this.#maxDimPixels, this.#center.z + this.#maxDimPixels);
		this.#directionalLight.target.position.copy(this.#center);
		this.#directionalLight.castShadow = true;
		this.#directionalLight.shadow.camera.near = 0.1;
		this.#directionalLight.shadow.camera.far = this.#maxDimPixels * 4;
		this.#directionalLight.shadow.camera.left = -this.#maxDimPixels;
		this.#directionalLight.shadow.camera.right = this.#maxDimPixels;
		this.#directionalLight.shadow.camera.bottom = -this.#maxDimPixels;
		this.#directionalLight.shadow.camera.top = this.#maxDimPixels;
		this.#directionalLight.shadow.bias = -0.001;
		this.#directionalLight.shadow.normalBias = 0.1;
		this.#scene.add(this.#directionalLight);
		this.#scene.add(this.#directionalLight.target);
		this.#directionalLight.shadow.autoUpdate = false;
		this.#setDirectionalLightPos();
		this.#updateDirectionalLightShadowMapSize();
		this.#debugHelpers.push(new THREE.CameraHelper(this.#directionalLight.shadow.camera));
		
		// these lights add extra shading on z-facing faces. this is vanilla MC behaviour. lines 53-54 in shaders/glsl/entity.vertex
		let zLight1 = new THREE.DirectionalLight(0xFFFFFF, 0.31);
		zLight1.position.set(this.#center.x + this.#maxDimPixels * 0.6, this.#center.y + this.#maxDimPixels, this.#center.z + this.#maxDimPixels * 3);
		zLight1.target.position.copy(this.#center);
		this.#scene.add(zLight1);
		this.#scene.add(zLight1.target);
		let zLight2 = new THREE.DirectionalLight(0xFFFFFF, 0.31);
		zLight2.position.set(this.#center.x - this.#maxDimPixels * 0.6, this.#center.y + this.#maxDimPixels, this.#center.z - this.#maxDimPixels * 3);
		zLight2.target.position.copy(this.#center);
		this.#scene.add(zLight2);
		this.#scene.add(zLight2.target);
		this.#debugHelpers.push(new THREE.DirectionalLightHelper(zLight1, 5), new THREE.DirectionalLightHelper(zLight2, 5));
		
		let ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.88);
		this.#scene.add(ambientLight);
		
		let shadowFloor = new THREE.Mesh(new THREE.PlaneGeometry(this.#maxDimPixels * 5, this.#maxDimPixels * 5), new THREE.ShadowMaterial({
			opacity: PreviewRenderer.#FLOOR_SHADOW_DARKNESS
		}));
		shadowFloor.rotation.x = -pi / 2;
		shadowFloor.position.set(this.#center.x, 0, this.#center.z);
		shadowFloor.receiveShadow = true;
		this.#scene.add(shadowFloor);
		
		this.#initPointLights();
		this.#createPointLightsInScene();
	}
	/**
	 * Checks if a block matches a stringified block.
	 * @param {string} stringifiedBlock
	 * @param {Block} block
	 */
	#checkBlockNameAndStates(stringifiedBlock, block) {
		let blockName = stringifiedBlock.includes("[")? stringifiedBlock.slice(0, stringifiedBlock.indexOf("[")) : stringifiedBlock;
		if(blockName != block.name) {
			return false;
		}
		let allBlockStates = stringifiedBlock.match(/\[(.+)\]/)?.[1];
		if(allBlockStates) {
			let blockStates = allBlockStates.split(",").map(stateAndValue => stateAndValue.split("="));
			if(!blockStates.every(([name, value]) => block.states?.[name] == value)) {
				return false;
			}
		}
		return true;
	}
	/** Sets the size of the directional light's shadow map. */
	#updateDirectionalLightShadowMapSize() {
		let optionsFactor = 2 ** (this.options.directionalLightShadowMapResolution - 2);
		let shadowMapSize = (this.#maxDim < 24? 1024 : this.#maxDim < 45? 2048 : 4096) * optionsFactor;
		this.#directionalLight.shadow.mapSize.set(shadowMapSize, shadowMapSize)
		this.#directionalLight.shadow.map?.setSize(shadowMapSize, shadowMapSize);
		this.#directionalLight.shadow.needsUpdate = true;
	}
	#initPointLights() {
		let palettePointLights = this.structure.getPalette().map(block => PreviewRenderer.#POINT_LIGHTS[block.name] ?? Object.entries(PreviewRenderer.#POINT_LIGHTS).find(([stringifiedBlock]) => this.#checkBlockNameAndStates(stringifiedBlock, block))?.[1]);
		let { width, height, depth } = this.structure;
		for(let x = 0; x < width; x++) {
			for(let y = 0; y < height; y++) {
				for(let z = 0; z < depth; z++) {
					let coords = tuple([x, y, z]);
					for(let layerI = 0; layerI < 2; layerI++) {
						let paletteI = this.structure.getPaletteIndex(coords, layerI);
						if(!(paletteI in this.polyMeshTemplatePalette)) {
							continue;
						}
						this.#blockPositions[paletteI] ??= [];
						this.#blockPositions[paletteI].push([x, y, z]);
						
						let lightInfo = palettePointLights[paletteI];
						if(lightInfo) {
							let [col, intensity] = Array.isArray(lightInfo)? lightInfo : [lightInfo, PreviewRenderer.#POINT_LIGHT_DEFAULT_INTENSITY];
							this.#pointLights.push({
								pos: [-16 * x - 8, 16 * y + 8, -16 * z - 8],
								col: new THREE.Color(col),
								intensity
							});
						}
					}
				}
			}
		}
		this.options.maxPointLights = min(this.options.maxPointLights, this.#pointLights.length);
	}
	/** Syncs the number of point lights in the scene with how many should be rendered. */
	#createPointLightsInScene() {
		while(this.#pointLightsInScene.length < this.options.maxPointLights) {
			let light = new THREE.PointLight(0, 0, PreviewRenderer.#POINT_LIGHT_MAX_DISTANCE, 0.35);
			this.#pointLightsInScene.push(light);
			this.#scene.add(light);
			let helper = new THREE.PointLightHelper(light, PreviewRenderer.#POINT_LIGHT_MAX_DISTANCE);
			this.#debugHelpers.push(helper);
			this.#pointLightHelpers.set(light, helper);
			if(this.options.debugHelpersVisible && this.#debugHelpers.length) {
				this.#scene.add(helper);
			}
		}
		while(this.#pointLightsInScene.length > this.options.maxPointLights) {
			let light = this.#pointLightsInScene.pop();
			this.#scene.remove(light);
			let helper = this.#pointLightHelpers.get(light);
			this.#scene.remove(helper);
			this.#debugHelpers.splice(this.#debugHelpers.indexOf(helper), 1);
		}
	}
	/** Finds which point lights should be rendered, and shows them. */
	#updatePointLights() {
		let maxLightsInScene = min(this.#pointLights.length, this.options.maxPointLights);
		if(maxLightsInScene == 0) {
			return;
		}
		let cameraPosVec = this.#camera.getWorldPosition(new THREE.Vector3());
		let cameraPos = [cameraPosVec.x, cameraPosVec.y, cameraPosVec.z];
		
		let lightsInView = this.#getPointLightsInView();
		
		let sortedLights = lightsInView.sort((a, b) => distanceSquared(a.pos, cameraPos) - distanceSquared(b.pos, cameraPos));
		let closestSortedLights = sortedLights.slice(0, this.options.maxPointLights);
		
		closestSortedLights.forEach((lightInfo, i) => {
			this.#pointLightsInScene[i].visible = true;
			this.#pointLightsInScene[i].position.set(...lightInfo.pos);
			this.#pointLightsInScene[i].intensity = lightInfo.intensity;
			this.#pointLightsInScene[i].color.copy(lightInfo.col)
		});
		if(closestSortedLights.length < maxLightsInScene) {
			for(let i = closestSortedLights.length; i < maxLightsInScene; i++) {
				this.#pointLightsInScene[i].intensity = 0; // setting .visible = false causes lag
			}
		}
	}
	/**
	 * Finds all the point lights in the camera's view.
	 * @returns {PreviewPointLight[]}
	 */
	#getPointLightsInView() {
		let cameraFrustum = new THREE.Frustum();
		let projMatrix = new THREE.Matrix4();
		projMatrix.multiplyMatrices(this.#camera.projectionMatrix, this.#camera.matrixWorldInverse);
		cameraFrustum.setFromProjectionMatrix(projMatrix);
		return this.#pointLights.filter(light => {
			let lightSphere = new THREE.Sphere(new THREE.Vector3(...light.pos), PreviewRenderer.#POINT_LIGHT_MAX_DISTANCE);
			return cameraFrustum.intersectsSphere(lightSphere);
		});
	}
	/** Adds the background skybox, or clears the background, depending on current options. */
	async #initBackground() {
		if(this.options.showSkybox) {
			if(!this.#skyboxCubemap) {
				let loader = new THREE.CubeTextureLoader();
				loader.setPath("assets/previewPanorama/");
				this.#skyboxCubemap = await loader.loadAsync([1, 3, 4, 5, 0, 2].map(x => `${x}.png`));
			}
			this.#scene.background = this.#skyboxCubemap;
		} else {
			this.#scene.background = null;
		}
	}
	/**
	 * Checks if the GPU on the current device is not very powerful.
	 * @returns {boolean}
	 */
	#isWeakDevice() {
		let gl = this.#renderer.getContext();
		return gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS) <= 1024 || gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS) <= 256; // yes
	}
	/** @returns {Promise<three.Texture>} */
	async #createTexture() {
		let texture = new THREE.DataTexture(this.#imageBlobData.data, this.#imageBlobData.width, this.#imageBlobData.height, THREE.RGBAFormat);
		texture.colorSpace = THREE.SRGBColorSpace;
		texture.minFilter = THREE.LinearFilter; // helps make the texture outlines more visible and far-away textures less noisy, at the expense of occasional texture bleeding
		texture.needsUpdate = true;
		return texture;
	}
	/**
	 * Converts a poly mesh template in the palette to a Three.js BufferGeometry.
	 * @param {number} polyMeshTemplatePaletteI
	 * @returns {three.BufferGeometry}
	 */
	#polyMeshTemplateToBufferGeo(polyMeshTemplatePaletteI) {
		this.#polyMeshMaker.add(polyMeshTemplatePaletteI);
		let polyMesh = this.#polyMeshMaker.export();
		this.#polyMeshMaker.clear();
		let i = 0; // this bit is adapted from https://github.com/bridge-core/model-viewer/blob/main/lib/PolyMesh.ts#L45
		let totalVertices = 4 * polyMesh.polys.length;
		let positions = new Float32Array(totalVertices * 3);
		let normals = new Float32Array(totalVertices * 3);
		let uvs = new Float32Array(totalVertices * 2);
		let indices = new Uint16Array(polyMesh.polys.length * 6);
		let positionsI = 0, normalsI = 0, uvsI = 0, indicesI = 0;
		polyMesh.polys.forEach(face => {
			face.forEach(([posIndex, normalIndex, uvIndex]) => {
				let pos = polyMesh.positions[posIndex];
				positions.set([pos[0], pos[1], 16 - pos[2]], positionsI);
				positionsI += 3;
				normals.set(polyMesh.normals[normalIndex], normalsI);
				normalsI += 3;
				uvs.set([polyMesh.uvs[uvIndex][0], 1 - polyMesh.uvs[uvIndex][1]], uvsI);
				uvsI += 2;
			});
			indices.set([i + 2, i + 1, i, i + 2, i, i + 3], indicesI);
			indicesI += 6;
			i += 4;
		});
		let geo = new THREE.BufferGeometry();
		geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		geo.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
		geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
		geo.setIndex(new THREE.BufferAttribute(indices, 1));
		geo.computeVertexNormals();
		return geo;
	}
	/**
	 * Checks whether a poly mesh template has translucent textures.
	 * @param {PolyMeshTemplateFaceWithUvs[]} polyMeshTemplate
	 * @returns {boolean}
	 */
	#isPolyMeshTemplateTranslucent(polyMeshTemplate) {
		let allUvs = polyMeshTemplate.map(face => {
			let uvCoords = face.vertices.map(v => v.uv);
			let xs = uvCoords.map(([x]) => round(x * this.#imageBlobData.width));
			let ys = uvCoords.map(([, y]) => round((1 - y) * this.#imageBlobData.height));
			let minUvCoords = tuple([min(...xs), min(...ys)]);
			let maxUvCoords = tuple([max(...xs), max(...ys)]);
			let unscaledUvSize = vec2.sub(maxUvCoords, minUvCoords);
			let uv = [minUvCoords[0], minUvCoords[1]];
			let uvSize = [unscaledUvSize[0], unscaledUvSize[1]];
			return { uv, uvSize };
		});
		let uvs = Array.from(new JSONSet(allUvs));
		return uvs.some(({ uv, uvSize }) => {
			for(let x = uv[0]; x < uv[0] + uvSize[0]; x++) {
				for(let y = uv[1]; y < uv[1] + uvSize[1]; y++) {
					let i = (y * this.#imageBlobData.width + x) * 4;
					let alpha = this.#imageBlobData.data[i + 3];
					if(alpha > 0 && alpha < 255) { // any pixel with a non-full or non-empty alpha channel makes the entire geo translucent
						return true;
					}
				}
			}
			return false;
		});
	}
	/**
	 * Creates an instanced mesh from a group.
	 * @param {three.BufferGeometry} bufferGeo
	 * @param {Vec3[]} positions
	 * @param {three.Material} material
	 * @returns {three.InstancedMesh}
	 */
	#instanceBufferGeoAtPositions(bufferGeo, positions, material) { // todo: investigate better performance w/ InstancedBufferGeometry
		let instancedMesh = new THREE.InstancedMesh(bufferGeo, material, positions.length);
		let dummy = new THREE.Object3D();
		positions.forEach((pos, i) => {
			let vecPos = new THREE.Vector3(...pos);
			dummy.position.copy(vecPos);
			dummy.updateMatrix();
			instancedMesh.setMatrixAt(i, dummy.matrix);
		});
		return instancedMesh;
	}
	/**
	 * Merges multiple geometries into a single mesh then adds it to the scene. Shadows are enabled on the mesh.
	 * @param {three.BufferGeometry[]} geos
	 * @param {three.Material} material
	 */
	#mergeGeosAndAddToScene(geos, material) {
		let mergedGeo = BufferGeometryUtils.mergeGeometries(geos, false);
		let mesh = new THREE.Mesh(mergedGeo, material);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.userData.includeInGlbExport = true;
		this.#scene.add(mesh);
	}
	/**
	 * Expands the scene's instanced meshes into a new scene.
	 * @returns {three.Scene}
	 */
	#expandInstancedMeshes() {
		let scene = new THREE.Scene();
		this.#scene.traverse(obj => {
			if(obj.userData.includeInGlbExport) {
				scene.add(obj.clone());
				return;
			}
			if(!(obj instanceof THREE.InstancedMesh)) {
				return;
			}
			let dummy = new THREE.Object3D();
			for(let i = 0; i < obj.count; i++) {
				let mesh = new THREE.Mesh(obj.geometry, obj.material);
				obj.getMatrixAt(i, dummy.matrix);
				dummy.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
				scene.add(mesh);
			}
		});
		return scene;
	}
}

/** @import { PolyMeshTemplateFaceWithUvs } from "./PolyMeshMaker.types.ts" */
/** @import { Block, Vec3 } from "./common.types.ts" */
/** @import IStructure from "./structure/IStructure.ts" */
/** @import { PreviewPointLight } from "./PreviewRenderer.types.ts" */
/** @import { Controller, GUI } from "lil-gui" */
/** @import * as three from "three" */
```

## File: src/PreviewRenderer.types.ts
```typescript
import type { Color } from "three";
import type { Vec3 } from "./common.types.ts";

export type PreviewPointLight = {
	/** Position in Three.js space */
	pos: Vec3;
	/** A Three.js Color */
	col: Color;
	intensity: number;
};
```

## File: src/ResourcePackStack.js
```javascript
// Allows us to stack multiple resource packs on top of each other and get a singular resource, much like Minecraft would do.
// Currently this just grabs the vanilla resources.

import { all as mergeObjects } from "deepmerge";

import LocalResourcePack from "./LocalResourcePack.js";
import { jsonc, removeFalsies } from "./utils.js";
import fetchers from "./fetchers.js";

export default class ResourcePackStack {
	static #JSON_FILES_TO_MERGE = ["blocks.json", "textures/terrain_texture.json", "textures/flipbook_textures.json"];
	
	/** Whether or not there are any resource packs attached (apart from vanilla ofc) @type {boolean} */
	hasResourcePacks;
	/** @readonly @type {LocalResourcePack[]} */
	localResourcePacks;
	
	/**
	 * Creates a resource pack stack to get resources.
	 * @param {LocalResourcePack[]} [localResourcePacks] Local resource packs to apply. Front of the list is on top (i.e. applied first.)
	 */
	constructor(localResourcePacks = []) {
		this.localResourcePacks = localResourcePacks;
		this.hasResourcePacks = localResourcePacks.length > 0;
	}
	
	/**
	 * Fetches a resource pack file.
	 * @param {string} resourcePath
	 * @returns {Promise<Response>}
	 */
	async fetchResource(resourcePath) {
		let filePath = `resource_pack/${resourcePath}`;
		if(ResourcePackStack.#JSON_FILES_TO_MERGE.includes(resourcePath)) {
			let vanillaRes = await fetchers.vanillaData(filePath);
			let vanillaJson = await jsonc(vanillaRes.clone()); // clone it so it can be read later if need be (responses can only be read once)
			let resourcePackFiles = this.localResourcePacks.map(resourcePack => resourcePack.getFile(resourcePath));
			let resourcePackJsons = await Promise.all(removeFalsies(resourcePackFiles).map(file => jsonc(file)));
			resourcePackJsons.reverse(); // start with the lowest priority pack, so that they get overwritten by higher priority packs
			let allJsons = [vanillaJson, ...resourcePackJsons];
			if(allJsons.length == 1) { // if only the vanilla resources had this file, use that response
				return vanillaRes;
			}
			let mergedJson = mergeObjects(allJsons);
			console.debug(`Merged JSON file ${resourcePath}:`, mergedJson, "From:", allJsons);
			return new Response(JSON.stringify(mergedJson));
		}
		for(let localResourcePack of this.localResourcePacks) {
			let resource = localResourcePack.getFile(resourcePath);
			if(resource) {
				return new Response(resource);
			}
		}
		return await fetchers.vanillaData(filePath);
	}
}
```

## File: src/SpawnAnimationMaker.js
```javascript
import { exp, max } from "./utils.js";

export default class SpawnAnimationMaker {
	/** @readonly @type {HoloPrintConfig} */
	config;
	/** @readonly @type {I32Vec3 | Vec3} */
	structureSize;
	/** @readonly @type {SpawnAnimationBone[]} */
	#animatedBones = [];
	#totalAnimationLength = 0;
	/** @readonly @type {number} */
	#randomness;
	/**
	 * Creates a SpawnAnimationMaker for managing the spawn animation.
	 * @param {HoloPrintConfig} config
	 * @param {I32Vec3 | Vec3} structureSize
	 */
	constructor(config, structureSize) {
		this.config = config;
		this.structureSize = structureSize;
		
		let totalVolume = this.structureSize[0] * this.structureSize[1] * this.structureSize[2];
		this.#randomness = 2 - 1.9 * exp(-0.005 * totalVolume); // 100 -> ~0.85, 1000 -> ~1.99, asymptotic to 2
	}
	/**
	 * Adds a bone to the animation.
	 * @param {string} boneName
	 * @param {Vec3} blockPos
	 */
	addBone(boneName, blockPos) {
		this.#animatedBones.push({ boneName, blockPos });
	}
	/**
	 * Makes the animation and returns it.
	 * @returns {MinecraftAnimation}
	 */
	makeAnimation() {
		let delayRanking = this.#animatedBones.map(({ blockPos: [x, y, z] }) => this.#getDelayRank(x, y, z));
		let orderedRanking = this.#orderDelayRanking(delayRanking);
		let delays = orderedRanking.map(order => this.#calculateDelay(order));
		let bones = {};
		this.#animatedBones.forEach(({ boneName }, i) => {
			let delay = +delays[i].toFixed(2);
			bones[boneName] = this.#makeBoneAnimation(delay);
		});
		return {
			animation_length: this.#totalAnimationLength,
			bones
		};
	}
	/**
	 * Gets the rank of the delay of a spawn animation block based on its position. These are processed into a proper order then used in delay calculations.
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @returns {number}
	 */
	#getDelayRank(x, y, z) {
		return this.structureSize[0] - x + y + this.structureSize[2] - z;
	}
	/**
	 * Sorts and condenses a ranking into a proper order. Returns each original rank's value in the new order.
	 * @param {number[]} ranking E.g. [1, 5, 3, 5, 2, 8]
	 * @returns {number[]} E.g. [0, 3, 2, 3, 1, 4]
	 */
	#orderDelayRanking(ranking) {
		let offset = 0;
		let order = new Array(ranking.length);
		let mappedRankings = new Array(ranking.length);
		let sortedIndexedRanking = ranking.map((rank, i) => [rank, i]).sort(([a], [b]) => a - b);
		sortedIndexedRanking.forEach(([rank, originalI], i) => { // condense "gaps". e.g. [1, 2, 3, 3, 5, 5] becomes [1, 2, 3, 3, 4, 4]. this is so there aren't any large pauses in the animation and it flows continuously
			rank -= offset;
			let prev = order[i - 1] ?? -1;
			let gap = rank - prev;
			if(gap <= 1) {
				order[i] = rank;
			} else {
				offset += gap - 1;
				order[i] = prev + 1;
			}
			mappedRankings[originalI] = order[i];
		});
		return mappedRankings;
	}
	/**
	 * Calculates the animation delay for an individual bone based on its order.
	 * @param {number} order
	 * @returns {number}
	 */
	#calculateDelay(order) {
		return this.config.SPAWN_ANIMATION_LENGTH * 0.25 * (order + Math.random() * this.#randomness) + 0.05;
	}
	/**
	 * Makes the animation for a single bone.
	 * @param {number} delay
	 */
	#makeBoneAnimation(delay) {
		let animationEnd = Number((delay + this.config.SPAWN_ANIMATION_LENGTH).toFixed(2));
		this.#totalAnimationLength = max(this.#totalAnimationLength, animationEnd);
		let keyframes = [0, 0.2, 0.4, 0.6, 0.8, 1]; // this is smooth enough
		return {
			scale: this.#createAnimFromKeyframes(keyframe => {
				let keyframeValue = +this.#animationTimingFunc(keyframe).toFixed(2); // TWO SIG FIGS
				return [keyframeValue, keyframeValue, keyframeValue]; // has to be an array here...
			}, keyframes, delay)
		};
	}
	/**
	 * Creates an animation from keyframes.
	 * @param {(keyframe: number) => any} animFunc The function to be animated with keyframes
	 * @param {number[]} keyframes
	 * @param {number} delay
	 * @returns {Record<string, number>}
	 */
	#createAnimFromKeyframes(animFunc, keyframes, delay) {
		return Object.fromEntries(keyframes.map(keyframe => {
			let absoluteKeyframeTime = delay + keyframe * this.config.SPAWN_ANIMATION_LENGTH;
			return [absoluteKeyframeTime.toFixed(2), animFunc(keyframe)];
		}));
	}
	/**
	 * The timing function for each ghost block's animation.
	 * @param {number} x
	 * @returns {number}
	 */
	#animationTimingFunc(x) {
		return 1 - (1 - x) ** 3;
	}
}

/** @import { MinecraftAnimation } from "./minecraft.types.ts" */
/** @import { HoloPrintConfig, Vec3, I32Vec3 } from "./common.types.ts" */
/** @import { SpawnAnimationBone } from "./SpawnAnimationMaker.types.ts" */
```

## File: src/SpawnAnimationMaker.types.ts
```typescript
import type { Vec3 } from "./common.types.ts";

export type SpawnAnimationBone = {
	boneName: string;
	/** The block position (i.e. in-game blocks relative to the structure origin) */
	blockPos: Vec3;
};
```

## File: src/StructureDiagramMaker.js
```javascript
import { areArraysEqual, assert, average, ceil, fnv1a, getOffscreenCanvasContext, HashMap, hypot, max, min, sqrt, stringToImageData, toBlob, tuple, vec2 } from "./utils.js";
import WebGL2QuadRenderer from "./WebGL2QuadRenderer.js"; // dependency injection coming soon^tm

/** Padding in pixels to be added around the edges of isometric diagrams. */
const ISOMETRIC_DIAGRAM_PADDING = 8;
/** The highest resolution, in pixels, of a block's textures in the texture atlas. When structures are small, layer-by-layer diagrams are drawn at exactly this resolution, such that 1 block pixel is 1 diagram pixel. This intentionally loses detail for blocks which are angled or in some other way don't conform to the block grid (e.g. side torches), because keeping them at full detail inflates the pack size beyond what I am willing to accept. For larger structures, they will be scaled down anyway since the excess resolution won't be needed. */
const MAX_LAYER_DIAGRAM_BLOCK_RESOLUTION = 16;
/** Maximum resolution, in pixels, of each block in the isometric diagram. Each structure may use a lower resolution if it isn't needed. */
const MAX_ISOMETRIC_DIAGRAM_BLOCK_RESOLUTION = 64;
/** Minimum resolution, in pixels, of a renderer. On large structures, when the max diagram texture size is set low, WebGL rasterisation can miss blocks entirely for block icons, meaning that they become invisible. This ensures that renderers can never be too small (and really, at these tiny sizes, memory implications are negligible anyway). */
const MIN_RENDERER_RESOLUTION = 8;

export default class StructureDiagramMaker {
	/** @readonly @type {number} The maximum width and height, in pixels, of any diagram. Anything bigger than this is scaled down to fit. */
	#maxTextureSize;
	/** @readonly @type {number} Effective 2D block resolution (<= `MAX_LAYER_DIAGRAM_BLOCK_RESOLUTION`), shared across all structures. */
	#layerBlockResolution;
	/** @readonly @type {TexImageSource} */
	#texture;
	/** @readonly @type {WebGL2QuadRenderer | null} */
	#birdsEyeViewRenderer = null;
	
	/**
	 * @param {TexImageSource} texture The texture atlas to make block icons out of. Must not have texture outlines, as they look bad on diagrams.
	 * @param {Vec3[]} structureSizes
	 * @param {number} maxTextureSize The maximum width and height, in pixels, of any diagram. Anything bigger than this is scaled down to fit.
	 */
	constructor(texture, structureSizes, maxTextureSize) {
		assert(structureSizes.length > 0, "StructureDiagramMaker should receive at least one structure");
		
		this.#texture = texture;
		this.#maxTextureSize = maxTextureSize;
		this.#layerBlockResolution = this.#computeLayerBlockResolution(structureSizes);
		
		if(WebGL2QuadRenderer.isSupported()) {
			this.#birdsEyeViewRenderer = this.#makeRenderer(this.#layerBlockResolution * 3);
		} else {
			console.error("Cannot make structure diagrams - WebGL2 is not supported!");
		}
	}
	/**
	 * @param {Vec3[]} structureSizes
	 * @returns {number}
	 */
	#computeLayerBlockResolution(structureSizes) {
		let maxDim = max(...structureSizes.flatMap(([width, _, depth]) => [width, depth]));
		return min(MAX_LAYER_DIAGRAM_BLOCK_RESOLUTION, this.#maxTextureSize / maxDim);
	}
	/**
	 * @param {IStructure} structure
	 * @returns {number}
	 */
	#computeIsometricBlockResolution(structure) {
		let { width, height, depth } = structure;
		let available = this.#maxTextureSize - 2 * ISOMETRIC_DIAGRAM_PADDING;
		let fitW = available / ((width + depth) * 0.5);
		let fitH = available / ((0.5 * (width + depth - 2) + height + 1) / sqrt(3));
		return min(MAX_ISOMETRIC_DIAGRAM_BLOCK_RESOLUTION, fitW, fitH);
	}
	/**
	 * Derives isometric layout steps from a block resolution.
	 * @param {number} blockResolution
	 */
	#getIsometricLayout(blockResolution) {
		let isoBlockIconSize = blockResolution * 3;
		return {
			isoXStep: blockResolution * 0.5,
			isoXYZStep: blockResolution * 0.5 / sqrt(3),
			isoYYStep: blockResolution / sqrt(3),
			isoBlockIconSize,
			isoBlockIconOffset: isoBlockIconSize / 2
		};
	}
	/**
	 * Makes a `WebGL2QuadRenderer` for block icons at a given icon resolution, returning null if it couldn't be made.
	 * @param {number} iconResolution
	 * @returns {WebGL2QuadRenderer | null}
	 */
	#makeRenderer(iconResolution) {
		try {
			return new WebGL2QuadRenderer(max(MIN_RENDERER_RESOLUTION, iconResolution), this.#texture);
		} catch(e) {
			console.error(`Failed to initialise WebGL2QuadRenderer despite being 'supported' - ${e}`);
			return null;
		}
	}
	
	/**
	 * Makes a palette of birds-eye view block icons from a palette of poly mesh templates.
	 * @param {PolyMeshTemplateFaceWithUvs[][]} polyMeshTemplatePalette
	 * @returns {ImageBitmap[]}
	 */
	makeBirdsEyeViewBlockIconPalette(polyMeshTemplatePalette) {
		return polyMeshTemplatePalette.map(faces => this.#getIconForBlockFromFaces(faces, false, this.#birdsEyeViewRenderer));
	}
	/**
	 * Makes a palette of isometric block icons from a palette of poly mesh templates.
	 * @param {PolyMeshTemplateFaceWithUvs[][]} polyMeshTemplatePalette
	 * @param {WebGL2QuadRenderer} renderer
	 * @returns {ImageBitmap[]}
	 */
	makeIsometricViewBlockIconPalette(polyMeshTemplatePalette, renderer) {
		return polyMeshTemplatePalette.map(faces => this.#getIconForBlockFromFaces(faces, true, renderer));
	}
	/**
	 * Makes all the diagrams (3D isometric at index 0, 2D layers at index 1+) for an array of structures.
	 * @param {PolyMeshTemplateFaceWithUvs[][]} polyMeshTemplatePalette
	 * @param {IStructure[]} structures
	 * @returns {Promise<{ diagrams: Blob[], indices: number[][] }>}
	 */
	async makeDiagramsForStructures(polyMeshTemplatePalette, structures) {
		if(!this.#birdsEyeViewRenderer) {
			let errorImage = await toBlob(stringToImageData("Couldn't create diagrams"));
			let indices = structures.map(structure => (new Array(structure.height + 1)).fill(0));
			return {
				diagrams: [errorImage],
				indices
			};
		}
		
		let blockIconPalette = this.makeBirdsEyeViewBlockIconPalette(polyMeshTemplatePalette);
		
		/** @type {Promise<Blob>[]} */
		let diagramBlobPromises = [];
		/** @type {HashMap<number[], number, number>} */
		let diagramIndicesHashMap = new HashMap(indices => fnv1a(indices), areArraysEqual);
		/** @type {number[][]} */
		let diagramBlobIndices = new Array(structures.length);
		structures.forEach((structure, structureI) => {
			/** @type {number[]} */
			let diagramBlobIndicesForStructure = new Array(structure.height + 1);
			
			let isoBlockResolution = this.#computeIsometricBlockResolution(structure);
			let isometricRenderer = this.#makeRenderer(isoBlockResolution * 3);
			if(isometricRenderer) {
				let isometricBlockIconPalette = this.makeIsometricViewBlockIconPalette(polyMeshTemplatePalette, isometricRenderer);
				isometricRenderer.dispose();
				diagramBlobIndicesForStructure[0] = diagramBlobPromises.length;
				
				let isoDiagramPromise = this.#makeIsometricDiagramForStructure(isometricBlockIconPalette, structure, isoBlockResolution);
				diagramBlobPromises.push(isoDiagramPromise.catch(async e => {
					this.#disposeBlockIconPalette(isometricBlockIconPalette);
					console.error(`Failed to make isometric diagram: ${e}`, e?.stack);
					return await toBlob(stringToImageData("Couldn't create isometric diagram"));
				}).finally(() => this.#disposeBlockIconPalette(isometricBlockIconPalette)));
			} else {
				diagramBlobIndicesForStructure[0] = diagramBlobPromises.length;
				diagramBlobPromises.push(toBlob(stringToImageData("Couldn't create isometric diagram")));
			}
			
			// layer-by-layer diagrams are cached based on the hash of the palette indices on each layer. (Can't believe I had to implement a hash map myself in the big 26)
			for(let y = 0; y < structure.height; y++) {
				/** @type {number[]} */
				let indices = new Array(structure.width * structure.depth * 2);
				let indicesI = 0;
				for(let x = 0; x < structure.width; x++) {
					for(let z = 0; z < structure.depth; z++) {
						let paletteIndices = structure.getPaletteIndicesForBothLayers([x, y, z]);
						indices[indicesI++] = paletteIndices[0];
						indices[indicesI++] = paletteIndices[1];
					}
				}
				let layerKey = [structure.width, structure.depth, ...indices];
				let index = diagramIndicesHashMap.get(layerKey);
				if(index == undefined) {
					index = diagramBlobPromises.length;
					diagramIndicesHashMap.set(layerKey, index);
					diagramBlobPromises.push(this.#makeDiagramForLayer(blockIconPalette, indices, structure));
				}
				diagramBlobIndicesForStructure[y + 1] = index;
			}
			diagramBlobIndices[structureI] = diagramBlobIndicesForStructure;
		});
		
		// The new "using" statement is not yet widely supported, so I need to manually write this. esbuild can transpile it but it's soooo bloated. Maybe in 5 years...
		let diagramBlobs = await Promise.all(diagramBlobPromises);
		this.#disposeBlockIconPalette(blockIconPalette);
		
		return {
			diagrams: diagramBlobs,
			indices: diagramBlobIndices
		};
	}
	dispose() {
		this.#birdsEyeViewRenderer?.dispose();
	}
	/**
	 * Disposes all the `ImageBitmap`s in a block icon palette.
	 * @param {ImageBitmap[]} blockIconPalette
	 */
	#disposeBlockIconPalette(blockIconPalette) {
		blockIconPalette.forEach(imageBitmap => imageBitmap.close());
	}
	
	/**
	 * Gets the icon for a single block from an array of faces.
	 * @param {PolyMeshTemplateFaceWithUvs[]} faces
	 * @param {boolean} isometric
	 * @param {WebGL2QuadRenderer} renderer
	 * @returns {ImageBitmap}
	 */
	#getIconForBlockFromFaces(faces, isometric, renderer) {
		let faceData = faces.map(face => ({ normal: face.normal, vertices: face.vertices }));
		if(!isometric) {
			// check if the faces won't be visible when viewed from a bird's-eye view (e.g. cross_texture blocks). if this happens, we swizzle the y and z axes so it's effectively looking from the side.
			if(faceData.every(({ vertices }) => this.#isFaceInvisibleFromAbove(vertices))) {
				faceData = structuredClone(faceData);
				faceData.forEach(({ vertices }) => vertices.forEach(v => {
					v.pos = [v.pos[0], v.pos[2], 16 - v.pos[1]];
				}));
			}
		}
		let depthSortedFaceData = faceData.map(({ normal, vertices }) => {
			if(isometric) {
				return {
					normal,
					vertices,
					depth: average(vertices.map(({ pos: p }) => (16 - p[0]) + p[2] + p[1] * 2 * sqrt(3))) // it works
				};
			} else {
				return {
					normal,
					vertices,
					depth: average(vertices.map(({ pos: [, y] }) => y))
				};
			}
		}).sort((a, b) => a.depth - b.depth);
		
		// Convert face vertex data into flat inputs acceptable by the WebGL engine
		let quadRenderData = depthSortedFaceData.map(({ normal, vertices }) => {
			let positions = new Float32Array(8);
			let i = 0;
			if(isometric) {
				vertices.forEach(({ pos: p }) => {
					// idk how this works, I got chatgpt to do it. but I know it works
					positions[i++] = (64 - p[0] - p[2]) / 96;
					positions[i++] = (48 + (16 + p[2] - p[0] - 2 * p[1]) / sqrt(3)) / 96;
				});
			} else {
				vertices.forEach(({ pos: p }) => {
					positions[i++] = (32 - p[0]) / 48;
					positions[i++] = (p[2] + 16) / 48;
				});
			}
			let uvs = new Float32Array(8);
			i = 0;
			vertices.forEach(({ uv }) => {
				uvs[i++] = uv[0];
				uvs[i++] = 1 - uv[1];
			});
			let brightness = isometric? StructureDiagramMaker.computeFlatShading(normal) : 1;
			return { positions, uvs, brightness };
		});
		
		return renderer.render(quadRenderData);
	}
	/**
	 * @param {[PolyMeshTemplateVertexWithUv, PolyMeshTemplateVertexWithUv, PolyMeshTemplateVertexWithUv, PolyMeshTemplateVertexWithUv]} vertices
	 * @returns {boolean}
	 */
	#isFaceInvisibleFromAbove(vertices) {
		// coordinates from a bird's-eye view
		let coords = vertices.map(({ pos: p }) => [p[0], p[2]]);
		return vec2.equals(coords[0], coords[1]) || vec2.equals(coords[0], coords[2]) || vec2.equals(coords[0], coords[3]) || vec2.equals(coords[1], coords[2]) || vec2.equals(coords[1], coords[3]) || vec2.equals(coords[2], coords[3]);
	}
	/**
	 * Stitches block icons together using the standard 2d canvas.
	 * @param {ImageBitmap[]} blockIconPalette
	 * @param {number[]} blockIndices
	 * @param {IStructure} structure
	 * @returns {Promise<Blob>}
	 */
	async #makeDiagramForLayer(blockIconPalette, blockIndices, structure) {
		let can = new OffscreenCanvas(this.#layerBlockResolution * structure.width, this.#layerBlockResolution * structure.depth);
		let ctx = getOffscreenCanvasContext(can, "2d");
		// Explicit draw size so the icon stays centered even when its intrinsic (rounded WebGL) size differs from the exact float size by up to 0.5px.
		let iconDrawSize = this.#layerBlockResolution * 3;
		
		try {
			for(let x = 0; x < structure.width; x++) {
				for(let z = 0; z < structure.depth; z++) {
					// draw second layer first, so the first layer (the main layer) draws on top
					for(let layer = 1; layer >= 0; layer--) {
						let indexIndex = (x * structure.depth + z) * 2 + layer;
						let blockIconIndex = blockIndices[indexIndex];
						if(blockIconIndex in blockIconPalette) {
							// Offset by -1 * size so the 3x3 block icon (size * 3) is centered over grid cell (x, z)
							ctx.drawImage(blockIconPalette[blockIconIndex], (x - 1) * this.#layerBlockResolution, (z - 1) * this.#layerBlockResolution, iconDrawSize, iconDrawSize);
						}
						// not in blockIconPalette means it's an excluded block, e.g. air
					}
				}
			}
			return await can.convertToBlob();
		} catch(e) {
			let errorMessage = `Failed to draw image: ${e}`;
			console.error(errorMessage, e.stack);
			return await toBlob(stringToImageData(errorMessage));
		}
	}
	/**
	 * Stitches 3D isometric block icons together with depth sorting to make a 3D isometric diagram for the full structure.
	 * @param {ImageBitmap[]} isometricBlockIconPalette
	 * @param {IStructure} structure
	 * @param {number} blockResolution
	 * @returns {Promise<Blob>}
	 */
	async #makeIsometricDiagramForStructure(isometricBlockIconPalette, structure, blockResolution) {
		let { width, height, depth } = structure;
		let { isoXStep, isoXYZStep, isoYYStep, isoBlockIconSize, isoBlockIconOffset } = this.#getIsometricLayout(blockResolution);
		// Canvas bounds fitting tightly around projected isometric structure bounds plus `ISOMETRIC_DIAGRAM_PADDING`:
		let can = new OffscreenCanvas(ceil((width + depth) * isoXStep + 2 * ISOMETRIC_DIAGRAM_PADDING), ceil((width + depth - 2) * isoXYZStep + (height + 1) * isoYYStep + 2 * ISOMETRIC_DIAGRAM_PADDING));
		let ctx = getOffscreenCanvasContext(can, "2d");
		
		// Grid origin offsets to align minimum projected X and Y boundaries at `ISOMETRIC_DIAGRAM_PADDING`
		let offsetX = depth * isoXStep + ISOMETRIC_DIAGRAM_PADDING;
		let offsetY = height * isoYYStep + ISOMETRIC_DIAGRAM_PADDING;
		
		let blockDrawList = [];
		for(let y = 0; y < height; y++) {
			for(let x = 0; x < width; x++) {
				for(let z = 0; z < depth; z++) {
					let coords = tuple([x, y, z]);
					for(let layerI = 1; layerI >= 0; layerI--) {
						let blockIconIndex = structure.getPaletteIndex(coords, layerI);
						if(blockIconIndex in isometricBlockIconPalette) {
							// goofy maths for calculating depth and isometric coordinates (it works, trust trust)
							let diagramDepth = ((x + z) * height + y) * 2 - layerI;
							let isometricX = (x - z) * isoXStep + offsetX;
							let isometricY = (x + z) * isoXYZStep - y * isoYYStep + offsetY;
							let blockIcon = isometricBlockIconPalette[blockIconIndex];
							blockDrawList.push({
								pos: tuple([isometricX, isometricY]),
								blockIcon,
								depth: diagramDepth
							});
						}
					}
				}
			}
		}
		
		blockDrawList.sort((a, b) => a.depth - b.depth);
		try {
			blockDrawList.forEach(({ pos, blockIcon }) => {
				ctx.drawImage(blockIcon, pos[0] - isoBlockIconOffset, pos[1] - isoBlockIconOffset, isoBlockIconSize, isoBlockIconSize);
			});
			return await can.convertToBlob();
		} catch(e) {
			let errorMessage = `Failed to draw image: ${e}`;
			console.error(errorMessage);
			return await toBlob(stringToImageData(errorMessage));
		}
	}
	
	/**
	 * Calculates the brightness based on a face normal using flat shading. This is based on the MCBE entity.vertex shader (pre-Renderdragon at least).
	 * @param {Vec3} normal Face normal (normalised defensively here).
	 * @returns {number} Multiplier in [~0.45, 1]; top faces brightest.
	 */
	static computeFlatShading(normal) {
		// copied straight from entity.vertex lol
		const AMBIENT = 0.45;
		const XFAC = -0.1;
		const ZFAC = 0.1;
		
		let [nx, ny, nz] = normal;
		let len = hypot(...normal);
		if(len > 0) {
			nx /= len;
			ny /= len;
			nz /= len;
		} else {
			console.warn("Invalid surface normal!"); // ahhhhhhh
		}
		
		let yLight = (1 + ny) * 0.5;
		return yLight * (1 - AMBIENT) + nx * nx * XFAC + nz * nz * ZFAC + AMBIENT;
	}
}

/** @import { PolyMeshTemplateFaceWithUvs, PolyMeshTemplateVertexWithUv } from "./PolyMeshMaker.types.ts" */
/** @import { Vec3 } from "./common.types.ts" */
/** @import IStructure from "./structure/IStructure.ts" */
```

## File: src/SupabaseLogger.js
```javascript
import { addOrdinalSuffix, AsyncFactory, concatenateFiles, sha256, toHexadecimalString } from "./utils.js";

export default class SupabaseLogger extends AsyncFactory {
	/** @readonly @type {string} */
	projectUrl;
	/** @readonly @type {string} */
	apiKey;
	/** @type {SupabaseClient} */
	supabase;
	
	/**
	 * @param {string} projectUrl
	 * @param {string} apiKey
	 */
	constructor(projectUrl, apiKey) {
		super();
		this.projectUrl = projectUrl;
		this.apiKey = apiKey;
	}
	async init() {
		let supabaseLib = await import("@supabase/supabase-js");
		this.supabase = supabaseLib.createClient(this.projectUrl, this.apiKey);
	}
	/**
	 * Records the creation of a pack from structure files in a Supabase server, based on file hashes.
	 * @param {File[]} structureFiles
	 */
	async recordPackCreation(structureFiles) {
		console.info("Hashing structure files...");
		let fullFileHashes = await Promise.all(structureFiles.map(async structureFile => toHexadecimalString(await sha256(structureFile))));
		let shortFileHashes = fullFileHashes.map(fullFileHash => fullFileHash.slice(0, 8));
		// console.log(`Full file hashes: ${fullFileHashes}`);
		let combinedFileHash = toHexadecimalString(await sha256(concatenateFiles(structureFiles))).slice(0, 8);
		console.debug(`Finished hashing structure files! Together: ${combinedFileHash}, individually:`, shortFileHashes);
		
		let res = await this.supabase.rpc("record_structure_usage_v2", {
			file_hashes: shortFileHashes,
			combined_file_hash: combinedFileHash
		});
		if(res.status == 200) {
			console.info(`Successfully logged structure hash to database!\nThis is the ${addOrdinalSuffix(res.data)} time this structure has been used.`);
		} else {
			throw new Error(`SupabaseLogger error ${res.error.code}: ${res.error.message}`);
		}
	}
}

/** @import { SupabaseClient } from "@supabase/supabase-js" */
```

## File: src/TextureAtlas.js
```javascript
import { ceil, floor, fnv1a, getPixelBytesInSquare, hexColorToClampedTriplet, JSONSet, max, range, stringToImageData, toImage, toImageData, tuple, vec2 } from "./utils.js";
import TGALoader from "tga-js"; // We could use dynamic import as this isn't used all the time but it's so small it won't matter
import potpack from "potpack";
import ResourcePackStack from "./ResourcePackStack.js";

export default class TextureAtlas {
	/** @readonly @type {Data.TextureAtlasMappings["blocksDotJsonPatches"]} */
	#blocksDotJsonPatches;
	/** @readonly @type {Data.TextureAtlasMappings["blocksToUseCarriedTextures"]} */
	#blocksToUseCarriedTextures;
	/** @readonly @type {Data.TextureAtlasMappings["transparentBlocks"]} */
	#transparentBlocks;
	/** @readonly @type {Data.TextureAtlasMappings["terrainTextureTints"]} */
	#terrainTextureTints;
	
	/** @readonly @type {object} */
	blocksDotJson;
	/** @readonly @type {object} */
	terrainTexture;
	
	/** @readonly @type {Map<string, number>} */
	#flipbookTexturesAndSizes = new Map();
	
	/** @readonly @type {HoloPrintConfig} */
	config;
	/** @readonly @type {ResourcePackStack} */
	resourcePackStack;
	
	/**
	 * When makeAtlas() is called, this will contain UV coordinates and sizes for texture references passed as input, as well as cropping information.
	 * @type {ImageUv[]}
	 */
	uvs;
	
	/**
	 * Contains the actual texture atlas images: [textureName, imageBlob]
	 * @type {[string, Blob][]}
	 */
	imageBlobs;
	/** @type {number} */
	textureWidth;
	/** @type {number} */
	textureHeight;
	/** @type {number} */
	textureFillEfficiency; // how much of the texture atlas is filled with images
	/**
	 * The full opacity texture atlas before outlines are added, and before the outline upscale. Structure diagrams use this because they shouldn't have texture outlines.
	 * @type {OffscreenCanvas}
	 */
	atlasWithoutOutlinesCanvas;
	
	/**
	 * Creates a texture atlas for loading images from texture references and stitching them together.
	 * @param {HoloPrintConfig} config
	 * @param {ResourcePackStack} resourcePackStack
	 * @param {object} blocksDotJson
	 * @param {object} terrainTexture
	 * @param {object[]} flipbookTextures
	 * @param {Data.TextureAtlasMappings} textureAtlasMappings
	 */
	constructor(config, resourcePackStack, blocksDotJson, terrainTexture, flipbookTextures, textureAtlasMappings) {
		this.config = config;
		this.resourcePackStack = resourcePackStack;
		this.blocksDotJson = blocksDotJson;
		this.terrainTexture = terrainTexture;
		
		this.#blocksDotJsonPatches = textureAtlasMappings.blocksDotJsonPatches;
		this.#blocksToUseCarriedTextures = textureAtlasMappings.blocksToUseCarriedTextures;
		this.#transparentBlocks = textureAtlasMappings.transparentBlocks;
		this.#terrainTextureTints = textureAtlasMappings.terrainTextureTints;
		
		textureAtlasMappings.missingFlipbookTextures.forEach(terrainTextureKey => {
			this.#flipbookTexturesAndSizes.set(terrainTextureKey, 1);
		});
		flipbookTextures.map(entry => {
			this.#flipbookTexturesAndSizes.set(entry["flipbook_texture"], entry["replicate"] ?? 1);
		});
		// console.log("Flipbook textures -> sizes:", this.#flipbookTexturesAndSizes);
	}
	/**
	 * Makes a texture atlas from texture references and changes the textureUvs property to reflect UV coordinates and sizes for each reference.
	 * @param {TextureReference[]} textureRefs
	 */
	async makeAtlas(textureRefs) {
		console.log("Texture references:", textureRefs);
		
		let textureImageIndices = new Array(textureRefs.length);
		
		let allTextureFragments = new JSONSet();
		textureRefs.forEach((textureRef, textureRefI) => {
			let texturePath;
			let tint = textureRef.tint;
			let tintLikePng = false;
			let opacity = 1;
			if("texturePathOverride" in textureRef) {
				texturePath = textureRef.texturePathOverride;
			} else {
				let terrainTextureKey = this.#getTerrainTextureKeyFromTextureReference(textureRef);
				let blockName = textureRef.blockName;
				let variant = textureRef.variant;
				let texturePathAndTint = this.#getTexturePathAndTint(terrainTextureKey, variant);
				texturePath = texturePathAndTint.texturePath;
				if(tint == undefined && "tint" in texturePathAndTint) {
					tint = hexColorToClampedTriplet(texturePathAndTint.tint);
				}
				if(!texturePath) {
					console.error(`No texture for block ${blockName} on side ${textureRef.textureFace}!`);
					texturePath = this.#getTexturePathAndTint("missing", -1).texturePath;
				}
				
				if(terrainTextureKey in this.#terrainTextureTints.terrainTextureKeys) {
					let tintColor = this.#terrainTextureTints.terrainTextureKeys[terrainTextureKey];
					if(typeof tintColor == "object") {
						tintLikePng = tintColor.tintLikePng;
						tintColor = tintColor.tint;
					}
					if(tintColor.startsWith("#")) {
						tint = hexColorToClampedTriplet(tintColor);
					} else if(tintColor in this.#terrainTextureTints.colors) {
						tint = hexColorToClampedTriplet(this.#terrainTextureTints.colors[tintColor]);
					} else {
						console.error(`No tint color ${tintColor}`);
					}
				}
				if(blockName in this.#transparentBlocks) {
					opacity = this.#transparentBlocks[blockName];
				}
			}
			let textureFragment = {
				texturePath,
				tint,
				tintLikePng,
				opacity,
				uv: textureRef.uv,
				uvSize: textureRef.uvSize
			};
			allTextureFragments.add(textureFragment);
			textureImageIndices[textureRefI] = allTextureFragments.indexOf(textureFragment);
			// console.table({
			// 	index: tintedTexturePaths.indexOf(pathAndTint),
			// 	uv: textureRef.uv,
			// 	uvSize: textureRef.uvSize
			// })
		});
		
		console.log("Texture image indices:", textureImageIndices);
		console.log("Texture fragments:", allTextureFragments);
		
		let imageFragments = await this.#loadImages(allTextureFragments);
		console.log("Image fragments:", imageFragments);
		
		let imageUvs = await this.#stitchTextureAtlas(imageFragments);
		console.log("Image UVs:", imageUvs);
		
		this.uvs = textureImageIndices.map(i => imageUvs[i]);
	}
	
	/**
	 * Finds the terrain texture key for a texture reference.
	 * @param {TextureReference} textureRef
	 * @returns {string}
	 */
	#getTerrainTextureKeyFromTextureReference(textureRef) {
		if("terrainTextureOverride" in textureRef) {
			return textureRef.terrainTextureOverride;
		}
		let blockName = textureRef.blockName;
		if(!(blockName in this.blocksDotJson) && blockName in this.#blocksDotJsonPatches) {
			blockName = this.#blocksDotJsonPatches[blockName];
			if(blockName?.includes(".")) {
				// This is only from this.blocksDotJsonPatches to indicate patches
				textureRef.variant = +blockName.split(".")[1]; // Hacky but that's a future me problem
				blockName = blockName.split(".")[0];
			}
		}
		let blockEntry = this.blocksDotJson[blockName];
		let terrainTextureKeys;
		if(!blockEntry) {
			// console.log(textureRef, blockName, textureRef.blockName);
			console.error(`No blocks.json entry for ${blockName}`);
			return "missing";
		}
		
		let textureFace = textureRef.textureFace;
		if(textureFace.startsWith("carried")) {
			if("carried_textures" in blockEntry) {
				if(textureFace == "carried") {
					if(typeof blockEntry["carried_textures"] == "string") {
						return blockEntry["carried_textures"];
					} else {
						console.error(`Specified carried texture for ${blockName} has multiple faces!`);
					}
				} else {
					let carriedFace = textureFace.slice(8);
					let terrainTextureKey = blockEntry["carried_textures"][carriedFace];
					if(["west", "east", "north", "south"].includes(carriedFace)) {
						terrainTextureKey ??= blockEntry["carried_textures"]["side"];
					}
					if(carriedFace == undefined) {
						console.error(`Could not find carried texture face ${carriedFace}!`);
					} else {
						return terrainTextureKey;
					}
				}
			} else {
				console.error(`No carried texture for ${blockName}!`, textureRef, blockEntry);
			}
		}
		if(this.#blocksToUseCarriedTextures.includes(blockName)) {
			terrainTextureKeys = blockEntry["carried_textures"];
			console.debug(`Using carried textures for ${blockName}`);
			if(!terrainTextureKeys) {
				console.error(`Specified carried texture in blocks.json for ${blockName} could not be found`);
			}
		}
		terrainTextureKeys ??= blockEntry["textures"]; // values in blocks.json are keys in terrain_texture.json
		if(!terrainTextureKeys) {
			if("carried_textures" in blockEntry) {
				terrainTextureKeys = blockEntry["carried_textures"];
				console.error(`No texture entry found in blocks.json for block ${blockName}! Defaulting to carried texture.`);
			} else {
				terrainTextureKeys = "missing"; // magenta-black checkerboard
				console.error(`No texture entry found in blocks.json for block ${blockName}!`);
			}
		}
		
		// This can either be an object with directions as keys and terrain texture keys as values, or a singular terrain texture key
		if(typeof terrainTextureKeys == "string") { // Only 1 terrain texture key for all faces
			return terrainTextureKeys;
		} else {
			return terrainTextureKeys[textureFace] ?? terrainTextureKeys[["west", "east", "north", "south"].includes(textureFace)? "side" : function() {
				let defaultFace = Object.keys(terrainTextureKeys)[0];
				console.error(`Unknown texture face ${textureFace}! Defaulting to ${defaultFace}.`);
				return defaultFace;
			}()];
		}
	}
	/**
	 * Gets the texture path from a terrain texture key and variant index.
	 * @param {string} terrainTextureKey
	 * @param {number} variant
	 * @returns {{ texturePath: string, tint?: string }}
	 */
	#getTexturePathAndTint(terrainTextureKey, variant) {
		let texturePath = this.terrainTexture["texture_data"][terrainTextureKey]?.["textures"];
		if(!texturePath) {
			console.warn(`No terrain_texture.json entry for key ${terrainTextureKey}`);
			return;
		}
		if(Array.isArray(texturePath)) {
			if(texturePath.length == 1) {
				texturePath = texturePath[0];
			} else {
				if(variant == -1) {
					console.warn(`Unknown variant to choose for terrain texture key ${terrainTextureKey}; defaulting to the first`);
					variant = 0;
				}
				if(!(variant in texturePath)) {
					console.error(`Variant ${variant} does not exist for terrain texture key ${terrainTextureKey}! Defaulting to 0.`);
					variant = 0;
				}
				// Array of textures typically means variants and other similar blocks not yet flattened. As of writing (1.21.20.21) the past few previews have had lots of flattenings on them. I hope it continues this way!
				texturePath = texturePath[variant];
			}
		}
		if(typeof texturePath == "string") {
			return { texturePath };
		} else {
			return {
				texturePath: texturePath["path"],
				tint: texturePath["overlay_color"] ?? texturePath["tint_color"] // grass uses overlay_color, lilypads use tint_color :/
			};
		}
	}
	/**
	 * Loads images from a set of tinted texture paths.
	 * @param {JSONSet<TextureFragment>} textureFragments
	 * @returns {Promise<ImageFragment[]>}
	 */
	async #loadImages(textureFragments) {
		let tgaLoader = new TGALoader();
		let allTexturePathsWithDuplicates = Array.from(textureFragments).map(textureFragment => textureFragment.texturePath);
		let allTexturePaths = Array.from(new Set(allTexturePathsWithDuplicates));
		console.log(`Loading ${allTexturePaths.length} images for ${textureFragments.size} texture fragments`);
		let allImageData = await Promise.all(allTexturePaths.map(async texturePath => {
			let imageRes = await this.resourcePackStack.fetchResource(`${texturePath}.png`);
			let imageData;
			let imageIsTga = false;
			let imageNotFound = false;
			if(imageRes.ok) {
				let image = await toImage(imageRes);
				imageData = await toImageData(image);
			} else {
				imageRes = await this.resourcePackStack.fetchResource(`${texturePath}.tga`);
				if(imageRes.ok) {
					console.debug(`Fetched TGA texture ${texturePath}.tga`);
					imageIsTga = true;
					tgaLoader.load(new Uint8Array(await imageRes.arrayBuffer()));
					imageData = tgaLoader.getImageData();
				} else {
					console.warn(`No texture found at ${texturePath}`);
					imageData = stringToImageData(texturePath);
					imageNotFound = true;
				}
			}
			return { imageData, imageIsTga, imageNotFound };
		}));
		let imageDataByTexturePath = new Map(allTexturePaths.map((texturePath, i) => [texturePath, allImageData[i]]));
		return await Promise.all(Array.from(textureFragments).map(async ({ texturePath, tint, tintLikePng, opacity, uv: sourceUv, uvSize }) => {
			let { imageData, imageIsTga, imageNotFound } = imageDataByTexturePath.get(texturePath);
			if(imageNotFound) {
				sourceUv = [0, 0];
				uvSize = [1, 1];
			}
			if(tint) {
				imageData = this.#tintImageData(imageData, tint, imageIsTga && !tintLikePng); // with tinted TGA images, only full-opacity pixels are tinted, and transparent pixels are made opaque.
				// console.debug(`Tinted ${texturePath} with tint ${tint}!`);
			}
			if(opacity != 1) {
				imageData = this.#setImageDataOpacity(imageData, opacity);
			}
			let { width: imageW, height: imageH } = imageData;
			
			if(this.#flipbookTexturesAndSizes.has(texturePath)) {
				let size = this.#flipbookTexturesAndSizes.get(texturePath);
				imageH = imageW = imageW / size; // animation would be a pain and totally overkill
				console.debug(`Using flipbook texture for ${texturePath}, ${imageW}x${imageH}`);
			}
			let sourceX = sourceUv[0] * imageW;
			let sourceY = sourceUv[1] * imageH;
			let w = uvSize[0] * imageW;
			let h = uvSize[1] * imageH;
			let crop = null;
			if(Number.isInteger(sourceX) && Number.isInteger(sourceY) && Number.isInteger(w) && Number.isInteger(h)) { // textures with non-integral dimensions are wacky so I'm just going to say they can't be cropped... there aren't many blocks like this fortunately
				let old = { sourceX, sourceY, w, h };
				let extremePixels = this.#findMostExtremePixels(imageData, sourceX, sourceY, w, h);
				sourceX = extremePixels.minX;
				w = extremePixels.maxX - extremePixels.minX + 1;
				sourceY = extremePixels.minY;
				h = extremePixels.maxY - extremePixels.minY + 1;
				crop = {
					x: (sourceX - old.sourceX) / old.w,
					y: (sourceY - old.sourceY) / old.h,
					w: w / old.w,
					h: h / old.h
				};
				if(crop.x != 0 || crop.y != 0 || crop.w != 1 || crop.h != 1) {
					console.debug(`Cropped part of image ${texturePath} to`, crop);
				} else {
					crop = null;
				}
			}
			let imageFragment = { imageData, sourceX, sourceY, w, h };
			if(crop) {
				imageFragment.crop = crop;
			}
			return imageFragment;
		}));
	}
	/**
	 * Stitches together images with widths and heights, and puts the UV coordinates and sizes into the textureUvs property.
	 * @param {ImageFragment[]} imageFragments
	 * @returns {Promise<ImageUv[]>}
	 */
	async #stitchTextureAtlas(imageFragments) {
		/** @type {Map<number, [ImageFragment, number]>} */
		let hashBuckets = new Map();
		/** @type {Map<number, number>} */
		let identicalFragmentIndices = new Map();
		imageFragments.forEach((imageFragment, i) => {
			imageFragment["i"] = i; // Keep order as potpack shuffles them
			let pixelsHash = this.#hashPixels(imageFragment);
			if(hashBuckets.has(pixelsHash)) {
				let [oldFrag, oldI] = hashBuckets.get(pixelsHash);
				if(oldFrag.w == imageFragment.w && oldFrag.h == imageFragment.h) {
					if(this.#checkImageDataEquivalence(oldFrag.imageData, imageFragment.imageData, oldFrag.sourceX, oldFrag.sourceY, imageFragment.sourceX, imageFragment.sourceY, imageFragment.w, imageFragment.h)) {
						identicalFragmentIndices.set(i, oldI);
						imageFragment.w = 0; // prevent potpack from giving space to them (these fragments aren't used anyway)
						imageFragment.h = 0;
						return;
					}
					console.debug("Extremely rare hash collision! 0.000000023283% chance!");
				}
			}
			hashBuckets.set(pixelsHash, [imageFragment, i]);
			imageFragment["actualSize"] = [imageFragment.w, imageFragment.h]; // since we're modifying w/h, we need to keep references to everything before.
			imageFragment["offset"] = [0, 0];
			// fractional dimensions don't work with js canvas, so we need to extract the full part of the texture we need, but keep the uv positions fractional
			if(!Number.isInteger(imageFragment.sourceX)) {
				imageFragment["offset"][0] = imageFragment.sourceX % 1;
				imageFragment.w += imageFragment["offset"][0];
				imageFragment.sourceX = floor(imageFragment.sourceX);
			}
			if(!Number.isInteger(imageFragment.sourceY)) {
				imageFragment["offset"][1] = imageFragment.sourceY % 1;
				imageFragment.h += imageFragment["offset"][1];
				imageFragment.sourceY = floor(imageFragment.sourceY);
			}
			if(!Number.isInteger(imageFragment.w)) {
				imageFragment.w = ceil(imageFragment.w);
			}
			if(!Number.isInteger(imageFragment.h)) {
				imageFragment.h = ceil(imageFragment.h);
			}
		});
		let imageFragments2 = imageFragments.map(imageFragment => ({ ...imageFragment }));
		let packing1 = potpack(imageFragments);
		let packing2 = potpack(imageFragments2.sort((a, b) => b.h - a.h || b.w - a.w)); // width presort
		let packing = packing1.fill > packing2.fill? packing1 : packing2; // In my testing on 100 structures, 10 times no width presort was better, 17 times width presort was better, and the rest they were equal. On average, width presorting improved space efficiency by 0.1385%. Since potpack takes just a couple ms, it's best to look at both and take the better one.
		if(packing2.fill >= packing1.fill) {
			imageFragments = imageFragments2;
		}
		imageFragments.sort((a, b) => a["i"] - b["i"]);
		/** @type {(ImageFragment & Rectangle & { actualSize: Vec2, offset: Vec2 })[]} */
		// @ts-expect-error
		let packedImageFragments = imageFragments;
		this.textureWidth = packing.w;
		this.textureHeight = packing.h;
		this.textureFillEfficiency = packing.fill;
		console.info(`Packed texture atlas with ${(this.textureFillEfficiency * 100).toFixed(2)}% space efficiency!`);
		
		let can = new OffscreenCanvas(this.textureWidth, this.textureHeight);
		let ctx = can.getContext("2d");
		
		console.log("Packed image fragments:", imageFragments);
		let imageUvs = new Array(packedImageFragments.length);
		packedImageFragments.forEach((imageFragment, i) => {
			if(identicalFragmentIndices.has(i)) {
				imageUvs[i] = imageUvs[identicalFragmentIndices.get(i)];
				return;
			}
			let sourcePos = tuple([imageFragment.sourceX, imageFragment.sourceY]);
			let destPos = tuple([imageFragment.x, imageFragment.y]);
			let textureSize = tuple([imageFragment.w, imageFragment.h]);
			// console.table({sourcePos,textureSize,destPos})
			ctx.putImageData(imageFragment.imageData, ...vec2.sub(destPos, sourcePos), ...sourcePos, ...textureSize); // when drawing image data, the source position and size crop it but don't move it back to the original destination position, meaning it must be offset.
			let imageUv = {
				uv: vec2.add(destPos, imageFragment["offset"]),
				uvSize: imageFragment["actualSize"],
				transparency: NaN
			};
			if("crop" in imageFragment) {
				imageUv.crop = imageFragment.crop;
			}
			imageUvs[i] = imageUv;
		});
		let canImageData = can.getContext("2d").getImageData(0, 0, can.width, can.height);
		let transparencies = this.#getImageFragmentTransparencies(canImageData, packedImageFragments);
		transparencies.forEach((transparency, i) => {
			imageUvs[i].transparency = transparency;
		});
		
		// ctx = can.getContext("2d");
		// ctx.fillStyle = "#00F3";
		// ctx.fillRect(0, 0, can.width, can.height);
		this.atlasWithoutOutlinesCanvas = can;
		if(this.config.TEXTURE_OUTLINE_WIDTH != 0) {
			can = TextureAtlas.addTextureOutlines(can, packedImageFragments, this.config, canImageData);
		}
		
		if(this.config.MULTIPLE_OPACITIES) {
			let opacities = range(4, 10).map(x => x / 10); // lowest is 40% opacity. note that we do division after to avoid floating-point errors.
			this.imageBlobs = await Promise.all(opacities.map(async opacity => [`hologram_opacity_${opacity}`, await this.#setCanvasOpacity(can, opacity).convertToBlob()], 42)); // the custom definitions for .map() in globalPatches.d.ts mess it up because it's uses promises. I've tried to exclude promises from them but it doesn't work. however, adding a second parameter makes it fall back to the native definition. (it's supposed to change the this value, but arrow functions don't have their own this value.)
		} else {
			can = this.#setCanvasOpacity(can, this.config.OPACITY);
			this.imageBlobs = [["hologram", await can.convertToBlob()]];
		}
		
		// document.body.appendChild(await toImage(this.imageBlobs.at(-1)[1]));
		
		return imageUvs;
	}
	/**
	 * Finds the coordinates of the most extreme outer pixels of an image.
	 * @param {ImageData} imageData
	 * @param {number} [startX] The x-position to start looking at
	 * @param {number} [startY] The y-position to start looking at
	 * @param {number} [imageW] The width of the portion of the image to look at
	 * @param {number} [imageH] The height of the portion of the image to look at
	 * @returns {{ minX: number, minY: number, maxX: number, maxY: number }}
	 */
	#findMostExtremePixels(imageData, startX = 0, startY = 0, imageW = imageData.width, imageH = imageData.height) {
		let minX = imageData.width, minY = imageData.height, maxX = 0, maxY = 0;
		for(let y = startY; y < startY + imageH; y++) {
			for(let x = startX; x < startX + imageW; x++) {
				let i = (y * imageData.width + x) * 4;
				if(imageData.data[i + 3] > 0) {
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
			}
		}
		return { minX, minY, maxX, maxY };
	}
	/**
	 * Calculates the FNV-1a hash of all pixels in an image fragment.
	 * @param {ImageFragment} imageFragment
	 * @returns {number}
	 */
	#hashPixels({ imageData, sourceX, sourceY, w, h }) {
		return fnv1a(getPixelBytesInSquare(imageData, sourceX, sourceY, w, h));
	}
	/**
	 * Checks if fragments from two `ImageData`s are exactly the same.
	 * @param {ImageData} id1
	 * @param {ImageData} id2
	 * @param {number} x1
	 * @param {number} y1
	 * @param {number} x2
	 * @param {number} y2
	 * @param {number} w
	 * @param {number} h
	 */
	#checkImageDataEquivalence(id1, id2, x1, y1, x2, y2, w, h) {
		for(let y = 0; y < h; y++) {
			for(let x = 0; x < w; x++) {
				let i1 = ((y1 + y) * id1.width + x1 + x) * 4;
				let i2 = ((y2 + y) * id2.width + x2 + x) * 4;
				for(let ch = 0; ch < 4; ch++) {
					if(id1.data[i1 + ch] != id2.data[i2 + ch]) {
						return false;
					}
				}
			}
		}
		return true;
	}
	/** Add an outline around each texture.
	 * @param {OffscreenCanvas} ogCan
	 * @param {Rectangle[]} imagePositions
	 * @param {HoloPrintConfig} config
	 * @param {ImageData} [imageData]
	 * @returns {OffscreenCanvas}
	 */
	static addTextureOutlines(ogCan, imagePositions, config, imageData) {
		let scale = max(1 / config.TEXTURE_OUTLINE_WIDTH, 1);
		let can = new OffscreenCanvas(ogCan.width * scale, ogCan.height * scale);
		
		let ctx = can.getContext("2d");
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(ogCan, 0, 0, can.width, can.height);
		
		imageData ??= ogCan.getContext("2d").getImageData(0, 0, ogCan.width, ogCan.height);
		
		ctx.fillStyle = config.TEXTURE_OUTLINE_COLOR;
		ctx.globalAlpha = config.TEXTURE_OUTLINE_OPACITY;
		
		/** difference: will compare alpha channel difference; threshold: will only look at the second pixel @type {("threshold" | "difference")} */
		const TEXTURE_OUTLINE_ALPHA_DIFFERENCE_MODE = "threshold";
		/** If using difference mode, will draw outline between pixels with at least this much alpha difference; if using threshold mode, will draw outline on pixels next to pixels with an alpha less than or equal to this @type {number} */
		const TEXTURE_OUTLINE_ALPHA_THRESHOLD = 0;
		// @ts-expect-error
		const compareAlpha = (currentPixel, otherPixel) => TEXTURE_OUTLINE_ALPHA_DIFFERENCE_MODE == "difference"? currentPixel - otherPixel >= TEXTURE_OUTLINE_ALPHA_THRESHOLD : otherPixel <= TEXTURE_OUTLINE_ALPHA_THRESHOLD;
		
		imagePositions.forEach(({ x: startX, y: startY, w, h }) => {
			let endX = startX + w;
			let endY = startY + h;
			for(let x = startX; x < endX; x++) {
				for(let y = startY; y < endY; y++) {
					let i = (y * ogCan.width + x) * 4;
					let alpha = imageData.data[i + 3];
					if(alpha == 0) {
						continue;
					}
					let left = x == startX || compareAlpha(alpha, imageData.data[i - 4 + 3]);
					let right = x == endX - 1 || compareAlpha(alpha, imageData.data[i + 4 + 3]);
					let top = y == startY || compareAlpha(alpha, imageData.data[i - ogCan.width * 4 + 3]);
					let bottom = y == endY - 1 || compareAlpha(alpha, imageData.data[i + ogCan.width * 4 + 3]);
					let topLeft = x == startX && y == startY || compareAlpha(alpha, imageData.data[i - 4 - ogCan.width * 4 + 3]);
					let topRight = x == endX - 1 && y == startY || compareAlpha(alpha, imageData.data[i + 4 - ogCan.width * 4 + 3]);
					let bottomLeft = x == startX && y == endY - 1 || compareAlpha(alpha, imageData.data[i - 4 + ogCan.width * 4 + 3]);
					let bottomRight = x == endX - 1 && y == endY - 1 || compareAlpha(alpha, imageData.data[i + 4 + ogCan.width * 4 + 3]);
					if(left) {
						ctx.fillRect(x * scale, y * scale + 1, 1, scale - 2);
					}
					if(right) {
						ctx.fillRect(x * scale + scale - 1, y * scale + 1, 1, scale - 2);
					}
					if(top) {
						ctx.fillRect(x * scale + 1, y * scale, scale - 2, 1);
					}
					if(bottom) {
						ctx.fillRect(x * scale + 1, y * scale + scale - 1, scale - 2, 1);
					}
					if(top || left || topLeft) {
						ctx.fillRect(x * scale, y * scale, 1, 1);
					}
					if(top || right || topRight) {
						ctx.fillRect(x * scale + scale - 1, y * scale, 1, 1);
					}
					if(bottom || left || bottomLeft) {
						ctx.fillRect(x * scale, y * scale + scale - 1, 1, 1);
					}
					if(bottom || right || bottomRight) {
						ctx.fillRect(x * scale + scale - 1, y * scale + scale - 1, 1, 1);
					}
				}
			}
		});
		
		return can;
	}
	/**
	 * Calculates the transparencies of each image fragment.
	 * @param {ImageData} imageData
	 * @param {Rectangle[]} imageFragments
	 * @returns {number[]}
	 */
	#getImageFragmentTransparencies(imageData, imageFragments) {
		return imageFragments.map(({ x: startX, y: startY, w, h }) => {
			let totalTransparency = 0;
			for(let x = startX; x < startX + w; x++) {
				for(let y = startY; y < startY + h; y++) {
					let i = (y * imageData.width + x) * 4;
					totalTransparency += 255 - imageData.data[i + 3];
				}
			}
			return totalTransparency / (w * h);
		});
	}
	#setCanvasOpacity(can, alpha) {
		let newCan = new OffscreenCanvas(can.width, can.height);
		let ctx = newCan.getContext("2d", {
			willReadFrequently: true
		});
		ctx.globalAlpha = alpha;
		ctx.drawImage(can, 0, 0);
		return newCan;
	}
	/**
	 * Tints some image data.
	 * @param {ImageData} imageData
	 * @param {Vec3} tint
	 * @param {boolean} onlyAlpha If only full opacity pixels should be tinted and transparent pixels made opaque, or not
	 * @returns {ImageData}
	 */
	#tintImageData(imageData, tint, onlyAlpha = false) {
		let newImageData = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height);
		let data = newImageData.data;
		for(let i = 0; i < data.length; i += 4) {
			if(!onlyAlpha || data[i + 3] == 255) { // only tint pixels with full opacity. this happens with grass block side, where the top has full opacity and the bottom has 0 opacity.
				data[i] *= tint[0];
				data[i + 1] *= tint[1];
				data[i + 2] *= tint[2];
			}
			if(onlyAlpha) {
				data[i + 3] = 255;
			}
		}
		return newImageData;
	}
	/**
	 * Sets the opacity of pixels in some image data.
	 * @param {ImageData} imageData
	 * @param {number} opacity 0-1
	 * @returns {ImageData}
	 */
	#setImageDataOpacity(imageData, opacity) {
		let newImageData = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height);
		let data = newImageData.data;
		for(let i = 0; i < data.length; i += 4) {
			data[i + 3] *= opacity;
		}
		return newImageData;
	}
}

/** @import { HoloPrintConfig, Vec3, Vec2, Rectangle } from "./common.types.ts" */
/** @import { TextureReference, TextureFragment, ImageFragment, ImageUv } from "./TextureAtlas.types.ts" */
/** @import * as Data from "./data/schemas" */
```

## File: src/TextureAtlas.types.ts
```typescript
import type { Rectangle, Vec2, Vec3 } from "./common.types.ts";

export type TextureReference = {
	/** UV coordinates */
	uv: Vec2;
	/** UV size */
	uvSize: Vec2;
	/** Block ID to get the texture from */
	blockName: string;
	/** Which face's texture to use */
	textureFace: string;
	/** Which terrain_texture.json variant to use */
	variant: number;
	/** An overriding texture file path to look at */
	texturePathOverride?: string;
	/** A terrain texture key override; will override blockName and textureFace */
	terrainTextureOverride?: string;
	/** A tint override */
	tint?: Vec3;
};
export type TextureFragment = {
	texturePath: string;
	tint?: Vec3;
	tintLikePng?: boolean;
	opacity: number;
	uv: Vec2;
	uvSize: Vec2;
};
export type ImageFragment = {
	imageData: ImageData;
	/** Width */
	w: number;
	/** Height */
	h: number;
	sourceX: number;
	sourceY: number;
	crop?: Rectangle;
};
export type ImageUv = {
	uv: Vec2;
	uvSize: Vec2;
	transparency: number;
	crop?: Rectangle;
};
```

## File: src/utils.js
```javascript
// yes there is a lot here. but before splitting it up it was 1000+ lines just in one file.

export * from "./utils/arrays.js";
export * from "./utils/containers.js";
export * from "./utils/conversions.js";
export * from "./utils/coordinates.js";
export * from "./utils/dom.js";
export * from "./utils/fileInputs.js";
export * from "./utils/files.js";
export * from "./utils/misc.js";
export * from "./utils/images.js";
export * from "./utils/math.js";
export * from "./utils/meta.js";
export * from "./utils/molang.js";
export * from "./utils/objects.js";
export * from "./utils/strings.js";
export * from "./utils/translations.js";
export * as vec2 from "./utils/vec2.js";
export * as vec3 from "./utils/vec3.js";
```

## File: src/WebGL2QuadRenderer.js
```javascript
// Disclaimer: This is mostly AI-generated, I did not have the willpower to go through tutorial hell again
// I have some experience with WebGL beforehand but writing it is never fun

import vertexShaderSource from "./WebGL2QuadRendererShader.vertex.glsl" with { type: "text" };
import fragmentShaderSource from "./WebGL2QuadRendererShader.fragment.glsl" with { type: "text" };
import { getOffscreenCanvasContext } from "./utils.js";

/** A lightweight WebGL 2 utility to render arbitrary quads directly to an `ImageBitmap`. */
export default class WebGL2QuadRenderer {
	/** @readonly @type {number} */
	size;
	/** @readonly @type {WebGL2RenderingContextButSmarter<OffscreenCanvas>} */
	#gl;
	/** @readonly @type {WebGLProgram} */
	#program;
	/** @readonly @type {WebGLTexture} */
	#glTexture;
	/** @readonly @type {WebGLBuffer} */
	#positionBuffer;
	/** @readonly @type {WebGLBuffer} */
	#uvBuffer;
	/** @readonly @type {WebGLBuffer} */
	#brightnessBuffer;
	/** @readonly @type {WebGLBuffer} */
	#indexBuffer;
	/** @readonly @type {GLint} */
	#posLoc;
	/** @readonly @type {GLint} */
	#uvLoc;
	/** @readonly @type {GLint} */
	#brightnessLoc;
	
	/** @returns {boolean} */
	static isSupported() {
		return typeof WebGL2RenderingContext != "undefined";
	}
	
	/**
	 * @param {number} size Resolution of the output canvas (width and height)
	 * @param {TexImageSource} textureImage Source image for the texture
	 */
	constructor(size, textureImage) {
		this.size = size;
		
		let canvas = new OffscreenCanvas(size, size);
		let gl = getOffscreenCanvasContext(canvas, "webgl2", { 
			preserveDrawingBuffer: true,
			antialias: false 
		});
		if(!gl) {
			throw new Error("WebGL 2 not supported.");
		}
		this.#gl = gl;
		
		let vertexShader = this.#createShader(gl.VERTEX_SHADER, vertexShaderSource);
		let fragmentShader = this.#createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
		
		this.#program = gl.createProgram();
		gl.attachShader(this.#program, vertexShader);
		gl.attachShader(this.#program, fragmentShader);
		gl.linkProgram(this.#program);
		// deleting them here doesn't actually delete them, it just indicates that they can be deleted if the program is deleted
		gl.deleteShader(vertexShader);
		gl.deleteShader(fragmentShader);
		if(!gl.getProgramParameter(this.#program, gl.LINK_STATUS)) {
			let errorInfo = this.#gl.getProgramInfoLog(this.#program);
			gl.deleteProgram(this.#program);
			throw new Error(`Failed to link program: ${errorInfo}`);
		}
		
		this.#posLoc = gl.getAttribLocation(this.#program, "a_position");
		this.#uvLoc = gl.getAttribLocation(this.#program, "a_uv");
		this.#brightnessLoc = gl.getAttribLocation(this.#program, "a_brightness");
		
		this.#positionBuffer = gl.createBuffer();
		this.#uvBuffer = gl.createBuffer();
		this.#brightnessBuffer = gl.createBuffer();
		this.#indexBuffer = gl.createBuffer();
		
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
		
		this.#glTexture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, this.#glTexture);
		gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	}
	
	/**
	 * Renders a list of independent quads and returns the compiled `ImageBitmap`.
	 * @param {{ positions: F32Vec8, uvs: F32Vec8, brightness?: number }[]} quads Array of position/UV/brightness pairings. Brightness defaults to 1.
	 * @returns {ImageBitmap}
	 */
	render(quads) {
		let gl = this.#gl; // I wish JS would just let me write #gl. What else could the # mean?!?! SMHHHH
		
		gl.viewport(0, 0, this.size, this.size);
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.useProgram(this.#program);
		
		let quadCount = quads.length;
		let positions = new Float32Array(quadCount * 8);
		let uvs = new Float32Array(quadCount * 8);
		let brightnesses = new Float32Array(quadCount * 4);
		let indices = new Uint16Array(quadCount * 6);
		// batch everything into a single draw call!
		quads.forEach(({ positions: quadPositions, uvs: quadUvs, brightness = 1 }, i) => {
			positions.set(quadPositions, i * 8);
			uvs.set(quadUvs, i * 8);
			brightnesses.fill(brightness, i * 4, i * 4 + 4);
			let vertexOffset = i * 4;
			let indexOffset = i * 6;
			indices[indexOffset] = vertexOffset;
			indices[indexOffset + 1] = vertexOffset + 1;
			indices[indexOffset + 2] = vertexOffset + 2;
			indices[indexOffset + 3] = vertexOffset;
			indices[indexOffset + 4] = vertexOffset + 2;
			indices[indexOffset + 5] = vertexOffset + 3;
		});
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.#positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STREAM_DRAW);
		gl.enableVertexAttribArray(this.#posLoc);
		gl.vertexAttribPointer(this.#posLoc, 2, gl.FLOAT, false, 0, 0);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.#uvBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STREAM_DRAW);
		gl.enableVertexAttribArray(this.#uvLoc);
		gl.vertexAttribPointer(this.#uvLoc, 2, gl.FLOAT, false, 0, 0);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.#brightnessBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, brightnesses, gl.STREAM_DRAW);
		gl.enableVertexAttribArray(this.#brightnessLoc);
		gl.vertexAttribPointer(this.#brightnessLoc, 1, gl.FLOAT, false, 0, 0);
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.#indexBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STREAM_DRAW);
		
		gl.drawElements(gl.TRIANGLES, quadCount * 6, gl.UNSIGNED_SHORT, 0);
		
		return gl.canvas.transferToImageBitmap();
	}
	/** Frees all GPU resources associated with the renderer. */
	dispose() {
		this.#gl.deleteBuffer(this.#positionBuffer);
		this.#gl.deleteBuffer(this.#uvBuffer);
		this.#gl.deleteBuffer(this.#brightnessBuffer);
		this.#gl.deleteBuffer(this.#indexBuffer);
		this.#gl.deleteTexture(this.#glTexture);
		this.#gl.deleteProgram(this.#program);
	}
	
	/**
	 * Creates and compiles a WebGL shader because nothing is easy in WebGL :(
	 * @param {WebGLRenderingContext["VERTEX_SHADER"] | WebGLRenderingContext["FRAGMENT_SHADER"]} type
	 * @param {string} source
	 * @returns {WebGLShader}
	 */
	#createShader(type, source) {
		let shader = this.#gl.createShader(type);
		this.#gl.shaderSource(shader, source);
		this.#gl.compileShader(shader);
		if(!this.#gl.getShaderParameter(shader, this.#gl.COMPILE_STATUS)) {
			let errorInfo = this.#gl.getShaderInfoLog(shader);
			this.#gl.deleteShader(shader);
			console.error(errorInfo, source);
			throw new Error(`Failed to create shader ${type}: ${errorInfo}`);
		}
		return shader;
	};
}

/** @import { F32Vec8 } from "./common.types.ts" */
```

## File: src/WebGL2QuadRendererShader.fragment.glsl
```glsl
#version 300 es
precision mediump float;

in vec2 v_uv;
in float v_brightness;
uniform sampler2D u_texture;
out vec4 outColor;

void main() {
	vec4 tex = texture(u_texture, v_uv);
	outColor = vec4(tex.rgb * v_brightness, tex.a);
}
```

## File: src/WebGL2QuadRendererShader.vertex.glsl
```glsl
#version 300 es

in vec2 a_position;
in vec2 a_uv;
in float a_brightness;
out vec2 v_uv;
out float v_brightness;

void main() {
	vec2 clipSpace = (a_position * 2.) - 1.; // maps coordinates: [0, 1] -> [-1, 1]
	gl_Position = vec4(clipSpace * vec2(1., -1.), 0., 1.);
	v_uv = a_uv;
	v_brightness = a_brightness;
}
```

## File: supabase/create_daily_logs_table.sql
```sql
-- Not shown here: RPS policy to allow select only for all users

CREATE TABLE public.daily_logs (
	day date NOT NULL DEFAULT now(),
	structure_count integer NULL,
	structure_combination_count integer NULL,
	pack_count integer NULL,
	CONSTRAINT daily_logs_pkey primary key (day)
) TABLESPACE pg_default;
```

## File: supabase/create_pack_counts_table.sql
```sql
CREATE TABLE private.pack_counts (
	category text NOT NULL,
	count integer NOT NULL,
	CONSTRAINT pack_counts_pkey PRIMARY KEY (category),
	CONSTRAINT pack_counts_category_check CHECK ((length(category) < 50))
) tablespace pg_default;
```

## File: supabase/create_structure_hashes_table.sql
```sql
CREATE TABLE private.structure_hashes (
	hash character VARYING NOT NULL,
	count smallint NOT NULL,
	CONSTRAINT structure_hashes_pkey PRIMARY KEY (hash),
	CONSTRAINT structure_hashes_hash_check CHECK ((length((hash)::text) = 8))
) tablespace pg_default;
```

## File: supabase/log_counts_cron.sql
```sql
CREATE OR REPLACE FUNCTION private.log_counts_v2 ()
RETURNS void AS $$
DECLARE
	current_structure_count int;
	current_structure_combination_count int;
	current_pack_count int;
BEGIN
	SELECT count(*) INTO current_structure_count FROM private.structure_hashes;
	SELECT count(*) INTO current_structure_combination_count FROM private.combined_structure_hashes;
	SELECT count INTO current_pack_count FROM private.pack_counts WHERE category = 'total';
	
	INSERT INTO public.daily_logs (structure_count, structure_combination_count, pack_count)
	VALUES (current_structure_count, current_structure_combination_count, current_pack_count);
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = '';

SELECT cron.schedule('daily_logging', '0 0 * * *', 'SELECT private.log_counts_v2();'); -- every day at 00:00

SELECT * FROM cron.job;
```

## File: supabase/record_structure_usage.sql
```sql
-- This function is in the public schema, accessible by anyone with the public key.
-- This records the usage of each individual structure file through its hash, as well as usage of the combined file hash (when dealing with multiple structures).
-- It also increments the total count in the private pack_counts table.

CREATE OR REPLACE FUNCTION record_structure_usage_v2 (file_hashes varchar[], combined_file_hash varchar)
RETURNS int AS $$
DECLARE
	combined_file_hash_count int; -- How many times the combined file hash has been recorded
	file_hash varchar;
BEGIN
	-- Validate all file hashes before inserting anything
	IF NOT combined_file_hash ~* '^[0-9a-f]{8}$' THEN
		RAISE EXCEPTION 'Illegal combined file hash; please report this on GitHub!';
	END IF;
	FOREACH file_hash IN ARRAY file_hashes LOOP
		IF NOT file_hash ~* '^[0-9a-f]{8}$' THEN
			RAISE EXCEPTION 'Illegal file hash; please report this on GitHub!';
		END IF;
	END LOOP;
	
	-- Update the combined file hash, and each individual file hash
	UPDATE private.combined_structure_hashes
	SET count = count + 1
	WHERE hash = combined_file_hash
	RETURNING count INTO combined_file_hash_count;
	IF NOT FOUND THEN
		INSERT INTO private.combined_structure_hashes (hash, count)
		VALUES (combined_file_hash, 1);
		combined_file_hash_count := 1;
	END IF;
	
	FOREACH file_hash IN ARRAY file_hashes LOOP
		UPDATE private.structure_hashes
		SET count = count + 1
		WHERE hash = file_hash;
		IF NOT FOUND THEN
			INSERT INTO private.structure_hashes (hash, count)
			VALUES (file_hash, 1);
		END IF;
	END LOOP;
	
	-- Increase total pack counter
	UPDATE private.pack_counts
	SET count = count + 1
	WHERE category = 'total';
	IF NOT FOUND THEN
		INSERT INTO private.pack_counts (category, count)
		VALUES ('total', 1); -- should never happen but can't hurt
	END IF;
	
	RETURN combined_file_hash_count;
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = '';
```

## File: tests/checkBlockTranslationCoverage/index.js
```javascript
import { testOnSourceCode } from "../headlessBrowserTestRunner.js";

testOnSourceCode(async page => {
	await page.evaluate(async () => {
		/** @type {typeof import("../../src/ResourcePackStack.js").default} */
		const ResourcePackStack = (await import("../ResourcePackStack.js")).default;
		/** @type {typeof import("../../src/MaterialList.js").default} */
		const MaterialList = (await import("../MaterialList.js")).default;
		/** @type {typeof import("../../src/HoloPrint.js")} */
		const HoloPrint = await import("../HoloPrint.js");
		/** @type {typeof import("../../src/utils.js").jsonc} */
		const jsonc = (await import("../utils.js")).jsonc;
		/** @type {typeof import("../../src/fetchers.js").default} */
		const fetchers = (await import("../fetchers.js")).default;
		
		let rps = new ResourcePackStack();
		let [blockMetadata, itemMetadata, materialListMappings, translationFile] = await Promise.all([
			fetchers.vanillaData("metadata/vanilladata_modules/mojang-blocks.json").then(res => res.json()),
			fetchers.vanillaData("metadata/vanilladata_modules/mojang-items.json").then(res => res.json()),
			fetch("../data/materialListMappings.json").then(res => jsonc(res)),
			rps.fetchResource("texts/en_US.lang").then(res => res.text())
		]);
		let blockNames = [];
		blockMetadata["data_items"].forEach(block => {
			let blockName = block.name.replace(/^minecraft:/, "");
			if(["hard_", "element_", "colored_torch_"].some(prefix => blockName.startsWith(prefix)) || ["chemical_heat", "compound_creator", "lab_table", "material_reducer", "underwater_torch"].includes(blockName)) { // chemistry features
				return;
			}
			if(HoloPrint.IGNORED_BLOCKS.includes(blockName)) {
				return;
			}
			blockNames.push(blockName);
		});
		
		let materialList = new MaterialList(blockMetadata, itemMetadata, materialListMappings, translationFile);
		blockNames.forEach(blockName => materialList.add(blockName));
		console.log(JSON.stringify(materialList.export()));
	});
	return true;
});
```

## File: tests/checkBlockTranslationCoverage/package.json
```json
{
	"name": "check_block_translation_coverage",
	"type": "module",
	"scripts": {
		"test": "node index.js"
	},
	"devDependencies": {
		"@actions/core": "^3.0.1",
		"mime-types": "^3.0.1",
		"puppeteer": "^25.12.0"
	}
}
```

## File: tests/testSampleStructures/index.js
```javascript
import * as ghActionsCore from "@actions/core";
import * as fs from "fs";
import * as path from "path";

import { test, plainTextHeaders, browserEngine } from "../headlessBrowserTestRunner.js";

const packUploadDir = path.join(import.meta.dirname, "../completedPacks");
if(!fs.existsSync(packUploadDir)) {
	fs.mkdirSync(packUploadDir);
}
const screenshotUploadDir = path.join(import.meta.dirname, "../screenshots");
if(!fs.existsSync(screenshotUploadDir)) {
	fs.mkdirSync(screenshotUploadDir);
}
const glbUploadDir = path.join(import.meta.dirname, "../glbModels");
if(!fs.existsSync(glbUploadDir)) {
	fs.mkdirSync(glbUploadDir);
}

test(async page => {
	let testStructurePaths = [];
	fs.readdirSync(path.join(import.meta.dirname, "../sampleStructures")).forEach(filePath => {
		if(!filePath.endsWith(".mcstructure")) {
			ghActionsCore.error(`The tests/testStructures folder can only have .mcstructure files; found ${filePath}!`);
		}
		testStructurePaths.push(path.join(import.meta.dirname, "../../tests/sampleStructures", filePath));
	});
	
	let totalTime = 0;
	let packsCreated = 0;
	for(let structurePath of testStructurePaths) {
		await page.reload();
		let structureFileName = structurePath.substring(structurePath.lastIndexOf("/") + 1);
		let structureFileContent = fs.readFileSync(structurePath).toString("base64");
		try {
			totalTime += await page.evaluate(async (structureFileName, structureFileContent, browserEngine) => {
				/** @type {typeof import("../../src/HoloPrint.js")} */
				const HoloPrint = await import("../index.js"); // testing workflow makes index.js export everything from HoloPrint.js
				
				console.group(`Testing ${structureFileName}...`);
				let structureFileBinaryData = atob(structureFileContent);
				let bytes = new Uint8Array(structureFileBinaryData.length);
				for(let i = 0; i < bytes.length; i++) {
					bytes[i] = structureFileBinaryData.charCodeAt(i);
				}
				let structureFile = new File([bytes], structureFileName);
				let previewCont = document.querySelector("#previewCont");
				let startTime = performance.now();
				let { pack, previews } = await HoloPrint.makePack(structureFile, {
					SPAWN_ANIMATION_ENABLED: false,
					PREVIEW_BLOCK_LIMIT: browserEngine == "chrome"? Infinity : 0, // preview renderer doesn't work on headless Firefox
					SHOW_PREVIEW_SKYBOX: false,
					SHOW_PREVIEW_WIDGETS: false
				}, undefined, previewCont);
				let elapsedTime = performance.now() - startTime;
				if(browserEngine == "chrome") {
					await Promise.all((await previews ?? []).map(async previewRenderer => {
						let glbFile = await previewRenderer.exportGlb().catch(e => {
							console.error(`Failed to export GLB: ${e}, ${e.stack}`);
							return null;
						});
						if(!glbFile) {
							return;
						}
						let response = await fetch("/", {
							method: "POST",
							body: glbFile,
							headers: {
								"Content-Type": glbFile.type,
								"Content-Location": glbFile.name,
								"X-File-Kind": "glb"
							}
						}).catch(e => {
							console.error(`Failed to upload GLB: ${e}, ${e.stack}`);
							return null;
						});
						if(response && !response.ok) {
							console.error(`Failed to upload GLB ${glbFile.name}: HTTP ${response.status}`);
						}
					}));
				}
				
				await fetch("/", {
					method: "POST",
					body: pack,
					headers: {
						"Content-Type": pack.type,
						"Content-Location": pack.name
					}
				}).catch(e => console.error(`Failed to upload pack: ${e}, ${e.stack}`));
				
				return elapsedTime;
			}, path.basename(structureFileName), structureFileContent, browserEngine);
			packsCreated++;
		} catch(e) {
			console.error(`Failed to generate pack: ${e}, ${e.stack}`);
		}
		ghActionsCore.endGroup();
	}
	let timePerPack = totalTime / packsCreated;
	console.info(`Finished creating ${packsCreated}/${testStructurePaths.length} resource packs in ${+totalTime.toFixed(0) / 1000}s (${+timePerPack.toFixed(0) / 1000}s/pack)!`);
	
	return packsCreated == testStructurePaths.length;
}, (req, res, page) => {
	if(req.method == "POST") { // a completed pack or exported GLB is being uploaded
		let isGlbFile = req.headers["x-file-kind"] == "glb";
		let dataChunks = [];
		req.on("data", chunk => {
			dataChunks.push(chunk);
		});
		req.on("end", () => {
			let fileBuffer = Buffer.concat(dataChunks);
			let fileName = req.headers["content-location"];
			let fileBasename = path.basename(fileName);
			let filePath = path.join(isGlbFile? glbUploadDir : packUploadDir, fileBasename);
			
			fs.writeFile(filePath, fileBuffer, async err => {
				if(browserEngine == "chrome" && !isGlbFile) {
					try {
						let previewImage = await page.waitForSelector("#previewCont > canvas");
						await previewImage?.screenshot({
							path: path.join(screenshotUploadDir, `${fileBasename.slice(0, fileBasename.indexOf("."))}.png`),
							omitBackground: true
						});
					} catch(e) {
						console.error(`Failed to get screenshot for completed pack ${filePath}:`, e);
					}
				}
				
				if(err) {
					ghActionsCore.error(`Failed to save file to ${filePath}: ${err}`);
					res.writeHead(500, plainTextHeaders);
					res.end(`Failed to save file to ${filePath}: ${err}`);
					return;
				}
				res.writeHead(200, plainTextHeaders);
				res.end(`Saved completed ${isGlbFile? "GLB model" : "pack"} to ${filePath}`);
			});
		});
	}
});
```

## File: tests/testSampleStructures/package.json
```json
{
	"name": "test_sample_structures",
	"type": "module",
	"scripts": {
		"test": "npm run build -w root --include-workspace-root -- -- --export-holoprint-lib && node index.js"
	},
	"devDependencies": {
		"@actions/core": "^3.0.1",
		"mime-types": "^3.0.1",
		"puppeteer": "^25.3.0"
	}
}
```

## File: tests/validateJsonData/index.js
```javascript
import * as ghActionsCore from "@actions/core";
import * as fs from "fs";
import * as path from "path";
import Ajv from "ajv";
import stripJsonComments from "strip-json-comments";

let ajv = new Ajv({
	allErrors: true
});

try {
	process.chdir(path.resolve(import.meta.dirname, "../../src/data"));
	validateJsonFiles();
} catch(e) {
	ghActionsCore.setFailed(`Action failed with error: ${e.message}`);
}

function validateJsonFiles() {
	let jsonFiles = [];
	let files = fs.readdirSync("./");
	files.forEach(filePath => {
		if(filePath.endsWith(".json")) {
			jsonFiles.push(filePath);
		}
	});
	jsonFiles.forEach(filePath => {
		let content = fs.readFileSync(filePath, "utf8");
		let jsonContent = JSON.parse(stripJsonComments(content));
		let schemaUrl = jsonContent["$schema"];
		
		if(schemaUrl) {
			fetchSchemaAndValidate(filePath, jsonContent, schemaUrl);
		} else {
			ghActionsCore.warning(`No $schema property found in ${filePath}`);
		}
	});
}
function fetchSchemaAndValidate(filePath, jsonContent, schemaUrl) {	
	try {
		let schema = JSON.parse(fs.readFileSync(schemaUrl, "utf8"));
		let validate = ajv.compile(schema);
		let valid = validate(jsonContent);
		if(valid) {
			ghActionsCore.info(`${filePath} is valid.`);
		} else {
			ghActionsCore.setFailed(`${filePath} is invalid:\n${validate.errors.map(e => `- Property ${e.instancePath || "/"} ${e.message}`).join("\n")}`);
			ghActionsCore.startGroup("Full error details:");
			ghActionsCore.info(JSON.stringify(validate.errors));
			ghActionsCore.endGroup();
		}
	} catch(e) {
		ghActionsCore.setFailed(`Failed to fetch schema from ${schemaUrl} for ${filePath}: ${e.message}`);
	}
}
```

## File: tests/validateJsonData/package.json
```json
{
	"name": "validate_json_data",
	"type": "module",
	"scripts": {
		"test": "node index.js"
	},
	"devDependencies": {
		"@actions/core": "^3.0.1",
		"ajv": "^8.17.1",
		"strip-json-comments": "^5.0.3"
	}
}
```

## File: tests/headlessBrowserTestRunner.js
```javascript
import * as ghActionsCore from "@actions/core";
import * as fs from "fs";
import * as path from "path";
import * as http from "http";
import puppeteer from "puppeteer";
import * as mime from "mime-types";

export const browserEngine = process.argv[2]?.toLowerCase() ?? "chrome";
export const plainTextHeaders = {
	"Content-Type": "text/plain"
};

/**
 * @param {(page: puppeteer.Page) => Promise<boolean>} testBody
 * @param {(req: http.IncomingMessage, res: http.ServerResponse, page: puppeteer.Page) => void} [httpReqFunc]
 * @param {string} [codeDirectory]
 */
export async function test(testBody, httpReqFunc, codeDirectory = "dist") {
	let indexPage = await fs.promises.readFile(path.join(import.meta.dirname, `../${codeDirectory}/index.html`), "utf-8");
	let headImportMap = indexPage.match(/<script type="importmap">[^]+?<\/script>/)[0];
	indexPage = indexPage.replace(/<head>[^]+<\/body>/, `
		<head>${headImportMap}</head>
		<body style="background: transparent;">
			<div id="previewCont"></div>
		</body>
	`);
	
	let browser, page;
	
	let server = http.createServer((req, res) => {
		if(req.method == "GET") {
			if(req.url == "/") {
				res.writeHead(200, {
					"Content-Type": "text/html"
				});
				res.write(indexPage);
				res.end();
				return;
			}
			
			let filePath = path.join(import.meta.dirname, `../${codeDirectory}`, req.url); // serve files from the root directory
			fs.stat(filePath, (err, stats) => {
				if(err || !stats.isFile()) {
					let errorMessage = `File ${filePath} not found!`;
					console.error(errorMessage);
					res.writeHead(404, plainTextHeaders);
					res.end(errorMessage);
					return;
				}
				
				const fileStream = fs.createReadStream(filePath);
				res.writeHead(200, {
					"Content-Type": mime.lookup(req.url) || "text/plain"
				});
				fileStream.pipe(res);
			});
		}
		httpReqFunc?.(req, res, page);
	});
	server.listen(8080, () => {
		console.log("Server listening on http://localhost:8080!");
	});
	
	let status = {}; // we modify status.passedTest inside this function so we need to pass a reference
	({ browser, page } = await setupBrowserAndPage(status));
	
	let passedTest = await testBody(page).catch(e => {
		console.error("Failed test!", e);
		return false;
	});
	
	await browser.close();
	server.close();
	
	if(passedTest && status.passedTest) {
		console.log("Passed test!");
		process.exit(0);
	} else {
		console.error(`Failed test with ${status.errors} errors and ${status.warnings} warnings!`);
		process.exit(1);
	}
}
/**
 * @param {(page: puppeteer.Page) => Promise<boolean>} testBody
 * @param {(req: http.IncomingMessage, res: http.ServerResponse, page: puppeteer.Page) => Promise<void>} [httpReqFunc]
 */
export async function testOnSourceCode(testBody, httpReqFunc) {
	await test(testBody, httpReqFunc, "src");
}

async function setupBrowserAndPage(status) {
	status.passedTest = true;
	status.errors = 0;
	status.warnings = 0;
	
	let browser = await puppeteer.launch({
		browser: browserEngine,
		args: ["--no-sandbox"]
	});
	
	let page = await browser.newPage();
	await page.setViewport({ // bigger for screenshots
		width: 1920,
		height: 1080
	});
	page.setDefaultTimeout(5000);
	page.on("console", log => {
		let logOrigin = log.location()?.url;
		let logText = log.text();
		if(logOrigin && (!logOrigin?.startsWith("http://localhost:8080/") && !logOrigin?.startsWith("pptr:evaluate;")) || logText.toLowerCase().includes("three.js") || logText.toLowerCase().includes("webgl")) {
			return;
		}
		switch(log.type()) {
			case "log": {
				ghActionsCore.debug(logText);
				break;
			}
			case "info": {
				ghActionsCore.info(logText);
				break;
			}
			case "error": {
				if(log.location().lineNumber == undefined) { // In Chrome, resources that fail to load throw an error but there isn't a line (or column) number, so this filters those messages out
					break;
				}
				ghActionsCore.error(logText);
				status.passedTest = false;
				status.errors++;
				break;
			}
			case "warn": {
				ghActionsCore.warning(logText);
				status.passedTest = false;
				status.warnings++;
				break;
			}
			case "debug": {
				ghActionsCore.debug(`Debug: ${logText}`);
				break;
			}
			case "startGroup":
			case "startGroupCollapsed": {
				ghActionsCore.startGroup(logText);
				break;
			}
			case "endGroup": {
				ghActionsCore.endGroup();
				break;
			}
			default: {
				ghActionsCore.info(`${log.type()}: ${logText}`);
				ghActionsCore.notice(`Unknown log type: ${log.type()}`);
			}
		}
	});
	
	await page.goto("http://localhost:8080", {
		waitUntil: "networkidle0"
	}); // Must use a HTTP server in order to be able to load the test script
	
	return { browser, page };
}
```

## File: tests/tsconfig.json
```json
{
	"extends": "../tsconfig.json",
	"compilerOptions": {
		"types": ["node"]
	},
	"include": ["**/*.js"]
}
```

## File: .gitattributes
```
* text=auto
**/package-lock.json binary
```

## File: .gitignore
```
**/node_modules
dist
tests/completedPacks
tests/screenshots
tests/glbModels
```

## File: globalPatches.d.ts
```typescript
// Fixes a few issues with TypeScript types.

import { TypedArray } from "three"; // tysm three (smh ts)
import FileInputTable from "./src/components/FileInputTable";
import ItemCriteriaInput from "./src/components/ItemCriteriaInput";
import LilGui from "./src/components/LilGui";
import ResizingInput from "./src/components/ResizingInput";
import SimpleLogger from "./src/components/SimpleLogger";
import Vec3Input from "./src/components/Vec3Input";
import { onEvent, onEvents, onEventAndNow } from "./src/utils";
import { Tuple } from "./src/common.types.ts";

type IsNumberLiteral<T> = T extends number? number extends T? false : true : false;

declare global {
	interface Array<T> {
		// the bits at the end indicate that if the array has extra properties, only the numeric ones (the indices) will be in the return object
		map<U extends any[], This extends readonly unknown[]>(this: This, callbackfn: (value: T, index: number, array: This) => [...U]): { [K in keyof This]: K extends number | `${number}`? U : never };
		map<U, This extends readonly unknown[]>(this: This, callbackfn: (value: T, index: number, array: This) => U): { [K in keyof This]: K extends number | `${number}`? U : never };
	}
	interface ArrayConstructor {
		from<T extends TypedArray & { length: number }>(typedArray: T): Tuple<number, T["length"]>;
	}
	interface Float32ArrayConstructor {
		new<T extends number[]>(elements: [...T]): Float32Array & (IsNumberLiteral<T["length"]> extends true? { length: T["length"] } : {});
		new<T extends number>(length: T): Float32Array & { length: T };
	}
	interface ObjectConstructor {
		// TS 7 made me add " & (string extends K? number : never)" because otherwise it infers all calls to Object.entries() as [never, never][] :(
		entries<K extends string, T>(o: Record<K, T> & (string extends K? never : any) & ([T] extends [never]? never : T)): [K, T][];
		// fromEntries is from https://github.com/microsoft/TypeScript/pull/61074
		fromEntries<K extends PropertyKey, T = any>(entries: Iterable<readonly [K, T]>): { [Key in K]: T; };
	}
	interface Function {
		bind<This, NewThis>(this: This, thisArg: NewThis): This;
		bind<This, NewThis, A extends any[]>(this: This, thisArg: NewThis, ...argArray: A): This extends (this: NewThis, ...args: [...A, ...infer B]) => infer C? (...args: B) => C : never;
	}
	interface String {
		startsWith<S extends string>(searchString: S, position?: 0): this is `${S}${string}`;
		endsWith<S extends string>(searchString: S): this is `${string}${S}`;
	}
	interface JSON {
		rawJSON(text: string): RawJSON;
	}
	interface RawJSON {}
	interface HTMLElementTagNameMap {
		"item-criteria-input": ItemCriteriaInput;
		"file-input-table": FileInputTable;
		"resizing-input": ResizingInput;
		"vec-3-input": Vec3Input;
		"simple-logger": SimpleLogger;
		"lil-gui": LilGui;
	}
	interface EventTarget {
		[onEvent]: this["addEventListener"];
		[onEventAndNow]: this["addEventListener"];
		[onEvents](types: string[], listener: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
	}
	interface HTMLElement {
		[onEvents]<T extends (keyof HTMLElementEventMap)[]>(types: T, listener: (ev: HTMLElementEventMap[T[number]]) => any, options?: boolean | AddEventListenerOptions): void;
	}
	interface Window {
		launchQueue: LaunchQueue;
	}
	interface LaunchQueue {
		setConsumer(consumer: (params: LaunchParams) => any): void;
	}
	interface LaunchParams {
		readonly files: ReadonlyArray<FileSystemFileHandle>;
		readonly targetURL: string;
	}
	interface WebGL2RenderingContextButSmarter<T extends HTMLCanvasElement | OffscreenCanvas = HTMLCanvasElement | OffscreenCanvas> extends WebGL2RenderingContext {
		canvas: T; // without this line, I would run into issues where it doesn't know that I am indeed using an OffscreenCanvas and therefore it would give a red squiggly line for trying to use methods that don't exist on regular canvases. LIKE HELLO TYPESCRIPT??
	}
}
declare module "@types/three/examples/jsm/controls/OrbitControls.d.ts" {
	interface OrbitControls {
		_sphericalDelta: {
			phi: number
			theta: number
		}
	}
}
export {};
```

## File: LICENSE
```
Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
Public License

By exercising the Licensed Rights (defined below), You accept and agree
to be bound by the terms and conditions of this Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International Public License
("Public License"). To the extent this Public License may be
interpreted as a contract, You are granted the Licensed Rights in
consideration of Your acceptance of these terms and conditions, and the
Licensor grants You such rights in consideration of benefits the
Licensor receives from making the Licensed Material available under
these terms and conditions.


Section 1 -- Definitions.

  a. Adapted Material means material subject to Copyright and Similar
     Rights that is derived from or based upon the Licensed Material
     and in which the Licensed Material is translated, altered,
     arranged, transformed, or otherwise modified in a manner requiring
     permission under the Copyright and Similar Rights held by the
     Licensor. For purposes of this Public License, where the Licensed
     Material is a musical work, performance, or sound recording,
     Adapted Material is always produced where the Licensed Material is
     synched in timed relation with a moving image.

  b. Adapter's License means the license You apply to Your Copyright
     and Similar Rights in Your contributions to Adapted Material in
     accordance with the terms and conditions of this Public License.

  c. BY-NC-SA Compatible License means a license listed at
     creativecommons.org/compatiblelicenses, approved by Creative
     Commons as essentially the equivalent of this Public License.

  d. Copyright and Similar Rights means copyright and/or similar rights
     closely related to copyright including, without limitation,
     performance, broadcast, sound recording, and Sui Generis Database
     Rights, without regard to how the rights are labeled or
     categorized. For purposes of this Public License, the rights
     specified in Section 2(b)(1)-(2) are not Copyright and Similar
     Rights.

  e. Effective Technological Measures means those measures that, in the
     absence of proper authority, may not be circumvented under laws
     fulfilling obligations under Article 11 of the WIPO Copyright
     Treaty adopted on December 20, 1996, and/or similar international
     agreements.

  f. Exceptions and Limitations means fair use, fair dealing, and/or
     any other exception or limitation to Copyright and Similar Rights
     that applies to Your use of the Licensed Material.

  g. License Elements means the license attributes listed in the name
     of a Creative Commons Public License. The License Elements of this
     Public License are Attribution, NonCommercial, and ShareAlike.

  h. Licensed Material means the artistic or literary work, database,
     or other material to which the Licensor applied this Public
     License.

  i. Licensed Rights means the rights granted to You subject to the
     terms and conditions of this Public License, which are limited to
     all Copyright and Similar Rights that apply to Your use of the
     Licensed Material and that the Licensor has authority to license.

  j. Licensor means the individual(s) or entity(ies) granting rights
     under this Public License.

  k. NonCommercial means not primarily intended for or directed towards
     commercial advantage or monetary compensation. For purposes of
     this Public License, the exchange of the Licensed Material for
     other material subject to Copyright and Similar Rights by digital
     file-sharing or similar means is NonCommercial provided there is
     no payment of monetary compensation in connection with the
     exchange.

  l. Share means to provide material to the public by any means or
     process that requires permission under the Licensed Rights, such
     as reproduction, public display, public performance, distribution,
     dissemination, communication, or importation, and to make material
     available to the public including in ways that members of the
     public may access the material from a place and at a time
     individually chosen by them.

  m. Sui Generis Database Rights means rights other than copyright
     resulting from Directive 96/9/EC of the European Parliament and of
     the Council of 11 March 1996 on the legal protection of databases,
     as amended and/or succeeded, as well as other essentially
     equivalent rights anywhere in the world.

  n. You means the individual or entity exercising the Licensed Rights
     under this Public License. Your has a corresponding meaning.


Section 2 -- Scope.

  a. License grant.

       1. Subject to the terms and conditions of this Public License,
          the Licensor hereby grants You a worldwide, royalty-free,
          non-sublicensable, non-exclusive, irrevocable license to
          exercise the Licensed Rights in the Licensed Material to:

            a. reproduce and Share the Licensed Material, in whole or
               in part, for NonCommercial purposes only; and

            b. produce, reproduce, and Share Adapted Material for
               NonCommercial purposes only.

       2. Exceptions and Limitations. For the avoidance of doubt, where
          Exceptions and Limitations apply to Your use, this Public
          License does not apply, and You do not need to comply with
          its terms and conditions.

       3. Term. The term of this Public License is specified in Section
          6(a).

       4. Media and formats; technical modifications allowed. The
          Licensor authorizes You to exercise the Licensed Rights in
          all media and formats whether now known or hereafter created,
          and to make technical modifications necessary to do so. The
          Licensor waives and/or agrees not to assert any right or
          authority to forbid You from making technical modifications
          necessary to exercise the Licensed Rights, including
          technical modifications necessary to circumvent Effective
          Technological Measures. For purposes of this Public License,
          simply making modifications authorized by this Section 2(a)
          (4) never produces Adapted Material.

       5. Downstream recipients.

            a. Offer from the Licensor -- Licensed Material. Every
               recipient of the Licensed Material automatically
               receives an offer from the Licensor to exercise the
               Licensed Rights under the terms and conditions of this
               Public License.

            b. Additional offer from the Licensor -- Adapted Material.
               Every recipient of Adapted Material from You
               automatically receives an offer from the Licensor to
               exercise the Licensed Rights in the Adapted Material
               under the conditions of the Adapter's License You apply.

            c. No downstream restrictions. You may not offer or impose
               any additional or different terms or conditions on, or
               apply any Effective Technological Measures to, the
               Licensed Material if doing so restricts exercise of the
               Licensed Rights by any recipient of the Licensed
               Material.

       6. No endorsement. Nothing in this Public License constitutes or
          may be construed as permission to assert or imply that You
          are, or that Your use of the Licensed Material is, connected
          with, or sponsored, endorsed, or granted official status by,
          the Licensor or others designated to receive attribution as
          provided in Section 3(a)(1)(A)(i).

  b. Other rights.

       1. Moral rights, such as the right of integrity, are not
          licensed under this Public License, nor are publicity,
          privacy, and/or other similar personality rights; however, to
          the extent possible, the Licensor waives and/or agrees not to
          assert any such rights held by the Licensor to the limited
          extent necessary to allow You to exercise the Licensed
          Rights, but not otherwise.

       2. Patent and trademark rights are not licensed under this
          Public License.

       3. To the extent possible, the Licensor waives any right to
          collect royalties from You for the exercise of the Licensed
          Rights, whether directly or through a collecting society
          under any voluntary or waivable statutory or compulsory
          licensing scheme. In all other cases the Licensor expressly
          reserves any right to collect such royalties, including when
          the Licensed Material is used other than for NonCommercial
          purposes.


Section 3 -- License Conditions.

Your exercise of the Licensed Rights is expressly made subject to the
following conditions.

  a. Attribution.

       1. If You Share the Licensed Material (including in modified
          form), You must:

            a. retain the following if it is supplied by the Licensor
               with the Licensed Material:

                 i. identification of the creator(s) of the Licensed
                    Material and any others designated to receive
                    attribution, in any reasonable manner requested by
                    the Licensor (including by pseudonym if
                    designated);

                ii. a copyright notice;

               iii. a notice that refers to this Public License;

                iv. a notice that refers to the disclaimer of
                    warranties;

                 v. a URI or hyperlink to the Licensed Material to the
                    extent reasonably practicable;

            b. indicate if You modified the Licensed Material and
               retain an indication of any previous modifications; and

            c. indicate the Licensed Material is licensed under this
               Public License, and include the text of, or the URI or
               hyperlink to, this Public License.

       2. You may satisfy the conditions in Section 3(a)(1) in any
          reasonable manner based on the medium, means, and context in
          which You Share the Licensed Material. For example, it may be
          reasonable to satisfy the conditions by providing a URI or
          hyperlink to a resource that includes the required
          information.
       3. If requested by the Licensor, You must remove any of the
          information required by Section 3(a)(1)(A) to the extent
          reasonably practicable.

  b. ShareAlike.

     In addition to the conditions in Section 3(a), if You Share
     Adapted Material You produce, the following conditions also apply.

       1. The Adapter's License You apply must be a Creative Commons
          license with the same License Elements, this version or
          later, or a BY-NC-SA Compatible License.

       2. You must include the text of, or the URI or hyperlink to, the
          Adapter's License You apply. You may satisfy this condition
          in any reasonable manner based on the medium, means, and
          context in which You Share Adapted Material.

       3. You may not offer or impose any additional or different terms
          or conditions on, or apply any Effective Technological
          Measures to, Adapted Material that restrict exercise of the
          rights granted under the Adapter's License You apply.


Section 4 -- Sui Generis Database Rights.

Where the Licensed Rights include Sui Generis Database Rights that
apply to Your use of the Licensed Material:

  a. for the avoidance of doubt, Section 2(a)(1) grants You the right
     to extract, reuse, reproduce, and Share all or a substantial
     portion of the contents of the database for NonCommercial purposes
     only;

  b. if You include all or a substantial portion of the database
     contents in a database in which You have Sui Generis Database
     Rights, then the database in which You have Sui Generis Database
     Rights (but not its individual contents) is Adapted Material,
     including for purposes of Section 3(b); and

  c. You must comply with the conditions in Section 3(a) if You Share
     all or a substantial portion of the contents of the database.

For the avoidance of doubt, this Section 4 supplements and does not
replace Your obligations under this Public License where the Licensed
Rights include other Copyright and Similar Rights.


Section 5 -- Disclaimer of Warranties and Limitation of Liability.

  a. UNLESS OTHERWISE SEPARATELY UNDERTAKEN BY THE LICENSOR, TO THE
     EXTENT POSSIBLE, THE LICENSOR OFFERS THE LICENSED MATERIAL AS-IS
     AND AS-AVAILABLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES OF
     ANY KIND CONCERNING THE LICENSED MATERIAL, WHETHER EXPRESS,
     IMPLIED, STATUTORY, OR OTHER. THIS INCLUDES, WITHOUT LIMITATION,
     WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
     PURPOSE, NON-INFRINGEMENT, ABSENCE OF LATENT OR OTHER DEFECTS,
     ACCURACY, OR THE PRESENCE OR ABSENCE OF ERRORS, WHETHER OR NOT
     KNOWN OR DISCOVERABLE. WHERE DISCLAIMERS OF WARRANTIES ARE NOT
     ALLOWED IN FULL OR IN PART, THIS DISCLAIMER MAY NOT APPLY TO YOU.

  b. TO THE EXTENT POSSIBLE, IN NO EVENT WILL THE LICENSOR BE LIABLE
     TO YOU ON ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION,
     NEGLIGENCE) OR OTHERWISE FOR ANY DIRECT, SPECIAL, INDIRECT,
     INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR OTHER LOSSES,
     COSTS, EXPENSES, OR DAMAGES ARISING OUT OF THIS PUBLIC LICENSE OR
     USE OF THE LICENSED MATERIAL, EVEN IF THE LICENSOR HAS BEEN
     ADVISED OF THE POSSIBILITY OF SUCH LOSSES, COSTS, EXPENSES, OR
     DAMAGES. WHERE A LIMITATION OF LIABILITY IS NOT ALLOWED IN FULL OR
     IN PART, THIS LIMITATION MAY NOT APPLY TO YOU.

  c. The disclaimer of warranties and limitation of liability provided
     above shall be interpreted in a manner that, to the extent
     possible, most closely approximates an absolute disclaimer and
     waiver of all liability.


Section 6 -- Term and Termination.

  a. This Public License applies for the term of the Copyright and
     Similar Rights licensed here. However, if You fail to comply with
     this Public License, then Your rights under this Public License
     terminate automatically.

  b. Where Your right to use the Licensed Material has terminated under
     Section 6(a), it reinstates:

       1. automatically as of the date the violation is cured, provided
          it is cured within 30 days of Your discovery of the
          violation; or

       2. upon express reinstatement by the Licensor.

     For the avoidance of doubt, this Section 6(b) does not affect any
     right the Licensor may have to seek remedies for Your violations
     of this Public License.

  c. For the avoidance of doubt, the Licensor may also offer the
     Licensed Material under separate terms or conditions or stop
     distributing the Licensed Material at any time; however, doing so
     will not terminate this Public License.

  d. Sections 1, 5, 6, 7, and 8 survive termination of this Public
     License.


Section 7 -- Other Terms and Conditions.

  a. The Licensor shall not be bound by any additional or different
     terms or conditions communicated by You unless expressly agreed.

  b. Any arrangements, understandings, or agreements regarding the
     Licensed Material not stated herein are separate from and
     independent of the terms and conditions of this Public License.


Section 8 -- Interpretation.

  a. For the avoidance of doubt, this Public License does not, and
     shall not be interpreted to, reduce, limit, restrict, or impose
     conditions on any use of the Licensed Material that could lawfully
     be made without permission under this Public License.

  b. To the extent possible, if any provision of this Public License is
     deemed unenforceable, it shall be automatically reformed to the
     minimum extent necessary to make it enforceable. If the provision
     cannot be reformed, it shall be severed from this Public License
     without affecting the enforceability of the remaining terms and
     conditions.

  c. No term or condition of this Public License will be waived and no
     failure to comply consented to unless expressly agreed to by the
     Licensor.

  d. Nothing in this Public License constitutes or may be interpreted
     as a limitation upon, or waiver of, any privileges and immunities
     that apply to the Licensor or You, including from the legal
     processes of any jurisdiction or authority.
```

## File: package.json
```json
{
	"name": "root",
	"type": "module",
	"scripts": {
		"check": "tsc",
		"test": "npm run test --workspaces --if-present",
		"build": "npm run build -w pipeline"
	},
	"workspaces": [
		"pipeline",
		"tests/**"
	],
	"devDependencies": {
		"typescript": "7.0.2",
		"@supabase/supabase-js": "2",
		"@types/three": "0.177.0"
	},
	"dependencies": {
		"three": "0.177.0",
		"@zip.js/zip.js": "^2.7.57",
		"deepmerge": "4.3.1",
		"lil-gui": "0.20.0",
		"mcbe-leveldb-reader": "2.0.1",
		"nbtify-readonly-typeless": "1.1.2",
		"potpack": "2.1.0",
		"stats.js": "0.17.0",
		"strip-json-comments": "5.0.1",
		"tga-js": "1.1.1"
	}
}
```

## File: quick-lint-js.config
```
{
	"globals": {
		"EventListenerOrEventListenerObject": true,
		"AddEventListenerOptions": true,
		"HTMLElementEventMap": true
	}
}
```

## File: README.de-DE.md
```markdown
![HoloPrint](images/banner.png)

[![English](https://img.shields.io/badge/Language-English-blue)](README.md)
[![简体中文](https://img.shields.io/badge/Language-简体中文-blue)](README.zh-CN.md)
[![Español](https://img.shields.io/badge/Language-Español-blue)](README.es_MX.md)
### Über
HoloPrint ist eine Web-App, die MCBE-Strukturdateien in Ressourcenpakete umwandelt, die Hologramme von Bauwerken anzeigen. Es baut auf der Arbeit von [Structura](https://github.com/RavinMaddHatter/Structura) auf, einem ähnlichen Projekt. Sowohl Structura als auch HoloPrint verfolgen das Ziel die Nutzung von Java Edition Mods wie [Litematica](https://github.com/maruohon/litematica) und [Schematica](https://github.com/Lunatrius/Schematica) für Bedrock Edition Nutzer durch Ressourcenpakete nachzubilden.

> [!TIP]
> Schau dir das [Wiki](https://holoprint-mc.github.io/wiki) an für ausführlichere Anleitungen!

### Nutzung
> [!NOTE]
> Auf Android ist die Export-Schaltfläche des Konstruktionsblocks versteckt; bitte nutze [dieses Ressourcenpaket](https://holoprint-mc.github.io/exportbutton), um sie wieder einzublenden.
1. Nutze einen Konstruktionsblock um eine `.mcstructure` Datei zu exportieren. Führe den Befehl `/give @s structure_block` aus um einen Konstruktionsblock zu erhalten.  
![Erhalte Konstruktionsblock Befehl](images/giveStructureBlockCommand.png)  
![Ein Konstruktionsblock beim Exportieren](images/structureBlockExporting.png)
2. Gehe zu [https://holoprint-mc.github.io](https://holoprint-mc.github.io), wähle deine `.mcstructure` Datei aus, und passe die Einstellungen nach deinen Wünschen an.  
![Ressourcenpaket Generierungsansicht](images/packGenerationScreen.png)
3. Generiere und lade dein Ressourcenpaket (`.mcpack`) herunter.  
![Ressourcenpaket aktiv](images/resourcePackActive.png)
4. Aktiviere dein Ressourcenpaket und platziere einen Rüstungsständer in deiner Welt.  
![Platzieren eines Rüstungsständers](images/placingArmourStand.gif)

### Hologrammsteuerung ([Wiki](https://holoprint-mc.github.io/wiki/hologram-controls))
- Rendern ein-/ausschalten: Ziegel  
![Rendern ein-/ausschalten](images/togglingRendering.gif)
- Deckkraft ändern: Amethystscherbe (schleiche um zu senken, stehe um zu erhöhen)  
![Transparenz ändern](images/changingTransparency.gif)
- Schicht ändern: Leder (schleiche um zu senken, stehe um zu erhöhen), oder ändere die Pose des Rüstungsständers  
![Schicht ändern](images/changingLayer.gif)
- Hologramm bewegen: Stock  
![Hologramm bewegen](images/movingHologram.gif)
- Hologramm rotieren: Kupferbarren  
![Hologramm rotieren](images/rotatingHologram.gif)
- Blocküberprüfung: Eisenbarren  
![Validiere Struktur](images/validatingStructure.gif)
- Materialliste: Tabulatortaste (Tastatur), Buchsymbol (Berührung)  
![Materialliste](images/materialList.gif)
- Farbton-Überlagerung ein-/ausschalten: Weißer Farbstoff  
![Farbton-Überlagerung ein-/ausschalten](images/togglingTint.gif)
- Schichtmodus ändern: Feuerstein  
![Schichtmodus ändern](images/changingLayerMode.gif)
- Struktur ändern: Pfeil, oder schlage einen Rüstungsständer, der nichts hält  
![Struktur ändern](images/changingStructure.gif)
- Hologrammeinstellungen speichern: Papier  
![Hologrammeinstellungen speichern](images/savingBackup.gif)
- Rüstungsständersteuerung: Gib ein Item oder schlage  
![Rüstungsständersteuerung](images/armourStandControls.gif)
- Spielersteuerung deaktivieren: Knochen  
![Spielersteuerung deaktivieren](images/disablingPlayerControls.gif)
> [!WARNING]
> Die Spielersteuerung wird vielleicht unzuverlässig sein, aber die Rüstungsständersteuerung wird immer funktionieren.

Besonderen Dank an **kizoku246** für das Haus in diesen Bildern!

---

![Erstellte Ressourcenpakete](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/dailyLogs.json&query=$[-1:]["pack_count"]&label=Erstellte+Ressourcenpakete&color=#4C1)
![Einzigartige Strukturdateien](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/dailyLogs.json&query=$[-1:]["structure_count"]&label=Einzigartige+Strukturdateien&color=#4C1)

[![Benutzungsgraph](https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/usageGraph.png)](https://github.com/SuperLlama88888/holoprint-stats)
[![Graph, der die GitHub-Sterne anzeigt](https://api.star-history.com/svg?repos=SuperLlama88888/HoloPrint&type=Date)](https://star-history.com/#SuperLlama88888/HoloPrint&Date)

### Danksagungen
- [Structura](https://github.com/RavinMaddHatter/Structura): Inspiration, Grundlage für dieses Projekt. Ohne die Arbeit von [RavinMaddHatter](https://github.com/RavinMaddHatter) und [anderen Mitwirkenden](https://github.com/RavinMaddHatter/Structura/graphs/contributors), hätte dieses Projekt mehrere Stunden mehr gedauert.
- [Tab Key Playerlist UI](https://github.com/YuuhaLand/Tabkey_Playerlist_UI) von [YuuhaLand](https://github.com/YuuhaLand): Grundlage für die Materialliste-UI
- [Nextr](https://mcpedl.com/user/nextr): Steuerung der Item-Texturen (modifiziert)
- [Indyfficient](https://www.youtube.com/@Indyfficient): Die Idee, die Struktur durch das Schlagen des Rüstungsständers zu verändern
- [Prowl8413](https://www.youtube.com/@Prowl8413): Grundsätzliches Feedback während der Entwicklung
- [KITTUradiates](https://github.com/KITTUradiates): Feedback und Vorschläge
- [ESBE 3G](https://github.com/McbeEringi/esbe-3g) von [McbeEringi](https://github.com/McbeEringi): Technische Basis für die Infoanzeige-UI
- [Rainbow-Editor](https://github.com/PurpleRain-PR/Rainbow-Editor) von [PurpleRain-PR](https://github.com/PurpleRain-PR): Die Idee ein GLB von der Vorschau zu exportieren
- Dokumentation:
  - [Bedrock Wiki](https://wiki.bedrock.dev): Beste Ressource für das Lernen über Ressourcen-/Verhaltenspakete!
  - [Minecraft Wiki](https://minecraft.wiki): Block Entity Liste, Block Zustände und Datenwerte, und so viel mehr!
  - [Bedrock `.mcstructure`-Dateien](https://gist.github.com/tryashtar/87ad9654305e5df686acab05cc4b6205): Erklärung von der NBT Struktur von Strukturdateien, von [tryashtar](https://github.com/tryashtar)
  - [Bugrock JSON UI Schemas](https://github.com/KalmeMarq/Bugrock-JSON-UI-Schemas) von [KalmeMarq](https://github.com/KalmeMarq): Hat dafür gesorgt, dass ich bei der Arbeit mit UI geistig gesund geblieben bin; aktueller als das Wiki
  - [Magic Method Docs](https://github.com/BedrockPlus/MagicMethodDocs): Dokumentation von [Chainsketch](https://www.youtube.com/@Chainsketch)'s technische Daten zwischen Entities in Ressourcenpaketen zu verschicken, geschrieben von [White](https://github.com/WhiteOnGitHub) und [chyves](https://github.com/notchyves)
  - [Microsoft BE Referenz Dokumentationen](https://learn.microsoft.com/en-us/minecraft/creator/reference): Offizielle Schemas für Addons/Ressourcenpakete 
- JavaScript Bibliotheken:
  - [NBTify](https://github.com/Offroaders123/NBTify): Minecraft NBT Leser
  - [tga.js](https://github.com/vthibault/tga.js): TGA zu PNG Bild Umwandlung
  - [potpack](https://github.com/mapbox/potpack): Texturatlas Verpackung
  - [JSZip](https://github.com/Stuk/jszip): Pack zippen
  - [Minecraft Creator Tools](https://github.com/Mojang/minecraft-creator-tools): LevelDB Leser
  - [three.js](https://github.com/mrdoob/three.js): Zum Rendern der Vorschau
  - [stats.js](https://github.com/mrdoob/stats.js) und [lil-gui](https://github.com/georgealways/lil-gui): Vorschau widgets
  - [Supabase](https://supabase.com): Kostenlose Datenbank für das Aufnehmen von erstellten Packs
  - [strip-json-comments](https://github.com/sindresorhus/strip-json-comments): Entfernt Kommentare von JSON Dateien
  - [deepmerge](https://github.com/TehShrike/deepmerge): Verschmelzen von JSON Dateien
```

## File: README.es_MX.md
```markdown
![HoloPrint](images/banner.png)

[![English](https://img.shields.io/badge/Language-English-blue)](README.md)
[![简体中文](https://img.shields.io/badge/Language-简体中文-blue)](README.zh-CN.md)
[![Deutsch](https://img.shields.io/badge/Language-Deutsch-blue)](README.de-DE.md)
### Sobre nosotros
HoloPrint es una app web que convierte archivos de estructuras de MCBE en packs de recursos mostrando hologramas de construcciones. Se basa en el trabajo de [Structura](https://github.com/RavinMaddHatter/Structura), un proyecto similar. Structura y HoloPrint buscan recrear la experiencia de los mods de Java Edition como [Litematica](https://github.com/maruohon/litematica) y [Schematica](https://github.com/Lunatrius/Schematica) para usuarios de Bedrock Edition a través de packs de recursos.

> [!TIP]
> ¡Mira la [wiki](https://holoprint-mc.github.io/wiki) para instrucciones más detalladas!

### Uso
> [!NOTE]
> En Android el botón "exportar" del bloque de estructura está oculto; por favor usa [este pack](https://holoprint-mc.github.io/exportbutton) para agregarlo de regreso.
1. Usa un bloque de estructura para exportar un archivo `.mcstructure`. Para obtener un bloque de estructura, ejecuta en Minecraft el comando `/give @s structure_block`.  
![Comando para dar el bloque de estructura](images/giveStructureBlockCommand.png)  
![Exportando en el bloque de estructura](images/structureBlockExporting.png)
2. Ve a [https://holoprint-mc.github.io](https://holoprint-mc.github.io), selecciona tu archivo `.mcstructure`, y ajusta las configuraciones.  
![Pantalla de generación del pack](images/packGenerationScreen.png)
3. Genera y descarga tu pack de recursos (`.mcpack`).  
![Pack de recursos activo](images/resourcePackActive.png)
4. Aplica tu pack de recursos y coloca un estante de armadura en tu mundo.  
![Colocando el estante de armadura](images/placingArmourStand.gif)

### controles del holograma ([Wiki](https://holoprint-mc.github.io/wiki/hologram-controls))
- Cambiar renderizado: Ladrillo  
![Cambiando renderizado](images/togglingRendering.gif)
- Cambiar transparencia: Fragmento de amatista (Agacharse para disminuir, pararse para aumentar)  
![Changing transparency](images/changingTransparency.gif)
- Cambiar capa: Cuero (Agacharse para disminuir, pararse para aumentar), o cambiando la pose del estante de armaduras
![Cambiando capa](images/changingLayer.gif)
- Mover holograma: Palo  
![Moviendo holograma](images/movingHologram.gif)
- Rotar holograma: Lingote de cobre  
![Rotando holograma](images/rotatingHologram.gif)
- Validación de bloque: Lingote de hierro  
![Validando estructura](images/validatingStructure.gif)
- Lista de Materiales: Botón "Tab" (teclado), icono de libro (pantalla táctil)  
![Lista de materiales](images/materialList.gif)
- Cambiar tinte: Tinte blanco  
![Cambio de tinte](images/togglingTint.gif)
- Cambiar modo de capa: Pedernal  
![Cambio de modo de capa](images/changingLayerMode.gif)
- Cambiar estructura: Flecha, o golpea el estante de armadura que no está sosteniendo nada  
![Cambiando estructura](images/changingStructure.gif)
- Guardar configuraciones del holograma: Papel  
![Guardando copia](images/savingBackup.gif)
- Controles del estante de armaduras: Dar item o golpealo  
![Controles del estante de armaduras](images/armourStandControls.gif)
- Deshabilitar controles del jugador: Hueso  
![Deshabilitando controles del jugador](images/disablingPlayerControls.gif)
> [!WARNING]
> Los controles del jugador pueden no funcionar bien, pero los controles del estante de armaduras siempre funcionará.

¡Gracias especiales a **kizoku246** para la casa en esas imagenes!

---

![Packs creados](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/dailyLogs.json&query=$[-1:]["pack_count"]&label=Packs+creados&color=#4C1)
![Archivos de estructura únicos](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/dailyLogs.json&query=$[-1:]["structure_count"]&label=Archivos+de+estructura+%C3%BAnicos&color=#4C1)

[![Usage graph](https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/usageGraph.png)](https://github.com/SuperLlama88888/holoprint-stats)
[![Star history chart](https://api.star-history.com/svg?repos=SuperLlama88888/HoloPrint&type=Date)](https://star-history.com/#SuperLlama88888/HoloPrint&Date)

### Creditos
- [Structura](https://github.com/RavinMaddHatter/Structura): Inspiración y base de este proyecto. sin el trabajo de [RavinMaddHatter](https://github.com/RavinMaddHatter) y [demás colaboradores](https://github.com/RavinMaddHatter/Structura/graphs/contributors), este proyecto podría haber tardado decenas de horas más en empezar.
- [Tab Key Playerlist UI](https://github.com/YuuhaLand/Tabkey_Playerlist_UI) por [YuuhaLand](https://github.com/YuuhaLand): Fundación para la "material list UI".
- [Nextr](https://mcpedl.com/user/nextr): Control item textures (ajustes)
- [Indyfficient](https://www.youtube.com/@Indyfficient): La idea de cambiar estructuras golpeando el estante de armaduras.
- [Prowl8413](https://www.youtube.com/@Prowl8413): Retroalimentaciones generales durante el desarrollo.
- [KITTUradiates](https://github.com/KITTUradiates): Retroalimentaciones y sugerencias.
- [ESBE 3G](https://github.com/McbeEringi/esbe-3g) por [McbeEringi](https://github.com/McbeEringi): Base tecnica para la "info screen UI".
- [Rainbow-Editor](https://github.com/PurpleRain-PR/Rainbow-Editor) por [PurpleRain-PR](https://github.com/PurpleRain-PR): La idea de exportar un GLB desde la vista previa.
- Documentación:
  - [Bedrock Wiki](https://wiki.bedrock.dev): ¡Mejor recurso para aprender packs de recursos o comportamientos!
  - [Minecraft Wiki](https://minecraft.wiki): Lista de "Block-entity", estados de bloques, valores de datos, ¡y mucho más!
  - [Bedrock `.mcstructure`. files](https://gist.github.com/tryashtar/87ad9654305e5df686acab05cc4b6205): Explicación de la estructura NBT de archivos de estructuras, por [tryashtar](https://github.com/tryashtar)
  - [Bugrock JSON UI Schemas](https://github.com/KalmeMarq/Bugrock-JSON-UI-Schemas) por [KalmeMarq](https://github.com/KalmeMarq): Menteniendome sano cuando trabajo con la IU; más actualizada que la wiki
  - [Magic Method Docs](https://github.com/BedrockPlus/MagicMethodDocs): Documentación tecnica de [Chainsketch](https://www.youtube.com/@Chainsketch) al pasar datos entre entidades en packs de recursos, escrito por [White](https://github.com/WhiteOnGitHub) y [chyves](https://github.com/notchyves)
  - [Microsoft BE reference docs](https://learn.microsoft.com/en-us/minecraft/creator/reference): Esquemas oficiales para complementos y packs de recursos.
- Librerias de JavaScript:
  - [NBTify](https://github.com/Offroaders123/NBTify): lector de "Minecraft NBT"
  - [tga.js](https://github.com/vthibault/tga.js): conversión de imagenes TGA a PNG
  - [potpack](https://github.com/mapbox/potpack): Texture atlas packing
  - [JSZip](https://github.com/Stuk/jszip): Compresión de packs
  - [Minecraft Creator Tools](https://github.com/Mojang/minecraft-creator-tools): lector "LevelDB"
  - [three.js](https://github.com/mrdoob/three.js): Preview rendering
  - [stats.js](https://github.com/mrdoob/stats.js) and [lil-gui](https://github.com/georgealways/lil-gui): Preview widgets
  - [Supabase](https://supabase.com): Free database for recording packs created
  - [strip-json-comments](https://github.com/sindresorhus/strip-json-comments): Remueve comentarios desde archivos JSON
  - [deepmerge](https://github.com/TehShrike/deepmerge): une archivos JSON
```

## File: README.md
```markdown
![HoloPrint](images/banner.png)

[![简体中文](https://img.shields.io/badge/Language-简体中文-blue)](README.zh-CN.md)
[![Español](https://img.shields.io/badge/Language-Español-blue)](README.es_MX.md)
[![Deutsch](https://img.shields.io/badge/Language-Deutsch-blue)](README.de-DE.md)
### About
HoloPrint is a web app that converts MCBE structure files into resource packs showing holograms of builds. It builds off the work of [Structura](https://github.com/RavinMaddHatter/Structura), a similar project. Both Structura and HoloPrint aim to recreate the experience of Java Edition mods like [Litematica](https://github.com/maruohon/litematica) and [Schematica](https://github.com/Lunatrius/Schematica) for Bedrock Edition users through resource packs.

> [!TIP]
> View the [wiki](https://holoprint-mc.github.io/wiki) for more detailed instructions!

### Usage
> [!NOTE]
> On Android the Structure Block export button is hidden; please use [this pack](https://holoprint-mc.github.io/exportbutton) to add it back.
1. Use a Structure Block to export a `.mcstructure` file. To get a structure block, run the command `/give @s structure_block`.  
![Give Structure Block command](images/giveStructureBlockCommand.png)  
![Structure Block exporting](images/structureBlockExporting.png)
2. Go to [https://holoprint-mc.github.io](https://holoprint-mc.github.io), select your `.mcstructure` file, and tweak settings.  
![Pack generation screen](images/packGenerationScreen.png)
3. Generate and download your resource pack (`.mcpack`).  
![Resource pack active](images/resourcePackActive.png)
4. Apply your resource pack and place an armour stand in your world.  
![Placing armour stand](images/placingArmourStand.gif)

### Hologram controls ([Wiki](https://holoprint-mc.github.io/wiki/hologram-controls))
- Toggle rendering: Brick  
![Toggling rendering](images/togglingRendering.gif)
- Change transparency: Amethyst shard (sneak to decrease, stand to increase)  
![Changing transparency](images/changingTransparency.gif)
- Change layer: Leather (sneak to decrease, stand to increase), or changing the pose on the armour stand  
![Changing layer](images/changingLayer.gif)
- Move hologram: Stick  
![Moving hologram](images/movingHologram.gif)
- Rotate hologram: Copper ingot  
![Rotating hologram](images/rotatingHologram.gif)
- Block validation: Iron ingot  
![Validating structure](images/validatingStructure.gif)
- Material list: Tab button (keyboard), book icon (touch)  
![Material list](images/materialList.gif)
- Toggle tint: White dye  
![Toggle tint](images/togglingTint.gif)
- Change layer mode: Flint  
![Change layer mode](images/changingLayerMode.gif)
- Change structure: Arrow, or hit armour stand that's holding nothing  
![Changing structure](images/changingStructure.gif)
- Save hologram settings: Paper  
![Saving backup](images/savingBackup.gif)
- Armour stand controls: Give item or hit  
![Armour stand controls](images/armourStandControls.gif)
- Disable player controls: Bone  
![Disabling player controls](images/disablingPlayerControls.gif)
> [!WARNING]
> Player controls may be unreliable, but armour stand controls will always work.

Special thanks to **kizoku246** for the house in these images!

---

![Packs created](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/dailyLogs.json&query=$[-1:]["pack_count"]&label=Packs+created&color=#4C1)
![Unique structure files](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/dailyLogs.json&query=$[-1:]["structure_count"]&label=Unique+structure+files&color=#4C1)

[![Usage graph](https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/usageGraph.png)](https://github.com/SuperLlama88888/holoprint-stats)
[![Star history chart](https://api.star-history.com/svg?repos=SuperLlama88888/HoloPrint&type=Date)](https://star-history.com/#SuperLlama88888/HoloPrint&Date)

### Credit
- [Structura](https://github.com/RavinMaddHatter/Structura): Inspiration, laying the foundation for this project. Without the work of [RavinMaddHatter](https://github.com/RavinMaddHatter) and [others](https://github.com/RavinMaddHatter/Structura/graphs/contributors), this project would've taken tens of hours more to get started.
- [Tab Key Playerlist UI](https://github.com/YuuhaLand/Tabkey_Playerlist_UI) by [YuuhaLand](https://github.com/YuuhaLand): Foundation for the material list UI
- [Nextr](https://mcpedl.com/user/nextr): Control item textures (tweaked)
- [Indyfficient](https://www.youtube.com/@Indyfficient): The idea of changing structure by hitting the armour stand
- [Prowl8413](https://www.youtube.com/@Prowl8413): General feedback during development
- [KITTUradiates](https://github.com/KITTUradiates): Feedback and suggestions
- [ESBE 3G](https://github.com/McbeEringi/esbe-3g) by [McbeEringi](https://github.com/McbeEringi): Technical base for the info screen UI
- [Rainbow-Editor](https://github.com/PurpleRain-PR/Rainbow-Editor) by [PurpleRain-PR](https://github.com/PurpleRain-PR): The idea of exporting a GLB from the preview
- Documentation:
  - [Bedrock Wiki](https://wiki.bedrock.dev): Best resource for learning about resource/behaviour packs!
  - [Minecraft Wiki](https://minecraft.wiki): Block entity list, block states and data values, and so much more!
  - [Bedrock `.mcstructure`. files](https://gist.github.com/tryashtar/87ad9654305e5df686acab05cc4b6205): Explanation of the NBT structure of structure files, by [tryashtar](https://github.com/tryashtar)
  - [Bugrock JSON UI Schemas](https://github.com/KalmeMarq/Bugrock-JSON-UI-Schemas) by [KalmeMarq](https://github.com/KalmeMarq): Keeping me sane when working with the UI; more up-to-date than the wiki
  - [Magic Method Docs](https://github.com/BedrockPlus/MagicMethodDocs): Documentation of [Chainsketch](https://www.youtube.com/@Chainsketch)'s technique to pass data between entities in resource packs, written by [White](https://github.com/WhiteOnGitHub) and [chyves](https://github.com/notchyves)
  - [Microsoft BE reference docs](https://learn.microsoft.com/en-us/minecraft/creator/reference): Official schemas for addons/resource packs
- JavaScript libraries:
  - [NBTify](https://github.com/Offroaders123/NBTify): Minecraft NBT reader
  - [tga.js](https://github.com/vthibault/tga.js): TGA to PNG image conversion
  - [potpack](https://github.com/mapbox/potpack): Texture atlas packing
  - [JSZip](https://github.com/Stuk/jszip): Pack zipping
  - [Minecraft Creator Tools](https://github.com/Mojang/minecraft-creator-tools): LevelDB reader
  - [three.js](https://github.com/mrdoob/three.js): Preview rendering
  - [stats.js](https://github.com/mrdoob/stats.js) and [lil-gui](https://github.com/georgealways/lil-gui): Preview widgets
  - [Supabase](https://supabase.com): Free database for recording packs created
  - [strip-json-comments](https://github.com/sindresorhus/strip-json-comments): Removes comments from JSON files
  - [deepmerge](https://github.com/TehShrike/deepmerge): Merges JSON files
```

## File: README.zh-CN.md
```markdown
![HoloPrint](images/banner.png)

[![English](https://img.shields.io/badge/Language-English-blue)](README.md)
[![Español](https://img.shields.io/badge/Language-Español-blue)](README.es_MX.md)
[![Deutsch](https://img.shields.io/badge/Language-Deutsch-blue)](README.de-DE.md)
### 关于
全息打印 (HoloPrint) 是一款网页应用，可将我的世界基岩版 (MCBE) 的结构文件（`.mcstructure`）转换为显示建筑全息影像 (也称之为投影) 的资源包。本项目基于 [Structura](https://github.com/RavinMaddHatter/Structura)（一个类似项目）开发，旨在为基岩版玩家提供类似 Java 版模组 [Litematica](https://github.com/maruohon/litematica) 和 [Schematica](https://github.com/Lunatrius/Schematica) 的全息建造体验。

> [!TIP]
> 查看[使用文档](https://holoprint-mc.github.io/wiki/zh-cn)获取详细操作指南！

### 使用方法
> [!NOTE]
> 安卓设备的结构方块导出按钮默认隐藏，请使用 [此资源包](https://holoprint-mc.github.io/exportbutton) 恢复按钮。
1. 输入命令 `/give @s structure_block` 获取结构方块，然后使用结构方块导出 `.mcstructure` 文件。
![获取结构方块的命令](images/giveStructureBlockCommand.png)  
![导出结构文件操作](images/structureBlockExporting.png)
2. 访问 <https://holoprint-mc.github.io>，上传结构文件并调整设置。  
![资源包生成界面](images/packGenerationScreen.png)
3. 下载生成的资源包（`.mcpack`），在游戏中导入后启用。  
![启用资源包](images/resourcePackActive.png)
4. 在你的世界中放置盔甲架以显示全息影像。  
![放置盔甲架](images/placingArmourStand.gif)

### 控制全息影像（[Wiki](https://holoprint-mc.github.io/wiki/zh-cn/hologram-controls))
- **切换渲染**：砖块  
![切换渲染](images/togglingRendering.gif)
- **调整透明度**：紫水晶碎片（潜行降低，反之提高）  
![调整透明度](images/changingTransparency.gif)
- **切换图层**：皮革(潜行下降，反之上升)，或修改盔甲架姿势  
![切换图层](images/changingLayer.gif)
- **移动影像**：木棍  
![移动影像](images/movingHologram.gif)
- **旋转影像**：铜锭  
![旋转影像](images/rotatingHologram.gif)
- **结构验证**：铁锭  
![结构验证](images/validatingStructure.gif)
- **材料清单**： Tab 键（键盘）或书箱图标（触屏）  
![材料清单](images/materialList.gif)
- **切换着色**：白色染料  
![切换着色](images/togglingTint.gif)
- **切换图层模式**：燧石  
![切换图层模式](images/changingLayerMode.gif)
- **切换结构**：箭矢，或空手攻击盔甲架  
![切换结构](images/changingStructure.gif)
- **保存全息影像设置**：纸  
![保存备份](images/savingBackup.gif)
- **盔甲架控制**：装备物品或攻击  
![盔甲架控制](images/armourStandControls.gif)
- **禁用玩家控制**：骨头  
![禁用玩家控制](images/disablingPlayerControls.gif)
> [!WARNING]
> 玩家控制可能不稳定，但盔甲架控制始终有效。

特别感谢 **kizoku246** 提供演示图中的房屋！

---

![已生成资源包数量](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/dailyLogs.json&query=$[-1:]["pack_count"]&label=已生成资源包&color=#4C1)
![唯一结构文件数量](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/dailyLogs.json&query=$[-1:]["structure_count"]&label=唯一结构文件&color=#4C1)

[![使用统计](https://raw.githubusercontent.com/SuperLlama88888/holoprint-stats/main/usageGraph.png)](https://github.com/SuperLlama88888/holoprint-stats)
[![star历史](https://api.star-history.com/svg?repos=SuperLlama88888/HoloPrint&type=Date)](https://star-history.com/#SuperLlama88888/HoloPrint&Date)

### 致谢
- [Structura](https://github.com/RavinMaddHatter/Structura)：灵感来源与项目基础，特别感谢 [RavinMaddHatter](https://github.com/RavinMaddHatter) 以及 [其他贡献者](https://github.com/RavinMaddHatter/Structura/graphs/contributors)。
- [Tab键玩家列表UI](https://github.com/YuuhaLand/Tabkey_Playerlist_UI)：材料清单 UI 的底层实现。（作者 [YuuhaLand](https://github.com/YuuhaLand)）
- [Nextr](https://mcpedl.com/user/nextr): Control item textures (tweaked)
- [Indyfficient](https://www.youtube.com/@Indyfficient)：通过攻击盔甲架切换结构的创意。
- [Prowl8413](https://www.youtube.com/@Prowl8413)：开发过程中的反馈支持。
- [KITTUradiates](https://github.com/KITTUradiates): Feedback and suggestions
- [Rainbow-Editor](https://github.com/PurpleRain-PR/Rainbow-Editor) by [PurpleRain-PR](https://github.com/PurpleRain-PR): The idea of exporting a GLB from the preview
- **参考文档：**
  - [基岩版 Wiki](https://wiki.bedrock.dev)：学习资源包/行为包的最佳指南！
  - [Minecraft Wiki](https://minecraft.wiki)：方块实体列表、状态数据等全面资料。
  - [基岩版 `.mcstructure` 文件解析](https://gist.github.com/tryashtar/87ad9654305e5df686acab05cc4b6205)：结构文件的NBT结构说明。（作者 [Tryashtar](https://github.com/tryashtar)）
  - [Bugrock JSON UI Schemas](https://github.com/KalmeMarq/Bugrock-JSON-UI-Schemas) by [KalmeMarq](https://github.com/KalmeMarq): Keeping me sane when working with the UI; more up-to-date than the wiki
  - [Magic Method 文档](https://github.com/BedrockPlus/MagicMethodDocs)：原作者 [Chainsketch](https://www.youtube.com/@Chainsketch) 在资源包中的实体之间传递数据的技术文档 (编写者 [White](https://github.com/WhiteOnGitHub) 与 [chyves](https://github.com/notchyves)）
  - [微软官方文档](https://learn.microsoft.com/en-us/minecraft/creator/reference)：附加包/资源包的官方规范。
- **JavaScript库：**
  - [NBTify](https://github.com/Offroaders123/NBTify): Minecraft NBT 解析。
  - [tga.js](https://github.com/vthibault/tga.js): TGA 到 PNG 的图片转换。
  - [potpack](https://github.com/mapbox/potpack)：纹理图集打包。
  - [JSZip](https://github.com/Stuk/jszip)：压缩打包。
  - [Minecraft Creator Tools](https://github.com/Mojang/minecraft-creator-tools): LevelDB reader
  - [three.js](https://github.com/mrdoob/three.js)：3D 预览渲染。
  - [stats.js](https://github.com/mrdoob/stats.js) and [lil-gui](https://github.com/georgealways/lil-gui): Preview widgets
  - [Supabase](https://supabase.com): Free database for recording packs created
  - [strip-json-comments](https://github.com/sindresorhus/strip-json-comments)：JSON 注释清理。
  - [deepmerge](https://github.com/TehShrike/deepmerge)：JSON 合并工具。
```

## File: TERMS_OF_USE.md
```markdown
# HoloPrint Terms of Use
Thanks for using HoloPrint! Please read the following Terms of Use. They are effective as of November 17, 2024.

## 1. Created packs
All packs created are licensed under the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en) license. In short, you're not allowed to sell packs created using HoloPrint, or put them behind ads. These restrictions only apply to created packs directly.

Some examples of what is and isn't allowed:
- ✅ Writing a blog post tutorial explaining how to use HoloPrint
- ✅ Showing packs created with HoloPrint in a YouTube video
- ❌ Limiting access to packs created with HoloPrint with monetised link shorteners like Linkvertise
- ❌ Forcing people to either wait to download a pack created with HoloPrint or buy a subscription

If you have any questions regarding acceptable use, please feel free to reach out in our [GitHub Discussions](https://github.com/SuperLlama88888/holoprint/discussions).

## 2. Analytics
HoloPrint does **not** record any analytics except for the first 4 bytes of the SHA-256 hashes of structure files used in pack creation. Basically, this is a unique identifier for each file that **cannot** be used to find out the original file. This is used to see how many people are using HoloPrint. Daily statistics are recorded in [the holoprint-stats repository](https://github.com/SuperLlama88888/holoprint-stats), and the code to record structure file usage is in [the `supabase` folder](https://github.com/SuperLlama88888/holoprint/tree/main/supabase).

HoloPrint uses **no** cookies, and the only data stored on your browser is cached resource pack resources, which speeds up pack creation. Resource pack cache can be cleared with the _Resource packs -> Clear resource pack cache_ button.

For transparency, here is all the data stored for analytics:

![Structure hashes table](images/structureHashesTable.png)
```

## File: tsconfig.json
```json
{
	"compilerOptions": {
		"checkJs": true,
		"noEmit": true,
		"strict": false,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"skipLibCheck": true,
		"target": "esnext",
		"module": "esnext",
		"moduleResolution": "bundler"
	},
	"include": ["src/**/*", "globalPatches.d.ts"]
}
```

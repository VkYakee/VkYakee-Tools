/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { TextureEditor } from '../TextureEditor.js';
import { HoloPrintTool } from '../HoloPrintTool.js';
import { SchematicConverter } from '../SchematicConverter.js';
import { TexturePackMerger } from '../TexturePackMerger.js';
import '../texture-editor.css';
import '../converter.css';
import '../merger.css';

export default function App() {
  const [activeTool, setActiveTool] = useState<'texture-editor' | 'holoprint' | 'converter' | 'merger'>('texture-editor');
  const textureRef = useRef<HTMLDivElement>(null);
  const holoRef = useRef<HTMLDivElement>(null);
  const converterRef = useRef<HTMLDivElement>(null);
  const mergerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textureRef.current) {
      new TextureEditor(textureRef.current, {
        initialSize: 16,
        initialColor: '#5E8D34',
        seedInitialPattern: true,
        showTopbar: false,
      });
    }
    if (holoRef.current) {
      new HoloPrintTool(holoRef.current);
    }
    if (converterRef.current) {
      new SchematicConverter(converterRef.current);
    }
    if (mergerRef.current) {
      new TexturePackMerger(mergerRef.current);
    }
  }, []);

  return (
    <div>
      <header className="te-topbar">
        <a href="#multitool" className="te-brand">
          VkYakee Multi-Tool
        </a>
        <nav className="te-topbar-nav" aria-label="Selector de herramientas de la APK">
          <button
            type="button"
            className={`te-nav-action ${activeTool === 'texture-editor' ? 'is-active' : ''}`}
            onClick={() => setActiveTool('texture-editor')}
          >
            Editor de Texturas
          </button>
          <button
            type="button"
            className={`te-nav-action ${activeTool === 'holoprint' ? 'is-active' : ''}`}
            onClick={() => setActiveTool('holoprint')}
          >
            HoloPrint (.mcpack)
          </button>
          <button
            type="button"
            className={`te-nav-action ${activeTool === 'converter' ? 'is-active' : ''}`}
            onClick={() => setActiveTool('converter')}
          >
            Conversor (.schem / .mcstructure)
          </button>
          <button
            type="button"
            className={`te-nav-action ${activeTool === 'merger' ? 'is-active' : ''}`}
            onClick={() => setActiveTool('merger')}
          >
            Fusionador (.mcpack)
          </button>
        </nav>
      </header>
      <div ref={textureRef} className={activeTool === 'texture-editor' ? 'mt-tool-view' : 'mt-tool-view is-hidden'} />
      <div ref={holoRef} className={activeTool === 'holoprint' ? 'mt-tool-view' : 'mt-tool-view is-hidden'} />
      <div ref={converterRef} className={activeTool === 'converter' ? 'mt-tool-view' : 'mt-tool-view is-hidden'} />
      <div ref={mergerRef} className={activeTool === 'merger' ? 'mt-tool-view' : 'mt-tool-view is-hidden'} />
    </div>
  );
}

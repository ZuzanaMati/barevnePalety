import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from "./palettes.js"
import Palette from "./Palette/Palette.jsx"

/*
<div className="palette">
          <div className="palette-scheme palette-scheme--horizontal">
            <img className="scheme-image" src="/img/ocean-waves.jpg" alt="Ocean Waves" />
            <div className="scheme-colors">
              {palettes[1].colors.map((item) => (
                <SchemeColor
                  key={item}
                  color={item} />))}
            </div>
          </div>
          <div className="palette-info">
            <h2>Ocean Waves</h2>
            <p>Wildlife has given humanity an indescribable variety of color shades that, at first glance, cannot be combined for balance. However, the combination of dark greens canonically turns into a bright light green shade, growing into banana yellow. From the yellow tones, a sudden rich pink breaks through.</p>

            <p>Photo by <a href="https://unsplash.com/photos/wc9avd2RaN0" target="_blank">Christoffer Engström</a>.</p>
          </div>
        </div>
  */

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((palette) => (
          <Palette
            key={palette.name}
            paletteData={palette} />
        ))
        }
      </main >
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div >
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);

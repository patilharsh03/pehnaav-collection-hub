
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// This script helps with SPA direct URL access
const script = document.createElement('script');
script.innerHTML = `
  // Single Page Apps for GitHub Pages / Netlify
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
`;
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(<App />);

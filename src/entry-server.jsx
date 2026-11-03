// Server entry used only at build time by scripts/prerender.js. It renders the page to
// static HTML so crawlers that don't run JavaScript (many AI answer engines) see the
// full content. The browser then hydrates it in src/main.jsx.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

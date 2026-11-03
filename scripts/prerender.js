// Build step (run by `npm run build`): injects the server-rendered app into dist/index.html
// so the shipped page contains real HTML instead of an empty <div id="root">.
// Expects `vite build` (client) and `vite build --ssr src/entry-server.jsx --outDir dist-ssr`
// to have run first. Removes dist-ssr when done.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { render } from '../dist-ssr/entry-server.js'

const file = 'dist/index.html'
const html = readFileSync(file, 'utf8')
const marker = '<div id="root"></div>'
if (!html.includes(marker)) throw new Error(`prerender: ${marker} not found in ${file}`)

writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`))
rmSync('dist-ssr', { recursive: true, force: true })
console.log('prerender: wrote static HTML into', file)

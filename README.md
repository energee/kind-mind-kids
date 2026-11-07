# Kind Mind Kids

Website for Kind Mind Kids Early Learning Center, a daycare and preschool in Wilmington,
DE. A single-page React + Vite site, prerendered at build time and served from GitHub
Pages at https://kindmindkids.org/.

```sh
npm ci
npm run dev      # local dev server
npm run build    # production build with prerendered HTML, into dist/
npm run preview  # serve dist/ locally
```

## Brand assets

Vector logos from the center's brand files live in `public/brand/`:
`kmk-mark.svg` (blocks and children; navbar, footer, favicon), `kmk-wordmark.svg`
(the "Kind Mind Kids" lettering) and `kmk-logo-slogan.svg` (full logo with slogan;
About section). The site palette in `src/index.css` matches these colors.

The page's design language comes from the logo:

- **Toy blocks:** colored blocks with a white inset, used for the Programs age tabs
  and the Enrichment letters.
- **Yellow arc:** the ground line under the logo's blocks, drawn by
  `src/components/brand/Arc.jsx` under the hero photo and along the bottom of the CTA.
- **Color fields:** flat blue (Enrichment) and dark orange (CTA) sections, alternating
  with white and a pale sky tint (`--color-sky`).
- **One signature motion:** the Enrichment blocks drop in when scrolled into view
  (`.block-drop` in `src/index.css`); nothing else animates on scroll, and the
  animation is off when the OS "reduce motion" setting is on.

## Approved Kind Mind Kids photo exports

The website uses ten distinct center-approved photographs: seven selected from
nine user uploads, two additional public Facebook photos (indoor soccer and a
camping outing), and the original garden hero. Website-ready WebP files live in
`public/images/kindmind/`. The garden scene appears only in the hero, with
landscape and portrait crops for mobile and desktop.

Each program tab has its own square photograph:

| Program | Image | Uploaded attachment |
| --- | --- | --- |
| Infants | `infant-ball-play.webp` | 3 |
| One-year-olds | `one-year-sensory.webp` | 7 |
| Two-year-olds | `toddler-sensory.webp` | 9 |
| Preschool | `preschool-outdoor-play.webp` | 5 |
| Pre-K | `pre-k-discovery.webp` | 4 |

Placements are editorial age-appropriate selections; exact ages and classroom
membership were not supplied. Alt text and captions describe visible activities
without asserting individual ages. Facilities shows the uploaded water-play
photo. Enrichment shows a corn demonstration, indoor soccer, and a camping
snack break. No photo is reused across sections; no stock photography remains.
Brand logos are unchanged.

Corrections include individual white balance, selective shadow recovery, gentle
exposure correction, restrained color, composition crops, and web output
sharpening. No people, facial features, or locations were generated or replaced.
Exports use sRGB color profiles and omit original EXIF metadata. The seven largest
exports (hero crops, Facilities, the corn and camping photos, and the Twos and Pre-K
photos) are 960 to 1024px wide at WebP quality 78, resized from the JPEG masters in the
photo package. That still covers a 3x phone and a 2x desktop slot. Re-export from those
masters rather than the WebP files, so quality isn't lost twice. The farm images
depict an outing and must not be presented as the center's facilities.

`photo-edits/before-after.jpg` compares the current ten selected scenes.
`photo-edits/manifest.json` records provenance, crops, dimensions, editing
parameters, alt text, and placement. `photo-edits/kindmind-photo-package.zip`
contains all nine untouched uploads (including the two not selected), the three
retained Facebook source downloads, eleven JPEG edited masters, eleven WebP
exports, the comparison sheet, and the current manifest.

## SEO and answer engines

- **Prerendered HTML.** `npm run build` renders the app to static HTML
  (`src/entry-server.jsx` → `scripts/prerender.js`) and injects it into
  `dist/index.html`, so crawlers that don't run JavaScript (many AI answer engines)
  see the full page. `src/main.jsx` hydrates it in the browser. `npm run dev` still
  renders client-side only.
- **Structured data.** `index.html` holds `ChildCare` JSON-LD (address, phone, hours);
  keep it in sync with `Contact.jsx`. `Faq.jsx` renders the visible FAQ and its
  `FAQPage` JSON-LD from one array, so answers only need editing in one place.
- **Domain metadata** (all for `https://kindmindkids.org/`): canonical URL, Open Graph
  and `twitter:card` tags in `index.html`, `url`/`logo`/`image`/`geo` in the JSON-LD,
  `public/robots.txt`, and a one-page `public/sitemap.xml`. Change all of them together
  if the domain changes.
- **Share and icon images.** `public/og-image.jpg` (1200x630, cropped from the hero
  photo) is the link-preview image; `public/apple-touch-icon.png` (180x180, from
  `kmk-mark.svg`) is the iPhone home-screen icon and the JSON-LD logo.

## Deployment

GitHub Pages serves kindmindkids.org from github.com/energee/kind-mind-kids.
`.github/workflows/deploy.yml` runs `npm run build` on every push to `main` and
publishes `dist/`. The Pages source must be set to "GitHub Actions" (not "Deploy from
a branch"). `public/CNAME` carries the custom domain into `dist/`.

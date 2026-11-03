# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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

Six photos selected from 56 publicly accessible images on the center's
[Facebook gallery](https://www.facebook.com/kindmindkids/photos) have been edited
with the user's approval. Website-ready WebP files live in
`public/images/kindmind/`; `garden-with-teacher-hero.webp` is an additional
1536 × 1024 landscape crop. The hero uses the landscape crop on mobile and the
portrait edit on desktop. The program tabs share the garden-discovery photo,
captioned as an activity with older children rather than an infant-room photo.
The facilities section uses learning-in-the-garden with a tour caption, not a
claim to show classroom interiors. All three farm photos appear in enrichment
with outing captions. Every photographic image on the site is now center-approved;
the original stock photos have been removed. Brand logos remain unchanged.

Corrections include individual white balance, selective shadow recovery, gentle
exposure correction, restrained color, composition crops, and web output
sharpening. No people, facial features, or locations were generated or replaced.
Exports use sRGB color profiles and omit original EXIF metadata. The farm images
depict an outing and must not be presented as the center's facilities.

`photo-edits/before-after.jpg` shows the selected images.
`photo-edits/manifest.json` records source links, crops, dimensions, editing
parameters, and suggested alt text. `photo-edits/kindmind-photo-package.zip`
contains the six unmodified Facebook downloads, seven high-quality JPEG edited
masters, seven WebP exports, the comparison sheet, and the manifest.

## SEO and answer engines

- **Prerendered HTML.** `npm run build` renders the app to static HTML
  (`src/entry-server.jsx` → `scripts/prerender.js`) and injects it into
  `dist/index.html`, so crawlers that don't run JavaScript (many AI answer engines)
  see the full page. `src/main.jsx` hydrates it in the browser. `npm run dev` still
  renders client-side only.
- **Structured data.** `index.html` holds `ChildCare` JSON-LD (address, phone, hours);
  keep it in sync with `Contact.jsx`. `Faq.jsx` renders the visible FAQ and its
  `FAQPage` JSON-LD from one array, so answers only need editing in one place.
- **Not yet set up (needs the live domain):** canonical URL, `og:image`, `url`/`logo`
  in the JSON-LD, `sitemap.xml`, and `robots.txt` with a sitemap line.

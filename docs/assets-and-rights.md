# Asset provenance and rights

All four source artworks were downloaded from URLs listed in the supplied audit on 14 October 2026. Untouched originals live in `assets/originals/`; no competitor, stock or generated product photos are used. Public accessibility does not establish a publication license. Obtain owner permission and confirm artwork ownership before an official public launch.

| Original URL | Local original | Derivatives / usage |
|---|---|---|
| https://bunilla.shop/images/0/28261205/BunillaLogo-WxEu2PxuccHf3NF7Ih6R1g.png | `assets/originals/logo.png` | `logo.webp`, `wordmark.webp`; footer original, header crop, icons and social card |
| https://bunilla.shop/images/0/28261246/WhatsAppImage2026-09-25at11.29.13AM-qbkl-5teVB6tm8glyeIbUA.jpeg | `assets/originals/poster.jpeg` | `poster.webp`; gallery scrapbook artifact |
| https://bunilla.shop/images/0/28261311/IMG_0221-7dBHbTuELq9OsfCVwGdm3Q.PNG | `assets/originals/cups.png` | `cups.webp`, `bakes.webp`; hero, coffee chapter, original photograph bakery-detail crop |
| https://bunilla.shop/images/0/28261284/IMG_0224-EhfA6ksKVEprUc31B36FWA.PNG | `assets/originals/interior.png` | `interior.webp`, `interior-detail.webp`; story/gallery crops excluding printed unverified menu prices |

Photographic appearance/creation method and status of depicted premises are unverified. Captions consistently identify published Bunilla promotional imagery. The bakery detail is a crop, not an additional product photograph. Pizza is an original code-native SVG illustration clearly captioned as a concept; no menu specification is implied.

Image preparation is repeatable with Sharp (`scripts/prepare-assets.mjs`). Original large cup PNG: 2,845,096 bytes; local WebP: 61,952 bytes. Original interior PNG: 3,051,575 bytes; local cropped WebP: 89,908 bytes. Cropping contributes to the interior difference. `next/image` additionally serves responsive variants; only the actual hero image has priority. Originals are outside `public` and do not ship as browser downloads.

Font sources: `@fontsource-variable/cormorant-garamond` and `@fontsource-variable/raleway` (SIL Open Font License). Local Latin variable files and the two license texts are preserved in `src/fonts/`, delivered by `next/font/local`. No runtime Google Fonts requests. Social-card generation uses original logo artwork plus a simple code-native SVG composition and identifies the proposal as a concept.

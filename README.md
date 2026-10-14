# Bunilla — coming-soon website concept

A complete local owner-pitch redesign, using Next.js App Router, React, strict TypeScript, Tailwind CSS, GSAP/ScrollTrigger, and the original Bunilla assets. This proposal is not an authorized official replacement website.

## Run locally

Requires Node.js 20.9+ (built and tested with Node 24.18).

```powershell
npm.cmd ci
npm.cmd run dev
```

Open **http://127.0.0.1:3000**. On macOS/Linux use `npm` instead of `npm.cmd`.

For the production demo:

```powershell
npm.cmd run build
npm.cmd start
```

## Edit the proposal

- `src/data/site.ts`: factual details, proposed copy, links, imagery paths and preview settings.
- `src/data/careers.ts`: five advertised roles, hiring number and WhatsApp message templates.
- `src/app/careers/`: the careers route and styles that reuse the established brand tokens.
- `src/lib/metadata.ts`: consistent page titles, descriptions and social metadata.
- `src/styles/tokens.css`: exact brand palette and sampled original burgundy.
- `src/app/globals.css`: responsive composition and type scale.
- `src/components/sections/`: independently editable homepage chapters.
- `assets/originals/`: untouched downloaded Bunilla originals; `public/assets/bunilla/`: optimized derivatives.
- `scripts/prepare-assets.mjs`: repeatable image/font/favicon/social-card preparation (`node scripts/prepare-assets.mjs`). Local fonts are already included, so normal builds do not need font downloads.

The default is a visible concept note, `noindex`, crawl disallow, an empty preview sitemap, and localhost canonical URLs. Set `NEXT_PUBLIC_SITE_URL` to the real preview URL when hosting. Both `NEXT_PUBLIC_CONCEPT_PREVIEW=false` and `NEXT_PUBLIC_ALLOW_INDEXING=true` are required for indexing; change only after owner approval. Environment changes require a rebuild. The social preview also says concept; update it for an approved launch.

## Checks

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run test:smoke
```

The browser suite expects a running server on port 3000. It uses installed Microsoft Edge; change `channel` in `playwright.config.ts` if needed. For another port set `TEST_BASE_URL`.

## Implemented

Photo-led editorial hero; real original logo; six responsive sizes; three offering chapters; story and original imagery gallery; Instagram/email conversion; accessible desktop/mobile navigation; privacy/legal/404; metadata, icons, social card; GSAP entrances/reveals and restrained desktop image depth. No-JavaScript and reduced-motion fallbacks retain the complete experience. No tracking, fake signup, ordering, map pin, or unverified phone.

Careers at `/careers` lists Head Chefs (English Breakfast & Continental), Kitchen Helpers, Female Cashiers, Sales Girls, and Cleaners / Housekeeping. Each role opens WhatsApp at `923099086081` with a distinct encoded draft message; no message is sent by the site. The supplied hiring number is visible and selectable. Recruitment details come from the user's follow-up brief; this number is not the unverified general phone from the original audit. Careers is linked in all navigation and a modest homepage announcement. Site copy has been reviewed throughout, with page-specific titles and no visitor-facing em/en dashes.

See `docs/qa-report.md` for actual validation, `docs/assets-and-rights.md` for provenance, and `docs/owner-pitch.md` for the walkthrough and approvals needed before publication.

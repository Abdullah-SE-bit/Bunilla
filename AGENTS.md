# AGENTS.md — Bunilla Cafe Concept Site

These are standing instructions for coding agents working on the Bunilla owner's-pitch concept website. Read this file and `context_bunilla(1).md` **in full** before edits. The accompanying `Bunilla_Codex_Master_Prompt.md` defines the complete implementation brief.

## Objective
Ship a compelling, fully runnable Next.js App Router + React + strict TypeScript Bunilla café **coming-soon** concept. The owner sees it tomorrow. Make a premium, editorial hospitality experience, not a generic template or incomplete 3D tech demo. Prioritize functional P0 routes and responsive quality before optional features.

## Brand is non-negotiable
- Exact primary palette: rose `#A24C4E`, pink `#D56B6D`, cream `#F8F2E6`, brown `#2B1B18`; original logo's deeper burgundy may be sampled as supporting tone.
- Display font **Cormorant Garamond** (including tasteful italic accents), interface/body font **Raleway**.
- Business: **Bunilla**, **I-8, Islamabad**, **coming soon**, categories **coffee, fresh bakes, wood-fire pizza**.
- Original photos/brand artwork are in the source audit; preserve provenance, optimize images, and do not present third-party stock as Bunilla's actual products/premises.
- Avoid fabricated menu items/prices, opening dates/hours, reviews, awards, ordering/reservations, phone verification, exact address or map pin. Source phone `+92-51-1234567` is suspicious; avoid showing it without approval.
- Site is a **pitch concept**, not an officially endorsed/authorized Bunilla replacement. Include a removable preview note/config where needed.

## Build rules
- Use Next.js App Router, TypeScript strict, Tailwind, `next/image`, `next/font`.
- Use GSAP/ScrollTrigger as primary motion system; CSS transitions for small UI states. Optional R3F/Three.js only for one justified, graceful, lazy-loaded enhancement; fallback for no WebGL/reduced motion.
- Keep core copy/HTML visible even before JavaScript. No hidden-until-JS text, scroll-jacking, obstructive preloaders, heavy stacked motion libraries, or stuttering pinned mobile scenes.
- Use server components by default; small client components for interactions.
- Centralize factual content, links, business info and brand tokens for quick owner edits.
- Include semantic heading hierarchy, focus states, keyboard-operable mobile menu, correct anchors and reduced motion.
- Use owner-approved links only. Working baseline CTAs: Instagram `https://www.instagram.com/bunilla.isb/`, `mailto:info@bunilla.shop`, internal anchors.
- No fake signup success, nonexistent database, nonfunctional placeholder buttons, or invented privacy statements. Only persist waitlist email with a real validated backend and accurate consent/policy; otherwise rely on working Instagram CTA.
- Preview/staging must not masquerade as the official site; use configurable index/canonical policy.

## Delivery protocol
1. Inspect repo and audit before changing code. Do not delete unrelated files, reset history, force-pull, push/deploy or change production without permission.
2. Maintain a short P0/P1/P2 implementation plan and build actual pages rapidly.
3. P0: responsive hero, product/editorial sections, story, gallery/atmosphere, launch CTA, contact/footer, privacy, legal notice, 404, metadata.
4. Test nav, links, menu, all routes, image loads, keyboard navigation and no-overflow at ~375px/768px/1440px.
5. Run lint, strict TS check and production build; document only tests actually executed. Add smoke browser tests where available.
6. Keep `docs/brand-and-content.md`, `docs/assets-and-rights.md`, `docs/animation-spec.md`, `docs/qa-report.md`, and `docs/owner-pitch.md` concise and accurate.
7. End with how to run locally, implemented features, screenshots if generated, test results, TODOs, and a short owner-facing pitch walkthrough.

## Priority order
**P0:** memorable visually polished hero, complete usable responsive site, original identity, beautiful fonts/photos, real navigation and conversion links, stable fast build.
**P1:** a few purposeful cinematic scroll scenes, optional premium 3D, real backend-enabled waitlist, deeper QA.
**P2:** elaborate 3D flythrough, commerce, complex CMS, booking, full menu, extra platform integrations.

Never substitute plans or a progress report for a working codebase.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

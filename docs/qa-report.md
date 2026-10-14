# QA report — 14 October 2026

Verification environment: Windows, Node 24.18.0, Next.js 16.4.0, React 19.3.0, TypeScript 6.0.3. The initial source was subsequently pushed to the user's attached GitHub repository under explicit authorization. No site deployment, production-site modification or messages to the business were performed.

## Careers and copy follow-up

- Implemented `/careers` in the existing app. Exactly five supplied positions: Head Chefs (English Breakfast & Continental), Kitchen Helpers, Female Cashiers, Sales Girls, and Cleaners / Housekeeping. Both advertised categories and I-8, Islamabad are shown. No salaries, requirements, benefits, hours or deadlines were invented.
- Five unique application URLs use `https://wa.me/923099086081?text=` plus `encodeURIComponent()`. Accessible role-specific labels, new-tab opening and safe rel attributes are verified. The supplied local number `03099086081` is visible with native select-all styling. There is no application form or success state.
- Added Careers to desktop, mobile, no-JS and footer navigation, plus a modest homepage hiring announcement. Existing homepage sections, brand tokens, images, fonts, sticky-header offsets and mobile dialog behavior remain in place.
- Reused GSAP and added a once-only job-list stagger. No new dependency or motion library was installed.
- Reviewed visible copy, alt/accessible labels, navigation, footer, 404, legal/privacy and page/social metadata. Browser titles are page-specific, including `Careers at Bunilla` and `Page not found | Bunilla`. Privacy now accurately describes the WhatsApp handoff. Concept and indexing safeguards remain enabled.

### Final checks actually executed

`npm.cmd run lint` and `npm.cmd run typecheck` passed without errors or warnings. `npm.cmd run build` passed and statically generated `/careers` alongside existing routes. `npm.cmd start` served the final production build, with `/careers` returning HTTP 200. The final `npm.cmd run test:smoke` passed **all 21 tests** against that production server.

Both homepage and careers were checked at 360×800, 375×812, 390×844, 768×1024, 1024×768 and 1440×900: no horizontal overflow, correct roles/category/location, usable focusable actions, loaded images, and no page or console errors. Cross-route homepage/careers navigation, mobile close/focus/scroll restoration, anchor offsets, native no-JS links and reduced-motion static states pass. All five WhatsApp popup navigations were intercepted and their number/message verified; no external chat was contacted or application sent. Rendering/metadata tests check body text, alt/aria/title attributes and descriptions for em/en dashes and rejected copy patterns.

Eight Axe WCAG 2/2.1 A/AA scans returned zero detected violations: homepage and careers at desktop/mobile widths; privacy/legal/404 on mobile; open mobile drawer. Results are in `docs/accessibility-results.json`. This is automated coverage, not a claim of full accessibility conformance.

Generated production screenshots include `docs/screenshots/careers-{360,375,390,768,1024,1440}.png`, `careers-hero-{width}.png`, and careers viewport screenshots. Homepage/menu/legal screenshots were refreshed. Visually inspected desktop/mobile full careers pages, the desktop hero and the current homepage composition.

Two early QA issues were corrected: decorative mobile link numbers now have `aria-hidden`, and the multi-page accessibility scan gets a sufficient test timeout. A production preview was attempted before its build had finished; that run was stopped, and the final server/suite above ran after successful build completion.

Remaining verification limits: no recruitment poster images were attached, so titles/specialization/number use the exact supplied text brief; no independent poster extraction, live WhatsApp account verification, job availability confirmation, or application submission is claimed. No Lighthouse/throttled performance, physical phone or Safari/Firefox check was run. Existing development-only lint dependency advisory remains documented below; dependencies are unchanged. Servers are stopped after QA. The source update is committed/pushed separately under the user's prior GitHub authorization.

### Files changed

Created: `src/app/careers/page.tsx`, `careers.module.css`, `src/components/sections/Careers.tsx`, `HiringAnnouncement.tsx`, `src/data/careers.ts`, `src/lib/metadata.ts`, and `tests/careers.spec.ts`.

Updated: central site copy; homepage integration; root/home/privacy/legal/404 metadata; sitemap; shared mobile link accessibility; existing GSAP motion; reviewed section/image alt strings; homepage announcement CSS; social-card wording/generator; regression and accessibility tests; README and project docs. Original source photos, logo, font files, theme tokens, package manifest and lockfile are unchanged.

## Initial-build checks

| Command / check | Result |
|---|---|
| `npm.cmd run dev` | Next.js development server ran on `http://127.0.0.1:3000`; homepage and routes served |
| `npm.cmd run lint` | Passed, zero errors and warnings on final source |
| `npm.cmd run typecheck` | Passed strict TypeScript, no suppression |
| `npm.cmd run build` | Passed; all pages, robots, sitemap, icons and social-card route statically generated |
| `npm.cmd start` | Production server started successfully on port 3000 |
| `npm.cmd run test:smoke` against development server | Expanded suite: 11 passed in 53.5s |
| `npm.cmd run test:smoke` against final production server | 11 passed in 48.7s |
| Axe WCAG 2/2.1 A/AA tags | Zero detected violations in six scans; report in `docs/accessibility-results.json` |
| `npm.cmd audit --omit=dev` | Zero reported production vulnerabilities |
| Full `npm.cmd audit --json` | Five high findings in development-only lint chain, originating in `braces` ≤3.0.3; no patched release available at check time |

## Browser coverage

Actual headless Microsoft Edge via Playwright on this computer. Integrated-browser discovery returned no available browser, so the installed Edge browser was used for automated local QA and screenshots.

Homepage widths/heights: **360×800, 375×812, 390×844, 768×1024, 1024×768, 1440×900**. All checked for horizontal overflow, one visible text H1, launch/category information, image completion/natural dimensions, existing anchor destinations, real email/Instagram targets, and absent placeholder links. No browser page errors or console errors occurred in the final six responsive homepage checks.

Interactions: mobile menu opening/closing, focus wrapping, Escape, focus return, restored body scrolling, story anchor, and logo returning home; keyboard skip link; all desktop navigation anchors with sticky-header offsets. Privacy/legal returned 200 and branded unknown routes (including removed `/subpage`) returned real 404. Canonicals, noindex, robots disallow, empty preview sitemap, icons and social-card image responses were verified.

Reduced-motion and JavaScript-disabled mobile contexts were tested. HTML, CTAs and navigation remained usable; nonfunctional no-JS menu trigger is hidden and a native link row is available.

Axe scans: homepage at 1440px and 375px; privacy/legal/404 at 375px; open mobile drawer. Automated scans do not establish complete accessibility conformance or substitute for human assistive-technology testing.

## Visual review and fixes

Generated and inspected full-page desktop/mobile screenshots and close-up desktop/tablet/mobile hero and drawer images. Fixed local-font path resolution, explicit focus wrapping at drawer boundaries, menu-logo dismissal, and Next.js native smooth-scroll configuration. Original imagery crops avoid the printed unverified prices in the interior. Assets, headings, photo crops and CTAs remain visible with no overlapping text or horizontal overflow.

Screenshots: `docs/screenshots/hero-{360,375,390,768,1024,1440}.png`, `home-{width}.png`, `menu-375.png`, `privacy-viewport-375.png`, `legal-notice-viewport-375.png`, and `missing-page-viewport-375.png`. The final production run refreshed these artifacts.

## Performance and remaining limits

No Lighthouse score, measured Core Web Vitals, Safari/Firefox/device testing, throttled-network benchmark, email delivery test or authenticated Instagram visit is claimed. Performance measures implemented: static pages, optimized responsive local images, priority only on hero, lazy below-fold media, local variable fonts, limited hydration, no continuous animation loops or WebGL. Development LCP advisory warnings appeared while test scripts scrolled to lower images; these did not indicate missing assets and did not recur as console errors in the production suite.

The `braces` advisory concerns the development lint tool's glob parsing, not the shipped application. npm suggested a major downgrade of the Next.js lint configuration; it was not applied because it would mismatch this stack. Recheck upstream updates before long-term maintenance; do not run `audit fix --force` blindly.

Owner review remains necessary for proposed copy, imagery rights/venue status, final legal operator/hosting details, contact confirmation and public-launch authorization. Optional waitlist, 3D, commerce and booking are intentionally deferred. No fabricated menu, dates, phone, exact map pin, reviews or operational services have been added. Local servers are stopped after QA; use README commands for the demonstration.

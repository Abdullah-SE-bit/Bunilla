# QA report — 14 October 2026

Completed local implementation and verification on Windows, Node 24.18.0, Next.js 16.4.0, React 19.3.0, TypeScript 6.0.3. No deployment, push, production-site modification or messages to the business were performed.

## Executed checks

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

# BUNILLA — CODEX MASTER BUILD PROMPT

**Mission:** Build a pitch-ready, exceptionally polished, responsive, cinematic, production-minded **Bunilla café coming-soon website** in Next.js + React + TypeScript. This is an implementation task, not merely a planning/design discussion. Complete the build, run it, test it, and leave the repository demonstrable tomorrow.

**Input artifacts:** I am providing this prompt together with `context_bunilla(1).md`, a detailed public-site audit collected 14 October 2026. Read that ENTIRE Markdown document first. Original site: https://bunilla.shop/ . Treat that audit as the source of truth for CURRENT observable brand, verified website copy themes, images and URLs; it is **not** a blueprint for repeating the existing weak layout. Check the live site only as a secondary, potentially changing source. When evidence conflicts, record it and prefer the audit for its stated inspection date unless current directly observed evidence demonstrably supersedes it. Do not claim verified facts that are merely assumptions.

**Deadline and priority:** I will show this to Bunilla's owner tomorrow. A complete, beautiful, fast, credible and visually polished demo is far more valuable than a giant half-built feature set. Prioritize a runnable and finished P0 experience. Ship a coherent design instead of placeholder cards, unfinished pages or impressive but broken animation.

---

## 0. Role, operating contract and output standard

You are a coordinated senior team in one Codex session: hospitality brand art director, award-caliber digital designer, senior Next.js/TypeScript engineer, animation/3D engineer, accessibility/performance specialist, and QA reviewer. Your job is to **make the site**.

Operate autonomously as far as reasonable. Inspect the existing repository before choosing setup steps; do not delete unrelated work, force-pull, rewrite git history, deploy, send messages, push commits, or modify the real Bunilla website without explicit permission. If there is no app, initialize one. If there is an app, adapt it safely. Work on the current branch unless branching is clearly supported; if changing branches, explain what you did.

Follow this sequence, but don't stop after planning:
1. Ingest `context_bunilla(1).md` completely, inspect current repo and catalog trustworthy brand facts and original asset URLs.
2. Create a short `AGENTS.md` with project guardrails and a practical implementation checklist at `docs/implementation-plan.md`.
3. Implement the actual application and visual system with a working local preview.
4. Add motion progressively; it must never prevent correct reading or navigation.
5. Check desktop/tablet/mobile behavior and interactions with the available browser/test tools.
6. Run lint, typecheck, production build, and appropriate automated smoke tests; fix failures.
7. Provide exact startup commands, completed vs deferred features, known uncertainties, and a short demo walkthrough. **Do not report checks as passed if not executed.**

Use concise, truthful progress updates as you go. Ask only for truly blocking information; when data is unconfirmed, make a safe design decision and document it rather than halting.

---

## 1. Business and brand: immutable source-of-truth constraints

**Business identity:** Bunilla, a forthcoming café/bakery in **I-8, Islamabad, Pakistan**, with three explicitly promoted categories: **coffee, fresh bakes / pastries, and wood-fire pizza**. Concept: a warm neighborhood meeting point, quality ingredients, inviting social moments. Launch state: **coming soon**, not already open. No firm opening date, menu items/prices, opening hours, reservation service, ordering process, exact entrance address, or live payment system was established in the audit.

**Existing identity MUST survive the redesign:**

| Token | Source value | Intended use |
|---|---|---|
| Primary rose | `#A24C4E` | branded sections, links and accents |
| Soft pink | `#D56B6D` | restrained details, secondary highlights |
| Rich coffee brown | `#2B1B18` | main dark text, atmospheric dark areas |
| Cream | `#F8F2E6` | dominant warm background |
| White | `#FFFFFF` | controlled card/surface contrast |
| Soft neutrals | `#CACCCB`, `#F0F2F1` | utility where truly useful |

The raster logo has a deeper burgundy than the UI rose. Sample the real logo and optionally introduce a deeper derived burgundy token solely as a support shade, documenting it. **Do not replace the palette with generic black/white, neon, purple, bright orange, or generic 'coffee shop green'.** Warm brown or restrained antique gold can be subtle supporting accents, not brand replacements.

**Fonts:** Preserve **Cormorant Garamond** for editorial display typography and **Raleway** for interfaces/body. Use `next/font/google` or properly hosted files and request real available regular, semibold/bold and italic weights; don't reproduce the old site's mismatched font declarations. Expressive but readable Cormorant italic words are welcome; avoid randomly adding many font families. Use careful type scales/clamp, letter-spacing, text balance and rhythm.

**User-facing factual data permitted from the audit:**
- Bunilla; `bunilla.shop`; café coming soon in I-8, Islamabad.
- Brand offerings: coffee, fresh bakes, wood-fire pizza.
- Public email `info@bunilla.shop`, but delivery was not tested.
- Public Instagram handle `bunilla.isb`; prefer canonical `https://www.instagram.com/bunilla.isb/` and verify link where possible.
- Website's displayed telephone `+92-51-1234567` looks like a placeholder: **do not show as a confidently valid phone number** without confirmation.
- Location metadata coordinates `33.7184014,73.0852612` are **not confirmed** as the entrance: do not pin or claim an exact storefront location.
- Do not say 'open now', mention operating hours, offer menu prices, invent signature drinks, customer reviews, ratings, awards, founder quotes, certifications, delivery partners, exact opening date, or a full menu.
- Do not pretend a conceptual design is Bunilla's officially approved website. If a concept note/badge is required, use a tasteful nonintrusive `Concept website / proposed redesign` indicator for the owner's preview, removable through a config flag before authorized launch.

**Tone of copy:** Elevated but approachable, warm, simple, coffeehouse-specific, brief, natural English. Not tech jargon, not generic 'unlock your potential' startup language. Position Bunilla as **coffee + bakery + wood-fire pizza**, not as exclusively an espresso bar. ALL copy should be editable from a centralized data/config file and owner-approvable.

---

## 2. Current-site audit: fix these specific weaknesses

Audit: `context_bunilla(1).md`. Do not reproduce old problems:

1. Hero currently cycles three static images with a dark overlay and a limited invitation. Build an immediately recognizable, premium above-the-fold identity; brand + food promise + I-8 + coming-soon must be legible without waiting for animation.
2. Original 'Sign Up Now' href is `#`, with **no form/collection flow observed**. Do not keep a dead button or show pretend signup success.
3. Original presentation has generic icon cards rather than persuasive food imagery/storytelling. Replace with curated hospitality editorial storytelling.
4. Current logo is displayed as small square art with significant whitespace, making the wordmark tiny. Extract a legible visual wordmark treatment from the original, or render a respectful text treatment beside the real logo; don't invent a new logo without authorization.
5. Original image-only H1 usage and actual marketing headline H2 create weak heading semantics. Use exactly one intentional text H1 on the home page, semantic headings elsewhere.
6. Some footer social icons link to `#!next`, Facebook goes to the generic site, X lacks a working destination. Only show brand-specific verified social destinations; no dead links.
7. Current responsive CSS contains invalid negative font sizes; test actual screens rather than assuming CSS breakpoints are adequate.
8. Two large hero PNG originals total ~5.9MB. Optimize responsive images and intelligently preload ONLY the true LCP image.
9. `/subpage/` is public builder scaffolding, advertised by the old sitemap. Exclude the placeholder from this new site's routes and sitemap. New 404 should be designed.
10. The legal/privacy text appears template-like and may assert analytics, payments, or collection not actually implemented. Do not copy those legal claims uncritically. Use clearly editable, reviewed-required legal drafts consistent with actual data flow.
11. Current site has no observed dedicated real menu, checkout, booking or product store. Do **not** imply Bunilla has one now. A conceptual category showcase is allowed, labeled as such.
12. Do not mechanically reuse the old full-screen auto-slider: the new aesthetic must feel thoughtfully art-directed, not a slideshow template.

---

## 3. Design thesis: premium editorial hospitality, not SaaS

**Creative north star:** "Bunilla — Good things are brewing in I-8." An inviting, editorial, cinematic brand experience with creamy paper-like warmth, distinctive burgundy accents, generous high-end typography, natural food photography, asymmetrical compositions, and extremely smooth yet restrained motion.

Think artisan café campaign / contemporary food magazine / boutique hospitality microsite. The result should be memorable in a 20-second owner demonstration and still practical for customers.

Visual language:
- Warm off-white, branded burgundy/rose, lightly textured paper overlays (CSS only if subtle), atmospheric brown text, occasional tasteful soft pink details.
- Oversized sophisticated serif display type with selective italic emphasis; clean sans-serif labels/navigation/body.
- Strong photography compositions. Full bleed where justified, image masks/arches/rounded organic corners selectively; avoid repetitive pill cards.
- Elegant 12-column grid, deliberate asymmetry, breathing room, varied pacing; do not create 'seven identical sections with a heading and three cards'.
- Graphic accents based on café motifs: fine divider rules, bean/steam curves or tiny circular stamps (tasteful, not cheesy iconography).
- One strong hero composition > numerous mediocre 'wow' effects.
- Warm, intimate, slightly playful mood appropriate to Islamabad's contemporary café culture; avoid dark gaming-style aesthetics, rainbow gradients, neon glow, overuse of glassmorphism, fake 3D mascots, and noisy particle backgrounds.

**Example owner-editable copy** (directional, not a claim of approved tagline):
- Small eyebrow: `I-8 · ISLAMABAD · COMING SOON`
- Main headline: `Good things are brewing in I-8.` (make one or two words italic if aesthetically stronger)
- Supporting: `Coffee, fresh bakes, and wood-fire pizza. A new neighborhood moment is on its way.`
- Primary working CTA: `Discover Bunilla` (scroll to experience)
- Secondary working CTA: `Follow the launch` (actual Instagram profile)
- Product sections: `A cup worth slowing down for.` / `Something fresh from the oven.` / `A little wood-fire magic.` (aspirational headlines; do not make factual unverifiable sourcing claims)
- Community section: `Made for moments together.`
- Final: `I-8, we're almost ready.` + `Be there from the beginning.`

Draft concise authentic section copy informed by the audit. No long wall-of-text, no fabricated story of origins, recipes, chefs or awards.

---

## 4. Information architecture and page requirements

### P0: `/(home)` — a complete high-quality experience

**A. Site-wide header/nav**
- Minimal fixed or intelligently sticky header, transparent/light over the hero as appropriate, becoming a readable cream/rose surface on scroll.
- Readable real logo/wordmark, optional tiny `COMING SOON` note; polished hover/focus states.
- Navigation: `Home`, `The Experience`, `What’s Coming`, `Our Story`, `Find Us` (anchors that truly exist); Instagram CTA or appropriate launch CTA.
- Desktop navigation should be visible; mobile should have an accessible open/close drawer. Avoid the old site mistake of relying solely on a hamburger at desktop sizes.
- Correct anchor offsets; no obscured headings behind sticky header.

**B. Cinematic hero — MAIN DESIGN INVESTMENT**
- Responsive 90–100svh-ish editorial hero with highly legible headline, brand identity and launch status; avoid hiding essential content beneath animation.
- Lead with best supplied brand photography (cups/interior) thoughtfully cropped, or an original procedural, performant composition. Use the cream launch-poster image intentionally (small editorial artifact) rather than making text baked into the poster the main accessible headline.
- Compose layered branded typography and image/illustration with clear foreground/background hierarchy; subtle entrance animation sequence, word/line reveal (avoid letter-by-letter that harms readability), modest depth/parallax, optional one well-executed 3D detail.
- Hero opens beautifully even before animation is ready. Real visible DOM heading; never put critical text only on canvas/video.
- Working CTAs, understated down-scroll affordance, no mandatory loader or autoplay audio.

**C. Product promise / brand ribbon**
- An elegant divider/ribbon/typographic ticker communicating `COFFEE · FRESH BAKES · WOOD-FIRE PIZZA`.
- If animated, motion is extremely slow, transform-based, and either stops under reduced motion or becomes static. No distracting endless high-speed marquee.

**D. Three product pillars — photo-led editorial scenes**
- Distinct treatment of Coffee, Fresh Bakes, Wood-Fire Pizza. A sequence of large typographic chapters with imagery, strong number/eyebrow treatments, crafted copy and restrained scroll entrances.
- Use exactly what audit substantiates; no invented individual products, descriptions of recipes or price tags.
- At least one visually impressive interaction: staggered image mask reveal, gentle image depth parallax, or carefully designed desktop pinned composition (only if it stays fluid and never traps mobile users).
- If original assets don't contain a usable pizza photo, use a clearly labeled replaceable *concept/stock image* with documented rights, or create a typographic illustration/graphic rather than misrepresenting another restaurant's food as Bunilla's.

**E. Story / values — authentic community angle**
- Reinterpret documented values (`Something Delicious`, `Quality Ingredients`, `Community Focused`) into a short natural story and concise supporting motifs, not a stock three-card corporate services row.
- Use a striking editorial split-layout with one image, layered oversized quote-style (non-attributed) typography and a grounded paragraph.
- Brand claims must remain carefully phrased as intentions/plans before opening.

**F. Atmosphere / gallery**
- Responsive photo-led collage/gallery spotlight with tasteful hover movement and captions when grounded.
- Original interior/cup photography can be used with careful crops. **Do not claim interior imagery depicts the finished real premises; status is unverified by audit.** If used, visually present as Bunilla's current promotional imagery, not as independently verified physical reality.
- Avoid a big gallery of duplicate images if only two useful non-logo photos exist; quality > section count.

**G. Coming-soon / conversion**
- A distinctly designed burgundy/rose and cream CTA finale; repeat coming-soon status, I-8, and the Instagram profile.
- Primary guaranteed-working conversion is follow Instagram. If implementing waitlist, see the functional and privacy constraints below. Never make an unconnected CTA look live.
- Optional subtle monogram/seal animation, not an intrusive full-screen final canvas.

**H. Find Us / contact / footer**
- Say `Opening soon in I-8, Islamabad`. Show email as `mailto:info@bunilla.shop`; show Instagram link.
- If map is useful, link to a general `I-8, Islamabad` maps search, **not** an unverified exact pin/directions to a presumed entrance. Do not show fabricated opening hours.
- Visually complete footer with navigation, small brand statement, copyright appropriate to 2026, legal links, and a modest optional preview/concept marker.
- No generic Facebook URL, broken Twitter/X link, placeholder `#`, and no `tel:` without confirmed phone.

### P0 secondary routes
- `/privacy`: clean branded page; a narrowly scoped, accurate, editable policy draft, explicitly marked for owner/legal review, describing only what the app actually does. If no personal data is collected, don't claim an email signup system exists. If signup is enabled, describe collection and purpose.
- `/legal-notice`: a branded, simple editable business/contact information page without inventing corporate registration/proprietor identity. Add a clearly noted 'business details to be verified' comment in source, not embarrassing unfinished placeholder copy in hero.
- Custom `not-found.tsx`: on-brand friendly 404, back-home CTA.
- `robots.ts`, `sitemap.ts`, metadata/Open Graph and correct canonical URLs for the **preview domain** as appropriate; when deployed to a staging domain, discourage accidental indexing until client approval and avoid advertising the concept as official.

### P1 if P0 is rock solid
- Opt-in waiting-list feature with **real server-side persistence** only once working credentials and lawful policy are configured; see Section 7.
- Lightweight hero visual interactive 3D enhancement; product chapter transitions; advanced mask clipping; polished page entrance/exit where actually beneficial.
- Open Graph card (designed in brand colors), favicons from logo, schema `Organization` or appropriately qualified `CafeOrCoffeeShop` only for factual published properties. Do not supply fake opening hours/address/geo coordinates.

### P2, do NOT compromise tomorrow's deliverable
- Full menu/CMS, dynamic inventory, online ordering/checkout, bookings, loyalty program, multilingual content, full elaborate 3D world or video pipeline. These require confirmed operational details or budget; document as future possibilities, do not pretend complete.

---

## 5. Recommended technical stack and engineering boundaries

Use a modern, maintainable Next.js stack:

**Required**
- Current compatible stable **Next.js App Router** (React Server Components where appropriate).
- **React + strict TypeScript**; no `any` shortcuts for app data.
- **Tailwind CSS** for design system and responsive composition; central CSS variables for brand tokens; use a small, maintainable design tokens layer.
- **GSAP with ScrollTrigger** for the few storytelling animations that genuinely require timeline/scroll orchestration; register plugins safely in client components; use `@gsap/react`/context cleanup.
- `next/image` for responsive assets, `next/font` for fonts. Optimize source brand assets to WebP/AVIF when permitted and useful; keep provenance and originals separate.
- `lucide-react` or small hand-authored SVG icons when needed, not generic icon cards.
- `zod` for data validation where there is an actual form or backend.
- A11y-friendly headless primitives (Radix/shadcn only if genuinely needed) rather than importing a heavy universal component system for a handcrafted hospitality landing page.

**Optional and carefully justified**
- **Three.js + @react-three/fiber + @react-three/drei** for *one* high-impact premium 3D coffee-related visual. If supplied photo assets are stronger, prioritize art direction rather than forcing 3D.
- A carefully modeled/constructed cup, swirling coffee surface or delicate steam may be procedurally generated if no authorized GLB exists. It must look intentional and on-brand, not like raw demo geometry.
- If 3D canvas exists, lazy-load it with `next/dynamic` and `ssr: false` inside a client boundary; handle WebGL unsupported, slow devices, resize and context loss with a visually excellent still-image fallback. Pause/render on demand when out of view and cap device pixel ratio (e.g. <=1.5–2).
- **Lenis smooth scrolling** only if it demonstrably improves the experience and is wired correctly to GSAP; otherwise native scrolling + GSAP is preferred. Never scroll-jack or break keyboard navigation. Respect `prefers-reduced-motion`.
- A small amount of native CSS for hover/focus/microinteractions; do not combine several competing motion libraries just to increase the dependency count. Avoid stacking Motion + GSAP + Lenis + heavy canvas effects indiscriminately.

**Architecture guidelines**
- Server Components for mostly static section markup; Client Components only for interactive nav, scroll sequences, optional canvas or forms.
- Clear `/components/layout`, `/components/sections`, `/components/ui`, `/lib`, `/data`, `/styles` or equivalent structure. No monolithic 1500-line JSX page.
- Central `src/data/site.ts` or equivalent with business profile, verified/unverified flags, copy, sections, assets, links and demo/production toggles; no strings scattered throughout components.
- Central motion helpers/hooks that clean up listeners and revert GSAP contexts on unmount.
- No opaque remote API dependency for core rendering. No embedded fake backend. No secret keys committed or shipped to client. Environment variable example file if necessary.
- Fix type errors instead of suppressing them. Prefer documented stable APIs to guessing APIs that may not be available in installed versions.

---

## 6. Animation direction: sophisticated and buttery, not chaotic

**Motion goal:** perceived 60fps responsiveness, warmth, natural cinematic pacing; product content must remain accessible, and LCP should not be blocked by JavaScript. Favor compositor-friendly transforms/opacity. Don't continuously animate layout properties or add many massive blur filters.

### Animation choreography (guidelines, not hard timings)

| Area | Motion behavior | Quality guardrail |
|---|---|---|
| First load | Small editorial stagger: eyebrow, large headline, subcopy, CTAs, image | <= ~1s primary entrance once ready; text present before JS |
| Hero visual | Very gentle parallax/depth, restrained scale shift | No significant motion sickness; no CLS |
| Navbar | Transparent-to-solid or text contrast transition on scroll | Legible at all positions; keyboard-safe |
| Product reveals | Image mask/clip or reveal from ~24px with opacity | Once per section; lightweight; avoid 'hidden forever' on JS failure |
| Typography | A few intentional line/word reveals and Cormorant italic flourishes | Avoid animating every character/sentence |
| Gallery | Subtle image scale/translate or hover depth | No giant zoom, no disorienting 3D tilt |
| Brand ticker | Optional slow endless x translation | Stop/static in reduced motion |
| 3D (optional) | Slowly reactive coffee cup/steam, pointer tilt maybe <=6deg | Only after core content; static fallback |
| Scroll navigation | Correct anchor positions, optional mild native smoothness | Normal browser scroll must remain functional |
| CTA | Soft color/underlay shift, slight lift | Strong focus-visible styles and hover contrast |

- Use a natural motion curve such as `cubic-bezier(0.22, 1, 0.36, 1)` for tasteful reveals; don't mindlessly use spring bounce for every component.
- Common reveal timing about 0.5–0.9 seconds, stagger ~0.06–0.12 seconds. Keep overlaid multi-layer sequences restrained.
- Desktop pinned/scroll-scrub scenes are optional, not mandatory. Avoid long empty scroll intervals, jittery ScrollTriggers, fixed layers obscuring links or creating hidden content.
- Mobile: simplify or remove heavy scroll effects, disable 3D where needed, keep animations short and preserve native touch behavior.
- Support `prefers-reduced-motion: reduce`: no scrubbed/parallax camera motion, minimal or no reveals, static decorative ticker and static canvas replacement as appropriate.
- Work when JavaScript is delayed or disabled: principal copy, headings and links render without disappearing.
- Never promise arbitrary measurable performance improvements: measure/test and report honestly.

---

## 7. Conversion flow, forms and real-data handling

The old `Sign Up Now` link is nonfunctional. We need conversion, but **accuracy beats a pretend signup**:

**Required P0 guaranteed functional paths:**
- `Follow the launch` links to the brand's Instagram account.
- `Contact` opens actual email `mailto:info@bunilla.shop` (email service is external/unverified).
- `Discover Bunilla` smoothly/natively moves to a real section.

**Optional real launch waitlist only when configured:**
- Present a beautifully designed email capture form with full validation, consent copy, loading, duplicate handling and accessible error/success announcements only if backend persistence actually works.
- Suggested implementation: Next.js Route Handler + zod + Supabase (or Neon/Postgres) using configured env variables. Server-side validation, honeypot, appropriate rate limiting/abuse protection and safe storage. Never hardcode credentials.
- Only show a 'subscription complete' success state after a real successful response and committed persistence. No fake API or in-memory promise pretending to have captured a real lead.
- If credentials unavailable, the default production-looking experience should feature working Instagram CTA, not an inactive signup. A demo-only signup UI is permitted only if clearly labeled `Demo — no information is sent` and disabled from live/production mode.
- If any data is genuinely collected, draft accurate privacy/consent copy and state retention/operator details require client review. Don't copy the original privacy page's unsupported claims about payments/analytics/GDPR compliance.

**No payments, no fake preorders, no confirmed reservations** unless the owner supplies the required details and explicitly authorizes them.

---

## 8. Asset sourcing and image quality — IMPORTANT

Download/read **only the published Bunilla site assets** where technically accessible for an owner-facing design concept. Use provenance in `docs/assets-and-rights.md` and require approval before publishing to a new public domain as an official website.

Known Bunilla original image URLs from the supplied audit:

1. **Logo** (1080×1080):
   `https://bunilla.shop/images/0/28261205/BunillaLogo-WxEu2PxuccHf3NF7Ih6R1g.png`
2. **Coming-soon promotional artwork** (1080×1088):
   `https://bunilla.shop/images/0/28261246/WhatsAppImage2026-09-25at11.29.13AM-qbkl-5teVB6tm8glyeIbUA.jpeg`
3. **Branded takeaway cups, counter, pastry display** (1122×1402):
   `https://bunilla.shop/images/0/28261311/IMG_0221-7dBHbTuELq9OsfCVwGdm3Q.PNG`
4. **Warm Bunilla café interior promotional photo** (1122×1402):
   `https://bunilla.shop/images/0/28261284/IMG_0224-EhfA6ksKVEprUc31B36FWA.PNG`

Audit observed image display versions in `/images/1920/…` too. Inspect the originals first; use owner-provided assets if present in the repo; avoid hotlinking Bunilla's image server in the final standalone build. Generate modern efficient formats and multiple sizes if needed. Preserve aspect ratios; control cropping per breakpoint so cups, wordmark and important objects aren't awkwardly cut off. Add meaningful alt text for content photographs, empty alt for purely decorative layers. Avoid treating text inside a promotional poster as accessible main heading.

**Do not silently steal competitor imagery** or present unrelated stock photos as authentic photos of Bunilla. If more images are necessary, use licensed generic hospitality imagery as visibly replaceable *concept placeholders* and write an asset manifest listing each source/license/approval state. For owner pitch, prefer fewer outstanding assets and strong clever typography to poor, misleading stock. Don't invent food photography and label it verified menu items.

Logo advice: its original square contains substantial negative space. Show it in an appropriate large brand treatment or pair with a faithful typographic `BUNILLA` wordmark; do not crudely crop away meaningful artwork. If logo text is tiny, prioritize readability in navbar.

---

## 9. Accessibility, SEO, mobile and performance expectations

**Accessibility**
- Semantic `header`, `nav`, `main`, `section`, `footer`; one text H1; natural heading hierarchy.
- Accessible mobile navigation: real `<button>`, `aria-expanded`, accessible label, Escape closes, appropriate focus placement/trap/return and body scroll handling when drawer open.
- Keyboard navigation and visible focus rings; skip-to-content; sufficient contrast especially rose/pink on cream.
- Meaningful image alt decisions; buttons and external links work; form labels/errors/status if implemented.
- Minimum reasonable touch target sizes (~44px), no hover-only critical functionality, accessible fixed navigation.
- Reduced motion honored; no flashing, scroll trap or endless heavy animations.

**SEO / social sharing**
- Page title and description specifically reference Bunilla, coffee/bakery/wood-fire pizza, I-8 Islamabad, coming soon.
- Correct canonical domain **configured via an environment variable** to distinguish demo from approved production; do not canonicalize the preview as official by mistake.
- On production after approval, generate clean robots/sitemap with only valid routes; on pitch/staging optionally `noindex` and protect against confusion with Bunilla's official domain.
- Open Graph/Twitter metadata with clean, optimized preview image. Add JSON-LD only with confirmed business fields. Don't assert exact coordinates/hours/phone from unverified data.
- Do not add unapproved Google Analytics, Meta pixel or intrusive tracking just to look 'production grade'.

**Mobile & responsive**
- Inspect layouts at approx 360/375/390px, 768px, 1024px and 1440px. No horizontal overflow or clipped typography; a visible readable hero without being forced to scroll past canvas.
- Font size with `clamp()`, deliberate line breaks and dynamic viewport units (`svh`/`dvh` where appropriate).
- Mobile product chapters stacked naturally; no fragile pinned desktop interaction or giant picture covering heading.
- Test real keyboard tab path, menu open/close, anchor scroll, button targets, image loading, 404, privacy, legal, basic form state where applicable.

**Performance**
- Aim for fluid interactions and Core Web Vitals-conscious loading; run Lighthouse/PageSpeed if available and report settings and actual numbers rather than inventing scores.
- Prefer static/SSR for content and minimal client hydration. Real hero LCP photo gets proper priority and dimensions. Lazy load below-fold media and WebGL. Use image optimization.
- Minimize layout shifts. Avoid continuous main-thread work, scroll event handler thrashing, giant blur areas, massive scripts, autoplay video and eager Three.js bundles.
- On mobile/low power: turn off expensive effects with good art-directed fallback instead of degrading into blank spaces.

---

## 10. Repository structure and Codex 'harness' files

Create and maintain the following lightweight files to guide yourself and any later coding agent:

**`AGENTS.md`** with explicit instructions:
- `context_bunilla(1).md` is read-first source-of-truth for brand facts; don't hallucinate unconfirmed offerings, dates or addresses.
- Preserve brand hex palette + Cormorant Garamond/Raleway.
- The build is an owner pitch, not an authorized official Bunilla website; avoid claims of endorsement.
- One motion system; accessible reduced motion; don't conceal essential content before JS.
- Don't introduce a fake operational signup.
- Complete/test P0 before P1; maintain accurate TODO list; don't claim tests unrun.
- Safe git/workspace behavior, no destructive commands.

**`docs/implementation-plan.md`**: one-page phased checklist with P0/P1/P2 and status, not an essay.

**`docs/brand-and-content.md`**: verified brand facts; unverified business details; palette/type; approved/proposed copy; source references.

**`docs/animation-spec.md`**: each substantial animated interaction, library, desktop/mobile behavior, reduced-motion fallback, performance rationale.

**`docs/assets-and-rights.md`**: brand asset URL, local path, usage, provenance, concept stock placeholders, confirmation required.

**`docs/qa-report.md`**: commands run, outcomes, tested screen sizes, screenshots paths if created, browser issues and fixes, exact remaining limitations.

**`docs/owner-pitch.md`**: 45–60 second natural owner-facing walkthrough, 3–5 tangible business benefits, requested approvals/assets and suggested post-pitch rollout. Frame the design as a proposal/concept, not as work the owner commissioned.

Recommended structure (adapt if repo differs):

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    not-found.tsx
    privacy/page.tsx
    legal-notice/page.tsx
    robots.ts
    sitemap.ts
    opengraph-image.tsx             # optional
    api/waitlist/route.ts          # only if real backend enabled
  components/
    layout/Header.tsx
    layout/Footer.tsx
    sections/Hero.tsx
    sections/Offerings.tsx
    sections/Story.tsx
    sections/Atmosphere.tsx
    sections/LaunchCTA.tsx
    sections/Visit.tsx
    motion/Reveal.tsx
    motion/ScrollScene.tsx
    three/CoffeeExperience.tsx    # only if justified
    ui/BrandMark.tsx
  data/site.ts
  lib/motion.ts
  lib/utils.ts
  styles/tokens.css
public/
  assets/bunilla/...
docs/
  implementation-plan.md
  brand-and-content.md
  animation-spec.md
  assets-and-rights.md
  qa-report.md
  owner-pitch.md
AGENTS.md
README.md
.env.example                      # only relevant configuration
```

Do not create hollow files or spend half the deadline writing documentation: create useful concise notes and a fully working app.

---

## 11. Implementation sequence, feature gates and honest completion policy

**Phase 1 — Discover and set foundations**
- Read the entire audit, inspect repo/package manager/git status/assets/installed deps, identify existing work.
- Write quick gap summary and 8–12 line implementation plan. Install compatible versions of required packages.
- Create theme/font/data source, retrieve and optimize published Bunilla assets if accessible, place them with provenance.
- Validate a working Next.js dev server and production build early.

**Phase 2 — Build all P0 routes and structural content**
- Working nav/mobile menu, hero, strong photography-led coffee/bakes/pizza sections, story, image atmosphere, final launch CTA, contact/footer, legal/privacy, 404 and metadata.
- Make every primary CTA functional. Ensure mobile composition is beautiful BEFORE cinematic GSAP tuning.
- Use owner-editable content config; fact-check copy against audit.

**Phase 3 — Add the cinematic layer**
- Hero art direction and refined intro timeline; product scroll reveals/masks/parallax; cohesive button/nav behavior.
- Add **one** significant optional 3D interaction only if it improves visual impact without harming performance. A high-quality photo and seamless transitions are better than a low-quality WebGL object.
- Check reduced motion / no-JS fallback.

**Phase 4 — Polish and QA**
- Run locally and actually inspect with screenshots/browser automation if tooling supports it. Verify 1440×900 desktop, 768 tablet and 375×812 mobile at a minimum.
- Check nav, scroll anchors, legal routes, 404, email and Instagram links, focus states, image cropping, loading and motion.
- Run `npm run lint` (or the project's equivalent), `npx tsc --noEmit`, `npm run build`; fix failures. Implement Playwright smoke tests if available, including mobile menu and broken link checks.
- No console errors, missing assets, placeholder hrefs, invalid image URLs, layout overflows or broken hydration.
- Record visual screenshot paths and QA results. If no browser capability exists, don't claim visual validation; state how the user can verify it.

**Phase 5 — Final handover**
Respond with:
1. What was actually implemented (not plans).
2. Local app start commands and demo URL (only if genuinely running).
3. Key paths/files and how to adjust colors, text, photos and preview badge.
4. Animations/3D used, their motion/low-power fallbacks.
5. Tests run + outcomes; remaining blockers/unverified data.
6. Pitch talking points for tomorrow + exact items to request from owner.

---

## 12. Acceptance criteria: make these true before declaring P0 done

- [ ] A first-time visitor understands **Bunilla**, **coffee + bakes + wood-fire pizza**, **I-8, Islamabad**, and **coming soon** within the first viewport.
- [ ] The palette matches `#A24C4E`, `#D56B6D`, `#2B1B18`, `#F8F2E6`; original Bunilla logo/identity is recognizable.
- [ ] Typography is polished, legible, responsive and uses Cormorant Garamond + Raleway.
- [ ] Hero looks genuinely premium and editorial, not a template carousel.
- [ ] Sections have varied layouts, careful photo treatment and compelling succinct hospitality copy.
- [ ] There are visible, well-executed animations; interactions remain smooth and light; no pointless flashy 3D.
- [ ] Mobile works with a good accessible menu, no horizontal overflow, no overlapping hero text, correct image crops and usable CTAs.
- [ ] `Follow the launch` and `Email us` work. No broken `#` signup or unsupported form success.
- [ ] No fake business facts, exact opening date, menu prices, public ratings/testimonials, pinpoint location or unsupported operational claims.
- [ ] Privacy/legal/404 routes exist; no builder placeholder.
- [ ] Images optimized, app builds with no TypeScript/lint errors, no significant loading glitches.
- [ ] Reduced-motion and WebGL-unsupported states remain visually compelling and functional.
- [ ] Site is clearly a pitch concept unless the business has approved going live.
- [ ] You have produced actual code, verified as much as tooling allows, and written honest launch instructions and an owner pitch script.

---

## 13. Final prioritization if time is extremely tight

Do **not** sacrifice execution quality to chase all optional effects. Rank work:

**P0 (non-negotiable):** remarkable branded hero + cohesive complete homepage + beautiful mobile + original imagery + real functional links + typography/colors + polished lightweight reveal animations + legal basics + running build.

**P1 (next):** one memorable scroll scene + optional high-quality 3D object + real waitlist when configured + serious automated browser QA.

**P2 (later):** complex 3D flythrough, commerce, authenticated accounts, dynamic menus, reservations, fancy CMS, elaborate video background.

**Your internal question during implementation:** "Would this detail convince a discerning café owner in a 60-second demo, or does it just increase complexity?" Choose the former.

**START NOW:** First read `context_bunilla(1).md` entirely, summarize confirmed brand assets/constraints in your work log, inspect the repository, establish the implementation plan, and BEGIN WRITING THE ACTUAL NEXT.JS APPLICATION immediately. Continue until the demo is runnable and polished. Do not end with a proposal instead of software.

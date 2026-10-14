# Animation specification

Single substantial motion system: GSAP 3 / ScrollTrigger, initialized in the small client component `src/components/motion/Motion.tsx`.

| Interaction | Behavior | Fallback |
|---|---|---|
| Hero typography | 22px entrance, opacity never below .75, .85s with .08s stagger | Server HTML is visible before JS; static under reduced motion |
| Hero photograph | 18px entrance, 1.3° settling rotation, 1.1s | Fixed image dimensions; static without JS/reduced motion |
| Editorial chapters | Once-only 24px/.7-opacity reveal, .8s at 91% viewport | All content remains readable even while waiting for a trigger |
| Image depth | ±2% vertical movement; scrub 1; desktop ≥1024px only | Overscanned image container; removed on mobile/reduced motion |
| Links/gallery | CSS underline/color/arrow transitions; 1.025x gallery hover | Focus states and touch work without hover; transitions removed for reduced motion |
| Anchor navigation | Native smooth scrolling, sticky-header offsets | Native immediate movement under reduced motion; no scroll interception |

`gsap.matchMedia()` collects contexts and ScrollTriggers; cleanup reverts them on unmount and media-query changes. No pinning, custom wheel handlers, marquee loops, autoplay media, canvas, preloaders or 3D dependencies. Photography provided the stronger visual for this pitch. Core content is Server Components; only navigation and motion hydrate.

References consulted: [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29/), [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/). Browser tests exercise reduced motion and disabled JavaScript.

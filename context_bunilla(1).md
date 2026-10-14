# Bunilla website context

Inspection date: 14 October 2026. Source: https://bunilla.shop/.

## Scope and evidence

This is a technical and content-context inventory of the publicly discoverable website. All four HTML pages advertised by its sitemap were retrieved and inspected. The homepage was also examined in a live desktop browser, including the opened navigation drawer and signup button. Stylesheets, custom JavaScript, slider configuration, fonts, image files, and metadata were examined.

Marketing and legal prose is paraphrased; this document is not a verbatim text dump or a byte-for-byte website archive. Images are documented through source URLs, dimensions, file sizes, and descriptions rather than embedded copies. CSS and JavaScript are described through their relevant implementation details rather than reproduced wholesale. Private server code, administrative screens, databases, and unadvertised routes were not accessible. “Complete” here means coverage of discovered public pages and their observed features, not a guarantee that no other URL exists.

Desktop appearance was inspected at approximately 1348 × 926 pixels. Responsive rules below come from CSS; a separate mobile-device visual inspection was not performed. No purchases, contact submissions, or subscriptions were made.

## 1. Business context

Bunilla promotes a forthcoming café and bakery in I-8, Islamabad, Pakistan. Its advertised offering combines coffee, bakery food, and pizza prepared with wood fire. The homepage is a launch announcement rather than an operating online store. The messaging centers on food quality and a social gathering place. It gives no definite opening date, product prices, opening hours, or ordering process.

Public contact facts:

| Field | Observed value |
|---|---|
| Brand | Bunilla |
| Site identity | bunilla.shop |
| Area | I-8 |
| City | Islamabad |
| Postal code | 44000 |
| Displayed phone | +92-51-1234567 |
| Mobile | Empty field |
| Email | info@bunilla.shop |
| Email action | `mailto:info@bunilla.shop` |
| Instagram account | bunilla.isb |
| Copyright year | 2026 |

The phone is published but was not verified; its sequential digits suggest a possible placeholder. The location is an area-level address, not a building or unit number.

## 2. Public page map

| Page | Verified response URL | Discovery | Result |
|---|---|---|---|
| Homepage | https://bunilla.shop/ | User-provided address, sitemap | HTTP 200 |
| Legal details | https://bunilla.shop/legal-notice/ | Footer, sitemap | HTTP 200; slash added by redirect |
| Privacy information | https://bunilla.shop/privacy/ | Footer, sitemap | HTTP 200; slash added by redirect |
| Builder placeholder | https://bunilla.shop/subpage/ | Sitemap only | HTTP 200; slash added by redirect |
| XML sitemap | https://bunilla.shop/sitemap.xml | Direct discovery request | HTTP 200 |
| Robots file | https://bunilla.shop/robots.txt | Direct discovery request | HTTP 404 |

The sitemap contains exactly four page entries: the root, `/subpage`, `/legal-notice`, and `/privacy`. It sets a daily change frequency and priorities of 1.00 for the root and 0.80 for the others. These values describe the sitemap configuration, not actual update frequency.

No separate catalog, product detail, cart, checkout, booking, blog, or customer-login route appeared in the discovered page links or sitemap. Third-party social profiles and support documentation were not recursively scraped.

## 3. Homepage sections and content hierarchy

### 3.1 Hero

- Outer container: `#ed-3951819896`.
- Header anchor: `#home-3`.
- Full-viewport minimum height: `100vh`.
- Background: three-image rotating carousel with a black overlay at 30% opacity.
- Top left: small square logo. The image sits inside an H1; its alternative text uses the domain.
- Top right: hamburger trigger, including on the inspected desktop viewport.
- Lower area: centered, cream-colored H2 introducing the upcoming café and inviting visitors to follow the opening announcement.
- Bottom center: downward SVG arrow linked to `#!next`.
- A keyboard skip link points to `#main-content`.

The hero message describes the arrival of a neighborhood food venue; it does not specify a date or explain how opening updates are delivered.

### 3.2 Values section

- Outer container: `#ed-3951818564`.
- Anchor: `#values`.
- H2: “Welcome to Bunilla”.
- A generous gap separates the heading from three equal desktop cards.
- Each card contains an icon tile, H3, and centered paragraph.

| Order | H3 | Paraphrased meaning | Icon identifier |
|---|---|---|---|
| 1 | Something Delicious | Introduces the planned mix of coffee, bakery food, and pizza, with I-8 as the location | `fa-light-shield-check` |
| 2 | Quality Ingredients | Emphasizes the selection of coffee beans and fresh food ingredients | `fa-light-user-group` |
| 3 | Community Focused | Positions the venue as a place for people to meet and spend time together | `fa-light-trophy` |

Card container IDs, in order: `ed-3951818576`, `ed-3951818597`, `ed-3951818618`. The icon choices appear generic: their mapping does not directly illustrate each card’s theme.

### 3.3 Launch call to action

- Outer container: `#ed-3951820628`.
- Anchor: `#cta-1`.
- Centered H2 encouraging anticipation of the upcoming food experience.
- One short paragraph reinforcing the coffee and pastry launch.
- Pink pill-shaped signup link.
- Link element wrapper: `#ed-3951820643`.
- Actual destination: `#`.

Clicking the signup link produced no signup form or dialog. The inspected homepage contained zero form elements. No collection endpoint, email input, or completion state was identified.

### 3.4 Footer

- Outer container: `#ed-3951818957`.
- Footer anchor: `#footer-2`.
- Four desktop columns: logo/launch status; business contact; site navigation; social destinations.
- The logo is repeated inside another H1.
- Contact includes the area, postal code, phone, empty mobile field, and linked email.
- Navigation repeats the four homepage anchors and adds the two legal pages.
- Social column contains Facebook, X, and Instagram entries with SVG icons.

## 4. Navigation and link inventory

| Link label or role | Actual href | Behavior/context |
|---|---|---|
| Home | `#home-3` | Hero anchor |
| Values | `#values` | Three-card section |
| Join Us | `#cta-1` | Launch CTA |
| Contact | `#footer-2` | Footer contact details |
| Legal Notice | `/legal-notice` | Separate legal page |
| Privacy Policy | `/privacy` | Separate privacy page |
| Signup CTA | `#` | No observed registration interface |
| Skip link | `#main-content` | Keyboard accessibility navigation |
| Hero down arrow | `#!next` | Next-element scroll convention |
| Email | `mailto:info@bunilla.shop` | Email-client link |
| Header phone icon | `tel:` | Empty telephone target; icon is hidden by relevant styling |
| Facebook text link | `https://www.facebook.com/` | Generic platform homepage |
| Instagram text link | `https://www.instagram.com/bunilla.isb?stkn=amtvOXJ0Z3o0MWtq` | Brand profile URL as published |
| X text | No href | Plain text rather than profile link |
| Three footer social icon links | `#!next` | Placeholder next-element links, not social-profile URLs |

Header menu: `#ed-3951819908`. Trigger: `#ed-3951819917`. Wrapper: `#ed-3951819902`. Footer menu: `#ed-3951818993`.

The drawer occupies the right half of the desktop viewport. It is full height, rose-colored, and contains vertically arranged cream uppercase links. Opening toggles `open open-menu` classes and `aria-expanded`; the trigger declares `aria-controls`. Selecting a menu link closes it. The script moves focus into the menu after its transition and removes the temporary tabindex after blur.

## 5. Styling and layout specifications

Primary stylesheet: https://bunilla.shop/css/custom.260925090158.css.

### 5.1 Color tokens

| Token/role | RGB | Hex |
|---|---|---|
| Primary rose | 162, 76, 78 | `#A24C4E` |
| Secondary pink | 213, 107, 109 | `#D56B6D` |
| Body/text brown | 43, 27, 24 | `#2B1B18` |
| Cream background | 248, 242, 230 | `#F8F2E6` |
| Additional gray 1 | 202, 204, 203 | `#CACCCB` |
| Additional gray 2 | 240, 242, 241 | `#F0F2F1` |
| Card surface | 255, 255, 255 | `#FFFFFF` |

Custom properties include `--color-primary`, `--color-secondary`, `--color-default`, `--color-text`, `--color-background`, `--color-user-1`, and `--color-user-2`. RGB channels are stored as comma-separated values and wrapped in `rgb()`/`rgba()` by rules. The logo’s dark burgundy belongs to the bitmap artwork and differs from the lighter UI rose.

### 5.2 Typography

| Element | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Body | Raleway | 16px / 1rem | 300 | 1.8 | 0 |
| H1 | Cormorant Garamond | 35.2px / 2.2rem | 700 | 1.2 | 0 |
| H2 | Cormorant Garamond | 40px / 2.5rem | 700 | 1.3 | 0 |
| H3 | Cormorant Garamond | 32px / 2rem | 500 | 1.4 | 2px |
| H4 | Cormorant Garamond | 24px | 500 | 1.5 | 0 |
| H5 | Cormorant Garamond | 20px | 500 | 1.6 | 0 |
| H6 | Cormorant Garamond | 16px | 500 | 1.7 | 0 |
| Drawer links | Cormorant Garamond | 24px observed | 700 | 1 | 0 |
| CTA link | Raleway | 16px | 300 | Inherited | 0 |

Font request: https://bunilla.shop/g/fonts.css?family=Raleway:400%7CCormorant+Garamond:400,900&display=swap.

The retrieved font stylesheet defines normal 400-weight faces for both families. CSS requests additional weights; therefore requested weights and supplied font files do not fully align. The visual result may involve browser synthesis or fallback behavior.

Latin font files:

- Cormorant Garamond: https://bunilla.shop/g/static/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86KnTOig.woff2
- Raleway: https://bunilla.shop/g/static/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2

Cyrillic, extended Latin, and Vietnamese subsets are also declared.

### 5.3 Geometry and components

| Component | Observed/declarative values |
|---|---|
| Boxed content | 1200px maximum base width |
| Hero bottom padding | 70px; 40px at widths ≤575px |
| Logo | Inline max width 240px, max height 80px; square artwork renders near 80 × 80px |
| Hero arrow | 30 × 30px; absolute bottom 1rem, left 50% |
| Value cards | Three columns; basis `calc(33.3333333333% - 2.5rem)` |
| Card margin | 1.25rem per side; mobile .75rem |
| Card padding | 32px |
| Card corner radius | 22px |
| Card shadow | `0 10px 30px -12px rgba(20,22,40,0.16)` |
| Card border | Declared width 1px but style none |
| Icon presentation | Rose line icon on a pale rounded square tile |
| Card-heading/text spacers | 10px |
| Values heading spacer | 3.5rem; 30px at ≤975px |
| CTA section | Primary RGB with inline alpha 0.715 |
| CTA button | 8px 32px padding; radius 9999px; secondary background; brown text |
| Footer | Primary background; cream text; four desktop columns |
| Footer column basis | `calc(25% - 2.5rem)` |
| Footer column padding | 32px |
| Footer inner padding | 96px 16px observed |
| Drawer width | 50% desktop; fixed to right edge, full height |
| Drawer transition | 0.3s, cubic-bezier(0.16, 0, 0.28, 0.99) |
| Hamburger | 30px nominal bars; 3px bar thickness, 8px spacing; CSS transforms modify the closed shape |
| Sticky header | Fixed top, primary background, shadow matching cards |

The layout uses nested flex containers and `.inner` wrappers, not an application component tree such as React. Full-width section backgrounds surround centered boxed content. Values use a cream background and white cards; the CTA is a broad muted rose band; the footer uses darker rose.

### 5.4 Responsive declarations

Main breakpoints: `60.9375rem` = 975px and `35.9375rem` = 575px, assuming a 16px root. Some complementary desktop rules begin at `61rem`.

- Value cards remain three columns through the intermediate breakpoint and stack to one column at ≤575px.
- Footer changes from four columns to two at ≤975px, then one at ≤575px.
- Card and footer spacing decreases from 2.5rem total to 1.5rem at the narrow breakpoint.
- H1 changes to 1.87rem and 1.54rem at the two breakpoints.
- Several H2–H5 responsive declarations contain negative pixel font sizes, such as `-3px` and `-8px`. These are invalid CSS values and may be ignored rather than reducing the typography.
- Portrait hero images use centered cover cropping; edge text and details can be lost in a wide viewport.

These are source-level findings, not a claim that every mobile state was rendered and tested.

## 6. Animation and interaction configuration

### Hero carousel

Configured in `data-parameters` on the slider. Runtime uses Slick; cloned slides in the DOM are implementation duplicates, not additional distinct images.

| Parameter | Value |
|---|---|
| Distinct slides | 3 |
| Slides visible / per movement | 1 / 1 |
| Animation | Horizontal slide |
| Transition duration | 800ms |
| Autoplay | Enabled |
| Autoplay interval | 5s |
| Pause on hover | Enabled |
| Loop | Enabled |
| Navigation arrows | Disabled |
| Dots | Disabled |
| Lazy loading | Progressive |
| Adaptive height | False |
| Variable width / center mode | False / false |
| Retina images | False |
| Enlargement | False |

Images cover the full background using `object-fit: cover`, centered positioning, and absolute sizing. A 30%-black overlay sits above them.

### Other motion

- Hero H2: fade on load, initially hidden, 1-second duration and 1-second delay, height preserved.
- A hero content element declares parallax amount 40; the header itself declares amount 0. This is configuration evidence, not a measured displacement.
- Down arrow: 0.3-second hover transition between a 5px lower position and its original position.
- Drawer: translated horizontally offscreen when closed; opening restores position, opacity, visibility, and pointer events.
- Hamburger: bar transforms and short transitions; open state hides the before/after bars according to the preset rules.
- Anchor navigation: custom code calls a 500ms scroll animation. A 20px offset is declared but the actual scroll call uses a zero argument, so the declared number alone does not establish a real 20px offset.
- Active menu item follows section visibility using a two-thirds viewport ratio.
- Sticky behavior reads the wrapper’s CSS `fill` value as a mode flag. Lime corresponds to sticky-menu mode; the wrapper becomes fixed after passing its threshold.
- Ordinary links generally transition for 0.3s with ease-in-out.

The styles contain zoom and movement keyframes, while custom JS also includes counter and marquee presets. No counter or marquee element was identified on the homepage. Their presence in shared files does not mean those effects run on this page. No video element, 3D canvas, or scroll-scrub video was found.

## 7. Image asset inventory

Four unique raster artworks were identified. The hero’s display variants use `/images/1920/…`, while slider configuration points to `/images/0/…`. Natural dimensions below were checked in downloaded originals and the browser.

| Asset | Original dimensions | Original bytes | Description |
|---|---|---|---|
| Logo | 1080 × 1080 | 57,527 | Burgundy square with a small centered cream/gold serif wordmark and bakery/café descriptor |
| Hero slide 1 | 1080 × 1088 | 172,832 | Cream launch poster; café drinks, bakery treats, pizza, handwritten annotations and Islamabad/I-8 launch message |
| Hero slide 2 | 1122 × 1402 | 2,845,096 | Branded takeaway cups on a marble counter, burgundy lid, bakery display and blurred café setting |
| Hero slide 3 | 1122 × 1402 | 3,051,575 | Warm café interior, burgundy feature wall, wordmark, pendant lights, pastry display, tables and upholstered chairs |

Original URLs:

1. Logo: https://bunilla.shop/images/0/28261205/BunillaLogo-WxEu2PxuccHf3NF7Ih6R1g.png
2. Slide 1: https://bunilla.shop/images/0/28261246/WhatsAppImage2026-09-25at11.29.13AM-qbkl-5teVB6tm8glyeIbUA.jpeg
3. Slide 2: https://bunilla.shop/images/0/28261311/IMG_0221-7dBHbTuELq9OsfCVwGdm3Q.PNG
4. Slide 3: https://bunilla.shop/images/0/28261284/IMG_0224-EhfA6ksKVEprUc31B36FWA.PNG

Observed display URLs:

- https://bunilla.shop/images/1920/28261246/WhatsAppImage2026-09-25at11.29.13AM-qbkl-5teVB6tm8glyeIbUA.jpeg
- https://bunilla.shop/images/1920/28261311/IMG_0221-7dBHbTuELq9OsfCVwGdm3Q.PNG
- https://bunilla.shop/images/1920/28261284/IMG_0224-EhfA6ksKVEprUc31B36FWA.PNG

Declared favicon derivatives reuse logo asset ID 28261205 with size segments `16x16`, `32x32`, `96x96`, and `152x152`. These derivative declarations were found in HTML; each derivative was not separately downloaded. Background artwork has empty image alt text; logo alt text is the domain. Image creation method and whether the interiors represent an actual finished venue are not established by the site.

SVG icons are inline markup, including the three value-card icons, hero arrow, phone symbol, and social symbols. They are not additional raster pictures.

## 8. Secondary pages

### 8.1 Legal page

Source: https://bunilla.shop/legal-notice/.

A white upper bar provides a return link to `/`. The cream main area contains an H2 and the business contact block. It repeats the domain, I-8, Islamabad, 44000, phone, empty mobile field, and email. There is no detailed registered-company identifier or named proprietor in the inspected content. Layout is sparse, left aligned, and uses the shared serif heading and sans-serif body system.

### 8.2 Privacy page

Source: https://bunilla.shop/privacy/.

Paraphrased policy coverage: operator responsibility; user-entered and automatically recorded data; operation and analytics purposes; consent withdrawal; complaints; portability; access, correction, restriction, and deletion; payment encryption; unsolicited advertising; session and persistent cookies; server logs; customer and contract records; transfers for goods, services, and digital content; Instagram; and Matomo.

It cites GDPR Article 6(1)(b)/(f), describes anonymized IP analytics and cookie opt-out, and references information-sharing necessary for payments or fulfillment. These are policy statements, not proof of implemented commerce or tracking. The responsible-party introduction is not followed by a populated identity block. Numbered headings jump to sections 5 and 6.

Technical details: return links to `/` at both ends; link to `https://instagram.com/about/legal/privacy/`; a 200px-high, full-width opt-out iframe from `https://www.page-stats.de/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=ffffff&fontColor=&fontSize=&fontFamily=Arial`. The browser exposed the embedded frame as blank during inspection, so its opt-out functionality was not verified. The page uses an H1 followed by nested H2/H3 sections and a long text layout.

### 8.3 Sitemap-only placeholder

Source: https://bunilla.shop/subpage/.

This page is unfinished website-builder scaffolding. It has a large solid rose hero, a centered separator character, and a cream section describing duplication of a base page and shared header/footer references. Its support button points to `https://support.thewebsiteeditor.com/hc/en-us/articles/13251544769559-How-to-create-a-reference` and opens a new tab. The placeholder is not linked in the homepage navigation but remains publicly advertised in the sitemap. It does not supply additional café offerings.

## 9. Client-side technology and assets

| Resource | URL | Retrieved size |
|---|---|---|
| Base CSS | https://bunilla.shop/webcard/static/app.min.1790067869.css | 120,769 bytes |
| Custom/preset CSS | https://bunilla.shop/css/custom.260925090158.css | 919,688 bytes |
| Font CSS | https://bunilla.shop/g/fonts.css?family=Raleway:400%7CCormorant+Garamond:400,900&display=swap | 3,648 bytes |
| Runtime bundle | https://bunilla.shop/webcard/static/app.bundle.1790067885.js | 320,524 bytes |
| Custom JS | https://bunilla.shop/js/custom.260925084620.js | 11,404 bytes |
| Slick vendor script | https://bunilla.shop/webcard/vendor/slick/slick.min.js | Runtime-inserted reference observed; not separately size-verified |

The delivered HTML uses `ed-element`, `ed-container`, `wv-boxed`, and named preset classes. Client configuration uses a `webcard` object, English culture, numeric page/module identifiers, edit/preview flags, mobile/touch detection, and an `/api.php` host configuration. These support a website-editor/webcard implementation inference; they do not establish its private backend stack.

Custom JS uses jQuery-style `$`, a shared `viewport` abstraction, `ResizeObserver`, and document-ready initialization. It implements menu switching, focus handling, smooth scrolling, active section tracking, sticky positioning, and shared counter/marquee presets. The custom CSS contains many presets unrelated to the rendered site; stylesheet breadth is not evidence of additional public content.

No React, Next.js, Shopify storefront, or other application-framework claim is established by this inspection. The `.shop` domain does not itself establish an online shop.

## 10. Metadata and discoverability

Homepage metadata describes a forthcoming Islamabad café/bakery and includes coffee, fresh bakery food, pizza, launch, email signup, and brand-related keywords. Open Graph declares a website, English locale, and `https://bunilla.shop` as its URL. The HTML viewport is `width=device-width, initial-scale=1`.

Location metadata publishes latitude/longitude `33.7184014,73.0852612` and city Islamabad. These coordinates are copied as a public metadata fact; their agreement with the stated I-8 area was not validated. Do not treat them as a confirmed exact café entrance location.

The placeholder page has canonical URL `https://bunilla.shop/subpage`, without the slash used by the response redirect. No JSON-LD structured-data block was found in the four inspected HTML documents. No active analytics initialization was found in their HTML; the privacy policy’s analytics claims alone do not establish runtime tracking.

## 11. Observed gaps and reconstruction guidance

For anyone using this file to brief a developer:

- Preserve the distinction between facts, template copy, and unpublished information. Obtain confirmation before treating the phone, location pin, launch status, or interior imagery as final business data.
- The launch CTA needs a real collection flow if registration is intended. The current page does not implement it.
- Social text links and icons currently differ; Facebook is generic, X has no destination, and icon links use the next-element placeholder.
- Remove or replace the public builder placeholder if launching a finished site.
- Responsive font-size declarations require correction; mobile appearance needs a separate visual check.
- Large PNG hero assets together exceed 5.8MB in original bytes. Consider optimized formats and responsive variants when rebuilding.
- The logo has substantial artwork whitespace and is displayed as a small square, which reduces the readable wordmark size.
- Two image-only H1s occur on the homepage; the principal marketing heading is H2. A rebuild should deliberately choose its semantic heading structure.
- Empty alt values on background artwork, a div-based hamburger trigger, and placeholder links merit accessibility review. This was an inventory, not a complete accessibility audit.
- The privacy document references transactions and tools not demonstrated by the homepage, and its responsible-party field is incomplete. It should be reviewed against the actual implementation.

A faithful functional brief is: four-section café launch landing page with three-slide full-screen imagery, logo and slide-out navigation, three value cards, one launch CTA, four-column footer, two legal pages, and one unfinished builder page. The visual system combines cream surfaces, rose/pink accents, serif headings, light sans-serif body copy, rounded white cards, and short transitions.

## 12. Coverage checklist

| Area | Coverage |
|---|---|
| Sitemap-advertised HTML pages | All four retrieved and inspected |
| Homepage content hierarchy | Recorded, with prose paraphrased |
| Heading/card topics | Recorded |
| Header and footer navigation | Targets recorded |
| Signup link | Clicked; no form/dialog observed |
| Public contact facts | Recorded; not independently verified |
| Raster artwork | Four originals downloaded for inspection; URLs/dimensions/sizes documented |
| Inline icons | Roles and identifiers recorded |
| Shared CSS, custom CSS, font CSS | Retrieved and examined |
| Shared JS and custom JS | Retrieved; relevant custom behavior examined |
| Slider configuration | Recorded |
| Desktop layout | Live-browser inspection |
| Mobile layout | CSS declarations only |
| Legal/policy content | Summarized |
| External social sites/support article | Linked targets only; not recursively crawled |
| Private backend or unpublished pages | Not accessible/verified |

This context represents the inspected public state on the date above. It can change independently after collection.

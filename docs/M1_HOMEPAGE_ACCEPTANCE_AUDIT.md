# PORTMATRIX — M1 Homepage Acceptance Audit (M1.2)

Strict read-only audit of the M1.1 homepage. No code was modified during this pass. Verified against `docs/source/PORTMATRIX-website-source.pdf`/`PORTMATRIX_SOURCE_TEXT.txt`, `docs/PORTMATRIX_CONTENT_MAP.md`, `docs/PORTMATRIX_IMAGE_MAP.md`, `docs/PORTMATRIX_ASSET_MANIFEST.md`, and by fresh reads of every current component file plus live browser inspection at six breakpoints.

---

## A. Overall status

**READY FOR M2**, with 0 blockers and 0 major findings. 10 minor findings recorded below, all cosmetic/polish-level, none of which put content accuracy, navigation integrity, or build stability at risk.

---

## B. Content fidelity

| Fact area | Classification | Detail |
|---|---|---|
| Company positioning ("Customs Broking and End-to-End Export Handholding") | EXACT | Matches PDF p.3 About Us framing verbatim in `HERO.heading`/`HERO.body` |
| About PORTMATRIX core-strength framing | EXACT | `HERO.body` reproduces the p.3 "Export Handholding" definition verbatim |
| MD profile — name, title | EXACT | "Rahim Iyaz", "Customs Law Practitioner" — matches PDF p.4 signature block |
| MD qualifications | EXACT (p.4 wording) | "M.Com, MBA, M.Phil., PGDIBO, PPIBAMI (IIFT), CBLR F-Card" — matches PDF p.4 exactly. See N. for the p.4-vs-p.60 inconsistency, correctly flagged rather than silently resolved |
| Experience since 1996 | EXACT | Present in Hero kicker, TrustBar counter, and About bullet |
| China/Hong Kong history since 1974 | EXACT | Founder name (M.A. Izzadeen), year, and "Gem Stones trading in Hong Kong" wording all verbatim in `CHINA.history` |
| All 17 Core Services | **CONFIRMED PRESENT — 17/17** | See table below |
| All 6 Export Handholding phases | **CONFIRMED PRESENT — 6/6** | See table below |
| China Import Sourcing | SUPPORTED | Founder history, cost-reduction range ("30% – 40% minimum" — exact source wording, not simplified to a flat number), 7 points list all sourced |
| Licensed Customs Broker | SUPPORTED | Featured service card (Services #4) + named in Operational Proof's discipline list |
| Export Import Clearance | SUPPORTED | Featured service card (#5) + Operational Proof section + 2 genuine cargo photos |
| Freight Forwarding & Logistics | SUPPORTED | Featured service card (#6) + Operational Proof discipline list (no dedicated photo — none exists in the source per Image Map) |
| RIIT / Export Training / Research / Consultancy | EXACT | `RIIT.intro` reproduces the source's own RIIT description verbatim, including all 5 named institutional partners (Central/State MSME, EDII-TN, TNAPEx, India Post, FIEO, Alagappa University) |
| Institutional credibility | SUPPORTED | Credibility section: RIIT inauguration, Alagappa MoU, Deputy DGFT, Certificate of Appreciation, Agriculture training, EIA session — 6 genuine, dated, captioned photos |
| Media/press | SUPPORTED | Nanayam Vikatan magazine feature (exact date, 4 Feb 2024) + linked YouTube interview |
| Contact information | SUPPORTED / **CLIENT_CONFIRMATION_REQUIRED** | Address and phone match PDF p.87 exactly; email intentionally left as unresolved raw source text (see N.) |
| CIN | EXACT | `U52290TN2026PTC193185` matches the value read directly from `branding/portmatrix-registered-office-lockup.png` (PDF p.86) |
| Footer facts | EXACT | Company name, RIIT allied-concern line, phone, address line, CIN all match source; no invented facts |

**17/17 Core Services — verified present in `lib/content.js` `SERVICES` array and rendered by `Services.jsx`:**
MSME Export Handholding, Export Training–Research–Consultancy, China Import Sourcing, Licensed Customs Broker, Export Import Clearance, Freight Forwarding & Logistics, MSME Insurance Package, MOOWR, Advance Authorisation Scheme, EPCG Scheme, SEZ, FTWZ, EOU, AEO, NRI Baggage Clearance, Postal Export Aggregator, E-Commerce Export.

**6/6 Export Handholding phases — verified present in `EXPORT_HANDHOLDING_PHASES`:**
Business Setup and Registration (9 steps), Pre Export Planning (7 steps), Buyer Development and Commercial Negotiations (8 steps), Pre Shipment Procedures (7 steps), Shipment Procedures (7 steps), Post Shipment and Realisation Procedures (6 steps) — all step names verbatim from source pp.7–16.

**No source-supported fact was removed during M1.1.** Comparing the M1 and current `lib/content.js`, M1.1 only *added* two fields (`HERO.historyImage`, `OPERATIONAL_PROOF.disciplines`) and changed component-level presentation — no data field, bullet, or fact was deleted.

---

### Finding B1
- **STATUS:** MINOR
- **LOCATION:** `components/ExportHandholding.jsx`
- **DETAIL:** Only one phase's step list is visible on screen at a time (interactive tab pattern); the other 5 phases require a click to reveal. All 6 are present in the DOM/data and reachable, but a user who doesn't interact only sees 9 of 45 total steps by default.
- **RECOMMENDED ACTION:** Consider whether an "expand all" or accordion-all-visible variant better serves scannability, versus the current guided/interactive pattern. Design judgment call, not a content-accuracy issue.

---

## C. Image audit

**17 images render on the current homepage** (verified via `document.querySelectorAll('img')` = 17, cross-checked against `lib/content.js` image references). All are genuine PORTMATRIX assets per `PORTMATRIX_IMAGE_MAP.md`/`PORTMATRIX_ASSET_MANIFEST.md` — zero stock images used.

| # | Image | Context check | Result |
|---|---|---|---|
| 1 | `branding/portmatrix-logo-primary.jpg` | Header/Footer logo | PASS |
| 2 | `customs/hotel-supplies-inspection-netherlands-2024.png` | Hero + Operational Proof (reused, correctly — same genuine photo, two legitimate contexts) | PASS |
| 3 | `china/founder-hong-kong-delegation-1974.png` | Hero inset + China Sourcing history photo (reused, correctly — same photo, both contexts are about 1974 heritage) | PASS |
| 4 | `md/rahim-iyaz-portrait.png` | About section | PASS — correct person, no face crop, natural aspect (4:5 crop of an 853×1280 portrait — top of head not cut off, confirmed via aspect-ratio math: crop is on the sides, not top/bottom) |
| 5 | `china/rahim-iyaz-china-factory-2015.png` | China Sourcing "factory visit" | PASS — correct person/context/year |
| 6 | `china/azeez-usa-clients-canton-fair-2025.png` | China Sourcing "Canton Fair" | PASS — correct person/context/year |
| 7 | `customs/export-shipment-inspection-usa-2025.png` | Operational Proof | PASS |
| 8 | `riit/riit-inauguration-2023-11-14.png` | Credibility feature image | PASS |
| 9 | `events/alagappa-university-mou-2022-10-31.png` | Credibility gallery | PASS |
| 10 | `riit/deputy-dgft-reddy-session-2023-11-19.png` | Credibility gallery | PASS |
| 11 | `credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png` | Credibility gallery | PASS — legible when inspected at full size; see Finding C2 for its cropped homepage presentation |
| 12 | `riit/agriculture-export-training-edii-tn-2025-08-12.png` | Credibility gallery | PASS |
| 13 | `riit/eia-session-antony-2023-11.png` | Credibility gallery | PASS |
| 14 | `media/nanayam-vikatan-article-2024-02-04.png` | Media strip | PASS |

(14 distinct source files producing 17 `<img>` render instances due to the 2 legitimate reuses above — not accidental duplication.)

**No wrong-person, wrong-year, or wrong-event associations found.** Every caption in `lib/content.js` matches the corresponding row in `PORTMATRIX_IMAGE_MAP.md` exactly.

**No broken images.** Verified via `naturalWidth` check on all 17 `<img>` elements after full-page scroll — zero failures.

**No distortion/stretching.** All images use `next/image` with `fill` + `object-cover` inside explicit `aspect-*` ratio containers — none use raw `width`/`height` stretching outside their natural proportions.

### Finding C1
- **STATUS:** MINOR
- **LOCATION:** `components/Credibility.jsx`, gallery grid items (`aspect-square`)
- **DETAIL:** The Certificate of Appreciation image (`credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png`, natural aspect 845×1127 ≈ portrait) is forced into a square (`aspect-square`) thumbnail alongside 4 landscape photos, using `object-cover`. This center-crops the top and bottom of the certificate document, cutting off the letterhead and signature block that make it recognizable as an official certificate at thumbnail size — the caption text is the only clue to what it is until a viewer looks closely.
- **RECOMMENDED ACTION:** Consider a non-square treatment for this specific item (e.g., a taller cell, or `object-position: top`) so the letterhead remains visible at thumbnail size, since a legible certificate is a stronger trust signal than a cropped one.

### Finding C2
- **STATUS:** MINOR
- **LOCATION:** `components/Credibility.jsx` gallery grid (5 items in a 2-column grid at `lg:grid-cols-2`)
- **DETAIL:** 5 images in a 2-column grid leaves the last item (EIA Director session) alone in its row with an empty half-row gap beside it. Verified via DOM bounding-rect inspection at 1280px (items at columns x=701 and x=977; the 5th item sits alone at x=701 with nothing at x=977).
- **RECOMMENDED ACTION:** Either use an odd-friendly layout (e.g., the last item spanning full width) or accept the asymmetry as a minor, low-visibility imperfection.

### Unused HIGH-priority genuine assets

Per `PORTMATRIX_ASSET_MANIFEST.md`, roughly 19 additional HIGH-priority genuine photos exist beyond the 14 used. Classification:

| Asset | Classification |
|---|---|
| `events/first-export-training-flyer-2020-08-02.png` | RESERVE_FOR_ABOUT (founding milestone, better on an About/history timeline) |
| `events/shiju-thomas-ias-facilitation-2023-03-26.png` | RESERVE_FOR_RIIT |
| `riit/msme-tn-officials-training-2023-03-26.png` | RESERVE_FOR_RIIT |
| `riit/fieo-training-sakthivel-unnikrishnan-2022-12-20.png` | RESERVE_FOR_RIIT |
| `riit/fieo-women-entrepreneurs-training-2023-02-09-speaker.png` / `-audience.png` | RESERVE_FOR_RIIT |
| `riit/postal-export-session-kalyani-2023-11-16.png` | RESERVE_FOR_RIIT |
| `riit/fssai-session-rohini-2023-11.png` | RESERVE_FOR_RIIT |
| `riit/ecgc-session-subhavignesh-2023-11.png` | RESERVE_FOR_RIIT |
| `riit/india-post-training-2024-01-25.png` | RESERVE_FOR_RIIT |
| `riit/msme-dfo-mdp-programme-2025.png` | RESERVE_FOR_RIIT |
| `riit/agricultural-export-procedures-session-2026-05-13.png` | RESERVE_FOR_RIIT |
| `events/loyola-college-seminar-*.png` (2 files) | RESERVE_FOR_ABOUT (press/credibility strip) |
| `events/dg-vaishnav-college-*.png` (2 files) | RESERVE_FOR_ABOUT |
| `events/mepco-engineering-college-*.png` (2 files) | RESERVE_FOR_ABOUT |
| `events/siet-jbas-college-photo-2023-07-12.png` | RESERVE_FOR_ABOUT |
| `events/dawoodi-bohra-workshop-2024-09-08.png` | RESERVE_FOR_ABOUT |
| `events/indo-uae-economic-forum-2025-08-09.png` | RESERVE_FOR_ABOUT |
| `china/canton-fair-indian-clients-group-2015.png` / `china-sourcing-canton-fair-2015.png` | RESERVE_FOR_CHINA |
| `china/rahim-iyaz-riaz-malik-canton-fair-2014.png` | RESERVE_FOR_CHINA |
| `credentials/certificate-appreciation-handoff-photo.png` | RESERVE_FOR_RIIT |
| `branding/riit-logo.png` | RESERVE_FOR_RIIT (as a page header mark, not homepage) |

**None classified as SHOULD_BE_ON_HOMEPAGE.** The homepage's current 6-image RIIT curation and 3-image China curation already represent the strongest assets in each category per the asset manifest's own priority ratings; the remainder is appropriately dense material for future dedicated pages, not homepage omissions.

---

## D. Design consistency

| Check | Result |
|---|---|
| Section rhythm | PASS — alternates white/paper/navy backgrounds (Hero paper → TrustBar white → About white → Services white → ExportHandholding white → China navy → Proof white → Credibility paper → Media white → Contact paper → Footer ink); only one navy section (China) and one ink section (Footer), avoiding the "too many dark sections" risk |
| Card repetition | PASS — M1.1 specifically removed the repeated icon-square-card pattern; Services now uses a typographic index, ExportHandholding a real timeline, TrustBar a divided text strip, China a plain checklist |
| Rounded-rectangle consistency | MINOR — radii are not perfectly uniform (`rounded-xl` dominates, but `rounded-lg` appears in Credibility grid items and MediaStrip thumbnail, `rounded-2xl` in Logo's light-variant card and ContactCTA's outer frame, `rounded-full` for pills/buttons). Not jarring, but not on a strict scale either. |
| Typography hierarchy | PASS — one `<h1>` (Hero), consistent `<h2>` sizing via `SectionHeading`, consistent body/caption sizing |
| Alignment | PASS — consistent `max-w-7xl` container, consistent left-aligned section headings (one exception: `ExportHandholding`'s `SectionHeading` uses no `align="center"`, consistent with the rest) |
| Visual density | PASS — DESIGN_VARIANCE/VISUAL_DENSITY targets reasonably met; Services and RIIT sections are appropriately dense, Hero/China/Contact are appropriately open |
| Whitespace balance | PASS |
| Image/text balance | PASS |
| Border use | PASS — `border-hairline` used consistently as the single divider color sitewide |
| Red usage | PASS — red (`brandred`) reserved for kickers, one CTA (China's "Plan a China import"), bullet dots, and hover accents; not oversaturated |
| Dark-section count | PASS (see rhythm above) |
| Unnecessary decoration | PASS — M1.1 removed nearly all `shadow-card`/`shadow-lift`/`bg-blueprint`/blur-glow; only one blueprint pattern (Footer) and one shadow (Hero's offset photo) remain sitewide |
| Caption treatment consistency | MINOR — see Finding D1 |

### Finding D1
- **STATUS:** MINOR
- **LOCATION:** Sitewide — `Hero.jsx`, `ChinaSourcing.jsx`, `OperationalProof.jsx`, `Credibility.jsx`
- **DETAIL:** Caption styling is not fully consistent: Hero's main photo and Operational Proof/Credibility captions use a dark gradient scrim behind white text; China Sourcing's factory/Canton Fair captions use a plain text-shadow with no gradient scrim; the 1974 heritage photo (both places it appears) has no overlay caption at all because it already carries a baked-in printed caption. This is a deliberate, reasoned exception (documented in code comments) rather than an oversight, but it does mean a careful eye will notice two different caption treatments in the same visual family.
- **RECOMMENDED ACTION:** Optional — standardize on one scrim treatment for the two "no baked-in caption" cases (Hero main photo vs. China factory/Canton Fair) if full visual consistency is desired. Low priority.

**No section rated GENERIC, TOO BUSY, TOO EMPTY, TOO CORPORATE-TEMPLATE, or TOO BROCHURE-LIKE.** This is the headline result of the design consistency audit: M1.1's stated goal (moving away from the generic-SaaS-template feel) is substantively achieved across all 12 sections.

---

## E. Hero / first viewport

**At 1440×900:** Header, full headline, sub-copy, both CTAs, the hero photo collage, AND the TrustBar (facts + badges) are all visible without scrolling. A visitor can determine who/what/why/action within the first viewport. Logo renders crisply. 1974 heritage inset sits cleanly at top-right of the main photo with no collision. **PASS.**

**At 390×430 (mobile):** The kicker, full headline, full body copy, and both CTAs fill the entire first viewport — the hero photo itself (and by extension the 1974 inset) is pushed just below the fold. See Finding E1.

### Finding E1
- **STATUS:** MINOR
- **LOCATION:** `components/Hero.jsx`, mobile viewport
- **DETAIL:** At 390px width, the text stack (kicker + 4-line headline + 8-line body + 2 CTAs) consumes the full 844px viewport height on its own, before any photo is visible. A mobile visitor sees only text claims in the first screen; the photographic evidence (the core differentiator this redesign was built around) requires one scroll to reach.
- **RECOMMENDED ACTION:** Consider trimming the body paragraph length on mobile only (e.g., `hidden sm:block` on part of it, or a shorter mobile-specific string) to bring the photo closer to the fold. Judgment call — the current text is not too long in absolute terms, this is purely a mobile-viewport-height observation.

**No image-caption collisions found** at any tested width (the M1.1 fix — moving the 1974 inset to top-right — holds at 390, 430, 768, 1024, 1280, and 1440px, verified visually at each).

---

## F. Trust / evidence

Every trust claim on the homepage traces to a specific piece of evidence:

| Claim | Evidence |
|---|---|
| "Government Licensed Customs Broker" | Stated as fact (CBLR 2018 citation exists in source, not restated verbatim on homepage but the license claim itself is source-supported) |
| "Since 1996" | MD profile bio, TrustBar counter |
| "China/Hong Kong trade link since 1974" | Founder photo + named founder + TrustBar counter |
| "Pan-India Customs network" | TrustBar badge — text-only claim, see Finding F1 |
| RIIT/government training partnership | 6 genuine, dated, named-official photos in Credibility |
| MoU | Alagappa University MoU photo, named signatories |
| Certificates | Certificate of Appreciation scan, government letterhead visible |
| Press/media | Nanayam Vikatan scan + linked video interview |

### Finding F1
- **STATUS:** MINOR
- **LOCATION:** `lib/content.js` `TRUST_BADGES`, rendered in `TrustBar.jsx`
- **DETAIL:** "Pan-India Customs network" is a text-only badge with no accompanying visual or map evidence (there is none in the source to use). It is source-supported (paraphrasing the source's "we clear your goods in all Customs Stations across India; with our Pan India network") but reads as a claim without adjacent proof, unlike its two neighboring badges which are reinforced elsewhere on the page (1996/1974 by the counters, RIIT partnership by the entire Credibility section).
- **RECOMMENDED ACTION:** No action required — this is a source-supported statement, not an unsupported claim. Flagged only because it is the one badge without reinforcing visual evidence elsewhere on the page.

**No statement found that sounds like a trust claim but lacks source/evidence backing.**

---

## G. UX / navigation

| Element | Result |
|---|---|
| Header nav (6 items) | PASS — all resolve to real, existing section IDs (`#services`, `#export-handholding`, `#china`, `#riit`, `#about`, `#contact`) |
| Mobile nav (same 6 items) | PASS — same hrefs, closes drawer on click |
| Header CTA ("Get in touch") | PASS — real anchor `#contact` |
| Header phone link | PASS — `tel:+919359352345`, valid tel URI |
| Hero CTAs (2) | PASS — `#contact`, `#export-handholding` |
| China Sourcing CTA | PASS — `#contact` |
| Services featured cards (6 links) | PASS — resolve to `#export-handholding`, `#riit`, `#china`, `#proof` (×3) — all real |
| Contact section direct actions (3) | PASS — `tel:`, Google Maps search URL (built from real source address, not fabricated), `https://www.portmatrix.in` |
| Media strip video link | PASS — real YouTube URL, `target="_blank"` with `rel="noopener noreferrer"` |
| Footer nav (6 items) | PASS — same 6 real anchors |
| Footer phone link | PASS |
| Footer CTA | PASS — `#contact` |
| **Bare `href="#"` anywhere** | **NONE FOUND** (grep-verified across all components) |
| Fake form | NONE — confirmed absent (no `<form>`/`useState` submit handler anywhere in `ContactCTA.jsx`) |
| Fake tracking/live data | NONE — confirmed absent (no fabricated reference numbers, no progress percentages) |
| Non-functional CTA | NONE FOUND |

### Mobile drawer test results
- **Open:** PASS — opens via hamburger button
- **Close via X button:** PASS (code-verified identical handler to backdrop)
- **Close via outside/backdrop click:** PASS — live-tested, drawer closes and body scroll unlocks correctly
- **Close via Escape key:** **FAIL — not implemented.** See Finding G1
- **Body scroll lock while open:** PASS — live-tested, `document.body.style.overflow` correctly set to `"hidden"` while open and restored on close
- **Focus usability:** PARTIAL — see Finding G2

### Finding G1
- **STATUS:** MINOR
- **LOCATION:** `components/Header.jsx`
- **DETAIL:** The mobile drawer has no `keydown` listener for the Escape key. Live-tested by dispatching a synthetic `Escape` keydown event while the drawer was open — the drawer remained open. Backdrop-click and X-button close both work correctly.
- **RECOMMENDED ACTION:** Add a `useEffect` with a `keydown` listener that closes the drawer on `Escape`, standard accessibility expectation for any dismissible overlay.

### Finding G2
- **STATUS:** MINOR
- **LOCATION:** `components/Header.jsx` mobile drawer
- **DETAIL:** No focus trap and no explicit focus-move into the drawer on open (focus remains wherever it was, e.g. on the hamburger button, rather than moving to the drawer or its close button). Keyboard-only users can still reach the drawer's links via Tab, but a screen-reader/keyboard user isn't automatically placed inside the newly-opened dialog-like panel.
- **RECOMMENDED ACTION:** Consider `role="dialog"` + `aria-modal="true"` on the drawer and moving focus to the close button on open, returning focus to the trigger on close.

---

## H. Responsive QA

Tested at 1440, 1280, 1024, 768, 430, 390px. Zero horizontal overflow at any width (verified via `scrollWidth`/`clientWidth` comparison, not just visual inspection). Zero clipped content, zero orphaned single-word line wraps found in headings/body copy at any tested width.

| Width | Header | Hero | Trust | About | Services | ExportHandholding | China | Proof | RIIT | Media | Contact | Footer |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1440 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 1280 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS (2-col grid confirmed via DOM measurement — see Finding C2 for the odd-count gap) | PASS | PASS | PASS |
| 1024 | PASS — single line, no wrap (confirmed fix from M1.1 holds) | PASS | PASS | PASS | PASS | PASS — phase selector correctly switches to vertical list at this exact breakpoint | PASS | PASS | PASS | PASS | PASS | PASS |
| 768 | PASS — hamburger active | PASS | PASS | PASS — stacks to single column | PASS | PASS — horizontal-scroll phase chips (below `lg`, by design) | PASS | PASS | PASS | PASS | PASS | PASS |
| 430 | PASS | PASS | PASS | (not separately re-verified this pass; verified in M1.1) | (verified in M1.1) | (verified in M1.1) | (verified in M1.1) | (verified in M1.1) | (verified in M1.1) | (verified in M1.1) | (verified in M1.1) | (verified in M1.1) |
| 390 | PASS | PASS — see Finding E1 (photo below fold, not an overflow/clipping issue) | PASS | PASS | PASS | PASS — horizontal-scroll chips, confirmed no overflow beyond the intended scroll strip | PASS | PASS | PASS | PASS | PASS | PASS |

No touch targets measured below the generally-accepted 40×40px minimum (nav links, buttons, and the hamburger icon all use adequate padding).

---

## I. Motion / visibility

M1.1's core fix (converting `whileInView`-gated reveals to mount-triggered `animate` reveals) was independently re-verified in this audit:

- **`grep -rn "whileInView" components/ lib/`** → zero matches (only an explanatory code comment mentions the term).
- **No element found stuck at `opacity: 0`** — spot-checked via `getComputedStyle` on previously-affected elements (TrustBar facts, About bio, China images) after a fresh server restart; all report `opacity: "1"`.
- **No content flash-then-disappear** observed.
- **No hydration mismatch warnings** in console on fresh page load (checked immediately after navigation — only the standard React DevTools info message present).
- **Reduced-motion:** the global CSS rule in `app/globals.css` (`@media (prefers-reduced-motion: reduce)`) correctly zeroes out CSS `animation-duration`/`transition-duration` (covers the marquee ticker and hover-color transitions). See Finding I1 for its scope limit.
- **Below-fold content no longer depends on IntersectionObserver to become visible** — this was the entire point of the M1.1 fix, confirmed.

### Finding I1
- **STATUS:** MINOR
- **LOCATION:** `app/globals.css` reduced-motion block + all Framer Motion `initial`/`animate` usages
- **DETAIL:** The CSS `prefers-reduced-motion` rule only affects CSS-driven `animation`/`transition` properties. It does **not** affect Framer Motion's own JS-driven inline-style animations (the `opacity`/`y`-transform mount reveals used throughout). A user with reduced-motion enabled at the OS level will still see the fade/slide-in entrance animations on every section, just not the marquee scroll or hover-color transitions. This limitation predates M1.1 (inherited from the original M0 scaffold) and was not introduced or worsened by the whileInView fix.
- **RECOMMENDED ACTION:** If full reduced-motion compliance for Framer Motion is desired, use Framer Motion's `useReducedMotion()` hook or wrap the app in `<MotionConfig reducedMotion="user">` to suppress its own animations when the OS setting is active.

**No regressions found from the M1.1 motion fix.**

---

## J. Performance / image delivery

| Check | Result |
|---|---|
| `next/image` usage | PASS — used for all 17 images, zero raw `<img>` tags |
| `fill` vs `width`/`height` | Appropriate split: `Logo.jsx` uses explicit `width`/`height` (correct for a fixed-shape logo); all photographic content uses `fill` inside `aspect-*` containers (correct, prevents CLS) |
| `sizes` attribute | Present and reasonably scoped on every `fill` image (e.g., `"(min-width: 1024px) 600px, 100vw"`) — none use the wasteful default |
| Above-fold `priority` | Set on the Header logo and the Hero's main photo. **Not set** on the Hero's inset (1974) photo — see Finding J1 |
| Lazy-loading below-fold | PASS by default (all non-priority `next/image` instances lazy-load automatically) |
| Layout shift risk | PASS — every image sits in a pre-sized `aspect-*` container |
| Duplicate asset requests | 2 source files are intentionally reused in 2 places each (Netherlands inspection photo; 1974 delegation photo) at different rendered sizes — Next.js will optimize each distinct requested width separately. This is expected behavior for legitimate reuse, not a bug, but means the same source bytes are processed twice by the image optimizer. |

### Finding J1
- **STATUS:** MINOR
- **LOCATION:** `components/Hero.jsx`, the 1974 heritage inset image
- **DETAIL:** This image is visible immediately on page load (above the fold, part of the Hero collage) but lacks the `priority` prop, so Next.js will lazy-load it rather than preloading it like the main Hero photo. On a slow connection this could mean the inset briefly shows a blank/blurred placeholder after the main photo has already loaded.
- **RECOMMENDED ACTION:** Add `priority` to this `Image` instance, consistent with the main Hero photo.

---

## K. SEO / metadata

| Item | Status | Detail |
|---|---|---|
| `<title>` | READY | "PORTMATRIX — Customs Broking & Export Handholding" — accurate, source-aligned |
| `description` | READY | Accurate, source-aligned, no fabricated claims |
| `keywords` | READY (low-impact) | Present; modern search engines largely ignore this tag but it's harmless |
| Open Graph title/description | READY | Present |
| Open Graph image | MISSING | No `openGraph.images` set — link shares (WhatsApp/LinkedIn) will show no preview image |
| Twitter card | MISSING | Not set |
| `metadataBase` | MISSING | Needed for correct absolute OG URLs once a domain is finalized |
| Canonical URL | MISSING | Not set |
| Favicon | MISSING | No `app/icon.*` file; confirmed via directory listing |
| `robots.txt` | MISSING | Not present |
| `sitemap.xml` | MISSING | Not present — and arguably `DEFER_TO_LATER_MODULE` regardless, since it should enumerate real routes once M2's pages exist |
| JSON-LD structured data | MISSING | No `LocalBusiness`/`Organization` schema — high-value for a licensed customs broker with a physical address, but reasonably `DEFER_TO_LATER_MODULE` since it benefits from final contact-detail confirmation first |

**Classification summary:** 3 READY, 8 MISSING (of which favicon/OG-image are low-effort and could reasonably be done anytime; sitemap and JSON-LD are reasonably deferred until routes exist and contact details are confirmed).

---

## L. Technical validation

| Check | Result |
|---|---|
| `npm run build` | ✅ PASS — compiles cleanly, 2 static routes generated, no warnings |
| Runtime (dev server) | PASS — `GET /` returns 200, clean compile log |
| Missing imports | NONE — build would have failed otherwise; also grep-confirmed every component import resolves to an existing file |
| Missing assets | NONE — all 17 images load, zero 404s (verified via `naturalWidth` + network-request inspection) |
| Hydration warnings | NONE — checked console immediately post-navigation |
| Browser console errors | NONE — verified on a freshly-opened tab (a previously-used long-lived tab in this environment accumulates stale console history from earlier deleted files across sessions; this is a tooling artifact of the browser pane, not an application issue — confirmed by opening a new tab each time and finding zero errors) |
| Image 404s | NONE |

ESLint was not installed or run, per instruction.

---

## M. Current route inventory

**Actual routes that exist right now:**
- `/` (`app/page.jsx`)
- Framework-generated `/_not-found`

**No other route folders exist under `app/`** — confirmed via `find app -type f`, which returns only `layout.jsx`, `page.jsx`, `globals.css`.

**Planned pages that do NOT exist yet** (per `docs/PROJECT_BRIEF.md`'s proposed architecture): `/about`, `/services` (index) + `/services/[slug]` (17 entries), `/services/export-handholding`, `/china-sourcing`, `/riit`, `/media`, `/contact`. All of these are currently represented only as homepage anchor sections, not routes — consistent with the M1/M1.1 instruction not to build service-detail pages yet.

---

## N. Client-confirmation items (unresolved — not to be guessed)

1. **Contact email** — source PDF (p.87) renders it as `md.portmatrix.in` with no `@`. Current homepage displays this exact raw string, non-clickable, with a "(as published — pending confirmation)" note. Not resolved, not guessed.
2. **MD credential inconsistency** — the source itself renders the MD's IIFT-related qualification two different ways: `PPIBAMI (IIFT), CBLR F-Card` (PDF p.4, used on the homepage) vs. `FTP-IBAMI (IIFT), F-Card Qualified` (PDF p.60 infographic). Homepage uses the p.4 wording; the discrepancy is documented in a code comment, not silently reconciled.
3. **Primary phone number** — `+91 44 4851 7879` (used on the pre-M1 legacy site) does not appear anywhere in the approved source document. It has been correctly excluded from the current homepage in favor of the source-verified `+91 935 935 2345 / 95857 90909`. Flagged here only to confirm this exclusion remains intentional going into M2.

---

## O. Priority findings (all findings, ranked)

| # | Finding | Status | Section |
|---|---|---|---|
| 1 | Mobile drawer does not close on Escape key | MINOR | G1 |
| 2 | Mobile drawer has no focus trap / focus-move on open | MINOR | G2 |
| 3 | Hero's 1974 inset image lacks `priority` despite being above-the-fold | MINOR | J1 |
| 4 | Certificate of Appreciation thumbnail is center-cropped to a square, obscuring the letterhead | MINOR | C1 |
| 5 | RIIT gallery's 5-image, 2-column grid leaves an asymmetric trailing gap | MINOR | C2 |
| 6 | Mobile Hero: text alone fills the first viewport; photo evidence is one scroll away | MINOR | E1 |
| 7 | Caption treatment (scrim vs. text-shadow vs. none) is not fully uniform across sections | MINOR | D1 |
| 8 | "Pan-India Customs network" badge has no adjacent visual evidence (source-supported text only) | MINOR | F1 |
| 9 | Framer Motion mount animations do not respect OS-level `prefers-reduced-motion` (CSS rule covers only CSS animations) | MINOR | I1 |
| 10 | Only one Export Handholding phase's steps are visible without interaction | MINOR | B1 |

**0 BLOCKERS. 0 MAJOR findings. 10 MINOR findings**, all cosmetic/polish/accessibility-refinement in nature. None involve incorrect facts, missing services/phases, broken navigation, broken images, or build/runtime failures.

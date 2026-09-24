# PORTMATRIX — M1.4 Final Visual Review

Source-locked, design-only premium visual pass. Plan: [`docs/M1_4_VISUAL_PLAN.md`](M1_4_VISUAL_PLAN.md).

---

## A. Design changes implemented

- **Typography**: added Source Serif 4 (via `next/font/google`, no new dependency) for all H1/H2/H3, replacing Space Grotesk. Kicker eyebrows switched from Space Mono to Inter uppercase semibold. Space Mono retained for numeric/precision elements (service numbers, step numbers, footer labels).
- **Section header variation**: China now leads with a full-bleed archival photo band (heading below); Services uses a split header (heading + intro on one baseline); RIIT is centered with no kicker. About/Hero/Export Handholding/Proof/Contact keep the kicker+heading+intro pattern.
- **Site-wide documentary captions**: moved from dark gradient overlays to a clean caption line below each photo (`ImageCaption` component), reused in Hero, China, Proof, RIIT. No caption is ever truncated.
- **Image aspect-ratio fixes**: RIIT certificate now shown whole via `object-contain` on its native 3:4 shape (was force-cropped to a square); FIEO panorama gets its own full-width banner at its true ~2.2:1 shape; Alagappa MoU gets its own 3:2 tile instead of a forced 4:3 crop; China's Canton Fair photo gets its own 3:4 portrait tile; Hero's photo container corrected from 5:4 to its native 4:3.
- **`next/image` `sizes` corrections**: fixed several `sizes` hints that under-stated actual rendered width (factory photo, RIIT gallery tiles, RIIT featured tiles, FIEO banner), which was causing the browser to upscale an undersized generated image — a real "blurry evidence photo" bug caught by the second design critic pass.
- **Hero rework**: removed the unintended right-inset so the photo aligns with the header's CTA edge; enlarged the H1; removed the floating MD-identity chip entirely (both mobile and desktop, after a second independent critic still read it as a SaaS-testimonial pattern); on mobile, reordered content to headline → photo → CTA → body, so the credibility photo and the primary action are both inside the first viewport instead of buried under a long paragraph.
- **TrustBar**: replaced the auto-scrolling marquee with a static wrapped line (flagged by two independent critics across M1.3 and M1.4 as a SaaS "logo ticker" pattern); swapped stat number/label visual order so "Government Licensed Customs Broker since **1996**" reads correctly instead of "**1996** ... since"; removed `justify-between` spread that left the row's right quarter empty.
- **Export Handholding**: replaced the vertical left-border tab list with a horizontal numbered stepper (wraps to 2 rows on mobile instead of a cut-off horizontal scroll); removed the double dot+number marker; added `aria-selected`; gave the timeline panel a measured fixed min-height so switching phases no longer shifts the page.
- **Services**: 11-item compact grid rebalanced from 3 columns (dangling last cell) to 2; fixed a pre-existing `divide-x` bug where Tailwind's DOM-sibling-based divider was bleeding a stray left border onto left-column items in every row after the first; added a mobile-only "Show all N services" disclosure (6 shown by default, all visible at `sm:` and up) so the compact list doesn't require ~2000px of scrolling on a phone.
- **Operational Proof**: reordered so the USA-2025 photo (not used elsewhere) leads, since the Netherlands-2024 photo is also Hero's image — this was the safest fix given no substitute image exists in the manifest without moving a photo across a topic boundary the alignment contract forbids.
- **Contact**: renamed the right-panel "Visit our office / Chennai, Tamil Nadu" action to "Get directions / Registered office, Chennai" — it was restating the left panel's full address verbatim.
- **Logo**: modest size increase in the header; footer treatment de-boxed from a small rounded "sticker" card to a plain panel.
- **Accessibility**: mobile drawer now closes on Escape (open since M1.2, fixed this pass).
- **Padding**: major sections `lg:py-24` (96px) → `lg:py-20` (80px), inside this pass's own 64–88px desktop target.

## B. Independent critic findings (2 passes) and what was fixed

**First pass (Opus, blind)** — 12 ranked findings. Acted on: typography system, section monotony, image distortion (RIIT/China), mobile hero fold, phase-selector "menu" feel, hero alignment/scale, TrustBar ticker, contact redundancy, logo box, services list legibility. Declined with reasoning: inventing 4 new service-category names (content-invention risk), turning qualitative trust badges into fake numeric columns, mobile accordion for Export Handholding (explicitly ruled out by this pass's own brief).

**Second pass (Opus, blind, after implementation)** — caught real regressions from my own first round of fixes: a re-introduced `line-clamp-2` on RIIT captions (directly contradicting the "never truncate" principle just established), `next/image` `sizes` mismatches causing visible upscale-blur on 4 images, the Alagappa MoU still force-cropped to 4:3, the MD chip still present on desktop, the TrustBar stat labels reading backwards, and the Services `divide-x` border bug. All of these were fixed (see section A). Declined: further reworking the kicker-eyebrow motif (style disagreement, not a defect), the "annual report" feel of RIIT (matches this pass's own "documentary/institutional" target adjectives), removing the FIEO photo's visible phone watermark (baked into the source image — cannot alter per `CLAUDE.md`), adding a certificate zoom/lightbox (a new feature, out of scope for a visual-only pass).

## C. Source Guardian result

Two full re-checks this pass (before and after implementation), both **PASS, 0 discrepancies**:
- 17/17 services confirmed, in source order, all wording verbatim/faithfully trimmed.
- 6/6 phases, sub-step counts 9/7/8/7/7/6 = **44** (not 45), all step text unchanged.
- All names, dates, credentials, institutions cross-checked against the source text — no drift.
- The only `lib/content.js` change this pass was reordering `OPERATIONAL_PROOF.images` (design decision, see A) — confirmed no wording changed.
- Zero unsupported claims, zero hallucinated image context.

## D. Image QA

- 14 genuine photos in active use, 0 stock/placeholder images.
- Fixed this pass: RIIT certificate (was cropped to a square, now shown whole), FIEO panorama (was cropped to ~45% of its width, now a full-width banner at its true shape), Alagappa MoU (was force-cropped 3:2→4:3, now its own tile), Canton Fair (was force-cropped portrait→landscape, now its own portrait tile), Hero photo (was 5:4 against a native 4:3, now exact), 4 `sizes` mismatches causing upscale-blur.
- Known, accepted limitation: the FIEO training photo carries a small on-device camera watermark baked into the source file — not alterable per `CLAUDE.md`'s "never alter/regenerate source images" rule.
- ~13 additional genuine HIGH-priority photos remain reserved for future `/about`, `/riit`, `/china-sourcing` pages (unchanged from M1.3's assessment).

## E. Content QA

No factual content was added, removed, or reworded this pass. Two small **UI label** changes (not sourced content): Contact's "Visit our office" → "Get directions", and Services' split-header intro line rephrased its trailing clause (both were always my own UI copy, never claimed as verbatim source text — see `docs/HOME_SOURCE_ALIGNMENT.md`). The About/Mission-tagline string, all service names, all phase/step text, all dates and credentials are untouched.

## F. Responsive QA

Checked at 1440 / 1280 / 1024 / 768 / 430 / 390 — zero horizontal overflow at any width. Specific checks: mobile hero (photo now visible at y=360–640 of an 844px viewport, versus y=802–1056 before this pass); mobile Export Handholding stepper (fits in 350px with no scroll, confirmed via `getBoundingClientRect`); mobile RIIT grid (no overflow, certificate/FIEO keep native proportions); mobile Services disclosure (6→11 items confirmed via click test).

## G. Accessibility QA

- Mobile drawer: closes on Escape (fixed this pass), closes on backdrop click (pre-existing), body-scroll lock on open (pre-existing), keyboard-operable toggle (pre-existing).
- Focus-visible outline: unchanged, still present in `app/globals.css`.
- `prefers-reduced-motion`: unchanged, still honored.
- Export Handholding stepper: added `role="tablist"`/`role="tab"`/`aria-selected` this pass.

## H. Technical QA

- `npm run build`: ✅ passes cleanly (checked twice this pass, after the initial round of fixes and again after the second critic's fixes). `/` — 53.9 kB, First Load JS 141 kB.
- Dev server restarted clean (`.next` cleared) after each build check; responds HTTP 200.
- Zero console errors on a fresh tab. Zero broken/404 image requests (network log shows some `ERR_ABORTED` entries during rapid dev-mode hot-reloads/resizes — these are cancelled RSC prefetches and superseded duplicate requests, each followed by a 200/304 for the same resource; not real failures).
- No new dependencies, no new icon library, no logo alteration, no dependency-version changes. `next/font/google` (already in use) now also loads one additional serif family.

## I. CLIENT_CONFIRMATION_REQUIRED (unchanged, unresolved)

1. Contact email — source renders `md.portmatrix.in` (no "@"); still shown verbatim, non-clickable, with a pending-confirmation note.
2. MD credential wording — source itself renders the IIFT-related qualification two different ways (PDF p.4 vs p.60 infographic); p.4 wording used, discrepancy documented in code.

## J. Assets reserved for future pages

Unchanged from M1.3/M1.4 planning: ~13 additional genuine HIGH-priority photos (remaining FIEO/postal/FSSAI/ECGC RIIT session photos, first-export-training flyer, college-seminar/forum photos, a second Canton Fair MD photo, the RIIT sub-brand logo, the registered-office/CIN legal graphic) reserved for `/about`, `/riit`, `/china-sourcing`.

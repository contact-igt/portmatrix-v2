# PORTMATRIX — M1.4 Visual Plan

Design-only refinement plan. Content is locked (17/17 services, 6/6 phases, all facts/dates/names unchanged). Inputs: an independent Opus visual critic (blind, browser-based, no access to prior critiques) and my own DOM-measured inspection of the live site at 1440px and 390px. Source Guardian re-ran against `lib/content.js` before any of this work and returned a clean pass (0 discrepancies) — confirmed in `docs/M1_4_FINAL_VISUAL_REVIEW.md`.

Findings are reconciled against `CLAUDE.md` and `docs/HOME_SOURCE_ALIGNMENT.md`. Several critic suggestions are scoped down or declined below with reasoning — mainly where the literal suggestion would invent content (new category taxonomy, numeric-izing qualitative badges) or contradicts an explicit brief rule (no accordions for Export Handholding).

---

### 1. Typography system
CURRENT VISUAL PROBLEM: All headings use Space Grotesk 700 and all kickers use Space Mono uppercase — the exact pairing associated with crypto/dev-tool/AI-startup sites, undermining the "premium institutional" objective.
DESIGN CHANGE: Add one serif display face (Source Serif 4, via `next/font/google` — no new dependency) for H1/H2/H3 at weight 500–600. Change `.kicker` CSS from mono to Inter uppercase semibold. Keep Space Mono for numeric/precision elements only (service numbers, phase step numbers, footer labels) where it serves a "documentary/forms" feel rather than a startup one.
CONTENT IMPACT: NONE
IMAGE SOURCE IMPACT: NONE
RESPONSIVE CONSIDERATION: Serif headline sizes re-tuned per breakpoint; no layout-breaking width change expected since serif metrics are similar to Space Grotesk.

### 2. Section heading monotony
CURRENT VISUAL PROBLEM: 5 of 7 sections repeat an identical kicker+40px-H2+intro-paragraph block, reading as a stack of interchangeable rectangles.
DESIGN CHANGE: Give 3 sections distinct header treatments: China gets a full-bleed heritage-photo band with the heading set below/beside it at a larger size; Services gets a split header (heading left third, intro right two-thirds on the same baseline); RIIT gets a centered heading with no kicker line. About/Contact keep their existing smaller-scale headings — that variation is intentional, not a defect.
CONTENT IMPACT: NONE
IMAGE SOURCE IMPACT: NONE
RESPONSIVE CONSIDERATION: All header variants collapse to a single left-aligned column on mobile.

### 3. Documentary image captions (site-wide)
CURRENT VISUAL PROBLEM: Captions are white text on a dark gradient overlay across Hero/China/Proof/RIIT. On RIIT's mobile grid this truncates real names/dates mid-string (`line-clamp-2`) — the exact evidence the section exists to show.
DESIGN CHANGE: Move captions below each photo as a clean caption line (Inter, 12–13px, never truncated), in one small shared `ImageCaption` component reused across the 4 sections. The 1974 delegation photo keeps its no-rendered-caption exemption (it has its own baked-in printed caption).
CONTENT IMPACT: NONE — caption text unchanged, only its position/typography.
IMAGE SOURCE IMPACT: NONE
RESPONSIVE CONSIDERATION: Caption bar wraps naturally under the photo at any width; no more truncation.

### 4. RIIT gallery — image distortion
CURRENT VISUAL PROBLEM: All 4 gallery images forced into identical `aspect-square` tiles regardless of native shape: the portrait Certificate of Appreciation (845×1127) loses its bottom half including the seal/signature; the FIEO panorama (938×423) is cropped to roughly 45% of its width.
DESIGN CHANGE: Give each image its native aspect ratio. Certificate renders `object-contain` on a light mat so nothing is cropped. FIEO renders as a full-width banner strip at its true wide aspect below the other 3 (Deputy DGFT and Agriculture training, both genuinely 4:3, keep `object-cover` with zero loss).
CONTENT IMPACT: NONE
IMAGE SOURCE IMPACT: VERIFIED — no image altered, only its display frame; fixes a genuine "never upscale/distort source images" violation.
RESPONSIVE CONSIDERATION: Grid becomes 2-col on mobile / 3-col + full-width banner on desktop.

### 5. China Sourcing — Canton Fair crop
CURRENT VISUAL PROBLEM: The portrait Canton Fair photo (750×1000) is forced into the same landscape `aspect-[4/3]` tile as the factory photo, losing ~40% of its height.
DESIGN CHANGE: Factory keeps `aspect-[4/3]` (exact native match, zero loss); Canton Fair gets its own `aspect-[3/4]` portrait tile. The 1974 delegation photo's frame loses its rounded corners and gets a thin border + light mat, reading as an archival document rather than an app card.
CONTENT IMPACT: NONE
IMAGE SOURCE IMPACT: VERIFIED — display-only change.
RESPONSIVE CONSIDERATION: Two-column grid keeps working with mismatched tile heights (`items-start`); stacks to 1 column on mobile.

### 6. Section vertical padding
CURRENT VISUAL PROBLEM: Desktop major-section padding measured at 96px (`lg:py-24`) — above this pass's own 64–88px target range.
DESIGN CHANGE: `lg:py-24` → `lg:py-20` (80px) across About/Services/ExportHandholding/China/Proof/RIIT/Contact.
CONTENT IMPACT: NONE
IMAGE SOURCE IMPACT: NONE
RESPONSIVE CONSIDERATION: Mobile/tablet padding (`py-14 sm:py-20`) already within range, untouched.

### 7. Export Handholding phase selector
CURRENT VISUAL PROBLEM: Vertical left-border tab list reads as a settings menu, not a 6-step journey; double marker (red dot + number) per step; no `aria-selected`; section height jumps up to 38px between phases; mobile's horizontal scroll-chip row cuts off "Pre Export" with no scroll affordance.
DESIGN CHANGE: Replace with a horizontal numbered stepper (filled/outline/grey circle per state, connecting line) at all widths — wraps to 2 rows on narrow mobile instead of horizontal-scrolling, so nothing is cut off. Drop the red-dot bullet, keep only the step number. Add `aria-selected`. Give the steps list a fixed `min-height` sized to the longest phase (9 steps) so nothing jumps. Per the brief's own explicit rule, this stays a single-active-phase disclosure — NOT an accordion, and does not show all 44 steps at once.
CONTENT IMPACT: NONE — same 6 phases, same steps, same single-phase-at-a-time interaction.
IMAGE SOURCE IMPACT: N/A
RESPONSIVE CONSIDERATION: Stepper wraps rather than scrolls below ~600px.

### 8. Hero — alignment, scale, caption, mobile order
CURRENT VISUAL PROBLEM: Photo's right edge sits 40px inboard of the header's CTA button (an unintended `pr-8/pr-10` inset); H1 under-fills the available width at 42px; caption is 10px white mono overlaid on a busy photo. On mobile the credibility photo starts at y=802 of an 844px screen — entirely below the fold — because a 273px-tall body paragraph sits above it.
DESIGN CHANGE: Remove the unnecessary right-inset so the photo aligns with the header's right edge; increase H1 to a larger serif size; move the caption below the photo (site-wide caption pattern). On mobile only, reorder so the photo appears directly under the H1 (before the body paragraph/CTAs), and hide the floating MD-identity chip on mobile (redundant with the full MD profile in About) while keeping it on desktop where it works.
CONTENT IMPACT: NONE — no text shortened or reworded, only reordered on mobile.
IMAGE SOURCE IMPACT: NONE
RESPONSIVE CONSIDERATION: This is specifically the mobile fix; desktop grid order is unchanged.

### 9. TrustBar — scrolling ticker
CURRENT VISUAL PROBLEM: A continuously auto-scrolling marquee of regulatory terms — a recognizable "logo-ticker" SaaS pattern, flagged independently by both this pass's and M1.3's design critics, and in tension with the brief's own "no decorative continuous motion" rule.
DESIGN CHANGE: Replace the animated marquee with the same terms as a static, wrapped line separated by middle dots.
CONTENT IMPACT: NONE — same regulatory terms, no longer animated.
IMAGE SOURCE IMPACT: N/A
RESPONSIVE CONSIDERATION: Wraps to multiple lines on narrow widths instead of scrolling.

### 10. Mobile nav — accessibility
CURRENT VISUAL PROBLEM: Mobile drawer has no Escape-key handler (open MINOR finding since M1.2, never fixed).
DESIGN CHANGE: Add a keydown listener that closes the drawer on Escape while open, and returns focus to the toggle button.
CONTENT IMPACT: NONE
IMAGE SOURCE IMPACT: N/A
RESPONSIVE CONSIDERATION: Mobile-only component; no desktop effect.

### 11. Services — compact list legibility
CURRENT VISUAL PROBLEM: 11-item compact list at `lg:grid-cols-3` leaves a dangling empty cell in the last row; description text at 12px is below comfortable reading size.
DESIGN CHANGE: `lg:grid-cols-3` → `lg:grid-cols-2` (11 items split 6/5, no empty cell); bump description text to 13px minimum.
CONTENT IMPACT: NONE
IMAGE SOURCE IMPACT: N/A
RESPONSIVE CONSIDERATION: 2-column already used at `sm:`, this only changes the `lg:` column count.

**Declined (invented-taxonomy risk):** grouping the 17 services under new subheadings like "Export Schemes & Zones" — these category names don't exist in the source and would read as new claims about how PORTMATRY organizes its own services. Not applied.

### 12. Operational Proof — duplicate image, floating list
CURRENT VISUAL PROBLEM: `OPERATIONAL_PROOF.images[0]` is the identical photo used in Hero, appearing again ~5000px later under the heading "Proof of work, not promises" — undercutting the section's own claim. The disciplines list floats disconnected from the heading with dead space around it.
DESIGN CHANGE: Reorder `OPERATIONAL_PROOF.images` so the USA-2025 photo (not shown anywhere else) leads, with the Netherlands photo (already seen in Hero) second. No substitute image exists in the manifest for either slot without moving a photo across topic boundaries, which the alignment contract forbids — this reordering is the safe mitigation. Move the disciplines list to sit directly under the section intro instead of floating right.
CONTENT IMPACT: NONE — same 2 images, same captions, reordered only.
IMAGE SOURCE IMPACT: NONE
RESPONSIVE CONSIDERATION: No change to existing responsive grid.

### 13. Contact — redundant right panel
CURRENT VISUAL PROBLEM: The right panel's "Visit our office — Chennai, Tamil Nadu" row repeats the left panel's full address; "We typically respond within one business day" sits alone with empty space below it.
DESIGN CHANGE: Rename the action label "Visit our office" → "Get directions" (a UI label, not sourced content) so it reads as an action rather than a restatement; tighten vertical rhythm so the panel reads as one balanced block.
CONTENT IMPACT: NONE — address/phone/website facts unchanged, only a navigation-link label reworded.
IMAGE SOURCE IMPACT: N/A
RESPONSIVE CONSIDERATION: No structural change to the responsive stacking.

**Declined:** removing the "(as published — pending confirmation)" note next to the email. This is a required transparency marker for an unconfirmed contact detail (`CLIENT_CONFIRMATION_REQUIRED`), not a stray draft note — removing it would let visitors believe `md.portmatrix.in` is a normal, confirmed email address. Kept, restyled only if it helps balance, never deleted.

### 14. Logo presentation
CURRENT VISUAL PROBLEM: Header logo renders small (36px tall); footer logo sits in a small boxed white "sticker" card that reads as pasted-in rather than designed.
DESIGN CHANGE: Increase header logo height modestly (36px → 40–44px) within the existing 68px header. In the footer, replace the small rounded card with a wider, better-proportioned light panel.
CONTENT IMPACT: NONE
IMAGE SOURCE IMPACT: NONE — the logo file itself is never altered, redrawn, or regenerated, per `CLAUDE.md`. No transparent version exists in the source, so no cutout is fabricated.
RESPONSIVE CONSIDERATION: Scales down proportionally on mobile as before.

---

## Declined in full (documented, not implemented)

- **Full masonry-style RIIT/China photo grid, giant "1974" numeral graphic**: higher implementation risk/complexity than the fixed-aspect-ratio fix above for comparable benefit; the aspect-ratio fix already solves the underlying distortion problem.
- **Turning `TRUST_BADGES` into 4 numeric stat columns**: two of the three badges are qualitative claims ("Pan-India Customs network", "Export training partner…"), not figures — forcing them into a numeric-column format would misrepresent them as stats. Declined; addressed the visual-balance complaint through spacing instead.
- **Mobile accordion for Export Handholding**: explicitly ruled out by this pass's own brief ("should not look like… six accordions"). Used a wrapping numbered stepper instead.

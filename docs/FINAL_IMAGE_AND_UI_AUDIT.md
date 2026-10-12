# Final Image & UI Audit (Stage 3 — UI + image curation pass)

Content frozen for this pass: no approved copy was rewritten. Source of the curation rules: `docs/CONTENT_UI_REFINEMENT_AUDIT.md` §3–§4. This file replaces the earlier version, whose claims about the RIIT logo on `/riit/courses` and "phase infographics linked full size" were not true of the build.

## 1. Image curation

Rendered distinct source images: **24** (was 53). No file was deleted from `public/images/source/`; every source image remains accounted for in `docs/FINAL_SOURCE_VISUAL_COVERAGE.md` (unrendered ones are marked `ARCHIVED_NOT_RENDERED`).

| Page | Removed from render | Reason |
|---|---|---|
| /services | services-overview infographic | ~6px text, duplicates the native list, baked-in phones/email |
| /services/export-handholding + 6 phases | hub infographic + six phase infographics | duplicate native steps; unreadable on mobile; ~1.9 MB priority image |
| /services/nri-baggage-clearance | baggage-allowance infographic | native tables carry every row; MD credential line differs from p.4 |
| /services/postal-export | postal-export infographic | scrolls sideways at 390; India Post mark implies endorsement |
| / | 8 of 13 slots (factory 2015, USA inspection, inauguration, Deputy DGFT, certificate, agriculture 2025, FIEO 2022, Vikatan tile) | reduce to 5 slots; each stays on its own deeper page |
| /china-import-sourcing/canton-fair | Canton group 2015 (low quality), Canton booth 2015 (redundant) | audit §3 |
| /media | both YouTube stills | duplicate the embedded video |
| /about | MD portrait card | portrait stays on `/about/rahim-iyaz` and the home About card |
| /riit/training-events | certificate hand-off photo, FIEO women audience, Postal/FSSAI/ECGC/EIA session photos, MDP 2025 poster, 2026 agri session, Shiju Thomas photo, DG Vaishnav / MEPCO / SIET-JBAS / Dawoodi Bohra / Indo-UAE photos, four flyers | same room/banner repeats; unrelated-entity branding, GST number, phones and price claim on the MDP poster; flyers |

Kept as essential evidence: V6 logo, MD portrait, 1974 Hong Kong delegation, China factory 2015, Canton Fair 2025 and 2014, Netherlands 2024 and USA 2025 inspections, Alagappa MoU, MSME-DFO Certificate of Appreciation (with full-size link), RIIT inauguration / FIEO 2022 / Agriculture 2025 in context, Nanayam Vikatan scan, RIIT logo.

Training events keeps 10 images. Five of them (FIEO women speaker, MSME-TN officials, Deputy DGFT, India Post, Loyola photo) are retained per the audit's per-route entry rather than the short "must stay" list; they can be cut to reduce further.

## 2. Page compositions (no two service pages share one template)

- **Export Handholding**: numbered six-phase rail with icon nodes; each phase page has a six-node phase tracker, sticky phase numeral, vertical step rail, prev/next phase navigation.
- **MOOWR / Advance Authorisation / EPCG**: scheme explainer — definition + fact strip, prominent comparison table, EPCG worked example as the one callout (₹45 lakh focal), horizontal step lines.
- **SEZ / FTWZ / EOU / AEO**: structured regulatory layouts — gutter headings, AEO tier ladder, FTWZ audience columns, EOU numbered checklists; shared `PageNav`.
- **Customs clearance**: numbered seven areas, three-stage export workflow rails (numbers 1–15 unchanged), Chennai import example as the one callout, both operational photos.
- **Broker**: quoted Regulation 2(d) definition band + labelled `dl`. **Freight**: horizontal workflow + checklist. **Insurance**: index + ruled category rows + Cover-by-risk table. **NRI baggage**: table-first, on-page nav, key-allowances strip (existing figures only). **Postal / E-commerce**: compact numbered/ruled.
- **China**: documentary timeline (1974, 2015) + three ruled capability groups. **Canton Fair**: fact row, three-phase strip, inclusions checklist. **RIIT**: masthead, three ruled columns, dated milestones. **Courses**: syllabus groups. **Training events**: year-grouped archive with jump-nav. **Media**: editorial archive. **Contact**: phone first, no images.
- **Home**: single hero photo with the defining sentence; page height at 1440 reduced from 10,273 to 6,647 px.

## 3. Shared system changes

Type scale (kicker 14px for 1–3 words, sentence-case kicker variant, 18–20px item titles, 15px captions, 68ch measure); flat `.band` strip (one per page); new `PageNav`, `ReferenceTable`, `Callout`, `StatStrip`; `ProcessFlow` `variant`/`start`; `PageIntro` `aside`; ruled FAQ/KeyPoints/Related lists replacing boxed cards; tap targets ≥44px in header, drawer, breadcrumbs, footer, image zoom links. Header fixes: mega-menu was clipped at 1440 (now left-anchored, 3 columns at xl); header CTA was cut off at 1280 (phone number now shows from 1440). No gradients, no backdrop blur, reduced-motion and focus-visible rules unchanged.

## 4. Verification

- `npm run build`: passes, 39 static pages.
- All 32 routes: 200, exactly one `<h1>`, one `<main>`; 0 broken internal links; 339 image references across routes, all resolve.
- Six-width sweep (1440/1280/1024/768/430/390) over all 32 routes: horizontal overflow, text under 13.5px, and H1 count — see result line below.

Result: 192 route×width checks (32 routes × 6 widths), 0 horizontal overflow, 0 text elements under 13.5px in `<main>`, exactly one H1 on every route. Console: no errors on spot-checked pages (only a dev-server HMR socket notice after the server restart). Visual screenshots were spot-checked on home and NRI only; mobile screenshots were not taken for most pages.

## 5. Remaining cosmetic issues (not fixed — one-pass rule)

- Courses at 390px is long (~8,400 px) because of ruled lists; row padding could be tightened.
- AEO tier ladder stacks four tall blocks on mobile.
- NRI and MSME on-page navs are local markup, not the shared `PageNav`.
- `/media` shows 04 February 2024 twice (date line plus the unchanged intro sentence).
- Netherlands hero photo shows crate labels larger on home (open CLIENT_CONFIRMATION_REQUIRED on shipper/consignee text). If not cleared, swap the hero to the USA 2025 photo in `OPERATIONAL_PROOF`.
- Other image-provenance items still awaiting the client: whether the 1974 photo is colourised; EIA slide "Assistant Director" vs "Director"; MD name variants on certificate/nameplate.
- `lib/content.js` still holds unused entries (e.g. `RIIT.gallery`, `MEDIA.videoLabel`) and the short scheme labels.

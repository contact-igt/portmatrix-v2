# About Page Refinement Audit — `/`, `/about`, `/about/rahim-iyaz`

READ-ONLY audit. No application file was edited; this document is the only output.
Authority: `docs/source/PORTMATRIX-website-source.pdf` (text extraction `docs/source/PORTMATRIX_SOURCE_TEXT.txt`; page numbers below are the PDF page footers). Pages 3 and 4 were also checked visually against rendered page images. Logo authority: `PortMatrix Logo V6.pdf`. Compared against the running build (HTML and rendered images fetched from the local dev server), `docs/SOURCE_COVERAGE_MATRIX.md`, `docs/PORTMATRIX_IMAGE_MAP.md`, `docs/FINAL_SOURCE_VISUAL_COVERAGE.md`, `docs/FINAL_IMAGE_AND_UI_AUDIT.md`.

---

## 0. Guard rails for every recommendation below

| Date / figure | What the source actually says | Rule |
|---|---|---|
| **1974** | p.20: the late Founder Mr. M.A. Izzadeen "started his Gem Stones trading in Hong Kong during the year 1974"; the photo is a Business Delegation from India (Kayalpattinam) to Hong Kong, 1974. p.6 heading "China Import Sourcing (Since 1974)". | Never "founded / established / incorporated in 1974". Attribute to the Founder's Hong Kong trade. |
| **1996** | p.4: Mr. Rahim Iyaz "having a vintage experience in the foreign trade since 1996". | Always attributed to the Managing Director personally; never to the company. |
| **CIN** | p.86: `U52290TN2026PTC193185` (encodes 2026). The source gives **no incorporation year in prose**. | State no founding/incorporation year anywhere. **CLIENT_CONFIRMATION_REQUIRED**: three different years (1974, 1996, CIN 2026) sit next to each other in the source. |
| **"more than 5 decades"** (p.20) | "Over the period of more than 5 decades, we have expanded our business errands in China and India." | Quote only inside its own sentence, directly after the 1974 Founder sentence. |
| **"Founder" of RIIT** | Appears only inside images: the Loyola flyer (p.78) lists the MD as "Founder, Regional Institute of International Trade"; the certificate (p.69) names "RIIT's Founder Shri. Mohamed Abdur Rahim". No prose states it. | Do not state it in text. **CLIENT_CONFIRMATION_REQUIRED** (also the name variant "Mohamed Abdur Rahim" vs "Rahim Iyaz"). |
| **Slogan** | p.3 "PORTMATRIX— Excellence in EXIM Compliance." vs V6 strapline "Ease of doing EXIM". | Both visible on the same pages today. **CLIENT_CONFIRMATION_REQUIRED**. |

---

## 1. Checklist — does the About experience contain…

| # | Item | PDF p. | `/about` today | `/about/rahim-iyaz` today | `/` today | Verdict |
|---|---|---|---|---|---|---|
| 1 | What PORTMATRIX is | 3 | Yes — p.3 defining sentence verbatim + "Company" block | n/a | Yes — hero | OK (see N1 on the Company sentence) |
| 2 | End-to-End Export Handholding positioning | 3, 5 | Yes — p.3 "core strength" sentence + 8-step chain + link to the hub | n/a | Yes | OK |
| 3 | Full advisory / capability scope | 3, 85–86 | Yes — all 10 "We also provide" items, grouped into two lists. The p.85–86 **Allied Services** lists (EXIM Company Setup, Compliance & Consulting, Value Added Services) are **not** on About (they live on `/services`) | n/a | One-sentence summary | OK; add a pointer to the Allied Services list |
| 4 | RIIT allied-concern positioning | 3, 5–6 | One sentence + "Explore RIIT" link. No partner list, no logo, no milestones | n/a | RIIT strip | PARTIAL — thin for an institutional credibility section |
| 5 | Leadership / Rahim Iyaz profile | 3–4 | **Text link only** ("PORTMATRIX is led by Managing Director Mr. Rahim Iyaz. Read the profile") — no role, no facts | Full profile | Compact MD card | GAP on About |
| 6 | Qualifications | 4 | No | Yes — p.4 string (conflict with p.60 infographic, flagged C) | No | OK (MD page only — keep there) |
| 7 | Foreign-market exposure (9 countries) | 4 | No | Yes — nested list | No | GAP on About (one line is enough) |
| 8 | SBI Risk Mitigation experience | 4 | No | Yes | No | GAP on About |
| 9 | Authorised Resource Person associations | 4 | No | Yes (role bullet + "In the field") | Yes (card bullet) | GAP on About |
| 10 | Meaningful source-backed journey / timeline | 4, 20, 21, 67–84 | **None.** The page never mentions the Founder, 1974, the first export training, the MoU or the inauguration | "In the field" dated list (MD-centric, no company timeline) | Home has a China history strip only | **MAJOR GAP** |
| 11 | Appropriate imagery | 4, 20, 77 … | **0 images** | Portrait (2:3, `fill`/`object-cover`, `rounded-2xl`, up to 480px) + signature graphic | 5 slots | GAP on About |
| 12 | Clear internal links to Services / RIIT / China | — | Services hub, handholding hub, `/riit`, events, China (Related row), Contact | Related row (About, events, RIIT, China) | Yes | OK; add inline link to `/china-import-sourcing` from the Founder entry and to `/riit/courses` |

---

## 2. Source-item matrix

Columns as requested. "Status" refers to the current build.

| SOURCE ITEM | PDF PAGE | CURRENT STATUS | RECOMMENDED LOCATION | CONTENT ACTION | IMAGE ACTION |
|---|---|---|---|---|---|
| "PORTMATRIX is a Customs Broking and End-to-End Export Handholding company…" | 3 | `/about` intro, `/` hero (verbatim) | `/about` hero | KEEP | none |
| Core strength chain (product selection … realisation of export proceeds) | 3 | `/about` ordered list (8 steps) | `/about` §3 | KEEP; keep link to `/services/export-handholding` | none |
| "We also provide…" (10 items) | 3 | `/about` two grouped lists | `/about` §4 | KEEP (grouping is editorial, no item lost) | none |
| Slogan "PORTMATRIX— Excellence in EXIM Compliance." | 3 | `/about` tagline, home | `/about` hero | KEEP as printed; **CLIENT_CONFIRMATION_REQUIRED** vs V6 strapline | none |
| Allied concern RIIT sentence ("Academic Centre of Excellence in International Trade") | 3 | `/about` one sentence | `/about` §8 | KEEP; ADD the p.6 partner list (single constant `RIIT_PARTNERS`) and 2–3 milestone lines | RIIT logo small (see §3) |
| RIIT export training partner list (Ministry of MSME Central and State, EDII-TN, TNAPEx, India Post, FIEO, Alagappa University) | 6 | `/riit`, home TrustBar (home reworded the ambiguous "both the Central and State Governments' Ministry of MSME" phrase) | `/about` §8 (verbatim) | ADD, verbatim wording; do not use the reworded home form | none |
| "Our MD's Profile" heading + qualification string | 3–4 | `/about/rahim-iyaz` only | MD page (full) | KEEP on MD page; on About show role only. **CLIENT_CONFIRMATION_REQUIRED** p.4 string vs p.60 infographic string | none |
| MD bullet 1 — Government Licensed Customs Broker, vintage experience in foreign trade **since 1996** | 4 | MD page, home card, **home hero kicker + TrustBar read as company-level** | `/about` §7 (attributed) | ADD to About leadership block, **explicitly "Managing Director … since 1996"**; see Finding F1 about the home kicker/TrustBar | — |
| MD bullet 2 — nine markets | 4 | MD page only | `/about` §7 (one line: "Worked extensively in international markets — Republic of Maldives, Singapore, China, Hong Kong, Malaysia, Thailand, UAE, Saudi Arabia, Sri Lanka") | ADD | none |
| MD bullet 3 — State Bank of India, Risk Mitigation Management | 4 | MD page only | `/about` §7 | ADD | none |
| MD bullet 4 — Authorised Resource Person (Govt. of India–MSME, EDII-TN, TNAPEx, FIEO, Alagappa University) | 4 | MD page, home card | `/about` §7 | ADD | none |
| MD portrait | 4 | MD page, home card (200px natural ratio) | MD page (hero); `/about` §7 small | KEEP | USE ON MD PAGE; USE ON ABOUT (one small instance) |
| MD signature / "Customs Law Practitioner" graphic | 4 | MD page (CSS mask) | MD page only | KEEP | USE ON MD PAGE |
| Founder Mr. M.A. Izzadeen began Gem Stones trading in Hong Kong in 1974; "more than 5 decades … China and India" | 20 | `/china-import-sourcing`, home strip. **Absent from `/about`** | `/about` §6 Journey (first entry) | ADD verbatim sentence; link to `/china-import-sourcing`; attribute to the Founder, never to the company | 1974 photo (see §3) |
| 1974 delegation caption ("…Business Delegation from India (Kayalpattinam) to Hong Kong in 1974") | 20 | China page, home | `/about` §6 | KEEP verbatim caption beneath the photo | USE ON ABOUT |
| MD China factory visit, 2015 | 21 | China page | `/about` §6 as a text-only entry | ADD one-line entry with link | none (image stays on China page) |
| MD at Canton Fair, 2014 (with Mr. Riaz, King's Group, and Mr. Malik) | 25 | Canton Fair page; MD page "In the field" text | MD page only | KEEP | none |
| "Our First Export Training was started on 2 August, 2020" | 67 | `/riit` milestones | `/about` §6 and `/riit` | ADD (company-neutral wording exactly as printed — "Our First Export Training") | none (source image is a promotional flyer, see §3) |
| MoU, Alagappa University and RIIT, 31 Oct 2022 | 77 | `/riit`, events, home | `/about` §6 text entry; `/riit` image | ADD | none (image stays on `/riit`) |
| FIEO training, 20 Dec 2022 (MD with GM of FaME-TN and Jt. DGFT of FIEO) | 70 | events, MD page | MD page "In the field" | KEEP | none |
| RIIT Training Center inaugurated, 14 Nov 2023 (MSME DFO Asst. Director Mr. M V Leelakrishnan) | 68 | `/riit` | `/about` §6 text entry | ADD | none |
| Certificate of Appreciation, MSME DFO, 28 Nov 2023 | 68–69 | events (zoom), MD page | MD page; events | KEEP; do not mention "~100 participants" or "Founder" (image-only, unconfirmed) | none on About |
| Facilitation by Ms. Shiju Thomas IAS, 26 Mar 2023 | 72 | MD page text | MD page only | KEEP | none |
| Interview (YouTube) + Nanayam Vikatan article, 4 Feb 2024 | 83–84 | `/media`, MD page | `/media` | KEEP | none |
| Agriculture export training EDII-TN/TNAPEx, 12 Aug 2025 | 75 | events | events | KEEP | none |
| Loyola / DG Vaishnav / MEPCO / SIET / Dawoodi Bohra / Indo-UAE events | 78–82 | events (text only) | events | KEEP as events text | none |
| Who we serve (MNC / Corporate, MSME Manufacturers, Merchant Exporters / Importers) | 86 | `/about`, `/services` | `/about` §5 | KEEP | none |
| Key Strengths (error-free documentation; faster clearance turnaround; liaison with PGAs) | 86 | `/about`, `/services` | `/about` §5 | KEEP | none |
| Allied Services (EXIM Company Setup / Compliance & Consulting / Value Added Services) | 85–86 | `/services` | `/about` §4 pointer only | ADD a link, do not duplicate the lists | none |
| Registered Office / PORTMATRIX Logistics Pvt. Ltd., CIN | 86–87 | Footer, contact, `/about` "Company" block | `/about` §2 | REWORD the Company block to the source's own form (see N1) | none (the p.86 lockup carries the **old** logo — do not use) |

---

## 3. Image audit — About-relevant source images

Classes: **USE ON ABOUT · USE ON MD PAGE · USE ELSEWHERE · REDUNDANT · REMOVE**. "Now" = where it renders today.

| Image (`public/images/source/…`) | PDF p. | Now | Class | Reason |
|---|---|---|---|---|
| `md/rahim-iyaz-portrait.png` (853×1280) | 4 | `/`, `/about/rahim-iyaz` | **USE ON MD PAGE** (primary) + **USE ON ABOUT** (one small instance, ≤200px, natural ratio) | Highest trust asset. About has 0 images and a Leadership section with no face. Home keeps its card; this is a deliberate repeat on three routes, so the About instance must stay small (alternative if the client prefers fewer repeats: no portrait on About, leadership text only) |
| `md/rahim-iyaz-signature-base.png` + `-mask.png` | 4 | `/about/rahim-iyaz` | **USE ON MD PAGE** | Mask-pair graphic, MD page only |
| `china/founder-hong-kong-delegation-1974.png` (1289×816) | 20 | `/`, `/china-import-sourcing` | **USE ON ABOUT** (lead image of the Journey entry) + **USE ELSEWHERE** (China page, primary). On `/` it becomes **REDUNDANT** once About and China both carry it | The single best history-evidence image; the About page has no history today. Always with the p.20 caption; never cropped |
| `china/rahim-iyaz-china-factory-2015.png` | 21 | `/china-import-sourcing` | **USE ELSEWHERE** | Text-only entry on About |
| `china/rahim-iyaz-riaz-malik-canton-fair-2014.png` | 25 | `/china-import-sourcing/canton-fair` | **USE ELSEWHERE** | Canton Fair page; MD page text only |
| `china/azeez-usa-clients-canton-fair-2025.png` | 23 | `/`, Canton Fair | **USE ELSEWHERE** | Not About material |
| `branding/riit-logo.png` (412×109) | 16 | `/riit` | **USE ON ABOUT** (small, ≤48px high, RIIT section) | Genuine second brand asset; distinguishes the allied concern from the PORTMATRIX mark; do not enlarge (low resolution) |
| `events/alagappa-university-mou-2022-10-31.png` | 77 | `/`, `/riit`, events | **USE ELSEWHERE** (`/riit`, events) | Flagship credibility image, but already on three routes; About links to it as a milestone |
| `riit/riit-inauguration-2023-11-14.png` | 68 | `/riit`, events | **USE ELSEWHERE** | Same reason |
| `credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png` | 69 | events (zoom) | **USE ELSEWHERE** | Document scan; image-only claims (~100 participants, "Founder") unresolved |
| `credentials/certificate-appreciation-handoff-photo.png` | 68 | not rendered | **REMOVE** (archived) | Duplicate moment |
| `events/first-export-training-flyer-2020-08-02.png` | 67 | not rendered | **REMOVE** (archived) | Promotional flyer: "THE PRO COACH / V UNITED", `www.rahimiyaz.com/exim` — different entity branding; the 2 Aug 2020 milestone is told in text |
| `riit/fieo-training-sakthivel-unnikrishnan-2022-12-20.png`, `riit/fieo-women-entrepreneurs-training-2023-02-09-speaker.png`, `riit/msme-tn-officials-training-2023-03-26.png`, `riit/deputy-dgft-reddy-session-2023-11-19.png`, `riit/agriculture-export-training-edii-tn-2025-08-12.png`, `riit/india-post-training-2024-01-25.png`, `events/loyola-college-seminar-photo-2025-08-22.png` | 70–79 | `/riit/training-events` | **USE ELSEWHERE** | Event evidence belongs in the events archive; an About page that reused them would become a gallery |
| `events/shiju-thomas-ias-facilitation-2023-03-26.png` | 72 | not rendered | **REMOVE** (archived) | Text mention on MD page is enough |
| `riit/fieo-women-…-audience.png`, `riit/postal-export-session-…`, `fssai-session-…`, `ecgc-session-…`, `eia-session-…` | 71–74 | not rendered | **REMOVE** / **REDUNDANT** (archived) | Same room/banner repeats |
| `riit/msme-dfo-mdp-programme-2025.png`, `riit/agricultural-export-procedures-session-2026-05-13.png` | 76 | not rendered | **REMOVE** (archived) | Unrelated-entity branding, GST/phone/price; unconfirmed future date |
| DG Vaishnav, MEPCO, SIET/JBAS, Dawoodi Bohra, Indo-UAE photos + their flyers | 78–82 | not rendered | **REMOVE** / **REDUNDANT** (archived) | Low value; "VUNITED Impex / The Pro Coach" branding on several |
| `media/nanayam-vikatan-article-2024-02-04.png` | 84 | `/media` | **USE ELSEWHERE** | Press scan |
| `media/youtube-interview-*-screenshot.png` | 83 | not rendered | **REMOVE** (archived) | Duplicate the embed |
| `branding/portmatrix-registered-office-lockup.png` | 86 | not rendered | **REMOVE** for About | Carries the superseded old logo and the CIN; V6 replaces it |
| `branding/portmatrix-logo-primary.jpg` (old logo) | 1 | not rendered | **REMOVE** | Superseded by V6 |

**Result for About:** at most **three** source images on the finished page — 1974 delegation (Journey), MD portrait (small, Leadership), RIIT logo (small, RIIT row). Everything else is text with links.

### Up to two additional decorative / editorial visuals (neither depicts people, staff, clients, customs activity or events)

1. **Hairline grid texture behind the About hero** — extend the existing faint grid-line background already used in the design system (`grid-navy` in `tailwind.config.js`) as a quiet masthead texture at the existing ~6% line opacity. Pure CSS, no new asset, no logo reinterpretation, no stock.
2. **Schematic trade-corridor line (inline SVG)** — a thin line graphic with only the places the source names for the Founder's history: Kayalpattinam → Hong Kong → China, with Chennai (registered office, p.86) as the home point; labels as real text, `aria-hidden` decoration plus an adjacent text sentence. It is explicitly schematic (no routes, volumes or dates beyond "1974"), and sits beside the Journey's first entry. Alternative if the client prefers typography only: a typographic index of the nine markets from p.4.

Do **not** add: stock port/container/office photos, generated "team" or "client" images, handshake imagery, AI illustrations of customs or warehouses, or any re-drawn version of the PortMatrix logo.

---

## 4. Findings

**F1 — 1996 and 1974 are read as company-level on the home page (highest priority).**
- `lib/content.js:119` `HERO.kicker` "International Trade exposure since 1996" and `TRUST_FACTS` "International Trade exposure since 1996" / "China / Hong Kong trade link dating to 1974" render in the hero and the TrustBar with no subject. p.4 attributes 1996 to the **Managing Director**; p.20 attributes 1974 to the **Founder's Hong Kong trade**. The code comment already records this as CLIENT_CONFIRMATION_REQUIRED ("client-locked wording"). Recommendation: confirm with the client; if kept, add the subject ("Managing Director's foreign-trade experience since 1996") or move the figure into the leadership block.
- `app/layout.jsx` default description / OG / Twitter text ends "China Import Sourcing since 1974." — source-derived (p.6 heading) but sits directly after the company definition, so search snippets read as company age. Recommend dropping it from the site-wide default.
- `lib/content.js:435` home China kicker "The gateway to China · Since 1974" — same caution.

**F2 — `/about` has no journey and no leadership substance.** Leadership is one sentence and a link; the Founder, 1974, first training (2020), MoU (2022) and inauguration (2023) are absent. These are all source-backed and are exactly the "who is behind this" content the page should carry.

**F3 — The "Company" block contains an inferred sentence.** "PORTMATRIX Logistics Pvt. Ltd. is the registered company of PORTMATRIX…" does not appear in the source (pp.86–87 print the name and address only). Reword to the source's form: "Registered Office: PORTMATRIX Logistics Pvt. Ltd., Chennai, Tamil Nadu, India." **CLIENT_CONFIRMATION_REQUIRED** if the client wants the legal-name-to-brand statement.

**F4 — RIIT row is thin and the partner phrase is inconsistent.** The home TrustBar rewords the ambiguous source phrase as "Ministry of MSME (Central and State Governments)"; `/riit` keeps the verbatim "both the Central and State Governments' Ministry of MSME". Use the single verbatim constant on About too.

**F5 — MD page portrait presentation (non-blocking).** `app/(pages)/about/rahim-iyaz/page.jsx` renders the portrait with `fill` + `object-cover` + `rounded-2xl` in a 2:3 box up to ~480px. The box ratio equals the source ratio (853×1280) so there is no crop, but the rounded corners soften the executive portrait and the `fill` pattern bypasses the intrinsic-size approach used on the home card. Use the natural width/height with a small radius.

**F6 — Image repeats.** The MD portrait, 1974 photo and Alagappa MoU each appear on 3 routes. The About plan above adds the portrait and the 1974 photo to About; drop the 1974 photo from `/` (keep on China + About) to avoid a third repeat.

**F7 — Source items not on About that should stay off:** qualification string (unresolved p.4 vs p.60), certificate "~100 participants" and "Founder" wording (image-only), Loyola flyer's "Founder, RIIT" label, the 2020 flyer's third-party branding.

---

## 5. Proposed `/about` section order

1. **Hero** — H1 "About PORTMATRIX"; the p.3 defining sentence (verbatim); tagline line (p.3, CLIENT_CONFIRMATION_REQUIRED vs V6 strapline); optional hairline-grid masthead texture.
2. **Registered company** — source form only: "PORTMATRIX Logistics Pvt. Ltd., Chennai, Tamil Nadu, India" + Contact link. (No founding year.)
3. **Our core strength: Export Handholding** — the 8-step chain; link to `/services/export-handholding`.
4. **What else we provide** — all 10 p.3 items in the two groups; one line linking to Allied Services on `/services`.
5. **Who we serve / Key strengths** — p.86, side by side.
6. **Our journey** *(new)* — dated, subject-attributed entries, each with a link:
   - **1974 — Founder Mr. M.A. Izzadeen began Gem Stones trading in Hong Kong** (p.20) — 1974 photo + p.20 caption; "more than 5 decades … China and India" only inside its own sentence; link to `/china-import-sourcing`; optional schematic corridor graphic.
   - **Since 1996 — Managing Director's experience in the foreign trade** (p.4), attributed.
   - **2015 — MD China factory visit** (p.21), text + link to China.
   - **2 August 2020 — "Our First Export Training was started"** (p.67).
   - **31 October 2022 — MoU, Alagappa University and RIIT** (p.77).
   - **14 November 2023 — RIIT Training Center inaugurated by MSME DFO Asst. Director Mr. M V Leelakrishnan** (p.68).
   - Closing link to `/riit/training-events`.
   - No incorporation year; no "since" figure attached to the company.
7. **Leadership** — small portrait (natural ratio, ≤200px) + "Mr. Rahim Iyaz, Managing Director" + four p.4 facts (Government Licensed Customs Broker, foreign trade since 1996; nine markets; State Bank of India Risk Mitigation Management; Authorised Resource Person for Govt. of India–MSME, EDII-TN, TNAPEx, FIEO, Alagappa University) + "Full profile" link. Qualification string stays on the MD page.
8. **Regional Institute of International Trade** — small RIIT logo; the p.3 allied-concern sentence; the verbatim p.6 partner list; links to `/riit`, `/riit/courses`, `/riit/training-events`.
9. **Related / next steps** — Services, China Import Sourcing, Contact.

### Section-level image budget
Journey: 1 (1974). Leadership: 1 (portrait). RIIT: 1 (logo). Decorative: ≤2 (CSS grid texture; optional SVG corridor). No event photos, no certificates, no flyers.

---

## 6. CLIENT_CONFIRMATION_REQUIRED (carried and new)

- Which of 1974 / 1996 / CIN 2026 may appear as company-level facts; wording of the home hero kicker and TrustBar (F1).
- Slogan "Excellence in EXIM Compliance" (p.3) vs "Ease of doing EXIM" (V6).
- MD qualification string (p.4 vs p.60) and name variants ("Rahim Iyaz", "Mohamed Abdur Rahim" on the certificate, "Mohamed Rahim" on the FIEO nameplate).
- Whether the MD is RIIT's "Founder" (image-only).
- Legal-name sentence in the Company block (F3).
- Whether 1974 photo is colourised; Netherlands crate-label text on the home hero (separate item).

**No application file was modified by this audit.**

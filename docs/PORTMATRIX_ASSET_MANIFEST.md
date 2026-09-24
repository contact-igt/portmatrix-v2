# PORTMATRIX — Visual Asset Manifest

Summary of all visual assets extracted from `docs/source/PORTMATRIX-website-source.pdf` (87 pages, verified against `docs/source/PORTMATRIX_SOURCE_TEXT.txt`'s page count — see "PDF verification" below). Full per-image detail, captions, and page references are in [PORTMATRIX_IMAGE_MAP.md](PORTMATRIX_IMAGE_MAP.md); this document is the curated, categorized summary the task asked for.

**73 distinct asset files** were extracted from **74 embedded image objects** (one exact duplicate collapsed to a single file — see Image Map). All are losslessly extracted originals (`ORIGINAL_EMBEDDED`); none required a page-render fallback (`PAGE_CROP`) because every meaningful visual in this PDF is a genuine separate embedded object, not a flattened page. Nothing was regenerated, upscaled, beautified, recolored, cropped, or background-removed.

## PDF verification

| Check | Result |
|---|---|
| File exists | ✅ `docs/source/PORTMATRIX-website-source.pdf`, 104,362,518 bytes (~99.5 MB) |
| Opens successfully | ✅ `pdfinfo` reads it cleanly, not encrypted, not corrupt |
| Page count | ✅ **87 pages** |
| Matches text extraction | ✅ `PORTMATRIX_SOURCE_TEXT.txt` also reflects 87 pages (footer page numbers run 1–87) |
| Producer | Skia/PDF m156 Google Docs Renderer (i.e., exported from a Google Doc) |
| PDF version | 1.4 |

No corruption or page-count mismatch — the file is authoritative and complete.

---

## A. Official brand assets

| Asset | File | Why it's the strongest |
|---|---|---|
| **Primary logo** | `branding/portmatrix-logo-primary.jpg` | Standalone, clean, on a blank cover page — no clutter, no compositing, the single clearest rendition of the mark in the whole document. **This should be the source of truth for the logo going forward**, replacing `components/Logo.jsx`'s hand-coded SVG approximation. |
| RIIT sub-brand logo | `branding/riit-logo.png` | Clean, though small (412×109) — ask the client if a larger master file exists for print/high-DPI use |
| Registered-office lockup | `branding/portmatrix-registered-office-lockup.png` | Secondary/legal-context logo usage; notable for containing the CIN (see "New findings" below) |
| Brochure-cover infographic | `branding/portmatrix-services-overview-infographic.png` | Reference-only — a fully composited marketing graphic, useful for understanding the existing design language (icon style, color usage) rather than as a directly reusable asset |

**Logo variant guidance:** the primary logo (p.1) and the logo as it appears inside the registered-office lockup (p.86) and the brochure infographic (p.2) all appear visually consistent (same colors, same mark geometry) on visual inspection — there is no conflicting alternate version of the mark itself in this document. Treat `branding/portmatrix-logo-primary.jpg` as primary; the others are the same mark in different compositional contexts.

## B. Leadership/history assets

| Asset | File | Trust value |
|---|---|---|
| **MD portrait** | `md/rahim-iyaz-portrait.png` | The single best leadership asset in the document — studio-quality, professional, unambiguous |
| **Founder history photo** | `china/founder-hong-kong-delegation-1974.png` | The company's origin story made visual — late Founder Mr. M.A. Izzadeen, 1974 Hong Kong delegation. Irreplaceable; there is no other image of the founder anywhere in the source |
| MD signature graphic | `md/rahim-iyaz-signature-base.png` (+ mask) | Supporting brand element for bios/quotes |

## C. Operational proof (cargo, inspection, customs work)

| Asset | File | Trust value |
|---|---|---|
| Netherlands shipment inspection | `customs/hotel-supplies-inspection-netherlands-2024.png` | Best resolution (1600×1200) genuine cargo-work photo in the document |
| USA shipment inspection | `customs/export-shipment-inspection-usa-2025.png` | Second genuine cargo-inspection photo, good quality |
| China factory visit | `china/rahim-iyaz-china-factory-2015.png` | MD personally inspecting factory goods — doubles as leadership + operational proof |

These three are the **only genuine, dated, captioned operational/cargo photographs** in the entire 87-page document. Everything else illustrating "customs," "clearance," or "logistics" concepts (Licensed Customs Broker, EXIM Clearance, Freight Forwarding, MOOWR, EPCG, SEZ, FTWZ) uses stock or AI-generated imagery instead (see Section I).

## D. Government/institutional proof

| Asset | File | Trust value |
|---|---|---|
| RIIT inauguration | `riit/riit-inauguration-2023-11-14.png` | MSME DFO Assistant Director ribbon-cutting — the founding moment of the training centre |
| Certificate of Appreciation (document) | `credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png` | An actual signed Government of India letterhead document — the strongest single piece of documentary trust evidence in the file |
| Certificate handoff photo | `credentials/certificate-appreciation-handoff-photo.png` | Candid companion to the certificate scan |
| Deputy DGFT session | `riit/deputy-dgft-reddy-session-2023-11-19.png` | Central government (DGFT) official personally training at RIIT |
| EIA Director session | `riit/eia-session-antony-2023-11.png` | Central government agency (Export Inspection Agency) |
| Shiju Thomas IAS facilitation | `events/shiju-thomas-ias-facilitation-2023-03-26.png` | An IAS officer (state government) formally recognizing the MD |
| MSME-DFO MDP Programme | `riit/msme-dfo-mdp-programme-2025.png` | Central government programme hosted at RIIT, best resolution of the government-training set (1600×1200) |
| Agriculture export training (EDII-TN/TNAPEx) | `riit/agriculture-export-training-edii-tn-2025-08-12.png` | 40 government senior officials — largest-scale government engagement documented |

This is the deepest and most credible category in the whole document — roughly a dozen distinct, dated, named interactions with identifiable central- and state-government officials, spanning 2022–2026.

## E. RIIT/training proof

| Asset | File | Note |
|---|---|---|
| First export training | `events/first-export-training-flyer-2020-08-02.png` | Earliest dated training activity (2 Aug 2020) — founding milestone, though delivered as a promotional flyer rather than a candid photo |
| FIEO trainings (×3) | `riit/fieo-training-sakthivel-unnikrishnan-2022-12-20.png`, `riit/fieo-women-entrepreneurs-training-2023-02-09-speaker.png`, `riit/fieo-women-entrepreneurs-training-2023-02-09-audience.png` | National export-body (FIEO) partnership evidence |
| Postal Export, FSSAI, ECGC sessions | `riit/postal-export-session-kalyani-2023-11-16.png`, `riit/fssai-session-rohini-2023-11.png`, `riit/ecgc-session-subhavignesh-2023-11.png` | Regulatory-agency guest sessions at RIIT, all clustered Nov 2023 |
| India Post training | `riit/india-post-training-2024-01-25.png` | |
| Generic training-hall reuse | `riit/msme-tn-officials-training-2023-03-26.png` | Reused on both PDF p.17 (uncaptioned illustration) and p.71 (fully captioned) — the strongest available "generic RIIT hero" image since it's confirmed reusable |

16 total files in `riit/` — this is the largest single category, reflecting how much of the source document's genuine trust evidence is training-related rather than customs-brokerage-related.

## F. China/Canton Fair proof

| Asset | File | Note |
|---|---|---|
| 1974 founder photo | `china/founder-hong-kong-delegation-1974.png` | (also listed under B — the single most important asset overall) |
| MD's 2015 factory visit | `china/rahim-iyaz-china-factory-2015.png` | |
| Canton Fair (2014, 2015 ×2, 2025) | `china/rahim-iyaz-riaz-malik-canton-fair-2014.png`, `china/canton-fair-indian-clients-group-2015.png`, `china/china-sourcing-canton-fair-2015.png`, `china/azeez-usa-clients-canton-fair-2025.png` | Spans 11 years of documented Canton Fair presence — strong continuity evidence |

7 files total, all genuine, none stock — China sourcing is, alongside government/institutional proof, one of the two best-evidenced parts of the business.

## G. Media/press proof

| Asset | File | Note |
|---|---|---|
| Nanayam Vikatan magazine article | `media/nanayam-vikatan-article-2024-02-04.png` | Genuine Tamil-language press coverage, high-resolution scan |
| YouTube interview screenshots (×2) | `media/youtube-interview-agri-show-screenshot.png`, `media/youtube-interview-studio-screenshot.png` | Frame grabs only — the real asset is the linked video (`https://www.youtube.com/live/K28p2YTy2OI?feature=shared`); embed/link the video rather than reuse these static frames |

Also loosely media-adjacent: the college/seminar event flyers under `events/` (Loyola, DG Vaishnav, MEPCO) function as third-party promotional material naming the MD as a guest/speaker — real but not "press" in the journalistic sense.

## H. Infographics/process graphics

| Asset | Files | Note |
|---|---|---|
| Export Handholding phase banners | `export-handholding/*.png` (7 files) | Consistent design template across all 6 phases + 1 hero banner — text baked in, not independently editable, but a strong visual-system reference |
| Baggage allowance infographic | `customs/baggage-allowance-infographic.png` | |
| Postal Export infographic | `logistics/postal-export-infographic.png` | |
| Brochure-cover infographic | `branding/portmatrix-services-overview-infographic.png` | |

These are all **designed marketing graphics**, not raw data — if the rebuild wants live/editable process diagrams (e.g., for accessibility, localization, or responsive reflow), these should be treated as design references and redrawn as native components, not embedded as images.

## I. Stock/illustrative source images (not PORTMATRIX evidence)

13 files in `stock/` — a category added specifically to segregate these (see [PORTMATRIX_IMAGE_MAP.md](PORTMATRIX_IMAGE_MAP.md) for the full table). Highlights:
- **Confirmed Shutterstock**: the Licensed Customs Broker illustration carries a visible "shutterstock.com · 2172351753" watermark.
- **Confirmed Pexels**: EPCG and FTWZ illustrations link directly to Pexels search URLs.
- **Confirmed AI-generated**: MOOWR and Advance Authorisation illustrations are credited "Picture source: ChatGPT" in the source's own text.
- **Third-party government logo**: the AEO scheme illustration is the official (real, but not PORTMATRIX-owned) AEO India / Indian Customs programme logo.
- 2 items (Freight Forwarding graphic, EOU aerial factory photo) carry no credit at all but are visually consistent with stock imagery and have no caption connecting them to PORTMATRIX.

**None of these should be presented as genuine PORTMATRIX evidence in the rebuild.** Where a rebuilt scheme page (MOOWR, EPCG, SEZ, FTWZ, AEO, EOU) wants a supporting photo, source a new one or use none — don't carry these forward as if they were trust assets.

## J. Missing/unrecoverable assets

**None outstanding.** Every photo/figure referenced by caption in the M0.5 (text-only) pass was matched to its actual embedded image once the real PDF became available. The two remaining loose ends are minor and don't block anything:

1. **Alpha-mask recompositing** — 5 images (`md/rahim-iyaz-signature`, `riit/riit-inauguration-2023-11-14`, `riit/fieo-training-sakthivel-unnikrishnan-2022-12-20`, `credentials/certificate-of-appreciation-msme-dfo-2023-11-28`, `stock/aeo-india-official-logo`) have their RGB and alpha-mask channels stored as separate PNGs rather than one true RGBA PNG. Both files are preserved and usable; combining them cleanly needs PIL or ImageMagick, neither of which is installed in this environment (and installing new dependencies is outside this module's scope).
2. **RIIT logo master file** — the extracted RIIT logo (412×109) is low-resolution; if a larger master exists outside this PDF, it would be worth requesting from the client for print/retina use.

---

## New findings surfaced during this pass (beyond M0.5's text-only content map)

These were invisible to M0.5's text extraction because they live only inside flattened graphics, and are worth the client's attention even though this module doesn't update the content-map/audit docs:

1. **Corporate Identification Number (CIN): `U52290TN2026PTC193185`** — found only in the p.86 registered-office graphic. The "2026" year-of-registration component suggests the Pvt. Ltd. corporate entity itself was very recently incorporated, distinct from the decades-long operating history of the underlying business/individuals. Likely worth a factual footnote on the website (e.g., footer legal line), subject to client confirmation.
2. **Inconsistent MD credential abbreviation within the source itself**: p. 4 renders it "**PPIBAMI (IIFT), CBLR F-Card**"; the p. 60 infographic renders the same credential as "**FTP-IBAMI (IIFT), F-Card Qualified**." This is a discrepancy inside the approved source document, not between the source and the current website — flag for the client to confirm the correct form before it's used anywhere.
3. **A separate personal-brand domain**: the p. 67 flyer for the first export training points to `www.rahimiyaz.com/exim`, distinct from `www.portmatrix.in`. Worth clarifying with the client whether/how the MD's personal brand site should be referenced from the PORTMATRIX site.

---

## Quality/duplicate summary

- **Exact duplicates**: 1 pair (`msme-tn-officials-training-2023-03-26.png`, used at both PDF p.17 and p.71) — collapsed to a single stored file, both usages documented.
- **Near-duplicates**: none detected (each Canton Fair / training photo is a visually distinct moment, even where multiple photos share a date or event).
- **Low-resolution assets requiring caution**: `branding/riit-logo.png` (412×109), all 13 `stock/` images (mostly under 500×400 except the marketing-graphic ones), `china/china-sourcing-section-photo-uncredited.png` (360×360). None of the genuine leadership/history/government/China/RIIT photos are low-resolution — the document's real trust evidence is uniformly good-quality (typically 900×700 to 1600×1200).
- **Images with heavy surrounding page text baked in**: the 7 `export-handholding/` phase banners and the `customs/baggage-allowance-infographic.png` and `logistics/postal-export-infographic.png` graphics all have substantial text rendered directly into the image — not resizable/reflowable, and not localizable without redesign.
- **Assets unsuitable for full-width hero display as-is**: the small square/portrait stock images in `stock/` (184×184 to 500×333) and the tiny `branding/riit-logo.png` would pixelate if stretched full-width.

All originals — including the low-resolution and stock ones — have been preserved exactly as extracted; nothing was deleted for being lower quality than an alternative.

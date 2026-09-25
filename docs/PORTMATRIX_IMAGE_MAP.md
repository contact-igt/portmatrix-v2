# PORTMATRIX — Source Image Map

**Extraction status: COMPLETE.** `docs/source/PORTMATRIX-website-source.pdf` (87 pages, verified — see [PORTMATRIX_ASSET_MANIFEST.md](PORTMATRIX_ASSET_MANIFEST.md)) has been visually inspected page-by-page and its 74 embedded image objects extracted losslessly with `pdfimages -all` (poppler), byte-for-byte identical to the PDF's internal streams (spot-checked via SHA-256). No image was regenerated, upscaled, beautified, recolored, or had its background removed. All are ORIGINAL_EMBEDDED unless noted otherwise — none required a PAGE_CROP fallback, because every meaningful photo/graphic in this PDF is a genuine separate embedded image object, not a flattened whole-page render.

One exact byte-for-byte duplicate was found: the photo captioned "Export Training to Govt. of Tamil Nadu, MSME Officials across Tamil Nadu on 26 March, 2023" (PDF page 71) is the same file reused, uncaptioned, as a generic illustration under the "Our Courses" intro on PDF page 17. Only one copy is kept in `public/images/source/riit/msme-tn-officials-training-2023-03-26.png`; both usages are noted below.

Several images carry a separate PNG alpha/soft-mask object (transparency layer) that `pdfimages` extracts as its own grayscale file rather than compositing it in. Both the RGB base and the mask are preserved side by side (suffixed `-mask`); combining them into one true RGBA PNG would need an image-compositing tool (PIL/ImageMagick) not installed in this environment and not added per the no-new-dependencies instruction. The base file alone is fully legible.

---

## branding/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 1 | `branding/portmatrix-logo-primary.jpg` | ORIGINAL_EMBEDDED | The official PORTMATRIX logo, standalone, on a clean white cover page: 2×2 navy/red/red/navy square mark + "PortMatrix" wordmark (red "M") + "Excellence in Compliance" tagline | **Primary website logo — header, footer, favicon base** | **HIGH — this is the authoritative logo** | 1151×494 | JPEG | 32 KB | Clean, uncluttered, no watermark. This should replace `components/Logo.jsx`'s hand-coded SVG recreation as the source of truth for shape/color/typography (see [PORTMATRIX_ASSET_MANIFEST.md](PORTMATRIX_ASSET_MANIFEST.md) §A for the full logo-variant comparison) |
| p. 2 | `branding/portmatrix-services-overview-infographic.png` | ORIGINAL_EMBEDDED | Full designed brochure-cover graphic: logo, hero image (plane/ship/containers), "OUR CORE SERVICES" 17-icon grid, contact block, MD signature | Reference only — too dense/composite for direct reuse; useful as a design-language reference (icon style, color blocking) | SUPPORTING | 1024×1536 | PNG | 1.8 MB | This entire PDF page is a single flattened marketing graphic — explains why the M0.5 text extraction showed page 2 as blank |
| p. 16 | `branding/riit-logo.png` | ORIGINAL_EMBEDDED | RIIT (Regional Institute of International Trade) logo — laurel-wreath emblem + wordmark | RIIT-branded pages/sections (`/riit`) | **HIGH — second official brand asset** | 412×109 | PNG | 20 KB | Clean, small but usable; a higher-res source may exist outside this PDF — flag for the client if a larger master file exists |
| p. 86 | `branding/portmatrix-registered-office-lockup.png` | ORIGINAL_EMBEDDED | Registered-office graphic: logo repeated + Tamil transliteration + "PORTMATRIX LOGISTICS PVT. LTD." + address + **CIN: U52290TN2026PTC193185** + phone | Footer/legal/contact page — the CIN is a newly discovered, previously uncaptured legal fact (see manifest) | HIGH (contains a unique legal fact) | 1280×640 | PNG | 560 KB | **New finding not in the M0.5 content map**: this is the company's Corporate Identification Number. Worth surfacing to the client — the "2026" in the CIN suggests the Pvt. Ltd. corporate entity was only recently incorporated even though the underlying business/individuals go back decades |

## md/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 4 | `md/rahim-iyaz-portrait.png` | ORIGINAL_EMBEDDED | Professional studio portrait of Mr. Rahim Iyaz, arms crossed, dark backdrop, grey suit | **About page hero MD portrait — the single highest-value trust asset in the whole document** | **HIGHEST** | 853×1280 | PNG | 528 KB | Studio-quality, good resolution, ready for direct use |
| p. 4 | `md/rahim-iyaz-signature-base.png` | ORIGINAL_EMBEDDED (RGB base layer) | "Rahim Iyaz — Customs Law Practitioner" cursive signature graphic | Signature block under quotes/bios, alongside the portrait | SUPPORTING | 2500×1000 | PNG | 8 KB | Base layer only (no alpha) — see `-mask` file; recomposite with an image tool before production use if true transparency is needed |
| p. 4 | `md/rahim-iyaz-signature-mask.png` | ORIGINAL_EMBEDDED (alpha mask) | Transparency mask for the signature graphic above | Pairs with the base file | SUPPORTING | 2500×1000 | PNG (grayscale) | 60 KB | Not a standalone visual asset — the mask channel only |

## export-handholding/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 7 | `export-handholding-hero-infographic.png` | ORIGINAL_EMBEDDED | Branded "EXPORT HANDHOLDING" hero banner: logo, MD signature, stock handshake/cargo photo, 6-icon process strip | `/services/export-handholding` hero | SUPPORTING (contains a stock handshake photo composited in) | 1536×1024 | PNG | 1.6 MB | Well-designed, on-brand; the handshake photo within it is stock, not genuine PORTMATRIX evidence |
| p. 8 | `phase1-business-setup-infographic.png` | ORIGINAL_EMBEDDED | "Phase 1: Business Setup and Registration" 9-step icon banner | Phase 1 section header graphic | SUPPORTING | 1981×793 | PNG | 1.8 MB | Reusable as-is; text is baked into the graphic (not independently editable) |
| p. 9 | `phase2-pre-export-planning-infographic.png` | ORIGINAL_EMBEDDED | "Phase 2: Pre Export Planning" 7-step icon banner | Phase 2 section header graphic | SUPPORTING | 1942×809 | PNG | 1.8 MB | Same caveat — baked-in text |
| p. 11 | `phase3-buyer-development-infographic.png` | ORIGINAL_EMBEDDED | "Phase 3: Buyer Development and Commercial Negotiations" 8-step icon banner | Phase 3 section header graphic | SUPPORTING | 1983×793 | PNG | 1.9 MB | Baked-in text |
| p. 12 | `phase4-pre-shipment-infographic.png` | ORIGINAL_EMBEDDED | "Phase 4: Pre Shipment Procedures" 7-step icon banner | Phase 4 section header graphic | SUPPORTING | 1981×793 | PNG | 1.9 MB | Baked-in text |
| p. 14 | `phase5-shipment-procedures-infographic.png` | ORIGINAL_EMBEDDED | "Phase 5: Shipment Procedures" 7-step icon banner | Phase 5 section header graphic | SUPPORTING | 1981×793 | PNG | 1.8 MB | Baked-in text |
| p. 15 | `phase6-post-shipment-infographic.png` | ORIGINAL_EMBEDDED | "Phase 6: Post Shipment and Realisation Procedures" 6-step icon banner | Phase 6 section header graphic | SUPPORTING | 1981×794 | PNG | 1.8 MB | Baked-in text |

All six phase banners share one consistent template/design system — a strong signal for how a rebuilt `/services/export-handholding` page could visually organize the 6 phases, even though the graphics themselves have text baked in rather than being reusable as structured data.

## china/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 19 | `china-sourcing-section-photo-uncredited.png` | ORIGINAL_EMBEDDED | Unnamed man on a phone call in a busy China shopping-mall corridor, lanyard/badge visible | Illustrative only — section-opener photo | SUPPORTING (genuine-looking but no caption identifies who this is) | 360×360 | PNG | 176 KB | No caption in the source names this person — do not label it as any specific staff member without client confirmation |
| p. 20 | `founder-hong-kong-delegation-1974.png` | ORIGINAL_EMBEDDED | **"Indian Business Delegation to Hong Kong in May 1974"** — 12-person group photo; late Founder Mr. M.A. Izzadeen, 3rd from left | `/china-sourcing` — company-history hero image | **HIGHEST — historical founding evidence, explicitly named priority in the task brief** | 1289×816 | PNG | 1.1 MB | Vintage photo, visible period grain/color cast — authentic aged quality, do not "restore" or color-correct per the no-beautification rule |
| p. 21 | `rahim-iyaz-china-factory-2015.png` | ORIGINAL_EMBEDDED | "Our MD Mr.Rahim Iyaz in a China factory visit in 2015" — MD gesturing in conversation with a factory contact, tiled floor sample visible | `/china-sourcing` — factory inspection section | **HIGH** | 960×720 | PNG | 556 KB | Good quality candid photo |
| p. 23 | `azeez-usa-clients-canton-fair-2025.png` | ORIGINAL_EMBEDDED | "Our China Incharge Mr.Azeez with our USA Clients at Canton Fair, 2025" — 3 men at a trade-fair transit hall | `/china-sourcing` — Canton Fair section | **HIGH — recent, named staff, client-facing** | 750×1000 | PNG | 1.1 MB | Good quality |
| p. 25 | `rahim-iyaz-riaz-malik-canton-fair-2014.png` | ORIGINAL_EMBEDDED | "Our MD Mr. Rahim Iyaz with Mr.Riaz, MD of King's Group of Companies and Mr.Malik of Tirunelveli at China Canton Fair in 2014" — 4 people examining a product sample at a fair booth | `/china-sourcing` — Canton Fair gallery | **HIGH** | 960×720 | PNG | 736 KB | Good quality |
| p. 26 | `canton-fair-indian-clients-group-2015.png` | ORIGINAL_EMBEDDED | "Canton Fair group with Indian Clients in 2015" — group of ~7 men walking a fair hall with luggage | `/china-sourcing` — Canton Fair gallery | MEDIUM | 960×540 | PNG | 612 KB | Good quality |
| p. 26 | `china-sourcing-canton-fair-2015.png` | ORIGINAL_EMBEDDED | "China sourcing at Canton Fair in 2015" — negotiation at a fair booth table | `/china-sourcing` — Canton Fair gallery | MEDIUM | 960×720 | PNG | 860 KB | Good quality |

## customs/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 30 | `hotel-supplies-inspection-netherlands-2024.png` | ORIGINAL_EMBEDDED | "Product inspection of Hotel supplies shipment to Netherlands in 2024" — two people inspecting stacked wooden export crates in a warehouse | `/services/exim-clearance` — genuine cargo evidence | **HIGH — genuine operational proof** | 1600×1200 | PNG | 1.8 MB | Excellent quality, high resolution |
| p. 31–32 | `export-shipment-inspection-usa-2025.png` | ORIGINAL_EMBEDDED | "Inspection of export shipment to USA in 2025" — two people at a pallet of export cartons in a warehouse (caption text flows onto the following page in the source, but the photo itself is on p. 31) | `/services/exim-clearance` — genuine cargo evidence | **HIGH — genuine operational proof** | 1280×960 | PNG | 1.1 MB | Good quality |
| p. 58 | `baggage-clearance-airport-signage-uncredited.png` | ORIGINAL_EMBEDDED | Airport Green Channel / Red Channel signage and customs desk, uniformed officers visible | `/services/nri-baggage-clearance` hero | SUPPORTING (looks like a genuine airport photo but carries no "Picture source" credit and no caption identifying the airport or PORTMATRIX's connection to it) | 1354×493 | PNG | 912 KB | Ambiguous provenance — do not present as "PORTMATRIX's own" without client confirmation; equally, it is not marked as stock either |
| p. 60 | `baggage-allowance-infographic.png` | ORIGINAL_EMBEDDED | Branded "GENERAL FREE ALLOWANCE FOR THE BAGGAGE" infographic — logo, MD signature (styled "FTP-IBAMI (IIFT), F-Card Qualified" — note this credential string is formatted slightly differently here than on p. 4's "PPIBAMI (IIFT), CBLR F-Card") | `/services/nri-baggage-clearance` — allowance table graphic | SUPPORTING | 1536×1024 | PNG | 1.4 MB | **Minor internal inconsistency spotted**: the MD's credential abbreviation is rendered two different ways within the same source PDF (p.4 vs p.60) — worth flagging to the client, not silently normalizing |

## logistics/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 64 | `postal-export-infographic.png` | ORIGINAL_EMBEDDED | Branded "POSTAL EXPORT" infographic — PortMatrix logo + India Post branding + service icons | `/services/postal-export` hero | SUPPORTING | 1774×887 | PNG | 1.6 MB | Well-designed; India Post's own branding is used with attribution, not claimed as PORTMATRIX's |

*(No image was found for the "Freight Forwarding & Logistics" core-service section itself, pp. 32–34 — confirmed absent on visual inspection, not just missing from the text extraction.)*

## riit/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 17 & p. 71 (duplicate) | `msme-tn-officials-training-2023-03-26.png` | ORIGINAL_EMBEDDED | "Export Training to Govt. of Tamil Nadu, MSME Officials across Tamil Nadu on 26 March, 2023" — MD speaking at a podium before a large seated audience under a marquee tent | `/riit` hero — used generically on p.17 and specifically captioned on p.71 | **HIGH** | 1024×683 | PNG | 728 KB | Same file reused twice in the source (confirmed via SHA-256); good quality |
| p. 68 | `riit-inauguration-2023-11-14.png` | ORIGINAL_EMBEDDED (+ mask) | "MSME DFO Assistant Director Mr. M V Leelakrishnan has inaugurated our RIIT Training Center in Chennai on 14 November, 2023" — ribbon-cutting photo | `/riit` — founding milestone | **HIGH — government official + institutional launch** | 1019×764 | PNG | 576 KB | Good quality |
| p. 70 | `fieo-training-sakthivel-unnikrishnan-2022-12-20.png` | ORIGINAL_EMBEDDED (+ mask) | "Our MD Mr.Rahim Iyaz with GM of FaME-TN Mr.Sakthivel and Jt. Director General of FIEO Mr.Unnikrishnan at Federation of Indian Export Organisations (FIEO) Training on 20 December, 2022" — 3-person panel | `/riit` — training gallery | **HIGH — FIEO is a national export body** | 938×423 | PNG | 448 KB | Phone photo ("Shot on OnePlus" watermark visible in-frame), decent quality |
| p. 70 | `fieo-women-entrepreneurs-training-2023-02-09-speaker.png` | ORIGINAL_EMBEDDED | FIEO "Three Days Capacity Building Programme on International Trade for Women Entrepreneurs" — MD presenting | `/riit` — training gallery | **HIGH** | 1600×720 | PNG | 900 KB | Good quality |
| p. 71 | `fieo-women-entrepreneurs-training-2023-02-09-audience.png` | ORIGINAL_EMBEDDED | "Federation of Indian Export Organisations (FIEO) Training for Women Entrepreneurs on 9 February, 2023" — seated women audience | `/riit` — training gallery | **HIGH** | 1280×576 | PNG | 1.1 MB | Phone photo watermark visible, decent quality |
| p. 72 | `deputy-dgft-reddy-session-2023-11-19.png` | ORIGINAL_EMBEDDED | "Deputy DGFT Mr. K.H. Reddy is seen along with our MD Mr.Rahim Iyaz… Session on DGFT Procedures… at our RIIT on 19 November, 2023" | `/riit` — training gallery | **HIGH — central government official (DGFT)** | 1280×960 | PNG | 1.1 MB | Good quality |
| p. 73 | `postal-export-session-kalyani-2023-11-16.png` | ORIGINAL_EMBEDDED | "Superintendent of Foreign Post Office Ms. Kalyani and Mr. Prem Rajkumar, Postal Export Marketing Executive… Session on Postal Export Procedures… at our RIIT on 16 November, 2023" | `/riit` — training gallery | MEDIUM–HIGH | 1280×960 | PNG | 1.1 MB | Good quality |
| p. 73 | `fssai-session-rohini-2023-11.png` | ORIGINAL_EMBEDDED | "FSSAI Officer Ms.Rohini is taking a Session on FSSAI Procedures in food imports… at our RIIT November 2023" | `/riit` — training gallery | MEDIUM–HIGH | 1280×960 | PNG | 1.2 MB | Good quality |
| p. 74 | `ecgc-session-subhavignesh-2023-11.png` | ORIGINAL_EMBEDDED | "ECGC Mr.Subha Vignesh is taking a Session on ECGC Procedures in exports… at our RIIT in November 2023" | `/riit` — training gallery | MEDIUM–HIGH | 1280×576 | PNG | 560 KB | Good quality |
| p. 74 | `eia-session-antony-2023-11.png` | ORIGINAL_EMBEDDED | "Govt. of India's Export Inspection Agency (EIA) Director Mr.Antony is taking a Session on EIA Procedures… at our RIIT in November 2023" | `/riit` — training gallery | **HIGH — central government agency** | 1280×960 | PNG | 1.0 MB | Good quality |
| p. 75 | `india-post-training-2024-01-25.png` | ORIGINAL_EMBEDDED | "India Post Training at Foreign Post Office in Chennai on 25 January, 2024" | `/riit` — training gallery | MEDIUM | 1280×960 | PNG | 1.0 MB | Good quality |
| p. 75 | `agriculture-export-training-edii-tn-2025-08-12.png` | ORIGINAL_EMBEDDED | "Agriculture export training In Chennai at EDII-TN Campus for around 40 Government Senior Officials of Cooperative Society on 12 August 2025… organised by Govt. of Tamil Nadu TNAPEx and EDII-TN" | `/riit` — training gallery | **HIGH — state government, scale (40 officials)** | 1280×960 | PNG | 1.2 MB | Good quality |
| p. 76 | `msme-dfo-mdp-programme-2025.png` | ORIGINAL_EMBEDDED | "Govt. of India MSME-DFO MDP Programme on Export Import Management in 2025 at our RIIT Campus" | `/riit` — training gallery | **HIGH — central government** | 1600×1200 | PNG | 2.2 MB | Excellent quality, largest file in this batch |
| p. 76 | `agricultural-export-procedures-session-2026-05-13.png` | ORIGINAL_EMBEDDED | "A session on Agricultural Export Procedures for Agri Entrepreneurs on behalf of Tamil Nadu Government Entities EDII-TN and TNAPEx on 13.05.2026" | `/riit` — training gallery | MEDIUM–HIGH | 960×1280 | PNG | 1.8 MB | **Date is in the future relative to this audit (2026-05-13) — flag for client confirmation, do not silently adjust the date** |

## events/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 67 | `first-export-training-flyer-2020-08-02.png` | ORIGINAL_EMBEDDED | "Our First Export Training was started on 2 August, 2020" — promotional event flyer ("THE PRO COACH" / V UNITED, `www.rahimiyaz.com/exim`) featuring headshots of MD and a co-presenter | `/about` — founding-of-training-practice milestone | **HIGH — founding milestone**, though this is a promotional flyer, not a candid event photo | 946×1280 | PNG | 1.4 MB | Note the separate personal-brand domain `rahimiyaz.com` — distinct from `portmatrix.in` |
| p. 72 | `shiju-thomas-ias-facilitation-2023-03-26.png` | ORIGINAL_EMBEDDED | "Facilitation to our MD Mr. Rahim Iyaz by Ms. Shiju Thomas, IAS, Secretary for MSME Department of FaME-TN, Govt. of Tamil Nadu on 26 March, 2023" | `/about` or `/riit` — institutional recognition | **HIGH — IAS officer, state government recognition** | 1024×683 | PNG | 636 KB | Good quality |
| p. 77 | `alagappa-university-mou-2022-10-31.png` | ORIGINAL_EMBEDDED | "An MoU was signed between Alagappa University, Karaikudi and RIIT… on 31st October, 2022" — 5-person signing photo (Prof. G. Ravi VC presenting the MoU to MD; Dr. Gurumoorthy and Dr. Muthusamy present) | `/about` or `/riit` — **flagship institutional-credibility image, explicitly named as a priority asset in the task brief** | **HIGHEST** | 1280×853 | PNG | 1.1 MB | Good quality, clearly legible signing moment |
| p. 78 | `loyola-college-seminar-flyer-2025-08-22.png` | ORIGINAL_EMBEDDED | Event flyer for "India's Trade Strategy and Reshaping a Multipolar Trade Architecture," Loyola College — headshot grid of ~8 dignitaries incl. MD (listed as "Founder, Regional Institute of International Trade"), a former Indian ambassador, a High Commission deputy, and a World Bank specialist | `/media` or `/about#credibility` | MEDIUM–HIGH — shows high-prestige association, but is a flyer not a candid photo | 719×1001 | PNG | 956 KB | Good quality, text-dense |
| p. 79 | `loyola-college-seminar-photo-2025-08-22.png` | ORIGINAL_EMBEDDED | Candid photo — MD speaking at the Loyola College podium | `/about#credibility` | **HIGH** | 1280×720 | PNG | 1.1 MB | Good quality |
| p. 79 | `dg-vaishnav-college-flyer-2025-08-04.png` | ORIGINAL_EMBEDDED | DG Vaishnav College "International Commerce Day" flyer — magazine (FINAX) release event, "Guest of Honor Mr. Rahim Iyaz" | `/media` or `/about#credibility` | MEDIUM | 1131×1600 | PNG | 1.2 MB | Good quality |
| p. 80 | `dg-vaishnav-college-photo-2025-08-04.png` | ORIGINAL_EMBEDDED | Candid group photo — magazine presentation moment, 5 people | `/about#credibility` | MEDIUM–HIGH | 1600×900 | PNG | 1.8 MB | Good quality |
| p. 80 | `mepco-engineering-college-flyer-2024-09-11.png` | ORIGINAL_EMBEDDED | MEPCO Engineering College event flyer (ACIC-MEPCO Innovative Foundation), MD headshot | `/about#credibility` | MEDIUM | 750×1055 | PNG | 912 KB | Good quality |
| p. 81 | `mepco-engineering-college-photo-2024-09-11.png` | ORIGINAL_EMBEDDED | Candid stage photo, 4 people, MEPCO banner visible | `/about#credibility` | MEDIUM | 1280×960 | PNG | 908 KB | Good quality |
| p. 81 | `siet-jbas-college-photo-2023-07-12.png` | ORIGINAL_EMBEDDED | "Export Orientation Programme at SIET College (Presently known as JBAS College, Chennai) on 12 July, 2023" — MD speaking | `/about#credibility` | MEDIUM | 1200×1599 | PNG | 2.0 MB | Excellent quality, largest events-folder file |
| p. 82 | `dawoodi-bohra-workshop-2024-09-08.png` | ORIGINAL_EMBEDDED | "Import Export Workshop for Dawoodi Bohra Muslim Community on 8 September, 2024 in Chennai" — large hall, MD addressing seated attendees | `/about#credibility` | MEDIUM | 1280×960 | PNG | 1.2 MB | Good quality |
| p. 82 | `indo-uae-economic-forum-2025-08-09.png` | ORIGINAL_EMBEDDED | "Indo-UAE Economic Forum on 9 August, 2025 at Hotel Novotel, Chennai" — MD speaking beside "Indo UAE Economic Chamber of Commerce" banner | `/about#credibility` | MEDIUM–HIGH — international forum | 1280×853 | PNG | 676 KB | Good quality |

## credentials/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 68 | `certificate-appreciation-handoff-photo.png` | ORIGINAL_EMBEDDED | Candid photo of the certificate handoff moment between Mr. Leelakrishnan (MSME DFO) and MD | `/about#credibility` | **HIGH** | 1280×960 | PNG | 900 KB | Good quality |
| p. 69 | `certificate-of-appreciation-msme-dfo-2023-11-28.png` | ORIGINAL_EMBEDDED (+ mask) | The actual scanned "Certificate of Appreciation" document — MSME Development & Facilitation Office (Govt. of India) letterhead, dated 28.11.2023, signed by M.V. Leelakrishnan, Assistant Director, naming RIIT's Founder "Shri. Mohamed Abdur Rahim" and stating ~100 participants trained | `/about#credibility` — a literal government certificate scan is very strong trust evidence | **HIGH — explicit certificate/appreciation material, a named priority asset** | 845×1127 | PNG | 388 KB | Clear, legible scan — preserve exactly as-is, do not redesign or retype |

## media/

| Source PDF page | Extracted file | Extraction type | What/who it shows | Proposed website use | Trust priority | Pixel dimensions | Format | File size | Quality/provenance note |
|---|---|---|---|---|---|---|---|---|---|
| p. 83 | `youtube-interview-agri-show-screenshot.png` | ORIGINAL_EMBEDDED (video frame) | Screenshot of MD being interviewed on a Tamil agricultural TV programme ("வேளாண் களம்" / DD Tamil) | `/media` — link out to, or embed, the actual video rather than reuse this static frame | HIGH (as evidence the interview exists) | 750×422 | PNG | 364 KB | This is a frame grab baked into the PDF, not the video itself — the real asset is the linked YouTube video: `https://www.youtube.com/live/K28p2YTy2OI?feature=shared` |
| p. 83 | `youtube-interview-studio-screenshot.png` | ORIGINAL_EMBEDDED (video frame) | Second screenshot from the same interview, studio setting with two anchors | Same as above | HIGH | 1280×720 | PNG | 688 KB | Same caveat |
| p. 84 | `nanayam-vikatan-article-2024-02-04.png` | ORIGINAL_EMBEDDED | "Our MD's China Import Article in NANAYAM VIKATAN Tamil Magazine on 04 February, 2024" — full magazine cover/article scan (Tamil text) | `/media` — press coverage | **HIGH — genuine press coverage** | 1599×1600 | PNG | 1.5 MB | Excellent quality, large scan |

---

## stock/ — illustrative-only images (NOT PORTMATRIX evidence)

**A `stock/` category was added beyond the original 10 folders specifically to keep these separate from genuine trust assets, per the task's instruction to "keep those separate and label their provenance accurately."** These appear in the source PDF on pages covering abstract legal/duty schemes where the source document itself had no genuine PORTMATRIX photo and used a stock, AI-generated, or third-party-government image instead.

**Per the Image Principle: do not treat any of these as trust assets, do not present them as genuine PORTMATRIX evidence, and do not let them substitute for real evidence where it exists.**

| Source PDF page | Extracted file | What it shows | Source's own credit | Pixel dimensions | File size | Note |
|---|---|---|---|---|---|---|
| p. 27 | `customs-broker-stock-shutterstock.png` | Generic "CUSTOMS" graphic with boxes/globe icons | "Picture source: Google" — **watermark reads "shutterstock.com · 2172351753"** | 265×190 | 68 KB | Confirmed Shutterstock stock image; low resolution, thumbnail-grade only |
| p. 28 | `exim-clearance-stock.png` | Hands holding a tablet showing customs/compliance icons | "Picture source: https://www.icegate.gov.in/" | 406×255 | 148 KB | Low resolution |
| p. 32 | `freight-logistics-stock.png` | Generic ship/truck/plane logistics graphic | No credit given | 1024×585 | 780 KB | Uncredited but clearly stock-style |
| p. 35 | `msme-insurance-stock-graphic.png` | "TRADE CREDIT INSURANCE" designed marketing graphic | No credit given | 1536×1024 | 1.9 MB | Third-party or generic insurance marketing collateral, not PORTMATRIX's own |
| p. 39 | `moowr-aigenerated-warehouse.png` | Warehouse interior with shelving and boxes | **"Picture source: ChatGPT"** (source's own credit) | 1125×750 | 1.1 MB | Source explicitly credits this as AI-generated |
| p. 42 | `advance-authorisation-aigenerated.png` | Folder/binder labeled "ADVANCE AUTHORISATION" with an "APPROVED" stamp | **"Picture source: ChatGPT"** (source's own credit) | 1536×1024 | 1.8 MB | Source explicitly credits this as AI-generated |
| p. 45 | `epcg-stock-pexels-machine.png` | Machine-shop / lathe equipment photo | "Picture source: https://www.pexels.com/search/machine/" | 500×333 | 272 KB | Confirmed Pexels stock |
| p. 48 | `sez-stock-sezindia-cityscape.png` | Generic city skyline at dusk with light-trail traffic | "Picture source: https://sezindia.gov.in/photo-gallery" | 400×256 | 228 KB | Government photo-gallery stock, not specific to any named SEZ |
| p. 50 | `ftwz-stock-pexels-warehouse.png` | Warehouse aisle with wrapped pallets | "Picture source: https://www.pexels.com/search/free trade warehousing zone/" | 500×333 | 252 KB | Confirmed Pexels stock |
| p. 53 | `eou-aerial-factory-uncredited.png` | Aerial view of a large industrial/warehouse building | No credit given | 322×257 | 128 KB | Uncredited, generic — no PORTMATRIX connection stated anywhere near it |
| p. 55 | `aeo-india-official-logo.png` (+ `-mask`) | Official "AEO INDIAN CUSTOMS" programme logo | "Picture source: https://aeoindia.gov.in/index" | 184×184 | 20 KB (+ 8 KB mask) | A real but third-party (Government of India) logo — usable to illustrate the AEO scheme, but not a PORTMATRIX brand asset |
| p. 65 | `ecommerce-export-stock-graphic.png` | Abstract glowing globe/network digital-commerce graphic | No credit given | 1366×768 | 808 KB | Generic stock-style digital graphic |

## Missing / unrecoverable

None. Every image referenced by caption in the M0.5 text-only pass was successfully located and identified against its actual PDF page and neighboring photo once the real PDF became available. The only item still genuinely outstanding is **recompositing the two split alpha-mask assets** (MD signature, RIIT-inauguration photo mask, FIEO-training photo mask, AEO-logo mask, Certificate-of-Appreciation mask) into true RGBA PNGs — deferred because it requires an image-compositing tool not present in this environment and not installed without permission (see [PORTMATRIX_ASSET_MANIFEST.md](PORTMATRIX_ASSET_MANIFEST.md)).

## V6 brand continuation (2026-09-25)

- **Logo authority is now `PortMatrix Logo V6.pdf`** (client-supplied, pure vector). The p.1 logo (`branding/portmatrix-logo-primary.jpg`, "Excellence in Compliance") and `portmatrix-mark-square.png` are superseded — kept on disk as originals, no longer rendered anywhere.
- V6 web assets (converted with `pdftocairo`, viewBox trimmed only — no redraw/recolour): `branding/portmatrix-logo-v6.svg` (site logo), `branding/portmatrix-logo-v6.png` (JSON-LD), `branding/portmatrix-og-v6.png` (1200×630 share card), `app/icon.png` + `app/apple-icon.png` (2×2 mark only).
- Sitewide OG image is no longer the Netherlands 2024 inspection photo; that photo stays on Export Import Clearance / operational proof only.
- Watermarks not previously recorded: `stock/freight-logistics-stock.png` carries an **iStock** watermark (Tryaging / 1273907220); `stock/ecommerce-export-stock-graphic.png` carries a **Gemini** AI mark. Neither is rendered; never use.
- Source infographics with the **old logo baked in**: p.2 services overview (removed from `/services`, text list covers it), export-handholding hub infographic (removed from the hub page, phase grid covers it), six phase infographics (kept on phase pages, linked full size) and the postal infographic — CLIENT_CONFIRMATION_REQUIRED whether V6 versions will be supplied.

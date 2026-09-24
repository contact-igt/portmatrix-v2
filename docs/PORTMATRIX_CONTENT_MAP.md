# PORTMATRIX — Approved Source Content Map

Source: `docs/source/PORTMATRIX_SOURCE_TEXT.txt` (text extraction of the 87-page approved PDF; **the PDF itself was not available for this pass** — see [PROJECT_BRIEF.md](PROJECT_BRIEF.md) "Open blocker"). Page numbers below are read directly from the page-footer numbers embedded in the source text, so they should carry over 1:1 to the PDF once it is supplied.

**No content has been rewritten, paraphrased, or summarized-with-altered-meaning below.** "Section/Heading" quotes the source's own heading text. Status values used in the "Source content status" column:
- **COMPLETE** — the source gives a full explanatory section (definition, features, benefits, flow chart, etc.)
- **SUMMARY** — the source gives only the one-line Core-Services-list description; full detail lives in a separate later section
- **LIST-ONLY** — the source gives a bare bullet list with little/no narrative

---

## Route architecture (proposed — no implementation in this module)

Per the task's "minimum-code" instruction, this is **not** 17 hand-written page components. Proposed structure:

| Route pattern | Purpose |
|---|---|
| `/` | Homepage — curated entry point, not the sole content holder |
| `/about` | About PORTMATRIX + MD profile + Founder/1974 history |
| `/services` | Index/overview of all 17 Core Services |
| `/services/[slug]` | **One reusable data-driven template** for each of the 17 Core Services, driven by a content array (`lib/services-data.js`) — not 17 separate `.jsx` files |
| `/services/export-handholding` (or `/services/export-handholding/[phase]`) | MSME Export Handholding gets its own richer route given its depth (6 phases, ~45 sub-steps) — still one template parameterized by phase, not 6 hand-written pages |
| `/china-sourcing` | Standalone route — central to brand identity (50-year history, Canton Fair, dedicated photo evidence) |
| `/riit` | Export Training / Research / Consultancy — RIIT is described as an "allied concern," distinct enough to warrant its own route |
| `/media` or a section within `/about` | Press/media coverage, training photo gallery, Alagappa MoU |
| `/contact` | Contact — also keep an in-page anchor version on `/` for the quote CTA, consistent with current UX pattern |

This keeps hand-authored route files to roughly 6–8 regardless of the service count.

---

## A. About PORTMATRIX

| Field | Value |
|---|---|
| Source page(s) | pp. 3 |
| Proposed route | `/about` |
| Section/heading | "About Us:" |
| Source content status | COMPLETE |
| Source images available | None referenced in this specific section |
| Notes | Positions PORTMATRIX's **core strength as "Export Handholding"** end-to-end (product selection → HS code → policy → market ID → documentation → compliance → clearance → logistics → export proceeds realisation) — a materially different emphasis than the current website's "customs clearance" framing. Also states the tagline **"PORTMATRIX— Excellence in EXIM Compliance"** (current site uses "Excellence in Compliance" — missing "EXIM"). Introduces RIIT (Regional Institute of International Trade) as an "allied concern" and "Academic Centre of Excellence in International Trade." |

## B. MD Profile

| Field | Value |
|---|---|
| Source page(s) | pp. 3–4 |
| Proposed route | `/about` (dedicated section/anchor) |
| Section/heading | "Our MD's Profile:" |
| Source content status | COMPLETE |
| Source images available | Portrait implied by page layout (photo placeholder area on p.3–4 in the PDF — **could not confirm without the PDF itself**; no later verified MD portrait photo caption was found in the text, only event photos where he appears with others) |
| Notes | Full credentials: **M.Com, MBA, M.Phil., PGDIBO, PPIBAMI (IIFT), CBLR F-Card**. Vintage experience since 1996. Countries: **Republic of Maldives, Singapore, China, Hong Kong, Malaysia, Thailand, UAE, Saudi Arabia and Sri Lanka** (9 countries). Prior career: **State Bank of India, Risk Mitigation Management**. Authorised Resource Person for: **Govt. of India-MSME, EDII-TN, TNAPEx, FIEO, Alagappa University**. See [CURRENT_VS_SOURCE_CONTENT_AUDIT.md](CURRENT_VS_SOURCE_CONTENT_AUDIT.md) for exact gaps vs. the current site's shorter bio. |

## C. Core Services (17) — overview list

| Field | Value |
|---|---|
| Source page(s) | pp. 4–7 |
| Proposed route | `/services` (index) |
| Section/heading | "Core Services" |
| Source content status | SUMMARY (one line each; full detail in dedicated later sections for services 1–4, 6–17; service 2's detail is under "Export Training - Research - Consultancy") |
| Source images available | None on the list page itself |
| Notes | This is the authoritative list and order. **The current website's 6 service cards cover only 6 of these 17** (see audit doc). Full per-service breakdown follows below (D1–D17). |

### D1. MSME Export Handholding

| Field | Value |
|---|---|
| Source page(s) | pp. 7–16 (Phase 1: 7–9, Phase 2: 9–10, Phase 3: 10–12, Phase 4: 12–13, Phase 5: 14–15, Phase 6: 15–16) |
| Proposed route | `/services/export-handholding` with 6 phase sections/anchors |
| Section/heading | "1. MSME EXPORT HANDHOLDING PACKAGE" → "End-to-End Export Facilitation Process" |
| Source content status | COMPLETE — by far the most detailed section in the source (45 individual sub-steps across 6 phases, each with its own flow chart) |
| Source images available | Flow-chart diagrams only (text-based arrows in source, no photos) — these are process diagrams that should be redrawn as real graphics, not photos |
| Notes | **This is the company's stated "core strength" per the About Us section, yet it does not exist anywhere on the current website.** Highest-priority gap. |

**Phase breakdown:**

| Phase | Title | Source page(s) | Sub-steps (count) |
|---|---|---|---|
| 1 | Business Setup and Registration | pp. 7–9 | 9 (PAN, Digital Signature, Company Formation, GSTIN, AD Bank Current Account, IEC, RCMC, ICEGATE Registration, Other PGA Registration) |
| 2 | Pre-Export Planning | pp. 9–10 | 7 (Product/HS Code, Export Policy Schedule 2 check, Market Intelligence, FTA/CEPA, Finding Buyers, Export Promotion Schemes, EPC/EDA connect) |
| 3 | Buyer Development and Commercial Negotiations | pp. 10–12 | 8 (Importing-country regs, Payment methods LC/AP/DP/DA, Incoterms, Quotation, Negotiation, Buyer credit check, ECGC trade credit insurance, Pre/post-shipment finance) |
| 4 | Pre-Shipment Procedures | pp. 12–13 | 7 (SPS/TBT compliance, Pre-shipment inspection, Manufacture/Procurement, Labelling/Packaging, Forex mitigation, Logistics knowhow, Marine Insurance) |
| 5 | Shipment Procedures | pp. 14–15 | 7 (Export docs, Shipping Bill filing, Duty Drawback, Customs Clearance & Examination, LEO, Loading, Final Shipping Bill/Bill of Export) |
| 6 | Post-Shipment and Realisation Procedures | pp. 15–16 | 6 (Bank document submission within 21 days, Follow-up, Realisation, e-BRC, Compliance Reporting/5-year records, Business Growth) |

### D2. Export Training - Research - Consultancy (RIIT)

| Field | Value |
|---|---|
| Source page(s) | pp. 16–19 |
| Proposed route | `/riit` |
| Section/heading | "2. Export Training - Research - Consultancy" |
| Source content status | COMPLETE |
| Source images available | Yes — extensive real event/training photo gallery is documented separately later in the source (pp. 67–83); see Section L below and [PORTMATRIX_IMAGE_MAP.md](PORTMATRIX_IMAGE_MAP.md) |
| Notes | RIIT is training partner for **Ministry of MSME (Central & State), EDII-TN, TNAPEx, India Post, FIEO, Alagappa University**. Lists 12 courses (Export Startup Procedure, The Customs Act 1962, Customs Tariff Act 1975, FTP 2023, Customs Clearance Procedures, IGST in Export, FEMA 1999, IPR, Allied Acts, Export Promotion Schemes, MOOWR Scheme, Postal/Courier/E-Commerce Export). Current website's "How it works" section and footer only vaguely gesture at this via a "RIIT Training" dead link — none of the 12 courses appear anywhere. |

### D3. China Import Sourcing (Since 1974)

| Field | Value |
|---|---|
| Source page(s) | pp. 19–30 (core content pp. 19–24; Canton Fair sub-section pp. 24–30) |
| Proposed route | `/china-sourcing` |
| Section/heading | "3. China Import Sourcing (Since 1974)" |
| Source content status | COMPLETE |
| Source images available | **Yes — multiple genuine historical/event photos**, incl. 1974 Hong Kong founder delegation photo, MD's 2015 China factory visit, and 5+ Canton Fair photos across 2014/2015/2025 (see Image Map) |
| Notes | Founder history: **"Our late Founder Mr. M.A. Izzadeen had started his Gem Stones trading in Hong Kong during the year 1974"** — this founder and his name are **entirely absent from the current website**, which only says "China trade roots from 1974" with no named founder or photo. Also: "Right Supplier Sourcing" states cost reduction of **"30% – 40% minimum"** (current site rounds to a flat "30–40%"/"40%" stat — close but not exact wording). Canton Fair section includes a full trade-fair category breakdown (Phases 1–3) not present on the current site at all. |

### D4. Licensed Customs Broker

| Field | Value |
|---|---|
| Source page(s) | pp. 27–28 |
| Proposed route | `/services/customs-broker` |
| Section/heading | "4. Licensed Customs Broker" |
| Source content status | COMPLETE |
| Source images available | "Picture source: Google" — a **generic/stock image**, not genuine PORTMATRIX evidence |
| Notes | Quotes the exact regulatory definition: Customs Brokers Regulations 2018, Regulation 2(d). Lists 6 "How We Work" commitments. Current site's Services card covers this at summary level only ("Core" tag) — the regulatory citation and the "How We Work" commitments are missing. |

### D5. Export - Import Clearance

| Field | Value |
|---|---|
| Source page(s) | pp. 28–32 |
| Proposed route | `/services/exim-clearance` |
| Section/heading | "5, Export - Import Clearance" *(sic — comma in source heading, not a period)* |
| Source content status | COMPLETE |
| Source images available | "Picture source: https://www.icegate.gov.in/" (stock/screenshot, not genuine); plus **2 genuine real shipment photos**: "Product inspection of Hotel supplies shipment to Netherlands in 2024" and "Inspection of export shipment to USA in 2025" |
| Notes | Very detailed 7-part breakdown (Documentation, Clearance, Duty & Tax Calculation with 11 duty types listed, Compliance & Regulations, Port & Cargo Coordination, Cargo Delivery Support, Advisory Services) plus full Import and Export workflow lists. **The current site's `ClearanceTracker` component's 6-stage workflows are a reasonably faithful simplification of these real workflows** — but its shipment reference numbers (`BOE-IN-4827193`, `SB-EX-9051482`) and the "Live clearance" pulsing badge are fabricated demo data with no basis in the source (see audit doc — flagged as a trust risk, not a content-accuracy one). |

### D6. Freight Forwarding & Logistics

| Field | Value |
|---|---|
| Source page(s) | pp. 32–34 |
| Proposed route | `/services/freight-forwarding` |
| Section/heading | "6. Freight Forwarding & Logistics" |
| Source content status | COMPLETE |
| Source images available | None referenced |
| Notes | Lists 8 core freight-forwarding services and an 8-segment "Logistics Business Segments" table (Freight Forwarding, Customs Brokerage, Warehousing, Transportation, 3PL, 4PL, Cold Chain, E-commerce Logistics) plus a workflow diagram and key-documents list. **Entirely absent from the current website**, which has no freight/logistics service card at all. |

### D7. MSME Insurance Package

| Field | Value |
|---|---|
| Source page(s) | pp. 35–39 |
| Proposed route | `/services/msme-insurance` |
| Section/heading | "7. MSME Insurance Package" |
| Source content status | COMPLETE |
| Source images available | None referenced |
| Notes | 14 insurance products listed (Export Credit, Domestic Trade Credit, Political Risk, Factoring, Forfaiting, Marine Cargo, Marine Hull, Inland Transit, Warehousing, Warehouse Keeper's Liability, Port & Terminal Operators, Freight Services Liability, Duty Transit, D&O, Keyman), each individually defined, plus two comparison tables (Credit vs. Political Risk Insurance; Forfaiting vs. Factoring). **Entirely absent from the current website.** |

### D8. MOOWR (Manufacture and Other Operations in Warehouse Regulations)

| Field | Value |
|---|---|
| Source page(s) | pp. 39–42 |
| Proposed route | `/services/moowr` |
| Section/heading | "8. MOOWR" |
| Source content status | COMPLETE |
| Source images available | "Picture source: ChatGPT" — an **AI-generated illustrative image**, explicitly not genuine PORTMATRIX evidence |
| Notes | Detailed: Section 65 of the Customs Act 1962, 5 key benefits, flow chart, types of operations allowed, eligibility, and a MOOWR-vs-SEZ-vs-EPCG comparison table. Current site's "MOOWR Warehousing" card is a 1-sentence summary only — the comparison table and eligibility detail are missing. |

### D9. Advance Authorisation Scheme

| Field | Value |
|---|---|
| Source page(s) | pp. 42–45 |
| Proposed route | `/services/advance-authorisation` |
| Section/heading | "9. ⁠Advance Authorisation Scheme" |
| Source content status | COMPLETE |
| Source images available | "Picture source: ChatGPT" — AI-generated illustrative, not genuine |
| Notes | Currently only implicitly covered by the current site's generic "DGFT Consultancy" card ("Advance Authorisation, EPCG, RoDTEP..."), with none of this scheme's actual detail (types, value-addition %, worked ₹-example) present. Source gives a worked numeric example under EPCG (see D10) but AA's own example is qualitative ("textile exporter" scenario). |

### D10. Export Promotion Capital Goods (EPCG) Scheme

| Field | Value |
|---|---|
| Source page(s) | pp. 45–47 |
| Proposed route | `/services/epcg` |
| Section/heading | "10. Export Promotion Capital Goods (EPCG) Scheme" |
| Source content status | COMPLETE |
| Source images available | "Picture source: https://www.pexels.com/search/machine/" — **stock photo**, not genuine |
| Notes | Includes a worked example: **"A company imports a machine worth ₹1 crore under EPCG and saves ₹7.50 lakh duty… Export Obligation is: ₹7.50 lakh × 6 = ₹45 lakh."** This concrete, credibility-building example is entirely absent from the current site. |

### D11. SEZ (Special Economic Zone)

| Field | Value |
|---|---|
| Source page(s) | pp. 48–49 |
| Proposed route | `/services/sez` |
| Section/heading | "11. Special Economic Zone (SEZ)" |
| Source content status | COMPLETE |
| Source images available | "Picture source: https://sezindia.gov.in/photo-gallery" — stock/government source, not genuine PORTMATRIX evidence |
| Notes | Names **Mahindra World City, Tamil Nadu** as the major regional SEZ example — a concrete local reference point missing from the current site's one-sentence SEZ/FTWZ card. |

### D12. FTWZ (Free Trade Warehousing Zone)

| Field | Value |
|---|---|
| Source page(s) | pp. 50–53 |
| Proposed route | `/services/ftwz` |
| Section/heading | "12. Free Trade Warehousing Zone (FTWZ)" |
| Source content status | COMPLETE |
| Source images available | "Picture source: https://www.pexels.com/search/…" — stock, not genuine |
| Notes | Names **J Matadee FTWZ, Sriperumbudur, Tamil Nadu** as the local example. Includes an SEZ-vs-FTWZ comparison table. Current site bundles SEZ and FTWZ into one card ("SEZ & FTWZ Registration") with none of this detail. |

### D13. EOU (Export Oriented Units)

| Field | Value |
|---|---|
| Source page(s) | pp. 53–54 |
| Proposed route | `/services/eou` |
| Section/heading | "13. EOU (Export Oriented Units)" |
| Source content status | COMPLETE |
| Source images available | None referenced |
| Notes | **Entirely absent from the current website** — no card, no mention, not even bundled into another card. |

### D14. AEO (Authorised Economic Operator)

| Field | Value |
|---|---|
| Source page(s) | pp. 55–57 |
| Proposed route | `/services/aeo` |
| Section/heading | "14. Authorised Economic Operator (AEO)" |
| Source content status | COMPLETE |
| Source images available | "Picture source: https://aeoindia.gov.in/index" — official government portal reference, not a PORTMATRIX-owned asset |
| Notes | Includes the 4-tier AEO category table (AEO-T1/T2/T3/LO) with validity periods. **Entirely absent from the current website.** |

### D15. NRI Baggage Clearance

| Field | Value |
|---|---|
| Source page(s) | pp. 58–63 |
| Proposed route | `/services/nri-baggage-clearance` |
| Section/heading | "15. NRI Baggage Clearance" |
| Source content status | COMPLETE — the single longest individual service section in the source (6 pages) |
| Source images available | None referenced |
| Notes | Extremely detailed: Green/Red Channel rules, duty-free allowance tables (cigarettes/liquor/tobacco), General Free Allowance by passenger class (₹75,000/₹25,000/₹2,500), gold jewellery allowance by gender (40g female / 20g male), Transfer-of-Residence allowance tables by duration abroad, Annexure-II household-item examples, currency limits (USD 5,000 cash / USD 10,000 aggregate), and pet import rules. References **"The Baggage Rules, 2026"** (a future-dated regulation — flag for client confirmation, not something to silently correct). **Entirely absent from the current website.** |

### D16. Postal Export Aggregator

| Field | Value |
|---|---|
| Source page(s) | pp. 63–64 |
| Proposed route | `/services/postal-export` |
| Section/heading | "16. Postal Export" *(list heading differs slightly from the Core Services list's "Postal Export Aggregator")* |
| Source content status | COMPLETE (concise) |
| Source images available | None referenced |
| Notes | Covers Dak Ghar Niryat Kendras (DNKs), Postal Bill of Export (PBE), and India Post partnership under FTP 2023. **Entirely absent from the current website.** |

### D17. E-Commerce Export

| Field | Value |
|---|---|
| Source page(s) | pp. 64–67 |
| Proposed route | `/services/ecommerce-export` |
| Section/heading | "17. E-Commerce Export" |
| Source content status | COMPLETE |
| Source images available | None referenced |
| Notes | Names specific platforms: **Amazon Global Selling, eBay, Etsy, Alibaba.com, Flipkart (cross-border)**. Full process-flow diagram and government-support scheme list. **Entirely absent from the current website.** |

---

## E–K. Cross-cutting legal/scheme services already covered above

(EOU, AEO, SEZ, FTWZ, MOOWR, Advance Authorisation, EPCG are D8–D14 above — not duplicated here to avoid redundant rows, per the task's request to map each into the architecture exactly once.)

## L. Training / institutional credibility (photo-driven pages, not prose sections)

| Field | Value |
|---|---|
| Source page(s) | pp. 67–83 |
| Proposed route | `/about#credibility` or a dedicated `/media` gallery route |
| Section/heading | No single heading — a sequence of dated photo captions following the E-Commerce Export section |
| Source content status | LIST-ONLY (each entry is a single dated photo caption, no surrounding prose) |
| Source images available | **Yes — this entire block is genuine institutional-credibility photography.** ~20 distinct dated events from 2 Aug 2020 through 13 May 2026 (see full list in [PORTMATRIX_IMAGE_MAP.md](PORTMATRIX_IMAGE_MAP.md), rows M1–M20), including: first export training (2020); RIIT centre inauguration by MSME DFO Assistant Director (14 Nov 2023); Certificate of Appreciation from MSME DFO; FIEO trainings (Dec 2022, Feb 2023); Govt. of TN MSME officials training (Mar 2023); facilitation by Ms. Shiju Thomas, IAS (Mar 2023); Deputy DGFT Mr. K.H. Reddy session (Nov 2023); Foreign Post Office / postal-export session (Nov 2023); FSSAI officer session (Nov 2023); ECGC session (Nov 2023); Export Inspection Agency (EIA) director session (Nov 2023); India Post training (Jan 2024); Agriculture export training with EDII-TN/TNAPEx (Aug 2025); MSME-DFO MDP programme (2025); Agricultural export procedures session (13 May 2026); **Alagappa University MoU signing (31 Oct 2022)**; Loyola College seminar (Aug 2025); DG Vaishnav College International Commerce Day (Aug 2025); MEPCO Engineering College talk (Sept 2024); SIET/JBAS College export orientation (July 2023); Dawoodi Bohra community workshop (Sept 2024); Indo-UAE Economic Forum (Aug 2025). |
| Notes | This is the single richest block of **HIGH-trust-priority genuine evidence** in the entire source document, and **none of it exists on the current website in any form.** Highest-priority image-extraction target once the PDF is available. |

## M. Media / Press

| Field | Value |
|---|---|
| Source page(s) | pp. 83–84 |
| Proposed route | `/media` (or folded into `/about#press`) |
| Section/heading | (no heading — follows directly after the training photo sequence) |
| Source content status | LIST-ONLY |
| Source images available | Yes — magazine article image ("Our MD's China Import Article in NANAYAM VIKATAN Tamil Magazine on 04 February, 2024") |
| Notes | Also includes a **YouTube interview link**: `https://www.youtube.com/live/K28p2YTy2OI?feature=shared` — a real external media asset (video, not an image) that should be embedded/linked, not re-extracted as an image. |

## N. Certificate Programmes / Allied Services / Target Audience / Key Strengths

| Field | Value |
|---|---|
| Source page(s) | pp. 84–86 |
| Proposed route | `/riit#courses` (Certificate Programmes) and `/services#allied` (Allied Services) |
| Section/heading | "Certificate Programmes in International Trade Management", "Allied Services" |
| Source content status | COMPLETE |
| Source images available | None referenced |
| Notes | 21-topic course curriculum (separate from, and more extensive than, the 12-course RIIT list in D2 — some overlap, e.g. Customs Act 1962 appears in both). Allied Services split into "EXIM Company Setup," "EXIM Compliance & Consulting," "EXIM Value Added Services." Key Strengths list ("Error-free documentation," "Faster clearance turnaround," "Good liaison with PGAs") closely mirrors — almost verbatim — the current website's `WhyChooseUs.jsx` strengths copy, which is a rare case of the **existing site already matching source wording closely** (see audit doc, marked EXACT/PARTIAL). |

## O. Contact information

| Field | Value |
|---|---|
| Source page(s) | p. 87 |
| Proposed route | `/contact` (and footer, site-wide) |
| Section/heading | "Registered Office:" / "Contact:" |
| Source content status | COMPLETE |
| Source images available | None |
| Notes | **See [CURRENT_VS_SOURCE_CONTENT_AUDIT.md](CURRENT_VS_SOURCE_CONTENT_AUDIT.md) Section 7 — contact data has unresolved discrepancies against the current site and is marked `CLIENT_CONFIRMATION_REQUIRED`. Do not resolve without the client.** Source text verbatim: <br>`PORTMATRIX Logistics Pvt. Ltd.`<br>`Wavoo Mansion Annex - 105-B - I Floor,`<br>`No. 58/39, Rajaji Salai North Beach Road,`<br>`Chennai: 600 001, Tamil Nadu, India.`<br>`Contact: +91 935 935 2345 / 95857 90909`<br>`Email: md.portmatrix.in`<br>`Website: www.portmatrix.in` |

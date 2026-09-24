# PORTMATRIX — Final Image & UI Audit

## 1. Image Priority & Provenance Map

All images used across the PORTMATRIX website follow strict documentary priority and factual provenance rules.

| Category | Image Asset / Path | Context / Route | Priority Level | Provenance & Handling |
|---|---|---|---|---|
| **Primary Branding** | `branding/portmatrix-logo-primary.jpg` | Header, Footer, Favicon | Level 1 (Authoritative Logo) | Losslessly extracted from source PDF p.1. Used unchanged without redraw or font approximation. |
| **RIIT Sub-brand** | `branding/riit-logo.png` | `/riit`, `/riit/courses` | Level 1 (Authoritative Mark) | Losslessly extracted from source PDF p.16. |
| **MD Portrait** | `md/rahim-iyaz-portrait.png` | `/about`, `/about/rahim-iyaz` | Level 1 (Genuine Evidence) | Studio-quality portrait of Mr. Rahim Iyaz. |
| **Founder & Heritage** | `china/founder-hong-kong-delegation-1974.png` | `/china-import-sourcing` | Level 1 (Genuine Evidence) | 1974 Hong Kong delegation photo featuring Founder Mr. M.A. Izzadeen. |
| **China Sourcing Proof** | `china/rahim-iyaz-china-factory-2015.png` | `/china-import-sourcing` | Level 1 (Genuine Evidence) | MD factory inspection photo in China, 2015. |
| **Canton Fair Proof** | `china/azeez-usa-clients-canton-fair-2025.png`, `china/rahim-iyaz-riaz-malik-canton-fair-2014.png`, `china/canton-fair-indian-clients-group-2015.png` | `/china-import-sourcing/canton-fair` | Level 1 (Genuine Evidence) | Chronological Canton Fair documentation spanning 2014–2025. |
| **Cargo Inspection (Netherlands)** | `customs/hotel-supplies-inspection-netherlands-2024.png` | `/services/export-import-clearance` | Level 1 (Genuine Evidence) | Hotel supplies shipment inspection to Netherlands, 2024. |
| **Cargo Inspection (USA)** | `customs/export-shipment-inspection-usa-2025.png` | `/services/export-import-clearance` | Level 1 (Genuine Evidence) | Export shipment inspection to USA, 2025. |
| **Government & RIIT Events** | `riit/riit-inauguration-2023-11-14.png`, `events/alagappa-university-mou-2022-10-31.png`, `riit/deputy-dgft-reddy-session-2023-11-19.png`, `credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png`, `riit/agriculture-export-training-edii-tn-2025-08-12.png`, `riit/fieo-training-sakthivel-unnikrishnan-2022-12-20.png` | `/riit`, `/riit/training-events` | Level 1 (Genuine Evidence) | Institutional training and government collaboration milestones. |
| **Press & Media** | `media/nanayam-vikatan-article-2024-02-04.png` | `/media` | Level 1 (Genuine Evidence) | Nanayam Vikatan Tamil magazine feature, 4 Feb 2024. |
| **AI Decorative Hero** | `generated/global-trade-hero.jpg` | `/` (Homepage Hero) | Level 2 (AI-Decorative) | Generated global seaport terminal landscape. Labeled `ai-decorative`, never presented as PORTMATRIX evidence. |
| **Process Banners** | `export-handholding/phase1-6-infographic.png` | `/services/export-handholding/[phase]` | Level 4 (Source Process Infographics) | Approved Phase 1–6 infographics, rendered with `object-contain`. |

## 2. 17/17 Service Visual Treatment Status

| Service Destination | Visual Approach | Primary Visual Assets / Information Design |
|---|---|---|
| **MSME Export Handholding** | Phase-by-phase process cards & native step diagrams | Phase 1–6 approved source infographics (`object-contain`), 44 complete steps preserved across 6 phase pages |
| **Export Import Clearance** | Prominent genuine evidence & dual workflow diagrams | Netherlands 2024 & USA 2025 cargo inspection photos + Import & Export `ProcessFlow` workflows |
| **Freight Forwarding & Logistics** | Structured logistics segment matrix & workflow | Source-backed segment matrix (`ComparisonTable`), 8 core services, workflow & key documents |
| **MSME Insurance Package** | Category breakdown & side-by-side comparison tables | 14-product category breakdown, trade finance vs factoring/forfaiting `ComparisonTable`, no generic stock |
| **MOOWR** | Regulatory process flow & scheme comparison | Benefit breakdown, MOOWR vs SEZ vs EPCG `ComparisonTable`, `ProcessFlow` workflow |
| **Advance Authorisation** | Entitlement workflow & document list | Duty exemption workflow, obligation calculation example, document checklist |
| **EPCG Scheme** | Capital goods duty-free process & obligation example | Scheme features, 6-year export obligation worked example, `ProcessFlow` |
| **SEZ** | Zone classification & feature grid | Objective matrix, SEZ types table, Mahindra World City case illustration |
| **FTWZ** | Free trade warehousing workflow & benefits | FTWZ activity matrix, FTWZ vs SEZ comparison table, J Matadee case illustration |
| **EOU** | Activity matrix & approval workflow | Eligibility criteria, approval process steps, NFE calculation model |
| **AEO** | Multi-tier trust matrix & application process | T1/T2/T3/LO category comparison table, compliance requirements, application workflow |
| **NRI Baggage Clearance** | Reference-first duty allowance & rule tables | General free allowance, Jewellery, Transfer of Residence & Annexure-II `ComparisonTable`s, no stock airport photos |
| **Postal Export Aggregator** | Dak Ghar Niryat Kendra workflow & PGA list | India Post integration workflow, Customs clearance steps, PGA requirements |
| **E-Commerce Export** | Cross-border trade flow & platform integration | D2C & marketplace export process, CSB-V filing steps, benefit matrix |
| **Licensed Customs Broker** | Regulatory compliance & agent responsibilities | Customs Brokers Regulations 2018 duties, ICEGATE integration checklist |
| **China Import Sourcing** | Chronological heritage & factory inspection proof | 1974 Founder photo, 2015 factory visit, 2014–2025 Canton Fair gallery |
| **RIIT (Training & Consultancy)** | Institutional timeline & government training proof | Inauguration, Alagappa MoU, MSME DFO certificate scan, FIEO/DGFT training evidence |

## 3. Page Family Differentiation

1. **Homepage (`/`)**: Brand-level Hero (`ai-decorative`), trust indicators, core service navigation grid, operational proof summary, and institutional milestones.
2. **Institutional & Heritage (`/about`, `/about/rahim-iyaz`, `/china-import-sourcing`, `/riit`)**: Photo-led documentary layouts with large trust imagery, historical context, and timeline evidence.
3. **Core Services & Schemes (`/services/*`)**: Information-dense reference layouts driven by structured tables, native `ProcessFlow` diagrams, and specific compliance matrices.
4. **Interactive Event & Media Archives (`/riit/training-events`, `/media`)**: Chronological event logs with complete documentary captions and verified media links.

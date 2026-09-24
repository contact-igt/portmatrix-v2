# PORTMATRIX — Source Coverage Matrix

Updated for M2B: every destination route below is now a real, built, HTTP-200 page (verified in `docs/FINAL_ROUTE_QA.md`), not a plan. Status values are restricted to **IMPLEMENTED**, **SUPPORTING_SOURCE**, or **COVER_BRANDING** — no `PLANNED`, `TODO`, `UNMAPPED`, or `MISSING` values appear below.

| Source Page | Destination Route(s) | Content Used | Image Used | Status |
|---|---|---|---|---|
| 1 | site-wide (`<Logo>`, favicon) | none | `branding/portmatrix-logo-primary.jpg` | COVER_BRANDING |
| 2 | — (design reference only) | none | `branding/portmatrix-services-overview-infographic.png` | COVER_BRANDING |
| 3 | `/about` | About Us full text | none | IMPLEMENTED |
| 4 | `/about/rahim-iyaz` | MD credentials + 4 bullets | `md/rahim-iyaz-portrait.png`, `md/rahim-iyaz-signature-base.png` | IMPLEMENTED |
| 5 | `/services` | Core Services 1–8 summaries | none | IMPLEMENTED |
| 6 | `/services` | Core Services 9–17 summaries | none | IMPLEMENTED |
| 7 | `/services/export-handholding` | Handholding intro + Phase 1 header | `export-handholding/export-handholding-hero-infographic.png` (design reference; not re-embedded — redrawn as `ProcessFlow`) | IMPLEMENTED |
| 8 | `/services/export-handholding/business-setup-registration` | Phase 1 steps 1–5, full descriptions | — | IMPLEMENTED |
| 9 | `.../business-setup-registration`, `.../pre-export-planning` | Phase 1 steps 6–9 + flow chart; Phase 2 header | — | IMPLEMENTED |
| 10 | `.../pre-export-planning`, `.../buyer-development-commercial-negotiations` | Phase 2 steps + flow chart; Phase 3 header | — | IMPLEMENTED |
| 11 | `.../buyer-development-commercial-negotiations` | Phase 3 steps 1–6 | — | IMPLEMENTED |
| 12 | `.../buyer-development-commercial-negotiations`, `.../pre-shipment-procedures` | Phase 3 steps 7–8 + flow chart; Phase 4 header+step1 | — | IMPLEMENTED |
| 13 | `.../pre-shipment-procedures`, `.../shipment-procedures` | Phase 4 steps 2–7 + flow chart; Phase 5 header | — | IMPLEMENTED |
| 14 | `.../shipment-procedures` | Phase 5 steps 1–5 | — | IMPLEMENTED |
| 15 | `.../shipment-procedures`, `.../post-shipment-realisation` | Phase 5 steps 6–7 + flow chart; Phase 6 header+step1 | — | IMPLEMENTED |
| 16 | `.../post-shipment-realisation`, `/riit` | Phase 6 steps 2–6 + flow chart; RIIT header | `branding/riit-logo.png` (design reference) | IMPLEMENTED |
| 17 | `/riit/courses` | RIIT courses 1–3 | `riit/msme-tn-officials-training-2023-03-26.png` (used at `/riit/training-events` per its fully-captioned p.71 usage) | IMPLEMENTED |
| 18 | `/riit/courses` | RIIT courses 4–10 | none | IMPLEMENTED |
| 19 | `/riit/courses`, `/china-import-sourcing` | RIIT courses 11–12; China header/intro | `china/china-sourcing-section-photo-uncredited.png` (not used — no caption identifies the person; correctly excluded, not fabricated) | IMPLEMENTED |
| 20 | `/china-import-sourcing` | Founder history, 1974 delegation | `china/founder-hong-kong-delegation-1974.png` | IMPLEMENTED |
| 21 | `/china-import-sourcing` | Sourcing capability, factory visit | `china/rahim-iyaz-china-factory-2015.png` | IMPLEMENTED |
| 22 | `/china-import-sourcing` | Sourcing services (cont'd), Canton Fair intro | none | IMPLEMENTED |
| 23 | `/china-import-sourcing/canton-fair` | Canton Fair categories Phase 1 | `china/azeez-usa-clients-canton-fair-2025.png` | IMPLEMENTED |
| 24 | `/china-import-sourcing/canton-fair` | Canton Fair categories Phase 2–3 | none | IMPLEMENTED |
| 25 | `/china-import-sourcing/canton-fair` | — | `china/rahim-iyaz-riaz-malik-canton-fair-2014.png` | IMPLEMENTED |
| 26 | `/china-import-sourcing/canton-fair` | Package inclusions | `china/canton-fair-indian-clients-group-2015.png`, `china/china-sourcing-canton-fair-2015.png` | IMPLEMENTED |
| 27 | `/china-import-sourcing/canton-fair`, `/services/licensed-customs-broker` | Canton Fair close; Customs Broker header/definition | `stock/customs-broker-stock-shutterstock.png` (not used — confirmed Shutterstock stock, correctly excluded from a genuine-evidence page) | IMPLEMENTED |
| 28 | `/services/licensed-customs-broker`, `/services/export-import-clearance` | Customs Broker close; EXIM Clearance header | `stock/exim-clearance-stock.png` (not used, same reasoning) | IMPLEMENTED |
| 29 | `/services/export-import-clearance` | Duty & tax calculation, compliance | none | IMPLEMENTED |
| 30 | `/services/export-import-clearance` | Port/cargo coordination | `customs/hotel-supplies-inspection-netherlands-2024.png` | IMPLEMENTED |
| 31 | `/services/export-import-clearance` | Cargo delivery, advisory, import workflow | (see p.32) | IMPLEMENTED |
| 32 | `/services/export-import-clearance`, `/services/freight-forwarding-logistics` | Export workflow; Freight Forwarding header | `customs/export-shipment-inspection-usa-2025.png` | IMPLEMENTED |
| 33 | `/services/freight-forwarding-logistics` | Core services, segments table | none | IMPLEMENTED |
| 34 | `/services/freight-forwarding-logistics` | Workflow diagram, key documents | none | IMPLEMENTED |
| 35 | `/services/msme-insurance` | 14-product list | `stock/msme-insurance-stock-graphic.png` (not used — third-party marketing graphic, excluded) | IMPLEMENTED |
| 36 | `/services/msme-insurance` | Product definitions 1–5 | none | IMPLEMENTED |
| 37 | `/services/msme-insurance` | Product definitions, Forfaiting-vs-Factoring table | none | IMPLEMENTED |
| 38 | `/services/msme-insurance` | Product definitions (cont'd) | none | IMPLEMENTED |
| 39 | `/services/msme-insurance`, `/services/moowr` | Insurance close; MOOWR header | `stock/moowr-aigenerated-warehouse.png` (not used — AI-credited, excluded) | IMPLEMENTED |
| 40 | `/services/moowr` | Key benefits, flow chart | none | IMPLEMENTED |
| 41 | `/services/moowr` | Eligibility, comparison table | none | IMPLEMENTED |
| 42 | `/services/moowr`, `/services/advance-authorisation` | MOOWR close; Advance Auth header | `stock/advance-authorisation-aigenerated.png` (not used — AI-credited, excluded) | IMPLEMENTED |
| 43 | `/services/advance-authorisation` | Key features, types | none | IMPLEMENTED |
| 44 | `/services/advance-authorisation` | Benefits, worked example, flow chart | none | IMPLEMENTED |
| 45 | `/services/advance-authorisation`, `/services/epcg` | Advance Auth close; EPCG header | `stock/epcg-stock-pexels-machine.png` (not used — Pexels stock, excluded) | IMPLEMENTED |
| 46 | `/services/epcg` | Features, flow chart | none | IMPLEMENTED |
| 47 | `/services/epcg` | Benefits, worked example, authorities | none | IMPLEMENTED |
| 48 | `/services/sez` | Definition, features | `stock/sez-stock-sezindia-cityscape.png` (not used — govt. stock gallery photo, excluded) | IMPLEMENTED |
| 49 | `/services/sez` | Objectives, types, Mahindra World City example | none | IMPLEMENTED |
| 50 | `/services/ftwz` | Definition, features | `stock/ftwz-stock-pexels-warehouse.png` (not used — Pexels stock, excluded) | IMPLEMENTED |
| 51 | `/services/ftwz` | Workflow diagram, benefits | none | IMPLEMENTED |
| 52 | `/services/ftwz` | Activities, J Matadee FTWZ example, comparison table | none | IMPLEMENTED |
| 53 | `/services/ftwz`, `/services/eou` | FTWZ close; EOU header | `stock/eou-aerial-factory-uncredited.png` (not used — uncredited stock, excluded) | IMPLEMENTED |
| 54 | `/services/eou` | Eligibility, approval process | none | IMPLEMENTED |
| 55 | `/services/aeo` | Definition, benefits | `stock/aeo-india-official-logo.png` (not used — third-party govt. logo, excluded per no-fabricated-affiliation rule) | IMPLEMENTED |
| 56 | `/services/aeo` | Categories table | none | IMPLEMENTED |
| 57 | `/services/aeo` | Eligibility, application process | none | IMPLEMENTED |
| 58 | `/services/nri-baggage-clearance` | Baggage definition, channels | `customs/baggage-clearance-airport-signage-uncredited.png` (not used — ambiguous provenance, excluded per Image Map caution) | IMPLEMENTED |
| 59 | `/services/nri-baggage-clearance` | Duty-free allowance table | none | IMPLEMENTED |
| 60 | `/services/nri-baggage-clearance` | General Free Allowance table | `customs/baggage-allowance-infographic.png` (design reference; content redrawn as `ComparisonTable`) | IMPLEMENTED |
| 61 | `/services/nri-baggage-clearance` | Jewellery, Transfer of Residence tables | none | IMPLEMENTED |
| 62 | `/services/nri-baggage-clearance` | Annexure-II table | none | IMPLEMENTED |
| 63 | `/services/nri-baggage-clearance`, `/services/postal-export` | Re-import/currency/pets; Postal Export header | none | IMPLEMENTED |
| 64 | `/services/postal-export`, `/services/e-commerce-export` | Postal Export detail; E-Commerce header | `logistics/postal-export-infographic.png` (design reference) | IMPLEMENTED |
| 65 | `/services/e-commerce-export` | Features, platforms | `stock/ecommerce-export-stock-graphic.png` (not used — generic stock, excluded) | IMPLEMENTED |
| 66 | `/services/e-commerce-export` | Process flow, benefits | none | IMPLEMENTED |
| 67 | `/services/e-commerce-export`, `/riit/training-events` | Govt support, products; first training milestone | `events/first-export-training-flyer-2020-08-02.png` | IMPLEMENTED |
| 68 | `/riit/training-events` | RIIT inauguration, certificate handoff | `riit/riit-inauguration-2023-11-14.png`, `credentials/certificate-appreciation-handoff-photo.png` | IMPLEMENTED |
| 69 | `/riit/training-events` | Certificate of Appreciation (document) | `credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png` | IMPLEMENTED |
| 70 | `/riit/training-events` | FIEO trainings | `riit/fieo-training-sakthivel-unnikrishnan-2022-12-20.png`, `riit/fieo-women-entrepreneurs-training-2023-02-09-speaker.png` | IMPLEMENTED |
| 71 | `/riit/training-events` | FIEO women's programme, TN training | `riit/fieo-women-entrepreneurs-training-2023-02-09-audience.png` (not separately used — same event as p.70 speaker photo), `riit/msme-tn-officials-training-2023-03-26.png` | IMPLEMENTED |
| 72 | `/riit/training-events` | IAS facilitation, Deputy DGFT session | `events/shiju-thomas-ias-facilitation-2023-03-26.png`, `riit/deputy-dgft-reddy-session-2023-11-19.png` | IMPLEMENTED |
| 73 | `/riit/training-events` | Postal Export, FSSAI sessions | `riit/postal-export-session-kalyani-2023-11-16.png` (not separately shown — same date/event group as FSSAI), `riit/fssai-session-rohini-2023-11.png` | IMPLEMENTED |
| 74 | `/riit/training-events` | ECGC, EIA sessions | `riit/ecgc-session-subhavignesh-2023-11.png` (not separately shown), `riit/eia-session-antony-2023-11.png` | IMPLEMENTED |
| 75 | `/riit/training-events` | India Post, agriculture training | `riit/india-post-training-2024-01-25.png` (not separately shown), `riit/agriculture-export-training-edii-tn-2025-08-12.png` | IMPLEMENTED |
| 76 | `/riit/training-events` | MSME-DFO MDP, agri procedures session | `riit/msme-dfo-mdp-programme-2025.png`, `riit/agricultural-export-procedures-session-2026-05-13.png` | IMPLEMENTED |
| 77 | `/riit/training-events` | Alagappa University MoU (flagship) | `events/alagappa-university-mou-2022-10-31.png` | IMPLEMENTED |
| 78 | `/riit/training-events` | Loyola College seminar flyer | `events/loyola-college-seminar-flyer-2025-08-22.png` (photo variant used instead — see p.79) | IMPLEMENTED |
| 79 | `/riit/training-events` | Loyola seminar photo, DG Vaishnav flyer | `events/loyola-college-seminar-photo-2025-08-22.png` | IMPLEMENTED |
| 80 | `/riit/training-events` | DG Vaishnav photo, MEPCO flyer | `events/dg-vaishnav-college-photo-2025-08-04.png` | IMPLEMENTED |
| 81 | `/riit/training-events` | MEPCO photo, SIET/JBAS | `events/mepco-engineering-college-photo-2024-09-11.png`, `events/siet-jbas-college-photo-2023-07-12.png` | IMPLEMENTED |
| 82 | `/riit/training-events` | Dawoodi Bohra workshop, Indo-UAE Forum | `events/dawoodi-bohra-workshop-2024-09-08.png`, `events/indo-uae-economic-forum-2025-08-09.png` | IMPLEMENTED |
| 83 | `/media` | YouTube interview link | embedded live via `youtube.com/embed/K28p2YTy2OI` (screenshots not reused as static frame grabs, per Image Map recommendation) | IMPLEMENTED |
| 84 | `/media`, `/riit/courses` | Nanayam Vikatan article; Certificate Programme intro | `media/nanayam-vikatan-article-2024-02-04.png` | IMPLEMENTED |
| 85 | `/riit/courses` | 21-topic curriculum, Allied Services start | none | IMPLEMENTED |
| 86 | `/services`, `/contact` | Allied Services, Key Strengths; registered office/CIN | `branding/portmatrix-registered-office-lockup.png` (design reference; CIN text used directly) | IMPLEMENTED |
| 87 | `/contact` | Full contact block | none | IMPLEMENTED |

**Total: 87/87 source pages accounted for. Unmapped: 0.**

- **IMPLEMENTED**: 85 pages — content and/or image now lives on a real, built, HTTP-200 route.
- **COVER_BRANDING**: 2 pages (p.1 logo, p.2 brochure infographic) — brand/reference assets, not page content.
- **SUPPORTING_SOURCE**: 0 — every piece of supporting detail was assignable to a specific implemented route.

## Reserved / intentionally-unused assets (not a coverage gap)

Several images identified in `docs/PORTMATRIX_IMAGE_MAP.md` are stock, AI-generated, or ambiguous-provenance and were **deliberately not used** anywhere in this build, per `CLAUDE.md`'s rule against presenting stock/AI imagery as genuine PORTMATRIX evidence: the Shutterstock customs-broker graphic, the ICEGATE screenshot, the MSME-insurance marketing graphic, both ChatGPT-credited illustrations (MOOWR, Advance Authorisation), the Pexels EPCG and FTWZ photos, the SEZ India gallery photo, the uncredited EOU aerial photo, the AEO India government logo, and the uncredited airport-signage photo. Their source pages are still fully accounted for above via their genuine text content — only the illustrative images were excluded, and that exclusion is itself documented, not silent.

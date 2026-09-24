# PORTMATRIX — SEO / AEO / GEO Architecture

Page-by-page plan for all 32 routes finalized from [`docs/FULL_SITE_SOURCE_MAP.md`](FULL_SITE_SOURCE_MAP.md). No page here duplicates another's primary intent. No keyword-stuffing, no thin/near-duplicate pages, no fabricated statistics or reviews.

**Shared defaults** (apply to every page unless overridden below):
- **Canonical**: self-referencing absolute URL via `metadataBase` (`https://www.portmatrix.in`, matching the verified source contact URL — not used for any live deployment in this module).
- **OG image default**: the primary logo card (`/images/source/branding/portmatrix-logo-primary.jpg`) until a page-specific hero photo is confirmed appropriate below.
- **OG type**: `website`.
- **Twitter card**: `summary_large_image`, inherits page OG fields (no separate Twitter-specific copy — the source has no Twitter/X presence to reference).
- **Structured data never included anywhere**: `aggregateRating`, `reviewCount`, `priceRange`, `openingHours`, `geo` coordinates, `founder` schema field, `sameAs` social profile URLs, invented `email`/`fax`. None of these are source-verified.

---

## Homepage

| Field | Value |
|---|---|
| URL | `/` |
| Primary intent | Entry point — who PORTMATRIX is, what it does, immediate credibility, path to every major section |
| Page title | PORTMATRIX — Customs Broking & Export Handholding *(unchanged from M1)* |
| Meta description | *(unchanged from M1 — see `app/layout.jsx`)* |
| H1 | "Customs Broking and End-to-End Export Handholding" *(Hero, unchanged)* |
| Secondary topics | 17 services (index), Export Handholding, China sourcing, RIIT, operational proof, contact |
| Internal links in | Every page via header/footer |
| Internal links out | `/services`, `/services/export-handholding`, `/china-import-sourcing`, `/riit`, `/about`, `/contact` |
| Breadcrumb | None (root) |
| Canonical | `/` |
| OG title | PORTMATRIX — Customs Broking & Export Handholding |
| OG description | *(unchanged from M1)* |
| OG image | Hero photo (`customs/hotel-supplies-inspection-netherlands-2024.png`) |
| Structured data | `Organization`, `WebSite` |
| Source PDF page(s) | pp. 1, 3, 4–7 (summary level) |

## About

| Field | Value |
|---|---|
| URL | `/about` |
| Primary intent | Company story, positioning, credibility overview |
| Page title | About PORTMATRIX — Customs Broking Since 1996 |
| Meta description | PORTMATRIX is a government-licensed customs broker and export handholding company. Learn about our history, our MD Rahim Iyaz, and our institutional credibility. |
| H1 | About PORTMATRIX |
| Secondary topics | Mission tagline, RIIT introduction, link to MD profile, link to credibility gallery |
| Internal links in | Homepage nav/footer, `/contact`, `/riit` |
| Internal links out | `/about/rahim-iyaz`, `/riit`, `/riit/training-events`, `/china-import-sourcing` (founder history), `/contact` |
| Breadcrumb | Home / About |
| Canonical | `/about` |
| OG title | About PORTMATRIX |
| OG description | Government-licensed customs broker and export handholding company — our story, our leadership, our credibility. |
| OG image | MD portrait (`md/rahim-iyaz-portrait.png`) |
| Structured data | `Organization`, `BreadcrumbList` |
| Source PDF page(s) | p. 3 |

## MD Profile

| Field | Value |
|---|---|
| URL | `/about/rahim-iyaz` |
| Primary intent | Leadership credibility — who leads PORTMATRIX and why that's trustworthy |
| Page title | Rahim Iyaz — Managing Director, PORTMATRIX |
| Meta description | Mr. Rahim Iyaz is a Government Licensed Customs Broker with experience since 1996 across 9 international markets, and an authorised export-training resource person. |
| H1 | Rahim Iyaz |
| Secondary topics | Credentials, career history, countries worked, training-partner role, link to credibility gallery |
| Internal links in | `/about`, homepage About section |
| Internal links out | `/riit/training-events`, `/riit`, `/contact` |
| Breadcrumb | Home / About / Rahim Iyaz |
| Canonical | `/about/rahim-iyaz` |
| OG title | Rahim Iyaz — Managing Director, PORTMATRIX |
| OG description | Government Licensed Customs Broker, vintage experience since 1996, authorised export-training resource person for Govt. of India–MSME, EDII-TN, TNAPEx, FIEO, Alagappa University. |
| OG image | `md/rahim-iyaz-portrait.png` |
| Structured data | `Person` (name, jobTitle, worksFor→Organization; no invented `sameAs`/social fields) |
| Source PDF page(s) | pp. 3–4 |

## Services (index)

| Field | Value |
|---|---|
| URL | `/services` |
| Primary intent | Directory/hub for all 17 core services |
| Page title | Services — PORTMATRIX Customs Broking & Trade Compliance |
| Meta description | 17 core services from customs broking and export handholding to DGFT schemes (MOOWR, EPCG, SEZ, FTWZ, AEO), insurance, logistics and e-commerce export. |
| H1 | Our Services |
| Secondary topics | Links to all 14 dedicated scheme pages + Export Handholding + China Sourcing + RIIT, Allied Services block |
| Internal links in | Homepage, every service page (breadcrumb up), footer |
| Internal links out | All 14 scheme routes, `/services/export-handholding`, `/china-import-sourcing` |
| Breadcrumb | Home / Services |
| Canonical | `/services` |
| OG title | Services — PORTMATRIX |
| OG description | One licensed partner for clearance, sourcing, warehousing, insurance and trade consultancy. |
| OG image | default |
| Structured data | `ItemList` (of `Service` items), `BreadcrumbList` |
| Source PDF page(s) | pp. 5–6, 86 (Allied Services) |

## Export Handholding (hub)

| Field | Value |
|---|---|
| URL | `/services/export-handholding` |
| Primary intent | The company's stated "core strength" — the flagship 6-phase process |
| Page title | Export Handholding — 6-Phase Process | PORTMATRIX |
| Meta description | End-to-end MSME export handholding across 6 phases: business setup, pre-export planning, buyer development, pre-shipment, shipment, and post-shipment realisation. |
| H1 | MSME Export Handholding |
| Secondary topics | Process overview, links to all 6 phase pages |
| Internal links in | `/services`, homepage, `/about` | 
| Internal links out | All 6 phase routes below, `/services/export-import-clearance`, `/services/freight-forwarding-logistics` |
| Breadcrumb | Home / Services / Export Handholding |
| Canonical | `/services/export-handholding` |
| OG title | Export Handholding — PORTMATRIX |
| OG description | Complete support from export registration to post-shipment payment realisation. |
| OG image | default |
| Structured data | `Service`, `BreadcrumbList` |
| Source PDF page(s) | p. 7 |

### The six phase pages

Each phase page shares the same field pattern — listed compactly:

| Route | Page Title | H1 | Meta Description | Internal Links Out | Structured Data | Source Page(s) |
|---|---|---|---|---|---|---|
| `/services/export-handholding/business-setup-registration` | Phase 1: Business Setup & Registration \| PORTMATRIX | Phase 1 — Business Setup and Registration | 9-step business setup: PAN, digital signature, company formation, GSTIN, AD bank account, IEC, RCMC, ICEGATE, PGA registration. | Phase 2 (next), Export Handholding hub | `HowTo` (steps map to source sub-steps only), `BreadcrumbList` | pp. 7–9 |
| `.../pre-export-planning` | Phase 2: Pre Export Planning \| PORTMATRIX | Phase 2 — Pre Export Planning | Product/HS code selection, export policy check, market intelligence, FTA/CEPA, finding buyers, promotion schemes, EPC/EDA. | Phase 1 (prev), Phase 3 (next) | `HowTo`, `BreadcrumbList` | pp. 9–10 |
| `.../buyer-development-commercial-negotiations` | Phase 3: Buyer Development & Negotiations \| PORTMATRIX | Phase 3 — Buyer Development and Commercial Negotiations | Country regulations, payment methods, INCOTERMS, quotation, negotiation, credit checks, ECGC insurance, finance arrangement. | Phase 2 (prev), Phase 4 (next), `/services/msme-insurance` | `HowTo`, `BreadcrumbList` | pp. 10–12 |
| `.../pre-shipment-procedures` | Phase 4: Pre Shipment Procedures \| PORTMATRIX | Phase 4 — Pre Shipment Procedures | SPS/TBT compliance, inspection, manufacture/procurement, labelling, forex mitigation, logistics, marine insurance. | Phase 3 (prev), Phase 5 (next), `/services/msme-insurance` | `HowTo`, `BreadcrumbList` | pp. 12–13 |
| `.../shipment-procedures` | Phase 5: Shipment Procedures \| PORTMATRIX | Phase 5 — Shipment Procedures | Export documentation, shipping bill filing, duty drawback, customs clearance, LEO, loading, final shipping bill. | Phase 4 (prev), Phase 6 (next), `/services/export-import-clearance` | `HowTo`, `BreadcrumbList` | pp. 14–15 |
| `.../post-shipment-realisation` | Phase 6: Post Shipment & Realisation \| PORTMATRIX | Phase 6 — Post Shipment and Realisation Procedures | Bank document submission, follow-up, realisation, e-BRC, compliance reporting, business growth. | Phase 5 (prev), Export Handholding hub | `HowTo`, `BreadcrumbList` | pp. 15–16 |

All six: canonical is the route itself; OG image default (no dedicated photo exists for any phase — only text-baked infographics, which are not reused as OG images since their text would be illegible at social-preview size); internal links in from the hub page and from each adjacent phase.

## China Import Sourcing

| Field | Value |
|---|---|
| URL | `/china-import-sourcing` |
| Primary intent | 50+ year China sourcing heritage and capability |
| Page title | China Import Sourcing Since 1974 | PORTMATRIX |
| Meta description | End-to-end China import sourcing — factory inspection, negotiation, quality control and delivery, with a trade link dating back to 1974. |
| H1 | China Import Sourcing |
| Secondary topics | Founder history, sourcing capability, cost-reduction figure, link to Canton Fair |
| Internal links in | Homepage, `/about`, `/services` | 
| Internal links out | `/china-import-sourcing/canton-fair`, `/services/export-import-clearance`, `/services/freight-forwarding-logistics`, `/contact` |
| Breadcrumb | Home / China Import Sourcing |
| Canonical | `/china-import-sourcing` |
| OG title | China Import Sourcing Since 1974 — PORTMATRIX |
| OG description | Our late Founder began Hong Kong trading in 1974 — five decades of sourcing experience in China. |
| OG image | `china/founder-hong-kong-delegation-1974.png` |
| Structured data | `Service`, `BreadcrumbList` |
| Source PDF page(s) | pp. 19–22 |

## Canton Fair

| Field | Value |
|---|---|
| URL | `/china-import-sourcing/canton-fair` |
| Primary intent | Canton Fair-specific sourcing/travel services and category breadth |
| Page title | Canton Fair Sourcing Services | PORTMATRIX |
| Meta description | Canton Fair trade-fair packages: visa and travel support, factory and market visits, category breakdown across Phases 1–3, and 11 years of documented Canton Fair presence. |
| H1 | Canton Fair |
| Secondary topics | Category breakdown (Phases 1–3), group-tour package inclusions, dated evidence gallery (2014/2015/2025) |
| Internal links in | `/china-import-sourcing` |
| Internal links out | `/china-import-sourcing`, `/contact` |
| Breadcrumb | Home / China Import Sourcing / Canton Fair |
| Canonical | `/china-import-sourcing/canton-fair` |
| OG title | Canton Fair Sourcing Services — PORTMATRIX |
| OG description | China's largest bi-annual trade fair — full-service packages from visa to factory visits. |
| OG image | `china/azeez-usa-clients-canton-fair-2025.png` |
| Structured data | `Service`, `BreadcrumbList` |
| Source PDF page(s) | pp. 22–26 |

## RIIT (hub)

| Field | Value |
|---|---|
| URL | `/riit` |
| Primary intent | Institutional/training arm overview |
| Page title | RIIT — Regional Institute of International Trade | PORTMATRIX |
| Meta description | RIIT is PORTMATRIX's allied training, research and consultancy institute — an export training partner for the Govt. of India–MSME, EDII-TN, TNAPEx, India Post, FIEO and Alagappa University. |
| H1 | Regional Institute of International Trade (RIIT) |
| Secondary topics | Training-partner statement, links to courses and events |
| Internal links in | Homepage, `/about`, `/services` |
| Internal links out | `/riit/courses`, `/riit/training-events`, `/media` |
| Breadcrumb | Home / RIIT |
| Canonical | `/riit` |
| OG title | RIIT — PORTMATRIX |
| OG description | Academic Centre of Excellence in International Trade — training, research and consultancy. |
| OG image | `riit/riit-inauguration-2023-11-14.png` |
| Structured data | `EducationalOrganization` (only fields the source supports: name, description, parentOrganization — no invented address/geo distinct from PORTMATRIX's own), `BreadcrumbList` |
| Source PDF page(s) | pp. 16–19 |

## RIIT Courses

| Field | Value |
|---|---|
| URL | `/riit/courses` |
| Primary intent | Full training curriculum — both the 12-course RIIT partner list and the 21-topic Certificate Programme |
| Page title | Courses & Certificate Programmes | RIIT — PORTMATRIX |
| Meta description | RIIT training courses covering Customs Act, Customs Tariff Act, FTP 2023, IGST, FEMA, IPR, and a 21-topic Certificate Programme in International Trade Management. |
| H1 | Courses & Certificate Programmes |
| Secondary topics | 12-course list, 21-topic curriculum (labeled as a distinct programme), target audience |
| Internal links in | `/riit`, `/services/export-handholding` (scheme cross-links) |
| Internal links out | `/riit`, relevant scheme pages named in the curriculum (`/services/moowr`, `/services/advance-authorisation`, etc.) |
| Breadcrumb | Home / RIIT / Courses |
| Canonical | `/riit/courses` |
| OG title | Courses & Certificate Programmes — RIIT |
| OG description | Structured International Trade training for G-Card exam takers, MSME entrepreneurs, corporates and graduates. |
| OG image | default |
| Structured data | `Course` list (`ItemList` of `Course`, name/description only — no invented price/duration/rating), `BreadcrumbList` |
| Source PDF page(s) | pp. 17–19, 84–85 |

## RIIT Training Events

| Field | Value |
|---|---|
| URL | `/riit/training-events` |
| Primary intent | The single richest evidence block in the source — a chronological, fully-captioned gallery, not 20 thin pages |
| Page title | Training Events & Institutional Credibility | RIIT — PORTMATRIX |
| Meta description | RIIT training events 2020–2026: government officials, FIEO, FSSAI, ECGC, Deputy DGFT sessions, the Alagappa University MoU, and college/community outreach programmes. |
| H1 | Training Events |
| Secondary topics | ~20 dated entries in chronological order, each with exact names/dates/institutions from the source |
| Internal links in | `/riit`, `/about`, `/about/rahim-iyaz` |
| Internal links out | `/riit`, `/contact` |
| Breadcrumb | Home / RIIT / Training Events |
| Canonical | `/riit/training-events` |
| OG title | Training Events — RIIT |
| OG description | Government officials, national export bodies and academic institutions who have trained with RIIT since 2020. |
| OG image | `events/alagappa-university-mou-2022-10-31.png` (the manifest's single highest-rated institutional asset) |
| Structured data | `BreadcrumbList` only — individual `Event` schema was considered and rejected: none of these have a future/bookable occurrence (they are past, one-off, undated-venue records), so `Event` schema would not match Google's guidance for the type. |
| Source PDF page(s) | pp. 67–82 |

## Media

| Field | Value |
|---|---|
| URL | `/media` |
| Primary intent | Genuine third-party press/media coverage |
| Page title | Media & Press Coverage | PORTMATRIX |
| Meta description | PORTMATRIX in the media — a television interview and Nanayam Vikatan's coverage of the MD's China import expertise. |
| H1 | Media & Press |
| Secondary topics | YouTube interview embed/link, Nanayam Vikatan magazine feature |
| Internal links in | Homepage, `/riit`, `/about` |
| Internal links out | `/about/rahim-iyaz`, `/china-import-sourcing` |
| Breadcrumb | Home / Media |
| Canonical | `/media` |
| OG title | Media & Press — PORTMATRIX |
| OG description | Television and print coverage of PORTMATRIX's Managing Director. |
| OG image | `media/nanayam-vikatan-article-2024-02-04.png` |
| Structured data | `VideoObject` (for the YouTube interview — only fields the source supports: name, embedUrl; no invented `duration`/`uploadDate` beyond what YouTube's own oEmbed can confirm at implementation time), `BreadcrumbList` |
| Source PDF page(s) | pp. 83–84 |

## 14 Core Service Pages

Each shares the same field pattern:

| Route | Page Title | H1 | Meta Description | Structured Data | Source Page(s) |
|---|---|---|---|---|---|
| `/services/licensed-customs-broker` | Licensed Customs Broker | PORTMATRIX | Licensed Customs Broker | Government-authorised clearing agent under the Customs Brokers Regulations, 2018 — Pan-India network. | `Service`, `BreadcrumbList` | pp. 27–28 |
| `/services/export-import-clearance` | Export-Import Clearance \| PORTMATRIX | Export-Import Clearance | Documentation, duty & tax calculation, port coordination and full import/export workflows with compulsory-compliance-requirement discipline. | `Service`, `BreadcrumbList` | pp. 28–32 |
| `/services/freight-forwarding-logistics` | Freight Forwarding & Logistics \| PORTMATRIX | Freight Forwarding & Logistics | Multimodal freight forwarding — 8 core services, 8 logistics business segments, full workflow. | `Service`, `BreadcrumbList` | pp. 32–34 |
| `/services/msme-insurance` | MSME Insurance Package \| PORTMATRIX | MSME Insurance Package | 14 trade-insurance products from export credit to keyman insurance, compared side by side where the source provides a table. | `Service`, `BreadcrumbList` | pp. 35–38 |
| `/services/moowr` | MOOWR Warehousing \| PORTMATRIX | MOOWR | Manufacture and Other Operations in Warehouse Regulations — import without upfront duty, benefits, eligibility, and a MOOWR-vs-SEZ-vs-EPCG comparison. | `Service`, `BreadcrumbList` | pp. 39–42 |
| `/services/advance-authorisation` | Advance Authorisation Scheme \| PORTMATRIX | Advance Authorisation Scheme | DGFT duty-free import scheme for export production, with a worked example. | `Service`, `BreadcrumbList` | pp. 42–45 |
| `/services/epcg` | EPCG Scheme \| PORTMATRIX | Export Promotion Capital Goods (EPCG) Scheme | Zero-duty capital goods import to boost export capability, with a worked ₹45-lakh export-obligation example. | `Service`, `BreadcrumbList` | pp. 45–47 |
| `/services/sez` | SEZ \| PORTMATRIX | Special Economic Zone (SEZ) | Duty-free enclave registration support, featuring the Mahindra World City, Tamil Nadu example. | `Service`, `BreadcrumbList` | pp. 48–49 |
| `/services/ftwz` | FTWZ \| PORTMATRIX | Free Trade Warehousing Zone (FTWZ) | Duty-free warehousing and trading hub registration, featuring the J Matadee FTWZ, Sriperumbudur example. | `Service`, `BreadcrumbList` | pp. 50–53 |
| `/services/eou` | EOU \| PORTMATRIX | Export Oriented Units (EOU) | Registration support for units producing primarily for export, with the 6-step approval process. | `Service`, `BreadcrumbList` | pp. 53–54 |
| `/services/aeo` | AEO \| PORTMATRIX | Authorised Economic Operator (AEO) | Trusted-trader certification support across all 4 AEO categories (T1/T2/T3/LO). | `Service`, `BreadcrumbList` | pp. 55–57 |
| `/services/nri-baggage-clearance` | NRI Baggage Clearance \| PORTMATRIX | NRI Baggage Clearance | Duty-free baggage allowance advisory — general allowance, jewellery, transfer of residence, currency and pet-import rules. | `Service`, `BreadcrumbList` | pp. 58–63 |
| `/services/postal-export` | Postal Export Aggregator \| PORTMATRIX | Postal Export Aggregator | Export through Dak Ghar Niryat Kendras under FTP 2023, via India Post. | `Service`, `BreadcrumbList` | pp. 63–64 |
| `/services/e-commerce-export` | E-Commerce Export \| PORTMATRIX | E-Commerce Export | Cross-border e-commerce export via Amazon Global Selling, eBay, Etsy, Alibaba and Flipkart. | `Service`, `BreadcrumbList` | pp. 64–67 |

All 14: canonical is the route itself; internal links in from `/services` and, where a relationship is named in §13 below, from related scheme pages; internal links out follow the relationship graph; breadcrumb `Home / Services / [Service Name]`; OG image is the page's own stock/AI-credited illustration **only when clearly labeled "illustrative" in the surrounding UI** (never presented as genuine evidence) — where the source gives no image at all (MSME Insurance's own definitions, EOU, Postal Export, E-Commerce), the OG image falls back to the shared default.

## Contact

| Field | Value |
|---|---|
| URL | `/contact` |
| Primary intent | Direct contact + legal business identity |
| Page title | Contact PORTMATRIX |
| Meta description | Contact PORTMATRIX Logistics Pvt. Ltd. — registered office in Chennai, Tamil Nadu. Government Licensed Customs Broker. |
| H1 | Contact Us |
| Secondary topics | Registered office address, phone, website, CIN |
| Internal links in | Every page (footer + header CTA) |
| Internal links out | None required (terminal page) |
| Breadcrumb | Home / Contact |
| Canonical | `/contact` |
| OG title | Contact PORTMATRIX |
| OG description | Registered office, Chennai, Tamil Nadu — reach us by phone or visit in person. |
| OG image | default |
| Structured data | `Organization` with `ContactPoint` (telephone only — the verified phone numbers) and `PostalAddress` (verified address lines) — **no** `email` (the source string `md.portmatrix.in` is not a valid email address and is not machine-readable as one; kept as plain, non-clickable text in the visible page, and excluded from `ContactPoint.email` entirely rather than fabricating an `@`) |
| Source PDF page(s) | p. 87, p. 86 (CIN) |

---

## Internal linking graph (§13)

- **Export Handholding** → Export-Import Clearance, Freight Forwarding, MSME Insurance (Phase 3/4), Advance Authorisation/EPCG (named in RIIT curriculum cross-links)
- **China Import Sourcing** → Export-Import Clearance, Freight Forwarding, Canton Fair
- **MOOWR ↔ EPCG ↔ Advance Authorisation ↔ SEZ ↔ FTWZ ↔ EOU** — mutual cross-links (all 6 are compared against each other in the source's own MOOWR-vs-SEZ-vs-EPCG and SEZ-vs-FTWZ tables)
- **Postal Export ↔ E-Commerce Export** — mutual cross-link (both are lightweight, low-friction export channels named together in the source)
- **RIIT Courses** → the scheme pages its curriculum names (MOOWR, Advance Authorisation, EPCG, RoDTEP/Duty Drawback context, Postal/E-Commerce Export)
- No link is added that isn't grounded in an explicit source relationship (e.g., no forced link from "AEO" to "NRI Baggage Clearance" — they share no source-stated relationship).

## Navigation architecture (§14)

Primary header nav (unchanged from M1's 6 items): Services, Export Handholding, China Sourcing, RIIT, About, Contact. Services becomes a grouped dropdown/mega-menu once its sub-pages exist — grouped as: **Export & Clearance** (Licensed Customs Broker, Export-Import Clearance, Freight Forwarding), **DGFT & Customs Schemes** (MOOWR, Advance Authorisation, EPCG, SEZ, FTWZ, EOU, AEO), **Individual & Digital** (NRI Baggage Clearance, Postal Export, E-Commerce Export), **Insurance** (MSME Insurance). RIIT nav item gains a lightweight dropdown (Courses, Training Events) once those pages exist. Footer carries the broader sitemap (all 32 routes). Mobile nav stays a single scrollable drawer list, grouped under the same four service headings rather than one flat 17-link list.

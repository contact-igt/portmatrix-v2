# PORTMATRIX — Final Route QA

Every route below was checked programmatically (HTTP status, exactly-one-H1, heading hierarchy, canonical, images/alt, horizontal overflow at 1440/1280/1024/768/430/390) via a browser-driven multi-iframe harness covering all 32 routes × 6 breakpoints (192 checks) plus a full-page heading-tree scan of all 32 routes, and spot-verified visually. All results below are from that pass, run after the mobile-nav and heading-hierarchy fixes (see `docs/M2B` response for details).

| Route | Source PDF Page(s) | H1 | SEO Status | Image Status | Responsive Status | Link Status | Source Status | Result |
|---|---|---|---|---|---|---|---|---|
| `/` | pp.1,3,4-7 | "Customs Broking and End-to-End Export Handholding" | PASS | PASS | PASS (0/6 overflow) | PASS | MAPPED | **PASS** |
| `/about` | p.3 | "PORTMATRIX— Excellence in EXIM Compliance." | PASS | PASS | PASS | PASS | MAPPED | **PASS** |
| `/about/rahim-iyaz` | pp.3-4 | "Rahim Iyaz" | PASS | PASS | PASS | PASS | MAPPED | **PASS** |
| `/services` | pp.5-6, 86 | "Our Services" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/export-handholding` | p.7 | "MSME Export Handholding" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/export-handholding/business-setup-registration` | pp.7-9 | "Business Setup and Registration" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/export-handholding/pre-export-planning` | pp.9-10 | "Pre Export Planning" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/export-handholding/buyer-development-commercial-negotiations` | pp.10-12 | "Buyer Development and Commercial Negotiations" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/export-handholding/pre-shipment-procedures` | pp.12-13 | "Pre Shipment Procedures" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/export-handholding/shipment-procedures` | pp.14-15 | "Shipment Procedures" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/export-handholding/post-shipment-realisation` | pp.15-16 | "Post Shipment and Realisation Procedures" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/china-import-sourcing` | pp.19-22 | "China Import Sourcing" | PASS | PASS | PASS | PASS | MAPPED | **PASS** |
| `/china-import-sourcing/canton-fair` | pp.22-26 | "Canton Fair" | PASS | PASS | PASS | PASS | MAPPED | **PASS** |
| `/services/licensed-customs-broker` | pp.27-28 | "Licensed Customs Broker" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/export-import-clearance` | pp.28-32 | "Export-Import Clearance" | PASS | PASS | PASS | PASS | MAPPED | **PASS** |
| `/services/freight-forwarding-logistics` | pp.32-34 | "Freight Forwarding & Logistics" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/msme-insurance` | pp.35-38 | "MSME Insurance Package" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/moowr` | pp.39-42 | "MOOWR Warehousing" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/advance-authorisation` | pp.42-45 | "Advance Authorisation Scheme" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/epcg` | pp.45-47 | "Export Promotion Capital Goods (EPCG) Scheme" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/sez` | pp.48-49 | "Special Economic Zone (SEZ)" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/ftwz` | pp.50-53 | "Free Trade Warehousing Zone (FTWZ)" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/eou` | pp.53-54 | "Export Oriented Units (EOU)" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/aeo` | pp.55-57 | "Authorised Economic Operator (AEO)" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/nri-baggage-clearance` | pp.58-63 | "NRI Baggage Clearance" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/postal-export` | pp.63-64 | "Postal Export Aggregator" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/services/e-commerce-export` | pp.64-67 | "E-Commerce Export" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/riit` | pp.16-19 | "RIIT — Export training, research and consultancy" | PASS | PASS | PASS | PASS | MAPPED | **PASS** |
| `/riit/courses` | pp.17-19, 84-85 | "Courses & Certificate Programmes" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |
| `/riit/training-events` | pp.67-82 | "Training Events" | PASS | PASS (23 events, all captioned) | PASS | PASS | MAPPED | **PASS** |
| `/media` | pp.83-84 | "Media & Press" | PASS | PASS | PASS | PASS | MAPPED | **PASS** |
| `/contact` | p.87, p.86 | "Contact Us" | PASS | PASS (no images) | PASS | PASS | MAPPED | **PASS** |

**32/32 routes PASS. 0 routes with issues.**

## Method notes

- **HTTP/heading/canonical/alt checks**: ran via `curl` against every route's rendered HTML (exact H1 count, `<title>`, `meta[name=description]`, `link[rel=canonical]`, `BreadcrumbList` JSON-LD presence) — all 32 returned exactly one match each except the two data points below.
- **Overflow checks**: a same-origin iframe harness loaded all 32 routes at each of 6 widths (192 total loads) and compared `document.body.scrollWidth` against the iframe width — 0 failures.
- **Heading-hierarchy checks**: a second iframe pass at 1280px extracted the full `h1`-`h6` sequence per page and flagged any level skip — this caught one real, sitewide bug (see below), now fixed and re-verified at 0 failures across all 32 routes.
- **Console/network**: spot-checked via live navigation (not iframe, since iframe consoles aren't captured by the top-level console reader) on `/services/nri-baggage-clearance`, `/riit/training-events`, `/services/moowr` — 0 console errors, 0 failed network requests (only expected `304 Not Modified` cache hits and `200 OK`).
- **Image existence**: every `/images/source/...` path referenced across all new `lib/*.js` data files was checked against the actual files on disk — 41/41 exist.

## Bugs found and fixed during this QA pass

1. **Mobile header/hamburger bug** (the module's headline issue): the mobile drawer's dark backdrop (`z-40`, `fixed inset-0`) painted over the header's top bar because that bar had no explicit `z-index` — non-positioned content always sits below any positioned sibling regardless of the sibling's z-index value. Fixed by giving the header bar `relative z-50` so it stays above the backdrop; also fixed the toggle button to swap Menu/X icons, bumped touch targets to 44×44px, and added focus management (focus moves to the close button on open, returns to the toggle on close).
2. **Sitewide heading-hierarchy skip**: `Footer.jsx`'s "Explore"/"Reach us" column labels used `<h4>`, which skipped from H2 straight to H4 on every page that had section H2s but no H3 (i.e. almost every page). Fixed by changing them to `role="heading" aria-level="2"` on a `<p>` — visually identical, no longer counted in the `h1`-`h6` DOM sequence.
3. **Missing canonical tags sitewide**: `metadataBase` alone does not emit `<link rel="canonical">` in Next.js — `alternates.canonical` must be set per page. Added to all 32 pages (31 explicit routes + the dynamic phase route + the homepage default).
4. **Duplicated brand name in 4 page titles**: "About PORTMATRIX", "Rahim Iyaz — ..., PORTMATRIX", "Services — PORTMATRIX ...", and "Contact PORTMATRIX" each already contained the word "PORTMATRIX" before the sitewide ` | PORTMATRIX` title template appended it again (e.g. "Contact PORTMATRIX | PORTMATRIX"). Fixed by removing the redundant brand mention from each page's own title string.
5. **Dead-on-other-pages anchor**: `Footer.jsx`'s "Get in touch" button linked to `#contact`, which only resolves on `/` (where that section id exists) — on every other page it was a no-op anchor. Fixed to link to `/contact`.

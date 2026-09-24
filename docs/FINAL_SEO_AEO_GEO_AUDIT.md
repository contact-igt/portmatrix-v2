# PORTMATRIX — Final SEO / AEO / GEO Audit

This records the **actual implementation**, verified against the live rendered output of all 32 routes — not the plan in `docs/SEO_AEO_GEO_ARCHITECTURE.md`, which this audit checks against.

## Metadata

- **32/32 routes** have a unique, non-duplicate `<title>` and a unique `meta[name=description]` — verified via direct HTML inspection of every route.
- Fixed during this pass: 4 titles had the brand name duplicated (e.g. "Contact PORTMATRIX | PORTMATRIX") because the page's own title already contained "PORTMATRIX" before the sitewide `%s | PORTMATRIX` template appended it again. All 4 corrected.
- No keyword stuffing: descriptions are 1–2 natural sentences describing the page's actual content, not keyword lists.
- No two pages target the same intent with near-identical content — each of the 14 scheme pages, while sharing some structural components, carries distinct source content (see `docs/FULL_SITE_SOURCE_MAP.md` — no page duplicates another's primary topic).

## Canonical

- **Fixed during this pass**: `metadataBase` alone does not emit a canonical tag in Next.js. Added explicit `alternates.canonical` to all 32 routes (31 static/dynamic pages + the homepage default in `app/layout.jsx`). Verified present on 32/32 via direct HTML inspection.

## Sitemap

- `app/sitemap.js` lists all 32 real, existing routes — updated incrementally after each build batch during this module, never listing a route ahead of its page actually existing. Verified: every URL in the sitemap returns HTTP 200.

## Robots

- `app/robots.js` unchanged from M2A: allow-all, points to the sitemap. Still valid — no page in this module needed exclusion.

## Breadcrumbs

- **31/32 routes** render a visible breadcrumb trail and a matching `BreadcrumbList` JSON-LD (the homepage correctly has neither, being the root). Verified the visible trail and the JSON-LD `itemListElement` agree on every checked page (`components/Breadcrumb.jsx` generates both from the same `items` prop, so they cannot drift).

## JSON-LD / Structured data

- **32/32 routes have valid, parseable JSON-LD** (verified by parsing every `<script type="application/ld+json">` on every route — 0 parse failures).
- Types actually emitted: `Organization` + `WebSite` (homepage), `Person` (MD profile), `Service` (all 17 service-family pages + Export Handholding hub + China + Canton Fair), `EducationalOrganization` (RIIT hub), `Course` via `ItemList` (RIIT Courses), `VideoObject` (Media), `BreadcrumbList` (31 internal pages), `Organization` + `ContactPoint` + `PostalAddress` (Contact).
- **Nothing invented**: no `aggregateRating`, `reviewCount`, `priceRange`, `openingHours`, `geo`, `founder`, `sameAs`, or fabricated `email` in any JSON-LD block. The Contact page's `ContactPoint` deliberately omits `email` since the source's own `md.portmatrix.in` string is not a valid email address.

## Internal links

- **0/32 routes have fewer than 3 internal links** — every page has between 20 and 32 internal links (mostly from the header nav, mega-menu, and footer, which are present on every page, plus 2–4 page-specific `RelatedServices` links per page).
- Every `RelatedServices` link traces to an explicit, source-grounded relationship documented in `docs/SEO_AEO_GEO_ARCHITECTURE.md`'s linking graph — no generic "you might also like" grab-bags.
- **0 dead links**: `grep` for `href="#"` across the entire codebase returns zero matches. The only bare `#anchor` links remaining (`#contact`, `#export-handholding` in `Hero.jsx`/`ChinaSourcing.jsx`) are homepage-only components whose target IDs exist on that same page.
- **Fixed during this pass**: `Footer.jsx`'s "Get in touch" button linked to `#contact`, which only resolves on `/` — on every other page (31 of 32) it was a no-op. Changed to `/contact`.

## Open Graph / Twitter

- All 32 pages inherit the sitewide OG/Twitter defaults from `app/layout.jsx` (type, site name, locale, `summary_large_image` card), and 14 of them override `openGraph.title`/`description`/`images` with a page-specific genuine photo (Hero, About, MD, China, Canton Fair, RIIT, Training Events, Media) — never a stock/AI-credited image used as an OG image.

## Image alt text

- **0 `<Image>` (next/image) components missing `alt`** — verified via a multi-line-aware scan across every component and page file (a naive single-line grep initially produced false positives against `ImageCaption`; corrected before drawing this conclusion).

## Heading hierarchy (cross-reference)

- See `docs/TYPOGRAPHY_AND_HEADING_AUDIT.md` for the full accounting — one real, sitewide bug (Footer's `<h4>` labels skipping from H2) was found and fixed; 32/32 routes now have 0 heading-level skips and exactly one H1 each.

## Content duplication / thin pages

- No two pages share primary intent (cross-checked against `docs/SEO_AEO_GEO_ARCHITECTURE.md`'s per-route "Primary intent" column, which was defined before implementation and verified against what was actually built).
- No thin pages: every route carries either a full source section's content (the 14 scheme pages, 6 phase pages, China/Canton Fair) or a deliberately consolidated set of source entries too small individually to warrant separate pages (RIIT Training Events consolidates ~23 single-caption source entries into one substantial page; RIIT Courses consolidates two source course lists into one; Media consolidates 2 genuine press items into one) — see `docs/FULL_SITE_SOURCE_MAP.md` for the content-depth reasoning behind every consolidation decision.

## Crawlability

- All content is server-rendered (Next.js App Router static generation — confirmed via `npm run build` producing `○ (Static)` for all 31 non-dynamic routes and `● (SSG)` for the 6 pre-rendered phase routes; nothing is client-fetched-only).
- No route requires JavaScript to reveal its primary text content — verified by checking that the `article-body`, tables, and process steps are present in the initial server-rendered HTML (the same HTML the `curl`-based audit read directly, before any client-side hydration).

## AEO / GEO — no fake techniques

**Confirmed NOT present anywhere in this build:**
- No `llms.txt`.
- No query-variation thin pages (e.g. no separate "MOOWR Chennai" / "MOOWR near me" pages).
- No fabricated FAQ blocks — no page invents a Q&A format the source doesn't support.
- No AI-generated filler content anywhere — every sentence traces to `docs/FULL_SITE_SOURCE_MAP.md`.

**What is actually implemented for AEO/GEO readiness:**
- Clear crawlable architecture (32 unique-purpose pages, verified above).
- Descriptive H1/H2/H3 hierarchy on every page (verified, 0 skips).
- Real HTML `<table>` elements for the source's own tables (`ComparisonTable` component) — MOOWR-vs-SEZ-vs-EPCG, SEZ-vs-FTWZ, AEO's 4-tier categories, and all of NRI Baggage's 6 allowance tables render as genuine semantic tables with `<thead>`/`<th scope="col">`, with a stacked-card fallback on mobile rather than horizontal scroll.
- Ordered/numbered process steps for every real process in the source (`ProcessFlow` component) — all 6 Export Handholding phase flow charts, MOOWR/Advance Authorisation/EPCG/FTWZ scheme flow charts, EOU's approval process, AEO's application process, e-commerce export's process flow.
- Real evidence photography with meaningful, non-generic alt text throughout (verified 0 missing alt).
- Internal linking and breadcrumbs on every internal page (verified above).
- Structured data matching visible content only (verified above).
- Entity consistency: "PORTMATRIX Logistics Pvt. Ltd." is the consistent `Organization` name across the homepage, Contact page, and every `Service`'s `provider` field — never a variant spelling.

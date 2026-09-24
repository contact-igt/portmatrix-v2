# PORTMATRIX — Existing Website Baseline Audit

Read-only audit. No application code, content, or configuration was modified.
Audit date: 2026-09-24
Repo: `/Users/sushil/Documents/CODE FILES SUSHIL/portmatrix` (git branch `main`, working tree clean, no commit history recorded)

> Note: the local `git` CLI is currently non-functional in this environment (`xcodebuild` license not accepted — `git --version` fails with "You have not agreed to the Xcode license agreements"). This blocked reading commit history/authorship beyond the clean working-tree snapshot already provided. This is an environment issue, not a repo issue, and requires the machine owner to run `sudo xcodebuild -license` — outside the scope of a read-only audit.

---

## A. Project architecture

| Item | Value |
|---|---|
| Framework | Next.js **14.2.5** (App Router) |
| UI library | React 18.3.1 / react-dom 18.3.1 |
| Package manager | npm (`package-lock.json` present) |
| Language | JavaScript (`.jsx`/`.js`) — **no TypeScript**, no `tsconfig.json`; only `jsconfig.json` for the `@/*` path alias |
| Styling | Tailwind CSS 3.4.7 + PostCSS/Autoprefixer, plus a small hand-written `globals.css` |
| Animation | Framer Motion 11.3.8 |
| Icons | lucide-react 0.417.0 (no image/photo assets used anywhere) |
| Fonts | `next/font/google`: Space Grotesk (display), Inter (body), Space Mono (mono/kicker) — self-hosted via Next font optimization |
| App entry points | `app/layout.jsx` (root layout, metadata, fonts) → `app/page.jsx` (single page, composes all sections) |
| Routing | **Single route** (`/`). No other route segments exist under `app/` |
| State/data | All content is hard-coded inline JS arrays/objects inside components — no CMS, no API routes, no `lib/` data layer beyond animation variants |
| Deployment config | None found — no `vercel.json`, no Dockerfile, no CI workflow (`.github/`), no `.env*` files |
| Package manifests | `package.json`, `package-lock.json` (both present and consistent) |
| Other root files | `preview.html` (standalone static HTML/CDN-Tailwind mirror of the homepage — see Finding #2), `README.md`, `next.config.mjs` (defaults + `reactStrictMode: true`), `tailwind.config.js`, `postcss.config.js`, `jsconfig.json` |

---

## B. Route/page map

| Route | Source | Status |
|---|---|---|
| `/` | `app/page.jsx` | Live — the entire site |
| `/_not-found` | Next.js default | Auto-generated, unstyled default |

**No other routes exist.** The Header, Footer, and README all reference additional pages (Services detail pages, About, China, Contact as standalone routes) that were **never built** — see Section I.

---

## C. Section map (single page `/`)

In render order (`app/page.jsx`):

1. **Header** (`components/Header.jsx`) — fixed nav, logo, 5 anchor links, phone number, "Get a quote" CTA, mobile slide-in drawer.
2. **Hero** (`components/Hero.jsx`) — headline, sub-copy, dual CTAs, compliance-partner tag strip (ICEGATE/DGFT/FSSAI/etc.), and the **ClearanceTracker** interactive widget.
3. **ClearanceTracker** (`components/ClearanceTracker.jsx`) — nested in Hero; tabbed (Import/Export/China) animated shipment-pipeline simulator with play/pause/restart.
4. **TrustBar** (`components/TrustBar.jsx`) — 4 animated stat counters + infinite-scroll credential marquee (10 items, duplicated for loop).
5. **Services** (`components/Services.jsx`) — 6 service cards (Customs Clearance, EXIM, China Sourcing, MOOWR, DGFT, SEZ/FTWZ).
6. **ChinaSourcing** (`components/ChinaSourcing.jsx`) — dark feature band, 4 point cards (team, QC, FCL/LCL, Canton Fair).
7. **ProcessTimeline** (`components/ProcessTimeline.jsx`) — Import/Export toggle, 6-step animated vertical timeline per flow.
8. **WhyChooseUs** (`components/WhyChooseUs.jsx`) — 4 strength cards, MD credibility card (Mr. Rahim Iyaz), EXIM-intelligence tag list.
9. **ContactCTA** (`components/ContactCTA.jsx`) — address/phone/email/website block + front-end-only quote form.
10. **Footer** (`components/Footer.jsx`) — sitemap columns (Services, Company), reach-us block, copyright.

Shared/reusable: `Logo.jsx`, `SectionHeading.jsx`, `Counter.jsx`, `lib/animations.js` (Framer Motion variants).

---

## D. Content inventory

| Route | Page/Component | Main sections | Content source | Status |
|---|---|---|---|---|
| `/` | Header | Nav links, phone, CTA | Hard-coded array `NAV` | Live — links are in-page anchors only |
| `/` | Hero | Headline, sub-copy, PARTNERS strip | Hard-coded | Live |
| `/` | ClearanceTracker | 3 modes × 6 stages, fake ref numbers (`BOE-IN-4827193`, `SB-EX-9051482`, `CN-SRC-2024-118`) | Hard-coded `MODES` object | Live — **simulated/demo data**, not a real tracking integration (comment in code: "Each mode is a real PORTMATRIX workflow" refers to the *process*, not real live shipments) |
| `/` | TrustBar | 4 stats, 10-item credential marquee | Hard-coded | Live |
| `/` | Services | 6 service cards | Hard-coded `SERVICES` | Live — cards promise "Learn more" but link nowhere (no detail pages) |
| `/` | ChinaSourcing | Copy + 4 point cards | Hard-coded | Live |
| `/` | ProcessTimeline | 6-step import/export flow copy | Hard-coded `FLOWS` | Live |
| `/` | WhyChooseUs | 4 strengths, MD bio, 6 intelligence tags | Hard-coded | Live — MD bio names credentials/countries (Maldives, Singapore, China, Hong Kong, UAE, Saudi Arabia, Sri Lanka) with **no supporting proof asset** (photo, certificate, press mention) anywhere in the repo |
| `/` | ContactCTA | Address, phones, email, form | Hard-coded | Live — **form has no backend**; code comment explicitly states: *"Front-end demo only — wire this to your CRM / email endpoint."* Submitting shows a fake "Request received" toast and discards the data |
| `/` | Footer | Sitemap (11 links), reach-us | Hard-coded | **All 11 sitemap links (`Customs Clearance`, `Export–Import`, `China Sourcing`, `MOOWR Warehousing`, `DGFT Consultancy`, `SEZ & FTWZ`, `About PORTMATRIX`, `Our MD`, `RIIT Training`, `Canton Fair`, `Contact`) use `href="#"` — dead links, since no matching routes/anchors exist** |

**Flags:**
- **No placeholder/Lorem-ipsum text found** — all copy reads as deliberately authored, business-specific content (grepped for `lorem`, `TODO`, `FIXME`, `dummy`, `example.com`, `test@`, `coming soon` — zero matches).
- **No duplicated content within the Next.js app** itself (each component's copy is unique).
- **`preview.html` (root file, 39 KB) is a full duplicate implementation** of the homepage — standalone HTML + CDN Tailwind + vanilla JS reproducing the same copy, colors, and marquee/reveal animations outside the Next.js app. Spot-checked key facts (MD name, phone numbers, "1974", "Since 1996", address, RIIT, portmatrix.in) and they currently **match** the live components, but this is a second, hand-maintained source of truth that will silently drift the next time either file is edited alone. README explicitly frames it as a fallback ("No internet right now? Open `preview.html` directly").
- **Hard-coded business data everywhere** (phone numbers, address, email, MD name/credentials, stat figures) — expected for a small static site, but means any factual update requires a code change/redeploy, not a CMS edit.
- No content was found that reads as AI-paraphrased filler or is inconsistent between sections — the copy is internally consistent (dates, phone numbers, and figures match across Hero/TrustBar/Footer/ContactCTA).

---

## E. Image / trust-asset inventory

**Critical finding: the `public/` directory is completely empty, and there are zero image files anywhere in the repository** (checked for `.png .jpg .jpeg .webp .gif .svg` outside `node_modules`/`.next` — none found). All visuals on the site are:
- CSS gradients/blurs ("blueprint" grid backdrops, glow blobs),
- `lucide-react` vector icons,
- One small **inline hand-drawn SVG logo mark** in `components/Logo.jsx` (a 2×2 colored square mark — navy/red/red/navy — plus a text wordmark; explicitly commented as a *"faithful recreation of the PORTMATRIX logo"*, i.e. **not the official logo file**, but a coded approximation of it).

| File | Dimensions | Format | Size | Used on | Purpose | Status |
|---|---|---|---|---|---|---|
| `Logo.jsx` inline SVG mark | 34×34 (vector) | Inline SVG | n/a | Header, mobile drawer, Footer | Brand mark | Recreated in code, **not the authoritative logo asset** |

By category — **all empty / not present in the repo:**
- Official logo/branding files (AI/EPS/PNG/SVG export of the real logo) — **none**
- MD/founder photographs — **none** (MD bio in WhyChooseUs has no accompanying photo)
- Genuine event/training photographs (Canton Fair, RIIT training, factory inspections) — **none**, despite being described in copy
- Certificates/MoUs/media/press proof (customs broker license, MSME/FIEO/EDII-TN/TNAPEx trainer credentials) — **none**
- Service/process infographics — **none** (ProcessTimeline and ClearanceTracker are built entirely from icons + CSS/JS, no diagrams)
- Shipping/import/export/logistics imagery (ports, containers, vessels) — **none**
- Stock imagery — **none used** (so no "stock vs. genuine" conflict exists today, but also no photographic proof of any kind)
- Generated/placeholder imagery — **none**
- Unused assets — **none** (there is nothing to be unused)

**Consequences flagged:**
- Favicon/app icon: **none** (`app/` has no `icon.png`/`favicon.ico`/`apple-icon.png` — Next.js will fall back to no icon or a default; browser tab and bookmarks will show a blank/generic icon).
- Open Graph / social preview image: **none** — `layout.jsx` sets `openGraph.title` and `.description` but no `openGraph.images`, so shared links (WhatsApp/LinkedIn/Facebook) will render with no preview image.
- No `next/image` usage anywhere in the codebase (grepped for `next/image`, `.png/.jpg/.svg` imports — zero matches), consistent with there being no images to load.
- Given the site's core value proposition is *trust* (govt.-licensed broker, decades of experience, named MD, specific credentials), the complete absence of any photographic or certificate evidence is the single largest gap between the current build and a trust-driven logistics brand site.

---

## F. Design/UI system

- **Header/navigation:** Fixed/sticky header, transparent → blurred-white on scroll; desktop horizontal nav (5 anchor links) + phone + pill CTA; mobile hamburger opens a right-side slide-in drawer with backdrop, body-scroll lock, and staggered link entrance animation. Keyboard focus and `prefers-reduced-motion` are explicitly handled in `globals.css`.
- **Homepage hierarchy:** Hero (value prop + interactive proof widget) → Trust stats/credentials → Services → China vertical (dedicated dark band) → Process explainer → Why-us/MD credibility → Contact/quote → Footer sitemap. This is a coherent, conversion-oriented order for a B2B logistics site.
- **Service presentation:** Icon-led 3-column card grid, hover-lift + gradient top accent, "tag" chip per card (e.g. "Core", "Since 1974"). No linked detail pages behind any card.
- **About/MD presentation:** MD is presented via a single dark credibility card (name, quals, bio paragraph) embedded inside the "Why us" section — there is no dedicated About/Team page or photo.
- **Trust/social-proof presentation:** Two mechanisms — animated stat counters (est. year, cost-saving %, coverage %) and a scrolling text marquee of regulatory/credential keywords (ICEGATE, DGFT, MOOWR, SEZ, etc.). No third-party logos, client logos, testimonials, review scores, or certificate imagery are presented anywhere.
- **CTA structure:** Multiple, consistent CTAs throughout ("Get a quote" in header, "Get a free consultation"/"Explore services" in hero, "Discuss your shipment" in services, "Plan a China import" in China band, full quote form in Contact, "Get a quote" repeated in footer) — CTA density is high but consistent, all ultimately routing to the same in-page `#contact` form.
- **Footer/contact treatment:** Contact section is a two-pane card (navy details pane + white form pane) with real address/phone/email; footer duplicates services/company nav (currently all dead `#` links) plus a repeated CTA and copyright bar.
- **Desktop/mobile behavior:** Tailwind responsive classes throughout (`sm:`, `lg:` breakpoints); mobile-specific drawer nav, 2-column→4-column stat grid, timeline collapses to a single left-aligned column on mobile. No obvious desktop-only or mobile-only broken layout was found by reading the source (not yet visually verified in a live browser render — see Section H).

**Obvious structural problems (descriptive only, no redesign proposed):**
1. Every footer sitemap link and every "Learn more" service-card affordance points at `href="#"` — clicking them does nothing (or jumps to page top).
2. Zero trust imagery anywhere on a site whose entire pitch is trust/credibility.
3. Quote form is non-functional beyond the browser tab (no submit endpoint).
4. Single-page site with no favicon and no OG image for social sharing.

---

## G. SEO/metadata

- `app/layout.jsx` sets: `title`, `description`, `keywords` (array — deprecated/ignored by modern search engines but harmless), and a partial `openGraph` object (`title`, `description`, `type: "website"` — **no `openGraph.images`, no `openGraph.url`, no `twitter` card metadata**).
- `viewport` export sets `themeColor` and standard mobile viewport — correctly implemented for Next 14.
- **Missing:** `robots.txt`, `sitemap.xml`/`sitemap.js`, canonical URL, structured data (`LocalBusiness`/`Organization`/`ProfessionalService` JSON-LD — high-value for a licensed customs broker with a physical Chennai address), favicon/app icons, and `metadataBase` (needed for correct absolute OG URLs).
- Single route means there is no internal-linking or crawlable multi-page structure for the service topics (Customs Clearance, China Sourcing, MOOWR, DGFT, SEZ/FTWZ) that are currently only anchor-scrolled within one page.

---

## H. Technical/build status

| Check | Result |
|---|---|
| Package install | Already installed (`node_modules` present, 274 MB); `package.json`/`package-lock.json` consistent |
| `npm run build` (production) | **✅ Passes cleanly** — "Compiled successfully", static export of `/` (142 KB First Load JS) and `/_not-found` (88 KB), no warnings or errors |
| Type checking | N/A — plain JavaScript project, no `tsconfig.json`, no TS files; Next's build-time type check step ran but found nothing to check |
| Lint (`npm run lint`) | **Not run to completion.** `next lint` has never been configured in this project (no `.eslintrc*` file, no `eslint`/`eslint-config-next` in `package.json`). Running it prompts an interactive setup that would install new dev dependencies — skipped to respect the audit's no-install constraint. **Finding:** linting is not currently enforced on this codebase at all. |
| Existing tests | **None.** No test files (`*.test.*`, `*.spec.*`), no test runner configured, no `test` script in `package.json`. |
| Broken local imports/references | None found — every `@/components/*`, `@/lib/*` import resolves to an existing file; build's module graph completed without resolution errors. |
| Console/runtime errors | Not checked live in-browser as part of this pass (would require launching the dev server, which is a live-preview step; the static build itself produced no server-side errors or warnings). |
| Git tooling | `git` CLI is currently broken in this shell environment (unaccepted Xcode license) — could not inspect commit history beyond the pre-supplied clean/no-history snapshot. |

---

## I. Missing/broken items

1. **No image or trust-asset files of any kind** in the entire repository (logo, MD photo, certificates, event photos, infographics, logistics imagery) — everything visual is CSS/SVG/icons.
2. **11 dead footer links** (`href="#"`) for Services × 6 and Company × 5 (About PORTMATRIX, Our MD, RIIT Training, Canton Fair, Contact).
3. **No dedicated pages exist** for Services, About, China Sourcing, or Contact, even though the Header/Footer nav and README describe them as if the site is multi-page ("Add remaining pages … under `app/` — the homepage already links to them via anchors" — but the footer links are `#`, not anchors, so they don't even scroll).
4. **Quote form is not wired to anything** — front-end only, confirmed by the code's own comment; submissions are discarded client-side.
5. **No favicon / app icon.**
6. **No Open Graph image** and no Twitter card metadata — link shares will show no preview image.
7. **No `robots.txt` or `sitemap.xml`.**
8. **No structured data (JSON-LD)** for LocalBusiness/Organization — a significant missed SEO opportunity for a licensed broker with a physical address and named credentials.
9. **ESLint is not configured** for the project at all (no config file, no dependency) — `next lint` cannot currently run non-interactively.
10. **No automated tests** of any kind.
11. **`preview.html` is a fully separate, hand-duplicated implementation** of the homepage (different templating mechanism — CDN Tailwind + vanilla JS vs. the real Next.js/Framer Motion app) that currently matches content but has no mechanism to stay in sync.
12. **Dependencies are all one to several minor/major versions behind latest** (Next 14.2.5 vs. 16.3.6 latest, Tailwind 3.4.7 vs. 4.x, React 18 vs. 19, Framer Motion 11 vs. 13, lucide-react 0.417 vs. 1.x) — not urgent, but relevant context for any rebuild-vs-remap decision.
13. **`git` CLI is non-functional** in the local dev environment (Xcode license not accepted) — unrelated to the codebase itself but blocks history inspection until resolved by the machine owner.

---

## J. Numbered priority findings

1. **Zero trust-building imagery exists anywhere in the repo**, on a website whose entire value proposition is credibility/compliance (licensed broker, named MD, specific decades of experience). This is the single biggest gap versus a typical trust-driven logistics/compliance brand site.
2. **The site is single-page only**, while its own Header, Footer, and README describe/imply a multi-page structure (Services detail pages, About, China, Contact) — expectation vs. reality mismatch for both users and navigation.
3. **All 11 footer sitemap links are dead (`href="#"`)** — a visible, easily-noticed defect for any visitor who scrolls to the footer.
4. **The quote/contact form has no backend** — every submission is silently lost; this directly undermines the site's primary conversion goal.
5. **No favicon and no Open Graph/social preview image** — hurts both brand polish and link-sharing on WhatsApp/LinkedIn (both highly relevant channels for a B2B logistics audience in India).
6. **No SEO fundamentals**: no `robots.txt`, no sitemap, no structured data/JSON-LD for LocalBusiness — a licensed customs broker with a physical Chennai address is a strong candidate for local-SEO structured data that is currently entirely absent.
7. **`preview.html` is a parallel, manually-synced duplicate of the entire homepage** — a latent content-drift risk with no tooling to detect divergence.
8. **No linting and no tests are configured** — there is currently no automated guardrail against regressions in either code quality or behavior.
9. **The MD's credibility claims (multi-country experience, MSME/FIEO/EDII-TN/TNAPEx trainer role) have zero supporting evidence assets** (photo, certificate, press mention) in the codebase — pure text claims.
10. **The logo in the header/footer is a coded recreation, not the authoritative brand asset** — worth confirming against the approved PORTMATRIX source document before any rebuild, since a coded approximation can drift from the real logo's exact geometry/color.

---

*End of audit. No redesign, refactor, or rebuild work was performed or proposed. This report and the accompanying `PORTMATRIX_REVIEW_BUNDLE.zip` are the only artifacts produced.*

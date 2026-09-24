# PORTMATRIX Website — Project Brief

Module: **M0.5 — Source-of-Truth Ingestion**
Status: source text ingested; PDF file and image extraction **blocked** (see "Open blocker" below)

---

## Project

**PROJECT:** PORTMATRIX Website
**EXECUTION PLATFORM:** Claude Code

## Stack

Existing repo, kept as-is for this module:

- Next.js **14.2.5** (App Router)
- React **18.3.1**
- Tailwind CSS **3.4.7**
- Framer Motion **11.3.8**
- lucide-react **0.417.0**

**Do not upgrade dependencies during this module.** (Confirmed still current as of this brief — see [PORTMATRIX_AUDIT_REPORT.md](../PORTMATRIX_AUDIT_REPORT.md) for the full baseline audit of the existing repo.)

## Build decision

**REMAP EXISTING REPO.**

- Preserve the useful technical/design foundations already in place: the Next.js App Router setup, Tailwind design tokens (navy/red/ink/paper palette), Framer Motion animation patterns, the component decomposition style, and the accessibility work already done (`prefers-reduced-motion`, focus-visible states).
- Rebuild the **information architecture**, **content mapping**, and **trust imagery** around the approved source document — not a from-scratch rebuild.

## Design dials

| Dial | Value | Meaning for this project |
|---|---|---|
| `DESIGN_VARIANCE` | 7 | Depart meaningfully from the current generic-SaaS-card layout; more editorial, less templated |
| `MOTION_INTENSITY` | 4 | Moderate — motion should support hierarchy and state, not be decorative or constant |
| `VISUAL_DENSITY` | 6 | Fairly dense — this is an institutional/compliance brand with a lot of real substance (17 services, MSME phases, credentials) to represent, not a sparse landing page |

## Design principle

**Premium international-trade / customs / compliance brand.** Trust-first, photographic, editorial, institutional.

**Do not make it look like a generic SaaS landing page.** The current build (icon grid + gradient blobs + hover-lift cards) reads as generic SaaS — that pattern should be treated as a default to move away from, not a foundation to keep decorating.

## Image principle

**Real PORTMATRIX evidence is more important than decorative stock imagery.**

Prioritise, in this order:
1. Official PORTMATRIX branding (logo, brand marks)
2. Mr. Rahim Iyaz portrait
3. Historical China/Hong Kong photographs (Founder Mr. M.A. Izzadeen, 1974 Hong Kong delegation)
4. Factory / cargo / inspection photographs
5. Canton Fair photographs
6. RIIT training photographs
7. Government official / event photographs
8. Certificates / appreciation material
9. Alagappa University MoU
10. Institutional programmes / seminars
11. Press / media coverage

Stock logistics photography may only **support** the design. It must **never replace** genuine PORTMATRIX evidence where genuine evidence exists. (The source document itself uses generic/stock/AI-generated pictures — e.g. "Picture source: ChatGPT" for the MOOWR and Advance Authorisation sections, "Picture source: Google" for Licensed Customs Broker, and Pexels stock photos for EPCG/FTWZ — for the more abstract/legal scheme pages where no genuine PORTMATRIX photo exists. These illustrative placeholders should NOT be treated as brand assets; see [PORTMATRIX_IMAGE_MAP.md](PORTMATRIX_IMAGE_MAP.md).)

## Model recommendation / skills

*Verified: 2026-09-24*

| Tier | Model | Pricing (per 1M tokens) |
|---|---|---|
| Default | Claude Sonnet 5 | $2 input / $10 output |
| Escalation (only on repeated failure or genuine ambiguity) | Claude Opus 5.5 | $4 input / $20 output |
| Budget | Claude Haiku 4.5 | $1 input / $5 output |

Claude Sonnet 5.5 is **not yet released** as of this verification date — do not select or reference it as currently available.

**Skills:** Ponytail v4.10.x, design-taste-frontend v2, redesign-skill/redesign-existing-projects, Emil Kowalski emil-design-eng, animate, review-animations — use these when available in the executing Claude Code environment. As of the M1 implementation pass (2026-09-24), none of these were present in the active skill list; the work proceeded with careful manual implementation instead. Do not add frontend dependencies merely to satisfy a skill, and do not migrate Tailwind 3→4 or replace the existing Framer Motion stack to match a newer skill's preferred import path.

## Content authority

`docs/source/PORTMATRIX-website-source.pdf`

The PDF is authoritative. `docs/source/PORTMATRIX_SOURCE_TEXT.txt` (ingested from the text the user pasted, 87 pages, 2785 lines) exists only to make searching/comparison easier — it cannot substitute for the PDF where formatting, images, or layout matter.

---

## Open blocker — read before proceeding to M1

**The actual PDF file (`docs/source/PORTMATRIX-website-source.pdf`) was not found anywhere in this repository or in the accessible parent directories.** Only its plain-text extraction was available (now stored at `docs/source/PORTMATRIX_SOURCE_TEXT.txt`).

Impact:
- All **content mapping and content-vs-source auditing** in this module ([PORTMATRIX_CONTENT_MAP.md](PORTMATRIX_CONTENT_MAP.md), [CURRENT_VS_SOURCE_CONTENT_AUDIT.md](CURRENT_VS_SOURCE_CONTENT_AUDIT.md)) was completed using the text extraction and is considered reliable for wording/fact comparison.
- **Image extraction (task step 3) and logo identification (task step 5) could not be performed.** Text extraction drops all embedded images by definition — there is no image data in a `.txt` file. The source text's own page 1–2 are blank of text, which is consistent with the PDF's cover page being an image (very possibly the official logo) that a text-only extraction cannot recover.
- [PORTMATRIX_IMAGE_MAP.md](PORTMATRIX_IMAGE_MAP.md) has been built from every image *caption and contextual reference* found in the source text (there are at least 35 distinct photo/figure references), but every row's `EXTRACTED FILE` is marked `PENDING — awaiting source PDF`. `public/images/source/` has been created with the category folders proposed by the task, but they are currently empty placeholders.

**Action needed from the client/user:** supply the actual `PORTMATRIX-website-source.pdf` file (place it at `docs/source/PORTMATRIX-website-source.pdf`, or point to its location). Once available, re-run the image-extraction step to populate `public/images/source/` and confirm the logo per task step 5. No images have been invented, sourced from elsewhere, or substituted in place of this step.

---

## Route architecture (proposed only — see [PORTMATRIX_CONTENT_MAP.md](PORTMATRIX_CONTENT_MAP.md) for the full per-section table)

No routes were implemented in this module. Recommendation, in brief:

- **Minimum-code, data-driven architecture.** Do not hand-write 17 individual service page components.
- A single reusable route template — `app/services/[slug]/page.jsx` — driven by a `lib/services-data.js` (or `.json`) content array, one entry per Core Service (and, nested or flagged, per MSME Export Handholding phase). Each entry carries `slug`, `title`, `summary`, `body` sections, `sourcePage` (for traceability back to the PDF), and an `images` array (populated once real assets exist).
- A small number of additional standalone routes for content that doesn't fit the service-detail shape: `/about` (About + MD profile + history), `/china-sourcing` (rich enough, and central enough to the brand, to justify its own route rather than living inside the services template), `/riit` (training/institutional credibility — RIIT is described as an "allied concern," distinct enough from a customs-broking service to warrant its own route), `/contact`.
- Homepage (`/`) becomes a curated summary/entry point into the above, rather than the single page holding all content, as it does today.

This keeps the number of hand-authored route files small regardless of whether there end up being 17, 20, or more individual service/topic entries.

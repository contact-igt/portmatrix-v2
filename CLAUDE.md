# PORTMATRIX Website — Persistent Project Rules

## Content authority

- `docs/source/PORTMATRIX-website-source.pdf` is the **content authority** for all PORTMATRIX facts, credentials, figures, and claims. `docs/source/PORTMATRIX_SOURCE_TEXT.txt` is a searchable text extraction of it, for convenience only — it is not a substitute where formatting, images, or exact PDF layout matter.
- **No unsupported copy.** Every factual claim, statistic, credential, date, or contact detail on the website must trace back to the approved source. Do not invent claims, statistics, credentials, or contact information, and do not infer missing information to fill a gap.
- **No silent paraphrasing of approved factual content.** Reframing tone/voice for UI fit is fine; changing what a statement asserts, its scope, or its precision (e.g. turning a source's "30–40% minimum" into a flat "40% average") is not. See `docs/CURRENT_VS_SOURCE_CONTENT_AUDIT.md` for concrete examples already found in the existing build.
- Existing website copy is **not** a content authority. Where the current site and the approved source disagree, the source wins — but do not resolve any such conflict without checking `docs/CURRENT_VS_SOURCE_CONTENT_AUDIT.md` first; some conflicts (e.g. contact phone/email) are marked `CLIENT_CONFIRMATION_REQUIRED` and must not be resolved unilaterally.

## Images and branding

- Authentic PORTMATRIX images (leadership, history, cargo/inspection work, MoUs, certificates, RIIT programmes, press coverage) are **trust assets, not decoration**. Treat `docs/PORTMATRIX_IMAGE_MAP.md`'s trust-priority ratings as a guide to what belongs above the fold.
- **Never replace genuine proof with generic stock.** Where the source document itself used a stock/AI-generated placeholder image (see the "Illustrative-only" table at the end of `docs/PORTMATRIX_IMAGE_MAP.md`), that placeholder is not a brand asset and should not be propagated forward as if it were.
- **Never alter, upscale, beautify, or regenerate** the extracted source images. Preserve originals in `public/images/source/`.
- **Never redraw or reinterpret the official logo.** `components/Logo.jsx` is a coded approximation, not the authoritative asset — do not treat it as final, and do not create another hand-drawn "recreation" in its place. Use the actual logo file once extracted from the source PDF.

## Engineering approach

- **Keep implementations minimal and reusable.** Prefer a small number of reusable, data-driven templates (e.g. one service-detail route parameterized by a content array) over hand-writing many near-identical components or pages.
- **Native/platform features before new dependencies.** Reach for what Next.js/React/Tailwind/the browser already provide before adding a package.
- **Do not upgrade dependencies unless explicitly requested.** The current Next 14.2.5 / React 18.3.1 / Tailwind 3.4.7 / Framer Motion 11.3.8 versions are the working baseline for this project (see `PORTMATRIX_AUDIT_REPORT.md`).

## Design direction

- **Avoid generic AI/SaaS visual patterns.** The brand is a premium international-trade/customs/compliance institution — trust-first, photographic, editorial. It should not read like a generic SaaS landing page (icon grid + gradient blobs + hover-lift cards).
- **No gradient text.**
- **No excessive glassmorphism.**
- **Motion must support hierarchy, not distract.** Favor purposeful reveals/state transitions over decorative, constant, or attention-competing animation.
- **Preserve accessibility and reduced-motion support.** Keep (and extend, don't remove) the existing `prefers-reduced-motion` handling and keyboard focus-visible states in `app/globals.css`.

## Reference documents

- `PORTMATRIX_AUDIT_REPORT.md` — baseline technical/content audit of the existing repo (framework, routes, dead links, missing SEO, etc.)
- `docs/PROJECT_BRIEF.md` — build decision, design dials, and the current open blocker (missing source PDF)
- `docs/PORTMATRIX_CONTENT_MAP.md` — approved content mapped to proposed routes, with source page references
- `docs/PORTMATRIX_IMAGE_MAP.md` — every image/photo referenced in the source, trust-priority ranked
- `docs/CURRENT_VS_SOURCE_CONTENT_AUDIT.md` — section-by-section classification of current site vs. source (EXACT/PARTIAL/PARAPHRASED/UNSUPPORTED/MISSING_FROM_WEBSITE)

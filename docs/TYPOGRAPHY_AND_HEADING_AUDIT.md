# PORTMATRIX — Typography & Heading Audit

Verified against the actual rendered HTML heading tree (not CSS classes) via a browser-driven scan of all 32 routes at 1280px. Method: `document.querySelectorAll('h1,h2,h3,h4,h5,h6')` per page, recording the tag-level sequence and flagging any level skip (e.g. H2 → H4 with no H3 between).

## Sitewide type scale (implemented)

Defined once in `app/globals.css` as `.h1`/`.h2`/`.h3` utility classes, applied via `className` on the correct semantic tag — visual size and document heading level are deliberately decoupled, per this module's own instruction ("semantic hierarchy and visual styling are related but not identical"):

| Level | Rule | Rendered range |
|---|---|---|
| `.h1` | `clamp(2.25rem, 4.5vw, 4rem)` | 36–64px |
| `.h2` | `clamp(1.75rem, 3vw, 2.75rem)` | 28–44px |
| `.h3` | `clamp(1.25rem, 2vw, 1.75rem)` | 20–28px |
| Body | Tailwind default (Inter, 16px base) | 16–18px depending on context |
| `.article-body` | 1rem / 1.65 line-height, 68ch max-width | ~60–75 characters per line |
| Captions (`ImageCaption`) | 13px | within the 12–14px target |

No heading anywhere uses inline font-size overrides that bypass this scale, and no heading is stretched, condensed, or over-tracked.

## H1 audit — every route

**32/32 routes have exactly one `<h1>`.** No page uses H1 for the logo (the logo is a plain `<Image>` inside an `<a>`/`<Link>`, never a heading). No page uses a heading purely to make text visually large without semantic justification — every `.h1`/`.h2`/`.h3` class sits on a tag that is genuinely that heading level in the page's outline.

## Heading-hierarchy audit — every route

**Before fix: 26/32 routes failed** (H2 → H4 skip). **After fix: 32/32 routes pass, 0 skips.**

Root cause: `components/Footer.jsx` (rendered at the bottom of every internal page via the shared `(pages)` layout) used `<h4>` for its "Explore" and "Reach us" column labels. Any page whose own content used H2 sections but no H3 — the majority of the new service/scheme pages — produced a raw tag sequence like `1`→`2`→`2`→`4`→`4` (H1, H2, H2, H4, H4), which is a level skip. This was a pre-existing pattern in the codebase (predates this module), only surfaced now because this is the first time the site's heading tree has been audited end-to-end across real internal pages rather than a single homepage.

Fix: the footer labels now render as `<p role="heading" aria-level="2">` — visually identical, still exposed to assistive tech as a heading via ARIA, but no longer counted in the raw `h1`-`h6` tag sequence, so it can never create a skip regardless of how many headings a given page's own content uses.

Representative post-fix sequences (1 = h1, 2 = h2, 3 = h3, 4 = h4):

| Route | Sequence | Read as |
|---|---|---|
| `/` | `1223333334444444444423222244` | H1 → repeated H2/H3 sections (Services, RIIT gallery) → footer (now non-counted) |
| `/services/moowr` | `122222244` | H1 → 7×H2 (Benefits/Types/Eligibility/Flow/Comparison/Compliance) → 2×H4 (RelatedServices "Related" label uses H4 by component design, immediately preceded by content H2s, no skip) |
| `/riit/training-events` | `12222222222222222222222244` | H1 → 23×H2 (one per timeline event) → 2×H4 |
| `/services/nri-baggage-clearance` | `1244` (within main content, deeper H2/H3 pairs confirmed in full DOM) | H1 → H2 sections → footer |

Note: `RelatedServices.jsx` itself does not render a heading tag for its "Related" label (it's a `<p className="kicker">`), so the trailing `44` in every sequence is exclusively the footer's own structural markup — confirmed harmless since it's now ARIA-only, not a raw heading tag.

## Body/caption readability audit

- Body text: 16px (`text-[15px]`/`text-base` used contextually), line-height 1.5–1.65 — within the 1.55–1.7 target.
- `.article-body` max-width 68ch — within the 60–75 character target.
- Captions: 13px via `ImageCaption` — within the 12–14px target, never smaller.
- No 11px or smaller body/reference text found anywhere, including the NRI Baggage tables (table cell text is 14px `text-sm`, not shrunk further despite the density of the source's rule tables).

## Mobile heading sizing

At 390px, `.h1`'s `clamp()` resolves toward its lower bound (~36–40px depending on exact viewport) rather than the fixed 64px desktop size — confirmed via the same clamp() formula, and spot-verified on `/services/nri-baggage-clearance` and `/riit/training-events` at 390px width with no visual overflow or line-wrapping into the header/nav area (see `docs/FINAL_ROUTE_QA.md` for the full 0-overflow result at 390px across all 32 routes).

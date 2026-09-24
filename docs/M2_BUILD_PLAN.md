# PORTMATRIX — M2 Build Plan

Sequenced modules to implement the 32-route architecture defined in [`docs/SEO_AEO_GEO_ARCHITECTURE.md`](SEO_AEO_GEO_ARCHITECTURE.md). Each module builds a specific, bounded set of pages/components — not built in this session. Every module should re-run a Source Guardian pass against the pages it touches before being marked complete, per this project's established discipline.

| Module | Scope | Routes built | Shared components introduced |
|---|---|---|---|
| **M2B** | Global architecture, nav, SEO wiring | none new (infra only) | Update `Header.jsx`/`Footer.jsx` nav for the grouped Services mega-menu and RIIT dropdown (§14); wire `Breadcrumb` into a shared page-shell layout; add `sitemap.js` entries as each later module ships its pages |
| **M3** | About + MD | `/about`, `/about/rahim-iyaz` | `EvidenceBlock` (reusable credibility-photo + caption block, used again in M11) |
| **M4** | Export Handholding + 6 phases | `/services/export-handholding` + 6 phase pages | `ProcessFlow` (renders a source flow-chart as a native step diagram), `StepList` |
| **M5** | China + Canton Fair | `/china-import-sourcing`, `/china-import-sourcing/canton-fair` | Reuses `EvidenceBlock`; `CategoryGrid` for Canton Fair's Phase 1–3 breakdown |
| **M6** | Customs + Clearance + Logistics | `/services/licensed-customs-broker`, `/services/export-import-clearance`, `/services/freight-forwarding-logistics` | `WorkflowDiagram`, `DataTable` (for the 8-segment logistics table) |
| **M7** | Insurance | `/services/msme-insurance` | Reuses `DataTable` (Credit-vs-Political-Risk, Forfaiting-vs-Factoring) |
| **M8** | DGFT / Customs schemes | `/services/moowr`, `/services/advance-authorisation`, `/services/epcg` | `SchemeComparisonTable`, `WorkedExample` (renders the ₹-figure examples) |
| **M9** | Zone & operator schemes | `/services/sez`, `/services/ftwz`, `/services/eou`, `/services/aeo` | Reuses `SchemeComparisonTable`; `TierTable` (AEO's T1/T2/T3/LO categories) |
| **M10** | Individual & digital export | `/services/nri-baggage-clearance`, `/services/postal-export`, `/services/e-commerce-export` | `AllowanceTable` (rule-heavy reference tables — must stay highly readable per §5's design note) |
| **M11** | RIIT / Courses / Events / Media | `/riit`, `/riit/courses`, `/riit/training-events`, `/media` | `Timeline` (chronological event gallery), `CourseList`; reuses `EvidenceBlock` |
| **M12** | Contact + cross-linking | `/contact` | Wires the full internal-link graph from §13 across every page built so far |
| **M13** | Full SEO/source/visual audit | none new | Independent Source Guardian re-run across all 32 pages; Design Critic pass on the new page templates; full sitemap/robots/structured-data validation |
| **M14** | Deployment readiness | none new | Only module where a hosted preview is in scope |

## Sequencing notes

- **M2B before M3**: the nav/breadcrumb shell needs to exist before any content page, so every subsequent module isn't retrofitting navigation.
- **M4 is the largest module** (7 routes) — it's sequenced early because Export Handholding is explicitly the company's stated "core strength" and the highest-priority gap identified back in M0.5's original audit.
- **M6–M10 are ordered by source page order**, not arbitrarily — this keeps each module's Source Guardian pass scoped to a contiguous, easy-to-verify page range (pp. 27–67).
- **M11 is deliberately late**: it's the largest content volume (pp. 67–85) but the least structurally complex (mostly a captioned gallery + two course lists), so sequencing it after the scheme pages means the harder page-template design work is already solved and can be reused.
- **No module builds ahead of its dependencies**: e.g., M4's phase pages link to `/services/msme-insurance` (M7) and `/services/export-import-clearance` (M6) per the linking graph — those links are added retroactively in M12, not left broken in the interim.
- **This module (M2A) is not itself in the table** — it produced only architecture/planning artifacts and the technical SEO foundation (`robots.js`, `sitemap.js`, `metadataBase`, `Breadcrumb.jsx`, homepage JSON-LD), no new content pages.

## Explicitly out of scope for every module above

- No individual page per RIIT training event (~20 avoided — consolidated into M11's single `/riit/training-events`).
- No individual page per course topic (21+12 avoided — consolidated into M11's single `/riit/courses`).
- No `/media/[slug]` per article (2 avoided — consolidated into M11's single `/media`).
- No deployment before M14.

# PORTMATRIX Homepage — Source Alignment Contract (M1.3)

This is the acceptance contract for the M1.3 design overhaul. It was built from two independent read-only verification passes (Source Guardian — content vs. `docs/source/PORTMATRIX_SOURCE_TEXT.txt`; Image Curator — images vs. `docs/PORTMATRIX_IMAGE_MAP.md`/`PORTMATRIX_ASSET_MANIFEST.md`) plus my own direct visual inspection of the actual PDF pages performed in M0.6. No design work proceeds until every row here is settled.

**Important methodological note surfaced by this pass:** the Source Guardian agent had text-only access to the source (it cannot see the PDF's embedded images). Three of its four "MISMATCH" findings — the MD's title, the delegation photo's month, and the certificate's date — are not fabrications. They are facts printed **inside the source photographs themselves** (a signature graphic, a caption baked into a photo, a certificate letterhead), which I visually confirmed page-by-page during the M0.6 image extraction pass. This contract documents that provenance explicitly so it is never mistaken for an error again. One finding (the dropped "EXIM" in the tagline, and the dropped "without payment of duty" clause) is a genuine, real compression error, corrected below.

---

## Section: Hero

| Field | Value |
|---|---|
| PDF source page(s) | p.3 (About Us) |
| Required facts | "Customs Broking and End-to-End Export Handholding"; core-strength definition (product selection → HS Code → export policy → market ID → documentation → compliance → clearance → logistics → proceeds realisation) |
| Required terms/names/dates | None |
| Full source text location | `PORTMATRIX_SOURCE_TEXT.txt` lines 3–16 |
| Homepage shortened copy | `HERO.heading` / `HERO.body` — verbatim/near-verbatim, no meaning change |
| Associated source image(s) | `customs/hotel-supplies-inspection-netherlands-2024.png` (main); `china/founder-hong-kong-delegation-1974.png` (inset) |
| Source image caption | "Product inspection of Hotel supplies shipment to Netherlands in 2024" (p.30); "Indian Business Delegation to Hong Kong in May 1974" — **this exact month is printed on the photograph itself**, confirmed by direct visual inspection of PDF p.20 in M0.6 (the surrounding paragraph text only says "in 1974"; the month comes from the image's own caption graphic) |
| Image file path | `public/images/source/customs/hotel-supplies-inspection-netherlands-2024.png`; `public/images/source/china/founder-hong-kong-delegation-1974.png` |
| Placement rule | Main photo = general operational proof (not China-specific), acceptable as a company-wide credibility image since it is the strongest genuine, undated-controversy-free operational photo available; heritage inset stays paired with 1974 |
| Omitted detail reserved for future page | Full company history timeline → future `/about` |
| CLIENT_CONFIRMATION_REQUIRED | None |

## Section: Trust band

| Field | Value |
|---|---|
| PDF source page(s) | pp.3–4, 27 |
| Required facts | Licensed since 1996; China/Hong Kong link since 1974; Pan-India network; RIIT government training partnership |
| Required terms/names/dates | 1996, 1974 |
| Full source text location | lines 37–39 (1996); line 619 (1974); line 838 (Pan-India network) |
| Homepage shortened copy | `TRUST_FACTS`, `TRUST_BADGES` — exact figures, faithful paraphrase of the network claim |
| Associated source image(s) | None (text-only band by design) |
| Placement rule | No fabricated counters; no image required here |
| CLIENT_CONFIRMATION_REQUIRED | None |

## Section: About + MD

| Field | Value |
|---|---|
| PDF source page(s) | pp.3–4 |
| Required facts | Name, title, 6 qualifications, 1996 since-date, 9 countries, SBI risk-mitigation role, 5 training-partner bodies |
| Required terms/names/dates | "Rahim Iyaz"; "M.Com, MBA, M.Phil., PGDIBO, PPIBAMI (IIFT), CBLR F-Card"; Maldives, Singapore, China, Hong Kong, Malaysia, Thailand, UAE, Saudi Arabia, Sri Lanka; "State Bank of India"; Govt. of India-MSME, EDII-TN, TNAPEx, FIEO, Alagappa University |
| Full source text location | lines 34–46 |
| Homepage shortened copy | `MD` object — all fields EXACT or faithfully shortened (one qualifier dropped: "India's largest banking group" before State Bank of India — acceptable compression, fact intact) |
| MD title — **"Customs Law Practitioner"** | **Sourced from the PDF's own signature/title graphic under the MD's name, visible on PDF pages 4, 60, and repeated across multiple event-flyer images (pp.67, 78–81) — confirmed by direct visual inspection in M0.6. Not present in the plain-text layer, which is why a text-only check cannot find it. Documenting this provenance in code now.** |
| Associated source image(s) | `md/rahim-iyaz-portrait.png` |
| Source image caption | Studio portrait, PDF p.4 |
| Image file path | `public/images/source/md/rahim-iyaz-portrait.png` |
| Placement rule | Must be the actual MD-profile portrait (p.4), never substituted with an event photo |
| Omitted detail reserved for future page | None — MD profile is fully represented |
| CLIENT_CONFIRMATION_REQUIRED | None |

**Action:** add a code comment documenting the image-based provenance of `MD.title`. No content change.

## Section: 17 Core Services

| Field | Value |
|---|---|
| PDF source page(s) | pp.4–7 |
| Required facts | All 17 service names, in source order, with a faithful one-line description each |
| Full source text location | lines 52–151 |
| Homepage shortened copy | `SERVICES` array — 12 of 17 near-verbatim, 5 faithfully shortened. **One compression drops a material qualifier**: service #15 (NRI Baggage Clearance) omits "without payment of duty" from the source's "...proper declaration of their baggage clearance in India; **without payment of duty** as per The Baggage Rules, 2026." |
| Placement rule | Source order preserved (1–17); featured 6 = services #1–6 exactly as source-numbered, matching the M1.3 brief's own featured list |
| Omitted detail reserved for future page | Full sub-detail for schemes (EPCG worked example, SEZ/FTWZ comparison tables, NRI Baggage allowance tables, etc.) → future `/services/[slug]` pages |
| CLIENT_CONFIRMATION_REQUIRED | None |

**Action:** restore "without payment of duty" to service #15's description.

## Section: Export Handholding (6 phases)

| Field | Value |
|---|---|
| PDF source page(s) | pp.7–16 |
| Required facts | 6 phase names, in order, each with its full sub-step list |
| Full source text location | lines 154–502 |
| Homepage shortened copy | `EXPORT_HANDHOLDING_PHASES` — **all 6 phase titles and all 44 sub-step titles are EXACT matches**, correct order, correct count (44, not 45 — the source itself totals 9+7+8+7+7+6=44; this was a miscount in the audit brief, not in the code) |
| Placement rule | Show a curated subset of steps per phase on the homepage (not all 44 at once); full list available, not fabricated |
| Omitted detail reserved for future page | None omitted from data — only display density changes |
| CLIENT_CONFIRMATION_REQUIRED | None |

## Section: China Sourcing / Heritage

| Field | Value |
|---|---|
| PDF source page(s) | pp.19–24 |
| Required facts | Founder Mr. M.A. Izzadeen, Hong Kong, Gem Stones trading, 1974, "more than 5 decades"; 7 service points; "30% – 40% minimum" cost-reduction figure |
| Full source text location | lines 588–663 |
| Homepage shortened copy | `CHINA` object — history paragraph EXACT, 7 points EXACT, cost note faithfully merged from two source sentences with the exact figure preserved |
| Associated source image(s) | `china/founder-hong-kong-delegation-1974.png` (heritage); `china/rahim-iyaz-china-factory-2015.png` (sourcing/factory); `china/azeez-usa-clients-canton-fair-2025.png` (Canton Fair) |
| Source image caption | 1974 delegation photo's own printed caption reads "Indian Business Delegation to Hong Kong in **May** 1974" (image-embedded, PDF p.20 — see Hero section note above for provenance); "Our MD Mr.Rahim Iyaz in a China factory visit in 2015" (p.21); "Our China Incharge Mr.Azeez with our USA Clients at Canton Fair, 2025" (p.23) |
| Image file path | `public/images/source/china/*.png` |
| Placement rule | **Strict pairing enforced**: 1974 photo = heritage only; 2015 factory photo = sourcing/factory only; Canton Fair photo = Canton Fair only. No cross-mixing. |
| Omitted detail reserved for future page | Canton Fair category breakdown (Phases 1–3, dozens of product categories); the separate "Minimum 30% profit guaranteed on purchase" claim (p.805) — a distinct claim from the cost-reduction one already used, not restated to avoid conflating two different figures → future `/china-sourcing` page |
| CLIENT_CONFIRMATION_REQUIRED | None |

**Action:** add a code comment documenting that "May 1974" comes from the image's own printed caption, not the surrounding text.

## Section: Operational Proof (Customs / EXIM Clearance / Freight)

| Field | Value |
|---|---|
| PDF source page(s) | pp.28–34 |
| Required facts | Documentary compliance framing; genuine cargo evidence |
| Full source text location | lines 863–872, 1012–1022 |
| Homepage shortened copy | `OPERATIONAL_PROOF` — faithful |
| Associated source image(s) | `customs/hotel-supplies-inspection-netherlands-2024.png` (p.30, compliance/inspection context); `customs/export-shipment-inspection-usa-2025.png` (pp.31–32, export-workflow context) |
| Placement rule | Netherlands photo stays tied to the compliance/inspection narrative; USA photo stays tied to the export-workflow narrative — both already correctly placed |
| CLIENT_CONFIRMATION_REQUIRED | None |

## Section: RIIT / Institutional Credibility

| Field | Value |
|---|---|
| PDF source page(s) | pp.16–19, 67–77 |
| Required facts | RIIT intro naming all 6 partners: Central & State Govt. Ministry of MSME, EDII-TN, TNAPEx, India Post, FIEO, Alagappa University |
| Full source text location | lines 20–23, 510–512 |
| Homepage shortened copy | `RIIT.intro` — faithful merge of two source sentences, all 6 partners named exactly. Source also calls RIIT an "Academic Centre of Excellence in International Trade" (lines 22–23) — not currently reflected; optional restoration, not required |
| Associated source image(s) — CURRENT | RIIT inauguration (p.68); Alagappa MoU (p.77); Deputy DGFT session (p.72); Certificate of Appreciation (p.69); Agriculture training/EDII-TN (p.75); EIA session (p.74) |
| **Gap identified** | **FIEO is explicitly named as a training partner in `RIIT.intro`, but none of the 3 available genuine FIEO photos (pp.69–71) are used anywhere on the homepage — a real evidentiary gap for a partner named in the copy itself.** |
| **Layout observation** | The Alagappa MoU photo is the single asset rated **HIGHEST** priority in `PORTMATRIX_ASSET_MANIFEST.md` ("flagship institutional-credibility image") yet currently sits in the small secondary grid, not the featured slot. |
| Image file path | `public/images/source/riit/*.png`, `public/images/source/events/alagappa-university-mou-2022-10-31.png`, `public/images/source/credentials/*.png` |
| Placement rule | Every photo stays paired with its actual captioned event; do not create a random masonry gallery |
| Omitted detail reserved for future page | Remaining ~13 genuine RIIT/event photos (India Post training, ECGC/FSSAI sessions, college seminars, Indo-UAE forum, etc.) → future `/riit` and `/about` pages |
| CLIENT_CONFIRMATION_REQUIRED | None |

**Action (design-permitted correction, not a content change):** swap the EIA session photo (the one image not tied to a partner named in `RIIT.intro`'s own text) for the FIEO training photo, and give the Alagappa MoU a co-featured position alongside the RIIT inauguration photo, so the two highest-value institutional images both get prominent treatment.

## Section: Media / Press

| Field | Value |
|---|---|
| PDF source page(s) | pp.83–84 |
| Required facts | Nanayam Vikatan feature, 4 Feb 2024; YouTube interview link |
| Homepage shortened copy | `MEDIA` object — EXACT |
| CLIENT_CONFIRMATION_REQUIRED | None |

## Section: Contact / Footer / CIN

| Field | Value |
|---|---|
| PDF source page(s) | p.87 (contact block); p.86 (registered-office graphic, CIN) |
| Required facts | Company name, full address (incl. "North Beach Road"), phone, website, email-as-published |
| Full source text location | lines 2766–2780 |
| Homepage shortened copy | `CONTACT` object — EXACT on every field |
| CIN — **U52290TN2026PTC193185** | **Not present in the text layer at all (confirmed by grep across all 2,785 lines). Sourced from direct visual reading of the registered-office graphic on PDF p.86 during M0.6 — already disclosed via code comment. Independently reconfirmed as image-only provenance in this pass; no change needed.** |
| **Tagline gap identified** | The source's own **emphasized company tagline**, printed in bold on p.3: *"PORTMATRIX— Excellence in EXIM Compliance."* — is materially different from "Excellence in Compliance" (which is the text baked into the **official logo image itself**, confirmed by direct visual inspection of PDF p.1 in M0.6). Both strings are genuinely present in the source, in two different places, for two different purposes. The homepage currently only ever shows the shorter logo-image version and never surfaces the longer mission-statement version anywhere. |
| CLIENT_CONFIRMATION_REQUIRED | Email (`md.portmatrix.in`, no "@") — unresolved, as established in M1/M1.1/M1.2. Do not guess. |

**Action:** the logo's own baked-in text ("Excellence in Compliance") must stay exactly as-is wherever the logo image is displayed — it cannot be edited, it's pixels. Separately, restore the source's own bold mission tagline ("PORTMATRIX— Excellence in EXIM Compliance.") as an exact quote in the About section, since it is currently omitted everywhere despite being an emphasized, quoted source statement.

---

## Summary of corrections authorized by this contract before/during the M1.3 design pass

1. Add code-comment provenance notes for 3 image-sourced facts (MD title, "May 1974", certificate date) — no factual change, documentation only.
2. Restore "without payment of duty" to Service #15 description.
3. Add the source's own exact mission tagline "PORTMATRIX— Excellence in EXIM Compliance." to the About section (currently omitted entirely).
4. Optionally add "Academic Centre of Excellence in International Trade" framing to `RIIT.intro`.
5. Swap the RIIT gallery's EIA-session photo for the FIEO training photo, to cover a named-but-unrepresented partner.
6. Give the Alagappa University MoU photo a co-featured (not secondary-grid) position in the RIIT section, matching its HIGHEST manifest rating.

No other content changes are authorized. All 17 service names, all 6 phase names, all dates, all institutional names, all figures, and the CLIENT_CONFIRMATION_REQUIRED items remain exactly as they are.

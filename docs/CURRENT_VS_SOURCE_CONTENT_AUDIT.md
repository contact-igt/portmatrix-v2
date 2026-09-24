# PORTMATRIX — Current Website vs. Approved Source: Content Audit

Compares the live homepage (`app/page.jsx` and its component tree, as documented in [PORTMATRIX_AUDIT_REPORT.md](../PORTMATRIX_AUDIT_REPORT.md)) against `docs/source/PORTMATRIX_SOURCE_TEXT.txt` (extraction of the approved 87-page PDF).

**Nothing is fixed in this document — it is a classification pass only**, per the task instructions. Status values:

- **EXACT** — wording/fact matches the source (allowing for trivial punctuation)
- **PARTIAL** — the fact is directionally correct but incomplete, rounded, or missing sub-detail present in the source
- **PARAPHRASED** — the current site expresses a source idea in materially different wording, framing, or emphasis
- **UNSUPPORTED** — the current site states something (a figure, a claim, a piece of UI behavior) that is not found in, or not derivable from, the source
- **MISSING_FROM_WEBSITE** — the source contains this content and the current website has no equivalent at all

---

## 1. Hero wording (`components/Hero.jsx`)

| Current site text | Status | Detail |
|---|---|---|
| Headline: "Move cargo across borders, without the friction" | **PARAPHRASED** | Not present in the source in any form. More importantly, it **frames PORTMATRIX around cargo movement/customs clearance**, while the source's own About Us section states the company's core strength is **"Export Handholding"** — a broader, more consultative positioning (registration → market ID → documentation → compliance → clearance → logistics → payment realisation) than "moving cargo." This is a strategic-framing mismatch, not just a wording one. |
| Subcopy: "PORTMATRIX handles end-to-end customs clearance for exporters, importers and vessel agents — with the accuracy, speed and transparency that complex EXIM compliance demands." | **PARAPHRASED** | "Accuracy, speed, transparency" loosely echoes source concepts ("utmost speed and efficiency," "utmost transparency," "due diligence to ascertain the correctness") but recombines them into new sentence-level phrasing not found verbatim in the source. "Vessel agents" as a named audience does not appear in the source. |
| Compliance-partner strip: ICEGATE, DGFT, FSSAI, BIS, CDSCO, Plant Quarantine, RBI/FEMA, GST/IEC | **EXACT/PARTIAL** | All 8 items are genuinely named in the source (p. 28–29, "Compliance & Regulations" list: FSSAI, BIS, CDSCO, Plant Quarantine, RBI/FEMA; ICEGATE and DGFT appear throughout; GST/IEC appears in Phase 1). Faithful selection, though it's a curated subset, not a quoted list from one place in the source. |
| Badge: "Govt. Licensed Customs Broker · Since 1996" | **EXACT** | Matches source: "Government Licensed Customs Broker, having a vintage experience in the foreign trade since 1996" (p. 3–4). |

## 2. TrustBar statistics (`components/TrustBar.jsx`)

| Stat shown | Status | Detail |
|---|---|---|
| "1996 — Licensed broker since" | **EXACT** | Matches source directly (p. 3–4). |
| "1974 — China trade roots from" | **EXACT** | Matches source: "Our late Founder Mr. M.A. Izzadeen had started his Gem Stones trading in Hong Kong during the year 1974" (p. 20). Note: current site states this as an abstract fact with no founder name — see Section 5 below. |
| "40% — Avg. China cost saved" | **PARTIAL** | Source states "reduce your purchase cost by 30% – 40% minimum" (p. 21) — a range with a floor, not a flat "40% average." The current site's simplification changes the claim's meaning (a guaranteed-minimum range becomes an "average" figure). |
| "100% — Pan-India clearance" | **UNSUPPORTED** | No "100%" figure appears in the source. The source does support the underlying concept — "We clear your goods in all Customs Stations across India; with our Pan India network" (p. 27) — but the specific "100%" statistic is the current site's own invention, not a sourced number. |
| Credential marquee (10 items: "Customs Brokers Regulations 2018," "ICEGATE e-filing," "HS Code classification," "DGFT consultancy," "MOOWR · Section 65," "SEZ & FTWZ registration," "Advance Authorisation · EPCG," "RoDTEP · Duty Drawback," "China sourcing since 1974") | **EXACT/PARTIAL** | Each individual term is genuinely sourced (CBLR 2018 on p. 27, ICEGATE throughout, MOOWR/Section 65 on p. 39–41, etc.). The marquee is a faithful, if compressed, selection of real regulatory terms — no fabricated terminology found here. |

## 3. "Live Clearance" demo (`components/ClearanceTracker.jsx`)

| Element | Status | Detail |
|---|---|---|
| 6-stage Import workflow (Documents received → BOE filed → Duty assessed → Examination → Out of Charge → Delivered) | **PARTIAL** | Closely mirrors the source's real "Our Import Workflow Process" (p. 31): receive documents → file Bill of Entry → calculate duties → coordinate inspection → advise duty payment → Out of Charge → arrange transport. The *sequence and substance* are faithfully adapted; only the exact stage-title wording differs. |
| 6-stage Export workflow (Export docs collected → Shipping Bill filed → Scheme verified → Examination → LEO granted → Vessel departed) | **PARTIAL** | Mirrors the source's real "Our Export Workflow Process" (p. 31–32) reasonably closely, though the source's actual list has more steps (11) than the simplified 6 shown. |
| China Sourcing 6-stage flow (Supplier sourced → Price negotiated → Factory inspection → FCL/LCL booked → Customs cleared → Door delivered) | **PARTIAL** | Reasonably faithful compression of the real China-sourcing process described across pp. 21–24 (sourcing, negotiation with 30–40% cost reduction, factory inspection, FCL/LCL, customs clearance, door delivery). |
| Fake shipment reference numbers: `BOE-IN-4827193`, `SB-EX-9051482`, `CN-SRC-2024-118` | **UNSUPPORTED** | Not in the source and not derivable from it — these are fabricated identifiers presented as if they were real reference numbers. |
| "Live clearance" pulsing badge, auto-advancing progress bar, ETA labels ("2 days," "On schedule") | **UNSUPPORTED** | The word "live" and the implication of a real-time tracked shipment is not supported anywhere in the source. This is a **simulated demo presented with live-tracking visual language** — a trust-risk (not just a content-accuracy issue) worth flagging on its own: a visitor could reasonably believe this reflects an actual, currently-in-transit shipment. |

## 4. Six current service cards vs. 17 approved Core Services

| Current card (`components/Services.jsx`) | Source mapping | Status |
|---|---|---|
| "Customs Clearance" | Source #4 "Licensed Customs Broker" (pp. 27–28) | **PARTIAL** — summary only; source's regulatory citation (CBLR 2018, Reg. 2(d)) and 6-point "How We Work" list are absent |
| "Export–Import Clearance" | Source #5 "Export-Import Clearance" (pp. 28–32) | **PARTIAL** — summary only; the source's much larger detail (11 duty types, 7-part breakdown, full workflow lists) is absent |
| "China Import Sourcing" | Source #3 "China Import Sourcing" (pp. 19–30) | **PARTIAL** — summary only; founder history, named staff (Mr. Azeez), and Canton Fair detail are absent |
| "MOOWR Warehousing" | Source #8 "MOOWR" (pp. 39–42) | **PARTIAL** — one-sentence summary only; comparison table and eligibility detail absent |
| "DGFT Consultancy" (bundles Advance Authorisation, EPCG, RoDTEP) | Source #9 "Advance Authorisation Scheme" (pp. 42–45) + Source #10 "EPCG" (pp. 45–47), each independently detailed sections in the source | **PARAPHRASED** — the source treats these as two separate, fully detailed Core Services; the current site collapses them into one generic card with no scheme-specific detail (no worked ₹-example, no flow charts) |
| "SEZ & FTWZ Registration" | Source #11 "SEZ" (pp. 48–49) + Source #12 "FTWZ" (pp. 50–53), each independently detailed | **PARAPHRASED** — same pattern: two distinct, fully detailed source services bundled into one summary card |
| *(no card)* | Source #1 "MSME Export Handholding" — **the source's stated core strength** | **MISSING_FROM_WEBSITE** |
| *(no card)* | Source #2 "Export Training - Research - Consultancy" (RIIT) | **MISSING_FROM_WEBSITE** (only a dead "RIIT Training" footer link exists) |
| *(no card)* | Source #6 "Freight Forwarding & Logistics" | **MISSING_FROM_WEBSITE** |
| *(no card)* | Source #7 "MSME Insurance Package" | **MISSING_FROM_WEBSITE** |
| *(no card)* | Source #13 "EOU" | **MISSING_FROM_WEBSITE** |
| *(no card)* | Source #14 "AEO" | **MISSING_FROM_WEBSITE** |
| *(no card)* | Source #15 "NRI Baggage Clearance" | **MISSING_FROM_WEBSITE** |
| *(no card)* | Source #16 "Postal Export Aggregator" | **MISSING_FROM_WEBSITE** |
| *(no card)* | Source #17 "E-Commerce Export" | **MISSING_FROM_WEBSITE** |

**Net: 6 of 17 approved Core Services have any website presence at all, and even those 6 are summary-only. 11 of 17 are entirely absent.**

## 5. China sourcing claims (`components/ChinaSourcing.jsx`)

| Current site text | Status | Detail |
|---|---|---|
| "Our trade link to China dates back to 1974." | **PARTIAL** | True per source, but omits the founder's name and the specific origin story: "Our late Founder Mr. M.A. Izzadeen had started his Gem Stones trading in Hong Kong during the year 1974" (p. 20), including the 1974 Kayalpattinam-to-Hong-Kong delegation photo. |
| "5 decades of trade with Hong Kong & China — from gemstones in 1974 to full-scale sourcing today." | **EXACT/PARTIAL** | The "gemstones" detail is genuinely sourced (matches "Gem Stones trading" in the founder history) — this is actually one of the more faithful lines on the current site, though it still doesn't name the founder. |
| "Permanent Chinese-speaking staff", "Factory inspection & QC", "FCL & LCL delivery", "Canton Fair support" (4 point cards) | **EXACT/PARTIAL** | All 4 concepts are genuinely sourced (p. 20–21 bullet list: "Permanent Chinese speaking staff," "Factory inspection," "Hassle free FCL / LCL cargo delivery," "Canton Fair arrangements," "China visa and ticketing"). Faithful selection. |
| "reduce your purchase cost by 30-40%" (implied via TrustBar's "40%") | **PARTIAL** | See Section 2 above — source says "30% – 40% minimum," a floor not an average. |
| *(no equivalent)* | Canton Fair category breakdown (Phases 1–3, dozens of named product categories, pp. 25–26) | **MISSING_FROM_WEBSITE** |
| *(no equivalent)* | Named staff: China Incharge Mr. Azeez (p. 25) | **MISSING_FROM_WEBSITE** |
| *(no equivalent)* | Founder Mr. M.A. Izzadeen, 1974 Hong Kong delegation photo | **MISSING_FROM_WEBSITE** |

## 6. MD credentials/history (`components/WhyChooseUs.jsx`)

| Current site text | Status | Detail |
|---|---|---|
| "Government Licensed Customs Broker · M.Com, MBA, M.Phil · PGDIBO" | **PARTIAL** | Source lists 6 credentials: **M.Com, MBA, M.Phil., PGDIBO, PPIBAMI (IIFT), CBLR F-Card** (p. 3–4). Current site includes only 4 of 6 — missing **PPIBAMI (IIFT)** and **CBLR F-Card**. |
| "Vintage foreign-trade experience since 1996 across the Maldives, Singapore, China, Hong Kong, UAE, Saudi Arabia and Sri Lanka" | **PARTIAL** | Source lists **9** countries: "Republic of Maldives, Singapore, China, Hong Kong, **Malaysia, Thailand**, UAE, Saudi Arabia and Sri Lanka" (p. 3–4). Current site's list of 7 is missing **Malaysia** and **Thailand**. |
| "an authorised export-training resource person for MSME, FIEO, EDII-TN and TNAPEx" | **PARTIAL** | Source adds a 5th body: "**Alagappa University**" (p. 3–4, and reinforced by the MoU on p. 76). Current site's list of 4 omits it. |
| *(no equivalent)* | "Having worked with India's largest banking group **State Bank of India** in Risk Mitigation Management" (p. 3–4) | **MISSING_FROM_WEBSITE** — a notable credibility point (major-bank pedigree) entirely absent |
| *(no equivalent)* | MD's named appearances in ~15 dated institutional photos (FIEO, DGFT, MSME-DFO, Alagappa MoU, etc., pp. 67–83) | **MISSING_FROM_WEBSITE** |

## 7. Contact information — ⚠ discrepancies found, **not resolved here**

The task instructs: do not resolve these; flag for client confirmation only.

| Field | Current website (`components/ContactCTA.jsx`, `Header.jsx`, `Footer.jsx`) | Approved source (p. 87) | Status |
|---|---|---|---|
| Primary phone | **+91 44 4851 7879** (landline, shown in Header, ContactCTA, Footer — the most prominent number on the site) | **Not present anywhere in the source's contact block or anywhere else in the 87-page text.** Source's only listed contact number is "+91 935 935 2345 / 95857 90909" | `CLIENT_CONFIRMATION_REQUIRED` — the site's single most prominent phone number has no basis in the source document at all |
| Secondary phone | +91 935 935 2345 · 95857 90909 (shown, but secondary to the landline) | +91 935 935 2345 / 95857 90909 | **EXACT** match to source, but the current site treats it as secondary rather than primary |
| Email | **info@portmatrix.in** | **"md.portmatrix.in"** (source text as extracted — no `@` symbol; not a well-formed email address as written) | `CLIENT_CONFIRMATION_REQUIRED` — source's own text may contain a typo (missing `@`, e.g. intended as `md@portmatrix.in`), or the intended address may genuinely differ from the current site's `info@portmatrix.in`. **Do not invent or auto-correct this — confirm with the client which is correct.** |
| Website | www.portmatrix.in | www.portmatrix.in | **EXACT** |
| Address | "Wavoo Mansion Annex, No. 105-B, I Floor, 58/39 Rajaji Salai, Chennai 600 001, Tamil Nadu" | "Wavoo Mansion Annex - 105-B - I Floor, No. 58/39, Rajaji Salai **North Beach Road**, Chennai: 600 001, Tamil Nadu, India." | **PARTIAL** — same building/unit/pincode, but the source includes "North Beach Road" as an additional street-name qualifier that the current site omits. Low risk, but worth aligning exactly since this is a physical business address used for trust/legitimacy. |

**Summary — items marked `CLIENT_CONFIRMATION_REQUIRED`:**
1. Whether `+91 44 4851 7879` is a real, currently-active PORTMATRIX number that should be retained (it has zero support in the source document), or should be dropped in favor of the source's `+91 935 935 2345 / 95857 90909`.
2. Whether the correct email is `info@portmatrix.in` (current site) or something derived from `md.portmatrix.in` (source) — and if the latter, what the intended address actually is (the source string is not a valid email as written).

## 8. Footer content (`components/Footer.jsx`)

| Element | Status | Detail |
|---|---|---|
| "Services" column (6 links: Customs Clearance, Export–Import, China Sourcing, MOOWR Warehousing, DGFT Consultancy, SEZ & FTWZ) | **PARTIAL** | Mirrors the same 6-of-17 subset as the homepage Services section — same gap as Section 4 above. |
| "Company" column (About PORTMATRIX, Our MD, RIIT Training, Canton Fair, Contact) | **PARTIAL** | Each of these topics is genuinely covered in the source (About, MD Profile, RIIT, Canton Fair) — but all 5 links currently point to `href="#"` (dead), so today there is no content behind any of them regardless of source fidelity. See [PORTMATRIX_AUDIT_REPORT.md](../PORTMATRIX_AUDIT_REPORT.md) finding #3. |
| Tagline: "Excellence in Compliance" | **PARTIAL** | Source's own tagline is **"PORTMATRIX— Excellence in EXIM Compliance"** (p. 3, About Us) — the current site drops "EXIM" from the tagline used sitewide (Header, Footer, `Logo.jsx`, and page `<meta>` title). |
| "PORTMATRIX Logistics Pvt. Ltd. — a Government Licensed Customs Broking company delivering end-to-end EXIM clearance and trade consultancy across India." | **PARAPHRASED** | Reasonable summary, but again frames the company around "customs broking/clearance" rather than the source's stated core strength of "Export Handholding." |
| "Allied: Regional Institute of International Trade (RIIT)" | **EXACT** | Matches source's own framing of RIIT as an "allied concern" (p. 3). |
| Address/phone/email in Reach-us block | Same as Section 7 | Same `CLIENT_CONFIRMATION_REQUIRED` items apply here too, since the footer repeats the landline and `info@portmatrix.in` |

---

## Summary count

| Status | Approx. count across sections audited above |
|---|---|
| EXACT | 8 |
| PARTIAL | 19 |
| PARAPHRASED | 5 |
| UNSUPPORTED | 3 |
| MISSING_FROM_WEBSITE | 11 services + 6 individual facts/assets = 17 |
| CLIENT_CONFIRMATION_REQUIRED | 2 |

(Counts are per distinct claim/fact/element compared above, not per source page — intended as a directional scorecard, not a precise statistic to cite externally.)

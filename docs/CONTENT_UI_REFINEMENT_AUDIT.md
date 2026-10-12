# PORTMATRIX — Content / Image / UI / SEO-AEO Refinement Audit

Read-only audit run on 2026-10-10 against the local build (commit `9c32e42`, 32 routes). Four independent read-only reviewers (Content Architect, Image/Trust Curator, UI/UX Design Critic, SEO/AEO Architect) inspected every route, the rendered pages at 1440/390 (key routes also 1024/768), the source PDF (`docs/source/PORTMATRIX-website-source.pdf`) and the code. This document is their combined, de-duplicated output. **No application file was changed by the audit.**

Legend — content action: **K** KEEP · **S** SIMPLIFY · **E** ELABORATE_FROM_SOURCE · **R** RESTRUCTURE · **X** REMOVE · **C** CLIENT_CONFIRMATION_REQUIRED.
Priority: P0 must fix · P1 high-value · P2 optional polish.
Implementation status is tracked in the **Implementation log** at the end of this file (items marked `[x]` were done).

Rules that governed every recommendation: the PDF is the factual authority but website prose need not be word-for-word; no new numbers, legal claims, benefits, eligibility, examples, credentials or promises; FAQs only where the PDF holds enough to answer accurately (3–6 max, none by default); no FAQPage schema for rich results, no `llms.txt`, no keyword pages or "SEO paragraphs".

---

## 1. Measured baseline

- 32 routes; no horizontal overflow at 390/768/1024 on any route; mobile drawer works (48px rows, dialog role, Escape/focus handling).
- Page height 1440 → 390: `/` 10,273 → 14,210 · `/services` 4,586 → 7,733 · NRI baggage 6,122 → 10,643 · insurance 3,861 → 7,384 · training events 17,763 → 12,853 · courses 3,030 → 5,884.
- 14 service pages share one grammar (uppercase 13px tagline, 64px H1, intro, stack of 28px `.h3` + 3–7 bullets). 10 pages use the same small vertical `ProcessFlow`. 25 pages share `PageIntro` and 24 share `RelatedServices`. 0 of 14 service pages carry a photograph.
- Images: 53 distinct files / ~68 render slots (home 13, `/riit/training-events` 28, rest 27). Recommended after curation: 21 files / 28 slots.
- Share of words rendered under 15px at 1440: training events 87%, media 80%, Canton Fair 48%, home 41%.
- Docs contradict code in three places (see §6 "Doc corrections").

---

## 2. Per-route findings

Format per route: **ISSUE** · **CONTENT** · **IMAGE** · **UI** · **FAQ** · **SEO/AEO** · **SOURCE PDF pp.** · **PRIORITY**.

### `/` (home)
- **ISSUE:** hero body repeats `/about` verbatim; kicker "International Trade exposure since 1996" attributes the MD's personal experience (p.4) to the company; About block repeats the full MD profile and the 10-item scope paragraph; Core Services shows all 17 at length and the 11 secondary items don't link; RIIT intro is one 60-word sentence; ContactCTA duplicates `/contact`; Export Handholding appears three times; 13 images.
- **CONTENT:** Hero K (open with the p.3 defining sentence). Kicker **C** (client-locked wording vs attribution to MD). TrustBar S (short partner list; X the keyword ticker). About R to a 2-sentence summary + MD card + link. Services S to title + one line and R so all 17 link out. Credibility S.
- **IMAGE:** keep MD portrait, 1974 delegation, Netherlands inspection (single), Alagappa MoU, certificate (zoomable). Remove factory, Azeez, USA inspection, RIIT inauguration, DGFT, agri, FIEO, 128px Nanayam tile → 13 → 5 slots.
- **UI:** hero is 736px of text-only; add asymmetric hero with one authentic photo; collapse the repeated phase index; tighter grouped services list; remove 331px dead gap under export-handholding section.
- **FAQ:** none. **SEO/AEO:** hero first sentence verbatim p.3; description ≤155 chars; keyword strip out; Header/Footer out of `<main>`.
- **SRC:** 3, 4, 5–7, 16–17, 19–22, 28, 83–86 · **P1**

### `/about`
- **ISSUE:** H1 is the slogan ("PORTMATRIX— Excellence in EXIM Compliance.") with a missing space, "About" absent; title still duplicates brand; 10-item scope run-on overlaps the INTELLIGENCE bullets; no "who we serve" (p.86 only on `/services`); description near-duplicate of home; portrait duplicates home/profile.
- **CONTENT:** R H1 "About PORTMATRIX" with the slogan as tagline (**C**: p.3 "Excellence in EXIM Compliance" vs V6 strapline "Ease of doing EXIM"). E show the core-strength chain (product selection → … → realisation of proceeds) as ordered steps. R split scope into "Consultancy & compliance" and "EXIM analytics & market intelligence". E add Target Audience + Key Strengths (p.86). S RIIT paragraph to one line + link.
- **IMAGE:** remove portrait card (text link to profile instead).
- **UI:** structured sections; ordered core-strength chain; ruled lists not boxes.
- **FAQ:** none. **SEO/AEO:** `title.absolute`; distinct description; short definition block naming PORTMATRIX Logistics Pvt. Ltd.; in-body links to profile/contact/services.
- **SRC:** 3, 86 · **P0**

### `/about/rahim-iyaz`
- **ISSUE:** thin (≈90 words, no intro); countries repeated as pills; `<dl>` without dt/dd; unlabeled credential line conflicts with p.60 infographic; JSON-LD `jobTitle` "Customs Law Practitioner" is not visible text.
- **CONTENT:** R group into Role / Experience / Training roles; X duplicated country text; E "In the field" strip of source-captioned appearances (China factory 2015 p.21, Canton Fair 2014 p.25, certificate pp.68–69, FIEO 20 Dec 2022 p.70, IAS facilitation p.72, Alagappa MoU p.77, interview/article pp.83–84). **C** qualification string.
- **IMAGE:** keep portrait (hero) and small signature (verify Safari mask).
- **UI:** credential timeline; lists not pills.
- **FAQ:** none. **SEO/AEO:** jobTitle "Managing Director" (visible, p.4); real `<ul>`; `@id` relations; no `sameAs`/`alumniOf`.
- **SRC:** 4, 60 · **P1**

### `/services`
- **ISSUE:** H1 has no intro; 17 identical cards (clearest card wall); Target Audience/Key Strengths/Allied list buried; overview infographic is ~6px text, duplicates the list and has baked phones/email.
- **CONTENT:** E 1–2 line intro with no new facts; R move Target Audience + Key Strengths above Allied Services (as H2s).
- **IMAGE:** remove overview infographic (archive).
- **UI:** indexed ruled list (number, title, one line, arrow) grouped by the two existing groups; drop "Learn more".
- **FAQ:** none. **SEO/AEO:** descriptive title; descriptive link text.
- **SRC:** 2, 5–7, 85–86 · **P1**

### `/services/export-handholding` (hub)
- **ISSUE:** H1 "End-to-End Export Facilitation Process" ≠ nav/title "MSME Export Handholding"; six content-free cards; 626px infographic duplicates the native grid; right 320px empty.
- **CONTENT:** R H1 "MSME Export Handholding" with the process line as subtitle; S intro to the 8 stated activities as bullets; E list each phase's step titles under its node.
- **IMAGE:** remove hero infographic.
- **UI (P0):** numbered 6-node spine connected by a rule with lucide icons (`ClipboardCheck`, `Route`, `Handshake`, `PackageCheck`, `Ship`, `Banknote`) — process-led.
- **FAQ:** What does it cover (pp.5,7)? In what order (pp.7–16)? Which registrations come first (pp.8–9)? How is export permission checked (p.10)?
- **SEO/AEO:** phases as `<ol>`; fix OG block (no og:image today).
- **SRC:** 5, 7–16 · **P0**

### `/services/export-handholding/[phase]` ×6
- **ISSUE:** every page shows content three times (infographic, "Step by step", "Flow"); infographic unreadable on mobile (720px frame scrolling in 338px); 13px step numerals; no lead sentence; descriptions are comma lists.
- **CONTENT:** K steps verbatim; X redundant vertical Flow (compact chip row at most); R Phase 3 into three groups (importing-country rules and terms 1–4; negotiation and credit 5–6; risk and finance 7–8) and Phase 4 into compliance / production / risk-logistics; E one factual lead ("Phase N of 6 … K steps"); K "21 days" and "5 years" exactly. **C** confirm figures as printed.
- **IMAGE:** remove the six infographics.
- **UI (P0):** native numbered rail with 28–32px Manrope numerals; 6-segment phase tracker; prev/next as tracker.
- **FAQ:** Phase 6 only — deadline for shipping documents to the bank (p.15), what e-BRC is (p.16), how long records are kept (p.16). Phase 3 — payment methods LC/AP/DP/DA (p.11), receivable protection (pp.12, 36). Phases 1, 2, 4, 5 none.
- **SEO/AEO:** descriptive H2s ("The 9 steps of …"), sentence-style descriptions, "Export" in titles; link Phase 3 step 7 and Phase 4 step 7 to `/services/msme-insurance`, Phase 2 step 6 to AA/EPCG; **no HowTo schema**.
- **SRC:** 7–9 / 9–10 / 10–12 / 12–13 / 13–15 / 15–16 · **P0**

### `/china-import-sourcing`
- **ISSUE:** "end to end import assistance…" appears 3–4 times; 9 capability cards overlap the 7-point checklist; `.h3` is 28px for both h2 and h3; three undated market statistics; promo line ("Against the myth…") leads instead of a definition.
- **CONTENT:** R three groups (Sourcing · Logistics & customs · Travel & Canton Fair); S merge duplicates; E lead with p.19 definition; K founder history; K "30%–40% minimum" only in context; **C** date/confirm market statistics; keep "1974" qualified as the founder's Hong Kong trade link (CIN is 2026 — **C**).
- **IMAGE:** keep 1974 delegation (lead) + 2015 factory; remove nothing else here.
- **UI:** history/documentary timeline 1974 → expansion → present; 1974 photo as lead at 2/3 width with caption beside; capability titles 18–20px with icons (`Factory`, `Ship`, `Plane`, `Search`).
- **FAQ:** What do you handle end to end (pp.19, 21–22)? Can you ship LCL (pp.20, 22)? Any hidden charges (p.22)? Visa/hotel/translators (p.21)? Who clears goods in India (p.22)?
- **SEO/AEO:** link inline to Customs Broker and Freight; qualify statistics or drop from lead.
- **SRC:** 19–22 · **P1**

### `/china-import-sourcing/canton-fair`
- **ISSUE:** duplicates `/china` package/personalised-services content; "Minimum 30% profit guaranteed on purchase", "Product Replacement Warranty*" (no footnote), "12x7 after sales" are unconfirmed commitments; Canton "Phase 1/2/3" not headings; 13 category groups = text wall; H1 ≠ title; 48% of words <15px.
- **CONTENT:** R blocks: dates & place (April/October, Guangzhou, p.22) · categories by phase · package inclusions (8) · sourcing support; X duplicates; **C hold the guarantee, warranty and 12x7 lines out of public copy until the client confirms**; do not explain "phase" from outside knowledge.
- **IMAGE:** keep 2025 Azeez and 2014 Riaz/Malik; remove 2015 group (low quality 960×540 upscaled) and demote the 2015 booth photo (redundant).
- **UI:** at-a-glance key-fact row, numbered services, photo strip with 14–15px captions.
- **FAQ:** When/where (p.22)? Categories per phase (pp.23–24)? Package inclusions (p.26)? Individuals and groups (p.26)?
- **SEO/AEO (P0):** align H1 with title; Canton Fair phases as H3s; add Related link; claims out of meta/JSON-LD/answers.
- **SRC:** 22–27 · **P0**

### `/services/licensed-customs-broker`
- **ISSUE:** stub (1,735px, one H2); two names for the regulation ("Customs Brokers Regulations, 2018" vs "…Licensing Regulations 2018"); "How We Work?" with a question mark.
- **CONTENT:** R group the 6 bullets (authorisation, coverage, compliance advice, due diligence, speed, cooperation); E "what we file and coordinate" summary linking to clearance (pp.29–30); K regulation text; **C** regulation name. Reg. 2(d) definition as its own H2.
- **IMAGE:** none. **UI:** regulatory layout, credential strip, 2-column responsibilities list with icons.
- **FAQ:** What is a Customs Broker (p.27)? Authorisation obtained first (p.27)? Which stations (p.27)? Which laws do you advise on (p.28)?
- **SEO/AEO:** `areaServed: IN` (p.27 "Pan India"); cross-link NRI baggage.
- **SRC:** 27–28 · **P2**

### `/services/export-import-clearance`
- **ISSUE:** longest operational page (572 words, 66 list items, 7 numbered H2s, 28 rounded elements); 12-item duty list mixes HS classification with levies; 15-step export workflow is one list; two ~700px vertical flows; "OoC" undefined; "For eg" tense.
- **CONTENT:** R separate Classification from Duties and levies; R split export workflow into pre-shipment / shipment / post-shipment (same steps); S tense; drop numerals from headings; **C** "OoC". Lead says this page = what we file; broker page = who we are.
- **IMAGE:** keep Netherlands 2024 and USA 2025 beside the workflows (operational proof). Label legibility on the Netherlands crates → **C** client clearance for the shipper/consignee labels visible at full size.
- **UI:** operational — sticky anchor nav of the stages; horizontal Import | Export stepper at lg; icons `FileText`, `Stamp`, `Calculator`, `ShieldCheck`, `Anchor`, `Truck`.
- **FAQ:** cost of a missing requirement (p.28), documents filed (p.29), duties and taxes (p.29), example import into Chennai (p.31), export steps (p.32).
- **SEO/AEO:** numbering via `<ol>`; auto-link scheme names; workflows as `<ol>`.
- **SRC:** 28–32 · **P1**

### `/services/freight-forwarding-logistics`
- **ISSUE:** 2×9 table with no emphasis; vertical workflow in a side column; Postal/E-Commerce items unlinked; intro repeats the home card; H2 "As a Logistics Coordinator, we support" is a sentence.
- **CONTENT:** R link Postal Export and E-Commerce Export; K table/workflow; **C** current capability for 3PL / 4PL / Cold Chain segments.
- **IMAGE:** none. **UI:** workflow-led horizontal stepper (road/air/sea/rail icons `Truck`, `Plane`, `Ship`, `TrainFront`); Key Documents as a two-column definition list.
- **FAQ:** none. **SEO/AEO:** H2 "Who we support"; real description.
- **SRC:** 32–34 · **P1**

### `/services/msme-insurance`
- **ISSUE:** drops the source's "products available in the market … we facilitate" framing; "Duty Transit Insurance" under liability; 15-item wall; tables at end; 7,384px on mobile.
- **CONTENT:** S restore facilitator framing (lead with "We assure your trade by facilitating MSME Insurance for…", p.35); R move Duty Transit to Cargo & Marine; E "cover by risk" table built only from the definitions.
- **IMAGE:** none. **UI (P0):** category/reference — sticky category index (6 anchors; scroll-snap chips on mobile), product definition rows (ruled list), credit vs political risk and forfaiting vs factoring as side-by-side key-difference panels; category icons only.
- **FAQ:** who is it for (p.35), credit vs political-risk cover (p.36), factoring vs forfaiting (p.37), cover for goods in transit (pp.37–38), cover for stored goods (p.38).
- **SEO/AEO:** heading ids + on-page index; **no** `InsuranceAgency`/`FinancialProduct` schema.
- **SRC:** 35–39 · **P0**

### `/services/moowr`
- **ISSUE:** H1 "MOOWR Warehousing" vs title "MOOWR"; definition is third; legal basis flattened into a paragraph; flow's last step merges both outcomes; serviceIntro orphan; shares one scheme template.
- **CONTENT:** S expand the abbreviation in H1/kicker; R legal basis as bullets (BCD, IGST, SWS, certain additional duties); R "Sell in India" / "Export" as two branches; E "How PORTMATRIX helps" with the exact serviceIntro.
- **IMAGE:** none. **UI (P0):** scheme explainer — key-point strip, horizontal flow as centrepiece, numbered benefits, comparison table (MOOWR column highlighted) right after the intro.
- **FAQ:** what does MOOWR stand for (pp.39–40), export obligation (pp.40–42), when duty is payable (pp.40–41), who can apply (p.41), compliance needed (p.42).
- **SEO/AEO:** title "MOOWR Scheme (Section 65 Warehousing Unit)"; definition first; accessible table.
- **SRC:** 39–42 · **P0**

### `/services/advance-authorisation`
- **ISSUE:** intro and definition near-duplicate; keyFeatures flatten sub-lists; "AA and DFIA on post export" garbled; 10-step flow; "It is a duty exemption scheme…" has no antecedent.
- **CONTENT:** R features into bullet/sub-bullet groups; R flow into three stages (apply · import and make · export and close); K example and "typically around 15%, though it can vary"; **C** "on post export".
- **IMAGE:** none. **UI (P0):** shared scheme-explainer composition.
- **FAQ:** what is AAS (pp.42–43), which inputs (p.43), export obligation (pp.43–44), value-addition requirement (p.43), records and audits (p.44).
- **SEO/AEO:** lead with p.43 definition; link EOU/STP mentions.
- **SRC:** 42–45 · **P0**

### `/services/epcg`
- **ISSUE:** intro/definition/objective repeat; "Applicable for / Supports" flattened; ₹ worked example buried in sidebar at same weight as everything.
- **CONTENT:** R "Who can use it" / "What it covers" bullet groups; K worked example (₹7.50 lakh duty × 6 = ₹45 lakh over 6 years).
- **IMAGE:** none. **UI (P0):** scheme-explainer; worked example as distinct full-width callout.
- **FAQ:** what can be imported (p.46), who can use it (p.46), export-obligation period (p.46), how it is calculated (p.47).
- **SEO/AEO:** title "EPCG Scheme — Zero-Duty Capital Goods Import"; definition first.
- **SRC:** 45–47 · **P0**

### `/services/sez`
- **ISSUE:** three definitions (intro, definition, simple definition); features/objectives/benefits overlap; "Types" list includes FTWZ; bare title "SEZ"; pills; narrow container.
- **CONTENT:** S one definition + the "SEZ = …" line; R merge Features and Benefits and de-duplicate (keep every distinct item); K Mahindra World City and authority line.
- **IMAGE:** none. **UI:** structured regulatory spec table for key facts; Types as chips/tabs; Tamil Nadu example as `MapPin` callout.
- **FAQ:** what is an SEZ (p.48), types (p.49), SEZ vs FTWZ (pp.52–53).
- **SEO/AEO:** title "Special Economic Zone (SEZ) Registration Support".
- **SRC:** 48–49 · **P1**

### `/services/ftwz`
- **ISSUE:** "Value-Added Services" chips include 3 non-services; activities/VAS/features repeat; workflow branch merged; SEZ-vs-FTWZ table at bottom without caption/headers; bare title.
- **CONTENT:** R split Value-added services (5) and Other features (3); S de-duplicate Activities vs VAS; R two-outcome branch; K benefits by audience.
- **IMAGE:** none. **UI:** 3-column "Who benefits" panel (`PackageOpen`, `Ship`, `Globe`); table right after definition.
- **FAQ:** what is it and how it differs from an SEZ (pp.50, 52–53), when duty is paid (pp.50–51), value-added services (p.51), major FTWZ in Tamil Nadu (p.52).
- **SEO/AEO:** title "Free Trade Warehousing Zone (FTWZ)"; table caption + scope.
- **SRC:** 50–53 · **P1**

### `/services/eou`
- **ISSUE:** objectives near-identical to SEZ; three bullet columns look like feature cards; approval process is a lone small vertical flow; bare title.
- **CONTENT:** S trim objectives; K approval process.
- **IMAGE:** none. **UI:** one scannable table/tabs (Objectives / Eligible activities / Benefits); horizontal approval stepper.
- **FAQ:** what is an EOU (p.53), activities (pp.53–54), basic eligibility (p.54), approval steps (p.54), anywhere in India / trading allowed (p.54).
- **SEO/AEO:** title "Export Oriented Unit (EOU) Registration Support"; approval as `<ol>`.
- **SRC:** 53–54 · **P1**

### `/services/aeo`
- **ISSUE:** ~25 benefit bullets in four overlapping lists; garbled intro; best definition ("AEO = Trusted International Trade Partner certified by Customs", p.55) not first; categories table duplicated as cards; pills.
- **CONTENT:** R one benefits block by audience (importers/exporters vs brokers/logistics), keeping distinct items (MRAs, DPD/DPE, bank-guarantee waiver, lower costs); X "Importance" chips (or one line); S intro; K categories table.
- **IMAGE:** none (third-party mark stays out). **UI (P0):** tier ladder — 4 columns with validity as large figure, real `<table>` underneath.
- **FAQ:** categories and validity (p.56), who can apply (p.56), basic eligibility (p.57), how to apply (p.57), what is AEO (p.55).
- **SEO/AEO:** p.55 definition first; table markup.
- **SRC:** 55–57 · **P0**

### `/services/nri-baggage-clearance`
- **ISSUE:** longest service page (≈1,000 words, 6–7 tables, 10,643px on mobile); tables alternate with prose at ~90–100 chars/line; "Mode of Travel" repeated in all five rows (single merged cell on p.59); "NRI" never defined but tables cover residents, tourists, foreigners, crew; Pets/Currency garbled; Annexure-II duplicate items; headline figures same weight as labels; mobile stacks every table into cards.
- **CONTENT:** R index/anchors (Channels · Allowances · Jewellery · Transfer of residence · Other rules); S show mode of travel once; E intro naming the classes covered (p.59); promote Currency to H2; **C** "The Baggage Rules, 2026" (instrument name/year), the Pets sentence, Annexure-II duplicates.
- **IMAGE:** remove the allowance infographic (native tables carry every row; contains a differing credential string).
- **UI (P0):** reference/table-first — sticky "On this page" nav, "Key allowances" strip, new `ReferenceTable` variant (figures in 20–24px bold Manrope, fixed first column, real horizontal scroll with edge fade for >2 columns).
- **FAQ:** general allowance (p.59), Green vs Red channel (p.58), gold jewellery (pp.60–61), cash limits (p.63), transfer-of-residence amounts (p.61), pets (p.63) — choose 4–5.
- **SEO/AEO:** short answer summary; heading ids; client review sign-off for figures; link from broker/clearance/footer.
- **SRC:** 58–63 · **P0**

### `/services/postal-export`
- **ISSUE:** 131 words, infographic that scrolls sideways at 390, repeated `Mail` icon cards, no H2; two placeholder bullets ("List of operational Dak Ghar Niryat Kendras", "Encouragement to register…") with no list; "Aggregator" undefined; "No value limit" / "competitive rates" only inside the image.
- **CONTENT:** R groups What it is / What you need (IEC, GSTIN, bank account, AD Code) / How it works / Benefits; X the two placeholders; E surface infographic claims as text; **C** "Aggregator" status and "No value limit for export".
- **IMAGE:** remove infographic (India Post mark ×4 implies endorsement). **UI:** 4–5 step rail.
- **FAQ:** what is a DNK (pp.6, 64), documents (p.64), benefits (p.64) — only if text survives client check.
- **SEO/AEO:** lead with p.6 sentence; descriptive alt moot once image removed.
- **SRC:** 6, 63–64 · **P2**

### `/services/e-commerce-export`
- **ISSUE:** kicker is a full sentence (wraps); Key Features and Benefits overlap; training-led role (p.65) not explicit; platforms as pills; schemes unlinked.
- **CONTENT:** R shorten kicker and state the training role plainly; S merge overlaps; K requirements/process/platforms.
- **IMAGE:** none. **UI:** platforms as inline list; process flow as lead.
- **FAQ:** what is it (p.65), what is required (p.65), platforms (p.65), steps (p.66).
- **SEO/AEO:** link EPCG/AA/AEO mentions; inbound links from Freight/Postal.
- **SRC:** 64–67 · **P2**

### `/riit`
- **ISSUE:** partner sentence repeated on 7 surfaces; ambiguous phrase "Central and State Governments' Ministry of MSME"; only ≈120 words; two identical bordered link cards; no who/what; H1 omits full name; JSON-LD claims `parentOrganization` (source says "allied concern" only).
- **CONTENT:** E "Who RIIT serves" (entrepreneurs, professionals, students; corporate and MSME employees) and "What it does" (training, research, consultancy); R partners as bullets (**C** ambiguity); E milestones (2 Aug 2020, MoU 31 Oct 2022, inauguration 14 Nov 2023).
- **IMAGE:** keep RIIT logo, inauguration, Alagappa MoU; add certificate (zoomable).
- **UI:** institutional masthead; partners as typographic list; links not cards.
- **FAQ:** none. **SEO/AEO:** H1 "Regional Institute of International Trade (RIIT)"; drop `parentOrganization` unless confirmed; add Export Handholding/Contact to Related.
- **SRC:** 3, 16–19, 67–68, 77 · **P1**

### `/riit/courses`
- **ISSUE:** 12 courses and 21-topic curriculum overlap by ~8; online/physical mode and audience buried; "FMEG" undefined; FTP called "The Act"; `.h3` 28px for course titles; JSON-LD `ItemList` of `Course` is invalid; 5,884px mobile.
- **CONTENT:** R mode + audience as header strip; R group the 21 topics (Laws and policy · Procedures · Pricing, payment and finance · Schemes and channels · Markets and logistics); **C** "FMEG", "Act". **Not in PDF — do not invent:** fees, duration, dates, enrolment, certifying body.
- **IMAGE:** none. **UI:** course titles 18–20px; numbered 3-column syllabus; ruled section instead of box.
- **FAQ:** online or in person (p.84), who should take it (p.85), what the curriculum covers (p.85).
- **SEO/AEO:** title "RIIT Courses and Certificate Programme in International Trade"; replace 12-item ItemList by one `Course` for the Certificate Programme (courseMode Online/Physical, pp.84–85).
- **SRC:** 17–19, 84–85 · **P1**

### `/riit/training-events`
- **ISSUE:** 23 flat H2s, 28 images, 17,763px; right 300–500px of each row blank; month-only events sort before 14 Nov; 87% of words at 13px; no year grouping/jump-nav; dates as `<p>`; 13.05.2026 date format odd; Alagappa caption "HOD" vs source "HOB" silently changed.
- **CONTENT:** R year H2s with event H3s; R group "MSME MDP, Nov 2023"; E 1–2 line intro; **C** 13.05.2026; **C** "HOB"/"HOD" (confirm or restore); fix captions that over-claim (Deputy DGFT photo is a gift handover — use source "is seen along with our MD").
- **IMAGE:** keep all 23 events as text rows; images for ~10: Alagappa MoU, FIEO 2022, FIEO women speaker, MSME-TN officials, RIIT inauguration, certificate (zoom), Deputy DGFT, India Post, Agriculture 2025 (EDII-TN), Loyola photo. Remove 18 slots; demote 2020 flyer and IAS photo to text. Remove MDP 2025 poster photo (shows unrelated entity branding, a GST number, phone numbers and an unsupported price claim).
- **UI (P0):** year-grouped archive — sticky year headers + jump nav, 2-col grid at lg, event title 20px, captions 14–15px.
- **FAQ:** none. **SEO/AEO:** `<time datetime>`; "On this page" index with heading ids; title "RIIT Training Events 2020–2026".
- **SRC:** 67–82 · **P0**

### `/media`
- **ISSUE:** one clipping + one video (44 words, 2,740px); two interview stills duplicate the embedded video with identical alt/caption; "article" is actually a magazine promo card; `VideoObject` without `uploadDate`; no summary.
- **CONTENT:** E one factual lead (interview on YouTube, p.83; Nanayam Vikatan Tamil-magazine article on China imports, 4 Feb 2024, p.84); **C** English summary, interview date/channel, article topic (none are in the PDF).
- **IMAGE:** keep Nanayam scan (zoomable); remove both interview stills visibly (keep one file only for schema thumbnail if retained).
- **UI:** editorial index — lead video then dated ruled list with thumbnail + bibliographic caption.
- **FAQ:** none. **SEO/AEO:** distinct alts; keep VideoObject only if client supplies title/date/channel.
- **SRC:** 83–84 · **P1**

### `/contact`
- **ISSUE:** email `md.portmatrix.in` shown raw like a broken address; only first phone is `tel:`; phone is the least prominent element; Org JSON-LD duplicates home's without `@id`.
- **CONTENT:** K address, phones, website, CIN; **C** email (hide or label until confirmed); **C** whether "+91" applies to the second number before linking it.
- **IMAGE:** none. **UI:** phone-first (28–32px Manrope `tel:`), address with "Get directions", rest as definition list.
- **FAQ:** none. **SEO/AEO:** one Organization `@id` referenced everywhere; labelled "Registered office" / "Phone" sections; keep email out of schema.
- **SRC:** 86–87 · **P1**

---

## 3. Image curation (client prefers fewer images)

All 68 unique source images stay documented; none is deleted from `public/images/source/`. Removed-from-site files are marked `ARCHIVED_NOT_RENDERED` in `docs/FINAL_SOURCE_VISUAL_COVERAGE.md`.

**Must stay (essential trust evidence):** V6 logo · MD portrait · 1974 Hong Kong delegation · China factory 2015 · Canton Fair 2025 and 2014 · Netherlands 2024 and USA 2025 inspections · Alagappa MoU · MSME-DFO Certificate of Appreciation (with zoom) · RIIT inauguration, FIEO 2022, Agriculture 2025 (in context) · Nanayam Vikatan scan on `/media` · RIIT logo.

**Remove from site / archive:** services overview infographic; export-handholding hero infographic; six phase infographics; baggage-allowance infographic; postal-export infographic; both YouTube stills; certificate hand-off photo; 2015 Canton group (low quality) and 2015 booth photo (redundant); FIEO women audience; Postal/FSSAI/ECGC/EIA session photos (same room/banner as the others); MDP 2025 poster photo; 2026 agri session; DG Vaishnav, MEPCO, SIET/JBAS, Dawoodi Bohra, Indo-UAE photos and all event flyers (Loyola, DG Vaishnav, MEPCO, 2020); Shiju Thomas IAS photo (text only).

**Risk flags raised by the curator:** (F1) V6 logo patch over source art with baked-in phone numbers and `md.portmatrix.in`; (F2) "VUNITED Impex Consultants LLP / The Pro Coach" branding visible in five event images — a different entity from PORTMATRIX Logistics Pvt. Ltd.; (F3) third-party logos/people. **C** Netherlands crate labels show shipper/consignee text; **C** whether the 1974 photo is colourised (provenance); **C** EIA slide may read "Assistant Director" vs source "Director"; **C** MD name variants ("Shri. Mohamed Abdur Rahim" on the certificate, "MOHAMED RAHIM" on the FIEO nameplate vs "Rahim Iyaz").

| | Before | After |
|---|---|---|
| Distinct image files rendered | 53 | 21 |
| Render slots | 68 | 28 |
| Home slots | 13 | 5 |
| `/riit/training-events` slots | 28 | 10 |
| Source infographics rendered | 10 | 0 |
| Flyers rendered | 5 | 0 |

---

## 4. Cross-site findings

**Content**
- RIIT partner list defined once as a data constant (appears on 7+ surfaces).
- Hero / `/about` / footer share copy; MD profile on 3 pages; China one-liner 4×; scheme pages state the definition 2–3×.
- Orphan `serviceIntro` ("how PORTMATRIX helps") paragraph on nearly every service page → promote to a "How PORTMATRIX helps" block using the exact existing text. Keep role verbs unchanged (facilitate, guides, assists, supports, advises, trains).
- Source ambiguities needing the client (**C**): email format · MD credential wording p.4 vs p.60 · "Baggage Rules, 2026" · 13.05.2026 · CIN 2026 vs 1974/1996/2020 history · Alagappa HOB/HOD · "Minimum 30% profit guaranteed" vs "30–40% minimum cost reduction" · "Product Replacement Warranty*" · "12x7" · Postal "Aggregator" · "Customs Brokers Regulations" vs "Licensing Regulations" · undefined acronyms (SHI/RHI, MDP, FaME-TN, OoC, HBP/FTRR, FMEG, DFIA — do not expand from outside knowledge) · typos fixed silently ("Excempted", "/f Merchant overtime").

**UI**
1. Heading scale is flat: `.h3` (28px) used for h2 and h3 alike → add a small 18–20px list-item/capability title style.
2. `PageIntro` `max-w-3xl` wastes the right ~37% on 25 pages → optional aside slot.
3. `.kicker` used for sentences up to 74 chars (wraps to 2–3 lines at 390) → reserve for 1–3 words.
4. 13px used for captions/labels/step numbers/mobile table labels → captions 14–15px.
5. Too many boxes (`rounded-xl/2xl` ×17–28 per page) → ruled lists, one callout per page.
6. `ProcessFlow` is one small vertical form for 10 different processes → `orientation`, large-numeral and compact variants.
7. `ComparisonTable`: no sticky first column/highlight/tabular numerals; mobile card duplicate doubles height and DOM text → one responsive semantic table (`<caption>`, `scope="row"`).
8. Source infographics duplicate native content and are unreadable on mobile → removed (see §3).
9. Tap targets: breadcrumb links 20px tall, "Open full size" 16px → ≥44px hit area.
10. No in-page navigation on 6+ H2 pages → small `PageNav`.
11. Page rhythm: all white/paper same container → one tinted band for a worked example/key-fact strip; vary width only when content type changes.
12. Keep: reduced-motion handling, focus-visible rules, one-H1 `PageIntro`, no gradients/backdrop-blur.

**SEO/AEO (verified defects)**
- Header "Services" menu renders on click only → its 17 links are not in server HTML; footer has 6 links only (docs claim otherwise). Add static footer link groups covering services, profile, courses, events, Canton Fair, media.
- Per-page `openGraph` replaces defaults: 17 pages emit homepage `og:url`; 13 lose `og:type/site_name/locale`; hub + 6 phase pages have no `og:image`; all 32 emit homepage Twitter tags → one `buildMetadata` helper.
- `/about` title still `About PORTMATRIX | PORTMATRIX`; `<meta name="keywords">` still shipped; descriptions over 155 chars on Home 206, Services 197, RIIT 224, Events 201, Clearance 188; bare-acronym titles (`MOOWR`, `SEZ`, `FTWZ`, `EOU`, `AEO`).
- Lists faked with `<li>· text</li>`, pills as `<span>`, MD bullets in a `<dl>` without dt/dd, MOOWR benefits as numbered `<div>`s → real `<ul>/<ol>`; no heading ids; Header/Footer nested in `<main>` on home; footer fake `role="heading"` labels.
- Structured data: shared Organization `@id` (+ `alternateName "PortMatrix"`); fix Person `jobTitle`, RIIT `parentOrganization`, Course `ItemList`; `VideoObject` needs a date or goes; skip HowTo/FAQPage/Event/InsuranceAgency. Sitemap: `lastModified: new Date()` stamps every URL with build time; priority/changefreq ignored.
- Performance: hub/phase pages mark a ~1.9 MB infographic `priority` above the text (moot once removed); framer-motion on every route (`LazyMotion` candidate); `html lang="en-IN"`, skip link, branded 404.
- Not recommended: `llms.txt`, keyword-variant pages, FAQPage schema, HowTo, new pages, keywords meta.

---

## 5. Implementation priority

### P0 — must fix
1. **Client sign-off items kept out of public copy:** "Minimum 30% profit guaranteed", "Product Replacement Warranty*", "12x7", the MDP-poster pricing/unrelated-entity imagery, the raw email string, MD credential wording. Hold or label; never resolve unilaterally.
2. **Image curation** (§3): remove redundant/low-quality/third-party-branded images; shrink training events to ~10 evidence images; remove source infographics.
3. **Export Handholding hub + 6 phase pages:** process-led spine and numbered rail; drop duplicate Flow; unify H1; leads and descriptive H2s.
4. **NRI baggage:** table-first reference page (anchor nav, key-allowances strip, `ReferenceTable`, mode-of-travel once, intro naming classes).
5. **MOOWR / AA / EPCG scheme explainer** composition + definition-first leads + legal-basis/branch/features restructures.
6. **AEO tier ladder** and benefits de-duplication; **Insurance** category index + definition rows.
7. **Training events** year-grouped archive with readable captions.
8. **`/about` fix** (H1, title, description, depth) and homepage hero first sentence verbatim from p.3.
9. **SEO plumbing:** `buildMetadata` helper (og:url/og:image/twitter), delete keywords meta, static footer link groups + server-rendered services links, semantic `ComparisonTable`, real lists, heading ids.
10. **Canton Fair:** align H1/title, phases as H3s, hold unconfirmed commitments.

### P1 — high-value
- Homepage summaries (About/Services/TrustBar), all 17 services linked, hero with one authentic photo.
- Shared `SERVICE` page grammar broken into 3–4 compositions; "How PORTMATRIX helps" block on each service page.
- China documentary timeline; Customs clearance operational stepper; Freight workflow; SEZ/FTWZ/EOU regulatory layout; RIIT masthead; courses syllabus; media index; phone-first contact; services index list; MD "In the field" strip.
- Source-backed visible Q&A (no FAQPage markup) on: Export Handholding hub, Phase 3 & 6, China, Canton Fair, Broker, Clearance, Insurance, MOOWR, AA, EPCG, SEZ, FTWZ, EOU, AEO, NRI, Courses, E-commerce (Postal only if text confirmed). None on home, about, services, freight, media, contact, riit, Phases 1/2/4/5.
- Structured-data corrections; heading-scale and caption-size fixes; breadcrumb tap targets.

### P2 — optional polish
- Broker, Postal, E-commerce, About and Rahim page composition refinements; `LazyMotion`; lang `en-IN`; skip link; branded 404; sitemap dates.

---

## 6. Doc corrections found

- `docs/PORTMATRIX_IMAGE_MAP.md` (V6 section) says services-overview and handholding-hub infographics were removed; the code still renders both.
- `docs/FINAL_IMAGE_AND_UI_AUDIT.md` says the RIIT logo is on `/riit/courses` and phase infographics are "linked full size" — neither is true.
- `docs/FINAL_SEO_AEO_GEO_AUDIT.md` credits the mega-menu with internal links (not server-rendered), claims the footer carries all 32 routes (6 links), claims `/about` title fixed (still duplicated) and claims OG defaults inherit (they don't).
- Source-page ranges slightly off in docs: Canton Fair services to p.27, Insurance to p.39, Phase 5 starts p.13.

---

## Implementation log

*(Updated as the content, UI/image and acceptance passes complete.)*

### Pass 2 — Content refinement (implemented)

Verified: `npm run build` passes (39 static pages); all 32 routes return 200 with exactly one `<h1>` and one `<main>`; every internal link found in rendered HTML resolves (0 broken); every route has a canonical URL and a unique title. Images were not touched in this pass (deferred to the UI/image pass).

- [x] Shared plumbing: `lib/seo.js` `buildMetadata` (per-page OG/Twitter/canonical); `Faq`, `KeyPoints`, `DefinitionBlock`, `HowPortmatrixHelps` primitives; `ComparisonTable` is one semantic `<table>` with caption/scopes; footer links every route; `keywords` meta removed; `lang="en-IN"`; sitemap no longer fakes `lastModified`/priority.
- [x] Home, About, Rahim Iyaz, Services hub, Contact: source-defining hero sentence, ticker removed, three-way Export Handholding repeat removed, Header/Footer moved outside `<main>`, Organization/Person/ContactPage JSON-LD linked by `@id`, `components/ExportHandholding.jsx` deleted.
- [x] Export Handholding hub + 6 phases: activities list, ordered phase list, descriptive H2s, redundant flow removed, FAQs on hub, Phase 3 and Phase 6.
- [x] Seven scheme pages (MOOWR, AA, EPCG, SEZ, FTWZ, EOU, AEO): definition-first, key points, captioned comparison tables, real lists, FAQs 3–5 each, source text previously omitted restored.
- [x] Seven trade pages (broker, clearance, freight, MSME insurance, NRI baggage, postal, e-commerce): labelled lists, on-page indexes (insurance, NRI), "Cover by risk" table, FAQs on 6 of 7 (freight has none by design).
- [x] China, Canton Fair, RIIT, courses, training events, media: definition-led intros, capabilities merged without loss, year-indexed event archive (all 23 events kept), `Course` JSON-LD, `VideoObject` dropped (no `uploadDate` in source).
- [x] No FAQPage schema anywhere; FAQ answers draw only on cited source pages.

CLIENT_CONFIRMATION_REQUIRED (kept as printed, flagged in code comments; not resolved):
- Canton Fair: "Minimum 30% profit guaranteed", "Product Replacement Warranty*", "12x7 after sales".
- Undated China market statistics; "1974" vs CIN year; home kicker "since 1996" (source attributes it to the MD personally).
- Alagappa "HOB" vs "HOD" (p.77); event date 13.05.2026.
- Advance Authorisation "on post export"; "Postal Export Aggregator" wording; "OoC"; "Customs Brokers Regulations, 2018" vs "Licensing Regulations 2018"; "The Baggage Rules, 2026"; Pets sentence; Annexure-II duplicates; "No value limit for export" (image only).
- Slogan "Excellence in EXIM Compliance" (p.3) vs V6 strapline "Ease of doing EXIM".
- Email "md.portmatrix.in" (shown with an "Email address pending confirmation" label); second phone 95857 90909 has no country code; MD qualification string p.4 vs p.60.
- New: `/about` states PORTMATRIX Logistics Pvt. Ltd. is "the registered company of PORTMATRIX" — inferred from the p.86–87 contact block.
- Media: PDF gives no interviewee, date, channel or English summary.

Carry-overs for the UI/image pass: certificate/gallery trimming; MD portrait card on `/about`; services overview, baggage and postal infographics (they carry a differing MD credential line / India Post mark); re-style the plain primitives; `lib/content.js` still has "Postal Export Aggregator", short scheme labels, `RIIT.gallery` alt/caption for the Deputy DGFT image, and an unused `MEDIA.videoLabel` that attributes the interview to the MD.

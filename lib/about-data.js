// Source: docs/source/PORTMATRIX_SOURCE_TEXT.txt p.3 ("About Us:"). Verbatim
// paragraphs, not paraphrased — see docs/FULL_SITE_SOURCE_MAP.md Section B.
export const ABOUT_PAGE = {
  intro:
    "PORTMATRIX is a Customs Broking and End-to-End Export Handholding company supporting exporters and importers in navigating Customs, DGFT and international trade procedures with accuracy, speed and transparency.",
  coreStrength:
    "Our core strength is Export Handholding—from product selection, HS Code classification, export policy and market identification to documentation, regulatory compliance, customs clearance, logistics and realisation of export proceeds.",
  scope:
    "We also provide DGFT consultancy, Allied Acts inputs, EXIM analytics, Global Market & International Trade Intelligence, RTA/FTA advisory, Import Penetration & Trade Intensity analysis, SHI/RHI and Export Propensity analysis, export market strategy, competitor analysis and export packaging guidance.",
  riit:
    "Our allied concern, Regional Institute of International Trade (RIIT), supports entrepreneurs, professionals and students through International Trade Training, Research and Consultancy, serving as an Academic Centre of Excellence in International Trade.",
};

// PDF p.3 — the core-strength chain, split at its "from … to …" joints, in the
// source's own order (the source lists "export policy and market identification"
// together; they are shown as two steps). `icon` ids map to lucide icons in the
// page (visual aid only, no added text).
export const CORE_STRENGTH_CHAIN = [
  { icon: "package", label: "Product selection" },
  { icon: "hash", label: "HS Code classification" },
  { icon: "scale", label: "Export policy" },
  { icon: "target", label: "Market identification" },
  { icon: "file", label: "Documentation" },
  { icon: "shield", label: "Regulatory compliance" },
  { icon: "stamp", label: "Customs clearance" },
  { icon: "truck", label: "Logistics" },
  { icon: "banknote", label: "Realisation of export proceeds" },
];

// PDF p.3 "We also provide …" — all ten source items, regrouped into four
// clusters for reading. The source phrase "SHI/RHI and Export Propensity
// analysis" is kept as one item (SHI/RHI is not expanded in the source).
// Nothing added or dropped.
export const ABOUT_SCOPE_CLUSTERS = [
  {
    icon: "gavel",
    title: "Policy and regulatory advisory",
    items: ["DGFT consultancy", "Allied Acts inputs", "RTA/FTA advisory"],
  },
  {
    icon: "chart",
    title: "EXIM analytics and intelligence",
    items: ["EXIM analytics", "Global Market & International Trade Intelligence"],
  },
  {
    icon: "radar",
    title: "Market analysis",
    items: ["Import Penetration & Trade Intensity analysis", "SHI/RHI and Export Propensity analysis"],
  },
  {
    icon: "compass",
    title: "Strategy and packaging",
    items: ["Export market strategy", "Competitor analysis", "Export packaging guidance"],
  },
];

// Journey. Every entry is a dated statement printed in the PDF (page in the
// comment). 1974 is the late Founder's Hong Kong trade history (p.20) and 1996
// is Mr. Rahim Iyaz's foreign-trade experience (p.4). Neither is a company
// founding or incorporation year — the source states no such year
// (CLIENT_CONFIRMATION_REQUIRED: 1974, 1996 and the CIN year are all different).
export const ABOUT_JOURNEY = [
  {
    year: "1974",
    label: "The Founder's trade link with Hong Kong",
    // p.20
    items: [
      {
        text: "Our late Founder Mr. M.A. Izzadeen had started his Gem Stones trading in Hong Kong during the year 1974. Over the period of more than 5 decades, we have expanded our business errands in China and India.",
        link: { href: "/china-import-sourcing", label: "China Import Sourcing" },
      },
    ],
    figure: "history",
  },
  {
    year: "1996",
    label: "Managing Director's foreign-trade experience",
    // p.4
    items: [
      {
        text: "Mr. Rahim Iyaz's experience in the foreign trade dates from 1996.",
        link: { href: "/about/rahim-iyaz", label: "Full profile of Rahim Iyaz" },
      },
    ],
  },
  {
    year: "2015",
    label: "China factory visit",
    // p.21 caption. The photo itself stays on /china-import-sourcing.
    items: [
      {
        text: "Our MD Mr. Rahim Iyaz in a China factory visit in 2015.",
        link: { href: "/china-import-sourcing", label: "China Import Sourcing" },
      },
    ],
  },
  {
    year: "2020",
    label: "First Export Training",
    items: [{ date: "2020-08-02", display: "2 August", text: "Our First Export Training was started." }], // p.67
  },
  {
    year: "2022",
    label: "Institutional partnerships and training",
    items: [
      {
        date: "2022-10-31",
        display: "31 October",
        text: "An MoU was signed between Alagappa University, Karaikudi and RIIT to promote training and research in International Trade.", // p.77
      },
      {
        date: "2022-12-20",
        display: "20 December",
        text: "Federation of Indian Export Organisations (FIEO) Training: our MD Mr. Rahim Iyaz with GM of FaME-TN Mr. Sakthivel and Jt. Director General of FIEO Mr. Unnikrishnan.", // p.70
      },
    ],
  },
  {
    year: "2023",
    label: "Training for Tamil Nadu MSMEs and the RIIT Training Center",
    items: [
      {
        date: "2023-03-26",
        display: "26 March",
        text: "Export Training to Govt. of Tamil Nadu, MSME Officials across Tamil Nadu.", // p.71
      },
      {
        date: "2023-11-14",
        display: "14 November",
        text: "MSME DFO Assistant Director Mr. M V Leelakrishnan inaugurated our RIIT Training Center in Chennai.", // p.68
      },
    ],
  },
  {
    year: "2024",
    label: "Press coverage",
    items: [
      {
        date: "2024-02-04",
        display: "4 February",
        text: "Our MD's China Import article in NANAYAM VIKATAN Tamil Magazine.", // p.84
        link: { href: "/media", label: "Media and press" },
      },
    ],
  },
  {
    year: "2025",
    label: "Agriculture export training",
    items: [
      {
        date: "2025-08-12",
        display: "12 August",
        text: "Agriculture export training in Chennai at EDII-TN Campus for around 40 Government Senior Officials of Cooperative Society, organised by Govt. of Tamil Nadu TNAPEx and EDII-TN.", // p.75
      },
    ],
  },
];

// PDF p.4 — the MD's four bullets, regrouped (same facts, no additions).
// CLIENT_CONFIRMATION_REQUIRED (qualification string, p.4 vs p.60) lives in
// MD.qualifications in lib/content.js and is not touched here.
export const MD_LEAD =
  "Our Managing Director Mr. Rahim Iyaz is a Government Licensed Customs Broker, having a vintage experience in the foreign trade since 1996.";
export const MD_COUNTRIES = [
  "Republic of Maldives",
  "Singapore",
  "China",
  "Hong Kong",
  "Malaysia",
  "Thailand",
  "UAE",
  "Saudi Arabia",
  "Sri Lanka",
];

// Source-captioned appearances only (plain text; no new facts). PDF pages:
// China factory visit p.21; Canton Fair 2014 p.25; certificate pp.68–69;
// FIEO training p.70; IAS facilitation p.72; Alagappa MoU p.77;
// interview p.83; Nanayam Vikatan article p.84.
// `datetime` (ISO) is set where the caption gives a full date.
export const MD_IN_THE_FIELD = [
  {
    text: "China factory visit, 2015",
    link: { href: "/china-import-sourcing", label: "China Import Sourcing" },
  },
  {
    text: "China Canton Fair, 2014",
    link: { href: "/china-import-sourcing/canton-fair", label: "Canton Fair" },
  },
  {
    text: "Certificate of Appreciation from MSME DFO, Govt. of India,",
    datetime: "2023-11-28",
    date: "28 November 2023",
    link: { href: "/riit/training-events", label: "RIIT training events" },
  },
  {
    text: "Federation of Indian Export Organisations (FIEO) training,",
    datetime: "2022-12-20",
    date: "20 December 2022",
    link: { href: "/riit/training-events", label: "RIIT training events" },
  },
  {
    text: "Facilitation by Ms. Shiju Thomas, IAS, Secretary for MSME Department of FaME-TN, Govt. of Tamil Nadu,",
    datetime: "2023-03-26",
    date: "26 March 2023",
    link: { href: "/riit/training-events", label: "RIIT training events" },
  },
  {
    text: "MoU between Alagappa University, Karaikudi and RIIT,",
    datetime: "2022-10-31",
    date: "31 October 2022",
    link: { href: "/riit/training-events", label: "RIIT training events" },
  },
  {
    // p.83 — the interview is undated in the source.
    text: "Interview",
    link: { href: "/media", label: "Press & media" },
  },
  {
    // p.84 — dated 04 February, 2024.
    text: "Our MD’s China Import Article in NANAYAM VIKATAN Tamil Magazine,",
    datetime: "2024-02-04",
    date: "04 February 2024",
    link: { href: "/media", label: "Press & media" },
  },
];

// Content sourced verbatim/near-verbatim from docs/source/PORTMATRIX-website-source.pdf.
// Do not add facts, figures, or claims that are not traceable to that document —
// see docs/CURRENT_VS_SOURCE_CONTENT_AUDIT.md and CLAUDE.md.

// PDF p.3, About Us — the company's own emphasized (bolded) mission tagline.
// The logo strapline is now "Ease of doing EXIM" (PortMatrix Logo V6, which
// is part of the artwork and never typeset). Whether this p.3 body tagline
// should change too is CLIENT_CONFIRMATION_REQUIRED — kept as the PDF has it.
export const MISSION_TAGLINE = "PORTMATRIX— Excellence in EXIM Compliance.";
// Display-only form: the PDF text layer drops the space before the dash;
// the wording is unchanged, only the spacing around the typographic dash.
export const MISSION_TAGLINE_DISPLAY = MISSION_TAGLINE.replace("— ", " — ");

// Site-wide identity used by JSON-LD on every route. The homepage owns the
// Organization node (app/page.jsx); other routes reference it by @id.
export const SITE_URL = "https://www.portmatrix.in";
export const ORG_ID = `${SITE_URL}/#organization`;

// RIIT export-training partners, PDF p.5 ("Export Training - Research -
// Consultancy"). Defined ONCE — TrustBar, the home RIIT intro and
// RIIT.intro below all derive from it. The first entry carries the source's
// "both the Central and State Governments’ Ministry of MSME" qualifier.
export const RIIT_PARTNERS = [
  "Ministry of MSME (Central and State Governments)",
  "EDII-TN",
  "TNAPEx",
  "India Post",
  "FIEO",
  "Alagappa University",
];
const RIIT_PARTNERS_PHRASE = `both the Central and State Governments’ Ministry of MSME, ${RIIT_PARTNERS.slice(1).join(", ")}`;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Export Handholding", href: "/services/export-handholding" },
  { label: "China Sourcing", href: "/china-import-sourcing" },
  { label: "RIIT", href: "/riit" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Services mega-menu / mobile grouping. Groups are presentational only —
// they don't change any service's name, order, or description, only how
// the 17 real routes are discovered from the nav.
export const SERVICE_GROUPS = [
  {
    label: "Export & Customs",
    items: [
      { title: "MSME Export Handholding", href: "/services/export-handholding" },
      { title: "Licensed Customs Broker", href: "/services/licensed-customs-broker" },
      { title: "Export Import Clearance", href: "/services/export-import-clearance" },
      { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
    ],
  },
  {
    label: "Training, Sourcing & Export Channels",
    items: [
      { title: "Export Training – Research – Consultancy (RIIT)", href: "/riit" },
      { title: "China Import Sourcing", href: "/china-import-sourcing" },
      { title: "Postal Export Aggregator", href: "/services/postal-export" },
      { title: "E-Commerce Export", href: "/services/e-commerce-export" },
    ],
  },
  {
    label: "Schemes & Facilitation",
    items: [
      { title: "MOOWR", href: "/services/moowr" },
      { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
      { title: "EPCG Scheme", href: "/services/epcg" },
      { title: "SEZ", href: "/services/sez" },
      { title: "FTWZ", href: "/services/ftwz" },
      { title: "EOU", href: "/services/eou" },
      { title: "AEO", href: "/services/aeo" },
    ],
  },
  {
    label: "Other Support",
    items: [
      { title: "MSME Insurance Package", href: "/services/msme-insurance" },
      { title: "NRI Baggage Clearance", href: "/services/nri-baggage-clearance" },
    ],
  },
];

// PDF p.87 "Contact:" block — the only phone number the source document supports.
// Do not reintroduce +91 44 4851 7879 / info@portmatrix.in without separate client confirmation.
export const CONTACT = {
  companyName: "PORTMATRIX Logistics Pvt. Ltd.",
  addressLines: [
    "Wavoo Mansion Annex - 105-B - I Floor,",
    "No. 58/39, Rajaji Salai North Beach Road,",
    "Chennai: 600 001, Tamil Nadu, India.",
  ],
  phoneDisplay: "+91 935 935 2345 / 95857 90909",
  phoneHref: "tel:+919359352345",
  // Same two numbers as phoneDisplay, split for individual rendering.
  // CLIENT_CONFIRMATION_REQUIRED: PDF p.87 gives no country code for
  // "95857 90909", so it is shown as plain text and is NOT a tel: link.
  phones: [
    { display: "+91 935 935 2345", href: "tel:+919359352345" },
    { display: "95857 90909", href: null },
  ],
  website: "www.portmatrix.in",
  websiteHref: "https://www.portmatrix.in",
  // Client confirmed the email directly on 25 October 2026.
  email: "md.portmatrix@gmail.com",
  emailHref: "mailto:md.portmatrix@gmail.com",
  // CIN verified directly from public/images/source/branding/portmatrix-registered-office-lockup.png (PDF p.86).
  cin: "U52290TN2026PTC193185",
};

export const HERO = {
  // Client-supplied wording (locked) — do not rephrase.
  // CLIENT_CONFIRMATION_REQUIRED: "International Trade exposure since 1996" is
  // a client-locked wording from an earlier correction, but PDF p.4 states the
  // 1996 experience as the Managing Director's personal experience ("Mr. Rahim
  // Iyaz ... having a vintage experience in the foreign trade since 1996"),
  // not the company's. Wording kept; attribution to be confirmed with client.
  kicker: "International Trade exposure since 1996",
  // PDF p.3 "About Us" — used verbatim, not paraphrased.
  heading:
    "Customs Broking and End-to-End Export Handholding",
  // PDF p.3, opening defining sentence — verbatim.
  body:
    "PORTMATRIX is a Customs Broking and End-to-End Export Handholding company supporting exporters and importers in navigating Customs, DGFT and international trade procedures with accuracy, speed and transparency.",
  // PDF p.3, core-strength sentence — verbatim.
  coreStrength:
    "Our core strength is Export Handholding—from product selection, HS Code classification, export policy and market identification to documentation, regulatory compliance, customs clearance, logistics and realisation of export proceeds.",
};

// Only source-supported facts. No invented percentages or statistics.
export const TRUST_FACTS = [
  {
    to: 1996,
    // Client-supplied wording (locked): "International Trade exposure since 1996".
    label: "International Trade exposure since",
  },
  {
    to: 1974,
    label: "China / Hong Kong trade link dating to",
  },
];

export const TRUST_BADGES = [
  // PDF p.5 / p.26
  "Licensed Customs Broker",
  "Pan India network",
  // The RIIT partner list lives in RIIT_PARTNERS (above) and is rendered
  // separately by TrustBar as a short list.
];

// PDF p.3–4 "Our MD's Profile"
export const MD = {
  name: "Rahim Iyaz",
  // Visible job title: "Our Managing Director Mr. Rahim Iyaz ..." (PDF p.4).
  role: "Managing Director",
  // Sourced from the PDF's own signature/title graphic under the MD's name
  // (visible on PDF pp.4, 60, and repeated across multiple event-flyer
  // images pp.67, 78-81) — confirmed by direct visual inspection during
  // M0.6 image extraction. Not present in the plain-text layer, which is
  // why a text-only re-check cannot independently find it.
  title: "Customs Law Practitioner",
  // Rendered as the PDF p.4 dedicated MD-profile page states it (the more authoritative placement).
  // CLIENT_CONFIRMATION_REQUIRED: the source itself renders this credential two different ways
  // (p.4: "PPIBAMI (IIFT), CBLR F-Card" vs the p.60 infographic: "FTP-IBAMI (IIFT), F-Card Qualified").
  // Do not silently reconcile — see docs/PORTMATRIX_ASSET_MANIFEST.md "New findings".
  qualifications: "M.Com, MBA, M.Phil., PGDIBO, PPIBAMI (IIFT), CBLR F-Card",
  bullets: [
    "Government Licensed Customs Broker, having a vintage experience in the foreign trade since 1996.",
    "Worked extensively in international markets: Republic of Maldives, Singapore, China, Hong Kong, Malaysia, Thailand, UAE, Saudi Arabia and Sri Lanka.",
    "Having worked with India's largest banking group State Bank of India in Risk Mitigation Management.",
    "Authorised Resource Person in export training for the Govt. of India–MSME, EDII-TN, TNAPEx, FIEO, Alagappa University.",
  ],
  portrait: {
    src: "/images/source/md/rahim-iyaz-portrait.png",
    width: 853,
    height: 1280,
    alt: "Portrait of Mr. Rahim Iyaz, Managing Director, PORTMATRIX",
  },
};

// PDF p.3 About Us — EXIM analytics services
export const INTELLIGENCE = [
  "Global Market & International Trade Intelligence",
  "Import Penetration & Trade Intensity analysis",
  "SHI/RHI and Export Propensity analysis",
  "RTA/FTA advisory",
  "Export market strategy & competitor analysis",
];

// PDF pp.4–7, "Core Services" (17). Descriptions are the source's own summary
// lines, used verbatim or lightly trimmed — never reworded in meaning.
export const SERVICES = [
  {
    n: 1,
    icon: "Handshake",
    title: "MSME Export Handholding",
    desc: "Complete support from export registration and documentation to buyer coordination, customs clearance, shipment, transit, insurance, and post-shipment payment realization.",
    featured: true,
    href: "/services/export-handholding",
  },
  {
    n: 2,
    icon: "GraduationCap",
    title: "Export Training – Research – Consultancy",
    desc: "Our Regional Institute of International Trade (RIIT) is an export training partner for both the Central and State Governments’ Ministry of MSME, EDII-TN, TNAPEx, India Post, FIEO, Alagappa University.",
    featured: true,
    href: "/riit",
  },
  {
    n: 3,
    icon: "Globe2",
    title: "China Import Sourcing (Since 1974)",
    desc: "End to end import assistance to source, negotiate, quality control, inspect and deliver the goods from China.",
    featured: true,
    href: "/china-import-sourcing",
  },
  {
    n: 4,
    icon: "Stamp",
    title: "Licensed Customs Broker",
    desc: "Acting as an agent on behalf of importers and exporters for the clearance of imported or export goods under the Customs Brokers Regulations, 2018.",
    featured: true,
    href: "/services/licensed-customs-broker",
  },
  {
    n: 5,
    icon: "ArrowLeftRight",
    title: "Export Import Clearance",
    desc: "Ensuring proper documentary compliance for hassle free clearance of the cargo.",
    featured: true,
    href: "/services/export-import-clearance",
  },
  {
    n: 6,
    icon: "Truck",
    title: "Freight Forwarding & Logistics",
    desc: "Transportation (road, air, sea, rail), cargo consoling, warehousing, inventory management, packaging, and distribution.",
    featured: true,
    href: "/services/freight-forwarding-logistics",
  },
  {
    n: 7,
    icon: "ShieldCheck",
    title: "MSME Insurance Package",
    desc: "Affordable protection for your business, assets, and operations against unforeseen risks.",
    href: "/services/msme-insurance",
  },
  {
    n: 8,
    icon: "Warehouse",
    title: "MOOWR",
    desc: "Manufacture and Other Operations in Warehouse Regulations — import raw materials and capital goods without paying customs duty upfront.",
    href: "/services/moowr",
  },
  {
    n: 9,
    icon: "FileSignature",
    title: "Advance Authorisation Scheme",
    desc: "A duty exemption scheme by DGFT that enables duty free import of raw materials for export production.",
    href: "/services/advance-authorisation",
  },
  {
    n: 10,
    icon: "Factory",
    title: "EPCG Scheme",
    desc: "Export Promotion Capital Goods — import of capital goods at zero customs duty to boost export capability.",
    href: "/services/epcg",
  },
  {
    n: 11,
    icon: "Building2",
    title: "SEZ",
    desc: "Special Economic Zone — tax benefits, duty-free trade, simplified regulations, and export advantages.",
    href: "/services/sez",
  },
  {
    n: 12,
    icon: "Boxes",
    title: "FTWZ",
    desc: "Free Trade Warehousing Zone — duty-free warehousing and trading hub for seamless global imports and exports.",
    href: "/services/ftwz",
  },
  {
    n: 13,
    icon: "Building",
    title: "EOU",
    desc: "Export Oriented Units focused on producing goods and services primarily for export.",
    href: "/services/eou",
  },
  {
    n: 14,
    icon: "BadgeCheck",
    title: "AEO",
    desc: "Authorised Economic Operator — a business entity recognized by Customs as a trusted and compliant trade partner.",
    href: "/services/aeo",
  },
  {
    n: 15,
    icon: "Luggage",
    title: "NRI Baggage Clearance",
    desc: "Advising NRI clients on proper declaration of baggage clearance in India, without payment of duty, as per The Baggage Rules, 2026.",
    href: "/services/nri-baggage-clearance",
  },
  {
    n: 16,
    icon: "Mail",
    title: "Postal Export Aggregator",
    desc: "The Foreign Trade Policy (FTP) 2023, through “Dak Ghar Niryat Kendra,” enables MSMEs to export globally through India Post.",
    href: "/services/postal-export",
  },
  {
    n: 17,
    icon: "ShoppingCart",
    title: "E-Commerce Export",
    desc: "Sale of goods from India to overseas customers through online platforms, websites, marketplaces or direct-to-consumer channels.",
    href: "/services/e-commerce-export",
  },
];

// One-line versions of the descriptions above for the homepage index (PDF
// pp.4–7). Shortened by trimming only; no facts added. Keyed by service `n`.
// C items kept as the source states them: "Customs Brokers Regulations, 2018"
// (n4), "The Baggage Rules, 2026" (n15), "Postal Export Aggregator" (n16).
export const SERVICE_ONE_LINERS = {
  1: "Complete support from export registration to post-shipment payment realization.",
  2: "International Trade Training, Research and Consultancy through our Regional Institute of International Trade (RIIT).",
  3: "End to end import assistance to source, negotiate, quality control, inspect and deliver goods from China.",
  4: "Acting as an agent for importers and exporters in clearing imported or export goods under the Customs Brokers Regulations, 2018.",
  5: "Proper documentary compliance for hassle free clearance of cargo.",
  6: "Road, air, sea and rail transportation, cargo consoling, warehousing, inventory management, packaging and distribution.",
  7: "Affordable protection for your business, assets and operations against unforeseen risks.",
  8: "Manufacture and Other Operations in Warehouse Regulations — manufacturers import raw materials and capital goods without paying customs duty upfront.",
  9: "A DGFT duty exemption scheme for duty free import of raw materials for export production.",
  10: "Export Promotion Capital Goods — import of capital goods at zero customs duty and other taxes.",
  11: "Special Economic Zone — tax benefits, duty-free trade, simplified regulations and export advantages.",
  12: "Free Trade Warehousing Zone — duty-free warehousing and trading hub for global imports and exports.",
  13: "Export Oriented Units — units focused on producing goods and services primarily for export.",
  14: "Authorised Economic Operator — a business recognized by Customs as a trusted and compliant trade partner.",
  15: "Advising NRI clients on proper declaration of baggage clearance in India, without payment of duty, as per The Baggage Rules, 2026.",
  16: "Through “Dak Ghar Niryat Kendra,” the Foreign Trade Policy (FTP) 2023 enables MSMEs to export globally through India Post.",
  17: "Sale of goods from India to overseas customers through online platforms, websites, marketplaces or direct-to-consumer channels.",
};

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);
export const COMPACT_SERVICES = SERVICES.filter((s) => !s.featured);

// PDF pp.7–16 — MSME Export Handholding Package, Phases 1–6.
// Step lists are the source's own phase step titles.
export const EXPORT_HANDHOLDING_PHASES = [
  {
    n: 1,
    title: "Business Setup and Registration",
    steps: [
      "PAN",
      "Digital Signature",
      "Company Formation",
      "GSTIN Registration",
      "Opening a Current Account with AD Bank",
      "Importer Exporter Code (IEC) Registration",
      "RCMC",
      "ICEGATE Registration",
      "Other applicable PGA Registration",
    ],
  },
  {
    n: 2,
    title: "Pre Export Planning",
    steps: [
      "Product Selection with ITC HS Code",
      "Checking Export Policy – Schedule 2",
      "International Business Analytics & Market Intelligence",
      "FTA / CEPA Opportunities",
      "Finding Buyers",
      "Export Promotion Schemes (DGFT / Customs)",
      "Connect with EPC / EDA",
    ],
  },
  {
    n: 3,
    title: "Buyer Development and Commercial Negotiations",
    steps: [
      "Checking of Importing Country’s Regulations",
      "Payment Methodologies – LC, AP, DP, DA",
      "INCOTERMS Applicability",
      "Quotation Preparation",
      "Negotiation with the Buyer",
      "Checking Buyer Credit Status",
      "Trade Credit Insurance (ECGC)",
      "Pre & Post Shipment Finance Arrangement",
    ],
  },
  {
    n: 4,
    title: "Pre Shipment Procedures",
    steps: [
      "Non Tariff Barriers – SPS & TBT Compliance",
      "Pre-shipment Inspection Formalities",
      "Manufacture / Production / Procurement of Goods",
      "Labelling, Packaging, Packing and Marking",
      "Forex Fluctuation Mitigation",
      "Logistical Knowhow",
      "Marine Insurance",
    ],
  },
  {
    n: 5,
    title: "Shipment Procedures",
    steps: [
      "Export Documentation",
      "Filing of Shipping Bill",
      "Duty Drawback Entitlement",
      "Customs Clearance & Examination",
      "Obtaining Let Export Order (LEO)",
      "Loading of Goods to the Conveyance",
      "Obtaining Shipping Bill / Bill of Export",
    ],
  },
  {
    n: 6,
    title: "Post Shipment and Realisation Procedures",
    steps: [
      "Submission of Shipping Documents to the Bank",
      "Follow up for Export Realisation",
      "Realisation of Export Proceeds",
      "e-BRC",
      "Compliance Reporting",
      "Business Growth",
    ],
  },
];

// PDF pp.19–24 — China Import Sourcing (Since 1974)
export const CHINA = {
  kicker: "The gateway to China · Since 1974",
  heading: "China Import Sourcing",
  history:
    "Our late Founder Mr. M.A. Izzadeen had started his Gem Stones trading in Hong Kong during the year 1974. Over the period of more than 5 decades, we have expanded our business errands in China and India.",
  intro:
    "We facilitate end to end import assistance to source, negotiate, quality control, inspect and deliver the goods from China.",
  costNote:
    "We help you identify your products and negotiate with the right manufacturers with the help of our local intelligence cell in China. We can reduce your purchase cost by 30% - 40% minimum.",
  points: [
    "Permanent Chinese speaking staff",
    "Factory inspection",
    "Hassle free FCL / LCL cargo delivery",
    "Door to door delivery from China",
    "Utmost transparency with agreed service charge",
    "Canton Fair arrangements",
    "China visa and ticketing",
  ],
  images: {
    history: {
      src: "/images/source/china/founder-hong-kong-delegation-1974.png",
      width: 1289,
      height: 816,
      alt: "Indian Business Delegation to Hong Kong, May 1974 — Founder Mr. M.A. Izzadeen third from left",
      caption: "Indian Business Delegation to Hong Kong, May 1974",
    },
    factory: {
      src: "/images/source/china/rahim-iyaz-china-factory-2015.png",
      width: 960,
      height: 720,
      alt: "Managing Director Mr. Rahim Iyaz on a China factory visit, 2015",
      caption: "MD Mr. Rahim Iyaz — China factory visit, 2015",
    },
    cantonFair: {
      src: "/images/source/china/azeez-usa-clients-canton-fair-2025.png",
      width: 750,
      height: 1000,
      alt: "China Incharge Mr. Azeez with USA clients at Canton Fair, 2025",
      caption: "China Incharge Mr. Azeez with USA clients, Canton Fair 2025",
    },
  },
};

// PDF pp.28–32 — Export Import Clearance / operational proof
export const OPERATIONAL_PROOF = {
  kicker: "Customs · Freight · Logistics",
  heading: "Export - Import Clearance",
  intro:
    // PDF p.28 + p.32, both sentences verbatim
    "We ensure proper documentary compliance for hassle free clearance of the cargo. We coordinate the complete movement of cargo—ensuring it reaches the right place, at the right time, with the right documentation and compliance.",
  images: [
    {
      src: "/images/source/customs/export-shipment-inspection-usa-2025.png",
      width: 1280,
      height: 960,
      alt: "Inspection of an export shipment to the USA, 2025",
      caption: "Export shipment inspection — USA, 2025",
    },
    {
      src: "/images/source/customs/hotel-supplies-inspection-netherlands-2024.png",
      width: 1600,
      height: 1200,
      alt: "Product inspection of a hotel supplies shipment to the Netherlands, 2024",
      caption: "Hotel supplies shipment to Netherlands, 2024",
    },
  ],
  // Core-service names this section provides visual proof for — pulled
  // from the approved Core Services list (SERVICES), not new claims.
  disciplines: ["Licensed Customs Broker", "Export Import Clearance", "Freight Forwarding & Logistics"],
};

// PDF pp.16–19, 67–77 — RIIT + institutional credibility
export const RIIT = {
  kicker: "Regional Institute of International Trade",
  heading: "RIIT — Export training, research and consultancy",
  // "Academic Centre of Excellence in International Trade" is the source's
  // own framing (PDF p.3, About Us), restored here for full fidelity.
  intro:
    `Our allied concern, Regional Institute of International Trade (RIIT), supports entrepreneurs, professionals and students through International Trade Training, Research and Consultancy — an Academic Centre of Excellence in International Trade, and an export training partner for ${RIIT_PARTNERS_PHRASE}.`,
  // Homepage version: same facts (PDF pp.3, 5) in shorter sentences.
  homeIntro: `Our allied concern, the Regional Institute of International Trade (RIIT), supports entrepreneurs, professionals and students through International Trade Training, Research and Consultancy. It is an Academic Centre of Excellence in International Trade. RIIT is an export training partner for ${RIIT_PARTNERS_PHRASE}.`,
  // Two co-featured images: the RIIT founding moment and the manifest's
  // single HIGHEST-rated institutional asset (Alagappa MoU) — previously
  // the MoU sat in the small secondary grid despite outranking everything
  // else there; corrected per docs/HOME_SOURCE_ALIGNMENT.md.
  featured: [
    {
      src: "/images/source/riit/riit-inauguration-2023-11-14.png",
      width: 1019,
      height: 764,
      alt: "MSME DFO Assistant Director Mr. M V Leelakrishnan inaugurates the RIIT Training Center in Chennai, 14 November 2023",
      caption: "RIIT Training Center inaugurated by MSME DFO, 14 Nov 2023",
    },
    {
      src: "/images/source/events/alagappa-university-mou-2022-10-31.png",
      width: 1280,
      height: 853,
      alt: "MoU signed between Alagappa University, Karaikudi and RIIT to promote training and research in International Trade, 31 October 2022",
      caption: "MoU with Alagappa University, Karaikudi — 31 Oct 2022",
    },
  ],
  gallery: [
    {
      src: "/images/source/riit/deputy-dgft-reddy-session-2023-11-19.png",
      width: 1280,
      height: 960,
      alt: "Deputy DGFT Mr. K.H. Reddy takes a session on DGFT Procedures at RIIT, 19 November 2023",
      caption: "Deputy DGFT Mr. K.H. Reddy — session at RIIT, 19 Nov 2023",
    },
    {
      // Date read directly from the certificate's own letterhead field
      // ("Date: 28.11.2023") during the M0.6 visual PDF inspection — the
      // surrounding source text carries no date for this certificate.
      src: "/images/source/credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png",
      width: 845,
      height: 1127,
      alt: "Certificate of Appreciation from MSME Development & Facilitation Office, Government of India, 28 November 2023",
      caption: "Certificate of Appreciation — MSME DFO, Govt. of India",
    },
    {
      src: "/images/source/riit/agriculture-export-training-edii-tn-2025-08-12.png",
      width: 1280,
      height: 960,
      alt: "Agriculture export training at EDII-TN Campus for Government Senior Officials, 12 August 2025",
      caption: "Agriculture export training, EDII-TN — 12 Aug 2025",
    },
    {
      // Swapped in for the former EIA-session photo: FIEO is explicitly
      // named as a training partner in the intro above, but no FIEO photo
      // was previously used anywhere on the homepage — gap identified by
      // the M1.3 Image Curator pass, corrected per the alignment contract.
      src: "/images/source/riit/fieo-training-sakthivel-unnikrishnan-2022-12-20.png",
      width: 938,
      height: 423,
      alt: "Our MD Mr. Rahim Iyaz with GM of FaME-TN Mr. Sakthivel and Jt. Director General of FIEO Mr. Unnikrishnan at Federation of Indian Export Organisations (FIEO) Training, 20 December 2022",
      caption: "FIEO Training — 20 Dec 2022",
    },
  ],
};

// PDF p.84 + p.83 — Media/press proof
export const MEDIA = {
  heading: "Press & media",
  items: [
    {
      src: "/images/source/media/nanayam-vikatan-article-2024-02-04.png",
      width: 1599,
      height: 1600,
      alt: "MD's China Import article in Nanayam Vikatan Tamil magazine, 4 February 2024",
      caption: "Nanayam Vikatan (Tamil) — MD's China Import article, 4 Feb 2024",
    },
  ],
  videoUrl: "https://www.youtube.com/live/K28p2YTy2OI?feature=shared",
  videoLabel: "Watch the MD's interview",
};

// PDF pp.85–86 "Allied Services" — verbatim lists.
export const ALLIED_SERVICES = {
  groups: [
    {
      title: "EXIM Company Setup",
      items: [
        "Company / Firm / Proprietary",
        "GST registration",
        "Importer Exporter Code (IE Code)",
        "Export Promotion Council RCMC / FSSAI / MSME Udayam / PGA registration",
        "Digital Signature",
        "ICEGATE registration",
      ],
    },
    {
      title: "EXIM Compliance & Consulting",
      items: [
        "Advisory under The Customs Act",
        "Foreign Trade Policy (FTP) / FTDRA",
        "Export Promotion Schemes",
        "IGST / FEMA",
        "Customs Audit & Risk Management",
        "Advance Rulings",
        "Intellectual Property Rights (IPR)",
      ],
    },
    {
      title: "EXIM Value Added Services",
      items: [
        "Procedure to claim preferential rate of duty under Free Trade Agreement (CAROTAR)",
        "Postal Export procedures",
        "Status Holder Certification",
        "EOU / EHTP / STP / BTP / SCOMET / BIS Certification",
        "Procedure on Transit & Transhipment of Cargo",
        "Coastal Goods filing",
        "Procedures on Re-importation & Re-exportation of Goods",
      ],
    },
  ],
  targetAudience: ["MNC / Corporate Clientele", "MSME Manufacturers", "Merchant Exporters / Importers"],
  keyStrengths: [
    "Error-free documentation",
    "Faster clearance turnaround",
    "Good liaison with Partner Government Agencies (PGAs)",
  ],
};

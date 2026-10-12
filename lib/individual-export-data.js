// Source: docs/source/PORTMATRIX_SOURCE_TEXT.txt pp.58-67 (PDF footers: NRI baggage
// pp.58-63; Postal Export pp.63-64 and the p.6 definition; E-Commerce pp.64-67).

// ---------------------------------------------------------------------------
// NRI Baggage Clearance (pp.58-63)
// CLIENT_CONFIRMATION_REQUIRED, kept exactly as the PDF prints them:
//  - "The Baggage Rules, 2026" (instrument name / year) in serviceIntro and reimportNote;
//  - the Pets sentence (p.63);
//  - repeated Annexure-II examples (refrigerator in Home appliances and in
//    Household; water dispenser and oil heater in Kitchen and in Other).
// ---------------------------------------------------------------------------
export const NRI_BAGGAGE_PAGE = {
  tagline: "Clearance of your baggage with ease",
  intro:
    "Baggage refers to personal belongings, travel articles, and other goods carried by passengers while entering or leaving India. Baggage includes unaccompanied baggage and excludes motor vehicles. Passengers arriving in India are allowed to bring bonafide (used personal effects) and specified goods; free of customs duty within prescribed limits.",
  serviceIntro:
    "PORTMATRIX advises the NRI Clients in proper declaration of their baggage clearance in India; without payment of duty as per The Baggage Rules, 2026.",
  // p.59 General Free Allowance table — the five classes of passenger.
  classesIntro: "The general free allowance on this page is set by class of passenger. The five classes are:",
  classes: [
    "Resident Indian",
    "Tourist of Indian origin",
    "Foreigner with a valid Indian visa, other than a tourist visa",
    "Tourist of foreign origin",
    "Crew Members",
  ],
  // On-page index (ids match the headings on the page).
  index: [
    { id: "channels", label: "Channels" },
    { id: "allowances", label: "Allowances" },
    { id: "jewellery", label: "Jewellery" },
    { id: "transfer-of-residence", label: "Transfer of residence" },
    { id: "currency", label: "Currency" },
    { id: "other-rules", label: "Other baggage rules" },
    { id: "pets", label: "Pets" },
  ],
  channels: {
    intro:
      "Every passenger entering India has to pass through a Customs check after first being cleared by an immigration Officer and taking delivery of his / her baggage, if any, from the conveyor belts. The passenger has the option of seeking Customs clearance through either of the two channels:",
    list: [
      { name: "Green Channel", text: "When the passenger chooses Green Channel, it is deemed to be declared that there is nothing dutiable or restricted or prohibited goods in his baggage." },
      { name: "Red Channel", text: "In the Red Channel, the goods are made available for inspection by the Customs Authorities." },
    ],
  },
  dutyFreePersonalEffects:
    "A passenger arriving in India is allowed to bring used personal effects required for daily necessities of life and travel, free of customs duty, provided the items are carried on the person or in bona fide (used articles) baggage and are not meant for commercial purposes.",
  dutyFreeItemsTable: {
    caption: "Free Baggage allowance for all passengers on arrival in India",
    headers: ["Item", "Allowance"],
    rows: [
      ["Cigarette", "Up to 100 sticks"],
      ["Cigar", "Up to 25 sticks"],
      ["Tobacco", "Up to 125 gms"],
      ["Liquor or Wine", "Up to 2 litres"],
    ],
  },
  reimportNote:
    "The Baggage Rules, 2026 provide special facilities for passengers regarding the re-import and temporary import of personal effects in order to facilitate international travel and reduce customs formalities. A resident, tourist of Indian origin, or a foreigner holding a valid non-tourist visa may bring back into India personal articles that were previously taken abroad from India without payment of customs duty at the time of return.",
  generalFreeAllowanceIntro:
    "The passengers, excluding an infant are allowed duty free clearance of articles up to the value prescribed as of below:",
  // p.59: "Mode of Travel" is one merged cell spanning all five rows.
  generalFreeAllowanceModeNote: "Mode of Travel (applies to all five classes): Arriving through any mode other than land.",
  generalFreeAllowanceTable: {
    caption: "General Free Allowance for the Baggage",
    headers: ["S. No.", "Class of Passenger", "Duty-Free Allowance (INR)"],
    rows: [
      ["1", "Resident Indian", "75,000/-"],
      ["2", "Tourist of Indian origin", "75,000/-"],
      ["3", "Foreigner with a valid Indian visa, other than a tourist visa", "75,000/-"],
      ["4", "Tourist of foreign origin", "25,000/-"],
      ["5", "Crew Members", "2,500/-"],
    ],
  },
  laptopRule: "A passenger of 18 years of age or above, shall be allowed to bring one new Laptop including Notepad; free of duty.",
  poolingRule: "Pooling of Allowance: Free allowance cannot be pooled with another passenger's allowance.",
  declarationWarning:
    "Passengers carrying goods beyond the permissible limit, restricted items, or prohibited goods must declare them to Customs and pay the applicable duty. Failure to declare dutiable goods may result in confiscation, penalty, or prosecution under the Customs Act.",
  jewelleryIntro: "A resident or tourist of Indian origin who has been residing abroad for more than one year can carry jewelry duty free as follows:",
  jewelleryTable: {
    caption: "Duty free eligibility for Gold jewellery",
    headers: ["Gender", "Eligibility"],
    rows: [
      ["Female", "40 gms"],
      ["Male", "20 gms"],
    ],
  },
  transferOfResidenceSubtitle: "NRI passengers shifting their residence to India",
  transferOfResidenceIntro:
    "Transfer of residence allowances is available to eligible persons to carry their personal and household articles, according to the duration of their stay abroad and the period of stay in India. The allowances are applicable only to bona fide (used articles) household effects and personal articles, and are subject to specified conditions and exclusions.",
  transferOfResidenceTablesIntro:
    "The following allowances are available to eligible passengers under transfer of residence, according to the duration of their stay abroad.",
  torIndianTable: {
    caption: "Allowance for Indian Residents / Tourists of Indian Origin",
    headers: ["Duration of Stay Abroad", "Allowance (INR)"],
    rows: [
      ["3–12 months", "1,50,000"],
      ["Minimum 1 year during preceding 2 years", "3,00,000"],
      ["More than 2 years", "7,50,000"],
    ],
  },
  torForeignerTable: {
    caption: "Allowance for Foreigner with a valid visa, other than tourist visa",
    headers: ["Duration of Stay in India", "Allowance (INR)"],
    rows: [
      ["6–12 months", "1,50,000"],
      ["1–2 years", "3,00,000"],
      ["More than 2 years", "7,50,000"],
    ],
  },
  annexureIntro: "Generally, specified personal/household articles may include not more than one unit each of items listed in Annexure-II, subject to the applicable conditions.",
  annexureTable: {
    caption: "Annexure-II — Examples of Transfer-of-Residence Items",
    headers: ["Category", "Examples"],
    rows: [
      ["Home appliances", "Air-conditioner, microwave oven, washing machine, refrigerator"],
      ["Kitchen", "Gas cooking range, dishwasher, electric oven, air fryer, water dispenser, oil heater"],
      ["Electronics", "Home Theatre, Laptop, desktop PC, TV, tablet, printer, projector, Video Camera"],
      ["Entertainment", "PlayStation/gaming console, small Bluetooth speakers, amplifier"],
      ["Household", "Refrigerator, Deep freezer, Vacuum cleaner, robotic vacuum, air purifier, dehumidifier, air cooler"],
      ["Other", "Musical instruments, massage chair, water dispenser, oil heater"],
    ],
  },
  // Currency (p.63): two bullets, text verbatim.
  currency: [
    "A passenger can carry USD 5,000 or equivalent in cash; and a total aggregate of foreign exchange in the form of currency notes, bank notes, or travellers cheques allowed is USD 10,000 or equivalent. When this limit is being exceeded, then a formal declaration is made to the Customs Authorities.",
    "Any person resident in India may take outside India Indian currency notes not exceeding INR. 25,000.",
  ],
  otherRules: [
    { title: "Re-import of Personal Effects", items: ["Certain personal effects taken out of India earlier may be re-imported duty-free subject to declaration and Customs satisfaction."] },
    { title: "Temporary Import by Tourist", items: ["Personal effects required during stay may be temporarily imported duty-free, subject to declaration and re-export."] },
    {
      title: "Unaccompanied Baggage",
      items: [
        "Generally allowed; normally dispatched within 1 month after arrival.",
        "Customs may permit earlier arrival, including up to 2 months before arrival, subject to specified conditions.",
      ],
    },
  ],
  // p.63 — printed as is (C).
  pets:
    "Resident, tourist of Indian origin, foreigner with a valid visa, other than tourist visa are allowed to import two pets (cat and Dog) under Transfer of residence in the case of two years stay abroad or more; subject to declaration an advance No Objection Certificate (NOC) from Animal Quarantine and Certification Services or a DGFT import authorization.",
  // Visible Q&A (no FAQPage schema). Answers derived from pp.58-63. The
  // instrument name/year (C) and the Pets sentence (C) are kept out of answers.
  faqs: [
    {
      q: "What is the general duty-free baggage allowance on arrival?",
      a: "Passengers, excluding an infant, are allowed duty free clearance of articles up to a prescribed value: INR 75,000 for a Resident Indian, a Tourist of Indian origin and a Foreigner with a valid Indian visa other than a tourist visa; INR 25,000 for a Tourist of foreign origin; and INR 2,500 for Crew Members. This applies to arrival through any mode other than land.",
    },
    {
      q: "What is the difference between the Green Channel and the Red Channel?",
      a: "When a passenger chooses the Green Channel, it is deemed to be declared that there is nothing dutiable, restricted or prohibited in the baggage. In the Red Channel, the goods are made available for inspection by the Customs Authorities.",
    },
    {
      q: "How much gold jewellery can be carried duty free?",
      a: "A resident or tourist of Indian origin who has been residing abroad for more than one year can carry jewellery duty free: 40 gms for a female and 20 gms for a male.",
    },
    {
      q: "How much foreign and Indian currency can a passenger carry?",
      a: "A passenger can carry USD 5,000 or equivalent in cash, and the total aggregate of foreign exchange in the form of currency notes, bank notes or travellers cheques allowed is USD 10,000 or equivalent. When this limit is exceeded, a formal declaration is made to the Customs Authorities. A person resident in India may take outside India Indian currency notes not exceeding INR 25,000.",
    },
    {
      q: "What are the transfer of residence allowances?",
      a: "For Indian residents and tourists of Indian origin, the allowance is INR 1,50,000 for 3 to 12 months abroad, INR 3,00,000 for a minimum of 1 year during the preceding 2 years, and INR 7,50,000 for more than 2 years. For a foreigner with a valid visa other than a tourist visa, it is INR 1,50,000 for 6 to 12 months in India, INR 3,00,000 for 1 to 2 years and INR 7,50,000 for more than 2 years. The allowances apply only to bona fide (used articles) household effects and personal articles, subject to specified conditions and exclusions.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Postal Export (p.6 definition; pp.63-64 list)
// CLIENT_CONFIRMATION_REQUIRED: the word "Aggregator" (p.6 list title) is not
// defined in the PDF; the p.64 image's "No value limit for export" is not in
// the PDF text. Neither is used in descriptions, JSON-LD or FAQ answers.
// The p.6 sentence ends with an unexplained asterisk, and p.64 has stray "**".
// ---------------------------------------------------------------------------
export const POSTAL_EXPORT_PAGE = {
  // p.6
  definition:
    "The Foreign Trade Policy (FTP) 2023 through \"Dak Ghar Niryat Kendra\" enables MSMEs to export globally through India Post.",
  // p.64
  intro:
    "E-Commerce Exports through India Post, especially for MSMEs, start-ups, artisans, weavers, craftsmen, and e-commerce exporters.",
  groups: [
    {
      id: "what-it-is",
      title: "What it is",
      items: ["Dak Ghar Niryat Kendras (DNKs) established to facilitate exports through India Post."],
    },
    {
      id: "what-you-need",
      title: "What you need",
      lead: "Key documents such as:",
      leadList: ["IEC", "GSTIN", "Bank account", "AD Code"],
      items: [
        "Registration, customs procedures, and Postal Bill of Export (PBE) requirements.",
        "Product classification, permissions, and export compliance.",
      ],
    },
    {
      id: "how-it-works",
      title: "How it works",
      items: ["DNK portal booking, shipment tracking, and documentation requirements."],
    },
    {
      id: "benefits",
      title: "Benefits",
      items: [
        "Benefits such as pay-for-exact-weight, end-to-end tracking, and access to postal export services.",
        "Contractual customer benefits and volume discounts.",
      ],
    },
  ],
  // p.64 final bullet. The other closing bullet, "List of operational Dak Ghar
  // Niryat Kendras across India", is a heading for a list the PDF does not
  // contain, so it is not shown.
  encouragement: "Exporters are encouraged to register on the DNK portal and start exporting through India Post.",
  // Visible Q&A (no FAQPage schema), derived from pp.6, 64.
  faqs: [
    {
      q: "What is a Dak Ghar Niryat Kendra (DNK)?",
      a: "Dak Ghar Niryat Kendras (DNKs) were established to facilitate exports through India Post. Under the Foreign Trade Policy (FTP) 2023, they enable MSMEs to export globally through India Post.",
    },
    {
      q: "Which key documents are needed?",
      a: "Key documents include the IEC, GSTIN, a bank account and the AD Code.",
    },
    {
      q: "What benefits are listed for exporting through India Post?",
      a: "Benefits such as pay-for-exact-weight, end-to-end tracking and access to postal export services, along with contractual customer benefits and volume discounts.",
    },
  ],
};

// ---------------------------------------------------------------------------
// E-Commerce Export (pp.64-67)
// ---------------------------------------------------------------------------
export const ECOMMERCE_EXPORT_PAGE = {
  intro: "E-commerce export refers to the sale of goods from India to overseas customers through online platforms, websites, marketplaces, or direct-to-consumer channels.",
  serviceIntro: "PORTMATRIX trains entrepreneurs in the segment of E-Commerce export.",
  keyFeatures: [
    "Online order placement by foreign buyers.",
    "Small-value shipments exported through courier, postal, or express cargo channels.",
    "Faster access to global markets without establishing a physical presence abroad.",
    "Suitable for MSMEs, startups, artisans, and manufacturers.",
  ],
  platforms: ["Amazon Global Selling", "eBay", "Etsy", "Alibaba.com", "Flipkart (cross-border initiatives)"],
  requirements: [
    "Import Export Code (IEC)",
    "GST registration (where applicable)",
    "Bank account for receiving export proceeds",
    "Registration on e-commerce marketplaces or own website",
    "Compliance with Indian Customs and foreign country import regulations",
  ],
  processFlow: [
    "Product Listing in the E-Commerce Portal",
    "Foreign Customer Order",
    "Online Payment",
    "Packing & Labelling",
    "Customs Clearance",
    "Courier / Postal Dispatch",
    "Delivery to Overseas Buyer",
    "Export Proceeds Realisation",
  ],
  // The first four Benefits bullets (p.67); the fifth ("Government support
  // through export promotion schemes") leads the Government Support section.
  benefits: ["Access to customers worldwide", "Lower marketing and distribution costs", "Faster order processing", "Increased export opportunities for MSMEs"],
  govSupportIntro: "Government support through export promotion schemes. Indian e-commerce exporters can also benefit from:",
  govSupport: [
    { text: "DGFT Incentives Scheme" },
    { text: "Export Promotion Capital Goods (EPCG) Scheme", href: "/services/epcg" },
    { text: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
    { text: "Authorised Economic Operator", href: "/services/aeo" },
  ],
  majorProducts: ["Handicrafts", "Textiles and garments", "Jewellery", "Leather products", "Home décor items", "Ayurvedic and wellness products", "Engineering products", "Consumer goods"],
  // Visible Q&A (no FAQPage schema), derived from pp.64-67.
  faqs: [
    {
      q: "What is e-commerce export?",
      a: "E-commerce export refers to the sale of goods from India to overseas customers through online platforms, websites, marketplaces, or direct-to-consumer channels.",
    },
    {
      q: "What is required to export through e-commerce from India?",
      a: "An Import Export Code (IEC); GST registration (where applicable); a bank account for receiving export proceeds; registration on e-commerce marketplaces or your own website; and compliance with Indian Customs and foreign country import regulations.",
    },
    {
      q: "Which platforms are popular for e-commerce export?",
      a: "Amazon Global Selling, eBay, Etsy, Alibaba.com and Flipkart (cross-border initiatives).",
    },
    {
      q: "What are the steps in the e-commerce export process?",
      a: "Product listing in the e-commerce portal, foreign customer order, online payment, packing and labelling, customs clearance, courier or postal dispatch, delivery to the overseas buyer, and export proceeds realisation.",
    },
  ],
};

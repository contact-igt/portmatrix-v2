// Source: docs/source/PORTMATRIX-website-source.pdf (text extraction:
// docs/source/PORTMATRIX_SOURCE_TEXT.txt) pp.39-57 — MOOWR, Advance
// Authorisation, EPCG, SEZ, FTWZ, EOU, AEO.
// Page numbers in comments are the PDF's printed page numbers (the footer
// number follows the content it belongs to).
//
// Content-refinement pass: restructured for scanning; every distinct source
// fact that was on the earlier pages is still present. Where the source gives
// the same fact twice, it appears once (noted next to the data).
// CLIENT_CONFIRMATION_REQUIRED (kept exactly as the PDF words it, not
// resolved): Advance Authorisation `serviceIntro` — "…(DFIA) on post export".

// ─────────────────────────────── MOOWR · pp.39–42 ───────────────────────────────
export const MOOWR_PAGE = {
  // p.39 sub-title under "8. MOOWR" — spelled out in the page kicker.
  expansion: "Manufacture and Other Operations in Warehouse Regulations",
  // p.39 headline (shown as the first key point)
  tagline: "Import without payment of Duty / IGST",
  // p.39 intro, with the garbled "It can be stored… and to carry out" tidied.
  intro:
    "MOOWR, or Section 65 Warehousing Unit, is a scheme that allows manufacturers to import raw materials and capital goods without paying customs duty upfront. The goods can be stored in a bonded warehouse and used to carry out manufacturing or other operations.",
  // p.39 — unchanged
  serviceIntro: "We facilitate the registration of MOOWR License.",
  // pp.39–40
  definition:
    "MOOWR stands for Manufacture and Other Operations in Warehouse Regulations, 2019 under the Indian Customs framework. It allows companies to operate manufacturing, assembly, processing, packaging, testing, or other operations inside a bonded warehouse without upfront customs duty payment.",
  // p.40
  keyPoints: [
    { title: "Import without payment of Duty / IGST", text: "Duties are paid only when goods are cleared into the domestic market." },
    { title: "No export obligation", text: "Unlike SEZ, Advance Authorisation or EPCG, there is no mandatory export commitment." },
    { title: "Sell in India or export", text: "Goods can be sold in India as well; exported goods generally remain duty-free." },
    { title: "No time limit for storage", text: "Imported capital goods and inputs can remain in the bonded warehouse without strict time restrictions." },
  ],
  // p.40 — "Under Section 65 of The Customs Act 1962…"
  legalBasis: {
    lead: "Under Section 65 of The Customs Act 1962, companies can convert their factory or warehouse into a Private Bonded Warehouse. The imported goods can be stored and used without immediate payment of:",
    items: ["Basic Customs Duty (BCD)", "IGST", "Social Welfare Surcharge", "Certain additional duties"],
    after: "Duties are paid only when goods are cleared into the domestic market. Exported goods generally remain duty-free.",
  },
  // p.40
  benefits: [
    { title: "Duty Deferment", desc: "Import raw materials and capital goods without upfront customs duty payment." },
    { title: "No Export Obligation", desc: "Unlike SEZ, Advance Authorisation or EPCG, there is no mandatory export commitment. Goods can be sold in India as well." },
    { title: "Better Cash Flow", desc: "Since duties are deferred, working capital requirements reduce significantly." },
    { title: "No Time Limit for Storage", desc: "Imported capital goods and inputs can remain in the bonded warehouse without strict time restrictions." },
    { title: "Suitable for Domestic & Export Businesses", desc: "The scheme benefits Manufacturers and Importers / Exporters." },
  ],
  // pp.40–41 — flow chart; the last step is two outcomes, shown as a branch.
  flowSteps: [
    "Apply for Private Warehousing License U/S 58 and MOOWR License U/S 65 simultaneously with the guidance of PORTMATRIX",
    "Import Goods",
    "Store in MOOWR Warehouse",
    "Manufacture / Process",
  ],
  flowOutcomes: [
    { label: "Sell in India", result: "Duty payable at the time of clearance" },
    { label: "Export finished goods", result: "No Customs duty" },
  ],
  // p.41
  operationsLead: "Inside a MOOWR Warehouse, businesses can perform:",
  operationsAllowed: ["Manufacturing", "Assembly", "Packaging", "Labeling", "Testing", "Repairing", "Reconditioning", "Processing"],
  // p.41
  eligibility: {
    lead: "Any Indian entity can apply if:",
    items: [
      "It has a warehouse facility",
      { text: "It obtains:", sub: ["Section 58 - Warehouse license", "Section 65 - Manufacturing permission"] },
    ],
    note: "Existing factories can also be converted into MOOWR units.",
  },
  // pp.41–42 (the source spells "Exempted" as "Excempted")
  comparisonTable: {
    caption: "MOOWR vs SEZ vs AA / EPCG",
    headers: ["Feature", "MOOWR", "SEZ", "AA / EPCG"],
    rows: [
      ["Export Obligation", "No", "Yes", "Yes"],
      ["Domestic Sales Allowed", "Yes", "Restricted", "Restricted"],
      ["Duty", "Deferred", "Exempted", "Exempted"],
      ["Capital Goods Coverage", "Yes", "Yes", "Yes"],
      ["Location Restriction", "No", "Yes", "No"],
      ["GST Benefits", "Limited", "Strong", "Limited"],
    ],
  },
  // p.42
  compliance: {
    lead: "MOOWR units must maintain:",
    items: ["Digital inventory records", "Customs audit trail", "Monthly returns", "Bond execution", "Warehouse security controls"],
    note: "Customs authorities supervise compliance periodically.",
  },
  faqs: [
    {
      q: "What does MOOWR stand for?",
      a: "MOOWR stands for Manufacture and Other Operations in Warehouse Regulations, 2019 under the Indian Customs framework. A MOOWR unit is also called a Section 65 Warehousing Unit.", // pp.39–40
    },
    {
      q: "Is there an export obligation under MOOWR?",
      a: "No. Unlike SEZ, Advance Authorisation or EPCG, there is no mandatory export commitment, and goods can be sold in India as well.", // p.40; table p.41
    },
    {
      q: "When is duty payable under MOOWR?",
      a: "Duties are paid only when goods are cleared into the domestic market. If finished goods are sold in India, duty is payable at the time of clearance; if they are exported, there is no Customs duty.", // pp.40–41
    },
    {
      q: "Who can apply for MOOWR?",
      a: "Any Indian entity can apply if it has a warehouse facility and obtains a Section 58 warehouse license and Section 65 manufacturing permission. Existing factories can also be converted into MOOWR units.", // p.41
    },
    {
      q: "What compliance does a MOOWR unit need to maintain?",
      a: "MOOWR units must maintain digital inventory records, a customs audit trail, monthly returns, bond execution and warehouse security controls. Customs authorities supervise compliance periodically.", // p.42
    },
  ],
};

// ─────────────────────── Advance Authorisation · pp.42–45 ───────────────────────
export const ADVANCE_AUTHORISATION_PAGE = {
  tagline: "Duty free import of raw materials",
  // p.42 intro, with the dangling "It is…" given its subject.
  intro:
    "The Advance Authorisation Scheme is a duty exemption scheme by DGFT that enables duty free import of raw materials for export production.",
  // p.42 — unchanged. CLIENT_CONFIRMATION_REQUIRED ("on post export").
  serviceIntro: "PORTMATRIX guides the exporters to register Advance Authorisation (AA) and Duty Free Import Authorisation (DFIA) on post export.",
  // p.43
  definition:
    "The Advance Authorisation Scheme (AAS) is an export incentive program promoted by the Ministry of Commerce and Industries; to encourage exports by reducing input costs for manufacturers. The Advance Authorisation Scheme allows exporters to import raw materials, components, or inputs duty-free (i.e., without paying customs duties), provided those inputs are used to produce goods that will be exported.",
  // p.43 — key features as groups
  keyFeatures: [
    { title: "Duty-free import of inputs such as:", items: ["Raw materials", "Intermediate goods", "Packaging materials", "Fuel (in some cases)"] },
    { title: "Export obligation", text: "The importer must export finished goods using those inputs within a specified time frame." },
    { title: "Value addition requirement", text: "Exported goods must have a minimum value addition over imported inputs (e.g. typically around 15%, though it can vary)." },
    { title: "Wide applicability", items: ["Manufacturer exporters", "Merchant exporters tied to supporting manufacturers"] },
  ],
  // p.43
  types: [
    { name: "Physical Exports", desc: "Goods are physically exported out of the country." },
    { name: "Deemed Exports", desc: "Supplies to units like EOU, EHTP, STP, BTP are treated as exports." },
    { name: "Annual Requirement Authorisation", desc: "For exporters with regular production needs." },
  ],
  // pp.43–44
  benefits: ["Reduces production cost → increases global competitiveness", "Improves cash flow (no upfront duty payment)", "Encourages higher export volumes"],
  compliance: [
    "Must maintain detailed records of input usage",
    "Must fulfill Export Obligation within deadline",
    "Subject to audit by authorities like the Directorate General of Foreign Trade (DGFT)",
  ],
  // p.44
  workedExample: "A textile exporter imports fabric duty-free under AAS → uses it to manufacture garments → exports garments → fulfills Export Obligation → no duty payable.",
  // pp.44–45 — the same ten steps, grouped into three stages (step text unchanged).
  flowStages: [
    {
      title: "Apply",
      steps: [
        "Exporter receives Export Order",
        "Estimate Raw Materials / Inputs Required",
        "Apply for Advance Authorisation to DGFT with the guidance of PORTMATRIX",
        "DGFT Issues Advance Authorisation License",
      ],
    },
    {
      title: "Import and make",
      steps: ["Import Inputs / Raw Materials Duty-Free", "Manufacture the Finished Goods"],
    },
    {
      title: "Export and close",
      steps: ["Export the Finished Goods", "Submit Export Proof & Documents", "Fulfil Export Obligation", "Redemption / Closure of Authorisation"],
    },
  ],
  // p.45
  authorities: ["Directorate General of Foreign Trade (DGFT)", "Central Board of Indirect Taxes and Customs (CBIC)"],
  documents: ["Import Invoice", "Bill of Entry", "Shipping Bill", "Export Invoice", "e-BRC (Bank Realisation Certificate)"],
  faqs: [
    {
      q: "What is the Advance Authorisation Scheme?",
      a: "It is a duty exemption scheme by DGFT that enables duty free import of raw materials for export production. It is an export incentive program promoted by the Ministry of Commerce and Industries to encourage exports by reducing input costs for manufacturers.", // pp.42–43
    },
    {
      q: "Which inputs can be imported duty-free?",
      a: "Raw materials, components or inputs, such as raw materials, intermediate goods, packaging materials and, in some cases, fuel, provided they are used to produce goods that will be exported.", // p.43
    },
    {
      q: "What is the export obligation?",
      a: "The importer must export finished goods using those inputs within a specified time frame, and must fulfill the Export Obligation within the deadline.", // pp.43–44
    },
    {
      q: "Is there a value addition requirement?",
      a: "Yes. Exported goods must have a minimum value addition over imported inputs (e.g. typically around 15%, though it can vary).", // p.43
    },
    {
      q: "What records and audits apply?",
      a: "Detailed records of input usage must be maintained, and the scheme is subject to audit by authorities like the Directorate General of Foreign Trade (DGFT).", // p.44
    },
  ],
};

// ─────────────────────────────── EPCG · pp.45–47 ───────────────────────────────
export const EPCG_PAGE = {
  tagline: "Duty free import of Capital Goods",
  // p.45 intro, restated as a plain sentence.
  intro:
    "The EPCG Scheme facilitates import of capital goods at zero customs duty and other taxes, for producing quality goods and services that enhance India's manufacturing competitiveness and boost export capability.",
  // p.45 — unchanged
  serviceIntro: "PORTMATRIX facilitates exporters to avail EPCG License.",
  // p.46
  definition:
    "The Export Promotion Capital Goods (EPCG) Scheme is a foreign trade incentive scheme under India's Foreign Trade Policy (FTP). It allows import of capital goods at zero customs duty for producing goods or services meant for export.",
  // p.46
  objective: "To help Indian exporters modernize technology and improve export competitiveness by reducing the cost of importing machinery and equipment.",
  // p.46 — "Who can use it" / "What it covers" / "Export obligation"
  whoCanUse: ["Manufacturers", "Exporters", "Service providers"],
  whatItCovers: {
    lead: "Import of capital goods at concessional/zero customs duty",
    supportsLead: "Supports:",
    supports: ["Machinery", "Equipment", "Spares", "Tools", "Computer systems"],
  },
  exportObligationNote: "Export obligation must be fulfilled within a specified period (usually 6 years + 2 years extensions may be provided).",
  // pp.46–47
  flowChart: [
    "Apply for EPCG Authorization with the guidance of PORTMATRIX",
    "Import Capital Goods at Zero Duty",
    "Install & Use Machinery",
    "Manufacture Goods / Provide Services",
    "Export Products or Services",
    "Fulfill Export Obligation",
    "Submit Documents to DGFT & Customs",
    "EPCG Authorization Closed",
  ],
  // p.47
  benefits: ["Reduces machinery import cost", "Improves manufacturing capability", "Encourages exports", "Enhances global competitiveness", "Helps technology upgradation"],
  // p.47 — the example, split into its three source sentences
  workedExample: {
    setup: "A company imports a machine worth ₹1 crore under EPCG and saves ₹7.50 lakh duty.",
    rule: "The company must achieve 6 times the amount of duty saved, in a period of next 6 years.",
    result: "Export Obligation is: ₹7.50 lakh × 6 times = ₹45 lakh.",
    figure: "₹45 lakh",
  },
  authorities: ["Directorate General of Foreign Trade", "Central Board of Indirect Taxes and Customs"],
  faqs: [
    {
      q: "What can be imported under the EPCG Scheme?",
      a: "Capital goods at concessional/zero customs duty, for producing goods or services meant for export. The scheme supports machinery, equipment, spares, tools and computer systems.", // p.46
    },
    {
      q: "Who can use the EPCG Scheme?",
      a: "The scheme is applicable for manufacturers, exporters and service providers.", // p.46
    },
    {
      q: "What is the export obligation period?",
      a: "Export obligation must be fulfilled within a specified period, usually 6 years, and 2 years of extensions may be provided.", // p.46
    },
    {
      q: "How is the export obligation calculated?",
      a: "In the source's example, a company imports a machine worth ₹1 crore and saves ₹7.50 lakh duty. It must achieve 6 times the duty saved over the next 6 years: ₹7.50 lakh × 6 times = ₹45 lakh.", // p.47
    },
  ],
};

// ─────────────────────────────── SEZ · pp.48–49 ───────────────────────────────
export const SEZ_PAGE = {
  tagline: "Duty free enclave for MSMEs",
  // p.48 — first two sentences of the cover statement; the third (companies
  // enjoy…) is `enjoyLine` below, shown with the features and benefits.
  intro:
    "A Special Economic Zone (SEZ) is a specifically demarcated region where business and trade laws are more liberal compared to the rest of the country. The goal is to attract foreign investment, boost exports, and generate employment.",
  enjoyLine: "SEZ Companies enjoy tax benefits, simplified regulations, world-class infrastructure, duty free imports / exports.",
  // p.48 — unchanged
  serviceIntro: "PORTMATRIX assists in the registration of SEZs.",
  // p.48 (the sentence "SEZs are established to promote exports, attract
  // investment, create jobs, and develop infrastructure" is the Objectives
  // list below, so it is not repeated here).
  definition:
    "SEZ is a specially designated duty-free area treated as foreign territory for trade operations, duties, and tariffs. SEZ framework is governed by the SEZ Act, 2005 and SEZ Rules, 2006.",
  simpleDefinition: "SEZ = Duty-free Business Zone created to promote exports and investment.",
  // pp.48–49 — "Main Features" (6) and "Benefits for Businesses" (5) merged.
  // Merged pairs: "Duty-free import / procurement…" + "Customs duty exemptions";
  // "Better infrastructure and logistics support" + "Improved warehousing and
  // logistics". All other items kept as written.
  featuresAndBenefits: [
    "Duty-free import / procurement of goods for development and operations, with customs duty exemptions",
    "Simplified customs and compliance procedures",
    "Faster import / export processing",
    "Income tax and GST-related benefits (subject to current regulations)",
    "100% Foreign Direct Investment (FDI) allowed in many sectors",
    "Single-window clearance mechanism",
    "Better infrastructure and logistics support, including improved warehousing and logistics",
    "Better global supply chain connectivity",
    "Export-oriented growth opportunities",
  ],
  // p.49
  objectives: [
    "Promote exports of goods and services",
    "Attract domestic and foreign investments",
    "Generate employment opportunities",
    "Develop world-class infrastructure",
    "Enhance India's global trade competitiveness",
  ],
  // p.49 (the third type links to the FTWZ page)
  types: [
    { name: "Multi-Product SEZ", desc: "Multiple industries and sectors" },
    { name: "Sector-Specific SEZ", desc: "Dedicated to one industry (IT, Pharma, Textiles, etc.)" },
    { name: "Free Trade & Warehousing Zone (FTWZ)", desc: "Trading, warehousing, logistics activities", href: "/services/ftwz" },
  ],
  localExample: "Mahindra World City - Tamil Nadu - IT & Manufacturing",
  authority: "Department of Commerce – SEZ India",
  faqs: [
    {
      q: "What is a Special Economic Zone (SEZ)?",
      a: "An SEZ is a specially designated duty-free area treated as foreign territory for trade operations, duties, and tariffs. It is a specifically demarcated region where business and trade laws are more liberal compared to the rest of the country.", // p.48
    },
    {
      q: "What types of SEZs are there?",
      a: "The source lists Multi-Product SEZs (multiple industries and sectors), Sector-Specific SEZs (dedicated to one industry, such as IT, Pharma or Textiles) and the Free Trade & Warehousing Zone (FTWZ), which is for trading, warehousing and logistics activities.", // p.49
    },
    {
      q: "How is an SEZ different from an FTWZ?",
      a: "An FTWZ is a special category of SEZ. An SEZ has a manufacturing and services focus (export production, industrial operations), while an FTWZ has a warehousing and trading focus (import / export storage and distribution, logistics and supply chain operations).", // pp.50, 52–53
    },
  ],
};

// ─────────────────────────────── FTWZ · pp.50–53 ───────────────────────────────
export const FTWZ_PAGE = {
  tagline: "Duty free trading hub for MNCs",
  // p.50 cover statement ("FTWZ is a special category of SEZ" moves to the definition)
  intro:
    "A Free Trade Warehousing Zone is designed mainly for trading and warehousing of goods. This allows businesses to delay or avoid duty, improving cash flow and flexibility.",
  // p.50 — unchanged
  serviceIntro: "PORTMATRIX supports FTWZ registration.",
  // p.50 — rendered in the page with a link on "Special Economic Zone"
  definitionBefore: "A Free Trade Warehousing Zone (FTWZ) is a special category of ",
  definitionLink: "Special Economic Zone",
  definitionAfter:
    " focused on warehousing, trading, logistics, and re-export activities. FTWZs are treated as foreign territory for customs purposes, allowing goods to be imported, stored, processed, and re-exported with major duty and tax advantages.",
  definitionText:
    "A Free Trade Warehousing Zone (FTWZ) is a special category of Special Economic Zone focused on warehousing, trading, logistics, and re-export activities. FTWZs are treated as foreign territory for customs purposes, allowing goods to be imported, stored, processed, and re-exported with major duty and tax advantages.",
  simpleDefinition: "FTWZ is a duty-free logistics and warehousing zone that facilitates international trade, storage, and re-export operations in India.",
  // p.50 "Key Features of FTWZ"
  keyPoints: [
    { title: "Duty-free storage of imported goods" },
    { title: "Customs duty paid only when goods enter the Indian market (DTA)" },
    { title: "Re-export without customs duty" },
  ],
  // p.51 — the source's "Value-added services allowed" list held 8 items; the
  // first five are services, the last three are features (see otherFeatures).
  // p.52 "Activities Allowed" lists packaging & repackaging, relabeling and
  // assembly of kits, which are the same services as Repacking / Labeling /
  // Kitting, so they are folded in here ("/") and not listed twice.
  valueAddedServices: ["Labeling / relabeling", "Repacking / packaging & repackaging", "Kitting / assembly of kits", "Assembly", "Palletization"],
  otherFeatures: ["Faster customs clearance", "Foreign currency transactions permitted", "Treated as foreign territory under customs law"],
  // p.52 "Activities Allowed in FTWZ" minus the three folded into the services above
  activitiesAllowed: ["Warehousing", "Trading", "Re-export", "Quality inspection", "Refrigerated storage", "Inventory management"],
  // pp.51–52 — workflow; last step is two outcomes, shown as a branch
  workflowSteps: [
    "Foreign Supplier",
    "Import into FTWZ with the guidance of PORTMATRIX",
    "Duty-free Storage",
    "Value Addition / Packaging / Labeling",
  ],
  workflowOutcomes: [
    { label: "Re-export", result: "No duty" },
    { label: "Sale in India", result: "Duty paid only at clearance" },
  ],
  // pp.51–52
  benefits: {
    importers: ["Deferred customs duty", "Reduced working capital blockage", "Faster supply chain movement", "Lower port demurrage costs"],
    exporters: ["Re-export without import duty (Merchant Trade Transactions-MTT)", "Export benefits available", "Long-term storage flexibility"],
    globalTraders: ["No permanent establishment required in some cases", "Foreign suppliers can store inventory in India", "Multiple ownership transfers allowed within FTWZ"],
  },
  // p.52
  legalFramework: ["Ministry of Commerce and Industry", "Special Economic Zones Act 2005", "SEZ Rules 2006", "Foreign Trade Policy (FTP)"],
  localExample: { state: "Tamil Nadu", location: "Sriperumbudur", developer: "J Matadee FTWZ" },
  // pp.52–53
  comparisonTable: {
    caption: "Difference between SEZ and FTWZ",
    headers: ["SEZ", "FTWZ"],
    rows: [
      ["Manufacturing & services focus", "Warehousing & Trading Focus"],
      ["Export production", "Import / Export Storage & Distribution"],
      ["Industrial Operations", "Logistics & Supply Chain Operations"],
      ["Broader Economic Zone", "Specialized Logistics Zone"],
    ],
  },
  faqs: [
    {
      q: "What is a Free Trade Warehousing Zone and how does it differ from an SEZ?",
      a: "An FTWZ is a special category of Special Economic Zone focused on warehousing, trading, logistics and re-export. An SEZ has a manufacturing and services focus, while an FTWZ has a warehousing and trading focus.", // pp.50, 52–53
    },
    {
      q: "When is customs duty paid in an FTWZ?",
      a: "Imported goods can be stored duty-free, and customs duty is paid only when goods enter the Indian market (DTA). Goods that are re-exported attract no duty.", // pp.50–51
    },
    {
      q: "Which value-added services are allowed?",
      a: "Labeling, repacking, kitting, assembly and palletization.", // p.51
    },
    {
      q: "Where is a major FTWZ in Tamil Nadu?",
      a: "The source names J Matadee FTWZ at Sriperumbudur, Tamil Nadu.", // p.52
    },
  ],
};

// ─────────────────────────────── EOU · pp.53–54 ───────────────────────────────
export const EOU_PAGE = {
  tagline: "Export Goods Manufacturing Hub",
  // p.53 — the cover statement is the definition, shown once (DefinitionBlock)
  definition:
    "An Export Oriented Unit (EOU) is a business unit approved by the Government of India that undertakes to export its entire production of goods or services, except for permitted sales in the Domestic Tariff Area (DTA).",
  // p.53 — unchanged
  serviceIntro: "PORTMATRIX supports in the registration process of EOUs.",
  // p.53 — same five objectives, shown as one line (three overlap SEZ's list)
  objectives: ["promote exports from India", "earn foreign exchange", "generate employment", "encourage investment and technology development", "enhance India's global trade competitiveness"],
  // pp.53–54
  eligibleActivities: ["Manufacturing", "Service exports", "Software development", "Repair, reconditioning, and re-engineering", "Gems & jewellery", "Agriculture and agro-processing", "Biotechnology", "Aquaculture, poultry, horticulture, floriculture, etc."],
  // p.54 — the last item is `locationBenefit` (links to the SEZ page)
  benefits: ["Duty-free import of raw materials and capital goods", "Duty-free procurement from domestic suppliers", "GST-related benefits and refunds as applicable", "Faster customs clearances", "100% FDI permitted in many sectors"],
  locationBenefit: { before: "Can be established anywhere in India (unlike ", link: "SEZs", after: ", which are location-specific)" },
  // p.54
  eligibility: ["Primarily Export-Oriented operations", "Positive Net Foreign Exchange (NFE) earnings over the prescribed period", "Generally, minimum investment of ₹1 crore in plant and machinery (with exemptions for sectors such as IT, biotechnology, handicrafts, and agriculture)", "Trading activities are generally not permitted under the EOU scheme."],
  // p.54
  approvalProcess: [
    "Incorporate the business entity.",
    "Obtain PAN, GST, and IEC.",
    "Apply through the Development Commissioner.",
    "Obtain Letter of Permission (LoP).",
    "Execute customs bonding (B-17 Bond).",
    "Start operations and maintain export obligations and compliance requirements.",
  ],
  faqs: [
    {
      q: "What is an Export Oriented Unit (EOU)?",
      a: "An EOU is a business unit approved by the Government of India that undertakes to export its entire production of goods or services, except for permitted sales in the Domestic Tariff Area (DTA).", // p.53
    },
    {
      q: "What activities can an EOU be established for?",
      a: "Manufacturing, service exports, software development, repair, reconditioning and re-engineering, gems & jewellery, agriculture and agro-processing, biotechnology, and aquaculture, poultry, horticulture, floriculture, etc.", // pp.53–54
    },
    {
      q: "What is the basic eligibility for an EOU?",
      a: "Primarily export-oriented operations; positive Net Foreign Exchange (NFE) earnings over the prescribed period; and, generally, a minimum investment of ₹1 crore in plant and machinery, with exemptions for sectors such as IT, biotechnology, handicrafts, and agriculture.", // p.54
    },
    {
      q: "What are the steps to get EOU approval?",
      a: "Incorporate the business entity; obtain PAN, GST, and IEC; apply through the Development Commissioner; obtain the Letter of Permission (LoP); execute customs bonding (B-17 Bond); then start operations and maintain export obligations and compliance requirements.", // p.54
    },
    {
      q: "Can an EOU be set up anywhere in India, and is trading allowed?",
      a: "An EOU can be established anywhere in India, unlike SEZs, which are location-specific. Trading activities are generally not permitted under the EOU scheme.", // p.54
    },
  ],
};

// ─────────────────────────────── AEO · pp.55–57 ───────────────────────────────
export const AEO_PAGE = {
  tagline: "Global Certification for secure, compliant and efficient Customs processes",
  // p.55 cover statement, shortened — the benefits it listed are in the
  // benefits block below.
  intro:
    "AEO is a flagship trade facilitation initiative under the World Customs Organization. It recognizes international businesses and gives them customs facilitation benefits, such as faster customs clearance and priority processing of consignments.",
  // p.55 — unchanged
  serviceIntro: "We support in facilitating the procedures for obtaining AEO status.",
  // p.55
  simpleDefinition: "AEO = Trusted International Trade Partner certified by Customs.",
  whatIsAeo: "An AEO is a business entity involved in international trade that is recognized by the Customs as a trusted and compliant trade partner.",
  definition: "The Central Board of Indirect Taxes and Customs (CBIC) introduced the Indian AEO Programme to promote secure and faster international trade. It is based on the World Customs Organization SAFE Framework standards.",
  // p.56
  applicantLead: "The AEO programme covers entities in the international supply chain, including:",
  applicantTypes: ["Importers", "Exporters", "Customs Brokers", "Logistics Providers", "Freight Forwarders", "Warehouse Operators", "Port Operators", "Terminal Operators"],
  // p.56
  categoriesTable: {
    caption: "AEO categories in India",
    headers: ["Category", "Applicable To", "Level", "Validity"],
    rows: [
      ["AEO-T1", "Importers / Exporters", "Entry level", "3 Years"],
      ["AEO-T2", "Importers / Exporters", "Advanced", "3 Years"],
      ["AEO-T3", "Importers / Exporters", "Highest accreditation", "5 Years"],
      ["AEO-LO", "Logistics Providers, Custodians or Terminal Operators, Customs Brokers and Warehouse Operators", "Logistics category", "5 Years"],
    ],
  },
  // pp.55–57 — ONE benefits block. The source gives a general list for
  // "AEO-certified entities" (10 items, p.55–56) and two audience lists
  // (pp.56–57). "Deferred duty payment" appears in both source lists; it is
  // shown once, under the general group. No other item is dropped or reworded.
  benefitGroups: [
    {
      audience: "All AEO-certified entities",
      items: [
        "Secure supply chain",
        "Credibility with the international partners",
        "Faster customs clearance",
        "Reduced cargo inspections",
        "Priority processing",
        "Deferred duty payment",
        "Direct Port Delivery (DPD) / Direct Port Entry (DPE)",
        "Lower transaction costs",
        "International recognition under Mutual Recognition Agreements (MRAs)",
        "Waiver of full or part of the Bank Guarantee requirements / Merchant overtime fees",
      ],
    },
    {
      audience: "Importers & exporters",
      items: ["Faster release of cargo", "Reduced examination percentage", "Priority assessment", "Self-certified copies accepted", "Fewer document verifications"],
    },
    {
      audience: "Customs brokers & logistics operators",
      items: ["Priority movement of consignments", "Better global credibility", "Improved client confidence", "Reduced delays in supply chain operations"],
    },
  ],
  // p.57
  eligibilityLead: "An applicant generally should have:",
  eligibility: ["Good compliance record", "Financial solvency", "Secure supply chain processes", "Proper internal controls", "Minimum business activity period (as prescribed by CBIC)"],
  applicationProcess: [
    "Self-assessment of eligibility",
    "Online registration on AEO portal",
    "Submission of application & documents",
    "Customs verification / audit",
    "Approval and grant of certification",
  ],
  portal: "Official portal: AEO India Portal",
  // p.57 — "Importance of AEO in India" folded into one sentence
  importance:
    "The AEO programme supports ease of doing business, secure global supply chains, faster exports and imports, reduced logistics cost and a trusted trader ecosystem. India's AEO programme is aligned with the WTO Trade Facilitation Agreement (TFA).",
  faqs: [
    {
      q: "What is an AEO?",
      a: "AEO stands for Authorised Economic Operator: a business entity involved in international trade that is recognized by the Customs as a trusted and compliant trade partner (AEO = Trusted International Trade Partner certified by Customs).", // p.55
    },
    {
      q: "What are the AEO categories and their validity?",
      a: "AEO-T1 (entry level) and AEO-T2 (advanced) are for importers / exporters and are valid for 3 years. AEO-T3 (highest accreditation) is for importers / exporters and AEO-LO (logistics category) is for logistics providers, custodians or terminal operators, customs brokers and warehouse operators; both are valid for 5 years.", // p.56
    },
    {
      q: "Who can apply for AEO status?",
      a: "The programme covers entities in the international supply chain, including importers, exporters, customs brokers, logistics providers, freight forwarders, warehouse operators, port operators and terminal operators.", // p.56
    },
    {
      q: "What is the basic eligibility for AEO?",
      a: "An applicant generally should have a good compliance record, financial solvency, secure supply chain processes, proper internal controls and a minimum business activity period (as prescribed by CBIC).", // p.57
    },
    {
      q: "How does the AEO application process work?",
      a: "The steps are: self-assessment of eligibility; online registration on the AEO portal; submission of application and documents; customs verification / audit; and approval and grant of certification.", // p.57
    },
  ],
};

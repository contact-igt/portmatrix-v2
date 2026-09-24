// Source: docs/source/PORTMATRIX_SOURCE_TEXT.txt pp.39-57 — MOOWR, Advance
// Authorisation, EPCG, SEZ, FTWZ, EOU, AEO.

export const MOOWR_PAGE = {
  tagline: "Import without payment of Duty / IGST",
  intro:
    "MOOWR or Section 65 Warehousing Unit is a powerful scheme that allows the manufacturers to import raw materials and capital goods without paying customs duty upfront. It can be stored in a bonded warehouse; and to carry out manufacturing or other operations.",
  serviceIntro: "We facilitate the registration of MOOWR License.",
  definition:
    "MOOWR stands for Manufacture and Other Operations in Warehouse Regulations, 2019 under the Indian Customs framework. It allows companies to operate manufacturing, assembly, processing, packaging, testing, or other operations inside a bonded warehouse without upfront customs duty payment.",
  legalBasis:
    "Under Section 65 of The Customs Act 1962, companies can convert their factory or warehouse into a Private Bonded Warehouse. The imported goods can be stored and used without immediate payment of: Basic Customs Duty (BCD), IGST, Social Welfare Surcharge, Certain additional duties. Duties are paid only when goods are cleared into the domestic market. Exported goods generally remain duty-free.",
  benefits: [
    { title: "Duty Deferment", desc: "Import raw materials and capital goods without upfront customs duty payment." },
    { title: "No Export Obligation", desc: "Unlike SEZ, Advance Authorisation or EPCG, there is no mandatory export commitment. Goods can be sold in India as well." },
    { title: "Better Cash Flow", desc: "Since duties are deferred; hence working capital requirements reduce significantly." },
    { title: "No Time Limit for Storage", desc: "Imported capital goods and inputs can remain in the bonded warehouse without strict time restrictions." },
    { title: "Suitable for Domestic & Export Businesses", desc: "The scheme benefits Manufacturers and Importers / Exporters." },
  ],
  flowChart: [
    "Apply for Private Warehousing License U/S 58 and MOOWR License U/S 65 simultaneously with the guidance of PORTMATRIX",
    "Import Goods",
    "Store in MOOWR Warehouse",
    "Manufacture / Process",
    "Sell in India → Duty payable at the time of clearance, or Export finished goods → No Customs duty",
  ],
  operationsAllowed: ["Manufacturing", "Assembly", "Packaging", "Labeling", "Testing", "Repairing", "Reconditioning", "Processing"],
  eligibility: [
    "It has a warehouse facility",
    "It obtains: Section 58 - Warehouse license, Section 65 - Manufacturing permission",
    "Existing factories can also be converted into MOOWR units.",
  ],
  comparisonTable: {
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
  compliance: ["Digital inventory records", "Customs audit trail", "Monthly returns", "Bond execution", "Warehouse security controls"],
};

export const ADVANCE_AUTHORISATION_PAGE = {
  tagline: "Duty free import of raw materials",
  intro: "It is a duty exemption scheme by DGFT; that enables duty free import of raw materials for export production.",
  serviceIntro: "PORTMATRIX guides the exporters to register Advance Authorisation (AA) and Duty Free Import Authorisation (DFIA) on post export.",
  definition:
    "The Advance Authorisation Scheme (AAS) is an export incentive program promoted by the Ministry of Commerce and Industries; to encourage exports by reducing input costs for manufacturers. The Advance Authorisation Scheme allows exporters to import raw materials, components, or inputs duty-free (i.e., without paying customs duties), provided those inputs are used to produce goods that will be exported.",
  keyFeatures: [
    "Duty-free import of inputs such as: Raw materials, Intermediate goods, Packaging materials, Fuel (in some cases)",
    "Export obligation: the importer must export finished goods using those inputs within a specified time frame.",
    "Value addition requirement: exported goods must have a minimum value addition over imported inputs (e.g. typically around 15%, though it can vary).",
    "Wide applicability: Manufacturer exporters, Merchant exporters tied to supporting manufacturers.",
  ],
  types: [
    { name: "Physical Exports", desc: "Goods are physically exported out of the country." },
    { name: "Deemed Exports", desc: "Supplies to units like EOU, EHTP, STP, BTP are treated as exports." },
    { name: "Annual Requirement Authorisation", desc: "For exporters with regular production needs." },
  ],
  benefits: ["Reduces production cost → increases global competitiveness", "Improves cash flow (no upfront duty payment)", "Encourages higher export volumes"],
  compliance: [
    "Must maintain detailed records of input usage",
    "Must fulfill Export Obligation within deadline",
    "Subject to audit by authorities like the Directorate General of Foreign Trade (DGFT)",
  ],
  workedExample: "A textile exporter imports fabric duty-free under AAS → uses it to manufacture garments → exports garments → fulfills Export Obligation → no duty payable.",
  flowChart: [
    "Exporter receives Export Order",
    "Estimate Raw Materials / Inputs Required",
    "Apply for Advance Authorisation to DGFT with the guidance of PORTMATRIX",
    "DGFT Issues Advance Authorisation License",
    "Import Inputs / Raw Materials Duty-Free",
    "Manufacture the Finished Goods",
    "Export the Finished Goods",
    "Submit Export Proof & Documents",
    "Fulfil Export Obligation",
    "Redemption / Closure of Authorisation",
  ],
  authorities: ["Directorate General of Foreign Trade (DGFT)", "Central Board of Indirect Taxes and Customs (CBIC)"],
  documents: ["Import Invoice", "Bill of Entry", "Shipping Bill", "Export Invoice", "e-BRC (Bank Realisation Certificate)"],
};

export const EPCG_PAGE = {
  tagline: "Duty free import of Capital Goods",
  intro:
    "This Scheme is to facilitate import of capital goods at zero customs duty and other taxes; for producing quality goods and services to enhance India's manufacturing competitiveness to boost export capability.",
  serviceIntro: "PORTMATRIX facilitates exporters to avail EPCG License.",
  definition:
    "The Export Promotion Capital Goods (EPCG) Scheme is a foreign trade incentive scheme under India's Foreign Trade Policy (FTP). It allows import of capital goods at zero customs duty for producing goods or services meant for export.",
  objective: "To help Indian exporters modernize technology and improve export competitiveness by reducing the cost of importing machinery and equipment.",
  keyFeatures: [
    "Import of capital goods at concessional/zero customs duty",
    "Applicable for: Manufacturers, Exporters, Service providers",
    "Supports: Machinery, Equipment, Spares, Tools, Computer systems",
    "Export obligation must be fulfilled within a specified period (usually 6 years + 2 years extensions may be provided).",
  ],
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
  benefits: ["Reduces machinery import cost", "Improves manufacturing capability", "Encourages exports", "Enhances global competitiveness", "Helps technology upgradation"],
  workedExample:
    "A company imports a machine worth ₹1 crore under EPCG and saves ₹7.50 lakh duty. The company must achieve 6 times the amount of duty saved, in a period of next 6 years. Export Obligation is: ₹7.50 lakh × 6 times = ₹45 lakh.",
  authorities: ["Directorate General of Foreign Trade", "Central Board of Indirect Taxes and Customs"],
};

export const SEZ_PAGE = {
  tagline: "Duty free enclave for MSMEs",
  intro:
    "SEZ is a specifically demarcated region where business and trade laws are more liberal compared to the rest of the country. The goal is to attract foreign investment, boost exports, and generate employment. SEZ Companies enjoy tax benefits, simplified regulations, world-class infrastructure, duty free imports / exports.",
  serviceIntro: "PORTMATRIX assists in the registration of SEZs.",
  definition:
    "SEZ is a specially designated duty-free area treated as foreign territory for trade operations, duties, and tariffs. SEZs are established to promote exports, attract investment, create jobs, and develop infrastructure. SEZ framework is governed by the SEZ Act, 2005 and SEZ Rules, 2006.",
  simpleDefinition: "SEZ = Duty-free Business Zone created to promote exports and investment.",
  features: [
    "Duty-free import / procurement of goods for development and operations",
    "Simplified customs and compliance procedures",
    "Income tax and GST-related benefits (subject to current regulations)",
    "100% Foreign Direct Investment (FDI) allowed in many sectors",
    "Single-window clearance mechanism",
    "Better infrastructure and logistics support",
  ],
  objectives: [
    "Promote exports of goods and services",
    "Attract domestic and foreign investments",
    "Generate employment opportunities",
    "Develop world-class infrastructure",
    "Enhance India's global trade competitiveness",
  ],
  types: ["Multi-Product SEZ – Multiple industries and sectors", "Sector-Specific SEZ – Dedicated to one industry (IT, Pharma, Textiles, etc.)", "Free Trade & Warehousing Zone (FTWZ) – Trading, warehousing, logistics activities"],
  localExample: "Mahindra World City - Tamil Nadu - IT & Manufacturing",
  benefits: ["Customs duty exemptions", "Faster import /export processing", "Improved warehousing and logistics", "Better global supply chain connectivity", "Export-oriented growth opportunities"],
  authority: "Department of Commerce – SEZ India",
};

export const FTWZ_PAGE = {
  tagline: "Duty free trading hub for MNCs",
  intro:
    "FTWZ is a special category of Special Economic Zone (SEZ) designed mainly for trading and warehousing of goods. This allows businesses to delay or avoid duty, improving cash flow and flexibility.",
  serviceIntro: "PORTMATRIX supports FTWZ registration.",
  definition:
    "A Free Trade Warehousing Zone (FTWZ) is a special category of Special Economic Zone focused on warehousing, trading, logistics, and re-export activities. FTWZs are treated as foreign territory for customs purposes, allowing goods to be imported, stored, processed, and re-exported with major duty and tax advantages.",
  simpleDefinition: "FTWZ is a duty-free logistics and warehousing zone that facilitates international trade, storage, and re-export operations in India.",
  features: ["Duty-free storage of imported goods", "Customs duty paid only when goods enter the Indian market (DTA)", "Re-export without customs duty"],
  valueAddedServices: ["Labeling", "Repacking", "Kitting", "Assembly", "Palletization", "Faster customs clearance", "Foreign currency transactions permitted", "Treated as foreign territory under customs law"],
  workflow: ["Foreign Supplier", "Import into FTWZ with the guidance of PORTMATRIX", "Duty-free Storage", "Value Addition / Packaging / Labeling", "Re-export (No duty) or Sale in India (Duty paid only at clearance)"],
  benefits: {
    importers: ["Deferred customs duty", "Reduced working capital blockage", "Faster supply chain movement", "Lower port demurrage costs"],
    exporters: ["Re-export without import duty (Merchant Trade Transactions-MTT)", "Export benefits available", "Long-term storage flexibility"],
    globalTraders: ["No permanent establishment required in some cases", "Foreign suppliers can store inventory in India", "Multiple ownership transfers allowed within FTWZ"],
  },
  activitiesAllowed: ["Warehousing", "Trading", "Re-export", "Packaging & repackaging", "Relabeling", "Assembly of kits", "Quality inspection", "Refrigerated storage", "Inventory management"],
  legalFramework: ["Ministry of Commerce and Industry", "Special Economic Zones Act 2005", "SEZ Rules 2006", "Foreign Trade Policy (FTP)"],
  localExample: { state: "Tamil Nadu", location: "Sriperumbudur", developer: "J Matadee FTWZ" },
  comparisonTable: {
    headers: ["SEZ", "FTWZ"],
    rows: [
      ["Manufacturing & services focus", "Warehousing & Trading Focus"],
      ["Export production", "Import / Export Storage & Distribution"],
      ["Industrial Operations", "Logistics & Supply Chain Operations"],
      ["Broader Economic Zone", "Specialized Logistics Zone"],
    ],
  },
};

export const EOU_PAGE = {
  tagline: "Export Goods Manufacturing Hub",
  intro:
    "An Export Oriented Unit (EOU) is a business unit approved by the Government of India that undertakes to export its entire production of goods or services, except for permitted sales in the Domestic Tariff Area (DTA).",
  serviceIntro: "PORTMATRIX supports in the registration process of EOUs.",
  objectives: ["Promote exports from India", "Earn foreign exchange", "Generate employment", "Encourage investment and technology development", "Enhance India's global trade competitiveness"],
  eligibleActivities: ["Manufacturing", "Service exports", "Software development", "Repair, reconditioning, and re-engineering", "Gems & jewellery", "Agriculture and agro-processing", "Biotechnology", "Aquaculture, poultry, horticulture, floriculture, etc."],
  benefits: ["Duty-free import of raw materials and capital goods", "Duty-free procurement from domestic suppliers", "GST-related benefits and refunds as applicable", "Faster customs clearances", "100% FDI permitted in many sectors", "Can be established anywhere in India (unlike SEZs, which are location-specific)"],
  eligibility: ["Primarily Export-Oriented operations", "Positive Net Foreign Exchange (NFE) earnings over the prescribed period", "Generally, minimum investment of ₹1 crore in plant and machinery (with exemptions for sectors such as IT, biotechnology, handicrafts, and agriculture)", "Trading activities are generally not permitted under the EOU scheme."],
  approvalProcess: [
    "Incorporate the business entity.",
    "Obtain PAN, GST, and IEC.",
    "Apply through the Development Commissioner.",
    "Obtain Letter of Permission (LoP).",
    "Execute customs bonding (B-17 Bond).",
    "Start operations and maintain export obligations and compliance requirements.",
  ],
};

export const AEO_PAGE = {
  tagline: "Global Certification for secure, compliant and efficient Customs processes",
  intro:
    "It is a flagship trade facilitation initiative under the World Customs Organization. It recognizes international businesses with faster customs clearance, reduced inspections and examinations, duty deferment privilege, Direct Port Delivery (DPD) / Direct Port Entry (DPE), Priority processing of consignments.",
  serviceIntro: "We support in facilitating the procedures for obtaining AEO status.",
  definition: "The Central Board of Indirect Taxes and Customs (CBIC) introduced the Indian AEO Programme to promote secure and faster international trade. It is based on the World Customs Organization SAFE Framework standards.",
  simpleDefinition: "AEO = Trusted International Trade Partner certified by Customs.",
  benefits: [
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
  applicantTypes: ["Importers", "Exporters", "Customs Brokers", "Logistics Providers", "Freight Forwarders", "Warehouse Operators", "Port Operators", "Terminal Operators"],
  categoriesTable: {
    headers: ["Category", "Applicable To", "Level", "Validity"],
    rows: [
      ["AEO-T1", "Importers / Exporters", "Entry level", "3 Years"],
      ["AEO-T2", "Importers / Exporters", "Advanced", "3 Years"],
      ["AEO-T3", "Importers / Exporters", "Highest accreditation", "5 Years"],
      ["AEO-LO", "Logistics Providers, Custodians or Terminal Operators, Customs Brokers and Warehouse Operators", "Logistics category", "5 Years"],
    ],
  },
  majorBenefits: {
    importersExporters: ["Faster release of cargo", "Reduced examination percentage", "Priority assessment", "Deferred duty payment", "Self-certified copies accepted", "Fewer document verifications"],
    brokersOperators: ["Priority movement of consignments", "Better global credibility", "Improved client confidence", "Reduced delays in supply chain operations"],
  },
  eligibility: ["Good compliance record", "Financial solvency", "Secure supply chain processes", "Proper internal controls", "Minimum business activity period (as prescribed by CBIC)"],
  applicationProcess: [
    "Self-assessment of eligibility",
    "Online registration on AEO portal",
    "Submission of application & documents",
    "Customs verification / audit",
    "Approval and grant of certification",
  ],
  importance: ["Ease of Doing Business", "Secure global supply chains", "Faster exports and imports", "Reduced logistics cost", "Trusted trader ecosystem"],
};

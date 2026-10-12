// Full per-step descriptions and flow charts for all 6 phases, verbatim
// from docs/source/PORTMATRIX_SOURCE_TEXT.txt pp.7-16. The homepage's
// EXPORT_HANDHOLDING_PHASES (lib/content.js) carries step TITLES only for
// the compressed homepage summary — this file carries the full text each
// dedicated phase page uses. Step titles must stay identical across both.

export const EXPORT_HANDHOLDING_HUB = {
  // Source pp.5, 7 sentence, kept verbatim (used for structured data).
  intro:
    "Complete support from export registration and documentation to buyer coordination, customs clearance, shipment, transit, insurance, and post-shipment payment realization—ensuring a smooth, compliant, and hassle-free export journey.",
  // The same sentence broken into its eight stated activities (pp.5, 7).
  activities: [
    "Export registration",
    "Documentation",
    "Buyer coordination",
    "Customs clearance",
    "Shipment",
    "Transit",
    "Insurance",
    "Post-shipment payment realization",
  ],
  closing: "ensuring a smooth, compliant, and hassle-free export journey.",
  metaTitle: "MSME Export Handholding",
  metaDescription:
    "PORTMATRIX supports exporters through six phases, from business registration and planning to shipment and post-shipment payment realisation.",
  // Visible Q&A. Every answer is derived from the cited source pages only.
  faq: [
    {
      // pp.5, 7
      q: "What does MSME Export Handholding cover?",
      a: "It is described as complete support from export registration and documentation to buyer coordination, customs clearance, shipment, transit, insurance, and post-shipment payment realization.",
    },
    {
      // pp.7-16 (phase order)
      q: "In what order are the six phases?",
      a: "Business Setup and Registration, Pre Export Planning, Buyer Development and Commercial Negotiations, Pre Shipment Procedures, Shipment Procedures, and Post Shipment and Realisation Procedures.",
    },
    {
      // pp.8-9 (Phase 1 steps and flow chart)
      q: "Which registrations come first?",
      a: "Phase 1 lists them in this order: PAN, Digital Signature, Company Formation, GSTIN, a current account with an AD bank, IEC, RCMC, ICEGATE, and other applicable PGA registrations.",
    },
    {
      // p.10 (Phase 2 step 2)
      q: "How is export permission checked?",
      a: "In Pre Export Planning, the product's ITC (HS) Code is verified in DGFT Schedule 2 to determine whether its export is Free, Restricted, Prohibited, or subject to specific conditions.",
    },
  ],
};

export const PHASES = [
  {
    n: 1,
    slug: "business-setup-registration",
    title: "Business Setup and Registration",
    infographic: "/images/source/export-handholding/phase1-business-setup-infographic.png",
    steps: [
      {
        title: "PAN",
        desc: "Obtain a PAN issued by the Income Tax Department as a mandatory business identification number for carrying out export, taxation, banking, and other regulatory transactions.",
      },
      {
        title: "Digital Signature",
        desc: "Use a Digital Signature Certificate (DSC) to securely authenticate the exporter's identity and electronically sign export, Customs, DGFT, and other regulatory documents.",
      },
      {
        title: "Company Formation",
        desc: "Proprietorship, Partnership, LLP, Private / Public Limited Company.",
      },
      {
        title: "GSTIN Registration",
        desc: "Obtain GST Identification Number (GSTIN) for GST compliance.",
      },
      {
        title: "Opening a Current Account with AD Bank",
        desc: "Open a current account with an Authorised Dealer (AD) bank to facilitate and manage import–export foreign exchange transactions.",
      },
      {
        title: "Importer Exporter Code (IEC) Registration",
        desc: "Obtain an Importer Exporter Code (IEC) from DGFT to legally undertake import and export activities.",
      },
      {
        title: "RCMC",
        desc: "Obtain RCMC (Registration-cum-Membership Certificate) from the relevant Export Promotion Council (EPC) to avail export benefits and support.",
      },
      {
        title: "ICEGATE Registration",
        desc: "Register on ICEGATE to electronically file customs documents and manage import–export customs transactions online.",
      },
      {
        title: "Other applicable PGA Registration",
        desc: "Obtain registration / licences required under other applicable Participating Government Agencies (PGA) for specific goods or export activities.",
      },
    ],
    flowChart: [
      "PAN",
      "Digital Signature",
      "Company Formation",
      "GSTIN",
      "AD Bank Current Account",
      "IEC",
      "RCMC",
      "ICEGATE",
      "PGA",
    ],
  },
  {
    n: 2,
    slug: "pre-export-planning",
    title: "Pre Export Planning",
    infographic: "/images/source/export-handholding/phase2-pre-export-planning-infographic.png",
    steps: [
      {
        title: "Product Selection with ITC HS Code",
        desc: "Select the export product and identify its correct ITC (HS) Code for proper classification and export compliance.",
      },
      {
        title: "Checking Export Policy – Schedule 2",
        desc: "Verify the product's ITC (HS) Code in DGFT Schedule 2 to determine whether its export is Free, Restricted, Prohibited, or subject to specific conditions.",
      },
      {
        title: "International Business Analytics & Market Intelligence",
        desc: "Analyze global market trends, demand, competition, pricing, and buyer data to identify the most profitable export opportunities and target markets.",
      },
      {
        title: "FTA / CEPA Opportunities",
        desc: "Identify Free Trade Agreement (FTA) and Comprehensive Economic Partnership Agreement (CEPA) benefits to reduce or eliminate import duties and improve export competitiveness in eligible markets.",
      },
      {
        title: "Finding Buyers",
        desc: "Identify and connect with reliable international buyers, importers, distributors, agents, and B2B platforms to generate genuine export enquiries and orders.",
      },
      {
        title: "Export Promotion Schemes (DGFT / Customs)",
        desc: "Utilize eligible DGFT and Customs schemes, incentives, and duty exemptions to reduce export costs and improve international competitiveness.",
      },
      {
        title: "Connect with EPC / EDA",
        desc: "Connect with Export Promotion Councils (EPCs) and Export Development Agencies (EDAs) for market support, buyer connections, trade opportunities, guidance, and export promotion services.",
      },
    ],
    flowChart: [
      "Product Selection & HS Code",
      "Export Policy Check",
      "Market Intelligence",
      "FTA / CEPA Opportunities",
      "Buyer Identification",
      "Export Promotion Schemes",
      "EPC / EDA Support",
    ],
  },
  {
    n: 3,
    slug: "buyer-development-commercial-negotiations",
    title: "Buyer Development and Commercial Negotiations",
    infographic: "/images/source/export-handholding/phase3-buyer-development-infographic.png",
    steps: [
      {
        title: "Checking of Importing Country's Regulations",
        desc: "Verify the destination country's import rules, product standards, certifications, labelling, documentation, duties, and other compliance requirements before shipment.",
      },
      {
        title: "Payment Methodologies – LC, AP, DP, DA",
        desc: "Select a suitable payment method—Letter of Credit (LC), Advance Payment (AP), Documents against Payment (DP), or Documents against Acceptance (DA)—based on transaction risk, buyer credibility, and agreed terms.",
      },
      {
        title: "INCOTERMS Applicability",
        desc: "Select the appropriate Incoterm to clearly define the responsibilities, costs, risks, delivery point, and insurance obligations of the exporter and buyer.",
      },
      {
        title: "Quotation Preparation",
        desc: "Prepare a clear export quotation covering product details, quantity, price, Incoterm, payment terms, delivery schedule, packaging, validity, and applicable taxes or charges.",
      },
      {
        title: "Negotiation with the Buyer",
        desc: "Finalize product specifications, quantity, price, delivery terms, payment conditions, quality requirements, and other commercial terms mutually with the buyer.",
      },
      {
        title: "Checking Buyer Credit Status",
        desc: "Assess the buyer's financial strength, payment history, creditworthiness, business credentials, and transaction risk before agreeing to credit-based payment terms.",
      },
      {
        title: "Trade Credit Insurance (ECGC)",
        desc: "Protect export receivables against commercial and political risks such as buyer default, insolvency, non-payment, or adverse events in the importing country.",
      },
      {
        title: "Pre & Post Shipment Finance Arrangement",
        desc: "Arrange suitable working-capital finance before shipment and bill / invoice financing after shipment to manage production, procurement, shipping, and receivable-payment needs.",
      },
    ],
    flowChart: [
      "Importing Country Regulations",
      "Payment Method (LC / AP / DP / DA)",
      "INCOTERMS Selection",
      "Quotation Preparation",
      "Buyer Negotiation",
      "Credit Status Check",
      "Trade Credit Insurance (ECGC)",
      "Pre & Post-Shipment Finance Arrangement",
    ],
  },
  {
    n: 4,
    slug: "pre-shipment-procedures",
    title: "Pre Shipment Procedures",
    infographic: "/images/source/export-handholding/phase4-pre-shipment-infographic.png",
    steps: [
      {
        title: "Non Tariff Barriers – SPS & TBT Compliance",
        desc: "Ensure the product meets the importing country's Sanitary & Phytosanitary (SPS) and Technical Barriers to Trade (TBT) standards, certifications, testing, labelling, and technical regulations.",
      },
      {
        title: "Pre-shipment Inspection Formalities",
        desc: "Complete the required inspection, testing, quality verification, and certification of goods before shipment to meet buyer and importing-country requirements.",
      },
      {
        title: "Manufacture / Production / Procurement of Goods",
        desc: "Manufacture or procure export-quality goods according to the buyer's specifications, required standards, agreed quantity, quality, and delivery schedule.",
      },
      {
        title: "Labelling, Packaging, Packing and Marking",
        desc: "Ensure goods are properly labelled, packaged, packed, and marked as per buyer specifications, product standards, transport requirements, and importing-country regulations.",
      },
      {
        title: "Forex Fluctuation Mitigation",
        desc: "Manage currency exchange-rate risks through appropriate pricing, hedging, forward contracts, and suitable payment terms to protect export margins and cash flows.",
      },
      {
        title: "Logistical Knowhow",
        desc: "Plan and manage transportation, freight forwarding, customs clearance, documentation, warehousing, and delivery to ensure timely and cost-effective movement of export goods.",
      },
      {
        title: "Marine Insurance",
        desc: "Protect export goods against risks such as loss, damage, theft, and transit-related incidents during transportation from the exporter to the destination.",
      },
    ],
    flowChart: [
      "Non-Tariff Barriers (SPS & TBT) Compliance",
      "Pre-Shipment Inspection",
      "Manufacture / Production / Procurement",
      "Labelling, Packaging, Packing & Marking",
      "Forex Fluctuation Mitigation",
      "Logistics Planning & Execution",
      "Marine Insurance",
    ],
  },
  {
    n: 5,
    slug: "shipment-procedures",
    title: "Shipment Procedures",
    infographic: "/images/source/export-handholding/phase5-shipment-procedures-infographic.png",
    steps: [
      {
        title: "Export Documentation",
        desc: "Prepare and verify all required export documents, such as the Commercial Invoice, Packing List, Shipping Bill, Certificate of Origin, Transport Documents, and applicable Certificates.",
      },
      {
        title: "Filing of Shipping Bill",
        desc: "Submit the Shipping Bill electronically to Customs with accurate details of the exporter, goods, value, classification, scheme benefits, and supporting documents for export clearance.",
      },
      {
        title: "Duty Drawback Entitlement",
        desc: "Claim eligible duty drawback benefits to obtain a refund of specified duties on inputs used in the manufacture or processing of exported goods, subject to applicable rules and rates; U/S 75 of The Customs Act, 1962.",
      },
      {
        title: "Customs Clearance & Examination",
        desc: "Customs verifies the export documents, assesses the goods and compliance requirements, and conducts examination where applicable before permitting the shipment to proceed.",
      },
      {
        title: "Obtaining Let Export Order (LEO)",
        desc: "Obtain the Customs Let Export Order (LEO) after successful document verification and examination, authorizing the goods to be exported.",
      },
      {
        title: "Loading of Goods to the Conveyance",
        desc: "Load the cleared export goods onto the designated vessel, aircraft, vehicle, or other conveyance after obtaining the required Customs clearance and LEO.",
      },
      {
        title: "Obtaining Shipping Bill / Bill of Export",
        desc: "Obtain the duly processed Shipping Bill or Bill of Export from Customs as the official record confirming the clearance and export of the goods.",
      },
    ],
    flowChart: [
      "Export Documentation",
      "Filing of Shipping Bill",
      "Duty Drawback Entitlement",
      "Customs Clearance & Examination",
      "Obtaining Let Export Order (LEO)",
      "Loading of Goods into Conveyance",
      "Obtaining Final Shipping Bill / Bill of Export",
    ],
  },
  {
    n: 6,
    slug: "post-shipment-realisation",
    title: "Post Shipment and Realisation Procedures",
    infographic: "/images/source/export-handholding/phase6-post-shipment-infographic.png",
    steps: [
      {
        title: "Submission of Shipping Documents to the Bank",
        desc: "Submit the required shipping and commercial documents to the bank within the prescribed time (21 days) to facilitate document processing, payment collection, and export proceeds realisation.",
      },
      {
        title: "Follow up for Export Realisation",
        desc: "Monitor the buyer's payment status and coordinate with the bank to ensure export proceeds are received within the prescribed timeframe.",
      },
      {
        title: "Realisation of Export Proceeds",
        desc: "Ensure the export payment is received through the authorized banking channel within the prescribed period and properly credited to the exporter's account.",
      },
      {
        title: "e-BRC",
        desc: "Obtain the electronic Bank Realisation Certificate (e-BRC) as evidence of export proceeds realisation for availing eligible export benefits and fulfilling regulatory compliance requirements.",
      },
      {
        title: "Compliance Reporting",
        desc: "Complete all required regulatory, banking, tax, DGFT, Customs, and export-related filings and maintain accurate records within the prescribed timelines (5 years).",
      },
      {
        title: "Business Growth",
        desc: "Use export performance, market insights, customer feedback, and realised proceeds to expand markets, increase sales, strengthen buyer relationships, and scale the export business sustainably.",
      },
    ],
    flowChart: [
      "Submission of Shipping Documents to Bank",
      "Follow-up for Export Realisation",
      "Realisation of Export Proceeds",
      "Generation of e-BRC",
      "Compliance Reporting",
      "Business Growth",
    ],
  },
];

// Per-phase presentation data. Step titles and descriptions above stay
// verbatim; everything here only organises or labels them.
// - subject: lower-case phase name for the "The K steps of …" H2.
// - groups: contiguous sub-groups (1-based inclusive step ranges) used to
//   structure longer phases without changing any step text.
// - stepLinks: related-page links keyed by 1-based step number.
// - faq: visible Q&A (Phases 3 and 6 only); answers derive from the cited
//   source pages.
export const PHASE_META = {
  "business-setup-registration": {
    subject: "business setup and registration",
    metaTitle: "Export Business Setup and Registration (Phase 1)",
    metaDescription:
      "Phase 1 of PORTMATRIX's MSME Export Handholding: nine registration steps, from PAN and Digital Signature to IEC, RCMC and ICEGATE.",
  },
  "pre-export-planning": {
    subject: "pre export planning",
    metaTitle: "Pre Export Planning (Phase 2)",
    metaDescription:
      "Phase 2 of PORTMATRIX's MSME Export Handholding: seven planning steps, from HS Code and export policy checks to buyers and export promotion schemes.",
    stepLinks: {
      6: [
        { label: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
        { label: "EPCG Scheme", href: "/services/epcg" },
      ],
    },
  },
  "buyer-development-commercial-negotiations": {
    subject: "buyer development and commercial negotiations",
    metaTitle: "Export Buyer Development and Commercial Negotiations (Phase 3)",
    metaDescription:
      "Phase 3 of PORTMATRIX's MSME Export Handholding: eight steps from importing-country rules and payment methods to credit checks, insurance and finance.",
    // Source pp.11-12.
    groups: [
      { title: "Importing-country rules and commercial terms", from: 1, to: 4 },
      { title: "Negotiation and buyer credit", from: 5, to: 6 },
      { title: "Risk cover and finance", from: 7, to: 8 },
    ],
    stepLinks: {
      7: [{ label: "MSME Insurance Package", href: "/services/msme-insurance" }],
    },
    faq: [
      {
        // p.11 (Phase 3 step 2)
        q: "Which payment methods does Phase 3 cover?",
        a: "Letter of Credit (LC), Advance Payment (AP), Documents against Payment (DP), and Documents against Acceptance (DA). A suitable method is selected based on transaction risk, buyer credibility, and agreed terms.",
      },
      {
        // pp.11-12 (Phase 3 steps 6-7)
        q: "How are export receivables protected?",
        a: "Before agreeing to credit-based payment terms, the buyer's financial strength, payment history, creditworthiness, business credentials, and transaction risk are assessed. Trade Credit Insurance (ECGC) then protects export receivables against commercial and political risks such as buyer default, insolvency, non-payment, or adverse events in the importing country.",
      },
    ],
  },
  "pre-shipment-procedures": {
    subject: "pre shipment procedures",
    metaTitle: "Pre Shipment Procedures for Export (Phase 4)",
    metaDescription:
      "Phase 4 of PORTMATRIX's MSME Export Handholding: seven steps, from SPS and TBT compliance and inspection to forex risk, logistics and marine insurance.",
    // Source pp.12-13.
    groups: [
      { title: "Compliance and inspection", from: 1, to: 2 },
      { title: "Production and packing", from: 3, to: 4 },
      { title: "Risk and logistics", from: 5, to: 7 },
    ],
    stepLinks: {
      7: [{ label: "MSME Insurance Package", href: "/services/msme-insurance" }],
    },
  },
  "shipment-procedures": {
    subject: "shipment procedures",
    metaTitle: "Export Shipment Procedures (Phase 5)",
    metaDescription:
      "Phase 5 of PORTMATRIX's MSME Export Handholding: seven shipment steps, from export documentation and Shipping Bill filing to the Let Export Order and loading.",
  },
  "post-shipment-realisation": {
    subject: "post shipment and realisation procedures",
    metaTitle: "Export Post Shipment and Realisation Procedures (Phase 6)",
    metaDescription:
      "Phase 6 of PORTMATRIX's MSME Export Handholding: six post-shipment steps, from submitting documents to the bank to e-BRC, compliance reporting and growth.",
    faq: [
      {
        // p.15 (Phase 6 step 1)
        q: "What is the deadline for submitting shipping documents to the bank?",
        a: "The step states that the required shipping and commercial documents are submitted to the bank within the prescribed time (21 days), to facilitate document processing, payment collection, and export proceeds realisation.",
      },
      {
        // p.16 (Phase 6 step 4)
        q: "What is e-BRC?",
        a: "e-BRC is the electronic Bank Realisation Certificate. It is obtained as evidence of export proceeds realisation, for availing eligible export benefits and fulfilling regulatory compliance requirements.",
      },
      {
        // p.16 (Phase 6 step 5)
        q: "How long are export records maintained?",
        a: "The Compliance Reporting step covers completing the required regulatory, banking, tax, DGFT, Customs, and export-related filings and maintaining accurate records within the prescribed timelines (5 years).",
      },
    ],
  },
};

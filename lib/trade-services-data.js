// Source: docs/source/PORTMATRIX_SOURCE_TEXT.txt pp.27-34.

// pp.27-28. Both regulation names are kept exactly as the PDF prints them
// (CLIENT_CONFIRMATION_REQUIRED: "Customs Brokers Regulations, 2018" in the
// intro vs "Customs Brokers Licensing Regulations 2018" in the definition).
export const CUSTOMS_BROKER_PAGE = {
  tagline: "Government authorised Clearing Agent",
  intro:
    "We act as an agent on behalf of importers and exporters; for the clearance of imported or export goods under the provisions of the Customs Brokers Regulations, 2018.",
  regulationTitle: "Licensed Customs Broker",
  regulationText:
    "As per Customs Brokers Licensing Regulations 2018, under Regulation 2(d), \"Customs Broker\" means a person licensed under these regulations to act as an agent on behalf of the importer or an exporter for purposes of transaction of any business relating to the entry or departure of conveyances or the import or export of goods at any Customs Station including audit.",
  // The six "How We Work?" bullets (pp.27-28), text verbatim, grouped under
  // short labels that name what each bullet already says.
  howWeWork: [
    { label: "Authorisation", text: "Prior to engagement of our services, we do obtain an authorisation to act as an Agent for the clearance of your imported or export goods." },
    { label: "Coverage", text: "We clear your goods in all Customs Stations across India; with our Pan India network." },
    { label: "Compliance advice", text: "We advise our clients to comply with the provisions of The Customs Act, The Customs Tariff Act, Foreign Trade Policy, Allied Acts, Rules, Regulations and Orders." },
    { label: "Due diligence", text: "We exercise due diligence to ascertain the correctness of any information related to clearance of your shipments." },
    { label: "Speed", text: "We discharge our duties as a Customs Broker with utmost speed and efficiency and without any delay." },
    { label: "Cooperation", text: "We co-operate with the Customs authorities and PGAs; for the speedy clearance of your cargo." },
  ],
  // Visible Q&A (no FAQPage schema). Every answer is derived from pp.27-28.
  // The regulation name (C) is deliberately kept out of the answers.
  faqs: [
    {
      q: "What is a Customs Broker?",
      a: "A Customs Broker is a person licensed to act as an agent on behalf of an importer or an exporter for any business relating to the entry or departure of conveyances, or the import or export of goods, at any Customs Station, including audit.",
    },
    {
      q: "Does PORTMATRIX get authorisation before acting for me?",
      a: "Yes. Prior to engagement of its services, PORTMATRIX obtains an authorisation to act as an Agent for the clearance of your imported or export goods.",
    },
    {
      q: "Which Customs Stations can PORTMATRIX clear goods at?",
      a: "PORTMATRIX clears goods in all Customs Stations across India, with its Pan India network.",
    },
    {
      q: "Which laws and rules does PORTMATRIX advise clients to comply with?",
      a: "PORTMATRIX advises clients to comply with the provisions of The Customs Act, The Customs Tariff Act, Foreign Trade Policy, Allied Acts, Rules, Regulations and Orders.",
    },
  ],
};

// pp.28-32. List items may be plain strings or arrays of parts, where a part
// is a string or { text, href } — used only to link scheme names to their own
// pages. The visible text of every item is exactly the PDF's.
const MOOWR = { text: "MOOWR", href: "/services/moowr" };
const EPCG = { text: "EPCG", href: "/services/epcg" };
const AA = { text: "Advance Authorization", href: "/services/advance-authorisation" };
const EOU = { text: "EOU", href: "/services/eou" };
const SEZ = { text: "SEZ", href: "/services/sez" };

export const EXIM_CLEARANCE_PAGE = {
  tagline: "EXIM clearance with Compulsory Compliance Requirements (CCR)",
  intro:
    "Customs Compliance is a structured legal obligation under the Customs Law and other Allied Acts; wherein the importer / exporter produces required documents to the authorities for the smooth clearance of the goods. Absence of even one requirement may lead to penalties, cargo delays or even seizure of goods.",
  serviceIntro: "We ensure proper documentary compliance for hassle free clearance of the cargo.",
  // Short summary of the seven areas below (p.29-31); adds no new facts.
  keyPoints: [
    { title: "Prepare and file", text: "Bill of Entry, Shipping Bill / Bill of Export, invoice, packing list, bill of lading / airway bill, authorisations and certificates, GST / IEC paperwork." },
    { title: "Coordinate with Customs", text: "Declarations, queries, inspections / examinations and clearance for cargo release." },
    { title: "Help calculate duties and taxes", text: "HS Code classification and the duties, cess, surcharge and taxes listed below." },
    { title: "Advise on schemes", text: "Duty savings schemes, FTAs, export incentives, customs audits and disputes." },
  ],
  // The seven areas (pp.28-31), titles without numerals: the page renders them
  // as an ordered list. Item text is verbatim.
  sections: [
    {
      title: "Customs Documentation",
      intro: "We prepare and file:",
      items: [
        "Bill of Entry for Home Consumption or Warehousing (for Imports)",
        "Shipping Bill / Bill of Export (for Exports)",
        "Invoice, Packing List, Bill of Lading / Airway Bill",
        "Import Export Authorisations and Certificates",
        "GST / IEC related paperwork",
      ],
    },
    {
      title: "Customs Clearance",
      intro: "We coordinate with the Customs Authorities to:",
      items: ["Submit declarations electronically", "Respond to customs queries", "Arrange inspections / examinations", "Obtain clearance for smooth cargo release"],
    },
    {
      title: "Duty & Tax Calculation",
      intro: "We help to calculate:",
      // "Correct HS Code Classification" is the first bullet of the source list;
      // it is shown as its own group (Classification) apart from the levies.
      groups: [
        { label: "Classification", items: ["Correct HS Code Classification"] },
        {
          label: "Duties and levies",
          items: [
            "Basic Customs Duty (BCD)",
            "Additional Customs Duty / Special Additional Customs Duty (for manufactured goods)",
            "IGST / GST Compensation Cess",
            "Preferential Duty / Duty under Trade Agreements",
            "Export Duty",
            "Safeguard Duty",
            "Countervailing duty on subsidized articles",
            "Anti-Dumping Duty (ADD)",
            "Social Welfare Surcharge (SWS)",
            "Agricultural Infrastructure Development Cess (AIDC)",
            "Other applicable taxes",
          ],
        },
      ],
    },
    {
      title: "Compliance & Regulations",
      intro: "We ensure your shipments to comply with the provisions of:",
      items: [
        "The Customs Act / The Customs Tariff Act",
        "FTDRA / FTRR / FTP / HBP Compliances",
        "RBI / FEMA Regulations",
        "FSSAI, BIS, CDSCO, Plant Quarantine, etc. (depending on the product type)",
      ],
    },
    {
      title: "Port & Cargo Coordination",
      intro: "We coordinate with:",
      items: ["Shipping Lines / Airlines", "Port Authorities", "Container Freight Stations (CFS)", "Inland Container Depots (ICD)", "Logistics providers"],
    },
    {
      title: "Cargo Delivery Support",
      intro: "After Customs Clearance, we help to arrange:",
      items: ["Container movement", "Last-mile transportation", "Warehousing", "Delivery Order"],
    },
    {
      title: "Advisory Services",
      intro: "We also advise on:",
      items: [
        "Duty Savings Schemes",
        "Free Trade Agreements (FTA)",
        [MOOWR, " / ", EPCG, " / ", AA],
        [EOU, " / ", SEZ, " / EHTP / STP / BTP"],
        "Export Incentives",
        "Customs Audits and Disputes",
      ],
    },
  ],
  importWorkflow: {
    title: "Our Import Workflow Process",
    // Source: "For eg: If you import machinery from China into Chennai Port:"
    scenario: "For example, if you import machinery from China into Chennai Port:",
    // Step text verbatim, incl. "OoC" (CLIENT_CONFIRMATION_REQUIRED: not expanded in the PDF).
    steps: [
      "We receive shipping documents from the Importer",
      "Files Bill of Entry in ICEGATE",
      "Calculates Customs duties",
      "Coordinates Customs inspection",
      "Advise importer in the payment of duty",
      "Gets cargo released by obtaining OoC",
      "Arranges transport to the Importer's warehouse",
    ],
  },
  // The PDF lists 15 steps in one run (pp.31-32). The three stage labels are
  // structural only (pre-shipment = steps 1-4, shipment = 5-11, post-shipment
  // = 12-15); step text is unchanged and numbering continues across stages.
  exportWorkflow: {
    title: "Our Export Workflow Process",
    stages: [
      {
        label: "Pre-shipment",
        steps: [
          "Collection of Export Documents (Invoice, Packing List, PO, LUT/Bond, etc.)",
          "HS Code Classification & Compliance Check",
          "Shipping Bill Preparation in ICEGATE",
          ["Customs Duty / Scheme Verification (Duty Drawback, RoDTEP, RoSCTL, ", EPCG, ", ", AA, ", etc.)"],
        ],
      },
      {
        label: "Shipment",
        steps: [
          "Cargo stuffing",
          "Transportation to CFS or ICD / Port or Airport",
          "Customs Assessment / Examination",
          "LEO (Let Export Order) approval",
          "Container Loading / Airline Handover",
          "Bill of Lading / Airway Bill generation",
          "Vessel departure / Flight departure procedures",
        ],
      },
      {
        label: "Post-shipment",
        steps: [
          "Guidance in submission of export documents to the bank",
          "Export Incentive / Compliance follow-up",
          "Payment follow-ups",
          "Proof of export & record maintenance",
        ],
      },
    ],
  },
  // Visible Q&A (no FAQPage schema), derived from pp.28-32. "OoC" (C) is kept
  // out of the answers.
  faqs: [
    {
      q: "What happens if a customs compliance requirement is missing?",
      a: "Customs compliance is a structured legal obligation under the Customs Law and other Allied Acts. Absence of even one requirement may lead to penalties, cargo delays or even seizure of goods.",
    },
    {
      q: "Which documents does PORTMATRIX prepare and file?",
      a: "Bill of Entry for Home Consumption or Warehousing (for imports), Shipping Bill / Bill of Export (for exports), invoice, packing list, bill of lading / airway bill, import export authorisations and certificates, and GST / IEC related paperwork.",
    },
    {
      q: "Which duties and taxes does PORTMATRIX help calculate?",
      a: "Beyond the correct HS Code classification, PORTMATRIX helps to calculate Basic Customs Duty, Additional Customs Duty / Special Additional Customs Duty (for manufactured goods), IGST / GST Compensation Cess, preferential duty or duty under trade agreements, export duty, safeguard duty, countervailing duty on subsidized articles, Anti-Dumping Duty, Social Welfare Surcharge, Agricultural Infrastructure Development Cess and other applicable taxes.",
    },
    {
      q: "What are the steps when importing machinery from China into Chennai Port?",
      a: "PORTMATRIX receives the shipping documents from the importer, files the Bill of Entry in ICEGATE, calculates customs duties, coordinates Customs inspection, advises the importer on payment of duty, gets the cargo released and arranges transport to the importer's warehouse.",
    },
    {
      q: "What does the export workflow cover?",
      a: "It runs from collecting export documents, HS Code classification and shipping bill preparation, through cargo stuffing, customs assessment, Let Export Order approval and loading, to guidance on submitting export documents to the bank, export incentive follow-up, payment follow-ups, proof of export and record maintenance.",
    },
  ],
};


// pp.32-34. CLIENT_CONFIRMATION_REQUIRED: the PDF lists 3PL, 4PL and Cold Chain
// Logistics as "Logistics Business Segments" without saying PORTMATRIX's
// current capability for each; they are shown as printed and kept out of the
// page description.
export const FREIGHT_FORWARDING_PAGE = {
  tagline: "Efficient movement and storage of goods",
  intro:
    "Logistics refers to the planning, coordination, and movement of goods from the point of origin to the final destination. It is a key part of Supply Chain Management, ensuring that products are delivered efficiently, on time, and in the right condition.",
  serviceIntro:
    "PORTMATRIX provides logistics services which include transportation (by road, air, sea, or rail), cargo consoling, warehousing, inventory management, packaging, and distribution.",
  definition:
    "Freight forwarding is the professional management of moving goods from origin to destination by sea, air, road, or rail, including transportation, documentation, customs, storage, and delivery.",
  supportedParties: ["Exporters & Importers", "Shipping Lines & Airlines", "Transporters", "Customs Authorities", "Warehouses"],
  coreServices: [
    "Ocean & Air Freight",
    "Postal Export",
    "E-Commerce Export",
    "Warehousing & Distribution",
    "Transportation & Last-Mile Delivery",
    "Cargo Consolidation",
    "Documentation & Trade Compliance",
    "Marine Insurance",
    "Supply Chain Management",
  ],
  coordination:
    "We coordinate the complete movement of cargo—ensuring it reaches the right place, at the right time, with the right documentation and compliance.",
  segments: [
    ["Freight Forwarding", "Managing cargo movement internationally"],
    ["Customs Brokerage", "Customs Documentation & Clearance"],
    ["Warehousing", "Storage and inventory management"],
    ["Transportation", "Trucking and inland movement"],
    ["3PL (Third-Party Logistics)", "End-to-end logistics outsourcing"],
    ["4PL Logistics", "Full supply chain management"],
    ["Cold Chain Logistics", "Temperature-controlled logistics"],
    ["E-commerce Logistics", "Fulfillment and delivery solutions"],
  ],
  workflow: [
    "Customer confirms shipment",
    "Cargo pickup arranged",
    "Documentation prepared",
    "Customs clearance completed",
    "Cargo booked with carrier",
    "Shipment moved via air / sea / road",
    "Destination customs clearance",
    "Final delivery to consignee",
  ],
  keyDocuments: [
    "Commercial Invoice",
    "Packing List",
    "Bill of Lading (BL) / Air Waybill (AWB)",
    "Shipping Bill",
    "Certificate of Origin",
    "Insurance Certificate",
    "Delivery Order (DO)",
  ],
};

// Source: docs/source/PORTMATRIX_SOURCE_TEXT.txt pp.35-39 (PDF footers: framing
// and list p.35; credit / political risk p.36; factoring / forfaiting and
// marine p.37; warehousing and liability p.38; D&O / Keyman p.38-39).
// The category groupings are site structure only — the PDF presents the 15
// products as one list ("Following SME Trade Insurance products are available
// in the market", p.35). Product names are kept as the site has used them.
export const MSME_INSURANCE_PAGE = {
  tagline: "Shield your trade!",
  intro: "Affordable protection for your business, assets, and operations against unforeseen risks.",
  audienceIntro: "We assure your trade by facilitating MSME Insurance for:",
  audience: ["Exporters", "Local Traders & wholesalers", "Indian Manufacturers", "Indian Logistics / freight forwarders offering credit in their business"],
  // p.35 framing: the products are available in the market; PORTMATRIX facilitates.
  productsIntro:
    "The following SME trade insurance products are available in the market. PORTMATRIX facilitates MSME Insurance for the businesses listed above.",
  categories: [
    {
      id: "trade-credit-political-risk",
      label: "Trade Credit & Political Risk",
      products: [
        { id: "export-credit-insurance", name: "Export Credit Insurance", desc: "Export Credit Insurance (ECI) protects exporters against the risk of non-payment by overseas buyers. It's one of the most important financial safeguards for Indian exporters." },
        { id: "domestic-trade-credit-insurance", name: "Domestic Trade Credit Insurance", desc: "Domestic Trade Credit Insurance (DTCI) protects Indian businesses against non-payment by buyers within India when you sell on credit terms (e.g., 30–90 days). Coverage includes protection against buyer default, insolvency, and delayed payments." },
        { id: "political-risk-insurance", name: "Political Risk Insurance", desc: "Political Risk Insurance (PRI) protects businesses against losses caused by government actions or political events in a foreign country—something standard insurance usually won't cover." },
      ],
      table: {
        caption: "Key difference from credit insurance",
        headers: ["Feature", "Credit Insurance", "Political Risk Insurance"],
        rows: [
          ["Covers", "Buyer default", "Government / political events"],
          ["Scope", "Commercial risk", "Sovereign risk"],
          ["Usage", "Trade", "Investment + trade"],
        ],
      },
    },
    {
      id: "receivables-financing",
      label: "Receivables Financing",
      products: [
        { id: "factoring", name: "Factoring", desc: "Factoring is a financing method where a business sells its accounts receivables (invoices) to a third party (factor) to get immediate cash, instead of waiting 30–90 days for customer payment." },
        { id: "forfaiting", name: "Forfaiting", desc: "Forfaiting is a specialized form of export financing where exporters sell their receivables (usually medium- to long-term) to a forfaiter at a discount, on a \"without recourse\" basis—meaning the risk of non-payment is transferred to the forfaiter. Forfaiting is mainly used in international trade, especially for capital goods exports or large-value shipments." },
      ],
      table: {
        caption: "Forfaiting vs Factoring",
        headers: ["Aspect", "Forfaiting", "Factoring"],
        rows: [
          ["Tenure", "Medium/Long-term", "Short-term"],
          ["With Recourse", "Without Recourse", "Can be with / without recourse"],
          ["Coverage", "Export (mainly capital goods)", "Domestic & Export"],
          ["Instruments", "Bills of Exchange, Promissory Notes", "Invoices"],
        ],
      },
      // p.37 — the explanatory notes printed under the "With Recourse" row.
      tableNotes: [
        "\"With Recourse\" means the seller or borrower remains liable if a debt is unpaid, allowing the creditor to pursue them directly.",
        "\"Without Recourse\" means the creditor takes on all risk, with no legal recourse to seize personal assets beyond specific collateral.",
      ],
    },
    {
      // Duty Transit Insurance moved here from the liability group: its own
      // definition (p.38) is about safe cargo transit and customs duty.
      id: "cargo-marine-transit",
      label: "Cargo, Marine & Transit",
      products: [
        { id: "marine-cargo-insurance", name: "Marine Cargo Insurance", desc: "Marine Cargo Insurance is one of the most essential covers for anyone involved in logistics, imports, or exports—it protects goods while they are in transit by sea, air, rail, or road." },
        { id: "marine-hull-insurance", name: "Marine Hull Insurance", desc: "This is a type of marine insurance that provides coverage for physical loss or damage to a vessel's hull, machinery, equipment, and fittings caused by marine perils." },
        { id: "inland-transit-insurance", name: "Inland Transit Insurance", desc: "Inland transit insurance, also known as inland marine insurance, refers to a kind of insurance whereby the insured goods or properties are protected while in transit via road transport, rail transport, or inland water transport." },
        { id: "duty-transit-insurance", name: "Duty Transit Insurance", desc: "A single integrated policy covering customs duty, safe cargo transit, and insurance protection, ensuring compliant movement of goods and financial protection against transit-related risks." },
      ],
    },
    {
      id: "warehousing-terminal-liability",
      label: "Warehousing & Terminal Liability",
      products: [
        {
          id: "warehousing-insurance",
          name: "Warehousing Insurance",
          desc: "Warehousing insurance protects goods stored in a warehouse against loss or damage due to fire, theft, natural disasters, and handling risks. In India, it's not a single fixed policy—it's usually structured using a combination of standard insurance products depending on your business model.",
          coversIntro: "Warehousing Insurance is not a single policy—it's a combination of covers designed to protect:",
          covers: ["the warehouse building", "the goods stored", "your liability (if goods belong to customers)"],
        },
        { id: "warehouse-keepers-liability-insurance", name: "Warehouse Keeper's Liability Insurance", desc: "Warehouse Keeper's Liability Insurance (WKLI) is essential if you store goods belonging to others—it protects you when you're legally responsible for loss or damage to those goods while in your care." },
        { id: "port-terminal-operators-liability-insurance", name: "Port & Terminal Operators Liability Insurance", desc: "This is a specialized insurance policy designed to protect port authorities, terminal operators, stevedores, container freight stations, inland container depots, and logistics operators against legal liabilities arising from their port and terminal operations." },
        { id: "freight-services-liability-insurance", name: "Freight Services Liability Insurance", desc: "This protects Freight Forwarders, Logistics Operators, Customs Brokers, Multimodal Transport Operators, and NVOCCs against legal liabilities arising from the transportation, handling, storage, and forwarding of cargo." },
      ],
    },
    {
      id: "corporate-key-person",
      label: "Corporate & Key-Person",
      products: [
        { id: "directors-officers-liability-insurance", name: "Directors & Officers (D&O) Liability Insurance", desc: "This insurance protects the Directors, Officers, and Key Management Personnel of a company against claims arising from alleged wrongful acts committed while performing their managerial duties." },
        { id: "keyman-insurance", name: "Keyman Insurance", desc: "This is a life insurance policy that a business purchases on a Critical Employee, Owner, Founder, or Executive whose loss would significantly affect the company. The business pays the premiums, owns the policy, and receives the insurance payout if the insured person dies (and sometimes if they become disabled, depending on coverage)." },
      ],
    },
  ],
  // "Cover by risk" — each row restates what a product's own definition above
  // says it protects against (pp.36-39); nothing is added. [risk or need, product id].
  coverByRisk: {
    caption: "Cover by risk — what each product's definition says it addresses",
    headers: ["Risk or need", "Product"],
    rows: [
      ["Non-payment by overseas buyers", "export-credit-insurance"],
      ["Non-payment by buyers within India on credit terms: buyer default, insolvency and delayed payments", "domestic-trade-credit-insurance"],
      ["Losses caused by government actions or political events in a foreign country", "political-risk-insurance"],
      ["Getting immediate cash for invoices instead of waiting 30–90 days for customer payment", "factoring"],
      ["Selling export receivables (usually medium- to long-term) at a discount, without recourse", "forfaiting"],
      ["Goods in transit by sea, air, rail or road", "marine-cargo-insurance"],
      ["Physical loss or damage to a vessel's hull, machinery, equipment and fittings caused by marine perils", "marine-hull-insurance"],
      ["Goods or properties in transit by road, rail or inland water transport", "inland-transit-insurance"],
      ["Customs duty, safe cargo transit and insurance protection in a single integrated policy", "duty-transit-insurance"],
      ["Goods stored in a warehouse: loss or damage due to fire, theft, natural disasters and handling risks", "warehousing-insurance"],
      ["Legal responsibility for loss or damage to goods belonging to others while in your care", "warehouse-keepers-liability-insurance"],
      ["Legal liabilities arising from port and terminal operations", "port-terminal-operators-liability-insurance"],
      ["Legal liabilities arising from the transportation, handling, storage and forwarding of cargo", "freight-services-liability-insurance"],
      ["Claims alleging wrongful acts by directors, officers and key management while performing managerial duties", "directors-officers-liability-insurance"],
      ["Loss of a critical employee, owner, founder or executive whose loss would significantly affect the company", "keyman-insurance"],
    ],
  },
  // Visible Q&A (no FAQPage schema). Answers derived from pp.35-38.
  faqs: [
    {
      q: "Who does PORTMATRIX facilitate MSME Insurance for?",
      a: "Exporters, local traders and wholesalers, Indian manufacturers, and Indian logistics companies and freight forwarders offering credit in their business.",
    },
    {
      q: "What is the difference between credit insurance and political risk insurance?",
      a: "Credit insurance covers buyer default, which is a commercial risk, and is used for trade. Political risk insurance covers government or political events, which is a sovereign risk, and is used for investment and trade.",
    },
    {
      q: "What is the difference between factoring and forfaiting?",
      a: "Forfaiting is medium- or long-term, is without recourse, covers exports (mainly capital goods) and uses bills of exchange or promissory notes. Factoring is short-term, can be with or without recourse, covers domestic and export sales and uses invoices.",
    },
    {
      q: "Which insurance products relate to goods in transit?",
      a: "Marine Cargo Insurance protects goods in transit by sea, air, rail or road. Inland Transit Insurance protects insured goods or properties in transit by road, rail or inland water transport. Duty Transit Insurance is described as a single integrated policy covering customs duty, safe cargo transit and insurance protection.",
    },
    {
      q: "Which insurance products relate to goods stored in a warehouse?",
      a: "Warehousing Insurance protects goods stored in a warehouse against loss or damage due to fire, theft, natural disasters and handling risks. Warehouse Keeper's Liability Insurance protects you when you are legally responsible for loss or damage to goods belonging to others while in your care.",
    },
  ],
};

// Source: docs/source/PORTMATRIX_SOURCE_TEXT.txt pp.35-38.
export const MSME_INSURANCE_PAGE = {
  tagline: "Shield your trade!",
  intro: "Affordable protection for your business, assets, and operations against unforeseen risks.",
  audienceIntro: "We assure your trade by facilitating MSME Insurance for:",
  audience: ["Exporters", "Local Traders & wholesalers", "Indian Manufacturers", "Indian Logistics / freight forwarders offering credit in their business"],
  categories: [
    {
      label: "Trade Credit & Political Risk",
      products: [
        { name: "Export Credit Insurance", desc: "Export Credit Insurance (ECI) protects exporters against the risk of non-payment by overseas buyers. It's one of the most important financial safeguards for Indian exporters." },
        { name: "Domestic Trade Credit Insurance", desc: "Domestic Trade Credit Insurance (DTCI) protects Indian businesses against non-payment by buyers within India when you sell on credit terms (e.g., 30–90 days). Coverage includes protection against buyer default, insolvency, and delayed payments." },
        { name: "Political Risk Insurance", desc: "Political Risk Insurance (PRI) protects businesses against losses caused by government actions or political events in a foreign country—something standard insurance usually won't cover." },
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
      label: "Receivables Financing",
      products: [
        { name: "Factoring", desc: "Factoring is a financing method where a business sells its accounts receivables (invoices) to a third party (factor) to get immediate cash, instead of waiting 30–90 days for customer payment." },
        { name: "Forfaiting", desc: "Forfaiting is a specialized form of export financing where exporters sell their receivables (usually medium- to long-term) to a forfaiter at a discount, on a \"without recourse\" basis—meaning the risk of non-payment is transferred to the forfaiter. Forfaiting is mainly used in international trade, especially for capital goods exports or large-value shipments." },
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
    },
    {
      label: "Cargo & Marine",
      products: [
        { name: "Marine Cargo Insurance", desc: "Marine Cargo Insurance is one of the most essential covers for anyone involved in logistics, imports, or exports—it protects goods while they are in transit by sea, air, rail, or road." },
        { name: "Marine Hull Insurance", desc: "This is a type of marine insurance that provides coverage for physical loss or damage to a vessel's hull, machinery, equipment, and fittings caused by marine perils." },
        { name: "Inland Transit Insurance", desc: "Inland transit insurance, also known as inland marine insurance, refers to a kind of insurance whereby the insured goods or properties are protected while in transit via road transport, rail transport, or inland water transport." },
      ],
    },
    {
      label: "Warehousing & Terminal Liability",
      products: [
        { name: "Warehousing Insurance", desc: "Warehousing insurance protects goods stored in a warehouse against loss or damage due to fire, theft, natural disasters, and handling risks. In India, it's not a single fixed policy—it's usually structured using a combination of standard insurance products depending on your business model, designed to protect the warehouse building, the goods stored, and your liability (if goods belong to customers)." },
        { name: "Warehouse Keeper's Liability Insurance", desc: "Warehouse Keeper's Liability Insurance (WKLI) is essential if you store goods belonging to others—it protects you when you're legally responsible for loss or damage to those goods while in your care." },
        { name: "Port & Terminal Operators Liability Insurance", desc: "This is a specialized insurance policy designed to protect port authorities, terminal operators, stevedores, container freight stations, inland container depots, and logistics operators against legal liabilities arising from their port and terminal operations." },
        { name: "Freight Services Liability Insurance", desc: "This protects Freight Forwarders, Logistics Operators, Customs Brokers, Multimodal Transport Operators, and NVOCCs against legal liabilities arising from the transportation, handling, storage, and forwarding of cargo." },
        { name: "Duty Transit Insurance", desc: "A single integrated policy covering customs duty, safe cargo transit, and insurance protection, ensuring compliant movement of goods and financial protection against transit-related risks." },
      ],
    },
    {
      label: "Corporate & Key-Person",
      products: [
        { name: "Directors & Officers (D&O) Liability Insurance", desc: "This insurance protects the Directors, Officers, and Key Management Personnel of a company against claims arising from alleged wrongful acts committed while performing their managerial duties." },
        { name: "Keyman Insurance", desc: "This is a life insurance policy that a business purchases on a Critical Employee, Owner, Founder, or Executive whose loss would significantly affect the company. The business pays the premiums, owns the policy, and receives the insurance payout if the insured person dies (and sometimes if they become disabled, depending on coverage)." },
      ],
    },
  ],
};

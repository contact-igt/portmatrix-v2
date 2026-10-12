// Source: docs/source/PORTMATRIX_SOURCE_TEXT.txt pp.19-27 (page numbers are
// the PDF footer numbers). Full detail — the homepage's CHINA export
// (lib/content.js) carries the compressed version; this file carries the
// complete source content for the dedicated /china-import-sourcing and
// /china-import-sourcing/canton-fair pages.

export const CHINA_PAGE = {
  // p.19 — the page's defining statement; it leads the page and appears once.
  serviceIntro:
    "We facilitate end to end import assistance to source, negotiate, quality control, inspect and deliver the goods from China.",
  // p.19 — promotional framing; no longer the lead. Shown inside the
  // "China sourcing" block together with the three market statements below.
  marketIntro:
    "China is called the factory of the world. It is being preferred over other countries due to lower cost and quality. Against the myth, China produces very high quality products.",
  // p.20 — "The Gateway to China Trade" / "Specialized China import consultant from sourcing till delivery"
  founderHistory:
    "Our late Founder Mr. M.A. Izzadeen had started his Gem Stones trading in Hong Kong during the year 1974. Over the period of more than 5 decades, we have expanded our business errands in China and India.",
  founderPhotoCaption:
    "Our trade link with Hong Kong and China dated back to 1974. Our late Founder Mr. Izzadeen is seen 3rd from left (behind the person wearing cap). This was a Business Delegation from India (Kayalpattinam) to Hong Kong in 1974.",
  // pp.20-21.
  // CLIENT_CONFIRMATION_REQUIRED: these three market statements are printed
  // undated and unattributed in the source. They stay mid-page, are not lead
  // text, and must not be used in meta, FAQ answers or JSON-LD.
  chinaSourcingFacts: [
    "China is a global hub for manufacturing, as well as the largest exporter of goods in the world.",
    "China is also the world's fastest growing consumer market and second largest importer of goods.",
    "China exports to almost all the continents from Africa to America.",
  ],
  // p.19 sub-line under "3. China Import Sourcing (Since 1974)".
  // CLIENT_CONFIRMATION_REQUIRED: "since 1974" is the founder's Hong Kong trade
  // link (p.20); the company's CIN carries a different year. Shown as the
  // source prints it, never as a company-age claim.
  experienceLine: "Explore our experience in China trade since 1974",
  // p.21 photo caption, as printed.
  factoryPhotoCaption: "Our MD Mr.Rahim Iyaz in a China factory visit in 2015",
  // p.20 sub-heading under "The Gateway to China Trade".
  consultantLine: "Specialized China import consultant from sourcing till delivery",

  // p.20 — the seven-point checklist, verbatim labels. `icon` ids are mapped to
  // lucide icons in the page (visual aid only).
  glance: [
    { icon: "languages", label: "Permanent Chinese speaking staff" },
    { icon: "inspect", label: "Factory inspection" },
    { icon: "container", label: "Hassle free FCL / LCL cargo delivery" },
    { icon: "truck", label: "Door to door delivery from China" },
    { icon: "receipt", label: "Utmost transparency with agreed service charge" },
    { icon: "store", label: "Canton Fair arrangements", href: "/china-import-sourcing/canton-fair" },
    { icon: "plane", label: "China visa and ticketing" },
  ],

  // pp.21 "Import with Ease". Each item: the source sentence as `summary`,
  // then the same sentence broken into points (no added facts).
  importWithEase: [
    {
      id: "one-stop-shop",
      title: "One Stop Shop",
      summary: "End to end import assistance to source, negotiate, quality control, inspect and deliver from China & globally.",
      points: ["Source and negotiate", "Quality control and inspection", "Delivery from China & globally"],
    },
    {
      id: "trend-analysis",
      title: "Trend Analysis",
      summary: "We can also help you to choose the right market by analyzing your strengths and the prevailing business trends.",
      points: ["Analysis of your strengths", "Analysis of the prevailing business trends", "Choosing the right market"],
    },
    {
      id: "travel-support",
      title: "Travel Support",
      summary: "We support your China visit with visa and ticketing formalities, hotel bookings, Indian food & arranging translators to take you to the desired markets.",
      points: ["Visa and ticketing formalities", "Hotel bookings", "Indian food", "Translators to take you to the desired markets"],
    },
    {
      id: "right-supplier-sourcing",
      title: "Right Supplier Sourcing",
      summary: "A lot can go wrong if you end up sourcing a wrong supplier.",
      // CLIENT_CONFIRMATION_REQUIRED: "30% - 40% minimum" is a quantified
      // statement printed in the source (p.21). Kept only inside its original
      // sentence — not in a headline, meta description, FAQ or JSON-LD.
      points: [
        "We help you to identify your products.",
        "We help you to negotiate with the right manufacturers with the help of our local intelligence cell in China.",
        "We can reduce your purchase cost by 30% - 40% minimum.",
      ],
    },
  ],

  // pp.19-22 — stages named in the source, in the source's order. Short labels
  // only; the full source sentences are in `support` below.
  flow: [
    "Identify your products",
    "Negotiate with the right manufacturers",
    "Quality control and inspection",
    "Ordered goods ready for dispatch",
    "Inspection and re-packing of the goods",
    "Vessel booking and shipping to the destined country",
    "Customs clearance in India",
    "Delivery at your door steps",
  ],

  // p.22 — After Order Placement Support / Customs Clearance / LCL Cargo
  // Facility / Hassle Free Import. headline → source sentence → key points.
  support: [
    {
      id: "after-order",
      icon: "package",
      title: "After Order Placement Support",
      text: "Once the ordered goods are ready for dispatch; we inspect the goods, re-pack it and book the vessels and facilitate the shipping to the destined country.",
      points: ["Inspect the goods", "Re-pack", "Book the vessels", "Facilitate the shipping to the destined country"],
      linkPhrase: "book the vessels and facilitate the shipping",
      href: "/services/freight-forwarding-logistics",
    },
    {
      id: "customs",
      icon: "stamp",
      title: "Customs Clearance",
      text: "Being a licensed Customs Broker, we facilitate the Customs clearance in India and do all the necessary arrangements to deliver the goods at your door steps.",
      points: ["Customs clearance in India", "Delivery of the goods at your door steps"],
      linkPhrase: "licensed Customs Broker",
      href: "/services/licensed-customs-broker",
    },
    {
      id: "lcl",
      icon: "container",
      title: "LCL Cargo Facility",
      text: "Besides FCL (Full Container Load), we can also help to source and deliver the goods on your behalf by a smaller quantity of LCL (Lesser than a Container Load) Cargo facility.",
      points: ["FCL: Full Container Load", "LCL: Lesser than a Container Load"],
    },
    {
      id: "hassle-free",
      icon: "check",
      title: "Hassle Free Import",
      text: "You import hassle free as your job ends with finalizing the products; all other formalities are taken care of by us.",
      points: ["Your job ends with finalizing the products", "All other formalities are taken care of by us"],
    },
  ],

  // p.22 "Utmost Transparency".
  transparency: {
    title: "Utmost transparency",
    lead: "We strongly believe in transparent dealings.",
    points: [
      { icon: "shield", text: "We don't collect any hidden charges." },
      { icon: "handshake", text: "We are a professional co-ordinator helping you in the process." },
      { icon: "receipt", text: "We only take agreed service charges." },
    ],
  },

  // p.22 "Visit Canton Fair" — the first sentence only; the dedicated page
  // carries the rest (pp.22-27).
  cantonTeaser: {
    title: "Visit Canton Fair",
    text: "Canton Fair is the largest Bi-annual China Trade Fair (April & October) held in Guangzhou, wherein all the leading Chinese manufacturers would exhibit their products.",
    facts: [
      { value: "Guangzhou", label: "Held in" },
      { value: "April & October", label: "Bi-annual" },
    ],
    cta: "Explore Canton Fair",
  },
};

export const CANTON_FAIR_PAGE = {
  // p.22 — definition (the page's lead).
  intro:
    "Canton Fair is the largest Bi-annual China Trade Fair (April & October) held in Guangzhou, wherein all the leading Chinese manufacturers would exhibit their products.",
  // p.22 — the remainder of the source paragraph, kept as supporting text.
  introMore:
    "It's no wonder that the Canton Fair has already become a must see for all those looking for business success in China. It is the most effective way to develop a business relationship.",
  officialWebsite: "https://www.cantonfair.org.cn/",
  // pp.23-24. Phase names are source labels; the source does not explain
  // them, so neither does the site.
  categories: [
    {
      phase: 1,
      groups: [
        { name: "Electronics & Appliance", desc: "Household Electrical Appliances, Consumer Electronics and Information Products" },
        { name: "Manufacturing", desc: "Industrial Automation and Intelligent Manufacturing, Processing Machinery Equipment, Power Machinery and Electric Power, General Machinery and Mechanical Basic Parts, Construction Machinery, Agricultural Machinery, New Materials and Chemical Products." },
        { name: "Vehicles & Two Wheels", desc: "New Energy Vehicles and Smart Mobility, Vehicles, Vehicle Spare Parts, Motorcycles, Bicycles" },
        { name: "Light & Electrical", desc: "Lighting Equipment, Electronic and Electrical Products, New Energy Resources" },
        { name: "Hardware", desc: "Hardware, Tools" },
      ],
    },
    {
      phase: 2,
      groups: [
        { name: "Houseware", desc: "General Ceramics, Kitchenware and Tableware, Household Items." },
        { name: "Gift & Decorations", desc: "Glass Artware, Home Decorations, Gardening Products, Festival Products, Gifts and Premiums, Clocks, Watches and Optical Instruments, Art Ceramics, Weaving, Rattan and Iron Products." },
        { name: "Building & Furniture", desc: "Building and Decorative Materials, Sanitary and Bathroom Equipment, Furniture, Stone/Iron Decoration and Outdoor Spa Equipment." },
      ],
    },
    {
      phase: 3,
      groups: [
        { name: "Toys & Children Baby and Maternity", desc: "Toys, Children, Baby and Maternity Products, Kids' Wear." },
        { name: "Fashion", desc: "Men and Women's Clothing, Underwear, Sports and Casual Wear, Furs, Leather, Downs and Related Products, Fashion Accessories and Fittings, Textile Raw Materials and Fabrics, Shoes, Cases and Bags." },
        { name: "Home Textiles", desc: "Home Textiles, Carpets and Tapestries." },
        { name: "Stationery", desc: "Office Supplies" },
        { name: "Health & Recreation", desc: "Medicines, Health Products and Medical Devices, Food, Sports, Travel and Recreation Products, Personal Care Products, Toiletries, Pet Products and Food." },
      ],
    },
  ],
  // p.26 — package lead-in sentence + the eight inclusions.
  packageIntro:
    "We arrange China Trade Fair packages for individuals and groups during every season as per the specified category.",
  packageInclusions: [
    "Assistance of visa & tickets formalities",
    "Airport pick up & drop in China",
    "Hotel single / twin sharing",
    "Indian food / Turkish / Arabian gala dinner",
    "Local transportation",
    "Markets & factories visits with Chinese guide",
    "Local sightseeing & shopping",
    "Trade consultancy",
  ],
  // pp.26-27 "Personalized Services in China", in source order. Three lines
  // that restate /china-import-sourcing (FCL / LCL, inspection, transparency)
  // are combined into one linked entry.
  //
  // CLIENT_CONFIRMATION_REQUIRED: "Minimum 30% profit guaranteed on purchase",
  // "Product Replacement Warranty*" (no footnote in the source) and "12x7
  // after sales services in China and India" are printed in the source but
  // unconfirmed commitments. They are kept verbatim as plain list items only —
  // never in a headline, intro, meta description, JSON-LD or FAQ answer.
  personalizedServices: [
    { text: "Specialist in Architects designed life-style products" },
    { text: "Permanent staffing with multilingual negotiating skills" },
    { text: "Trade analysis to choose the right products" },
    {
      text: "Hassle free FCL / LCL cargo facilities, factory / cargo inspection and utmost transparency with service charge module are described on",
      linkText: "China Import Sourcing",
      href: "/china-import-sourcing",
    },
    { text: "Minimum 30% profit guaranteed on purchase" }, // CLIENT_CONFIRMATION_REQUIRED
    { text: "Product Replacement Warranty*" }, // CLIENT_CONFIRMATION_REQUIRED
    { text: "Travel support to Canton Fair services" },
    { text: "12x7 after sales services in China and India" }, // CLIENT_CONFIRMATION_REQUIRED
  ],
};

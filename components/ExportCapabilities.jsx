import { ShieldCheck, ChartNoAxesCombined, Handshake, ClipboardCheck, Ship, GraduationCap } from "lucide-react";

const ICONS = [ShieldCheck, ChartNoAxesCombined, Handshake, ClipboardCheck, Ship, GraduationCap];

const COLORS = [
  { background: "#eef4fb", accent: "#164e87" },
  { background: "#edf6f1", accent: "#246448" },
  { background: "#fbf3e8", accent: "#85551b" },
  { background: "#f2eff9", accent: "#634490" },
  { background: "#eaf5f6", accent: "#20646c" },
  { background: "#fbeef0", accent: "#963e50" },
];

const HEADINGS = [
  "Customs Clearance & Regulatory Compliance",
  "Export Planning & Market Intelligence",
  "Buyer Development & Commercial Advisory",
  "Export Product & Quality Compliance",
  "Risk Management & Global Logistics",
  "Training & Capacity Building",
];

const SERVICES = [
  [
    "Export & Import Customs Clearance",
    "Identification of Correct ITC (HS) Codes",
    "Verification of Export–Import Policy",
    "Export Documentation & Customs Procedures",
  ],
  [
    "Export Analytics & International Market Intelligence for exploration of new markets",
    "FTA / CEPA Opportunities & Benefits",
    "Export Promotion Schemes – DGFT / Customs",
    "Importing Country Regulations & Compliance",
  ],
  [
    "Export Payment Methodologies",
    "INCOTERMS® Advisory",
    "Export Quotation & Proforma Invoice Preparation",
    "Buyer Credit Status Verification",
    "Pre-Shipment & Post-Shipment Finance Arrangement",
  ],
  [
    "Non-Tariff Barrier Compliance – SPS / TBT",
    "Pre-Shipment Inspection Coordination",
    "Packaging, Labelling & Marking Requirements",
  ],
  [
    "Marine Insurance & Trade Credit Insurance – ECGC",
    "China Import Sourcing",
    "Freight Forwarding & International Logistics",
  ],
  ["International Trade Training, Research and Consultancy through the Regional Institute of International Trade (RIIT)."],
];

export default function ExportCapabilities() {
  return (
    <section aria-labelledby="hero-process" className="mx-auto mt-12 max-w-7xl px-5 pb-12 sm:px-8 lg:mt-16 lg:pb-14">
      <div className="border-t-2 border-navy">
        <div className="py-6 sm:py-8">
          <h2 id="hero-process" className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">End-to-End Export  Import Facilitation Process</h2>
          <p className="mt-2 text-sm text-slatey">Support across six export import service areas.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {HEADINGS.map((heading, index) => {
            const Icon = ICONS[index];
            return (
              <article key={heading} className="relative flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-hairline bg-white shadow-[0_2px_8px_rgba(15,35,60,0.03)]" style={{ color: COLORS[index].accent }}>
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] border-t-4 border-current" />
                <div className="relative border-b border-hairline px-6 pb-6 pt-6 sm:px-7" style={{ backgroundColor: COLORS[index].background }}>
                  <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white bg-white/80 shadow-[0_2px_4px_rgba(15,35,60,0.03)]">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                    <span className="font-display text-[32px] font-medium leading-none tabular-nums tracking-[-0.05em] opacity-30">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="max-w-[26ch] font-display text-lg font-bold leading-[1.4] tracking-[-0.02em] sm:min-h-[3.15rem]">{heading}</h3>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-5 pt-2 sm:px-7">
                  <ul className="divide-y divide-hairline text-sm leading-[1.65] text-ink/85">
                    {SERVICES[index].map((service) => <li key={service} className="flex items-start gap-3 py-3.5 first:pt-4 last:pb-1"><span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: COLORS[index].accent }} /><span>{service}</span></li>)}
                  </ul>
                  {index === 5 && <a href="/riit" className="mb-1 mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-hairline px-4 text-sm font-semibold transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">Explore RIIT training →</a>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

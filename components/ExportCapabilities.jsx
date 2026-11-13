"use client";

import { useState } from "react";
import { ShieldCheck, ChartNoAxesCombined, Handshake, ClipboardCheck, Ship, GraduationCap, ChevronDown } from "lucide-react";

const ICONS = [ShieldCheck, ChartNoAxesCombined, Handshake, ClipboardCheck, Ship, GraduationCap];

const COLORS = [
  { background: "#DBEAFE", accent: "#013E7F" },
  { background: "#BBF7D0", accent: "#246448" },
  { background: "#FDE68A", accent: "#85551b" },
  { background: "#DDD6FE", accent: "#634490" },
  { background: "#A5F3FC", accent: "#20646c" },
  { background: "#FECDD3", accent: "#9F1239" },
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
  const [active, setActive] = useState(null);
  return (
    <section aria-labelledby="hero-process" className="mx-auto mt-12 max-w-7xl px-5 pb-12 sm:px-8 lg:mt-16 lg:pb-14">
      <div className="border-t-2 border-navy">
        <div className="py-6 sm:py-8">
          <h2 id="hero-process" className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">End-to-End Export  Import Facilitation Process</h2>
          <p className="mt-2 text-sm text-slatey">Support across six export import service areas.</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4" aria-label="Export import service areas">
          {HEADINGS.map((heading, index) => {
            const Icon = ICONS[index];
            const expanded = active === index;
            return (
              <h3 key={heading} className="flex w-56 shrink-0 lg:w-auto lg:min-w-0 lg:flex-1">
                <button type="button" id={`export-area-${index}`} aria-expanded={expanded} aria-controls={`export-module-${index}`}
                  onClick={() => setActive(expanded ? null : index)}
                  className="flex w-full flex-col gap-4 rounded-xl border-t-4 border-current p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
                  style={{ backgroundColor: COLORS[index].background, color: COLORS[index].accent }}>
                  <span className="flex w-full items-center justify-between" aria-hidden="true">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                    <span className="text-sm font-semibold tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  </span>
                  <span className="font-display text-base font-bold leading-snug">{heading}</span>
                  <ChevronDown aria-hidden="true" className={`mt-auto h-5 w-5 ${expanded ? "rotate-180" : ""}`} />
                </button>
              </h3>
            );
          })}
        </div>
        {HEADINGS.map((heading, index) => (
          <div key={heading} id={`export-module-${index}`} role="region" aria-labelledby={`export-area-${index}`} hidden={active !== index}
            className="mt-2 rounded-xl border border-hairline border-l-4 bg-white p-6 sm:p-8" style={{ borderLeftColor: COLORS[index].accent }}>
            <h4 className="font-display text-lg font-bold" style={{ color: COLORS[index].accent }}>{heading}</h4>
            <ul className="mt-4 divide-y divide-hairline text-sm leading-relaxed text-ink">
              {SERVICES[index].map((service) => (
                <li key={service} className="flex items-start gap-3 py-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: COLORS[index].accent }} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            {index === 5 && <a href="/riit" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-navy underline underline-offset-4">Explore RIIT training &rarr;</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

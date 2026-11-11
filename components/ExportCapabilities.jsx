import { ShieldCheck, ChartNoAxesCombined, Handshake, ClipboardCheck, Ship, GraduationCap } from "lucide-react";

const ICONS = [ShieldCheck, ChartNoAxesCombined, Handshake, ClipboardCheck, Ship, GraduationCap];

const HEADINGS = [
  "Customs Clearance & Regulatory Compliance",
  "Export Planning & Market Intelligence",
  "Buyer Development & Commercial Advisory",
  "Export Product & Quality Compliance",
  "Risk Management & Global Logistics",
  "Training & Capacity Building",
];

export default function ExportCapabilities() {
  return (
    <section aria-labelledby="hero-process" className="mx-auto mt-12 max-w-7xl px-5 pb-12 sm:px-8 lg:mt-16 lg:pb-14">
      <div className="border-t-2 border-navy">
        <div className="border-b border-hairline py-5">
          <h2 id="hero-process" className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">End-to-End Export Facilitation Process</h2>
        </div>
        <div className="capabilities-window overflow-x-auto border-b border-hairline" tabIndex={0} aria-label="Six export service areas">
          <div className="capabilities-track flex w-max py-6 sm:py-8">
            {[0, 1].map((copy) => (
              <ol key={copy} aria-hidden={copy === 1 ? true : undefined} className={`flex ${copy === 1 ? "motion-reduce:hidden" : ""}`}>
                {HEADINGS.map((heading, index) => {
                  const Icon = ICONS[index];
                  return (
                    <li key={heading} className="flex w-80 shrink-0 items-start gap-5 border-r border-hairline px-6 py-3 sm:w-[23rem] sm:px-8">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                        <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <span className="inline-flex min-w-10 items-center justify-center rounded-full border border-brandred/20 bg-brandred/5 px-2.5 py-1 font-display text-xs font-bold tabular-nums tracking-wider text-brandred">{String(index + 1).padStart(2, "0")}</span>
                        <p className="mt-2 font-display text-[17px] font-bold leading-snug text-navy">{heading}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

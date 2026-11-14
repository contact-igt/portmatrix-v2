// Service wording and business advantages supplied directly by the client.
const ROWS = [
  ["Customs Clearance", "Seamless Export & Import clearance with regulatory compliance and timely cargo movement."],
  ["International Market Intelligence", "Helps identify promising export markets"],
  ["HS Code & Policy Advisory", "Reduces classification and policy-related risks"],
  ["FTA / CEPA & Rules of Origin (CAROTAR 2020)", "Helps exporters access eligible tariff benefits"],
  ["DGFT Authorisations & Incentives", "Supports duty savings and export benefits"],
  ["EXIM Compliance & Landed Costing", "Helps exporters / importers calculate actual costs"],
  ["Buyer Verification & ECGC", "Helps reduce payment and credit risks"],
  ["Export Handholding for MSMEs / FPOs", "Creates recurring consultancy opportunities"],
  ["e-BRC & FEMA Compliance", "Supports post-shipment regulatory closure"],
  ["China Import Sourcing", "Adds an international procurement service"],
  ["E-commerce & Postal Exports", "Opens opportunities for small exporters"],
];

export default function PriorityServices() {
  return (
    <section aria-labelledby="priority-services-heading" className="border-y border-hairline bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 border-t-2 border-navy pt-6">
          <h2 id="priority-services-heading" className="max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.5rem]">PORTMATRIX EXIM CLEARANCE PACKAGE</h2>
          <p className="kicker flex items-center gap-3 text-brandred"><span className="h-px w-7 bg-current" aria-hidden="true" />Priority services</p>
        </div>
        <div className="mt-9 overflow-hidden rounded-xl border border-hairline sm:mt-12">
          <div aria-hidden="true" className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-10 bg-navy px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white md:grid">
            <span className="pl-12">Priority service</span>
            <span>Business advantage</span>
          </div>
          <dl className="divide-y divide-hairline">
            {ROWS.map(([service, advantage], index) => (
              <div key={service} className="grid gap-3 px-5 py-5 transition-colors duration-150 hover:bg-navy/[0.025] sm:px-7 sm:py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:items-baseline md:gap-10">
                <dt className="flex items-baseline gap-4">
                  <span aria-hidden="true" className="w-8 shrink-0 font-display text-xs font-semibold tabular-nums text-brandred">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-base font-bold leading-relaxed text-navy sm:text-lg">{service}</span>
                </dt>
                <dd className="pl-12 text-base leading-relaxed text-slatey md:pl-0">{advantage}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

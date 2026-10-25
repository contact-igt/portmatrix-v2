import Link from "next/link";
import IllustrativeFigure from "./IllustrativeFigure";
import { ArrowRight } from "lucide-react";
import { OPERATIONAL_PROOF } from "@/lib/content";

// Home summary of the customs / freight / logistics work. The inspection
// photograph for this section is the hero image (Netherlands 2024); the USA
// 2025 photo remains on /services/export-import-clearance.
const DISCIPLINE_LINKS = {
  "Licensed Customs Broker": "/services/licensed-customs-broker",
  "Export Import Clearance": "/services/export-import-clearance",
  "Freight Forwarding & Logistics": "/services/freight-forwarding-logistics",
};

export default function OperationalProof() {
  return (
    <section id="proof" className="relative scroll-mt-20 bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="kicker flex items-center gap-2.5 text-brandred">
            <span className="h-px w-8 bg-current" />
            {OPERATIONAL_PROOF.kicker}
          </p>
          <h2 className="h2 mt-4 text-ink">{OPERATIONAL_PROOF.heading}</h2>
          <IllustrativeFigure image="inland-cargo-movement" className="mt-6 max-w-lg" />
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-ink/85">{OPERATIONAL_PROOF.intro}</p>
          <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
            {OPERATIONAL_PROOF.disciplines.map((d) => (
              <li key={d}>
                <Link
                  href={DISCIPLINE_LINKS[d] || "/services"}
                  className="group flex min-h-11 items-center justify-between gap-4 py-4 font-display text-lg font-semibold text-ink transition-colors hover:text-navy"
                >
                  {d}
                  <ArrowRight className="h-4 w-4 shrink-0 text-navy/40 transition-colors group-hover:text-navy" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

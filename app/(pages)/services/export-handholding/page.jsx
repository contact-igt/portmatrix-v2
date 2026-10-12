import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Handshake,
  Landmark,
  Package,
  PackageCheck,
  Route,
  Ship,
  ShieldCheck,
  Truck,
  Umbrella,
  Users,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import Faq from "@/components/Faq";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import { PHASES, EXPORT_HANDHOLDING_HUB } from "@/lib/export-handholding-data";

export const metadata = buildMetadata({
  title: EXPORT_HANDHOLDING_HUB.metaTitle,
  description: EXPORT_HANDHOLDING_HUB.metaDescription,
  path: "/services/export-handholding",
});

// Icons are visual aids only, matched to the source's own phase / activity
// order (Phase 1..6; the eight stated activities).
const PHASE_ICONS = [ClipboardCheck, Route, Handshake, PackageCheck, Ship, Banknote];
const ACTIVITY_ICONS = [FileCheck2, FileText, Users, ShieldCheck, Package, Truck, Umbrella, Landmark];

export default function ExportHandholdingHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MSME Export Handholding",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: EXPORT_HANDHOLDING_HUB.intro,
  };
  const lastPhase = PHASES.length - 1;

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Export Handholding", href: "/services/export-handholding" }]} />}
        kicker="Core service"
        title="MSME Export Handholding"
        intro="A six-phase process that supports exporters from business registration through to post-shipment payment realisation."
      />

      <section className="mt-14 lg:grid lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-x-14" aria-labelledby="process-heading">
        <div>
          <h2 id="process-heading" className="h3 scroll-mt-24 text-ink">End-to-End Export Facilitation Process</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey">Complete support across eight activities:</p>
        </div>
        <div className="mt-5 lg:mt-0">
          <ul className="grid border-t border-hairline sm:grid-cols-2 sm:gap-x-10">
            {EXPORT_HANDHOLDING_HUB.activities.map((a, i) => {
              const Icon = ACTIVITY_ICONS[i];
              return (
                <li key={a} className="flex items-center gap-3.5 border-b border-hairline py-3.5 text-base text-ink">
                  <Icon className="h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                  {a}
                </li>
              );
            })}
          </ul>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-slatey">{EXPORT_HANDHOLDING_HUB.closing}</p>
        </div>
      </section>

      {/* The phase spine: one numbered rail, icon nodes joined by a rule. */}
      <section className="mt-16 border border-hairline bg-white p-6 sm:p-10" aria-labelledby="phases-heading">
        <h2 id="phases-heading" className="h3 scroll-mt-24 text-ink">The six phases of export handholding</h2>
        <ol className="mt-8 sm:mt-10">
          {PHASES.map((phase, i) => {
            const Icon = PHASE_ICONS[i];
            const href = `/services/export-handholding/${phase.slug}`;
            return (
              <li key={phase.slug} className="relative pb-12 pl-16 last:pb-0 sm:pl-24">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy bg-white text-navy sm:h-16 sm:w-16"
                >
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                </span>
                {i < lastPhase && (
                  <span aria-hidden="true" className="absolute bottom-0 left-6 top-14 w-px bg-navy/25 sm:left-8 sm:top-[4.5rem]" />
                )}
                <div className="md:grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-x-10">
                  <div>
                    <p className="font-display text-4xl font-bold leading-none text-navy sm:text-5xl">
                      <span className="sr-only">Phase </span>
                      {String(phase.n).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
                      <Link href={href} className="hover:text-navy hover:underline">
                        {phase.title}
                      </Link>
                    </h3>
                    <p className="mt-1.5 text-[15px] text-slatey">{phase.steps.length} steps</p>
                    <Link
                      href={href}
                      className="group mt-1 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-navy"
                      aria-label={`View Phase ${phase.n}: ${phase.title}`}
                    >
                      View phase
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                  <ol className="mt-4 grid border-t border-hairline lg:grid-cols-2 lg:gap-x-8 md:mt-0">
                    {phase.steps.map((step, k) => (
                      <li key={step.title} className="flex gap-3 border-b border-hairline py-2.5 text-base leading-snug text-ink/90">
                        <span className="w-6 shrink-0 pt-px text-[15px] tabular-nums text-slatey" aria-hidden="true">
                          {String(k + 1).padStart(2, "0")}
                        </span>
                        {step.title}
                      </li>
                    ))}
                  </ol>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <Faq items={EXPORT_HANDHOLDING_HUB.faq} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
            { title: "MSME Insurance Package", href: "/services/msme-insurance" },
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
          ]}
        />
      </div>
    </div>
  );
}

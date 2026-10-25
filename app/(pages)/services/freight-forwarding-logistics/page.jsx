import IllustrativeFigure from "@/components/IllustrativeFigure";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ComparisonTable from "@/components/ComparisonTable";
import RelatedServices from "@/components/RelatedServices";
import { FREIGHT_FORWARDING_PAGE as P } from "@/lib/trade-services-data";
import { buildMetadata } from "@/lib/seo";

// Description deliberately omits 3PL / 4PL / Cold Chain (capability to be
// confirmed by the client — see lib/trade-services-data.js).
export const metadata = buildMetadata({
  title: "Freight Forwarding & Logistics",
  description:
    "Freight forwarding and logistics coordination by sea, air, road or rail: core services, business segments, workflow and the key documents used.",
  path: "/services/freight-forwarding-logistics",
});

const linkCls = "text-navy underline underline-offset-2 hover:text-brandred";

// Core-service items that have their own page (source relates them: p.33
// lists Postal Export, E-Commerce Export and Marine Insurance as services).
const CORE_SERVICE_LINKS = {
  "Postal Export": "/services/postal-export",
  "E-Commerce Export": "/services/e-commerce-export",
  "Marine Insurance": "/services/msme-insurance",
};

export default function FreightForwardingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Freight Forwarding & Logistics",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: P.definition,
  };

  // Segments table: "Customs Brokerage" links to the broker page.
  const segmentRows = P.segments.map(([name, desc]) => [
    name === "Customs Brokerage" ? (
      <Link href="/services/licensed-customs-broker" className={linkCls}>{name}</Link>
    ) : (
      name
    ),
    desc,
  ]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        aside={<IllustrativeFigure image="export-logistics" className="mx-auto w-full max-w-lg" />}
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" }]} />}
        kicker={P.tagline}
        title="Freight Forwarding & Logistics"
        intro={P.intro}
      />

      <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink/85">{P.serviceIntro}</p>

      <div className="mt-12 grid gap-12 border-t-2 border-ink pt-8 lg:grid-cols-2 lg:gap-16">
        <section aria-labelledby="what-is-freight-forwarding">
          <h2 id="what-is-freight-forwarding" className="h3 text-ink">What freight forwarding is</h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{P.definition}</p>
        </section>

        <section aria-labelledby="who-we-support">
          <h2 id="who-we-support" className="h3 text-ink">Who we support</h2>
          <p className="mt-4 text-base text-slatey">As a Logistics Coordinator, we support:</p>
          <ul className="mt-3 divide-y divide-hairline border-y border-hairline">
            {P.supportedParties.map((p) => (
              <li key={p} className="py-2.5 text-base text-ink">{p}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-14" aria-labelledby="core-services">
        <h2 id="core-services" className="h3 text-ink">Our Core Freight Forwarding Services</h2>
        <ul className="mt-5 grid border-t-2 border-ink sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {P.coreServices.map((s) => (
            <li key={s} className="border-b border-hairline">
              {CORE_SERVICE_LINKS[s] ? (
                <Link href={CORE_SERVICE_LINKS[s]} className="group flex min-h-11 items-center justify-between gap-3 py-3 text-base font-medium text-navy hover:text-brandred">
                  <span className="underline underline-offset-2">{s}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ) : (
                <span className="flex min-h-11 items-center py-3 text-base text-ink">{s}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{P.coordination}</p>
      </section>

      <section className="mt-14" aria-labelledby="segments">
        <h2 id="segments" className="h3 text-ink">Our Logistics Business Segments</h2>
        <ComparisonTable caption="Logistics business segments and what each covers" headers={["Segment", "Description"]} rows={segmentRows} />
      </section>

      {/* Workflow line: horizontal from xl, the page's single tinted band */}
      <section className="-mx-5 mt-14 bg-navy-50/60 px-5 py-12 sm:-mx-8 sm:px-8" aria-labelledby="workflow">
        <h2 id="workflow" className="h3 text-ink">Freight Forwarding Workflow</h2>
        <ol className="mt-8 grid gap-x-6 gap-y-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-8 xl:grid-cols-8 xl:gap-x-4">
          {P.workflow.map((step, i) => (
            <li key={step} className="relative flex gap-4 border-t border-navy/20 py-4 sm:flex-col sm:gap-2 sm:border-t-2 sm:border-navy sm:pt-4">
              <span aria-hidden="true" className="w-8 shrink-0 font-display text-2xl font-bold leading-none tabular-nums text-navy sm:w-auto">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base leading-snug text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14" aria-labelledby="key-documents">
        <h2 id="key-documents" className="h3 text-ink">Key Documents Used</h2>
        <ul className="mt-5 grid border-t-2 border-ink sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {P.keyDocuments.map((d) => (
            <li key={d} className="flex items-start gap-3 border-b border-hairline py-3.5 text-base leading-snug text-ink">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "China Import Sourcing", href: "/china-import-sourcing" },
            { title: "MSME Insurance Package", href: "/services/msme-insurance" },
            { title: "Postal Export Aggregator", href: "/services/postal-export" },
            { title: "E-Commerce Export", href: "/services/e-commerce-export" },
          ]}
        />
      </div>
    </div>
  );
}

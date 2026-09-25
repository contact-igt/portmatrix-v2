import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ComparisonTable from "@/components/ComparisonTable";
import ProcessFlow from "@/components/ProcessFlow";
import RelatedServices from "@/components/RelatedServices";
import { FREIGHT_FORWARDING_PAGE } from "@/lib/trade-services-data";

export const metadata = {
  title: "Freight Forwarding & Logistics",
  description: "Freight Forwarding & Logistics — core services, logistics business segments and workflow.",
  alternates: { canonical: "/services/freight-forwarding-logistics" },
};

export default function FreightForwardingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Freight Forwarding & Logistics",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: FREIGHT_FORWARDING_PAGE.definition,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" }]} />}
        kicker={FREIGHT_FORWARDING_PAGE.tagline}
        title="Freight Forwarding & Logistics"
        intro={FREIGHT_FORWARDING_PAGE.intro}
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="article-body max-w-none">
          <p>{FREIGHT_FORWARDING_PAGE.serviceIntro}</p>
          <p>{FREIGHT_FORWARDING_PAGE.definition}</p>

          <h2 className="h3 mt-8 text-ink">As a Logistics Coordinator, we support</h2>
          <ul>
            {FREIGHT_FORWARDING_PAGE.supportedParties.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Our Core Freight Forwarding Services</h2>
          <ul>
            {FREIGHT_FORWARDING_PAGE.coreServices.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p>{FREIGHT_FORWARDING_PAGE.coordination}</p>
        </div>

        <div>
          <h2 className="h3 text-ink">Our Logistics Business Segments</h2>
          <ComparisonTable
            headers={["Segment", "Description"]}
            rows={FREIGHT_FORWARDING_PAGE.segments}
          />

          <h2 className="h3 mt-8 text-ink">Freight Forwarding Workflow</h2>
          <ProcessFlow steps={FREIGHT_FORWARDING_PAGE.workflow} />

          <h2 className="h3 mt-8 text-ink">Key Documents Used</h2>
          <ul className="mt-3 space-y-1.5">
            {FREIGHT_FORWARDING_PAGE.keyDocuments.map((d) => (
              <li key={d} className="text-base text-ink/80">
                · {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "China Import Sourcing", href: "/china-import-sourcing" },
            { title: "MSME Insurance Package", href: "/services/msme-insurance" },
            { title: "Postal Export Aggregator", href: "/services/postal-export" },
          ]}
        />
      </div>
    </div>
  );
}

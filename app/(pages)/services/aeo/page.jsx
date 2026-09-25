import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ComparisonTable from "@/components/ComparisonTable";
import ProcessFlow from "@/components/ProcessFlow";
import RelatedServices from "@/components/RelatedServices";
import { AEO_PAGE } from "@/lib/schemes-data";

export const metadata = {
  title: "AEO",
  description: "Authorised Economic Operator (AEO). We support in facilitating the procedures for obtaining AEO status.",
  alternates: { canonical: "/services/aeo" },
};

export default function AeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Authorised Economic Operator (AEO)",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: AEO_PAGE.definition,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "AEO", href: "/services/aeo" }]} />}
        kicker={AEO_PAGE.tagline}
        title="Authorised Economic Operator (AEO)"
        intro={AEO_PAGE.intro}
      />
      <p className="mt-4 max-w-3xl text-base font-medium text-ink sm:text-lg">{AEO_PAGE.serviceIntro}</p>
      <p className="mt-2 max-w-3xl font-semibold text-ink">{AEO_PAGE.simpleDefinition}</p>

      {/* Categories — the certification structure leads this page */}
      <h2 className="h2 mt-10 text-ink">AEO Categories in India</h2>
      <ComparisonTable headers={AEO_PAGE.categoriesTable.headers} rows={AEO_PAGE.categoriesTable.rows} />

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="h3 text-ink">Who Can Apply?</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {AEO_PAGE.applicantTypes.map((t) => (
              <span key={t} className="rounded-full border border-hairline px-3 py-1 text-sm text-ink/75">
                {t}
              </span>
            ))}
          </div>

          <h2 className="h3 mt-8 text-ink">Certification Benefits</h2>
          <ul className="mt-3 space-y-1.5">
            {AEO_PAGE.benefits.map((b) => (
              <li key={b} className="text-base leading-relaxed text-ink/80">· {b}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Basic Eligibility</h2>
          <ul className="mt-3 space-y-1.5">
            {AEO_PAGE.eligibility.map((e) => (
              <li key={e} className="text-base leading-relaxed text-ink/80">· {e}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="h3 text-ink">Major Benefits — Importers & Exporters</h2>
          <ul className="mt-3 space-y-1.5">
            {AEO_PAGE.majorBenefits.importersExporters.map((b) => (
              <li key={b} className="text-base leading-relaxed text-ink/80">· {b}</li>
            ))}
          </ul>
          <h2 className="h3 mt-8 text-ink">For Customs Brokers & Logistics Operators</h2>
          <ul className="mt-3 space-y-1.5">
            {AEO_PAGE.majorBenefits.brokersOperators.map((b) => (
              <li key={b} className="text-base leading-relaxed text-ink/80">· {b}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Application Process</h2>
          <ProcessFlow steps={AEO_PAGE.applicationProcess} />
        </div>
      </div>

      <h2 className="h3 mt-10 text-ink">Importance of AEO in India</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {AEO_PAGE.importance.map((i) => (
          <span key={i} className="rounded-full bg-navy-50 px-3 py-1 text-sm text-navy">
            {i}
          </span>
        ))}
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Licensed Customs Broker", href: "/services/licensed-customs-broker" },
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "EOU", href: "/services/eou" },
          ]}
        />
      </div>
    </div>
  );
}

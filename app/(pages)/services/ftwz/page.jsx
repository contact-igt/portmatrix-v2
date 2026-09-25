import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ProcessFlow from "@/components/ProcessFlow";
import ComparisonTable from "@/components/ComparisonTable";
import RelatedServices from "@/components/RelatedServices";
import { MapPin } from "lucide-react";
import { FTWZ_PAGE } from "@/lib/schemes-data";

export const metadata = {
  title: "FTWZ",
  description: "Free Trade Warehousing Zone (FTWZ). Major FTWZ in Tamil Nadu: J Matadee FTWZ, Sriperumbudur.",
  alternates: { canonical: "/services/ftwz" },
};

export default function FtwzPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Trade Warehousing Zone (FTWZ)",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: FTWZ_PAGE.definition,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "FTWZ", href: "/services/ftwz" }]} />}
        kicker={FTWZ_PAGE.tagline}
        title="Free Trade Warehousing Zone (FTWZ)"
        intro={FTWZ_PAGE.intro}
      />
      <p className="mt-4 max-w-3xl text-base font-medium text-ink sm:text-lg">{FTWZ_PAGE.serviceIntro}</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="article-body max-w-none">
          <p>{FTWZ_PAGE.definition}</p>
          <p className="font-semibold text-ink">{FTWZ_PAGE.simpleDefinition}</p>

          <h2 className="h3 mt-8 text-ink">Key Features</h2>
          <ul>
            {FTWZ_PAGE.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Value-Added Services Allowed</h2>
          <div className="flex flex-wrap gap-2">
            {FTWZ_PAGE.valueAddedServices.map((v) => (
              <span key={v} className="rounded-full border border-hairline px-3 py-1 text-sm text-ink/75">
                {v}
              </span>
            ))}
          </div>

          <h2 className="h3 mt-8 text-ink">Benefits</h2>
          <p className="font-semibold text-ink">For Importers</p>
          <ul>
            {FTWZ_PAGE.benefits.importers.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <p className="font-semibold text-ink">For Exporters</p>
          <ul>
            {FTWZ_PAGE.benefits.exporters.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <p className="font-semibold text-ink">For Global Traders</p>
          <ul>
            {FTWZ_PAGE.benefits.globalTraders.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="h3 text-ink">FTWZ Scheme Workflow</h2>
          <ProcessFlow steps={FTWZ_PAGE.workflow} />

          <h2 className="h3 mt-8 text-ink">Activities Allowed</h2>
          <ul className="mt-3 space-y-1.5">
            {FTWZ_PAGE.activitiesAllowed.map((a) => (
              <li key={a} className="text-base text-ink/80">· {a}</li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3 rounded-xl border border-hairline bg-paper px-5 py-4">
            <MapPin className="h-5 w-5 shrink-0 text-brandred" />
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-slatey">Major FTWZ in Tamil Nadu</p>
              <p className="text-sm font-medium text-ink">{FTWZ_PAGE.localExample.developer}, {FTWZ_PAGE.localExample.location}</p>
            </div>
          </div>

        </div>
      </div>

      <section className="mt-14 border-t border-hairline pt-10">
        <h2 className="h3 text-ink">Difference Between SEZ and FTWZ</h2>
        <ComparisonTable headers={FTWZ_PAGE.comparisonTable.headers} rows={FTWZ_PAGE.comparisonTable.rows} />
      </section>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "SEZ", href: "/services/sez" },
            { title: "MOOWR", href: "/services/moowr" },
            { title: "China Import Sourcing", href: "/china-import-sourcing" },
          ]}
        />
      </div>
    </div>
  );
}

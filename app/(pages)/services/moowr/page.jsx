import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ProcessFlow from "@/components/ProcessFlow";
import ComparisonTable from "@/components/ComparisonTable";
import RelatedServices from "@/components/RelatedServices";
import { MOOWR_PAGE } from "@/lib/schemes-data";

export const metadata = {
  title: "MOOWR",
  description: "Manufacture and Other Operations in Warehouse Regulations — import without upfront duty, benefits, eligibility, and a MOOWR-vs-SEZ-vs-EPCG comparison.",
  alternates: { canonical: "/services/moowr" },
};

export default function MoowrPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MOOWR",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: MOOWR_PAGE.definition,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "MOOWR", href: "/services/moowr" }]} />}
        kicker={MOOWR_PAGE.tagline}
        title="MOOWR Warehousing"
        intro={MOOWR_PAGE.intro}
      />
      <p className="mt-4 max-w-3xl text-sm font-medium text-ink">{MOOWR_PAGE.serviceIntro}</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="article-body max-w-none">
          <p>{MOOWR_PAGE.definition}</p>
          <p>{MOOWR_PAGE.legalBasis}</p>

          <h2 className="h3 mt-8 text-ink">Key Benefits</h2>
          <div className="mt-4 space-y-4">
            {MOOWR_PAGE.benefits.map((b, i) => (
              <div key={b.title} className="flex gap-4">
                <span className="text-sm font-bold text-brandred">{i + 1}</span>
                <div>
                  <p className="font-semibold text-ink">{b.title}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-slatey">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="h3 mt-8 text-ink">Types of Operations Allowed</h2>
          <div className="flex flex-wrap gap-2">
            {MOOWR_PAGE.operationsAllowed.map((o) => (
              <span key={o} className="rounded-full border border-hairline px-3 py-1 text-sm text-ink/75">
                {o}
              </span>
            ))}
          </div>

          <h2 className="h3 mt-8 text-ink">Eligibility</h2>
          <ul>
            {MOOWR_PAGE.eligibility.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="h3 text-ink">MOOWR Scheme Flow Chart</h2>
          <ProcessFlow steps={MOOWR_PAGE.flowChart} />

          <h2 className="h3 mt-8 text-ink">MOOWR vs SEZ vs EPCG</h2>
          <ComparisonTable headers={MOOWR_PAGE.comparisonTable.headers} rows={MOOWR_PAGE.comparisonTable.rows} />

          <h2 className="h3 mt-8 text-ink">Warehousing Compliance Requirements</h2>
          <ul className="mt-3 space-y-1.5">
            {MOOWR_PAGE.compliance.map((c) => (
              <li key={c} className="text-[15px] text-ink/80">
                · {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
            { title: "EPCG Scheme", href: "/services/epcg" },
            { title: "SEZ", href: "/services/sez" },
            { title: "FTWZ", href: "/services/ftwz" },
          ]}
        />
      </div>
    </div>
  );
}

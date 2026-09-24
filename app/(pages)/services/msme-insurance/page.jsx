import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ComparisonTable from "@/components/ComparisonTable";
import RelatedServices from "@/components/RelatedServices";
import { MSME_INSURANCE_PAGE } from "@/lib/insurance-data";

export const metadata = {
  title: "MSME Insurance Package",
  description: "14 trade-insurance products from export credit to keyman insurance, compared side by side where the source provides a table.",
  alternates: { canonical: "/services/msme-insurance" },
};

export default function MsmeInsurancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MSME Insurance Package",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: MSME_INSURANCE_PAGE.intro,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "MSME Insurance Package", href: "/services/msme-insurance" }]} />}
        kicker={MSME_INSURANCE_PAGE.tagline}
        title="MSME Insurance Package"
        intro={MSME_INSURANCE_PAGE.intro}
      />

      <p className="mt-8 text-sm font-medium text-ink">{MSME_INSURANCE_PAGE.audienceIntro}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {MSME_INSURANCE_PAGE.audience.map((a) => (
          <span key={a} className="rounded-full border border-hairline px-3 py-1 text-xs text-ink/70">
            {a}
          </span>
        ))}
      </div>

      <div className="mt-10 space-y-14">
        {MSME_INSURANCE_PAGE.categories.map((cat) => (
          <div key={cat.label}>
            <h2 className="h2 text-ink">{cat.label}</h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-x-12">
              {cat.products.map((p) => (
                <div key={p.name}>
                  <h3 className="h3 text-lg text-ink">{p.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slatey">{p.desc}</p>
                </div>
              ))}
            </div>
            {cat.table && (
              <ComparisonTable caption={cat.table.caption} headers={cat.table.headers} rows={cat.table.rows} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Export Handholding — Buyer Development", href: "/services/export-handholding/buyer-development-commercial-negotiations" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
          ]}
        />
      </div>
    </div>
  );
}

import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ProcessFlow from "@/components/ProcessFlow";
import RelatedServices from "@/components/RelatedServices";
import { EPCG_PAGE } from "@/lib/schemes-data";

export const metadata = {
  title: "EPCG Scheme",
  description: "Zero-duty capital goods import to boost export capability, with a worked ₹45-lakh export-obligation example.",
  alternates: { canonical: "/services/epcg" },
};

export default function EpcgPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Export Promotion Capital Goods (EPCG) Scheme",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: EPCG_PAGE.definition,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "EPCG Scheme", href: "/services/epcg" }]} />}
        kicker={EPCG_PAGE.tagline}
        title="Export Promotion Capital Goods (EPCG) Scheme"
        intro={EPCG_PAGE.intro}
      />
      <p className="mt-4 max-w-3xl text-base font-medium text-ink sm:text-lg">{EPCG_PAGE.serviceIntro}</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="article-body max-w-none">
          <p>{EPCG_PAGE.definition}</p>
          <h2 className="h3 mt-8 text-ink">Objective</h2>
          <p>{EPCG_PAGE.objective}</p>
          <h2 className="h3 mt-8 text-ink">Key Features</h2>
          <ul>
            {EPCG_PAGE.keyFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <h2 className="h3 mt-8 text-ink">Benefits</h2>
          <ul>
            {EPCG_PAGE.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div>
          {/* Worked example gets prominent placement — this concrete
              ₹-figure example is the single most credibility-building
              detail on this page. */}
          <div className="rounded-2xl border-l-4 border-brandred bg-paper p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brandred">Example</p>
            <p className="mt-2 text-base leading-relaxed text-ink/85">{EPCG_PAGE.workedExample}</p>
          </div>

          <h2 className="h3 mt-8 text-ink">EPCG Scheme Flow Chart</h2>
          <ProcessFlow steps={EPCG_PAGE.flowChart} />

          <h2 className="h3 mt-8 text-ink">Related Authorities</h2>
          <ul className="mt-3 space-y-1.5">
            {EPCG_PAGE.authorities.map((a) => (
              <li key={a} className="text-base text-ink/80">· {a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "MOOWR", href: "/services/moowr" },
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
            { title: "Export Handholding — Pre Shipment Procedures", href: "/services/export-handholding/pre-shipment-procedures" },
          ]}
        />
      </div>
    </div>
  );
}

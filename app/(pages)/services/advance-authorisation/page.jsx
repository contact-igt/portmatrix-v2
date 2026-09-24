import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ProcessFlow from "@/components/ProcessFlow";
import RelatedServices from "@/components/RelatedServices";
import { ADVANCE_AUTHORISATION_PAGE } from "@/lib/schemes-data";

export const metadata = {
  title: "Advance Authorisation Scheme",
  description: "DGFT duty-free import scheme for export production, with a worked example.",
  alternates: { canonical: "/services/advance-authorisation" },
};

export default function AdvanceAuthorisationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Advance Authorisation Scheme",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: ADVANCE_AUTHORISATION_PAGE.definition,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Advance Authorisation Scheme", href: "/services/advance-authorisation" }]} />}
        kicker={ADVANCE_AUTHORISATION_PAGE.tagline}
        title="Advance Authorisation Scheme"
        intro={ADVANCE_AUTHORISATION_PAGE.intro}
      />
      <p className="mt-4 max-w-3xl text-sm font-medium text-ink">{ADVANCE_AUTHORISATION_PAGE.serviceIntro}</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="article-body max-w-none">
          <p>{ADVANCE_AUTHORISATION_PAGE.definition}</p>

          <h2 className="h3 mt-8 text-ink">Key Features</h2>
          <ul>
            {ADVANCE_AUTHORISATION_PAGE.keyFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Types of Advance Authorisation</h2>
          {ADVANCE_AUTHORISATION_PAGE.types.map((t) => (
            <p key={t.name}>
              <strong className="text-ink">{t.name}</strong> — {t.desc}
            </p>
          ))}

          <h2 className="h3 mt-8 text-ink">Benefits</h2>
          <ul>
            {ADVANCE_AUTHORISATION_PAGE.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Conditions & Compliance</h2>
          <ul>
            {ADVANCE_AUTHORISATION_PAGE.compliance.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="rounded-2xl border-l-4 border-brandred bg-paper p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brandred">Simple example</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{ADVANCE_AUTHORISATION_PAGE.workedExample}</p>
          </div>

          <h2 className="h3 mt-8 text-ink">Flow Chart</h2>
          <ProcessFlow steps={ADVANCE_AUTHORISATION_PAGE.flowChart} />

          <h2 className="h3 mt-8 text-ink">Key Authorities</h2>
          <ul className="mt-3 space-y-1.5">
            {ADVANCE_AUTHORISATION_PAGE.authorities.map((a) => (
              <li key={a} className="text-[15px] text-ink/80">· {a}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Common Documents</h2>
          <ul className="mt-3 space-y-1.5">
            {ADVANCE_AUTHORISATION_PAGE.documents.map((d) => (
              <li key={d} className="text-[15px] text-ink/80">· {d}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "MOOWR", href: "/services/moowr" },
            { title: "EPCG Scheme", href: "/services/epcg" },
            { title: "Export Handholding — Pre Export Planning", href: "/services/export-handholding/pre-export-planning" },
          ]}
        />
      </div>
    </div>
  );
}

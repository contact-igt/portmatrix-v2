import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ProcessFlow from "@/components/ProcessFlow";
import RelatedServices from "@/components/RelatedServices";
import { EOU_PAGE } from "@/lib/schemes-data";

export const metadata = {
  title: "EOU",
  description: "Registration support for units producing primarily for export, with the 6-step approval process.",
  alternates: { canonical: "/services/eou" },
};

export default function EouPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Export Oriented Units (EOU)",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: EOU_PAGE.intro,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "EOU", href: "/services/eou" }]} />}
        kicker={EOU_PAGE.tagline}
        title="Export Oriented Units (EOU)"
        intro={EOU_PAGE.intro}
      />
      <p className="mt-4 max-w-3xl text-base font-medium text-ink sm:text-lg">{EOU_PAGE.serviceIntro}</p>

      <div className="mt-10 grid gap-10 sm:grid-cols-3">
        <div>
          <h2 className="h3 text-ink">Key Objectives</h2>
          <ul className="mt-3 space-y-1.5">
            {EOU_PAGE.objectives.map((o) => (
              <li key={o} className="text-base leading-relaxed text-ink/80">· {o}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h3 text-ink">Eligible Activities</h2>
          <ul className="mt-3 space-y-1.5">
            {EOU_PAGE.eligibleActivities.map((a) => (
              <li key={a} className="text-base leading-relaxed text-ink/80">· {a}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h3 text-ink">Major Benefits</h2>
          <ul className="mt-3 space-y-1.5">
            {EOU_PAGE.benefits.map((b) => (
              <li key={b} className="text-base leading-relaxed text-ink/80">· {b}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="h3 mt-10 text-ink">Basic Eligibility</h2>
      <ul className="mt-3 max-w-3xl space-y-1.5">
        {EOU_PAGE.eligibility.map((e) => (
          <li key={e} className="text-base leading-relaxed text-ink/80">· {e}</li>
        ))}
      </ul>

      <h2 className="h3 mt-10 text-ink">EOU Approval Process</h2>
      <div className="max-w-2xl">
        <ProcessFlow steps={EOU_PAGE.approvalProcess} />
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "SEZ", href: "/services/sez" },
            { title: "FTWZ", href: "/services/ftwz" },
            { title: "AEO", href: "/services/aeo" },
          ]}
        />
      </div>
    </div>
  );
}

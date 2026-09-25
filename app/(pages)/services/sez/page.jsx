import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import { MapPin } from "lucide-react";
import { SEZ_PAGE } from "@/lib/schemes-data";

export const metadata = {
  title: "SEZ",
  description: "Special Economic Zone (SEZ). Major SEZ in Tamil Nadu: Mahindra World City - Tamil Nadu - IT & Manufacturing.",
  alternates: { canonical: "/services/sez" },
};

export default function SezPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Special Economic Zone (SEZ)",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: SEZ_PAGE.definition,
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "SEZ", href: "/services/sez" }]} />}
        kicker={SEZ_PAGE.tagline}
        title="Special Economic Zone (SEZ)"
        intro={SEZ_PAGE.intro}
      />
      <p className="mt-4 text-base font-medium text-ink sm:text-lg">{SEZ_PAGE.serviceIntro}</p>

      <div className="article-body mt-8 max-w-none">
        <p>{SEZ_PAGE.definition}</p>
        <p className="font-semibold text-ink">{SEZ_PAGE.simpleDefinition}</p>
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="h3 text-ink">Main Features</h2>
          <ul className="mt-3 space-y-1.5">
            {SEZ_PAGE.features.map((f) => (
              <li key={f} className="text-base leading-relaxed text-ink/80">· {f}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h3 text-ink">Objectives</h2>
          <ul className="mt-3 space-y-1.5">
            {SEZ_PAGE.objectives.map((o) => (
              <li key={o} className="text-base leading-relaxed text-ink/80">· {o}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="h3 mt-10 text-ink">Types of SEZs</h2>
      <ul className="mt-3 space-y-1.5">
        {SEZ_PAGE.types.map((t) => (
          <li key={t} className="text-base leading-relaxed text-ink/80">· {t}</li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-3 rounded-xl border border-hairline bg-paper px-5 py-4">
        <MapPin className="h-5 w-5 shrink-0 text-brandred" />
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-slatey">Major SEZ in Tamil Nadu</p>
          <p className="text-sm font-medium text-ink">{SEZ_PAGE.localExample}</p>
        </div>
      </div>

      <h2 className="h3 mt-10 text-ink">Benefits for Businesses</h2>
      <ul className="mt-3 space-y-1.5">
        {SEZ_PAGE.benefits.map((b) => (
          <li key={b} className="text-base leading-relaxed text-ink/80">· {b}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-slatey">Authority: {SEZ_PAGE.authority}</p>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "FTWZ", href: "/services/ftwz" },
            { title: "MOOWR", href: "/services/moowr" },
            { title: "EOU", href: "/services/eou" },
          ]}
        />
      </div>
    </div>
  );
}

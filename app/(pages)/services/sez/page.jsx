import Link from "next/link";
import { MapPin, ArrowRight, Landmark } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import DefinitionBlock from "@/components/DefinitionBlock";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { buildMetadata } from "@/lib/seo";
import { SEZ_PAGE } from "@/lib/schemes-data";
import Callout from "@/components/Callout";
import { CheckList, OnThisPage, Section } from "../_scheme-parts";

export const metadata = buildMetadata({
  title: "Special Economic Zone (SEZ) Registration Support",
  description:
    "A Special Economic Zone (SEZ) is a duty-free area treated as foreign territory for trade. PORTMATRIX assists in the registration of SEZs.",
  path: "/services/sez",
});

export default function SezPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Special Economic Zone (SEZ) Registration Support",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: SEZ_PAGE.definition,
  };
  const P = SEZ_PAGE;

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "SEZ", href: "/services/sez" }]} />}
        kicker={P.tagline}
        title="Special Economic Zone (SEZ) Registration Support"
        intro={P.intro}
      />

      <OnThisPage
        items={[
          { id: "sez-features", label: "Features and benefits" },
          { id: "sez-objectives", label: "Objectives" },
          { id: "sez-types", label: "Types of SEZs" },
          { id: "faq-heading", label: "FAQs" },
        ]}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-16">
        <DefinitionBlock title="What an SEZ is">
          <p>{P.definition}</p>
          <p className="mt-3 font-semibold">{P.simpleDefinition}</p>
        </DefinitionBlock>
        <HowPortmatrixHelps>{P.serviceIntro}</HowPortmatrixHelps>
      </div>

      <Section id="sez-features" title="Features and benefits of an SEZ" className="mt-14">
        <p className="max-w-prose text-base leading-relaxed text-slatey sm:text-[1.0625rem]">{P.enjoyLine}</p>
        <CheckList className="mt-5" items={P.featuresAndBenefits} />
      </Section>

      <Section id="sez-objectives" title="Objectives of SEZs" className="mt-12">
        <ol className="divide-y divide-hairline border-y border-hairline">
          {P.objectives.map((o, i) => (
            <li key={o} className="flex items-baseline gap-5 py-3.5 text-base leading-relaxed text-ink/90">
              <span className="w-6 shrink-0 font-display text-xl font-bold text-navy" aria-hidden="true">{i + 1}</span>
              {o}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="sez-types" title="Types of SEZs" className="mt-12">
        <ul className="divide-y divide-hairline border-y border-hairline">
          {P.types.map((t) => (
            <li key={t.name} className="py-4 sm:grid sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-x-8">
              <p className="font-display text-lg font-semibold text-ink">
                {t.href ? (
                  <Link href={t.href} className="inline-flex min-h-11 items-center gap-1.5 text-navy underline-offset-2 hover:underline sm:min-h-0">
                    {t.name}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  t.name
                )}
              </p>
              <p className="mt-1 text-base leading-relaxed text-slatey sm:mt-0.5">{t.desc}</p>
            </li>
          ))}
        </ul>

        <Callout tone="example" icon={MapPin} title="Major SEZ in Tamil Nadu">
          <p className="font-display text-xl font-semibold leading-snug text-ink">{P.localExample}</p>
        </Callout>
        <p className="mt-6 flex items-center gap-2 text-base text-slatey">
          <Landmark className="h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
          Authority: {P.authority}
        </p>
      </Section>

      <Faq items={P.faqs} />

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

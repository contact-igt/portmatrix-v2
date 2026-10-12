import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import DefinitionBlock from "@/components/DefinitionBlock";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { buildMetadata } from "@/lib/seo";
import { EOU_PAGE } from "@/lib/schemes-data";
import { CheckList, OnThisPage, RuledList, Section } from "../_scheme-parts";

export const metadata = buildMetadata({
  title: "Export Oriented Unit (EOU) Registration Support",
  description:
    "An Export Oriented Unit (EOU) exports its entire production, except permitted Domestic Tariff Area sales. PORTMATRIX supports the registration process.",
  path: "/services/eou",
});

function sentenceList(items) {
  return items.length > 1 ? `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}` : items[0];
}

export default function EouPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Export Oriented Unit (EOU) Registration Support",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: EOU_PAGE.definition,
  };
  const P = EOU_PAGE;

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* No separate intro: the source's cover statement is the definition,
          shown once in the definition block below. */}
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "EOU", href: "/services/eou" }]} />}
        kicker={P.tagline}
        title="Export Oriented Unit (EOU) Registration Support"
      />

      <OnThisPage
        items={[
          { id: "eou-objectives", label: "Key objectives" },
          { id: "eou-activities", label: "Eligible activities" },
          { id: "eou-benefits", label: "Major benefits" },
          { id: "eou-eligibility", label: "Basic eligibility" },
          { id: "eou-approval", label: "Approval process" },
          { id: "faq-heading", label: "FAQs" },
        ]}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-16">
        <DefinitionBlock title="What an EOU is">{P.definition}</DefinitionBlock>
        <HowPortmatrixHelps>{P.serviceIntro}</HowPortmatrixHelps>
      </div>

      <Section id="eou-objectives" title="Key objectives" className="mt-14">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/85 sm:text-xl">
          The EOU scheme aims to {sentenceList(P.objectives)}.
        </p>
      </Section>

      <div className="mt-12 grid gap-x-16 gap-y-12 border-t border-hairline pt-10 lg:grid-cols-2">
        <section aria-labelledby="eou-activities">
          <h2 id="eou-activities" className="h3 scroll-mt-24 text-ink">Eligible activities</h2>
          <p className="mt-4 text-base text-slatey">EOUs can be established for:</p>
          <RuledList className="mt-2" items={P.eligibleActivities} />
        </section>

        <section aria-labelledby="eou-benefits">
          <h2 id="eou-benefits" className="h3 scroll-mt-24 text-ink">Major benefits of an EOU</h2>
          <CheckList
            className="mt-5"
            items={[
              ...P.benefits,
              <>
                {P.locationBenefit.before}
                <Link href="/services/sez" className="font-medium text-navy underline underline-offset-2">{P.locationBenefit.link}</Link>
                {P.locationBenefit.after}
              </>,
            ]}
          />
        </section>
      </div>

      {/* Eligibility: numbered checklist. */}
      <Section id="eou-eligibility" title="Basic eligibility" className="mt-14">
        <ol className="divide-y divide-hairline border-y border-hairline">
          {P.eligibility.map((e, i) => (
            <li key={e} className="flex gap-4 py-4">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-navy font-display text-base font-bold text-navy"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="pt-0.5 text-base leading-relaxed text-ink/90 sm:text-[1.0625rem]">{e}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Approval: numbered checklist, one step per ruled row. */}
      <Section id="eou-approval" title="EOU approval process" className="mt-14">
        <ol className="divide-y divide-hairline border-y border-hairline">
          {P.approvalProcess.map((step, i) => (
            <li key={step} className="flex items-center gap-5 py-4">
              <span className="w-10 shrink-0 font-display text-3xl font-bold leading-none text-navy" aria-hidden="true">{i + 1}</span>
              <span className="flex-1 text-base leading-relaxed text-ink/90 sm:text-[1.0625rem]">{step}</span>
              <Check className="hidden h-5 w-5 shrink-0 text-navy/40 sm:block" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </Section>

      <Faq items={P.faqs} />

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

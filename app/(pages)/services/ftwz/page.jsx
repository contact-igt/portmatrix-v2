import IllustrativeFigure from "@/components/IllustrativeFigure";
import Link from "next/link";
import { MapPin, Warehouse, ArrowLeftRight, Ship, Landmark, GitBranch, PackageOpen, Container, Globe } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import DefinitionBlock from "@/components/DefinitionBlock";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import ComparisonTable from "@/components/ComparisonTable";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { buildMetadata } from "@/lib/seo";
import { FTWZ_PAGE } from "@/lib/schemes-data";
import Callout from "@/components/Callout";
import { CheckList, FactStrip, OnThisPage, RuledList, Section, StepLine } from "../_scheme-parts";

export const metadata = buildMetadata({
  title: "Free Trade Warehousing Zone (FTWZ)",
  description:
    "A Free Trade Warehousing Zone (FTWZ) is a special category of SEZ for warehousing, trading and re-export. PORTMATRIX supports FTWZ registration.",
  path: "/services/ftwz",
});

const KEY_POINT_ICONS = [Warehouse, ArrowLeftRight, Ship];

export default function FtwzPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Trade Warehousing Zone (FTWZ)",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: FTWZ_PAGE.definitionText,
  };
  const P = FTWZ_PAGE;
  const audiences = [
    { title: "For importers", items: P.benefits.importers, icon: PackageOpen },
    { title: "For exporters", items: P.benefits.exporters, icon: Container },
    { title: "For global traders", items: P.benefits.globalTraders, icon: Globe },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        aside={<IllustrativeFigure image="ftwz-distribution" className="mx-auto w-full max-w-lg" />}
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "FTWZ", href: "/services/ftwz" }]} />}
        kicker={P.tagline}
        title="Free Trade Warehousing Zone (FTWZ)"
        intro={P.intro}
      />

      <OnThisPage
        items={[
          { id: "ftwz-vs-sez", label: "SEZ vs FTWZ" },
          { id: "ftwz-vas", label: "Value-added services" },
          { id: "ftwz-other", label: "Other features" },
          { id: "ftwz-activities", label: "Activities allowed" },
          { id: "ftwz-flow", label: "How the process works" },
          { id: "ftwz-benefits", label: "Benefits" },
          { id: "ftwz-legal", label: "Legal framework" },
          { id: "faq-heading", label: "FAQs" },
        ]}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-16">
        <DefinitionBlock title="What an FTWZ is">
          <p>
            {P.definitionBefore}
            <Link href="/services/sez" className="text-navy underline underline-offset-2">{P.definitionLink}</Link>
            {P.definitionAfter}
          </p>
          <p className="mt-3 font-semibold">{P.simpleDefinition}</p>
        </DefinitionBlock>
        <HowPortmatrixHelps>{P.serviceIntro}</HowPortmatrixHelps>
      </div>

      <section className="mt-10" aria-label="Key features of an FTWZ">
        <h2 className="sr-only">Key features of an FTWZ</h2>
        <FactStrip cols={3} items={P.keyPoints.map((k, i) => ({ ...k, icon: KEY_POINT_ICONS[i] }))} />
      </section>

      <section className="mt-14" aria-labelledby="ftwz-vs-sez">
        <h2 id="ftwz-vs-sez" className="h3 scroll-mt-24 text-ink">Difference between SEZ and FTWZ</h2>
        <ComparisonTable caption={P.comparisonTable.caption} headers={P.comparisonTable.headers} rows={P.comparisonTable.rows} />
      </section>

      <div className="mt-14 grid gap-x-12 gap-y-12 border-t border-hairline pt-10 lg:grid-cols-3 lg:gap-x-0 lg:divide-x lg:divide-hairline">
        <section aria-labelledby="ftwz-vas" className="lg:pr-10">
          <h2 id="ftwz-vas" className="h3 scroll-mt-24 text-ink">Value-added services allowed</h2>
          <CheckList className="mt-5" items={P.valueAddedServices} />
        </section>
        <section aria-labelledby="ftwz-other" className="lg:px-10">
          <h2 id="ftwz-other" className="h3 scroll-mt-24 text-ink">Other features</h2>
          <CheckList className="mt-5" items={P.otherFeatures} />
        </section>
        <section aria-labelledby="ftwz-activities" className="lg:pl-10">
          <h2 id="ftwz-activities" className="h3 scroll-mt-24 text-ink">Activities allowed in an FTWZ</h2>
          <RuledList className="mt-5" items={P.activitiesAllowed} />
        </section>
      </div>

      <section className="mt-14 border-t border-hairline pt-10" aria-labelledby="ftwz-flow">
        <h2 id="ftwz-flow" className="h3 scroll-mt-24 text-ink">How the FTWZ process works</h2>
        <div className="mt-8">
          <StepLine steps={P.workflowSteps} perRow={4} />
          <div className="mt-8 border-t border-hairline pt-6">
            <p className="flex items-center gap-2 text-base font-semibold text-ink">
              <GitBranch className="h-5 w-5 text-navy" aria-hidden="true" />
              Then, goods go one of two ways:
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
              {P.workflowOutcomes.map((o) => (
                <li key={o.label} className="border-l-4 border-navy bg-white py-3 pl-4 pr-3 text-base leading-relaxed text-ink/85">
                  <span className="font-semibold text-ink">{o.label}</span> → {o.result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section id="ftwz-benefits" title="Benefits of an FTWZ" className="mt-14">
        <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-hairline">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="md:px-6 md:first:pl-0 md:last:pr-0">
                <Icon className="h-6 w-6 text-navy" aria-hidden="true" />
                <h3 className="mt-3 border-b-2 border-ink pb-3 font-display text-lg font-semibold text-ink">{a.title}</h3>
                <ul className="divide-y divide-hairline">
                  {a.items.map((b) => (
                    <li key={b} className="py-3 text-base leading-relaxed text-ink/90">{b}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="ftwz-legal" title="FTWZ legal framework in India" className="mt-14">
        <p className="mb-3 text-base text-slatey">FTWZs are governed under:</p>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {P.legalFramework.map((l) => (
            <li key={l} className="flex items-center gap-3 py-3 text-base text-ink/90">
              <Landmark className="h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
              {l}
            </li>
          ))}
        </ul>
        <Callout tone="example" icon={MapPin} title="Major FTWZ in Tamil Nadu">
          <p className="font-display text-xl font-semibold leading-snug text-ink">
            {P.localExample.developer}, {P.localExample.location}, {P.localExample.state}
          </p>
        </Callout>
      </Section>

      <Faq items={P.faqs} />

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

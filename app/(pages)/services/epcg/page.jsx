import { Factory, Boxes, Timer } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import DefinitionBlock from "@/components/DefinitionBlock";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { buildMetadata } from "@/lib/seo";
import { EPCG_PAGE } from "@/lib/schemes-data";
import { Callout, CheckList, OnThisPage, RuledList, StepLine } from "../_scheme-parts";

export const metadata = buildMetadata({
  title: "EPCG Scheme — Zero-Duty Capital Goods Import",
  description:
    "The EPCG Scheme allows import of capital goods at zero customs duty for export production. PORTMATRIX facilitates exporters to avail EPCG License.",
  path: "/services/epcg",
});

export default function EpcgPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Export Promotion Capital Goods (EPCG) Scheme",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: EPCG_PAGE.definition,
  };
  const P = EPCG_PAGE;

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "EPCG Scheme", href: "/services/epcg" }]} />}
        kicker={P.tagline}
        title="Export Promotion Capital Goods (EPCG) Scheme"
        intro={P.intro}
      />

      <OnThisPage
        items={[
          { id: "epcg-example", label: "Export obligation example" },
          { id: "epcg-who", label: "Who can use it" },
          { id: "epcg-covers", label: "What it covers" },
          { id: "epcg-obligation", label: "Export obligation and objective" },
          { id: "epcg-benefits", label: "Benefits" },
          { id: "epcg-authorities", label: "Related authorities" },
          { id: "epcg-flow", label: "From authorization to closure" },
          { id: "faq-heading", label: "FAQs" },
        ]}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-16">
        <DefinitionBlock title="What the scheme is">{P.definition}</DefinitionBlock>
        <HowPortmatrixHelps>{P.serviceIntro}</HowPortmatrixHelps>
      </div>

      {/* The page's single callout: the worked example, with the result as the focal figure. */}
      <Callout id="epcg-example" title="Example: how the export obligation is worked out" className="mt-12">
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <div className="text-lg leading-relaxed text-ink/85">
            <p>{P.workedExample.setup}</p>
            <p className="mt-3">{P.workedExample.rule}</p>
            <p className="mt-3 font-semibold text-ink">{P.workedExample.result}</p>
          </div>
          <p
            className="font-display text-6xl font-extrabold leading-none tracking-tight text-navy sm:text-7xl lg:border-l lg:border-hairline lg:pl-14 lg:text-8xl"
            aria-hidden="true"
          >
            {P.workedExample.figure}
          </p>
        </div>
      </Callout>

      <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-3 lg:gap-x-0 lg:divide-x lg:divide-hairline">
        <section aria-labelledby="epcg-who" className="lg:pr-10">
          <Factory className="h-6 w-6 text-navy" aria-hidden="true" />
          <h2 id="epcg-who" className="h3 mt-3 scroll-mt-24 text-ink">Who can use it</h2>
          <p className="mt-4 text-base text-slatey">The scheme is applicable for:</p>
          <RuledList className="mt-2" items={P.whoCanUse} />
        </section>

        <section aria-labelledby="epcg-covers" className="lg:px-10">
          <Boxes className="h-6 w-6 text-navy" aria-hidden="true" />
          <h2 id="epcg-covers" className="h3 mt-3 scroll-mt-24 text-ink">What it covers</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/90">{P.whatItCovers.lead}</p>
          <p className="mt-3 text-base text-slatey">{P.whatItCovers.supportsLead}</p>
          <RuledList className="mt-2" items={P.whatItCovers.supports} />
        </section>

        <section aria-labelledby="epcg-obligation" className="lg:pl-10">
          <Timer className="h-6 w-6 text-navy" aria-hidden="true" />
          <h2 id="epcg-obligation" className="h3 mt-3 scroll-mt-24 text-ink">Export obligation and objective</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/90">{P.exportObligationNote}</p>
          <p className="mt-3 text-base leading-relaxed text-ink/90">
            <strong className="font-semibold text-ink">Objective: </strong>
            {P.objective}
          </p>
        </section>
      </div>

      <div className="mt-14 grid gap-x-16 gap-y-12 border-t border-hairline pt-10 lg:grid-cols-2">
        <section aria-labelledby="epcg-benefits">
          <h2 id="epcg-benefits" className="h3 scroll-mt-24 text-ink">Benefits</h2>
          <CheckList className="mt-5" items={P.benefits} />
        </section>
        <section aria-labelledby="epcg-authorities">
          <h2 id="epcg-authorities" className="h3 scroll-mt-24 text-ink">Related authorities</h2>
          <RuledList className="mt-5" items={P.authorities} />
        </section>
      </div>

      <section className="mt-14 border-t border-hairline pt-10" aria-labelledby="epcg-flow">
        <h2 id="epcg-flow" className="h3 scroll-mt-24 text-ink">From authorization to closure</h2>
        <div className="mt-8">
          <StepLine steps={P.flowChart} perRow={4} />
        </div>
      </section>

      <Faq items={P.faqs} />

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

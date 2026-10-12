import Link from "next/link";
import { PackageOpen, CalendarClock, TrendingUp, Users } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import DefinitionBlock from "@/components/DefinitionBlock";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { buildMetadata } from "@/lib/seo";
import { ADVANCE_AUTHORISATION_PAGE } from "@/lib/schemes-data";
import { FactStrip, OnThisPage, StepLine, CheckList, RuledList } from "../_scheme-parts";

export const metadata = buildMetadata({
  title: "Advance Authorisation Scheme",
  description:
    "The Advance Authorisation Scheme lets exporters import inputs duty-free for export production. PORTMATRIX guides exporters through registration.",
  path: "/services/advance-authorisation",
});

// Visual aids for the four key-feature groups, in source order.
const FEATURE_ICONS = [PackageOpen, CalendarClock, TrendingUp, Users];

export default function AdvanceAuthorisationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Advance Authorisation Scheme",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: ADVANCE_AUTHORISATION_PAGE.definition,
  };
  const P = ADVANCE_AUTHORISATION_PAGE;

  // Steps are numbered continuously (1–10) across the three stages.
  let offset = 0;
  const stages = P.flowStages.map((s) => {
    const start = offset + 1;
    offset += s.steps.length;
    return { ...s, start };
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Advance Authorisation Scheme", href: "/services/advance-authorisation" }]} />}
        kicker={P.tagline}
        title="Advance Authorisation Scheme"
        intro={P.intro}
      />

      <OnThisPage
        items={[
          { id: "aa-features", label: "Key features" },
          { id: "aa-types", label: "Types" },
          { id: "aa-benefits", label: "Benefits" },
          { id: "aa-compliance", label: "Conditions and compliance" },
          { id: "aa-flow", label: "From export order to closure" },
          { id: "aa-authorities", label: "Authorities" },
          { id: "aa-documents", label: "Documents" },
          { id: "faq-heading", label: "FAQs" },
        ]}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-16">
        <DefinitionBlock title="What the scheme is">{P.definition}</DefinitionBlock>
        <HowPortmatrixHelps>{P.serviceIntro}</HowPortmatrixHelps>
      </div>

      <section className="mt-12" aria-labelledby="aa-features">
        <h2 id="aa-features" className="h3 scroll-mt-24 text-ink">Key features</h2>
        <div className="mt-5">
          <FactStrip
            cols={4}
            items={P.keyFeatures.map((f, i) => ({ title: f.title, text: f.text, list: f.items, icon: FEATURE_ICONS[i] }))}
          />
        </div>
        <div className="mt-8 max-w-3xl border-l-2 border-navy/30 pl-5">
          <h3 className="kicker text-brandred">Simple example</h3>
          <p className="mt-2 text-lg leading-relaxed text-ink/90">{P.workedExample}</p>
        </div>
      </section>

      <section className="mt-14 border-t border-hairline pt-10" aria-labelledby="aa-types">
        <h2 id="aa-types" className="h3 scroll-mt-24 text-ink">Types of Advance Authorisation</h2>
        <ul className="mt-6 grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-hairline">
          {P.types.map((t) => (
            <li key={t.name} className="md:px-6 md:first:pl-0 md:last:pr-0">
              <p className="border-t-2 border-navy pt-3 font-display text-lg font-semibold text-ink">{t.name}</p>
              <p className="mt-2 text-base leading-relaxed text-slatey">
                {t.name === "Deemed Exports" ? (
                  <>
                    Supplies to units like <Link href="/services/eou" className="font-medium text-navy underline underline-offset-2">EOU</Link>, EHTP, STP, BTP are treated as exports.
                  </>
                ) : (
                  t.desc
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-14 grid gap-x-16 gap-y-12 border-t border-hairline pt-10 lg:grid-cols-2">
        <section aria-labelledby="aa-benefits">
          <h2 id="aa-benefits" className="h3 scroll-mt-24 text-ink">Benefits</h2>
          <CheckList className="mt-5" items={P.benefits} />
        </section>
        <section aria-labelledby="aa-compliance">
          <h2 id="aa-compliance" className="h3 scroll-mt-24 text-ink">Conditions and compliance</h2>
          <RuledList className="mt-5" items={P.compliance} />
        </section>
      </div>

      <section className="mt-14 border-t border-hairline pt-10" aria-labelledby="aa-flow">
        <h2 id="aa-flow" className="h3 scroll-mt-24 text-ink">From export order to closure of the authorisation</h2>
        <div className="mt-8 space-y-10">
          {stages.map((s, i) => (
            <div key={s.title} className="lg:grid lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-x-8">
              <h3 className="mb-6 text-base font-semibold text-ink lg:mb-0 lg:pt-2">
                <span className="block text-brandred">Stage {i + 1}</span>
                {s.title}
              </h3>
              <StepLine steps={s.steps} start={s.start} perRow={4} label={`Stage ${i + 1}: ${s.title}`} />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14 grid gap-x-16 gap-y-12 border-t border-hairline pt-10 lg:grid-cols-2">
        <section aria-labelledby="aa-authorities">
          <h2 id="aa-authorities" className="h3 scroll-mt-24 text-ink">Key authorities involved</h2>
          <RuledList className="mt-5" items={P.authorities} />
        </section>
        <section aria-labelledby="aa-documents">
          <h2 id="aa-documents" className="h3 scroll-mt-24 text-ink">Common documents</h2>
          <RuledList className="mt-5" items={P.documents} />
        </section>
      </div>

      <Faq items={P.faqs} />

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

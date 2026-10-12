import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import DefinitionBlock from "@/components/DefinitionBlock";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { buildMetadata } from "@/lib/seo";
import { AEO_PAGE } from "@/lib/schemes-data";
import { CheckList, OnThisPage, RuledList, Section, StepLine } from "../_scheme-parts";

export const metadata = buildMetadata({
  title: "Authorised Economic Operator (AEO) Certification",
  description:
    "Authorised Economic Operator (AEO): a trusted trade partner recognized by Customs. PORTMATRIX supports the procedures for obtaining AEO status.",
  path: "/services/aeo",
});

// Rung styling for the three importer/exporter tiers (T1 → T3): taller and
// darker as the accreditation level rises. The logistics category (last row)
// is a separate track, not a rung.
const RUNGS = [
  { height: "lg:min-h-[13rem]", tone: "border-navy-300 bg-white text-ink", label: "text-slatey" },
  { height: "lg:min-h-[17rem]", tone: "border-navy-500 bg-navy-100 text-ink", label: "text-slatey" },
  { height: "lg:min-h-[21rem]", tone: "border-navy-950 bg-navy-700 text-white", label: "text-white/75" },
];

function Rung({ row, headers, style }) {
  return (
    <li className={`flex flex-col border-t-4 p-5 sm:p-6 ${style.height} ${style.tone}`}>
      <p className="font-display text-3xl font-bold leading-none">{row[0]}</p>
      <dl className="mt-5 space-y-3.5">
        {headers.slice(1).map((h, k) => (
          <div key={h}>
            <dt className={`text-sm font-semibold uppercase tracking-wide ${style.label}`}>{h}</dt>
            <dd className="mt-0.5 text-base leading-snug">{row[k + 1]}</dd>
          </div>
        ))}
      </dl>
    </li>
  );
}

export default function AeoPage() {
  const P = AEO_PAGE;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Authorised Economic Operator (AEO) Certification",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: `${P.whatIsAeo} ${P.definition}`,
  };
  const { headers, rows } = P.categoriesTable;
  const tiers = rows.slice(0, -1);
  const logistics = rows[rows.length - 1];

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "AEO", href: "/services/aeo" }]} />}
        kicker={P.tagline}
        title="Authorised Economic Operator (AEO) Certification"
        intro={P.intro}
      />

      <OnThisPage
        items={[
          { id: "aeo-categories", label: "AEO categories" },
          { id: "aeo-who", label: "Who can apply" },
          { id: "aeo-eligibility", label: "Basic eligibility" },
          { id: "aeo-benefits", label: "Benefits" },
          { id: "aeo-process", label: "Application process" },
          { id: "aeo-importance", label: "Importance" },
          { id: "faq-heading", label: "FAQs" },
        ]}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-16">
        <DefinitionBlock title="What AEO is">
          <p className="font-semibold">{P.simpleDefinition}</p>
          <p className="mt-3">{P.whatIsAeo}</p>
          <p className="mt-3">{P.definition}</p>
        </DefinitionBlock>
        <HowPortmatrixHelps>{P.serviceIntro}</HowPortmatrixHelps>
      </div>

      {/* Category tiers as a ladder: the page's centrepiece (and its one tinted element). */}
      <section className="mt-14" aria-labelledby="aeo-categories">
        <h2 id="aeo-categories" className="h3 scroll-mt-24 text-ink">AEO categories in India</h2>
        <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:items-end lg:gap-x-8">
          <ol className="grid gap-3 lg:grid-cols-3 lg:items-end lg:gap-0">
            {tiers.map((row, i) => (
              <Rung key={row[0]} row={row} headers={headers} style={RUNGS[i]} />
            ))}
          </ol>
          <ul className="mt-3 lg:mt-0">
            <li className="flex flex-col border-t-4 border-brandred bg-white p-5 sm:p-6 lg:min-h-[13rem]">
              <p className="font-display text-3xl font-bold leading-none text-ink">{logistics[0]}</p>
              <dl className="mt-5 space-y-3.5">
                {headers.slice(1).map((h, k) => (
                  <div key={h}>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-slatey">{h}</dt>
                    <dd className="mt-0.5 text-base leading-snug text-ink">{logistics[k + 1]}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-14 grid gap-x-16 gap-y-12 border-t border-hairline pt-10 lg:grid-cols-2">
        <section aria-labelledby="aeo-who">
          <h2 id="aeo-who" className="h3 scroll-mt-24 text-ink">Who can apply</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey">{P.applicantLead}</p>
          <ul className="mt-3 grid border-t border-hairline sm:grid-cols-2 sm:gap-x-8">
            {P.applicantTypes.map((t) => (
              <li key={t} className="border-b border-hairline py-3 text-base text-ink/90">{t}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="aeo-eligibility">
          <h2 id="aeo-eligibility" className="h3 scroll-mt-24 text-ink">Basic eligibility</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey">{P.eligibilityLead}</p>
          <CheckList className="mt-3" items={P.eligibility} />
        </section>
      </div>

      <Section id="aeo-benefits" title="Benefits of AEO status" className="mt-14">
        <p className="max-w-3xl text-base leading-relaxed text-slatey sm:text-[1.0625rem]">
          AEO-certified entities receive customs facilitation benefits, set out below for all certified entities and by type of business.
        </p>
        <div className="mt-6 grid gap-10 xl:grid-cols-3 xl:gap-0 xl:divide-x xl:divide-hairline">
          {P.benefitGroups.map((g) => (
            <div key={g.audience} className="xl:px-6 xl:first:pl-0 xl:last:pr-0">
              <h3 className="border-b-2 border-ink pb-3 font-display text-lg font-semibold text-ink">{g.audience}</h3>
              <RuledList className="!border-t-0" items={g.items} />
            </div>
          ))}
        </div>
      </Section>

      <section className="mt-14 border-t border-hairline pt-10" aria-labelledby="aeo-process">
        <h2 id="aeo-process" className="h3 scroll-mt-24 text-ink">Application process</h2>
        <div className="mt-8">
          <StepLine steps={P.applicationProcess} perRow={5} />
          <p className="mt-8 border-t border-hairline pt-5 text-base text-slatey">{P.portal}</p>
        </div>
      </section>

      <Section id="aeo-importance" title="Importance of AEO in India" className="mt-14">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/85 sm:text-xl">{P.importance}</p>
      </Section>

      <Faq items={P.faqs} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Licensed Customs Broker", href: "/services/licensed-customs-broker" },
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "EOU", href: "/services/eou" },
          ]}
        />
      </div>
    </div>
  );
}

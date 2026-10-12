import Link from "next/link";
import { Ban, ArrowLeftRight, Clock, Wallet, GitBranch, Scale } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import DefinitionBlock from "@/components/DefinitionBlock";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import ComparisonTable from "@/components/ComparisonTable";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { buildMetadata } from "@/lib/seo";
import { MOOWR_PAGE } from "@/lib/schemes-data";
import { FactStrip, OnThisPage, StepLine, CheckList, RuledList } from "../_scheme-parts";

export const metadata = buildMetadata({
  title: "MOOWR Scheme (Section 65 Warehousing Unit)",
  description:
    "MOOWR (Manufacture and Other Operations in Warehouse Regulations) allows import into a bonded warehouse without upfront duty. We facilitate registration.",
  path: "/services/moowr",
});

const KEY_POINT_ICONS = [Wallet, Ban, ArrowLeftRight, Clock];

export default function MoowrPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MOOWR Scheme (Section 65 Warehousing Unit)",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: MOOWR_PAGE.definition,
  };
  const { legalBasis, flowSteps, flowOutcomes, eligibility, compliance } = MOOWR_PAGE;

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "MOOWR", href: "/services/moowr" }]} />}
        kicker={MOOWR_PAGE.expansion}
        title="MOOWR Scheme (Section 65 Warehousing Unit)"
        intro={MOOWR_PAGE.intro}
      />

      <OnThisPage
        items={[
          { id: "moowr-comparison", label: "Comparison with SEZ, AA and EPCG" },
          { id: "moowr-legal", label: "Legal basis" },
          { id: "moowr-benefits", label: "Key benefits" },
          { id: "moowr-flow", label: "How the process works" },
          { id: "moowr-operations", label: "Operations allowed" },
          { id: "moowr-eligibility", label: "Who can apply" },
          { id: "moowr-compliance", label: "Compliance" },
          { id: "faq-heading", label: "FAQs" },
        ]}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-16">
        <DefinitionBlock title="What MOOWR is">{MOOWR_PAGE.definition}</DefinitionBlock>
        <HowPortmatrixHelps>{MOOWR_PAGE.serviceIntro}</HowPortmatrixHelps>
      </div>

      <section className="mt-10" aria-label="MOOWR at a glance">
        <h2 className="sr-only">MOOWR at a glance</h2>
        <FactStrip cols={4} items={MOOWR_PAGE.keyPoints.map((k, i) => ({ ...k, icon: KEY_POINT_ICONS[i] }))} />
      </section>

      <section className="mt-14" aria-labelledby="moowr-comparison">
        <h2 id="moowr-comparison" className="h3 scroll-mt-24 text-ink">How MOOWR compares with SEZ, Advance Authorisation and EPCG</h2>
        <p className="article-body mt-3">
          See the <Link href="/services/sez">SEZ</Link>, <Link href="/services/advance-authorisation">Advance Authorisation</Link> and{" "}
          <Link href="/services/epcg">EPCG</Link> pages for those schemes.
        </p>
        <ComparisonTable caption={MOOWR_PAGE.comparisonTable.caption} headers={MOOWR_PAGE.comparisonTable.headers} rows={MOOWR_PAGE.comparisonTable.rows} />
      </section>

      <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-2">
        {/* Legal basis: the page's one tinted band, set apart from the benefits. */}
        <section aria-labelledby="moowr-legal" className="border-t-4 border-navy bg-navy-50 p-6 sm:p-8 lg:self-start">
          <Scale className="h-6 w-6 text-navy" aria-hidden="true" />
          <h2 id="moowr-legal" className="h3 mt-3 scroll-mt-24 text-ink">Legal basis: Section 65 of the Customs Act 1962</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{legalBasis.lead}</p>
          <CheckList className="mt-4 !border-navy/15 !divide-navy/15" items={legalBasis.items} />
          <p className="mt-4 text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{legalBasis.after}</p>
        </section>

        <section aria-labelledby="moowr-benefits">
          <h2 id="moowr-benefits" className="h3 scroll-mt-24 text-ink">Key benefits of MOOWR warehousing</h2>
          <ol className="mt-5 divide-y divide-hairline border-y border-hairline">
            {MOOWR_PAGE.benefits.map((b, i) => (
              <li key={b.title} className="flex gap-5 py-4">
                <span className="w-8 shrink-0 font-display text-2xl font-bold leading-tight text-navy" aria-hidden="true">{i + 1}</span>
                <div>
                  <p className="font-semibold text-ink">{b.title}</p>
                  <p className="mt-1 text-base leading-relaxed text-slatey">{b.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="mt-14 border-t border-hairline pt-10" aria-labelledby="moowr-flow">
        <h2 id="moowr-flow" className="h3 scroll-mt-24 text-ink">How the MOOWR process works</h2>
        <div className="mt-8">
          <StepLine steps={flowSteps} perRow={4} />
          <div className="mt-8 border-t border-hairline pt-6">
            <p className="flex items-center gap-2 text-base font-semibold text-ink">
              <GitBranch className="h-5 w-5 text-navy" aria-hidden="true" />
              Then, depending on what happens to the goods:
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
              {flowOutcomes.map((o) => (
                <li key={o.label} className="border-l-4 border-navy bg-white py-3 pl-4 pr-3 text-base leading-relaxed text-ink/85">
                  <span className="font-semibold text-ink">{o.label}</span> → {o.result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-14 grid gap-x-16 gap-y-12 border-t border-hairline pt-10 lg:grid-cols-3">
        <section aria-labelledby="moowr-operations">
          <h2 id="moowr-operations" className="h3 scroll-mt-24 text-ink">Operations allowed in a MOOWR warehouse</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey">{MOOWR_PAGE.operationsLead}</p>
          <RuledList className="mt-3" items={MOOWR_PAGE.operationsAllowed} />
        </section>

        <section aria-labelledby="moowr-eligibility">
          <h2 id="moowr-eligibility" className="h3 scroll-mt-24 text-ink">Who can apply</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey">{eligibility.lead}</p>
          <ul className="mt-3 divide-y divide-hairline border-y border-hairline">
            {eligibility.items.map((e) =>
              typeof e === "string" ? (
                <li key={e} className="py-3 text-base leading-relaxed text-ink/90">{e}</li>
              ) : (
                <li key={e.text} className="py-3 text-base leading-relaxed text-ink/90">
                  {e.text}
                  <ul className="mt-2 space-y-1 border-l-2 border-navy/25 pl-4">
                    {e.sub.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
          <p className="mt-4 text-base leading-relaxed text-slatey">{eligibility.note}</p>
        </section>

        <section aria-labelledby="moowr-compliance">
          <h2 id="moowr-compliance" className="h3 scroll-mt-24 text-ink">Warehousing compliance requirements</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey">{compliance.lead}</p>
          <CheckList className="mt-3" items={compliance.items} />
          <p className="mt-4 text-base leading-relaxed text-slatey">{compliance.note}</p>
        </section>
      </div>

      <Faq items={MOOWR_PAGE.faqs} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
            { title: "EPCG Scheme", href: "/services/epcg" },
            { title: "SEZ", href: "/services/sez" },
            { title: "FTWZ", href: "/services/ftwz" },
          ]}
        />
      </div>
    </div>
  );
}

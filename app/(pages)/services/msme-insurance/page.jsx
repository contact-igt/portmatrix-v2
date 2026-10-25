import IllustrativeFigure from "@/components/IllustrativeFigure";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ComparisonTable from "@/components/ComparisonTable";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { MSME_INSURANCE_PAGE as P } from "@/lib/insurance-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MSME Insurance Package",
  description:
    "PORTMATRIX facilitates MSME insurance for exporters, traders, manufacturers and logistics firms, from trade credit to cargo and liability cover.",
  path: "/services/msme-insurance",
});

const linkCls = "text-navy underline underline-offset-2 hover:text-brandred";

export default function MsmeInsurancePage() {
  // No InsuranceAgency / FinancialProduct schema: the page describes products
  // available in the market that PORTMATRIX facilitates, not products it issues.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MSME Insurance Package",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: P.intro,
  };

  const productById = {};
  P.categories.forEach((c) => c.products.forEach((p) => (productById[p.id] = p)));

  const riskRows = P.coverByRisk.rows.map(([risk, id]) => [
    risk,
    <a key={id} href={`#${id}`} className={linkCls}>{productById[id].name}</a>,
  ]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        aside={<IllustrativeFigure image="cargo-risk-protection" className="mx-auto w-full max-w-lg" />}
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "MSME Insurance Package", href: "/services/msme-insurance" }]} />}
        kicker={P.tagline}
        title="MSME Insurance Package"
        intro={P.intro}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <section aria-labelledby="who-for">
          <h2 id="who-for" className="h3 text-ink">Who we facilitate MSME Insurance for</h2>
          <p className="mt-4 text-base font-medium text-ink sm:text-lg">{P.audienceIntro}</p>
          <ul className="mt-3 divide-y divide-hairline border-y border-hairline">
            {P.audience.map((a) => (
              <li key={a} className="flex gap-3 py-3 text-base leading-relaxed text-ink/85">
                <Check className="mt-1 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="products">
          <h2 id="products" className="h3 text-ink">SME trade insurance products available in the market</h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{P.productsIntro}</p>
          <nav aria-label="Insurance categories on this page" className="mt-6 border-t-2 border-ink">
            <p className="kicker pt-3 text-slatey">On this page</p>
            <ul className="mt-2 divide-y divide-hairline border-y border-hairline sm:grid sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0 sm:border-y-0">
              {[
                ...P.categories.map((c) => ({ id: c.id, label: c.label })),
                { id: "cover-by-risk", label: "Cover by risk" },
                { id: "faq-heading", label: "Frequently asked questions" },
              ].map((l, i) => (
                <li key={l.id} className="sm:border-b sm:border-hairline">
                  <a href={`#${l.id}`} className="group flex min-h-11 items-center gap-3 py-2 text-base font-medium text-navy hover:text-brandred">
                    <span aria-hidden="true" className="w-6 font-display text-sm font-semibold tabular-nums text-slatey">{String(i + 1).padStart(2, "0")}</span>
                    <span className="underline-offset-2 group-hover:underline">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>

      <div className="mt-16 border-t-2 border-ink">
        {P.categories.map((cat) => (
          <section key={cat.id} aria-labelledby={cat.id} className="grid gap-x-12 border-b border-hairline py-10 lg:grid-cols-[16rem_1fr]">
            <h2 id={cat.id} className="h3 scroll-mt-24 text-ink lg:sticky lg:top-24 lg:self-start">{cat.label}</h2>
            <div className="mt-6 min-w-0 lg:mt-0">
              <ul className="divide-y divide-hairline border-y border-hairline">
                {cat.products.map((p) => (
                  <li key={p.id} className="grid gap-x-8 gap-y-2 py-5 md:grid-cols-[13rem_1fr]">
                    <h3 id={p.id} className="scroll-mt-24 font-display text-lg font-semibold leading-snug text-ink">{p.name}</h3>
                    <div>
                      <p className="max-w-prose text-base leading-relaxed text-slatey">{p.desc}</p>
                      {p.covers && (
                        <>
                          <p className="mt-3 max-w-prose text-base leading-relaxed text-slatey">{p.coversIntro}</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-base text-slatey marker:text-slatey/60">
                            {p.covers.map((c) => (
                              <li key={c}>{c}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {cat.table && <ComparisonTable caption={cat.table.caption} headers={cat.table.headers} rows={cat.table.rows} />}
              {cat.tableNotes && (
                <ul className="mt-2 max-w-3xl space-y-1.5 text-sm leading-relaxed text-slatey">
                  {cat.tableNotes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Cover by risk: reference look-up, the page's single tinted band */}
      <section className="-mx-5 mt-14 bg-navy-50/60 px-5 py-12 sm:-mx-8 sm:px-8" aria-labelledby="cover-by-risk">
        <h2 id="cover-by-risk" className="h3 scroll-mt-24 text-ink">Cover by risk</h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/85">
          A quick look-up of what each product above is defined as protecting against. Each product name links to its definition.
        </p>
        <ComparisonTable caption={P.coverByRisk.caption} headers={P.coverByRisk.headers} rows={riskRows} />
      </section>

      <Faq items={P.faqs} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Export Handholding — Buyer Development", href: "/services/export-handholding/buyer-development-commercial-negotiations" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
          ]}
        />
      </div>
    </div>
  );
}

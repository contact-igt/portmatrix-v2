import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ReferenceTable from "@/components/ReferenceTable";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { AlertTriangle } from "lucide-react";
import { NRI_BAGGAGE_PAGE as P } from "@/lib/individual-export-data";
import { buildMetadata } from "@/lib/seo";

// The instrument name/year ("The Baggage Rules, 2026") is a client-confirmation
// item and is deliberately kept out of the description and FAQ answers.
export const metadata = buildMetadata({
  title: "NRI Baggage Clearance",
  description:
    "Duty-free baggage allowances, Green and Red channels, jewellery, transfer of residence and currency limits, with PORTMATRIX advice on declaring baggage.",
  path: "/services/nri-baggage-clearance",
});

const h2Cls = "h3 scroll-mt-24 text-ink";
const h3Cls = "font-display text-xl font-semibold text-ink";
const proseCls = "max-w-prose text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]";
const bulletCls = "list-disc space-y-1.5 pl-5 marker:text-slatey/60";

// Wraps the figure column of a source table in large Manrope numerals so the
// allowance is what the eye lands on. Values are the source's, unchanged.
function Fig({ children }) {
  return <span className="font-display text-xl font-bold leading-tight text-navy sm:text-2xl">{children}</span>;
}
const withFigures = (rows, col) => rows.map((r) => r.map((c, j) => (j === col ? <Fig key={j}>{c}</Fig> : c)));

// "On this page" anchors — a sticky left rail from lg, a scrolling row below.
function OnThisPage({ items }) {
  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
      <p className="kicker text-slatey">On this page</p>
      <ul className="-mx-5 mt-2 flex gap-1 overflow-x-auto border-y border-hairline px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-y-0 lg:border-t-2 lg:border-t-ink lg:px-0">
        {items.map((i) => (
          <li key={i.id} className="shrink-0 lg:border-b lg:border-hairline">
            <a href={`#${i.id}`} className="flex min-h-11 items-center whitespace-nowrap px-3 text-base font-medium text-navy hover:text-brandred hover:underline underline-offset-2 lg:whitespace-normal lg:px-0">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function NriBaggagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NRI Baggage Clearance",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: P.intro,
  };

  const navItems = [...P.index, { id: "faq-heading", label: "Frequently asked questions" }];
  const g = P.generalFreeAllowanceTable.rows; // [no, class, INR]
  const jw = P.jewelleryTable.rows; // [gender, grams]

  // Headline figures: only values already printed in the tables below, each
  // shown with the source conditions that scope it (p.59 general allowance:
  // "excluding an infant", "Arriving through any mode other than land";
  // p.60 jewellery: resident or tourist of Indian origin residing abroad for
  // more than one year).
  const generalFigures = [
    { label: g[0][1], value: `INR ${g[0][2]}` },
    { label: g[3][1], value: `INR ${g[3][2]}` },
    { label: g[4][1], value: `INR ${g[4][2]}` },
  ];
  const jewelleryFigure = { label: "Gold jewellery", value: jw.map(([who, amt]) => `${who} ${amt}`).join(" · ") };
  const jewelleryCondition = "A resident or tourist of Indian origin who has been residing abroad for more than one year.";

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "NRI Baggage Clearance", href: "/services/nri-baggage-clearance" }]} />}
        kicker={P.tagline}
        title="NRI Baggage Clearance"
        intro={P.intro}
      />

      <HowPortmatrixHelps>{P.serviceIntro}</HowPortmatrixHelps>

      {/* Headline allowance figures: the page's single tinted band */}
      <section className="-mx-5 mt-10 bg-navy-50/60 px-5 py-8 sm:-mx-8 sm:px-8" aria-label="Headline allowance figures">
        <p className="kicker text-slatey">Headline allowance figures</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-x-10">
          <div>
            <p className="font-display text-lg font-semibold text-ink">General free allowance</p>
            <dl className="mt-3 grid gap-x-6 gap-y-5 sm:grid-cols-3">
              {generalFigures.map((k) => (
                <div key={k.label}>
                  <dt className="text-base leading-snug text-slatey">{k.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-[1.75rem]">{k.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 max-w-prose text-base leading-snug text-ink/85">
              Passengers, excluding an infant. {P.generalFreeAllowanceModeNote} All five classes are in the General Free Allowance table below.
            </p>
          </div>
          <div className="lg:border-l lg:border-navy/15 lg:pl-10">
            <p className="font-display text-lg font-semibold text-ink">Special allowance for jewellery</p>
            <dl className="mt-3">
              <dt className="text-base leading-snug text-slatey">{jewelleryFigure.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-[1.75rem]">{jewelleryFigure.value}</dd>
            </dl>
            <p className="mt-4 max-w-prose text-base leading-snug text-ink/85">{jewelleryCondition}</p>
          </div>
        </div>
      </section>

      <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-x-14 gap-y-8 lg:grid-cols-[12.5rem_minmax(0,1fr)]">
        <OnThisPage items={navItems} />

        <div className="min-w-0">
          <section aria-label="Classes of passenger">
            <p className={proseCls}>{P.classesIntro}</p>
            <ul className="mt-3 divide-y divide-hairline border-y border-hairline sm:grid sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0 sm:border-y-0">
              {P.classes.map((c) => (
                <li key={c} className="py-2.5 text-base leading-snug text-ink sm:border-b sm:border-hairline">{c}</li>
              ))}
            </ul>
          </section>

          {/* Channels */}
          <section className="mt-14" aria-labelledby="channels">
            <h2 id="channels" className={h2Cls}>Customs channels: Green and Red</h2>
            <p className={`mt-3 ${proseCls}`}>{P.channels.intro}</p>
            <dl className="mt-5 border-t-2 border-ink">
              {P.channels.list.map((c) => (
                <div key={c.name} className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <dt className="font-display text-lg font-semibold text-ink">{c.name}</dt>
                  <dd className="max-w-prose text-base leading-relaxed text-ink/85">{c.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Allowances */}
          <section className="mt-14" aria-labelledby="allowances">
            <h2 id="allowances" className={h2Cls}>Allowances</h2>

            <h3 className={`mt-6 ${h3Cls}`}>Duty-free imports of personal effects</h3>
            <p className={`mt-2 ${proseCls}`}>{P.dutyFreePersonalEffects}</p>
            <ReferenceTable caption={P.dutyFreeItemsTable.caption} headers={P.dutyFreeItemsTable.headers} rows={withFigures(P.dutyFreeItemsTable.rows, 1)} />

            <h3 className={`mt-10 ${h3Cls}`}>Re-import and temporary import</h3>
            <p className={`mt-2 ${proseCls}`}>{P.reimportNote}</p>

            <h3 className={`mt-10 ${h3Cls}`}>General free allowance</h3>
            <p className={`mt-2 ${proseCls}`}>{P.generalFreeAllowanceIntro}</p>
            <p className="mt-2 text-base font-medium text-ink">{P.generalFreeAllowanceModeNote}</p>
            <ReferenceTable caption={P.generalFreeAllowanceTable.caption} headers={P.generalFreeAllowanceTable.headers} rows={withFigures(P.generalFreeAllowanceTable.rows, 2)} />

            <ul className={`mt-4 ${bulletCls}`}>
              <li className={proseCls}>{P.laptopRule}</li>
              <li className={proseCls}>{P.poolingRule}</li>
            </ul>

            {/* The page's single callout */}
            <Callout tone="example" icon={AlertTriangle} className="!max-w-none">{P.declarationWarning}</Callout>

            <h3 id="jewellery" className={`mt-10 scroll-mt-24 ${h3Cls}`}>Special allowance for jewellery</h3>
            <p className={`mt-2 ${proseCls}`}>{P.jewelleryIntro}</p>
            <ReferenceTable caption={P.jewelleryTable.caption} headers={P.jewelleryTable.headers} rows={withFigures(P.jewelleryTable.rows, 1)} />
          </section>

          {/* Transfer of residence */}
          <section className="mt-14" aria-labelledby="transfer-of-residence">
            <h2 id="transfer-of-residence" className={h2Cls}>Transfer of Residence</h2>
            <p className="mt-2 text-base font-medium text-slatey">{P.transferOfResidenceSubtitle}</p>
            <p className={`mt-3 ${proseCls}`}>{P.transferOfResidenceIntro}</p>
            <p className={`mt-3 ${proseCls}`}>{P.transferOfResidenceTablesIntro}</p>
            <div className="grid gap-x-8 xl:grid-cols-2">
              <ReferenceTable caption={P.torIndianTable.caption} headers={P.torIndianTable.headers} rows={withFigures(P.torIndianTable.rows, 1)} />
              <ReferenceTable caption={P.torForeignerTable.caption} headers={P.torForeignerTable.headers} rows={withFigures(P.torForeignerTable.rows, 1)} />
            </div>

            <h3 className={`mt-8 ${h3Cls}`}>Annexure-II items</h3>
            <p className={`mt-2 ${proseCls}`}>{P.annexureIntro}</p>
            <ReferenceTable caption={P.annexureTable.caption} headers={P.annexureTable.headers} rows={P.annexureTable.rows} />
          </section>

          {/* Currency */}
          <section className="mt-14" aria-labelledby="currency">
            <h2 id="currency" className={h2Cls}>Currency</h2>
            <ul className={`mt-3 ${bulletCls}`}>
              {P.currency.map((c) => (
                <li key={c} className={proseCls}>{c}</li>
              ))}
            </ul>
          </section>

          {/* Other baggage rules */}
          <section className="mt-14" aria-labelledby="other-rules">
            <h2 id="other-rules" className={h2Cls}>Other baggage rules</h2>
            <dl className="mt-5 border-t-2 border-ink">
              {P.otherRules.map((r) => (
                <div key={r.title} className="grid gap-1.5 border-b border-hairline py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
                  <dt className="font-display text-lg font-semibold text-ink">{r.title}</dt>
                  <dd>
                    <ul className="space-y-1.5">
                      {r.items.map((it) => (
                        <li key={it} className="max-w-prose text-base leading-relaxed text-ink/85">{it}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Pets — sentence printed as in the PDF (client confirmation pending) */}
          <section className="mt-14" aria-labelledby="pets">
            <h2 id="pets" className={h2Cls}>Pets</h2>
            <p className={`mt-3 ${proseCls}`}>{P.pets}</p>
          </section>

          {/* The PDF p.60 allowance infographic is intentionally not rendered:
              the native tables above carry every row, and the artwork's MD
              credential line differs from p.4 (CLIENT_CONFIRMATION_REQUIRED). */}

          <Faq items={P.faqs} />
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Licensed Customs Broker", href: "/services/licensed-customs-broker" },
            { title: "Contact PORTMATRIX", href: "/contact" },
          ]}
        />
      </div>
    </div>
  );
}

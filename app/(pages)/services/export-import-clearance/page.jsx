import { Fragment } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import Callout from "@/components/Callout";
import KeyPoints from "@/components/KeyPoints";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { FileText, Stamp, Calculator, ShieldCheck } from "lucide-react";
import { EXIM_CLEARANCE_PAGE as P } from "@/lib/trade-services-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Export-Import Clearance",
  description:
    "The customs documents, clearance coordination, duty and tax calculation and compliance support PORTMATRIX provides, with its import and export workflows.",
  path: "/services/export-import-clearance",
});

const linkCls = "text-navy underline underline-offset-2 hover:text-brandred";

// An item is a string, or an array of parts (string | { text, href }).
function Rich({ item }) {
  if (typeof item === "string") return item;
  return item.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <Link key={i} href={part.href} className={linkCls}>
        {part.text}
      </Link>
    )
  );
}

function BulletList({ items, cols = false }) {
  return (
    <ul className={`mt-3 divide-y divide-hairline border-y border-hairline ${cols ? "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0 sm:border-y-0" : ""}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className={`py-2.5 text-base leading-relaxed text-ink/85 ${cols ? "sm:border-b sm:border-hairline" : ""}`}
        >
          <Rich item={item} />
        </li>
      ))}
    </ul>
  );
}

// Numbered steps with visible numerals; `start` continues numbering across stages.
function StepList({ steps, start = 1, className = "" }) {
  return (
    <ol start={start} className={`divide-y divide-hairline border-y border-hairline ${className}`}>
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4 py-3.5">
          <span aria-hidden="true" className="w-8 shrink-0 text-right font-display text-lg font-bold tabular-nums leading-snug text-navy">
            {start + i}
          </span>
          <span className="text-base leading-relaxed text-ink/85">
            <Rich item={step} />
          </span>
        </li>
      ))}
    </ol>
  );
}

export default function ExportImportClearancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Export Import Clearance",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: P.serviceIntro,
  };

  let stepStart = 1;
  const stages = P.exportWorkflow.stages.map((stage) => {
    const s = { ...stage, start: stepStart };
    stepStart += stage.steps.length;
    return s;
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Export Import Clearance", href: "/services/export-import-clearance" }]} />}
        kicker={P.tagline}
        title="Export-Import Clearance"
        intro={P.intro}
      />
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink/85">
        This page sets out what PORTMATRIX prepares, files and coordinates for a shipment. For our role as an agent for importers and exporters under the customs regulations, see{" "}
        <Link href="/services/licensed-customs-broker" className={linkCls}>Licensed Customs Broker</Link>.
      </p>

      <HowPortmatrixHelps>{P.serviceIntro}</HowPortmatrixHelps>

      <KeyPoints
        title="At a glance"
        items={[
          { icon: FileText, title: P.keyPoints[0].title, text: P.keyPoints[0].text },
          { icon: Stamp, title: P.keyPoints[1].title, text: P.keyPoints[1].text },
          { icon: Calculator, title: P.keyPoints[2].title, text: P.keyPoints[2].text },
          { icon: ShieldCheck, title: P.keyPoints[3].title, text: P.keyPoints[3].text },
        ]}
      />

      {/* The seven areas: numbered rows with large numerals, ruled not boxed */}
      <section className="mt-16" aria-labelledby="what-we-handle">
        <h2 id="what-we-handle" className="h3 text-ink">What we prepare, file and coordinate</h2>
        <ol className="mt-6 border-t-2 border-ink">
          {P.sections.map((section, i) => (
            <li key={section.title} className="grid gap-x-10 gap-y-3 border-b border-hairline py-8 md:grid-cols-[4.5rem_1fr] lg:grid-cols-[5.5rem_17rem_1fr]">
              <span aria-hidden="true" className="font-display text-5xl font-bold leading-none tabular-nums text-navy/25 lg:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-start-2 lg:col-start-2">
                <h3 className="font-display text-xl font-semibold leading-snug text-ink">{section.title}</h3>
                <p className="mt-2 text-base text-slatey">{section.intro}</p>
              </div>
              <div className="md:col-start-2 lg:col-start-3">
                {section.groups ? (
                  section.groups.map((g, gi) => (
                    <div key={g.label} className={gi ? "mt-5" : ""}>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-ink/70">{g.label}</h4>
                      <BulletList items={g.items} cols={g.items.length > 4} />
                    </div>
                  ))
                ) : (
                  <BulletList items={section.items} cols={section.items.length > 6} />
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Import example (the page's single callout) beside genuine operational evidence */}
      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14 xl:grid-cols-[1fr_26rem]">
        <section aria-labelledby="import-workflow">
          <Callout tone="example" className="!my-0 !max-w-none">
            <h2 id="import-workflow" className="h3 text-ink">{P.importWorkflow.title}</h2>
            <p className="mt-2 text-base text-slatey">{P.importWorkflow.scenario}</p>
            <StepList steps={P.importWorkflow.steps} className="mt-5" />
          </Callout>
        </section>

        <div className="grid content-start gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <EvidenceFigure
            src="/images/source/customs/hotel-supplies-inspection-netherlands-2024.png"
            alt="Product inspection of a hotel supplies shipment to the Netherlands, 2024"
            caption="Product inspection of Hotel supplies shipment to Netherlands in 2024"
            sizes="(min-width: 1280px) 416px, (min-width: 1024px) 352px, (min-width: 640px) 45vw, 100vw"
          />
          <EvidenceFigure
            src="/images/source/customs/export-shipment-inspection-usa-2025.png"
            alt="Inspection of an export shipment to the USA, 2025"
            caption="Inspection of export shipment to USA in 2025"
            sizes="(min-width: 1280px) 416px, (min-width: 1024px) 352px, (min-width: 640px) 45vw, 100vw"
          />
        </div>
      </div>

      {/* Export workflow: three stage rails, numbering continues across them */}
      <section className="mt-16" aria-labelledby="export-workflow">
        <h2 id="export-workflow" className="h3 text-ink">{P.exportWorkflow.title}</h2>
        <div className="mt-6 grid gap-x-8 gap-y-10 lg:grid-cols-3">
          {stages.map((stage, si) => (
            <div key={stage.label} className="border-t-2 border-ink pt-4">
              <h3 className="flex items-baseline gap-3 font-display text-xl font-semibold text-ink">
                <span aria-hidden="true" className="text-sm font-bold text-brandred-600">{String(si + 1).padStart(2, "0")}</span>
                {stage.label}
              </h3>
              <StepList steps={stage.steps} start={stage.start} className="mt-4" />
            </div>
          ))}
        </div>
      </section>

      <Faq items={P.faqs} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Licensed Customs Broker", href: "/services/licensed-customs-broker" },
            { title: "AEO", href: "/services/aeo" },
            { title: "MOOWR", href: "/services/moowr" },
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
          ]}
        />
      </div>
    </div>
  );
}

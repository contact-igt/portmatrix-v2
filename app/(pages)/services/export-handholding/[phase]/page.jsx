import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import ProcessFlow from "@/components/ProcessFlow";
import RelatedServices from "@/components/RelatedServices";
import { PHASES } from "@/lib/export-handholding-data";

export function generateStaticParams() {
  return PHASES.map((p) => ({ phase: p.slug }));
}

export function generateMetadata({ params }) {
  const phase = PHASES.find((p) => p.slug === params.phase);
  if (!phase) return {};
  const stepNames = phase.steps.map((s) => s.title).join(", ");
  return {
    title: `Phase ${phase.n}: ${phase.title}`,
    description: `${stepNames}.`.slice(0, 155),
    alternates: { canonical: `/services/export-handholding/${phase.slug}` },
    openGraph: { title: `Phase ${phase.n}: ${phase.title} | PORTMATRIX` },
  };
}

// Phases named by the source's own two-sided relationships, per
// docs/SEO_AEO_GEO_ARCHITECTURE.md — Phase 3 touches insurance, Phase 5
// touches clearance, so those get an extra contextual link.
const EXTRA_RELATED = {
  "buyer-development-commercial-negotiations": [{ title: "MSME Insurance Package", href: "/services/msme-insurance" }],
  "pre-shipment-procedures": [{ title: "MSME Insurance Package", href: "/services/msme-insurance" }],
  "shipment-procedures": [{ title: "Export Import Clearance", href: "/services/export-import-clearance" }],
};

export default function PhasePage({ params }) {
  const index = PHASES.findIndex((p) => p.slug === params.phase);
  if (index === -1) notFound();
  const phase = PHASES[index];
  const prev = PHASES[index - 1];
  const next = PHASES[index + 1];

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <PageIntro
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Export Handholding", href: "/services/export-handholding" },
              { label: `Phase ${phase.n}: ${phase.title}`, href: `/services/export-handholding/${phase.slug}` },
            ]}
          />
        }
        kicker={`Phase ${String(phase.n).padStart(2, "0")} of 6`}
        title={phase.title}
        intro={`${phase.steps.length} steps, in the order PORTMATRIX carries them out for every export shipment.`}
      />

      <EvidenceFigure
        src={phase.infographic}
        alt={`PORTMATRIX export handholding infographic for Phase ${phase.n}: ${phase.title}`}
        caption={`PORTMATRIX export handholding — Phase ${phase.n}: ${phase.title}`}
        variant="infographic"
        priority
        sizes="(min-width: 1024px) 1200px, 100vw"
        className="mt-10"
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="h3 text-ink">Step by step</h2>
          <ol className="mt-5 divide-y divide-hairline border-y border-hairline">
            {phase.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 py-4">
                <span className="text-xs text-slatey/50">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-slatey">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="h3 text-ink">Flow</h2>
          <ProcessFlow steps={phase.flowChart} />
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-hairline pt-6">
        {prev ? (
          <Link href={`/services/export-handholding/${prev.slug}`} className="group flex items-center gap-2 text-sm font-semibold text-navy">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Phase {prev.n}: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/services/export-handholding/${next.slug}`} className="group flex items-center gap-2 text-right text-sm font-semibold text-navy">
            Phase {next.n}: {next.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <Link href="/services/export-handholding" className="group flex items-center gap-2 text-right text-sm font-semibold text-navy">
            Back to overview
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>

      <div className="mt-12">
        <RelatedServices
          items={[
            { title: "Export Handholding overview", href: "/services/export-handholding" },
            ...(EXTRA_RELATED[phase.slug] || []),
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
          ]}
        />
      </div>
    </div>
  );
}

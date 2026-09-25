import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import BrandedInfographic from "@/components/BrandedInfographic";
import ProcessFlow from "@/components/ProcessFlow";
import RelatedServices from "@/components/RelatedServices";
import { PHASES } from "@/lib/export-handholding-data";

// Source-image size and the measured old-logo box [x, y, w, h] per phase
// infographic (PDF pp.8–15) — covered by the V6 logo at render time.
const INFOGRAPHIC_V6 = {
  "business-setup-registration": { width: 1981, height: 793, logoBox: [33, 18, 484, 88] },
  "pre-export-planning": { width: 1942, height: 809, logoBox: [30, 17, 481, 88] },
  "buyer-development-commercial-negotiations": {
    width: 1983,
    height: 793,
    logoBox: [40, 16, 482, 89],
    // sampled source colours (blue glow along the bottom edge)
    edgeTop: ["#fffffe", "#fefefe", "#fefefe", "#fefefe", "#fdfdfd", "#fefefe", "#fefefe", "#fdfdfd", "#feffff", "#fefefe", "#fbfdfe"],
    edgeBottom: ["#fdfefe", "#fafdfe", "#f5faff", "#eff8fe", "#eaf5ff", "#e5f3fd", "#e1f1fe", "#e0f0fd", "#def0fd", "#dff0fd", "#e4f2fd"],
  },
  "pre-shipment-procedures": { width: 1981, height: 793, logoBox: [32, 17, 490, 89] },
  "shipment-procedures": { width: 1981, height: 793, logoBox: [38, 20, 483, 86] },
  "post-shipment-realisation": { width: 1981, height: 794, logoBox: [36, 18, 486, 88] },
};

export function generateStaticParams() {
  return PHASES.map((p) => ({ phase: p.slug }));
}

export function generateMetadata({ params }) {
  const phase = PHASES.find((p) => p.slug === params.phase);
  if (!phase) return {};
  // Whole source step titles only — never cut a step name mid-word.
  let stepNames = "";
  for (const s of phase.steps) {
    const next = stepNames ? `${stepNames}, ${s.title}` : s.title;
    if (next.length > 150) break;
    stepNames = next;
  }
  return {
    title: `Phase ${phase.n}: ${phase.title}`,
    description: `${stepNames}.`,
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
      />

      <BrandedInfographic
        src={phase.infographic}
        {...INFOGRAPHIC_V6[phase.slug]}
        alt={`PORTMATRIX export handholding infographic for Phase ${phase.n}: ${phase.title}`}
        caption={`PORTMATRIX export handholding — Phase ${phase.n}: ${phase.title}`}
        priority
        className="mt-10"
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="h3 text-ink">Step by step</h2>
          <ol className="mt-5 divide-y divide-hairline border-y border-hairline">
            {phase.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 py-4">
                <span className="text-[13px] text-slatey">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-base leading-relaxed text-slatey">{step.desc}</p>
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
          <Link href={`/services/export-handholding/${prev.slug}`} className="group flex min-h-11 items-center gap-2 text-sm font-semibold text-navy">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Phase {prev.n}: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/services/export-handholding/${next.slug}`} className="group flex min-h-11 items-center gap-2 text-right text-sm font-semibold text-navy">
            Phase {next.n}: {next.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <Link href="/services/export-handholding" className="group flex min-h-11 items-center gap-2 text-right text-sm font-semibold text-navy">
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

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import Faq from "@/components/Faq";
import { buildMetadata } from "@/lib/seo";
import RelatedServices from "@/components/RelatedServices";
import { PHASES, PHASE_META } from "@/lib/export-handholding-data";

export function generateStaticParams() {
  return PHASES.map((p) => ({ phase: p.slug }));
}

export function generateMetadata({ params }) {
  const phase = PHASES.find((p) => p.slug === params.phase);
  if (!phase) return {};
  const meta = PHASE_META[phase.slug];
  return buildMetadata({
    title: meta.metaTitle,
    description: meta.metaDescription,
    path: `/services/export-handholding/${phase.slug}`,
  });
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
  const meta = PHASE_META[phase.slug];
  const groups = meta.groups || [{ title: null, from: 1, to: phase.steps.length }];
  const lastPhase = PHASES.length - 1;

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
        kicker="MSME Export Handholding"
        title={phase.title}
        intro={`Phase ${phase.n} of ${PHASES.length} in PORTMATRIX's MSME Export Handholding — ${phase.steps.length} steps, from ${phase.steps[0].title} to ${phase.steps[phase.steps.length - 1].title}.`}
      />

      {/* Compact 6-step phase tracker: current phase filled, others link. */}
      <nav aria-label="Export Handholding phases" className="mt-10">
        <ol className="flex items-center">
          {PHASES.map((p, i) => {
            const current = i === index;
            return (
              <li key={p.slug} className="flex items-center">
                <Link
                  href={`/services/export-handholding/${p.slug}`}
                  aria-current={current ? "page" : undefined}
                  aria-label={`Phase ${p.n}: ${p.title}`}
                  title={p.title}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy font-display text-base font-bold transition-colors ${
                    current ? "bg-navy text-white" : "bg-white text-navy hover:bg-navy-50"
                  }`}
                >
                  {p.n}
                </Link>
                {i < lastPhase && <span aria-hidden="true" className={`h-0.5 w-3.5 sm:w-9 lg:w-14 ${i < index ? "bg-navy" : "bg-navy/20"}`} />}
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="mt-12 lg:grid lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-x-12">
        <p aria-hidden="true" className="hidden font-display text-[7rem] font-bold leading-none tracking-tight text-navy lg:sticky lg:top-28 lg:block lg:self-start">
          {String(phase.n).padStart(2, "0")}
        </p>

        <section className="max-w-3xl" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="h3 text-ink">
            {`The ${phase.steps.length} steps of ${meta.subject}`}
          </h2>
          {groups.map((g, gi) => {
            const steps = phase.steps.slice(g.from - 1, g.to);
            return (
              <div key={g.from} className={gi === 0 && !g.title ? "mt-8" : "mt-12 first:mt-8"}>
                {g.title && <h3 className="border-t-2 border-ink pt-4 font-display text-xl font-semibold text-ink">{g.title}</h3>}
                <ol start={g.from} className={`ml-7 border-l-2 border-navy/20 ${g.title ? "mt-8" : ""}`}>
                  {steps.map((step, i) => {
                    const links = meta.stepLinks?.[g.from + i];
                    return (
                      <li key={step.title} className="relative pb-9 pl-10 last:pb-0 sm:pl-14">
                        <span
                          className="absolute -left-[1.875rem] top-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy bg-paper font-display text-[1.75rem] font-bold leading-none text-navy"
                          aria-hidden="true"
                        >
                          {g.from + i}
                        </span>
                        <p className="pt-1 font-display text-lg font-semibold leading-snug text-ink sm:text-xl">{step.title}</p>
                        <p className="mt-2 text-base leading-relaxed text-slatey sm:text-[1.0625rem]">{step.desc}</p>
                        {links && (
                          <p className="mt-2 text-[15px] text-slatey">
                            Related:{" "}
                            {links.map((l, k) => (
                              <span key={l.href}>
                                {k > 0 && ", "}
                                <Link href={l.href} className="font-semibold text-navy underline-offset-2 hover:underline">
                                  {l.label}
                                </Link>
                              </span>
                            ))}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}
        </section>
      </div>

      <Faq items={meta.faq} />

      <nav aria-label="Previous and next phase" className="mt-14 grid border-y border-hairline sm:grid-cols-2 sm:divide-x sm:divide-hairline">
        {prev ? (
          <Link href={`/services/export-handholding/${prev.slug}`} className="group flex min-h-11 items-center gap-4 py-5 sm:pr-6">
            <ArrowLeft className="h-5 w-5 shrink-0 text-navy transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            <span>
              <span className="block text-sm text-slatey">Previous phase</span>
              <span className="block font-display text-lg font-semibold leading-snug text-ink group-hover:text-navy">
                Phase {prev.n}: {prev.title}
              </span>
            </span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next ? (
          <Link
            href={`/services/export-handholding/${next.slug}`}
            className="group flex min-h-11 items-center justify-between gap-4 border-t border-hairline py-5 sm:border-t-0 sm:pl-6 sm:text-right"
          >
            <span className="sm:ml-auto">
              <span className="block text-sm text-slatey">Next phase</span>
              <span className="block font-display text-lg font-semibold leading-snug text-ink group-hover:text-navy">
                Phase {next.n}: {next.title}
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-navy transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            href="/services/export-handholding"
            className="group flex min-h-11 items-center justify-between gap-4 border-t border-hairline py-5 sm:border-t-0 sm:pl-6 sm:text-right"
          >
            <span className="font-display text-lg font-semibold text-ink group-hover:text-navy sm:ml-auto">Back to overview</span>
            <ArrowRight className="h-5 w-5 shrink-0 text-navy transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        )}
      </nav>

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

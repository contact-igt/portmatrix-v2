import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import RelatedServices from "@/components/RelatedServices";
import { PHASES, EXPORT_HANDHOLDING_HUB } from "@/lib/export-handholding-data";

export const metadata = {
  title: "Export Handholding — 6-Phase Process",
  description:
    "End-to-end MSME export handholding across 6 phases: business setup, pre-export planning, buyer development, pre-shipment, shipment, and post-shipment realisation.",
  alternates: { canonical: "/services/export-handholding" },
  openGraph: {
    title: "Export Handholding — PORTMATRIX",
    description: "Complete support from export registration to post-shipment payment realisation.",
  },
};

export default function ExportHandholdingHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MSME Export Handholding",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: EXPORT_HANDHOLDING_HUB.intro,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Export Handholding", href: "/services/export-handholding" }]} />}
        kicker="MSME Export Handholding Package"
        title="The end-to-end export journey, phase by phase"
        intro={EXPORT_HANDHOLDING_HUB.intro}
      />

      <EvidenceFigure
        src="/images/source/export-handholding/export-handholding-hero-infographic.png"
        alt="PORTMATRIX MSME Export Handholding process overview"
        caption="PORTMATRIX MSME Export Handholding process overview"
        variant="infographic"
        priority
        sizes="(min-width: 1024px) 1200px, 100vw"
        className="mt-10"
      />

      <div className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {PHASES.map((phase) => (
          <Link
            key={phase.slug}
            href={`/services/export-handholding/${phase.slug}`}
            className="group flex flex-col gap-3 bg-white p-6 transition-colors hover:bg-navy-50"
          >
            <span className="text-xs text-brandred">Phase {String(phase.n).padStart(2, "0")}</span>
            <h2 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-navy">
              {phase.title}
            </h2>
            <p className="text-sm text-slatey">{phase.steps.length} steps</p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
              View phase
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
            { title: "MSME Insurance Package", href: "/services/msme-insurance" },
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
          ]}
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import RelatedServices from "@/components/RelatedServices";
import { CHINA } from "@/lib/content";
import { CHINA_PAGE } from "@/lib/china-data";

export const metadata = {
  title: "China Import Sourcing Since 1974",
  description:
    "End-to-end China import sourcing — factory inspection, negotiation, quality control and delivery, with a trade link dating back to 1974.",
  alternates: { canonical: "/china-import-sourcing" },
  openGraph: {
    title: "China Import Sourcing Since 1974 — PORTMATRIX",
    description: "Our late Founder began Hong Kong trading in 1974 — five decades of sourcing experience in China.",
    images: [CHINA.images.history.src],
  },
};

export default function ChinaImportSourcingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "China Import Sourcing",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: CHINA_PAGE.serviceIntro,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "China Import Sourcing", href: "/china-import-sourcing" }]} />}
        kicker="The gateway to China · Since 1974"
        title="China Import Sourcing"
        intro={CHINA_PAGE.intro}
      />

      {/* Heritage — the 1974 delegation photo leads, framed as archive
          evidence, exactly as on the homepage. This photo never appears
          decoratively elsewhere on the site. The caption is shown as real
          text below (not overlaid) even though it's also baked into the
          photo itself, so it stays screen-reader/AEO legible on this
          content-first page. */}
      <div className="mt-10 max-w-2xl border border-hairline bg-paper p-2">
        <EvidenceFigure
          src={CHINA.images.history.src}
          alt={CHINA.images.history.alt}
          caption={CHINA_PAGE.founderPhotoCaption}
          aspect="aspect-[3/2]"
          priority
        />
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="article-body max-w-none">
          <p>{CHINA_PAGE.founderHistory}</p>
          <p>{CHINA_PAGE.serviceIntro}</p>

          <h2 className="h3 mt-8 text-ink">China Sourcing</h2>
          <ul>
            {CHINA_PAGE.chinaSourcingFacts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Import with Ease</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {CHINA_PAGE.capabilities.map((cap) => (
              <div key={cap.title}>
                <h3 className="h3 text-ink">{cap.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slatey">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <EvidenceFigure
            src={CHINA.images.factory.src}
            alt={CHINA.images.factory.alt}
            caption={CHINA.images.factory.caption}
            aspect="aspect-[4/3]"
          />
          <ul className="space-y-2.5 border-t border-hairline pt-6">
            {CHINA.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brandred" />
                <span className="text-sm text-ink/80">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/china-import-sourcing/canton-fair"
            className="group flex items-center justify-between gap-3 rounded-xl border border-hairline bg-white px-5 py-4 transition-colors hover:border-navy/30 hover:bg-navy-50"
          >
            <span className="text-sm font-semibold text-ink">Visit Canton Fair with us</span>
            <ArrowRight className="h-4 w-4 text-navy transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Canton Fair Sourcing Services", href: "/china-import-sourcing/canton-fair" },
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
            { title: "Contact PORTMATRIX", href: "/contact" },
          ]}
        />
      </div>
    </div>
  );
}

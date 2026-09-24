import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import RelatedServices from "@/components/RelatedServices";
import { RIIT } from "@/lib/content";
import { RIIT_HUB } from "@/lib/riit-data";

export const metadata = {
  title: "RIIT — Regional Institute of International Trade",
  description:
    "RIIT is PORTMATRIX's allied training, research and consultancy institute — an export training partner for the Govt. of India–MSME, EDII-TN, TNAPEx, India Post, FIEO and Alagappa University.",
  alternates: { canonical: "/riit" },
  openGraph: { images: [RIIT.featured[0].src] },
};

export default function RiitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Regional Institute of International Trade (RIIT)",
    description: RIIT_HUB.intro,
    parentOrganization: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "RIIT", href: "/riit" }]} />}
        kicker={RIIT.kicker}
        title={RIIT.heading}
        intro={RIIT_HUB.intro}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {RIIT.featured.map((img) => (
          <EvidenceFigure key={img.src} src={img.src} alt={img.alt} caption={img.caption} variant="documentary" />
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Link
          href="/riit/courses"
          className="group flex flex-col justify-between gap-4 rounded-2xl border border-hairline p-7 transition-colors hover:border-navy/30 hover:bg-navy-50"
        >
          <div>
            <h2 className="h3 text-ink transition-colors group-hover:text-navy">Courses &amp; Certificate Programmes</h2>
            <p className="mt-2 text-sm text-slatey">12 RIIT training-partner courses plus a 21-topic Certificate Programme in International Trade Management.</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
            View curriculum <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
        <Link
          href="/riit/training-events"
          className="group flex flex-col justify-between gap-4 rounded-2xl border border-hairline p-7 transition-colors hover:border-navy/30 hover:bg-navy-50"
        >
          <div>
            <h2 className="h3 text-ink transition-colors group-hover:text-navy">Training Events</h2>
            <p className="mt-2 text-sm text-slatey">A documentary timeline of government, institutional and community training events, 2020–2026.</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
            View timeline <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Media & Press", href: "/media" },
            { title: "About PORTMATRIX", href: "/about" },
            { title: "Rahim Iyaz — Managing Director", href: "/about/rahim-iyaz" },
          ]}
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import { MISSION_TAGLINE, INTELLIGENCE, MD } from "@/lib/content";
import { ABOUT_PAGE } from "@/lib/about-data";

export const metadata = {
  title: "About — Customs Broking Since 1996",
  description:
    "PORTMATRIX is a government-licensed customs broker and export handholding company. Learn about our history, our MD Rahim Iyaz, and our institutional credibility.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PORTMATRIX",
    description:
      "Government-licensed customs broker and export handholding company — our story, our leadership, our credibility.",
    images: ["/images/source/md/rahim-iyaz-portrait.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "About", href: "/about" }]} />}
        kicker="About PORTMATRIX"
        title={MISSION_TAGLINE}
        intro={ABOUT_PAGE.intro}
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="article-body">
          <p>{ABOUT_PAGE.coreStrength}</p>
          <p>{ABOUT_PAGE.scope}</p>

          <h2 className="h3 mt-8 text-ink">EXIM Market Intelligence</h2>
          <ul>
            {INTELLIGENCE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Regional Institute of International Trade</h2>
          <p>{ABOUT_PAGE.riit}</p>
          <p>
            <Link href="/riit" className="inline-flex items-center gap-1.5 font-semibold text-navy hover:underline">
              Explore RIIT <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>

        {/* Leadership preview — links to the full MD profile rather than
            duplicating it here, since /about/rahim-iyaz exists as its own
            dedicated route. */}
        <Link
          href="/about/rahim-iyaz"
          className="group block h-fit overflow-hidden rounded-2xl border border-hairline transition-colors hover:border-navy/30"
        >
          <div className="relative aspect-[2/3] w-full">
            <Image
              src={MD.portrait.src}
              alt={MD.portrait.alt}
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <p className="font-display text-lg font-semibold text-ink">{MD.name}</p>
            <p className="text-sm text-slatey">{MD.title}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
              Full profile
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-14">
        <RelatedServices
          title="Related"
          items={[
            { title: "RIIT — Export Training & Research", href: "/riit" },
            { title: "Training Events & Institutional Credibility", href: "/riit/training-events" },
            { title: "China Import Sourcing — Founder History", href: "/china-import-sourcing" },
            { title: "Contact PORTMATRIX", href: "/contact" },
          ]}
        />
      </div>
    </div>
  );
}

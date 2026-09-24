import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import { MD } from "@/lib/content";

export const metadata = {
  title: "Rahim Iyaz — Managing Director",
  alternates: { canonical: "/about/rahim-iyaz" },
  description:
    "Mr. Rahim Iyaz is a Government Licensed Customs Broker with experience since 1996 across 9 international markets, and an authorised export-training resource person.",
  openGraph: {
    title: "Rahim Iyaz — Managing Director, PORTMATRIX",
    description:
      "Government Licensed Customs Broker, vintage experience since 1996, authorised export-training resource person for Govt. of India–MSME, EDII-TN, TNAPEx, FIEO, Alagappa University.",
    images: [MD.portrait.src],
  },
};

// Countries named verbatim in the MD's second bullet (source p.4) — split
// out here purely for a cleaner tag-row display, not a new fact.
const COUNTRIES = [
  "Republic of Maldives",
  "Singapore",
  "China",
  "Hong Kong",
  "Malaysia",
  "Thailand",
  "UAE",
  "Saudi Arabia",
  "Sri Lanka",
];

export default function RahimIyazPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: MD.name,
    jobTitle: MD.title,
    worksFor: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Rahim Iyaz", href: "/about/rahim-iyaz" }]} />

      <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={MD.portrait.src}
              alt={MD.portrait.alt}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-5 border-t border-hairline pt-4">
            <p className="font-display text-2xl font-semibold text-ink">{MD.name}</p>
            <p className="text-slatey">{MD.title}</p>
          </div>
        </div>

        <div>
          <p className="kicker mb-3 text-brandred">Managing Director</p>
          <h1 className="h1 text-ink">{MD.name}</h1>
          <p className="article-body mt-5 max-w-none text-lg font-medium leading-relaxed text-ink">
            {MD.qualifications}
          </p>

          <dl className="mt-8 divide-y divide-hairline border-y border-hairline">
            {MD.bullets.map((b) => (
              <div key={b} className="py-4 text-[15px] leading-relaxed text-ink/80">
                {b}
              </div>
            ))}
          </dl>

          <h2 className="h3 mt-8 text-ink">International Markets</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <span key={c} className="rounded-full border border-hairline px-3 py-1.5 text-sm text-ink/75">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          title="Related"
          items={[
            { title: "About PORTMATRIX", href: "/about" },
            { title: "Training Events & Institutional Credibility", href: "/riit/training-events" },
            { title: "RIIT — Export Training & Research", href: "/riit" },
            { title: "China Import Sourcing", href: "/china-import-sourcing" },
          ]}
        />
      </div>
    </div>
  );
}

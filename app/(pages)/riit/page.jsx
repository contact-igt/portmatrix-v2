import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import { RIIT } from "@/lib/content";
import { RIIT_HUB, RIIT_PARTNERS, RIIT_PARTNERS_LEAD, RIIT_SERVES, RIIT_DOES, RIIT_MILESTONES } from "@/lib/riit-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Regional Institute of International Trade (RIIT)",
  description:
    "RIIT, PORTMATRIX's allied concern, supports entrepreneurs, professionals and students through International Trade Training, Research and Consultancy.",
  path: "/riit",
  image: RIIT.featured[0].src,
});

const linkClass = "font-medium text-navy underline underline-offset-2 hover:text-ink";

// Milestone dates that have a matching documentary photo; the photos sit in
// context inside the timeline rather than as a gallery.
const MILESTONE_PHOTOS = {
  "2022-10-31": RIIT.featured.find((i) => i.src.includes("alagappa-university-mou")),
  "2023-11-14": RIIT.featured.find((i) => i.src.includes("riit-inauguration")),
};

export default function RiitPage() {
  // The source calls RIIT an "allied concern" only, so no parentOrganization
  // is claimed. The partner sentence is also kept out of the description
  // (its wording is awaiting client confirmation).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Regional Institute of International Trade (RIIT)",
    description: `RIIT ${RIIT_HUB.definition}`,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Institutional masthead: RIIT's own mark (PDF p.16, original file),
          then the page intro, closed by a heavy rule. */}
      <header className="border-b-2 border-navy pb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/source/branding/riit-logo.png" width={412} height={109} alt="Regional Institute of International Trade (RIIT) logo" className="mb-8 h-12 w-auto sm:h-14" />
        <PageIntro
          breadcrumb={<Breadcrumb items={[{ label: "RIIT", href: "/riit" }]} />}
          kicker="Allied concern of PORTMATRIX"
          title="Regional Institute of International Trade (RIIT)"
          intro={`Our allied concern, RIIT, ${RIIT_HUB.definition}`}
        />
      </header>

      {/* Serves / does / partners as three ruled lists (pp.3, 16-17;
          partner list defined once in lib/riit-data.js). */}
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <section aria-labelledby="who-riit-serves">
          <h2 id="who-riit-serves" className="font-display text-xl font-bold text-ink">Who RIIT serves</h2>
          <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
            {RIIT_SERVES.map((s) => (
              <li key={s} className="py-3.5 text-base leading-relaxed text-ink/85">{s}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="what-riit-does">
          <h2 id="what-riit-does" className="font-display text-xl font-bold text-ink">What RIIT does</h2>
          <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
            {RIIT_DOES.map((d) => (
              <li key={d} className="py-3.5 text-base leading-relaxed text-ink/85">{d}</li>
            ))}
          </ul>
          <p className="mt-4 text-base leading-relaxed text-slatey">
            See the <Link href="/riit/courses" className={linkClass}>RIIT courses and Certificate Programme</Link>{" "}
            and the <Link href="/riit/training-events" className={linkClass}>RIIT training events</Link>.
          </p>
        </section>

        <section aria-labelledby="training-partners" className="md:col-span-2 lg:col-span-1">
          <h2 id="training-partners" className="font-display text-xl font-bold text-ink">Export training partners</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey">{RIIT_PARTNERS_LEAD}:</p>
          <ul className="mt-3 divide-y divide-hairline border-y border-hairline">
            {RIIT_PARTNERS.map((p) => (
              <li key={p} className="py-3 text-base leading-relaxed text-ink/85">{p}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Milestones — pp.67, 77, 68 — as a dated timeline */}
      <section aria-labelledby="riit-milestones" className="mt-16 border-t border-hairline pt-10">
        <h2 id="riit-milestones" className="h2 text-ink">Milestones</h2>
        <ol className="mt-8 border-l-2 border-hairline">
          {RIIT_MILESTONES.map((m) => {
            const photo = MILESTONE_PHOTOS[m.date];
            return (
              <li key={m.date} className="relative pb-12 pl-6 last:pb-0 sm:pl-10">
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-brandred" aria-hidden="true" />
                <p className="font-display text-xl font-bold text-navy sm:text-2xl">
                  <time dateTime={m.date}>{m.display}</time>
                </p>
                <div className={`mt-3 grid gap-6 ${photo ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-12" : ""}`}>
                  <p className="max-w-prose text-lg leading-relaxed text-ink/85">{m.text}</p>
                  {photo && (
                    <figure>
                      <div className={`relative w-full overflow-hidden border border-hairline bg-white ${photo.width / photo.height > 1.4 ? "aspect-[3/2]" : "aspect-[4/3]"}`}>
                        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 416px, 100vw" className="object-cover" />
                      </div>
                      <figcaption className="mt-3 text-sm leading-relaxed text-slatey">{photo.caption}</figcaption>
                    </figure>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="explore-riit" className="mt-16 border-t border-hairline pt-10">
        <h2 id="explore-riit" className="h3 text-ink">Explore RIIT</h2>
        <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
          <li>
            <Link href="/riit/courses" className="group flex min-h-11 items-center justify-between gap-6 py-4">
              <span className="text-base leading-relaxed text-slatey">
                <span className="font-display text-lg font-semibold text-ink group-hover:text-navy">Courses &amp; Certificate Programme</span>
                {" — "}our courses (12) and the Certificate Programmes in International Trade Management curriculum (21 subjects).
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-navy/50 group-hover:text-navy" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link href="/riit/training-events" className="group flex min-h-11 items-center justify-between gap-6 py-4">
              <span className="text-base leading-relaxed text-slatey">
                <span className="font-display text-lg font-semibold text-ink group-hover:text-navy">Training Events</span>
                {" — "}training programmes and events, 2 August 2020 – 13 May 2026.
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-navy/50 group-hover:text-navy" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </section>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Export Handholding", href: "/services/export-handholding" },
            { title: "Media & Press", href: "/media" },
            { title: "About PORTMATRIX", href: "/about" },
            { title: "Rahim Iyaz — Managing Director", href: "/about/rahim-iyaz" },
            { title: "Contact PORTMATRIX", href: "/contact" },
          ]}
        />
      </div>
    </div>
  );
}

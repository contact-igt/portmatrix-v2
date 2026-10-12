import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import { MD, ORG_ID, SITE_URL } from "@/lib/content";
import { MD_LEAD, MD_COUNTRIES, MD_IN_THE_FIELD } from "@/lib/about-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Rahim Iyaz — Managing Director",
  description:
    "Mr. Rahim Iyaz, Managing Director of PORTMATRIX, is a Government Licensed Customs Broker with experience in foreign trade since 1996.",
  path: "/about/rahim-iyaz",
  image: MD.portrait.src,
});

const PERSON_ID = `${SITE_URL}/about/rahim-iyaz#person`;
const linkClass = "font-semibold text-navy underline decoration-navy/30 underline-offset-2 hover:decoration-navy";

// Splits a field entry into a date label (column) and its remaining text, so
// the date is shown once. Dated entries carry `date`; the two year-only
// entries end in ", YYYY" in the source text.
function fieldParts(item) {
  if (item.date) return { label: <time dateTime={item.datetime}>{item.date}</time>, text: item.text.replace(/,\s*$/, "") };
  const m = item.text.match(/^(.*?),\s*((?:19|20)\d\d)$/);
  return m ? { label: m[2], text: m[1] } : { label: "", text: item.text };
}

// PDF p.4 — the four bullets regrouped under Role / Experience / Training
// roles. Same facts, no additions.
export default function RahimIyazPage() {
  // Person node: jobTitle is the visible "Managing Director" (p.4). worksFor
  // points at the homepage's Organization @id. No sameAs / alumniOf, and the
  // CLIENT_CONFIRMATION_REQUIRED qualification string is kept out of schema.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: MD.name,
    jobTitle: MD.role,
    url: `${SITE_URL}/about/rahim-iyaz`,
    image: `${SITE_URL}${MD.portrait.src}`,
    worksFor: { "@id": ORG_ID },
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Rahim Iyaz", href: "/about/rahim-iyaz" }]} />

      <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* order-last on mobile: the H1 and profile lead; portrait follows. */}
        <div className="order-last max-w-sm lg:order-first lg:max-w-none">
          {/* Natural 853x1280 source portrait: intrinsic width/height, no crop. */}
          <Image
            src={MD.portrait.src}
            alt={MD.portrait.alt}
            width={MD.portrait.width}
            height={MD.portrait.height}
            priority
            quality={90}
            sizes="(min-width: 1024px) 420px, 384px"
            className="h-auto w-full rounded-md"
          />
          {/* PDF p.4 signature/title graphic, drawn from its own luminance
              mask (the extracted base layer is a flat fill) — not retyped. */}
          <div
            role="img"
            aria-label={`${MD.name} — ${MD.title}`}
            className="mt-4 aspect-[5/2] w-64"
            style={{
              backgroundImage: "url(/images/source/md/rahim-iyaz-signature-base.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              WebkitMaskImage: "url(/images/source/md/rahim-iyaz-signature-mask.png)",
              maskImage: "url(/images/source/md/rahim-iyaz-signature-mask.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              maskMode: "luminance",
            }}
          />
        </div>

        <div className="max-w-2xl">
          <p className="kicker mb-3 text-brandred">{MD.role}</p>
          <h1 className="h1 text-ink">{MD.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink">{MD_LEAD}</p>

          {/* CLIENT_CONFIRMATION_REQUIRED: the source renders this credential two
              ways (p.4: "PPIBAMI (IIFT), CBLR F-Card" vs the p.60 infographic:
              "FTP-IBAMI (IIFT), F-Card Qualified"). Shown exactly as p.4. */}
          <p className="kicker mt-6 text-navy/70">Qualifications</p>
          <p className="mt-1 text-base font-medium leading-relaxed text-ink">{MD.qualifications}</p>

          <div className="mt-10 border-t-2 border-navy">
            <section aria-labelledby="role" className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h2 id="role" className="font-display text-lg font-bold text-ink">Role</h2>
              <ul className="space-y-1.5 text-base leading-relaxed text-ink/85">
                <li>Managing Director, PORTMATRIX</li>
                <li>Government Licensed Customs Broker</li>
              </ul>
            </section>

            <section aria-labelledby="experience" className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h2 id="experience" className="font-display text-lg font-bold text-ink">Experience</h2>
              <ul className="space-y-3 text-base leading-relaxed text-ink/85">
                <li>Vintage experience in the foreign trade since 1996.</li>
                <li>
                  Worked extensively in the international markets:
                  <ul className="mt-2 grid list-[circle] gap-x-8 pl-5 sm:grid-cols-2">
                    {MD_COUNTRIES.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  Having worked with India&rsquo;s largest banking group State Bank of India in Risk Mitigation
                  Management.
                </li>
              </ul>
            </section>

            <section aria-labelledby="training-roles" className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h2 id="training-roles" className="font-display text-lg font-bold text-ink">Training roles</h2>
              <p className="text-base leading-relaxed text-ink/85">
                Authorised Resource Person in export training for the Govt. of India&ndash;MSME, EDII-TN, TNAPEx,
                FIEO, Alagappa University.
              </p>
            </section>
          </div>

          {/* "In the field": dated, ruled list in the source's own order; each
              entry's date/year moves into the left column. */}
          <section aria-labelledby="in-the-field" className="mt-12">
            <h2 id="in-the-field" className="h3 text-ink">In the field</h2>
            <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
              {MD_IN_THE_FIELD.map((item) => {
                const { label, text } = fieldParts(item);
                return (
                  <li key={item.text + (item.date || "")} className="py-4 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-8">
                    <p className="text-sm font-semibold text-brandred sm:pt-0.5">{label}</p>
                    <p className="mt-1 text-base leading-relaxed text-ink/85 sm:mt-0">
                      {text}
                      {" — "}
                      <Link href={item.link.href} className={linkClass}>
                        {item.link.label}
                      </Link>
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          title="Related"
          items={[
            { title: "About PORTMATRIX", href: "/about" },
            { title: "Training Events", href: "/riit/training-events" },
            { title: "RIIT — Export Training & Research", href: "/riit" },
            { title: "China Import Sourcing", href: "/china-import-sourcing" },
          ]}
        />
      </div>
    </div>
  );
}

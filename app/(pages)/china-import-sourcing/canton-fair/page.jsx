import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import Faq from "@/components/Faq";
import { CANTON_FAIR_PAGE } from "@/lib/china-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "China Canton Fair Services",
  description:
    "Canton Fair is the largest bi-annual China Trade Fair (April & October) in Guangzhou; PORTMATRIX arranges trade fair packages for individuals and groups.",
  path: "/china-import-sourcing/canton-fair",
  image: "/images/source/china/azeez-usa-clients-canton-fair-2025.png",
});

// Genuine, dated Canton Fair evidence — each image's own people/context is
// exactly as printed in the source, none inferred. The two 2015 photos
// (group with Indian clients; booth) are not rendered: the group photo is
// low resolution and the booth photo is redundant.
const GALLERY = [
  {
    src: "/images/source/china/azeez-usa-clients-canton-fair-2025.png",
    width: 750,
    height: 1000,
    alt: "China Incharge Mr. Azeez with USA clients at Canton Fair, 2025",
    caption: "Our China Incharge Mr. Azeez with our USA Clients at Canton Fair, 2025",
  },
  {
    src: "/images/source/china/rahim-iyaz-riaz-malik-canton-fair-2014.png",
    alt: "MD Mr. Rahim Iyaz with Mr. Riaz, MD of King's Group of Companies, and Mr. Malik of Tirunelveli at China Canton Fair, 2014",
    caption: "Our MD Mr. Rahim Iyaz with Mr. Riaz, MD of King's Group of Companies and Mr. Malik of Tirunelveli at China Canton Fair in 2014",
  },
];

// FAQ answers are built from the PDF's own wording only. None of the
// CLIENT_CONFIRMATION_REQUIRED lines (profit guarantee, replacement
// warranty, 12x7 after sales) is used in any answer.
const phaseSummary = (cat) => `Phase ${cat.phase}: ${cat.groups.map((g) => g.name).join("; ")}.`;
const FAQS = [
  {
    // p.22
    q: "When and where is the Canton Fair held?",
    a: "Canton Fair is the largest Bi-annual China Trade Fair (April & October) held in Guangzhou, wherein all the leading Chinese manufacturers would exhibit their products.",
  },
  {
    // pp.23-24
    q: "Which product categories are shown in each phase?",
    a: CANTON_FAIR_PAGE.categories.map(phaseSummary).join(" "),
  },
  {
    // p.26
    q: "What does the Canton Fair package include?",
    a: `${CANTON_FAIR_PAGE.packageInclusions.join("; ")}.`,
  },
  {
    // p.26
    q: "Are packages available for individuals and groups?",
    a: CANTON_FAIR_PAGE.packageIntro,
  },
];

export default function CantonFairPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <PageIntro
        breadcrumb={
          <Breadcrumb items={[{ label: "China Import Sourcing", href: "/china-import-sourcing" }, { label: "Canton Fair", href: "/china-import-sourcing/canton-fair" }]} />
        }
        kicker="Guangzhou · April & October"
        title="China Canton Fair Services"
        intro={CANTON_FAIR_PAGE.intro}
      />

      {/* Evidence strip — documented presence at Canton Fair, 2014 and 2025.
          Each photo at its true ratio; captions as readable text. */}
      <div className="mt-10 grid items-start gap-8 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,17rem)_minmax(0,30rem)] lg:gap-12">
        <figure>
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-hairline bg-white">
            <Image src={GALLERY[0].src} alt={GALLERY[0].alt} fill priority sizes="(min-width: 1024px) 272px, 240px" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-slatey">{GALLERY[0].caption}</figcaption>
        </figure>
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-hairline bg-white">
            <Image src={GALLERY[1].src} alt={GALLERY[1].alt} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-slatey">{GALLERY[1].caption}</figcaption>
        </figure>
      </div>

      {/* Block 1 — dates & place (p.22): at-a-glance key facts */}
      <section aria-labelledby="dates-place" className="mt-14 border-t-2 border-navy pt-8">
        <h2 id="dates-place" className="h3 text-ink">Dates and place</h2>
        <dl className="mt-6 grid divide-y divide-hairline border-y border-hairline sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div className="py-5 sm:pr-8">
            <dt className="kicker text-slatey">When</dt>
            <dd className="mt-1.5 font-display text-2xl font-bold text-ink">April &amp; October <span className="text-base font-medium text-slatey">(Bi-annual)</span></dd>
          </div>
          <div className="py-5 sm:pl-8">
            <dt className="kicker text-slatey">Where</dt>
            <dd className="mt-1.5 font-display text-2xl font-bold text-ink">Guangzhou, China</dd>
          </div>
        </dl>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/85">{CANTON_FAIR_PAGE.introMore}</p>
        <a
          href={CANTON_FAIR_PAGE.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy hover:underline"
        >
          Canton Fair Official Website
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>

      {/* Block 2 — categories by phase (pp.23-24), as a three-column strip.
          Phase labels are the source's own; the source does not define
          "phase", so neither do we. */}
      <section aria-labelledby="categories-by-phase" className="mt-14">
        <h2 id="categories-by-phase" className="h2 text-ink">Categories by phase</h2>
        <ol className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-0">
          {CANTON_FAIR_PAGE.categories.map((cat, i) => (
            <li key={cat.phase} className={`relative border-t-2 border-navy pt-6 ${i > 0 ? "lg:border-l lg:border-l-hairline lg:pl-8" : ""} ${i < 2 ? "lg:pr-8" : ""}`}>
              <span className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-brandred" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold text-ink"><span className="mr-2 text-brandred">{String(cat.phase).padStart(2, "0")}</span>Phase {cat.phase}</h3>
              <dl className="mt-4 divide-y divide-hairline border-y border-hairline">
                {cat.groups.map((g) => (
                  <div key={g.name} className="py-3.5">
                    <dt className="text-base font-semibold text-ink">{g.name}</dt>
                    <dd className="mt-1 text-base leading-relaxed text-slatey">{g.desc}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Block 3 — what the package includes (p.26): checklist */}
        <section aria-labelledby="package-includes" className="border-t-2 border-navy pt-6">
          <h2 id="package-includes" className="h3 text-ink">What the package includes</h2>
          <p className="mt-3 max-w-prose text-base leading-relaxed text-slatey">{CANTON_FAIR_PAGE.packageIntro}</p>
          <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
            {CANTON_FAIR_PAGE.packageInclusions.map((p) => (
              <li key={p} className="flex items-start gap-3 py-3 text-base text-ink/85">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brandred" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* Block 4 — sourcing support (pp.26-27) */}
        <section aria-labelledby="sourcing-support" className="border-t-2 border-navy pt-6">
          <h2 id="sourcing-support" className="h3 text-ink">Personalized services in China</h2>
          {/* CLIENT_CONFIRMATION_REQUIRED: "Minimum 30% profit guaranteed on
              purchase", "Product Replacement Warranty*" and "12x7 after sales
              services in China and India" are rendered here, exactly as
              printed in the source, as plain list items only. */}
          <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
            {CANTON_FAIR_PAGE.personalizedServices.map((p) => (
              <li key={p.text} className="py-3 text-base leading-relaxed text-ink/85">
                {p.text}
                {p.href && (
                  <>
                    {" "}
                    <Link href={p.href} className="font-medium text-navy underline underline-offset-2 hover:text-ink">
                      {p.linkText}
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Faq items={FAQS} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "China Import Sourcing", href: "/china-import-sourcing" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
            { title: "Contact PORTMATRIX", href: "/contact" },
          ]}
        />
      </div>
    </div>
  );
}

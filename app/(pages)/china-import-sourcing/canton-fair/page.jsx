import { Check } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import RelatedServices from "@/components/RelatedServices";
import { CANTON_FAIR_PAGE } from "@/lib/china-data";

export const metadata = {
  title: "China Canton Fair Services",
  description:
    "Canton Fair trade-fair packages: visa and travel support, factory and market visits and category breakdown across Phases 1-3.",
  alternates: { canonical: "/china-import-sourcing/canton-fair" },
  openGraph: {
    title: "China Canton Fair Services — PORTMATRIX",
    description: "Canton Fair is the largest Bi-annual China Trade Fair (April & October) held in Guangzhou. We arrange China Trade Fair packages for individuals and groups.",
    images: ["/images/source/china/azeez-usa-clients-canton-fair-2025.png"],
  },
};

// Genuine, dated Canton Fair evidence spanning 2014-2025 — each image's own
// people/context is exactly as printed in the source, none inferred.
const GALLERY = [
  {
    src: "/images/source/china/azeez-usa-clients-canton-fair-2025.png",
    alt: "China Incharge Mr. Azeez with USA clients at Canton Fair, 2025",
    caption: "Our China Incharge Mr. Azeez with our USA Clients at Canton Fair, 2025",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/source/china/rahim-iyaz-riaz-malik-canton-fair-2014.png",
    alt: "MD Mr. Rahim Iyaz with Mr. Riaz, MD of King's Group of Companies, and Mr. Malik of Tirunelveli at China Canton Fair, 2014",
    caption: "Our MD Mr. Rahim Iyaz with Mr. Riaz, MD of King's Group of Companies and Mr. Malik of Tirunelveli at China Canton Fair in 2014",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/source/china/canton-fair-indian-clients-group-2015.png",
    alt: "Canton Fair group with Indian clients, 2015",
    caption: "Canton Fair group with Indian Clients in 2015",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/source/china/china-sourcing-canton-fair-2015.png",
    alt: "China sourcing at Canton Fair in 2015",
    caption: "China sourcing at Canton Fair in 2015",
    aspect: "aspect-[4/3]",
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
        title="Canton Fair"
        intro={CANTON_FAIR_PAGE.intro}
      />

      {/* Evidence gallery — 11 years of documented presence, 2014-2025 */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {GALLERY.map((img) => (
          <div key={img.src} className={img.aspect === "aspect-[16/9]" ? "sm:col-span-2 lg:col-span-2" : ""}>
            <EvidenceFigure src={img.src} alt={img.alt} caption={img.caption} aspect={img.aspect} />
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="h3 text-ink">Canton Fair Details</h2>
          <div className="mt-5 space-y-8">
            {CANTON_FAIR_PAGE.categories.map((cat) => (
              <div key={cat.phase}>
                <p className="kicker text-brandred">Phase {cat.phase}</p>
                <dl className="mt-3 divide-y divide-hairline border-y border-hairline">
                  {cat.groups.map((g) => (
                    <div key={g.name} className="py-3">
                      <dt className="text-sm font-semibold text-ink">{g.name}</dt>
                      <dd className="mt-1 text-base leading-relaxed text-slatey">{g.desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <a
            href={CANTON_FAIR_PAGE.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-navy hover:underline"
          >
            Canton Fair Official Website ↗
          </a>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="h3 text-ink">China Canton Fair Services</h2>
            <ul className="mt-4 space-y-2.5">
              {CANTON_FAIR_PAGE.packageInclusions.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brandred" />
                  <span className="text-sm text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h3 text-ink">Personalized Services in China</h2>
            <ul className="mt-4 space-y-2.5">
              {CANTON_FAIR_PAGE.personalizedServices.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brandred" />
                  <span className="text-sm text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

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

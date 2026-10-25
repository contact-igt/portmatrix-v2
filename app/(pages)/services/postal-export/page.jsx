import IllustrativeFigure from "@/components/IllustrativeFigure";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { Check } from "lucide-react";
import { POSTAL_EXPORT_PAGE as P } from "@/lib/individual-export-data";
import { buildMetadata } from "@/lib/seo";

// "Aggregator" and the image's "No value limit" are client-confirmation items:
// the page H1 keeps the source's own list title, but the meta title,
// description and JSON-LD name avoid the word.
export const metadata = buildMetadata({
  title: "Postal Export Through Dak Ghar Niryat Kendras",
  description:
    "Under Foreign Trade Policy 2023, Dak Ghar Niryat Kendras enable MSMEs, artisans and e-commerce exporters to export globally through India Post.",
  path: "/services/postal-export",
});

const linkCls = "text-navy underline underline-offset-2 hover:text-brandred";

export default function PostalExportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Postal Export through Dak Ghar Niryat Kendras",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: P.definition,
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        aside={<IllustrativeFigure image="postal-dispatch" className="mx-auto w-full max-w-lg" />}
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Postal Export Aggregator", href: "/services/postal-export" }]} />}
        kicker="Foreign Trade Policy 2023"
        title="Postal Export Aggregator"
        intro={P.definition}
      />
      <p className="mt-4 max-w-prose text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{P.intro}</p>

      {/* The p.64 postal infographic is intentionally not rendered (India Post marks
          imply endorsement; claims inside it are not in the source text). */}

      <div className="mt-12 border-t-2 border-ink">
        {P.groups.map((g, i) => (
          <section key={g.id} aria-labelledby={g.id} className="grid gap-x-10 gap-y-3 border-b border-hairline py-8 sm:grid-cols-[13rem_1fr]">
            <h2 id={g.id} className="flex items-baseline gap-3 font-display text-xl font-semibold leading-snug text-ink">
              <span aria-hidden="true" className="font-display text-sm font-bold tabular-nums text-brandred-600">{String(i + 1).padStart(2, "0")}</span>
              {g.title}
            </h2>
            <div>
              {g.lead && <p className="text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{g.lead}</p>}
              {g.leadList && (
                <ul className="mt-3 grid grid-cols-2 gap-x-6 border-t border-hairline">
                  {g.leadList.map((d) => (
                    <li key={d} className="flex min-h-11 items-center gap-3 border-b border-hairline py-2 text-base font-medium text-ink">
                      <Check className="h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              <ul className={`${g.lead || g.leadList ? "mt-4" : ""} space-y-3`}>
                {g.items.map((item) => (
                  <li key={item} className="max-w-prose text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <p className="mt-8 max-w-prose font-display text-xl font-medium leading-snug text-ink">{P.encouragement}</p>
      <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/85">
        See also{" "}
        <Link href="/services/e-commerce-export" className={linkCls}>E-Commerce Export</Link> and{" "}
        <Link href="/services/freight-forwarding-logistics" className={linkCls}>Freight Forwarding &amp; Logistics</Link>.
      </p>

      <Faq items={P.faqs} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "E-Commerce Export", href: "/services/e-commerce-export" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
          ]}
        />
      </div>
    </div>
  );
}

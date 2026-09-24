import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ProcessFlow from "@/components/ProcessFlow";
import RelatedServices from "@/components/RelatedServices";
import { ECOMMERCE_EXPORT_PAGE as P } from "@/lib/individual-export-data";

export const metadata = {
  title: "E-Commerce Export",
  description: "Cross-border e-commerce export via Amazon Global Selling, eBay, Etsy, Alibaba and Flipkart.",
  alternates: { canonical: "/services/e-commerce-export" },
};

export default function EcommerceExportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Commerce Export",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: P.intro,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "E-Commerce Export", href: "/services/e-commerce-export" }]} />}
        kicker="Sell globally, ship directly"
        title="E-Commerce Export"
        intro={P.intro}
      />
      <p className="mt-4 max-w-3xl text-sm font-medium text-ink">{P.serviceIntro}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="h3 text-ink">Key Features</h2>
          <ul className="mt-3 space-y-1.5">
            {P.keyFeatures.map((f) => (
              <li key={f} className="text-[15px] leading-relaxed text-ink/80">· {f}</li>
            ))}
          </ul>

          <h2 className="h3 mt-8 text-ink">Popular E-Commerce Export Platforms</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {P.platforms.map((p) => (
              <span key={p} className="rounded-full border border-hairline px-3 py-1.5 text-sm font-medium text-ink/80">
                {p}
              </span>
            ))}
          </div>

          <h2 className="h3 mt-8 text-ink">Requirements</h2>
          <ol className="mt-3 space-y-1.5">
            {P.requirements.map((r, i) => (
              <li key={r} className="text-[15px] leading-relaxed text-ink/80">
                {i + 1}. {r}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="h3 text-ink">Process Flow</h2>
          <ProcessFlow steps={P.processFlow} />
        </div>
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-3">
        <div>
          <h2 className="h3 text-ink">Benefits</h2>
          <ul className="mt-3 space-y-1.5">
            {P.benefits.map((b) => (
              <li key={b} className="text-[15px] leading-relaxed text-ink/80">· {b}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h3 text-ink">Government Support</h2>
          <ul className="mt-3 space-y-1.5">
            {P.govSupport.map((g) => (
              <li key={g} className="text-[15px] leading-relaxed text-ink/80">· {g}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h3 text-ink">Major Products Exported</h2>
          <ul className="mt-3 space-y-1.5">
            {P.majorProducts.map((m) => (
              <li key={m} className="text-[15px] leading-relaxed text-ink/80">· {m}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Postal Export Aggregator", href: "/services/postal-export" },
            { title: "EPCG Scheme", href: "/services/epcg" },
            { title: "AEO", href: "/services/aeo" },
          ]}
        />
      </div>
    </div>
  );
}

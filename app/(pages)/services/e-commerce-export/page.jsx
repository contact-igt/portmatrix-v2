import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import HowPortmatrixHelps from "@/components/HowPortmatrixHelps";
import KeyPoints from "@/components/KeyPoints";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { ShoppingCart, Package, Globe, Store } from "lucide-react";
import { ECOMMERCE_EXPORT_PAGE as P } from "@/lib/individual-export-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "E-Commerce Export",
  description:
    "Selling from India to overseas customers online: platforms, requirements, process flow, benefits and support, with PORTMATRIX training.",
  path: "/services/e-commerce-export",
});

const linkCls = "text-navy underline underline-offset-2 hover:text-brandred";
const bulletCls = "list-disc space-y-1.5 pl-5 marker:text-slatey/60";

export default function EcommerceExportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Commerce Export",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: P.intro,
  };

  const featureIcons = [ShoppingCart, Package, Globe, Store];

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "E-Commerce Export", href: "/services/e-commerce-export" }]} />}
        kicker="E-Commerce Export Training"
        title="E-Commerce Export"
        intro={P.intro}
      />

      <HowPortmatrixHelps>{P.serviceIntro}</HowPortmatrixHelps>

      <KeyPoints
        title="Key features"
        items={P.keyFeatures.map((f, i) => ({ icon: featureIcons[i], title: f }))}
      />

      {/* Process flow leads: horizontal numbered line, the page's single tinted band */}
      <section className="-mx-5 mt-14 bg-navy-50/60 px-5 py-12 sm:-mx-8 sm:px-8" aria-labelledby="process-flow">
        <h2 id="process-flow" className="h3 text-ink">E-commerce export process flow</h2>
        <ol className="mt-8 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-8">
          {P.processFlow.map((step, i) => (
            <li key={step} className="flex gap-4 border-t border-navy/20 py-4 sm:flex-col sm:gap-2 sm:border-t-2 sm:border-navy sm:pt-4">
              <span aria-hidden="true" className="w-8 shrink-0 font-display text-2xl font-bold leading-none tabular-nums text-navy sm:w-auto">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base leading-snug text-ink">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/85">
          For dispatch through India Post, see{" "}
          <Link href="/services/postal-export" className={linkCls}>Postal Export</Link>; for wider cargo movement, see{" "}
          <Link href="/services/freight-forwarding-logistics" className={linkCls}>Freight Forwarding &amp; Logistics</Link>.
        </p>
      </section>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <section aria-labelledby="requirements">
          <h2 id="requirements" className="h3 text-ink">Requirements for e-commerce export from India</h2>
          <ol className="mt-5 border-t-2 border-ink">
            {P.requirements.map((r, i) => (
              <li key={r} className="flex gap-5 border-b border-hairline py-4">
                <span aria-hidden="true" className="w-9 shrink-0 font-display text-3xl font-bold leading-none tabular-nums text-navy/30">{i + 1}</span>
                <span className="pt-0.5 text-base leading-relaxed text-ink sm:text-[1.0625rem]">{r}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="platforms">
          <h2 id="platforms" className="h3 text-ink">Popular e-commerce export platforms</h2>
          <ul className="mt-5 divide-y divide-hairline border-y-2 border-t-ink border-b-hairline">
            {P.platforms.map((p) => (
              <li key={p} className="py-3.5 font-display text-lg font-semibold text-ink">{p}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <section aria-labelledby="benefits">
          <h2 id="benefits" className="h3 text-ink">Benefits</h2>
          <ul className="mt-5 divide-y divide-hairline border-y border-t-2 border-b-hairline border-t-ink">
            {P.benefits.map((b) => (
              <li key={b} className="py-3 text-base leading-relaxed text-ink/85">{b}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="government-support">
          <h2 id="government-support" className="h3 text-ink">Government support</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/85">{P.govSupportIntro}</p>
          <ul className="mt-3 divide-y divide-hairline border-y border-t-2 border-b-hairline border-t-ink">
            {P.govSupport.map((g) => (
              <li key={g.text} className="py-3 text-base leading-relaxed text-ink/85">
                {g.href ? (
                  <Link href={g.href} className={linkCls}>{g.text}</Link>
                ) : (
                  g.text
                )}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="major-products" className="sm:col-span-2 lg:col-span-1">
          <h2 id="major-products" className="h3 text-ink">Major products exported through e-commerce</h2>
          <ul className="mt-5 grid divide-y divide-hairline border-y border-t-2 border-b-hairline border-t-ink sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0 sm:border-y-0 sm:border-t-2 lg:grid-cols-1 lg:gap-x-0 lg:divide-y">
            {P.majorProducts.map((m) => (
              <li key={m} className="py-3 text-base leading-relaxed text-ink/85 sm:border-b sm:border-hairline lg:border-b-0">{m}</li>
            ))}
          </ul>
        </section>
      </div>

      <Faq items={P.faqs} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Postal Export Aggregator", href: "/services/postal-export" },
            { title: "EPCG Scheme", href: "/services/epcg" },
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
            { title: "AEO", href: "/services/aeo" },
          ]}
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import KeyPoints from "@/components/KeyPoints";
import Faq from "@/components/Faq";
import RelatedServices from "@/components/RelatedServices";
import { FileCheck, MapPin, Scale, Handshake } from "lucide-react";
import { CUSTOMS_BROKER_PAGE } from "@/lib/trade-services-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Licensed Customs Broker",
  description: "Government-authorised clearing agent acting for importers and exporters in customs clearance, with a Pan India network.",
  path: "/services/licensed-customs-broker",
});

const linkCls = "text-navy underline underline-offset-2 hover:text-brandred";

export default function LicensedCustomsBrokerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Licensed Customs Broker",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    // p.27 "Pan India"
    areaServed: { "@type": "Country", name: "India" },
    description: CUSTOMS_BROKER_PAGE.intro,
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Licensed Customs Broker", href: "/services/licensed-customs-broker" }]} />}
        kicker={CUSTOMS_BROKER_PAGE.tagline}
        title="Licensed Customs Broker"
        intro={CUSTOMS_BROKER_PAGE.intro}
      />

      <KeyPoints
        items={[
          { icon: FileCheck, title: "Authorisation first", text: "We obtain an authorisation to act as your Agent before engagement of our services." },
          { icon: MapPin, title: "All Customs Stations across India", text: "Cleared through our Pan India network." },
          { icon: Scale, title: "Advice on compliance", text: "The Customs Act, The Customs Tariff Act, Foreign Trade Policy and allied provisions." },
          { icon: Handshake, title: "Cooperation with Customs and PGAs", text: "For the speedy clearance of your cargo." },
        ]}
      />

      {/* Regulation 2(d) as a quoted definition — this page's single tinted band */}
      <section className="-mx-5 mt-14 bg-navy-50/60 px-5 py-10 sm:-mx-8 sm:px-8 sm:py-12" aria-labelledby="definition">
        <div className="max-w-3xl">
          <h2 id="definition" className="h3 text-ink">Customs Broker: the Regulation 2(d) definition</h2>
          <blockquote className="relative mt-6 border-l-[3px] border-brandred pl-6 sm:pl-8">
            <p className="font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl sm:leading-snug">{CUSTOMS_BROKER_PAGE.regulationText}</p>
          </blockquote>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="how-we-work">
        <h2 id="how-we-work" className="h3 text-ink">How we work as your Customs Broker</h2>
        <dl className="mt-6 border-t-2 border-ink">
          {CUSTOMS_BROKER_PAGE.howWeWork.map((item) => (
            <div key={item.label} className="grid gap-1.5 border-b border-hairline py-5 sm:grid-cols-[13rem_1fr] sm:gap-10 lg:grid-cols-[16rem_1fr]">
              <dt className="font-display text-lg font-semibold text-ink">{item.label}</dt>
              <dd className="max-w-prose text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{item.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14" aria-labelledby="what-we-file">
        <h2 id="what-we-file" className="h3 text-ink">What we prepare, file and coordinate</h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/85">
          The documents we prepare and file, how we coordinate with the Customs Authorities, and our import and export workflows are set out on{" "}
          <Link href="/services/export-import-clearance" className={linkCls}>Export-Import Clearance</Link>.
        </p>
      </section>

      <Faq items={CUSTOMS_BROKER_PAGE.faqs} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "NRI Baggage Clearance", href: "/services/nri-baggage-clearance" },
            { title: "AEO", href: "/services/aeo" },
            { title: "MOOWR", href: "/services/moowr" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
          ]}
        />
      </div>
    </div>
  );
}

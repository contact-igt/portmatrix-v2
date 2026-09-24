import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import { CheckCircle2 } from "lucide-react";
import { CUSTOMS_BROKER_PAGE } from "@/lib/trade-services-data";

export const metadata = {
  title: "Licensed Customs Broker",
  description:
    "Government-authorised clearing agent under the Customs Brokers Regulations, 2018 — Pan-India network.",
  alternates: { canonical: "/services/licensed-customs-broker" },
};

export default function LicensedCustomsBrokerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Licensed Customs Broker",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
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

      <div className="mt-10 border-l-4 border-brandred bg-paper p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brandred">Regulatory definition</p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{CUSTOMS_BROKER_PAGE.regulationText}</p>
      </div>

      <h2 className="h3 mt-10 text-ink">How We Work?</h2>
      <ul className="mt-5 space-y-3">
        {CUSTOMS_BROKER_PAGE.howWeWork.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
            <span className="text-[15px] leading-relaxed text-ink/85">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "AEO", href: "/services/aeo" },
            { title: "MOOWR", href: "/services/moowr" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
          ]}
        />
      </div>
    </div>
  );
}

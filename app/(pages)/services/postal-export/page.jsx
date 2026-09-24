import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import { Mail } from "lucide-react";
import { POSTAL_EXPORT_PAGE } from "@/lib/individual-export-data";

export const metadata = {
  title: "Postal Export Aggregator",
  description: "Export through Dak Ghar Niryat Kendras under FTP 2023, via India Post.",
  alternates: { canonical: "/services/postal-export" },
};

export default function PostalExportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Postal Export Aggregator",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: POSTAL_EXPORT_PAGE.intro,
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Postal Export Aggregator", href: "/services/postal-export" }]} />}
        kicker="The Foreign Trade Policy (FTP) 2023"
        title="Postal Export Aggregator"
        intro={POSTAL_EXPORT_PAGE.intro}
      />

      <div className="mt-10 divide-y divide-hairline border-y border-hairline">
        {POSTAL_EXPORT_PAGE.points.map((p) => (
          <div key={p} className="flex gap-3 py-4">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brandred" />
            <p className="text-[15px] leading-relaxed text-ink/85">{p}</p>
          </div>
        ))}
      </div>

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

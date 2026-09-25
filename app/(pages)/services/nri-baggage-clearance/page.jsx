import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ComparisonTable from "@/components/ComparisonTable";
import RelatedServices from "@/components/RelatedServices";
import BrandedInfographic from "@/components/BrandedInfographic";
import { AlertTriangle } from "lucide-react";
import { NRI_BAGGAGE_PAGE as P } from "@/lib/individual-export-data";

export const metadata = {
  title: "NRI Baggage Clearance",
  description: "Duty-free baggage allowance advisory — general allowance, jewellery, transfer of residence, currency and pet-import rules.",
  alternates: { canonical: "/services/nri-baggage-clearance" },
};

export default function NriBaggagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NRI Baggage Clearance",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: P.intro,
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "NRI Baggage Clearance", href: "/services/nri-baggage-clearance" }]} />}
        kicker={P.tagline}
        title="NRI Baggage Clearance"
        intro={P.intro}
      />
      <p className="mt-4 text-base font-medium text-ink sm:text-lg">{P.serviceIntro}</p>

      <div className="article-body mt-10 max-w-none">
        <h2 className="h3 text-ink">Baggage Clearance</h2>
        <p>{P.channels}</p>

        <h2 className="h3 mt-8 text-ink">Duty-Free Imports of Personal Effects</h2>
        <p>{P.dutyFreePersonalEffects}</p>
      </div>
      <ComparisonTable caption={P.dutyFreeItemsTable.caption} headers={P.dutyFreeItemsTable.headers} rows={P.dutyFreeItemsTable.rows} />

      <div className="article-body max-w-none">
        <p>{P.reimportNote}</p>
        <h2 className="h3 mt-8 text-ink">General Free Allowance</h2>
        <p>{P.generalFreeAllowanceIntro}</p>
      </div>
      <ComparisonTable caption={P.generalFreeAllowanceTable.caption} headers={P.generalFreeAllowanceTable.headers} rows={P.generalFreeAllowanceTable.rows} />

      <div className="mt-6 space-y-2 text-sm text-ink/80">
        <p>· {P.laptopRule}</p>
        <p>· {P.poolingRule}</p>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-brandred/30 bg-brandred/5 p-4">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brandred" />
        <p className="text-base leading-relaxed text-ink/85">{P.declarationWarning}</p>
      </div>

      <div className="article-body mt-8 max-w-none">
        <h2 className="h3 text-ink">Special allowance for jewellery</h2>
        <p>{P.jewelleryIntro}</p>
      </div>
      <ComparisonTable caption={P.jewelleryTable.caption} headers={P.jewelleryTable.headers} rows={P.jewelleryTable.rows} />

      <div className="article-body mt-8 max-w-none">
        <h2 className="h3 text-ink">Transfer of Residence</h2>
        <p>{P.transferOfResidenceIntro}</p>
      </div>
      <ComparisonTable caption={P.torIndianTable.caption} headers={P.torIndianTable.headers} rows={P.torIndianTable.rows} />
      <ComparisonTable caption={P.torForeignerTable.caption} headers={P.torForeignerTable.headers} rows={P.torForeignerTable.rows} />

      <p className="mt-6 text-base leading-relaxed text-slatey">{P.annexureIntro}</p>
      <ComparisonTable caption={P.annexureTable.caption} headers={P.annexureTable.headers} rows={P.annexureTable.rows} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {P.otherRules.map((r) => (
          <div key={r.title}>
            <h3 className="h3 text-ink">{r.title}</h3>
            <p className="mt-1.5 text-base leading-relaxed text-slatey">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* PDF p.60 baggage-allowance infographic — old logo covered by V6.
          CLIENT_CONFIRMATION_REQUIRED: its MD credential line differs from p.4. */}
      <BrandedInfographic
        src="/images/source/customs/baggage-allowance-infographic.png"
        width={1536}
        height={1024}
        logoBox={[42, 33, 600, 112]}
        patchBg="#fafcfd"
        alt="PORTMATRIX NRI baggage allowance infographic"
        caption="NRI Baggage Clearance — source infographic"
        minWidth={640}
        className="mt-12 max-w-4xl"
      />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Licensed Customs Broker", href: "/services/licensed-customs-broker" },
            { title: "Contact PORTMATRIX", href: "/contact" },
          ]}
        />
      </div>
    </div>
  );
}

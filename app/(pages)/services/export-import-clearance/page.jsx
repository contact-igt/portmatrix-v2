import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import ProcessFlow from "@/components/ProcessFlow";
import RelatedServices from "@/components/RelatedServices";
import { EXIM_CLEARANCE_PAGE } from "@/lib/trade-services-data";

export const metadata = {
  title: "Export-Import Clearance",
  description:
    "Documentation, duty & tax calculation, port coordination and full import/export workflows with compulsory-compliance-requirement discipline.",
  alternates: { canonical: "/services/export-import-clearance" },
};

export default function ExportImportClearancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Export Import Clearance",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: EXIM_CLEARANCE_PAGE.serviceIntro,
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Export Import Clearance", href: "/services/export-import-clearance" }]} />}
        kicker={EXIM_CLEARANCE_PAGE.tagline}
        title="Export-Import Clearance"
        intro={EXIM_CLEARANCE_PAGE.intro}
      />
      <p className="mt-4 max-w-3xl text-[15px] font-medium text-ink">{EXIM_CLEARANCE_PAGE.serviceIntro}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-x-16">
        {EXIM_CLEARANCE_PAGE.sections.map((section) => (
          <div key={section.title}>
            <h2 className="h3 text-ink">{section.title}</h2>
            <p className="mt-2 text-sm text-slatey">{section.intro}</p>
            <ul className="mt-3 space-y-1.5">
              {section.items.map((item) => (
                <li key={item} className="text-[15px] leading-relaxed text-ink/80">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Genuine operational evidence — same photos used on the homepage,
          in their original Export-Import Clearance context. */}
      <div className="mt-14 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-2">
        <div>
          <EvidenceFigure
            src="/images/source/customs/hotel-supplies-inspection-netherlands-2024.png"
            alt="Product inspection of a hotel supplies shipment to the Netherlands, 2024"
            caption="Product inspection of Hotel supplies shipment to Netherlands in 2024"
          />
          <div className="mt-4">
            <h3 className="h3 text-ink">{EXIM_CLEARANCE_PAGE.importWorkflow.title}</h3>
            <p className="mt-1 text-sm text-slatey">{EXIM_CLEARANCE_PAGE.importWorkflow.scenario}</p>
            <ProcessFlow steps={EXIM_CLEARANCE_PAGE.importWorkflow.steps} />
          </div>
        </div>
        <div>
          <EvidenceFigure
            src="/images/source/customs/export-shipment-inspection-usa-2025.png"
            alt="Inspection of an export shipment to the USA, 2025"
            caption="Inspection of export shipment to USA in 2025"
          />
          <div className="mt-4">
            <h3 className="h3 text-ink">{EXIM_CLEARANCE_PAGE.exportWorkflow.title}</h3>
            <ProcessFlow steps={EXIM_CLEARANCE_PAGE.exportWorkflow.steps} />
          </div>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "Licensed Customs Broker", href: "/services/licensed-customs-broker" },
            { title: "AEO", href: "/services/aeo" },
            { title: "MOOWR", href: "/services/moowr" },
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
          ]}
        />
      </div>
    </div>
  );
}

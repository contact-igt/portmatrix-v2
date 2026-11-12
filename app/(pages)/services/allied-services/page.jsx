import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import IllustrativeFigure from "@/components/IllustrativeFigure";
import RelatedServices from "@/components/RelatedServices";
import RahimSignature from "@/components/RahimSignature";
import Image from "next/image";
import { Phone } from "lucide-react";
import { ALLIED_SERVICES, MD } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Allied Services",
  description: "EXIM Company Setup, EXIM Compliance & Consulting, and EXIM Value Added Services.",
  path: "/services/allied-services",
});

export default function AlliedServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <PageIntro
        asideAlign="center"
        aside={<IllustrativeFigure image="allied-services" className="mx-auto w-full max-w-lg" />}
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Allied Services", href: "/services/allied-services" }]} />}
        kicker="Service 18"
        title="Allied Services"
        intro="EXIM Company Setup, EXIM Compliance & Consulting, and EXIM Value Added Services."
      />

      <div className="mt-12 border-t-2 border-ink">
        {ALLIED_SERVICES.groups.map((group, index) => (
          <section key={group.title} aria-labelledby={`allied-${index}`} className="grid gap-5 border-b border-hairline py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10">
            <h2 id={`allied-${index}`} className="font-display text-xl font-semibold leading-snug text-ink">{group.title}</h2>
            <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
      </div>

      <section aria-labelledby="md-appointment" className="mt-14 grid overflow-hidden rounded-2xl bg-navy text-white sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <Image
          src={MD.portrait.src}
          width={MD.portrait.width}
          height={MD.portrait.height}
          alt={MD.portrait.alt}
          sizes="(min-width: 640px) 320px, 100vw"
          className="h-auto max-h-96 w-full object-cover object-top sm:h-full sm:max-h-none"
        />
        <div className="self-center px-6 py-9 sm:p-9 lg:p-12">
          <div className="flex flex-col items-start gap-2">
            <RahimSignature variant="white" className="max-w-[14rem] -translate-x-[6.45%] sm:max-w-[18rem]" sizes="(min-width: 640px) 288px, 224px" />
            <p className="text-sm font-medium text-white/75">{MD.role}</p>
          </div>
          <h2 id="md-appointment" className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">Arrange a meeting with our Managing Director</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">Discuss your EXIM company setup, compliance or consulting needs with Mr. {MD.name}.</p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">F-Card qualified Customs Broker with experience in foreign trade since 1996.</p>
          <p className="mt-6 text-sm text-white/75">For appointments, call</p>
          <a href="tel:+919444668816" className="mt-1 inline-block text-2xl font-semibold tabular-nums underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">9444 6688 16</a>
          <div className="mt-6">
            <a href="tel:+919444668816" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-base font-semibold text-navy transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              Call to book a meeting
            </a>
          </div>
        </div>
      </section>

      <div className="mt-14">
        <RelatedServices items={[
          { title: "MSME Export Handholding", href: "/services/export-handholding" },
          { title: "Export Import Clearance", href: "/services/export-import-clearance" },
          { title: "Postal Export Aggregator", href: "/services/postal-export" },
        ]} />
      </div>
    </div>
  );
}

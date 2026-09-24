import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import { SERVICES, SERVICE_GROUPS } from "@/lib/content";

export const metadata = {
  title: "Services — Customs Broking & Trade Compliance",
  alternates: { canonical: "/services" },
  description:
    "17 core services from customs broking and export handholding to DGFT schemes (MOOWR, EPCG, SEZ, FTWZ, AEO), insurance, logistics and e-commerce export.",
};

// Maps a group's item back to its full SERVICES entry for the description —
// group data only carries title+href, description stays single-sourced in
// lib/content.js so the two never drift apart.
function findService(href) {
  return SERVICES.find((s) => s.href === href || (href === "/riit" && s.n === 2));
}

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }]} />}
        kicker={`${SERVICES.length} core services`}
        title="Everything between the factory and the final mile"
        intro="One licensed partner for clearance, sourcing, warehousing, insurance and trade consultancy — grouped below the way exporters actually need them."
      />

      <EvidenceFigure
        src="/images/source/branding/portmatrix-services-overview-infographic.png"
        alt="PORTMATRIX services overview"
        caption="PORTMATRIX services overview"
        variant="infographic"
        sizes="(min-width: 1024px) 1200px, 100vw"
        className="mt-10"
      />

      <div className="mt-10 space-y-12">
        {SERVICE_GROUPS.map((group) => (
          <div key={group.label}>
            <h2 className="h2 text-ink">{group.label}</h2>
            <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
              {group.items.map((item) => {
                const svc = findService(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col justify-between gap-4 bg-white p-6 transition-colors hover:bg-navy-50"
                  >
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-navy">
                        {item.title}
                      </h3>
                      {svc && <p className="mt-2 text-sm leading-relaxed text-slatey">{svc.desc}</p>}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

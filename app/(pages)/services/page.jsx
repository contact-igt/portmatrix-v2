import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import BrandedInfographic from "@/components/BrandedInfographic";
import { SERVICES, SERVICE_GROUPS, ALLIED_SERVICES } from "@/lib/content";

export const metadata = {
  title: "Core Services",
  alternates: { canonical: "/services" },
  description:
    "PORTMATRIX Core Services — export handholding, customs broking, China import sourcing, schemes (MOOWR, Advance Authorisation, EPCG, SEZ, FTWZ, EOU, AEO), insurance, logistics and e-commerce export.",
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
        title="Core Services"
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
                      {svc && <p className="mt-2 text-base leading-relaxed text-slatey">{svc.desc}</p>}
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

      {/* PDF pp.85–86 — Allied Services, verbatim lists */}
      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="h2 text-ink">Allied Services</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {ALLIED_SERVICES.groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-lg font-semibold text-ink">{g.title}</h3>
              <ul className="mt-3 space-y-2 border-t-2 border-navy pt-3 text-base leading-relaxed text-ink/85">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Target Audience</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-base text-ink/85">
              {ALLIED_SERVICES.targetAudience.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Key Strengths</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-ink/85">
              {ALLIED_SERVICES.keyStrengths.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PDF p.2 services overview infographic — old logo covered by V6 */}
      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="h3 text-ink">Services overview</h2>
        <BrandedInfographic
          src="/images/source/branding/portmatrix-services-overview-infographic.png"
          width={1024}
          height={1536}
          logoBox={[33, 33, 444, 81]}
          // sampled source colours (sky gradient at the right end)
          edgeTop={["#fefefd", "#feffff", "#fefefe", "#fefefe", "#fefefd", "#ffffff", "#fefefd", "#fefefe", "#fcfdfe", "#ebf5fd", "#d3ebfd"]}
          edgeBottom={["#ffffff", "#fcfcfc", "#fefefd", "#fffffe", "#fcfdfe", "#f9fbfe", "#f6fafe", "#f9fcfe", "#fdfdfe", "#f3f9fd", "#def1fd"]}
          alt="PORTMATRIX services overview infographic"
          caption="PORTMATRIX services overview — source infographic"
          minWidth={0}
          className="mt-6 max-w-lg"
        />
      </section>
    </div>
  );
}

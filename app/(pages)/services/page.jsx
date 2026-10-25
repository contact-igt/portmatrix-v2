import IllustrativeFigure from "@/components/IllustrativeFigure";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import { SERVICES, SERVICE_GROUPS, ALLIED_SERVICES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Core Services — Customs Broking & Export Handholding",
  description:
    "PORTMATRIX's 17 core services: export handholding, customs broking, China import sourcing, RIIT training, clearance, logistics and trade schemes.",
  path: "/services",
});

// Maps a group's item back to its full SERVICES entry for the description —
// group data only carries title+href, description stays single-sourced in
// lib/content.js so the two never drift apart.
function findService(href) {
  return SERVICES.find((s) => s.href === href || (href === "/riit" && s.n === 2));
}

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      {/* Intro: built from PDF p.3 (supports exporters and importers with
          Customs, DGFT and international trade procedures) and the Core
          Services list on pp.4–7. No new facts. */}
      <PageIntro
        aside={<IllustrativeFigure image="trade-services-overview" className="mx-auto w-full max-w-lg" />}
        breadcrumb={<Breadcrumb items={[{ label: "Services", href: "/services" }]} />}
        kicker={`${SERVICES.length} core services`}
        title="Core Services"
        intro={`PORTMATRIX supports exporters and importers with Customs, DGFT and international trade procedures. Its ${SERVICES.length} core services run from MSME export handholding and customs broking to China import sourcing, RIIT training, trade schemes and logistics.`}
      />

      {/* Services index: four groups, each a ruled list carrying the source's
          own service numbers. Group labels sit in a left column from md up. */}
      <div className="mt-12 border-t-2 border-ink sm:mt-14">
        {SERVICE_GROUPS.map((group, gi) => (
          <section
            key={group.label}
            aria-labelledby={`group-${gi}`}
            className="grid gap-x-10 border-b border-hairline py-8 md:grid-cols-[15rem_1fr] md:py-10 lg:grid-cols-[18rem_1fr]"
          >
            <h2 id={`group-${gi}`} className="h3 text-ink md:sticky md:top-24 md:self-start">
              {group.label}
            </h2>
            <ul className="mt-5 divide-y divide-hairline border-t border-hairline md:mt-0 md:border-t-0">
              {group.items.map((item, ii) => {
                const svc = findService(item.href);
                return (
                  <li key={item.href} className={ii === 0 ? "md:-mt-3" : ""}>
                    <Link
                      href={item.href}
                      className="group flex min-h-11 gap-4 py-4 transition-colors hover:bg-white sm:gap-6 sm:px-3"
                    >
                      <span className="w-8 shrink-0 pt-0.5 font-display text-lg font-semibold tabular-nums text-brandred-600">
                        {svc ? String(svc.n).padStart(2, "0") : ""}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-lg font-semibold text-ink transition-colors group-hover:text-navy sm:text-xl">
                          {item.title}
                        </span>
                        {svc && <span className="mt-1 block max-w-prose text-base leading-relaxed text-slatey">{svc.desc}</span>}
                      </span>
                      <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-navy/40 transition-colors group-hover:text-navy" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {/* PDF p.86 — Target Audience and Key Strengths, verbatim lists.
          This is the page's single tinted band. */}
      <div className="-mx-5 mt-14 bg-navy-50/60 px-5 py-12 sm:-mx-8 sm:px-8 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <section aria-labelledby="who-we-serve">
            <h2 id="who-we-serve" className="h3 text-ink">Who we serve</h2>
            <ol className="mt-5 divide-y divide-navy/10 border-y border-navy/10">
              {ALLIED_SERVICES.targetAudience.map((t, i) => (
                <li key={t} className="flex gap-4 py-3.5 text-base leading-relaxed text-ink">
                  <span aria-hidden="true" className="w-7 shrink-0 font-display font-semibold tabular-nums text-navy">{String(i + 1).padStart(2, "0")}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </section>
          <section aria-labelledby="key-strengths">
            <h2 id="key-strengths" className="h3 text-ink">Key strengths</h2>
            <ul className="mt-5 divide-y divide-navy/10 border-y border-navy/10">
              {ALLIED_SERVICES.keyStrengths.map((k) => (
                <li key={k} className="flex gap-3 py-3.5 text-base leading-relaxed text-ink">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* PDF pp.85–86 — Allied Services, verbatim lists */}
      <section className="mt-14" aria-labelledby="allied-services">
        <h2 id="allied-services" className="h3 text-ink">Allied Services</h2>
        <div className="mt-6 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {ALLIED_SERVICES.groups.map((g) => (
            <div key={g.title} className="border-t-2 border-ink pt-4">
              <h3 className="font-display text-lg font-semibold text-ink">{g.title}</h3>
              <ul className="mt-3 divide-y divide-hairline text-base leading-relaxed text-ink/85">
                {g.items.map((i) => (
                  <li key={i} className="py-2">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

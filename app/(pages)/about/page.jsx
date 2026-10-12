import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Check,
  Compass,
  FileText,
  Gavel,
  GraduationCap,
  Hash,
  LineChart,
  Package,
  Radar,
  Scale,
  Search,
  ShieldCheck,
  Stamp,
  Target,
  Truck,
  UserRound,
  Briefcase,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import TradeNetworkVisual from "@/components/TradeNetworkVisual";
import { MISSION_TAGLINE_DISPLAY, ALLIED_SERVICES, MD, RIIT, CHINA } from "@/lib/content";
import { CHINA_PAGE } from "@/lib/china-data";
import { RIIT_PARTNERS, RIIT_PARTNERS_LEAD } from "@/lib/riit-data";
import {
  ABOUT_PAGE,
  CORE_STRENGTH_CHAIN,
  ABOUT_SCOPE_CLUSTERS,
  ABOUT_JOURNEY,
  MD_COUNTRIES,
} from "@/lib/about-data";
import { buildMetadata } from "@/lib/seo";

// absoluteTitle: the title already names the brand, so the "| PORTMATRIX"
// suffix is not appended.
export const metadata = buildMetadata({
  title: "About PORTMATRIX — Customs Broking and Export Handholding",
  absoluteTitle: true,
  description:
    "About PORTMATRIX Logistics Pvt. Ltd.: customs broking and end-to-end export handholding, EXIM market intelligence, and its allied institute RIIT.",
  path: "/about",
});

const linkClass = "font-semibold text-navy underline decoration-navy/30 underline-offset-2 hover:decoration-navy";
const sectionRule = "mt-16 border-t-2 border-ink pt-8 sm:mt-20";

// Icons are visual aids only (aria-hidden); they add no meaning.
const CHAIN_ICONS = {
  package: Package,
  hash: Hash,
  scale: Scale,
  target: Target,
  file: FileText,
  shield: ShieldCheck,
  stamp: Stamp,
  truck: Truck,
  banknote: Banknote,
};
const CLUSTER_ICONS = { gavel: Gavel, chart: LineChart, radar: Radar, compass: Compass };

const history = CHINA.images.history;
const mou = RIIT.featured.find((f) => f.src.includes("alagappa"));
const qualifications = MD.qualifications.split(", ");

const MD_FACTS = [
  {
    id: "md-quals",
    label: "Qualifications",
    // CLIENT_CONFIRMATION_REQUIRED: p.4 string, see lib/content.js (MD.qualifications).
    body: (
      <ul role="list" className="flex flex-wrap gap-x-5 gap-y-1.5">
        {qualifications.map((q) => (
          <li key={q} className="font-display text-lg font-semibold text-ink">{q}</li>
        ))}
      </ul>
    ),
  },
  {
    id: "md-profile",
    label: "Profile",
    body: (
      <ul role="list" className="space-y-1.5 text-base leading-relaxed text-ink/90 sm:text-[1.0625rem]">
        <li>Government Licensed Customs Broker</li>
        <li>Experience in the foreign trade since 1996</li>
      </ul>
    ),
  },
  {
    id: "md-markets",
    label: "International-market exposure",
    body: (
      <ul role="list" className="grid gap-x-6 gap-y-1.5 text-base text-ink/90 sm:grid-cols-3 sm:text-[1.0625rem]">
        {MD_COUNTRIES.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    ),
  },
  {
    id: "md-experience",
    label: "Experience",
    body: (
      <p className="text-base leading-relaxed text-ink/90 sm:text-[1.0625rem]">
        India&rsquo;s largest banking group State Bank of India &mdash; Risk Mitigation Management
      </p>
    ),
  },
  {
    id: "md-resource",
    label: "Authorised Resource Person in export training for",
    body: (
      <ul role="list" className="grid gap-x-6 gap-y-1.5 text-base text-ink/90 sm:grid-cols-2 sm:text-[1.0625rem]">
        {["Govt. of India–MSME", "EDII-TN", "TNAPEx", "FIEO", "Alagappa University"].map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      {/* 1 — hero: p.3 defining sentence + one decorative (non-documentary) visual */}
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "About", href: "/about" }]} />}
        title="About PORTMATRIX"
        intro={ABOUT_PAGE.intro}
        aside={<TradeNetworkVisual className="mx-auto h-auto w-full max-w-[22rem] lg:ml-auto lg:mr-0 lg:max-w-[27rem]" />}
      />
      {/* Slogan = PDF p.3 emphasised line. CLIENT_CONFIRMATION_REQUIRED: the V6
          logo strapline reads "Ease of doing EXIM"; p.3 reads "Excellence in
          EXIM Compliance". Kept as the PDF text. */}
      <p className="mt-8 max-w-3xl border-l-2 border-brandred pl-4 font-display text-lg font-semibold text-navy">
        {MISSION_TAGLINE_DISPLAY}
      </p>

      {/* 2 — what we do: the p.3 core-strength sequence */}
      <section id="what-we-do" aria-labelledby="what-we-do-h" className={`${sectionRule} grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]`}>
        <div>
          <h2 id="what-we-do-h" className="h2 text-ink">What we do: End-to-End Export Handholding</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slatey sm:text-[1.0625rem]">
            Our core strength is Export Handholding, in this order:
          </p>
          <p className="mt-5">
            <Link href="/services/export-handholding" className="group inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy">
              <span className="border-b border-navy/30 pb-0.5 group-hover:border-navy">MSME Export Handholding</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
        <ol role="list" className="grid sm:grid-cols-2 sm:gap-x-8 min-[1320px]:grid-cols-3">
          {CORE_STRENGTH_CHAIN.map((step, i) => {
            const Icon = CHAIN_ICONS[step.icon];
            return (
              <li key={step.label} className="flex items-center gap-4 border-t border-hairline py-5">
                <span className="w-7 shrink-0 font-display text-sm font-bold tabular-nums text-brandred-600" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-6 w-6 shrink-0 text-navy" strokeWidth={1.6} aria-hidden="true" />
                <span className="item-title text-ink">{step.label}</span>
              </li>
            );
          })}
        </ol>
      </section>

      {/* 3 — the rest of p.3 "We also provide", all ten items, four clusters */}
      <section id="beyond" aria-labelledby="beyond-h" className={sectionRule}>
        <h2 id="beyond-h" className="h2 max-w-3xl text-ink">Beyond customs and logistics: advisory, analytics and strategy</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slatey sm:text-[1.0625rem]">We also provide:</p>
        <div className="mt-6 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {ABOUT_SCOPE_CLUSTERS.map((c) => {
            const Icon = CLUSTER_ICONS[c.icon];
            return (
              <section key={c.title} aria-labelledby={`cluster-${c.icon}`}>
                <div className="flex items-center gap-3 border-t-2 border-navy pt-4">
                  <Icon className="h-6 w-6 shrink-0 text-navy" strokeWidth={1.6} aria-hidden="true" />
                  <h3 id={`cluster-${c.icon}`} className="item-title text-ink">{c.title}</h3>
                </div>
                <ul role="list" className="mt-2 divide-y divide-hairline">
                  {c.items.map((it) => (
                    <li key={it} className="py-3 text-base leading-snug text-ink/90">{it}</li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>

      {/* p.86 — kept from the previous About page so no source fact is lost */}
      <section aria-label="Who we serve and key strengths" className="mt-16 grid gap-x-16 gap-y-10 border-t border-hairline pt-10 md:grid-cols-2">
        <div>
          <h2 className="h3 text-ink">Who we serve</h2>
          <ul role="list" className="mt-4 divide-y divide-hairline border-y border-hairline">
            {ALLIED_SERVICES.targetAudience.map((t) => (
              <li key={t} className="flex gap-3 py-3 text-base text-ink/90">
                <UserRound className="mt-0.5 h-5 w-5 shrink-0 text-navy" strokeWidth={1.6} aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h3 text-ink">Key strengths</h2>
          <ul role="list" className="mt-4 divide-y divide-hairline border-y border-hairline">
            {ALLIED_SERVICES.keyStrengths.map((k) => (
              <li key={k} className="flex gap-3 py-3 text-base text-ink/90">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-navy" strokeWidth={2} aria-hidden="true" />
                {k}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — journey: dated, subject-attributed statements from the PDF.
          1974 = the late Founder's Hong Kong trade; 1996 = the Managing
          Director's foreign-trade experience. Neither is a company founding
          year (the source gives none). */}
      <section id="journey" aria-labelledby="journey-h" className={sectionRule}>
        <h2 id="journey-h" className="h2 text-ink">Our journey</h2>
        <ol role="list" className="mt-10 border-l-2 border-hairline">
          {ABOUT_JOURNEY.map((e) => {
            const head = (
              <div>
                <p className="font-display text-4xl font-bold leading-none tracking-tight text-navy sm:text-5xl">{e.year}</p>
                <p className="item-title mt-3 max-w-sm text-ink">{e.label}</p>
              </div>
            );
            const items = (
              <ul role="list" className={`space-y-4 ${e.figure ? "mt-6" : ""}`}>
                {e.items.map((it) => (
                  <li key={it.text} className="max-w-prose text-base leading-relaxed text-ink/90 sm:text-[1.0625rem]">
                    {it.date && (
                      <time dateTime={it.date} className="mr-2 text-[0.9375rem] font-semibold text-brandred-600">
                        {it.display}
                      </time>
                    )}
                    {it.text}
                    {it.link && (
                      <>
                        {" "}
                        <Link href={it.link.href} className={linkClass}>
                          {it.link.label}
                        </Link>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            );
            return (
              <li key={e.year} className="relative pb-12 pl-6 last:pb-0 sm:pl-10">
                <span className="absolute -left-[7px] top-3 h-3 w-3 rounded-full bg-brandred" aria-hidden="true" />
                {e.figure === "history" ? (
                  <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
                    <div>
                      {head}
                      {items}
                    </div>
                    <figure>
                      <Image
                        src={history.src}
                        alt={history.alt}
                        width={history.width}
                        height={history.height}
                        sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw"
                        className="h-auto w-full border border-hairline bg-white"
                      />
                      <figcaption className="caption mt-3 max-w-xl leading-relaxed text-slatey">{CHINA_PAGE.founderPhotoCaption}</figcaption>
                    </figure>
                  </div>
                ) : (
                  <div className="grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                    {head}
                    {items}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
        <p className="mt-8">
          <Link href="/riit/training-events" className="group inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy">
            <span className="border-b border-navy/30 pb-0.5 group-hover:border-navy">RIIT training events archive</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </section>

      {/* 5 — leadership: p.4, source portrait at its natural 2:3 ratio */}
      <section id="leadership" aria-labelledby="leadership-h" className="band">
        <h2 id="leadership-h" className="h2 text-ink">Leadership</h2>
        <div className="mt-8 grid gap-x-14 gap-y-8 lg:grid-cols-[auto_minmax(0,1fr)]">
          <figure className="w-full max-w-[16.25rem] lg:w-[16.25rem]">
            <Image
              src={MD.portrait.src}
              alt={MD.portrait.alt}
              width={MD.portrait.width}
              height={MD.portrait.height}
              sizes="260px"
              quality={90}
              className="h-auto w-full rounded-md"
            />
          </figure>
          <div className="min-w-0">
            <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">Mr. {MD.name}</h3>
            <p className="mt-1 flex items-center gap-2 text-lg text-slatey">
              <Briefcase className="h-5 w-5 text-navy" strokeWidth={1.6} aria-hidden="true" />
              {MD.role}
            </p>
            <dl className="mt-6 border-t-2 border-navy">
              {MD_FACTS.map((f) => (
                <div key={f.id} className="grid gap-x-8 gap-y-2 border-b border-hairline py-4 sm:grid-cols-[11rem_minmax(0,1fr)]">
                  <dt className="text-[0.9375rem] font-semibold leading-snug text-slatey">{f.label}</dt>
                  <dd>{f.body}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5">
              <Link href="/about/rahim-iyaz" className="group inline-flex min-h-11 items-center gap-2 font-display text-lg font-semibold text-navy">
                <span className="border-b border-navy/30 pb-0.5 group-hover:border-navy">Full profile of {MD.name}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 6 + 7 — RIIT (allied concern) and its export training partners */}
      <section id="riit" aria-labelledby="riit-h">
        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <Image
              src="/images/source/branding/riit-logo.png"
              width={412}
              height={109}
              alt="Regional Institute of International Trade (RIIT) logo"
              className="mb-6 h-12 w-auto"
            />
            <h2 id="riit-h" className="h2 text-ink">Regional Institute of International Trade (RIIT)</h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink/85">{ABOUT_PAGE.riit}</p>
            <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              <div>
                <p className="kicker text-slatey">Supports</p>
                <ul role="list" className="mt-2 divide-y divide-hairline border-y border-hairline">
                  {["Entrepreneurs", "Professionals", "Students"].map((s) => (
                    <li key={s} className="flex items-center gap-3 py-3 text-base text-ink">
                      <GraduationCap className="h-5 w-5 shrink-0 text-navy" strokeWidth={1.6} aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="kicker text-slatey">Through</p>
                <ul role="list" className="mt-2 divide-y divide-hairline border-y border-hairline">
                  {[
                    { t: "International Trade Training", i: GraduationCap },
                    { t: "Research", i: Search },
                    { t: "Consultancy", i: Compass },
                  ].map(({ t, i: I }) => (
                    <li key={t} className="flex items-center gap-3 py-3 text-base text-ink">
                      <I className="h-5 w-5 shrink-0 text-navy" strokeWidth={1.6} aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 flex flex-wrap gap-x-6">
              <Link href="/riit" className="group inline-flex min-h-11 items-center gap-2 font-display text-lg font-semibold text-navy">
                <span className="border-b border-navy/30 pb-0.5 group-hover:border-navy">Explore RIIT</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/riit/courses" className={`inline-flex min-h-11 items-center ${linkClass}`}>Courses and certificate programme</Link>
            </p>
          </div>
          {mou && (
            <figure className="lg:self-end">
              <Image
                src={mou.src}
                alt={mou.alt}
                width={mou.width}
                height={mou.height}
                sizes="(min-width: 1024px) 480px, 100vw"
                className="h-auto w-full border border-hairline bg-white"
              />
              <figcaption className="caption mt-3 leading-relaxed text-slatey">{mou.caption}</figcaption>
            </figure>
          )}
        </div>

        {/* Text only: the relationship exactly as the source states it (p.5-6).
            CLIENT_CONFIRMATION_REQUIRED: the Ministry of MSME phrase is ambiguous. */}
        <div className="mt-12 grid gap-x-16 gap-y-4 border-t border-hairline pt-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <h3 className="item-title text-ink">{RIIT_PARTNERS_LEAD}</h3>
          <ul role="list" className="grid gap-x-8 sm:grid-cols-2">
            {RIIT_PARTNERS.map((p) => (
              <li key={p} className="border-b border-hairline py-3 text-base text-ink/90">{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 — closing: neutral links + the registered office as printed (p.86-87) */}
      <section aria-labelledby="explore-h" className={sectionRule}>
        <h2 id="explore-h" className="h3 text-ink">Explore PORTMATRIX</h2>
        <ul role="list" className="mt-5 divide-y divide-hairline border-y border-hairline">
          {[
            { label: "Explore our services", href: "/services" },
            { label: "Export Handholding", href: "/services/export-handholding" },
            { label: "China Import Sourcing", href: "/china-import-sourcing" },
            { label: "Contact PORTMATRIX", href: "/contact" },
          ].map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group flex min-h-14 items-center justify-between gap-4 py-3 font-display text-xl font-semibold text-ink hover:text-navy">
                {l.label}
                <ArrowRight className="h-5 w-5 shrink-0 text-navy transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-slatey">
          Registered Office: PORTMATRIX Logistics Pvt. Ltd., Chennai, Tamil Nadu, India.{" "}
          <Link href="/contact" className={linkClass}>
            Contact details
          </Link>
        </p>
      </section>
    </div>
  );
}

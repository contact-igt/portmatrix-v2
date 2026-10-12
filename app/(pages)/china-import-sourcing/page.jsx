import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Container,
  Handshake,
  Languages,
  PackageCheck,
  Plane,
  ReceiptText,
  SearchCheck,
  ShieldCheck,
  Stamp,
  Store,
  Truck,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import PageNav from "@/components/PageNav";
import ProcessFlow from "@/components/ProcessFlow";
import StatStrip from "@/components/StatStrip";
import RelatedServices from "@/components/RelatedServices";
import Faq from "@/components/Faq";
import { CHINA } from "@/lib/content";
import { CHINA_PAGE as P } from "@/lib/china-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "China Import Sourcing",
  description:
    "PORTMATRIX facilitates end to end import assistance to source, negotiate, quality control, inspect and deliver goods from China.",
  path: "/china-import-sourcing",
  image: CHINA.images.history.src,
});

// FAQ answers use the PDF's own wording (pp.19-22). The "30% - 40% minimum"
// sentence and the undated market statistics are deliberately not used here.
const FAQS = [
  {
    // pp.19-20
    q: "What China import support does PORTMATRIX provide?",
    a: "We facilitate end to end import assistance to source, negotiate, quality control, inspect and deliver the goods from China. The support listed includes permanent Chinese speaking staff, factory inspection, hassle free FCL / LCL cargo delivery, door to door delivery from China, utmost transparency with agreed service charge, Canton Fair arrangements, and China visa and ticketing.",
  },
  {
    // pp.19, 21-22
    q: "Can PORTMATRIX assist with supplier sourcing and factory inspection?",
    a: "Yes. Factory inspection is part of the support listed. On sourcing, we help you to identify your products and negotiate with the right manufacturers with the help of our local intelligence cell in China. Once the ordered goods are ready for dispatch, we also inspect the goods.",
  },
  {
    // pp.20, 22
    q: "Is FCL and LCL support available?",
    a: "Besides FCL (Full Container Load), we can also help to source and deliver the goods on your behalf by a smaller quantity of LCL (Lesser than a Container Load) Cargo facility.",
  },
  {
    // pp.20-22
    q: "Can PORTMATRIX assist with China travel and Canton Fair arrangements?",
    a: "Yes. We support your China visit with visa and ticketing formalities, hotel bookings, Indian food & arranging translators to take you to the desired markets. Canton Fair arrangements are also part of the support listed. Canton Fair is the largest Bi-annual China Trade Fair (April & October) held in Guangzhou.",
  },
  {
    // p.22
    q: "What support is provided after an order is placed?",
    a: "Once the ordered goods are ready for dispatch, we inspect the goods, re-pack it and book the vessels and facilitate the shipping to the destined country. Being a licensed Customs Broker, we facilitate the Customs clearance in India and do all the necessary arrangements to deliver the goods at your door steps.",
  },
];

// Renders `text` with `phrase` (first occurrence) turned into a Link.
function WithLink({ text, phrase, href }) {
  const i = phrase ? text.indexOf(phrase) : -1;
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <Link href={href} className="font-medium text-navy underline underline-offset-2 hover:text-ink">
        {phrase}
      </Link>
      {text.slice(i + phrase.length)}
    </>
  );
}

// Icons are visual aids only (aria-hidden); they add no meaning.
const ICONS = {
  languages: Languages,
  inspect: SearchCheck,
  container: Container,
  truck: Truck,
  receipt: ReceiptText,
  store: Store,
  plane: Plane,
  package: PackageCheck,
  stamp: Stamp,
  check: Check,
  shield: ShieldCheck,
  handshake: Handshake,
};
const Icon = ({ name, className }) => {
  const C = ICONS[name];
  return C ? <C className={className} strokeWidth={1.6} aria-hidden="true" /> : null;
};

const NAV_ITEMS = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "trade-link", label: "Hong Kong and China" },
  { id: "import-with-ease", label: "Import with ease" },
  { id: "process", label: "Sourcing to delivery" },
  { id: "support", label: "FCL / LCL and customs" },
  { id: "transparency", label: "Transparency" },
  { id: "canton-fair", label: "Canton Fair" },
  { id: "faq-heading", label: "FAQ" },
];

const sectionRule = "mt-16 border-t-2 border-ink pt-8 sm:mt-20";

export default function ChinaImportSourcingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "China Import Sourcing",
    provider: { "@type": "Organization", name: "PORTMATRIX Logistics Pvt. Ltd." },
    description: P.serviceIntro,
  };
  const history = CHINA.images.history;
  const factory = CHINA.images.factory;

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "China Import Sourcing", href: "/china-import-sourcing" }]} />}
        kicker="The Gateway to China Trade"
        title="China Import Sourcing"
        intro={P.serviceIntro}
        aside={
          <div className="border-t-2 border-ink pt-4">
            <p className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">{P.experienceLine}</p>
            <a
              href="#trade-link"
              className="group mt-2 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold text-navy"
            >
              <span className="border-b border-navy/30 pb-0.5 group-hover:border-navy">Our trade link with Hong Kong and China</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        }
      />

      <div className="mt-10">
        <PageNav items={NAV_ITEMS} />
      </div>

      {/* 2 — support at a glance: the p.20 checklist, labels verbatim */}
      <section id="at-a-glance" aria-labelledby="at-a-glance-h" className={`${sectionRule} grid gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
        <div>
          <h2 id="at-a-glance-h" className="h2 text-ink">China import support at a glance</h2>
          <p className="mt-4 max-w-md font-display text-lg font-semibold leading-snug text-navy">{P.consultantLine}</p>
        </div>
        <ul role="list" className="divide-y divide-hairline border-y border-hairline">
          {P.glance.map((g) => (
            <li key={g.label} className="flex items-center gap-4 py-3.5">
              <Icon name={g.icon} className="h-6 w-6 shrink-0 text-navy" />
              {g.href ? (
                <Link href={g.href} className="item-title inline-flex min-h-11 items-center text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy">
                  {g.label}
                </Link>
              ) : (
                <span className="item-title text-ink">{g.label}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* 3 — 1974 Hong Kong delegation. Natural 1289x816 ratio, never cropped.
          "1974" is the founder's Hong Kong trade link (p.20); the company's CIN
          is a different year (CLIENT_CONFIRMATION_REQUIRED, see audit). */}
      <section id="trade-link" aria-labelledby="trade-link-h" className={sectionRule}>
        <h2 id="trade-link-h" className="h2 max-w-3xl text-ink">Our trade link with Hong Kong and China</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
          <figure>
            <Image
              src={history.src}
              alt={history.alt}
              width={history.width}
              height={history.height}
              priority
              sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full border border-hairline bg-white"
            />
            <figcaption className="caption mt-3 max-w-2xl leading-relaxed text-slatey">{P.founderPhotoCaption}</figcaption>
          </figure>
          <div className="lg:pt-1">
            <p className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">1974</p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink/85">{P.founderHistory}</p>
          </div>
        </div>
      </section>

      {/* CLIENT_CONFIRMATION_REQUIRED: the market statements below are
          undated and unattributed in the source (pp.19-21). They stay mid-page,
          never in meta, FAQ answers or JSON-LD. */}
      <section aria-labelledby="china-sourcing" className="mt-14 grid gap-8 border-t border-hairline pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <h2 id="china-sourcing" className="h3 text-ink">China sourcing</h2>
        <div>
          <p className="max-w-prose text-lg leading-relaxed text-ink/85">{P.marketIntro}</p>
          <ul role="list" className="mt-6 divide-y divide-hairline border-y border-hairline">
            {P.chinaSourcingFacts.map((f) => (
              <li key={f} className="py-3.5 text-base leading-relaxed text-slatey">{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4+5 — Import with ease; the 2015 factory-visit photo sits beside the
          sourcing narrative it illustrates. Natural 960x720 ratio. */}
      <section id="import-with-ease" aria-labelledby="import-with-ease-h" className={sectionRule}>
        <h2 id="import-with-ease-h" className="h2 text-ink">Import with ease</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <figure className="max-w-md lg:sticky lg:top-24 lg:self-start">
            <Image
              src={factory.src}
              alt={factory.alt}
              width={factory.width}
              height={factory.height}
              sizes="(min-width: 1024px) 440px, 100vw"
              className="h-auto w-full border border-hairline bg-white"
            />
            <figcaption className="caption mt-3 leading-relaxed text-slatey">{P.factoryPhotoCaption}</figcaption>
          </figure>
          <div className="divide-y divide-hairline border-y border-hairline">
            {P.importWithEase.map((item) => (
              <article key={item.id} aria-labelledby={`${item.id}-h`} className="py-7 first:pt-6">
                <h3 id={`${item.id}-h`} className="font-display text-xl font-bold text-ink sm:text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-prose text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">{item.summary}</p>
                <ul role="list" className="mt-3 space-y-1.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-base leading-snug text-slatey">
                      <Check className="mt-[0.2em] h-4 w-4 shrink-0 text-navy" strokeWidth={2} aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — the stages the source names, in the source's order */}
      <section id="process" aria-labelledby="process-h" className={`${sectionRule} grid gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]`}>
        <div>
          <h2 id="process-h" className="h2 text-ink">From sourcing to delivery</h2>
        </div>
        <ProcessFlow variant="rail" steps={P.flow} />
      </section>

      {/* 7 — headline → source sentence → key points */}
      <section id="support" aria-labelledby="support-h" className={sectionRule}>
        <h2 id="support-h" className="h2 text-ink">FCL / LCL, Customs and delivery support</h2>
        <div className="mt-6 divide-y divide-hairline border-y border-hairline">
          {P.support.map((s) => (
            <article
              key={s.id}
              aria-labelledby={`${s.id}-h`}
              className="grid gap-x-10 gap-y-3 py-7 lg:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,4fr)]"
            >
              <h3 id={`${s.id}-h`} className="item-title flex items-start gap-3 text-ink">
                <Icon name={s.icon} className="mt-[0.1em] h-6 w-6 shrink-0 text-navy" />
                <span>{s.title}</span>
              </h3>
              <p className="max-w-prose text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">
                <WithLink text={s.text} phrase={s.linkPhrase} href={s.href} />
              </p>
              <ul role="list" className="space-y-1.5">
                {s.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-base leading-snug text-slatey">
                    <Check className="mt-[0.2em] h-4 w-4 shrink-0 text-navy" strokeWidth={2} aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-slatey">
          Related:{" "}
          <Link href="/services/export-import-clearance" className="font-medium text-navy underline underline-offset-2 hover:text-ink">Export Import Clearance</Link>
          {" · "}
          <Link href="/services/freight-forwarding-logistics" className="font-medium text-navy underline underline-offset-2 hover:text-ink">Freight Forwarding &amp; Logistics</Link>
        </p>
      </section>

      {/* 8 — transparency: agreed service charge, no hidden charges. No
          guarantees or figures are added. */}
      <section id="transparency" aria-labelledby="transparency-h" className={sectionRule}>
        <h2 id="transparency-h" className="kicker-sentence text-brandred">{P.transparency.title}</h2>
        <p className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">{P.transparency.lead}</p>
        <ul role="list" className="mt-8 grid gap-x-10 border-t border-hairline sm:grid-cols-3">
          {P.transparency.points.map((t) => (
            <li key={t.text} className="flex gap-4 border-b border-hairline py-6 sm:border-b-0">
              <Icon name={t.icon} className="mt-0.5 h-7 w-7 shrink-0 text-navy" />
              <p className="text-base leading-relaxed text-ink sm:text-[1.0625rem]">{t.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 9 — bridge to the dedicated Canton Fair route (p.22 first sentence) */}
      <section
        id="canton-fair"
        aria-labelledby="canton-fair-h"
        className="band bg-ink text-white"
        style={{ "--band-bg": "#0D102E" }}
      >
        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
          <div>
            <h2 id="canton-fair-h" className="h2 text-white">{P.cantonTeaser.title}</h2>
            <p className="mt-4 max-w-[58ch] text-[1.0625rem] leading-[1.65] text-white/85 sm:text-lg">{P.cantonTeaser.text}</p>
            <Link
              href="/china-import-sourcing/canton-fair"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-navy-50"
            >
              {P.cantonTeaser.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
          <StatStrip light items={P.cantonTeaser.facts} />
        </div>
      </section>

      <Faq items={FAQS} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "China Canton Fair Services", href: "/china-import-sourcing/canton-fair" },
            { title: "Licensed Customs Broker", href: "/services/licensed-customs-broker" },
            { title: "Export Import Clearance", href: "/services/export-import-clearance" },
            { title: "Freight Forwarding & Logistics", href: "/services/freight-forwarding-logistics" },
            { title: "Contact PORTMATRIX", href: "/contact" },
          ]}
        />
      </div>
    </div>
  );
}

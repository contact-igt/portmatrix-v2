import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO } from "@/lib/content";
import { PHASES } from "@/lib/export-handholding-data";

// Source-locked homepage hero. No photograph: the only genuine operational
// photos (Netherlands 2024, USA 2025) belong to Export Import Clearance, and
// the earlier AI-generated seaport image is not source material. The right
// column is the PDF's own End-to-End Export Facilitation Process (p.7) —
// six phase titles verbatim, each linking to its phase page.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline bg-white pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <div className="bg-blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
        <div>
          <p className="kicker flex items-center gap-2.5 text-navy">
            <span className="h-px w-8 bg-brandred" />
            {HERO.kicker}
          </p>
          <h1 className="h1 mt-5 max-w-2xl text-ink">{HERO.heading}</h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-slatey">
            {HERO.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-700"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/services/export-handholding"
              className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy"
            >
              <span className="border-b border-navy/30 pb-0.5 transition-colors duration-150 group-hover:border-navy">
                Explore Export Handholding
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <nav aria-labelledby="hero-process" className="border-t-2 border-navy bg-white">
          <p id="hero-process" className="flex items-baseline justify-between gap-4 border-b border-hairline py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">
            End-to-End Export Facilitation Process
            <span className="font-medium normal-case tracking-normal text-slatey">6 phases</span>
          </p>
          <ol>
            {PHASES.map((p) => (
              <li key={p.slug} className="border-b border-hairline">
                <Link
                  href={`/services/export-handholding/${p.slug}`}
                  className="group grid min-h-[3.25rem] grid-cols-[2.5rem_1fr_auto] items-center gap-2 py-2.5 transition-colors duration-150 hover:bg-paper"
                >
                  <span className="font-display text-sm font-semibold tabular-nums text-brandred">
                    {String(p.n).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-ink">{p.title}</span>
                  <ArrowRight className="mr-1 h-4 w-4 text-navy/40 transition-colors duration-150 group-hover:text-navy" />
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO, OPERATIONAL_PROOF } from "@/lib/content";
import { PHASES } from "@/lib/export-handholding-data";

// Source-locked homepage hero: the PDF p.3 defining sentence beside ONE
// authentic operational photograph (the Netherlands 2024 shipment inspection,
// also the home page's single "inspection" image). The six phases of the
// PDF's End-to-End Export Facilitation Process (p.7) run as a ruled index
// under the hero, each linking to its phase page.
const HERO_PHOTO = OPERATIONAL_PROOF.images.find((i) => i.src.includes("netherlands"));

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-hairline bg-white pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
        <div>
          <p className="kicker flex items-center gap-2.5 text-navy">
            <span className="h-px w-8 bg-brandred" />
            {HERO.kicker}
          </p>
          <h1 className="h1 mt-5 max-w-2xl text-ink">{HERO.heading}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">{HERO.body}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slatey">{HERO.coreStrength}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-700"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <Link
              href="/services/export-handholding"
              className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy"
            >
              <span className="border-b border-navy/30 pb-0.5 transition-colors duration-150 group-hover:border-navy">
                Explore Export Handholding
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {HERO_PHOTO && (
          <figure className="mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-hairline bg-paper">
              <Image
                src={HERO_PHOTO.src}
                alt={HERO_PHOTO.alt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-snug text-slatey">{HERO_PHOTO.caption}</figcaption>
          </figure>
        )}
      </div>

      <nav aria-labelledby="hero-process" className="mx-auto mt-12 max-w-7xl px-5 pb-12 sm:px-8 lg:mt-16 lg:pb-14">
        <div className="border-t-2 border-navy">
          <p
            id="hero-process"
            className="flex items-baseline justify-between gap-4 border-b border-hairline py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-ink"
          >
            End-to-End Export Facilitation Process
            <span className="font-medium normal-case tracking-normal text-slatey">6 phases</span>
          </p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-6">
            {PHASES.map((p, i) => (
              <li
                key={p.slug}
                className={`border-b border-hairline sm:[&:nth-child(even)]:border-l lg:border-b-0 lg:[&:nth-child(even)]:border-l-0 ${
                  i > 0 ? "lg:border-l" : ""
                }`}
              >
                <Link
                  href={`/services/export-handholding/${p.slug}`}
                  className="group flex h-full min-h-11 items-start gap-3 px-1 py-4 transition-colors duration-150 hover:bg-paper sm:px-4 lg:flex-col lg:gap-2"
                >
                  <span className="font-display text-sm font-semibold tabular-nums text-brandred">
                    {String(p.n).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-ink group-hover:text-navy">{p.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </section>
  );
}

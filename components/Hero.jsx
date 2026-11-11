import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO, OPERATIONAL_PROOF } from "@/lib/content";
import ExportCapabilities from "./ExportCapabilities";

// Source-locked homepage hero: the PDF p.3 defining sentence beside ONE
// authentic operational photograph (the USA 2025 shipment inspection,
// also the home page's single "inspection" image). Client-supplied service
// headings run in the horizontal strip below the hero.
const HERO_PHOTO = OPERATIONAL_PROOF.images.find((i) => i.src.includes("export-shipment-inspection-usa-2025"));

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
            <figcaption className="mt-3 text-sm leading-snug text-slatey">Hotel supplies shipment to USA in 2025</figcaption>
          </figure>
        )}
      </div>

      <ExportCapabilities />
    </section>
  );
}

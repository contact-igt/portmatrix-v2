import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { HERO } from "@/lib/content";
import ExportCapabilities from "./ExportCapabilities";

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-hairline bg-white pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.08fr] lg:items-end lg:gap-10">
        <div>
          <p className="kicker flex items-center gap-2.5 text-navy">
            <span className="h-px w-8 bg-brandred" />
            {HERO.kicker}
          </p>
          <h1 className="h1 mt-5 max-w-2xl text-ink">{HERO.heading}</h1>
          <p className="mt-6 text-base font-normal leading-relaxed text-slatey">{HERO.body}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-700"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          <a
            href={`https://wa.me/919359352345?text=${encodeURIComponent("Hello, I would like to request an appointment with Mr. Rahim Iyaz. Please share his availability.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy transition-colors duration-150 hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            Request an MD appointment
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
          </div>
        </div>


        <div className="mx-auto w-full max-w-3xl">
          <figure>
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl border border-hairline bg-paper">
              <Image
                src="/images/source/branding/image1.png"
                alt="PORTMATRIX illustration of a port-facing logistics workspace with a ship, globe and digital trade map"
                fill
                priority
                sizes="(min-width: 1280px) 611px, (min-width: 1024px) 49vw, 100vw"
                className="object-contain"
              />
            </div>
          </figure>
          <p className="mt-6 text-base font-normal leading-relaxed text-slatey">{HERO.coreStrength}</p>
        </div>
      </div>

      <ExportCapabilities />
    </section>
  );
}



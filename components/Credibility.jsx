import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RIIT } from "@/lib/content";

// Home summary of RIIT: heading + the source intro + ONE image, the Alagappa
// University MoU (the manifest's highest-rated institutional asset). The
// inauguration, Deputy DGFT, certificate, Agriculture 2025 and FIEO photos
// live in context on /riit and /riit/training-events.
const MOU = RIIT.featured.find((img) => img.src.includes("alagappa-university-mou"));

export default function Credibility() {
  return (
    <section id="riit" className="relative scroll-mt-20 bg-paper py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="h2 max-w-xl text-ink">{RIIT.heading}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slatey sm:text-lg">{RIIT.homeIntro}</p>
          <p className="mt-6">
            <Link href="/riit" className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy">
              <span className="border-b border-navy/30 pb-0.5 transition-colors group-hover:border-navy">
                About RIIT, courses and training events
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </p>
        </div>

        {MOU && (
          <figure>
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-hairline bg-white">
              <Image src={MOU.src} alt={MOU.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm leading-snug text-slatey">{MOU.caption}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

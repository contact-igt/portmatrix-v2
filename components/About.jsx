import Image from "next/image";
import RahimSignature from "./RahimSignature";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MD, MISSION_TAGLINE_DISPLAY } from "@/lib/content";

// Homepage summary only. The full company overview lives on /about and the
// full Managing Director profile on /about/rahim-iyaz.
// Summary sentences: PDF p.3 ("We also provide …") and p.86 (Target Audience).
// MD profile points supplied and approved by the user.

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-white py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="h2 max-w-2xl text-ink">About PORTMATRIX</h2>
        <p className="mt-3 font-display text-lg font-semibold text-navy">{MISSION_TAGLINE_DISPLAY}</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,31.25rem)] lg:gap-16">
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-slatey">
              PORTMATRIX also provides DGFT consultancy, Allied Acts inputs, EXIM analytics, market
              intelligence, RTA/FTA advisory and export packaging guidance. Its target audience is MNC /
              corporate clientele, MSME manufacturers, and merchant exporters and importers.
            </p>
            <p className="mt-6">
              <Link
                href="/about"
                className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy"
              >
                <span className="border-b border-navy/30 pb-0.5 transition-colors group-hover:border-navy">
                  About PORTMATRIX
                </span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </p>
          </div>

          {/* MD card — compact; links to the full profile */}
          <div className="flex flex-col gap-6 border-t-2 border-navy pt-5 min-[769px]:flex-row min-[769px]:items-start min-[769px]:gap-7">
            {/* Natural 853x1280 source portrait: no crop, no forced box. */}
            <div className="w-full max-w-[13.75rem] shrink-0 min-[769px]:w-[12.5rem]">
              <Image
                src={MD.portrait.src}
                alt={MD.portrait.alt}
                width={MD.portrait.width}
                height={MD.portrait.height}
                sizes="(min-width: 769px) 200px, 220px"
                quality={90}
                className="h-auto w-full rounded-md"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="kicker text-brandred">Our MD&rsquo;s Profile</p>
              <RahimSignature className="mt-2 max-w-[13rem]" sizes="208px" />
              <p className="text-sm text-slatey">{MD.role}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink/80">
                <li><strong>F-Card qualified</strong> Customs Broker with International Trade exposure since <strong>1996</strong>.</li>
                <li>Worked across <strong>East and Southeast Asia (ESEA), Middle East, SAARC Region</strong> markets.</li>
                <li>Former Risk Mitigation professional with <strong>State Bank of India</strong> Group.</li>
                <li>Authorised Export Resource Person for <strong>Ministry of MSME, EDII-TN, TNAPEx, TN Cooperative Society, FIEO &amp; Alagappa University</strong>.</li>
              </ul>
              <p className="mt-4">
                <Link
                  href="/about/rahim-iyaz"
                  className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy"
                >
                  <span className="border-b border-navy/30 pb-0.5 transition-colors group-hover:border-navy">
                    Full profile
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

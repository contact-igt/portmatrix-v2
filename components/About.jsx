import Image from "next/image";
import RahimSignature from "./RahimSignature";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { MD, MISSION_TAGLINE_DISPLAY } from "@/lib/content";

// Homepage summary only. The full company overview lives on /about and the
// full Managing Director profile on /about/rahim-iyaz.
// Summary sentences: PDF p.3 ("We also provide …") and p.86 (Target Audience).
// MD profile points supplied and approved by the user.

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-white py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 border-t-2 border-navy pt-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
          <div className="min-w-0">
            <p className="kicker text-brandred">Company &amp; leadership</p>
            <h2 className="h2 mt-3 max-w-2xl text-ink">About PORTMATRIX</h2>
            <p className="mt-3 font-display text-lg font-semibold text-navy">{MISSION_TAGLINE_DISPLAY}</p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slatey">
              PORTMATRIX also provides DGFT consultancy, Allied Acts inputs, EXIM analytics, market
              intelligence, RTA/FTA advisory and export packaging guidance.
            </p>
            <p className="mt-5 max-w-2xl border-l-2 border-brandred pl-5 text-base leading-relaxed text-slatey">
              Its target audience is MNC /
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

          {/* Portrait and identity above a full-width profile summary. */}
          <div className="grid min-w-0 gap-x-6 gap-y-6 rounded-2xl bg-paper p-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:p-7">
            {/* Natural 853x1280 source portrait: no crop, no forced box. */}
            <div className="w-full max-w-[10rem]">
              <Image
                src={MD.portrait.src}
                alt={MD.portrait.alt}
                width={MD.portrait.width}
                height={MD.portrait.height}
                sizes="160px"
                unoptimized
                quality={90}
                className="h-auto w-full rounded-xl"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="kicker text-brandred">Our MD&rsquo;s Profile</p>
              <RahimSignature className="mt-3 max-w-[18rem]" sizes="(max-width: 639px) calc(100vw - 80px), 288px" />
              <p className="mt-4 text-sm font-medium leading-relaxed text-ink">{MD.qualifications}</p>
              <p className="mt-2 text-sm text-slatey">{MD.role}</p>
            </div>
              <ul className="grid gap-5 border-t border-hairline pt-6 text-sm leading-relaxed text-ink/80 sm:col-span-2 sm:grid-cols-2 [&>li]:border-l [&>li]:border-navy/20 [&>li]:pl-4">
                <li><strong>F-Card qualified</strong> Customs Broker with International Trade exposure since <strong>1996</strong>.</li>
                <li>Worked across <strong>East and Southeast Asia (ESEA), Middle East, SAARC Region</strong> markets.</li>
                <li>Former Risk Mitigation professional with <strong>State Bank of India</strong> Group.</li>
                <li>Authorised Export Resource Person for <strong>Ministry of MSME, EDII-TN, TNAPEx, TN Cooperative Society, FIEO &amp; Alagappa University</strong>.</li>
              </ul>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
                <a
                  href={`https://wa.me/919359352345?text=${encodeURIComponent("Hello, I would like to request an appointment with Mr. Rahim Iyaz. Please share his availability.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Request an appointment
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
                <Link
                  href="/about/rahim-iyaz"
                  className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy"
                >
                  <span className="border-b border-navy/30 pb-0.5 transition-colors group-hover:border-navy">
                    Full profile
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

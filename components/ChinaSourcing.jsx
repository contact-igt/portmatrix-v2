"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { CHINA } from "@/lib/content";

// Home summary of China Import Sourcing. One authentic image: Canton Fair 2025.
// The 1974 Hong Kong delegation photo is NOT repeated here (it lives on /about,
// in the journey, and on /china-import-sourcing, in the full China history);
// the history stays as text above. The 2015 factory photo is on
// /china-import-sourcing.
export default function ChinaSourcing() {
  return (
    <section id="china" className="relative scroll-mt-20 china-feature bg-china-red py-14 text-white sm:py-20">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <p className="kicker flex items-center gap-2.5 text-china-yellow">
              <span className="h-px w-8 bg-current" /> {CHINA.kicker}
            </p>
            <h2 className="h2 mt-5 max-w-xl">{CHINA.heading}</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/95">{CHINA.history}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95">{CHINA.intro}</p>
            <p className="mt-6 max-w-xl border-l-2 border-china-yellow pl-4 text-base leading-relaxed text-white/90">
              {CHINA.costNote}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
              <a
                href="#contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-china-yellow px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-china-yellow-hover"
              >
                Plan a China import
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <Link href="/china-import-sourcing" className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-white">
                <span className="border-b border-white/40 pb-0.5 transition-colors group-hover:border-white">
                  China Import Sourcing in full
                </span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid content-start gap-8 border-t border-white/15 pt-8 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-10 lg:border-t-0 lg:pt-0">
          <figure className="mx-auto w-full max-w-[13rem] sm:mx-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image
                src={CHINA.images.cantonFair.src}
                alt={CHINA.images.cantonFair.alt}
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2.5 text-sm leading-snug text-white/95">{CHINA.images.cantonFair.caption}</figcaption>
          </figure>

          <motion.ul
            variants={stagger}
            {...inView}
            className="grid content-start gap-y-4"
          >
            {CHINA.points.map((p) => (
              <motion.li key={p} variants={fadeUp} className="flex items-start gap-3 border-b border-white/10 pb-4">
                <Check className="mt-1 h-4 w-4 shrink-0 text-china-yellow" aria-hidden="true" />
                <span className="text-base text-white/90">{p}</span>
              </motion.li>
            ))}
          </motion.ul>
          <div className="border-t border-white/20 pt-6 sm:col-span-2">
            <p className="text-base leading-relaxed text-white/95">Explore our experience in China trade since 1974</p>
            <Link
              href="/china-import-sourcing#trade-link"
              className="group mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-china-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-china-yellow"
            >
              <span className="border-b border-china-yellow/50 pb-0.5 transition-colors group-hover:border-china-yellow">Our trade link with Hong Kong and China</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

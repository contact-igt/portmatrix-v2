"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { CHINA } from "@/lib/content";

export default function ChinaSourcing() {
  return (
    <section
      id="china"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-14 text-white sm:py-20 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="kicker mb-6 flex items-center gap-2.5 text-brandred-300">
          <span className="h-px w-8 bg-current" /> {CHINA.kicker}
        </p>

        {/* Heritage photo band — the archival 1974 photo leads the section,
            framed as a document (square corners, thin mat) rather than a
            rounded app-style card, with the heading set below it at a
            larger size. This is a deliberate departure from the
            kicker+H2+intro pattern repeated elsewhere on the page: this is
            the one section where the photo, not the heading, opens. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl border border-white/15 bg-navy-700/40 p-2"
        >
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={CHINA.images.history.src}
              alt={CHINA.images.history.alt}
              fill
              sizes="(min-width: 1024px) 780px, 100vw"
              className="object-cover"
            />
          </div>
          {/* No caption overlay here — this archival photo already carries
              its own printed caption ("Indian Business Delegation to Hong
              Kong in May 1974"), baked into the source image. */}
        </motion.div>

        <h2 className="mt-8 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.75rem]">
          {CHINA.heading}
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-white/75">{CHINA.history}</p>
            <p className="mt-4 text-white/75">{CHINA.intro}</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="border-l-2 border-brandred pl-4 text-sm text-white/85">
              {CHINA.costNote}
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brandred px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brandred-600"
              >
                Plan a China import
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Factory visit + Canton Fair photos — each in its true aspect.
            Canton Fair (750x1000) is a portrait photo; forcing it into the
            same landscape frame as the factory photo cropped away ~40% of
            it, so it now gets its own portrait tile. */}
        <div className="mt-8 grid items-start gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={CHINA.images.factory.src}
                alt={CHINA.images.factory.alt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2.5 text-[13px] leading-snug text-white/65">
              {CHINA.images.factory.caption}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto w-full max-w-[300px] sm:mx-0"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image
                src={CHINA.images.cantonFair.src}
                alt={CHINA.images.cantonFair.alt}
                fill
                sizes="(min-width: 1024px) 300px, 60vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2.5 text-[13px] leading-snug text-white/65">
              {CHINA.images.cantonFair.caption}
            </p>
          </motion.div>
        </div>

        {/* points — plain checklist, no icon-glass cards */}
        <motion.ul
          variants={stagger}
          {...inView}
          className="mt-8 grid gap-x-10 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CHINA.points.map((p) => (
            <motion.li key={p} variants={fadeUp} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brandred-300" />
              <span className="text-sm text-white/80">{p}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

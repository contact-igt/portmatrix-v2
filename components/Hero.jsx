"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import ImageCaption from "./ImageCaption";
import { HERO } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16">
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:grid-rows-[auto_auto_auto] lg:items-center lg:gap-x-14 lg:gap-y-0">
        {/* Text top — kicker + headline. */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="lg:col-start-1 lg:row-start-1">
          <motion.p
            variants={fadeUp}
            className="kicker flex items-center gap-2.5 text-navy/70"
          >
            <span className="h-px w-8 bg-navy/40" />
            {HERO.kicker}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-xl font-display text-[2.25rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.5rem]"
          >
            {HERO.heading}
          </motion.h1>
        </motion.div>

        {/* Global Trade Seaport Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:mt-0 lg:self-center"
        >
          <div className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-lift">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={HERO.image.src}
                alt={HERO.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ImageCaption>{HERO.image.caption}</ImageCaption>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-start-1 lg:row-start-3 lg:mt-8"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#export-handholding"
            className="group flex items-center gap-1.5 text-sm font-semibold text-navy"
          >
            <span className="border-b border-navy/30 pb-0.5 transition-colors group-hover:border-navy">
              Explore Export Handholding
            </span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-lg text-[1.05rem] leading-relaxed text-slatey lg:col-start-1 lg:row-start-2 lg:mt-5"
        >
          {HERO.body}
        </motion.p>
      </div>
    </section>
  );
}

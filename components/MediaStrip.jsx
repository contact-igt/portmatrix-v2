"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { MEDIA } from "@/lib/content";

export default function MediaStrip() {
  const article = MEDIA.items[0];

  return (
    <section id="media" className="relative bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={stagger}
          {...inView}
          className="flex flex-col items-center gap-6 border-y border-hairline py-8 sm:flex-row sm:gap-8"
        >
          <motion.div
            variants={fadeUp}
            className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-hairline sm:h-32 sm:w-32"
          >
            <Image
              src={article.src}
              alt={article.alt}
              fill
              sizes="128px"
              className="object-cover"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex-1 text-center sm:text-left">
            <p className="kicker text-brandred">{MEDIA.heading}</p>
            <p className="mt-2 text-sm leading-relaxed text-slatey">{article.caption}</p>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href={MEDIA.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-navy-50"
          >
            <PlayCircle className="h-4 w-4" />
            {MEDIA.videoLabel}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

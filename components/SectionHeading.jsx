"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "@/lib/animations";

export default function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  light = false,
}) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";
  return (
    <motion.div
      variants={stagger}
      {...inView}
      className={`flex max-w-2xl flex-col ${alignment}`}
    >
      {kicker && (
        <motion.span
          variants={fadeUp}
          className={`kicker mb-3 flex items-center gap-2 ${
            light ? "text-brandred-300" : "text-brandred"
          }`}
        >
          <span className="h-px w-6 bg-current" />
          {kicker}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-[2.5rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/70" : "text-slatey"
          }`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "@/lib/animations";
import Breadcrumb from "./Breadcrumb";

// Shared internal-page opening block: breadcrumb + kicker + H1 + intro.
// Pages still vary their own hero beyond this (image, layout, tone) — this
// only standardizes the part that should never drift: exactly one H1 per
// page, in the correct semantic tag, sized via the sitewide .h1 scale.
export default function PageIntro({ breadcrumb, kicker, title, intro, light = false }) {
  return (
    <motion.div variants={stagger} {...inView} className="max-w-3xl">
      {breadcrumb && <div className="mb-5">{breadcrumb}</div>}
      {kicker && (
        <motion.p variants={fadeUp} className={`kicker mb-3 flex items-center gap-2.5 ${light ? "text-brandred-300" : "text-brandred"}`}>
          <span className="h-px w-8 bg-current" />
          {kicker}
        </motion.p>
      )}
      <motion.h1 variants={fadeUp} className={`h1 ${light ? "text-white" : "text-ink"}`}>
        {title}
      </motion.h1>
      {intro && (
        <motion.p variants={fadeUp} className={`mt-5 text-[1.05rem] leading-[1.68] sm:text-lg ${light ? "text-white/75" : "text-slatey"}`}>
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}

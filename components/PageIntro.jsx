"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

// Shared internal-page opening block: breadcrumb + kicker + H1 + intro.
// Exactly one H1 per page, in the correct semantic tag, sized via the
// sitewide .h1 scale.
//
// Props: breadcrumb (node), kicker (string), title, intro, light (dark bg),
//   aside (optional node — right column at lg+, stacked below on small
//   screens; use for a <StatStrip/>/key-fact list or one <EvidenceFigure/>),
//   kickerStyle ("auto" | "label" | "sentence"; auto = sentence-case once the
//   kicker passes ~32 characters so long scheme names wrap like a line).
export default function PageIntro({
  breadcrumb,
  kicker,
  title,
  intro,
  light = false,
  aside,
  kickerStyle = "auto",
}) {
  const sentence = kickerStyle === "sentence" || (kickerStyle === "auto" && typeof kicker === "string" && kicker.length > 32);
  const tone = light ? "text-brandred-300" : "text-brandred";
  return (
    // initial={false}: the page's H1 and intro are server-rendered visible —
    // never shipped at opacity 0 waiting on hydration.
    <motion.div
      variants={stagger}
      initial={false}
      animate="show"
      className={aside ? "grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end" : "max-w-3xl"}
    >
      {breadcrumb && <div className={`-mb-1 ${aside ? "lg:col-span-2" : ""}`}>{breadcrumb}</div>}
      <div className="max-w-3xl">
        {kicker && (
          <motion.p
            variants={fadeUp}
            className={`${sentence ? "kicker-sentence" : "kicker"} mb-4 flex items-start gap-3 ${tone}`}
          >
            <span className="mt-[0.7em] h-px w-8 shrink-0 bg-current" aria-hidden="true" />
            <span>{kicker}</span>
          </motion.p>
        )}
        <motion.h1 variants={fadeUp} className={`h1 ${light ? "text-white" : "text-ink"}`}>
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            variants={fadeUp}
            className={`mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.65] sm:text-lg ${light ? "text-white/80" : "text-slatey"}`}
          >
            {intro}
          </motion.p>
        )}
      </div>
      {aside && (
        <motion.div variants={fadeUp} className="min-w-0 lg:pb-1">
          {aside}
        </motion.div>
      )}
    </motion.div>
  );
}

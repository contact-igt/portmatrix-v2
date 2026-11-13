"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { TRUST_FACTS, TRUST_BADGES, RIIT_PARTNERS } from "@/lib/content";

// Facts only: the two dated figures, two credential badges (PDF p.5 / p.26)
// and a short RIIT partner list (PDF p.5; defined once as RIIT_PARTNERS).
// The earlier keyword ticker was removed — it restated service names, not facts.
export default function TrustBar() {
  return (
    <section aria-label="Credentials" className="relative border-y border-hairline/70 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <motion.div
          variants={stagger}
          {...inView}
          className="grid gap-8 lg:grid-cols-2 lg:gap-0"
        >
          <div className="grid grid-cols-2 divide-x divide-hairline">
            {TRUST_FACTS.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className={i === 0 ? "pr-8 sm:pr-12" : "pl-8 sm:pl-12"}
              >
                {/* label first, number after — client-locked wording
                    "International Trade exposure since [1996]" */}
                <p className="max-w-[10rem] text-sm leading-snug text-slatey">
                  {s.label}
                </p>
                <div className="mt-1 font-display text-[1.75rem] font-semibold text-navy sm:text-3xl">
                  {s.to}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.ul
            variants={fadeUp}
            className="grid grid-cols-2 divide-x divide-hairline text-sm font-medium text-ink/75 lg:border-l lg:border-hairline"
          >
            {TRUST_BADGES.map((b) => (
              <li key={b} className="flex items-start gap-2 pr-8 leading-snug even:pl-8 even:pr-0 sm:pr-12 sm:even:pl-12 lg:pl-12 lg:pr-8">
                <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-brandred" />
                <span className="max-w-xs">{b}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <div className="border-t-4 border-brandred bg-navy py-7 sm:py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-display text-base font-bold uppercase tracking-wide text-white sm:text-lg">
            RIIT — export training partner of
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium leading-relaxed text-white sm:text-base">
            {RIIT_PARTNERS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

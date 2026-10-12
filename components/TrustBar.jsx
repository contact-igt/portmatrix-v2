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
          className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16"
        >
          <div className="flex divide-x divide-hairline">
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
            className="flex flex-col gap-x-8 gap-y-2 text-sm font-medium text-ink/75 sm:flex-row sm:flex-wrap"
          >
            {TRUST_BADGES.map((b) => (
              <li key={b} className="flex items-baseline gap-2 leading-snug">
                <span className="mt-[3px] h-1 w-1 shrink-0 rounded-full bg-brandred" />
                <span className="max-w-xs">{b}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <div className="border-t border-hairline/70 bg-paper py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slatey">
            RIIT — export training partner of
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/80">
            {RIIT_PARTNERS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

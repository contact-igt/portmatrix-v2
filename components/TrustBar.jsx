"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { TRUST_FACTS, TRUST_BADGES } from "@/lib/content";

const MARQUEE = [
  "Customs Brokers Regulations 2018",
  "ICEGATE e-filing",
  "Bill of Entry & Shipping Bill",
  "HS Code classification",
  "DGFT consultancy",
  "MOOWR · Section 65",
  "SEZ & FTWZ",
  "Advance Authorisation · EPCG",
  "China sourcing since 1974",
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-hairline/70 bg-white">
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
                {/* label first, number after — "Government Licensed Customs
                    Broker since [1996]" reads correctly this way round */}
                <p className="max-w-[10rem] text-[13px] leading-snug text-slatey">
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
            className="flex flex-col gap-x-8 gap-y-2 text-[13px] font-medium text-ink/75 sm:flex-row sm:flex-wrap"
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

      {/* quiet credential line — static, not a scrolling "logo ticker" */}
      <div className="border-t border-hairline/70 bg-paper py-3">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs uppercase leading-relaxed tracking-wide text-slatey/70">
            {MARQUEE.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}

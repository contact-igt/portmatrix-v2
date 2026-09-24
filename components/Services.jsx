"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { SERVICES, FEATURED_SERVICES, COMPACT_SERVICES } from "@/lib/content";

// On mobile, showing all 11 secondary services stacks into ~2000px of
// scroll with no way to scan ahead. Desktop's 2-column grid already keeps
// this compact, so the collapse only applies below sm — items past the
// preview count are CSS-hidden (not removed), so nothing changes for sm+.
const MOBILE_PREVIEW_COUNT = 6;

export default function Services() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="services" className="relative scroll-mt-20 py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Split header — heading and intro share a baseline instead of
            stacking, a deliberate variation from the repeated
            kicker-over-heading pattern used elsewhere. */}
        <motion.div
          variants={stagger}
          {...inView}
          className="flex flex-col gap-5 border-b border-hairline pb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.5rem] lg:max-w-sm"
          >
            Everything between the factory and the final mile
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-base leading-relaxed text-slatey lg:text-right">
            One licensed partner for clearance, sourcing, warehousing,
            insurance and trade consultancy — {SERVICES.length} core
            services in a single PORTMATRIX engagement.
          </motion.p>
        </motion.div>

        {/* Featured — editorial index, not icon cards */}
        <motion.div
          variants={stagger}
          {...inView}
          className="mt-8 grid divide-y divide-hairline border-y border-hairline sm:grid-cols-2"
        >
          {/* Tailwind's divide-x adds a border to every sibling but the
              first, regardless of grid row — in a 2-column, multi-row grid
              that puts a stray left border on every left-column item after
              the first row too. An explicit odd-index border avoids it. */}
          {FEATURED_SERVICES.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              variants={fadeUp}
              className={`group flex gap-5 px-1 py-5 transition-colors sm:px-8 ${
                i % 2 === 1 ? "sm:border-l sm:border-hairline" : ""
              }`}
            >
              <span className="text-sm text-brandred/70 transition-colors group-hover:text-brandred">
                {String(s.n).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-navy sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey">{s.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Secondary matrix — compact, typography-led */}
        <motion.div
          variants={stagger}
          {...inView}
          className="mt-2 grid divide-y divide-hairline sm:grid-cols-2"
        >
          {COMPACT_SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className={`gap-4 px-1 py-5 sm:flex sm:px-8 ${
                i % 2 === 1 ? "sm:border-l sm:border-hairline" : ""
              } ${i >= MOBILE_PREVIEW_COUNT && !expanded ? "hidden sm:flex" : "flex"}`}
            >
              <span className="text-xs text-slatey/60">
                {String(s.n).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-ink">{s.title}</h4>
                <p className="mt-1 text-[13px] leading-relaxed text-slatey">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {COMPACT_SERVICES.length > MOBILE_PREVIEW_COUNT && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 flex w-full items-center justify-center gap-1.5 border-t border-hairline py-4 text-sm font-semibold text-navy sm:hidden"
          >
            {expanded ? "Show fewer services" : `Show all ${COMPACT_SERVICES.length} services`}
            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { EXPORT_HANDHOLDING_PHASES } from "@/lib/content";

export default function ExportHandholding() {
  const [active, setActive] = useState(0);
  const phase = EXPORT_HANDHOLDING_PHASES[active];

  return (
    <section
      id="export-handholding"
      className="relative scroll-mt-20 bg-white py-14 sm:py-20 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="MSME Export Handholding"
          title="End-to-End Export Facilitation Process"
          intro="Complete support from export registration and documentation to buyer coordination, customs clearance, shipment, transit, insurance, and post-shipment payment realization."
        />

        {/* phase stepper — a horizontal progression, not a settings menu.
            Grid (not a scrolling row) so all 6 phases stay fully legible
            and wrap to 2 rows on mobile instead of being cut off. */}
        <div
          aria-label="Export Handholding phases"
          className="mt-8 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-6"
        >
          {EXPORT_HANDHOLDING_PHASES.map((p, i) => (
            <button
              key={p.n}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
              className="group flex flex-col items-start pt-3 text-left"
            >
              <span
                className={`block h-[3px] w-full rounded-full transition-colors ${
                  i <= active ? "bg-brandred" : "bg-hairline"
                }`}
              />
              <span
                className={`mt-3 block text-[13px] uppercase tracking-wide ${
                  active === i ? "text-brandred" : "text-slatey"
                }`}
              >
                {String(p.n).padStart(2, "0")}
              </span>
              <span
                className={`mt-0.5 block text-sm font-semibold leading-snug ${
                  active === i ? "text-navy" : "text-ink/70"
                }`}
              >
                {p.title}
              </span>
            </button>
          ))}
        </div>

        {/* active phase — real timeline, not cards. Fixed min-height keeps
            the section from jumping as phases with different step counts
            (6 to 9 steps) are selected. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={phase.n}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 lg:min-h-[27rem]"
          >
            <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {phase.title}
            </h3>

            <ol className="mt-5 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {phase.steps.map((step, i) => (
                <li key={step} className="flex items-baseline gap-3 border-t border-hairline py-2.5">
                  <span className="text-[13px] text-slatey">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-ink/80">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { MD, INTELLIGENCE, MISSION_TAGLINE } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-white py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="kicker flex items-center gap-2.5 text-brandred">
          <span className="h-px w-8 bg-current" />
          About PORTMATRIX
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:text-3xl">
          {MISSION_TAGLINE}
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* Portrait — editorial, not a card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src={MD.portrait.src}
                alt={MD.portrait.alt}
                fill
                sizes="(min-width: 1024px) 420px, 320px"
                className="object-cover"
              />
            </div>
            <div className="mt-5 border-t border-hairline pt-4">
              <p className="font-display text-xl font-bold text-ink">{MD.name}</p>
              <p className="text-sm text-slatey">{MD.title}</p>
            </div>
          </motion.div>

          {/* Bio */}
          <div>
            <p className="kicker flex items-center gap-2.5 text-brandred">
              <span className="h-px w-8 bg-current" />
              Our MD&rsquo;s Profile
            </p>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-ink">
              {MD.qualifications}
            </p>

            <motion.dl
              variants={stagger}
              {...inView}
              className="mt-6 divide-y divide-hairline border-y border-hairline"
            >
              {MD.bullets.map((b) => (
                <motion.div
                  key={b}
                  variants={fadeUp}
                  className="py-3.5 text-[15px] leading-relaxed text-ink/80"
                >
                  {b}
                </motion.div>
              ))}
            </motion.dl>

            <motion.div variants={fadeUp} {...inView} className="mt-7">
              <p className="kicker text-navy/70">EXIM market intelligence</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slatey">
                Beyond clearance, PORTMATRIX provides DGFT consultancy, Allied
                Acts inputs, EXIM analytics and Global Market &amp;
                International Trade Intelligence.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {INTELLIGENCE.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-navy/80">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

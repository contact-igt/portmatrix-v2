"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ImageCaption from "./ImageCaption";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { OPERATIONAL_PROOF } from "@/lib/content";

export default function OperationalProof() {
  return (
    <section id="proof" className="relative scroll-mt-20 bg-white py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker={OPERATIONAL_PROOF.kicker}
          title={OPERATIONAL_PROOF.heading}
          intro={OPERATIONAL_PROOF.intro}
        />
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5 text-xs font-medium text-slatey">
          {OPERATIONAL_PROOF.disciplines.map((d) => (
            <li key={d} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-brandred" />
              {d}
            </li>
          ))}
        </ul>

        <motion.div variants={stagger} {...inView} className="mt-8 grid gap-8 sm:grid-cols-2">
          {OPERATIONAL_PROOF.images.map((img) => (
            <motion.div key={img.src} variants={fadeUp}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <ImageCaption>{img.caption}</ImageCaption>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

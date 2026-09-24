"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ImageCaption from "./ImageCaption";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { RIIT } from "@/lib/content";

// The FIEO photo (938x423) is a wide panorama — the other 3 gallery photos
// are 4:3. Rather than force it into the same square tile (which cropped
// away most of the frame), it gets its own full-width banner row at its
// true aspect ratio, and the certificate — a portrait document — keeps its
// own shape instead of being cropped to a square.
const [FIEO_ITEM] = RIIT.gallery.filter((img) => img.src.includes("fieo-training"));
const GRID_ITEMS = RIIT.gallery.filter((img) => !img.src.includes("fieo-training"));
const isCertificate = (img) => img.src.includes("certificate-of-appreciation");
// Alagappa MoU (1280x853, ~3:2) doesn't share the RIIT-inauguration photo's
// 4:3 shape — giving both the same aspect box would crop one of them.
const isWideFeatured = (img) => img.src.includes("alagappa-university-mou");

export default function Credibility() {
  return (
    <section id="riit" className="relative scroll-mt-20 bg-paper py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Centered, no kicker — deliberate variation from the
            kicker+heading+intro pattern repeated across other sections. */}
        <SectionHeading title={RIIT.heading} intro={RIIT.intro} align="center" />

        {/* Two co-featured flagship images: RIIT founding + Alagappa MoU */}
        <motion.div
          variants={stagger}
          {...inView}
          className="mt-8 grid gap-6 sm:grid-cols-2"
        >
          {RIIT.featured.map((img) => (
            <motion.div key={img.src} variants={fadeUp}>
              <div
                className={`relative w-full overflow-hidden rounded-xl ${
                  isWideFeatured(img) ? "aspect-[3/2]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
              <ImageCaption>{img.caption}</ImageCaption>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact documentary strip — each photo keeps its real shape.
            The certificate (a portrait document) is shown whole via
            object-contain rather than cropped to match its neighbours. */}
        <motion.div
          variants={stagger}
          {...inView}
          className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-3"
        >
          {GRID_ITEMS.map((img) => (
            <motion.div key={img.src} variants={fadeUp}>
              <div
                className={`relative w-full overflow-hidden rounded-lg ${
                  isCertificate(img) ? "aspect-[3/4] bg-white" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 390px, 45vw"
                  className={isCertificate(img) ? "object-contain p-2" : "object-cover"}
                />
              </div>
              {/* No line-clamp here — these captions carry names and dates
                  that are the section's evidence; truncating them mid-string
                  on mobile would be exactly the legibility bug this
                  below-image caption pattern exists to fix. */}
              <ImageCaption>{img.caption}</ImageCaption>
            </motion.div>
          ))}
        </motion.div>

        {FIEO_ITEM && (
          <motion.div variants={fadeUp} {...inView} className="mt-6">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "938 / 423" }}>
              <Image
                src={FIEO_ITEM.src}
                alt={FIEO_ITEM.alt}
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
            <ImageCaption>{FIEO_ITEM.caption}</ImageCaption>
          </motion.div>
        )}
      </div>
    </section>
  );
}

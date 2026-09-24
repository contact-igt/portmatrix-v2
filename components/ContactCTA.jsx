"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Globe, ArrowUpRight, Mail } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { CONTACT } from "@/lib/content";

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`${CONTACT.companyName}, ${CONTACT.addressLines.join(" ")}`);

const ACTIONS = [
  {
    icon: Phone,
    label: "Call now",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: MapPin,
    label: "Get directions",
    value: "Registered office, Chennai",
    href: mapsHref,
    external: true,
  },
  {
    icon: Globe,
    label: "Visit our website",
    value: CONTACT.website,
    href: CONTACT.websiteHref,
    external: true,
  },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="relative scroll-mt-20 bg-paper py-14 sm:py-20 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-hairline bg-white lg:grid lg:grid-cols-[1fr_0.9fr]">
          {/* left: details */}
          <motion.div variants={stagger} {...inView} className="bg-navy p-7 text-white sm:p-9">
            <motion.p variants={fadeUp} className="kicker text-brandred-300">
              Get in touch
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl"
            >
              Let&rsquo;s talk about your shipment
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 max-w-sm text-white/70">
              Government Licensed Customs Broker — reach us directly by
              phone or visit our registered office in Chennai.
            </motion.p>

            <motion.ul variants={stagger} className="mt-6 space-y-4 border-t border-white/10 pt-6">
              <motion.li variants={fadeUp} className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-brandred-300" />
                <span className="text-sm leading-relaxed text-white/80">
                  {CONTACT.companyName}
                  <br />
                  {CONTACT.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </motion.li>
              <motion.li variants={fadeUp} className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0 text-brandred-300" />
                <span className="text-sm text-white/80">
                  {CONTACT.emailRaw}
                  <span className="ml-2 text-xs text-white/40">
                    (as published — pending confirmation)
                  </span>
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* right: direct-contact actions — one clean list */}
          <motion.div variants={stagger} {...inView} className="flex flex-col justify-center p-7 sm:p-9">
            <motion.p variants={fadeUp} className="text-sm text-slatey">
              We typically respond within one business day.
            </motion.p>

            <div className="mt-6 divide-y divide-hairline border-y border-hairline">
              {ACTIONS.map((a) => {
                const Icon = a.icon;
                return (
                  <motion.a
                    key={a.label}
                    variants={fadeUp}
                    href={a.href}
                    target={a.external ? "_blank" : undefined}
                    rel={a.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-3 py-5 transition-colors hover:bg-paper"
                  >
                    <span className="flex items-center gap-3.5">
                      <Icon className="h-4 w-4 text-navy" />
                      <span>
                        <span className="block text-sm font-semibold text-ink">{a.label}</span>
                        <span className="block text-xs text-slatey">{a.value}</span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slatey/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/content";

// Short call-to-action only. The registered-office address, email, CIN and
// directions live on /contact — not repeated here. (id="contact" is the
// target of the hero's "Get in touch" anchor.)
export default function ContactCTA() {
  return (
    <section id="contact" className="relative scroll-mt-20 bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 border-t-2 border-navy pt-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <p className="kicker text-brandred">Get in touch</p>
            <h2 className="h2 mt-3 text-ink">Contact PORTMATRIX</h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-slatey">
              Reach {CONTACT.companyName} directly by phone, or find our registered office in Chennai.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={CONTACT.phones[0].href}
              className="inline-flex min-h-11 items-center gap-3 font-display text-2xl font-semibold text-navy sm:text-3xl"
            >
              <Phone className="h-5 w-5 text-brandred" aria-hidden="true" />
              {CONTACT.phones[0].display}
            </a>
            <Link href="/contact" className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy">
              <span className="border-b border-navy/30 pb-0.5 transition-colors group-hover:border-navy">
                Contact details and registered office
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

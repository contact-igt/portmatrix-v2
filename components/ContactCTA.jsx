import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/content";

// Contact details share the same source as /contact.
export default function ContactCTA() {
  return (
    <section id="contact" className="relative scroll-mt-20 bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 border-t-2 border-navy pt-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kicker text-brandred">Get in touch</p>
            <h2 className="h2 mt-3 text-ink">Contact PORTMATRIX</h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-slatey">
              Reach {CONTACT.companyName} directly by phone, or find our registered office in Chennai.
            </p>
            <address className="mt-6 not-italic text-base leading-relaxed text-slatey">
              <span className="block font-semibold text-ink">{CONTACT.companyName}</span>
              {CONTACT.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
            </address>
            <p className="mt-2 text-sm text-slatey">CIN: {CONTACT.cin}</p>
          </div>

          <div className="flex min-w-0 flex-col items-start gap-2">
            <ul className="space-y-1">
              {CONTACT.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className="inline-flex min-h-11 items-center gap-3 font-display text-2xl font-semibold text-navy hover:underline sm:text-3xl">
                    <Phone className="h-5 w-5 shrink-0 text-brandred" aria-hidden="true" />
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
            <a href={CONTACT.emailHref} className="inline-flex min-h-11 max-w-full items-center break-all text-base font-semibold text-navy hover:underline">
              {CONTACT.email}
            </a>
            <a href={CONTACT.websiteHref} className="inline-flex min-h-11 max-w-full items-center break-all text-base font-semibold text-navy hover:underline">
              {CONTACT.website}
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

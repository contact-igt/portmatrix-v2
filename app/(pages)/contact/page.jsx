import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import { MapPin, Phone, Globe, Mail, ArrowUpRight } from "lucide-react";
import { CONTACT, ORG_ID, SITE_URL } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us — Registered Office in Chennai",
  description:
    "Phone numbers, website and registered office address of PORTMATRIX Logistics Pvt. Ltd., Wavoo Mansion Annex, Rajaji Salai, Chennai, Tamil Nadu.",
  path: "/contact",
});

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`${CONTACT.companyName}, ${CONTACT.addressLines.join(" ")}`);

export default function ContactPage() {
  // The Organization node (with address, phone, CIN) is defined once on the
  // homepage; this page only references it by @id.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: "Contact PORTMATRIX",
    about: { "@id": ORG_ID },
    mainEntity: { "@id": ORG_ID },
  };

  return (
    <div className="mx-auto max-w-4xl px-5 pb-14 pt-6 sm:px-8 sm:pb-20 sm:pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />}
        kicker="Get in touch"
        title="Contact PORTMATRIX"
        intro="Reach us directly by phone, or visit our registered office in Chennai."
      />

      {/* Phone first, then the registered office, website and email, as
          ruled rows (label | value). No imagery. */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-navy bg-white px-5 sm:px-8">
        <section aria-labelledby="contact-phone" className="grid gap-3 border-b border-hairline py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <h2 id="contact-phone" className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-slatey">
            <Phone className="h-4 w-4 text-navy" aria-hidden="true" />
            Phone
          </h2>
          <ul className="space-y-1">
            {CONTACT.phones.map((ph) => (
              <li key={ph.display} className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                <a href={ph.href} className="inline-flex min-h-11 items-center text-navy hover:underline">
                  {ph.display}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contact-office" className="grid gap-3 border-b border-hairline py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <h2 id="contact-office" className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-slatey">
            <MapPin className="h-4 w-4 text-navy" aria-hidden="true" />
            Registered office
          </h2>
          <div>
            <address className="not-italic text-lg leading-relaxed text-ink/90">
              <span className="block font-display text-xl font-bold text-ink">{CONTACT.companyName}</span>
              {CONTACT.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
            <p className="mt-3 text-base text-slatey">CIN: {CONTACT.cin}</p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy hover:underline"
            >
              Get directions to our registered office
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section aria-labelledby="contact-web" className="grid gap-3 border-b border-hairline py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <h2 id="contact-web" className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-slatey">
            <Globe className="h-4 w-4 text-navy" aria-hidden="true" />
            Website
          </h2>
          <a
            href={CONTACT.websiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-lg font-semibold text-navy hover:underline"
          >
            {CONTACT.website}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>

        <section aria-labelledby="contact-email" className="grid gap-3 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <h2 id="contact-email" className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-slatey">
            <Mail className="h-4 w-4 text-navy" aria-hidden="true" />
            Email
          </h2>
          <div>
            <a href={CONTACT.emailHref} className="inline-flex min-h-11 max-w-full items-center break-all text-lg font-semibold text-navy hover:underline">
              {CONTACT.email}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

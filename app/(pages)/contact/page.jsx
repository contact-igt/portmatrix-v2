import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import { MapPin, Phone, Globe, Mail, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/content";

export const metadata = {
  title: "Contact Us",
  description: "Contact PORTMATRIX Logistics Pvt. Ltd. — registered office in Chennai, Tamil Nadu.",
  alternates: { canonical: "/contact" },
};

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`${CONTACT.companyName}, ${CONTACT.addressLines.join(" ")}`);

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CONTACT.companyName,
    url: CONTACT.websiteHref,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.addressLines.slice(0, 2).join(" ").replace(/,\s*$/, ""),
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phoneHref.replace("tel:", ""),
      contactType: "customer service",
    },
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />}
        kicker="Get in touch"
        title="Contact Us"
        intro="Reach us directly by phone, or visit our registered office in Chennai."
      />

      <div className="mt-10 overflow-hidden rounded-2xl border border-hairline">
        <div className="bg-navy p-7 text-white sm:p-9">
          <p className="font-display text-xl font-semibold">{CONTACT.companyName}</p>
          <div className="mt-4 flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brandred-300" />
            <p className="text-sm leading-relaxed text-white/80">
              {CONTACT.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Mail className="h-5 w-5 shrink-0 text-brandred-300" />
            <p className="text-sm text-white/80">
              {/* CLIENT_CONFIRMATION_REQUIRED: shown exactly as PDF p.87 prints it */}
              {CONTACT.emailRaw}
            </p>
          </div>
          <p className="mt-3 text-[13px] text-white/70">CIN: {CONTACT.cin}</p>
        </div>

        <div className="grid divide-y divide-hairline bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <a href={CONTACT.phoneHref} className="group flex flex-col gap-2 p-6 transition-colors hover:bg-navy-50">
            <Phone className="h-5 w-5 text-navy" />
            <span className="text-sm font-semibold text-ink">Call now</span>
            <span className="text-sm text-slatey">{CONTACT.phoneDisplay}</span>
            <ArrowUpRight className="mt-auto h-4 w-4 text-slatey transition-transform group-hover:translate-x-0.5 group-hover:text-navy" />
          </a>
          <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2 p-6 transition-colors hover:bg-navy-50">
            <MapPin className="h-5 w-5 text-navy" />
            <span className="text-sm font-semibold text-ink">Get directions</span>
            <span className="text-[13px] text-slatey">Registered office, Chennai</span>
            <ArrowUpRight className="mt-auto h-4 w-4 text-slatey transition-transform group-hover:translate-x-0.5 group-hover:text-navy" />
          </a>
          <a href={CONTACT.websiteHref} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2 p-6 transition-colors hover:bg-navy-50">
            <Globe className="h-5 w-5 text-navy" />
            <span className="text-sm font-semibold text-ink">Visit our website</span>
            <span className="text-[13px] text-slatey">{CONTACT.website}</span>
            <ArrowUpRight className="mt-auto h-4 w-4 text-slatey transition-transform group-hover:translate-x-0.5 group-hover:text-navy" />
          </a>
        </div>
      </div>
    </div>
  );
}

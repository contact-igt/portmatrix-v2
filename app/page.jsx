import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import ExportHandholding from "@/components/ExportHandholding";
import ChinaSourcing from "@/components/ChinaSourcing";
import OperationalProof from "@/components/OperationalProof";
import Credibility from "@/components/Credibility";
import MediaStrip from "@/components/MediaStrip";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/content";

// Organization + WebSite JSON-LD, homepage only, per
// docs/SEO_AEO_GEO_ARCHITECTURE.md. Every field below traces to a verified
// source fact (docs/source/PORTMATRIX_SOURCE_TEXT.txt p.87, p.86 for the
// CIN) — no rating, review count, opening hours, geo coordinates, founder
// data, or social profile URLs are included, since none are source-verified.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: CONTACT.companyName,
  url: CONTACT.websiteHref,
  logo: "https://www.portmatrix.in/images/source/branding/portmatrix-logo-primary.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.addressLines.slice(0, 2).join(" ").replace(/,\s*$/, ""),
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600001",
    addressCountry: "IN",
  },
  telephone: CONTACT.phoneHref.replace("tel:", ""),
  identifier: {
    "@type": "PropertyValue",
    name: "CIN",
    value: CONTACT.cin,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PORTMATRIX",
  url: CONTACT.websiteHref,
};

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <ExportHandholding />
      <ChinaSourcing />
      <OperationalProof />
      <Credibility />
      <MediaStrip />
      <ContactCTA />
      <Footer />
    </main>
  );
}

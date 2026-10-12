import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import ChinaSourcing from "@/components/ChinaSourcing";
import OperationalProof from "@/components/OperationalProof";
import Credibility from "@/components/Credibility";
import MediaStrip from "@/components/MediaStrip";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { CONTACT, ORG_ID, SITE_URL } from "@/lib/content";

// Organization + WebSite JSON-LD, homepage only. The homepage OWNS the
// Organization node (@id below); other routes reference it by @id instead of
// restating it. Every field traces to a verified source fact
// (docs/source/PORTMATRIX_SOURCE_TEXT.txt p.87; p.86 for the CIN) — no
// rating, review count, opening hours, geo, founder data, contactType or
// social profile URLs, since none are source-verified. `alternateName` is the
// V6 logo's own spelling "PortMatrix".
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: CONTACT.companyName,
  alternateName: "PortMatrix",
  url: CONTACT.websiteHref,
  logo: `${SITE_URL}/images/source/branding/portmatrix-logo-v6.png`,
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
  "@id": `${SITE_URL}/#website`,
  name: "PORTMATRIX",
  url: CONTACT.websiteHref,
  publisher: { "@id": ORG_ID },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Header />
      {/* Header is fixed; the Hero section carries its own top padding to
          clear it, exactly as before. */}
      <main className="relative">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <ChinaSourcing />
        <OperationalProof />
        <Credibility />
        <MediaStrip />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

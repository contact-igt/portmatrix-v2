import { Manrope, Inter } from "next/font/google";
import "./globals.css";

// Exactly two font families sitewide: Manrope for editorial hierarchy,
// Inter for body copy and utility UI. The official logo remains its own
// approved image asset and is never typeset or approximated by these fonts.
const display = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Canonical strategy: every page's canonical is derived from metadataBase +
// its own route via Next's automatic resolution — no page below sets an
// explicit `alternates.canonical` unless it needs to diverge from its own
// URL. Domain matches the verified source contact URL (docs/source/
// PORTMATRIX_SOURCE_TEXT.txt, p.87: "Website: www.portmatrix.in"). This
// module implements the foundation only; no page beyond `/` exists yet, and
// nothing here is deployed — see docs/SEO_AEO_GEO_ARCHITECTURE.md.
const SITE_URL = "https://www.portmatrix.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PORTMATRIX — Customs Broking & Export Handholding",
    template: "%s | PORTMATRIX",
  },
  description:
    "Government Licensed Customs Broker offering Customs Broking and End-to-End Export Handholding — from product selection and documentation to customs clearance, logistics and export proceeds realisation. China sourcing since 1974.",
  keywords: [
    "customs broker Chennai",
    "export handholding",
    "customs clearance India",
    "EXIM consultant",
    "China import sourcing",
    "DGFT consultancy",
    "MOOWR warehousing",
    "ICEGATE filing",
  ],
  openGraph: {
    title: "PORTMATRIX — Customs Broking & Export Handholding",
    description:
      "Government Licensed Customs Broker. Customs Broking and End-to-End Export Handholding, China sourcing since 1974.",
    type: "website",
    url: SITE_URL,
    siteName: "PORTMATRIX",
    locale: "en_IN",
    images: [
      {
        url: "/images/source/customs/hotel-supplies-inspection-netherlands-2024.png",
        width: 1600,
        height: 1200,
        alt: "PORTMATRIX product inspection of a hotel supplies shipment to the Netherlands, 2024",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTMATRIX — Customs Broking & Export Handholding",
    description:
      "Government Licensed Customs Broker. Customs Broking and End-to-End Export Handholding, China sourcing since 1974.",
    images: ["/images/source/customs/hotel-supplies-inspection-netherlands-2024.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#2E3192",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import MotionRoot from "@/components/MotionRoot";
import { DEFAULT_IMAGE } from "@/lib/seo";

// Exactly two font families sitewide: Manrope for editorial hierarchy,
// Inter for body copy and utility UI. The official logo remains its own
// approved image asset and is never typeset or approximated by these fonts.
const display = localFont({
  src: "../public/fonts/manrope-latin.woff2",
  weight: "500 700",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: "../public/fonts/inter-latin.woff2",
  weight: "400 700",
  variable: "--font-body",
  display: "swap",
});

// Canonicals use the official domain; share images use the deployment origin.
const SITE_URL = "https://www.portmatrix.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PORTMATRIX — Customs Broking & Export Handholding",
    template: "%s | PORTMATRIX",
  },
  description:
    "PORTMATRIX is a Customs Broking and End-to-End Export Handholding company supporting exporters and importers in navigating Customs, DGFT and international trade procedures. China Import Sourcing since 1974.",
  openGraph: {
    title: "PORTMATRIX — Customs Broking & Export Handholding",
    description:
      "PORTMATRIX is a Customs Broking and End-to-End Export Handholding company. China Import Sourcing since 1974.",
    type: "website",
    url: SITE_URL,
    siteName: "PORTMATRIX",
    locale: "en_IN",
    images: [DEFAULT_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTMATRIX — Customs Broking & Export Handholding",
    description:
      "PORTMATRIX is a Customs Broking and End-to-End Export Handholding company. China Import Sourcing since 1974.",
    images: [DEFAULT_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#013E7F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${body.variable}`}
    >
      <body className="font-sans antialiased">
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}

// One metadata builder so every page emits a complete, self-consistent set:
// title, description, canonical, a full openGraph block (url/type/siteName/
// locale/images) and matching twitter tags. Next replaces `openGraph`
// wholesale per page, so partial blocks silently drop og:url/og:type.
const SITE_NAME = "PORTMATRIX";
// Share images must be reachable on the deployment being shared.
const imageOrigin = process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.portmatrix.in");
export const DEFAULT_IMAGE = {
  url: new URL("/images/source/branding/portmatrix-og-v6.png", imageOrigin).href,
  type: "image/png",
  width: 1200,
  height: 630,
  alt: "PortMatrix",
};

export function buildMetadata({ title, description, path, image, absoluteTitle = false }) {
  const og = image ? (typeof image === "string" ? { url: image } : image) : DEFAULT_IMAGE;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [og],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [og.url],
    },
  };
}

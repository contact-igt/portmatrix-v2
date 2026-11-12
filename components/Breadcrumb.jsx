import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Reusable breadcrumb primitive for internal pages (M2B onward). Renders a
// visible trail plus matching BreadcrumbList JSON-LD in one place so every
// page that uses it stays consistent, per docs/SEO_AEO_GEO_ARCHITECTURE.md.
// `items` is an array of { label, href } — the last item renders as plain
// text (the current page), not a link.
// Tap area: links are 44px tall (min-h-11) with negative vertical margin so
// the visible trail stays compact — padding, not visible size.
export default function Breadcrumb({ items }) {
  const trail = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `https://www.portmatrix.in${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="-my-1.5 -ml-1 flex flex-wrap items-center text-sm text-slatey">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <span key={item.href} className="flex items-center">
              {i > 0 && <ChevronRight className="mx-1 h-3.5 w-3.5 shrink-0 text-slatey/70" aria-hidden="true" />}
              {isLast ? (
                <span className="inline-flex min-h-11 items-center font-medium text-ink" aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href} className="inline-flex min-h-11 items-center px-1 hover:text-navy hover:underline">
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}

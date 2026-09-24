import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Reusable breadcrumb primitive for internal pages (M2B onward). Renders a
// visible trail plus matching BreadcrumbList JSON-LD in one place so every
// page that uses it stays consistent, per docs/SEO_AEO_GEO_ARCHITECTURE.md.
// `items` is an array of { label, href } — the last item renders as plain
// text (the current page), not a link.
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
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slatey">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <span key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 text-slatey/50" />}
              {isLast ? (
                <span className="font-medium text-ink">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-navy hover:underline">
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

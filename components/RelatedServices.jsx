import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Contextual cross-links only — every usage passes an explicit, source-
// grounded relationship (see docs/SEO_AEO_GEO_ARCHITECTURE.md §"Internal
// linking graph"), never a generic "you might also like" grab-bag.
export default function RelatedServices({ title = "Related", items }) {
  return (
    <div className="border-t border-hairline pt-8">
      <p className="kicker text-brandred">{title}</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-hairline px-4 py-3.5 transition-colors hover:border-navy/30 hover:bg-navy-50"
            >
              <span className="text-sm font-semibold text-ink">{item.title}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-slatey/50 transition-transform group-hover:translate-x-0.5 group-hover:text-navy" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

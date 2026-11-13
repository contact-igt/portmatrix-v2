import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Contextual cross-links only — every usage passes an explicit, source-
// grounded relationship (see docs/SEO_AEO_GEO_ARCHITECTURE.md §"Internal
// linking graph"), never a generic "you might also like" grab-bag.
// Props: items [{title, href}], title (kicker label, default "Related").
// Ruled link rows (not boxed cards); each row is a >=44px tap target.
export default function RelatedServices({ title = "Related", items }) {
  return (
    <div className="border-t-2 border-ink pt-6">
      <p className={`${title.length > 32 ? "kicker-sentence" : "kicker"} text-brandred`}>{title}</p>
      <ul role="list" className="mt-3 grid gap-x-10 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href} className="border-b border-hairline">
            <Link
              href={item.href}
              className="group flex min-h-12 items-center justify-between gap-3 py-3 transition-colors hover:text-navy"
            >
              <span className="text-base font-semibold text-ink group-hover:text-navy">{item.title}</span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-slatey transition-transform group-hover:translate-x-0.5 group-hover:text-navy"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

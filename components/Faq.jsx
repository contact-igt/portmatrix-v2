import { HelpCircle } from "lucide-react";

// Visible, source-backed Q&A. Plain semantic HTML only — deliberately NO
// FAQPage structured data (not used for rich results). Use only where the
// source PDF can answer the question accurately; cite PDF pages in the
// calling data file's comments, not on screen.
// Props: items [{q, a}], title (default "Frequently asked questions").
// Layout: ruled <dl>; question (Manrope) left, answer right at lg+, stacked
// on small screens. Always visible — no accordions.
export default function Faq({ title = "Frequently asked questions", items }) {
  if (!items?.length) return null;
  return (
    <section className="mt-14 border-t-2 border-ink pt-8" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="h3 text-ink">{title}</h2>
      <dl className="mt-6 divide-y divide-hairline border-y border-hairline">
        {items.map((it) => (
          <div key={it.q} className="grid gap-x-12 gap-y-3 py-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <dt className="item-title flex items-start gap-3 text-ink">
              <HelpCircle className="mt-[0.2em] h-5 w-5 shrink-0 text-brandred-600" aria-hidden="true" />
              <span>{it.q}</span>
            </dt>
            <dd className="max-w-[68ch] text-base leading-[1.68] text-slatey sm:text-[1.0625rem] lg:pt-0.5">{it.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

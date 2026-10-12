// Small layout primitives shared by the scheme / regulatory service pages
// (MOOWR, Advance Authorisation, EPCG, SEZ, FTWZ, EOU, AEO). Layout only —
// they render whatever copy the pages pass in; they add no text of their own
// beyond the navigational "On this page" label. Private module (underscore
// file inside the services route group, not a route).
import { Check, ChevronDown } from "lucide-react";
import PageNav from "@/components/PageNav";

const GRID_COLS = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };

// Section whose heading sits in a left gutter on desktop (editorial /
// regulatory-document rhythm) and stacks on mobile. The H2 carries the id so
// it is a valid in-page anchor target.
export function Section({ id, title, children, className = "" }) {
  return (
    <section
      aria-labelledby={id}
      className={`border-t border-hairline pt-10 lg:grid lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-x-14 ${className}`}
    >
      <h2 id={id} className="h3 scroll-mt-24 text-ink">
        {title}
      </h2>
      <div className="mt-5 min-w-0 lg:mt-0">{children}</div>
    </section>
  );
}

// Anchor list for long pages (shared PageNav). items = [{ id, label }].
// Collapsed <details> on small screens so it never pushes content down.
export function OnThisPage({ items }) {
  return (
    <div className="mt-10">
      <details className="group border-y border-hairline lg:hidden">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between kicker text-slatey [&::-webkit-details-marker]:hidden">
          On this page
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <PageNav items={items} title="Sections" className="pb-2" />
      </details>
      <PageNav items={items} className="hidden lg:block" />
    </div>
  );
}

// Key-fact strip: ruled columns, each with an icon (visual aid only), a title
// and optional text / bullet list. items = [{ icon, title, text?, list? }]
export function FactStrip({ items, cols = 4, label }) {
  return (
    <ul
      aria-label={label}
      className={`grid divide-y divide-hairline border-y border-hairline sm:grid-cols-2 sm:divide-y-0 ${GRID_COLS[cols]} lg:divide-x`}
    >
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <li key={it.title} className="py-5 sm:px-5 sm:py-6 lg:first:pl-0 lg:last:pr-0">
            {Icon && <Icon className="h-6 w-6 text-navy" aria-hidden="true" />}
            <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{it.title}</p>
            {it.text && <p className="mt-1.5 text-base leading-relaxed text-slatey">{it.text}</p>}
            {it.list && (
              <ul className="mt-2 divide-y divide-hairline text-base text-ink/85">
                {it.list.map((l) => (
                  <li key={l} className="py-1.5">
                    {l}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// Step line: vertical rail on mobile, horizontal line of numbered nodes on
// desktop (wraps every `perRow`). Numerals only number the passed steps.
export function StepLine({ steps, start = 1, perRow = 4, label }) {
  const last = steps.length - 1;
  return (
    <ol start={start} aria-label={label} className={`grid ${GRID_COLS[perRow]} lg:gap-y-8`}>
      {steps.map((step, i) => {
        const rowEnd = (i + 1) % perRow === 0 || i === last;
        return (
          <li key={step} className="relative pb-6 pl-14 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-6 lg:pt-14">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy bg-white font-display text-base font-bold text-navy"
            >
              {start + i}
            </span>
            {i < last && <span aria-hidden="true" className="absolute left-5 top-11 bottom-0 w-px bg-navy/25 lg:hidden" />}
            {!rowEnd && <span aria-hidden="true" className="absolute left-12 right-3 top-5 hidden h-px bg-navy/25 lg:block" />}
            <p className="pt-1.5 text-base leading-relaxed text-ink/90 lg:pt-0">{step}</p>
          </li>
        );
      })}
    </ol>
  );
}

// Ruled list with a check mark per row (eligibility / compliance / benefits).
export function CheckList({ items, className = "" }) {
  return (
    <ul className={`divide-y divide-hairline border-y border-hairline ${className}`}>
      {items.map((it, i) => (
        <li key={typeof it === "string" ? it : i} className="flex gap-3 py-3.5 text-base leading-relaxed text-ink/90">
          <Check className="mt-1 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

// Plain ruled list (no marker) for authorities, documents, activities.
export function RuledList({ items, className = "" }) {
  return (
    <ul className={`divide-y divide-hairline border-y border-hairline ${className}`}>
      {items.map((it, i) => (
        <li key={typeof it === "string" ? it : i} className="py-3 text-base leading-relaxed text-ink/90">
          {it}
        </li>
      ))}
    </ul>
  );
}

// The one callout a page is allowed. Brand-red rule, white ground.
export function Callout({ id, title, children, className = "" }) {
  return (
    <section aria-labelledby={id} className={`border-l-4 border-brandred bg-white py-6 pl-6 pr-5 sm:py-8 sm:pl-8 sm:pr-8 ${className}`}>
      {title && (
        <h2 id={id} className="h3 scroll-mt-24 text-ink">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

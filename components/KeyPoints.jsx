// 3–6 scannable highlights as a ruled grid (not cards). Icons are visual aids
// only (lucide-react, aria-hidden); they must never imply anything the source
// does not say. Pass the icon component itself:
//   <KeyPoints items={[{ icon: Layers, title: "…", text: "…" }]} />
// Props: items [{icon?, title, text?}], title (optional section heading),
//   columns (2 | 3, default 3 at lg; always 2 at sm, 1 on mobile).
export default function KeyPoints({ title, items, columns = 3 }) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="mt-10" aria-label={title || "Key points"}>
      {title && <h2 className="h3 text-ink">{title}</h2>}
      <ul role="list" className={`${title ? "mt-5" : ""} grid gap-x-10 border-t-2 border-ink ${cols}`}>
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <li key={it.title} className="flex gap-4 border-b border-hairline py-6">
              {Icon && <Icon className="mt-0.5 h-6 w-6 shrink-0 text-navy" strokeWidth={1.6} aria-hidden="true" />}
              <div className="min-w-0">
                <p className="item-title text-ink">{it.title}</p>
                {it.text && <p className="mt-1.5 text-base leading-relaxed text-slatey">{it.text}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

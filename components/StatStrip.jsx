// StatStrip — a ruled strip of key figures. Values and labels must come from
// the approved source verbatim (e.g. "17" / "services"); never invent figures.
//
// USAGE
//   <StatStrip items={[{ value: "17", label: "services" }, { value: "…", label: "…" }]} />
//   Props: items [{value,label}], light (on dark background), className.
// Semantics: <dl> (label = dt, value = dd, shown value-first). Columns auto-fit (min 8.5rem). Works well as a PageIntro `aside`.
export default function StatStrip({ items, light = false, className = "" }) {
  if (!items?.length) return null;
  const rule = light ? "border-white/25" : "border-hairline";
  const top = light ? "border-white" : "border-ink";
  return (
    <dl className={`grid grid-cols-[repeat(auto-fit,minmax(8.5rem,1fr))] gap-x-8 border-t-2 ${top} ${className}`}>
      {items.map((it) => (
        <div key={`${it.value}-${it.label}`} className={`flex flex-col-reverse justify-end gap-1 border-b ${rule} py-4`}>
          <dt className={`text-[0.9375rem] leading-snug ${light ? "text-white/75" : "text-slatey"}`}>{it.label}</dt>
          <dd className={`font-display text-3xl font-bold tabular-nums tracking-tight ${light ? "text-white" : "text-ink"}`}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}

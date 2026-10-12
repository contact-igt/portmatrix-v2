// Renders one of the source's own flow charts as a numbered step list — the
// native-component treatment the Image Map recommended in place of
// re-embedding the (text-baked) infographic images. Always a real <ol>.
//
// Props:
//   steps    string[]  — the existing step text, unchanged
//   title    string?   — optional label above the list
//   variant  "default" | "rail" | "compact"
//              default: connected numbered circles (original look, numerals 14px+)
//              rail:    large Manrope numerals on a vertical rule (editorial)
//              compact: tight ruled list, small numerals — for long flows
//   start    number?   — first numeral (default 1); also sets <ol start>
const NUMERAL_BASE = "font-display font-bold tabular-nums text-navy";

export default function ProcessFlow({ title, steps, variant = "default", start = 1 }) {
  const n = (i) => start + i;

  let list;
  if (variant === "rail") {
    list = (
      <ol role="list" start={start} className="flex flex-col">
        {steps.map((step, i) => (
          <li
            key={step}
            className={`relative grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-4 pb-7 last:pb-0 ${
              i < steps.length - 1 ? "before:absolute before:bottom-0 before:left-6 before:top-12 before:w-px before:bg-navy/25" : ""
            }`}
          >
            <span className={`${NUMERAL_BASE} text-center text-[2rem] leading-[1.15]`} aria-hidden="true">
              {n(i)}
            </span>
            <span className="max-w-[62ch] pt-1.5 text-[1.0625rem] leading-relaxed text-ink">{step}</span>
          </li>
        ))}
      </ol>
    );
  } else if (variant === "compact") {
    list = (
      <ol role="list" start={start} className="divide-y divide-hairline border-y border-hairline">
        {steps.map((step, i) => (
          <li key={step} className="flex items-baseline gap-4 py-2.5">
            <span className={`${NUMERAL_BASE} w-6 shrink-0 text-[0.9375rem]`} aria-hidden="true">
              {n(i)}
            </span>
            <span className="text-[0.9375rem] leading-snug text-ink/90">{step}</span>
          </li>
        ))}
      </ol>
    );
  } else {
    list = (
      <ol role="list" start={start} className="flex flex-col border-l border-hairline pl-5">
        {steps.map((step, i) => (
          <li key={step} className="relative flex gap-4 pb-5 last:pb-0">
            <span
              className="relative -ml-9 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-white text-sm font-bold tabular-nums text-navy"
              aria-hidden="true"
            >
              {n(i)}
            </span>
            <span className="pt-1 text-base leading-relaxed text-ink/85">{step}</span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="my-6">
      {title && <p className="mb-4 text-base font-semibold text-ink">{title}</p>}
      {list}
    </div>
  );
}

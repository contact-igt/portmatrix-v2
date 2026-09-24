// Renders one of the source's own flow charts as a connected, numbered
// step diagram — the native-component treatment the Image Map recommended
// in place of re-embedding the (text-baked) infographic images.
export default function ProcessFlow({ title, steps }) {
  return (
    <div className="my-6">
      {title && <p className="mb-4 text-sm font-semibold text-ink">{title}</p>}
      <ol className="flex flex-col border-l border-hairline pl-5">
        {steps.map((step, i) => (
          <li key={step} className="relative flex gap-4 pb-5 last:pb-0">
            <span className="relative -ml-9 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-white text-xs font-bold text-navy">
              {i + 1}
            </span>
            <span className="pt-1 text-[15px] leading-relaxed text-ink/85">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

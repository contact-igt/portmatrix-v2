import { Info, Lightbulb, AlertCircle } from "lucide-react";

// Callout — ONE worked-example / key-fact box per page, max. Pass the source's
// existing text as children; do not use it to add new copy.
//
// USAGE
//   <Callout title="Worked example" tone="example">…children…</Callout>
//   Props: title (string, optional), children, tone "key" (default, navy rule) |
//   "example" (brand-red rule) | "note" (neutral grey rule), icon (lucide
//   component override, optional).
// Flat white panel, 4px left rule, no shadow/gradient.
const TONES = {
  key: { rule: "border-navy", icon: Info, iconColor: "text-navy" },
  example: { rule: "border-brandred", icon: Lightbulb, iconColor: "text-brandred-600" },
  note: { rule: "border-slatey", icon: AlertCircle, iconColor: "text-slatey" },
};

export default function Callout({ title, children, tone = "key", icon, className = "" }) {
  const t = TONES[tone] || TONES.key;
  const Icon = icon || t.icon;
  return (
    <aside
      role="note"
      className={`my-8 max-w-[68ch] border-l-4 ${t.rule} border-y border-r border-y-hairline border-r-hairline bg-white px-5 py-5 sm:px-6 ${className}`}
    >
      {title && (
        <p className="item-title flex items-center gap-2.5 text-ink">
          <Icon className={`h-5 w-5 shrink-0 ${t.iconColor}`} aria-hidden="true" />
          {title}
        </p>
      )}
      <div className={`${title ? "mt-2.5" : ""} text-base leading-[1.65] text-ink/85 sm:text-[1.0625rem]`}>{children}</div>
    </aside>
  );
}

import { Handshake } from "lucide-react";

// PORTMATRIX's own role for a service — pass the source's existing role
// sentence (facilitate / guides / assists / supports / advises / trains)
// unchanged; never promise an outcome.
// Props: children (the role sentence). Ruled block: heading + icon
// above, statement below (stacks, so it works in any column width).
export default function HowPortmatrixHelps({ children }) {
  return (
    <section
      className="mt-10 max-w-[68ch] border-t-2 border-ink pt-6"
      aria-labelledby="how-helps"
    >
      <h2 id="how-helps" className="h3 flex items-start gap-3 text-ink">
        <Handshake className="mt-[0.18em] h-6 w-6 shrink-0 text-navy" strokeWidth={1.6} aria-hidden="true" />
        <span>How PORTMATRIX helps</span>
      </h2>
      <p className="mt-3 text-lg leading-[1.65] text-ink/85">{children}</p>
    </section>
  );
}

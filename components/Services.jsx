import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICE_ONE_LINERS } from "@/lib/content";

// Homepage index of the 17 core services (PDF pp.4–7): number, title and a
// one-line description. Every row links to its own route. The full group
// structure and full descriptions live on /services.
export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 border-b border-hairline pb-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="h2 text-ink">Core Services</h2>
          <Link
            href="/services"
            className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-navy"
          >
            <span className="border-b border-navy/30 pb-0.5 transition-colors duration-150 group-hover:border-navy">
              All 17 core services, grouped
            </span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ol className="grid divide-y divide-hairline border-b border-hairline sm:grid-cols-2 sm:divide-y-0">
          {SERVICES.map((s, i) => (
            <li
              key={s.n}
              className={`sm:border-b sm:border-hairline ${i % 2 === 1 ? "sm:border-l" : ""} ${
                i >= SERVICES.length - 1 ? "sm:border-b-0" : ""
              }`}
            >
              <Link
                href={s.href}
                className="group flex gap-5 px-1 py-5 transition-colors hover:bg-paper sm:px-8"
              >
                <span className="font-display text-sm font-semibold tabular-nums text-brandred-600 transition-colors group-hover:text-brandred">
                  {String(s.n).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg font-bold text-ink transition-colors group-hover:text-navy">
                    {s.title}
                  </span>
                  <span className="mt-1.5 block text-base leading-relaxed text-slatey">
                    {SERVICE_ONE_LINERS[s.n]}
                  </span>
                </span>
                <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-navy/40 transition-colors group-hover:text-navy" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

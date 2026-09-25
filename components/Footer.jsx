import Logo from "./Logo";
import { NAV, CONTACT } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="bg-blueprint-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-block">
              <Logo variant="light" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              PORTMATRIX is a Customs Broking and End-to-End Export
              Handholding company.
            </p>
            <p className="mt-5 text-[13px] uppercase tracking-wide text-white/70">
              Allied: Regional Institute of International Trade (RIIT)
            </p>
          </div>

          <div>
            {/* Nav-group label, not a content heading — kept out of the
                h1-h6 hierarchy so it never skips a level on pages whose
                content stops at H2 (see docs/TYPOGRAPHY_AND_HEADING_AUDIT.md). */}
            <p className="text-[13px] uppercase tracking-[0.16em] text-white/70" role="heading" aria-level="2">
              Explore
            </p>
            <ul className="mt-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] uppercase tracking-[0.16em] text-white/70" role="heading" aria-level="2">
              Reach us
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href={CONTACT.phoneHref} className="inline-flex min-h-11 items-center hover:text-white">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>{CONTACT.addressLines[2]}</li>
            </ul>
            <a
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-[13px] text-white/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {CONTACT.companyName} All rights
            reserved. · CIN: {CONTACT.cin}
          </p>
        </div>
      </div>
    </footer>
  );
}

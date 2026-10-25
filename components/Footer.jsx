import Link from "next/link";
import Logo from "./Logo";
import { SERVICE_GROUPS, CONTACT } from "@/lib/content";

// Static, server-rendered link groups: every page on the site is reachable
// from the footer of every page (crawlable without JS or menu interaction).
const COMPANY = [
  { label: "About PORTMATRIX", href: "/about" },
  { label: "Rahim Iyaz", href: "/about/rahim-iyaz" },
  { label: "China Import Sourcing", href: "/china-import-sourcing" },
  { label: "Canton Fair", href: "/china-import-sourcing/canton-fair" },
  { label: "Media & Press", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const RIIT_LINKS = [
  { label: "RIIT overview", href: "/riit" },
  { label: "Courses & Certificate Programmes", href: "/riit/courses" },
  { label: "Training Events", href: "/riit/training-events" },
];

const linkClass =
  "inline-flex min-h-11 items-center text-[0.9375rem] text-white/75 transition-colors hover:text-white";
const labelClass = "text-sm font-semibold uppercase tracking-[0.12em] text-white/75";

export default function Footer() {
  const services = SERVICE_GROUPS.flatMap((g) => g.items);

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.6fr_1fr]">
          <div>
            <div className="inline-block">
              <Logo variant="light" />
            </div>
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-white/75">
              PORTMATRIX is a Customs Broking and End-to-End Export Handholding company.
            </p>
            <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-white/75">
              Allied: Regional Institute of International Trade (RIIT)
            </p>
            <ul className="mt-5 space-y-1 text-[0.9375rem] text-white/75">
              <li>
                <a href={CONTACT.phoneHref} className="inline-flex min-h-11 items-center hover:text-white">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="inline-flex min-h-11 max-w-full items-center break-all hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.addressLines[2]}</li>
            </ul>
          </div>

          <nav aria-label="Footer: services">
            <p className={labelClass}>Services</p>
            <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={linkClass}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <nav aria-label="Footer: company">
              <p className={labelClass}>Company</p>
              <ul className="mt-3">
                {COMPANY.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer: RIIT">
              <p className={labelClass}>RIIT</p>
              <ul className="mt-3">
                {RIIT_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-5 text-sm text-white/75 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {CONTACT.companyName} All rights reserved. · CIN: {CONTACT.cin}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { NAV, SERVICE_GROUPS, CONTACT } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const toggleBtnRef = useRef(null);
  const drawerRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keep the mobile drawer self-contained: Escape closes it, Tab cycles
  // inside it, and focus returns to the visible header control on close.
  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      const focusable = drawerRef.current?.querySelectorAll('a, button');
      focusable?.[0]?.focus();
      const onKeyDown = (e) => {
        if (e.key === "Escape") setOpen(false);
        if (e.key === "Tab" && focusable?.length) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
    if (wasOpenRef.current) toggleBtnRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!desktopMenuOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && setDesktopMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [desktopMenuOpen]);

  const closeAll = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(226,230,242,1)]"
          : "bg-transparent"
      }`}
    >
      {/* relative + z-50: keeps the bar itself above the mobile backdrop
          (z-40 below) so the logo/toggle are never dimmed under it — the
          bug where opening the drawer visually "hid" the whole header. */}
      <div className="relative z-50 mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="PortMatrix home">
          <Logo priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDesktopMenuOpen(true)}
                onMouseLeave={() => setDesktopMenuOpen(false)}
              >
                <button
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-navy-50 hover:text-navy xl:px-4"
                  onClick={() => setDesktopMenuOpen((v) => !v)}
                  aria-expanded={desktopMenuOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${desktopMenuOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {desktopMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-[min(640px,calc(100vw-2.5rem))] rounded-2xl border border-hairline bg-white p-6 shadow-lift"
                    >
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {SERVICE_GROUPS.map((group) => (
                          <div key={group.label}>
                            <p className="kicker text-brandred">{group.label}</p>
                            <ul className="mt-3 space-y-2">
                              {group.items.map((svc) => (
                                <li key={svc.href}>
                                  <Link
                                    href={svc.href}
                                    onClick={() => setDesktopMenuOpen(false)}
                                    className="text-sm text-ink/80 transition-colors hover:text-navy hover:underline"
                                  >
                                    {svc.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 border-t border-hairline pt-4">
                        <Link
                          href="/services"
                          onClick={() => setDesktopMenuOpen(false)}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline"
                        >
                          View all 17 services
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-navy-50 hover:text-navy xl:px-4"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-ink/70 transition-colors hover:text-navy xl:flex"
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="group flex items-center gap-1.5 whitespace-nowrap rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle — single control, swaps Menu/X, min 44x44px tap
            target, stays above the backdrop at every state. */}
        <button
          ref={toggleBtnRef}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAll}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              ref={drawerRef}
              className="fixed right-0 top-[68px] z-40 flex h-[calc(100%-68px)] w-[82%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-lift lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
            >
              <nav className="flex flex-col gap-1">
                {NAV.map((item, i) =>
                  item.label === "Services" ? (
                    <div key="services-mobile">
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-navy-50 hover:text-navy"
                        aria-expanded={mobileServicesOpen}
                      >
                        Services
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {SERVICE_GROUPS.map((group) => (
                              <div key={group.label} className="mt-3 first:mt-2">
                                <p className="kicker text-brandred">{group.label}</p>
                                <ul className="mt-2 space-y-1">
                                  {group.items.map((svc) => (
                                    <li key={svc.href}>
                                      <Link
                                        href={svc.href}
                                        onClick={closeAll}
                                        className="block rounded-lg px-2 py-1.5 text-sm text-ink/80 hover:bg-navy-50 hover:text-navy"
                                      >
                                        {svc.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <Link
                              href="/services"
                              onClick={closeAll}
                              className="mt-3 block px-2 py-2 text-sm font-semibold text-navy"
                            >
                              View all 17 services →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-navy-50 hover:text-navy"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>

              <div className="mt-auto space-y-3 border-t border-hairline pt-6">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2 text-sm font-medium text-slatey"
                >
                  <Phone className="h-4 w-4 text-navy" /> {CONTACT.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

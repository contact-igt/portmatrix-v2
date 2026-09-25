// Reusable Framer Motion variants. Keep motion purposeful and subtle.

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Mount-triggered reveal (fires once on load rather than on scroll).
// whileInView/IntersectionObserver-gated reveals can be throttled or never
// fire for backgrounded/prerendered tabs, permanently hiding content at
// opacity:0 — not an acceptable risk for real content, so every section
// animates in on mount instead.
// initial:false — content is server-rendered visible and never depends on
// JS to appear (MOTION_INTENSITY 2: hierarchy over entrance effects).
export const inView = {
  initial: false,
  animate: "show",
};

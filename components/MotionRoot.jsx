"use client";

import { MotionConfig } from "framer-motion";

// Framer Motion ignores the CSS prefers-reduced-motion rule in globals.css;
// "user" makes every motion component honour the OS setting too.
export default function MotionRoot({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 24,
    stiffness: 120,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
        boxShadow: "0 0 16px color-mix(in srgb, var(--accent) 55%, transparent)",
      }}
    />
  );
}

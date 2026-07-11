"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 250, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 250, mass: 0.4 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!hasFinePointer || reducedMotion) return;

    // Feature detection requires browser APIs unavailable during SSR, so
    // this can only be known after mount - a legitimate effect + setState.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);

    function onMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-8 w-8 rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0.15) 55%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

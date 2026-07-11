"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function ExploreCard({
  href,
  title,
  description,
  accent,
  accent2,
  icon,
  index,
  className,
}: {
  href: string;
  title: string;
  description: string;
  accent: string;
  accent2: string;
  icon: ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <Link
        href={href}
        className="card group flex h-full flex-col justify-between rounded-xl p-6 transition-colors duration-300 hover:border-line-strong"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
          style={{
            background: `radial-gradient(circle, ${accent}, ${accent2})`,
          }}
        />
        <div className="relative">
          <div className="flex items-start justify-between">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-full"
              style={{
                background: `color-mix(in srgb, ${accent} 16%, transparent)`,
                color: accent,
              }}
            >
              {icon}
            </span>
            <span
              aria-hidden="true"
              className="font-display text-xs text-muted"
            >
              {String(index).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-display-sm mt-4">{title}</h3>
          <p className="text-body mt-2">{description}</p>
        </div>
        <span
          aria-hidden="true"
          className="relative mt-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:border-line-strong group-hover:text-text"
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}

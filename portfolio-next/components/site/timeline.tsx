"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type TimelineEntry = {
  date: string;
  company?: string;
  role: string;
  note?: string;
  logo?: string;
  logoAlt?: string;
  bullets: string[];
  chips: string[];
  dotColor: string;
};

export function Timeline({
  entries,
  chapters,
}: {
  entries: TimelineEntry[];
  chapters: Record<number, string>;
}) {
  return (
    <div className="relative grid gap-5 pl-9">
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-[13px] top-2 w-[3px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, var(--accent), var(--work), var(--travel), var(--accent-2))",
          boxShadow: "0 0 24px color-mix(in srgb, var(--accent) 45%, transparent)",
        }}
      />

      {entries.map((entry, i) => (
        <div key={entry.date} className="contents">
          {chapters[i] && (
            <div className="text-eyebrow -ml-9 pl-9">{chapters[i]}</div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="card relative -ml-9 rounded-2xl p-5 pl-9"
          >
            <span
              aria-hidden="true"
              className="absolute left-[6px] top-6 h-4 w-4 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${entry.dotColor}, var(--accent-2))`,
                boxShadow: `0 0 0 6px color-mix(in srgb, ${entry.dotColor} 14%, transparent), 0 0 20px color-mix(in srgb, ${entry.dotColor} 55%, transparent)`,
              }}
            />
            <time className="text-xs uppercase tracking-[0.12em] text-muted">
              {entry.date}
            </time>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              {entry.logo && (
                <Image
                  src={entry.logo}
                  alt={entry.logoAlt ?? ""}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl object-cover"
                />
              )}
              <h3 className="text-display-sm">
                {entry.role}
                {entry.note && (
                  <span className="ml-2 text-sm font-medium text-muted">
                    {entry.note}
                  </span>
                )}
              </h3>
            </div>
            <ul className="mt-3 grid gap-2">
              {entry.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-body relative pl-5 before:absolute before:left-0 before:content-['▹'] before:text-accent"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-surface-sunken px-3 py-1 text-xs text-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

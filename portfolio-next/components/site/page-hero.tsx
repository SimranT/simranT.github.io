"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function PageHero({
  eyebrow,
  title,
  description,
  stats,
}: {
  eyebrow: string;
  title: string;
  description: string;
  stats?: { label: string; value: string }[];
}) {
  return (
    <section className="rounded-xl border-line relative mt-6 overflow-hidden border px-6 py-10 sm:px-10 sm:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(145deg, color-mix(in srgb, var(--accent) 10%, transparent), color-mix(in srgb, var(--accent-2) 6%, transparent)), var(--surface)",
        }}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative"
      >
        <motion.div variants={item} className="text-eyebrow">
          {eyebrow}
        </motion.div>
        <motion.h1
          variants={item}
          className="text-display-md mt-3 max-w-3xl text-balance"
        >
          {title}
        </motion.h1>
        <motion.p variants={item} className="text-body-lg mt-4 max-w-2xl">
          {description}
        </motion.p>

        {stats && stats.length > 0 && (
          <motion.div
            variants={item}
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="card rounded-2xl px-4 py-4">
                <strong className="font-display block text-base font-semibold">
                  {stat.value}
                </strong>
                <span className="text-xs text-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

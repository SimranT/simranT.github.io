"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const side: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

const stats = [
  { label: "Pipelines & insight", value: "Data" },
  { label: "Applied intelligence", value: "Systems" },
  { label: "Stories from the road", value: "Travel" },
  { label: "Templates & guides", value: "Shop" },
];

export function Hero() {
  return (
    <section className="rounded-xl border-line relative mt-6 overflow-hidden border px-6 py-14 sm:px-10 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(145deg, color-mix(in srgb, var(--accent) 12%, transparent), color-mix(in srgb, var(--accent-2) 8%, transparent)), var(--surface)",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-90px] -z-10 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 28%, transparent), transparent 70%)",
        }}
        animate={{ y: [0, -14, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[-20%] -z-10 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent-2) 30%, transparent), transparent 72%)",
        }}
        animate={{ y: [0, -14, 0], scale: [1, 1.03, 1] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-px w-[125%] -translate-x-1/2 -translate-y-1/2 -rotate-[8deg] opacity-55"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 85%, transparent), color-mix(in srgb, var(--accent-2) 85%, transparent), transparent)",
        }}
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative"
        >
          <motion.div
            variants={item}
            className="text-eyebrow inline-flex items-center gap-2"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent to-accent-2"
            />
            Data Analytics Engineer &middot; Applied intelligence &middot; traveler
          </motion.div>

          <motion.h1 variants={item} className="text-display-lg mt-5 text-balance">
            Simran Tiwari
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-sm font-medium text-muted">
            How to pronounce: Sim-ran Tih-wa-ree
          </motion.p>

          <motion.p variants={item} className="text-body-lg mt-6 max-w-xl">
            I design the pipelines and systems that turn scattered, messy data
            into decisions people actually trust — the engineering underneath
            the insight, not just the chart on top of it.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="primary" size="lg">
              <a href="#labs-teaser">Try a live lab &darr;</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/work">See my work</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#about">About me</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={side}
          className="relative lg:mt-12"
        >
          <div
            className="rounded-2xl p-5"
            style={{
              background: "var(--accent-warm-soft)",
              border:
                "1px solid color-mix(in srgb, var(--accent-warm) 35%, transparent)",
            }}
          >
            <p
              className="font-display text-[17px] italic leading-snug"
              style={{ color: "var(--text)" }}
            >
              &ldquo;If it can be measured, I&apos;ve probably already built a
              system that makes sense of it.&rdquo;
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.value} className="card rounded-2xl px-4 py-4">
                <strong className="font-display block text-base font-semibold">
                  {stat.value}
                </strong>
                <span className="text-xs text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type RouteStop = { emoji: string; label: string; duration?: string };
export type StatItem = { label: string; value: string };
export type ExtraItem = { title: string; text: string };
export type MomentItem = { emoji: string; label: string; text: string };

export type Country = {
  slug: string;
  name: string;
  flag: string;
  image: string;
  imageAlt: string;
  teaser: string;
  title: string;
  quote: string;
  lede: string;
  route?: RouteStop[];
  stats: StatItem[];
  bridgeLabel?: string;
  bridgeText?: string;
  extrasHeading: string;
  extras: ExtraItem[];
  moments: MomentItem[];
  tips: string[];
  mapHref?: string;
  mapLabel?: string;
  shopHref: string;
  shopLabel: string;
};

export function CountryExplorer({ countries }: { countries: Country[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const open = countries.find((c) => c.slug === openSlug);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {countries.map((c) => {
          const isOpen = openSlug === c.slug;
          return (
            <button
              key={c.slug}
              type="button"
              onClick={() => setOpenSlug(isOpen ? null : c.slug)}
              aria-expanded={isOpen}
              className="card group relative flex flex-col overflow-hidden rounded-2xl text-left transition-colors duration-300 hover:border-line-strong"
              style={isOpen ? { borderColor: "var(--travel)" } : undefined}
            >
              <div className="relative h-36 w-full overflow-hidden sm:h-40">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-3 top-3 rounded-full bg-black/40 px-2 py-1 text-base backdrop-blur-sm"
                >
                  {c.flag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-display-sm">{c.name}</h3>
                <p className="text-body flex-1">{c.teaser}</p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--travel)" }}
                >
                  {isOpen ? "Close the story" : "Read the full story"}
                  <span
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key={open.slug}
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <CountryStory country={open} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CountryStory({ country }: { country: Country }) {
  return (
    <div className="card mt-6 rounded-2xl p-6 sm:p-10">
      <div className="glass relative mx-auto h-56 w-full max-w-md overflow-hidden rounded-2xl sm:h-64">
        <Image
          src={country.image}
          alt={country.imageAlt}
          fill
          sizes="400px"
          className="object-cover"
        />
      </div>

      <h3 className="text-display-md mt-6 text-balance">{country.title}</h3>
      <blockquote
        className="font-display mt-4 border-l-2 pl-5 text-lg italic leading-snug text-text"
        style={{ borderColor: "var(--travel)" }}
      >
        &ldquo;{country.quote}&rdquo;
      </blockquote>
      <p className="text-body mt-4 max-w-2xl">{country.lede}</p>

      {country.route && (
        <div className="mt-6 flex flex-wrap items-start justify-center gap-x-1 gap-y-4 rounded-2xl border border-line bg-surface-sunken px-4 py-6 sm:px-6">
          {country.route.map((stop, i) => (
            <div key={stop.label} className="flex items-start">
              <div className="flex w-20 flex-col items-center gap-2 text-center">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 bg-surface-strong text-lg"
                  style={{
                    borderColor: "var(--travel)",
                    boxShadow: "0 0 0 5px var(--surface-sunken)",
                  }}
                >
                  {stop.emoji}
                </span>
                <span className="text-xs font-semibold leading-tight">
                  {stop.label}
                </span>
                {stop.duration && (
                  <span className="text-[11px] text-muted">
                    {stop.duration}
                  </span>
                )}
              </div>
              {i < country.route!.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-1 self-center pb-6 text-muted"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {country.stats.map((s) => (
          <div key={s.label} className="card rounded-2xl p-4">
            <span className="text-eyebrow">{s.label}</span>
            <p className="text-body mt-1.5 text-text">{s.value}</p>
          </div>
        ))}
      </div>

      {country.bridgeText && (
        <div
          className="mt-6 rounded-r-xl border-l-2 bg-surface-sunken px-5 py-4"
          style={{ borderColor: "var(--travel)" }}
        >
          <span
            className="text-eyebrow"
            style={{ color: "var(--travel)" }}
          >
            {country.bridgeLabel}
          </span>
          <p className="text-body mt-2">{country.bridgeText}</p>
        </div>
      )}

      <h4 className="text-display-sm mt-8">{country.extrasHeading}</h4>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {country.extras.map((e) => (
          <div
            key={e.title}
            className="rounded-2xl border border-line bg-surface-sunken p-4"
          >
            <strong className="block text-[15px]">{e.title}</strong>
            <span className="text-sm text-muted">{e.text}</span>
          </div>
        ))}
      </div>

      <h4 className="text-display-sm mt-8">Moments that stuck</h4>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {country.moments.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-line bg-surface-sunken p-4"
          >
            <div
              className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--travel)" }}
            >
              <span aria-hidden="true">{m.emoji}</span> {m.label}
            </div>
            <p className="text-sm text-text">{m.text}</p>
          </div>
        ))}
      </div>

      <h4 className="text-display-sm mt-8">A few tips</h4>
      <ul className="text-body mt-3 list-disc space-y-2 pl-5 marker:text-muted">
        {country.tips.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      {country.mapHref && (
        <a
          href={country.mapHref}
          target="_blank"
          rel="noopener"
          className="card mt-6 flex items-center gap-4 rounded-2xl p-5"
        >
          <span aria-hidden="true" className="text-2xl">
            🗺️
          </span>
          <span className="flex-1">
            <strong className="block text-[15px] font-semibold">
              Every place I saved, on one map
            </strong>
            <span className="text-sm text-muted">{country.mapLabel}</span>
          </span>
          <span aria-hidden="true" className="text-muted">
            →
          </span>
        </a>
      )}

      <div className="mt-8 rounded-2xl border border-dashed border-line-strong p-6">
        <p className="text-body">
          The exact costs, day-by-day route, and a few more finds are in the{" "}
          {country.name} Travel Pack.
        </p>
        <Link
          href={country.shopHref}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "var(--travel)" }}
        >
          {country.shopLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Analytics Playground — Simran's Space",
  description:
    "An analytics playground by Simran Tiwari — interactive labs and case studies, each one a real working tool, not a screenshot.",
};

const steps = [
  {
    num: "01",
    title: "Browse",
    text: "Each lab tackles one real problem, with its own colors and its own way of thinking about it.",
  },
  {
    num: "02",
    title: "Open one",
    text: "No sign-up, no account, no download — just click in and it's ready.",
  },
  {
    num: "03",
    title: "Play with it",
    text: "Every number you enter changes the output live, right there in your browser.",
  },
];

const labs = [
  {
    href: "/travel-explorer.html",
    icon: "✈️",
    title: "Travel Cost Explorer",
    description:
      "Compare destinations side by side, simulate trip costs, and explore seasonal pricing before you book anything.",
    tags: ["Beginner friendly", "~10 min"],
    accent: "#46d9c0",
  },
  {
    href: "/data-detective.html",
    icon: "🕵️",
    title: "Data Detective",
    description:
      "Turn a business mystery into an investigation — dashboards, SQL clues, and a case to crack.",
    tags: ["Medium", "~15 min"],
    accent: "#c9a44e",
  },
  {
    href: "/kpi-builder.html",
    icon: "📉",
    title: "KPI Builder",
    description:
      "Pick an industry and objective, get back the KPIs, SQL starters, and dashboard layout that actually fit.",
    tags: ["Beginner friendly", "~10 min"],
    accent: "#3fb88a",
  },
  {
    href: "/business-case.html",
    icon: "📦",
    title: "Business Case Challenge",
    description:
      "Read a real business situation, weigh the data, and pick the recommendation you'd defend to a board.",
    tags: ["Intermediate", "~15 min"],
    accent: "#e08a3c",
  },
  {
    href: "/sql-playground.html",
    icon: "💻",
    title: "SQL Playground",
    description:
      "A real SQLite engine in your browser — write actual queries against two sample datasets, or work through challenges.",
    tags: ["All levels", "~15 min"],
    accent: "#39ff9c",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-20">
      <PageHero
        eyebrow="Analytics Playground"
        title="Real problems, built to actually play with."
        description="Every experience here is a full working tool, not a screenshot of one. Pick a lab below and put your own numbers into it — nothing to sign up for, nothing to install."
        stats={[
          { value: "5", label: "Interactive labs" },
          { value: "0", label: "Sign-ups required" },
          { value: "77", label: "Sample finance health score" },
          { value: "Live", label: "Every number recalculates" },
        ]}
      />

      <Reveal>
        <section className="mt-16 grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="card rounded-2xl p-6">
              <span
                className="font-display text-lg"
                style={{ color: "var(--analytics)" }}
              >
                {step.num}
              </span>
              <h3 className="text-display-sm mt-2">{step.title}</h3>
              <p className="text-body mt-2">{step.text}</p>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-24">
          <div className="text-eyebrow">Labs</div>
          <h2 className="text-display-md mt-3">Step into a lab</h2>
          <p className="text-body mt-3 max-w-2xl">
            Each lab is its own small world inside the Playground — its own
            colors, its own way of thinking, built around one real problem.
            Start with whichever one sounds interesting; more are on the way.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {labs.map((lab) => (
              <a
                key={lab.href}
                href={lab.href}
                className="card group relative flex flex-col gap-3 overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: lab.accent }}
                />
                <span className="relative text-2xl">{lab.icon}</span>
                <h3 className="text-display-sm relative">{lab.title}</h3>
                <p className="text-body relative">{lab.description}</p>
                <div className="relative mt-1 flex flex-wrap gap-2">
                  {lab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                    style={{
                      background: `color-mix(in srgb, ${lab.accent} 22%, transparent)`,
                      color: lab.accent,
                    }}
                  >
                    New
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="relative mt-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:border-line-strong group-hover:text-text"
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-24">
          <div
            className="card overflow-hidden rounded-2xl p-8"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--shop) 16%, transparent), color-mix(in srgb, var(--accent-2) 10%, transparent))",
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="text-eyebrow">Featured · Case Study</div>
                <h2 className="text-display-sm mt-2">
                  A Personal Finance Dashboard, built like a real BI project
                </h2>
                <p className="text-body mt-3">
                  A fully interactive dashboard — net worth, cash flow,
                  savings rate, FIRE progress, and a financial health score,
                  all live in your browser. Try it with your own numbers,
                  then see how it was designed underneath.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-muted">
                    Live tool
                  </span>
                  <span className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-muted">
                    ~15 min
                  </span>
                  <span className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-muted">
                    Most popular
                  </span>
                </div>
                <div className="mt-6">
                  <Button variant="primary" asChild>
                    <a href="/finance-dashboard.html">
                      Try the live dashboard →
                    </a>
                  </Button>
                </div>
              </div>

              <div className="hidden shrink-0 items-center gap-5 rounded-2xl border border-line bg-surface-sunken px-6 py-5 sm:flex">
                <div className="relative h-20 w-20">
                  <svg width="80" height="80" viewBox="0 0 88 88">
                    <circle
                      cx="44"
                      cy="44"
                      r="36"
                      fill="none"
                      stroke="var(--line-strong)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="44"
                      cy="44"
                      r="36"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="226"
                      strokeDashoffset="52"
                      transform="rotate(-90 44 44)"
                    />
                  </svg>
                  <div className="font-display absolute inset-0 flex items-center justify-center text-xl">
                    77
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div>
                    <span className="block text-[11px] uppercase tracking-wide text-muted">
                      Net worth
                    </span>
                    <span
                      className="font-display text-base"
                      style={{ color: "var(--shop)" }}
                    >
                      $26,870
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wide text-muted">
                      Savings rate
                    </span>
                    <span
                      className="font-display text-base"
                      style={{ color: "var(--shop)" }}
                    >
                      14%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

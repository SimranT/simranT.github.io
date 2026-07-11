import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Shop — Simran's Space",
  description:
    "Real products from real experience: travel itineraries, a data-career roadmap, Excel/BI templates, and eBooks by Simran Tiwari.",
};

const jumpLinks = [
  { href: "#career-planner-feature", label: "Career" },
  { href: "#templates", label: "Templates" },
  { href: "#ebooks", label: "eBooks" },
  { href: "#travel-packs", label: "Travel" },
];

const templates = [
  {
    chips: [".xlsx", "Light + Dark"],
    title: "BI Dashboard Starter Pack",
    hook: "An executive dashboard with live filters, 5 KPI cards, and 3 charts — shipped in both a light and a dark theme, built on the same formulas.",
    bestFor:
      "Anyone who needs a working KPI dashboard today, filters and all, without building it from scratch.",
    notFor:
      "Multi-year financial modeling — this is a monthly operating snapshot, not a forecasting tool.",
    specifics: [
      "Region + Product filters that drive every KPI card and chart at once",
      "144-row sample dataset, a Top 5 insight table, and 3 live charts",
      "Dashboard (Light) and Dashboard (Dark) — same formulas, fully restyled",
    ],
    href: "/bi-dashboard-starter-pack.xlsx",
    accent: "var(--shop)",
  },
  {
    chips: [".xlsx", "AI prompts included"],
    title: "Impact Analysis Template",
    hook: "A reusable framework for analyzing a launch, an experiment, or a feature release — from hypothesis to an executive summary that writes most of itself.",
    bestFor:
      "Product managers and analysts who need the same rigor every time, not a new template per launch.",
    notFor:
      "Real-time experiment monitoring — this is a post-launch analysis tool, not a live A/B testing platform.",
    specifics: [
      "Release Timeline, KPI Tracking, and Before vs. After, all color-coded and formula-driven",
      "Executive Summary that pulls its numbers and top risk live from your data",
      "An AI Prompts tab — copy-ready prompts for ChatGPT or Claude when you export",
    ],
    href: "/impact-analysis-template.xlsx",
    accent: "var(--work)",
  },
  {
    chips: [".xlsx", "Health score"],
    title: "Personal Finance Dashboard",
    hook: "A BI dashboard pointed at your own money — income, spending, savings goals, investments, subscriptions, net worth, and one Financial Health Score.",
    bestFor:
      "Anyone who wants their finances to feel like a dashboard, not a spreadsheet with rows of typed-in numbers.",
    notFor: "Joint or business accounts — this is built for one person's finances.",
    specifics: [
      "Log a transaction once — Income Tracker, Expense Tracker, and Net Worth all update from it",
      "Savings Goals with progress bars, Investment and Subscription tracking, built in",
      "A Financial Health Score with three visible, real inputs — no hidden weighting",
    ],
    href: "/personal-finance-dashboard.xlsx",
    accent: "var(--accent-warm)",
  },
];

const travelPacks = [
  {
    id: "bali-pack",
    flag: "🇮🇩",
    image: "/bali.jpeg",
    chips: ["10 days", "Moderate", "Mid-range budget"],
    title: "The Bali Travel Pack",
    hook: "Slow days, not a checklist — a pause-button trip with jungle mornings, an island with no cars, and cafés worth the crowd.",
    bestFor:
      "First-timers who want the classic Bali highlights, plus a few places nobody else's itinerary has.",
    notFor:
      "Anyone wanting a packed, see-everything schedule — this route is deliberately unhurried.",
    specifics: [
      "Sunset dinner at The Sayan House in Ubud",
      "Gili T's car-free west-side sunset, not the crowded one",
      "Goa Garba — a quiet cave and creek almost nobody reviews",
    ],
    previewHref: "/bali-itinerary.html",
    previewLabel: "Preview the route",
  },
  {
    id: "turkey-pack",
    flag: "🇹🇷",
    image: "/turkey.jpeg",
    chips: ["12 days", "Moderate", "Mid-range budget"],
    title: "The Turkey Travel Pack",
    hook: "History you drive to, not just visit — twelve days, eight stops, Byzantine domes, sunrise balloons, and a coastline you're driving yourself.",
    bestFor:
      "People who want history and coastline in one self-driven trip, not two separate ones.",
    notFor: "Anyone without a few days to get comfortable driving unfamiliar roads.",
    specifics: [
      "The Bosphorus ferry crossing — Europe to Asia in 15 minutes",
      "Ihlara Valley's rock-cut churches, past the balloon-tour crowd",
      "Asansör in Izmir, a 19th-century elevator with the best view in the city",
    ],
    previewHref: "/turkey-itinerary.html",
    previewLabel: "Preview the route",
  },
  {
    id: "vietnam-pack",
    flag: "🇻🇳",
    image: "/vietnam.jpeg",
    chips: ["South to North", "Easy–Moderate", "Budget-friendly"],
    title: "The Vietnam Travel Pack",
    hook: "Backpacking pace, coffee-shop soul — south to north in one push, motorbike chaos, mountain silence, a country you taste more than see.",
    bestFor: "Budget-conscious travelers who want a loosely-paced, food-first route.",
    notFor: "Anyone wanting a resort trip — this one moves, and stays are simple.",
    specifics: [
      "King Koi Coffee — a fish-themed café with no business being that good",
      "The Cafe Apartment — one building, stacked cafés, pick a floor",
      "Cat Cat Village, a short walk from the Sapa cable-car crowds",
    ],
    previewHref: "/travel#vietnam",
    previewLabel: "Read the free story",
  },
  {
    id: "usa-pack",
    flag: "🇺🇸",
    image: "/usa.JPG",
    chips: ["Road trip loop", "Moderate", "Mid-range budget"],
    title: "The USA Travel Pack",
    hook: "A loop built for scale — coast, desert, and alpine lake in one drive, the same road trip, three different worlds.",
    bestFor: "Road-trippers who want elevation and landscape variety, not a single-state trip.",
    notFor: "Anyone short on driving time — this is a real loop, not a long weekend.",
    specifics: [
      "Seven Magic Mountains — neon rock stacks, 20 minutes off the Vegas highway",
      "St. Mary's Glacier — a real glacier hike, far quieter than the national park",
      "Arsicault Bakery in San Francisco, worth the line",
    ],
    previewHref: "/travel#usa",
    previewLabel: "Read the free story",
  },
  {
    id: "singapore-pack",
    flag: "🇸🇬",
    image: "/singapore.jpeg",
    chips: ["5–7 days", "Easy", "Mid-to-high budget"],
    title: "The Singapore Travel Pack",
    hook: "Maximum city, minimum wasted time — a short trip that runs like clockwork, futuristic architecture, hawker food, and transit that never makes you wait.",
    bestFor: "Anyone who wants a lot of city packed efficiently into 5–7 days.",
    notFor: "Budget travelers — Singapore is one of the pricier stops on this list.",
    specifics: [
      "Maxwell Food Centre & Lau Pa Sat — chili crab at a fraction of restaurant price",
      "The Supertree Grove lighting up right at dusk",
    ],
    previewHref: "/travel#singapore",
    previewLabel: "Read the free story",
  },
  {
    id: "thailand-pack",
    flag: "🇹🇭",
    image: "/Thailand.jpeg",
    chips: ["5–7 days", "Easy", "Budget-friendly"],
    title: "The Thailand Travel Pack",
    hook: "Bangkok, done right — temples, river life, and street food that beats every sit-down restaurant nearby.",
    bestFor: "First-time Bangkok visitors who want the essentials without wasting a day guessing.",
    notFor: "Anyone expecting an island-hopping trip — this pack covers Bangkok itself, not the islands.",
    specifics: [
      "Wat Arun at sunset, seen from across the river",
      "Whatever the longest street-food queue is pointing at — that's the tell",
    ],
    previewHref: "/travel#thailand",
    previewLabel: "Read the free story",
  },
  {
    id: "uae-pack",
    flag: "🇦🇪",
    image: "/UAE.jpeg",
    chips: ["5–7 days", "Easy", "Mid-to-high budget"],
    title: "The UAE Travel Pack",
    hook: "Two different cities, one afternoon — the tallest building on Earth and a spice souk that hasn't changed in decades.",
    bestFor: "Short-stay visitors who want both the skyline highlights and a real taste of Old Dubai.",
    notFor: "Budget travelers — Dubai adds up fast around the Marina and Downtown.",
    specifics: [
      "Desert safari — dune bashing by day, Bedouin-camp dinner after dark",
      "Old Dubai's smaller restaurants near the souks, better than anything closer to the Marina",
    ],
    previewHref: "/travel#uae",
    previewLabel: "Read the free story",
  },
];

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-20">
      <PageHero
        eyebrow="Shop"
        title="Real products, built from real trips and real work."
        description="Two things I know well: traveling and turning messy data into something usable. This is where both become products you can actually use — travel itineraries, a data-career roadmap, Excel templates, and eBooks."
        stats={[
          { value: "3", label: "Free Excel templates" },
          { value: "7", label: "Travel packs" },
          { value: "4 / 8", label: "Case File levels built" },
          { value: "$0", label: "Everything downloadable today" },
        ]}
      />

      <Reveal>
        <nav
          aria-label="Shop categories"
          className="mt-8 flex flex-wrap gap-2"
        >
          {jumpLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-line-strong hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Reveal>

      {/* Available now */}
      <Reveal>
        <section className="mt-16">
          <div className="text-eyebrow">⚡ Available now</div>
          <h2 className="text-display-md mt-3">
            Two things you can use today
          </h2>
          <p className="text-body mt-3 max-w-2xl">
            Everything else on this page is early access or in progress —
            these two are finished, live, and ready right now.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="/case-file-analytics-engineer-level1.pdf"
              download
              className="card flex flex-col gap-3 rounded-2xl p-6"
            >
              <h3 className="text-display-sm">
                Case File: Analytics Engineer — Level 1
              </h3>
              <p className="text-body">
                Free, ready today. &ldquo;The Spreadsheet Kingdom&rdquo; — the
                first of 8 levels, a real fillable PDF case file, not another
                scattered tutorial.
              </p>
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background:
                    "color-mix(in srgb, var(--shop) 22%, transparent)",
                  color: "var(--shop)",
                }}
              >
                Available now
              </span>
              <span className="text-xs text-muted">
                Free download, no email required.
              </span>
            </a>

            <a
              href="/trip-budget-planner.html"
              className="card flex flex-col gap-3 rounded-2xl p-6"
            >
              <h3 className="text-display-sm">
                Trip Budget &amp; Expense Planner
              </h3>
              <p className="text-body">
                One premium report page, a hidden engine doing the math, and a
                Trip Health Score you&apos;ll actually want to check.
              </p>
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background:
                    "color-mix(in srgb, var(--work) 22%, transparent)",
                  color: "var(--work)",
                }}
              >
                Available now
              </span>
              <span className="text-xs text-muted">
                Free preview — checkout coming soon.
              </span>
            </a>
          </div>
        </section>
      </Reveal>

      {/* Career resources */}
      <Reveal>
        <section id="career-planner-feature" className="mt-24 scroll-mt-24">
          <div className="text-eyebrow">🗂️ Career Resources</div>
          <h2 className="text-display-md mt-3 text-balance">
            Eight crises. One trust to earn. Every skill a real Analytics
            Engineer needs.
          </h2>
          <p className="text-body mt-3 max-w-2xl">
            You didn&apos;t buy a book — you were handed a case file.{" "}
            <em>Case File: Analytics Engineer</em> puts you in the seat of a
            newly hired Analytics Engineer at Solace, a startup whose data has
            quietly fallen apart. Eight levels, eight real production crises,
            real fillable PDF case files — you learn SQL, dbt, and warehouse
            design by fixing the same kind of mess a real job hands you, not
            by reading another scattered tutorial.
          </p>

          <div
            className="card relative mt-8 overflow-hidden rounded-2xl p-8"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--work) 18%, transparent), color-mix(in srgb, var(--work-2) 12%, transparent))",
            }}
          >
            <div className="text-eyebrow">Flagship</div>
            <h3 className="text-display-sm mt-2">
              Level 1: The Spreadsheet Kingdom
            </h3>
            <p className="text-body mt-2 max-w-xl">
              Ready to download free, right now. Levels 2–4 — The SQL Forest,
              The JOIN Labyrinth, and The dbt Factory — are built and open for
              early access. Levels 5–8 are still in development, one world at
              a time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button variant="primary" asChild>
                <a href="/case-file-analytics-engineer-level1.pdf" download>
                  Download Level 1 free (PDF)
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="mailto:simran.st1197@gmail.com?subject=Case%20File%3A%20Analytics%20Engineer%20-%20Levels%202-4">
                  Get early access to Levels 2–4
                </a>
              </Button>
              <span className="text-xs font-semibold text-muted">
                4 of 8 levels built
              </span>
            </div>
          </div>

          <a
            href="/analytics-engineers-toolkit.pdf"
            download
            className="card mt-4 flex flex-col gap-3 rounded-2xl p-6"
          >
            <h3 className="text-display-sm">
              The Analytics Engineer&apos;s Toolkit
            </h3>
            <p className="text-body">
              Every cheat card, field note, and worksheet earned across Levels
              1–4 — pulled out of the story and genericized so you can use
              them on your own job today. 13 pages: the Curiosity Framework,
              SQL &amp; dbt reference cards, and 4 fillable templates.
            </p>
            <span
              className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: "color-mix(in srgb, var(--shop) 22%, transparent)",
                color: "var(--shop)",
              }}
            >
              Available now
            </span>
            <span className="text-xs text-muted">
              Free download, no email required.
            </span>
          </a>
        </section>
      </Reveal>

      {/* Templates */}
      <Reveal>
        <section id="templates" className="mt-24 scroll-mt-24">
          <div className="text-eyebrow">📊 Premium Templates</div>
          <h2 className="text-display-md mt-3">
            Free downloads, built like something you&apos;d pay for
          </h2>
          <p className="text-body mt-3 max-w-2xl">
            Three flagship templates — a KPI dashboard, an impact analysis
            framework, and a personal finance dashboard — each with real
            formulas, live charts, and documentation, not a blank spreadsheet
            with a nice cover page. Every number recalculates the moment you
            plug in your own data.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {templates.map((t) => (
              <div
                key={t.title}
                className="card flex flex-col gap-4 rounded-2xl p-6"
                style={{ borderColor: `color-mix(in srgb, ${t.accent} 30%, var(--line))` }}
              >
                <div className="flex flex-wrap gap-2">
                  {t.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-muted"
                    >
                      {chip}
                    </span>
                  ))}
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                    style={{
                      background: `color-mix(in srgb, ${t.accent} 22%, transparent)`,
                      color: t.accent,
                    }}
                  >
                    Available now
                  </span>
                </div>
                <h3 className="text-display-sm">{t.title}</h3>
                <p className="text-body">{t.hook}</p>

                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="rounded-xl border border-line bg-surface-sunken p-3">
                    <strong className="block text-[11px] uppercase tracking-wide text-muted">
                      Best for
                    </strong>
                    <span className="text-muted">{t.bestFor}</span>
                  </div>
                  <div className="rounded-xl border border-line bg-surface-sunken p-3">
                    <strong className="block text-[11px] uppercase tracking-wide text-muted">
                      Not for
                    </strong>
                    <span className="text-muted">{t.notFor}</span>
                  </div>
                </div>

                <ul className="flex-1 space-y-2 text-sm text-muted">
                  {t.specifics.map((s) => (
                    <li key={s} className="border-b border-line pb-2 last:border-0">
                      {s}
                    </li>
                  ))}
                </ul>

                <div>
                  <Button variant="primary" size="sm" asChild>
                    <a href={t.href} download>
                      Download free (.xlsx)
                    </a>
                  </Button>
                  <p className="mt-2 text-xs text-muted">
                    Free download, no email required. Opens cleanly in Google
                    Sheets.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* eBooks */}
      <Reveal>
        <section id="ebooks" className="mt-24 scroll-mt-24">
          <div className="text-eyebrow">📚 eBooks</div>
          <h2 className="text-display-md mt-3">Short reads, not fluff</h2>
          <p className="text-body mt-3 max-w-2xl">
            Focused guides on the two things this site is about — data
            careers and real travel planning. Think of these as the short
            version of something you&apos;d otherwise piece together from ten
            scattered blog posts.
          </p>

          <div className="card mt-8 flex flex-col gap-4 rounded-2xl p-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-muted">
                .pdf
              </span>
              <span className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-muted">
                12 pages
              </span>
              <span
                className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                style={{
                  background: "color-mix(in srgb, var(--work) 22%, transparent)",
                  color: "var(--work)",
                }}
              >
                Available now
              </span>
            </div>
            <h3 className="text-display-sm">From Spreadsheets to Stories</h3>
            <p className="text-body">
              A short guide to building reports and dashboards people actually
              read — for analysts who want their work to land, not just get
              filed.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="border-b border-line pb-2">
                Eight short chapters — start with the question, pick the
                chart, structure the page
              </li>
              <li className="border-b border-line pb-2">
                A real before-and-after dashboard redesign, not just theory
              </li>
              <li>A one-page Ship-It Checklist to run against your next report</li>
            </ul>
            <div>
              <Button variant="primary" size="sm" asChild>
                <a href="/spreadsheets-to-stories.pdf" download>
                  Download free (.pdf)
                </a>
              </Button>
              <p className="mt-2 text-xs text-muted">
                Free download, no email required.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-eyebrow">In development</div>
            <div className="card mt-4 divide-y divide-line rounded-2xl">
              <div className="p-5">
                <h3 className="text-[15px] font-semibold">
                  The Budget Travel Playbook
                </h3>
                <p className="text-body mt-1">
                  How I plan real trips on a real budget — the math, the
                  trade-offs, and what&apos;s worth splurging on.
                </p>
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-semibold">
                  The Remote-Friendly Data Career
                </h3>
                <p className="text-body mt-1">
                  Notes on building a data/BI career flexible enough to still
                  take long trips — from someone doing both.
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Button variant="secondary" size="sm" asChild>
                <a href="mailto:simran.st1197@gmail.com?subject=eBook%20Waitlist">
                  Join the waitlist
                </a>
              </Button>
              <span className="text-xs text-muted">
                Both are in development — no dates yet.
              </span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Travel packs */}
      <Reveal>
        <section id="travel-packs" className="mt-24 scroll-mt-24">
          <div className="text-eyebrow">✈️ Travel Itineraries</div>
          <h2 className="text-display-md mt-3">
            Curated packs from my own trips
          </h2>
          <p className="text-body mt-3 max-w-2xl">
            Seven trips I&apos;ve actually taken, turned into plans you can
            actually use — the real routes, real costs, and the three or four
            things I&apos;d tell a friend before they booked anything. A
            starting plan, not a 40-tab spreadsheet of research.
          </p>

          <nav
            aria-label="Travel packs"
            className="mt-6 flex flex-wrap gap-2"
          >
            {travelPacks.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-colors duration-200 hover:border-line-strong hover:text-text"
              >
                {p.flag} {p.title.replace("The ", "").replace(" Travel Pack", "")}
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-6">
            {travelPacks.map((pack) => (
              <article
                key={pack.id}
                id={pack.id}
                className="card grid scroll-mt-24 gap-0 overflow-hidden rounded-2xl sm:grid-cols-[240px_1fr]"
              >
                <div className="relative min-h-[180px]">
                  <Image
                    src={pack.image}
                    alt={`${pack.title} cover`}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2 py-1 text-lg backdrop-blur-sm">
                    {pack.flag}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex flex-wrap gap-2">
                    {pack.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-muted"
                      >
                        {chip}
                      </span>
                    ))}
                    <span
                      className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                      style={{
                        background:
                          "color-mix(in srgb, var(--shop) 22%, transparent)",
                        color: "var(--shop)",
                      }}
                    >
                      Early access
                    </span>
                  </div>
                  <h3 className="text-display-sm">{pack.title}</h3>
                  <p className="text-body">{pack.hook}</p>

                  <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                    <div className="rounded-xl border border-line bg-surface-sunken p-3">
                      <strong className="block text-[11px] uppercase tracking-wide text-muted">
                        Best for
                      </strong>
                      <span className="text-muted">{pack.bestFor}</span>
                    </div>
                    <div className="rounded-xl border border-line bg-surface-sunken p-3">
                      <strong className="block text-[11px] uppercase tracking-wide text-muted">
                        Not for
                      </strong>
                      <span className="text-muted">{pack.notFor}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-sm text-muted">
                    {pack.specifics.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span aria-hidden="true" style={{ color: "var(--shop)" }}>
                          ✦
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl border border-dashed border-line-strong p-3 text-sm text-muted">
                    See the free route breakdown — the full pack expands every
                    leg with exact costs, maps, and bookings.{" "}
                    <Link
                      href={pack.previewHref}
                      className="font-semibold text-text underline underline-offset-2"
                    >
                      {pack.previewLabel} →
                    </Link>
                  </div>

                  <span className="w-fit rounded-full border border-line px-3 py-1 text-xs text-muted">
                    No reviews yet — this pack is brand new. Be the first.
                  </span>

                  <div>
                    <Button variant="primary" size="sm" asChild>
                      <a
                        href={`mailto:simran.st1197@gmail.com?subject=${encodeURIComponent(
                          pack.title,
                        )}`}
                      >
                        Get the {pack.title.replace("The ", "")}
                      </a>
                    </Button>
                    <p className="mt-2 text-xs text-muted">
                      Pricing and checkout coming soon — email gets you early
                      access.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-24">
          <div
            className="card rounded-2xl p-8"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--accent) 12%, transparent), color-mix(in srgb, var(--accent-2) 8%, transparent))",
            }}
          >
            <div className="text-eyebrow">🔭 What&apos;s next</div>
            <h2 className="text-display-sm mt-2">
              Digital tools and short courses
            </h2>
            <p className="text-body mt-2 max-w-2xl">
              Interactive tools and short courses are next on the roadmap,
              building on the Career Planner and SQL Playground already live
              on this site. No dates yet — this section will grow as
              they&apos;re ready.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-8">
          <div className="card rounded-2xl p-8 text-center">
            <div className="text-eyebrow">✉️ Interested?</div>
            <h2 className="text-display-sm mt-2">
              Want early access to anything in the shop?
            </h2>
            <p className="text-body mx-auto mt-2 max-w-xl">
              Email me and I&apos;ll let you know the moment it&apos;s ready —
              itinerary, template, or eBook.
            </p>
            <div className="mt-5 flex justify-center">
              <Button variant="primary" asChild>
                <a href="mailto:simran.st1197@gmail.com">
                  Email simran.st1197@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

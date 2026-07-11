import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  FlaskConical,
  Mail,
  Plane,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/site/brand-icons";
import { Reveal } from "@/components/site/reveal";
import { ExploreCard } from "@/components/site/explore-card";
import { Hero } from "@/components/site/hero";

const contactLinks = [
  {
    href: "mailto:simran.st1197@gmail.com",
    icon: Mail,
    label: "Email",
    value: "simran.st1197@gmail.com",
    external: false,
  },
  {
    href: "https://linkedin.com/in/simran-tiwari",
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/simran-tiwari",
    external: true,
  },
  {
    href: "https://github.com/SimranT",
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/SimranT",
    external: true,
  },
];

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-4 pb-20">
      <Hero />

      <Reveal>
        <section id="labs-teaser" className="mt-6">
          <Link
            href="/analytics"
            className="card group flex items-center gap-4 rounded-2xl px-6 py-5"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent"
            >
              <FlaskConical size={20} aria-hidden="true" />
            </span>
            <span className="flex-1">
              <strong className="block text-[15px] font-semibold">
                Try a live lab
              </strong>
              <span className="text-sm text-muted">
                5 interactive tools — travel costs, KPIs, business mysteries,
                board decisions, and real SQL. No sign-up.
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-muted transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </section>
      </Reveal>

      <Reveal>
        <section id="about" className="mt-24">
          <div className="grid gap-10 sm:grid-cols-[220px_1fr] sm:items-start">
            <div className="relative mx-auto h-48 w-48 sm:mx-0 sm:h-52 sm:w-52">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full opacity-40 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent), transparent 70%)",
                }}
              />
              <div className="glass relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/portrait.jpeg"
                  alt="Simran Tiwari smiling outdoors"
                  fill
                  sizes="208px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <div className="text-eyebrow">About me</div>
              <h2 className="text-display-md mt-3 text-balance">
                Soft energy, sharp thinking.
              </h2>
              <p className="text-body mt-5 max-w-2xl">
                I’m Simran Tiwari, and I like building things that feel both
                useful and human. My work sits at the intersection of data
                engineering and applied intelligence — pipelines, automation,
                and the systems that quietly do the thinking, so the people
                using them can focus on the decision, not the data wrangling.
              </p>
              <p className="text-body mt-4 max-w-2xl">
                Outside work, I’m usually behind a guitar, road-tripping
                instead of flying whenever I can get away with it, or hunting
                down the best cafe in a new city — bonus points if there&apos;s
                a theme park nearby. My playlist is mostly Taylor Swift, my
                matcha habit is non-negotiable, and yes, I do keep a
                spreadsheet for things that have no business being in a
                spreadsheet — this website included.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-24">
          <div className="text-eyebrow">Explore</div>
          <h2 className="text-display-md mt-3">Where to next</h2>
          <p className="text-body mt-3">
            A quick map of everything on this site.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0}>
              <ExploreCard
                href="/work"
                title="Work"
                description="My career trajectory, the systems I've built, and how I think about data."
                accent="var(--work)"
                accent2="var(--work-2)"
                icon={<Briefcase size={20} aria-hidden="true" />}
                index={1}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <ExploreCard
                href="/travel"
                title="Travel"
                description="Countries I've explored, road trips, guides, and my shortlisted Airbnb stays — one section of this site, not the whole thing."
                accent="var(--travel)"
                accent2="var(--travel-2)"
                icon={<Plane size={20} aria-hidden="true" />}
                index={2}
              />
            </Reveal>
            <Reveal delay={0.16}>
              <ExploreCard
                href="/shop"
                title="Shop"
                description="Itineraries, Excel templates, and eBooks — built from real travel and real BI work."
                accent="var(--shop)"
                accent2="var(--shop-2)"
                icon={<ShoppingBag size={20} aria-hidden="true" />}
                index={3}
              />
            </Reveal>
            <Reveal delay={0.24}>
              <ExploreCard
                href="/analytics"
                title="Analytics"
                description="Five interactive labs — plan a trip, build a KPI set, solve a business mystery, make the board's call, write real SQL — built the way I'd build them at work."
                accent="var(--analytics)"
                accent2="var(--analytics-2)"
                icon={<TrendingUp size={20} aria-hidden="true" />}
                index={4}
              />
            </Reveal>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="contact" className="mt-24">
          <div className="text-eyebrow">Contact</div>
          <h2 className="text-display-md mt-3">Shareable and easy to reach</h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {contactLinks.map(({ href, icon: Icon, label, value, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener" : undefined}
                className="card flex items-center gap-3 rounded-2xl p-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-strong text-muted"
                >
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold">
                    {label}
                  </span>
                  <span className="block truncate text-sm text-muted">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}

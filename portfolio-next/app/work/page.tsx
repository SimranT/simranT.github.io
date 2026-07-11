import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Timeline, type TimelineEntry } from "@/components/site/timeline";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Work — Simran's Space",
  description:
    "Simran Tiwari's career trajectory as a data analytics engineer — pipelines, systems, and applied intelligence.",
};

const entries: TimelineEntry[] = [
  {
    date: "Sep 2022–Present",
    role: "Alison · Data Analytics Engineer",
    logo: "/alison.webp",
    logoAlt: "Alison logo",
    dotColor: "var(--travel)",
    bullets: [
      "Delivered 590+ analytics requests across 15+ KPI and product report lines over 3 years",
      "Managed large-scale datasets across MySQL, MS SQL, and BigQuery to keep reporting consistent and trustworthy",
      "Cut BigQuery costs by ~60% by refactoring transformations, removing redundant queries, and restricting API requests to production data",
      "Optimized 20+ Pentaho ETL pipelines through sequential execution, view-based refactors, and indexing — reducing multi-hour runs and keeping reporting on schedule",
      "Automated daily, weekly, and monthly KPI reporting for leadership, replacing manual pulls and standardizing metrics across B2C and B2B",
      "Reconciled revenue across 4 payment providers (Stripe, PayPal, Google, AdMob) and consolidated fragmented reporting into unified dashboards in QuickSight, Looker Studio, and Metabase",
    ],
    chips: [
      "ETL",
      "Pentaho",
      "MySQL",
      "BigQuery",
      "Looker Studio",
      "QuickSight",
      "Metabase",
    ],
  },
  {
    date: "May 2021–Aug 2022",
    role: "Sastodeal · BI Analyst",
    logo: "/SD.jpeg",
    logoAlt: "Sastodeal logo",
    dotColor: "var(--work)",
    bullets: [
      "Merged millions of rows across 7 disparate sources into structured business data using stored procedures, triggers, and views",
      "Automated real-time product-metric reporting from MySQL and Postgres",
      "Ran RFM analysis to build customer segments, lifting repeat purchase rate 11% and category conversion 4%",
      "Partnered with finance, sales, marketing, and operations to install and maintain AOPs, cutting mid-trip cancellations 19%",
      "Analyzed purchase funnel, churn, LTV, and channel performance to lift ROI 7% across 60+ dashboards in Google Data Studio and Magento BI, and configured GA e-commerce tracking while mentoring 2 interns",
    ],
    chips: [
      "MySQL",
      "Postgres",
      "Google Data Studio",
      "Magento BI",
      "RFM",
      "Google Analytics",
    ],
  },
  {
    date: "Oct 2020–Apr 2021",
    role: "Freelance · Data Analyst",
    dotColor: "var(--accent-warm)",
    bullets: [
      "Built reporting architecture from scratch across Tableau, Power BI, and Looker for web and app properties pulling 5M visitors a year",
      "Partnered with the executive team to formulate and report on KPIs using SQL and Google Sheets",
      "Designed and ran A/B tests that lifted conversion 24 basis points",
      "Applied forecasting models and presented findings to stakeholders, boosting retention 6%",
      "Delivered a root-cause analysis that resolved a client's conversion issue for a further 9% gain",
    ],
    chips: ["Tableau", "Power BI", "Looker", "A/B testing", "Forecasting"],
  },
  {
    date: "Mar–Aug 2020",
    role: "UXCam · Data Scientist",
    note: "(Apprenticeship)",
    logo: "/uxcam.jpeg",
    logoAlt: "UXCam logo",
    dotColor: "var(--accent)",
    bullets: [
      "Received, cleaned, and prepped data using SQL, Python, and Excel",
      "Updated the site's live dashboards using Python and the Highcharts library",
      "Maintained a working knowledge of ETL, visualization, API frameworks, and statistical methods",
      "Worked with large-volume data processing across PostgreSQL and MongoDB",
    ],
    chips: ["SQL", "Python", "Highcharts", "PostgreSQL", "MongoDB"],
  },
  {
    date: "Sep–Dec 2019",
    role: "Amicus · Junior Software Engineer",
    note: "(Internship)",
    dotColor: "var(--accent-2)",
    bullets: [
      "Wrote code and collaborated with engineers on end-to-end software development",
      "Helped implement agile methodologies across the development lifecycle",
      "Researched and provisioned resources for applications and infrastructure",
      "Coordinated and documented project specifications",
      "Partnered across teams to improve development processes and delivery",
    ],
    chips: ["Agile", "Development", "Documentation"],
  },
];

const chapters: Record<number, string> = {
  0: "Now",
  1: "Building BI muscle",
  3: "Where it started",
};

const certifications = [
  {
    date: "Feb 2021",
    name: "Introduction to Data Analytics for Business",
    org: "University of Colorado · Coursera",
  },
  {
    date: "Nov 2020",
    name: "Managing Big Data with MySQL",
    org: "Duke University · Coursera",
  },
  {
    date: "Sep 2020",
    name: "Business Metrics for Data-Driven Companies",
    org: "Duke University · Coursera",
  },
  { date: "Feb 2020", name: "Data Science Orientation", org: "IBM · Coursera" },
  { date: "Feb 2020", name: "SQL for Data Science", org: "UC Davis · Coursera" },
  { date: "Feb 2020", name: "What is Data Science", org: "IBM · Coursera" },
  {
    date: "Feb 2020",
    name: "Programming Foundations with JavaScript, HTML and CSS",
    org: "Duke University · Coursera",
  },
  { date: "Jan 2020", name: "Machine Learning", org: "Stanford University · Coursera" },
  {
    date: "Feb 2019",
    name: "Programming for Everybody (Getting Started with Python)",
    org: "University of Michigan · Coursera",
  },
  { date: "Jan 2018", name: "Big Data Certification", org: "IIT Delhi" },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-20">
      <PageHero
        eyebrow="Career"
        title="Six years, five roles, one obsession with turning data into intelligence."
        description="From writing my first lines of code to owning analytics systems for products with millions of users — here's the path, the tools, and the numbers that came with it."
        stats={[
          { value: "6+ yrs", label: "In data & analytics engineering" },
          { value: "90+", label: "Analytics solutions shipped" },
          { value: "7%", label: "ROI lift delivered" },
          { value: "35%", label: "Faster pipelines shipped" },
        ]}
      />

      <Reveal>
        <section className="mt-16">
          <Timeline entries={entries} chapters={chapters} />
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-10">
          <a
            href="/analytics"
            className="card group flex items-center gap-4 rounded-2xl px-6 py-5"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent"
            >
              🔒
            </span>
            <span className="flex-1">
              <strong className="block text-[15px] font-semibold">
                Proof of work{" "}
                <span
                  className="ml-1 rounded-full border border-dashed border-line-strong px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted"
                  title="Real work is under NDA — these tools show my style and curiosity instead"
                >
                  NDA
                </span>
              </strong>
              <span className="text-sm text-muted">
                Real dashboards are under NDA — see the same style and
                curiosity in the Analytics Playground.
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-muted transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-24">
          <div className="text-eyebrow">Credentials</div>
          <h2 className="text-display-md mt-3">Certifications</h2>

          <div className="card mt-6 rounded-2xl p-2">
            {certifications.map((cred, i) => (
              <div
                key={cred.name}
                className={`grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[90px_1fr_auto] sm:items-baseline sm:gap-4 ${
                  i !== certifications.length - 1
                    ? "border-b border-line"
                    : ""
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-accent">
                  {cred.date}
                </span>
                <span className="text-[15px]">{cred.name}</span>
                <span className="text-sm text-muted sm:text-right">
                  {cred.org}
                </span>
              </div>
            ))}
          </div>

          <div className="card mt-4 rounded-2xl p-6">
            <h3 className="text-display-sm">Education</h3>
            <p className="text-body mt-2">
              Bachelor of Engineering, Electrical, Electronics &amp;
              Communications — Tribhuvan University, IOE, Pulchowk Campus.
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

# Analytics Engineer Simulator — Strategy Deliverable (v2, built from the original brief)

*This is a full rebuild of the strategy, this time following the original brief exactly as written — no hybrid, no hedge. This replaces the "evolve, don't replace" recommendation from v1.*

---

## 0. What changed from v1, and why

The first version of this strategy recommended evolving the existing *Case File: Analytics Engineer* (Levels 1–4) rather than starting over, because that product was already built, shipped, and had real narrative IP worth preserving. That was the right call to *flag*, but you've now made the call yourself: build the thing exactly as briefed. This document does that — no more arguing for the safer path.

One decision I made without asking, and want to surface up front: **the world is still Solace.** The original brief says "create one fictional technology company," not "create a new one." Solace already has a business, a team, and a data mess that makes sense (Priya, Diego, Farrah, Jordan, Support are already established from the shipped levels). Reusing it means Day 1 can start with real texture instead of a blank slate, and any content you're willing to salvage from Levels 1–4 has somewhere to land. If you'd rather burn it down and start with a different company entirely, say so — it's a cheap thing to change now and an expensive thing to change in Day 40.

---

## 1. Product Positioning

**Working title: Analytics Engineer Simulator**

Not an ebook. Not a course. A simulated first 90 days at a real (fictional) company, told entirely through the situations an Analytics Engineer actually walks into — a broken dashboard, a Slack ping from the CEO, a pipeline that started taking 45 minutes instead of 3. You don't read chapters. You inherit a job.

**Positioning statement:** *The only Analytics Engineering product that puts you inside the job before you have it — production incidents, real stakeholders, and the judgment calls no tutorial can teach, because ChatGPT can hand you the SQL but it can't hand you the experience of being the person who has to be right.*

---

## 2. Unique Selling Proposition

You cannot get this from ChatGPT, a bootcamp, or a book, for three specific reasons:

1. **Continuity.** Every incident in this product happened because of a decision you made on Day 12, at a company whose warehouse you've been living in since Day 1. AI chat has no memory of your Day 12 unless you paste it back in. This product is built to remember for you.
2. **Consequence.** In a chat window, a wrong answer costs you a re-prompt. Here, a wrong root-cause call means the bug ships, resurfaces three "days" later, and you have to explain to Jordan why the number was wrong for a week. Stakes are simulated, but the discomfort is real, and that's what actually builds judgment.
3. **Judgment over syntax.** Any AI can write a JOIN. None of them can simulate the feeling of a VP asking "are you sure?" in a Slack thread while you're still not sure. That's the actual job. That's what this teaches.

---

## 3. Target Audience

**Primary:** Career-changers and early-career analysts (0–2 years) trying to break into Analytics Engineering — people who've done a SQL course, maybe a Coursera cert, and still feel like they wouldn't survive a real week on the job.

**Secondary:** Junior data/BI analysts who already have a job title but not the judgment yet — they write queries fine, but freeze the first time two dashboards disagree in front of their VP.

**Tertiary:** Bootcamp grads whose portfolio is three toy Kaggle projects and nothing that looks like it happened inside a real company.

What they share: they don't lack information. They've read enough. What they lack is the feeling of having done it — the 2am "wait, did I just break production" feeling — in a setting where getting it wrong doesn't cost them a job.

---

## 4. Competitor Analysis

| Category | Examples | What they give you | What they can't give you |
|---|---|---|---|
| SQL/dbt books | *SQL for Data Analysis*, dbt docs | Syntax, reference | No stakes, no story, no judgment practice |
| Bootcamps | DataCamp, Maven Analytics, Zach Wilson's Data Engineering camp | Structured curriculum, some projects | Expensive ($500–2000+), generic company scenarios, no continuity across a single narrative |
| AI chat tools | ChatGPT, Claude, Cursor | Infinite Q&A, code generation on demand | No memory of "your" company, no simulated consequence, no forced judgment calls — you can always just ask again |
| Template/asset packs | Gumroad SQL packs, Notion dashboards | Real files you can reuse | Zero teaching, zero narrative, no sense of *why* the template looks the way it does |
| Interview prep kits | DataLemur, StrataScratch | Practice questions, some real-world flavor | Question-and-answer format, not a sustained simulation — nothing carries over between questions |

**The gap:** nobody combines narrative continuity + simulated production stakes + real downloadable assets + explicit AI-collaboration teaching in one product. That combination is the moat.

---

## 5. Why People Buy This in the AI Era

Because the thing they're actually buying isn't information — it's **rehearsal**. You can ask an AI model "how do I debug a pipeline failure" and get a great generic answer in ten seconds. What you can't get in ten seconds is the felt experience of being the person on the hook when the pipeline fails at 9am and the CEO wants numbers by 10. This product sells the rehearsal, not the answer. The AI-collaboration sections make the pitch even sharper: this isn't an anti-AI product pretending chat tools don't exist — it explicitly teaches you how a working Analytics Engineer uses AI as a tool inside their job, which is more honest and more useful than either "AI will replace you" or "ignore AI entirely."

---

## 6. Pricing Strategy

One-time purchase, no subscription — matches the audience (career-changers rarely want another monthly bill) and matches the "own this forever, revisit it before interviews" use case.

- **Starter — $49**
- **Pro — $99**
- **Ultimate — $179**

Anchor pricing against a single bootcamp module (often $200–500 alone) and against 3–4 months of a $20/mo AI subscription the buyer is likely already paying for and will keep paying for regardless — this product is positioned as an addition, not a replacement.

Launch discount: first 100 buyers at 30% off to seed reviews and testimonials, standard practice for a new premium digital product with no social proof yet.

---

## 7. Product Tiers

**Starter — $49**
Days 1–30 (the first "month" at Solace: onboarding, warehouse basics, first ETL, first real incident, first stakeholder conflict). Core downloadable assets: SQL snippet library, warehouse schema reference, incident report template. No AI Prompt Library, no career assets.

**Pro — $99**
Full simulation, Days 1–90. Every incident, every boss battle, full skill tree. Complete downloadable asset library (all templates listed in Section 9). AI Collaboration Prompt Library included. Portfolio Project Guide included — turn 2–3 of your completed missions into real portfolio pieces.

**Ultimate — $179**
Everything in Pro, plus: Interview Preparation Kit (mapped directly to the incidents you just lived through — "tell me about a time you found a data quality issue" stops being a hypothetical), Career Roadmap (first 90 days → first year → senior track), and a private "case study" writeup template for turning your Solace portfolio into a LinkedIn/portfolio-site narrative.

---

## 8. Complete Feature List

- Day-based narrative structure (not chapters/levels) — Days 1 through 90
- Every mission opens with a real-world trigger: Slack message, Jira ticket, exec email, monitoring alert, customer complaint
- Recurring investigation framework trained across every incident: Business Question → Clarify Requirements → Form Hypothesis → Identify Required Data → Investigate → Validate Findings → Assess Business Impact → Recommend Solution → Document Work → Prevent Future Issues
- Realistic production incidents with full evidence packets: logs, sample data, schema, SQL, multiple plausible causes, one real resolution
- Continuous single-company world (Solace) — every mission builds on the warehouse/team/history established earlier
- AI-collaboration missions woven throughout — reviewing AI-generated SQL, using AI for documentation, knowing when to override it
- Gamification layer: XP per mission, badges, a skill tree across SQL/dbt/warehouse-design/stakeholder-communication, side quests, boss battles, hidden challenges, promotion milestones
- Fillable real PDF templates for every major asset (not just described — actually usable)
- Tiered structure so the product scales from a $49 entry point to a full career-prep bundle

---

## 9. Digital Assets Included

- Production SQL Snippet Library
- ETL/dbt Model Templates
- Warehouse Documentation Template
- Architecture Diagram Templates
- Monitoring Checklist
- Deployment Checklist
- Incident Report Template
- Root Cause Analysis Template
- Data Dictionary Template
- Business Requirements Template
- Testing Checklist
- Analytics Engineering AI Prompt Library
- Career Roadmap (first 90 days → first year → senior track)
- Interview Preparation Kit
- Portfolio Project Guide

Every asset is a genericized, reusable version of something used to solve a specific Solace incident — same pattern already proven in the Toolkit spinoff, just scaled to the full 90-day arc.

---

## 10. Marketing Angles

- "You didn't buy a course. You got hired." — lead with the simulation framing, not the education framing.
- "ChatGPT can write the query. It can't survive your first production outage." — direct AI-era differentiation.
- "90 days of Analytics Engineering experience, before your first job." — speaks directly to the confidence gap in the target audience.
- Social proof engine: encourage buyers to post their completed Incident Report or Root Cause Analysis templates (genericized, Solace-flavored) as portfolio pieces — free marketing, and it demonstrates the product's realism to prospective buyers.
- Comparison angle for skeptics: put a side-by-side of "ask ChatGPT" vs. "Day 24: Production Outage" directly on the landing page — same question, wildly different depth of experience.

---

## 11. Landing Page Messaging

**Hero:** *You didn't read a book. You survived your first 90 days as an Analytics Engineer.*

**Subhead:** A simulated career at Solace — real incidents, real stakeholders, real downloadable assets — built for people who are tired of tutorials that don't feel like the job.

**Section 2 — The problem:** You've done the SQL course. You've read the dbt docs. You still don't know if you'd survive a real week on the job. That gap isn't a knowledge gap. It's an experience gap, and no amount of reading closes it.

**Section 3 — The mechanism:** Walk through a sample Day (Day 24: Production Outage) directly on the page — the Slack message, the framework, the evidence packet, the resolution — so a visitor experiences the format before buying it.

**Section 4 — Why not just use AI:** Direct, unafraid comparison. AI gives you an answer in 10 seconds. This gives you the 90 days of judgment that tells you which answer to trust.

**Section 5 — Tiers/pricing table.**

**Section 6 — Social proof** (testimonials once available; portfolio pieces from early buyers).

**CTA:** *Start Day 1 free.* (Day 1 — "Meet your team, understand the business" — ships free, same precedent as Level 1 in the current product; it's the lowest-friction way to prove the format works before asking for money.)

---

## 12. Product Roadmap

- **Phase 1 (now):** Ship this strategy doc, lock the world-building bible (Solace's team, warehouse, culture — reusing what already exists), build and ship Days 1–10 as the initial released arc, free Day 1 live on the site.
- **Phase 2:** Build out Days 11–30, close the Starter tier ($49), open pre-orders/waitlist for Pro.
- **Phase 3:** Build Days 31–90, ship Pro tier in full, build the AI Prompt Library and Portfolio Project Guide.
- **Phase 4:** Build Ultimate tier assets — Interview Prep Kit, Career Roadmap, case-study template — ship Ultimate.
- **Phase 5:** Marketing push — landing page, comparison content, portfolio-piece social proof loop.

---

## 13. Brand Identity

Keep the tone that already worked in the shipped product — dry, competent, a little wry, never cutesy. Solace as a company should feel like a real too-fast-growing startup: good intentions, messy data, well-meaning but overworked stakeholders. Visual identity: carry forward the existing dark navy/warm accent aesthetic already established (each "world" gets its own accent color, same pattern as Levels 1–4's per-level theming) so Day-based chapters can still feel visually distinct without breaking a consistent brand shell.

---

## 14. User Journey

1. Lands on the page from a marketing angle (comparison content, social post, search).
2. Starts Day 1 free — no email required, mirrors the current Level 1 precedent that's already proven to convert attention into trust.
3. Finishes Day 1, hits a natural cliffhanger (a real incident teased for Day 2), decides whether to buy Starter.
4. Buys Starter, works through Days 1–30 at their own pace, builds early skill-tree progress and first badges.
5. Hits the Day 30 boundary, sees what Pro unlocks (the AI Prompt Library, the full 90-day arc, the Portfolio Guide) and upgrades.
6. Completes the full simulation, uses the Portfolio Project Guide to turn 2–3 missions into real interview-ready material.
7. If job-hunting, upgrades to Ultimate for the Interview Prep Kit and Career Roadmap right when it's most useful — timed to their actual job search, not to an arbitrary purchase point.

---

## 15. Content Roadmap

Structure follows the brief's own example beats, filled in as a full 90-day arc. This is a first pass — meant to be argued with, not treated as final.

**Days 1–10 (Starter, Arc 1: Onboarding & First Blood)**
Day 1 — Meet your team, understand the business. Day 2 — Design your warehouse. Day 3 — Your first stakeholder request. Day 4 — Reading someone else's SQL. Day 5 — Your first ETL. Day 6 — A dashboard someone doesn't trust. Day 7 — Your first code review. Day 8 — A "quick question" that isn't quick. Day 9 — Weekly reporting, automated. Day 10 — Retro: what you've learned in your first two weeks.

**Days 11–30 (Starter, Arc 2: Real Weight)**
Day 12 — Pipeline failure. Day 15 — Two dashboards disagree. Day 18 — CEO requests numbers, fast. Day 21 — A JOIN fans out revenue by 4x. Day 24 — Production outage. Day 27 — A metric definition fight between two teams. Day 30 — First skill-tree milestone / first "promotion" checkpoint.

**Days 31–65 (Pro, Arc 3: Ownership)**
Day 35 — You inherit a legacy pipeline nobody understands. Day 40 — Warehouse migration. Day 45 — Onboarding a new data source with a breaking schema. Day 50 — A monitoring alert at 2am (on-call). Day 55 — Finance discrepancy, board meeting in two days. Day 60 — You mentor a new hire. Day 65 — Major product release, your dashboards are the only source of truth on launch day.

**Days 66–90 (Pro/Ultimate, Arc 4: Leadership)**
Day 70 — A vendor API breaks silently. Day 75 — You propose an architecture change. Day 80 — Cross-team data governance conflict. Day 85 — You train the team on a new tool. Day 90 — You lead your first incident, end to end, alone.

Each Day maps to one of the recurring AI-collaboration angles (generate SQL, review SQL, explain execution plans, summarize incidents, create stakeholder updates) at least once across the arc, so the AI-collaboration teaching isn't a bolted-on section but threaded through the actual missions.

---

## What I'd suggest doing first

Don't build all 90 days before shipping anything — that's a multi-month build and you'd have nothing live in the meantime. Build **Days 1–5** first (the free Day 1, plus enough of the paid arc to prove the format and the incident framework actually work end to end), get that in front of real people, then keep building the rest of Starter. That's the same "ship the smallest real thing first" instinct that got Level 1 out the door originally — it's worked once already.

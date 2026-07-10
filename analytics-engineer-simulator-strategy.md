# Analytics Engineer Simulator — Product Strategy
### A commercial redesign of Case File: Analytics Engineer, not a replacement of it

---

## 0. The one decision that changes everything

Before the 15-point deliverable, one honest recommendation, because acting on the brief literally would mean throwing away real, finished work.

**Recommendation: evolve Case File: Analytics Engineer into this vision. Don't replace it.**

Here's the reasoning, stated plainly so it can be argued with:

Four levels of Case File: Analytics Engineer are already written, designed, built as real fillable PDFs, and live on the shop page. That's not a pitch deck — it's a finished, tested, shipped product with a specific voice (dry, competent, detective-procedural), a specific world (Solace, a wellness startup), a specific cast (Maya, Priya, Diego, Farrah), and a specific emotional throughline (the unresolved mystery of Jordan, your predecessor, who raised the same warning a year earlier and burned out alone). That throughline is the single most AI-resistant thing about the product — ChatGPT can explain a JOIN, but it can't write you into a story where catching a fan-out bug in Level 3 pays off emotionally in Level 8. Discarding that to start over on a generic "Analytics Engineer Simulator" trades a distinctive, half-finished asset for a generic, unfinished one.

But the brief is right about several things Case File is currently missing, and those gaps are real:

- **No downloadable production-asset library as a standalone value driver.** The foundation doc has "collectibles" (cheat cards, checklists) but they're framed as in-story rewards, not marketed as a toolkit someone would buy for the toolkit alone.
- **No pricing structure.** Every product on the shop page currently says "email for early access" — there's no tier system, no monetization plan, nothing a visitor could actually buy today.
- **No explicit AI-collaboration teaching.** The brief's instinct here is sharp: in 2026, ignoring AI in a product about analytics work looks dated, not neutral. The product should teach *how a senior engineer uses AI*, not pretend AI doesn't exist.
- **Gamification is implicit, not explicit.** Passport stamps and cheat cards exist, but there's no visible XP/skill-tree/progression system a buyer can see on a landing page before purchasing.
- **The "Levels" framing reads more like a course than a career.** The brief's "Day 1 / Day 12 / Day 90" framing is a genuinely stronger psychological device — it makes the passage of a career legible in a way "Level 3 of 8" doesn't.

So the redesign below keeps Solace, Jordan, the cast, the 8 worlds, and the 4 already-built levels — and layers in the brief's strongest ideas: a real toolkit, real pricing, real AI-collaboration content, explicit gamification, and a day-based timeline running underneath the existing level structure. Everything below is written against that hybrid, not against a from-scratch product.

---

## 1. Product Positioning

**Case File: Analytics Engineer** is a premium interactive simulation of your first year as an Analytics Engineer at a real (fictional) company — not a book, not a course, a job you can practice before you have it.

Positioning statement: *"The closest thing to six months of on-the-job Analytics Engineering experience you can get without a job."*

It sits in a category of one: not a SQL book, not a bootcamp, not a course platform, not a prompt library. It's a narrative-driven production simulator with a real toolkit attached.

## 2. Unique Selling Proposition

**You don't learn Analytics Engineering. You survive it, once, safely, before your job makes you do it for real.**

Three things make this defensible against "just ask ChatGPT":

1. **A continuous fictional company, not isolated exercises.** Every bug, every stakeholder fight, every incident happens inside one consistent warehouse, one consistent org chart, one consistent story — so judgment compounds the way it does at a real job, not the way it does in a tutorial series.
2. **A production-asset library that outlives the story.** The SQL library, RCA template, incident report template, and interview kit are things a working engineer opens six months later, not content read once and forgotten.
3. **An emotional stake.** The Jordan mystery means finishing the product means something, the way finishing a good detective novel does. A prompt library doesn't have an ending you care about.

## 3. Target Audience

**Primary:** career-changers and junior analysts (0–2 years experience) trying to break into or move up within data/analytics roles, who've already done a SQL course or bootcamp and are looking for the judgment and war-story experience those didn't give them.

**Secondary:** self-taught / bootcamp grads preparing for Analytics Engineering interviews specifically, who want "tell me about a time you fixed broken data" answers that are actually true.

**Tertiary:** working data analysts who want to level up into an Analytics Engineer title and need the dbt/warehouse/production vocabulary to credibly apply.

**Explicitly not the audience:** absolute beginners with zero SQL (Level 1 assumes SELECT/WHERE literacy — this is a bridge from "knows syntax" to "employable," not a from-zero course).

## 4. Competitor Analysis

| Category | Example | What they offer | What they're missing |
|---|---|---|---|
| SQL/Analytics books | *SQL for Data Analysis*, *Fundamentals of Data Engineering* | Solid reference, credible authors | No story, no continuity, no simulated stakes — reads once, shelved |
| Cohort bootcamps | DataCamp, Maven Analytics courses, dbt Labs courses | Structured curriculum, sometimes live instruction | Expensive, generic case studies not owned by one company/story, no lasting artifact |
| AI chat tools | ChatGPT, Claude, Cursor | Infinite on-demand explanation, can write any SQL | No narrative stakes, no forced judgment calls, no portfolio artifact, no sense of progression — you get answers, not experience |
| Prompt/template libraries | Notion template packs, generic "SQL cheat sheet" PDFs | Cheap, immediately useful | Zero narrative, zero skill-building sequence, commodity product, easily replicated by AI |
| Interview prep kits | Exponent, DataLemur | Real interview questions | Divorced from any lived context — you memorize answers instead of having actually lived the story behind them |

**The gap:** nobody combines a continuous narrative simulation with a genuinely reusable professional toolkit. Bootcamps have the curriculum but not the story or the artifacts. AI has infinite explanation but no narrative stakes or forced judgment. Template packs have the artifacts but no story or skill sequencing. Case File sits in the empty middle.

## 5. Why People Buy This in the Age of AI

People don't pay for information anymore — they pay for experience, judgment, and confidence, all things AI chat can't manufacture on its own because they require *stakes* and *sequence*, not just answers. Specific reasons someone chooses this over a ChatGPT session:

- ChatGPT answers the question you ask. Case File decides which questions a real job would force you to ask, in what order, under what pressure — the sequencing itself is the value.
- ChatGPT gives you a correct JOIN. Case File makes you sit with a wrong one for a page, predict the fix, and feel the difference between guessing and knowing.
- ChatGPT has no memory of "Jordan" or "the Level 3 fan-out bug" three levels later. Case File does — continuity is worth paying for precisely because generic AI sessions don't have it.
- A ChatGPT conversation produces nothing you can show anyone. Case File produces a Level 8 portfolio case study, real templates, and answers to real interview questions grounded in something you actually did.

## 6. Pricing Strategy

Anchor against a bootcamp (\$500–2,000) and against a single good technical book (\$30–50) — priced meaningfully above a book (because of the toolkit and interactivity) and meaningfully below a bootcamp (because it's self-paced and asynchronous).

- **Level 1 free, forever** — the proven hook already live on the site; no change.
- **Starter, Pro, Ultimate tiers** (below) priced at **\$39 / \$89 / \$149**, one-time purchase, no subscription — subscriptions fight the "own it forever, reuse the toolkit" promise that's core to the USP.
- **Founding-cohort discount** for the first buyers once Level 8 ships in full, framed as "help build the case file" — matches the existing referral-incentive spirit in the original foundation doc.

## 7. Product Tiers

**Starter — \$39**
- Levels 1–4 (already built): The Spreadsheet Kingdom, The SQL Forest, The JOIN Labyrinth, The dbt Factory
- Core cheat cards from those 4 levels (SQL Set 1 & 2, dbt cheat cards)
- Career Checklist accumulated through Level 4

**Pro — \$89** *(recommended default tier, most visibly promoted)*
- Everything in Starter
- Levels 5–8 (Warehouse City, Performance Dungeon, Production Control Room, Executive War Room)
- Full Production Asset Library (see Section 9) — SQL library, templates, checklists, data dictionary
- Full Analytics Engineering Prompt Library (the AI-collaboration toolkit)
- Level 8 Portfolio Project Guide

**Ultimate — \$149**
- Everything in Pro
- Interview Preparation Kit (flash cards + mock "walk me through a time" scenarios built from the Solace story)
- Career Roadmap (beyond this product — certifications, communities, next steps)
- Access to the shared portfolio-showcase thread (buyers post their Level 8 case study)
- One tier of "referral unlocks extra cheat card set" incentive from the original plan, kept as-is

## 8. Complete Feature List

- 8-level narrative simulation inside one continuous fictional company (Solace)
- Real fillable PDF case files (AcroForm fields — not static illustrations)
- Day-based timeline layer running underneath the 8 levels (Day 1 → Day 90+) to reinforce career-progression pacing
- Recurring cast with real relationships that evolve (trust score narrative)
- Realistic production incidents with logs, sample data, schema, and multiple plausible causes
- Repeatable investigation framework taught explicitly and reused every level (business question → hypothesis → investigate → validate → recommend → document → prevent)
- QR-bridge interactivity to the live SQL Playground, animated diagrams, and Boss Fight commentary
- Explicit AI-collaboration sections per level (how to prompt for SQL review, test generation, documentation, stakeholder summaries)
- Gamification: Passport stamps, XP-style level dots, hidden surprises, Boss Fights, skill-tree-style cheat card collection
- Production Asset Library: real templates a working engineer reuses on the job
- Portfolio-building final projects every level, compounding into a Level 8 case study
- Interview Flash Cards built from lived scenarios, not generic questions

## 9. Digital Assets Included (the toolkit, expanded from the brief)

Mapped onto what the foundation doc already planned as "collectibles," expanded to match the brief's fuller list:

- Production SQL Library (every query pattern used across all 8 levels, cleaned up for reuse)
- ETL/dbt Model Templates (staging/intermediate/marts boilerplate)
- Warehouse Documentation Template + Data Dictionary
- Architecture Blueprint (Solace's final warehouse design)
- Monitoring Checklist + Deployment Checklist
- Incident Report Template + Root Cause Analysis Template
- Business Requirement Template
- Testing Checklist (dbt tests, data QA)
- Analytics Engineering AI Prompt Library (the new addition — prompts for SQL review, execution-plan explanation, documentation, test generation, stakeholder updates)
- Career Roadmap + Interview Flash Cards
- Portfolio Project Guide

## 10. Marketing Angles

- "Six months of Analytics Engineering experience before your first job."
- "Every SQL book teaches syntax. This one teaches judgment — because it makes you use it."
- "Built by someone who's actually shipped this exact kind of fix in production." (real credibility, matches the founder's actual BI/analytics engineering background)
- "The toolkit alone is worth it — the story is the reason you'll actually finish it."
- Social proof mechanic already planned: Passport/tracker screenshots are inherently shareable ("just finished the JOIN Labyrinth").

## 11. Landing Page Messaging

**Hero:** "You didn't buy a book. You were handed a case file."
**Subhead:** "Eight levels. Eight real production crises. One fictional company you'll know better than most jobs you've actually had."
**Proof row:** 4 of 8 levels live · real fillable PDF case files · a production toolkit you'll still be using in six months
**CTA:** "Download Level 1 free — no email required."
**Secondary section:** "Not another SQL book" — a direct table contrasting Case File against a book, a bootcamp, and ChatGPT (mirroring Section 4 above, simplified for a buyer).

## 12. Product Roadmap

- **Now:** Levels 1–4 live and free/early-access, shop page updated (done)
- **Next:** Production Asset Library v1 (start with what Levels 1–4 already generated — SQL patterns, cheat cards — packaged as a real downloadable toolkit) — this can ship *before* Levels 5–8 are finished and becomes a Pro-tier preview
- **Then:** AI Prompt Library — a genuinely fast build, high differentiation, addresses the brief's most forward-looking idea directly
- **Then:** Levels 5–8, one at a time, same process already proven
- **Then:** Pricing/checkout wired up (Starter/Pro/Ultimate), founding-cohort launch
- **Later:** Interview Prep Kit + shared portfolio-showcase thread

## 13. Brand Identity

Keep the existing brand system — it's already doing real work and is genuinely distinctive:

- Name: **Case File: Analytics Engineer** (kept — stronger and more ownable than a generic "Simulator" name)
- Tagline, sharpened: *"Six months of Analytics Engineering experience, before your first job."* (paired with the existing "Eight crises. One trust to earn." as a secondary line)
- Visual anchor: the stamped manila folder motif (kept)
- Typography/color system: Fraunces + Inter, per-world accent colors (kept, already built into 4 levels)
- Voice: dry, direct, first person from Simran — no hype language (kept, matches the whole site)

## 14. User Journey

1. Discover via shop page or free Level 1 download — no email, no friction
2. Complete Level 1, hit the natural cliffhanger (Jordan's unfinished folder, first real crisis)
3. Get early-access CTA for Levels 2–4 (current mechanic, kept)
4. Once Pro tier exists: see the Production Asset Library teased inside Level 4's cheat cards, creating a natural upsell moment
5. Purchase Pro or Ultimate once Levels 5–8 are live
6. Finish Level 8, produce the portfolio case study, optionally post it to the shared showcase thread
7. Use the toolkit on an actual job, months later — the point where the product proves its price was justified

## 15. Content Roadmap

- Levels 1–4: **done, shipped**
- Production Asset Library v1 (built from what Levels 1–4 already produced): **next, fast**
- AI Prompt Library: **next after that, fast**
- Level 5 — The Warehouse City: star schema, fact/dimension design, zoning-the-city whiteboard moment
- Level 6 — The Performance Dungeon: query optimization, incremental models, cost-cutting
- Level 7 — The Production Control Room: tests, CI/CD, alerting, the silent-failure incident
- Level 8 — The Executive War Room: board-meeting finale, Jordan mystery resolution, portfolio project
- Interview Prep Kit + Career Roadmap: built last, once the full story exists to draw real "tell me about a time" material from

---

## What I'd suggest doing first

Given four levels are already built, the single highest-leverage next move isn't Level 5 — it's packaging the **Production Asset Library v1** from what Levels 1–4 already generated (SQL patterns, cheat cards, the audit/reconciliation worksheets). It's fast to build, it's the brief's strongest genuinely new idea, and it gives the shop page something concrete to sell before Levels 5–8 exist. Say the word and I'll scope it.

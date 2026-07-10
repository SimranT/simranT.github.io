# Addendum — The Career Dashboard (Strategy v6)

*One addition to v5, requested as the missing capstone: something visual, not just a certificate. This document specs it fully and slots it into the existing Mission Kit. Nothing else in v5 changes.*

---

## 1. What it is, and why it's not the Skill Compass or the Certificate

v4 already has a Skill Compass (a radar chart the reader shades in) and v5 already has a Completion Certificate. Neither one is built to be screenshotted on its own — the Compass is an assessment tool, the Certificate is a formality. The Career Dashboard is different on purpose: it's a single, dense, highly designed page that pulls the *best numbers* from across the whole Kit — activity counts, skill ratings, flight hours, and one composite score — into one image built specifically to be shared.

The genre already exists and already works: Spotify Wrapped, Strava's year in review, Duolingo's streak recap, GitHub's contribution graph. People share these not because they're asked to, but because a well-designed personal stats card is satisfying to look at and says something true about them. The Career Dashboard is that genre, applied to "I spent 90 days becoming production-ready."

The mockup above is the actual design: name and rank up top, an activity tally (incidents, RCAs, ETL blueprints, architecture reviews, flight hours, type ratings), skill ratings as word-rated bars, and — the centerpiece — a **Career Readiness gauge**, styled as an aircraft instrument dial, landing on one composite number.

---

## 2. How it gets built with no backend

Same rule as everything else in the Kit: earned, not handed. The reader has been tallying real numbers since Day 1 — the Analytics Engineer OS's Incident Tracker, the Skill Compass scores every 10 days, the Flight Log. The Career Dashboard is a single fillable PDF page that ships blank and gets filled in at Day 90, as part of the Captain's Check Ride, by transcribing totals the reader already has sitting in their own OS. The Career Readiness number is a simple documented formula (an average of the eight Skill Compass dimensions, weighted slightly toward Investigation and Decision-Making) that the reader calculates by hand off their own final scores — same spirit as balancing a checkbook, not a black box.

This is genuinely buildable right now with the tooling already proven across four shipped Levels: WeasyPrint for the layout, fillable AcroForm text fields for the name, numbers, and rank, and the same arc/gauge rendering technique used for the mockup above, pre-drawn at a few discrete fill levels (or, more simply, one gauge graphic with a numeric field beside it — simpler to produce, same effect once filled in).

---

## 3. Where it lives in the Kit

Promoted out of `09_Certificates/` into its own moment: it's the second half of the Day 90 Captain's Check Ride, sitting right next to the Certificate, not filed away as one more template. The folder structure from v5 gets one addition:

```
09_Certificates_and_Dashboard/
    Completion_Certificate.pdf
    Type_Rating_Cards.pdf
    Career_Dashboard.pdf
```

---

## 4. Gut check

Would someone pay for this over asking ChatGPT? Trivially yes — this isn't information at all, it's a personal record of specific, logged achievement. No chat tool can generate a Career Dashboard, because the numbers on it don't exist until the reader has actually done the 90 days. It's the most defensible artifact in the entire Kit for exactly that reason, and now it's also the most shareable one.

---

With this addition, the strategy phase is complete across six rounds — positioning, mechanics, the Mission Kit reframe, and now the capstone artifact. The next real decision is building, starting with the MVP scoped at the end of v5 (Section 8): the 3-Day mini-arc plus its full unboxing wrapper. The Career Dashboard should be added to that MVP's scope, filled with sample numbers, so the very first thing built proves the entire loop end to end — investigation through shareable outcome — not just the narrative mechanic alone.

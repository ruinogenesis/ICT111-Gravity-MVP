# Startup / Product Metrics — Gravity

> Note on IDs: Lab 07 already defined experiment success metrics M-01–M-08 in `/docs/success-metrics.md`. To keep traceability clean, the product metrics below use the prefix **PM-**. PM-08 reuses the Lab 08 validation evidence.

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| PM-01 | Total listings | Usage | Shows whether sellers actually post — the supply side of the marketplace (E01: one central place). | Count of listings with status ≠ Removed | localStorage `gravityListings` (seeded from /prototype/data.json) | Dashboard |
| PM-02 | Listings by status (Available / Reserved / Sold) | Status | Shows live marketplace state and whether the status lifecycle (FR-08) is used. | Count per status value | localStorage `gravityListings` | Dashboard (stat cards + status bar chart) |
| PM-03 | Sell-through rate | Operational / Value | The core value proof: items get **sold** instead of discarded (E02, E03). | Sold ÷ total active listings × 100 | localStorage `gravityListings` | Dashboard |
| PM-04 | Most common category | Category | Tells the team where demand/supply concentrates — drives category and filter decisions (Lab 08 finding). | Count listings per category, take highest | localStorage `gravityListings` | Dashboard (category bar chart) |
| PM-05 | Contact requests + acceptance rate | User activity | The connector metric: Gravity succeeds when buyers and sellers actually connect (FR-02); acceptance rate shows request quality. | Count requests; Accepted ÷ (Accepted + Declined) × 100 | localStorage `gravityRequests` | Dashboard |
| PM-06 | Average time to Sold | Operational | Time pressure is the core pain (E02: days before a flight) — the faster items sell, the stronger the value. | Mean of (soldDate − postDate) over Sold listings | localStorage `gravityListings` (soldDate added in v0.3) | Dashboard |
| PM-07 | Verified users | Usage / Trust | Trust is the differentiator (E05, NFR-04): how much of the user base is fully verified. | Count users with verified = true / total users | localStorage `gravityUsers` | Dashboard |
| PM-08 | Task success rate (validation) | Validation | Proves users can complete the core flow — the Lab 08 evidence line. | Completed tasks ÷ total task runs × 100 | /data/validation-results.csv (fixed evidence) | Dashboard (validation cards) |

Supporting validation figures shown with PM-08: average feedback 4.30/5, average interest 4.40/5, 5 testers (Lab 08).

## 2. Metrics Interpretation
With the demo seed data, the dashboard shows 8 active listings with a sell-through rate of 25% (2 of 8 Sold) and an average time to Sold of about 3.5 days — for real move-out sellers that number must stay under the days-before-flight window, so PM-06 is the metric to watch hardest at semester scale. Furniture, Appliances, and Textbooks tie as top categories (2 listings each), matching the Lab 03 evidence that higher-value furniture and appliances drive the pain (E02) while textbooks drive volume; the two new categories (Electronics, Clothing) already have their first listings, confirming the Lab 08 expansion was needed. Contact requests show a 67% acceptance rate on decided requests, which suggests requests are serious rather than spam — supporting the reveal-after-agree design (FR-15). Verified users are 3 of 4, and the one unverified account is exactly the account that cannot post or request contact, demonstrating the trust gate works (NFR-04). PM-08 carries the Lab 08 evidence (93.3% task success, 4.30 feedback): the flow works, and the two failed task runs were the contact-flow and Reserved confusions — both addressed by the Sprint 1–2 fixes (explainer, Reserved wording, and the new My Listings request visibility). Next improvement priority: re-run validation in Lab 13 to check PM-08 rises with the fixes in place, and watch whether PM-05 acceptance rate stays high as listing volume grows.

## 3. Link to Final Prototype
All PM metrics except PM-08 are computed **live** in /prototype/script.js (`computeMetrics()`) from the same localStorage records the rest of the app uses, and are displayed on the Dashboard screen (S-05) as metric cards and CSS bar charts — no external BI tool needed. PM-08 and the validation figures are shown on the same screen as fixed evidence with their source labelled. In the Lab 14 final demo, the dashboard is the closing screen: post a listing, request contact, accept it, mark the item Sold — then show every metric update in real time.

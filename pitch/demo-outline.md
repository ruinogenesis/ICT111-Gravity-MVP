# Demo Outline for Final Pitch — Gravity

## 1. Opening Problem
Every semester, RSU students moving out throw away working desks, fridges, and textbooks — while students moving in buy the same items new, two buildings away. The current "solution" is scattered Facebook/LINE groups where posts are buried in hours. Evidence: 11/15 students report scattered unsearchable channels; 30–90 minutes wasted per item; 7/15 discarded working items (Lab 03).

## 2. Target User
Sellers: graduating and international RSU students under move-out time pressure (persona Su Su). Buyers: new and continuing students furnishing cheaply. Both sides verified RSU students — that exclusivity is the trust model.

## 3. Product Solution
Gravity — a verified-students-only secondhand marketplace. Post once into a searchable, categorized market; live item statuses; contact revealed only after both sides agree (RSU email only). Connector model: no payments, no delivery, no inventory.

## 4. Demo Flow
(Full script with lines and requirement IDs: /docs/demo-script.md — 8 minutes)
1. Landing page → the promise and the CTA (FR-01)
2. Register with RSU-email gate (FR-10/15) — show a rejection
3. Post Su Su's desk (FR-03/10/11)
4. Buyer finds it via search + filter (FR-05/06)
5. Detail view: verified badge, zero contact info (FR-07/15)
6. Request contact → what-happens-next explainer (FR-02/11)
7. Seller accepts in My Listings → mutual email reveal → mark Sold (FR-02/08)
8. Admin view + live metrics dashboard (FR-09/12)

## 5. Evidence
- Validation: Lab 08 — 93.3% task success, 4.30 feedback, 4.40 interest, 5 testers. Lab 13 re-test (5 testers, stricter 8-task set): 90% strict success, ease 4.62/5, **contact-flow comprehension 4/5 vs 2/5 baseline, Reserved 5/5, mobile pass on real device**
- Product metrics live in the prototype: PM-01–08 (sell-through rate, avg days to Sold, acceptance rate)
- Responsible design: Lab 09 risk register R-01–09, all mitigations shipped (incl. XSS fix), zero third-party assets, PDPA-aligned data minimization
- Traceability: all 16 fixed requirements implemented and mapped (feature-implementation-status.md)

## 6. Ask / Closing
"Everything you saw is live on GitHub Pages, tested with real students, and traceable to the requirements. Next step beyond the course: pilot with one dorm building at the end-of-semester move-out peak." Links: landing page, prototype, repository.

# User Testing Plan — Gravity (Lab 13)

## 1. Testing Objective
Before Lab 14 we want to learn three things: (1) did the Sprint 1–2 fixes actually resolve the two Lab 08 confusions — the reveal-after-agree contact flow (only 2/5 understood it) and the "Reserved" status (misread behaviorally)? Target: task success above the 93.3% Lab 08 baseline, contact-flow comprehension ≥ 4/5. (2) Do the new v0.3 features (My Listings, sent-request status, metrics dashboard) work for first-time users without help? (3) Does the prototype hold up on a real phone (FR-14 / NFR-01 — the one requirement still Partially Completed)?

## 2. Test User Profile
| User Type | Number of Testers | Why This User Type Matters |
| --- | --- | --- |
| Seller-side student (ideally graduating/international) | 2 | Primary persona under move-out pressure (E02); exercises post → request → accept → status flow |
| Buyer-side student (Year 1–2) | 2 | Demand side (CS02); exercises browse → filter → detail → request → sent-status flow |
| Returning Lab 08 tester (any side) | 1 | Direct before/after comparison on the two fixed confusion points |

5 testers total, matching the Lab 08 sample size so results are comparable. Testers recorded as anonymous codes UT-01…UT-05 (consent per /docs/user-consent-statement.md, verbal + shown the written statement).

## 3. Testing Tasks
| Task ID | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- |
| T01 | Open the landing page, then the prototype, and explain what Gravity is for and who can use it | FR-01 | Mentions marketplace + RSU-only/verified without prompting | Does "verified RSU students only" land? (Lab 08 gap: RSU-only was missed) |
| T02 | As seller: post a listing (given: desk, Furniture, 800 THB, Good, Dorm A lobby, photo) | FR-03, FR-10, FR-11 | Completes without help; sees success message | Field clarity, pickup-zone dropdown, photo placeholder understanding |
| T03 | As buyer: find a textbook under 300 THB using search/filter/sort | FR-05, FR-06 | Finds GL-003 within 90 s | Filter vs search discoverability (Lab 08: filter was overlooked) |
| T04 | Open its detail view and say whether they'd trust this seller and why | FR-07, FR-15 | Mentions verified badge; notices no contact info shown | Trust signal comprehension |
| T05 | Explain what Available / Reserved / Sold mean, and what happens to a Reserved item if the deal falls through | FR-08 | Correctly says Reserved is on-hold, not final | **Re-test of Lab 08 confusion #2** (explainer text + dimmed cards) |
| T06 | Request contact on an Available item, then explain what happens next and who will see whose information | FR-02, FR-15 | Correctly describes: seller accepts → both see RSU emails only | **Re-test of Lab 08 confusion #1** (what-happens-next explainer) |
| T07 | Switch role to seller, find the incoming request in My Listings, accept it, then mark the item Sold | FR-02, FR-08 | Completes without help; understands where the buyer's email appeared | New v0.3 screen — first-time usability |
| T08 | On a phone (real device), browse, open a detail, and read the dashboard | FR-12, FR-14, NFR-01 | All content readable and usable without horizontal scrolling | **FR-14 real-device evidence** — closes the last Partially Completed requirement |

## 4. Testing Procedure
1. Introduce the purpose (2 min): class project, testing the prototype not the tester, ~15 minutes total, anonymous code only.
2. Show the written consent statement (/docs/user-consent-statement.md); proceed on agreement.
3. Reset demo data; open the live URL (phone for T08, laptop otherwise).
4. Give tasks one at a time; do not guide unless stuck > 2 minutes (record as "help needed").
5. Record per task: completed yes/no/partial, time, confusion observed, quotes (anonymized).
6. Close with three questions: What was confusing? What would make you actually use this? Score 1–5 for ease and interest.
7. Fill /data/user-testing-results.csv during the session; summarize in /docs/user-testing-results.md after.

## 5. Metrics
Task success rate (target > 93.3% baseline), contact-flow comprehension count (target ≥ 4/5 vs 2/5 in Lab 08), Reserved comprehension count (target 5/5), average ease and interest scores (baseline 4.30 / 4.40), mobile pass/fail per T08.

## 6. Ethical Reminder
No names, no student IDs, no photos of testers — codes UT-01…UT-05 only. Testing uses fictional sample data; testers never enter real personal information (instruct them to use obviously fake emails on the register step, e.g. test.name@rsu.ac.th). Feedback is used only for class learning and prototype improvement, stored in the public repo in anonymized form (per Lab 09 privacy decisions).

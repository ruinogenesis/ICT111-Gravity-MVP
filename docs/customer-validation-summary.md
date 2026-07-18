# Lab 08 - Customer Validation Summary — Gravity

## 1. Project Title
Gravity — RSU Student Secondhand Marketplace

## 2. Prototype Tested
- Prototype version: v0.1 — working MVP experiment demo
- Prototype link: /prototype/mvp-demo.html
- Main task tested: core marketplace workflow — explain homepage (T1), post a listing (T2), find an item via search/filter (T3), open detail and judge trust (T4), interpret statuses (T5), understand the reveal-after-agree contact process (T6)
- Related requirements: FR-01, FR-02, FR-03, FR-05, FR-06, FR-07, FR-08, FR-10, FR-11, FR-15

## 3. Test Users
| Test User ID | User Role | Why this user is relevant |
|---|---|---|
| TU-01 | Student, has sold an item before | Seller-side; real posting experience |
| TU-02 | Student, secondhand trader (not student-to-student) | Compares Gravity to other marketplaces; safety-focused |
| TU-03 | Student, buyer (bought from a student friend before) | Buyer-side; strong opinions on UI and friction |
| TU-04 | Student, no experience (planning to sell) | Tests first-time clarity (rapid session) |
| TU-05 | Student, active FB-group buyer | Compares Gravity directly to current channels |

Note: recruited from available RSU students; roles differ slightly from the Lab 07 plan. TU-04 and TU-05 were rapid sessions (~15-25s per task) with lighter qualitative depth — flagged in the data.

## 4. Validation Method
- Testing method: individual moderated sessions, think-aloud, tasks T1-T6 from /docs/experiment-script.md; help given only when fully stuck (recorded as Task_Completed = No)
- Location/platform: in person, laptop demo (mvp-demo.html)
- Number of testers: 5
- Data collected: task completion, time, confusion points, feature usefulness, feedback ratings Q1-Q8, open comments — /data/validation-results.csv

## 5. Summary of Results
| Metric | Result | Interpretation |
|---|---:|---|
| Total test users | 5 | Small but varied sample (seller, buyer, trader, first-timer) |
| Task success rate | 93.3% (28/30) | Core workflow is completable; only 2 tasks failed, both meaningful |
| Average feedback score | 4.30 / 5 | Positive overall usability |
| Average interest level | 4.40 / 5 | Strong would-use interest |
| Median time to post (T2) | 56 s | Well under the 180 s target — posting is fast |
| Most common confusion points | Search/filter (4) and Contact flow (4) | The two clearest areas to fix before implementation |

## 6. Key User Comments
- "The verification badge makes me feel safe" / trusts RSU-only source (TU-01, TU-02) — verification is the strongest validated feature.
- Contact flow split sharply: TU-02 wants MORE safety ("confirm socials, meetup plan"); TU-03 wants LESS friction ("LINE should show instantly, everyone is verified"). TU-04 called it "confusing"; TU-05 wants a response-time limit.
- "Reserved" is contested: TU-01 tried to bid on a Reserved item; TU-05 said reserved items "shouldn't be on the list at all."
- Photos and more categories requested by nearly everyone; clothes and makeup were both miscategorised as "Appliances."
- Adoption is realistic, not either/or: most said they would use "both the website and existing groups" for exposure.

## 7. Affected Requirements
| Requirement ID | Evidence Found | Required Prototype Improvement |
|---|---|---|
| FR-15 / FR-02 (contact flow) | Q6 avg 3.0/5; 4 confusion hits; testers split on more-safety vs instant-reveal | Add a short in-flow explanation of reveal-after-agree; show seller profile + a meetup/response-time expectation |
| FR-08 (status labels) | 2 testers misread "Reserved"; one tried to bid on it, one wanted it hidden | Relabel/clarify (e.g. "Reserved - not available") and/or filter Reserved out of the default view |
| FR-06 (search/filter) | 4 confusion hits; filter discoverability weak; requests for min-price and availability timeframe | Make the filter more visible; add min-price and a listing validity date |
| FR-03 (categories) | Clothes + makeup miscategorised as Appliances; requests for electronics, accessories, bulk | Expand the category set; consider a bulk-sale option |
| FR-07 (detail view) | Requests for item photos and meet-up scheduling info | Add photo support and a meet-up time field |

## 8. Conclusion
The MVP direction is **validated with minor revisions needed.** The core value — a trusted, RSU-verified, searchable marketplace — is confirmed by a 93.3% task success rate, 4.30 usability, 4.40 interest, and fast posting (56 s median). The problems found are refinements, not a broken concept: the contact flow needs clearer explanation, the "Reserved" status needs clarifying, and search/filter and categories need expansion. Decision recorded in /docs/mvp-decision.md.

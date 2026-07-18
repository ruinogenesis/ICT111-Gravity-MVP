# Lab 08 - Analytics Insights — Gravity

## 1. Analytics Question
What did our five testers do, say, and prove when testing the Gravity MVP workflow — and which critical assumptions (A-01 sellers complete a structured form, A-02 search beats group-scrolling, A-04 reveal-after-agree reads as protection) survived contact with real users?

## 2. Metrics Calculated (from /data/validation-results.csv)
| Metric | Method | Result | Lab 07 Target | Met? |
|---|---|---|---|---|
| Total test users | Count | 5 | 5 | Yes |
| Task success rate (M-01) | Completed / total task records | 93.3% (28/30) | >=70% | Yes |
| Average feedback score (M-07) | Mean of feedback ratings | 4.30 / 5 | >=4.0 | Yes |
| Average interest level (M-08) | Mean of interest ratings | 4.40 / 5 | >=4.0 | Yes |
| Listing form accuracy (M-02) | Valid T2 submissions / testers | 5/5 (100%) | >=80% | Yes |
| Search success (M-03) | T3 completions / testers | 5/5 (100%) | >=70% | Yes |
| Median time to post (M-04) | T2 time | 56 s | <=180 s | Yes |
| Status comprehension (M-05) | T5 correct explanations | 3/5 | >=4/5 | No |
| Contact-flow comprehension (M-06) | T6 correct explanations | 2/5 clearly correct | >=4/5 | No |

Per-question feedback averages: Q1 purpose 4.2 · Q2 no-help 4.6 · Q3 form clear 4.8 · Q4 search useful 3.8 · Q5 status clear 5.0 · Q6 contact-flow understood 3.0 · Q7 verification trust 4.4 · Q8 would-use 4.0.

Confusion points by category: Search/filter 4 · Contact flow 4 · Status labels 2 · Detail view 2 · Listing form 1.

## 3. Findings
1. **The core workflow works and the concept is wanted.** 93.3% task success, 100% posting and search completion, 56 s median post time, 4.4 interest, and Q7 verification-trust at 4.4 confirm assumptions A-01 (sellers WILL complete a structured form — TU-01 posted in 56 s) and A-02 (search/filter works — every tester found items). The RSU-verified badge was the single most praised feature (TU-01, TU-02).

2. **The contact flow (A-04) is the weakest point and users disagree on the fix.** Q6 averaged only 3.0/5 and only 2 of 5 clearly understood reveal-after-agree. Crucially, testers split in OPPOSITE directions: TU-02 (safety-focused) wanted MORE — seller profile, meetup plan, verified locations; TU-03 (friction-averse) wanted the LINE shown INSTANTLY because everyone is pre-verified. TU-04 found it "confusing"; TU-05 wanted a response-time limit. This is the central design decision for the sprint.

3. **The "Reserved" status is misread behaviourally, not just verbally (A-03).** Status labels scored 5.0/5 on the feedback form, yet TU-01 tried to bid on a Reserved item and TU-05 argued reserved items "shouldn't be on the list." Users say the labels are clear but then act as if they aren't — a self-report vs behaviour mismatch that only real testing reveals.

4. **Two consistent smaller gaps:** item photos were requested by nearly every tester, and the category set is too narrow — clothes and makeup were both filed under "Appliances," and testers asked for electronics, accessories, and bulk options.

## 4. Interpretation
The idea is validated; the interface needs targeted fixes. A-01 and A-02 are confirmed strongly. A-04 is only partially supported — the concept of privacy protection lands with some users but the current UI doesn't explain it, and different segments want it dialled in opposite directions, so the flow needs a clearer explanation plus a middle path (e.g. reveal after accept, but show seller profile and a response-time expectation up front). A-03 needs a wording/logic fix. None of this challenges the core problem or solution shape — these are refinements before implementation.

## 5. Requirements Affected
| Requirement ID | Evidence | Action Needed |
|---|---|---|
| FR-02 / FR-15 | M-06 = 2/5; Q6 = 3.0; split safety-vs-friction feedback | Explain reveal-after-agree in-flow; add seller profile + response-time expectation |
| FR-08 | M-05 = 3/5; bid-on-reserved and hide-reserved behaviours | Clarify "Reserved - not available"; option to hide Reserved from default view |
| FR-06 | 4 confusion hits; filter discoverability; min-price + timeframe requests | Make filter prominent; add min-price filter and listing validity date |
| FR-03 | Clothes + makeup miscategorised; electronics/accessories/bulk requested | Expand categories; consider bulk-sale support |
| FR-07 | Photo + meetup-time requests | Add item photos and a meet-up time field |

## 6. Next Prototype Improvement
Before Implementation Sprint 1 (Lab 10), in priority order: (1) redesign the contact flow with an in-line explanation and seller profile; (2) fix "Reserved" wording and default-view logic; (3) surface the filter and add min-price + validity date; (4) expand categories and add photo support. Each becomes a GitHub issue linked to its requirement (see /docs/mvp-decision.md section 6).

# Success Metrics and Decision Rules — Gravity

## 1. Success Metrics
| Metric ID | Metric | Target | How to Measure | Related Requirement / Assumption |
|---|---|---:|---|---|
| M-01 | Task completion rate (T1–T6, no help) | ≥ 70% | Completed tasks / total tasks | FR-02 / A-01, A-02 |
| M-02 | Listing form completion accuracy | ≥ 80% | Valid first-attempt T2 submissions / testers | FR-03, FR-10 / A-01, A-07 |
| M-03 | Search success rate | ≥ 70% | Testers who find the target in T3 without help / testers | FR-06 / A-02 |
| M-04 | Time to post a listing | ≤ 180 s median | T2 timing | FR-03 / A-01 |
| M-05 | Status comprehension | ≥ 4 of 5 testers | T5 correct explanation | FR-08 / A-03 |
| M-06 | Contact-flow comprehension | ≥ 4 of 5 testers | T6 correct explanation | FR-15 / A-04 |
| M-07 | Usability rating | Average ≥ 4.0 / 5 | Feedback form | FR-13 |
| M-08 | Would-use rating | Average ≥ 4.0 / 5 | Feedback form | Value proposition / A-01, A-02 |

## 2. Decision Rules
| Result | Decision |
|---|---|
| ≥7 of 8 metrics meet target | Build. Continue to Implementation Sprint 1 with scope F01–F12 unchanged. |
| Comprehension (M-05/M-06) or form accuracy (M-02) fails | Revise. Fix labels, wording, form fields, or flow before the sprint; log changes as issues linked to the failed metric. |
| Core metrics (M-01, M-03, M-08) far below target | Revisit. Return to requirements, user stories, and Lab 03 evidence before building; any requirement change goes through issues + logbook. |

## 3. Recording
Raw task observations: /data/experiment-results.csv · Feedback ratings: /data/feedback-results.csv · Both feed the Lab 08 validation summary and MVP decision.

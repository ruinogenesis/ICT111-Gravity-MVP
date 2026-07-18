# Critical Assumptions — Gravity

## Instruction
Assumptions that could cause the final prototype to fail if wrong, ranked by risk and evidence.

| Assumption ID | Category | Assumption | Related Requirement/User Story | Risk Level | Current Evidence | How to Test |
|---|---|---|---|---|---|---|
| A-01 | User problem | Sellers under move-out pressure will complete a structured listing form instead of a quick unstructured Facebook post. | FR-03 / US-02 | High | Lab 03 shows the pain (E01, E02) but is interest-based, not behaviour-based | T2: time-to-post, completion rate, would-use rating |
| A-02 | Value proposition | Buyers can find a specific item faster in Gravity than by scrolling group posts, and see this as the main value. | FR-05, FR-06 / US-03, US-04 | High | E01 (11/15) supports the problem, not yet the solution | T3: search success rate and time; "most useful feature" |
| A-03 | Usability | The status labels Available / Reserved / Sold are understood without explanation. | FR-08 / US-07 | Medium | No evidence yet — labels chosen by the team | T5: tester explains statuses and which items are still available |
| A-04 | Value / Usability | The reveal-after-agree contact flow is understood and felt as protection, not friction. | FR-15 / US-06 | High | E05 is only 3/15 — differentiator on thin evidence | T6: tester explains what happens after "Request contact" |
| A-05 | Business logic | RSU-only verification is seen as a reason to trust, not a barrier to entry. | FR-15 / US-01 | Medium | Positive signals in Lab 03 (R002, R013), untested | Feedback question; reactions to the verified badge in T4 |
| A-06 | Technical feasibility | A localStorage/JSON prototype can demonstrate the full workflow smoothly. | FR-04 / architecture | Medium | Lecturer's practice demo uses the same approach | Run the demo with 5 testers; log technical failures |
| A-07 | Data handling | The required fields are enough for buyers to decide, without demanding too much from sellers. | FR-03, FR-10 / US-02, US-05 | Low–Medium | Field set derived from Lab 03 group-post observation | T2 form accuracy; T4: does the tester ask for missing info? |

## Categories used
User problem · Value proposition · Usability · Technical feasibility · Business logic · Data handling

## Riskiest assumptions (top 3)
1. A-01 — if sellers won't complete a structured form, the supply side dies.
2. A-02 — if search isn't clearly better than scrolling groups, buyers won't switch.
3. A-04 — if the contact flow confuses people, the main differentiator becomes a drop-off point.

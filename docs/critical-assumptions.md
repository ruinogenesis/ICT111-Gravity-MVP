# Critical Assumptions — Gravity

## Instruction
Assumptions that could cause the final prototype to fail if they are wrong, ranked by risk and evidence level.

| Assumption ID | Category | Assumption | Related Requirement/User Story | Risk Level | Current Evidence | How to Test |
|---|---|---|---|---|---|---|
| A-01 | User problem | Sellers under move-out pressure will spend 2–3 minutes completing a structured listing form instead of a quick unstructured Facebook post. | FR-03 / US-02 | **High** | Lab 03 shows the pain (E01, E02) but is interest-based, not behavior-based — nobody has posted through us yet | T2: time-to-post and completion rate; would-use rating from sellers |
| A-02 | Value proposition | Buyers can find a specific item faster in Gravity than by scrolling group posts, and see this as the main value. | FR-05, FR-06 / US-03, US-04 | **High** | E01 (11/15 report unsearchable channels) supports the problem, not yet the solution | T3: search success rate and time; "most useful feature" answers |
| A-03 | Usability | The status labels Available / Reserved / Sold are understood without explanation. | FR-08 / US-07 | Medium | No evidence yet — labels chosen by the team | T5: tester explains statuses and identifies which items can still be requested |
| A-04 | Value / Usability | The reveal-after-agree contact flow is understood and felt as protection, not as annoying friction. | FR-15 / US-06 | **High** | E05 is only 3/15 respondents — our trust differentiator rests on thin evidence | T6: tester explains what happens after "Request contact"; targeted feedback question |
| A-05 | Business logic | RSU-only verification is seen as a reason to trust the platform, not as a barrier to entry. | FR-15 / US-01 | Medium | Positive signals in Lab 03 interviews (R002, R013), untested in practice | Feedback question on verification; observe reactions to the "verified" badge in T4 |
| A-06 | Technical feasibility | A localStorage/JSON prototype can demonstrate the full workflow smoothly enough for testing and the final demo. | FR-04 / architecture | Medium | Lecturer's Lab 07 practice demo uses the same approach; ours not yet stress-tested | Build and run the demo with 5 testers; log any technical failures in results notes |
| A-07 | Data handling | The required fields (title, category, price, condition, pickup area) are enough for buyers to decide, without demanding too much from sellers. | FR-03, FR-10 / US-02, US-05 | Low–Medium | Field set derived from what sellers naturally write in group posts (Lab 03 observation) | T2 form accuracy + T4: does the tester ask for missing information? |

## Categories used
User problem · Value proposition · Usability · Technical feasibility · Business logic · Data handling

## Riskiest assumptions (top 3)
1. **A-01** — if sellers won't complete a structured form under time pressure, the supply side of the marketplace dies.
2. **A-02** — if search isn't clearly better than scrolling groups, buyers have no reason to switch.
3. **A-04** — if the contact flow confuses people, our main differentiator becomes a drop-off point.

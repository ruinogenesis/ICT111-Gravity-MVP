# Lab 08 - MVP Decision — Gravity

## 1. Decision
- [ ] Continue with the current MVP direction
- [x] **Continue with minor revisions**
- [ ] Revise major workflow or feature
- [ ] Collect more evidence before implementation
- [ ] Pivot or change the solution direction

## 2. Evidence Supporting the Decision
Validation with 5 RSU student testers gave strong results on the core workflow: task success rate 93.3% (28/30), listing-form accuracy 100%, search success 100%, median time-to-post 56 s (target <=180 s), average feedback 4.30/5, average interest 4.40/5, and verification-trust 4.4/5. This confirms the core value proposition and assumptions A-01 (sellers complete a structured form) and A-02 (search beats scrolling groups). The failures were localized and diagnostic, not fundamental: contact-flow comprehension 2/5 and status comprehension 3/5. The concept is validated; specific screens need refinement. Hence "continue with minor revisions" rather than continue-as-is or major revision.

## 3. Requirements to Keep
| Requirement ID | Reason |
|---|---|
| FR-01 | Homepage purpose understood (Q1 4.2); RSU-only clicks into focus after browsing |
| FR-03, FR-10, FR-11 | Posting fast and accurate — 100% completion, 56 s median, clear confirmation |
| FR-05 | Browsing/listing worked for all testers |
| FR-07 / FR-15 (verification) | RSU-verified badge was the most praised, most trusted feature (Q7 4.4) |

## 4. Requirements to Improve
| Requirement ID | Problem Found | Improvement Needed |
|---|---|---|
| FR-02 / FR-15 | Reveal-after-agree understood by only 2/5; users split more-safety vs instant-reveal | In-flow explanation; show seller profile + response-time expectation |
| FR-08 | "Reserved" misread behaviourally (bid-on-reserved; hide-reserved) | Relabel "Reserved - not available"; hide from default view |
| FR-06 | Filter hard to find; min-price and validity timeframe missing | Surface filter; add min-price and listing validity date |
| FR-03 | Clothes/makeup miscategorised as Appliances; bulk requested | Expand category set; add bulk-sale option |
| FR-07 | No photos; no meet-up scheduling info | Add photo support and a meet-up time field |

## 5. Prototype Changes Before Next Lab
1. Redesign the contact flow: keep reveal-after-agree, but add a one-line explanation and a seller-profile + response-time expectation.
2. Fix "Reserved" wording and remove/segregate reserved items from the default listing view.
3. Make the filter prominent; add min-price filter and a listing validity date.
4. Expand categories (Electronics, Accessories, Clothing) and add item-photo support.

## 6. GitHub Issues Created
| Issue Title | Assigned Member | Requirement ID |
|---|---|---|
| Redesign contact flow with in-line explanation + seller profile | Thiri Shoon Lae Oo | FR-02, FR-15 |
| Clarify Reserved status wording and default-view logic | Eimyat Yadanar Mon | FR-08 |
| Improve filter visibility; add min-price and validity date | Eimyat Yadanar Mon | FR-06 |
| Expand category set and add item photo support | Hein Htet Aung | FR-03, FR-07 |

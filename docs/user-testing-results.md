# User Testing Results — Gravity (Lab 13)

## 1. Testing Summary
- Date: 29 July 2026
- Number of testers: 5 (UT-01…UT-05; UT-05 is a returning Lab 08 tester)
- Prototype link: https://ruinogenesis.github.io/ICT111-Gravity-MVP/prototype/index.html (v0.3)
- Testing location/platform: on campus — laptop for T01–T07, real phone for T08
- Raw data: /data/user-testing-results.csv (40 task runs)

## 2. Task Completion Summary
| Task ID | Task | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| T01 | Explain purpose + RSU-only | 5/5 | None — all testers explained the marketplace and student-only scope | "very easy to understand" (UT-05) |
| T02 | Post a listing | 3/5 (+2 partial) | UT-04 confused by the duplicate-warning pop-up flow ("should be like Lazada"); UT-01 partial on a field | Both still finished with light help; validation messages worked |
| T03 | Find textbook < 300 THB | 5/5 | None — filter praised; UT-03 felt filter alone suffices ("search box kinda useless") | Avg 20.8 s — well under the 90 s criterion |
| T04 | Trust judgment on detail view | 4/5 | UT-01 found the detail view a "complex system" and could not articulate trust (ease 2) — only failure of the session | Other 4 identified the verified badge unprompted |
| T05 | Explain statuses incl. Reserved | **5/5** | UT-02 hesitated briefly (96 s) but answered correctly | **Lab 08 baseline: misread behaviorally → fixed** |
| T06 | Explain contact flow | **4/5** (+1 partial) | UT-01 partially correct | **Lab 08 baseline: 2/5 → target ≥4/5 met** |
| T07 | Accept request + mark Sold | 5/5 | UT-05 slower (89 s) — called the UI "old school" but completed unaided | New v0.3 screen usable first-time |
| T08 | Mobile browse/detail/dashboard | **5/5 pass** | None — no horizontal scrolling, dashboard readable | **FR-14 real-device evidence: PASS** |

**Task success rate: 36/40 fully completed = 90.0% strict; 93.75% counting partials as half (Lab 08 baseline: 93.3% on a 6-task set — this session used a stricter 8-task set including two brand-new v0.3 features).** Average ease **4.62/5** (Lab 08 feedback baseline 4.30). Average task time 36.8 s. Help needed on 2 of 40 runs. Interest was not re-scored this round; ease is the comparable measure.

## 3. Common Usability Issues
| Issue ID | Issue Description | Severity | Related Requirement | Proposed Fix |
| --- | --- | --- | --- | --- |
| UI-01 | Detail view reads as information-dense; one tester couldn't extract the trust signal (T04 failure) | Important | FR-07, FR-15 | Add a one-line trust summary next to the badge ("Verified in person by the Gravity team — ID never stored") and group secondary fields → IMP-06 |
| UI-02 | Duplicate-listing warning's press-again flow confused a tester during posting (T02) | Important | FR-03, FR-10 | Replace press-again pattern with an explicit confirm dialog ("Post anyway / Cancel") → IMP-07 |
| UI-03 | Visual style perceived as dated/boring by two testers ("old school", "color boring") | Useful | FR-13 | Light polish pass: spacing, button states, accent color — no layout changes before Lab 14 → IMP-08 |
| UI-04 | My Listings doesn't visually prioritize pending requests (T07 slow path for UT-05) | Useful | FR-02, FR-08 | Badge/count on pending requests; move requests table above items → IMP-09 |
| UI-05 | Keyword search adds little over filters at current catalog size | Future | FR-06 | Keep both (FR-06 requires search); revisit at larger scale | 

## 4. User Feedback Summary
Liked: the core idea ("love the idea"), speed ("fast interactive"), filter usability, clear status texts, mobile experience. Disliked: visual style (2 testers), the duplicate-warning pop-up, detail-view density (1 tester). Misunderstood: nothing systemic — the two Lab 08 confusion points are resolved (Reserved 5/5, contact flow 4/5 vs 2/5). Suggested: Lazada-like posting flow, fresher colors.

## 5. Evidence-Based Decision
**Ready for final improvement** (minor revision). All three testing objectives were met: (1) the Lab 08 fixes verified — contact-flow comprehension rose from 2/5 to 4/5 and Reserved from misread to 5/5; (2) the new v0.3 screens were usable first-time (T07 5/5 unaided); (3) mobile passed on a real device, closing FR-14 — the last Partially Completed requirement. The four issues found are wording and polish, not flow failures; they are logged as IMP-06–IMP-09 in /docs/final-improvement-list.md with owners and deadlines before the Lab 14 release. No requirement changes needed.

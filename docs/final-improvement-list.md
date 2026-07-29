# Final Improvement List Before Lab 14 — Gravity

> IMP-01–05: known items from Labs 11–12. IMP-06–09: from the 29 July user-testing session (see /docs/user-testing-results.md issues UI-01–UI-04).

| Improvement ID | Problem / Improvement Needed | Priority | Related Requirement | Owner | Deadline | Evidence Source | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IMP-01 | Acquisition metrics CSV has no data — log real numbers from the class-chat/LINE soft launch before the final report | Important | Lab 12 AM-01–06 | Hein | 30 July | /data/acquisition-metrics.csv empty | Pending |
| IMP-02 | FR-14 needs real-device evidence — run T08 on an actual phone and record pass/fail + screenshot | Critical | FR-14, NFR-01 | Thiri | 29 July (testing session) | feature-implementation-status.md (Partially Completed) | **Done — T08 passed 5/5 on real device (user-testing-results.md); update feature status to Completed** |
| IMP-03 | Landing page + README link check after any final commit (Pages rebuild) — all CTAs, demo links, screenshot references | Critical | FR-16 | Eimyat | 30 July | Lab 12 Pages 404 incident | Pending |
| IMP-04 | Screenshots folder still missing my-listings.png, dashboard.png, landing-page.png, call-to-action.png (+ Lab 13: demo-flow.png, user-testing-evidence.png) | Critical | Lab 11–13 required evidence | Thiri | 29 July | /screenshots/ inventory | Pending |
| IMP-05 | Close finished GitHub issues (#32 Pages verified; any remaining open Sprint 2 items) and post closing comments with evidence links | Important | NFR-05 repo discipline | Hein | 30 July | Issues list: 3 open | Pending |
| IMP-06 | Detail view: add one-line trust summary next to verified badge; group secondary fields (UI-01 — one T04 failure) | Important | FR-07, FR-15 | Thiri | 30 July | User test UT-01/T04 | Pending |
| IMP-07 | Duplicate-listing warning: replace press-again pattern with explicit "Post anyway / Cancel" confirm (UI-02) | Important | FR-03, FR-10 | Eimyat | 30 July | User test UT-04/T02 | Pending |
| IMP-08 | Visual polish pass: spacing, button states, accent color — no layout changes (UI-03, 2 testers) | Useful | FR-13 | Thiri | 30 July | User test UT-04/UT-05 comments | Pending |
| IMP-09 | My Listings: pending-request count badge; move requests above items (UI-04) | Useful | FR-02, FR-08 | Eimyat | 30 July | User test UT-05/T07 (89 s) | Pending |
| IMP-10 | Keyword search vs filter overlap — keep both (FR-06 requires search); revisit post-course at larger catalog size (UI-05) | Future | FR-06 | — | — | User test UT-03 comment | Deferred |

## Priority Definition
- Critical: must be fixed before final presentation.
- Important: should be fixed to improve the final prototype.
- Useful: improves quality but does not block final demo.
- Future: keep for future development beyond this course (candidates already parked: real photo upload, real authentication/backend, AI listing helper F13, natural-language search F14, ratings F16 — see mvp-feature-list.md rejected/future lists).

## Rule
Nothing on this list may change a fixed requirement FR-01–16. If a test finding ever suggests a requirement change, it goes through updated-requirements-note.md + a GitHub issue first (semester rule).

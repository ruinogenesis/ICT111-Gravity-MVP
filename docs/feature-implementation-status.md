# Feature Implementation Status — Gravity (final, Lab 14 — prototype v1.0)

Every prototype feature connects to `system-requirements.md`. Final audit column reflects the released v1.0 build after the Lab 13 user testing and the IMP fixes. Full evidence chain: /docs/requirement-traceability-matrix.md.

| Req ID | Required Functionality | Screen/Module | Lab 10 Status | Lab 11 Status | Final Status (Lab 14) | Owner | Evidence Screenshot/Commit | Notes |
|---|---|---|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | S-01 Home + public landing page | Working Draft | Completed | **Completed** | Hein | /screenshots/final-homepage.png | Lab 13 T01: 5/5 testers explained purpose + RSU-only |
| FR-02 | Primary user pathway | Browse → Detail → Request → My Listings accept → mutual email reveal | Partially Completed | Completed | **Completed** | Thiri | /screenshots/final-my-listings.png; Lab 13 T06/T07 | Contact-flow comprehension 4/5 (was 2/5 in Lab 08) |
| FR-03 | User input/submission | S-02 Sell form | Working Draft | Completed | **Completed** | Eimyat | /screenshots/final-input-form.png; Lab 13 T02 | Photo remains placeholder by documented scope |
| FR-04 | Data storage/record management | data.json seed → localStorage (3 keys) + identical embedded fallback | Working Draft | Completed | **Completed** | Eimyat | /prototype/data.json | Seeds verified byte-identical; reset self-heal |
| FR-05 | View records/list | S-03 Browse cards | Working Draft | Completed | **Completed** | Thiri | /screenshots/final-record-list.png; Lab 13 T03 | — |
| FR-06 | Search/filter/category | Keyword + 6 category chips + price range + sort | Working Draft | Completed | **Completed** | Eimyat | Lab 13 T03: 5/5, avg 20.8 s | Filter praised by testers |
| FR-07 | Detail view | S-04 Detail + verified-seller trust line (v1.0) | Working Draft | Completed | **Completed** | Thiri | /screenshots/final-detail-view.png; Lab 13 T04 | IMP-06 fix shipped after one T04 failure |
| FR-08 | Status/progress tracking | Available/Reserved/Sold/Removed; seller self-service; soldDate | Working Draft | Completed | **Completed** | Eimyat | Lab 13 T05 5/5, T07 5/5 | Reserved comprehension 5/5 (was misread in Lab 08) |
| FR-09 | Admin/manager function | S-06 Admin view (demo): verify, requests, status, remove | Working Draft | Completed | **Completed** | Eimyat | /screenshots/final-admin-view.png | Separate labelled screen; roles simulated by documented design |
| FR-10 | Validation/error prevention | Required fields, positive price, RSU email gate, duplicate confirm dialog (v1.0), delete confirm | Working Draft | Completed | **Completed** | Eimyat | Lab 13 T02/T10; IMP-07 | Press-again pattern replaced with explicit confirm |
| FR-11 | Confirmation/feedback message | All actions incl. what-happens-next contact explainer | Working Draft | Completed | **Completed** | Thiri | Lab 13 T06 | — |
| FR-12 | Dashboard/analytics view | S-05 Dashboard + PM-01–PM-08 + 2 bar charts | Working Draft | Completed | **Completed** | Eimyat | /screenshots/final-dashboard.png; Lab 13 T08 | Metrics defined in /docs/startup-metrics.md |
| FR-13 | UI consistency | Shared topbar/cards/pills across 8 screens + v1.0 polish pass | Working Draft | Completed | **Completed** | Thiri | All final screenshots | IMP-08 polish after two "dated style" comments |
| FR-14 | Mobile/responsive consideration | Mobile-first layout, ≤600px media query | Working Draft | Partially Completed | **Completed** | Thiri | Lab 13 T08: 5/5 pass on a real phone | Real-device test done 29 July — closes the last partial |
| FR-15 | Privacy/responsible data handling | Email-only reveal after mutual accept, no ID data stored, campus-zone dropdown | Working Draft | Completed | **Completed** | Hein | Lab 13 T04; Issue #47 | One approved clarification (updated-requirements-note.md) |
| FR-16 | Final prototype traceability | S-ID/FR-ID comments in code + this table + requirement-traceability-matrix.md | Working Draft | Completed | **Completed** | Hein | /docs/requirement-traceability-matrix.md | Full E→FR→US→F→S→screenshot chain |

## Non-functional requirements
| Req ID | Requirement | Final Status | Evidence |
|---|---|---|---|
| NFR-01 | Mobile usability | Completed | Lab 13 T08 real-device pass |
| NFR-02 | No public personal identifiers | Completed | Public-screen scans in Labs 08 + 13 |
| NFR-03 | Load/filter within 3 seconds | Completed | Instant filter response on demo dataset |
| NFR-04 | Verified RSU students only | Completed | Register gate rejects non-@rsu.ac.th; Lab 13 T01 5/5 |
| NFR-05 | GitHub documentation discipline | Completed | 52 issues, full commit history, weekly logbook Labs 01–14 |

## Sprint 2 review — five issues identified in Lab 10 and addressed (Lab 11 Task 1)
1. Seller could not manage own listings outside the admin view (US-07 gap) → My Listings screen added.
2. Contact accept/decline lived only in admin, hiding the mutual-agreement flow (US-06 gap) → moved to seller's My Listings.
3. Buyers could not see the state of their sent requests (Lab 08 confusion root cause) → "My sent requests" table added.
4. Data source was embedded only — no inspectable data file (FR-04 weakness) → data.json added with documented fallback.
5. Dashboard had counts but no product metrics or charts (FR-12 weakness) → PM-01–PM-08 + two bar charts added.

## Lab 13 user-test fixes shipped in v1.0
- IMP-06 (FR-07): one-line verified-seller trust summary on the detail view — after the session's only task failure.
- IMP-07 (FR-03/FR-10): duplicate-listing check now uses an explicit "Post anyway / Cancel" dialog.
- IMP-08 (FR-13): visual polish — radii, hover states, card shadows.
- IMP-09 (FR-02/FR-08): pending-request count badge; requests section moved above items in My Listings.
All four regression-tested (contact flow, posting, dashboard, XSS safety) before release.

## Summary
- **Completed: FR-01–FR-16 and NFR-01–NFR-05 (all requirements).**
- Partially Completed: none.
- Pending: none.
- Not Applicable: none.
- Justified changes: one FR-15 implementation clarification (contact reveal = RSU email only), documented in /docs/updated-requirements-note.md and GitHub Issue #47, approved by all three members.
- Known scope limitations (documented, not defects): no real authentication, no server, photo upload at placeholder fidelity — see /docs/final-prototype-report.md §12.

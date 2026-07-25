# Feature Implementation Status — Gravity (updated Lab 11)

| Req ID | Required Functionality | Screen/Module | Lab 10 Status | Lab 11 Status | Owner | Evidence Screenshot/Commit | Notes/Next Action |
|---|---|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | S-01 Home | Working Draft | Completed | Hein | /screenshots/homepage.png | Final copy check in Lab 13 |
| FR-02 | Primary user pathway | Browse → Detail → Request → My listings (accept) → email reveal | Partially Completed | Completed | Thiri | /screenshots/my-listings.png; T-09 | Both sides of the pathway now visible outside admin (v0.3 My Listings) |
| FR-03 | User input/submission | S-02 Sell form | Working Draft | Completed | Eimyat | /screenshots/input-form.png; T-02 | Photo remains placeholder by scope |
| FR-04 | Data storage/record management | data.json seed → localStorage (3 keys) + fallback | Working Draft | Completed | Eimyat | /prototype/data.json; T-12 | Seeds kept identical in both places |
| FR-05 | View records/list | S-03 Browse cards | Working Draft | Completed | Thiri | /screenshots/record-list.png; T-03 | — |
| FR-06 | Search/filter/category | Keyword + 6 category chips + price range + sort (new) | Working Draft | Completed | Eimyat | T-04 | Sort added in v0.3 |
| FR-07 | Detail view | S-04 Detail | Working Draft | Completed | Thiri | /screenshots/detail-view.png; T-05 | — |
| FR-08 | Status/progress tracking | Status lifecycle + seller self-service (new) + soldDate | Working Draft | Completed | Eimyat | T-06 | US-07 now works as written (seller updates own status) |
| FR-09 | Admin/manager function | S-06 Admin: verify, requests, status, remove | Working Draft | Completed | Eimyat | /screenshots/admin-view.png; T-11 | Roles simulated by design (documented) |
| FR-10 | Validation/error prevention | Required fields, price, RSU email, duplicate warning, delete confirm | Working Draft | Completed | Eimyat | T-02, T-10 | — |
| FR-11 | Confirmation/feedback message | All actions incl. new My listings actions | Working Draft | Completed | Thiri | T-06, T-09 | — |
| FR-12 | Dashboard/analytics view | S-05 Dashboard + PM-01–PM-08 + 2 bar charts (new) | Working Draft | Completed | Eimyat | /screenshots/dashboard.png; T-07 | Metrics defined in /docs/startup-metrics.md |
| FR-13 | UI consistency | Shared topbar/cards/pills across 8 screens | Working Draft | Completed | Thiri | All screenshots | — |
| FR-14 | Mobile/responsive consideration | ≤600px media query, single-column | Working Draft | Partially Completed | Thiri | Responsive-mode check | Real-device test scheduled with Lab 13 user testing |
| FR-15 | Privacy/responsible data handling | Email-only reveal after accept (both sides), no ID data, zones dropdown | Working Draft | Completed | Hein | T-09, T-13 | Implements Lab 09 decisions end-to-end |
| FR-16 | Final prototype traceability | S-ID/FR-ID comments in code + this table + metrics IDs | Working Draft | Completed | Hein | This file | Keep updated through Lab 14 |

## Sprint 2 review — five issues identified in Lab 10 and addressed (Task 1 requirement)
1. Seller could not manage own listings outside the admin view (US-07 gap) → My Listings screen added.
2. Contact accept/decline lived only in admin, hiding the mutual-agreement flow (US-06 gap) → moved to seller's My Listings.
3. Buyers could not see the state of their sent requests (Lab 08 confusion root cause) → "My sent requests" table added.
4. Data source was embedded only — no inspectable data file (FR-04 weakness) → data.json added with documented fallback.
5. Dashboard had counts but no product metrics or charts (FR-12 weakness) → PM-01–PM-08 + two bar charts added.

## Summary
- Completed: FR-01–FR-13, FR-15, FR-16
- Partially Completed: FR-14 (real-device test pending — justification: requires physical devices scheduled for the Lab 13 testing session)
- Pending: none
- Not Applicable: none
- Every member owns features (see Owner column); remaining work before final: Lab 12 landing page, Lab 13 re-validation (PM-08), Lab 14 polish + final release

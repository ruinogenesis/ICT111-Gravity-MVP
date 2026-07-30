# Requirement Traceability Matrix — Gravity (Final, Lab 14)

Chain: Lab 03 evidence (E) → requirement (FR/NFR) → user story (US) → MVP feature (F) → screen (S) → final screenshot → status. Machine-readable: /data/final-requirement-traceability.csv.

| Evidence ID | Problem Pattern | Requirement ID | User Story ID | MVP Feature | Prototype Screen/Module | Final Screenshot | Status |
|---|---|---|---|---|---|---|---|
| E01 | Scattered, unsearchable channels (11/15) | FR-01 | US-03 | F01 Landing page | S-01 Home (+ Lab 12 landing page) | final-homepage.png | Completed |
| E01, E02 | One clear pathway needed | FR-02 | US-06 | F08 Contact request | Buyer: browse→detail→request; Seller: My Listings accept→email reveal | final-my-listings.png | Completed |
| E01, E02, E03 | Time-pressured posting | FR-03 | US-02 | F03 Create Listing form | S-02 Sell | final-input-form.png | Completed |
| Course req. | Storage allowed as simulation | FR-04 | US-02 | F03/F04 | data.json seed + localStorage (3 keys), reset self-heal | final-record-list.png | Completed |
| E01, E04 | Posts buried in group history | FR-05 | US-03 | F04 Listings page | S-03 Browse cards | final-record-list.png | Completed |
| E01 (R004, R009, R015) | Cannot find items | FR-06 | US-04 | F05 Search + filter | Keyword, 6 categories, price range, sort | final-record-list.png | Completed |
| E01, E05 | Need info before contact | FR-07 | US-05 | F06 Detail page | S-04 Detail (+ v1.0 trust line) | final-detail-view.png | Completed |
| E04 (R003, R012, R015) | "Still available?" chaos | FR-08 | US-07 | F07 Status tracking | Available/Reserved/Sold/Removed; seller self-service; soldDate | final-my-listings.png | Completed |
| E05, Lab 03 decision | Marketplace must stay trusted | FR-09 | US-08 | F09 Admin panel | S-06 Admin view (demo) — verify, moderate, fix status | final-admin-view.png | Completed |
| Course req. | Error prevention | FR-10 | US-09 | F10 Validation | Required fields, RSU email gate, positive price, duplicate confirm (v1.0), delete confirm | final-input-form.png | Completed |
| Course req. | User feedback | FR-11 | US-09 | F10 Confirmation messages | All actions incl. contact explainer | final-input-form.png | Completed |
| Course req. | Activity summary | FR-12 | US-10 | F11 Dashboard | S-05 Dashboard + PM-01–08 + bar charts | final-dashboard.png | Completed |
| Course req. | UI consistency | FR-13 | — | F12 | Shared topbar/cards/pills across 8 screens | all screenshots | Completed |
| E02 (R002, R014) | Mobile use while moving | FR-14 | US-11 | F12 Responsive layout | ≤600px media query; real-device pass (Lab 13 T08 5/5) | final-homepage.png (mobile) | Completed |
| E05 (R013) | Fear of exposing contacts | FR-15 | US-01, US-06 | F02/F08 | No public contact data; email-only reveal after mutual accept; no ID storage | final-detail-view.png | Completed (clarification: Issue #47, approved) |
| Course req. | Traceability | FR-16 | — | — | This matrix; FR/S-ID comments in index.html; feature-implementation-status.md | — | Completed |
| E05 (R002, R010, R013) | Trust gate | NFR-04 | US-01 | F02 Verification | S-07 Register: RSU-email regex + rejection; in-person check simulated + labelled | final-input-form.png (register) | Completed |
| E05 (R013) | No public identifiers | NFR-02 | US-05 | F02 | Public-screen scan before merge; verified in Labs 08 + 13 | final-detail-view.png | Completed |

## Justified Changes
None of FR-01–16 changed. One implementation clarification to FR-15 (revealed channel = RSU email only) — documented in /docs/updated-requirements-note.md, GitHub Issue #47, approved by all three members, logged in the Lab 09 weekly-logbook entry.

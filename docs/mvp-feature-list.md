# Lab 04 - MVP Feature List — Gravity

## MVP Decision Rule
The MVP includes the smallest set of features that proves the core problem-solution fit by the end of the semester: **a verified RSU student can post an item once, and another student can find it, check its status, and make safe contact.** Scoring: MVP Score = User Value + Evidence Strength − Technical Complexity.

## MoSCoW Prioritization

| Feature ID | Feature Name | Problem Solved | Related User Story | Priority | Technical Complexity (1-5) | User Value (1-5) | Evidence Strength (1-5) | MVP Score | Include in Final Prototype? |
|---|---|---|---|---|---:|---:|---:|---:|---|
| F01 | Landing page (problem + Browse / Sell actions) | Users need one clear entry point (FR-01) | US-03 | Must | 1 | 4 | 4 | 7 | Yes |
| F02 | RSU email registration + verified badge | Trust: student-only marketplace (E05) | US-01 | Must | 3 | 4 | 3 | 4 | Yes |
| F03 | Create Listing form (category, price, condition, photo, pickup area) | No structured way to post; time pressure (E01, E02, E03) | US-02, US-09 | Must | 2 | 5 | 5 | 8 | Yes |
| F04 | Listings page (browse all Available items) | Scattered channels; posts buried (E01, E04) | US-03 | Must | 2 | 5 | 5 | 8 | Yes |
| F05 | Search + filter (keyword, category, price) | Cannot find items across groups (E01) | US-04 | Must | 3 | 5 | 5 | 7 | Yes |
| F06 | Listing detail page | Buyers need full info + verified badge before contact (E01, E05) | US-05 | Must | 2 | 4 | 4 | 6 | Yes |
| F07 | Listing status (Available / Reserved / Sold) | Posts scroll away, no way to know availability (E04) | US-07 | Must | 2 | 4 | 4 | 6 | Yes |
| F08 | Contact request (reveal contact after both agree) | Unsafe to share personal accounts with strangers (E05) | US-06 | Must | 3 | 4 | 3 | 4 | Yes |
| F09 | Admin panel (verify accounts, remove listings, fix status) | Marketplace must stay clean and trusted (FR-09, E05) | US-08 | Must | 3 | 4 | 3 | 4 | Yes |
| F10 | Validation + confirmation messages | Prevent broken/incomplete listings (FR-10, FR-11) | US-09 | Must | 1 | 3 | 3 | 5 | Yes |
| F11 | Dashboard summary (totals, per category, statuses) | Required summary view; shows activity (FR-12) | US-10 | Should | 2 | 3 | 2 | 3 | Yes |
| F12 | Mobile-responsive layout | Users post/search on phones while moving (E02, FR-14) | US-11 | Must | 2 | 4 | 4 | 6 | Yes |
| F13 | AI listing helper (draft title/description) | Speeds up posting under time pressure (E02) | US-12 | Could | 4 | 3 | 2 | 1 | Optional |
| F14 | Natural-language AI search | Easier discovery | US-F2 | Won't (for MVP) | 5 | 3 | 1 | -1 | No |
| F15 | Payments / escrow | Transaction convenience | US-F1 | Won't | 5 | 3 | 1 | -1 | No |
| F16 | Ratings and reviews | Long-term trust | US-F3 | Won't (for MVP) | 4 | 3 | 1 | 0 | No |

## Must-Have Features
- F01 Landing page, F02 RSU email verification, F03 Create Listing form, F04 Listings page, F05 Search + filter, F06 Detail page, F07 Status tracking, F08 Contact request, F09 Admin panel, F10 Validation/feedback, F12 Mobile-responsive layout.

## Should-Have Features
- F11 Dashboard summary — required by FR-12, but the demo can succeed with a simple version, so it is scheduled after the core flow works.

## Could-Have / Future Features
- F13 AI listing helper — differentiator from Lab 02 vision; built only if the core flow is finished early, otherwise shown as a mockup.

## Not in MVP
- **F14 Natural-language AI search** — high complexity (5), weakest evidence (1); keyword search + category filters already solve the discovery pain (E01). Postponed until the MVP proves demand.
- **F15 Payments/escrow** — deliberately excluded by design decision from Lab 02: Gravity is a connector only. Payments require security and legal work impossible within one semester and add risk without validating the core hypothesis.
- **F16 Ratings and reviews** — meaningless without a volume of completed transactions; the verified-student badge (F02) covers the trust need (E05) for the MVP.

These exclusions keep the prototype feasible for a 3-person team within the remaining labs while still addressing all fixed requirements FR-01–FR-16.

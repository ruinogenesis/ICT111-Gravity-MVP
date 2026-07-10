# Feature-Value Mapping — Gravity

| Feature ID | MVP Feature | Requirement ID | User Story ID | User Value | Business / Operational Value | Prototype Screen or Module | Priority |
|---|---|---|---|---|---|---|---|
| F01 | Landing page with Browse / Sell actions | FR-01, FR-02 | US-03 | Instantly understand what Gravity is and start the right path | Clear entry point drives adoption from QR posters and shared links | index.html (Home section) | Must |
| F02 | RSU email registration + verified badge | FR-10, FR-15 | US-01 | Trust that every counterpart is a real RSU student | The core differentiator vs Facebook groups; creates the trusted-community asset | Register screen | Must |
| F03 | Create Listing form with validation | FR-03, FR-10, FR-11 | US-02, US-09 | Post an item in under 2 minutes while packing | Structured, complete data enables search, status, and dashboard | Sell an item screen | Must |
| F04 | Listings page (browse all items) | FR-05 | US-03 | One place to see everything — no more checking 5 groups | Aggregated supply is the marketplace's main network-effect asset | Browse screen | Must |
| F05 | Search + category/price filter | FR-06 | US-04 | Find the exact item in seconds | Higher match rate → more completed deals → more word of mouth | Browse screen (search + chips) | Must |
| F06 | Listing detail view | FR-07, FR-15 | US-05 | Full info + verified badge before deciding to contact | Reduces dead-end conversations; showcases privacy-by-design | Detail screen | Must |
| F07 | Status tracking (Available/Reserved/Sold) | FR-08 | US-07 | No wasted messages about sold items | Live statuses keep the marketplace credible (buried/stale posts were pain E04) | Badges on Browse/Detail/Admin | Must |
| F08 | Contact request, reveal-after-agree | FR-02, FR-11, FR-15 | US-06 | Make contact without exposing personal accounts to strangers | Safety mechanism that scattered channels can't offer (E05) | Detail screen (Request contact) | Must |
| F09 | Admin panel (verify, moderate, correct status) | FR-09, FR-08 | US-08 | Clean, trustworthy listings | Quality control keeps the trusted-community value alive | Admin screen | Must |
| F10 | Validation + confirmation messages | FR-10, FR-11 | US-09 | Clear feedback, no silent failures | Prevents broken records entering the dataset | All form screens | Must |
| F11 | Dashboard summary | FR-12 | US-10 | See marketplace activity at a glance | Demonstrates operational value (items recovered, activity level) to stakeholders | Dashboard screen | Should |
| F12 | Mobile-responsive layout | FR-14 | US-11 | Post and browse from a phone while moving | The whole channel strategy is mobile links + QR codes | All screens (CSS) | Must |

## Reflection

**Which feature creates the strongest user value?**
F04 + F05 together (one searchable listings page). They directly eliminate the top pain — scattered, unsearchable channels reported by 11 of 15 respondents (E01) — and every other feature depends on listings being findable.

**Which feature creates the strongest business or operational value?**
F02 (RSU verification). It is the one thing Facebook and LINE groups structurally cannot copy, it creates the trusted-community asset that all partnerships and adoption depend on, and it justifies the reveal-after-agree contact flow (F08).

**Which required feature is still weak or unclear?**
F08's mutual-agreement mechanism: in a frontend-only prototype there is no real-time notification between two browsers, so the accept step will be simulated (seller-side view demonstrates accepting; the state change is stored locally). The simulation approach is documented in /docs/technical-architecture.md section 5, and full messaging is a post-course item.

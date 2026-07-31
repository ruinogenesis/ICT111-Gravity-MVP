# System Requirements — Gravity

> The functional requirements FR-01 to FR-16 below are the fixed minimum prototype functionalities provided by the lecturer in Lab 04. They cannot be changed. The "How Gravity Addresses It" and "Evidence" columns show how our project maps each fixed requirement to our own case and Lab 03 evidence (`/data/raw-responses.xlsx`).

## Functional Requirements (Fixed by Lecturer)

| Req ID | Minimum Prototype Functionality | How Gravity Addresses It | Evidence |
|---|---|---|---|
| FR-01 | Clear problem-specific homepage or landing screen | Landing page states: Gravity — RSU student secondhand marketplace; target user (RSU students moving in/out); problem (scattered, unsearchable buy/sell channels); main actions: **Browse items** / **Sell an item**. | E01 |
| FR-02 | Primary user pathway | Seller path: sign in with RSU email → create listing → receive contact requests → mark item Reserved/Sold. Buyer path: browse → search/filter → view detail → request contact. | E01, E02 |
| FR-03 | User input or data submission feature | "Create Listing" form: title, category, price, condition, description, photo reference, pickup area, and listing status. | E01, E03 |
| FR-04 | Data storage or record management | Listings, users, and contact requests stored in a database/spreadsheet backend (e.g., Google Sheets/Airtable/MySQL depending on prototype platform); demo dataset included. | Course requirement |
| FR-05 | View records / information list | Public listings page showing all Available items as cards/rows with photo, title, category, price, and status. | E01, E04 |
| FR-06 | Search, filter, or category function | Search by keyword; filter by category (Furniture, Appliances, Electronics, Clothing, Sneakers, Other), price range, and status. | E01 — R004, R009, R015 |
| FR-07 | Detail view for each record | Listing detail page: full description, photos, condition, price, pickup area, seller's verified-student badge, and status. | E01, E05 |
| FR-08 | Status or progress tracking | Every listing has a status: **Available → Reserved → Sold / Removed**. Buyers see live status; sellers update it. | E04 — R003, R012, R015 |
| FR-09 | Admin or manager function | Admin view: verify new seller accounts (RSU email + one-time in-person student ID check), remove invalid/spam listings, and correct statuses. | E05, Lab 03 decision |
| FR-10 | Basic validation and error prevention | Required fields on the listing form, RSU email format check (`@rsu.ac.th`), positive price validation, duplicate-listing warning, and confirmation before deleting. | Course requirement |
| FR-11 | Confirmation or feedback message | "Listing posted successfully", "Contact request sent", "Status updated", and "Please complete required fields" messages. | Course requirement |
| FR-12 | Dashboard, summary, or simple analytics view | Summary screen: total listings, Available vs Sold counts, listings per category, and contact requests this week. | Course requirement |
| FR-13 | Basic user interface consistency | One shared layout: same header/nav, card style, buttons, and color scheme across all screens. | Course requirement |
| FR-14 | Mobile-friendly or responsive design consideration | Mobile-first layout — sellers post from their phone while packing; buyers browse on mobile. | E02 — R002, R014 |
| FR-15 | Basic privacy and responsible data handling | No personal contact info shown publicly; contact details revealed only after both sides agree; no student ID images stored (in-person check only); minimal data fields. | E05 — R013 |
| FR-16 | Final prototype traceability | Every screen maps back to these requirements, the user stories in `/docs/user-stories.md`, the MVP features in `/docs/mvp-feature-list.md`, and Lab 03 evidence IDs. | Course requirement |

## Non-Functional Requirements (Group-Defined, Evidence-Based)

| Req ID | Type | Requirement Statement | Evidence | Priority | Verification Method |
|---|---|---|---|---|---|
| NFR-01 | Usability | The interface shall be usable on a mobile screen, because sellers list items while packing and buyers search on the go. | E02 — R002, R007, R014 | Must | Demonstrate responsive layout or mobile frame in the final demo. |
| NFR-02 | Privacy | The system shall not expose any user's personal contact details (Facebook, LINE, phone) on public pages; contact is revealed only after mutual agreement. | E05 — R013 | Must | Review a sample public listing and confirm no personal identifiers are visible. |
| NFR-03 | Performance | The prototype shall load and filter the demo dataset within three seconds for classroom demonstration. | E01, E04 | Should | Time the search/filter demo with the sample dataset. |
| NFR-04 | Trust | Only verified RSU students (university email + one-time in-person ID check, no ID images stored) shall be able to post listings or request contact. | E05 — R002, R010, R013 | Must | Attempt to register with a non-RSU email and confirm rejection. |
| NFR-05 | Documentation | The project shall be documented in the group GitHub repository with README, issues, commits, and weekly logbook updates. | Course requirement | Must | Instructor reviews GitHub history and documentation. |

## Out of Scope (Confirmed)
No payment processing, no delivery/logistics, no inventory holding, and no storage of ID images — Gravity connects verified students only, keeping the build feasible within one semester and avoiding advanced cybersecurity requirements (decision from Lab 02, reconfirmed with Lab 03 evidence).

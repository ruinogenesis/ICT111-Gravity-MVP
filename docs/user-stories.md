# Lab 04 - User Stories and Acceptance Criteria — Gravity

## User Story Format
As a [user role], I want to [goal/action], so that [benefit/value].

Roles: **Seller** (RSU student moving out — primary persona Su Su), **Buyer** (RSU student moving in / continuing), **Admin** (Gravity team moderator).

## User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Seller | As a seller, I want to register and verify with my RSU email, so that only real RSU students are on the platform and buyers can trust me. | FR-09, FR-10, FR-15, NFR-04 | Must | Given I register with a non-`@rsu.ac.th` email, when I submit, then registration is rejected with a clear message. Given I register with a valid RSU email, when the admin confirms my one-time in-person ID check, then my account shows a verified badge. | Registration demo + rejected email screenshot |
| US-02 | Seller | As a seller under time pressure, I want to create a listing with category, price, condition, photo, and pickup area, so that buyers can find my item before I leave. | FR-03, FR-04, FR-14 | Must | Given I am verified and on the Create Listing form, when I fill all required fields and submit, then the listing is saved and appears on the listings page with status "Available". | Form demo + stored record |
| US-03 | Buyer | As a buyer, I want to browse all available items in one place, so that I stop checking multiple Facebook and LINE groups. | FR-05, FR-13 | Must | Given listings exist, when I open the listings page, then I see all Available items as consistent cards with photo, title, category, price, and status. | Listings page screenshot |
| US-04 | Buyer | As a buyer, I want to search by keyword and filter by category and price, so that I can quickly find the exact item I need. | FR-06 | Must | Given multiple listings exist, when I filter by "Textbooks" and a price range, then only matching Available listings are shown; when no items match, then an empty-state message is shown. | Search/filter demo |
| US-05 | Buyer | As a buyer, I want to open a listing's detail page, so that I can check the condition, price, pickup area, and whether the seller is verified before contacting them. | FR-07, FR-15 | Must | Given a listing exists, when I open it, then I see full details and the seller's verified badge, but **no** personal contact information. | Detail page screenshot |
| US-06 | Buyer | As a buyer, I want to send a contact request through the platform, so that I do not have to share my personal accounts with a stranger up front. | FR-02, FR-15, NFR-02 | Must | Given I am a verified buyer on a listing page, when I press "Request contact" and the seller accepts, then contact details are revealed to both sides; until then, no personal details are visible. | Contact request demo |
| US-07 | Seller | As a seller, I want to update my listing status to Reserved or Sold, so that buyers stop contacting me about items that are gone. | FR-08 | Must | Given my listing is Available, when I set it to Sold, then the public listing immediately shows "Sold" and it is excluded from the default Available filter. | Status update demo |
| US-08 | Admin | As an admin, I want to verify new accounts and remove invalid or spam listings, so that the marketplace stays trustworthy and clean. | FR-09 | Must | Given a new account or a reported listing, when I approve the account or remove the listing in the admin view, then the change is reflected on the public site. | Admin view demo |
| US-09 | Seller | As a seller, I want clear validation and confirmation messages, so that I know my listing was posted correctly and completely. | FR-10, FR-11 | Must | Given I submit the form with a missing required field, when I press submit, then I see "Please complete required fields" and nothing is saved. Given a valid submission, then I see "Listing posted successfully". | Validation + confirmation screenshots |
| US-10 | Admin | As an admin, I want a dashboard summary of listings, statuses, and categories, so that the team can show marketplace activity in the final demo. | FR-12 | Should | Given listings exist, when I open the dashboard, then I see total listings, Available vs Sold counts, and listings per category. | Dashboard screenshot |
| US-11 | Buyer | As a buyer on my phone, I want the site to work well on a mobile screen, so that I can search while walking around campus or my dorm. | FR-14, NFR-01 | Must | Given I open Gravity on a mobile-width screen, when I browse, search, and open a listing, then all content is readable and usable without horizontal scrolling. | Mobile view screenshot |
| US-12 | Seller | As a seller, I want an AI helper to draft my listing title and description from a few keywords, so that posting is even faster when I am rushing to move out. | FR-03 (enhancement) | Could | Given I enter item keywords, when I press "AI draft", then a suggested title and description appear that I can edit before posting. | Optional demo if time allows |

## Acceptance Criteria Checklist
Each criterion above is: testable, observable in the final prototype, connected to a fixed requirement (FR-01–16) or group NFR, connected to Lab 03 evidence via the persona and requirement mappings, and specific (Given–When–Then).

## Rejected / Future User Stories
| Story ID | Story (short) | Reason for Postponing | Future Condition |
|---|---|---|---|
| US-F1 | In-app payment / escrow | Out of scope by design — requires payment security far beyond one semester; Gravity is a connector only. | Only if the platform ever becomes a real product with legal/payment support. |
| US-F2 | Natural-language AI search ("cheap desk near dorm 5") | High complexity, low evidence strength; keyword + filter already solves E01. | After MVP works and dataset is large enough to make it useful. |
| US-F3 | Ratings and reviews of buyers/sellers | Needs a volume of completed transactions to be meaningful; verification badge covers trust for the MVP. | After the platform has repeated real transactions. |
| US-F4 | Push/LINE notifications for new matching items | Nice-to-have; not required by any FR; adds integration complexity. | After core flow is stable; can be simulated in demo if needed. |

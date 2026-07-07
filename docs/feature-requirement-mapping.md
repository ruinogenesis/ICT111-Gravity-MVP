# Feature-Requirement Mapping — Gravity

Every planned screen connects to the fixed requirements in `/docs/system-requirements.md`, the user stories in `/docs/user-stories.md`, and the MVP features in `/docs/mvp-feature-list.md`. This mapping is the traceability chain the final prototype will be graded against (FR-16).

| Feature ID | Feature / Screen | Requirement ID | User Story ID | Purpose | Wireframe File | Final Prototype Module |
|---|---|---|---|---|---|---|
| F01 | Homepage / landing screen | FR-01, FR-02 | US-03 | Show project title, target user, problem, and the two main actions (Browse items / Sell an item) | /wireframes/homepage.png | /prototype/index.html |
| F03 | Create Listing form | FR-03, FR-10, FR-11 | US-02, US-09 | Let verified sellers submit a listing with category, price, condition, photo, and pickup area, with validation and confirmation | /wireframes/input-form.png | /prototype/create-listing.html |
| F04, F05 | Listings page (browse + search/filter) | FR-05, FR-06, FR-08 | US-03, US-04 | Let buyers browse all items in one place and filter by keyword, category, and price; status badges visible on every card | /wireframes/record-list.png | /prototype/listings.html |
| F06, F07 | Listing detail view | FR-07, FR-08, FR-15 | US-05, US-06 | Show full item details, seller's verified badge, current status, and the Request contact action — with no personal contact info shown | /wireframes/detail-view.png | /prototype/listing-detail.html |
| F11 | Dashboard summary | FR-12 | US-10 | Show total listings, status counts, and listings per category | /wireframes/dashboard.png | /prototype/dashboard.html |
| F09 | Admin panel | FR-09, FR-08 | US-08 | Let the admin verify student accounts, remove invalid listings, and correct statuses | /wireframes/admin-view.png | /prototype/admin.html |
| F02 | Register / verify screen (extra, beyond the six required) | FR-10, FR-15 | US-01 | RSU-email-only registration with error and success states; note that ID check is in person and no ID images are stored | /wireframes/register.png (optional) | /prototype/register.html |
| F08 | Contact request states (shown inside detail view) | FR-02, FR-11, FR-15 | US-06 | "Request sent" feedback and reveal-contact-after-both-agree logic | part of detail-view.png | /prototype/listing-detail.html |
| F12 | Mobile-responsive layout (cross-cutting) | FR-14, NFR-01 | US-11 | All screens usable on a mobile-width viewport | all wireframes | all modules |

## Notes
- FR-04 (data storage) is demonstrated through the shared demo dataset `/data/sample-listings.csv`, which all screens draw from consistently.
- FR-13 (UI consistency) is demonstrated by the shared navigation bar, card style, buttons, and status badge colors across all wireframes.
- Screen requirement changes after Lab 05 must be documented in GitHub issues and the weekly logbook before the prototype scope changes (course continuity rule).

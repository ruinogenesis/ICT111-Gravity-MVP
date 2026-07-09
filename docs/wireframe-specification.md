# Wireframe Specification — Gravity

## Required Wireframe Screens
Each screen is exported as PNG into `/wireframes/`. The wireframes are built in HTML/CSS (`/prototype/wireframe/`) so the same file also serves as the Lab 05 clickable draft; each screen is screenshotted for its PNG.

| Wireframe File | Purpose | Minimum Elements to Show | Related Requirements |
|---|---|---|---|
| /wireframes/homepage.png | Entry point of the system | Gravity title + tagline, target user ("verified RSU students only"), problem statement, Browse items + Sell an item buttons, shared navigation | FR-01, FR-02 |
| /wireframes/input-form.png | Seller submits a listing | Photo upload area, title, category dropdown, price, condition, pickup area, description; required-field labels; validation error area; Post listing button; success confirmation | FR-03, FR-10, FR-11 |
| /wireframes/record-list.png | Browse all listings | Search bar, category chips (All / Furniture / Appliances / Textbooks / Other), listing cards with photo placeholder, title, price, and status badge; realistic demo data from /data/sample-listings.csv | FR-05, FR-06, FR-08 |
| /wireframes/detail-view.png | One selected listing | Photo area, title, price, condition, category, pickup area, description, seller name + RSU-verified badge, status badge, Request contact button, "no personal contact shown until both agree" note | FR-07, FR-08, FR-15 |
| /wireframes/dashboard.png | Summary / analytics | Total listings, Available / Reserved / Sold counts, listings per category; numbers consistent with the demo dataset | FR-12 |
| /wireframes/admin-view.png | Admin management | Pending verification list with Approve action, listings table with status dropdown + Update and Remove actions, confirmation message area | FR-09, FR-08 |

## Wireframe Quality Rules (applied)
- One shared navigation bar, card style, button style, and status color code (green = Available, amber = Reserved, gray = Sold) across every screen (FR-13).
- Every screen uses realistic sample data from /data/sample-listings.csv (8 listings) — no empty boxes.
- Mobile-friendly layout: single-column stacking below 640px (FR-14).
- No decorative-only screens: every screen maps to requirement IDs in `/docs/feature-requirement-mapping.md`.
- Extra screen beyond the required six: Register / verify (F02) — included because RSU verification is Gravity's core trust differentiator (E05).

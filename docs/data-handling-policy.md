# Data Handling Policy — Gravity

## Data Collection
Three entities only (see `/docs/data-structure.md` and `/data/data-inventory.csv`): Users (display name, RSU email, role, verified flag, join date), Listings (title, category, price, condition, pickup area, description, status, dates), and ContactRequests (references + status only). Nothing else — no phone numbers, no social handles, no ID images, no payment data.

## Data Storage
Seed dataset in JSON (converted from `/data/sample-listings.csv`); user actions persisted in browser localStorage (key `gravityDemoListings`). No server, no external database, no data transmission. All stored data during the course is fictional sample data.

## Data Access
Public screens: item data + seller display name + verified badge. The other party after mutual accept: RSU email (the only revealed channel). Admin (demo role): user records for verification and spam removal (FR-09). Nobody else — and because storage is per-browser localStorage, data never leaves the tester's own device.

## Data Minimization
Removed/excluded after the Lab 09 review: phone/LINE/Facebook contact fields (RSU email is the single reveal channel), student ID numbers and images (in-person visual check only, boolean flag stored), precise pickup locations (general campus zones only), and photos containing people or private backgrounds (item-only rule).

## Responsible Data Rule
The prototype uses fictional sample data for all demos and the public repository; real personal data never enters GitHub, screenshots, or the deployed GitHub Pages demo. Any new data field must be added to `/data/data-inventory.csv` and justified before it is built.

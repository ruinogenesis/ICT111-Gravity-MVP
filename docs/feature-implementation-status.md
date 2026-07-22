# Lab 10 - Feature Implementation Status — Gravity

## Purpose
Proves the Sprint 1 prototype (/prototype/index.html, style.css, script.js — v0.2) is connected to `system-requirements.md`. Statuses: Not Started / In Progress / Working Draft / Needs Fix.

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Next Fix Needed |
|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | S-01 Home: problem, target user, Browse/Sell actions, safer-meetup note | Working Draft | /screenshots/homepage.png; index.html §screen-home | Copy review after instructor feedback |
| FR-02 | Primary user pathway | Buyer: browse → filter → detail → request contact → (seller accepts) → emails revealed. Seller: post → receive request → status update | Working Draft | Demo walkthrough; script.js requestContact()/renderAdmin() | Show seller-side request list outside admin view (Sprint 2) |
| FR-03 | User input or data submission | S-02 Sell form: title, category, price, condition, pickup zone dropdown, photo placeholder, description | Working Draft | /screenshots/input-form.png; script.js postListing() | Real photo upload out of scope (localStorage) — placeholder approach documented |
| FR-04 | Data storage or simulated storage | JSON seed + localStorage (3 keys), self-heal + reset | Working Draft | script.js load()/persist()/resetData() | None for prototype scope |
| FR-05 | View records / information list | S-03 Browse: responsive cards with photo, title, category, price, status, seller + badge | Working Draft | /screenshots/record-list.png; script.js renderCards() | None |
| FR-06 | Search, filter, or category function | Keyword search, 6 category chips, min/max price, Sold toggle, empty state | Working Draft | /screenshots/record-list.png; script.js listingMatchesFilters() | Sprint 2: sort by date/price if time allows |
| FR-07 | Detail view for each record | S-04 Detail: full fields, photo, verified badge, no contact info | Working Draft | /screenshots/detail-view.png; script.js openDetail() | None |
| FR-08 | Status or progress tracking | Available → Reserved → Sold / Removed; Reserved explainer text (Lab 08 fix); dimmed non-available cards | Working Draft | detail-view + admin screenshots; statusClass() | Re-test Reserved comprehension in Lab 13 |
| FR-09 | Admin or manager function | S-06 Admin (demo): verify accounts (boolean only), accept/decline contact requests, change status, remove with confirmation | Working Draft | /screenshots/admin-view.png; script.js renderAdmin() | None for prototype scope |
| FR-10 | Validation and error prevention | Required fields, positive price, RSU email regex + rejection, duplicate-listing warning, delete confirmation | Working Draft | Validation messages in form/register; script.js | None — FR-10 items now complete |
| FR-11 | Confirmation or feedback message | Success/error messages on post, register, contact request, verify, status change, remove, reset | Working Draft | flash() calls throughout script.js | None |
| FR-12 | Dashboard or summary view | S-05: totals, Available/Reserved/Sold, per-category table, contact request summary | Working Draft | Dashboard screenshot; renderDashboard() | Sprint 2: startup metrics view (Lab 11) |
| FR-13 | UI consistency | One shared topbar/nav, card and button styles, status pills across all 7 screens (continues Lab 05 wireframe) | Working Draft | style.css | None |
| FR-14 | Mobile-friendly/responsive design | Mobile-first: single-column cards, stacked detail, media query ≤600px | Working Draft | Browser resize check | Real-device test in Lab 13 |
| FR-15 | Privacy and responsible data handling | No contact info on public screens; RSU-email-only reveal after mutual accept; no ID data stored (boolean flag); pickup zones dropdown; data-use notes on register | Working Draft | register/detail screens; Lab 09 docs | None — implements Lab 09 decisions |
| FR-16 | Final prototype traceability | Every screen carries S-ID ↔ FR-ID comments in index.html; this file maps all FRs; screens match screen-inventory-checklist.md | Working Draft | index.html section comments; this table | Keep updated each sprint |

## Lab 08 → Sprint 1 fixes shipped
1. Contact-flow "what happens next" explainer after request (Issue 7) — shipped.
2. Reserved status clarity: explainer text on browse + detail, dimmed cards (Issue 8) — shipped.
3. Photos: placeholder photo selection on form, shown on cards/detail (Issue 9) — shipped at demo fidelity.
4. Categories expanded to 6 + price-range filter (Issue 10) — shipped.

## Lab 09 → Sprint 1 mitigations shipped
XSS fix via textContent everywhere (Issue 13/R-04); admin separation + labelling (Issue 14/R-05); safer-meetups wording + simulated-verification labels (Issue 15/R-06); pickup-zone dropdown + item-only photo note (Issue 12/R-02); duplicate warning (Issue 17/R-09); email-only reveal (Issue 18/FR-15 clarification).

## Summary
- Features working today: FR-01, FR-03–FR-08, FR-10–FR-13, FR-15 (as Working Draft in v0.2)
- Features partially working: FR-02 (seller-side request inbox lives in admin view for now), FR-09 (simulated roles by design), FR-14 (needs real-device test)
- Features not yet started: none of FR-01–16; F13 AI helper (Could) deferred
- Features requiring instructor feedback: photo placeholder approach (FR-03), simulated role switching (FR-09)

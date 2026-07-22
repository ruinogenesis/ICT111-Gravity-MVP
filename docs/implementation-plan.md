# Lab 10 - Implementation Plan — Gravity

## 1. Project Information
- Group name: Gravity
- Project title: Gravity — RSU Student Secondhand Marketplace
- Repository link: https://github.com/ruinogenesis/ICT111-Gravity-MVP
- Selected platform/tools: Frontend-only web prototype — HTML, CSS, JavaScript, localStorage + JSON seed data (decision locked in /docs/technical-architecture.md, Lab 06)
- Backend status: No backend (simulated data layer per architecture §5; explicitly allowed by FR-04)

## 2. Prototype Scope for Sprint 1

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage / landing screen (problem, target user, actions, safer-meetup note) | FR-01, FR-02 | US-03 | S-01 Homepage | Working Draft |
| Register with RSU email check (rejection of non-@rsu.ac.th) | FR-10, FR-15 | US-01 | S-07 Register | Working Draft |
| Input/submission form (title, category, price, condition, pickup zone, photo placeholder, description) | FR-03, FR-10, FR-11 | US-02, US-09 | S-02 Sell | Working Draft |
| Record list as cards with photo placeholder + status | FR-05 | US-03 | S-03 Browse | Working Draft |
| Search + expanded category chips + price range filter | FR-06 | US-04 | S-03 Browse | Working Draft |
| Detail view (verified badge, no contact info, status explainer) | FR-07, FR-15 | US-05 | S-04 Detail | Working Draft |
| Status tracking Available → Reserved → Sold / Removed with clarity note | FR-08 | US-07 | S-03/S-04/S-06 | Working Draft |
| Contact request + "what happens next" explainer + email-only reveal | FR-02, FR-15 | US-06 | S-04 Detail / S-06 Admin | Working Draft |
| Admin view: verify accounts, accept/decline requests, update status, remove with confirm | FR-08, FR-09, FR-10 | US-08 | S-06 Admin | Working Draft |
| Dashboard (totals, statuses, per category, contact requests) | FR-12 | US-10 | S-05 Dashboard | Working Draft |
| Mobile-responsive layout | FR-14, NFR-01 | US-11 | all screens | Working Draft |

Deferred to Sprint 2 (Lab 11): AI listing helper mockup (F13, Could), polish from instructor feedback, startup metrics instrumentation.

## 3. Implementation Approach
- Frontend: single-page app — one index.html with 7 screen sections (S-01–S-07) toggled by the nav bar; continues the Lab 05 wireframe layout and visual style directly (architecture continuity rule).
- Data source/storage: JSON seed arrays (converted from /data/sample-*.csv) + localStorage persistence under three keys (gravityUsers, gravityListings, gravityRequests); corrupted or wiped storage self-heals from the seed; "Reset demo data" button restores known state (risk R-09 mitigation).
- Admin/status handling: separate, visually distinct "Admin view (demo)" screen (dashed amber border, own nav link) — role switcher simulates buyer/seller/admin login honestly (no real auth, per architecture §5 and risk R-05).
- Search/filter approach: live keyword search over title + pickup area, category chips (6 categories — expanded per Lab 08 finding), min/max price inputs, Sold items hidden by default with a toggle, empty-state message.
- Validation approach: required fields, positive price, RSU email regex, duplicate-listing warning (same title + category), delete confirmation — FR-10 complete; every action shows a confirmation/feedback message (FR-11).
- Security (from Lab 09): all user text rendered via textContent/createElement — no innerHTML anywhere (risk R-04 closed); pickup areas are a fixed dropdown of general campus zones (risk R-02); no contact data on any public screen (risk R-01).
- Screenshots/evidence approach: 5 required screenshots (homepage, input-form, record-list, detail-view, admin-view) captured from the running prototype into /screenshots/.

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| Eimyat Yadanar Mon (Technical/Business) | script.js — data layer, browse/filter logic, admin functions, XSS fix (Issue 13) | Commits to /prototype/script.js |
| Thiri Shoon Lae Oo (UX/UI + Validation) | index.html + style.css — screen layouts, mobile responsiveness, contact-flow explainer and Reserved wording (Issues 7, 8) | Commits to /prototype/index.html, style.css; screenshots |
| Hein Htet Aung (Product/Docs) | Homepage/register copy (safer-meetup wording, Issue 15), implementation-plan.md, feature-implementation-status.md, README + logbook, issue updates | Commits to /docs/, README.md; issue comments |

## 5. Risks or Blockers
1. localStorage is per-browser — demo data can differ between machines. Mitigated: seed self-heal + reset button; demo runs from one prepared browser (risk R-09).
2. Contact flow needs two parties but the prototype has no backend — both sides are shown from one browser via the role switcher; this is stated on-screen so it is not misleading (risk R-05/R-06).
3. Real photo upload is not feasible in localStorage at realistic sizes — placeholder photo icons used in Sprint 1; noted for instructor feedback (Lab 08 Issue 9 partially addressed).
4. GitHub Pages must be enabled/verified for the live link before Lab 12 (Issue 3).

# Final Prototype Report — Gravity

## 1. Project Title
Gravity — RSU Student Secondhand Marketplace ("post once, be found fast")
Live: https://ruinogenesis.github.io/ICT111-Gravity-MVP/prototype/index.html (v1.0) · Landing: https://ruinogenesis.github.io/ICT111-Gravity-MVP/landing-page/index.html

## 2. Group Members and Roles
| Name | Role | Main Contribution | GitHub Evidence |
|---|---|---|---|
| Hein Htet Aung (6704806) | Product Lead + Documentation Lead | Problem definition, requirements docs, sales/GTM/pitch materials, README + logbook, legal-ethical review | Commits to /docs, README; issues incl. #44, #47 |
| Thiri Shoon Lae Oo (6610285) | UX/UI Lead + Validation Lead | Wireframes, all screen layouts + CSS, both validation rounds (Lab 08 + Lab 13), privacy review, screenshots | Commits to /prototype (HTML/CSS), /screenshots; issues incl. #49, #51 |
| Eimyat Yadanar Mon (6602963) | Technical + Business Lead | JavaScript data layer + all interaction logic, security fixes, metrics engine, business model, risk register | Commits to /prototype/script.js, data.json; issues incl. #42, #48, #52 |

## 3. Problem Background
Selected in Lab 02 (NUF score 13, highest of six candidates) and validated in Lab 03 with 15 RSU students: students moving out at term end — especially graduating and international students — lose time and money selling used furniture, appliances, and textbooks through scattered, unsearchable Facebook and LINE groups. Posts get buried in hours (E01, 11/15), sellers under departure deadlines spend 30–90 minutes per item (E02), and working items end up discarded or given away (E03, 7/15) while incoming students buy the same items new. A trust concern about meeting strangers also emerged (E05) and shaped the core design.

## 4. Target Users
Sellers: RSU students moving out under time pressure — primary persona Su Su, Year-4 international student with a booked flight (segment CS01). Buyers: new and continuing students furnishing rooms affordably (CS02). Admin: Gravity team moderator. Both market sides are verified RSU students only — the trust model that differentiates Gravity from open Facebook/LINE groups.

## 5. Evidence Summary
- Lab 03 problem discovery: 15 respondents (R001–R015) → evidence patterns E01–E05, all anonymized with consent.
- Lab 08 validation (v0.1, 5 testers): 93.3% task success, 4.30/5 feedback, 4.40/5 interest → decision "continue with minor revisions"; two confusion points identified (contact flow 2/5, Reserved status).
- Lab 13 final testing (v0.3, 5 testers incl. one returning): 90.0% strict success on a stricter 8-task set (93.75% counting partials), ease 4.62/5; **both Lab 08 fixes verified** (contact flow 4/5, Reserved 5/5) and **FR-14 passed on a real device**. Findings IMP-06–09 fixed in v1.0.

## 6. Final Prototype Overview
A frontend web application (HTML/CSS/JS, single-page, 8 screens) deployed on GitHub Pages. A seller registers with an RSU email (format-gated), is verified via a one-time in-person ID check (boolean flag only — no ID data ever stored), posts a listing with category/price/condition/campus pickup zone/photo, and manages statuses from My Listings. A buyer browses, searches, filters and sorts, opens details (verified badge, zero contact info), and requests contact; when the seller accepts, both sides see each other's RSU email — nothing before, nothing else. An admin view handles verification and moderation; a dashboard computes live product metrics (PM-01–08). Data seeds from data.json and persists in localStorage (FR-04-compliant simulated storage) with self-healing reset. All user text renders via textContent (stored-XSS mitigation from the Lab 09 code review).

## 7. Requirement Traceability Summary
Full matrix: /docs/requirement-traceability-matrix.md and /data/final-requirement-traceability.csv. All 16 lecturer requirements **Completed**; FR-15 carries one documented implementation clarification (email-only reveal, Issue #47, approved). Summary:

| Requirement ID | Implemented Feature/Screen | User Story ID | Evidence Source | Status |
|---|---|---|---|---|
| FR-01, FR-02 | Landing + home + full two-sided pathway | US-03, US-06 | final-homepage.png; demo step 1–2 | Completed |
| FR-03, FR-10, FR-11 | Sell form with validation, duplicate confirm, feedback | US-02, US-09 | final-input-form.png; Lab 13 T02 | Completed |
| FR-04 | data.json seed + localStorage, reset self-heal | — | /prototype/data.json | Completed |
| FR-05, FR-06 | Browse cards, search, 6 categories, price range, sort | US-03, US-04 | final-record-list.png; Lab 13 T03 5/5 | Completed |
| FR-07, FR-15 | Detail view: verified badge + trust line, no contact info | US-05 | final-detail-view.png; Lab 13 T04 | Completed |
| FR-08 | Status lifecycle + seller self-service + soldDate | US-07 | Lab 13 T05 5/5, T07 5/5 | Completed |
| FR-09 | Admin view: verify, moderate, fix status | US-08 | final-admin-view.png | Completed |
| FR-12 | Dashboard + product metrics PM-01–08 + charts | US-10 | final-dashboard.png; Lab 13 T08 | Completed |
| FR-13, FR-14 | Consistent UI; mobile-first, real-device pass | US-11 | Lab 13 T08 5/5 on phone | Completed |
| FR-16 | This matrix + FR/S-ID comments in code | — | feature-implementation-status.md | Completed |

## 8. Data Handling
Three entities (data-structure.md): Users (display name, RSU email, role, verified flag, join date), Listings (title, category, price, condition, pickup zone, description, photo ref, status, dates), ContactRequests (references + status only). Collected via the sell/register forms; stored in localStorage seeded from data.json; displayed on browse/detail/my-listings/admin; searched and filtered by keyword, category, price, status; updated through seller/admin status actions with confirmation. Deliberately never collected: phone/LINE/social handles (RSU email is the single reveal channel — Issue #47), student ID images/numbers, precise room locations (campus-zone dropdown). All repository and demo data is fictional; research participants appear as anonymous codes only (R-, TU-, UT-). Full policy: /docs/data-handling-policy.md (Lab 09).

## 9. Validation and User Testing Results
Two formal rounds (details §5, files: /data/validation-results.csv, /data/user-testing-results.csv, /docs/user-testing-results.md). Trajectory across rounds: overall competence stayed high while the tested surface grew from 6 to 8 tasks including brand-new screens; the two targeted defects from Lab 08 were confirmed fixed in Lab 13; ease rose 4.30 → 4.62. The four Lab 13 findings (UI-01–04) were fixed and shipped in v1.0: detail-view trust line, duplicate-warning confirm dialog, visual polish pass, and pending-request badge with reordered My Listings sections.

## 10. Product / Startup Metrics
Live on the dashboard, defined in /docs/startup-metrics.md: PM-01 total listings, PM-02 status split, PM-03 sell-through rate, PM-04 top category, PM-05 contact requests + acceptance rate, PM-06 average days to Sold, PM-07 verified users, PM-08 task success (Lab 08/13 evidence). Acquisition metrics AM-01–06 defined in /docs/acquisition-metrics.md with the landing-page GTM plan (4 channels) from Lab 12; tracking sheet /data/acquisition-metrics.csv.

## 11. Responsible Design
Lab 09 full review: legal-ethical checklist, PDPA-aligned data minimization, IP register (zero third-party assets; AI documentation assistance disclosed), security check (innerHTML XSS found → textContent fix shipped and regression-tested), risk register R-01–09 with all mitigations landed (Issues #40–46). Ethical wording rules applied throughout: "safer meetups" not guarantees; simulated verification labelled in the demo.

## 12. Limitations
Frontend-only by documented decision (technical-architecture.md): no real authentication (roles simulated via labelled switcher), no server (localStorage per-browser; two-party flows demonstrated from one browser), photo upload at placeholder fidelity (localStorage size limits), email confirmation and in-person check simulated. These are honest demo boundaries, stated on-screen, not hidden. Post-course candidates (parked, prioritized): real backend + auth, real photo upload, AI listing helper (F13), ratings (F16), natural-language search (F14).

## 13. Business Model
Free student-to-student connector (business-model-canvas.md): value = recovered money for leavers, savings for arrivals, trust via verification; no payments/delivery/inventory keeps cost near zero (GitHub Pages hosting). Future sustainability options documented, not implemented: campus-partner sponsorship, featured listings at peak season. Go-to-market: intercept the problem where it lives — apartment friends group chats, QR posters in apartment lobbies at move-out peak (Lab 12 plan).

## 14. Conclusion
Gravity went from a scanned opportunity (Lab 02) to a validated problem (Lab 03), a requirement-based design (Labs 04–06), a tested experiment (Labs 07–08), a responsibly-checked build (Lab 09), two implementation sprints (Labs 10–11), a public launch surface (Lab 12), and a re-validated, fix-verified release (Labs 13–14). Every screen traces to a fixed requirement, every requirement traces to user evidence, and every claim in this report is checkable in this repository.

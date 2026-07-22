# Gravity

## Course Information
Course Code: ICT111
Course Name: Introduction to Information Technology
Instructor: Dr. Herison Surbakti
Project Type: 14-Labs Continuous IT Startup MVP Development

## Team Name
Gravity

## Team Members and Roles
| Student ID | Name | Role | Responsibility |
|---|---|---|---|
| 6704806 | Hein Htet Aung | Product Lead + Documentation Lead | Define problem, target users, value proposition; maintain README and logbook |
| 6610285 | Thiri Shoon Lae Oo | UX/UI Lead + Validation Lead | Design wireframes and user flow; run customer discovery and collect evidence |
| 6602963 | Eimyat Yadanar Mon | Technical and Business Lead | Manage repository structure and prototype feasibility, business aspects |

## Initial Problem Area
Our team is interested in **how RSU students buy and sell used items when they move in and out of university**. Students who are leaving, graduating, or moving dorms need to clear furniture, appliances, textbooks, and other items quickly, while new and continuing students want those same things cheaply. Today this happens in scattered Facebook and LINE groups where listings are buried, unsearchable, and disorganised. We want to build a simple student-only marketplace that connects buyers and sellers directly.

## Target Users
Rangsit University students in two roles: **sellers** who are moving out, graduating, or leaving (especially international students) and need to clear their belongings, and **buyers** who are new or continuing students looking for cheap used furniture, appliances, and textbooks. During opportunity scanning the team also considered a degree progress tracker, a shared expense splitter, and a content planner, but selected the student marketplace because the problem is real and recurring, and we belong to the user group, which makes validation easy.

## Selected IT Venture Direction
After Lab 2 opportunity scanning, our team selected **Gravity**, a **peer-to-peer student marketplace**. The target users are RSU students who need to sell or buy used items when moving in or out, and who currently rely on messy, unsearchable Facebook and LINE groups. The platform connects buyers and sellers directly — sellers post listings, buyers browse, search, and filter, and the platform then connects the two parties so they finish the deal themselves. We deliberately do **not** hold inventory or process payments, which keeps the build feasible and avoids any advanced cybersecurity. A simple AI assistant helps sellers write listings and lets buyers search in natural language. To keep the marketplace trusted, access is limited to verified RSU students using a university email plus a one-time in-person student ID check (no ID card images are stored). This idea scored highest on our NUF matrix (New 3, Useful 5, Feasible 5 = 13).

## Customer Problem Discovery (Lab 03)
In Lab 3, our team collected early problem evidence from target users to confirm whether the problem we selected in Lab 2 is real and important, not just team opinion.

**Target Respondents.** We focused on RSU students who buy or sell used items around moving in or out: graduating and leaving students, new and continuing students, international students, and dorm residents. We gathered 15 early responses through a short survey and brief interviews (recorded in `/data/raw-responses.xlsx`).

**Main Evidence Found.** The strongest, most repeated pattern was scattered, unsearchable buy/sell channels (11 of 15 respondents), followed by usable items being given away or discarded under time pressure (7 of 15) and measurable time loss of about 30–90 minutes per item. Current workarounds are Facebook groups, LINE chats, word of mouth, and noticeboards. A trust and safety concern about meeting strangers also appeared.

**Updated Problem Statement.** RSU students who move out at the end of a term — especially graduating and international students — lose time and money trying to sell used furniture, appliances, and textbooks through scattered, unsearchable Facebook and LINE groups, and often give items away or discard them; new and continuing students struggle to find affordable used versions in time and end up buying new.

**Decision for Next Step.** The problem is confirmed as real and recurring, so we keep the direction but **narrow the target segment** to movers dealing with higher-value items, and we will add a safer contact step to the planned solution. Full details are in `/docs/customer-discovery-summary.md`, `/docs/problem-notes.md`, `/docs/assumption-evidence-table.md`, and `/docs/customer-questions.md`.

## Technology Possibility
Possible technologies:
- Web application
- Mobile application
- Dashboard
- AI-assisted feature
- Cloud-based system
- IoT-supported system
- Cybersecurity tool
- SaaS platform
- Marketplace or digital platform

Most likely for our MVP: a **web application + marketplace/digital platform**, with a simple cloud-based data store (Google Sheet or a lightweight database) for listings, plus an optional AI-assisted feature for listing help and natural-language search.

## Repository Structure
- **docs**: reports, team profile, idea log, weekly logbook, and problem notes
- **prototype**: source code or clickable prototype files
- **data**: survey responses, validation data, and metrics
- **finance**: financial assumptions and model
- **diagrams**: user flow and technical architecture diagrams
- **screenshots**: evidence of prototype and repository progress
- **pitch**: pitch deck and final demo files

## Weekly Progress Log
| Lab | Main Activity | Output | Status |
|---|---|---|---|
| Lab 1 | Lab setup and idea log | Repository, team profile, initial idea log, weekly logbook | Completed |
| Lab 2 | IT opportunity scanning | Opportunity scan, NUF scoring sheet, selected opportunity | Completed |
| Lab 3 | Customer problem discovery | Customer questions, problem notes, response data, assumption-evidence table, discovery summary | Completed |

## Current Status
In Lab 3, we ran customer problem discovery for Gravity. We defined our target respondents, prepared non-leading discovery questions, and collected 15 early responses from students who buy and sell used items when moving. We separated our assumptions from the evidence, identified the repeated pain points (scattered channels, time loss, discarded items, and trust concerns), and wrote an evidence-based updated problem statement. The evidence confirms the problem is real, so we are keeping the direction and narrowing the target segment.

## Next Step
In Lab 4, we will define our customer segment and persona in detail and write user stories based on the discovery evidence, then begin turning the validated problem into MVP requirements.

## Lab 04: User Persona, Requirements, and User Stories

In Lab 04 we converted the Lab 03 evidence into a concrete product definition: a primary persona, requirements mapped to the lecturer's fixed FR-01–FR-16, user stories with acceptance criteria, and a prioritized MVP feature list that becomes the baseline for the final prototype.

### Primary Target User
RSU student **sellers** moving out under time pressure (especially graduating and international students) who must sell higher-value used items — furniture, appliances, textbooks — within days. Student **buyers** at move-in are served by the same MVP screens.

### Persona Summary
- **Persona name:** Su Su, Year 4 International Student
- **User type:** Graduating student who must clear her room before flying home
- **Main goal:** Post each item once and sell it within days to recover value instead of discarding it
- **Main pain point:** Listings buried across scattered, unsearchable Facebook/LINE groups while under severe time pressure (E01, E02, E03)
- **Current workaround:** Posting in 3+ Facebook/LINE groups, asking friends, dorm noticeboard — then giving items away or throwing them out

### Key Requirements
| Req ID | Requirement | Priority | Related Evidence |
|---|---|---|---|
| FR-03 | Create Listing form (category, price, condition, photo, pickup area) | Must | E01, E02, E03 |
| FR-05/FR-06 | Central listings page with search, filter, and categories | Must | E01 — 11/15 respondents |
| FR-08 | Listing status tracking (Available / Reserved / Sold) | Must | E04 |
| FR-09 | Admin: verify accounts, remove invalid listings | Must | E05 |
| FR-15 / NFR-02 | No public personal contact details; reveal contact only after both agree | Must | E05 — R013 |
| NFR-01 | Mobile-friendly interface | Must | E02 |
| NFR-04 | RSU-verified students only (email + one-time in-person ID check, no ID images stored) | Must | E05 |

Full list (all fixed FR-01–FR-16 + NFRs): [`/docs/system-requirements.md`](docs/system-requirements.md)

### MVP Feature Scope
| Feature | Priority | Included in Final Prototype? |
|---|---|---|
| Landing page with Browse / Sell actions | Must | Yes |
| RSU email verification + verified badge | Must | Yes |
| Create Listing form with validation and confirmation | Must | Yes |
| Listings page with search, filter, and categories | Must | Yes |
| Listing detail page | Must | Yes |
| Status tracking (Available / Reserved / Sold) | Must | Yes |
| Contact request (reveal after both agree) | Must | Yes |
| Admin panel (verify, moderate, fix status) | Must | Yes |
| Mobile-responsive layout | Must | Yes |
| Dashboard summary | Should | Yes |
| AI listing helper | Could | Optional |
| AI natural-language search, payments, ratings | Won't (MVP) | No |

Full prioritization: [`/docs/mvp-feature-list.md`](docs/mvp-feature-list.md) · User stories: [`/docs/user-stories.md`](docs/user-stories.md) · Persona: [`/docs/user-persona.md`](docs/user-persona.md)

### Diagram Links
- User flow diagram: [`/diagrams/user-flow.png`](diagrams/user-flow.png)
- Use case diagram: [`/diagrams/use-case-diagram.png`](diagrams/use-case-diagram.png)

### GitHub Contribution Evidence
All members contributed to this repository through commits, issues, and documentation updates for Lab 04 (see commit history and Issues #-#).

## Lab 05: Product Concept and UI/UX Wireframe

In Lab 05 we converted the Lab 04 requirements into a product concept and a full set of wireframes that become the visual baseline for the final prototype. The wireframes are built in HTML/CSS/JS, so the same files also serve as the clickable draft.

### Product Concept
Gravity is a web-based, mobile-friendly secondhand marketplace exclusively for verified RSU students. Sellers moving out post persistent, categorized listings once; buyers browse, search, and filter; statuses keep information current; and contact details are revealed only after both sides agree. Gravity connects people — it does not hold inventory or process payments. Full concept: [`/docs/product-concept.md`](docs/product-concept.md)

### Requirement-Driven Screens
| Screen | Related Requirement IDs | Wireframe File |
|---|---|---|
| Homepage / Landing | FR-01, FR-02 | /wireframes/homepage.png |
| Create Listing form | FR-03, FR-10, FR-11 | /wireframes/input-form.png |
| Listings page (browse/search/filter) | FR-05, FR-06, FR-08 | /wireframes/record-list.png |
| Listing detail view | FR-07, FR-08, FR-15 | /wireframes/detail-view.png |
| Dashboard / Summary | FR-12 | /wireframes/dashboard.png |
| Admin panel | FR-09, FR-08 | /wireframes/admin-view.png |
| Register / verify (extra) | FR-10, FR-15 | /wireframes/register.png |

Full mapping with user stories and prototype modules: [`/docs/feature-requirement-mapping.md`](docs/feature-requirement-mapping.md)

### User Flow
The main pathway runs landing → RSU verification → sell (post listing) or buy (search → detail → contact request) → mutual agreement → contact revealed → deal completed → status Sold, with an admin lane for verification and moderation. Diagrams: [`/diagrams/user-flow.mmd`](diagrams/user-flow.mmd) (renders on GitHub) and [`/diagrams/user-flow.png`](diagrams/user-flow.png) from Lab 04.

### Clickable Draft
`/prototype/wireframe/index.html` — open in any browser. Navigation switches between all 7 screens; the draft includes working demo interactions: category filtering, search, form validation with error/success messages, RSU email check, contact request feedback, and admin status updates using the shared demo dataset [`/data/sample-listings.csv`](data/sample-listings.csv).

### Team Contribution
All members contributed to the same repository through commits, issues, and documentation (see Issues and commit history).

---
---

## Lab 06: Business Model Canvas and Technical Architecture

In Lab 06 we connected the product concept, requirements, user stories, and wireframes into business logic and technical structure — how Gravity creates value, and how the final prototype will be built.

### Files Added or Updated

- [Business Model Canvas](docs/business-model-canvas.md)
- [Feature-Value Mapping](docs/feature-value-mapping.md)
- [Technical Architecture](docs/technical-architecture.md)
- [Data Structure](docs/data-structure.md)
- [System Architecture Diagram](diagrams/system-architecture.mmd)
- [Data Flow Diagram](diagrams/data-flow.mmd)
- Sample datasets: [listings](data/sample-listings.csv) · [users](data/sample-users.csv) · [contact requests](data/sample-contact-requests.csv) · [customer segments](data/customer-segments.csv)
- [Weekly Logbook](docs/weekly-logbook.md)

### Technical Direction
**Frontend + localStorage/JSON.** The final prototype extends the Lab 05 HTML/CSS wireframe with JavaScript: listings seed from a JSON dataset, user actions persist in browser localStorage, and the dashboard computes live from the same data. Deployment on GitHub Pages gives a free public URL. Real email confirmation, real-time mutual-agreement notifications, and photo upload are simulated, as documented in the technical architecture.

### Final Prototype Connection
Lab 06 is the build plan: the feature-value mapping fixes which features must exist and why (F01–F12 → FR-01–16), the data structure defines the exact records and validation the JavaScript will implement, the architecture diagram shows how data moves from input to storage to list/detail/status/admin/dashboard, and the risk section pre-answers the demo's failure modes. The business model explains the "why" behind scope decisions — free connector model, verification as the differentiator, no payments.

---
---
## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective
Test the core Gravity workflow (post a listing, search/filter, detail view, status comprehension, reveal-after-agree contact) with 5 RSU student testers and make an evidence-based build/revise/revisit decision before the implementation sprint.

### Prototype Version Tested
- Version: v0.1 (working localStorage demo)
- Link: [/prototype/mvp-demo.html](prototype/mvp-demo.html)

### Status
Validation structure, analytics sheet, and analysis documents are prepared and committed. Test sessions are scheduled for 17–18 July; the analytics summary table and MVP decision will be completed as results are entered.

### Files Added
- [/data/validation-results.csv](data/validation-results.csv)
- [/docs/customer-validation-summary.md](docs/customer-validation-summary.md)
- [/docs/analytics-insights.md](docs/analytics-insights.md)
- [/docs/mvp-decision.md](docs/mvp-decision.md)
- [/docs/test-user-notes.md](docs/test-user-notes.md)

- ## Lab 09: Responsible IT Check

### Responsible Design Summary
In Lab 09 we reviewed Gravity from a legal, ethical, IP, privacy, and security perspective before the implementation sprints. Main findings: privacy is strong by design (minimal fields, no ID images, fictional sample data, contact revealed only after mutual agreement — now narrowed to RSU email only); the main ethical risks are the "meet safely" tagline reading as a guarantee and the demo's simulated verification, both fixed by wording/labelling; the project uses zero third-party assets (team-original code, data, and diagrams, with AI documentation assistance disclosed); and the security review found one code-level weakness (`innerHTML` rendering of user text in mvp-demo.html, a stored-XSS pattern) scheduled for a `textContent` fix in Sprint 1, alongside admin-view separation. Nine risks are documented in the risk register; decision: **continue with mitigation** — five mitigations land in the Lab 10 Sprint 1 backlog.

### Files Added
- docs/legal-ethical-checklist.md
- docs/privacy-and-data-protection.md
- docs/ip-and-third-party-assets.md
- docs/security-risk-check.md
- docs/risk-register.md
- docs/updated-requirements-note.md
- docs/user-consent-statement.md
- docs/data-handling-policy.md
- data/data-inventory.csv
- data/risk-register.csv
- data/third-party-assets-register.csv
- diagrams/privacy-security-review.mmd
- weekly logbook updated (Lab 09 entry)

### Requirement Update
`system-requirements.md` is unchanged. One implementation clarification to FR-15 is recorded in `docs/updated-requirements-note.md`: the contact channel revealed after mutual agreement is the RSU email only — no phone, LINE, or social handles are ever collected.

### Team Contributions
- Hein Htet Aung: legal-ethical checklist, IP/assets register, updated-requirements note, README/logbook
- Thiri Shoon Lae Oo: privacy review, data inventory, consent statement, review diagram
- Eimyat Yadanar Mon: security check (code review), risk register, data handling policy

# README addition — append this section to README.md

## Lab 10 - MVP Implementation Sprint 1

### Sprint Goal
Build the first working version of the Gravity prototype from the approved requirements (Lab 04), wireframes (Lab 05), architecture (Lab 06), validation findings (Lab 08), and responsible-design checks (Lab 09).

### Implementation Approach
- Platform/tools: Frontend-only web prototype — HTML, CSS, JavaScript (single-page app, 7 screens)
- Backend status: No backend — simulated data layer, explicitly allowed by FR-04
- Data storage/simulation: JSON seed data + localStorage (self-healing, with reset button)
- Prototype link or folder: /prototype/ (index.html, style.css, script.js) — v0.2

### Features Implemented in Sprint 1

| Feature | Requirement ID | Status | Evidence |
|---|---|---|---|
| Homepage (problem, target user, actions, safer-meetup note) | FR-01, FR-02 | Working Draft | /screenshots/homepage.png |
| Register with RSU email check | FR-10, FR-15 | Working Draft | Rejection message for non-@rsu.ac.th |
| Input form (validation, duplicate warning, photo placeholder, pickup zones) | FR-03, FR-10, FR-11 | Working Draft | /screenshots/input-form.png |
| Record list (cards) + search + 6 categories + price filter | FR-05, FR-06 | Working Draft | /screenshots/record-list.png |
| Detail view (verified badge, no contact info, status explainer) | FR-07, FR-15 | Working Draft | /screenshots/detail-view.png |
| Status tracking with Reserved clarity fix | FR-08 | Working Draft | Browse + detail screens |
| Contact request + what-happens-next explainer + email-only reveal | FR-02, FR-15 | Working Draft | Detail + admin screens |
| Admin view (verify, requests, status, remove w/ confirm) | FR-08, FR-09 | Working Draft | /screenshots/admin-view.png |
| Dashboard (totals, statuses, categories, requests) | FR-12 | Working Draft | Dashboard screen |
| Mobile-responsive layout | FR-14 | Working Draft | ≤600px media query |

All four Lab 08 minor revisions and all Sprint-1 Lab 09 mitigations (including the innerHTML→textContent XSS fix) are included — full map in /docs/feature-implementation-status.md.

### Screenshots
- Homepage: /screenshots/homepage.png
- Input form: /screenshots/input-form.png
- Record list: /screenshots/record-list.png
- Detail view: /screenshots/detail-view.png
- Admin/status view: /screenshots/admin-view.png

### Team Contribution
All members contributed to the same repository: Eimyat (script.js, data layer, admin, security fix), Thiri (layouts, mobile CSS, UX clarity fixes, screenshots), Hein (copy, planning docs, README/logbook, issues).

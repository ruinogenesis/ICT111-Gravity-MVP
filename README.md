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
| Lab 4 | Requirements and user stories | Persona, system requirements (FR-01-16, NFR-01-05), user stories US-01-12, MVP feature list F01-F16 | Completed |
| Lab 5 | Product concept and wireframes | Product concept, 7-screen wireframe (S-01-S-07), user flow, feature-requirement mapping | Completed |
| Lab 6 | Business model and architecture | Business model canvas, technical architecture, data structure, system/data-flow diagrams | Completed |
| Lab 7 | MVP experiment design | Experiment plan, assumptions A-01-07, metrics M-01-08, script T1-T6, working demo (mvp-demo.html) | Completed |
| Lab 8 | Customer validation | Validation with 5 testers: 93.3% task success, 4.30 feedback, 4.40 interest -> continue with minor revisions | Completed |
| Lab 9 | Responsible IT check | Legal-ethical checklist, privacy/data docs, IP register, security check, risk register R-01-09 | Completed |
| Lab 10 | MVP implementation Sprint 1 | Prototype v0.2: all 7 screens, Lab 08 fixes, Lab 09 mitigations (incl. XSS fix) | Completed |
| Lab 11 | Sprint 2 and startup metrics | Prototype v0.3: My Listings, data.json, sort; product metrics PM-01-08 + dashboard charts | Completed |
| Lab 12 | Landing page and go-to-market | Live landing page on GitHub Pages, GTM plan (4 channels), marketing messages, acquisition metrics AM-01-06 | Completed |
| Lab 13 | Sales scenario, demo script, user testing | 5-tester re-validation: Lab 08 fixes verified (contact flow 4/5 vs 2/5; Reserved 5/5), FR-14 real-device pass; final improvement list IMP-01-10 | Completed |
| Lab 14 | Final MVP release and venture pitch | Prototype v1.0, requirement traceability matrix, final report, demo script, pitch outline, reflection | Completed |

## Current Status
**FINAL RELEASE (v1.0) — all 14 labs complete.** The Gravity prototype implements all sixteen fixed requirements, verified by two rounds of user testing and a final traceability audit. Live:
- **Prototype (v1.0):** https://ruinogenesis.github.io/ICT111-Gravity-MVP/prototype/index.html
- **Landing page:** https://ruinogenesis.github.io/ICT111-Gravity-MVP/landing-page/index.html
- **Final report:** [/docs/final-prototype-report.md](docs/final-prototype-report.md) · **Pitch:** [/pitch/final-pitch-outline.md](pitch/final-pitch-outline.md) · **Demo script:** [/docs/final-demo-script.md](docs/final-demo-script.md)

## Folder Map
- `/prototype/` — final v1.0 app (index.html, style.css, script.js, data.json) + final-prototype-link.md; historical v0.1 demo (mvp-demo.html) and Lab 05 wireframe preserved as evidence
- `/landing-page/` — public landing page (Lab 12)
- `/docs/` — all lab documentation: requirements, user stories, MVP features, architecture, validation, responsible-design check (Lab 09), sprint plans, testing, final report / reflection / submission checklist
- `/data/` — evidence datasets: research responses, validation + user-testing results, requirement traceability CSV, final sample data, metrics sheets, member contribution table
- `/diagrams/` — user flow, use case, architecture, data flow, privacy review, demo flow (Mermaid + PNG)
- `/screenshots/` — evidence screenshots per lab, incl. the final-*.png set
- `/pitch/` — demo outline (Lab 13) + final pitch outline (Lab 14)
- `/finance/` — business model context

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
## Lab 07: MVP Experiment Design

### Experiment Objective
Design a testable MVP experiment that proves the core hypothesis: a verified RSU student can post an item once, and another student can find it, check its status, and make safe contact.

### What We Prepared
- **Experiment plan** ([/docs/mvp-experiment-plan.md](docs/mvp-experiment-plan.md)) with critical assumptions A-01-A-07 ([/docs/critical-assumptions.md](docs/critical-assumptions.md)) mapped to Lab 03 evidence.
- **Success metrics M-01-M-08** ([/docs/success-metrics.md](docs/success-metrics.md)) with pass thresholds for task success, comprehension, and interest.
- **Experiment script T1-T6** ([/docs/experiment-script.md](docs/experiment-script.md)): explain homepage -> post a listing -> find a textbook under 300 THB -> judge trust on the detail view -> explain statuses -> request contact.
- **Feedback form** ([/docs/feedback-form.md](docs/feedback-form.md)) and tester selection matched to persona segments ([/data/test-users.csv](data/test-users.csv)).
- **Working demo** ([/prototype/mvp-demo.html](prototype/mvp-demo.html)): localStorage prototype with create-listing form, validation, search/filter, detail view, and contact request - the instrument used for the Lab 08 validation sessions.

### Connection Forward
The Lab 08 validation ran exactly this experiment with 5 testers and produced the evidence (93.3% task success, contact-flow and Reserved confusions) that drove the Sprint 1-2 revisions in Labs 10-11.

### Team Contribution
Eimyat: demo build and data seeding. Thiri: experiment script, tester recruitment, feedback form. Hein: experiment plan, assumptions, success metrics, documentation.

---
---
## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective
Test the core Gravity workflow (post a listing, search/filter, detail view, status comprehension, reveal-after-agree contact) with 5 RSU student testers and make an evidence-based build/revise/revisit decision before the implementation sprint.

### Prototype Version Tested
- Version: v0.1 (working localStorage demo)
- Link: [/prototype/mvp-demo.html](prototype/mvp-demo.html)

### Status
Validation complete: 5 testers, 30 task runs, **93.3% task success (28/30)**, average feedback **4.30/5**, average interest **4.40/5**. Main confusion points: contact flow and Reserved status. **Decision: continue with minor revisions** (four fixes carried into Sprint 1) - full analysis in the files below.

### Files Added
- [/data/validation-results.csv](data/validation-results.csv)
- [/docs/customer-validation-summary.md](docs/customer-validation-summary.md)
- [/docs/analytics-insights.md](docs/analytics-insights.md)
- [/docs/mvp-decision.md](docs/mvp-decision.md)
- [/docs/test-user-notes.md](docs/test-user-notes.md)

## Lab 09: Responsible IT Check

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

## Lab 11: MVP Implementation Sprint 2 and Startup Metrics

### Prototype Progress
v0.2 → v0.3. Sprint 2 closed the five gaps found in the Sprint 1 review: sellers now manage their own listings and accept/decline contact requests from a new **My Listings** screen (US-06/US-07 finally work exactly as the user stories describe, without going through admin), buyers see the live status of their sent requests (root cause of the Lab 08 contact-flow confusion), the seed data moved to an inspectable /prototype/data.json (with an identical embedded fallback for local-file use), Browse gained sort options, and the dashboard grew from simple counts into a real metrics view.

### Implemented / Improved Features
| Requirement ID | Feature | Status | Evidence |
|---|---|---|---|
| FR-02 | Full two-sided contact pathway (request → seller accept → mutual RSU-email reveal) | Completed | /screenshots/my-listings.png; testing notes T-09 |
| FR-04 | data.json seed source + localStorage persistence | Completed | /prototype/data.json; T-12 |
| FR-06 | Search + 6 categories + price range + sort | Completed | T-04 |
| FR-08 | Status lifecycle with seller self-service + soldDate tracking | Completed | T-06 |
| FR-12 | Dashboard with product metrics PM-01–PM-08 + bar charts | Completed | /screenshots/dashboard.png; T-07 |

Full 16-requirement table: /docs/feature-implementation-status.md (15 Completed, FR-14 partially — real-device test in Lab 13).

### Startup/Product Metrics
Eight metrics defined in /docs/startup-metrics.md and computed live on the dashboard: PM-01 total listings, PM-02 status counts, PM-03 sell-through rate, PM-04 top category, PM-05 contact requests + acceptance rate, PM-06 average time to Sold, PM-07 verified users, PM-08 task success rate (93.3%, Lab 08 evidence, with 4.30 feedback / 4.40 interest).

### Prototype Screenshots
/screenshots/homepage.png, input-form.png, record-list.png, detail-view.png, my-listings.png (new), dashboard.png (new), admin-view.png

### Member Contributions
Eimyat: My Listings logic, metrics engine, data.json, sort. Thiri: My Listings + dashboard layout, chart styling, screenshots. Hein: startup-metrics.md, testing notes, feature status, README/logbook.

### Remaining Work
Lab 12 landing page + go-to-market docs; Lab 13 user re-testing (target: PM-08 above 93.3% with the contact-flow fixes) + real-device mobile test; Lab 14 final polish, final report, release.

## Lab 12: Landing Page and Digital Go-to-Market

### Landing Page
Live at: https://ruinogenesis.github.io/ICT111-Gravity-MVP/landing-page/ (files in /landing-page/). Consistent with the prototype's visual identity; hero headline, Lab 03 evidence-based problem section, how-it-works, 5 features mapped to FR IDs, trust & privacy statement, and two CTAs linking to the working v0.3 prototype. The page collects no personal data — the interest counter is browser-local and labelled as such.

### Go-to-Market
Four channels chosen from evidence (LINE dorm/class groups per E01, QR posters in dorm lobbies per CS01, Instagram story, ICT111 class chat as feedback loop), each with a tailored message (/docs/marketing-message.md), expected action, and tracked metric. Launch sequence and risks in /docs/go-to-market-plan.md.

### Acquisition Metrics
AM-01 views, AM-02 CTA click rate, AM-03 demo attempts, AM-04 feedback responses, AM-05 interest conversion, AM-06 best channel — formulas and honest-measurement notes in /docs/acquisition-metrics.md, tracking sheet in /data/acquisition-metrics.csv.

### Files Added
- /landing-page/index.html, style.css, script.js
- /docs/landing-page-content.md, go-to-market-plan.md, marketing-message.md, acquisition-metrics.md
- /data/acquisition-metrics.csv, channel-plan.csv
- /screenshots/landing-page.png, call-to-action.png
- Weekly logbook Lab 12 entry

### Team Contribution
Hein Htet Aung: copy, messages, GTM plan. Thiri: page design/build, screenshots. Eimyat: CTA/metrics script, metrics docs, CSVs, README.

## Lab 13: Sales Scenario, Demo Script, and User Testing

### Final Demo Preparation
- Sales scenario (/docs/sales-scenario.md): Su Su's move-out situation → pain → Gravity introduction → value message → pitch conversation, all grounded in Lab 03 evidence.
- Demo script (/docs/demo-script.md): 8-minute, 10-step walkthrough of the live v0.3 prototype with presenter roles and a requirement ID on every step; contingency plan included. Demo links in /prototype/final-demo-link.md.
- Demo flow diagram: /diagrams/demo-flow.mmd → /screenshots/demo-flow.png.

### User Testing
Plan (/docs/user-testing-plan.md): 5 testers (incl. one returning Lab 08 tester), tasks T01–T08, explicitly re-testing the two Lab 08 confusion points against baselines plus the FR-14 real-device test. Results (29 July, /docs/user-testing-results.md + /data/user-testing-results.csv): 40 task runs, **90.0% strict task success (93.75% counting partials as half)**, average ease **4.62/5** (baseline 4.30). **Both Lab 08 fixes verified: contact-flow comprehension 4/5 (was 2/5); Reserved 5/5 (was misread). Mobile passed 5/5 on a real device — FR-14 Completed.** Evidence: /screenshots/user-testing-evidence.png.

### Final Improvement List
/docs/final-improvement-list.md: 10 items — IMP-01–05 from Labs 11–12 (IMP-02 already Done via the mobile test), IMP-06–09 from user testing (detail-view trust line, duplicate-warning confirm dialog, visual polish, My Listings request badge), IMP-10 deferred to post-course. Each has priority, owner, and a deadline before the Lab 14 release.

### Final Preparation Status
**Ready for final improvement.** Testing decision: minor revision only — no flow failures, no requirement changes. Open before release: 2 Critical (link check IMP-03, screenshots IMP-04), 2 Important fixes (IMP-06, IMP-07), all owned and scheduled for 30 July.

### Team Contribution
Hein: sales scenario, demo script, demo outline. Thiri: testing plan, session facilitation, results, screenshots. Eimyat: improvement list, demo-link doc, diagram, README.

## Lab 14: Final MVP Release and Venture Pitch

### Final Release
Prototype **v1.0** = v0.3 + all four Lab 13 user-test fixes (detail-view trust line IMP-06, duplicate-confirm dialog IMP-07, visual polish IMP-08, pending-request badge + My Listings reorder IMP-09), regression-tested. Final requirement audit: **all FR-01–16 and NFR-01–05 Completed** — the full evidence chain (Lab 03 evidence → requirement → user story → MVP feature → screen → screenshot → test result) is in [/docs/requirement-traceability-matrix.md](docs/requirement-traceability-matrix.md) and [/data/final-requirement-traceability.csv](data/final-requirement-traceability.csv). The single approved FR-15 clarification (contact reveal = RSU email only) is documented in [/docs/updated-requirements-note.md](docs/updated-requirements-note.md) and Issue #47.

### Final Documents
- Final prototype report: [/docs/final-prototype-report.md](docs/final-prototype-report.md)
- Final demo script (~6:45, roles + contingency): [/docs/final-demo-script.md](docs/final-demo-script.md) · Demo flow: [/diagrams/final-demo-flow.mmd](diagrams/final-demo-flow.mmd)
- Venture pitch outline: [/pitch/final-pitch-outline.md](pitch/final-pitch-outline.md)
- Final reflection: [/docs/final-reflection.md](docs/final-reflection.md) · Contribution table: [/data/member-contribution.csv](data/member-contribution.csv)
- Submission checklist: [/docs/final-submission-checklist.md](docs/final-submission-checklist.md)
- Final sample data (generated from data.json): [/data/final-sample-data.csv](data/final-sample-data.csv)

### Final Screenshots
/screenshots/final-homepage.png · final-input-form.png · final-record-list.png · final-detail-view.png · final-dashboard.png · final-admin-view.png · final-my-listings.png

### Validation Trail
Lab 08 (v0.1, 5 testers): 93.3% task success, 4.30 feedback, 4.40 interest → 4 revisions. Lab 13 (v0.3, 5 testers, stricter 8-task set): 90% strict / 93.75% with partials, ease 4.62/5, both Lab 08 defects verified fixed, mobile real-device pass → 4 fixes shipped in v1.0.

### Team Contribution
All three members contributed across all 14 labs through commits, 52 issues, documentation, testing, and screenshots — per-member summary in [/data/member-contribution.csv](data/member-contribution.csv) and [/docs/final-reflection.md](docs/final-reflection.md) §7.

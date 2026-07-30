# Weekly Venture Logbook

## Lab 1: Lab Setup and IT Venture Repository

### What We Completed
1. Formed a team of three with clear roles and created the GitHub repository with the full required folder structure.
2. Wrote a professional README, the team profile (skills inventory and working agreement), and three initial IT venture ideas in problem-user-solution format.
3. Created five GitHub Issues and made at least five meaningful commits to record project progress.

### What We Learned
1. How to structure a GitHub repository and use Markdown for professional project documentation.
2. How to describe an IT venture idea starting from a real problem rather than from technology hype.
3. How Issues and commit messages act as evidence of planned, tracked teamwork.

### Problems or Difficulties
1. Choosing between three good ideas was harder than expected, so we agreed to keep all three and decide in Lab 2 using feasibility and evidence.
2. Getting used to GitHub's web editor and commit workflow took some practice for the whole team.

### Evidence of Work
- GitHub repository link: https://github.com/ruinogenesis/ICT111-Gravity-MVP
- Screenshot: folder structure and Issues screenshots saved in /screenshots
- File created: README.md, docs/team-profile.md, docs/idea-log.md, docs/weekly-logbook.md, docs/problem-notes.md
- Commit link: [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/)

### Decision Made This Week
We will pursue a lightweight web-based tracking dashboard, with the degree progress and prerequisite tracker as the leading candidate, and confirm the final direction after Lab 2 opportunity scanning.

### Plan for Next Week
In Lab 2 we will run opportunity scanning, compare the three ideas against feasibility and user evidence, and select one primary problem and target user group for the MVP.

---

## Lab 02: IT Opportunity Scanning

### What We Completed
1. Reviewed our three Lab 1 ideas and discovered six possible IT opportunities from real campus and small-business contexts.
2. Mapped each idea to a feasible, software-only prototype path and scored all six using the NUF method (New, Useful, Feasible).
3. Selected one semester project, documented it in /docs/selected-opportunity.md, updated the README, and created five new GitHub Issues for Lab 3.

### Selected Opportunity
Gravity — a peer-to-peer student secondhand marketplace.

### Why We Selected It
It ranked first on our NUF matrix (New 3, Useful 5, Feasible 5 = 13). It solves a real, recurring problem for a user group we belong to (RSU students buying and selling used items when moving in or out), so validation is easy. It is very feasible because the connect-only model — no inventory and no payment processing — removes the hardest parts of e-commerce and leaves a straightforward listings web app.

### What We Rejected
We rejected the Cafe Inventory Tracker (NUF total 8) and the Content Planner (NUF total 9). The cafe idea needs external small-business access to validate within the semester, and the content planner has a narrower user base that is harder for us to reach and interview than fellow students.

### What We Learned
1. A real, specific user problem matters more than an exciting technology, and feasibility is the deciding factor for a one-semester project.
2. The NUF method turns a subjective "I like this idea" debate into a structured, defensible comparison.
3. Writing a clear feasible technology path (e.g. "HTML/CSS/JS + Google Sheet") is far more useful than vague terms like "AI system" or "cloud".

### Evidence of Work
- Opportunity scan file: docs/opportunity-scan.md
- NUF scoring file: data/opportunity-scoring.xlsx
- Selected opportunity file: docs/selected-opportunity.md
- Commit link: [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/)

### Plan for Lab 03
We will prepare customer discovery questions focused on how RSU students currently buy and sell used items when moving, and how frustrating the scattered Facebook/LINE groups are. We will identify target respondents (recent movers, dorm residents, graduating and international students), run short interviews or a survey, and collect evidence to confirm the problem is real before designing the prototype.

---

## Lab 03: Customer Problem Discovery

### What We Completed
1. Defined our target respondents for Gravity and prepared 8-10 non-leading customer discovery questions.
2. Collected 15 early responses from students who buy and sell used items when moving, and recorded them in /data/raw-responses.xlsx.
3. Separated our assumptions from the evidence, documented the repeated pain points, and wrote an evidence-based customer discovery summary and updated problem statement.

### What We Learned About the Problem
1. The biggest pain is not "no marketplace" but scattered, unsearchable channels — 11 of 15 respondents struggle to list or find items across Facebook and LINE.
2. The problem peaks during move-in and move-out periods and is worst for higher-value items (furniture, appliances, textbooks); small items barely matter.
3. A trust and safety concern about meeting strangers affects whether students will complete a deal, which we had not fully considered.

### What Evidence We Collected
- Number of respondents/interviews: 15 early survey and interview responses
- Evidence file: /data/raw-responses.xlsx (Raw Responses + Pattern Summary)
- Key repeated pattern: scattered, unsearchable buy/sell channels (11 of 15), plus usable items given away or discarded under time pressure (7 of 15)

### What We Changed Based on Evidence
We narrowed our target segment to students moving in/out who deal with higher-value items, and we added a safer contact step (in-app message or reveal-contact-after-both-agree) instead of immediately exchanging personal accounts. We also decided to limit access to verified RSU students using a university email plus a one-time in-person student ID check, without storing any ID card images, so the platform stays trusted while avoiding heavy data-protection requirements. We kept the overall problem direction because the evidence confirmed it is real.

### Problems or Difficulties
1. Writing questions that did not accidentally pitch the marketplace took a few tries; our first drafts asked for approval instead of behavior.
2. Most evidence so far is interest-based, not behavior-based, so we still need an adoption test in a later lab.

### Evidence of Work
- GitHub repository link: https://github.com/ruinogenesis/ICT111-Gravity-MVP
- Customer questions file: /docs/customer-questions.md
- Raw responses file: /data/raw-responses.xlsx
- Assumption-evidence table: /docs/assumption-evidence-table.md
- Commit link: https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/

### Plan for Lab 04
We will define our customer segment and persona in detail (the moving student with higher-value items), and write user stories based on the discovery evidence, so we can turn the validated problem into clear MVP requirements.

## Lab 04: User Persona, Requirements, and User Stories

### Group Information
- Course: ICT111 Introduction to Information Technology
- Lab: Lab 04 - User Persona, Requirements, and User Stories
- Group Name: Gravity
- Repository Link: https://github.com/ruinogenesis/ICT111-Gravity-MVP

### 1. Work Completed Today
| Member Name | Contribution | GitHub Evidence (Commit/Issue/PR Link) |
|---|---|---|
| Hein Htet Aung | Wrote user persona and updated README + logbook; reviewed traceability | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Thiri Shoon Lae Oo | Wrote user stories with acceptance criteria; drew user flow and use case diagrams | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Eimyat Yadanar Mon | Mapped fixed FR-01–16 to Gravity in system-requirements.md; built MVP feature list | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

### 2. Main Decisions
- **Primary target user:** RSU student sellers moving out under time pressure (especially graduating and international students) — buyers are served by the same MVP screens.
- **Main persona:** Su Su, Year 4 international student who must sell a desk, mini fridge, and textbooks within days before her flight home.
- **Most important problem:** post once, be found fast — scattered, unsearchable channels (11/15) combined with move-out time pressure (6/15) causing items to be discarded (7/15).
- **Must-have requirements:** all fixed FR-01–FR-16 plus NFR-01 (mobile usability), NFR-02 (no public personal contact details), NFR-04 (RSU-verified students only).
- **Features included in MVP:** landing page, RSU email verification, create-listing form, listings page, search/filter, detail page, status tracking (Available/Reserved/Sold), contact request with reveal-after-agree, admin panel, validation/feedback, mobile layout, dashboard summary.
- **Features postponed:** AI listing helper (Could — only if time allows), natural-language AI search, payments/escrow, ratings and reviews.

### 3. Requirement Changes / Clarifications
The lecturer's system-requirements.md (FR-01–FR-16) is fixed and adopted as-is; we added a mapping column showing how Gravity satisfies each requirement plus five group NFRs based on Lab 03 evidence. The Lab 02/03 decision that Gravity is a connector only (no payments, no inventory, no ID image storage) is reconfirmed and now formally recorded as out of scope.

### 4. Problems Encountered
- Technical problem: deciding how to demonstrate "reveal contact after both agree" (F08) in a simple prototype — we will simulate the agreement step with a status change rather than building real-time chat.
- Team coordination problem: aligning three documents (requirements, stories, features) that cross-reference each other required agreeing on IDs first.
- Evidence/requirement problem: trust/safety evidence is only 3/15 responses, so we kept verification lightweight (email + one-time in-person check) instead of building heavy verification features.

### 5. Next Actions Before Lab 05
| Task | Owner | Deadline | GitHub Issue |
|---|---|---|---|
| Export user-flow.png and use-case-diagram.png from draw.io and commit to /diagrams | Thiri Shoon Lae Oo | Before Lab 05 | Issue 4 |
| Verify traceability: every FR maps to a story, feature, and planned screen | Hein Htet Aung | Before Lab 05 | Issue 6 |
| Choose prototype platform and prepare initial screen skeleton per FR-13 | Eimyat Yadanar Mon | Before Lab 05 | Issue 11 |

## Lab 05: Product Concept and UI/UX Wireframe

### Group Name
Gravity

### Project Title
Gravity — RSU Student Secondhand Marketplace

### Lab 05 Focus
Product Concept and UI/UX Wireframe

### What We Completed Today
- [x] Reviewed Lab 04 requirements (FR-01–FR-16 + NFRs)
- [x] Defined product concept (`/docs/product-concept.md`)
- [x] Mapped features to requirements (`/docs/feature-requirement-mapping.md`)
- [x] Created required wireframe screens (7 screens: 6 required + register)
- [x] Created user flow diagram (`/diagrams/user-flow.mmd`, plus Lab 04's `/diagrams/user-flow.png`)
- [x] Built clickable prototype draft (HTML/CSS/JS wireframe in `/prototype/wireframe/`)
- [x] Updated GitHub repository

### Member Contributions
| Member Name | Contribution | Evidence / Commit Link |
|---|---|---|
| Hein Htet Aung | Product concept, README + logbook update, screenshot exports | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Thiri Shoon Lae Oo | Wireframe screens, usability checklist review, user flow | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Eimyat Yadanar Mon | Feature-requirement mapping, sample dataset, clickable draft testing | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

### Decisions Made
| Decision | Reason | Related Requirement |
|---|---|---|
| Build wireframes in HTML/CSS instead of Figma-only | The same file works as the Lab 05 clickable draft and becomes the direct skeleton for the final web prototype — less rework later | FR-13, FR-14 |
| Add a 7th screen (Register/verify) beyond the six required | RSU verification is Gravity's core trust differentiator from Lab 03 evidence (E05) | FR-10, FR-15 |
| One shared demo dataset (`/data/sample-listings.csv`) feeds all screens | Keeps list, detail, dashboard, and admin numbers consistent, simulating FR-04 data storage | FR-04, FR-12 |
| Status color code fixed: green Available, amber Reserved, gray Sold | Consistent status language across every screen | FR-08, FR-13 |

### Problems Found
- Fitting search, filter chips, and cards on a mobile width required stacking to a single column below 640px.
- Deciding how much interactivity a "wireframe" needs — we added lightweight demo interactions (filtering, validation, status update) so the screen sequence is understandable without a backend.

### Next Steps Before Lab 06
- Export all 7 screens as PNGs into `/wireframes/` and add screenshots to `/screenshots/`.
- Collect quick usability feedback from 2–3 classmates using the clickable draft.
- Decide the final prototype platform (extend this HTML/CSS draft with real data storage vs. low-code tool).

---
---

# Lab 06: IT Business Model Canvas and Technical Architecture

### Group Name
Gravity

### Project Title
Gravity — RSU Student Secondhand Marketplace

### Members Present

| Member Name | Contribution Today | GitHub Evidence / Commit / File Updated |
|---|---|---|
| Hein Htet Aung | Business Model Canvas, README + logbook update | docs/business-model-canvas.md [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Thiri Shoon Lae Oo | Feature-value mapping, system architecture + data flow diagrams | docs/feature-value-mapping.md, diagrams/*.mmd [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Eimyat Yadanar Mon | Technical architecture decision, data structure, sample datasets | docs/technical-architecture.md, docs/data-structure.md, data/*.csv [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

### Decisions Made Today

1. **Business model decision:** Gravity stays free for students; sustainability is based on operational value (waste reduction, student savings) and institutional value (university sustainability goals), with featured listings/sponsorship as future options only. Payments between users remain permanently out of scope.
2. **Technical architecture decision:** Frontend + localStorage/JSON, extending the Lab 05 wireframe into the final prototype, deployed free on GitHub Pages. Chosen for skill match, zero cost, continuity with graded wireframes, and full coverage of FR-01–16 (FR-04 explicitly allows local storage/JSON).
3. **Data structure decision:** Three entities — Users, Listings, ContactRequests — with defined fields, validation rules, and two status lifecycles (listing: Available/Reserved/Sold/Removed; request: Pending/Accepted/Declined).
4. **Diagram decision:** Both diagrams written in Mermaid (.mmd) so they render directly on GitHub and stay editable as the prototype evolves; PNG exports added for submission.

### Problems or Risks Found
- localStorage is per-browser: demo data could reset or diverge between browsers. Mitigation: JSON seed on first load + "Reset demo data" button + demo from one prepared browser.
- The mutual-agreement contact reveal cannot be truly real-time without a backend — documented as a simulated flow in technical-architecture.md section 5.
- Photo upload is not feasible in localStorage at realistic sizes — placeholder images in the prototype.

### Next Actions Before Lab 07
- Convert sample-listings.csv into the JSON seed and implement localStorage save/load in the prototype.
- Implement the create-listing flow end to end (form → validation → saved → visible in list).
- Enable GitHub Pages so the prototype has a live URL for the demo.

## Lab 07: MVP Experiment Design

### Group Information
- Group name: Gravity
- Project title: Gravity — RSU Student Secondhand Marketplace
- Repository link: https://github.com/ruinogenesis/ICT111-Gravity-MVP

### What We Completed Today
- [x] Reviewed requirements, user stories, MVP features, architecture, and wireframes
- [x] Identified critical assumptions (A-01–A-07, ranked by risk and evidence)
- [x] Selected MVP experiment type (simple web prototype + form-based simulation)
- [x] Defined test users (5 testers matching seller/buyer segments) and success metrics (M-01–M-08)
- [x] Prepared experiment script (T1–T6) and neutral feedback form
- [x] Built the working experiment demo (/prototype/mvp-demo.html) and updated GitHub + README

### Member Contributions
| Member Name | Contribution | Evidence/Commit/Issue Link |
|---|---|---|
| Hein Htet Aung | Experiment plan, critical assumptions, README + logbook | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Thiri Shoon Lae Oo | Experiment script, feedback form, test-user recruitment plan | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Eimyat Yadanar Mon | Success metrics, demo prototype, CSV templates, experiment flow diagram | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

### Key Decisions
| Decision | Reason | Evidence/Requirement Link |
|---|---|---|
| Experiment type: simple web prototype + form simulation | Riskiest assumptions are the submission workflow (A-01) and findability (A-02); this type collects task completion, valid submissions, validation behaviour, and feedback | FR-03, FR-05, FR-06 |
| Test the reveal-after-agree contact flow explicitly (T6, M-06) | Trust differentiator rests on only 3/15 evidence (E05) — highest risk-to-evidence gap (A-04) | FR-15 / US-06 |
| Admin and dashboard excluded from the tester experiment | Team-facing features; tested internally during the implementation sprint | FR-09, FR-12 |
| 5 testers: 2 seller-side, 2 buyer-side, 1 no-experience | Mirrors both marketplace sides plus first-time clarity | Personas / CS01–CS02 |

### Problems and Next Action
| Problem | Next Action | Responsible Member |
|---|---|---|
| Testers need a link that works on phones | Enable GitHub Pages and verify the demo URL loads on mobile | Eimyat Yadanar Mon |
| Results must be recorded consistently across observers | All observers use the same experiment-results.csv columns; one dry-run first | Thiri Shoon Lae Oo |
| Experiment design must connect cleanly to Lab 08 validation | Run all 5 sessions and record results for the Lab 08 analytics sheet | Whole team |

## Lab 08: Customer Validation and Analytics Sheet

### Group Information
- Group name: Gravity
- Project title: Gravity — RSU Student Secondhand Marketplace
- Repository link: https://github.com/ruinogenesis/ICT111-Gravity-MVP

### Work Completed Today
- [x] Reviewed Lab 07 MVP experiment plan and success metrics
- [x] Ran validation sessions with 5 real RSU student testers (tasks T1-T6)
- [x] Recorded results in /data/validation-results.csv and qualitative notes in /docs/test-user-notes.md
- [x] Calculated metrics (task success 93.3%, feedback 4.30, interest 4.40, post time 56 s)
- [x] Wrote customer-validation-summary.md, analytics-insights.md, mvp-decision.md
- [x] Decision: Continue with minor revisions
- [x] Created improvement issues for FR-02/15, FR-08, FR-06, FR-03/07

### Member Contributions
| Member Name | Contribution | GitHub Evidence |
|---|---|---|
| Hein Htet Aung | Ran sessions, validation summary, README/logbook | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Thiri Shoon Lae Oo | Observer/recorder, test-user notes, feedback capture | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Eimyat Yadanar Mon | Metrics, analytics insights, MVP decision | [commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

### Problems Found
Recruiting on short notice meant tester roles differ slightly from the Lab 07 plan, and two sessions (TU-04, TU-05) were rapid (~15-25s/task) with lighter qualitative depth — both flagged in the data. Testers disagreed sharply on the contact flow, which became the key design finding rather than a data problem.

### Next Actions
Implement the four minor revisions before Lab 10 (contact flow, Reserved status, filter/min-price, categories/photos), each tracked as a GitHub issue.

---
---

# README — Lab 08 section (append to README.md)

## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective
Test the core Gravity workflow with 5 RSU student testers and make an evidence-based decision before the implementation sprint.

### Prototype Version Tested
- Version: v0.1 (working localStorage demo)
- Link: /prototype/mvp-demo.html

### Analytics Summary
| Metric | Result |
|---|---:|
| Total test users | 5 |
| Task success rate | 93.3% (28/30) |
| Average feedback score | 4.30 / 5 |
| Average interest level | 4.40 / 5 |
| Main confusion points | Contact flow and Search/filter (4 each) |

### MVP Decision
**Continue with minor revisions.** The core concept validated (high task success, trust, and interest); the contact flow, "Reserved" status, filter, and category set need targeted fixes before implementation.

### Files Added
- /data/validation-results.csv
- /docs/customer-validation-summary.md
- /docs/analytics-insights.md
- /docs/mvp-decision.md
- /docs/test-user-notes.md

# Weekly Logbook - Lab 09

## Group Name
Gravity

## Date
19 July 2026 (working dates 18–19 July 2026)

## Members Present
Hein Htet Aung, Thiri Shoon Lae Oo, Eimyat Yadanar Mon

## Work Completed Today
- Data inventory: all fields from data-structure.md classified in `/data/data-inventory.csv`; phone/LINE/ID fields confirmed as never-collected.
- Privacy review: `/docs/privacy-and-data-protection.md` — reveal channel narrowed to RSU email only; pickup-area and photo rules added.
- Ethical review: `/docs/legal-ethical-checklist.md` — tagline safety wording and simulated-verification labelling flagged for revision; RSU-only scope justified.
- IP review: `/docs/ip-and-third-party-assets.md` — zero third-party assets confirmed; AI documentation assistance disclosed; register-first rule adopted.
- Security review: `/docs/security-risk-check.md` — `innerHTML` XSS weakness found in mvp-demo.html and scheduled for Sprint 1 fix; admin separation planned.
- Risk register: `/docs/risk-register.md` + `/data/risk-register.csv` — 9 risks across privacy, legal, security, ethical, IP, data quality; decision: continue with mitigation.
- Requirements update note: `/docs/updated-requirements-note.md` — no FR/NFR changed; one FR-15 implementation clarification (email-only reveal).

## Member Contributions
| Member | Contribution | GitHub Evidence |
|---|---|---|
| Hein Htet Aung | Legal-ethical checklist, IP/assets register, updated-requirements note, README + logbook update | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Thiri Shoon Lae Oo | Privacy and data protection review, data inventory, user consent statement, review diagram | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Eimyat Yadanar Mon | Security risk check (incl. XSS code review), risk register + CSV, data handling policy | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

## Decisions Made
1. Continue building — "safe with revision"; no requirement changes.
2. Contact reveal = RSU email only; no other contact fields ever collected.
3. Four revision items confirmed for Sprint 1: safety wording, simulated-verification label, contact-flow explainer + Reserved wording, XSS `textContent` fix.
4. Register-first rule for any future third-party asset.

## Issues / Blockers
Resolved after this entry: all issues were created (#30–#52, including the 9 risks at #40–#46 and the FR-15 clarification at #47, approved by all three members) and the "#TBD" placeholders in the docs were replaced with the real numbers.

# Weekly Logbook - Lab 10

## Lab Topic
MVP Implementation Sprint 1 (working dates 20–22 July 2026)

## What We Built Today
- First working prototype v0.2 (/prototype/index.html + style.css + script.js): all 7 screens from screen-inventory-checklist.md (S-01 home, S-02 sell, S-03 browse, S-04 detail, S-05 dashboard, S-06 admin, S-07 register) as a single-page app with working navigation, localStorage data layer, and demo role switcher.
- All 4 Lab 08 minor revisions: contact-flow explainer, Reserved clarity (text + dimmed cards), photo placeholders, expanded categories + price filter.
- All Sprint-1 Lab 09 mitigations: textContent rendering (XSS fix, R-04), labelled admin separation (R-05), safer-meetup wording + simulated-verification labels (R-06), pickup-zone dropdown (R-02), duplicate-listing warning (R-09), RSU-email-only reveal (FR-15 clarification).
- 14-test automated smoke check of the main flows (validation, XSS escaping, duplicate warning, register rejection/acceptance, contact flow, Reserved guard, own-listing guard, admin verify/accept/status/remove, dashboard, persistence, reset) — all passing.

## Requirement IDs Addressed
- FR-01–FR-16: all represented in v0.2 as Working Draft (see /docs/feature-implementation-status.md for the full map)
- NFR-01 (mobile), NFR-02 (no public contact info), NFR-04 (RSU-only registration) demonstrated in the same build

## Contribution by Members

| Member | Contribution | Evidence |
|---|---|---|
| Eimyat Yadanar Mon | script.js data layer + admin logic + XSS fix | Commits to /prototype/script.js; Issue 13 |
| Thiri Shoon Lae Oo | Screen layouts, mobile CSS, explainer/Reserved UX fixes, screenshots | Commits to /prototype/index.html, style.css; Issues 7, 8 |
| Hein Htet Aung | Homepage/register copy, implementation plan, feature status, README/logbook | Commits to /docs/, README.md; Issue 15 |

## Screenshots Added
- /screenshots/homepage.png
- /screenshots/input-form.png
- /screenshots/record-list.png
- /screenshots/detail-view.png
- /screenshots/admin-view.png

## Problems Faced
- Strict-mode scoping bug during testing (functions not global) — resolved by loading script.js as a proper script element.
- Real photo upload not feasible with localStorage size limits — shipped placeholder photo selection and documented the limitation for instructor feedback.
- Two-party contact flow on one browser — solved honestly with the labelled demo role switcher.

# Weekly Logbook - Lab 11

## Lab Topic
MVP Implementation Sprint 2 and Startup Metrics (working dates 23–25 July 2026)

## Group Case
Gravity — RSU Student Secondhand Marketplace

## Work Completed Today
- Prototype upgraded to v0.3: new My Listings screen (seller status self-service US-07, seller accept/decline of contact requests US-06, buyer sent-request status), data.json seed source with file:// fallback, sort options on Browse, soldDate tracking.
- Dashboard extended with product metrics PM-01–PM-08 and two CSS bar charts (category + status), computed live from localStorage; Lab 08 validation figures shown as labelled fixed evidence.
- /docs/startup-metrics.md written (8 metrics with type, rationale, formula, source, screen — PM- prefix to avoid collision with Lab 07 M-IDs).
- Full-flow testing: 13 test cases, all passing, recorded in /docs/prototype-testing-notes.md (incl. XSS regression and data.json fallback tests).
- /docs/feature-implementation-status.md updated: 15 of 16 FRs Completed, FR-14 Partially Completed (real-device test with Lab 13).

## Member Contributions
| Member Name | Contribution | File/Feature Updated | GitHub Evidence |
|---|---|---|---|
| Eimyat Yadanar Mon | My Listings logic, metrics engine (computeMetrics/barChart), data.json + fallback, sort | /prototype/script.js, data.json | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Thiri Shoon Lae Oo | My Listings screen layout, chart styling, dashboard layout, updated screenshots | /prototype/index.html, style.css; /screenshots/ | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Hein Htet Aung | startup-metrics.md, prototype-testing-notes.md, feature status update, README + logbook | /docs/ | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

## Requirements Addressed
FR-02, FR-04, FR-06, FR-08, FR-11, FR-12 (improved); FR-01, FR-03, FR-05, FR-07, FR-09, FR-10, FR-13, FR-15, FR-16 (confirmed Completed in re-test)

## Metrics Added
PM-01 total listings, PM-02 listings by status, PM-03 sell-through rate, PM-04 top category, PM-05 contact requests + acceptance rate, PM-06 avg time to Sold, PM-07 verified users, PM-08 task success rate (Lab 08 evidence, with feedback 4.30 and interest 4.40)

## Problems Found
- fetch() cannot read data.json when the page is opened from a local file — solved with an identical embedded fallback seed and documented in code and testing notes.
- Three-way category tie in seed data makes PM-04 ambiguous — acceptable at demo scale; noted in metrics interpretation.
- No real-device mobile test yet — FR-14 stays Partially Completed until the Lab 13 session.

## Next Action Before Lab 12
Commit v0.3 + docs, capture the 6 updated screenshots (incl. new my-listings.png and dashboard.png), verify GitHub Pages serves /prototype/ with data.json (closes Issue 3), then start the Lab 12 landing page + go-to-market docs.


# Weekly Logbook - Lab 12

## Lab Topic
Landing Page and Digital Go-to-Market (working dates 26–27 July 2026)

## Group Case
Gravity — RSU Student Secondhand Marketplace

## Work Completed Today
- Built /landing-page/ (index.html, style.css, script.js): hero + headline, evidence-based problem section (E01/E02/E03 numbers), how-it-works, 5 FR-mapped features, trust & privacy section, two demo CTAs linking to the prototype, browser-local interest counter (no personal data collected).
- Wrote landing-page-content.md (copy + accuracy check against v0.3 — no promises beyond the prototype), go-to-market-plan.md (4 channels, launch sequence, 5 risks with mitigations), marketing-message.md (5 channel messages + quality check), acquisition-metrics.md (AM-01–AM-06 with formulas and honest-measurement note).
- Prepared /data/acquisition-metrics.csv tracking sheet and /data/channel-plan.csv.

## Member Contributions
| Member Name | Contribution | File/Feature Updated | GitHub Evidence |
|---|---|---|---|
| Hein Htet Aung | Landing copy, marketing messages, GTM plan | /docs/landing-page-content.md, marketing-message.md, go-to-market-plan.md | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commit/3587a76958fef9819e206ac784d6409e3fcad31b) |
| Thiri Shoon Lae Oo | Landing page design + build, screenshots | /landing-page/index.html, style.css | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Eimyat Yadanar Mon | CTA/metrics script, acquisition metrics + CSVs, README | /landing-page/script.js, /docs/acquisition-metrics.md, /data/*.csv | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

## Requirements Addressed
Landing page communicates FR-01/FR-02 value accurately; links to the v0.3 prototype (all FRs); responsible data statement follows FR-15 and Lab 09 decisions (R-06 wording, no data collection on the page).

## Problems Found
- No backend means no real cross-channel analytics — solved honestly: browser-local demo counters labelled as such, real numbers tracked manually in the CSV.
- Course timing vs. real move-out peak season — measured with classmates/dorm students now; peak-season plan documented for the final report.

## Next Action Before Lab 13
Commit landing page + docs, capture landing-page.png and call-to-action.png, verify Pages serves /landing-page/, soft-launch to class chat, then prepare Lab 13 sales scenario, demo script, and user-testing plan (recruit from AM-04 respondents).

## Lab Topic
Sales Scenario, Demo Script, and User Testing (working dates 28–29 July 2026)

## Group Case
Gravity — RSU Student Secondhand Marketplace

## Work Completed Today
- sales-scenario.md: realistic Su Su move-out scenario with pain points from Lab 03 evidence, value message, and a pitch conversation.
- demo-script.md: 10-step, 8-minute screen-by-screen script with presenter roles, requirement IDs on every step, timing, and a contingency plan (local fallback + reset button).
- user-testing-plan.md: 5 testers (incl. 1 returning Lab 08 tester), tasks T01–T08 with success criteria — explicitly re-testing the two Lab 08 confusion points against baselines (contact flow 2/5, Reserved misread) and adding the FR-14 real-device test.
- Ran the user-testing session (29 July, 5 testers incl. one returning Lab 08 tester): 40 task runs recorded in /data/user-testing-results.csv, summarized in user-testing-results.md. Results: 90.0% strict task success (93.75% counting partials), average ease 4.62/5 (baseline 4.30). **Both Lab 08 fixes verified: contact-flow comprehension 4/5 (was 2/5), Reserved 5/5 (was misread). Mobile T08 passed 5/5 on a real device — FR-14 now Completed.**
- final-improvement-list.md: IMP-01–05 pre-seeded (metrics data, FR-14 evidence — now Done, link check, screenshots, issue cleanup); four user-test findings added as IMP-06–09 (detail-view trust line, duplicate-warning confirm dialog, visual polish, My Listings request badge) + IMP-10 deferred.
- pitch/demo-outline.md and prototype/final-demo-link.md (updated demo access incl. version history).
- diagrams/demo-flow.mmd for the demo-flow.png screenshot.

## Member Contributions
| Member Name | Contribution | File/Feature Updated | GitHub Evidence |
|---|---|---|---|
| Hein Htet Aung | Sales scenario, demo script narration parts, demo outline | /docs/sales-scenario.md, demo-script.md, /pitch/demo-outline.md | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Thiri Shoon Lae Oo | User-testing plan + running the session, results, screenshots | /docs/user-testing-plan.md, user-testing-results.md, /data/user-testing-results.csv | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Eimyat Yadanar Mon | Final-improvement list, demo link doc, demo-flow diagram, README | /docs/final-improvement-list.md, /prototype/final-demo-link.md, /diagrams/demo-flow.mmd | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

## Requirements Addressed
Demo script covers FR-01–12, FR-15, FR-16 explicitly; testing tasks target FR-01–08, FR-10–12, FR-14/NFR-01 (real-device), FR-15.

## Decisions Made
1. Re-test with 5 testers including one returning Lab 08 tester for direct before/after comparison.
2. Demo runs on live GitHub Pages with local fallback; reset-to-seed before every run.
3. Every user-test issue becomes an IMP row with priority — nothing fixed silently.

## Problems Found
- One tester (UT-01) found the detail view information-dense and failed the trust-judgment task — the only failure of the session; fix scheduled as IMP-06.
- The duplicate-listing warning's press-again pattern confused one tester (UT-04) — replaced with an explicit confirm dialog (IMP-07).
- Two testers called the visual style dated — polish pass scheduled (IMP-08), no layout changes before the final demo.

## Next Action Before Lab 14
Ship IMP-06 and IMP-07 (Important) and IMP-08/09 if time allows; log acquisition soft-launch numbers (IMP-01); capture demo-flow.png and user-testing-evidence.png; final link check (IMP-03); update feature-implementation-status.md FR-14 → Completed; then Lab 14: final release, final report, reflection (due 31 July).

## Lab Topic
Final MVP Release and Venture Pitch (working dates 30–31 July 2026)

## Group Case
Gravity — RSU Student Secondhand Marketplace

## Work Completed Today
- Released prototype v1.0: v0.3 + all four Lab 13 user-test fixes (IMP-06 detail-view trust line, IMP-07 duplicate confirm dialog, IMP-08 visual polish, IMP-09 pending-request badge + section reorder) — regression-tested (contact flow, posting, dashboard all pass).
- Final requirement audit: /docs/requirement-traceability-matrix.md + /data/final-requirement-traceability.csv — full E→FR→US→F→S→screenshot chain; all FR-01–16 and NFR-01–05 Completed; the single FR-15 clarification (Issue #47) documented as an approved change.
- /docs/final-prototype-report.md: problem, evidence, solution, traceability, data handling, both validation rounds, metrics, responsible design, limitations, business model.
- /docs/final-demo-script.md (~6:45 with roles and contingency) and /pitch/final-pitch-outline.md.
- /docs/final-reflection.md with individual contributions; /data/member-contribution.csv.
- /docs/final-submission-checklist.md; /data/final-sample-data.csv (generated from data.json); /prototype/final-prototype-link.md; /diagrams/final-demo-flow.mmd.

## Member Contributions
| Member Name | Contribution | File/Feature Updated | GitHub Evidence |
|---|---|---|---|
| Hein Htet Aung | Final report, pitch outline, reflection, README final update, submission checklist | /docs, /pitch, README.md | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Thiri Shoon Lae Oo | v1.0 UI fixes (IMP-06/08/09 layout), final screenshots, demo rehearsal | /prototype/index.html, style.css, /screenshots | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |
| Eimyat Yadanar Mon | v1.0 logic fixes (IMP-07/09), regression tests, traceability CSV, sample data, demo-flow diagram | /prototype/script.js, /data, /diagrams | [Commit](https://github.com/ruinogenesis/ICT111-Gravity-MVP/commits/main/) |

## Requirements Addressed
Final audit of all FR-01–16 + NFR-01–05: Completed. FR-14 flipped from Partially Completed after the Lab 13 real-device pass.

## Decisions Made
1. Ship all four Lab 13 fixes in v1.0 (not just the two Important ones) — all were small and regression-tested.
2. data.json remains the single source of truth; final-sample-data.csv is generated from it, not maintained separately.
3. Historical prototypes (v0.1 demo, Lab 05 wireframe) stay in the repo as graded evidence.

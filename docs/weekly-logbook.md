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
- GitHub repository link: [paste your repository URL here]
- Screenshot: folder structure and Issues screenshots saved in /screenshots
- File created: README.md, docs/team-profile.md, docs/idea-log.md, docs/weekly-logbook.md, docs/problem-notes.md
- Commit link: [paste a link to your commit history here]

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
- GitHub issue screenshot: [paste screenshot link here]
- Commit link: [paste a link to your commit history here]

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
- Date: (fill in lab date)

### 1. Work Completed Today
| Member Name | Contribution | GitHub Evidence (Commit/Issue/PR Link) |
|---|---|---|
| Hein Htet Aung | Wrote user persona and updated README + logbook; reviewed traceability | (paste commit/issue link) |
| Thiri Shoon Lae Oo | Wrote user stories with acceptance criteria; drew user flow and use case diagrams | (paste commit/issue link) |
| Eimyat Yadanar Mon | Mapped fixed FR-01–16 to Gravity in system-requirements.md; built MVP feature list | (paste commit/issue link) |

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
| Choose prototype platform and prepare initial screen skeleton per FR-13 | Eimyat Yadanar Mon | Before Lab 05 | (create new issue) |

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
| Hein Htet Aung | Product concept, README + logbook update, screenshot exports | (paste commit link) |
| Thiri Shoon Lae Oo | Wireframe screens, usability checklist review, user flow | (paste commit link) |
| Eimyat Yadanar Mon | Feature-requirement mapping, sample dataset, clickable draft testing | (paste commit link) |

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

### Date
(fill in lab date)

### Members Present

| Member Name | Contribution Today | GitHub Evidence / Commit / File Updated |
|---|---|---|
| Hein Htet Aung | Business Model Canvas, README + logbook update | docs/business-model-canvas.md (paste commit link) |
| Thiri Shoon Lae Oo | Feature-value mapping, system architecture + data flow diagrams | docs/feature-value-mapping.md, diagrams/*.mmd (paste commit link) |
| Eimyat Yadanar Mon | Technical architecture decision, data structure, sample datasets | docs/technical-architecture.md, docs/data-structure.md, data/*.csv (paste commit link) |

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
- Date: (fill in lab date)
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
| Hein Htet Aung | Experiment plan, critical assumptions, README + logbook | (paste commit link) |
| Thiri Shoon Lae Oo | Experiment script, feedback form, test-user recruitment plan | (paste commit link) |
| Eimyat Yadanar Mon | Success metrics, demo prototype, CSV templates, experiment flow diagram | (paste commit link) |

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
- Lab date: (fill in)

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
| Hein Htet Aung | Ran sessions, validation summary, README/logbook | (commit link) |
| Thiri Shoon Lae Oo | Observer/recorder, test-user notes, feedback capture | (commit link) |
| Eimyat Yadanar Mon | Metrics, analytics insights, MVP decision | (commit link) |

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


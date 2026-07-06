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

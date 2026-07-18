# MVP Experiment Plan — Gravity

## 1. Group and Project Information
- Group name: Gravity
- Project title: Gravity — RSU Student Secondhand Marketplace
- Repository link: https://github.com/ruinogenesis/ICT111-Gravity-MVP
- Main target user: RSU student sellers under move-out pressure (persona Su Su); student buyers as secondary users
- Prototype platform: Frontend + localStorage/JSON (per /docs/technical-architecture.md)

## 2. Experiment Objective
We want to test whether RSU students can complete the core marketplace workflow — post a listing, find a specific item with search/filter, understand statuses, and understand the reveal-after-agree contact process — without help, and whether they say they would use Gravity instead of Facebook/LINE groups.

## 3. Requirement Scope for the Experiment
| Requirement ID | Requirement Summary | Related Screen/Feature | Tested in This Experiment? |
|---|---|---|---|
| FR-01 | Problem-specific landing screen | Home (F01) | Yes — T1 |
| FR-02 | Primary user pathway | Full flow | Yes — T2–T6 |
| FR-03 | User input / data submission | Create Listing form (F03) | Yes — T2 |
| FR-05 | View records list | Browse listings (F04) | Yes — T3 |
| FR-06 | Search / filter / category | Search + filter (F05) | Yes — T3 |
| FR-07 | Detail view | Listing detail (F06) | Yes — T4 |
| FR-08 | Status tracking | Status badges (F07) | Yes — T5 |
| FR-10 | Validation | Required-field errors (F10) | Yes — T2 |
| FR-11 | Confirmation / feedback | Success messages (F10) | Yes — T2 |
| FR-15 | Privacy / responsible data | Reveal-after-agree (F08) | Yes — T6 |
| FR-09, FR-12 | Admin, dashboard | Admin, Dashboard | No — team-facing; tested internally in the sprint |

## 4. MVP Experiment Type
Selected experiment type: **Simple web prototype (HTML/CSS/JS with simulated records) + form-based simulation.**

Reason for selection: our riskiest assumptions are about the input/submission workflow (will busy sellers complete a structured form?) and findability (can buyers locate an item quickly?). A simple web prototype collects exactly the evidence we need — clickable workflow, stored/simulated records, validation, and feedback messages — and matches our chosen architecture, so everything learned transfers directly to the implementation sprint. Demo: /prototype/mvp-demo.html.

## 5. Test Users
| Test User Group | Number of Testers | Why They Are Relevant |
|---|---:|---|
| Graduating / international students (seller side) | 2 | Match the primary persona — move-out pressure (E02) |
| First-year or continuing students (buyer side) | 2 | Match the buyer segment (CS02) |
| Student with no secondhand-trading experience | 1 | Tests first-time clarity |

Tester details: /data/test-users.csv.

## 6. Experiment Procedure Summary
Each tester is tested individually for ~10 minutes on their own phone or a laptop: read the opening script; tester performs tasks T1–T6 from /docs/experiment-script.md while thinking aloud; observer records completion, time, help needed, and confusion in /data/experiment-results.csv; tester fills the feedback form; short open discussion. No hints unless the tester is fully stuck (recorded as "help needed").

## 7. Expected Learning
After the experiment we decide, using /docs/success-metrics.md: build (metrics met → proceed), revise (some fail → fix labels/fields/flow first), or revisit (most fail → re-examine requirements against Lab 03 evidence). We especially expect to learn whether the reveal-after-agree contact concept (A-04) is understood.

# Lab 02 Opportunity Scanning

## Ideas Reviewed from Lab 1
| Idea | Problem Area | Target User | Current Alternative | Initial Technology Direction |
|---|---|---|---|---|
| Idea 1 | Shared group expenses are hard to track and settle | Students, roommates, friend groups | Group chat, one person's spreadsheet | HTML/CSS/JS + Google Sheet |
| Idea 2 | Students lose track of credits and prerequisites | University students | PDF curriculum sheets, asking advisors | HTML/CSS/JS + JSON curriculum data |
| Idea 3 | Content is scattered across many platforms | Student creators, micro-influencers | Notes apps, memory, scattered sheets | HTML/CSS/JS kanban + Google Sheet |

## Opportunity Discovery Table
| No. | Observed Problem | Target User | Current Alternative | Possible IT Solution | Feasible Technology |
|---|---|---|---|---|---|
| 1 | Students moving in/out of RSU need to sell or buy used furniture, appliances, and books, but listings are buried in messy Facebook/LINE groups with no search | RSU students (movers, new students, students living in apartments and condos) | Scattered Facebook/LINE buy-sell groups, word of mouth | Student secondhand marketplace that connects buyers and sellers (no inventory, no payment handling) | HTML/CSS/JS + Google Sheet/DB for listings |
| 2 | Students lose track of completed/remaining credits and prerequisite chains, risking delayed graduation | University students | PDF curriculum sheets, advisor meetings | Degree progress & prerequisite tracker | HTML/CSS/JS + JSON curriculum data |
| 3 | Roommates and friend groups forget who paid shared costs and who still owes money | Students, roommates | Group-chat messages, one person's spreadsheet | Shared expense splitter | HTML/CSS/JS + Google Sheet |
| 4 | First-year students miss assignment deadlines because reminders are scattered across LMS, chat, and email | First-year students | Manual notes, screenshots, chat reminders | Deadline reminder dashboard | HTML/CSS/JS + Google Sheet |
| 5 | Small creators forget what they posted where and miss repurposing chances | Student creators, micro-influencers | Notes apps, memory, scattered sheets | Content planner board | HTML/CSS/JS kanban + Google Sheet |
| 6 | Small cafes lose sales because stock is tracked manually and updated irregularly | Cafe owners | Paper notes or memory | Inventory tracking web app | Google Form + Google Sheets dashboard |

## Technology Feasibility Mapping
| Idea | Prototype Type | Tools Needed | Data Needed | Difficulty | Feasible? |
|---|---|---|---|---|---|
| 1. Student Secondhand Marketplace | Web app (listings) | HTML/CSS/JS, Google Sheet/DB | Listings, categories, seller contact | Low / Medium | Yes |
| 2. Degree Progress Tracker | Web app dashboard | HTML/CSS/JS, JSON curriculum file | Course list, credits, prerequisites | Medium | Yes |
| 3. Shared Expense Splitter | Web app | HTML/CSS/JS, Google Sheet | Group members, expenses | Low | Yes |
| 4. Deadline Reminder Dashboard | Web app | HTML/CSS/JS, Google Sheet | Course deadlines, dates | Low | Yes |
| 5. Content Planner | Web app (kanban) | HTML/CSS/JS, Google Sheet | Content items, platforms, status | Medium | Yes |
| 6. Cafe Inventory Tracker | Form + dashboard | Google Form, Google Sheets | Items, stock counts | Low | Yes |

## NUF Scoring Summary
Full scoring is in `/data/opportunity-scoring.xlsx` (New, Useful, and Feasible scored 1-5, with Total and Rank formulas).

| Rank | Idea | Total |
|---|---|---|
| 1 | Student Secondhand Marketplace (**selected**) | 13 |
| 2 | Degree Progress Tracker | 12 |
| 3 | Shared Expense Splitter | 11 |
| 4 | Deadline Reminder Dashboard | 10 |
| 5 | Content Planner | 9 |
| 6 | Cafe Inventory Tracker | 8 |

The Student Secondhand Marketplace scored highest because it solves a real, recurring problem for a clear user group we belong to, it is easy to validate with fellow students, and the connect-only model (no inventory and no payment processing) keeps it very feasible and free of advanced cybersecurity requirements. It is documented in detail in `/docs/selected-opportunity.md`.

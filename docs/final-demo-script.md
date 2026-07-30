# Final Demo Script — Gravity v1.0 (Lab 14, 5–7 minutes)

## Setup (before the audience arrives)
Open https://ruinogenesis.github.io/ICT111-Gravity-MVP/prototype/index.html in the demo browser → press **Reset demo data**. Backup: local /prototype/index.html (identical seed). Landing page in a second tab.

## Presenter Roles
| Member | Role in Demo | Part Presented |
| --- | --- | --- |
| Hein Htet Aung | Narrator — problem, value, closing | Steps 1, 8 |
| Thiri Shoon Lae Oo | Buyer-side driver | Steps 4–5 |
| Eimyat Yadanar Mon | Seller/admin-side driver | Steps 2–3, 6–7 |

## Demo Flow
| Step | Time | Screen / Feature | What Presenter Says | Requirement ID |
| --- | --- | --- | --- | --- |
| 1 | 0:45 | Landing page → prototype home | "Every semester RSU students throw away working desks and fridges while new students buy the same things new — because selling happens in scattered, unsearchable group chats. 11 of 15 students we interviewed confirmed it. Gravity is the marketplace for verified RSU students only. This is our live landing page — and this button is the product." | FR-01 |
| 2 | 0:45 | Register | "The gate first: a gmail address — rejected. An RSU email — accepted, then a one-time in-person ID check. We store a yes/no flag, never the ID. Everyone you'll see on this marketplace is a real, verified RSU student." | FR-10, FR-15, NFR-04 |
| 3 | 1:00 | Sell form (as Su Su) | "Su Su flies home in two weeks. She posts her desk: title, category, price, condition, a campus pickup zone from a dropdown — no room numbers — photo, post. Validation catches errors; if she double-posts, an explicit confirm dialog catches it. One listing, under a minute, findable by every student on the platform." | FR-03, FR-10, FR-11 |
| 4 | 1:00 | Browse + detail (as buyer Nine) | "Nine needs a desk under 1,000 baht: search, category, price filter, sort — found. The detail view: everything he needs to decide, the verified-seller trust line — and deliberately no phone, no LINE, no email anywhere public." | FR-05, FR-06, FR-07, FR-15 |
| 5 | 0:45 | Request contact | "He requests contact, and the explainer says exactly what happens next — in our first user test only 2 of 5 people understood this flow; after our fix, 4 of 5. Evidence-driven iteration, not guesswork." | FR-02, FR-11 |
| 6 | 1:00 | My Listings (as Su Su) | "Su Su sees the pending request — note the badge. She accepts: now, and only now, both sides see each other's RSU email. She controls her statuses right here — Reserved while they talk, Sold when the desk is gone. Buyers always see the truth." | FR-02, FR-08 |
| 7 | 1:00 | Admin + Dashboard | "Behind the marketplace: the admin verifies accounts and removes spam from a separate, labelled screen. And the dashboard our team actually uses: live metrics computed from real records — sell-through rate, average days to sold, request acceptance rate. The product measures itself." | FR-09, FR-12 |
| 8 | 0:30 | Closing | "Sixteen fixed requirements, all implemented, all traceable — the matrix is in the repo. Validated twice with real students: 93% task success, ease score 4.6 out of 5. Gravity: post once, be found fast, connect safely — verified students only." | FR-16 |

Total ≈ 6:45.

## Contingency
Live URL fails → local file. Polluted data → Reset demo data (instant seed restore — and itself a demonstrable resilience feature). Question about simulated parts → answer honestly per technical-architecture.md §5: auth, email confirmation, and photo upload are simulated at documented demo fidelity; everything else is functional.

# Demo Script — Gravity (v0.3)

## Demo Objective
Prove in under 8 minutes that a verified RSU student can post an item once, another student can find it, check its live status, and make safe contact — and that every screen traces to the fixed requirements. Demo runs on the live GitHub Pages prototype from one prepared browser (reset to seed data beforehand).

Demo URL: https://ruinogenesis.github.io/ICT111-Gravity-MVP/prototype/index.html
Backup: local /prototype/index.html (identical embedded seed).

## Presenter Roles
| Member | Role in Demo | Part Presented |
| --- | --- | --- |
| Hein Htet Aung | Narrator / problem & value | Steps 1–2, 10 (opening, landing page, closing) |
| Thiri Shoon Lae Oo | Buyer-side driver | Steps 5–7 (browse, detail, contact request) |
| Eimyat Yadanar Mon | Seller/admin-side driver | Steps 3–4, 8–9 (register, post, My Listings, admin, dashboard) |

## Demo Flow
| Step | Screen / Feature | What Presenter Says | Requirement ID | Expected User Value |
| --- | --- | --- | --- | --- |
| 1 | Landing page (Lab 12) | "Su Su flies home in two weeks with a room full of things she can't take. Today this means buried posts in three Facebook groups. Gravity fixes it — here's our public landing page: problem, who it's for, and one button to the product." | FR-01 | Instant understanding of problem + audience |
| 2 | Prototype homepage | "Inside the product: same promise, two actions — Browse or Sell. Note the safer-meetups note: we connect verified students; we don't overpromise safety." (Click through from landing CTA.) | FR-01, FR-02 | Clear entry point |
| 3 | Register screen | "Only @rsu.ac.th emails work — watch a gmail get rejected. Verification finishes with a one-time in-person ID check; we store a yes/no flag, never the ID. That's the trust foundation." (Show rejection, then success.) | FR-10, FR-15, NFR-04 | Trust: everyone is a real RSU student |
| 4 | Sell form (as Su Su) | "Su Su posts her desk: title, category, price, condition, a pickup zone — a dropdown, so nobody types a room number — photo, done. Validation catches mistakes; the duplicate warning catches double-posts." (Submit; show success message.) | FR-03, FR-10, FR-11 | Post once, under a minute |
| 5 | Browse (as buyer Nine) | "Nine just moved in and needs a desk under 1,000 baht. Search 'desk', filter Furniture, price max 1000 — there it is, with live status. Sold items are hidden by default." | FR-05, FR-06 | Find the exact item in seconds |
| 6 | Detail view | "Full details, the seller's verified badge — and notice what's *not* here: no phone, no LINE, no email. Contact info never appears on public pages." | FR-07, FR-15, NFR-02 | Informed decision without exposing anyone |
| 7 | Request contact + explainer | "Nine presses Request contact. The explainer tells him exactly what happens next — this was our biggest Lab 08 confusion, now fixed and re-tested." | FR-02, FR-11, FR-15 | No mystery after the click |
| 8 | My Listings (as Su Su) | "Su Su sees the request and accepts. Both sides now see each other's RSU email — only now, only them. She controls her statuses here too: Reserved while they talk, Sold when it's gone." (Accept; mark desk Reserved→Sold.) | FR-02, FR-08, US-06, US-07 | Mutual consent + seller control |
| 9 | Admin view + Dashboard | "Behind the scenes: admin verifies accounts and removes spam — separate, labelled screen. And the dashboard: live product metrics — total listings, sell-through rate, average days to sold — computed from real records." | FR-08, FR-09, FR-12 | Clean marketplace + measurable activity |
| 10 | Closing | "Every screen you saw maps to the sixteen fixed requirements — the mapping is in feature-implementation-status.md. Validated at 93.3% task success in Lab 08, revised, re-tested this week. Gravity: post once, be found fast, connect safely — verified students only." | FR-16 | Traceability + confidence |

## Timing
Steps 1–2: 1.5 min · Steps 3–4: 2 min · Steps 5–7: 2 min · Steps 8–9: 2 min · Step 10: 30 s. Total ≈ 8 min.

## Contingency
If the live URL fails, switch to the local file (identical seed). If localStorage is polluted from rehearsal, press "Reset demo data" — it restores the seed instantly (this is itself a demonstrable resilience feature, risk R-09).

## Closing Statement
"Students throw away working furniture while other students buy the same things new, two buildings apart. Gravity closes that loop inside the RSU community — one searchable market, verified people, private until both sides agree. Everything we showed is live, tested with real users, and traceable to the requirements we were given in Lab 04."

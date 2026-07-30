# Final Pitch Outline — Gravity (Lab 14)

## 1. Problem (with evidence)
Every term-end, RSU students moving out lose money and time: buy/sell posts buried in scattered Facebook/LINE groups (11/15 interviewed, E01), 30–90 minutes wasted per item (E02), working furniture discarded (7/15, E03) — while incoming students buy the same items new, two buildings away. Trust in meeting strangers is the hidden blocker (E05).

## 2. Target User
Sellers: graduating + international RSU students on departure deadlines (persona Su Su). Buyers: new/continuing students furnishing affordably. Verified RSU students only — both sides.

## 3. Value Proposition
Post once, be found fast: turn what you can't take into money, safely, inside the RSU community. For buyers: one searchable place with live availability and verified counterparts.

## 4. Prototype (live demo — /docs/final-demo-script.md, ~6:45)
Landing page → RSU-email gate → post a listing → search/filter/find → detail with trust line, zero public contact info → request contact with explainer → seller accepts → mutual RSU-email reveal → status to Sold → admin + live metrics dashboard. All 16 fixed requirements implemented (traceability matrix in repo). v1.0, live on GitHub Pages.

## 5. Business Model
Free student connector — no payments, no delivery, no inventory (deliberate Lab 02 scope decision; near-zero cost on GitHub Pages). Trust (verification) is the differentiator, not fees. Future sustainability documented, not promised: campus-partner sponsorship, featured listings at move-out peak.

## 6. Validation Results
Lab 08 (5 testers): 93.3% task success, 4.30 feedback, 4.40 interest → "continue with minor revisions". Lab 13 re-test (5 testers, stricter 8-task set): 90% strict / 93.75% with partials, ease 4.62; the two Lab 08 defects verified fixed (contact flow 2/5→4/5, Reserved →5/5); mobile passed on a real device. All four Lab 13 findings fixed in v1.0.

## 7. Go-to-Market
Intercept the problem where it lives, when it peaks: LINE dorm/class groups (where the chaos is today), QR posters in dorm lobbies during move-out weeks, Instagram reshares, class-chat feedback loop. Channels, messages, and acquisition metrics AM-01–06 defined and tracked (Lab 12).

## 8. Responsible Design (30 seconds, differentiator)
Minimal data by design: no phone/social handles ever collected (RSU email is the single reveal channel), no ID images stored, PDPA-aligned; XSS found and fixed in code review; zero third-party assets; AI documentation assistance disclosed. Risk register R-01–09, all mitigated.

## 9. Next Improvement (post-course)
Real backend + authentication, real photo upload, then the parked differentiators: AI listing helper, ratings after transaction volume. Pilot plan: one dorm building at the December move-out peak.

## 10. Close
"We didn't build an idea — we built the requirement-based, twice-tested answer to a problem 15 classmates told us they have. Everything we claimed tonight is in the repository, traceable from evidence to requirement to screen to test result."

Links: repo github.com/ruinogenesis/ICT111-Gravity-MVP · prototype + landing page live on GitHub Pages.

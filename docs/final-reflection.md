# Final Reflection — Gravity

## 1. What We Built
A working, requirement-based MVP of a verified-students-only secondhand marketplace for RSU: 8 screens, a two-sided contact flow with mutual-consent email reveal, live product metrics, a public landing page, and a documentation trail that traces every feature back to evidence from 15 real students. Version history: v0.1 experiment demo (Lab 07) → v0.2 Sprint 1 (Lab 10) → v0.3 Sprint 2 (Lab 11) → v1.0 final release with all user-test fixes (Lab 14).

## 2. What We Learned About Users
Users don't read — they act. Our reveal-after-agree contact flow was obvious to us and opaque to 3 of 5 testers until we added a "what happens next" explainer at the exact moment of the action. The Reserved status taught us the same: one tester tried to bid on a Reserved item not because the label was missing but because the *consequence* wasn't stated. And feedback splits: the same UI one tester called "insane web" (positive) another called "old school" — we learned to fix measured failures first and treat taste comments as polish, not direction.

## 3. What We Learned About Requirements
Fixed requirements were a feature, not a constraint: FR-01–16 forced completeness (we would have skipped the dashboard without FR-12) and gave every debate a referee. The discipline of "no silent changes" mattered once, concretely: narrowing FR-15's contact reveal to RSU-email-only went through a documented note, a GitHub issue (#47), and three recorded approvals — and that paper trail later answered a privacy question in seconds. Traceability is not bureaucracy; it is how a three-person team stays honest.

## 4. What We Improved After Testing
From Lab 08: contact-flow explainer, Reserved clarity, photo placeholders, expanded categories + price filter — verified fixed in Lab 13 (comprehension 2/5 → 4/5, Reserved → 5/5). From Lab 13: detail-view trust line (the one failed task), duplicate-warning confirm dialog, visual polish, pending-request badge — shipped in v1.0 and regression-tested. From the Lab 09 code review: the innerHTML XSS fix, re-tested in both later rounds.

## 5. What Was Difficult Technically
Simulating a two-sided marketplace with no backend was the hardest honest problem: contact requests need two parties, so we built a labelled role switcher and said "simulated" on-screen rather than faking it. localStorage brought real constraints — per-browser data, no photo storage at realistic sizes, fetch() blocked on file:// — each solved with documented workarounds (seed self-heal + reset, placeholders, embedded fallback kept byte-identical to data.json). Rendering all user text via textContent after finding our own XSS was a small change with a real lesson: security bugs hide in convenient APIs.

## 6. What We Would Improve Next
Real backend and authentication first — everything simulated today becomes real (two-browser contact flow, actual email confirmation). Then real photo upload (the single most-requested feature in both test rounds), the AI listing helper we parked in Lab 04 (F13), and ratings once transaction volume exists (F16). As a venture: pilot with one apartment building at the December move-out peak and measure PM-03 sell-through and PM-06 days-to-sold against the group-chat baseline.

## 7. Individual Contributions
| Member | Contribution | Evidence Link/Commit/Issue |
|---|---|---|
| Hein Htet Aung | Problem definition and evidence chain, requirements docs, legal-ethical review, sales/GTM/pitch materials, README + logbook maintenance | /docs commits; Issues #44, #47; README history |
| Thiri Shoon Lae Oo | Wireframes → all screen layouts and CSS, both validation rounds (design, facilitation, results), privacy review, screenshots | /prototype HTML/CSS commits; Issues #49, #51; /screenshots |
| Eimyat Yadanar Mon | All JavaScript (data layer, interactions, metrics engine), security fixes, data.json, business model, risk register | /prototype/script.js commits; Issues #42, #46, #48, #52 |

Full machine-readable table: /data/member-contribution.csv

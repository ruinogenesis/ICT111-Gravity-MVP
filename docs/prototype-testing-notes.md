# Prototype Testing Notes — Gravity (Lab 11)

## Test Environment
- Prototype link or folder: /prototype/ (index.html, style.css, script.js, data.json) — v0.3
- Browser/device used: Chrome desktop + automated DOM test harness (jsdom); mobile check via responsive mode
- Tester role: team self-test, all three demo roles (buyer / seller / admin)
- Test date: 23 July 2026

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open prototype, land on Home | Title, problem, target user, Browse/Sell actions, safer-meetup note visible | As expected | Pass | — | — |
| T-02 | Submit listing | Sell form: fill all fields, submit; also submit with missing field and price 0 | Valid: saved + "posted successfully"; invalid: clear error, nothing saved | As expected; duplicate warning fires on same title+category | Pass | — | — |
| T-03 | View record list | Open Browse | 8 seed listings as cards with photo, price, status, verified seller | As expected | Pass | — | — |
| T-04 | Search/filter/sort | Keyword "desk"; category chip Textbooks; price max 300; sort price low→high | Only matching cards; empty state when nothing matches; correct sort order | As expected — cheapest first (Desk lamp 150 THB) | Pass | — | — |
| T-05 | Detail view | Click a card | Full fields, verified badge, no contact info, Reserved explainer on Reserved items | As expected | Pass | — | — |
| T-06 | Status update (seller self-service — new in v0.3) | As Seller, My listings → Mark Sold on own item | Status changes everywhere; soldDate recorded for PM-06 | As expected | Pass | — | — |
| T-07 | Dashboard metrics | Open Dashboard after T-06 | Stat cards, 2 bar charts, PM-01–07 cards live-updated, PM-08 validation cards | As expected — sell-through and status counts update immediately | Pass | — | — |
| T-08 | My listings visibility (new in v0.3) | Switch roles buyer/seller/admin on My listings | Seller sees own items + incoming requests; buyer sees sent requests; admin gets pointer to Admin view | As expected | Pass | — | — |
| T-09 | Contact flow both sides (new in v0.3) | As Buyer request contact → as Seller accept in My listings → check both sides | Explainer after request; after accept, each side sees only the other's RSU email | As expected (FR-15: email only) | Pass | — | — |
| T-10 | Register validation | Register with gmail address, then with @rsu.ac.th | Non-RSU rejected with message; RSU accepted → pending in-person check | As expected | Pass | — | — |
| T-11 | Admin functions | Verify pending account; decline request; remove listing | Verify sets boolean only; remove asks confirmation | As expected | Pass | — | — |
| T-12 | data.json load (new in v0.3) | Open via local file and via web server | file://: embedded seed used (fetch blocked by browser); http: data.json loads | As expected — fallback works | Pass | fetch cannot run on file:// | Documented in script.js comment; GitHub Pages serves data.json correctly |
| T-13 | Security regression | Post listing titled `<b>test</b>` | Renders as literal text everywhere incl. My listings | As expected (textContent everywhere) | Pass | — | — |

## Summary of Issues
No open defects. Two design limitations remain by scope (documented in implementation-plan.md): photo upload is placeholder-only (localStorage size limits), and roles are simulated (no real authentication in a frontend-only prototype). One environment note: seed loading from data.json requires the page to be served over http(s) — the embedded fallback covers local-file use, and the two seeds are kept identical.

## Improvements Completed During Lab 11
1. My Listings screen (S-08): seller status self-service (US-07 now works without admin), seller accept/decline of contact requests (US-06 as designed), buyer view of sent-request status — closes the last Lab 08 contact-flow visibility gap. Issues #48, #49, #50.
2. Product metrics PM-01–PM-08 on the dashboard with two CSS bar charts, computed live from localStorage (FR-12 strengthened). Issue #52.
3. data.json as documented seed data source with file:// fallback (FR-04 strengthened). Issue #51.
4. Sort options on Browse (newest / price asc / price desc) (FR-06 strengthened). Issue #39 follow-up.
5. soldDate tracking on status changes to power PM-06 average-time-to-Sold. Issue #48.

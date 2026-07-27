# Landing Page Content — Gravity

## Project Title
Gravity — RSU Student Secondhand Marketplace

## Target User
RSU students in two roles: sellers moving out (graduating, exchange, and leaving students under time pressure — primary persona Su Su) and buyers moving in (new and continuing students looking for affordable used furniture, appliances, and textbooks).

## Headline
"Moving out of RSU? Don't throw it away — sell it in minutes."

## Subheadline
Gravity is the secondhand marketplace only for verified RSU students. Post your furniture, appliances, and textbooks once — the students moving in are already looking for them.

## Problem Statement
Based on Lab 03 evidence (15 respondents): buy/sell posts are scattered across unsearchable Facebook and LINE groups (11/15, E01), sellers under move-out time pressure spend 30–90 minutes per item (E02), and working items end up given away or discarded (7/15, E03) while new students buy the same things new. Lab 08 validation confirmed the solution direction: 93.3% task success, 4.40/5 interest.

## Solution Description
One searchable, student-only marketplace: verify once with your RSU email + one-time in-person ID check, post or browse with categories/price filters/campus pickup zones, request contact and connect only after both sides agree (RSU email only), then meet at busy campus spots. Gravity connects students — no payments, no delivery, no middleman.

## Key Features

| Feature | Requirement ID | User Value | Prototype Screen/Module |
| --- | --- | --- | --- |
| Verified RSU students only | FR-09, FR-15, NFR-04 | Both sides know they're dealing with a real student | S-07 Register + S-06 Admin |
| Search, categories, price filter, sort | FR-05, FR-06 | Find the exact item in seconds, not scrolling group history | S-03 Browse |
| Live item status (Available / Reserved / Sold) | FR-08 | Nobody wastes a message on a gone item | S-03/S-04 + My Listings |
| Contact revealed only after mutual agreement | FR-02, FR-15 | No sharing personal accounts with strangers up front | S-04 Detail + My Listings |
| Marketplace dashboard with live metrics | FR-12 | See market activity in real time | S-05 Dashboard |

## Benefits
Sellers recover money instead of discarding working items, even on a tight move-out timeline. Buyers furnish a room for a fraction of new prices from sellers they can trust. Both skip the chaos of scattered group chats — and contact details stay private until both choose to connect.

## Call-to-Action
Primary: **"Try the demo →"** (links to the working prototype on GitHub Pages). Secondary: **"I'd use this — count me in"** (interest counter, browser-only). The Lab 13 testing session will recruit from students who click through.

## Responsible Data Message
Shown verbatim in the Trust & privacy section: minimal collection (display name + RSU email in the product; the landing page itself collects nothing personal), email revealed only to a mutually-agreed party, no ID images ever stored, demo runs on fictional sample data in the visitor's own browser. The interest counter is localStorage-only and says so on the page.

## Accuracy check (Lab 12 rule: no promises the prototype can't demonstrate)
Every claim maps to a working v0.3 feature; photo support is described as part of posting (placeholder fidelity in the demo) and no payment/delivery/guarantee language appears anywhere. Safety wording follows the Lab 09 R-06 decision: "busy campus spots", never "guaranteed safe".

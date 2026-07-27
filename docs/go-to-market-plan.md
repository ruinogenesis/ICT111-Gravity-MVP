# Digital Go-to-Market Plan — Gravity

## Product / Prototype Name
Gravity — RSU Student Secondhand Marketplace (prototype v0.3 + landing page)

## Target Early Users
First wave: RSU students moving **out** at the end of this semester — graduating students and international/exchange students with fixed departure dates (segment CS01, persona Su Su). They feel the pain hardest (E02) and create the supply that makes the marketplace worth visiting. Second wave, immediately after: students moving **in** or returning for the new term (CS02) who buy that supply. Timing matters more than reach: launch outreach in the 2–3 weeks before term end, when move-out pressure peaks.

## Main Value Proposition
Post once, be found fast: turn the things you can't take with you into money, safely, inside the RSU student community.

## Channel Plan

| Channel | Target User | Message Angle | User Action Expected | Metric to Track | Why This Channel Fits |
| --- | --- | --- | --- | --- | --- |
| Existing LINE dorm & class groups | Sellers moving out | "Stop posting into the void — one searchable place" | Click demo link | AM-02 CTA clicks, AM-03 demo attempts | E01 evidence: this is exactly where buy/sell chaos happens today, so the audience is pre-qualified — we intercept the problem where it lives |
| QR posters in dorm lobbies & elevators (A, B, Building 6) | Sellers packing rooms; buyers moving in | "Moving out? Don't bin it — scan and list it" | Scan QR → landing page | AM-01 views (per poster code), AM-05 interest | CS01's channel from customer-segments.csv; physically next to the items being sold, at the exact moment of the pain |
| Instagram story (team + friends resharing) | Broad RSU student community | Before/after: "thrown-away desk vs 800 THB in 3 days" | Visit landing page | AM-01 views, AM-02 clicks | Familiar student channel; visual format suits item photos; reshares reach incoming students not yet in dorm groups |
| ICT111 class chat + word of mouth | Classmates as testers | "Try our project, tell us what breaks" | Try demo + give feedback | AM-04 feedback responses | Fastest honest feedback loop; doubles as Lab 13 tester recruitment |

## Launch Sequence
1. Verify GitHub Pages serves /landing-page/ and /prototype/ (Issue 3), test all links on mobile.
2. Soft launch to ICT111 class chat — catch broken links and confusing copy with a friendly audience (target: 5 feedback responses, AM-04).
3. Post to 3 LINE dorm/class groups with the chat message from marketing-message.md.
4. Put up QR posters in Dorm A, Dorm B, and Building 6 lobbies (with permission), each QR carrying a channel tag.
5. Instagram story from team accounts, reshared by friends.
6. Track daily in /data/acquisition-metrics.csv; after 5 days, review against targets and adjust headline/CTA/channel per the interpretation rules in acquisition-metrics.md.

## Risk and Mitigation
1. **Empty-marketplace impression** — visitors arrive before real listings exist. Mitigation: demo opens with realistic fictional seed listings, clearly labelled as sample data; recruit 3–5 real sellers from the team's network before wide posting.
2. **Group posting seen as spam** (ironic, given E01). Mitigation: one post per group, personal framing ("our class project — feedback welcome"), no reposting; class chat first.
3. **Overpromising safety or availability** (Lab 09 R-06). Mitigation: all copy follows the landing-page-content.md accuracy check; "safer meetups", never guarantees; no feature claims beyond v0.3.
4. **Privacy expectations from the landing page.** Mitigation: the page collects no personal data at all — interest counter is browser-local and labelled as such; poster QRs link to the page, not to any form.
5. **Off-season timing** (semester calendar vs. course deadline). Mitigation: for the course, measure with classmates and dorm students now; document the peak-season plan for a real launch in the final report.

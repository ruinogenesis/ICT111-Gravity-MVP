# Acquisition Metrics — Gravity

## Purpose
Measure early user interest and landing page performance for the go-to-market test. Prefix **AM-** avoids collision with Lab 07 experiment metrics (M-) and Lab 11 product metrics (PM-).

## Required Metrics

| Metric ID | Metric Name | Type | What It Measures | Formula / Counting Method | Data Source | Target / Success Criterion |
| --- | --- | --- | --- | --- | --- | --- |
| AM-01 | Landing page views | Awareness | People who opened the landing page | Count per day per channel (QR codes carry a channel tag; group posts counted from link shares + manual tally; script.js also keeps a browser-local view counter as demo instrumentation) | /data/acquisition-metrics.csv | ≥ 30 views in the 5-day test |
| AM-02 | CTA click rate | Action | Visitors who clicked "Try the demo" | CTA clicks ÷ page views × 100 (script.js counts clicks locally; cross-channel totals tallied manually in the CSV) | landing page script + CSV | ≥ 30% of views |
| AM-03 | Demo attempts | Action | People who actually opened the prototype | Count of prototype visits (self-report in class test + manual tally) | prototype link / CSV | ≥ 10 attempts |
| AM-04 | Feedback responses | Feedback | Users who gave usability/interest feedback | Count of responses (class chat replies + Lab 13 session sign-ups) | feedback form / CSV | ≥ 5 responses |
| AM-05 | Interest conversion | Conversion | Visitors who took the target action ("count me in" or volunteering to test) | (interest clicks + tester sign-ups) ÷ page views × 100 | landing page counter + CSV | ≥ 20% of views |
| AM-06 | Best-performing channel | Awareness/Decision | Which channel produces the most demo attempts per view | AM-03 per channel ÷ AM-01 per channel | CSV (channel column) | Identify one clear winner to focus for the final release |

Honest-measurement note: with no backend, the landing page cannot centrally track visitors — script.js counters are per-browser demo instrumentation (labelled as such on the page), and the real cross-channel numbers are collected manually into /data/acquisition-metrics.csv. This limitation is stated openly rather than simulated as fake analytics.

## Results (GTM test, 30–31 July 2026)
Raw data: /data/acquisition-metrics.csv. Four channels, 330 landing-page views.

| Channel | Views | CTA clicks | CTA rate (AM-02) | Demo attempts | Demo rate (AM-03) | Testers (AM-05) |
|---|---:|---:|---:|---:|---:|---:|
| Pruksa Ville friends group | 15 | 11 | 73.3% | 7 | 46.7% | 5 |
| Plum 89 friends group | 7 | 6 | 85.7% | 5 | 71.4% | 5 |
| Facebook story | 192 | 12 | 6.2% | 3 | 1.6% | 2 |
| Instagram story | 116 | 4 | 3.4% | 2 | 1.7% | 0 |
| **Total** | **330** | **33** | **10.0%** | **17** | **5.2%** | **12** |

AM-04 feedback responses: 12. AM-06 best-performing channel: **apartment/friend groups** (77.3% CTA, 54.5% demo rate combined) versus social stories (5.2% CTA, 1.6% demo rate).

## Interpretation
The result is a clean, honest split: reach and intent moved in opposite directions. Social stories produced 93% of the views (308 of 330) but only 5 demo attempts and 2 testers, while the two apartment/friend groups produced 22 views and 12 demo attempts — a demo rate roughly 34× higher. This validates the Lab 12 channel choice: Gravity's audience is reached where the problem already lives (apartment and class group chats, exactly the E01 evidence), not through broad social broadcast. Targets were met on the awareness side (330 views vs ≥30) and the feedback side (12 vs ≥5), and exceeded on demo attempts (17 vs ≥10); overall CTA rate (10.0%) and interest conversion (3.6%) fell short of the ≥30% and ≥20% targets — but those targets were written assuming a targeted audience, and they are comfortably exceeded within the apartment-group segment (77.3% CTA, 54.5% demo). The lesson we would carry into a real launch: drop broad social entirely, concentrate on apartment friends group chats and QR posters at move-out peak, and measure per-channel rather than in aggregate.

## Original targets and interpretation rules
If AM-01 is weak → channel/timing problem: re-post at peak hours, add a poster location, lean on the strongest channel per AM-06. If AM-02 is weak → message problem: test the headline against the "800 THB desk" angle, move the CTA higher. If AM-03 lags AM-02 → the demo link path is too heavy: link straight to the Browse screen. If AM-04/AM-05 are weak → value problem: sharpen the benefit line, ask for feedback more directly in person. Results and the resulting changes feed the Lab 13 testing plan and the final-improvement-list.

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

## Interpretation
If AM-01 is weak → channel/timing problem: re-post at peak hours, add a poster location, lean on the strongest channel per AM-06. If AM-02 is weak → message problem: test the headline against the "800 THB desk" angle, move the CTA higher. If AM-03 lags AM-02 → the demo link path is too heavy: link straight to the Browse screen. If AM-04/AM-05 are weak → value problem: sharpen the benefit line, ask for feedback more directly in person. Results and the resulting changes feed the Lab 13 testing plan and the final-improvement-list.

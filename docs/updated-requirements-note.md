# Updated Requirements Note — Gravity (Lab 09)

## Purpose
Records the outcome of the Lab 09 responsible design review against `/docs/system-requirements.md`.

## Result: no requirement is changed. One clarification is added.

The fixed requirements FR-01–FR-16 and our NFR-01–05 all survived the review unchanged. The review produced **one clarification** (narrowing how FR-15 is implemented, not what it requires):

| Requirement ID | Original Requirement | Proposed Update | Reason for Change | Supporting Evidence | GitHub Issue/Commit | Approved by Team? |
|---|---|---|---|---|---|---|
| FR-15 (clarification only) | "No personal contact info shown publicly; contact details revealed only after both sides agree; no student ID images stored; minimal data fields." | Unchanged, plus implementation clarification: **the revealed contact channel is the RSU email only.** No phone number, LINE ID, or social media handle will ever be collected or stored. | Lab 09 data-minimization review: the RSU email is already collected for verification (NFR-04), so it can serve as the single reveal channel — removing every other contact field from the system entirely. This lowers privacy risk R-01 without weakening the reveal-after-agree flow. | E05 (trust/safety), NFR-02, `/docs/privacy-and-data-protection.md`, risk register R-01 | Issue #TBD | Pending team confirmation |

Ethical wording changes (safety tagline reword, "simulated verification" label — see legal-ethical-checklist) affect screen copy only, not any requirement, so they are tracked as Sprint 1 tasks rather than requirement updates.

## Rule
No silent changes: this clarification is linked to a GitHub issue and today's weekly logbook entry, and FR-15's text in `system-requirements.md` stays as written by the lecturer.

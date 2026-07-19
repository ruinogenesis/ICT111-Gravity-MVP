# Legal and Ethical Checklist

## Project Title
Gravity — RSU Student Secondhand Marketplace

## Ethical Review

| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | Yes | Homepage states purpose, target user, and main actions (FR-01); demo page carries a visible note that records are saved in the browser only and the demo is for the Lab experiment. | Keep the purpose note on every prototype version; add a short data-use line to the register screen (S-02) in Sprint 1. | Hein (Product/Docs) | Issue #TBD |
| The prototype avoids misleading claims. | With revision | The tagline "post once, be found fast, meet safely" could be read as a safety guarantee — Gravity connects students but cannot guarantee a safe meetup (same pattern as practice-case risk R-04). Also, the "verified" badge is real in concept but the email link and in-person ID check are simulated in the demo (technical-architecture.md §5). | Reword safety claim to "safer meetups" framing and add safe-meetup tips (meet in public campus areas) to the detail screen; label verification as "simulated for demo" anywhere it appears in the prototype. | Thiri (UX/Validation) | Issue #TBD |
| The prototype does not collect unnecessary sensitive data. | Yes | Minimal fields only (data-structure.md): no phone, no LINE ID, no address, no ID images (locked decision, FR-15/NFR-04); prototype data is fictional sample data. | Keep the data inventory (`/data/data-inventory.csv`) as the single allowed-fields list; any new field needs a logbook entry. | Eimyat (Technical/Business) | Issue #TBD |
| Users can understand what happens after submission. | With revision | Lab 08 evidence: only 2/5 testers correctly explained the reveal-after-agree contact flow (T6; TU-02 scored it 1/5), and "Reserved" was misread behaviorally (TU-01 tried to bid on a Reserved item). | Sprint 1 fixes already planned from mvp-decision.md: add a "what happens next" explainer after the contact request, and clearer Reserved wording. | Thiri (UX/Validation) | Issue #TBD |
| Admin or manager actions are clearly separated from user actions. | With revision | Admin screen (S-06) is designed but not yet built in mvp-demo.html; role switching will be simulated (no real authentication in a localStorage prototype). | Build admin as a separate, clearly labelled "Admin view (demo)" screen in Sprint 1; no admin controls on public screens. | Eimyat (Technical/Business) | Issue #TBD |
| The prototype avoids unfair or harmful treatment of users. | Yes | RSU-only access excludes non-students by design — this is a justified trust decision, evidence-backed (E05 trust/safety, NFR-04), not unfair exclusion; both buyer and seller sides get the same verification rule and mutual-consent contact reveal. | State the RSU-only scope and its trust reason on the homepage so exclusion is transparent, not hidden. | Hein (Product/Docs) | Issue #TBD |

## Legal Note (Thailand PDPA awareness)
Gravity collects only minimal personal data (display name, RSU email) from verified students, with consent at registration, no sensitive-category data, and no ID images stored. All prototype and repository data is fictional sample data, so no real personal data is exposed during the course. Research participants (Lab 03 respondents R001–R015, Lab 08 testers TU-01–05) are recorded under anonymous codes only, following the consent questions in `/docs/customer-questions.md`. This keeps the project aligned with PDPA data-minimization and consent principles at prototype scale.

## Summary Decision
- Safe to continue: **With revision**
- Required revision before implementation:
  1. Reword the safety tagline and add safe-meetup guidance (ethical claim).
  2. Label simulated verification clearly in the demo (honest-demo rule).
  3. Ship the two Lab 08 clarity fixes (contact-flow explainer, Reserved wording) in Sprint 1.
  4. Keep admin actions on a separate, labelled screen.

All four are minor and already scheduled into Lab 10–11 sprints; none changes the fixed requirements FR-01–16.

# Business Model Canvas — Gravity

## Project Title
Gravity — RSU Student Secondhand Marketplace

## 1. Customer Segments
- **Student sellers under move-out pressure** (primary — persona Su Su): graduating and international students who must sell furniture, appliances, electronics, and clothing within days (E02 — 6/15 respondents).
- **Student buyers at move-in**: first-year and continuing students looking for affordable used items (R004, R009, R015).
- **Gravity admin (team-operated)**: verifies student accounts and moderates listings to keep the marketplace trusted.

Segment details: `/data/customer-segments.csv`.

## 2. Value Proposition
**Post once, be found fast, meet safely.** One trusted, searchable, RSU-only marketplace replaces scattered Facebook/LINE groups (E01 — 11/15), recovers item value before sellers leave instead of discarding working items (E03 — 7/15), keeps listings persistent with live status instead of buried posts (E04), and protects both sides by revealing contact only after mutual agreement between verified students (E05).

## 3. Channels
- Mobile-friendly web app (primary channel — usable from any phone browser, no install).
- QR code posters in apartment lobbies and elevators during move-in/move-out weeks (when the pain peaks).
- Links shared in the same Facebook/LINE groups students already use — meeting users where they are today.
- Word of mouth from successful deals; RSU student groups and international student association announcements.

## 4. Customer Relationships
- Self-service: sellers post and manage their own listings; buyers search and request contact themselves.
- Trust relationship: one-time verification (RSU email + in-person ID check) creates a verified community feeling.
- Admin support: moderation, status corrections, and removal of invalid listings keep quality high.
- Seasonal engagement: activity concentrates around semester start/end, so communication pushes happen in those windows.

## 5. Revenue Streams / Sustainability Logic
Gravity is free for students in the MVP phase — the sustainability logic is value-based, not sales-based:
- **Operational value:** reduces waste (working items reused instead of discarded) and saves students money and time — measurable value for the RSU community.
- **Institutional value:** aligns with university sustainability goals; potential adoption or endorsement by student affairs or the housing office.
- **Future options (not in MVP):** optional featured-listing fee for faster visibility, or sponsorship from campus-adjacent businesses (secondhand shops, moving services). Payments between users remain out of scope by design.

## 6. Key Resources
- The web prototype (HTML/CSS/JS frontend with browser-based storage — see `/docs/technical-architecture.md`).
- Listing dataset and data structure (`/data/sample-listings.csv`, `/docs/data-structure.md`).
- Admin role operated by the team (verification + moderation).
- GitHub repository as the development and documentation base.
- Team skills: documentation/coordination, UX/validation, technical/business (see `/docs/team-profile.md`).

## 7. Key Activities
- Verify student accounts (email check + one-time in-person ID confirmation, no ID storage).
- Maintain listing records: create, browse, search/filter, status updates (Available → Reserved → Sold).
- Moderate content: remove invalid/spam listings, correct statuses.
- Facilitate safe contact (reveal-after-agree flow).
- Summarize activity in the dashboard; promote during move-in/move-out windows.

## 8. Key Partners
- RSU housing office and student affairs (poster placement, credibility, adoption path).
- International student association (reaches the highest-pain segment).
- Existing Facebook/LINE group admins (channel partners, not competitors — they distribute the link).
- ICT faculty (project supervision and feedback).

## 9. Cost Structure
- Development time: the team's main cost — covered within course labs.
- Hosting: free tier (GitHub Pages) for the prototype; a custom domain (~500 THB/year) only if the project continues.
- Admin time for verification and moderation (manageable at campus scale; the real scaling cost if the platform grows).
- Communication materials: QR posters (minimal printing cost).
- No inventory, logistics, or payment-processing costs — excluded by design.

## Final Note
The business model is deliberately built on the same evidence chain as the MVP: every value proposition line maps to a Lab 03 evidence ID, every key activity maps to an MVP feature (F01–F12) in `/docs/feature-value-mapping.md`, and the free/connector model is why payments (F15) and logistics stay out of the final prototype. The prototype demonstrates the full value loop: verified seller posts → buyer finds → safe contact → status Sold → dashboard shows recovered value.

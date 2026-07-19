# Privacy and Data Protection — Gravity

## Data Collection Summary
Full machine-readable version: `/data/data-inventory.csv`. Fields follow `/docs/data-structure.md`.

| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|---|---|---|---|---|---|
| display_name (Users) | Identify seller on listings and requests without full legal name | Yes | No | Keep | Nickname allowed; never require full legal name |
| rsu_email (Users) | Verification (NFR-04) and the only contact channel revealed after mutual agreement | Yes | No | Keep | Never shown on public pages (NFR-02); revealed only after both sides accept (FR-15) |
| verified flag (Users) | Trust badge on listings (E05) | No | No | Keep | Boolean only — the in-person ID check stores **no ID images and no ID numbers** (locked decision) |
| role, joined_date (Users) | Admin function and account management | No | No | Keep | Internal/admin-only |
| title, category, price_thb, condition, description (Listings) | Core marketplace content (FR-03, FR-05–07) | No | No | Keep | Sellers instructed not to put personal info in free-text fields |
| pickup_area (Listings) | Meetup context (E01) | Possibly | No | Keep with caution | General campus area only (e.g., "Dorm A lobby"), never a room number or private address — mirrors practice-case rule for "Location found" |
| photo (Listings, planned L10) | Top Lab 08 request | Possibly | No | Keep with caution | Item-only photos; instruction not to include people, faces, or room backgrounds |
| status, dates (Listings) | Lifecycle tracking (FR-08) | No | No | Keep | Public |
| request_status + IDs (ContactRequests) | Reveal-after-agree flow (FR-15) | No | No | Keep | Contact data itself is never in this table — only references |
| Phone number / LINE ID / Facebook | — | Yes | No | **Not collected** | Deliberately excluded: RSU email is the single reveal channel, so no extra contact fields are needed |
| Student ID card image / number | — | Yes | Yes | **Not collected** | In-person visual check only; nothing stored (FR-15, NFR-04) |

## Privacy Rule for Prototype
Gravity collects the minimum needed to run a trusted student marketplace: a display name and an RSU email for verification, plus item data for listings. Public pages show item information and the seller's display name and verified badge only — no email, phone, or social handles anywhere (NFR-02, verified in Lab 08 testing). The RSU email is revealed to exactly one person (the other party) and only after both sides agree (FR-15). Admin sees user records solely to verify accounts and remove spam (FR-09). The prototype and repository contain only fictional sample data; no real student data is stored during the course.

## Consent
Registration will show a short data-use statement (see `/docs/user-consent-statement.md`); testers in Lab 08 gave verbal consent recorded under anonymous codes TU-01–05, and the written consent statement will be used for Lab 13 user testing.

## Data Minimization Decision
Fields removed or excluded after this review:

1. **Phone / LINE / Facebook contact fields — excluded.** The reveal-after-agree flow will reveal the RSU email only. This removes the highest-value personal data from the system entirely and simplifies FR-15 (clarification recorded in `/docs/updated-requirements-note.md`).
2. **Student ID number/image — never collected** (reconfirmed locked decision).
3. **Pickup area constrained** to general campus zones via a dropdown/instruction in Sprint 1, preventing users from typing private addresses.
4. **Photo rule added** before the photo feature ships in Sprint 1: item-only images, no people or private backgrounds.

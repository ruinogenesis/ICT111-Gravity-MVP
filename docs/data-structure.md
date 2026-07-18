# Data Structure — Gravity

## Project Title
Gravity — RSU Student Secondhand Marketplace

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Users | Verified RSU student accounts (sellers and buyers) and the admin role | U001 Su Su (seller, verified), U004 Nine (buyer, verified) |
| Listings | Items for sale with category, price, condition, pickup area, and status | GL-001 Wooden study desk ฿800 Available |
| ContactRequests | Buyer→seller contact requests and their agreement state | CR-001: U004 requests GL-002, status Accepted |

## 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|---|
| Users | user_id | Text/ID | Yes | U001 | Unique value | No |
| Users | display_name | Text | Yes | Su Su | 2–40 characters | No |
| Users | rsu_email | Text | Yes | su.su@rsu.ac.th | Must end with @rsu.ac.th, unique | No |
| Users | role | Text/List | Yes | student | student / admin | No |
| Users | verified | Boolean | Yes | true | Set true only after in-person ID check | No |
| Users | joined_date | Date | Yes | 2026-06-18 | Valid date, auto-set | No |
| Listings | listing_id | Text/ID | Yes | GL-001 | Unique value, auto-generated | Yes |
| Listings | seller_id | Text/ID | Yes | U001 | Must match an existing verified user | No |
| Listings | title | Text | Yes | Wooden study desk | 3–60 characters | Yes (keyword) |
| Listings | category | Text/List | Yes | Furniture | Furniture / Appliances / Textbooks / Other | Yes |
| Listings | price_thb | Number | Yes | 800 | Positive integer | Yes (range) |
| Listings | condition | Text/List | Yes | Good | Like new / Good / Fair | No |
| Listings | pickup_area | Text | Yes | Dorm A lobby | 3–60 characters | Yes (keyword) |
| Listings | description | Text | No | Solid desk with drawer... | Max 300 characters | No |
| Listings | status | Text/List | Yes | Available | Available / Reserved / Sold / Removed | Yes |
| Listings | date_posted | Date | Yes | 2026-06-20 | Valid date, auto-set | Yes (sort) |
| ContactRequests | request_id | Text/ID | Yes | CR-001 | Unique value, auto-generated | No |
| ContactRequests | listing_id | Text/ID | Yes | GL-002 | Must match an existing listing | No |
| ContactRequests | buyer_id | Text/ID | Yes | U004 | Must match a verified user; cannot equal the seller | No |
| ContactRequests | request_status | Text/List | Yes | Pending | Pending / Accepted / Declined | Yes (admin view) |
| ContactRequests | created_date | Date | Yes | 2026-06-22 | Valid date, auto-set | No |

## 3. Status Values

### Listing status
| Status | Meaning | Who Can Update? |
|---|---|---|
| Available | Item can be requested by buyers | Set automatically on posting |
| Reserved | Seller accepted a contact request; deal in progress | Seller (or admin correction) |
| Sold | Deal completed; hidden from default browse filter | Seller (or admin correction) |
| Removed | Invalid/spam listing taken down | Admin only |

### Contact request status
| Status | Meaning | Who Can Update? |
|---|---|---|
| Pending | Buyer sent a request; waiting for the seller | Set automatically on request |
| Accepted | Both sides agreed; contact details revealed to both | Seller |
| Declined | Seller declined; buyer notified, no contact revealed | Seller |

## 4. Sample Records
- Listings: /data/sample-listings.csv (8 records, consistent with dashboard numbers).
- Users and contact requests: /data/sample-users.csv and `/data/sample-contact-requests.csv`.
- The prototype converts these into its JSON seed data (see `/docs/technical-architecture.md`).

## 5. Data Privacy Note
Gravity collects the minimum data needed to run a trusted marketplace (FR-15):
- **Not collected:** student ID numbers or ID card images (the ID check is one-time and in person, nothing stored), phone numbers on public pages, addresses (only general pickup areas like "Dorm A lobby"), and no payment data of any kind.
- **Contact details** (e.g., a LINE ID the seller chooses to share) are stored privately and revealed only to the two parties of an Accepted request — never on public pages.
- **Sample data is fully fictional:** all names, emails, and records in /data/ are invented for the demo; no real student information is used.

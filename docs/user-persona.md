# Lab 04 - User Persona

## Evidence Key (from Lab 03, `/data/raw-responses.xlsx`)
| Evidence ID | Pattern | Related Responses | Count |
|---|---|---|---|
| E01 | Scattered, unsearchable channels (Facebook, LINE, noticeboards; no category/filter) | R001, R002, R004, R005, R007, R008, R009, R010, R012, R014, R015 | 11/15 |
| E02 | Time pressure when moving (flights, graduation, move-in windows) | R002, R007, R010, R013, R014 + move-in cases | 6/15 |
| E03 | Usable items given away or discarded (money lost, items wasted) | R002, R003, R006, R007, R010, R014 | 7/15 |
| E04 | Listings disappear / get buried within a day | R001, R003, R011, R012, R015 | 5/15 |
| E05 | Trust / safety concern meeting strangers | R002, R010, R013 | 3/15 |

## 1. Persona Name
**Su Su, Year 4 International Student (graduating seller)**

## 2. User Type
RSU student who must sell higher-value used items (furniture, appliances, textbooks) under time pressure before leaving the university.

## 3. Background and Context
- **Where the problem happens:** In and around the apartments and condos around RSU, at the end of the semester when she must clear her room before her flight home.
- **When it usually happens:** During move-out (graduation / end of contract) and, on the buyer side, during move-in at the start of each term. Pain peaks in a 1–2 week window.
- **Digital tools already used:** Facebook buy/sell groups, LINE apartment and class group chats, Instagram stories, word of mouth, and the physical condo friend groups. Comfortable with mobile web forms, search, and chat apps.

## 4. Goals
- Sell a desk, mini fridge, and textbooks within a few days and recover some money instead of throwing items away (E02, E03).
- Post each item **once** in one place where buyers can actually find it, instead of reposting across 3+ groups (E01, E04).
- Reach real buyers quickly without slow replies and buried posts (E01, E04).
- Make contact with buyers **without immediately sharing her personal Facebook/LINE account** with strangers (E05).

## 5. Pain Points from Lab 03 Evidence
| Pain Point | Evidence ID / Respondent | Explanation |
|---|---|---|
| Listings buried and unsearchable across scattered groups | E01 — R001, R002, R010, R014 | Sellers post in 3+ Facebook/LINE groups; posts sink within a day and buyers cannot filter by item type. |
| Severe time pressure before leaving | E02 — R002, R007, R014 | International/graduating students have only days before a flight; 30–90 minutes wasted per item. |
| Money and items lost | E03 — R002, R003, R010, R014 | Working fridge, bookshelf, kettle, and appliances were given away free or discarded because no buyer was found in time. |
| No persistent listing or status | E04 — R003, R012, R015 | Posts scroll away; buyers cannot tell if an item is still available. |
| Unsafe contact with strangers | E05 — R013, R010, R002 | A seller almost cancelled a wardrobe sale because she felt unsafe sharing her Facebook with an unknown buyer. |

## 6. Current Alternatives / Workarounds
| Current Alternative | Weakness / Limitation | Evidence |
|---|---|---|
| Facebook buy/sell groups | Posts buried in a day, no categories or filters, mixed audiences | R001, R003, R010, R015 |
| LINE apartment and class group chats | Small audience, slow replies, messages scroll away | R002, R008, R012 |
| Asking friends / word of mouth | Tiny reach, unreliable, no record | R004, R005 |
| Condo friend groups | Very low visibility, easy to miss | R011 |
| Giving away or discarding items | Total loss of value; apartment staff confirm usable items are thrown out every term | R006, R003, R014 |

## 7. Design Implications
- **The system should support:** one central, persistent, searchable listing page with item categories and status (Available / Reserved / Sold); a fast mobile-friendly posting form (sellers are in a hurry); RSU-student-only access via university email verification; and a contact step that does not expose personal accounts until both sides agree.
- **The team should avoid:** payment processing, delivery/logistics, holding inventory, and anything requiring advanced cybersecurity — Gravity is a connector only (decision carried from Lab 02/03).
- **Most important user need for the MVP:** *post once, be found fast* — a persistent, searchable, categorized listing that recovers item value before the seller leaves (E01 + E02 + E03 are the three strongest, most repeated patterns).

## Secondary User (served by the same MVP, not a separate persona)
**The buyer:** a first-year or continuing student (R004, R009, R015) searching for cheap used furniture and textbooks at move-in. Same core screens serve them: search, filter by category, view details, check status, request contact.

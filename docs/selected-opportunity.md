# Selected Semester Project Opportunity

## Selected Project Title
Gravity — A Peer-to-Peer Student Marketplace

## Target User
Rangsit University students, in two roles:
- **Sellers:** students who are moving out, graduating, or leaving — especially international students — who need to clear furniture, appliances, textbooks, and dorm items quickly.
- **Buyers:** new and continuing students who want those same items cheaply instead of buying new.

## Problem Statement
When students move in or out of RSU, sellers and buyers currently rely on scattered Facebook and LINE buy-sell groups. Listings are buried in the feed, there is no search or category filter, items disappear quickly, and there is no easy way to find what you need or reach the right person. Sellers often end up giving items away or throwing them out, and buyers overpay for new items they could have bought used.

## Current Alternative
Students post in general Facebook/LINE groups, ask friends, use noticeboards, or simply leave items behind. These channels are disorganised, unsearchable, and unreliable, and they mix everything together with no structure.

## Proposed IT Solution
A student-only web marketplace that **connects** buyers and sellers rather than acting as a real middleman. Sellers post items with a photo, category, condition, and price. Buyers browse, search, and filter listings. When a buyer is interested, the platform connects the two parties (for example, by revealing a contact or starting an in-app message) so they finish the deal themselves off-platform. The platform does **not** hold inventory and does **not** process payments.

To address the trust and safety concern raised in customer discovery, access is limited to verified RSU students. Verification uses a **university email (@rsu.ac.th)** at sign-up, plus a **one-time in-person student ID check** (shown at registration or a first campus meetup) after which the account is simply marked "verified." The platform does **not** upload, scan, or store any student ID card image — the in-person check happens face to face and only a verified/not-verified flag is kept.

An AI assistant adds value in two simple ways:
- A **listing helper** that turns a short description ("selling my used study desk, 1 year old, good condition") into a clean title, description, and a suggested fair price.
- A **natural-language search** so a buyer can type "cheap desk and a fan under 1000 baht" and get matching listings.

## Why This Opportunity Was Selected
It ranked first on our NUF matrix (New 3, Useful 5, Feasible 5 = 13). It is highly useful because it solves a real, recurring problem for a user group we belong to and understand. It is very feasible because the connect-only model removes the two hardest parts of e-commerce — inventory and payments — leaving a straightforward listings web app. It scores moderately on New because general secondhand marketplaces exist, but a student-only, campus-scoped marketplace built around the move-in/move-out cycle is a clear, focused improvement over messy Facebook groups.

## Why This Is Feasible Without IoT or Advanced Cybersecurity
The MVP is entirely software-based: a browser web app (HTML/CSS/JavaScript) with a simple data store (Google Sheet or a lightweight database) for listings. There is no hardware, no sensors, and no payment processing — because money never changes hands on the platform, there is no need for payment security, fraud handling, or financial compliance. Identity verification is kept deliberately lightweight: a university email check plus a one-time in-person ID check, storing only a verified/not-verified flag. Because we do **not** store student ID images or other sensitive identity documents, we avoid the heavy data-protection and security obligations that would otherwise apply. The main privacy consideration is connecting buyers and sellers, which we handle conservatively (an in-app message or a "reveal contact after both agree" step) so personal accounts are not exposed to strangers.

## Possible MVP Type
HTML/CSS/JS prototype (listings web app), with listing data stored in a Google Sheet or simple database.

## Initial Validation Plan for Lab 03
- **Who will the team ask?** RSU students who have recently moved in or out, current dorm residents, and graduating/international students.
- **What evidence will the team collect?** How they currently buy/sell used items, what frustrates them about Facebook/LINE groups, how often they buy or sell when moving, and whether they would use a dedicated student marketplace.
- **What question must be answered first?** Is finding and selling used items when moving a real, frequent, painful problem for RSU students — painful enough that they would switch from Facebook groups to a dedicated marketplace?

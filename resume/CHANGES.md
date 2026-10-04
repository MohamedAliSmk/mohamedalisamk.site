# Resume changes vs. the previous PDF

Source of the old file: `Mohamed_Ali_Hassan_Frappe_Senior_Resume.pdf` (2 pages) as it stood on `main` at `de0920c`. New source of truth: `resume/resume.html`, rendered to the same PDF filename with headless Chrome.

## Header and contact

- Display name set to **Mohammed Ali Samk** to match LinkedIn and the website. The previous header was **MOHAMED ALI HASSAN**. The download filename is unchanged.
- Headline rewritten from “Senior Frappe & ERPNext Developer | Python | API Integration | Cloud Deployment” to “Frappe & ERPNext Developer · Python · Vue.js · HR, Inventory & Sales” (no unverified “Senior” claim).
- LinkedIn updated from the old slug `linkedin.com/in/mohammed-ali-smk-7800651a6` (it wrapped mid-URL on the old PDF) to `https://www.linkedin.com/in/mohammed-ali-smk`.
- Added GitHub `https://github.com/MohamedAliSmk`.
- Added website `https://mohamedalismk.github.io/mohamedalisamk.site/`.
- Phone kept as +20 101 372 5009 and linked to `https://wa.me/201013725009`. WhatsApp is now named in the contact line.
- Email `mohamedalismk@gmail.com` kept.
- Location kept as **New Cairo, Egypt** on the first rewrite (already on the old CV). Later shortened to **Cairo, Egypt** in the header so the real GitHub Pages URL could be printed in full.

## Summary

- Removed **“2.5+ years”**. Dates on the old CV already run from Sep 2023; a new year-count was not added.
- Removed marketing phrasing: “widely adopted”, “high-impact solutions for global clients”.
- POSNext star count updated from **120+** to **158**, verified via the public GitHub API for `BrainWise-DEV/POSNext`.
- Named current products: POSNext, NexDine, NexMove, and the Agile team at BrainWise.
- Mentioned the ArabDT corporate HR work and government ERPNext background instead of a generic “enterprise clients” list.

## Skills

- Kept existing skill facts: Frappe/ERPNext (DocTypes, workflows, hooks, whitelisted APIs), Python, JavaScript, HTML, CSS, Node.js, NestJS, Express.js, MySQL/InnoDB, MariaDB, MongoDB, REST, Git, Linux, MinIO/S3, JIRA, Agile/Scrum, ruff/eslint.
- Added **Vue.js** next to JavaScript (LinkedIn headline / provided facts).
- Added **product management** under ways of working (provided ArabDT fact).
- Grouped into Frameworks / Languages / Data & APIs / Delivery / Ways of working. Dropped the standalone “VS Code” tool line as noise, not a credential.

## Experience

### BrainWise (Feb 2026 – Present)

- Title simplified from “Software Engineer & Backend / DB Contributor” to **Software Engineer**.
- Added **NexDine** and **NexMove**.
- Added that the work is in an **Agile team**.
- POSNext stars: 120+ → **158**.
- **Removed “142 forks”.** That number was on the old CV and was not re-verified for this rewrite; it is not restated.
- Kept prior technical bullets that were already on the CV: invoicing, shifts, promotions, coupons, multi-payment/currency, whitelisted APIs, MySQL work, offline-first sync, production ERPNext operations, code review / ruff / eslint.
- Dropped the vague “cross-functional remote teams across design, QA, and product” line (unverified beyond “Agile team”).

### ArabDT (Aug 2024 – Feb 2026)

- Kept title **Software Engineer**.
- Added: **sole engineer** for the HR system of a corporate group with branches in **Egypt, Saudi Arabia, and the UAE**.
- Added: built an **HR mobile app as a SaaS product**.
- Added: **Agile and product management**.
- Kept existing project names and technical bullets already on the CV: ArabDT HR Admin App, Hodori Attendance App, internal CRM, ERPNext HR customizations, third-party APIs, SQL reports, Frappe hooks/jobs, Linux production, JIRA.

### ERPCloud.Systems (Sep 2023 – Aug 2024)

- Title changed from “ERPNext Developer” to **Back-end Developer** (provided fact).
- Company spelling normalized to **ERPCloud.Systems**.
- Added government ERPNext scope: **stock, selling, buying, workflows, and parts of HR**, including the **Police Vehicles General Administration** project at the **Ministry of Interior**.
- Kept existing technical bullets: custom DocTypes/forms/server logic, REST APIs for inventory/HR/finance, MySQL schema and query work.
- **Removed** “Delivered ERPNext customizations for multiple clients…” — unspecified clients, and the government/Ministry work is the verified framing.

## Projects

- POSNext badge: 120+ stars → **158 GitHub stars**. Dropped “one of the most adopted ERPNext POS solutions”.
- All six previous project entries kept: POSNext, ArabDT HR & Admin System, Hodori Attendance App, General Administration System, Internal CRM System, Lawyer Office Management System.
- Wording tightened; no new projects added.

## Education, certifications, languages

- Kept **B.Sc. in Computer Engineering — Modern Academy Maadi, Egypt, 2018 – 2023**.
- Kept **edX Verified Certificate: Back-End Application Development with Node.js and Express, Jun 2025**.
- Kept **Arabic (native)** and **English (professional working proficiency)**.

## Not invented / not verified

- No new clients, revenue, user counts, or performance metrics.
- Fork count not restated.
- Years-of-experience figure not restated.
- No new certifications, degrees, or languages.
- NexDine and NexMove are named only; no extra product claims were added because none were provided.

## Contact icons (follow-up)

- Header contact line now uses small decorative inline SVG icons (aria-hidden) before location, email, WhatsApp, LinkedIn, GitHub, and website.
- Phone and WhatsApp are one item: WhatsApp icon + clickable `+20 101 372 5009` → `https://wa.me/201013725009`.
- Visible website text is the real address `mohamedalismk.github.io/mohamedalisamk.site` (not the non-resolving `mohamedalisamk.site` label). LinkedIn and GitHub stay as readable host/path text. Header may use a third line.

## Production notes

- Rebuild: `resume/build-pdf.sh` (headless Chrome, no header/footer) writes `Mohamed_Ali_Hassan_Frappe_Senior_Resume.pdf` at the repo root so the site download link stays the same.

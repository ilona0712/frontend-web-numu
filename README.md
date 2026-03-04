#  NUMŪ — National Monitoring & Analytics Dashboard

> ** Top 3 Finalist — Code for Lebanon x USJ Hackathon (February 2026)**  
> Built for Lebanon's **Ministry of IT & AI (MITAI)** in partnership with Code for Lebanon and H7ech.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=flat-square&logo=vercel)](https://v0-frontend-web-numu.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-97%25-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Built in](https://img.shields.io/badge/Built%20in-24%20hours-orange?style=flat-square)](#)

---

##  Project Context

**NUMŪ** is Lebanon's national digital and AI upskilling program, aimed at equipping citizens with future-ready skills across technology, data, and artificial intelligence.

This dashboard was built during a 24-hour hackathon challenge to give **Ministry policy-makers** a real-time monitoring tool to track the national rollout of NUMŪ — answering critical questions like:
- Which channels (universities, syndicates, NGOs…) are driving the most registrations?
- Which regions are underrepresented?
- What AI tracks are learners most interested in?
- Who are the individual learners, and what is their training status?

---

##  Dashboard Preview

![NUMŪ Dashboard — Dissemination Performance](./public/dashboard-preview.png)

> *Dissemination Performance view — 4,812 total registrations across 8 Lebanese regions, Sep 2025 – Feb 2026*

---

##  Features

###  Dissemination Performance
- KPI cards: Total Registrations, Active Channels, Completion Rate, Regions Covered
- Registrations by Channel (Universities, Public Sector, Employers, Syndicates, NGOs) with drill-down
- Track Interest Distribution (AI Fundamentals 33%, GenAI 25%, Data Ethics 17%, Automation 14%)
- Registration Growth Over Time — multi-line chart by channel

###  Interest & Strategy Insights
- Learning motivation breakdown
- Training track demand heatmaps
- Learner challenges analysis (connectivity, time constraints, etc.)

### ️ Geographic Insights
- Regional distribution of learners across Lebanese governorates
- Underrepresented region gap analysis
- Channel effectiveness by geography

###  Unified Learner Profile
- Searchable & filterable learner directory
- Per-learner view: demographics, training track, dissemination channel, skill level
- Provider status badge (Microsoft / Oracle completion tracking)

---

## ️ Architecture

```
Frontend (Next.js / TypeScript)
        │
        ▼
Backend API Layer
        │
        ├── Survey Mock API (NUMŪ Registration Data)
        │     └── Participant profiles, tracks, channels, regions
        │
        └── Provider Platforms (Microsoft / Oracle)
              └── Completion %, certificate status
```

The system follows a **survey-first, two-tier architecture**: the backend normalizes and aggregates raw survey data, while the frontend consumes clean endpoints to render policy-relevant visualizations.

---

## ️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Charts | Recharts |
| Package Manager | pnpm |
| Deployment | Vercel |

---

##  Getting Started

### Prerequisites
- Node.js v18+
- pnpm (`npm install -g pnpm`)

### Installation

```bash
git clone https://github.com/ilona0712/frontend-web-numu.git
cd frontend-web-numu
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

---

##  Team

Built by a USJ student team at the **Code for Lebanon x USJ Hackathon**, February 26, 2026.

- **Ilona Chamoun** — Frontend Development & Integration  
- **Mia Hajjar** — Frontend Development
- **Jerome Chaker** — Database
- **Hady Souaiby** — Backend Development & APIs
- **Ramy Badran** — Backend Development & APIs

---

##  Recognition

This project was awarded **Top 3 Finalist** at the Code for Lebanon x USJ Hackathon, evaluated by representatives from the Lebanese Ministry of IT & AI, Code for Lebanon, and H7ech.

---

##  License

This project was built as a hackathon prototype. All rights to the NUMŪ program and associated data belong to the Lebanese Ministry of IT & AI (MITAI).

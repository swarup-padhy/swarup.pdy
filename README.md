# Swarup Padhy — QA Engineering Portfolio

A premium, data-driven personal portfolio designed and developed to showcase QA engineering projects, documentation, and technical skills. Built with modern web standards, focusing on high-performance animations, accessible UI, and strict semantic structure.

[**View Live Deployment**](https://swarup-padhy.vercel.app/) (Assuming Vercel Domain)

---

## Technical Stack

- **Framework**: React 18 / Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS / shadcn/ui
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Key Architectural Decisions

- **100% Data-Driven Architecture**: All portfolio content (projects, experience, contact details, site config) is strictly decoupled from the UI and centralized in `src/data/*.json`. Updating a case study requires absolutely zero code modifications to React components.
- **Micro-Animations & Layout Performance**: Uses robust `framer-motion` for shared layout animations and route transitions, precisely calculated to avoid excessive DOM repaints.
- **Security First**: Vercel edge deployment guarded by `Strict-Transport-Security`, `X-Frame-Options: DENY`, and strict React rendering protocols that neutralize XSS injection surfaces.
- **Responsive & Accessible**: Strict semantic HTML structure spanning from mobile to 4k displays, ensuring screen reader compatibility and keyboard operability.

---

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/swarup-padhy/swarup.pdy.git
   cd swarup.pdy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Project Directory

```text
├── public/                 # Static assets (Resume, Webmanifest, Favicons)
├── src/
│   ├── components/         # Reusable UI architecture (Layout, Theme, Shadcn Utils)
│   ├── data/               # Centralized JSON datastores
│   ├── hooks/              # Custom React Hooks for viewport/data management
│   ├── pages/              # Core Application routes (Home, CaseStudyDetail, 404)
│   ├── sections/           # Modular Page Sections (Hero, CaseStudies, Contact, etc.)
│   └── store/              # Global Data aggregator for JSON
└── vercel.json             # Edge deployment and Security header configs
```

---
*Developed by [Swarup Padhy](https://github.com/swarup-padhy).*

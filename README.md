# Ilmam — Software Engineer Portfolio & Engineering Log

A minimalist, sleek Japanese white-themed software engineer portfolio and log layout built with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed around the principles of Japanese restraint (*kanso*), generous breathing room (*ma*), hairline precision borders, and sumi-ink typography.

---

## ⛩️ Design Philosophy & Aesthetics

- **Washi & Paper Whites**: Crisp, natural paper tones (`#FAFAF9` / `#FFFFFF`) that reduce eye fatigue.
- **Sumi Ink Contrast**: Deep charcoal and black typography (`#18181B`) for maximum reading legibility.
- **Hairline Precision**: 1px subtle neutral dividers (`border-neutral-200/80`) replacing heavy boxes and drop shadows.
- **Beni (Vermilion) Accent**: Single red seal stamp accent (`#C8321A`) used strictly for status indicators and authentic hanko signature.
- **Balanced Asymmetry (*fukinsei*)**: Monospaced metadata columns alongside generous editorial body text.

---

## 📁 Project Architecture & Layout

```
src/
├── components/
│   ├── Header.tsx           # Sticky nav with status indicator & mobile menu
│   ├── Hero.tsx             # Main value prop, live clock, bio, stats, and CTAs
│   ├── Projects.tsx         # Filterable selected projects with architecture details
│   ├── Experience.tsx       # Timeline of engineering roles & tangible impact
│   ├── Skills.tsx           # 4-column categorized technical arsenal
│   ├── Logs.tsx             # Engineering writeups, architectural tradeoffs, & case studies
│   ├── Contact.tsx          # Direct communication, one-click copy email, Hanko seal
│   ├── Footer.tsx           # Colophon, copyright, and scroll-to-top button
│   └── UI/
│       ├── Icons.tsx        # Type-safe SVG icons (GitHub, LinkedIn)
│       └── SectionHeading.tsx # Reusable minimalist numbered section headers
├── data/
│   └── portfolioData.ts     # ⭐️ ALL YOUR DATA LIVES HERE (Centralized & typed)
├── types/
│   └── portfolio.ts         # TypeScript schema definitions
├── App.tsx                  # Root layout structure
├── main.tsx                 # React entry point
└── index.css                # Tailwind CSS v4 & custom tokens
```

---

## ⚡ How to Add Your Own Data

All content is decoupled from the UI components. Whenever you are ready to input your personal information:

1. Open [`src/data/portfolioData.ts`](file:///d:/AI-Dev-Projects/ilmam-log-porto/src/data/portfolioData.ts).
2. Update:
   - `personalInfo`: Name, role, location, bio, contact links, and highlight metrics.
   - `projects`: Project title, description, architecture highlights, tech stack, and links.
   - `experiences`: Companies, roles, tenure, and achievements.
   - `skillCategories`: Categorized skills and proficiency.
   - `logPosts`: Engineering articles and technical notes.

*You can also simply paste your resume or data in the chat, and I can populate it for you directly!*

---

## 🚀 Getting Started

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

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

---

## 🌐 Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### One-time Setup (Root Domain: `ilmamhf.github.io`)

1. **Create the target repository** on GitHub:
   - Repository name: **`ilmamhf.github.io`** (exact match for user/org site)
   - Public or Private — either works
   - **Don't** initialize with README, .gitignore, or license

2. **Generate a Personal Access Token (classic)**:
   - Go to https://github.com/settings/tokens/new
   - Scopes: **`repo`** (full control of private repositories)
   - Copy the token immediately

3. **Add the token as a secret in THIS repo** (`ilmam-web-porto`):
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - **New repository secret** → Name: `DEPLOY_TOKEN` → Paste your PAT

4. **Enable GitHub Pages** in the target repo (`ilmamhf.github.io`):
   - **Settings** → **Pages** → **Source**: **GitHub Actions**

5. **Push to `main`** — the workflow `Deploy to User Site` will:
   - Build with pre-rendering (see below)
   - Push `dist/` contents to `ilmamhf/ilmamhf.github.io` on `main` branch
   - Site live at **`https://ilmamhf.github.io`**

### Project Site Backup (Optional)

A second workflow (`Deploy to GitHub Pages`) deploys to `https://ilmamhf.github.io/ilmam-web-porto/` as a fallback.

---

## 🔍 SEO & Crawler Support (Static Pre-Rendering)

This project uses **Static Site Generation (SSG)** via Vite's native SSR — no Next.js required.

### How It Works

```
npm run build
    │
    ├── 1. Client Build (Vite)
    │      Entry: index.html → src/entry-client.tsx
    │      Output: dist/assets/*.js, *.css, images
    │
    ├── 2. SSR Build (Vite --ssr)
    │      Entry: src/entry-server.tsx
    │      Output: dist-ssr/entry-server.mjs
    │
    └── 3. Pre-Render (prerender.mjs)
           Loads SSR bundle → renderToString(<App />)
           Writes complete HTML to dist/index.html (~42 KB)
```

### Crawler Behavior

| Crawler Type | What It Sees |
|--------------|--------------|
| **Search Engines** (Google, Bing) | Full portfolio content in initial HTML — all sections, headings, links, meta tags |
| **AI Crawlers** (GPTBot, ClaudeBot, PerplexityBot) | Complete readable content without JavaScript execution |
| **Content Extractors** (curl, wget, readability) | Structured HTML with semantic sections |
| **Social Previews** (Open Graph, Twitter Cards) | Meta tags rendered in source HTML |

### Runtime Flow

1. **Browser requests** `https://ilmamhf.github.io/`
2. **GitHub Pages serves** `dist/index.html` (pre-rendered, static)
3. **Crawlers immediately see** all content — no JS needed
4. **Browser loads** `client-*.js` + `client-*.css`
5. **React hydrates** existing DOM (`hydrateRoot`) — preserves server HTML, adds interactivity
6. **Client-only features activate**: live clock (Hero), scroll header, copy-to-clipboard, project filters

### Key Files for SSG

| File | Purpose |
|------|---------|
| `src/entry-server.tsx` | SSR entry — `renderToString(<App />)` → HTML string |
| `src/entry-client.tsx` | Hydration entry — `hydrateRoot()` attaches React |
| `prerender.mjs` | Build orchestrator — runs both builds + generates `index.html` |
| `vite.config.ts` | `ssr.noExternal` bundles React/lucide for SSR |

### Client-Only Features (SSR-Safe)

Components use `useEffect` for browser-only APIs — render initial state on server, enhance on client:
- **Hero**: Live clock (WIB timezone)
- **Header**: Scroll detection, mobile menu
- **Contact**: Copy email to clipboard
- **Projects**: Category filter pills

---

## 🚀 Getting Started

```bash
# Start development server
npm run dev

# Build for production (with pre-rendering)
npm run build

# Preview production build locally
npm run preview
```

### Build Output

```
dist/
├── index.html          # Pre-rendered HTML (~42 KB, full content)
├── assets/
│   ├── client-*.js     # React + app code
│   ├── client-*.css    # Tailwind styles
│   └── *.png, *.jpg    # Images
├── favicon.svg
├── icons.svg
└── .nojekyll           # Bypass Jekyll on GitHub Pages
```

### Configuration Notes

- `vite.config.ts` uses `base: './'` for relative asset paths (required for GitHub Pages)
- `.nojekyll` in `public/` bypasses Jekyll processing
- `prerender.mjs` handles Windows file:// URL compatibility for ESM imports

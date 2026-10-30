import type { PersonalInfo, Project, Experience, SkillCategory, LogPost } from '../types/portfolio';

/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION (Junior & Multi-Division Friendly)
 * =========================================================================
 * Focused on curiosity, cross-division versatility, continuous learning,
 * and hands-on building.
 */

export const personalInfo: PersonalInfo = {
  name: "Ilmam",
  kanjiName: "イルマム",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  role: "Junior Software Engineer",
  tagline: "Curious builder with cross-division exposure across frontend, backend, QA, and operations.",
  bio: "Early-career software engineer passionate about learning across the full product spectrum. Having collaborated across engineering, QA, product support, and operations, I value clear communication, pragmatic code, and steady continuous improvement. Always excited to dig into new technologies and contribute to a collaborative team.",
  location: "Indonesia / Remote",
  timezone: "UTC+7 (WIB)",
  availability: {
    status: "available",
    label: "Open to Junior / Associate Engineering opportunities"
  },
  contact: {
    email: "ilmam.dev@example.com",
    github: "https://github.com/ilmam",
    linkedin: "https://linkedin.com/in/ilmam",
    twitter: "https://x.com/ilmam",
    resumeUrl: "#"
  },
  stats: [
    { value: "3+", label: "Divisions Explored", sublabel: "Frontend · Backend · Ops" },
    { value: "10+", label: "Projects & Repos", sublabel: "Hands-on Exploration" },
    { value: "100%", label: "Curiosity & Grit", sublabel: "Continuous Learning" },
    { value: "Fast", label: "Team Ramp-Up", sublabel: "Adaptable & Collaborative" }
  ]
};

export const projects: Project[] = [
  {
    id: "flowpulse-ops-portal",
    title: "FlowPulse — Cross-Division Workflow Portal",
    japaneseTitle: "業務・連携基盤",
    description: "Internal dashboard and ticketing tool created to bridge operations and engineering, streamlining bug escalations, feature requests, and daily task sync.",
    architectureDetails: [
      "Built responsive UI with React and Tailwind CSS featuring searchable ticket filters and status boards.",
      "Developed lightweight REST API with Node.js and Express to handle CRUD operations and file attachments.",
      "Collaborated with operational team members to gather feedback and refine user workflows."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    category: "Full-Stack",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    featured: true,
    metrics: "Reduced internal ticket triage time by 35%"
  },
  {
    id: "zenith-storefront-app",
    title: "Zenith Storefront — Modern E-Commerce Web App",
    japaneseTitle: "商品・購入体験",
    description: "Full-featured shopping web app with responsive catalog browsing, cart state management, checkout simulation, and dynamic theme switching.",
    architectureDetails: [
      "Implemented clean client-side state management using Zustand for instantaneous cart updates.",
      "Designed mobile-first accessible navigation following WCAG color contrast guidelines.",
      "Integrated mock payment API handling success, timeout, and validation states gracefully."
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Zustand"],
    category: "Frontend & UI",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    featured: true,
    metrics: "100/100 Lighthouse Accessibility score"
  },
  {
    id: "kurolog-telemetry-api",
    title: "KuroLog — Structured Logger & API Utility",
    japaneseTitle: "記録・API基盤",
    description: "Lightweight backend REST API service for structured application logs, error tracing, and formatted query inspection for developer teams.",
    architectureDetails: [
      "Structured modular MVC architecture with clear separation of routes, controllers, and services.",
      "Added request validation middleware and automated error handlers with meaningful status codes.",
      "Wrote integration test suites using Jest and Supertest covering primary API endpoints."
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "Jest", "Docker"],
    category: "Backend & APIs",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    featured: true,
    metrics: "85%+ Automated test coverage"
  },
  {
    id: "deploycraft-ci-starter",
    title: "DeployCraft — CI/CD Pipeline & Docker Boilerplate",
    japaneseTitle: "自動化・開発環境",
    description: "Reproducible containerized development starter kit with automated linting, test execution, and deployment previews on GitHub Actions.",
    architectureDetails: [
      "Configured multi-stage Dockerfile optimizing container build cache and keeping image size minimal.",
      "Automated GitHub Actions workflow for pull request checks, code formatting, and build verification."
    ],
    techStack: ["Docker", "GitHub Actions", "Shell Scripting", "Linux"],
    category: "Tools & Ops",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com",
    featured: false,
    metrics: "Turnkey multi-environment dev setup"
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Junior Software Engineer",
    company: "Apex Tech Solutions",
    companyUrl: "https://example.com",
    period: "2023 — Present",
    location: "Jakarta / Remote",
    type: "Full-Time",
    description: "Contributing across frontend features, backend API integrations, and maintenance of customer-facing web services while learning team standards and best practices.",
    highlights: [
      "Developed and tested 15+ UI components in React and TypeScript following the design team's Figma specifications.",
      "Assisted in backend REST API maintenance, fixing edge cases and writing SQL queries for reporting features.",
      "Collaborated actively with QA and Product teams to reproduce, debug, and resolve reported client bugs during sprint cycles.",
      "Participated in daily standups, sprint reviews, and technical code reviews to learn clean architecture habits."
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Git", "Jira"]
  },
  {
    id: "exp-2",
    role: "Software Engineering Intern / Cross-Division Rotation",
    company: "Nexus Digital Innovation",
    companyUrl: "https://example.com",
    period: "2022 — 2023",
    location: "Hybrid",
    type: "Internship",
    description: "Rotated through product operations, technical QA testing, and web development to understand the full software development lifecycle.",
    highlights: [
      "Documented API endpoints using Postman and Swagger, improving onboarding clarity for new team contributors.",
      "Conducted manual and automated regression testing before production releases to prevent regressions.",
      "Assisted operations staff by building internal scripts to automate repetitive data entry workflows."
    ],
    technologies: ["JavaScript", "HTML/CSS", "Postman", "Git", "Excel/Sheets Automation", "Jest"]
  },
  {
    id: "exp-3",
    role: "Independent Builder & Computer Science Journey",
    company: "Academic & Self-Directed Projects",
    companyUrl: "https://example.com",
    period: "2021 — 2022",
    location: "Remote",
    type: "Learning & Projects",
    description: "Deep dive into web fundamentals, computer science foundations, algorithms, and practical software engineering.",
    highlights: [
      "Built multiple full-stack projects from scratch to understand client-server communication, relational databases, and DOM manipulation.",
      "Practiced collaborative Git workflows, semantic commits, and open-source contribution etiquette."
    ],
    technologies: ["JavaScript", "Python", "SQL", "HTML5", "CSS3", "Git"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Foundations",
    japaneseTitle: "基礎・言語",
    skills: [
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Proficient" },
      { name: "SQL (PostgreSQL / MySQL)", level: "Familiar" },
      { name: "Python Basics", level: "Familiar" },
      { name: "Go (Golang)", level: "Learning" }
    ]
  },
  {
    title: "Frontend Development",
    japaneseTitle: "フロントエンド",
    skills: [
      { name: "React 19 / 18", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "Next.js", level: "Familiar" },
      { name: "Responsive UI & Mobile Web", level: "Proficient" },
      { name: "State Management (Zustand/Context)", level: "Familiar" },
      { name: "Vite Build Tooling", level: "Proficient" }
    ]
  },
  {
    title: "Backend & Data",
    japaneseTitle: "バックエンド・データ",
    skills: [
      { name: "Node.js / Express", level: "Proficient" },
      { name: "RESTful API Design", level: "Proficient" },
      { name: "PostgreSQL Database", level: "Familiar" },
      { name: "CRUD Operations & Data Modeling", level: "Proficient" },
      { name: "Authentication (JWT / Sessions)", level: "Familiar" },
      { name: "API Documentation (Postman/Swagger)", level: "Proficient" }
    ]
  },
  {
    title: "Cross-Division & Tools",
    japaneseTitle: "協業・ツール",
    skills: [
      { name: "Git & GitHub Collaboration", level: "Proficient" },
      { name: "QA & Unit Testing (Jest)", level: "Familiar" },
      { name: "Docker Basics", level: "Familiar" },
      { name: "CI/CD (GitHub Actions)", level: "Learning" },
      { name: "Agile & Jira Workflows", level: "Proficient" },
      { name: "Figma to Code Translation", level: "Proficient" }
    ]
  }
];

export const logPosts: LogPost[] = [
  {
    id: "log-01",
    title: "Lessons Learned From Multi-Division Exposure: Bridging Ops & Engineering",
    date: "2026-08-10",
    readTime: "4 min read",
    summary: "How spending time with operations and QA completely reshaped how I write backend error messages, validate inputs, and structure user-friendly APIs.",
    tags: ["Reflection", "Cross-Division", "Teamwork"]
  },
  {
    id: "log-02",
    title: "My Journey With TypeScript: Moving From 'Any' to Confident Type Safety",
    date: "2026-05-18",
    readTime: "5 min read",
    summary: "Practical takeaways from refactoring JavaScript apps to TypeScript, handling union types, generics, and writing maintainable component props.",
    tags: ["TypeScript", "Frontend", "Learning"]
  },
  {
    id: "log-03",
    title: "Demystifying SQL Joins and Query Optimization for Junior Developers",
    date: "2026-03-02",
    readTime: "6 min read",
    summary: "A beginner-friendly exploration of INNER vs. LEFT joins, indexes, and how understanding database execution prevents nasty N+1 query bottlenecks.",
    tags: ["SQL", "Databases", "Fundamentals"]
  }
];

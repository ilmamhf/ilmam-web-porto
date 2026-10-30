import type { PersonalInfo, Project, Experience, SkillCategory, LogPost } from '../types/portfolio';

/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * You can easily update this file with your own real-world data,
 * or send your resume/LinkedIn details and we'll format it for you.
 */

export const personalInfo: PersonalInfo = {
  name: "Ilmam",
  kanjiName: "イルマム", // Japanese phonetic representation for aesthetic touch
  role: "Software Engineer & Systems Architect",
  tagline: "Designing resilient backend architectures, clean APIs, and minimalist interfaces.",
  bio: "Software engineer dedicated to crafting high-performance, maintainable web systems. Guided by principles of restraint, clean modular design, and robust distributed fundamentals. Constantly exploring the intersection of modern web ecosystems, cloud infrastructure, and intuitive developer tooling.",
  location: "Indonesia / Remote",
  timezone: "UTC+7 (WIB)",
  availability: {
    status: "available",
    label: "Open to new engineering challenges & collaborations"
  },
  contact: {
    email: "ilmam.dev@example.com", // Replace with your email
    github: "https://github.com/ilmam",
    linkedin: "https://linkedin.com/in/ilmam",
    twitter: "https://x.com/ilmam",
    resumeUrl: "#"
  },
  stats: [
    { value: "4+", label: "Years Experience", sublabel: "Production Systems" },
    { value: "99.9%", label: "Uptime Targets", sublabel: "SLA Reliability" },
    { value: "15+", label: "Projects Shipped", sublabel: "From Concept to Scale" },
    { value: "10k+", label: "Daily Transactions", sublabel: "Optimized Pipelines" }
  ]
};

export const projects: Project[] = [
  {
    id: "kuro-cloud-engine",
    title: "Kuro Engine — High-Throughput Event Broker",
    japaneseTitle: "黒・エンジン",
    description: "Distributed lightweight event ingestion and telemetry streaming engine designed for low-latency messaging, microservices decoupling, and structured audit logs.",
    architectureDetails: [
      "Engineered partitioned log buffer handling over 12,000 requests/sec with sub-millisecond p99 latency.",
      "Implemented zero-copy serialization protocol reducing network bandwidth consumption by 34%.",
      "Integrated Prometheus metrics collector and automated health checking mechanisms."
    ],
    techStack: ["Go", "gRPC", "Redis", "Docker", "Prometheus", "PostgreSQL"],
    category: "Backend & Systems",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    featured: true,
    metrics: "12k req/sec · sub-ms p99"
  },
  {
    id: "zenith-commerce-api",
    title: "Zenith Commerce Platform",
    japaneseTitle: "頂点・プラットフォーム",
    description: "Enterprise multi-tenant headless commerce engine featuring dynamic inventory reconciliation, idempotent checkout processing, and real-time webhook dispatching.",
    architectureDetails: [
      "Designed distributed locking mechanism using Redis to eliminate race conditions during high-volume flash sales.",
      "Structured comprehensive REST and GraphQL APIs with automated OpenAPI contract tests.",
      "Deployed automated CI/CD pipeline reducing release cycle turnaround time by 60%."
    ],
    techStack: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "AWS"],
    category: "Full-Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    featured: true,
    metrics: "99.98% Idempotency Accuracy"
  },
  {
    id: "kaizen-dev-observability",
    title: "Kaizen — Developer Log & Metrics Suite",
    japaneseTitle: "改善・観測基盤",
    description: "Developer-first telemetry visualization workspace providing live log query filtering, distributed tracing traces, and automated performance anomaly alerts.",
    architectureDetails: [
      "Built reactive dashboard with virtualized infinite scrolling handling 100k+ DOM log entries smoothly.",
      "Optimized query parser utilizing WebAssembly regex engine for instantaneous pattern matches."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Go", "ClickHouse", "WebSockets"],
    category: "Full-Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    featured: true,
    metrics: "<50ms query responses"
  },
  {
    id: "shizuka-infra-kit",
    title: "Shizuka — Declarative Infrastructure Kit",
    japaneseTitle: "静か・インフラ",
    description: "Infrastructure-as-code modules and Kubernetes operator for reproducible cloud native deployments with built-in zero-trust security postures.",
    architectureDetails: [
      "Custom Kubernetes custom resource definitions (CRD) managing database failovers automatically.",
      "Automated mutual TLS (mTLS) certificate rotation via cert-manager and HashiCorp Vault."
    ],
    techStack: ["Terraform", "Kubernetes", "Go", "AWS EKS", "GitHub Actions"],
    category: "Cloud & DevOps",
    githubUrl: "https://github.com",
    featured: false,
    metrics: "Zero-Downtime Deployments"
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Software Engineer",
    company: "Apex Systems Labs",
    companyUrl: "https://example.com",
    period: "2023 — Present",
    location: "Jakarta / Remote",
    type: "Full-Time",
    description: "Leading core backend infrastructure and API microservices. Spearheaded system scalability initiatives and mentored junior engineers.",
    highlights: [
      "Refactored legacy monolith into domain-driven event-driven microservices, reducing deployment risk and downtime by 75%.",
      "Architected caching layers using Redis clusters that decreased database load during peak traffic spikes by 40%.",
      "Formulated code review guidelines and automated linting/testing pipelines to standardize software quality across teams."
    ],
    technologies: ["Go", "TypeScript", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "AWS"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Software Engineer",
    company: "Nexus Digital Innovation",
    companyUrl: "https://example.com",
    period: "2021 — 2023",
    location: "Remote",
    type: "Full-Time",
    description: "Engineered client-facing web applications and internal operational portals used by thousands of daily enterprise users.",
    highlights: [
      "Built modular React/TypeScript component systems with high accessibility standards and sub-second initial load times.",
      "Engineered secure payment gateway integrations with automated webhook verification and retry queues.",
      "Collaborated with product designers to implement clean, minimal interfaces that boosted conversion rates by 22%."
    ],
    technologies: ["React", "Node.js", "Express", "TypeScript", "Tailwind CSS", "MongoDB", "Redis"]
  },
  {
    id: "exp-3",
    role: "Junior Backend Developer",
    company: "KuroTech Studio",
    companyUrl: "https://example.com",
    period: "2020 — 2021",
    location: "Hybrid",
    type: "Contract",
    description: "Developed RESTful APIs, optimized database indexes, and assisted in building automated test suites.",
    highlights: [
      "Implemented comprehensive unit and integration test coverage increasing codebase test suite coverage from 45% to 88%.",
      "Optimized slow SQL queries via index tuning, cutting report generation times from 14s to 800ms."
    ],
    technologies: ["Node.js", "PostgreSQL", "Docker", "Jest", "Git"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    japaneseTitle: "言語",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ESNext)", level: "Advanced" },
      { name: "Go (Golang)", level: "Advanced" },
      { name: "SQL", level: "Proficient" },
      { name: "Python", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Advanced" }
    ]
  },
  {
    title: "Backend & Systems",
    japaneseTitle: "バックエンド",
    skills: [
      { name: "Node.js / Bun", level: "Advanced" },
      { name: "RESTful & GraphQL APIs", level: "Advanced" },
      { name: "gRPC & Protocol Buffers", level: "Proficient" },
      { name: "PostgreSQL & MySQL", level: "Advanced" },
      { name: "Redis Caching", level: "Advanced" },
      { name: "Event-Driven & Message Queues", level: "Proficient" }
    ]
  },
  {
    title: "Frontend Engineering",
    japaneseTitle: "フロントエンド",
    skills: [
      { name: "React 19 / 18", level: "Advanced" },
      { name: "Next.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Vite & Modern Bundlers", level: "Advanced" },
      { name: "State Management (Zustand)", level: "Proficient" },
      { name: "UI/UX & Accessibility", level: "Proficient" }
    ]
  },
  {
    title: "Infrastructure & DevOps",
    japaneseTitle: "インフラ・基盤",
    skills: [
      { name: "Docker & Containerization", level: "Advanced" },
      { name: "Kubernetes Basics", level: "Familiar" },
      { name: "AWS Cloud Services", level: "Proficient" },
      { name: "CI/CD (GitHub Actions)", level: "Advanced" },
      { name: "Linux Administration", level: "Proficient" },
      { name: "Git Workflow & Branching", level: "Advanced" }
    ]
  }
];

export const logPosts: LogPost[] = [
  {
    id: "log-01",
    title: "Designing Idempotent APIs: Handling Distributed Retries Gracefully",
    date: "2026-08-14",
    readTime: "6 min read",
    summary: "Architecting payment gateways and webhook dispatchers that guarantee exactly-once business outcome despite network failures and repeated requests.",
    tags: ["Backend", "Architecture", "Distributed Systems"]
  },
  {
    id: "log-02",
    title: "The Art of Restraint in Modern Web Architecture",
    date: "2026-06-22",
    readTime: "4 min read",
    summary: "Why stripping away unnecessary dependencies, premature abstractions, and heavy UI bloat leads to faster software and calmer developer workflows.",
    tags: ["Philosophy", "Web Engineering", "Clean Code"]
  },
  {
    id: "log-03",
    title: "PostgreSQL Index Tuning: From 12-Second Full Scans to Index-Only Lookups",
    date: "2026-04-10",
    readTime: "8 min read",
    summary: "A practical deep dive into B-Trees, GiST, partial indexes, and analyzing EXPLAIN ANALYZE execution trees in high-concurrency environments.",
    tags: ["PostgreSQL", "Database", "Performance"]
  }
];

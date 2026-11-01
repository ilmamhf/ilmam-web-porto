import type { PersonalInfo, Project, Experience, SkillCategory } from '../types/portfolio';
import ConversatypePreview from '../assets/Conversatype.png';
import YourPageCmsPreview from '../assets/Page CMS.png';
import profilePicture from '../assets/pp1.jpg';

export const personalInfo: PersonalInfo = {
  name: "Ilmam",
  avatarUrl: profilePicture,  
  role: "Software Engineer",
  tagline: "",
  bio: "A Computer Engineering Graduate with a current focus of Web Development and Transferable Programming Fundamental. I have multiple exposure to technologies from college and projects which is Web Development, IoT, LLM/AI/ML models implementation (Local and API), Databases (SQL, NoSQL, and S3 Object Storage), Cloud Services (Supabase, Firebase, AWS, Vercel, etc) to integrating multiple application (Web-Cloud-AI-Mobile). I also try to do some codewars, leetcode, or experimenting something new in my free time. Accountability and deliverability are my core values in developing products.",
  location: "Indonesia / Remote",
  timezone: "UTC+7 (WIB)",
  availability: {
    status: "available",
    label: "Open to Work / Collaboration"
  },
  contact: {
    email: "ilmamhf643@gmail.com",
    github: "https://github.com/ilmamhf",
    linkedin: "https://www.linkedin.com/in/ilmam-hashfi-firjatullah/",
    resumeUrl: "#"
  },
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Your Landing Page + CMS",
    description: "A portfolio/business landing-page builder: made using Laravel 12 API that serves a section-based public website (the backend), plus a React 19 admin CMS to manage all of it (the frontend). No coding needed to change what's on the page. This project teached me how to properly develop a proper fullstack web application from making PRD, making API Contract, and structured development phases. Learnt js/ts callback function, data fetching, component-data handling, type-safe codebase and proper MVC Backend structure with Laravel API implementing Model, Controller, Validation, Resource, DB Migration, Factory, and Seeder.",
    architectureDetails: [
      "Built frontend using React Vite, Tailwind, Axios, React Router",
      "Developed structured backend with MVC pattern using Laravel API",
      "End to end development from whiteboarding requirement, database design, UI/UX reference all in Miro before starting"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Laravel API", "PostgreSQL"],
    category: "Full-Stack",
    imageUrl: YourPageCmsPreview,
    githubUrl: "https://github.com/ilmamhf/your-page-cms",
    // liveUrl: "https://demo.example.com",
    featured: true,
  },
  {
    id: "2",
    title: "Conversatype",
    description: "A web-based typing game for training typing words and simulating English conversation. Made using Vite React Tailwind and Antigravity. This project is a result of experimenting doing Web Development from zero to deployment using AI Driven Development. Experimented with publishing website and SEO, used Vercel for Deployment, Cloudflare for Domain, Google Search Console for making site indexed from google search, and Posthog for site analytics.",
    architectureDetails: [
      "Clean gamified Web made using Vite React Tailwind",
      "Tested AI Driven Development",
      "Full live site deployed and google indexed"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Posthog", "Google Search Console"],
    category: "Tools & Ops",
    imageUrl: ConversatypePreview,
    githubUrl: "https://github.com/ilmamhf/Conversatype-Web",
    liveUrl: "https://conversatype-web.vercel.app",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "AI Engineer",
    company: "PT DOT Indonesia",
    period: "July 2025 — November 2025",
    location: "Malang",
    type: "Internship",
    description: "Developed several Fullstack Web and Automation PoC built around AI/ML/LLM models. Mainly doing research to company poc product ideas and exploring LLM API, N8N Automation, and Computer Vision based projects.",
    highlights: [
      "Developed and delivered 3+ AI based PoC products.",
      "Learnt, researched, developed and participated in client based product development with company CTO.",
      "Participated in daily standups, sprint reviews, and technical code reviews to learn professional software development industry."
    ],
    technologies: ["NextJS", "Python FastAPI", "N8N", "YOLO", "OpenRouter", "Supabase", "Kaggle", "Google Colab", "Gemini", "Label Studio", "Roboflow", "Spreadsheet"]
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Foundations",
    skills: [
      { name: "JavaScript / TypeScript", level: "Proficient" },
      { name: "PHP", level: "Familiar" },
      { name: "Python", level: "Proficient" },
      { name: "HTML / CSS", level: "Proficient" },
      { name: "SQL (PostgreSQL / MySQL)", level: "Familiar" },
      { name: "C++", level: "Familiar" },
      { name: "Java", level: "Learning" },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: "Familiar" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "Next.js", level: "Familiar" },
    ]
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "RESTful API Design", level: "Proficient" },
      { name: "Laravel", level: "Proficient" },
      { name: "SQL/NoSQL Databases", level: "Familiar" },
      { name: "CRUD Operations & Data Modeling", level: "Familiar" },
      { name: "Authentication (JWT)", level: "Familiar" },
      { name: "API Testing (Postman)", level: "Familiar" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: "Familiar" },
      { name: "Docker Basics", level: "Learning" },
      { name: "Miro", level: "Familiar" },
      { name: "Excalidraw", level: "Familiar" },
      { name: "Google Workspace", level: "Familiar" },
      { name: "SEO", level: "Learning" },
      { name: "Figma", level: "Familiar" },
    ]
  }
];

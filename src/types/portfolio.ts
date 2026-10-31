export interface PersonalInfo {
  name: string;
  avatarUrl?: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  timezone: string;
  availability: {
    status: 'available' | 'busy' | 'selective';
    label: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
    resumeUrl?: string;
  };
  stats?: Array<{
    value: string;
    label: string;
    sublabel?: string;
  }>;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  architectureDetails: string[];
  techStack: string[];
  category: 'Full-Stack' | 'Frontend & UI' | 'Backend & APIs' | 'Tools & Ops';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  subtitle?: string;
  skills: Array<{
    name: string;
    level?: 'Proficient' | 'Familiar' | 'Learning' | 'Advanced';
    iconName?: string;
  }>;
}

export type ProjectCategory = 'ALL' | 'AI / GENAI' | 'FULL STACK' | 'WEB' | 'BACKEND';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  role: string;
  image?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  disclaimer?: string;
  isInternshipProject?: boolean;
  hasInteractiveDemo?: 'finance' | 'todo';
}

export type SkillCategory = 'PROGRAMMING' | 'FRONTEND' | 'BACKEND' | 'AI / GENERATIVE AI' | 'TOOLS / DEVELOPMENT';

export interface SkillItem {
  name: string;
  level: string;
  description: string;
  iconName: string;
}

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  internshipProjects: string[];
}

export interface EducationItem {
  degree: string;
  specialization: string;
  status: string;
  graduationYear: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  duration?: string;
  type: string;
  skillsCovered: string[];
}

export interface FinanceTransaction {
  id: string;
  type: 'income' | 'expense' | 'savings';
  amount: number;
  category: string;
  description: string;
  date: string;
}

export interface TodoTask {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  priority: 'low' | 'medium' | 'high';
}

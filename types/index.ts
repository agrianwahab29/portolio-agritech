// types/index.ts — Tipe data konten AgrianTech Portfolio

export type ProjectStatus =
  | "Published"
  | "Completed"
  | "Case Study"
  | "Academic"
  | "In Progress"
  | "Archived";

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  priority: number;
  summary: string;
  description: string;
  problem?: string;
  goals?: string[];
  solution?: string;
  role: string;
  techStack: string[];
  features: string[];
  thumbnail: string;
  screenshots?: string[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudySlug?: string;
  tags: string[];
  result?: string;
  challenges?: string[];
  lessonsLearned?: string[];
  process?: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: string;
  skills: string[];
};

export type PublicationStatus =
  | "Published"
  | "Accepted"
  | "In Press"
  | "Under Review";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume?: string;
  status: PublicationStatus;
  accreditation?: string;
  doiUrl?: string;
  topic: string[];
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  number?: string;
  credentialUrl?: string;
};

export type ExperienceType =
  | "internship"
  | "organization"
  | "academic"
  | "volunteer"
  | "speaker";

export type Experience = {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type: ExperienceType;
  description: string;
  achievements: string[];
  technologies?: string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Social = {
  platform: string;
  url: string;
  icon: string;
  label: string;
};

export type Stat = {
  id: string;
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  icon: string;
};

export type Profile = {
  name: string;
  brand: string;
  headline: string;
  headlineEn: string;
  headlineId: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github?: string;
  location: string;
  bio: string;
  bioShort: string;
  education: {
    university: string;
    degree: string;
    period: string;
    gpa: string;
  };
  cvUrl: string;
};

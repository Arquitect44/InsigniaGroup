// Core Data Schemas for Insignia Group

export type ProjectStatus = 'completed' | 'in-progress' | 'future';
export type ProjectSector = 'residential' | 'commercial' | 'mixed-use' | 'industrial';
export type ServiceType = 'design-build' | 'construction-management' | 'full-integration' | 'asset-management';

export interface Project {
  id: string;
  title: string;
  slug: string;
  sector: ProjectSector;
  status: ProjectStatus;
  services: ServiceType[];
  location: string;
  completionDate?: string;
  squareFootage?: number;
  numberOfUnits?: number;
  heroImage: string;
  heroVideo?: string;
  description: string;
  challenge?: string;
  insigniaAdvantage: string;
  website?: string;
  keyFeatures: string[];
  gallery: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company?: string;
  };
  relatedProjects?: string[]; // Array of project IDs
}

export interface Capability {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  caseStudies?: string[]; // Array of project IDs
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: 'leadership' | 'design' | 'construction' | 'management' | 'operations';
  bio: string;
  expertise: string[];
  image: string;
  email?: string;
  linkedin?: string;
}

export interface Insight {
  id: string;
  title: string;
  slug: string;
  type: 'market-analysis' | 'case-study' | 'commentary' | 'news';
  author: string;
  publishDate: string;
  readTime: number; // minutes
  excerpt: string;
  content: string; // Markdown content
  heroImage: string;
  tags: string[];
  relatedInsights?: string[];
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType: 'investment' | 'leasing' | 'partnership' | 'career' | 'general';
  message: string;
}

// Navigation & UI Types
export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

export interface FilterOptions {
  sectors: ProjectSector[];
  statuses: ProjectStatus[];
  services: ServiceType[];
}

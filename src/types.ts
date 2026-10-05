export interface Project {
  id: string;
  code: string;
  title: string;
  category: 'villas' | 'residences' | 'interiors' | 'commercial';
  categoryLabel: string;
  location?: string;
  area: string;
  completionYear: string;
  image: string;
  description: string;
  highlights: string[];
  specs: {
    structure: string;
    flooring: string;
    woodwork: string;
    features: string;
  };
  clientType: string;
  status: 'Completed' | 'In Progress';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  materials: string[];
  icon: string;
}

export interface LiveProjectUpdate {
  projectId: string;
  clientName: string;
  projectTitle: string;
  location: string;
  totalSqFt: number;
  stage: string;
  overallProgress: number; // 0-100
  lastUpdated: string;
  siteEngineer: string;
  engineerContact: string;
  currentMilestone: string;
  nextMilestone: string;
  steps: {
    title: string;
    status: 'completed' | 'in-progress' | 'upcoming';
    date: string;
    notes?: string;
  }[];
  recentSiteNotes: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  sqFt: string;
  quote: string;
  year: string;
}

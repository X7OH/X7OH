export interface Basics {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  picture: string;
  summary: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface PortfolioData {
  basics: Basics;
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: any[];
}

// src/data/types.ts

export interface Activity {
  id: string;
  title: string;
  description: string;
  year: string;
  type: string;
  image: string;
  images?: string[]; // optional
  tags: string[];
  details: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  type: string;
  image: string;
  tags: string[];
  github?: string | null;
  liveDemo?: string | null;
  overview?: string;
  features?: string[];
  frontendCode?: string | null;
  backendCode?: string | null;
}
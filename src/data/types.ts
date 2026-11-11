// src/data/types.ts
// Every content item is written in English; the optional `km` block holds the
// Khmer version. Anything missing from `km` falls back to the English text.

export interface Activity {
  id: string;
  title: string;
  description: string;
  year: string;
  type: string;
  image: string;
  images?: string[];
  tags: string[];
  details: string;
  km?: Partial<Pick<Activity, "title" | "description" | "type" | "tags" | "details">>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  type: string;
  image: string;
  tags: string[];
  /** "coming-soon" hides the detail link and shows a badge instead. Defaults to "live". */
  status?: "live" | "coming-soon";
  github?: string | null;
  liveDemo?: string | null;
  overview?: string;
  features?: string[];
  frontendCode?: string | null;
  backendCode?: string | null;
  km?: Partial<Pick<Project, "title" | "description" | "type" | "overview" | "features">>;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  type: string;
  image: string;
  /** URL of the certificate. Without it the card shows "Certificate Pending". */
  certificate?: string;
  tags: string[];
  km?: Partial<Pick<Achievement, "title" | "description" | "type" | "tags">>;
}

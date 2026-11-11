// src/data/skills.js
//
// Single source of truth for the Skills section (and the hero "solar system").
// To add a skill: append `{ name, icon }` to a group. The count badge is automatic.
//
// - `icon`  → file name (without .svg) inside /public/assets/icons/tech/
// - `mono`  → true for black-only logos that need inverting on dark backgrounds

/**
 * @typedef {{ name: string, icon: string, mono?: boolean }} Skill
 * @typedef {{ id: string, en: string, km: string, accent?: 'primary' | 'gold', items: Skill[] }} SkillGroup
 * @type {SkillGroup[]}
 */
export const skillGroups = [
  {
    id: "backend",
    en: "Backend",
    km: "Backend",
    items: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodejs" },
      { name: "REST APIs", icon: "rest-api" },
    ],
  },
  {
    id: "database",
    en: "Database",
    km: "មូលដ្ឋានទិន្នន័យ",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQL Server", icon: "microsoftsqlserver" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    id: "frontend",
    en: "Frontend",
    km: "Frontend",
    items: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Astro", icon: "astro" },
    ],
  },
  {
    id: "tools",
    en: "Tools",
    km: "ឧបករណ៍",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", mono: true },
      { name: "Figma", icon: "figma" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
    ],
  },
  {
    id: "mobile",
    en: "Mobile",
    km: "កម្មវិធីទូរសព្ទ",
    items: [
      { name: "Dart", icon: "dart" },
      { name: "Flutter", icon: "flutter" },
    ],
  },
  {
    id: "exploring",
    en: "Exploring",
    km: "កំពុងស្វែងយល់",
    accent: "gold",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel", mono: true },
    ],
  },
];

/**
 * Icons orbiting the profile photo in the hero.
 * `ring` 0 = outer (slow), 1 = inner (fast). Angles are spread evenly per ring.
 */
export const orbitSkills = [
  { name: "Java", icon: "java", ring: 0 },
  { name: "PostgreSQL", icon: "postgresql", ring: 0 },
  { name: "Spring Boot", icon: "spring", ring: 1 },
  { name: "Python", icon: "python", ring: 1 },
  { name: "Node.js", icon: "nodejs", ring: 1 },
];

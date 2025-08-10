export type SkillCategory = "language" | "framework" | "database" | "tool";

export interface SkillItem {
  id: number;
  label: string;
  category: SkillCategory;
}

export const skillItems: SkillItem[] = [
  // Languages
  {
    id: 1,
    label: "JavaScript",
    category: "language",
  },
  {
    id: 2,
    label: "TypeScript",
    category: "language",
  },
  {
    id: 3,
    label: "Python",
    category: "language",
  },
  {
    id: 4,
    label: "C++",
    category: "language",
  },

  // Frameworks & Libraries
  {
    id: 5,
    label: "Next.Js",
    category: "framework",
  },
  {
    id: 6,
    label: "React",
    category: "framework",
  },
  {
    id: 7,
    label: "Django",
    category: "framework",
  },

  // Databases
  {
    id: 8,
    label: "PostgreSQL",
    category: "database",
  },
  {
    id: 9,
    label: "SQL",
    category: "database",
  },

  // Tools
  {
    id: 10,
    label: "Vercel",
    category: "tool",
  },
  {
    id: 11,
    label: "Figma",
    category: "tool",
  },
  {
    id: 12,
    label: "Wordpress",
    category: "tool",
  },
  {
    id: 13,
    label: "M365",
    category: "tool",
  },
  {
    id: 14,
    label: "GitHub",
    category: "tool",
  },
  {
    id: 15,
    label: "Postman",
    category: "tool",
  },
  {
    id: 16,
    label: "Nmap",
    category: "tool",
  },
  {
    id: 17,
    label: "Nikto",
    category: "tool",
  },
];

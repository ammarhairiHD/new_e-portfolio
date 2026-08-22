export type SkillCategory = "language" | "framework" | "database" | "tool" | "cloud computing";

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
    label: "Java",
    category: "language",
  },
  {
    id: 5,
    label: "Kotlin",
    category: "language",
  },
  {
    id: 6,
    label: "PHP",
    category: "language",
  },

  // Frameworks & Libraries
  {
    id: 7,
    label: "Next.Js",
    category: "framework",
  },
  {
    id: 8,
    label: "React",
    category: "framework",
  },
  {
    id: 9,
    label: "Django",
    category: "framework",
  },
  {
    id: 10,
    label: "Jetpack Compose",
    category: "framework",
  },
  {
    id: 11,
    label: "Laravel",
    category: "framework",
  },

  // Databases
  {
    id: 12,
    label: "PostgreSQL",
    category: "database",
  },
  {
    id: 13,
    label: "MySQL",
    category: "database",
  },
  {
    id: 14,
    label: "Oracle DB",
    category: "database",
  },
  {
    id: 15,
    label: "MongoDB",
    category: "database",
  },

  // Tools
  {
    id: 16,
    label: "Vercel",
    category: "tool",
  },
  {
    id: 17,
    label: "Figma",
    category: "tool",
  },
  {
    id: 18,
    label: "Wordpress",
    category: "tool",
  },
  {
    id: 19,
    label: "M365",
    category: "tool",
  },
  {
    id: 20,
    label: "GitHub",
    category: "tool",
  },
  {
    id: 21,
    label: "Gitlab",
    category: "tool",
  },
  {
    id: 22,
    label: "Postman",
    category: "tool",
  },
  {
    id: 23,
    label: "Nmap",
    category: "tool",
  },
  {
    id: 24,
    label: "Nikto",
    category: "tool",
  },

  // Cloud Computing
  {
    id: 25,
    label: "Google Cloud",
    category: "cloud computing",
  },
  {
    id: 26,
    label: "AWS",
    category: "cloud computing",
  },
];

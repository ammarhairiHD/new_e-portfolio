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
    category: "language"
  },

  // Frameworks & Libraries
  {
    id: 6,
    label: "Next.Js",
    category: "framework",
  },
  {
    id: 7,
    label: "React",
    category: "framework",
  },
  {
    id: 8,
    label: "Django",
    category: "framework",
  },
  {
    id: 9,
    label: "Jetpack Compose ",
    category: "framework",
  },
  // Databases
  {
    id: 10,
    label: "PostgreSQL",
    category: "database",
  },
  {
    id: 10,
    label: "MySQL",
    category: "database",
  },
  {
    id: 11,
    label: "MongoDB",
    category: "database",
  },

  // Tools
  {
    id: 12,
    label: "Vercel",
    category: "tool",
  },
  {
    id: 13,
    label: "Figma",
    category: "tool",
  },
  {
    id: 14,
    label: "Wordpress",
    category: "tool",
  },
  {
    id: 15,
    label: "M365",
    category: "tool",
  },
  {
    id: 16,
    label: "GitHub",
    category: "tool",
  },
  {
    id: 17,
    label: "Postman",
    category: "tool",
  },
  {
    id: 18,
    label: "Nmap",
    category: "tool",
  },
  {
    id: 19,
    label: "Nikto",
    category: "tool",
  },
  // Cloud Computing
  {
    id: 20,
    label: "Google Cloud",
    category: "cloud computing",
  },
  {
    id: 21,
    label: "AWS",
    category: "cloud computing",
  }
];

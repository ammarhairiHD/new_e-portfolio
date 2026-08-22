export interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  link?: string;
  badgeText: string;
  isWinner: boolean;
}

export const awardsData: Award[] = [
  {
    id: 1,
    title: "Malaysia Website Awards",
    organization: "MWA / Exabytes",
    year: "2025",
    category: "Personal Portfolio",
    description:
      "Recognized for creative web design and storytelling, tracing the journey from marine operations to software engineering.",
    link: "https://www.mwa.my/nominees/2025/personal-portfolio-3/",
    badgeText: "Official Nominee",
    isWinner: false,
  },
];
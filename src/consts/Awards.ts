export interface SubAward {
  name: string;
  ribbon?: string;
}

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
  awards?: SubAward[];
}

export const awardsData: Award[] = [
  {
    id: 1,
    title: "Malaysia Website Awards",
    organization: "MWA / Exabytes",
    year: "2025",
    category: "Personal Portfolio",
    description:
      "Awarded Site of the Year and Web Excellence for creative web design and immersive storytelling, tracing the journey from marine operations to software engineering.",
    link: "https://www.mwa.my/nominees/2025/personal-portfolio-3/",
    badgeText: "Site of the Year",
    isWinner: true,
    awards: [
      {
        name: "Site of the Year",
        ribbon: "https://www.mwa.my/ribbon/mwa-soty-ribbon.png",
      },
      {
        name: "Web Excellence",
        ribbon: "https://www.mwa.my/ribbon/mwa-excellence-ribbon.png",
      },
    ],
  },
];
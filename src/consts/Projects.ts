export interface VesselLogItem {
  id: number;
  image: string;
  label: string;
  description: string;
  type: "project" | "contribution";
  link: string;
  isReady: boolean;
}

export const vesselLogItems: VesselLogItem[] = [
  // --Projects--
  {
    id: 1,
    image: "/projects/youngguards.png",
    label: "Young Guards",
    description:
      "A gamified cybersecurity learning platform to combat job scams and raise awareness.",
    type: "project",
    link: "https://youngguards.tech/en-US",
    isReady: true,
  },
  {
    id: 2,
    image: "/projects/guardina.png",
    label: "Guardina",
    description:
      "A native mobile app built to enhance women's safety with immediate emergency response tools, while raising cross-gender awareness on safety and sexuality to combat sexual misconduct through software engineering.",
    type: "project",
    link: "https://guardina.ammarhairi.tech/",
    isReady: true,
  },
  // --- Contributions ---
  {
    id: 4,
    image: "/projects/bubbleso2.png",
    label: "Bubbles O2 E-commerce",
    description:
      "Contributed to the development and maintenance of the e-commerce platform for Bubbles O2.",
    type: "contribution",
    link: "https://bubbleso2.com/",
    isReady: true,
  },
  {
    id: 5,
    image: "/projects/kd-portal.png",
    label: "KD-Portal (Ministry of Digital)",
    description:
      "Assisted in the development and enhancement of the digital portal for the Ministry of Digital.",
    type: "contribution",
    link: "https://www.digital.gov.my/",
    isReady: true,
  },
  {
    id: 6,
    image: "/projects/hansards.png",
    label: "Hansards Parlimen",
    description:
      "Contributed across the full stack by resolving critical bugs and supporting User Acceptance Testing (UAT) for client-requested enhancements on an existing application.",
    type: "contribution",
    link: "https://hansard.parlimen.gov.my/",
    isReady: true,
  },
  {
    id: 7,
    image: "/projects/sekolahku.png",
    label: "Sekolahku",
    description:
      "Collaborated with senior engineers to build the backend from scratch, optimized search queries alongside data scientists using Elasticsearch, deployed via Docker and AWS, and implemented UI/UX-compliant frontend features.",
    type: "contribution",
    link: "https://sekolahku.moe.gov.my/",
    isReady: true,
  },
  {
    id: 7,
    image: "/projects/myfasa.png",
    label: "Myfasa",
    description:
      "Engineered on-premise infrastructure via SSH/PDSA while adapting to PHP to build backend functionality. Maintained staging/local database workflows, collaborated cross-functionally to translate business requirements into technical implementations, and managed deployment setups.",
    type: "contribution",
    link: "Link is not ready - Internal / Staging Only",
    isReady: false
  },
  {
    id: 8,
    image: "/projects/myds.png",
    label: "MYDS",
    description:
      "Created a standalone, zero-dependency HTML/CSS/JS component library for legacy government PHP applications (MyDS), allowing developers to copy-paste UI components styled like shadcn without NPM overhead; utilized Turborepo/Turbopack to streamline the build system.",
    type: "contribution",
    link: "https://design.digital.gov.my/en",
    isReady: true,
  },
];

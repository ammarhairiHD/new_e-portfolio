export interface VesselLogItem {
  id: number;
  image: string;
  label: string;
  description: string;
  type: "project" | "contribution";
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
  },
  {
    id: 2,
    image: "/projects/guardina.png",
    label: "Guardina",
    description:
      "A women's safety platform designed to provide a secure environment and quick access to help.",
    type: "project",
  },
  {
    id: 3,
    image: "/projects/ncefs.webp",
    label: "Native Court e-Filling System",
    description:
      "An electronic filing system to modernize and streamline the legal processes of the Native Court.",
    type: "project",
  },
  // --- Contributions ---
  {
    id: 4,
    image: "/projects/bubbleso2.png",
    label: "Bubbles O2 E-commerce",
    description:
      "Contributed to the development and maintenance of the e-commerce platform for Bubbles O2.",
    type: "contribution",
  },
  {
    id: 5,
    image: "/projects/kd-portal.png",
    label: "KD-Portal (Ministry of Digital)",
    description:
      "Assisted in the development and enhancement of the digital portal for the Ministry of Digital.",
    type: "contribution",
  },
];

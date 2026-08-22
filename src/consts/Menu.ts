export interface MenuItem {
  id: number;
  label: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "About.exe",
    path: "/storyboard",
  },
  {
    id: 3,
    label: "Vessel Log",
    path: "/projects",
  },
  {
    id: 4,
    label: "Captains Deck",
    path: "/awards",
  },
  {
    id: 5,
    label: "Digital Cargo",
    path: "/skills",
  },
  {
    id: 6,
    label: "Contact",
    path: "/contact",
  },
  {
    id: 7,
    label: "Message in a Bottle",
    path: "/comments",
  },
  {
    id: 8,
    label: "The Ship's Manifest",
    path: "/credits",
  },
];

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
    label: "Digital Cargo",
    path: "/skills",
  },
  {
    id: 5,
    label: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    label: "Message in a Bottle",
    path: "/comments",
  },
  {
    id: 7,
    label: "The Ship's Manifest",
    path: "/credits",
  },
];

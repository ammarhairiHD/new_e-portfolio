// src/Menu.ts

export interface MenuItem {
  id: number;
  label: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    label: "Start",
    path: "/start",
  },
  {
    id: 2,
    label: "About",
    path: "/about",
  },
  {
    id: 3,
    label: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    label: "Story Board",
    path: "/storyboard",
  },
  {
    id: 5,
    label: "Settings",
    path: "/settings",
  },
];

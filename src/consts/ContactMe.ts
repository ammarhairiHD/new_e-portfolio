export interface SocialLinkItem {
  id: number;
  platform:
    | "Instagram"
    | "YouTube"
    | "LinkedIn"
    | "Whatapps"
    | "Github"
    | "Email";
  url: string;
}

export interface ProfileImageItem {
  id: number;
  imagePath: string;
  altText: string;
}

export const socialLinks: SocialLinkItem[] = [
  {
    id: 1,
    platform: "Instagram",
    url: "https://www.instagram.com/ammar.hairi_/?hl=en",
  },
  {
    id: 2,
    platform: "YouTube",
    url: "https://www.youtube.com/@ammarhairi",
  },
  {
    id: 3,
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ammar-hairi/",
  },
  {
    id: 4,
    platform: "Whatapps",
    url: "https://wa.me/+60126171404",
  },
  {
    id: 5,
    platform: "Github",
    url: "https://github.com/ammarhairiHD",
  },
  {
    id: 6,
    platform: "Email",
    url: "mailto:halusinasibyammar@gmail.com",
  },
];

export const profileImages: ProfileImageItem[] = [
  {
    id: 1,
    imagePath: "/contact/1.jpg",
    altText: "A village by the sea",
  },
  {
    id: 2,
    imagePath: "/contact/2.jpg",
    altText: "A view of Mount Fuji",
  },
  {
    id: 3,
    imagePath: "/contact/3.jpg",
    altText: "In the middle of Kyoto's Concrete Jungle",
  },
  {
    id: 4,
    imagePath: "/contact/4.jpg",
    altText: "Chilling at Osaka's Family Mart",
  },
];

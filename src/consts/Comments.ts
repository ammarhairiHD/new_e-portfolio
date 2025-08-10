export interface Comment {
  name: string;
  role: string;
  message: string;
}

export const comments: Comment[] = [
  {
    name: "Ammar Hairi",
    role: "The Captain",
    message: "Hello! This is how your comments will look like ",
  },
  {
    name: "Jack Sparrow",
    role: "Friend / Colleague",
    message:
      "Ahoy, ye salty creature! I be hopin’ ye’ve found th’ message in th’ bottle I cast adrift many moons ago. Yer digital ship be a mighty beauty on th’ seven seas o’ code! May the winds be fair, an’ may our paths cross again, matey!",
  },
];

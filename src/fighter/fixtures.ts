import getFighter from "./factory/getFighter";

export const darrow = getFighter(
  {
    name: "Darrow",
    lastName: "O'Lykos",
    age: 35,
    portraitUrl: "https://i.redd.it/1xq419yqk2jd1.jpeg",
    portraitDescription: "Darrow with a blodied golden armor being a god",
  },
  "Sling Blade",
  10,
);

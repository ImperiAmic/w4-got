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

export const wax = getFighter(
  {
    name: "Waxillium",
    lastName: "Ladrian",
    age: 45,
    portraitUrl:
      "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tumblr_m6kbrisa1t1r18mzfo1_1280.jpg",
    portraitDescription: "Wayne and Wax posing with guns",
  },
  "pistols",
  10,
);

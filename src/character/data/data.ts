import { Adviser } from "../../adviser/types.js";
import { Fighter } from "../../fighter/types.js";
import { King } from "../../king/types.js";
import { Squire } from "../../squire/types.js";

export const characters: (King | Adviser | Fighter | Squire)[] = [
  {
    name: "Joffrey",
    lastName: "Baratheon",
    age: 19,
    portraitUrl: "/images/joffrey-baratheon.webp",
    portraitDescription: "Portrait of Joffrey Baratheon",
    isAlive: true,
    die: () => {},
    yearsOfReign: 2,
    phrase: "You are all going to die",
    speak: () => {
      return "";
    },
  },
  {
    name: "Jaime",
    lastName: "Lannister",
    age: 44,
    portraitUrl: "/images/jaime-lannister.webp",
    portraitDescription: "Portrait of Jaime Lannister",
    isAlive: true,
    die: () => {},
    weapon: "Oathkeeper",
    dexterity: 7,
    phrase: "First I punch, then I ask",
    speak: () => {
      return "";
    },
  },
  {
    name: "Daenerys",
    lastName: "Targaryen",
    age: 24,
    portraitUrl: "/images/daenerys-targaryen.webp",
    portraitDescription: "Portrait of Daenerys Targaryen",
    isAlive: true,
    die: () => {},
    weapon: "Drogon, Rhaegal, and Viserion",
    dexterity: 5,
    phrase: "First I punch, then I ask",
    speak: () => {
      return "";
    },
  },
  {
    name: "Bronn",
    lastName: "Blackwater",
    age: 35,
    portraitUrl: "/images/bronn.webp",
    portraitDescription: "Portrait of Bronn Blackwater",
    isAlive: true,
    die: () => {},
    servesTo: "Jaime Lannister",
    ballism: 10,
    phrase: "I am a looser",
  },
];

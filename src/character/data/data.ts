import { Adviser } from "../../adviser/types";
import { Fighter } from "../../fighter/types";
import { King } from "../../king/types";
import { Squire } from "../../squire/types";

export const characters: (King | Adviser | Fighter | Squire)[] = [
  {
    name: "Joffrey",
    lastName: "Baratheon",
    age: 19,
    portraitUrl: "/images/joffrey-baratheon.webp",
    portraitDescription: "Portrait of Joffrey Baratheon",
    isAlive: true,
    yearsOfReign: 2,
    phrase: "You are all going to die",
  },
  {
    name: "Jaime",
    lastName: "Lannister",
    age: 44,
    portraitUrl: "/images/jaime-lannister.webp",
    portraitDescription: "Portrait of Jaime Lannister",
    isAlive: true,
    weapon: "Oathkeeper",
    dexterity: 7,
    phrase: "First I punch, then I ask",
  },
  {
    name: "Daenerys",
    lastName: "Targaryen",
    age: 24,
    portraitUrl: "/images/daenerys-targaryen.webp",
    portraitDescription: "Portrait of Daenerys Targaryen",
    isAlive: true,
    weapon: "Drogon, Rhaegal, and Viserion",
    dexterity: 5,
    phrase: "First I punch, then I ask",
  },
  {
    name: "Tyrion",
    lastName: "Lannister",
    age: 40,
    portraitUrl: "/images/tyrion-lannister.webp",
    portraitDescription: "Portrait of Tyrion Lannister",
    isAlive: true,
    advisesTo: "Daenerys Targaryen",
    phrase: "I don't know why, but I think I'm going to die soon",
  },
  {
    name: "Bronn",
    lastName: "Blackwater",
    age: 35,
    portraitUrl: "/images/bronn.webp",
    portraitDescription: "Portrait of Bronn Blackwater",
    isAlive: true,
    servesTo: "Jaime Lannister",
    ballism: 10,
    phrase: "I am a looser",
  },
];

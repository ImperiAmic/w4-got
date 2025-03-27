import getAdviser from "../../adviser/factory/getAdviser.js";
import getFighter from "../../fighter/factory/getFighter.js";
import getKing from "../../king/factory/getKing.js";
import getSquire from "../../squire/factory/getSquire.js";
import { CharacterType } from "../types.js";

const joffrey = getKing(
  {
    name: "Joffrey",
    lastName: "Baratheon",
    age: 19,
    portraitUrl: "/images/joffrey-baratheon.webp",
    portraitDescription: "Portrait of Joffrey Baratheon",
  },
  2,
);

const jaime = getFighter(
  {
    name: "Jaime",
    lastName: "Lannister",
    age: 44,
    portraitUrl: "/images/jaime-lannister.webp",
    portraitDescription: "Portrait of Jaime Lannister",
  },
  "Oathkeeper",
  7,
);

const daenerys = getFighter(
  {
    name: "Daenerys",
    lastName: "Targaryen",
    age: 24,
    portraitUrl: "/images/daenerys-targaryen.webp",
    portraitDescription: "Portrait of Daenerys Targaryen",
  },
  "Drogon, Rhaegal, and Viserion",
  5,
);

const tyrion = getAdviser(
  {
    name: "Tyrion",
    lastName: "Lannister",
    age: 40,
    portraitUrl: "/images/tyrion-lannister.webp",
    portraitDescription: "Portrait of Tyrion Lannister",
  },
  daenerys,
);

const bronn = getSquire(
  {
    name: "Bronn",
    lastName: "Blackwater",
    age: 35,
    portraitUrl: "/images/bronn.webp",
    portraitDescription: "Portrait of Bronn Blackwater",
  },
  jaime,
  10,
);

export const characters: CharacterType[] = [
  joffrey,
  jaime,
  daenerys,
  tyrion,
  bronn,
];

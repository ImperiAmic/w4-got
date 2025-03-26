import { Character } from "../character/types.js";

type King = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
  speak: () => string;
};

export default King;

import { Character } from "../character/types.js";

export type King = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
  speak: () => string;
};

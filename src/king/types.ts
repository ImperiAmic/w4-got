import { Character } from "../character/types.js";

export type King = Character & {
  yearsOfReign: number;
  speak: () => "You are all going to die";
};

import { Character } from "../types";

export type King = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
};

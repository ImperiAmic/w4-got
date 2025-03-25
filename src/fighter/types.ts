import { Character } from "../character/types";

export type Fighter = Character & {
  weapon: string;
  dexterity: number;
  phrase: "First I punch, then I ask";
};

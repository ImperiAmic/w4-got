import { Character, Range } from "../character/types";

export type Fighter = Character & {
  weapon: string;
  dexterity: Range;
  phrase: "First I punch, then I ask";
  speak: () => string;
};

import { Character, NumberRange } from "../character/types";

export type Fighter = Character & {
  weapon: string;
  dexterity: NumberRange;
  phrase: "First I punch, then I ask";
  speak: () => string;
};

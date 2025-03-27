import { Character, CharacterType, NumberRange } from "../character/types.js";

export type Squire = Character & {
  servesTo: CharacterType;
  ballism: NumberRange;
  phrase: "I am a looser";
  speak: () => string;
};

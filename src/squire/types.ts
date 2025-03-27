import { Character } from "../character/types.js";
import { Fighter } from "../fighter/types.js";

export type Squire = Character & {
  servesTo: Fighter;
  ballism: Ballism;
  speak: () => "I am a looser";
};

export type Ballism = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

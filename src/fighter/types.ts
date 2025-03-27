import { Character } from "../character/types";

export type Fighter = Character & {
  weapon: string;
  dexterity: Dexterity;
  speak: () => "First I punch, then I ask";
};

export type Dexterity = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

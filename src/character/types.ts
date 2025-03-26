import { Adviser } from "../adviser/types.js";
import { Fighter } from "../fighter/types.js";
import { King } from "../king/types.js";
import { Squire } from "../squire/types.js";

export type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portraitUrl: string;
  portraitDescription: string;
  die: () => void;
};

export type Portrait = {
  url: string;
  description: string;
};

export type CharacterType = King | Fighter | Squire | Adviser;

export type NumberRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

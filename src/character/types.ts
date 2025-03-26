import { Adviser } from "../adviser/types";
import { Fighter } from "../fighter/types";
import King from "../king/types";
import { Squire } from "../squire/types";

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

export type CharacterType = Adviser | Fighter | King | Squire;

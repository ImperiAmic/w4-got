import { Adviser } from "../adviser/types";
import { Fighter } from "../fighter/types";
import { King } from "../king/types";
import { Squire } from "../squire/types";

export type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portraitUrl: string;
  portraitDescription: string;
};

export type Characters = Adviser | Fighter | King | Squire;

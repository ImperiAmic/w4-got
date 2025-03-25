import { Character } from "../types";

export type Squire = Character & {
  servesTo: string;
  ballism: number;
  phrase: "I am a looser";
};

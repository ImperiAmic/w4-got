import { Character } from "./types.js";

export const killCharacter = (character: Character): void => {
  character.isAlive = false;
};

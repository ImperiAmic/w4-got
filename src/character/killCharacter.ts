import { Character } from "./types.js";

const killCharacter = (character: Character): void => {
  character.isAlive = false;
};

export default killCharacter;

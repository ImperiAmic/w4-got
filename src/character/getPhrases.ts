import { Character } from "./types";

const getPhrases = (characters: Character[]): string[] => {
  const phrases = characters.map((character) => character.speak());

  return phrases;
};

export default getPhrases;

import { CharacterType } from "./types";

const getPhrases = (characters: CharacterType[]): string[] => {
  const phrases = characters.map((character) => character.speak());

  return phrases;
};

export default getPhrases;

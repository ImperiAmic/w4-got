import { Adviser, Fighter, King, Squire } from "./types.js";

const getPhrases = (
  characters: (King | Adviser | Fighter | Squire)[]
): string[] => {
  const phrases: string[] = [];
  characters.forEach((character) => {
    phrases.push(character.phrase);
  });
  return phrases;
};

export default getPhrases;

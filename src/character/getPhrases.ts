import { CharacterType } from "./types";

const getPhrases = (characters: CharacterType[]): string[] => {
  const phrases: string[] = [];

  characters.map((character) => phrases.push(character.phrase));

  return phrases;
};

export default getPhrases;

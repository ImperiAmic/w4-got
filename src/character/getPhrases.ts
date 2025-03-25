import { Characters } from "./types";

const getPhrases = (characters: Characters[]): string[] => {
  const phrases: string[] = [];

  characters.map((character) => phrases.push(character.phrase));

  return phrases;
};

export default getPhrases;

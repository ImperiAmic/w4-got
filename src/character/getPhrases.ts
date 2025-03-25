import { Adviser } from "../adviser/types";
import { Fighter } from "../fighter/types";
import { King } from "../king/types";
import { Squire } from "../squire/types";

const getPhrases = (
  characters: (King | Adviser | Fighter | Squire)[],
): string[] => {
  const phrases: string[] = [];

  characters.map((character) => phrases.push(character.phrase));

  return phrases;
};

export default getPhrases;

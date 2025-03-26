import { CharacterType } from "./types.js";

const getCharacterToSpeak = (charcter: CharacterType): string => {
  const characterPhrase = charcter.phrase;

  return characterPhrase;
};

export default getCharacterToSpeak;

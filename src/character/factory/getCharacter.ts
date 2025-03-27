import killCharacter from "../killCharacter.js";
import { Character, CharacterData } from "../types.js";

const getCharacter = (characterData: CharacterData): Character => {
  const character: Character = {
    ...characterData,
    isAlive: true,
    die: () => killCharacter(character),
    speak: () => "",
  };

  return character;
};

export default getCharacter;

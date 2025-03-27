import { Character, CharacterData } from "../types.js";

const getCharacter = (characterData: CharacterData): Character => {
  const character: Character = {
    ...characterData,
    isAlive: true,
    die() {
      this.isAlive = false;
    },
    speak: () => "",
  };

  return character;
};

export default getCharacter;

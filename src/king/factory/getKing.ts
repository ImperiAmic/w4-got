import getCharacter from "../../character/factory/getCharacter.js";
import { CharacterData } from "../../character/types.js";
import { King } from "../types.js";

const getKing = (characterData: CharacterData, yearsOfReign: number): King => {
  const character = getCharacter(characterData);

  const king: King = {
    ...character,
    yearsOfReign,
    speak() {
      return "You are all going to die";
    },
  };

  return king;
};

export default getKing;

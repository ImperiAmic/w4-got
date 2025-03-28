import { CharacterData } from "../../character/types.js";
import { Ballism, Squire } from "../types.js";
import { Fighter } from "../../fighter/types.js";
import getCharacter from "../../character/factory/getCharacter.js";

const getSquire = (
  characterData: CharacterData,
  servesTo: Fighter,
  ballism: Ballism,
): Squire => {
  const character = getCharacter(characterData);

  const squire: Squire = {
    ...character,
    servesTo,
    ballism,
    speak() {
      return "I am a looser";
    },
  };

  return squire;
};

export default getSquire;

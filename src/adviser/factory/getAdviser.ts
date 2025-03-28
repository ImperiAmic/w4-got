import getCharacter from "../../character/factory/getCharacter.js";
import { Character } from "../../character/types.js";
import { Adviser } from "../types.js";
import { CharacterData } from "../../character/types.js";

const getAdviser = (
  characterData: CharacterData,
  advisesTo: Character,
): Adviser => {
  const character = getCharacter(characterData);

  const adviser: Adviser = {
    ...character,
    advisesTo,
    speak() {
      return "I don't know why, but I think I'm going to die soon";
    },
  };

  return adviser;
};

export default getAdviser;

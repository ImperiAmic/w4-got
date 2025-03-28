import getCharacter from "../../character/factory/getCharacter.js";
import { CharacterData } from "../../character/types.js";
import { Dexterity, Fighter } from "../types.js";

const getFighter = (
  characterData: CharacterData,
  weapon: string,
  dexterity: Dexterity,
): Fighter => {
  const character = getCharacter(characterData);

  const fighter: Fighter = {
    ...character,
    weapon,
    dexterity,
    speak() {
      return "First I punch, then I ask";
    },
  };

  return fighter;
};

export default getFighter;

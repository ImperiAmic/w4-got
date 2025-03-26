import getCharacterToSpeak from "../../character/getCharacterToSpeak.js";
import { Character, NumberRange } from "../../character/types.js";
import { Fighter } from "../types.js";

const getFighter = (
  characterData: Character,
  weapon: string,
  dexterity: NumberRange,
): Fighter => {
  const fighter: Fighter = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: characterData.isAlive,
    die: characterData.die,
    portraitUrl: characterData.portraitUrl,
    portraitDescription: characterData.portraitDescription,
    weapon,
    dexterity,
    phrase: "First I punch, then I ask",
    speak: () => getCharacterToSpeak(fighter.phrase),
  };

  return fighter;
};

export default getFighter;

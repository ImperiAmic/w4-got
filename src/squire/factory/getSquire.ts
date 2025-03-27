import { Character, NumberRange } from "../../character/types.js";
import { Squire } from "../types.js";
import getCharacterToSpeak from "../../character/getCharacterToSpeak.js";
import { Fighter } from "../../fighter/types.js";

const getSquire = (
  characterData: Character,
  servesTo: Fighter,
  ballism: NumberRange,
): Squire => {
  const squire: Squire = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: characterData.isAlive,
    die: characterData.die,
    portraitUrl: characterData.portraitUrl,
    portraitDescription: characterData.portraitDescription,
    servesTo,
    ballism,
    phrase: "I am a looser",
    speak: () => getCharacterToSpeak(squire.phrase),
  };

  return squire;
};

export default getSquire;

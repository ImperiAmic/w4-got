import { Character, CharacterType } from "../../character/types.js";
import { Adviser } from "../types.js";
import getCharacterToSpeak from "../../character/getCharacterToSpeak.js";

const getAdviser = (
  characterData: Character,
  advisesTo: CharacterType,
): Adviser => {
  const adviser: Adviser = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: characterData.isAlive,
    die: characterData.die,
    portraitUrl: characterData.portraitUrl,
    portraitDescription: characterData.portraitDescription,
    advisesTo,
    phrase: "I don't know why, but I think I'm going to die soon",
    speak: () => getCharacterToSpeak(adviser.phrase),
  };

  return adviser;
};

export default getAdviser;

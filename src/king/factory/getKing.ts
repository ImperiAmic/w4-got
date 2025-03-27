import getCharacterToSpeak from "../../character/getCharacterToSpeak.js";
import { Character } from "../../character/types.js";
import { King } from "../types.js";

const getKing = (characterData: Character, yearsOfReign: number): King => {
  const king: King = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: characterData.isAlive,
    die: characterData.die,
    portraitUrl: characterData.portraitUrl,
    portraitDescription: characterData.portraitDescription,
    yearsOfReign,
    phrase: "You are all going to die",
    speak: () => getCharacterToSpeak(king.phrase),
  };

  return king;
};

export default getKing;

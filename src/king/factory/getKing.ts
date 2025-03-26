import getCharacterToSpeak from "../../character/getCharacterToSpeak.js";
import { Character } from "../../character/types.js";
import { King } from "../types.js";

const getKing = (character: Character, yearsOfReign: number): King => {
  const king: King = {
    name: character.name,
    lastName: character.lastName,
    age: character.age,
    isAlive: character.isAlive,
    die: character.die,
    portraitUrl: character.portraitUrl,
    portraitDescription: character.portraitDescription,
    yearsOfReign,
    phrase: "You are all going to die",
    speak: () => getCharacterToSpeak(king.phrase),
  };

  return king;
};

export default getKing;

import { killCharacter } from "../killCharacter.js";
import { Character } from "../types.js";
import { Portrait } from "../types.js";

const getCharacter = (
  fullName: string,
  age: number,
  portrait: Portrait,
): Character => {
  const name = fullName.split(" ");

  const character: Character = {
    name: name[0],
    lastName: name[1],
    age,
    isAlive: true,
    portraitUrl: portrait.url,
    portraitDescription: portrait.description,
    die: () => killCharacter(character),
  };

  return character;
};

export default getCharacter;

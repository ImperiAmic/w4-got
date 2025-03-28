import { Character } from "../../types.js";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";

const getCharactersList = (characters: Character[]): HTMLElement => {
  const charactersElement = document.createElement("ul");
  charactersElement.className = "characters";

  characters.forEach((character) => {
    const characterWrapper = document.createElement("li");
    characterWrapper.className = "character";

    const CharacterCard = getCharacterCard(character);
    characterWrapper.appendChild(CharacterCard);

    charactersElement.appendChild(characterWrapper);
  });

  return charactersElement;
};

export default getCharactersList;

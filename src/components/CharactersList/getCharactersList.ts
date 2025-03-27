import { CharacterType } from "../../character/types.js";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";

const getCharactersList = (characters: CharacterType[]): HTMLElement => {
  const charactersElement = document.createElement("ul");
  charactersElement.className = "characters";

  characters.forEach((character) => {
    const CharacterCard = getCharacterCard(character);
    charactersElement.appendChild(CharacterCard);
  });

  return charactersElement;
};

export default getCharactersList;

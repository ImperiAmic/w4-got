import { characters } from "../../character/data/data.js";
import getCharacterCard from "../CharacterCard/getCharacterCard.js";

const getCharactersList = (): HTMLElement => {
  const charactersElement = document.createElement("ul");
  charactersElement.className = "characters";

  const CharacterCard = getCharacterCard(characters[0]);
  charactersElement.appendChild(CharacterCard);

  return charactersElement;
};

export default getCharactersList;

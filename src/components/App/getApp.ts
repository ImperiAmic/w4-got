import { characters } from "../../character/data/data.js";
import getCharactersList from "../../character/components/CharactersList/getCharactersList.js";
import getHeader from "../Header/getHeader.js";

export const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const Header = getHeader();
  const CharactersList = getCharactersList(characters);

  mainContainer.appendChild(Header);
  mainContainer.appendChild(CharactersList);

  return mainContainer;
};

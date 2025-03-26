import getCharactersList from "../CharactersList/getCharactersList.js";
import getHeader from "../Header/getHeader.js";

export const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const Header = getHeader();
  const CharactersList = getCharactersList();

  mainContainer.appendChild(Header);
  mainContainer.appendChild(CharactersList);

  return mainContainer;
};

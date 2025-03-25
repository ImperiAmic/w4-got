import getHeader from "../Header/getHeader.js";

export const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const Header = getHeader();

  mainContainer.appendChild(Header);
  return mainContainer;
};

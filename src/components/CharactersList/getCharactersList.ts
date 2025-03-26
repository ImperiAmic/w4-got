const getCharactersList = (): HTMLElement => {
  const charactersElement = document.createElement("ul");
  charactersElement.className = "characters";

  return charactersElement;
};

export default getCharactersList;

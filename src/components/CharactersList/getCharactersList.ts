const getCharactersList = (): HTMLElement => {
  const characters = document.createElement("ul");
  characters.className = "characters";

  return characters;
};

export default getCharactersList;

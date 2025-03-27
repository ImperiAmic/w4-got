import { CharacterType } from "../../character/types.js";

const getCharacterCard = (character: CharacterType): HTMLElement => {
  const characterCardElement = document.createElement("li");

  characterCardElement.innerHTML = `
  <article class="character">
    <img class="character-portrait" src="${character.portraitUrl}" alt="${character.portraitDescription}" width="300" height="300">
    <h2 class="character-title">${character.name} ${character.lastName}</h2>
  </article>`;

  return characterCardElement;
};

export default getCharacterCard;

import { Character } from "../../types.js";

const getCharacterCard = (character: Character): HTMLElement => {
  const characterCardElement = document.createElement("article");

  characterCardElement.innerHTML = `
    <img class="character__portrait "src="${character.portraitUrl}" alt="${character.portraitDescription}" width="300" height="300">
    <div class="character__info">
      <h2 class="character__title">${character.name} ${character.lastName}</h2>
      <div class="character__state">
        <span>State:</span>
        <img class="character__icon" src="/images/thumb-up-fill.svg" alt="thumb up icon" width="20" height="20">
      </div>
    </div>
    `;

  return characterCardElement;
};

export default getCharacterCard;

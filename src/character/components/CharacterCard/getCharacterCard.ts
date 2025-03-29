import { Character } from "../../types.js";

const getCharacterCard = (character: Character): HTMLElement => {
  const characterCardElement = document.createElement("article");

  characterCardElement.innerHTML = `
    <img src="${character.portraitUrl}" alt="${character.portraitDescription}" width="300" height="300">
    <div class="character__info">
      <h2 class="character__title">${character.name} ${character.lastName}</h2>
      <span>Age: ${character.age} years</span>
    </div>
    `;

  return characterCardElement;
};

export default getCharacterCard;

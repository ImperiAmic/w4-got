import { CharacterType } from "../../character/types.js";

const getCharacterCard = (character: CharacterType): HTMLElement => {
  const characterCardElement = document.createElement("li");
  characterCardElement.className = "character";

  characterCardElement.innerHTML = `
  <article>
    <h2 class="character-title">${character.name} ${character.lastName}</h2>
  </article>`;

  return characterCardElement;
};

export default getCharacterCard;

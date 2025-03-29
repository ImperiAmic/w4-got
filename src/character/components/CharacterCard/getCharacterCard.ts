import { Character } from "../../types.js";

const getCharacterCard = (character: Character): HTMLElement => {
  const characterCardElement = document.createElement("article");

  let iconUrl = "/images/thumb-up-fill.svg";
  let iconDescription = "thumb up icon";

  const portraitElement = document.createElement("img");
  portraitElement.classList.add("character__portrait");
  portraitElement.src = character.portraitUrl;
  portraitElement.alt = character.portraitDescription;
  portraitElement.width = 300;
  portraitElement.height = 300;

  if (!character.isAlive) {
    iconUrl = "/images/thumb-down-fill.svg";
    iconDescription = "thumb down icon";
    portraitElement.classList.add("character__portrait--reverse");
  }

  characterCardElement.innerHTML = `
    <div class="character__info">
      <h2 class="character__title">${character.name} ${character.lastName}</h2>
      <div class="character__state">
        <span>State:</span>
        <img class="character__icon" src="${iconUrl}" alt="${iconDescription}" width="20" height="20">
      </div>
    </div>
    `;

  characterCardElement.insertBefore(
    portraitElement,
    characterCardElement.firstChild,
  );

  return characterCardElement;
};

export default getCharacterCard;

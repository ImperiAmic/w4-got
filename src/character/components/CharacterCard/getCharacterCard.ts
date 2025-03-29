import getHoverDetails from "./getHoverDetails.js";
import { Character } from "../../types.js";

const getCharacterCard = (character: Character): HTMLElement => {
  const characterCardElement = document.createElement("article");
  characterCardElement.className = "character";

  const overlayElement = document.createElement("div");
  overlayElement.className = "overlay";

  const detailsElement = getHoverDetails(character);
  overlayElement.appendChild(detailsElement);

  let iconUrl = "/images/thumb-up-fill.svg";
  let iconDescription = "thumb up icon";

  let typeEmote: string;

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

  switch (character.speak()) {
    case "You are all going to die":
      typeEmote = "👑";
      break;

    case "First I punch, then I ask":
      typeEmote = "🗡";
      break;

    case "I don't know why, but I think I'm going to die soon":
      typeEmote = "🎓";
      break;

    case "I am a looser":
      typeEmote = "🛡️";
      break;

    default:
      typeEmote = "";
      break;
  }

  characterCardElement.innerHTML = `
    <div class="character__info">
      <h2 class="character__title">${character.name} ${character.lastName}</h2>
      <div class="character__data">
        <span class="character__text">Age: ${character.age} years</span>
        <div class="character__emotes">
          <div class="character__state">
            <span class="character__text">State:</span>
            <img class="character__icon" src="${iconUrl}" alt="${iconDescription}" width="20" height="20">
          </div>
          <span class="character__type">${typeEmote}</span>
        </div>
      </div>
    </div>
    `;

  characterCardElement.insertBefore(
    portraitElement,
    characterCardElement.firstChild,
  );

  characterCardElement.insertBefore(
    overlayElement,
    characterCardElement.firstChild,
  );

  return characterCardElement;
};

export default getCharacterCard;

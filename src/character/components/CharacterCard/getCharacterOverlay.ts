import { Character } from "../../types";
import getCharacterOverlayButtons from "./getCharacterOverlayButtons.js";
import getCharacterOverlayDetails from "./getCharacterOverlayDetails.js";

export const getCharacterOverlay = (character: Character): HTMLElement => {
  const characterOverlayElement = document.createElement("div");
  characterOverlayElement.className = "overlay";

  const characterOverlayDetailsElement = getCharacterOverlayDetails(character);
  const characterOverlayButttonsElement = getCharacterOverlayButtons();

  characterOverlayElement.appendChild(characterOverlayDetailsElement);
  characterOverlayElement.appendChild(characterOverlayButttonsElement);

  return characterOverlayElement;
};

export default getCharacterOverlay;

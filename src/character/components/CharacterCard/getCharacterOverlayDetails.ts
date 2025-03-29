import { Character } from "../../types";
import { King } from "../../../king/types";
import { Adviser } from "../../../adviser/types";
import { Squire } from "../../../squire/types";
import { Fighter } from "../../../fighter/types";

const getCharacterOverlayDetails = (character: Character): HTMLElement => {
  const detailsElement = document.createElement("div");
  detailsElement.classList.add("character__details");

  if (character.speak() === "You are all going to die") {
    const king = character as King;

    detailsElement.innerHTML = `
    <span class="character__details">Years of Reign: ${king.yearsOfReign}</span>
    `;

    return detailsElement;
  }

  if (character.speak() === "First I punch, then I ask") {
    const fighter = character as Fighter;

    detailsElement.innerHTML = `
    <span class="character__details">Weapon: ${fighter.weapon}</span>
    <span class="character__details">Dexterity: ${fighter.dexterity}</span>
    `;

    return detailsElement;
  }

  if (
    character.speak() === "I don't know why, but I think I'm going to die soon"
  ) {
    const adviser = character as Adviser;

    detailsElement.innerHTML = `
    <span class="character__details">Advises to: ${adviser.advisesTo.name} ${adviser.advisesTo.lastName}</span>
    `;

    return detailsElement;
  }

  if (character.speak() === "I am a looser") {
    const squire = character as Squire;

    detailsElement.innerHTML = `
    <span class="character__details">Serves to: ${squire.servesTo.name} ${squire.servesTo.lastName}</span>
    <span class="character__details">Ballism: ${squire.ballism}</span>
    `;

    return detailsElement;
  }

  return detailsElement;
};

export default getCharacterOverlayDetails;

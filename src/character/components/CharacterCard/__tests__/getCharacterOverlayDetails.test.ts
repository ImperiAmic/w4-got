import { darrow } from "../../../../fighter/fixtures";
import getCharacterOverlayDetails from "../getCharacterOverlayDetails";

describe("Given the getHoverDetails function", () => {
  describe("When it receives the fighter Darrow O'Lykos", () => {
    test("Then it should show Weapon: Sling Blade and Dexterity: 10", () => {
      const screen = document.createElement("div");

      const expectedTexts = ["Weapon: Sling Blade", "Dexterity: 10"];

      const darrowDetails = getCharacterOverlayDetails(darrow);

      screen.appendChild(darrowDetails);

      const detailsElement = screen.querySelector("div");
      const detailsTextsElements = screen.querySelectorAll("span")!;

      expect(detailsElement).not.toBeNull();

      detailsTextsElements.forEach((detailTextElement, position) => {
        expect(detailTextElement.textContent).toBe(expectedTexts[position]);
      });
    });
  });
});

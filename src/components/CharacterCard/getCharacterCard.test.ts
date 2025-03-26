import { CharacterType } from "../../character/types";
import getCharacterCard from "./getCharacterCard";

describe("Given the CharacterCard component", () => {
  describe("When it renders the Felipe character", () => {
    test("Then it should show the Felipe character name and last name inside a card", () => {
      const screen = document.createElement("div");
      const felipe: CharacterType = {
        name: "Felipe",
        lastName: "Sesto",
        age: 0,
        isAlive: true,
        die: () => {},
        yearsOfReign: 0,
        phrase: "You are all going to die",
        portraitUrl: "",
        portraitDescription: "",
        speak: "",
      };
      const expectedCardTitle = "Felipe Sesto";

      const CharacterCard = getCharacterCard(felipe);

      screen.appendChild(CharacterCard);

      const CardArticle = screen.querySelector("li");
      const CardTitle = screen.querySelector("h2");

      expect(CardArticle).not.toBeNull();
      expect(CharacterCard).not.toBeNull();
      expect(CardTitle?.textContent).toBe(expectedCardTitle);
    });
  });
});

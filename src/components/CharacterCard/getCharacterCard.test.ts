import getKing from "../../king/factory/getKing";
import getCharacterCard from "./getCharacterCard";

describe("Given the CharacterCard component", () => {
  describe("When it renders the Felipe character", () => {
    test("Then it should show the Felipe character name and last name inside a character card", () => {
      const screen = document.createElement("div");

      const felipe = getKing(
        {
          name: "Felipe",
          lastName: "Sesto",
          age: 50,
          portraitUrl: "",
          portraitDescription: "",
        },
        10,
      );

      const expectedCardTitle = `${felipe.name} ${felipe.lastName}`;

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

import getKing from "../../king/factory/getKing";
import getCharacterCard from "./getCharacterCard";

describe("Given the CharacterCard component", () => {
  describe("When it renders the Felipe character", () => {
    const felipe = getKing(
      {
        name: "Felipe",
        lastName: "Sesto",
        age: 50,
        portraitUrl: "/images/bronn.webp",
        portraitDescription: "Felipe Sesto Portrait",
      },
      10,
    );

    test("Then it should show the Felipe character name and last name inside a character card", () => {
      const screen = document.createElement("div");

      const expectedCardTitle = `${felipe.name} ${felipe.lastName}`;

      const CharacterCard = getCharacterCard(felipe);

      screen.appendChild(CharacterCard);

      const CardArticle = screen.querySelector("li");
      const CardTitle = screen.querySelector("h2");

      expect(CardArticle).not.toBeNull();
      expect(CharacterCard).not.toBeNull();
      expect(CardTitle?.textContent).toBe(expectedCardTitle);
    });

    test("Then it should show a portrait of Felipe Sesto inside a character card", () => {
      const screen = document.createElement("div");
      const expectedImageDescription = felipe.portraitDescription;

      const CharacterCard = getCharacterCard(felipe);

      screen.appendChild(CharacterCard);

      const CardImage = screen.querySelector("img");

      expect(CardImage).not.toBeNull();
      expect(CardImage?.alt).toBe(expectedImageDescription);
    });
  });
});

import getKing from "../../../king/factory/getKing";
import { felipe } from "../../fixtures";
import getCharacterCard from "./getCharacterCard";

describe("Given the CharacterCard component", () => {
  describe("When it renders the Felipe character", () => {
    const king = getKing(felipe, 10);

    test("Then it should show the Felipe character name and last name inside a character card", () => {
      const screen = document.createElement("div");

      const expectedCardTitle = `${king.name} ${king.lastName}`;

      const CharacterCard = getCharacterCard(king);

      screen.appendChild(CharacterCard);

      const CardArticle = screen.querySelector("article");
      const CardTitle = screen.querySelector("h2");

      expect(CardArticle).not.toBeNull();
      expect(CharacterCard).not.toBeNull();
      expect(CardTitle?.textContent).toBe(expectedCardTitle);
    });

    test("Then it should show a portrait of Felipe Sesto inside a character card", () => {
      const screen = document.createElement("div");
      const expectedImageDescription = king.portraitDescription;

      const CharacterCard = getCharacterCard(king);

      screen.appendChild(CharacterCard);

      const CardImage = screen.querySelector("img");

      expect(CardImage).not.toBeNull();
      expect(CardImage?.alt).toBe(expectedImageDescription);
    });
  });
});

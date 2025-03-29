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

      const CardImage = screen.querySelector(
        ".character__portrait",
      ) as HTMLImageElement;

      expect(CardImage).not.toBeNull();
      expect(CardImage?.alt).toBe(expectedImageDescription);
    });

    test("Then it should show a state with a thumb up icon when Felipe Sesto is alive inside a character card", () => {
      const screen = document.createElement("div");
      const expectedIconDescription = "thumb up icon";

      const CharacterCard = getCharacterCard(king);

      screen.appendChild(CharacterCard);

      const CardIcon = screen.querySelector(
        ".character__icon",
      ) as HTMLImageElement;

      expect(CardIcon).not.toBeNull();
      expect(CardIcon?.alt).toBe(expectedIconDescription);
    });

    test("Then it should show a state with a thumb down icon when we kill Felipe Sesto inside a character card", () => {
      const screen = document.createElement("div");
      const expectedIconDescription = "thumb down icon";

      const deadKing = { ...king };
      deadKing.isAlive = false;

      const CharacterCard = getCharacterCard(deadKing);

      screen.appendChild(CharacterCard);

      const CardIcon = screen.querySelector(
        ".character__icon",
      ) as HTMLImageElement;

      expect(CardIcon).not.toBeNull();
      expect(CardIcon?.alt).toBe(expectedIconDescription);
    });

    test("Then it should show an upside down portrait of Felipe Sesto when we kill him inside a character card", () => {
      const screen = document.createElement("div");

      const deadKing = { ...king };
      deadKing.isAlive = false;

      const CharacterCard = getCharacterCard(deadKing);

      screen.appendChild(CharacterCard);

      const CardImage = screen.querySelector(".character__portrait--reverse");

      expect(CardImage).not.toBeNull();
    });
  });
});

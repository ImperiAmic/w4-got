import getKing from "../../../king/factory/getKing";
import { felipe } from "../../fixtures";
import getCharacterCard from "./getCharacterCard";

const screen = document.createElement("div");
beforeEach(() => {
  screen.innerHTML = "";
});

describe("Given the CharacterCard component", () => {
  describe("When it renders the Felipe character", () => {
    const kingFelipe = getKing(felipe, 10);

    test("Then it should show the Felipe character name and last name in a heading, inside the character card", () => {
      const expectedCardTitle = `${kingFelipe.name} ${kingFelipe.lastName}`;

      const CharacterCard = getCharacterCard(kingFelipe);

      screen.appendChild(CharacterCard);

      const CardArticle = screen.querySelector("article");
      const CardTitle = screen.querySelector("h2");

      expect(CardArticle).not.toBeNull();
      expect(CharacterCard).not.toBeNull();
      expect(CardTitle?.textContent).toBe(expectedCardTitle);
    });

    test("Then it should show a portrait of Felipe Sesto inside the character card", () => {
      const expectedImageDescription = kingFelipe.portraitDescription;

      const CharacterCard = getCharacterCard(kingFelipe);

      screen.appendChild(CharacterCard);

      const CardImage = screen.querySelector("img");

      expect(CardImage).not.toBeNull();
      expect(CardImage?.alt).toBe(expectedImageDescription);
    });

    test("Then it should show age of Felipe Sesto as 'Age: 60 years' phrase inside the character card", () => {
      const expectedAge = kingFelipe.age;
      const expectedPhrase = `Age: ${expectedAge} years`;

      const CharacterCard = getCharacterCard(kingFelipe);

      screen.appendChild(CharacterCard);

      const AgeSpanElement = screen.querySelector("span");

      expect(AgeSpanElement).not.toBeNull();
      expect(AgeSpanElement?.textContent).toBe(expectedPhrase);
    });
  });
});

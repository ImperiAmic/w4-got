import getKing from "../../../../king/factory/getKing";
import { felipe } from "../../../fixtures";
import getCharacterCard from "../getCharacterCard";

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

      const CardImage = screen.querySelector(
        ".character__portrait",
      ) as HTMLImageElement;

      expect(CardImage).not.toBeNull();
      expect(CardImage?.alt).toBe(expectedImageDescription);
    });

    test("Then it should show age of Felipe Sesto as 'Age: 60 years' phrase inside the character card", () => {
      const expectedAge = kingFelipe.age;
      const expectedPhrase = `Age: ${expectedAge} years`;

      const CharacterCard = getCharacterCard(kingFelipe);

      screen.appendChild(CharacterCard);

      const AgeSpanElement = screen.querySelector(".character__age");

      expect(AgeSpanElement).not.toBeNull();
      expect(AgeSpanElement?.textContent).toBe(expectedPhrase);
    });

    test("Then it should show a state with a thumb up icon when Felipe Sesto is alive inside a character card", () => {
      const expectedIconDescription = "thumb up icon";

      const CharacterCard = getCharacterCard(kingFelipe);

      screen.appendChild(CharacterCard);

      const CardIcon = screen.querySelector(
        ".character__icon",
      ) as HTMLImageElement;

      expect(CardIcon).not.toBeNull();
      expect(CardIcon?.alt).toBe(expectedIconDescription);
    });

    test("Then it should show a state with a thumb down icon when we kill Felipe Sesto inside a character card", () => {
      const expectedIconDescription = "thumb down icon";

      const deadKingFelipe = { ...kingFelipe };
      deadKingFelipe.isAlive = false;

      const CharacterCard = getCharacterCard(deadKingFelipe);

      screen.appendChild(CharacterCard);

      const CardIcon = screen.querySelector(
        ".character__icon",
      ) as HTMLImageElement;

      expect(CardIcon).not.toBeNull();
      expect(CardIcon?.alt).toBe(expectedIconDescription);
    });

    test("Then it should show an upside down portrait of Felipe Sesto when we kill him inside a character card", () => {
      const deadKingFelipe = { ...kingFelipe };
      deadKingFelipe.isAlive = false;

      const CharacterCard = getCharacterCard(deadKingFelipe);

      screen.appendChild(CharacterCard);

      const CardImage = screen.querySelector(".character__portrait--reverse");

      expect(CardImage).not.toBeNull();
    });

    test("Then it should show an emoji for each character type: crown for king, sword for fighter, graduation for adviser and shield for squire", () => {
      const expectedKingEmoji = "👑";

      const CharacterCard = getCharacterCard(kingFelipe);

      screen.appendChild(CharacterCard);

      const CardEmoji = screen.querySelector(".character__type");

      expect(CardEmoji).not.toBeNull();
      expect(CardEmoji?.textContent).toBe(expectedKingEmoji);
    });
  });
});

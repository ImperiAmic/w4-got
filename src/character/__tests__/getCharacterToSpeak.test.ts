import getKing from "../../king/factory/getKing";
import getCharacter from "../factory/getCharacter";
import { Portrait } from "../types";

describe("Given the getCharacterToSpeak function", () => {
  describe("When it receives Burger King character", () => {
    const fullName = "Burger King";
    const age = 80;
    const burgerPortrait: Portrait = {
      url: "",
      description: "",
    };

    test("Then it should return the phrase 'You are all going to die'", () => {
      const burger = getCharacter(fullName, age, burgerPortrait);
      const burgerKing = getKing(burger, 0);

      const expectedPhrase = "You are all going to die";
      const actualPhrase = burgerKing.speak();

      expect(actualPhrase).toBe(expectedPhrase);
    });
  });
});

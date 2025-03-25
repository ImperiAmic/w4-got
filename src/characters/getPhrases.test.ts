import { Adviser, Fighter, King, Squire } from "./types";
import getPhrases from "./getPhrases";

describe("Given the getPhrase function", () => {
  const felipe: King = {
    name: "",
    lastName: "",
    age: 0,
    portraitUrl: "",
    portraitDescription: "",
    isAlive: true,
    yearsOfReign: 0,
    phrase: "You are all going to die",
  };

  const joseMariaAznar: Adviser = {
    name: "",
    lastName: "",
    age: 0,
    portraitUrl: "",
    portraitDescription: "",
    isAlive: true,
    advisesTo: "",
    phrase: "I don't know why, but I think I'm going to die soon",
  };

  const jimenezLosantos: Fighter = {
    name: "",
    lastName: "",
    age: 0,
    portraitUrl: "",
    portraitDescription: "",
    isAlive: true,
    weapon: "",
    dexterity: 0,
    phrase: "First I punch, then I ask",
  };

  const albertRivera: Squire = {
    name: "",
    lastName: "",
    age: 0,
    portraitUrl: "",
    portraitDescription: "",
    isAlive: true,
    servesTo: "",
    ballism: 0,
    phrase: "I am a looser",
  };

  describe("When it receives Felipe, Jose María Aznar, Jimenez Losantos and Albert Ribera characters", () => {
    test("Then it should return 4 phrases", () => {
      const characters = [
        felipe,
        joseMariaAznar,
        jimenezLosantos,
        albertRivera,
      ];
      const expectedPhrasesTotal = 4;

      const actualPhrasesTotal = getPhrases(characters).length;

      expect(actualPhrasesTotal).toBe(expectedPhrasesTotal);
    });
  });

  describe("When it receives a King, an Adviser, a Fighter and a Squire", () => {
    test("Then it should return the phrase 'You are all going to die' in the first position", () => {
      const characters = [
        felipe,
        joseMariaAznar,
        jimenezLosantos,
        albertRivera,
      ];
      const expectedKingPhrase = "You are all going to die";

      const actualPhrases = getPhrases(characters);

      expect(actualPhrases[0]).toBe(expectedKingPhrase);
    });

    test("Then it should return the phrase 'I don't know why, but I think I'm going to die soon' in the second position", () => {
      const characters = [
        felipe,
        joseMariaAznar,
        jimenezLosantos,
        albertRivera,
      ];
      const expectedKingPhrase =
        "I don't know why, but I think I'm going to die soon";

      const actualPhrases = getPhrases(characters);

      expect(actualPhrases[1]).toBe(expectedKingPhrase);
    });

    test("Then it should return the phrase 'First I punch, then I ask' in the third position", () => {
      const characters = [
        felipe,
        joseMariaAznar,
        jimenezLosantos,
        albertRivera,
      ];
      const expectedKingPhrase = "First I punch, then I ask";

      const actualPhrases = getPhrases(characters);

      expect(actualPhrases[2]).toBe(expectedKingPhrase);
    });

    test("Then it should return the phrase 'I am a looser' in the fourth position", () => {
      const characters = [
        felipe,
        joseMariaAznar,
        jimenezLosantos,
        albertRivera,
      ];
      const expectedKingPhrase = "I am a looser";

      const actualPhrases = getPhrases(characters);

      expect(actualPhrases[3]).toBe(expectedKingPhrase);
    });
  });
});

import { Adviser } from "../adviser/types";
import { Fighter } from "../fighter/types";
import { King } from "../king/types";
import { Squire } from "../squire/types";
import getPhrases from "./getPhrases";

describe("Given the getPhrase function", () => {
  const king: King = {
    name: "",
    lastName: "",
    age: 0,
    portraitUrl: "",
    portraitDescription: "",
    isAlive: true,
    yearsOfReign: 0,
    phrase: "You are all going to die",
  };
  const adviser: Adviser = {
    name: "",
    lastName: "",
    age: 0,
    portraitUrl: "",
    portraitDescription: "",
    isAlive: true,
    advisesTo: "",
    phrase: "I don't know why, but I think I'm going to die soon",
  };
  const fighter: Fighter = {
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
  const squire: Squire = {
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
  describe("When it receives King characters", () => {
    test("Then it should return the phrase 'You are all going to die'", () => {
      const kings = [king];
      const expectedPhrase = "You are all going to die";

      const actualPhrase = getPhrases(kings);

      expect(actualPhrase).toContain(expectedPhrase);
    });
  });

  describe("When it receives Adviser characters", () => {
    test("Then it should return the phrase 'I don't know why, but I think I'm going to die soon'", () => {
      const advisers = [adviser];
      const expectedPhrase =
        "I don't know why, but I think I'm going to die soon";

      const actualPhrase = getPhrases(advisers);

      expect(actualPhrase).toContain(expectedPhrase);
    });
  });

  describe("When it receives Fighter characters", () => {
    test("Then it should return the phrase 'First I punch, then I ask'", () => {
      const fighters = [fighter];
      const expectedPhrase = "First I punch, then I ask";

      const actualPhrase = getPhrases(fighters);

      expect(actualPhrase).toContain(expectedPhrase);
    });
  });

  describe("When it receives Squire characters", () => {
    test("Then it should return the phrase 'I am a looser'", () => {
      const squires = [squire];
      const expectedPhrase = "I am a looser";

      const actualPhrase = getPhrases(squires);

      expect(actualPhrase).toContain(expectedPhrase);
    });
  });

  describe("When it receives a King, an Adviser, a Fighter and a Squire", () => {
    test("Then it should receive the phrases 'You are all going to die', 'I don't know why, but I think I'm going to die soon', 'First I punch, then I ask' and 'I am a looser'", () => {
      const characters = [king, adviser, fighter, squire];
      const expectedKingPhrase = "You are all going to die";
      const expectedAdviserPhrase =
        "I don't know why, but I think I'm going to die soon";
      const expectedFighterPhrase = "First I punch, then I ask";
      const expectedSquirePhrase = "I am a looser";

      const actualPhrases = getPhrases(characters);

      expect(actualPhrases).toContain(
        expectedKingPhrase &&
          expectedAdviserPhrase &&
          expectedFighterPhrase &&
          expectedSquirePhrase
      );
    });
  });
});

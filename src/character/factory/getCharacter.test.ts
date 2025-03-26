import { Portrait } from "../types";
import getCharacter from "./getCharacter";

describe("Given the getCharacter function", () => {
  describe("When it receives Bruce Wayne character", () => {
    const fullName = "Bruce Wayne";
    const age = 35;
    const batmanPortrait: Portrait = {
      url: "",
      description: "",
    };

    test("Then it should return a character with name 'Bruce'", () => {
      const expectedName = "Bruce";

      const batman = getCharacter(fullName, age, batmanPortrait);
      const actualName = batman.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should return a character with last name 'Wayne'", () => {
      const expectLastName = "Wayne";

      const batman = getCharacter(fullName, age, batmanPortrait);
      const actualLastName = batman.lastName;

      expect(actualLastName).toBe(expectLastName);
    });

    test("Then it should return a character 35 years old", () => {
      const expectAge = 35;

      const batman = getCharacter(fullName, age, batmanPortrait);
      const actualAge = batman.age;

      expect(actualAge).toBe(expectAge);
    });

    test("Then it should return a character alive", () => {
      const batman = getCharacter(fullName, age, batmanPortrait);
      const isBatmanAlive = batman.isAlive;

      expect(isBatmanAlive).toBe(true);
    });

    test("Then it should return a character that I can kill", () => {
      const batman = getCharacter(fullName, age, batmanPortrait);

      batman.die();
      const isBatmanAlive = batman.isAlive;

      expect(isBatmanAlive).toBe(false);
    });
  });
});

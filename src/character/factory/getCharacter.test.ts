import getCharacter from "./getCharacter";

describe("Given the getCharacter function", () => {
  describe("When it receives Bruce Wayne character", () => {
    test("Then it should return a character with name 'Bruce'", () => {
      const expectedName = "Bruce";

      const batman = getCharacter({
        name: "Bruce",
        lastName: "Wayne",
        age: 35,
        portraitUrl: "",
        portraitDescription: "",
      });
      const actualName = batman.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should return a character with last name 'Wayne'", () => {
      const expectLastName = "Wayne";

      const batman = getCharacter({
        name: "Bruce",
        lastName: "Wayne",
        age: 35,
        portraitUrl: "",
        portraitDescription: "",
      });
      const actualLastName = batman.lastName;

      expect(actualLastName).toBe(expectLastName);
    });

    test("Then it should return a character 35 years old", () => {
      const expectAge = 35;

      const batman = getCharacter({
        name: "Bruce",
        lastName: "Wayne",
        age: 35,
        portraitUrl: "",
        portraitDescription: "",
      });
      const actualAge = batman.age;

      expect(actualAge).toBe(expectAge);
    });

    test("Then it should return an alive character", () => {
      const batman = getCharacter({
        name: "Bruce",
        lastName: "Wayne",
        age: 35,
        portraitUrl: "",
        portraitDescription: "",
      });
      const isBatmanAlive = batman.isAlive;

      expect(isBatmanAlive).toBe(true);
    });

    test("Then it should return a character that I can kill", () => {
      const batman = getCharacter({
        name: "Bruce",
        lastName: "Wayne",
        age: 35,
        portraitUrl: "",
        portraitDescription: "",
      });

      batman.die();
      const isBatmanAlive = batman.isAlive;

      expect(isBatmanAlive).toBe(false);
    });
  });
});

import getCharacter from "../../character/factory/getCharacter";
import getFighter from "../../fighter/factory/getFighter";
import getAdviser from "./getAdviser";

describe("Given the getAdviser function", () => {
  describe("When it receives Dancer O'Faran character", () => {
    describe("That advises to Darrow O'Lykos", () => {
      const darrow = getCharacter({
        name: "Darrow",
        lastName: "O'Lykos",
        age: 35,
        portraitUrl: "",
        portraitDescription: "",
      });
      const fighterDarrow = getFighter(darrow, "Sling Blade", 10);

      test("Then it should return an adviser with name 'Dancer'", () => {
        const expectedName = "Dancer";

        const adviser = getAdviser(
          {
            name: "Dancer",
            lastName: "O'Faran",
            age: 58,
            portraitUrl: "",
            portraitDescription: "",
          },
          fighterDarrow,
        );
        const actualName = adviser.name;

        expect(actualName).toBe(expectedName);
      });

      test("Then it should return an adviser with last name 'O'Faran'", () => {
        const expectedLastName = "O'Faran";

        const adviser = getAdviser(
          {
            name: "Dancer",
            lastName: "O'Faran",
            age: 58,
            portraitUrl: "",
            portraitDescription: "",
          },
          fighterDarrow,
        );
        const actualLastName = adviser.lastName;

        expect(actualLastName).toBe(expectedLastName);
      });

      test("Then it should return an adviser that advise to 'Darrow O'Lykos'", () => {
        const expectedAdvisesTo = fighterDarrow;

        const adviser = getAdviser(
          {
            name: "Dancer",
            lastName: "O'Faran",
            age: 58,
            portraitUrl: "",
            portraitDescription: "",
          },
          fighterDarrow,
        );
        const actualAdvisesTo = adviser.advisesTo;

        expect(actualAdvisesTo).toBe(expectedAdvisesTo);
      });

      test("Then it should return an adviser that says 'I don't know why, but I think I'm going to die soon'", () => {
        const expectedPhrase =
          "I don't know why, but I think I'm going to die soon";

        const adviser = getAdviser(
          {
            name: "Dancer",
            lastName: "O'Faran",
            age: 58,
            portraitUrl: "",
            portraitDescription: "",
          },
          fighterDarrow,
        );
        const actualPhrase = adviser.speak();

        expect(actualPhrase).toBe(expectedPhrase);
      });
    });
  });
});

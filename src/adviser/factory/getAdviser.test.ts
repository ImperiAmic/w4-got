import getCharacter from "../../character/factory/getCharacter";
import { Portrait } from "../../character/types";
import getFighter from "../../fighter/factory/getFighter";
import getAdviser from "./getAdviser";

describe("Given the getAdviser function", () => {
  describe("When it receives Dancer O'Faran character", () => {
    const fullName = "Dancer O'Faran";
    const age = 58;
    const portrait: Portrait = {
      url: "",
      description: "",
    };

    const dancer = getCharacter(fullName, age, portrait);

    describe("that advises to Darrow O'Lykos", () => {
      const darrow = getCharacter("Darrow O'Lykos", 35, portrait);
      const fighterDarrow = getFighter(darrow, "Sling Blade", 10);

      test("Then it should return an adviser with name 'Dancer'", () => {
        const expectedName = "Dancer";

        const adviser = getAdviser(dancer, fighterDarrow);
        const actualName = adviser.name;

        expect(actualName).toBe(expectedName);
      });

      test("Then it should return an adviser with last name 'O'Faran'", () => {
        const expectedLastName = "O'Faran";

        const adviser = getAdviser(dancer, fighterDarrow);
        const actualLastName = adviser.lastName;

        expect(actualLastName).toBe(expectedLastName);
      });

      test("Then it should return an adviser that advise to 'Darrow O'Lykos'", () => {
        const expectAdvisesTo = fighterDarrow;

        const adviser = getAdviser(dancer, fighterDarrow);
        const actualAdvisesTo = adviser.advisesTo;

        expect(actualAdvisesTo).toBe(expectAdvisesTo);
      });

      test("Then it should return an adviser that says 'I don't know why, but I think I'm going to die soon'", () => {
        const expectedPhrase =
          "I don't know why, but I think I'm going to die soon";

        const adviser = getAdviser(dancer, fighterDarrow);
        const actualPhrase = adviser.phrase;

        expect(actualPhrase).toBe(expectedPhrase);
      });
    });
  });
});

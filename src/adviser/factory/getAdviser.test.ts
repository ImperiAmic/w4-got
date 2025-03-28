import getAdviser from "./getAdviser";
import { darrow } from "../../fighter/fixtures";
import { dancer } from "../../character/fixtures";

describe("Given the getAdviser function", () => {
  describe("When it receives Dancer O'Faran and advises to Darrow O'Lykos", () => {
    test("Then it should return an adviser that advise to 'Darrow O'Lykos'", () => {
      const expectedAdvisesTo = darrow;

      const adviser = getAdviser(dancer, darrow);
      const actualAdvisesTo = adviser.advisesTo;

      expect(actualAdvisesTo).toBe(expectedAdvisesTo);
    });

    test("Then it should return an adviser that says 'I don't know why, but I think I'm going to die soon'", () => {
      const expectedPhrase =
        "I don't know why, but I think I'm going to die soon";

      const adviser = getAdviser(dancer, darrow);
      const actualPhrase = adviser.speak();

      expect(actualPhrase).toBe(expectedPhrase);
    });
  });
});

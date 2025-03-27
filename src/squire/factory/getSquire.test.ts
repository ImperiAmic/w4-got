import getCharacter from "../../character/factory/getCharacter";
import { Portrait } from "../../character/types";
import getFighter from "../../fighter/factory/getFighter";
import getSquire from "./getSquire";

describe("Given the getSquire function", () => {
  describe("When it receives Wayne Ladrian", () => {
    const fullName = "Wayne Ladrian";
    const age = 40;
    const portrait: Portrait = {
      url: "",
      description: "",
    };
    const ballism = 10;

    const wayne = getCharacter(fullName, age, portrait);

    describe("That serves to Waxillium Ladrian and has a ballism of 10", () => {
      const wax = getCharacter("Waxillium Ladrian", 45, portrait);
      const fighterWax = getFighter(wax, "Sterrion and Vindicación I", 8);

      test("Then it should return a squire with name 'Wayne'", () => {
        const expectedName = "Wayne";

        const squire = getSquire(wayne, fighterWax, ballism);
        const actualName = squire.name;

        expect(actualName).toBe(expectedName);
      });

      test("Then it should return a squire with last name 'Ladrian'", () => {
        const expectedLastName = "Ladrian";

        const squire = getSquire(wayne, fighterWax, ballism);
        const actualLastName = squire.lastName;

        expect(actualLastName).toBe(expectedLastName);
      });

      test("Then it should return a squire that serves to 'Waxillium Ladrian'", () => {
        const expectedServesTo = fighterWax;

        const squire = getSquire(wayne, fighterWax, ballism);
        const actualServesTo = squire.servesTo;

        expect(actualServesTo).toBe(expectedServesTo);
      });

      test("Then it should return a squire with 10 ballism", () => {
        const expectedBallism = 10;

        const squire = getSquire(wayne, fighterWax, ballism);
        const actualBallism = squire.ballism;

        expect(actualBallism).toBe(expectedBallism);
      });

      test("Then it should return a squire that says 'I am a looser'", () => {
        const expectedPhrase = "I am a looser";

        const squire = getSquire(wayne, fighterWax, ballism);
        const actualPhrase = squire.phrase;

        expect(actualPhrase).toBe(expectedPhrase);
      });
    });
  });
});

import { wayne } from "../../character/fixtures";
import { wax } from "../../fighter/fixtures";
import getSquire from "./getSquire";

describe("Given the getSquire function", () => {
  describe("When it receives Wayne Ladrian and serves to Waxillium Ladrian and has a ballism of 10", () => {
    const ballism = 10;

    test("Then it should return a squire that serves to 'Waxillium Ladrian'", () => {
      const expectedServesTo = wax;

      const squire = getSquire(wayne, wax, ballism);
      const actualServesTo = squire.servesTo;

      expect(actualServesTo).toBe(expectedServesTo);
    });

    test("Then it should return a squire with 10 ballism", () => {
      const expectedBallism = 10;

      const squire = getSquire(wayne, wax, ballism);
      const actualBallism = squire.ballism;

      expect(actualBallism).toBe(expectedBallism);
    });

    test("Then it should return a squire that says 'I am a looser'", () => {
      const expectedPhrase = "I am a looser";

      const squire = getSquire(wayne, wax, ballism);
      const actualPhrase = squire.speak();

      expect(actualPhrase).toBe(expectedPhrase);
    });
  });
});

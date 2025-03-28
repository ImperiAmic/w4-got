import getFighter from "../../fighter/factory/getFighter";
import getSquire from "./getSquire";

describe("Given the getSquire function", () => {
  describe("When it receives Wayne Ladrian", () => {
    const ballism = 10;

    describe("And serves to Waxillium Ladrian and has a ballism of 10", () => {
      const wax = getFighter(
        {
          name: "Waxillium",
          lastName: "Ladrian",
          age: 45,
          portraitUrl: "",
          portraitDescription: "",
        },
        "pistols",
        10,
      );

      test("Then it should return a squire with name 'Wayne'", () => {
        const expectedName = "Wayne";

        const squire = getSquire(
          {
            name: "Wayne",
            lastName: "Ladrian",
            age: 40,
            portraitUrl: "",
            portraitDescription: "",
          },
          wax,
          ballism,
        );
        const actualName = squire.name;

        expect(actualName).toBe(expectedName);
      });

      test("Then it should return a squire with last name 'Ladrian'", () => {
        const expectedLastName = "Ladrian";

        const squire = getSquire(
          {
            name: "Wayne",
            lastName: "Ladrian",
            age: 40,
            portraitUrl: "",
            portraitDescription: "",
          },
          wax,
          ballism,
        );
        const actualLastName = squire.lastName;

        expect(actualLastName).toBe(expectedLastName);
      });

      test("Then it should return a squire that serves to 'Waxillium Ladrian'", () => {
        const expectedServesTo = wax;

        const squire = getSquire(
          {
            name: "Wayne",
            lastName: "Ladrian",
            age: 40,
            portraitUrl: "",
            portraitDescription: "",
          },
          wax,
          ballism,
        );
        const actualServesTo = squire.servesTo;

        expect(actualServesTo).toBe(expectedServesTo);
      });

      test("Then it should return a squire with 10 ballism", () => {
        const expectedBallism = 10;

        const squire = getSquire(
          {
            name: "Wayne",
            lastName: "Ladrian",
            age: 40,
            portraitUrl: "",
            portraitDescription: "",
          },
          wax,
          ballism,
        );
        const actualBallism = squire.ballism;

        expect(actualBallism).toBe(expectedBallism);
      });

      test("Then it should return a squire that says 'I am a looser'", () => {
        const expectedPhrase = "I am a looser";

        const squire = getSquire(
          {
            name: "Wayne",
            lastName: "Ladrian",
            age: 40,
            portraitUrl: "",
            portraitDescription: "",
          },
          wax,
          ballism,
        );
        const actualPhrase = squire.speak();

        expect(actualPhrase).toBe(expectedPhrase);
      });
    });
  });
});

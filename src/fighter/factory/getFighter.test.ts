import getCharacter from "../../character/factory/getCharacter";
import getFighter from "./getFighter";
import { Portrait } from "../../character/types";

describe("Given the getFighter function", () => {
  describe("When it receives Kaladin Stormblessed character", () => {
    const fullName = "Kaladin Stormblessed";
    const age = 22;
    const kaladinPortrait: Portrait = {
      url: "",
      description: "",
    };

    const kaladin = getCharacter(fullName, age, kaladinPortrait);
    describe("With the weapom Sylphrena and 10 dexerity", () => {
      const weapon = "Sylphrena";
      const dexerity = 10;

      test("Then it should return a fighter with name 'Kaladin'", () => {
        const expectedName = "Kaladin";

        const fighter = getFighter(kaladin, weapon, dexerity);
        const actualName = fighter.name;

        expect(actualName).toBe(expectedName);
      });

      test("Then it should return a fighter with last name 'Stormblessed'", () => {
        const expectedLastName = "Stormblessed";

        const fighter = getFighter(kaladin, weapon, dexerity);
        const actualLastName = fighter.lastName;

        expect(actualLastName).toBe(expectedLastName);
      });

      test("Then it should return a fighter with the weapon 'Sylphrena'", () => {
        const expectedWeapon = "Sylphrena";

        const fighter = getFighter(kaladin, weapon, dexerity);
        const actualWeapon = fighter.weapon;

        expect(actualWeapon).toBe(expectedWeapon);
      });

      test("Then it should return a fighter with 10 dexterity", () => {
        const expectedDexterity = 10;

        const fighter = getFighter(kaladin, weapon, dexerity);
        const actualDexterity = fighter.dexterity;

        expect(actualDexterity).toBe(expectedDexterity);
      });

      test("Then it should return a fighter that says 'First I punch, then I ask'", () => {
        const expectedPhrase = "First I punch, then I ask";

        const fighter = getFighter(kaladin, weapon, dexerity);
        const actualPhrase = fighter.phrase;

        expect(actualPhrase).toBe(expectedPhrase);
      });
    });
  });
});

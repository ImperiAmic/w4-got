import { kaladin } from "../../character/fixtures";
import getFighter from "./getFighter";

describe("Given the getFighter function", () => {
  describe("When it receives Kaladin Stormblessed with the weapon Sylphrena and 10 dexerity", () => {
    const weapon = "Sylphrena";
    const dexerity = 10;

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
      const actualPhrase = fighter.speak();

      expect(actualPhrase).toBe(expectedPhrase);
    });
  });
});

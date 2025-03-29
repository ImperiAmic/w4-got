import getAdviser from "../../../adviser/factory/getAdviser";
import getFighter from "../../../fighter/factory/getFighter";
import getKing from "../../../king/factory/getKing";
import { chani, hawat, paul } from "../../fixtures";
import getCharactersList from "./getCharactersList";

describe("Given the CharacterList component and characters Paul, Hawat and Chani", () => {
  describe("When it renders", () => {
    const screen = document.createElement("div");
    const kingPaul = getKing(paul, 3);
    const adviserHawat = getAdviser(hawat, kingPaul);
    const fighterChani = getFighter(chani, "crysknife", 10);
    const characters = [kingPaul, adviserHawat, fighterChani];

    test("Then it should show the names of Paul, Hawat and Chani inside a heading", () => {
      const CharactersList = getCharactersList(characters);

      screen.appendChild(CharactersList);

      const characterNames = screen.querySelectorAll("h2");

      characterNames.forEach((characterName, position) => {
        expect(characterName.textContent).toBe(
          `${characters[position].name} ${characters[position].lastName}`,
        );
      });
    });
  });
});

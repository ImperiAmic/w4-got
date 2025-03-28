import getAdviser from "../../../adviser/factory/getAdviser";
import getFighter from "../../../fighter/factory/getFighter";
import getKing from "../../../king/factory/getKing";
import getCharactersList from "./getCharactersList";

describe("Given the CharacterList component and characters Paul, Hawat and Chani", () => {
  describe("When it renders", () => {
    const screen = document.createElement("div");
    const paul = getKing(
      {
        name: "Paul",
        lastName: "Atreides",
        age: 15,
        portraitUrl: "",
        portraitDescription: "",
      },
      3,
    );
    const hawat = getAdviser(
      {
        name: "Thufir",
        lastName: "Hawat",
        age: 55,
        portraitUrl: "",
        portraitDescription: "",
      },
      paul,
    );
    const chani = getFighter(
      {
        name: "Chani",
        lastName: "Kynes",
        age: 18,
        portraitUrl: "",
        portraitDescription: "",
      },
      "crysknife",
      10,
    );
    const characters = [paul, hawat, chani];

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

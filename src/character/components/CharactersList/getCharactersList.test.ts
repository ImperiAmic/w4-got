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
        lastName: "",
        age: 18,
        portraitUrl: "",
        portraitDescription: "",
      },
      "crysknife",
      10,
    );
    const characters = [paul, hawat, chani];

    test("Then it should show an unordered list", () => {
      const CharactersList = getCharactersList(characters);

      screen.appendChild(CharactersList);

      const unorderedList = screen.querySelector("ul");

      expect(unorderedList).not.toBeNull();
    });

    test("Then it should render 3 card characters", () => {
      const listItems = screen.querySelectorAll("li");
      const listItemsLength = listItems.length;

      expect(characters.length).toBe(listItemsLength);
    });
  });
});

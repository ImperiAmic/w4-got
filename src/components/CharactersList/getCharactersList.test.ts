import getCharactersList from "./getCharactersList";

describe("Given the CharacterList component", () => {
  describe("When it renders", () => {
    test("Then it should show an empty unordered list", () => {
      const screen = document.createElement("div");

      const CharactersList = getCharactersList();

      screen.appendChild(CharactersList);

      const unorderedList = screen.querySelector("ul");

      expect(unorderedList).not.toBeNull();
    });
  });
});

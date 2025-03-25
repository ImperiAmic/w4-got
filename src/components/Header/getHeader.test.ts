import getHeader from "./getHeader";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Game of Thrones' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedAppTitle = "Game of Thrones";

      const Header = getHeader();

      screen.appendChild(Header);

      const appTitle = screen.querySelector("h1");
      expect(appTitle).not.toBeNull();
      expect(appTitle?.textContent).toBe(expectedAppTitle);
    });
  });
});

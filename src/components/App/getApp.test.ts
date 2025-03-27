import { getApp } from "./getApp";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Game of Thrones' inside a heading'", () => {
      const screen = document.createElement("div");
      const expectedAppTitle = "Game of Thrones";

      const App = getApp();

      screen.appendChild(App);

      const header = screen.querySelector("header");
      const appTitle = header?.querySelector("h1");

      expect(header).not.toBeNull();
      expect(appTitle?.textContent).toBe(expectedAppTitle);
    });
  });
});

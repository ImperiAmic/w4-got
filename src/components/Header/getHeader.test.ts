import getHeader from "../getHeader";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Game of Thrones' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedAppTitle = "Game of Thrones";

      const header = getHeader();

      screen.appendChild(header);

      const appTitile = screen.querySelector("h1");
      expect(appTitile).not.toBeNull();
      expect(appTitile?.textContent).toBe(expectedAppTitle);
    });
  });
});

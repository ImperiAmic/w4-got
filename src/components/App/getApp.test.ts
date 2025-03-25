import { getApp } from "./getApp";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show a header", () => {
      const screen = document.createElement("div");

      const app = getApp();

      screen.appendChild(app);

      const header = screen.querySelector("header");
      expect(header).not.toBeNull();
    });
  });
});

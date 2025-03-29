import getCharacterOverlayButtons from "../getCharacterOverlayButtons.js";

describe("Given the getCharacterOverlay component", () => {
  const screen = document.createElement("div");
  beforeEach(() => {
    screen.innerHTML = "";
  });

  describe("When it renders", () => {
    test("Then it should show 'Speak' as first button", () => {
      const overlayElement = getCharacterOverlayButtons();

      screen.appendChild(overlayElement);

      const buttonElements = screen.querySelectorAll(".overlay__button");

      expect(buttonElements[0].textContent).toBe("Speak");
    });

    test("Then it should show 'Die' as second button", () => {
      const overlayElement = getCharacterOverlayButtons();

      screen.appendChild(overlayElement);

      const buttonElements = screen.querySelectorAll(".overlay__button");

      expect(buttonElements[1].textContent).toBe("Die");
    });
  });
});

const getCharacterOverlayButtons = (): HTMLElement => {
  const buttonsOverlayElement = document.createElement("div");
  buttonsOverlayElement.className = "overlay-buttons";

  buttonsOverlayElement.innerHTML = `
  <button type="button" class="overlay__button">Speak</button>
  <button type="button" class="overlay__button">Die</button>
  `;

  return buttonsOverlayElement;
};

export default getCharacterOverlayButtons;

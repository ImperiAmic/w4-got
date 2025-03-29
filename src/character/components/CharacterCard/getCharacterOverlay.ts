const getCharacterOverlay = (): HTMLElement => {
  const overlayElement = document.createElement("div");
  overlayElement.className = "overlay";

  const buttonsOverlayElement = document.createElement("div");
  buttonsOverlayElement.className = "overlay-buttons";

  buttonsOverlayElement.innerHTML = `
  <button type="button" class="overlay__button">Speak</button>
  <button type="button" class="overlay__button">Die</button>
  `;

  overlayElement.appendChild(buttonsOverlayElement);

  return overlayElement;
};

export default getCharacterOverlay;

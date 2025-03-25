import { getApp } from "./components/App/getApp.js";

const rootElement = document.querySelector(".root");

if (!rootElement) {
  throw new Error("Missing root element");
}

const App = getApp();

rootElement.appendChild(App);

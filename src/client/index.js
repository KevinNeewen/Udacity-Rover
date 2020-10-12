import App from "./components/App";
import { updateSelectedRoverFromUrl } from "./store";
import "./index.scss";

const root = document.getElementById("root");

window.addEventListener("load", () => {
  render(root);
});

window.addEventListener("hashchange", updateSelectedRoverFromUrl, false);

export const render = async (root) => {
  const app = App();
  root.innerHTML = app;
};

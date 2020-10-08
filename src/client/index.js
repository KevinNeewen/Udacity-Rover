import App from "./components/App";
import "./index.scss";
const root = document.getElementById("root");

window.addEventListener("load", () => {
  render(root);
});

export const render = async (root) => {
  const app = App();
  root.innerHTML = app;
};

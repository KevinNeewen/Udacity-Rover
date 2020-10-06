import { fromJS } from "immutable";
import App from "./components/App";

let store = fromJS({
  rovers: [
    {
      name: "Curiosity", //"Opportunity", "Spirit"
    },
  ],
});

const root = document.getElementById("root");
const render = async (root, state) => {
  const result = App(state);
  debugger;
  root.innerHTML = result;
};

window.addEventListener("load", () => {
  render(root, store);
});

export const updateStore = (path, newState) => {
  store = store.setIn(path, newState);
  render(root, store);
};

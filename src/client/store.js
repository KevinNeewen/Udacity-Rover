import { fromJS } from "immutable";
import { render } from "./index";

export let store = fromJS({
  rovers: {},
  selectedRover: "Curiosity",
});

export const updateStore = (path, newState) => {
  store = store.setIn(path, newState);
  render(root, store);
};

import Rover from "./rover";
import UnorderedList from "../UnorderedList";

const Rovers = (rovers) => {
  return UnorderedList(rovers, Rover);
};

export default Rovers;

import { updateStore } from "../../index";

const Rover = (rover, index) => {
  const roverInformation = rover.get("result");
  if (!roverInformation) {
    getLatestRoverInformation(rover, index);
    return;
  }
  return `<li><img src='${roverInformation.img_src}' alt='rover-image' height='200px' width='auto' /></li>`;
};

export default Rover;

const getLatestRoverInformation = (rover, index) => {
  const roverName = rover.get("name");
  fetch(`http://localhost:3000/rovers/${roverName}`)
    .then((res) => res.json())
    .then((jsonResponse) => {
      const result = jsonResponse.result.latest_photos[0];
      const roverWithResult = rover.set("result", result);
      updateStore(["rovers", index], roverWithResult);
    });
};

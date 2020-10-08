import { store, updateStore } from "../../store";
import ImageGrid from "../ImageGrid";

const Rover = () => {
  const selectedRover = store.get("selectedRover");
  const selectedRoverInfo = store.getIn(["rovers", selectedRover]);

  if (!selectedRoverInfo) {
    getLatestRoverInformation(selectedRover);
    return;
  }

  const transformImages = (photos) => {
    return photos.map((photo) => {
      return {
        title: photo.earthDate,
        img_src: photo.img_src,
      };
    });
  };

  return `
    <div>
      <h3>${selectedRoverInfo.rover.name}</h3>
      <h5>Landing date: ${selectedRoverInfo.rover.landing_date}</h5>
      <h5>Launching date: ${selectedRoverInfo.rover.launch_date}</h5>
      <h5>Status: ${selectedRoverInfo.rover.status}</h5>

      ${ImageGrid(transformImages(selectedRoverInfo.latestPhotos))}
    </div>`;
};

export default Rover;

const getLatestRoverInformation = (rover) => {
  try {
    fetch(`http://localhost:3000/rovers/${rover}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        const limitedPhotos = jsonResponse.latest_photos.slice(0, 10);
        const roverData = limitedPhotos[0].rover;
        const latestPhotos = limitedPhotos.map((photo) => {
          return {
            earthDate: photo.earth_date,
            img_src: photo.img_src,
          };
        });
        updateStore(["rovers", rover], { rover: roverData, latestPhotos });
      });
  } catch (error) {
    console.log("Failed");
    console.log(error);
  }
};

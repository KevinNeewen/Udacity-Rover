let store = Immutable.fromJS({
  rovers: [
    {
      name: "Curiosity",
    },
  ],
});

//"Opportunity", "Spirit"

// add our markup to the page
const root = document.getElementById("root");

const updateStore = (path, newState) => {
  store = store.setIn(path, newState);
  render(root, store);
};

const render = async (root, state) => {
  root.innerHTML = App(state);
};

// create content
const App = (state) => {
  const rovers = state.get("rovers");
  return `
        <header></header>
        <main>
            <section>
                <h3>Put things on the page!</h3>
                <p>Here is an example section.</p>
                <p>
                    One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of
                    the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.
                    This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other
                    applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image
                    explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds;
                    but generally help with discoverability of relevant imagery.
                </p>
                ${Rovers(rovers)}
            </section>
        </main>
        <footer></footer>
    `;
};

// listening for load event because page should load before any JS is called
window.addEventListener("load", () => {
  render(root, store);
});

// ------------------------------------------------------  COMPONENTS

// Example of a pure function that renders infomation requested from the backend
const Rovers = (rovers) => {
  return UnorderedList(rovers, Rover);
};

const UnorderedList = (list, callback) => {
  return list
    .map((element, index) => {
      return `<ul>${callback(element, index)}</ul>`;
    })
    .join("");
};

const Rover = (rover, index) => {
  const roverInformation = rover.get("result");

  if (!roverInformation) {
    getLatestRoverInformation(rover, index);
    return;
  }
  return `<li><img src='${roverInformation.img_src}' alt='rover-image' height='200px' width='auto' /></li>`;
};

const utils = () => {};

// ------------------------------------------------------  API CALLS

const getLatestRoverInformation = (rover, index) => {
  const roverName = rover.get("name");
  fetch(`http://localhost:3000/rovers/${roverName}`)
    .then((res) => res.json())
    .then((jsonResponse) => {
      const result = jsonResponse.result.latest_photos[0];
      const roverWithResult = rover.set("result", result);
      debugger;
      updateStore(["rovers", index], roverWithResult);
    });
};

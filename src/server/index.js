require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");
var cors = require("cors");

const curiosityMock = require("./mocks/curiosity.json");
const spiritMock = require("./mocks/spirit.json");
const opportunityMock = require("./mocks/opportunity.json");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/", express.static(path.join(__dirname, "../../dist")));

app.get("/rovers/:rover", async (req, res) => {
  const rover = req.params.rover;

  try {
    let result = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?api_key=${process.env.API_KEY}`
    ).then((res) => res.json());
    res.send({ result });
  } catch (error) {
    console.log("Failed");
    console.log(error);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

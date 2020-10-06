require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "../public")));

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

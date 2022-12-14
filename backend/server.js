import express from "express";
import data from "./data.js";

const app = express();

//test
app.get("/api/places", (req, res) => {
  res.send(data.places);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

const e = require("express");
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

app.get("/User/:id", (req, res) => {
  const ids = parseInt(req.params.id);
  res.send(`the id is ${ids}`);
});

app.listen(3000, () => {
  console.log("the server start");
});

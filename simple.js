const e = require("express");
const express = require("express");
const app = express();

const datas = [
  { name: "joel", id: 1 },
  { name: "mathew", id: 2 },
  { name: "thomas", id: 3 },
];

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!isNaN(id)) {
    const foundUser = datas.find((item) => item.id === id);
    if (foundUser) {
      res.send(`User found: ${foundUser.name}`);
    } else {
      res.send("User not found");
    }
  } else {
    res.send("You entered a string");
  }
});

app.listen(3000, () => {
  console.log("the server start");
});

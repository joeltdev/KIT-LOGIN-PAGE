const express = require("express");
const app = express();
const { fork } = require("child_process");
const port = 3002;
const child = fork("child.js");

child.on("messgar", (mess) => {
  console.log("hello", mess);
});

child.send({ hello: "this mess" });

app.use(express.json());

const datas = [
  { name: "joel", id: 1 },
  { name: "ko", id: 2 },
  { name: "mo", id: 3 },
];

app.get("/das/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = datas.find((item) => item.id === id);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json("Data not found"); // Send 404 if data is not found
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

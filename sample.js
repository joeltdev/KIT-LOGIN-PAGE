const express = require("express");
const app = express();

const fetchData = (req, res) => {
  let counter = 0;
  for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
      counter++;
      if (counter === 11) {
        // All tasks completed
        res.send("All tasks completed");
      }
    }, 1000 * i);
  }
};

app.get("/multi", fetchData);

app.listen(5007, () => {
  console.log("the server is start 5007");
});

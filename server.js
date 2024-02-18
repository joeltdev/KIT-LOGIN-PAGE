const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
  } else {
    res
      .status(400)
      .send(
        "Invalid parameters. Please provide numeric values for num1 and num2."
      );
  }
});

// Start the server
const port = 3003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

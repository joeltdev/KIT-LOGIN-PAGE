
// const { json } = require("express");

// app.get("/sum", (req, res) => {
//   const num1 = parseInt(req.query.num1);
//   const num2 = parseInt(req.query.num2);

//   if (!isNaN(num1) && !isNaN(num2)) {
//     const sum = num1 + num2;
//     res.send(`The sum of ${num1} and ${num2} is ${sum}`);
//   } else {
// //     res
// //       .status(400)
// //       .send(
// //         "Invalid parameters. Please provide numeric values for num1 and num2."
// //       );
// //   }
// // });
// app.get("/differnces", (req, res) => {
//   const num1 = parseInt(req.query.num1);
//   const num2 = parseInt(req.query.num2);

//   if (!isNaN(num1) && !isNaN(num2)) {
//     const sum = num1 + num2;
//     res.send(`the first ${num1} and second ${num2} the sum is ${sum}`);
//   } else {
//     res.status(404).send("some error");
//   }
// });
// // Start the server

// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());
// // Middleware to parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));

// // Serve HTML file with a form
// app.get('/', (req, res) => {
//   res.send(`
//     <html>
//     <head><title>Data Input</title></head>
//     <body>
//       <h1>Submit Data</h1>
//       <form method="post" action="/data">
//         <label for="dataInput">Enter Data:</label>
//         <input type="text" id="dataInput" name="data">
//         <button type="submit">Submit</button>
//       </form>
//     </body>
//     </html>
//   `);
// });

// // POST method to handle form submission
// app.post('/data', (req, res) => {
//   const data = req.body.data;
//   console.log('Received data:', data);
//   res.send('Data received successfully!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// const jsonString = '{"name":"John","age":30,"city":"New York"}';
// const obj = JSON.parse(jsonString);
// console.log(obj); // Output: John

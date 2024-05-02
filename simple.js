const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

// MongoDB connection URL
const url = "mongodb://localhost:27017";
const dbName = "your_database_name"; // Replace with your database name
const collectionName = "your_collection_name"; // Replace with your collection name

app.get("/User/:id", (req, res) => {
  const ids = parseInt(req.params.id);
  if (ids >= 10) {
    // If ID is greater than or equal to 10, add it to MongoDB
    MongoClient.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) {
          console.error("Error connecting to MongoDB:", err);
          res.status(500).send("Internal server error");
          return;
        }
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        collection.insertOne({ id: ids }, (err, result) => {
          if (err) {
            console.error("Error inserting data into MongoDB:", err);
            res.status(500).send("Internal server error");
            return;
          }
          console.log("Data inserted successfully into MongoDB");
          res.send("Data inserted successfully into MongoDB");
          client.close();
        });
      }
    );
  } else {
    res.send("ID is not greater than or equal to 10");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

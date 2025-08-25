const express = require("express");
const dbconnect = require("../Nodewithmongodb/dbconnect");
const  mongodb = require("mongodb"); // ye import krna pdta h delete api k liye
const app = express();

// import for post and put and delete api older i body parser use krte the

app.use(express.json());

 // get api using express and mongodb
app.get("/", async (req, res) => {
  let data = await dbconnect();
  let result = await data.find().toArray();
  res.send(result);
});

// post api using express and mongodb
app.post("/", async (req, res) => {
  let data = await dbconnect();
  let result = await data.insertOne(req.body);
  res.send(result);
});

// put api using express and mongodb
app.put("/", async (req, res) => {
  let data = await dbconnect();
  let result = await data.updateOne({ name: "Adit kumar" }, { $set: req.body });
  res.send(result);
});

// delete api using express and mongodb
app.delete("/:_id", async (req, res) => {
  let data = await dbconnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params._id),
  });
  res.send(result);
});

app.listen(5000);

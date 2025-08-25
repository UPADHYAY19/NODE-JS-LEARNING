const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);
const dbName = "test"; // Replace with your database name

async function run() {
  try {
     let result = await client.connect();
     db = result.db(dbName);
     return db.collection("user")
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error:", err);
  } 
}

module.exports = run; // Exporting the run function, client, and dbName
const mongoose = require("mongoose");

// connect once at the top
mongoose.connect("mongodb://localhost:27017/test");

const userSchema = new mongoose.Schema({
    name: String,
    pass: Number
});

// explicitly use the existing 'user' collection
const userModel = mongoose.model("user", userSchema, "user");

const main = async () => {
    let data = new userModel({ name: "John Doe", pass: 12345 });
    let result = await data.save();
    console.log(result);
};

const updateData = async () => {
    let data = await userModel.updateOne(
        { name: "John Doe" },
        { $set: { pass: 670 } }
    );
    console.log(data);
};

updateData();
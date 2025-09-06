const express = require('express');
require('./config')
const User = require('./user')
const app = express();
app.use(express.json())

app.post("/create",async (req,resp)=>{
    console.log(req.body);
    resp.send("done");
    let data = new User(req.body)
    let result = await data.save();
    console.log(data);
    

})

app.get("/list",async(req,resp)=>{
    let data = await User.find();
    resp.send(data);
})

app.delete("/delete/:_id",async(req,resp)=>{
    let data = await User.deleteOne(req.params);
    resp.send(done);
})

app.put("/update/:_id",async(req,resp)=>{
    let data = await User.updateOne(req.params,
        {
            $set : req.body
        }

    )
    resp.send(data);
})


app.listen(5000);
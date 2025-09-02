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
app.listen(5000);
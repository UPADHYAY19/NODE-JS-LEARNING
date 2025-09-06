const express = require('express');
require('./config')
const User = require('./user');
const { log } = require('console');
const app = express();

app.get("/search/:key",async (req,resp)=>{
    console.log(req.params.key)
    let data = await User.find();
    resp.send(data)
})



app.listen(5000);
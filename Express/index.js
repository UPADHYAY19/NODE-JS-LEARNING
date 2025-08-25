const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
    console.log(req.query);
    
    res.send('welcom this is home page'+ req.query.name);
    

});
app.get('/about',(req,res)=>{
    res.send('welcom this is about page');
    

});
app.get('/help',(req,res)=>{
    res.send('welcom this is help page');
    

});
app.listen(5000);

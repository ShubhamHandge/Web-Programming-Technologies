const express = require('express');
const app = express();
const path = require('path');

//console.log(__dirname);
const sharedata = path.join(__dirname+'/public');
console.log(sharedata);

//use middleware to access static assestes 
app.static(sharedata);

app.get("/",(req,res,next)=>{
    res.end("simple get request for home");
})

app.get("/about",(req,res,next)=>{
    res.end("simple get request for about");
})

app.get("/services",(req,res,next)=>{
    res.end("simple get request for services");
})

app.get("/galary",(req,res,next)=>{
    res.end("simple get request for galary");
})

app.get("/contact",(req,res,next)=>{
    res.end("simple get request for contact");
})

app.get("**",(req,res,next)=>{
    res.end("404...page not found");
})


module.exports = app;
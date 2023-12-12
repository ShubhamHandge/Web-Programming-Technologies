
require('dotenv').config();
const express = require('express');
const app = express();

//accessing dot environment variable

const host = process.env.HOST;
const port = process.env.PORT;

app.get('/',(req,res,next)=>{
    res.send("This is my home page");
})
app.get('/about',(req,res,next)=>{
    res.send("This is my about page");
})
app.get('/services',(req,res,next)=>{
    res.send("This is my services page");
})
app.get('/galary',(req,res,next)=>{
    res.send("This is my galary page");
})
app.get('*',(req,res,next)=>{
    res.send("404.....error");
});


app.listen(port,()=>{
    console.log(`my server get started on =>.${host}:${port}`);
})


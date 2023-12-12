const express = require('express');
const app = express();

//this is get request
app.get("/",(req,res,next)=>{
    res.send("this is my simple get request");
});

//this is delete request
app.delete("/",(req,res,next)=>{
    res.send("this is my simple delete request");
});

//this is post request
app.post("/",(req,res,next)=>{
    res.send("this is my simple post request");
});

//this is put request
app.put("/",(req,res,next)=>{
    res.send("this is my simple put request");
});



app.listen(5555,()=>{
    console.log("my server get started")
});
    


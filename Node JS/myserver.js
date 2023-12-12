import http from 'http';
import fs from 'fs';
//const http = require('http');

var server = http.createServer((req,res)=>{
    //res.write("server created successfully");
    //res.end(); 
    
    if(req.url==="/"|| req.url==="/index"){
        res.write("<html><body><b>This is home page</b></body></html>");
        //res.write("This is home page");         // we can use like 
        res.end(); 
    }else if(req.url==="/about"){ 
        res.write("<html><body><b>This is about page</b></body></html>");
        res.end();
    }else if(req.url==="/services"){
        res.write("<html><body><b>This is services page</b></body></html>");
        res.end();
    }else if(req.url==="/galary"){
        res.write("<html><body><b>This is galary page</b></body></html>");
        res.end();
    }
});

server.listen(9999,()=>{
    console.log("server get stared");
});
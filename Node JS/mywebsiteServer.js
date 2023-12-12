
//import http from 'http';
//import fs from 'fs';
require('dotenv').config();

const http = require('http');
const fs = require('fs');
//accessing dot environment variable
const host = process.env.HOST
const port = process.env.PORT


var server = http.createServer((req,res)=>{
    //res.write("server created successfully");
    //res.end(); 
    
    if(req.url==="/"|| req.url==="/index"){
        //res.write("<html><body><b>This is home page</b></body></html>");
        res.writeHead(200,{"content-type":"text/html"});
        var readData = fs.createReadStream(__dirname+"/mywebindex.html","utf-8");
        readData.pipe(res);
        //res.end(); 
    }else if(req.url==="/about"){ 
        //res.write("<html><body><b>This is about page</b></body></html>");res.writeHead(200,{"content-type":"text/html"});
        res.writeHead(200,{"content-type":"text/html"});
        var readData = fs.createReadStream(__dirname+"/mywebAbout.html","utf-8");
        readData.pipe(res);
        //res.end();
    }else if(req.url==="/services"){
        //res.write("<html><body><b>This is services page</b></body></html>");
        res.writeHead(200,{"content-type":"text/html"});
        var readData = fs.createReadStream(__dirname+"/mywebservices.html","utf-8");
        readData.pipe(res);
        //res.end();
    }else if(req.url==="/galary"){
        //res.write("<html><body><b>This is galary page</b></body></html>");
        res.writeHead(200,{"content-type":"text/html"});
        var readData = fs.createReadStream(__dirname+"/mywebgalary.html","utf-8");
        readData.pipe(res);
        //res.end();
    }else {
        //res.write("<html><body><b>This is galary page</b></body></html>");
        res.writeHead(200,{"content-type":"text/html"});
        var readData = fs.createReadStream(__dirname+"/myweb404.html","utf-8");
        readData.pipe(res);
        //res.end();
    }
});

// server.listen(9999,()=>{
//     console.log("server get stared");
// });

server.listen(port,()=>{
    console.log(`server get stared on => ${host}:${port}`);
}); 
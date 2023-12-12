import fs from 'fs';

// const fs=require('fs');  

//reading file synchronous


var readData=fs.readFileSync('./FSModule.txt',"utf-8",function(err,msg){});
console.log(readData); 


fs.writeFileSync("./FSModule2.text",readData,function(err,msg){})

// reading file asynchronous

fs.readFile("./FSModule.txt","utf-8",(err,rdata)=>{
    fs.writeFile("./writeme.text",rdata,(err,data)=>{
        console.log("file read and asynchromous successfully.");
    })
})

// appending data asynchronous

fs.appendFile("./writeme2.text","We are Not fine Windows 11.",(err,data)=>{
    console.log("data appended successfully");
});

// fs.writeFile("./writeme.text",readData,function(err,msg){});
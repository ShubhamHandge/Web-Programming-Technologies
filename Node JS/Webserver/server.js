require('dotenv').config();
const http = require('http');
const app = require('./request');

const host = process.env.HOST;
const port = process.env.PORT;

const myserver = http.createServer(app);
// const myserver = http.createServer((req,res)=>{
//     res.write("Server Created Successfully");
//     res.end();
// });

myserver.listen(2222,()=>{
    console.log(`My Server is Started Succesfully on ${host}:${port}`)
});
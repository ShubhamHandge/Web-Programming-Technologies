const path  = require(`path`)
const os = require('os')


//path module
console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.extname(__filename));
console.log(path.join(__dirname+"/demo.js"));

//os module
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.homedir());       //homedirectry
console.log(os.tmpdir());

console.log(os.endianness());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.loadavg());
console.log(os.cpus());
console.log(os.networkInterfaces());

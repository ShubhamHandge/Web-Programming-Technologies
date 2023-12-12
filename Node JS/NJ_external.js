// const msg = require('./module');
// const emp = require('./module');

const data = require('./NJ_localModule')

//console.log(msg);
//console.log(`ID:${emp.id}`);

//accessing string lateral
console.log(data.msg);
 
// accessing object 
console.log(`ID:${data.emp.id} Name:${data.emp.name} Post:${data.emp.post} Salary:${data.emp.salary}`);

// accessing function
console.log(data.addition(200,700));




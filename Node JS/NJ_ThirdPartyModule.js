import chalk from 'chalk';      ///chalk module to design terminal 
import validator from 'validator';

console.log(chalk.red('Hello world!'));
console.log(chalk.white.bgRed('welcome you my world!'));

// use of validator
var myemail = "abcgmail.com";
console.log(validator.isEmail(myemail));

var myemail1 = "abc@gmail.com";
console.log(validator.isEmail(myemail1));

//

var data = "";
console.log(validator.isEmpty(data));

var data1 = "SHUBH";
console.log(validator.isEmpty(data1));



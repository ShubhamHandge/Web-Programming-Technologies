// its string lateral
var msg = "This is core module";

// object 
var emp = {
    id:101,name:"SHUBH",post:"Node JS DEV.",salary:54000
}

//function
function addition(n1,n2){
    return n1+n2;
}

//module.exports = msg;
//module.exports = emp;

module.exports = {
    msg,emp,addition
}



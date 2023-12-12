//function

function add(n1,n2){
    return n1+n2;
}

function sub(n1,n2){
    return n1-n2;
}
function mul(n1,n2){
    return n1*n2;
}

function div(n1,n2){
    return n1/n2;
}

const evenNo = (n1) => {
    if(n1%2==0){
        return n1+" is even no";
    }else{
        return n1+" is odd no";
    }
}


module.exports = {
    add,sub,mul,div,evenNo
}


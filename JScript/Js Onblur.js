function checkuid(){
window.alert("hi")
    var userid=document.getElementById('uid').value;
    if(userid==""){
        document.getElementById("erruid").innerHTML="This field is required";
        document.getElementById("erruid").style.color="red";
    }else if(!userid.match(regUid))  {
        document.getElementById("erruid").innerHTML="uid contain character min-3 and max-15";
        document.getElementById("erruid").style.color="red";
    }else{
        document.getElementById("erruid").innerHTML="correct data inserted";
        document.getElementById("erruid").style.color="green";
    }
 
}
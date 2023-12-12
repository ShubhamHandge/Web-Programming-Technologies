function checkData(){
    //var name= document.getElementById("fname").value;
    var uname=document.myform.fname.value;
    var uedu=document.myform.edu;
    var regName= "^[a-zA-Z ]{3,15}$";

    if(uname==""){
        window.alert("This field is required");
        document.getElementById("fname").focus();
        return false;
    }

    if(!uname.match(regName)){
        window.alert("Name field must contain only character min-3 and max-15");
        document.getElementById("fname").focus();
        return false;
    }
    
    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false){
        window.alert("Please Select Your Qualification");
        return false;

    }
        
}
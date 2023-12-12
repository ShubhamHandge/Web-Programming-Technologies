import React, { Component } from 'react'

 class ConditionalRendering extends Component {

    constructor(props) {
    super(props)

    this.state = {
        isLogin:true
         
    }
}

    render() {
        const {isLogin} = this.state;
        let msg = "";
        //1.use of if-else
        if(isLogin){
           // return <h2>Admin login Successfully</h2>
           msg = "Admin login Successfully"
        }else{
           // return <h2>User login Successfully</h2>
           msg = "user login Successfully"
        }
        //2.use of element as variable
        //return<h2>{msg}</h2>

        //3.use of ternary operator
        //return(isLogin)?  <h2>Admin login Successfully</h2>:<h2>User login Successfully</h2>

        //3.use of short circuit
        return(!isLogin) && <h2>Admin login Successfully</h2>




       
    }
}

export default ConditionalRendering;

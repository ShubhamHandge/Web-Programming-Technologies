import React, { Component } from "react";

class MyDetailComp extends Component{

    constructor(){
        super();   // super() for  passing/exporting data ..it must be define in constructor
        this.state = {
            age:23,
            gender:"male",
            single:"unmarried"
        }
        
    }

    render(){

        // destructuring state 
        const{age,gender,single} = this.state; 

        //destructuring props
        const {fname,lname,address} = this.props;

        return(<div>
            
            {/* by destructuring state */}
            <h2>after destructuring state</h2>
            <p>I am <strong>{fname} {lname} i live in {address}</strong></p>

            {/* <h2>after destructuring props</h2>  */}
            <p>my age is <strong>{age}</strong> gender is  <strong>{gender}</strong> i am <strong>{single}</strong> </p>


            
        </div>)
         
    }
}
export default MyDetailComp;
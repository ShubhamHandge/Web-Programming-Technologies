import React, { Component } from "react";

class MyStateComp extends Component{

    constructor(){
        super();   // super() for  passing/exporting data ..it must be define in constructor
        this.state = {
            name:"SHUBH",
            count:0
        }
        setTimeout(()=>{
            //this.setState({name:"SHUBHAM",count:this.state.count+1})
                //or but 2nd one is used 
            this.setState((prevState)=>({count:prevState.count+1,name:"SHUBHAM HANDGE"}))

        },2000)
    }

    render(){

        // destructuring props 
        const{city,country} = this.props; 

        //destructuring state
        const {name,count} = this.state;

        return(<div>
            <h2>This is MyStateComp class component</h2>
            <p>I am <strong>{this.state.name}</strong> and value is <strong>{this.state.count}</strong></p>
            <p>I live in <strong>{this.props.city}</strong> from  <strong>{this.props.country}</strong></p>
            
            {/* by destructuring state */}
            <h2>after destructuring state</h2>
            <p>I am <strong>{name}</strong> and value is <strong>{count}</strong></p>

            <h2>after destructuring props</h2>
            <p>I live in <strong>{city}</strong> from  <strong>{country}</strong></p>


            
        </div>)
         
    }
}
export default MyStateComp;
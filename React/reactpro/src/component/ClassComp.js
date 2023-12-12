import React, { Component } from "react";

class ClassComp extends Component{
    render(){
        return(<div>
            <h2>This is my class component</h2>
            <p>This my class para function using JSX</p>
            <p>I am <strong>{this.props.name}</strong> and i am <strong>{this.props.post}</strong></p>
        </div>)
         
    }
}
export default ClassComp;
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
//  outlet import for routing


class HoverCounter extends Component {
    constructor(props){
        super(props);   
            this.state = {
            count:0
        }
    }

    incrementCounter = ()=>{
            // window.alert("hii");
            this.setState((prevState)=>({count:prevState.count+1}));
    }

    render() {
        const{count} = this.state;
         return (
            <div>
                <hr />
                <h2>THis is Hover</h2>
               
                <h2 onMouseOver={this.incrementCounter}>hover on me</h2>
                <p>counter is:<strong>{count}</strong></p>
                <hr />
                
                <outlet /> 
                {/* //outlet for routing code file  */}
            </div>
        )   
    }
}
export default HoverCounter;

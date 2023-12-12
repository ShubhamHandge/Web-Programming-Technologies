import React, { Component } from 'react'

export class ClickCount extends Component {
    constructor(props){
        super(props);   // super() for  passing/exporting data ..it must be define in constructor
        this.state = {
            count:0
        }

    }

    incrementCounter = ()=>{
       // window.alert("hii");
       this.setState((prevState)=>({count:prevState.count+1}));
    }
    decrementCounter = ()=>{
        // window.alert("hii");
        this.setState((prevState)=>({count:prevState.count-1}));
     }





    render() {
        const{count} = this.state
        return (
            <div>
                <h1>this is my Click counter component</h1>
                <p>counter is:<strong>{count}</strong></p>

                <button type='button' onClick={this.incrementCounter}>counter++</button>
                <button type='button' onClick={this.decrementCounter}>counter--</button>
            </div>
        )
    }
}

export default ClickCount;

import React, { Component } from 'react'

class IncCounter extends Component {
    constructor(props){
        super(props);   
            this.state = {
            count:0
        }
    }

    incrementCounter = ()=>{
            this.setState((prevState)=>({count:prevState.count+1}));
    }

    render() {
        const{count} = this.state;
         return (
            <div>
                
                <h2>THis is IncCounter</h2>
                <p>counter is:<strong>{count}</strong></p>
                <button type='button' onClick={this.incrementCounter}>incounter++</button>


            </div>
        )   
    }
}
export default IncCounter;

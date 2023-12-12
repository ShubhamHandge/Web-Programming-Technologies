import React, { Component } from 'react'
import IncCounter from './IncCounter';

const Hoc = (WrapperComp) => {

    class HocClassComp extends Component{

        constructor(props){
            super(props);  

                this.state = {
                    count:0
                }
        }

        incrementCounter = ()=>{
            this.setState((prevState)=>({count:prevState.count+1}));
        }    

        render(){
            return <WrapperComp count = {this.state.count} incrementCounter={this.incrementCounter}></WrapperComp>
        }
   
    }


    return HocClassComp;
}    
 export default Hoc(IncCounter);

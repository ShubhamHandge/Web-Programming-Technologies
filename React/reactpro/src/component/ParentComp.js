import React, { Component } from 'react'
import ChildComp from './ChildComp';
import PureComp from './PureComp';

 


  class ParentComp extends Component {
    constructor(props) {
        super(props)  // super() for  passing/exporting data ..it must be define in constructor
        this.state = {
            name:"shubham",
            count:0
            
            
        }
    }

    incrementCounter = ()=>{
        // window.alert("hii");
        this.setState((prevState)=>({count:prevState.count+1}));
     }
    
    changeName = ()=>{
        this.setState((prevState)=>({name:"Shubham Handge"}));
        console.log("THis is parent component");
    }

    render() {
        console.log("this is parent component")
        const{name,count} = this.state; 

        return (
            <div>
                <hr />
                <h2>This is ParentComp </h2>
                <p>my name is:<strong>{name}</strong></p>
                <p>counter is:<strong>{count}</strong></p>
                <button type='button' onClick={this.incrementCounter}>counter++</button>
                <button type='button' onClick={this.changeName}>change Name</button>

                <ChildComp count={count} name={name} /> <hr />
                <PureComp  name={name}/>
            </div>
        )
    }
}

export default ParentComp;

import React, { Component } from 'react'
 
export class MyFavColor extends Component {
    constructor(props){
        super(props);   
            this.state = {
            color:[
            {id:101 ,name:"red"},
            {id:102 ,name:"green"},
            {id:103 ,name:"blue"},
            {id:104 ,name:"pink"},
            {id:105 ,name:"yellow"}
            ]
        }
    }

    render() {
        const{color} = this.state
        return (
            <div>
                <h2>This is MyFavColor Component</h2>
                <ul>
                    {/* {color.map(val,index)
                    return <li key={index}>{val.name}</li>} */}
                    {color.map((val,index)=>{
                         return <li key={index}>{val.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default MyFavColor;



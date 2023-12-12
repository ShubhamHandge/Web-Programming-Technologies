import React, { Component } from 'react'

 class ChildComp extends Component {


    render() {
        return (
            <div>
                <h2>This is child Comp</h2>
                <p>count:{this.props.count} name:{this.props.name}</p>

            </div>
        )
    }
}

export default ChildComp;

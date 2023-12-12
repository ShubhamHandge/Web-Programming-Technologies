import React, { Component, PureComponent } from 'react'

 class PureComp extends PureComponent {
    render() {

        console.log("THis is  Pure component");

        return (
            <div>
                <h2>This is my PureComp</h2>
                <p>My name is <strong>{this.props.name}</strong></p>
            </div>
        )
    }
}

export default PureComp

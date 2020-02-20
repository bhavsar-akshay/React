import React, { Component } from 'react'

class Classclick extends Component {
    handler() {
        console.log("Class Handler");
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handler}>Class Click</button>
            </div>
        )
    }
}

export default Classclick

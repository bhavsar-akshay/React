import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props){
        super(props);
        this.state = {
            message : "hello"
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            message:"Good Bye"
        })
    }

    // clickHandler = () => {
    //     this.setState({
    //         message:"Good Bye"
    //     })
    // }

    render() {
        return (
            <div>
                {this.state.message}<br/>
                {/* binding event handler in constructor */}
                <button onClick={this.clickHandler}> Click </button>
                {/* bind this to event handler using bind method */}
                {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}
                {/* call event handler using arrow function syntex */}
                {/* <button onClick={() => this.clickHandler()}> Click </button> */}
           </div>
        )
    }
}

export default EventBinding

import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increment(){
       
        this.setState((prevState,props) =>(
            {
            count: prevState.count + 1
        }))
    }

    incrementFive(){
            this.increment();
            this.increment();
            this.increment();
            this.increment();
            this.increment();
    }
    render() {
        return (
            <div>
                <div>Counter : {this.state.count}</div> 
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter;

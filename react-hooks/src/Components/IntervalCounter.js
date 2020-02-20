import React, { Component } from 'react'

export class IntervalCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    componentDidMount(){
        this.interval = setInterval(this.increment,1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
    increment = () =>{
        this.setState({
            count : this.state.count + 1 
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default IntervalCounter

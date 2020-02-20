import React, { Component } from 'react'

export class ClassTimer extends Component {
    interval;
    constructor(props) {
        super(props)
    
        this.state = {
             timer:0
        }
    }
    
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState(prevState => ({timer : prevState.timer + 1}))
        },1000)
    }

    componentWillMount(){
        clearInterval(this.interval);
    }
    

    render() {
        return (
            <div>
                {this.state.timer}<br/>
                <button onClick={() => { clearInterval(this.interval)}}>Clear</button>
            </div>
        )
    }
}

export default ClassTimer

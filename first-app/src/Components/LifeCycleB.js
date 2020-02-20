import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Akshay"
        }

        console.log("LifecyclB Constructor");
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps")
        return null;
    }
    
    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
    }

    render() {
        console.log("LifeCycleB render");
        return (
            <div>
                Test Lifecycle B
            </div>
        )
    }
}

export default LifeCycleB

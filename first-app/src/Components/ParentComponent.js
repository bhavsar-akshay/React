import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props){
        super(props);

        this.state ={
            parnetName: "Parent Component"
        };

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childMessage){
        alert(`helloe from ${this.state.parnetName} And ${childMessage}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent

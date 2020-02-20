import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        console.log(this.props);
       return (
            <div>
                <h1>Welcome to StateFull Class component</h1>
                {this.props.name}
            </div>
       );
    }
}

export default Welcome;
import React, { Component } from 'react';
import updatedComponent from  './withCounter';

class HoverCounter extends Component {
    render() {
        return (
            <div className='hoverCounter'>
                <h2 onMouseOver={this.props.incrementCount}>Hover {this.props.count} Here</h2>
            </div>
        )
    }
}

export default updatedComponent(HoverCounter);

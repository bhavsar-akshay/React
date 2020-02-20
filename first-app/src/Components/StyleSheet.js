import React from 'react';
import '../Style/myStyle.css';

const inlineStyle = {
    color : 'Blue',
    fontSize: '72px'
}

export default function StyleSheet(props) {
    let className = props.isStyle ? 'primary' : '';

    return (
        <div>
            
            {/* Inline Style */}
            <h2 style={inlineStyle }> React InLine Style </h2>

            {/* Style Applied through Style Sheet  */}
            <h2 className={`${className} font-xl`}> React Style Sheet</h2>
        </div>
    )
}

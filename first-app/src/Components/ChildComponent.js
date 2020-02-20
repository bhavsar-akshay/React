import React from 'react'


function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('from child')}> Get Parent Component</button>            
        </div>
    )
}

export default ChildComponent;

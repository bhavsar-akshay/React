import React, {useState} from 'react'
import MousePosition from './MousePosition';

function DisplayMousePosition() {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() =>{ setDisplay(!display)}}>Hide Mouse Position</button>        
            {
                display && <MousePosition></MousePosition>
            }
        </div>
    )
}

export default DisplayMousePosition

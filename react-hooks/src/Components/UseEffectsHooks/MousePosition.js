import React, {useState, useEffect} from 'react'


function MousePosition() {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    useEffect(() =>{
        window.addEventListener('mousemove',logMousePosition)

        return () =>{
            console.log("Component is unMounted");
            window.removeEventListener('mousemove',logMousePosition);
        }
    },[])

    const logMousePosition = e =>{
        console.log('position');
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div>
            Hook X: {X} , Hook Y: {Y}
        </div>
    )
}

export default MousePosition

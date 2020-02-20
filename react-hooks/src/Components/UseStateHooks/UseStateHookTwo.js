import React, { useState} from 'react'

function UseStateHookTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            Count: {count}<br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => {if(count <=0){return}; setCount(prevCount => prevCount - 1)} }>Decrement</button>
        </div>
    )
}

export default UseStateHookTwo

import React, {useReducer} from 'react'

const initialCount = 0;
const reducer = (state, action) => {
    switch(action){
        case  'increment' :
            return state + 1; 
        case 'decrement' :
            if(state <= 0){
                return initialCount;
            }else
                return state - 1;
        case 'reset' :
            return initialCount;
        default:
            return initialCount;
    }
}

function UseReducerCounterOne() {
    const [count, dispatch] = useReducer(reducer,initialCount);
    
    return (
        <div>
            <h2>Count Using Property</h2>
            <h2>{count}</h2>
            <button onClick={() => dispatch("increment")}>Increment</button> &nbsp;
            <button onClick={() => dispatch("decrement")}>Decrement</button> &nbsp;
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}

export default UseReducerCounterOne

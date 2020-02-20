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

function UseReducerCounterThree() {
    const [countOne, dispatch] = useReducer(reducer,initialCount);
    const [countTwo, dispatchTwo] = useReducer(reducer,initialCount);

    return (
        <div>
            <h2>Count One: {countOne}</h2>
            <button onClick={() => dispatch("increment")}>Increment</button> &nbsp;
            <button onClick={() => dispatch("decrement")}>Decrement</button> &nbsp;
            <button onClick={() => dispatch("reset")}>Reset</button>

            <h2>Count Two: {countTwo}</h2>
            <button onClick={() => dispatchTwo("increment")}>Increment</button> &nbsp;
            <button onClick={() => dispatchTwo("decrement")}>Decrement</button> &nbsp;
            <button onClick={() => dispatchTwo("reset")}>Reset</button>
        </div>
    )
}

export default UseReducerCounterThree

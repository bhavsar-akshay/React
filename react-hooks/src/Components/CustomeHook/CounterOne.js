import React from 'react'
import UseCounterHook from './UseCounterHook';

function CounterOne() {

    const [count, increment, decrement, reset] = UseCounterHook(0,1);

    return (
        <div>
            <h3> Count one: {count}</h3>
            <button onClick={increment}>Increse</button> &nbsp;&nbsp;
            <button onClick={decrement}>Decrese</button> &nbsp;&nbsp;
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne

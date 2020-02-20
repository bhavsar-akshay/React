import React from 'react'
import UseCounterHook from './UseCounterHook';

function CounterTwo() {
    const [count, increment, decrement, reset] = UseCounterHook(10,2);

    return (
        <div>
            <h3> Count Two: {count}</h3>
            <button onClick={increment}>Increse</button> &nbsp;&nbsp;
            <button onClick={decrement}>Decrese</button> &nbsp;&nbsp;
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo

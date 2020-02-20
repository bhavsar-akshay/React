import React, {useContext} from 'react'
import { CountContext } from '../../App';

function ComponentA() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <h3> Component A</h3>
            <button onClick={() => countContext.countDisptch("increment")}>Increment</button> &nbsp;
            <button onClick={() => countContext.countDisptch("decrement")}>Decrement</button> &nbsp;
            <button onClick={() => countContext.countDisptch("reset")}>Reset</button>
        </div>
    )
}

export default ComponentA

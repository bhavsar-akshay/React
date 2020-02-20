import React, {useContext} from 'react'
import { CountContext } from '../../App';

function ComponentF() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <h3> Component F</h3>
            <button onClick={() => countContext.countDisptch("increment")}>Increment</button> &nbsp;
            <button onClick={() => countContext.countDisptch("decrement")}>Decrement</button> &nbsp;
            <button onClick={() => countContext.countDisptch("reset")}>Reset</button>
        </div>
    )
}

export default ComponentF

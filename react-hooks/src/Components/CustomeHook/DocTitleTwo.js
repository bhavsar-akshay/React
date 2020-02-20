import React, {useState} from 'react'
import UseDocTitleHook from './UseDocTitle';

function DocTitleTwo() {
    const [count, setCount] = useState(0);
    
    UseDocTitleHook(count);

    return (
        <div>
            <button onClick={()=>{
                setCount(count+1)
            }}>Count Two: {count}</button>
        </div>
    )
}

export default DocTitleTwo

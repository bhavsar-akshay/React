import React, {useState} from 'react'
import UseDocTitleHook from './UseDocTitle';

function DocTitleOne() {
    const [count, setCount] = useState(0);

    UseDocTitleHook(count);

    return (
        <div>
            <button onClick={()=>{
                setCount(count+1)
            }}>Count One: {count}</button>
        </div>
    )
}

export default DocTitleOne

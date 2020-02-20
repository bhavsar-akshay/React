import React, {useState ,useEffect} from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("changed")
        document.title = `Count ${count} tiemes`
    }, [count])

    return (
        <div>
            <input type="text" onChange={(e) =>{
                setName(e.target.value);
            }}></input>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default UseEffectHook

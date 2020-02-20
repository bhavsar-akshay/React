import {useState} from 'react'

function UseCounterHook(initalCount = 0,value = 1) {
    const [count, setCount] = useState(initalCount);

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        if(count > 0){
            setCount(prevCount => prevCount - value)
        }
    }

    const reset = () => {
        setCount(initalCount)
    }

    return [count, increment, decrement, reset];
}

export default UseCounterHook

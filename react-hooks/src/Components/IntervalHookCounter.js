import React, {useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(prevcount => prevcount + 1);
    }

    useEffect(() =>{
       const interval = setInterval(increment,1000);

       return () =>{
            clearInterval(interval);
        }
    },[])

    return (
        <div>
            {count}        
        </div>
    )
}

export default IntervalHookCounter

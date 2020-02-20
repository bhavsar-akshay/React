import React, {useState, useMemo} from 'react'

function Counter() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const increseCountOne = () => {
        setCountOne(countOne + 1);
    }

    const increseCountTwo = () => {
        setCountTwo(countTwo + 5)
    }

    const isEven = useMemo(() =>{
        let i = 0;
        while(i < 900000000) i++;
        return countOne % 2 == 0;
    },[countOne]);
    
    return (
        <div>
            <button onClick={increseCountOne}>Count One: {countOne}</button>   &nbsp;&nbsp;&nbsp;
            <span> {isEven ? 'Even':'Odd'} </span>
            <br />
            <button onClick={increseCountTwo}>Count Two: {countTwo}</button>     
        </div>
    )
}

export default Counter

import React, {useEffect,useRef} from 'react'

function FocusInput() {
    const inputRef = useRef(null);

    useEffect(() =>{
        inputRef.current.focus();
    },[])

    const focusInput = () => { 
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef}></input> &nbsp;
            <button onClick={focusInput}>Focus</button>
        </div>
    )
}

export default FocusInput

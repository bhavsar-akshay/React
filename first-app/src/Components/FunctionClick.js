import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Functional handler")
    }

    return (
        <div>   
            <button onClick={clickHandler}>Function Click</button>
        </div>
    )
}

export default FunctionClick

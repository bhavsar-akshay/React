import React, {useReducer} from 'react'

const initialCount = {
    firstCount : 0,
    secondCount:10
};
const reducer = (state, action) => {
    switch(action.type){
        case  'increment' :            
            return {...state ,firstCount : state.firstCount + action.value };
        case 'decrement' :
            if(state.firstCount <= 0){
                return initialCount;
            }else{
                return {...state ,firstCount : state.firstCount - action.value };
            }
        case  'increment2' :            
            return {...state ,secondCount : state.secondCount + action.value };
        case 'decrement2' :
            if(state.firstCount <= 0){
                return initialCount;
            }else{
                return {...state ,secondCount : state.secondCount - action.value };
            }                
        case 'reset' :
            return initialCount;
        default:
            return state;
    }
}

function UseReducerCounterTwo() {
    const [count, dispatch] = useReducer(reducer,initialCount);

    return (
        <div>
            <h2>Count Using Object</h2>
            <h2>
                First Count: {count.firstCount}
                
            </h2>
            <button className='btn btn-primary' onClick={() => dispatch({type:"increment",value:1})}>Increment</button> &nbsp;
            <button className='btn btn-primary' onClick={() => dispatch({type:"decrement",value:1})}>Decrement</button> &nbsp;            

            <button className='btn btn-primary' onClick={() => dispatch({type:"increment",value:5})}>Increment 5</button> &nbsp;
            <button className='btn btn-primary' onClick={() => dispatch({type:"decrement",value:5})}>Decrement 5</button> &nbsp;
            
            <button className='btn btn-primary' onClick={() => dispatch({type:"reset"})}>Reset</button>

            <h2>
                Second Count: {count.secondCount}
            </h2>
            <button className='btn btn-primary' onClick={() => dispatch({type:"increment2",value:1})}>Increment</button> &nbsp;
            <button className='btn btn-primary' onClick={() => dispatch({type:"decrement2",value:1})}>Decrement</button> &nbsp;
        </div>
    )
}

export default UseReducerCounterTwo

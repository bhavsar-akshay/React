import React, {useReducer, useEffect} from 'react'
import axios from 'axios';

const initialState = {
    loading : true,
    post : {},
    error : ''
}

const reducer = (state,action) => {
    switch(action.type){
        case 'fetch-sucess':
            return{
                loading : false,
                post : action.payload,
                error : ''
            }
        case 'fetch-eroor':
            return{
                loading : false,
                post : {},
                error : 'something wrong'
            }
        default:
            return state;
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        axios.get('https://jsonplacehlder.typicode.com/posts/1')
        .then(response => {
            dispatch({type:'fetch-sucess',payload:response.data})
        })
        .catch(error => {
            dispatch({type:'fetch-eroor'})
        })
    },[])

    return (
        <div className={state.error ? 'text-danger' : ''}>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo

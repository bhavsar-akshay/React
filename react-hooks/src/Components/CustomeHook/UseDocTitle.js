import React, {useEffect} from 'react'

function UseDocTitleHook(count) {
    useEffect(()=>{
        document.title = `count ${count}`
    },[count])
}

export default UseDocTitleHook

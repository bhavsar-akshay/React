import React from 'react'

function NameList() {
    const names = ['aaa','bbb','ccc','ddd'];
    var nameList  = names.map(name => <h3>{name}</h3>);
    return (
        <div>
            {
                //names.map(name =>  <h3>{name}</h3> )
                nameList
            }                    
        </div>
    )
}

export default NameList


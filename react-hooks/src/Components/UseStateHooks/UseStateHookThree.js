import React, {useState} from 'react'

function UseStateHookThree() {
    const [name, setName] = useState({firstName:'', lastName:''})
    
    return (
        <form>
            <input type="text"  value={name.firstName} onChange={e => setName({...name, firstName : e.target.value}) } placeholder="First Name"></input>        
            <input type="text"  value={name.lastName} onChange={e => setName({...name, lastName : e.target.value}) } placeholder="Last Name"></input>        
            <h3> First Name: {name.firstName} </h3>
            <h3> Last Name: {name.lastName} </h3>
            {JSON.stringify(name)}
        </form>
    )
}

export default UseStateHookThree

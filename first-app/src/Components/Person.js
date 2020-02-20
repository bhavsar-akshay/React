import React from 'react'

function Person(props) {
    console.log(props);
    return (        
        <div>
            Id: {props.person.id}<br />
            Name: {props.person.name} <br/>
            Agr: {props.person.age} <br/>
            Skills: {props.person.skill} <br />
            Key property:{props.children}
            <hr></hr>
        </div>
    )
}

export default Person

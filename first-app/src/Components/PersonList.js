import React from 'react'
import Person from './Person';

function PersonList() {
    const persons = [
        {
            id: 1,
            name: 'aaaaa',
            age: 20,
            skill:'angualr' 
        },
        {
            id: 2,
            name: 'bbbbb',
            age: 25,
            skill:'java' 
        },
        {
            id: 3,
            name: 'ccccc',
            age: 30,
            skill:'.net' 
        },
        {
            id: 4,
            name: 'ddddd',
            age: 35,
            skill:'vue' 
        },
        {
            id: 5,
            name: 'eeeee',
            age: 40,
            skill:'react' 
        }
    ];

    var PersonList = persons.map((person,index) => <Person key={index} person={person}> <span>{index}</span> </Person> )

    return (
        <div>
            {PersonList}
        </div>
    )
}

export default PersonList

import React, { useState, useCallback } from 'react'
import Title from './Title';
import Button from './Button'
import Count from './Count';

function Parent() {
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(10000);

    const incrementAge = useCallback( () => {
        setAge(age + 1)
    },[age]) 

    const incrementSalary = useCallback( () => {
        setSalary(salary + 5000)
    },[salary])

    return (
        <div>
            <Title></Title>
            <Count text="Age" count={age}></Count>
            <Button handleClick={incrementAge}>Increse Age</Button>
            <Count text="Salary" count={salary}></Count>
            <Button handleClick={incrementSalary}>Increse Salary</Button>
        </div>
    )
}

export default Parent

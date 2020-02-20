import React, {useState} from 'react'

function UseStateHookFour() {
    const [items, setItem] = useState([]);

    const addItem = () => {
        setItem([...items,{
            id:items.length,
            value: Math.floor(Math.random() * 10)
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>          
                {
                    items.map(item =>(
                        <li key={item.id}> {item.value} </li>
                    ))
                }                   
        </div>
    )
}

export default UseStateHookFour

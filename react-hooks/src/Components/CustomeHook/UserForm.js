import React, {useState} from 'react'
import UseInput from './UseInput';

function UserForm() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const [firstName, bindFirstName, resetFirstName] = UseInput('');
    const [lastName, bindLastName, resetLastName] = UseInput('');

    const submitForm = (e) =>{
        e.preventDefault();

        alert(`Hellow ${firstName} ${lastName}`)

        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type='text' {...bindFirstName}></input>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type='text' {...bindLastName} ></input>
                </div>

                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm

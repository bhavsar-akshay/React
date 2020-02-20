import React  from 'react';

// function Greet(){
//     return <h1> Hello React </h1>;
// }

const Greet = ({name,id}) => {

    return (
        <div>
            <h1 className="abc">Greet from {name} ID = {id}</h1>                
        </div>
    )
}

export default Greet;
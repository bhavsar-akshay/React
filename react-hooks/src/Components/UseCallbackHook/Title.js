import React from 'react'

function Title() {
    console.log("render title")
    return (
        <div>
            <h2>Title Of Parent</h2>
        </div>
    )
}

export default React.memo(Title);

import React from 'react'

function Count({count}) {
    console.log("count Render")
    return (
        <div>
            {count}
        </div>
    )
}

export default React.memo(Count);

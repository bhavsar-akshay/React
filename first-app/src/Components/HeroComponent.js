import React from 'react'

function HeroComponent({heroName}) {
    // if(heroName == "jocker"){
    //     throw new Error("Not A hero") 
    // }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default HeroComponent

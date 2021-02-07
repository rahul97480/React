import React from 'react'

function FuctionCick() {
    function clickHandler() {
        console.log('Button Clicked ')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default FuctionCick

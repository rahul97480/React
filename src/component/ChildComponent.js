import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('xyz')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent

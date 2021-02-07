import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('parameter name as passed')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent

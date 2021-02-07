import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}. My skill is {person.skill}. My id is {person.id}</h2>
        </div>
    )
}

export default Person

import React from 'react'
import Person from './Person'

function ListRendering() {
    const persons = [
        {
        id : 1,
        name: 'Rahul',
        skill : 'React'
        },
        {
            id: 2,
            name: 'Mohan',
            skill: 'Angular'
        },
        {
            id:3,
            name: 'Sohan',
            skill: 'Laravel'
        }
    ]
    const personList = persons.map(person =><Person key={person.name} person={person} />) // map function to loop over the elements
    
    return (
        <div>
            {
                <h2>{personList}</h2>
            }
        </div>
    )
}

export default ListRendering

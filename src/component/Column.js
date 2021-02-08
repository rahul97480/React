import React from 'react'

function Column() {
    const  items = []
    return (
        <React.Fragment key={items.id}>
            {/*<td>Name</td> //can also use <> </> but cannot use Key  
            <td>Rahul</td>*/}
            <td>{items.title}</td>
            <td>Title</td>
        </React.Fragment>
    )
}

export default Column

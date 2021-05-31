import React from 'react'

function UseEffectAnother(props) {
    React.useEffect(()=>{
        // console.log("From the Another Use Effect ")
        alert("UseEffect Another")
    },[props.count])
    return (
        <div>
            <h1>Count Props: {props.count}</h1>
            <h1>Data Props: {props.data}</h1>
        </div>
    )
}

export default UseEffectAnother

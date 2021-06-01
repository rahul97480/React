import React,{useState} from 'react'

function ControlledComponent() {
    const [val,setVal] = useState("");
    return (
        <div>
            <h1>From the Controlled Component</h1>
            <input type="text"  defaultValue="100" onChange={(e)=>setVal(e.target.value)} /> 
        </div>
    )
}

export default ControlledComponent

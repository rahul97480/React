import React ,{useState} from 'react'

function PrevState() {
    const [count, setCount] = useState(1)
    function updateCounter(){
        let rand = Math.floor(Math.random()*10)
        setCount((pre)=>{
            console.log(pre);
            return rand ;
        })

    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={updateCounter}>Update Count</button>
        </div>
    )
}

export default PrevState

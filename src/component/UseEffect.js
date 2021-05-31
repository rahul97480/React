import React, { useEffect, useState } from 'react'
import UseEffectAnother from './UseEffectAnother'

function UseEffect() {
    const [count, setCount] = useState(100)
    const [data, setData] = useState(10)
    useEffect(()=>{                         //any number of useEffect can be used
        console.log("data")
    }, [data])
    useEffect(()=>{                         //any number of useEffect can be used
        console.log("count ")
    }, [count])
    return (
        <div>
            {/* <h1>count : {count}</h1>
            <h1>Data: {data}</h1> */}
            <UseEffectAnother count={count} data={data}/>
            <button onClick={()=>setCount(count+1)}>update Counter</button>
            <button onClick={()=>setData(data+1)}>update Data</button>
        </div>
    )
}

export default UseEffect

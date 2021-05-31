import React ,{useState} from 'react'

function Memoer() {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)

  const newApple=React.useMemo(   //will calll this only if this item is updated 
    function appleTime() {
      console.warn("Hello")
      return 100 * count;
    },[item])
    return (
        
        <div>
            <h1>Hooks in React {count}</h1>
            {newApple}
            <button onClick={() => setData(count + 1)}>Update State</button>
            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </div>
    )
}

export default Memoer

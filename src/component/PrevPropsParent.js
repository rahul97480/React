import React from 'react'
import PrevPropsChild from './PrevPropsChild'
function PrevPropsParent() {
  const [count,setCount]=React.useState(0)
  return (
    <div className="App">
      <PrevPropsChild count={count} />
      <button onClick={()=>{setCount( Math.floor(Math.random()*10) )}} >Update Counter</button>
    </div>
  );
}



export default PrevPropsParent;
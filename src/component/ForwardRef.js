import React, {useRef} from 'react'
import ForwardRefChild from './ForwardRefChild'

function ForwardRef() {
    const inputRef = useRef(null)
    function UpdateInput(){
        inputRef.current.value="1000";
    }
    return (
        <div>
            <h1>Forward Ref Parent Component</h1>
            <ForwardRefChild  ref={inputRef}/>
            <button onClick={UpdateInput}>Update InputBox</button>
        </div>
    )
}

export default ForwardRef

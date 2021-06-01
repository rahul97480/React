import React, {UseRef} from 'react'

function UseRefs() {
    const inputRef = React.useRef(null)
    function handleInput(){
        console.log("DSFf");
        inputRef.current.value = "1000";
        inputRef.current.focus();
        inputRef.current.style.color= "red";
    }
    return (
        <div>
            <h1>Use Ref Hook</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>Handle Input</button>
        </div>
    )
}

export default UseRefs

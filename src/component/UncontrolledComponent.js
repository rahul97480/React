import React, {useRef} from 'react'

function UncontrolledComponent() {
    let inputRef = useRef(null)
    let inputRef2 = useRef(null)
    
    function submitform(e){
        e.preventDefault();
        let data = document.getElementById('input3').value;
        console.log("input3 value :", data);
        console.log("form data : ", inputRef.current.value, inputRef.current.value )
    }
    return (
        <div>
            <h1>From uncontrolled Component</h1>
            <form onSubmit={submitform}>
                <input ref={inputRef} type="text" />
                <input  ref={inputRef2} type="text" />
                <input id="input3" type="text"  /> 
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent

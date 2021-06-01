import React, {forwardRef} from 'react'

function ForwardRefChild(props, refvalue) {
    return (
        <div>
            <input type="text" ref={refvalue}/>
        </div>
    )
}

export default forwardRef(ForwardRefChild)

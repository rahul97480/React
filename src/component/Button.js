import React from 'react'
import {CommonContext} from './CommonContext'

function Buttoner() {
    return (
        <div>
            <CommonContext.Consumer>
                {
                    ({updateColor})=>(
                        <>
                        <button onClick={()=>updateColor('Blue')}>Update Blue</button>
                        <button onClick={()=>updateColor('yellow')}>Update Yellow</button>
                        </>
                    )   
                }
            
            </CommonContext.Consumer>
            
        </div>
    )
}

export default Buttoner

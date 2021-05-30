import React, { Component } from 'react'
import CwMounter from './CwMounter'

export class CwMount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
    }
    
    render() {
        return (
            <div>
                {
                   this.state.show ? <CwMounter />:<h1>Mounter Removed</h1>
                }
                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle</button>
            </div>
        )
    }
}

export default CwMount

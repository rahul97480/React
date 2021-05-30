import React, { Component } from 'react'

export class shouldComponentUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    render() {
        return (
            <div>
                <h1>Should Coponent Update {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update Counter</button>
            </div>
        )
    }
}

export default shouldComponentUpdate

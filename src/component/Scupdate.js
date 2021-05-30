import React, { Component } from 'react'

export class Scupdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    shouldComponentUpdate(){
        console.log("h",this.state.count)
        if(this.state.count <5){ // condition 
            return true
        }
         // by default it is false 
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

export default Scupdate
//stops rendering 
import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello user'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Good Bye User'
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>Click Here!</button>*/}
                {/*<button onClick={() => this.clickHandler()}>Click Here </button>*/}
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        )
    }
}

export default Eventbind

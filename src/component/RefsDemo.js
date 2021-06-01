import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
             
        }
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)           //outputs the dom can change the Dom but React suggest to minimize the use of Ref
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text"  ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

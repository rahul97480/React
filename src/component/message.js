import React ,{ Component } from 'react'
class Message extends Component{
    constructor(){
        super() //to call the parent component of the react class i.e Component
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'thank you'
        })
    }
    render(){
        return(
            <div>
                 <h1>{this.state.message}</h1>
                 <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message
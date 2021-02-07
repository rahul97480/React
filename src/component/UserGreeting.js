import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: true
         }
     }
     
    render() {
        //approach 1
        return this.state.isLoggedIn && <div>Welcome User</div>

        //approach 2
        //return this.state.isLoggedIn ? (
        //    <div>Welcome User</div>
        //) : (
        //    <div>Welcome Guest</div>
        //)

        //approach 3
        //let message
        //if(this.state.isLoggedIn){
        //    message = <div>Welcome User</div>
        //}else{
        //    message = <div>Welcome Guest</div>
        //}

        //approach 4
        //return <div>{message}</div>
        {/*if(this.state.isLoggedIn){
        return (
            <div>
                <div>Welcome User</div>
                
            </div>
        )
    } else {
        return (
            <div>Welcome Guest</div>
        )
    }*/}
    }
}

export default UserGreeting

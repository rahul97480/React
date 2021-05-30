import React, { Component } from 'react'

export class CwMounter extends Component {
    componentWillUnmount(){
        alert("ComponentWill Unmount")
    }
    render() {
        return (
            <div>
                <h1>Component will Mounter </h1>
            </div>
        )
    }
}

export default CwMounter
//remove component  while caliimg api 
//data loading cancellng 
//settimeout cancel 


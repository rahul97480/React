import React, { Component } from 'react'

export class ReguarComp extends Component {
    render() {
        console.log('Regular component log')
        return (
            <div>
                Regular component {this.props.name}
            </div>
        )
    }
}

export default ReguarComp

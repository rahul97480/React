import React, { Component } from 'react'
import { CommonContext } from './CommonContext'

export class Main extends Component {
    render() {
        return (
            <div>
                <CommonContext.Consumer>
                    {
                        ({color})=>(
                            <h1 style={{backgroundColor:color}}>This is the main Page </h1>
                        )
                    }
                </CommonContext.Consumer>
            </div>
        )
    }
}

export default Main

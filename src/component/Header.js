import React, { Component } from 'react'
import { CommonContext } from './CommonContext'

export class HeaderTop extends Component {
    render() {
        return (
            <div>
                <CommonContext.Consumer>
                    {
                        ({color})=>(
                            <h1 style={{backgroundColor:color}}>This is the Header Page </h1>
                        )
                    }
                </CommonContext.Consumer>
            </div>
        )
    }
}

export default HeaderTop

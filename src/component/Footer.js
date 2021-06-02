import React, { Component } from 'react'
import { CommonContext } from './CommonContext'

export class Footer extends Component {
    render() {
        return (
            <div>
                <CommonContext.Consumer>
                    {
                        ({color})=>(
                            <h1 className="footer"style={{backgroundColor:color}}>This is the Footer Page </h1>
                        )
                    }
                </CommonContext.Consumer>
            </div>
        )
    }
}

export default Footer

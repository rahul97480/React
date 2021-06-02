import React, { Component } from 'react'
import {CommonContext}  from './CommonContext'
import Main from './Main'
import Buttoner from './Button'
import HeaderTop from './Header'
import Footer from './Footer'

export class First extends Component {
    constructor(){
       super()

       this.updateColor=(color)=>{
        this.setState({
             color:color
        })
    }

       this.state={
            color:"green",
            updateColor:this.updateColor
       } 
       
    }
    render() {
        return (
            <div>
                <CommonContext.Provider value= {this.state}>
                    <HeaderTop />
                    <CommonContext.Consumer>
                    {
                        ({color})=>(
                            <h1 style={{backgroundColor:color}}>This is the Body Componenet</h1>
                        )
                    }
                </CommonContext.Consumer>
                   
                    <Main />
                    <Buttoner />
                    <Footer />
                </CommonContext.Provider>
            </div>
        )
    }
}

export default First

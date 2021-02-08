import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

 class LifeCycle extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'Rahul'
         }
         console.log('Lifecycle Parent Constructor')
     }
     static getDerivedStateFromProps(props, state){
         console.log('LifeCycle Parent fom getDerivedStateFromProps')
         return null
     }
     componentDidMount() {
         console.log('Lifecycle Parent componentDidMount')
     }

     shouldComponentUpdate() {
         console.log('LifeCycle Parent shouldComponentUpdate')
         return true
     }

     getSnapshotBeforeUpdate (prevProps , prevState){
         console.log('LifeCycle Parent getSnapShotBeforeUpdate')
         return null
     }

     componentDidUpdate() {
         console.log('LifeCycle Parent componentDidUpdate')
     }
     
     changeState = () => {
         this.setState({
            name: 'Rahul'
         })
     }
    render() {
        console.log('LifeCycle Parent render ')
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleChild />
            </div>
        )
    }
}

export default LifeCycle

import React, { Component } from 'react'

 class LifeCycleChild extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'Rahul'
         }
         console.log('Lifecycle child Constructor')
     }
     static getDerivedStateFromProps(props, state){
         console.log('LifeCycle child fom getDerivedStateFromProps')
         return null
     }
     componentDidMount() {
         console.log('Lifecycle child componentDidMount')
     }
     shouldComponentUpdate() {
        console.log('LifeCycle Child shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate (prevProps , prevState){
        console.log('LifeCycle Child getSnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycle Child componentDidUpdate')
    }
     
    render() {
        console.log('LifeCycle child render ')
        return (
            <div>
                LifeCycle Child A
            </div>
        )
    }
}

export default LifeCycleChild

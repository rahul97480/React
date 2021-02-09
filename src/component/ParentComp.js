import React, { Component , PureComponent } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import ReguarComp from './ReguarComp'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Rahul'
         }
     }

     componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Rahul'
            })
        }, 2000)
     }
     
    render() {
        console.log('ParentComponent log')
        return (
            <div>
                Parent component
                <Memo name ={this.state.name} />
                {/*<ReguarComp name={this.state.name}></ReguarComp>
                <PureComp name={this.state.name} ></PureComp>*/}
            </div>
        )
    }
}

export default ParentComp

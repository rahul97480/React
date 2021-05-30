import React, { Component,setstate } from 'react'

export class CmpDidUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
             //name:"Rahul"
        }
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("Component did update",prevState,this.state.count);
        if(prevState == this.state.count){
            alert("Data in the log is same as the current count value ")
        }
        //should not update state in componentDidUpdate if we want to we should use with some condition
        //snashot value if defined then will give value else will give undefined value    
    }   
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* <h1>Compoonent Did update {this.state.name}</h1> */}
                {/* <button onClick={()=>this.setState({name:"Gupta"})}>Update</button> */}
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
            </div>

        )
    }
}

export default CmpDidUpdate
//consitional Api can be used 
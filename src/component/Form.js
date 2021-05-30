import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username: '',
              comments:''
         }
     }

     handlerUsername = (event) => {
        this.setState({
            username: event.target.value
            
        })
     }

     handlerComments = event => {
         this.setState({
             comments : event.target.value
         })
     }

     handleSkills = event => {
         this.setState({
             skills : event.target.value
             //alert(`${this.state.skills}`)
         })
     }
     handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.skills}`) //template literals
     }
     
    render() {
        const {username , comments ,skills }    = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type='text' value={username} onChange={this.handlerUsername} />
                </div>
                <br />
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handlerComments}></textarea>
                </div>
                <div>
                <label>Skills</label>
                <select value={skills} onChange={this.handleSkills}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
                </select>
                </div>
                <button type="submit">Sumbit</button>
            </form>
        )
    }
}

export default Form

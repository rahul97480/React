import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
    render() {
        console.log('Pure component log')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp

{/* Pure component can give Performace boost by preventing unecesscary re-renders
we use pure component only in class component  */}

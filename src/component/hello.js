import React from 'react'

const Hello = () => {
    //return (
    //<div>
      //  <h1>Hello from Hello.js</h1>
    //</div>
    //)
    return React.createElement('div', {id:'hello', className:'classhello'}, React.createElement('h1',null ,'Hello from hello.js file' ))
}
export default Hello
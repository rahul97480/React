import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function Routings() {
  return (
    <div className="App">
      <Router>
        <Link to="/" >Home</Link>
        <br></br>
        <Link to="/about" >About</Link>
        
        <Route path="/about"> <About /></Route>
        <Route path="/" exact={true}> <Home /></Route>

        <Route path="*" ><PageNotFound /> </Route>


      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is my Home Page</p>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my About Page</p>
    </div>
  )
}
function PageNotFound() {
  return (
    <div>
      <h1></h1>
      <p>not Found </p>
    </div>
  )
}
export default Routings;
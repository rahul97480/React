import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User1 from './User1'
function User() {
  let users=[
    {name:'anil',id:1},
    {name:'peter',id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4},
  ]
  return (
    <div className="App">
      <Router>
      <h1>React Dynamic Routing</h1>
      {
        users.map((item)=>
      <div><Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>)
      }
      <Route path="/user/:id/:name" ><User1 /></Route>
      </Router>
    </div>
  );
}
export default User;
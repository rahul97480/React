import logo from './logo.svg';
import './App.css';
//import Greet from './component/greet'
import Greet from './component/greet'
import { Children, PureComponent } from 'react';
//import Hello from './component/hello'
import Welcome from './component/Welcome'
import Message from './component/message'
import Counter from './component/counter'
import FunctionClick from './component/FuctionCick'
import Eventbind from './component/Eventbind'
import Parentcomponent from './component/ParentComponent'
import UserGreeting from './component/UserGreeting'
import ListRendering from './component/ListRendering'
import StyleSheet from './component/StyleSheet'
import Inline from './component/Inline'
import './appstyles.css'
import styles from './appstyles.module.css'
import Form from './component/Form'
import LifeCycle from './component/LifeCycle'
import Fragment from './component/Fragment'
import Table from './component/Table'
import PureComp from './component/PureComp'
import ParentComp from './component/ParentComp'
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/FocusInput';
import FRPInput from './FRPInput';
import  CmpDidUpdate from './component/CmpDidUpdate';
import Scupdate from './component/Scupdate';
import CwMount from './component/CwMount';
import CwMounter from './component/CwMounter';

function App() {
  return (
    <div className="App">
      {/*<PureComp />*/}
      {/*<Greet name='bruce' lastname='okhla'/>       //props
      <p>This is Children class</p>
      <Greet name='mohan'lastname='okhla'/>
      <button>Action</button> //buttons
      <Greet name='sohan'lastname='okhla'/>
      <button>Esa</button>
      <Welcome name='sohan'lastname='okhla'/>         //props
      <Welcome name='sohan'lastname='okhla'/>
      <Message/>                                      //states in class component
      <Counter />                                     //states in clss component
      <Eventbind />                                   //event handler
      <FunctionClick />
      <Parentcomponent />                             //this keyword and child component function 
      <UserGreeting />                                //if else conditional Rendering
      <ListRendering />                               //map function               
      <h1 className="error">Error</h1>                //stylesheets
      <h1 className={styles.success}>Success</h1>     //stylesheets
      <StyleSheet />
      <Inline />
      <Form />                                        //form validation states and all 
      <LifeCycle />                                   //Lifecycle 
      <Fragment />                                    //instead of div <> </>
      <Table />                                         
      <ParentComp />                                  //Component did Mount  Lifecycle
       <ParentComp />
       <CmpDidUpdate />                               //component did update
       <Scupdate />                                   //Should component update          
       <CwMount />                                    //cpomonent will unmount 
       <RefsDemo />  

       <FocusInput />
       <FRPInput />
      {/*<PureComp />*/}
      
      {/*<Hello />*/}
      
    </div>
  );
}

export default App;

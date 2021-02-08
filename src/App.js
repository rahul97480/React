import logo from './logo.svg';
import './App.css';
//import Greet from './component/greet'
import Greet from './component/greet'
import { Children } from 'react';
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
import Table from './component/Table';

function App() {
  return (
    <div className="App">
      
      {/*<Greet name='bruce' lastname='okhla'/>
      <p>This is Children class</p>
      <Greet name='mohan'lastname='okhla'/>
      <button>Action</button>
      <Greet name='sohan'lastname='okhla'/>
      <button>Esa</button>
      <Welcome name='sohan'lastname='okhla'/>
      <Welcome name='sohan'lastname='okhla'/>
      <Message/>
      <Counter />
      <Eventbind />
      <FunctionClick />
      <Parentcomponent />
      <UserGreeting />
      <ListRendering />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <StyleSheet />
      <Inline />
      <Form />
      <LifeCycle />
      <Fragment />
      <Table />
      {/*<Hello />*/}
    
    </div>
  );
}

export default App;

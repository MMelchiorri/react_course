import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentCompoent from './components/ParentCompoent';
import NamedList from './components/namedList';

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome /> */}
      {/*<Counter />*/}
      {/*<EventBind />*/}
      {/*<Hello name={'Marco'}>
        <h1>This is first children</h1>
        <h2>this is second children</h2>
      </Hello>*/}
      {/*<FunctionClick />*/}
      {/*<Hello name={'Daniele'} />*/}
      {/*<Hello name={'Davide'} />*/}
      {/*<Message />*/}
      {/*<ParentCompoent />*/}
      <NamedList />
    </div>
  );
}

export default App;

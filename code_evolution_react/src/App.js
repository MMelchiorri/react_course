import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome /> */}
      <Counter />
      <Hello name={'Marco'}>
        <h1>This is first children</h1>
        <h2>this is second children</h2>
      </Hello>
      {/*<Hello name={'Daniele'} />*/}
      {/*<Hello name={'Davide'} />*/}
      <Message />
    </div>
  );
}

export default App;

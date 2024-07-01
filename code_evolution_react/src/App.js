import './App.css';
import React from 'react';
import Counter1Reducer from './components/Function/Counter1Reducer';
import Counter2Reducer from './components/Function/Counter2Reducer';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/*<Counter1Reducer />*/}
      <Counter2Reducer />
    </div>
  );
}

export default App;

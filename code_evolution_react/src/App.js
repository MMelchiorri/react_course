import './App.css';
import React, { createContext } from 'react';
import ComponentA from './components/Function/ComponentA';
import ComponentB from './components/Function/ComponentB';
import ComponentC from './components/Function/ComponentC';
import { useReducer } from 'react';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1;
    case 'decrement':
      return currentState - 1;
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
};

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;

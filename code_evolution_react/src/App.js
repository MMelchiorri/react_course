import './App.css';
import React from 'react';
import CreateContextWithHookA from './components/Function/CreateContextWithHookA';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Marco'}>
        <ChannelContext.Provider value={'Code Evolution'}>
          <CreateContextWithHookA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

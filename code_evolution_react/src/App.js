import './App.css';
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value={'Marco'}>
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;

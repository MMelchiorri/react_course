import './App.css';
import ClickCounter from './components/ClickCounter';
import CounterThree from './components/CounterThree';
function App() {
  return (
    <div className="App">
      <CounterThree>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </CounterThree>
    </div>
  );
}

export default App;

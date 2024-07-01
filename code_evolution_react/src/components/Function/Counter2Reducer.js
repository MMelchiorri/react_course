import React, { useReducer } from 'react';

const initialState = { firstCount: 0, secondCount: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, firstCount: state.firstCount + 1 };
    case 'decrement1':
      return { ...state, firstCount: state.firstCount - 1 };
    case 'increment2':
      return { ...state, secondCount: state.secondCount + 1 };
    case 'decrement2':
      return { ...state, secondCount: state.secondCount - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function Counter2Reducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firstCount}</div>
      <div>Count - {count.secondCount}</div>
      <button onClick={() => dispatch({ type: 'increment1' })}>
        Increment1
      </button>
      <button onClick={() => dispatch({ type: 'decrement1' })}>
        Decrement1
      </button>
      <button onClick={() => dispatch({ type: 'increment2' })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: 'decrement2' })}>
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter2Reducer;

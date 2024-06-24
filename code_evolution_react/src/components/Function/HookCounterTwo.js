import React, { useState } from 'react';

function HookCounterTwo() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      Count: {count}
      <br />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        incrementCount
      </button>
      <br />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        DecrementCount
      </button>
      <br />
      <button
        onClick={() => {
          setCount(initialValue);
        }}
      >
        Reset
      </button>
      <br />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 5);
        }}
      >
        Increment 5
      </button>
    </div>
  );
}

export default HookCounterTwo;

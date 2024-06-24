import React, { useState, useEffect } from 'react';

function HookCounterUseEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('Update document title');
    document.title = `You clicked ${count} times`;
  }, [count]); //array of values where array dependes on
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>
        Add a count by One. Count clicked {count} times
      </button>
    </div>
  );
}

export default HookCounterUseEffectOne;

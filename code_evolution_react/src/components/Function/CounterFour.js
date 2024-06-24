import React, { useState } from 'react';

function CounterFour() {
  const [items, setItems] = useState([]);

  return (
    <div>
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
      <button
        onClick={() => {
          setItems([
            ...items,
            {
              id: items.length,
              value: Math.floor(Math.random() * 10) + 1,
            },
          ]);
        }}
      >
        Add an item
      </button>
    </div>
  );
}

export default CounterFour;

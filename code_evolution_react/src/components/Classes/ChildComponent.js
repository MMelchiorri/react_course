import React from 'react';

export default function ChildComponent({ method }) {
  return (
    <div>
      <button onClick={method}>Click me</button>
    </div>
  );
}

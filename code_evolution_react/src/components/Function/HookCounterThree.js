import React, { useState } from 'react';

function StateObject() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => {
          e.preventDefault();
          setName({ ...name, firstName: e.target.value });
        }}
        placeholder="insert your first name"
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => {
          e.preventDefault();
          setName({ ...name, lastName: e.target.value });
        }}
        placeholder="insert your lastname"
      />
      <br />
      <button
        onClick={() => {
          console.log(name.firstName);
          console.log(name.lastName);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default StateObject;

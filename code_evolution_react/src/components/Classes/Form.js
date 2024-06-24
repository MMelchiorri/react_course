import React, { useState } from 'react';

export default function Form() {
  const [name, selectName] = useState('');
  const [topic, selectTopic] = useState('');

  const handleSubmit = (e) => {
    alert('this is handle submit');
    e.preventDefault();
  };
  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        value={name}
        onChange={(e) => selectName(e.target.value)}
      />
      <div>
        <label>Topic</label>
        <select onChange={(e) => selectTopic(e.target.value)}>
          <option value="react">react</option>
          <option value="vue">angular</option>
          <option value="angular">vue</option>
        </select>
      </div>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}

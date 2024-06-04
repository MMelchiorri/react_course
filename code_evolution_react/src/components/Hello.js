import React from 'react';

const Hello = (props) => {
  const { name, children } = props;
  return (
    <div className="greetings">
      <h1>Hello, {name}</h1>
      {children}
    </div>
  );
};

export default Hello;

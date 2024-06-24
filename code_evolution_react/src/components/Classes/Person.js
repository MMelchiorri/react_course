import React from 'react';

export default function Person({ person }) {
  return (
    <div>
      <h1>{`I am ${person.name} i'm ${person.age} years old and i live in ${person.city}`}</h1>
    </div>
  );
}

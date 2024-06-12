import React from 'react';
import Person from './Person';

const arrayPeople = [{ name: 'Marco', age: '34', city: 'Rome' }];

export default function NamedList() {
  return (
    <div>
      {arrayPeople.map((person) => {
        return <Person person={person} />;
      })}
    </div>
  );
}

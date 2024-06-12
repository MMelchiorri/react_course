import React from 'react';
import Person from './Person';

const arrayPeople = [{ id: '1', name: 'Marco', age: '34', city: 'Rome' }];

export default function NamedList() {
  return (
    <div>
      {arrayPeople.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </div>
  );
}

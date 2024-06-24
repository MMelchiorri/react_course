import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentCompoent() {
  const parentName = 'Marco';

  const getParent = () => {
    alert(`this is ${parentName}`);
  };

  return (
    <div>
      <ChildComponent method={getParent} />
    </div>
  );
}

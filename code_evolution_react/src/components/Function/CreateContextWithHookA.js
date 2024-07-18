import React, { useContext } from 'react';
import CreateContextWithHookB from './CreateContextWithHookB';

function CreateContextWithHookA() {
  return (
    <div>
      <CreateContextWithHookB />
    </div>
  );
}

export default CreateContextWithHookA;

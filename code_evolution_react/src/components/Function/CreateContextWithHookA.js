import React, { useContext } from 'react';
import CreateContextWithHookB from './CreateContextWithHookB';
import { ChannelContext, UserContext } from '../../App';

function CreateContextWithHookA() {
  return (
    <div>
      <CreateContextWithHookB />
    </div>
  );
}

export default CreateContextWithHookA;

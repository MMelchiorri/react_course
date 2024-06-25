import React, { useContext } from 'react';
import CreateContextWithHookB from './CreateContextWithHookB';
import { ChannelContext, UserContext } from '../../App';

function CreateContextWithHookA() {
  const channel = useContext(ChannelContext);
  const user = useContext(UserContext);
  return (
    <div>
      <CreateContextWithHookB />
    </div>
  );
}

export default CreateContextWithHookA;

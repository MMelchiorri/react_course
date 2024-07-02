import React, { useContext } from 'react';
import { ChannelContext, UserContext } from '../../App';

function CreateContextWithHookC() {
  const channel = useContext(ChannelContext);
  const user = useContext(UserContext);
  return (
    <div>
      User {user} channel - {channel}
    </div>
  );
}

export default CreateContextWithHookC;

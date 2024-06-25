import React from 'react';
import { ChannelContext, UserContext } from '../../App';

function ContextWithoutHooksC() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    UserContext value is {user} channel context value is{' '}
                    {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ContextWithoutHooksC;

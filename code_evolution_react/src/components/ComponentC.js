import React, { Component } from 'react';
import { UserConsumer } from './userContext';

export default class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(username) => {
            return <h1>Hello {username}</h1>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

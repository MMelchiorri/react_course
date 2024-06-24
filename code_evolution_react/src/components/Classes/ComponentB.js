import React, { Component } from 'react';
import UserContext from './userContext';
import ComponentC from './ComponentC';

export default class ComponentB extends Component {
  render() {
    return (
      <div>
        Component B = {this.context}
        <ComponentC />
      </div>
    );
  }
}

ComponentB.contextType = UserContext;

import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

export default class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Marco' };
    console.log('Lifecycle A constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedFromState');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount A');
  }

  render() {
    console.log('Lifecycle A');
    return <div>Lifecycle A</div>;
    <LifecycleB />;
  }
}

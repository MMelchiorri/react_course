import React, { Component } from 'react';

export default class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Marco' };
    console.log('Lifecycle B constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedFromState');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount B');
  }

  render() {
    console.log('Lifecycle B');
    return <div>Lifecycle A</div>;
  }
}

import React, { Component } from 'react';

export default class RegularComponent extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

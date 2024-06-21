import React, { Component } from 'react';

export default class User extends Component {
  render() {
    console.log(this.props.name);
    return <div>{this.props.render(false)}</div>;
  }
}

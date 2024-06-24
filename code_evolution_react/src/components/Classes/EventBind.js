import React, { Component } from 'react';

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = { message: 'hello bind' };
  }

  changeMessage = () => {
    this.setState({ message: 'changed message' });
  };

  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.changeMessage.bind(this)}>Click Bind</button>
      </div>
    );
  }
}

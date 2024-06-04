import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'welcome visitors',
    };
  }
  changeMessage = () => {
    this.setState({ message: 'Thank you for subscribe' });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;

import React, { Component } from 'react';

export class HoverCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>
          Hover {this.state.count} times
        </h2>
      </div>
    );
  }
}

export default HoverCounter;

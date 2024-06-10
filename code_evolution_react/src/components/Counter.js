import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState(
      /* {
        count: (this.state.count += +1),
      },
      () => {
        console.log(this.state.count);
      }*/
      (prevState) => ({ count: (prevState.count += 5) })
    );
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.increment()}>increment</button>
      </div>
    );
  }
}

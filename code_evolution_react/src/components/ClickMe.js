import React, { Component } from 'react';
import withCounter from './withCounter';

export class ClickMe extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked button {count} times</button>
      </div>
    );
  }
}

export default withCounter(ClickMe);

import React, { PureComponent } from 'react';

export class PureComp extends PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default PureComp;

import React, { Component } from 'react';
import RegularComponent from './RegularComponent';
import PureComp from './PureComponents';

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Marco',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'Daniele' });
    }, 2000);
  }
  render() {
    return (
      <div>
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

import React from 'react';

import Command from './Command.jsx';

class CLI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ visible: true }); }, this.props.delay*100);
  }

  render() {
    return (
      this.state.visible &&
        <Command>{this.props.children}</Command>
    )
  }
}

export default CLI;

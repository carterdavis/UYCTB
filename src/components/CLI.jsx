import React from 'react';

import Pp from './Pp.jsx';

class CLI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ visible: true }); console.log(this.props.delay); }, this.props.delay*100);
  }

  render() {
    return (
      this.state.visible &&
        <Pp c="command">{this.props.children}</Pp>
    )
  }
}

export default CLI;

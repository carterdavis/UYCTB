import React from 'react';
import { ReactHeight } from 'react-height';
import VisibilitySensor from 'react-visibility-sensor';

import { update } from './../state.js';

class Cloak extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setHeight = this.setHeight.bind(this);
  }

  setHeight(height) {
    this.setState({ height: height });
  }

  render() {
    const visibility = <VisibilitySensor onChange={(visible) => { if (visible) update(this.props.num)} } />

    const uncloaked = ((this.props.num >= this.props.appState.beginning - 2)
      && (this.props.num <= this.props.appState.end + 2)) || this.state.height === undefined;

    return (
      <div class="chapter" style={this.state}>
        <ReactHeight onHeightReady={height => this.setHeight(height)}>
          { uncloaked && React.createElement(this.props.chapter[0], {id: this.props.chapter[1], setHeight: this.setHeight}, visibility)}
        </ReactHeight>
      </div>
    )
  }
}

export default Cloak;

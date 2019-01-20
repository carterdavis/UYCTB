import React from 'react';
import { ReactHeight } from 'react-height';
import VisibilitySensor from 'react-visibility-sensor';

import { update } from './../state.js';

class Cloak extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoips: {} };
    this.baseState = this.state;
    this.setHeight = this.setHeight.bind(this);
    this.setZoip = this.setZoip.bind(this);
  }

  componentDidMount() {
    this.setState(this.baseState);
  }

  setZoip(sequence, place = 0) {
    this.setState({
      zoips: {
        [sequence]: place
      }
    });
  }

  setHeight(height) {
    if (height != 0) this.setState({ height: height });
  }

  render() {
    const visibility = <VisibilitySensor onChange={(visible) => { if (visible) update(this.props.num)} } />

    const uncloaked = ((this.props.num >= this.props.appState.current - 7)
      && (this.props.num <= this.props.appState.current + 7)) || this.state.height === undefined;

    const props = {
      state: this.state,
      chapter: this.props.num
    }

    return (
      <div class="chapter" style={this.state} id={this.props.chapter[1] + '_' + this.props.num}>
        <ReactHeight onHeightReady={height => this.setHeight(height)}>
          { uncloaked && React.createElement(this.props.chapter[0], props, visibility)}
        </ReactHeight>
      </div>
    )
  }
}

export default Cloak;

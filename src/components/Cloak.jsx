import React from 'react';
import { ReactHeight } from 'react-height';
import VisibilitySensor from 'react-visibility-sensor';

import { update } from './../state.js';

class Cloak extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.setHeight = this.setHeight.bind(this);
  }

  setHeight(height) {
    if (height != 0) this.setState({ height: height });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return ((nextProps.num >= nextProps.appState.current - 5)
  //     && (nextProps.num <= nextProps.appState.current + 5)) || this.state.height === undefined;
  // }

  render() {
    const visibility = <VisibilitySensor onChange={(visible) => { if (visible) update(this.props.num)} } />

    const uncloaked = ((this.props.num >= this.props.appState.current - 7)
      && (this.props.num <= this.props.appState.current + 7)) || this.state.height === undefined;

    const chapterProps = {
      state: this.props.appState,
      num: this.props.num
    }

    return (
      <div class="chapter" style={this.state} id={this.props.chapter[1] + '_' + this.props.num}>
        <ReactHeight onHeightReady={height => this.setHeight(height)}>
          { uncloaked && React.createElement(this.props.chapter[0], chapterProps, visibility)}
        </ReactHeight>
      </div>
    )
  }
}

export default Cloak;

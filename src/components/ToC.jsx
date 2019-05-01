import React from 'react';
import ClickOutside from 'react-click-outside'

import { getToC } from './../state.js';

class ToC extends React.Component {
  constructor(props) {
      super(props);
  }

  handleClickOutside() {
    if (this.props.visible) {
      this.props.toggle();
    }
  }

  render() {
    const visibility = this.props.visible ? 'visible' : 'hidden';

    return (
      <div class={`toc ${visibility}`}>
        <button class="x" onClick={(e) => {this.props.toggle(); e.stopPropagation();}}>x</button>
        <h2>Table of Contents</h2>
        <ol start="0">
          { getToC(this.props.toggle) }
        </ol>
      </div>
    )
  }
}

export default ClickOutside(ToC);

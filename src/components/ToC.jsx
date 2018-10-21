import React from 'react';
import ClickOutside from 'react-click-outside'

import { getToC } from './../state.js';

class ToC extends React.Component {
  constructor(props) {
      super(props);
      this.state = { open: false };
      this.toggle = this.toggle.bind(this);
  }

  handleClickOutside() {
    if (this.state.open) {
      this.toggle();
    }
  }

  toggle(target) {
    this.setState({ open: !this.state.open });
  }

   render() {
     return (
      <div class="toc-wrapper">
        <a class="toc-link" onClick={() => { this.toggle() }}>
          <h2>Table of Contents</h2>
        </a>
        <ol class="toc" start="0">
          { this.state.open &&
             getToC(this.toggle)
          }
        </ol>
      </div>
    )
  }
}

export default ToC;

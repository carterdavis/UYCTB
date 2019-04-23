import React from 'react';
import ClickOutside from 'react-click-outside'
import { iOSversion } from './../state.js';

class Snip extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setWrapperRef = element => {
      this.wrapper = element;
    };
    this.state = { open: false, left: 0 };
  }

  handleClickOutside() {
    if (this.state.open) {
      this.toggle();
    }
  }

  componentDidMount() {
    this.setLeft()
  }

  componentDidUpdate(prevProps) {
    if (this.props.screenWidth !== prevProps.screenWidth) {
      this.setLeft();
    }
  }

  setLeft() {
    if (this.wrapper) {
      const box = this.wrapper.getBoundingClientRect();
      this.setState({ left: box.left });
    }
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

   render() {
     const open = this.state.open ? 'open' : '';
     const ver = iOSversion() || false;
     const variableLeft = ver && (ver[0] < 11) ? 'initial' : `${this.state.left}px`;
     const leftStyle = this.state.open ? '50%' : variableLeft;

     return (
      <div class="snippet-wrapper" ref={this.setWrapperRef}>
        <div class={`snippet ${open}`} onClick={() => { this.toggle() }} style={{ borderColor: this.props.bg || 'red', left: leftStyle }}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default ClickOutside(Snip);
